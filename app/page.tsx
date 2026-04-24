import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import EditableText from "@/components/EditableText";
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
      <section className="min-h-screen bg-navy flex items-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-1/4 w-px h-full bg-gold/10" />
          <div className="absolute top-0 right-3/4 w-px h-full bg-gold/5" />
          <div className="absolute top-1/3 left-0 right-0 h-px bg-gold/5" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 pt-36 pb-20 w-full">
          <FadeIn>
            <div className="max-w-2xl">
              <div className="w-16 h-px bg-gold mb-8" />
              <h1 className="text-5xl md:text-7xl font-bold text-gold leading-tight mb-6">
                <EditableText contentKey="home.hero.title" />
              </h1>
              <p className="text-xl text-white/80 mb-4">
                <EditableText contentKey="home.hero.subtitle" />
              </p>
              <p className="text-white/55 text-lg mb-10 leading-relaxed max-w-xl">
                <EditableText contentKey="home.hero.body" />
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary">
                  <EditableText contentKey="home.hero.cta1" />
                </Button>
                <Button href="/about" variant="outline">
                  <EditableText contentKey="home.hero.cta2" />
                </Button>
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
                  <EditableText contentKey={`home.trust.${i}`} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Pain ─── */}
      <section className="bg-navy py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="w-16 h-px bg-gold/40 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white">
                <EditableText contentKey="home.pain.title" />
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
                    <EditableText contentKey={`home.pain.${i}`} />
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center space-y-6">
              <p className="text-gold text-3xl font-bold">
                <EditableText contentKey="home.pain.ending" />
              </p>
              <Button href="/contact" variant="outline">
                <EditableText contentKey="home.pain.cta" />
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
              <EditableText contentKey="home.solution.title" />
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              <EditableText contentKey="home.solution.body" />
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {solutionIcons.map((icon, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="text-center p-6 rounded-xl bg-navy/5 border border-navy/10 hover:bg-navy hover:text-white transition-all duration-300 group cursor-default">
                <div className="text-4xl mb-4" aria-hidden="true">{icon}</div>
                <p className="font-semibold text-navy group-hover:text-white text-sm transition-colors">
                  <EditableText contentKey={`home.solution.${i}`} />
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center">
          <Button href="/contact" variant="primary">
            <EditableText contentKey="home.solution.cta" />
          </Button>
        </div>
      </SectionWrapper>

      {/* ─── Services (4 cards) ─── */}
      <SectionWrapper className="bg-gray-50">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-navy mb-3">
              <EditableText contentKey="home.services.title" />
            </h2>
            <p className="text-gray-500 text-lg">
              <EditableText contentKey="home.services.subtitle" />
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceIcons.map((icon, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative flex flex-col border-t-4 border-t-gold border border-gray-100">
                {i === 3 && (
                  <span className="absolute top-4 left-4 bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/30">
                    <EditableText contentKey="home.services.3.badge" />
                  </span>
                )}
                <div className="text-3xl mb-4" aria-hidden="true">{icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  <EditableText contentKey={`home.services.${i}.title`} />
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  <EditableText contentKey={`home.services.${i}.description`} />
                </p>
                <Link
                  href="/contact"
                  className="mt-6 text-gold text-sm font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <EditableText contentKey={`home.services.${i}.cta`} />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── Stats ─── */}
      <section className="bg-navy py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="text-center py-8">
                <div className="text-5xl font-bold text-gold mb-3">
                  <EditableText contentKey={`home.stats.${i}.number`} />
                </div>
                <div className="text-white/60 text-sm">
                  <EditableText contentKey={`home.stats.${i}.label`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Us ─── */}
      <SectionWrapper className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="w-16 h-px bg-gold mb-8" />
            <h2 className="text-4xl font-bold text-navy mb-3">
              <EditableText contentKey="home.whyUs.title" />
            </h2>
            <p className="text-gray-500 mb-10">
              <EditableText contentKey="home.whyUs.body" />
            </p>
            <div className="space-y-7">
              {whyUsIcons.map((icon, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">{icon}</span>
                  <div>
                    <h3 className="font-bold text-navy mb-1">
                      <EditableText contentKey={`home.whyUs.${i}.title`} />
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      <EditableText contentKey={`home.whyUs.${i}.desc`} />
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
                <EditableText contentKey="home.whyUs.quote" />
              </blockquote>
              <div className="text-gold font-bold">
                <EditableText contentKey="home.whyUs.quoteName" />
              </div>
              <div className="text-white/40 text-sm mt-1">
                <EditableText contentKey="home.whyUs.quoteRole" />
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* ─── Process Teaser ─── */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="w-16 h-px bg-gold mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-navy mb-3">
                <EditableText contentKey="home.process.title" />
              </h2>
              <p className="text-gray-500">
                <EditableText contentKey="home.process.subtitle" />
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {processNums.map((num, i) => (
              <FadeIn key={num} delay={i * 90}>
                <div className="text-center group">
                  <div className="text-6xl font-bold text-gold/25 group-hover:text-gold transition-colors duration-400 mb-3 leading-none">
                    {num}
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2">
                    <EditableText contentKey={`home.process.${i}.title`} />
                  </h3>
                  <p className="text-gray-500 text-sm">
                    <EditableText contentKey={`home.process.${i}.desc`} />
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
              <EditableText contentKey="home.faq.title" />
            </h2>
          </div>
        </FadeIn>
        <div className="max-w-3xl mx-auto">
          <FaqAccordion />
        </div>
      </SectionWrapper>

      {/* ─── Audience (5 items) ─── */}
      <SectionWrapper className="bg-gray-50">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-navy mb-3">
              <EditableText contentKey="home.audience.title" />
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {audienceIcons.map((icon, i) => (
            <FadeIn key={i} delay={i * 70}>
              <div className="border border-gray-100 rounded-xl p-6 hover:border-gold hover:shadow-md transition-all duration-300 text-center bg-white">
                <div className="text-4xl mb-4" aria-hidden="true">{icon}</div>
                <h3 className="font-bold text-navy text-base mb-2">
                  <EditableText contentKey={`home.audience.${i}.title`} />
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  <EditableText contentKey={`home.audience.${i}.desc`} />
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/contact" variant="outline">
            <EditableText contentKey="home.audience.cta" />
          </Button>
        </div>
      </SectionWrapper>

      {/* ─── Urgency ─── */}
      <section className="bg-navy py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <p className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
                <EditableText contentKey="home.urgency.title" />
              </p>
              <Button href="/contact" variant="primary">
                <EditableText contentKey="home.urgency.cta" />
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
                <EditableText contentKey="home.finalCta.title" />
              </h2>
              <p className="text-navy/70 text-lg">
                <EditableText contentKey="home.finalCta.cta" />
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <HomeContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
