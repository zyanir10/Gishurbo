import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import { c } from "@/lib/content";

export const metadata: Metadata = {
  title: "תהליך | מרכז הבוררות והגישור באילת",
  description:
    "ארבעה שלבים פשוטים מהפנייה הראשונה ועד להסכם הסופי. כך עובד תהליך הגישור והבוררות במרכז.",
};

const stepNums = ["01", "02", "03", "04"];

export default function ProcessPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-px bg-gold mb-6" />
                <h1 className="text-5xl font-bold text-white mb-4">
                  {c["process.header.title"]}
                </h1>
                <p className="text-white/55 text-xl">
                  {c["process.header.subtitle"]}
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl mt-8 md:mt-0">
                <Image src="/table-painting.png" alt="תהליך הגישור" width={600} height={260} className="w-full h-[200px] md:h-[260px] object-cover object-[50%_65%]" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="space-y-20">
            {stepNums.map((num, i) => (
              <FadeIn key={num} delay={i * 80}>
                <div className="grid md:grid-cols-[180px_1fr] gap-10 items-start">
                  <div className="text-center md:text-right">
                    <div className="text-8xl font-bold text-gold/20 leading-none select-none">
                      {num}
                    </div>
                  </div>
                  <div className="border-r-4 border-gold pr-8">
                    <h2 className="text-2xl font-bold text-navy mb-4">
                      {c[`process.${i}.title`]}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-7">
                      {c[`process.${i}.desc`]}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[0, 1, 2, 3].map((j) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {c[`process.${i}.detail.${j}`]}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {i < stepNums.length - 1 && (
                  <div
                    className="hidden md:block w-px h-12 bg-gold/20 mt-6"
                    style={{ marginRight: "calc(180px / 2)" }}
                    aria-hidden="true"
                  />
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeIn>
            <div className="w-16 h-px bg-navy/30 mx-auto mb-8" />
            <h2 className="text-3xl font-bold text-navy mb-4">
              {c["process.cta.title"]}
            </h2>
            <p className="text-navy/60 mb-8">
              {c["process.cta.subtitle"]}
            </p>
            <Button href="/contact" variant="dark">
              {c["process.cta.button"]}
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
