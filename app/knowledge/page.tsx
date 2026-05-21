import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { c } from "@/lib/content";

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

export default function KnowledgePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#1E2A38" }} className="pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 md:gap-12 items-center">
            {/* Text column — right in RTL desktop, bottom on mobile */}
            <div className="order-last md:order-first">
              <FadeIn>
                <span
                  className="block text-gold font-semibold uppercase mb-4"
                  style={{ letterSpacing: "3px", fontSize: "12px" }}
                >
                  {c["knowledge.hero.kicker"]}
                </span>
                <h1 className="text-gold font-bold mb-6" style={{ fontSize: "28px" }}>
                  {c["knowledge.hero.title"]}
                </h1>
                <p className="text-white leading-relaxed mb-8">
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/contact" variant="primary">
                    {c["knowledge.hero.cta1"]}
                  </Button>
                  <Button href="/contact" variant="outline">
                    {c["knowledge.hero.cta2"]}
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Image column — left in RTL desktop, top on mobile */}
            <div className="order-first md:order-last">
              <FadeIn delay={150}>
                <div
                  className="relative overflow-hidden rounded-2xl h-[280px] md:h-[420px]"
                  style={{ border: "2px solid #C9A646" }}
                >
                  <Image
                    src="/lecture.png"
                    alt="הרצאות וסדנאות"
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to left, #1E2A38 0%, transparent 40%)",
                    }}
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <SectionWrapper className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(
            [
              { Icon: MicIcon, i: 0 },
              { Icon: SchoolIcon, i: 1 },
              { Icon: UsersIcon, i: 2 },
            ] as const
          ).map(({ Icon, i }) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center flex flex-col items-center gap-3 hover:shadow-md hover:border-gold transition-all duration-300">
                <Icon />
                <h3 className="font-bold text-navy text-lg">
                  {c[`knowledge.stats.${i}.label`]}
                </h3>
                <p className="text-gold font-semibold text-sm">
                  {c[`knowledge.stats.${i}.value`]}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Lectures */}
      <SectionWrapper className="bg-white">
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
      <section className="bg-gray-50 py-24">
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
      <section style={{ backgroundColor: "#1E2A38" }} className="py-20">
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
