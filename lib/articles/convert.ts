import mammoth from "mammoth";

import type { ArticleBody, Block, Rich, Run } from "./types";

/** Paragraphs longer than this are body copy even when fully bold. */
const HEADING_MAX = 80;
const KEYWORDS_MARKER = "מילות מפתח";

const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&nbsp;": " ",
};

function toText(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z#0-9]+;/gi, (e) => ENTITIES[e] ?? e)
    .replace(/‏|‎/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function tidy(text: string): string {
  return text
    // Word drops the space after punctuation when a sentence spans two runs.
    .replace(/(?<=[֐-׿])([,:;])(?=[֐-׿])/g, "$1 ")
    .replace(/\(\s+(\d{4})\s+\)/g, "($1)")
    .replace(/\s+([,.:;])/g, "$1");
}

/**
 * Splits a paragraph's inner HTML into runs, keeping the spans the author
 * emphasised. Returns a plain string when nothing inside is emphasised.
 */
function toRich(inner: string): Rich {
  const runs: Run[] = [];
  const pattern = /<(strong|b|em|i)[^>]*>([\s\S]*?)<\/>|([\s\S]+?)(?=<(?:strong|b|em|i)|$)/g;

  for (const m of inner.matchAll(pattern)) {
    const bold = Boolean(m[1]);
    const text = toText(bold ? m[2] : m[3] ?? "");
    if (!text) continue;
    const last = runs.at(-1);
    if (last && Boolean(last.b) === bold) last.t += text;
    else runs.push(bold ? { t: text, b: true } : { t: text });
  }

  // Emphasis should wrap words, not the spaces around them.
  runs.forEach((run, i) => {
    if (!run.b) return;
    if (run.t.startsWith(" ") && i > 0) {
      run.t = run.t.replace(/^ +/, "");
      runs[i - 1].t += " ";
    }
    if (run.t.endsWith(" ") && i + 1 < runs.length) {
      run.t = run.t.replace(/ +$/, "");
      runs[i + 1].t = " " + runs[i + 1].t.replace(/^ +/, "");
    }
  });

  const cleaned = runs
    .map((r) => ({ ...r, t: tidy(r.t.replace(/ {2,}/g, " ")) }))
    .filter((r) => r.t);
  if (!cleaned.length) return "";
  if (cleaned.every((r) => r.b) || cleaned.every((r) => !r.b))
    return cleaned.map((r) => r.t).join("");
  return cleaned;
}

/** A paragraph that is entirely bold and short is being used as a heading. */
function isStyledHeading(inner: string, text: string): boolean {
  if (!text || text.length > HEADING_MAX) return false;
  const stripped = inner.replace(/<\/?(strong|b)>/g, "");
  return stripped !== inner && toText(stripped) === text;
}

/**
 * Converts an uploaded .docx into the same block structure the built-in
 * articles use, so both render through one code path.
 */
export async function docxToArticleBody(
  buffer: Buffer,
  options: { dropFirstHeading?: boolean } = {}
): Promise<ArticleBody> {
  const { value: html } = await mammoth.convertToHtml({ buffer });

  const blocks: Block[] = [];
  const keywords: string[] = [];
  let inKeywords = false;

  const elements = html.matchAll(
    /<(h[1-6]|p|ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/g
  );

  for (const [, tag, inner] of elements) {
    if (tag === "table") {
      const rows = [...inner.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)]
        .map(([, tr]) =>
          [...tr.matchAll(/<(td|th)[^>]*>([\s\S]*?)<\/>/g)].map(([, , cell]) =>
            tidy(toText(cell))
          )
        )
        .filter((row) => row.some(Boolean));
      if (rows.length > 1) blocks.push({ type: "table", head: rows[0], rows: rows.slice(1) });
      continue;
    }

    if (tag === "ul" || tag === "ol") {
      const items = [...inner.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/g)]
        .map(([, li]) => toRich(li))
        .filter((item) => (typeof item === "string" ? item : item.length));
      if (!items.length) continue;
      if (inKeywords)
        keywords.push(
          ...items.map((i) => (typeof i === "string" ? i : i.map((r) => r.t).join("")))
        );
      else if (blocks.at(-1)?.type === "list")
        (blocks.at(-1) as { items: Rich[] }).items.push(...items);
      else blocks.push({ type: "list", items, ordered: tag === "ol" });
      continue;
    }

    const text = tidy(toText(inner));
    if (!text) continue;

    if (text.includes(KEYWORDS_MARKER) && text.length <= HEADING_MAX) {
      inKeywords = true;
      continue;
    }
    if (inKeywords) {
      keywords.push(text);
      continue;
    }

    const heading =
      (/^h[1-6]$/.test(tag) && text.length <= HEADING_MAX) ||
      isStyledHeading(inner, text);

    // Headings are emphasised throughout, so they carry no inner emphasis.
    blocks.push(heading ? { type: "h", text } : { type: "p", text: toRich(inner) });
  }

  // The document usually opens with its own title; the page renders that.
  if (options.dropFirstHeading && blocks[0]?.type === "h") blocks.shift();

  let lead: Rich = "";
  const firstParagraph = blocks.findIndex((b) => b.type === "p");
  if (firstParagraph !== -1) {
    lead = (blocks[firstParagraph] as { text: Rich }).text;
    blocks.splice(firstParagraph, 1);
  }

  return { lead, blocks, keywords };
}
