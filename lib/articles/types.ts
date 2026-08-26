export type Block =
  | { type: "h"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

/** The body of an article, as produced by the .docx converter. */
export interface ArticleBody {
  lead: string;
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

export function blockText(b: Block): string {
  return b.type === "list" ? b.items.join(" ") : b.text;
}

/** Roughly 200 words per minute, floored at one minute. */
export function readingTime(article: ArticleBody): string {
  const words = [article.lead, ...article.blocks.map(blockText)]
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
  const lead = article.lead.trim();
  if (lead.length <= max) return lead;
  const cut = lead.slice(0, max);
  const stop = Math.max(cut.lastIndexOf("."), cut.lastIndexOf(","));
  return (stop > max * 0.5 ? cut.slice(0, stop) : cut.trimEnd()) + "…";
}
