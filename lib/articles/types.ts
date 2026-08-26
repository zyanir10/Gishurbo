/** A span of text, optionally emphasised by the author. */
export type Run = { t: string; b?: boolean };

/** Plain text when nothing is emphasised, otherwise a list of runs. */
export type Rich = string | Run[];

export type Block =
  | { type: "h"; text: string }
  | { type: "p"; text: Rich }
  | { type: "quote"; text: Rich }
  | { type: "list"; items: Rich[]; ordered?: boolean }
  | { type: "table"; head: string[]; rows: string[][] };

/** The body of an article, as produced by the .docx converter. */
export interface ArticleBody {
  lead: Rich;
  blocks: Block[];
  keywords: string[];
}

export interface Article extends ArticleBody {
  slug: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  /** ISO date — drives sorting and <time datetime>. */
  dateISO: string;
  featured?: boolean;
  /** Written by the centre rather than reproduced — badged on the card. */
  original?: boolean;
  author: string;
  authorImage: string;
  byline: string;
  /** Set on articles uploaded through the admin page. */
  uploaded?: boolean;
  /** Original file, offered as a download alongside the web version. */
  sourceUrl?: string;
}

const HEBREW_MONTHS = [
  "בינואר",
  "בפברואר",
  "במרץ",
  "באפריל",
  "במאי",
  "ביוני",
  "ביולי",
  "באוגוסט",
  "בספטמבר",
  "באוקטובר",
  "בנובמבר",
  "בדצמבר",
];

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${d.getUTCDate()} ${HEBREW_MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** Drops emphasis, for summaries, counts and metadata. */
export function plain(rich: Rich): string {
  return typeof rich === "string" ? rich : rich.map((r) => r.t).join("");
}

export function blockText(b: Block): string {
  if (b.type === "list") return b.items.map(plain).join(" ");
  if (b.type === "table") return [b.head, ...b.rows].flat().join(" ");
  return plain(b.text);
}

/** Roughly 200 words per minute, floored at one minute. */
export function readingTime(article: ArticleBody): string {
  const words = [plain(article.lead), ...article.blocks.map(blockText)]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} דקות קריאה`;
}

export function tableOfContents(article: ArticleBody): string[] {
  return article.blocks
    .filter((b): b is { type: "h"; text: string } => b.type === "h")
    .map((b) => b.text);
}

/** Card summary, taken from the article's own opening paragraph. */
export function excerptOf(article: ArticleBody, max = 165): string {
  const lead = plain(article.lead).trim();
  if (lead.length <= max) return lead;
  const cut = lead.slice(0, max);
  const stop = Math.max(cut.lastIndexOf("."), cut.lastIndexOf(","));
  return (stop > max * 0.5 ? cut.slice(0, stop) : cut.trimEnd()) + "…";
}
