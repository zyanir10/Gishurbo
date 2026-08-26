import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import {
  excerptOf,
  formatDate,
  getArticle,
  getArticles,
  readingTime,
  seedSlugs,
  tableOfContents,
  type Block,
  type Rich,
} from "@/lib/articles";

/** Renders a paragraph, keeping the emphasis the author applied in Word. */
function RichText({ value }: { value: Rich }) {
  if (typeof value === "string") return <>{value}</>;
  return (
    <>
      {value.map((run, i) =>
        run.b ? (
          <strong key={i} className="font-bold text-navy">
            {run.t}
          </strong>
        ) : (
          <span key={i}>{run.t}</span>
        )
      )}
    </>
  );
}

// Uploaded articles are not known at build time, so their pages render on
// demand and are then cached alongside the prerendered ones.
export const revalidate = 60;

export async function generateStaticParams() {
  return seedSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "מאמר לא נמצא | מרכז הידע" };

  const description = excerptOf(article, 155);
  return {
    title: `${article.title} | מרכז הידע`,
    description,
    keywords: article.keywords.length ? article.keywords : undefined,
    openGraph: {
      title: article.title,
      description,
      type: "article",
      publishedTime: article.dateISO,
      images: [article.image],
    },
  };
}

function headingId(text: string, i: number) {
  return `sec-${i}-${text.replace(/\s+/g, "-").slice(0, 40)}`;
}

