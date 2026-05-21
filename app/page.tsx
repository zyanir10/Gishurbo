import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { c } from "@/lib/content";
import FaqAccordion from "@/components/FaqAccordion";
import HomeContactForm from "@/components/HomeContactForm";

const trustIcons = ["⚖️", "🔒", "⚡", "🏛️"];
const painIcons = ["⏰", "💸", "💔", "❓"];
const solutionIcons = ["🎯", "⚡", "💰", "🔒"];
const serviceIcons = ["🤝", "⚖️", "💻", "👨‍👩‍👧"];
const whyUsIcons = ["⚖️", "⚡", "💰", "🔒", "🎯"];
const processNums = ["01", "02", "03", "04"];
const audienceIcons = ["👨‍👩‍👧", "🏢", "⚖️", "🏛️", "🤝"];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-navy relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-14 w-full">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Text column */}
              <div>
                <div className="w-16 h-px bg-gold mb-8" />
                <h1 className="text-5xl md:text-[3.25rem] font-bold text-gold leading-tight mb-6">
                  {c["home.hero.title"]}
                </h1>
                <p className="text-xl text-white/80 mb-4">
                  {c["home.hero.subtitle"]}
                </p>
                <p className="text-white/55 text-lg leading-relaxed max-w-xl mb-10">
                  {c["home.hero.body"]}
                </p>
                <div className="flex flex-col gap-4">
                  <Button href="/contact" variant="primary" size="lg" className="w-full">
                    {c["home.hero.cta1"]}
                  </Button>
                  <Button href="/about" variant="outline" size="lg" className="w-full">
                    {c["home.hero.cta2"]}
                  </Button>
                </div>
              </div>
              {/* Image column */}
              <div className="mt-8 md:mt-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[440px]">
                  <Image src="/handshake-photo.jpeg" alt="גישור מקצועי" fill className="object-cover" unoptimized priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to left, transparent, #C9A646, transparent)" }}
          aria-hidden="true"
        />
      </section>

      {/* ─── Trust Bar ─── */}
      <div className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIcons.map((icon, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">{icon}</span>
                <span className="text-navy font-semibold text-sm">
                  {c[`home.trust.${i}`]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Services (4 cards) ─── */}
      <SectionWrapper className="bg-gray-50">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-navy mb-3">
              {c["home.services.title"]}
            </h2>
            <p className="text-gray-500 text-lg">
              {c["home.services.subtitle"]}
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceIcons.map((icon, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative flex flex-col border-t-4 border-t-gold border border-gray-100 overflow-hidden">
                {i === 0 && (
                  <div className="h-44 overflow-hidden shrink-0">
                    <Image src="/bridge-mediation.jpeg" alt="גישור" width={600} height={176} className="w-full h-full object-cover" />
                  </div>
                )}
                {i === 1 && (
                  <div className="h-44 overflow-hidden shrink-0">
                    <Image src="/scales-arbitration.jpeg" alt="בוררות" width={600} height={176} className="w-full h-full object-cover" />
                  </div>
                )}
                {i === 2 && (
                  <div className="h-44 overflow-hidden shrink-0">
                    <Image src="/net-characters.jpeg" alt="גישור מקוון" width={600} height={176} className="w-full h-full object-cover" />
                  </div>
                )}
                {i === 3 && (
                  <div className="h-44 overflow-hidden shrink-0">
                    <Image src="/Family-Holding.png" alt="תיאום הורי" width={600} height={176} className="w-full h-full object-cover object-top" />
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  {i === 3 && (
                    <span className="self-start mb-3 bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/30">
                      {c["home.services.3.badge"]}
                    </span>
                  )}
                  <div className="text-3xl mb-4" aria-hidden="true">{icon}</div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {c[`home.services.${i}.title`]}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {c[`home.services.${i}.description`]}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 text-gold text-sm font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    {c[`home.services.${i}.cta`]}
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── Knowledge Center ─── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-12 h-px bg-gold mb-4" />
                <h2 className="text-3xl font-bold text-navy mb-2">
                  {c["home.services.4.title"]}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {c["home.services.4.description"]}
                </p>
                <Button href="/knowledge" variant="primary">
                  {c["home.services.4.cta"]}
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md mt-6 md:mt-0">
                <Image src="/lecture.png" alt="מרכז הידע" width={600} height={240} className="w-full h-[200px] md:h-[240px] object-cover" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Pain ─── */}
      <section className="bg-navy py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="w-16 h-px bg-gold/40 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white">
                {c["home.pain.title"]}
              </h2>
            </div>
            <div className="max-w-2xl mx-auto space-y-4 mb-12">
              {painIcons.map((icon, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/5 rounded-xl px-6 py-4 border border-white/10"
                >
                  <span className="text-2xl shrink-0" aria-hidden="true">{icon}</span>
                  <p className="text-white/80 text-lg">
                    {c[`home.pain.${i}`]}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center space-y-6">
              <p className="text-gold text-3xl font-bold">
                {c["home.pain.ending"]}
              </p>
              <Button href="/contact" variant="outline">
                {c["home.pain.cta"]}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Solution ─── */}
      <SectionWrapper className="bg-white">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-navy mb-4">
              {c["home.solution.title"]}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {c["home.solution.body"]}
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {solutionIcons.map((icon, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="text-center p-6 rounded-xl bg-navy/5 border border-navy/10 hover:bg-navy hover:text-white transition-all duration-300 group cursor-default">
                <div className="text-4xl mb-4" aria-hidden="true">{icon}</div>
                <p className="font-semibold text-navy group-hover:text-white text-sm transition-colors">
                  {c[`home.solution.${i}`]}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center">
          <Button href="/contact" variant="primary">
            {c["home.solution.cta"]}
          </Button>
        </div>
      </SectionWrapper>

      {/* ─── Audience (5 items) ─── */}
      <SectionWrapper className="bg-gray-50">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-navy mb-3">
              {c["home.audience.title"]}
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {audienceIcons.map((icon, i) => (
            <FadeIn key={i} delay={i * 70}>
              <div className="border border-gray-100 rounded-xl p-6 hover:border-gold hover:shadow-md transition-all duration-300 text-center bg-white">
                <div className="text-4xl mb-4" aria-hidden="true">{icon}</div>
                <h3 className="font-bold text-navy text-base mb-2">
                  {c[`home.audience.${i}.title`]}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {c[`home.audience.${i}.desc`]}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/contact" variant="outline">
            {c["home.audience.cta"]}
          </Button>
        </div>
      </SectionWrapper>

      {/* ─── Why Us ─── */}
      <SectionWrapper className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="w-16 h-px bg-gold mb-8" />
            <h2 className="text-4xl font-bold text-navy mb-3">
              {c["home.whyUs.title"]}
            </h2>
            <p className="text-gray-500 mb-10">
              {c["home.whyUs.body"]}
            </p>
            <div className="space-y-7">
              {whyUsIcons.map((icon, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">{icon}</span>
                  <div>
                    <h3 className="font-bold text-navy mb-1">
                      {c[`home.whyUs.${i}.title`]}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {c[`home.whyUs.${i}.desc`]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="bg-navy rounded-2xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold" aria-hidden="true" />
              <div className="text-gold/30 text-8xl font-bold leading-none mb-4 select-none">"</div>
              <blockquote className="text-xl leading-relaxed text-white/90 mb-8">
                {c["home.whyUs.quote"]}
              </blockquote>
              <div className="text-gold font-bold">
                {c["home.whyUs.quoteName"]}
              </div>
              <div className="text-white/40 text-sm mt-1">
                {c["home.whyUs.quoteRole"]}
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* ─── Process Teaser ─── */}
      <section className="bg-navy py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-16 items-center mb-14">
              <div>
                <div className="w-16 h-px bg-gold mb-6" />
                <h2 className="text-4xl font-bold text-white mb-3">
                  {c["home.process.title"]}
                </h2>
                <p className="text-white/60">
                  {c["home.process.subtitle"]}
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg mt-8 md:mt-0">
                <Image src="/table-painting.png" alt="תהליך הגישור" width={600} height={260} className="w-full h-[200px] md:h-[260px] object-cover" />
              </div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {processNums.map((num, i) => (
              <FadeIn key={num} delay={i * 90}>
                <div className="text-center group">
                  <div className="text-6xl font-bold text-gold/25 group-hover:text-gold transition-colors duration-400 mb-3 leading-none">
                    {num}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">
                    {c[`home.process.${i}.title`]}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {c[`home.process.${i}.desc`]}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center">
            <Link href="/process" className="text-gold font-semibold hover:underline text-sm">
              לתהליך המלא ←
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <SectionWrapper className="bg-white">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-navy mb-3">
              {c["home.faq.title"]}
            </h2>
          </div>
        </FadeIn>
        <div className="max-w-3xl mx-auto">
          <FaqAccordion />
        </div>
      </SectionWrapper>

      {/* ─── Urgency ─── */}
      <section className="bg-navy py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <p className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
                {c["home.urgency.title"]}
              </p>
              <Button href="/contact" variant="primary">
                {c["home.urgency.cta"]}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Final CTA + Form ─── */}
      <section className="bg-gold py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="w-16 h-px bg-navy/30 mb-8" />
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                {c["home.finalCta.title"]}
              </h2>
              <p className="text-navy/70 text-lg">
                {c["home.finalCta.cta"]}
              </p>
              <div className="mt-10">
                <HomeContactForm />
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="rounded-xl overflow-hidden shadow-lg aspect-square">
                <Image src="/handshake-painting.png" alt="לחיצת ידיים — סיום מוצלח" width={600} height={600} className="w-full h-full object-cover object-[50%_30%]" unoptimized />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
