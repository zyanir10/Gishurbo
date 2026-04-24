import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionWrapper from "@/components/SectionWrapper";
import LawyerContactForm from "./LawyerContactForm";
import EditableText from "@/components/EditableText";

export const metadata: Metadata = {
  title: "לעורכי דין | מרכז הבוררות והגישור באילת",
  description:
    "שיתוף פעולה עם עורכי דין ומפנים. הפניית תיקים, הסכמי שיתוף פעולה וכלים מקצועיים.",
};

const benefitIcons = ["📁", "🤝", "🛠️"];

export default function ForLawyersPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="w-16 h-px bg-gold mb-6" />
            <h1 className="text-5xl font-bold text-white mb-4">
              <EditableText contentKey="lawyers.header.title" />
            </h1>
            <p className="text-white/55 text-xl">
              <EditableText contentKey="lawyers.header.subtitle" />
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <SectionWrapper className="bg-white">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-navy mb-4">
              <EditableText contentKey="lawyers.benefits.title" />
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              <EditableText contentKey="lawyers.benefits.subtitle" />
            </p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {benefitIcons.map((icon, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="border border-gray-100 rounded-xl p-8 text-center hover:border-gold hover:shadow-md transition-all duration-300 border-t-4 border-t-gold h-full">
                <div className="text-4xl mb-5" aria-hidden="true">
                  {icon}
                </div>
                <h3 className="font-bold text-navy text-xl mb-3">
                  <EditableText contentKey={`lawyers.benefits.${i}.title`} />
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  <EditableText contentKey={`lawyers.benefits.${i}.desc`} />
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact form */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-[640px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <div className="w-16 h-px bg-gold mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-navy mb-3">
                <EditableText contentKey="lawyers.form.title" />
              </h2>
              <p className="text-gray-500">
                <EditableText contentKey="lawyers.form.subtitle" />
              </p>
            </div>
          </FadeIn>
          <LawyerContactForm />
        </div>
      </section>
    </>
  );
}
