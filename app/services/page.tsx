import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { c } from "@/lib/content";

export const metadata: Metadata = {
  title: "שירותים | מרכז הבוררות והגישור באילת",
  description:
    "שירותי גישור, בוררות ותיאום הורי — פתרונות ADR מקצועיים לכל סוג סכסוך.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="w-16 h-px bg-gold mb-6" />
            <h1 className="text-5xl font-bold text-white mb-4">
              {c["services.header.title"]}
            </h1>
            <p className="text-white/55 text-xl">
              {c["services.header.subtitle"]}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mediation */}
      <SectionWrapper className="bg-white">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <div className="w-12 h-px bg-gold mb-4" />
              <h2 className="text-3xl font-bold text-navy mb-2">
                {c["services.mediation.title"]}
              </h2>
              <p className="text-gray-500 text-lg">
                {c["services.mediation.subtitle"]}
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md mt-6 md:mt-0">
              <Image src="/bridge-mediation.jpeg" alt="גישור — גשר בין הצדדים" width={600} height={240} className="w-full h-[200px] md:h-[240px] object-cover" />
            </div>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <FadeIn key={i} delay={i * 70}>
              <div className="border border-gray-100 rounded-xl p-7 hover:border-gold hover:shadow-md transition-all duration-300 border-t-4 border-t-gold h-full">
                <h3 className="font-bold text-navy text-lg mb-3">
                  {c[`services.mediation.${i}.title`]}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {c[`services.mediation.${i}.desc`]}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Arbitration */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
              <div>
                <div className="w-12 h-px bg-gold mb-4" />
                <h2 className="text-3xl font-bold text-navy mb-2">
                  {c["services.arbitration.title"]}
                </h2>
                <p className="text-gray-500 text-lg">
                  {c["services.arbitration.subtitle"]}
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md mt-6 md:mt-0">
                <Image src="/scales-arbitration.jpeg" alt="בוררות — מאזניים" width={600} height={240} className="w-full h-[200px] md:h-[240px] object-cover" />
              </div>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {[0, 1, 2, 3].map((i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-gold transition-all duration-300 h-full">
                  <h3 className="font-bold text-navy text-lg mb-3">
                    {c[`services.arbitration.${i}.title`]}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {c[`services.arbitration.${i}.desc`]}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Parental Coordination */}
      <SectionWrapper className="bg-white">
        <FadeIn>
          <div className="relative border border-gold/30 rounded-2xl p-10 md:p-14 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold" aria-hidden="true" />
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full mb-6">
                  בקרוב
                </span>
                <div className="w-12 h-px bg-gold mb-6" />
                <h2 className="text-3xl font-bold text-navy mb-4">
                  {c["services.parental.title"]}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  {c["services.parental.body"]}
                </p>
                <div className="flex flex-col gap-4">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-gold mt-0.5 shrink-0">◆</span>
                      <span className="text-gray-600 text-sm leading-relaxed">
                        {c[`services.parental.${i}`]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md mt-8 md:mt-0">
                <Image src="/Family-Holding.png" alt="תיאום הורי" width={600} height={400} className="w-full h-[240px] md:h-[400px] object-cover" />
              </div>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">
              {c["services.cta.title"]}
            </h2>
            <p className="text-white/50 mb-8">
              {c["services.cta.subtitle"]}
            </p>
            <Button href="/contact" variant="primary">
              {c["services.cta.button"]}
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