function ArticleBlock({ block, id }: { block: Block; id?: string }) {
  switch (block.type) {
    case "h":
      return (
        <h2
          id={id}
          className="font-bold text-navy text-2xl leading-snug mt-11 mb-4 scroll-mt-32"
        >
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote
          className="my-10 p-8 bg-gray-50 rounded-2xl"
          style={{ borderRight: "3px solid #C9A646" }}
        >
          <p className="font-bold text-navy text-xl leading-relaxed">
            <RichText value={block.text} />
          </p>
        </blockquote>
      );
    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List className="flex flex-col gap-3 my-2 mb-7">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="text-gold shrink-0 mt-1 font-bold tabular-nums"
                aria-hidden="true"
              >
                {block.ordered ? `${i + 1}.` : "◆"}
              </span>
              <span className="text-gray-700 leading-relaxed">
                <RichText value={item} />
              </span>
            </li>
          ))}
        </List>
      );
    }
    case "table":
      return (
        <div className="my-8 -mx-6 px-6 overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-sm">
            <thead>
              <tr>
                {block.head.map((cell, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="bg-navy text-white font-bold text-right p-3 first:rounded-r-lg last:rounded-l-lg"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="even:bg-gray-50">
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={`p-3 border-b border-gray-100 ${
                        i === row.length - 1
                          ? "font-semibold text-navy"
                          : "text-gray-700 tabular-nums"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return (
        <p className="text-gray-700 leading-[1.85] mb-5">
          <RichText value={block.text} />
        </p>
      );
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const toc = tableOfContents(article);
  const related = (await getArticles())
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  let headingIndex = -1;

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <nav
            aria-label="מיקום בעמוד"
            className="flex items-center gap-2.5 text-white/55 text-sm mb-6 flex-wrap"
          >
            <Link href="/knowledge" className="hover:text-gold transition-colors">
              מרכז הידע
            </Link>
            <span className="text-gold" aria-hidden="true">
              ›
            </span>
            <Link
              href="/knowledge#articles"
              className="hover:text-gold transition-colors"
            >
              מאמרים
            </Link>
            <span className="text-gold" aria-hidden="true">
              ›
            </span>
            <span className="text-white/80">{article.category}</span>
          </nav>

          <div className="max-w-[820px]">
            <FadeIn>
              <div className="w-16 h-px bg-gold mb-5" />
              <h1 className="text-3xl md:text-[38px] font-extrabold text-white leading-tight mb-6">
                {article.title}
              </h1>
              <div className="flex items-center gap-4 flex-wrap">
                <div
                  className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10 shrink-0"
                  style={{ border: "1px solid #C9A646" }}
                >
                  <Image
                    src={article.authorImage}
                    alt=""
                    fill
                    className="object-contain p-1"
                    sizes="48px"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-white font-semibold">
                    {article.author}
                  </span>
                  <span className="text-white/55 text-sm">
                    <time dateTime={article.dateISO}>
                      {formatDate(article.dateISO)}
                    </time>
                    {" · "}
                    {readingTime(article)}
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-14 items-start">
          {/* Table of contents */}
          {toc.length > 0 && (
            <aside className="hidden lg:flex sticky top-32 flex-col gap-3.5">
              <span
                className="text-gray-500 text-xs font-semibold"
                style={{ letterSpacing: "2px" }}
              >
                בעמוד זה
              </span>
              <div className="w-10 h-px bg-gold" />
              {toc.map((text, i) => (
                <a
                  key={i}
                  href={`#${headingId(text, i)}`}
                  className="text-gray-500 text-sm leading-snug pr-3 border-r-2 border-gray-100 hover:text-gold hover:border-gold transition-colors"
                >
                  {text}
                </a>
              ))}
              <div className="h-px bg-gray-100 my-2" />
              <Link
                href="/knowledge#articles"
                className="text-gold text-sm font-semibold hover:text-gold/80 transition-colors"
              >
                → חזרה למרכז הידע
              </Link>
            </aside>
          )}

          <article className="max-w-[720px]">
            <p className="text-navy text-xl font-semibold leading-relaxed mb-9">
              <RichText value={article.lead} />
            </p>

            {article.blocks.map((block, i) => {
              if (block.type === "h") headingIndex += 1;
              return (
                <ArticleBlock
                  key={i}
                  block={block}
                  id={
                    block.type === "h"
                      ? headingId(block.text, headingIndex)
                      : undefined
                  }
                />
              );
            })}

            {article.sourceUrl && (
              <a
                href={article.sourceUrl}
                className="inline-flex items-center gap-2 mt-8 text-gold text-sm font-semibold hover:text-gold/80 transition-colors"
              >
                ↓ להורדת המסמך המקורי
              </a>
            )}

            {/* Author card */}
            <div className="flex items-center gap-5 mt-14 p-7 bg-gray-50 rounded-2xl">
              <div
                className="relative w-16 h-16 rounded-full overflow-hidden bg-white shrink-0"
                style={{ border: "2px solid #C9A646" }}
              >
                <Image
                  src={article.authorImage}
                  alt=""
                  fill
                  className="object-contain p-1.5"
                  sizes="64px"
                />
              </div>
              <div>
                <span className="block font-bold text-navy text-lg mb-1.5">
                  {article.author}
                </span>
                <p className="text-gray-500 text-sm leading-relaxed">
                  הליכים אלטרנטיביים ליישוב סכסוכים — מקצועיים, יעילים
                  ודיסקרטיים, למשפחות, לעסקים ולקהילה.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-navy shrink-0">
                מאמרים נוספים
              </h2>
              <div className="flex-1 h-px bg-gold" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((a, i) => (
                <FadeIn key={a.slug} delay={i * 80}>
                  <Link
                    href={`/knowledge/${a.slug}`}
                    className="flex flex-col gap-2.5 h-full bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                    style={{ borderRight: "3px solid #C9A646" }}
                  >
                    <span className="text-gold text-xs font-bold">
                      {a.category}
                    </span>
                    <h3 className="text-navy text-lg font-bold leading-snug">
                      {a.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                      {excerptOf(a, 120)}
                    </p>
                    <span className="text-gray-500 text-xs">
                      {readingTime(a)}
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-3">
              מתמודדים עם סכסוך ורוצים לבחון את האפשרויות?
            </h2>
            <p className="text-gold mb-8">
              נשמח לשמוע ולהתאים את ההליך המתאים לכם.
            </p>
            <Button href="/contact" variant="primary">
              לקביעת פגישת ייעוץ
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
