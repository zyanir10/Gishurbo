import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { c } from "@/lib/content";
import {
  excerptOf,
  formatDate,
  getArticles,
  getFeatured,
  readingTime,
} from "@/lib/articles";

// Picks up articles uploaded through /admin without needing a redeploy.
export const revalidate = 60;

export const metadata: Metadata = {
  title: "מרכז הידע | מרכז הבוררות והגישור באילת",
  description:
    "הרצאות, קורסים וסדנאות בתחומי הגישור, הבוררות ויישוב הסכסוכים — לארגונים, מוסדות ואנשים פרטיים.",
};

function MicIcon({ size = 8 }: { size?: number }) {
  return (
    <svg
      className={`w-${size} h-${size} text-gold`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

function SchoolIcon({ size = 8 }: { size?: number }) {
  return (
    <svg
      className={`w-${size} h-${size} text-gold`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function UsersIcon({ size = 8 }: { size?: number }) {
  return (
    <svg
      className={`w-${size} h-${size} text-gold`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function DocIcon({ size = 8 }: { size?: number }) {
  return (
    <svg
      className={`w-${size} h-${size} text-gold`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="13" y2="17" />
    </svg>
  );
}

export default async function KnowledgePage() {
  const [articles, featured] = await Promise.all([getArticles(), getFeatured()]);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[56%_44%] gap-8 md:gap-12 items-center">
            {/* Text column — right in RTL desktop, bottom on mobile */}
            <div className="order-last md:order-first">
              <FadeIn>
                <div className="w-16 h-px bg-gold mb-5" />
                <span
                  className="block text-gold font-bold uppercase mb-4"
                  style={{ letterSpacing: "3px", fontSize: "22px" }}
                >
                  {c["knowledge.hero.kicker"]}
                </span>
                <h1 className="text-3xl font-bold text-white mb-6">
                  {c["knowledge.hero.title"]}
                </h1>
                <p className="text-white/80 text-xl leading-relaxed">
                  {c["knowledge.hero.desc.prefix"]}
                  <strong className="text-gold font-bold">
                    {c["knowledge.hero.desc.bold1"]}
                  </strong>
                  {c["knowledge.hero.desc.mid"]}
                  <br />
                  {c["knowledge.hero.desc.prefix2"]}
                  <strong className="text-gold font-bold">
                    {c["knowledge.hero.desc.bold2"]}
                  </strong>
                  {c["knowledge.hero.desc.suffix"]}
                </p>
              </FadeIn>
            </div>

            {/* Image column — left in RTL desktop, top on mobile */}
            {/* Featured article */}
            <div className="order-first md:order-last">
              <FadeIn delay={150}>
                <Link
                  href={`/knowledge/${featured.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] transition-colors duration-300"
                  style={{ border: "2px solid #C9A646" }}
                >
                  <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                    <Image
                      src={featured.image}
                      alt={featured.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      quality={100}
                      sizes="(max-width: 768px) 100vw, 44vw"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                        מאמר נבחר
                      </span>
                      <span className="text-white/55 text-xs">
                        {featured.category} · {readingTime(featured)}
                      </span>
                    </div>
                    <h2 className="text-white text-2xl font-bold leading-tight mb-3">
                      {featured.title}
                    </h2>
                    <p className="text-white/75 text-sm leading-relaxed mb-6">
                      {excerptOf(featured)}
                    </p>
                    <span className="inline-flex items-center gap-2 bg-gold text-navy font-semibold text-sm px-6 py-3 rounded group-hover:bg-gold/90 transition-colors duration-200">
                      לקריאת המאמר
                      <span aria-hidden="true">←</span>
                    </span>
                  </div>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-3 gap-0">
            {(
              [
                { Icon: MicIcon, i: 0 },
                { Icon: SchoolIcon, i: 1 },
                { Icon: UsersIcon, i: 2 },
              ] as const
            ).map(({ Icon, i }) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 text-center flex flex-col items-center gap-1.5 hover:shadow-md hover:border-gold transition-all duration-300" style={{ maxWidth: "160px", margin: "0 auto" }}>
                  <Icon size={4} />
                  <h3 className="font-bold text-navy text-base">
                    {c[`knowledge.stats.${i}.label`]}
                  </h3>
                  <p className="text-gold font-semibold text-sm">
                    {c[`knowledge.stats.${i}.value`]}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <SectionWrapper className="bg-white" id="articles">
        <FadeIn>
          <div className="flex items-center gap-4 mb-3">
            <DocIcon size={7} />
            <h2 className="text-3xl font-bold text-navy shrink-0">מאמרים</h2>
            <div className="flex-1 h-px bg-gold" />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-[620px]">
            מאמרים מקצועיים בתחומי הגישור, הבוררות ויישוב הסכסוכים, מתעדכנים
            באופן שוטף.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <FadeIn key={article.slug} delay={i * 80}>
              <Link
                href={`/knowledge/${article.slug}`}
                className="group flex flex-col h-full bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:border-gold hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-[200px] overflow-hidden bg-gray-50">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="absolute top-3 right-3 bg-navy/90 text-gold text-xs font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-2.5 flex-1">
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <time dateTime={article.dateISO}>
                      {formatDate(article.dateISO)}
                    </time>
                    <span className="text-gold">·</span>
                    <span>{readingTime(article)}</span>
                  </div>
                  <h3 className="text-navy text-lg font-bold leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {excerptOf(article, 140)}
                  </p>
                  <span className="text-gold text-sm font-semibold mt-1">
                    המשך קריאה ←
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Lectures */}
      <SectionWrapper className="bg-gray-50">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <MicIcon size={7} />
            <h2 className="text-3xl font-bold text-navy shrink-0">
              {c["knowledge.lectures.title"]}
            </h2>
            <div className="flex-1 h-px bg-gold" />
          </div>
        </FadeIn>
        <div className="flex flex-col gap-6">
          {[0, 1, 2].map((i) => (
            <FadeIn key={i} delay={i * 80}>
              <div
                className="rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ borderRight: "3px solid #C9A646" }}
              >
                <h3 className="font-bold text-navy text-lg mb-3">
                  {c[`knowledge.lectures.${i}.title`]}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {c[`knowledge.lectures.${i}.desc`]}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Courses & Workshops */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Courses */}
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                <div className="flex items-center gap-3 mb-2">
                  <SchoolIcon size={7} />
                  <h2 className="text-2xl font-bold text-navy">
                    {c["knowledge.courses.title"]}
                  </h2>
                </div>
                <p className="text-gold font-semibold text-sm mb-6">
                  {c["knowledge.courses.subtitle"]}
                </p>
                <ul className="flex flex-col gap-4">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gold shrink-0 mt-0.5">◆</span>
                      <span className="text-gray-600 text-sm leading-relaxed">
                        {c[`knowledge.courses.${i}`]}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <span className="text-gold shrink-0 mt-0.5">◆</span>
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {c["knowledge.courses.3"]}
                      <span className="inline-block bg-gold text-navy text-xs font-bold px-2 py-0.5 rounded-full mr-2">
                        {c["knowledge.courses.3.badge"]}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Workshops */}
            <FadeIn delay={120}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                <div className="flex items-center gap-3 mb-2">
                  <UsersIcon size={7} />
                  <h2 className="text-2xl font-bold text-navy">
                    {c["knowledge.workshops.title"]}
                  </h2>
                </div>
                <p className="text-gold font-semibold text-sm mb-6">
                  {c["knowledge.workshops.subtitle"]}
                </p>
                <ul className="flex flex-col gap-4">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gold shrink-0 mt-0.5">◆</span>
                      <span className="text-gray-600 text-sm leading-relaxed">
                        {c[`knowledge.workshops.${i}`]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-3">
              {c["knowledge.cta.title"]}
            </h2>
            <p className="text-gold mb-8">{c["knowledge.cta.subtitle"]}</p>
            <Button href="/contact" variant="primary">
              {c["knowledge.cta.button"]}
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
