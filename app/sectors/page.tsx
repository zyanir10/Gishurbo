import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import EditableText from "@/components/EditableText";

export const metadata: Metadata = {
  title: "קהלי יעד | מרכז הבוררות והגישור באילת",
  description:
    "המרכז מציע פתרונות ADR לאנשים פרטיים, עסקים, עורכי דין וגופים ציבוריים.",
};

const sectorIcons = ["👨‍👩‍👧", "🏢", "⚖️", "🏛️"];
const sectorBgs = ["bg-white", "bg-gray-50", "bg-white", "bg-gray-50"];

export default function SectorsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="w-16 h-px bg-gold mb-6" />
            <h1 className="text-5xl font-bold text-white mb-4">
              <EditableText contentKey="sectors.header.title" />
            </h1>
            <p className="text-white/55 text-xl">
              <EditableText contentKey="sectors.header.subtitle" />
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sectors */}
      {sectorIcons.map((icon, i) => (
        <section key={i} className={`${sectorBgs[i]} py-24`}>
          <div className="max-w-[1200px] mx-auto px-6">
            <FadeIn delay={i % 2 === 0 ? 0 : 80}>
              <div
                className={`grid md:grid-cols-2 gap-16 items-center ${
                  i % 2 === 1 ? "md:[direction:ltr]" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:[direction:rtl]" : ""}>
                  <div className="text-5xl mb-6" aria-hidden="true">
                    {icon}
                  </div>
                  <div className="w-12 h-px bg-gold mb-4" />
                  <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">
                    <EditableText contentKey={`sectors.${i}.subtitle`} />
                  </p>
                  <h2 className="text-3xl font-bold text-navy mb-5">
                    <EditableText contentKey={`sectors.${i}.title`} />
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    <EditableText contentKey={`sectors.${i}.desc`} />
                  </p>
                  <Button href="/contact" variant="primary">
                    לפרטים נוספים
                  </Button>
                </div>
                <div className={i % 2 === 1 ? "md:[direction:rtl]" : ""}>
                  <div className="bg-navy rounded-2xl p-8">
                    <h3 className="text-gold font-semibold mb-5 text-sm uppercase tracking-wider">
                      <EditableText contentKey="sectors.services.label" />
                    </h3>
                    <ul className="space-y-4">
                      {[0, 1, 2, 3, 4].map((j) => (
                        <li key={j} className="flex items-center gap-3 text-white/70 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          <EditableText contentKey={`sectors.${i}.services.${j}`} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-gold py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy mb-4">
              <EditableText contentKey="sectors.cta.title" />
            </h2>
            <p className="text-navy/60 mb-8">
              <EditableText contentKey="sectors.cta.subtitle" />
            </p>
            <Button href="/contact" variant="dark">
              <EditableText contentKey="sectors.cta.button" />
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
