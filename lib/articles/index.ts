import { list } from "@vercel/blob";

import aiMediation from "./content/ai-mediation.json";
import conflictAsOpportunity from "./content/conflict-as-opportunity.json";
import hrConflictResearch from "./content/hr-conflict-research.json";
import organizationalConflict from "./content/organizational-conflict.json";
import type { Article, ArticleBody } from "./types";

export * from "./types";

export const BLOB_PREFIX = "articles/";

const CENTER = {
  author: "המרכז ליישוב סכסוכים באילת",
  authorImage: "/Logo.png",
  byline: "בוררות וגישור באילת",
};

/**
 * Articles that ship with the site. Their bodies are generated from the source
 * .docx files by scripts/extract_articles.py — edit the documents and re-run it
 * rather than editing the JSON by hand.
 */
const SEED: Article[] = [
  {
    ...(conflictAsOpportunity as ArticleBody),
    ...CENTER,
    slug: "conflict-as-opportunity",
    title: "כשהקונפליקט הופך להזדמנות",
    category: "גישור ויישוב סכסוכים",
    image: "/bridge-mediation.jpeg",
    imageAlt: "מגשר משלים גשר בין שני צדדים",
    dateISO: "2026-08-18",
    featured: true,
  },
  {
    ...(organizationalConflict as ArticleBody),
    ...CENTER,
    slug: "organizational-conflict",
    title: "יישוב קונפליקטים במרחב הארגוני",
    category: "ארגונים וניהול",
    image: "/table-painting.png",
    imageAlt: "צדדים חותמים על הסכם סביב שולחן בליווי מגשרת",
    dateISO: "2026-08-04",
  },
  {
    ...(hrConflictResearch as ArticleBody),
    slug: "hr-conflict-research",
    title:
      "תקציר מחקר: תפיסת תפקיד של מנהלי משאבי אנוש וסגנונם לניהול הקונפליקטים",
    category: "מחקר",
    image: "/scales-arbitration.jpeg",
    imageAlt: "מאזני צדק — איזון בין שני צדדים",
    dateISO: "2026-07-07",
    author: "ד\"ר רוני מש ואסנת אדלר",
    authorImage: "/osnat.png",
    byline: "פורסם בכתב העת Journal of Sociology and Social Work, 2018",
    sourceUrl: "/research-hr-conflict-management.pdf",
  },
  {
    ...(aiMediation as ArticleBody),
    ...CENTER,
    slug: "ai-mediation",
    title: "גישור ובינה מלאכותית: טכנולוגיה בשירות הקשר האנושי",
    category: "חדשנות וטכנולוגיה",
    image: "/net-characters.jpeg",
    imageAlt: "רשת של דמויות המחוברות זו לזו",
    dateISO: "2026-07-21",
  },
];

function isArticle(value: unknown): value is Article {
  const a = value as Article;
  return (
    !!a &&
    typeof a.slug === "string" &&
    typeof a.title === "string" &&
    Array.isArray(a.blocks)
  );
}

/**
 * Articles uploaded through /admin. Returns an empty list when blob storage
 * has not been connected yet, so the site still renders its built-in articles.
 */
async function uploadedArticles(): Promise<Article[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return [];

  try {
    const { blobs } = await list({ prefix: BLOB_PREFIX });
    const loaded = await Promise.all(
      blobs
        .filter((b) => b.pathname.endsWith(".json"))
        .map(async (b): Promise<Article | null> => {
          const res = await fetch(b.url, { cache: "no-store" });
          if (!res.ok) return null;
          const data: unknown = await res.json();
          return isArticle(data) ? { ...data, uploaded: true } : null;
        })
    );
    return loaded.filter((a): a is Article => a !== null);
  } catch (err) {
    // Never let a storage hiccup take down the knowledge centre.
    console.error("Failed to load uploaded articles:", err);
    return [];
  }
}

export async function getArticles(): Promise<Article[]> {
  const uploaded = await uploadedArticles();
  const bySlug = new Map<string, Article>();
  // Uploaded articles win, so a re-upload can correct a built-in one.
  for (const a of [...SEED, ...uploaded]) bySlug.set(a.slug, a);

  return [...bySlug.values()].sort((a, b) =>
    b.dateISO.localeCompare(a.dateISO)
  );
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  return (await getArticles()).find((a) => a.slug === slug);
}

/** The article shown in the knowledge-centre hero. */
export async function getFeatured(): Promise<Article> {
  const articles = await getArticles();
  return articles.find((a) => a.featured) ?? articles[0];
}

export function seedSlugs(): string[] {
  return SEED.map((a) => a.slug);
}
