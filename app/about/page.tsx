import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import EditableText from "@/components/EditableText";

export const metadata: Metadata = {
  title: "אודות | מרכז הבוררות והגישור באילת",
  description:
    "היכרות עם מרכז הבוררות והגישור באילת ועם המייסדת עו\"ד מיכל זמרן — מגשרת ובוררת מוסמכת.",
};

const aboutStats = [
  { numKey: "about.stats.0.num", labelKey: "about.stats.0.label" },
  { numKey: "about.stats.1.num", labelKey: "about.stats.1.label" },
  { numKey: "about.stats.2.num", labelKey: "about.stats.2.label" },
  { numKey: "about.stats.3.num", labelKey: "about.stats.3.label" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="w-16 h-px bg-gold mb-6" />
            <h1 className="text-5xl font-bold text-white mb-4">
              <EditableText contentKey="about.header.title" />
            </h1>
            <p className="text-white/55 text-xl">
              <EditableText contentKey="about.header.subtitle" />
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About the center */}
      <SectionWrapper className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div className="w-16 h-px bg-gold mb-8" />
            <h2 className="text-3xl font-bold text-navy mb-6">
              <EditableText contentKey="about.center.title" />
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <EditableText contentKey="about.center.p1" />
            </p>
            <p className="text-gray-500 leading-relaxed">
              <EditableText contentKey="about.center.p2" />
            </p>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="grid grid-cols-2 gap-6">
              {aboutStats.map(({ numKey, labelKey }) => (
                <div
                  key={numKey}
                  className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 hover:border-gold transition-colors duration-300"
                >
                  <div className="text-3xl font-bold text-gold mb-2">
                    <EditableText contentKey={numKey} />
                  </div>
                  <div className="text-navy text-sm font-medium">
                    <EditableText contentKey={labelKey} />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Vision */}
      <section className="bg-navy py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-px bg-gold mx-auto mb-8" />
              <h2 className="text-3xl font-bold text-white mb-8">
                <EditableText contentKey="about.vision.title" />
              </h2>
              <p className="text-white/70 text-xl leading-relaxed">
                <EditableText contentKey="about.vision.body" />
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Michal */}
      <SectionWrapper className="bg-white">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-16 h-px bg-gold mb-6" />
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                <EditableText contentKey="about.founder.label" />
              </p>
              <h2 className="text-3xl font-bold text-navy mb-2">
                <EditableText contentKey="about.founder.name" />
              </h2>
              <p className="text-gray-500 mb-8">
                <EditableText contentKey="about.founder.role" />
              </p>
              <ul className="space-y-4 mb-10">
                {[0, 1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-1 shrink-0">◆</span>
                    <span className="text-gray-600 leading-relaxed">
                      <EditableText contentKey={`about.founder.${i}`} />
                    </span>
                  </li>
                ))}
              </ul>
              <blockquote className="border-r-4 border-gold pr-6 py-2">
                <p className="text-gold text-xl font-semibold">
                  &quot;<EditableText contentKey="about.founder.quote" />&quot;
                </p>
              </blockquote>
            </div>

            {/* Photo placeholder */}
            <div className="bg-gray-100 rounded-2xl aspect-[4/5] flex flex-col items-center justify-center border border-gray-200">
              <div className="text-7xl mb-4" aria-hidden="true">
                👤
              </div>
              <p className="text-gray-400 text-sm">תמונה בקרוב</p>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gold py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy mb-6">
              <EditableText contentKey="about.cta.title" />
            </h2>
            <Button href="/contact" variant="dark">
              <EditableText contentKey="about.cta.button" />
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
