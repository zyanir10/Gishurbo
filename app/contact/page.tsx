import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ContactForm from "./ContactForm";
import EditableText from "@/components/EditableText";

export const metadata: Metadata = {
  title: "צור קשר | מרכז הבוררות והגישור באילת",
  description:
    "צרו קשר עם מרכז הבוררות והגישור באילת. טופס פנייה, פרטי קשר ומיקום.",
};

const contactIcons = ["📍", "📞", "✉️", "💬"];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="w-16 h-px bg-gold mb-6" />
            <h1 className="text-5xl font-bold text-white mb-4">
              <EditableText contentKey="contact.header.title" />
            </h1>
            <p className="text-white/55 text-xl">
              <EditableText contentKey="contact.header.subtitle" />
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form column */}
            <FadeIn>
              <div className="w-12 h-px bg-gold mb-6" />
              <h2 className="text-2xl font-bold text-navy mb-8">
                <EditableText contentKey="contact.form.title" />
              </h2>
              <ContactForm />
            </FadeIn>

            {/* Info column */}
            <FadeIn delay={120}>
              <div className="w-12 h-px bg-gold mb-6" />
              <h2 className="text-2xl font-bold text-navy mb-8">
                <EditableText contentKey="contact.info.title" />
              </h2>

              <ul className="space-y-7 mb-12">
                {contactIcons.map((icon, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span
                      className="text-2xl mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      {icon}
                    </span>
                    <div>
                      <div className="text-xs text-gold font-semibold uppercase tracking-wider mb-1">
                        <EditableText contentKey={`contact.info.${i}.label`} />
                      </div>
                      <div className="text-gray-700">
                        <EditableText contentKey={`contact.info.${i}.value`} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Hours */}
              <div className="border border-gray-100 rounded-xl p-6 bg-gray-50">
                <h3 className="font-bold text-navy mb-4">
                  <EditableText contentKey="contact.hours.title" />
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex justify-between">
                      <span>
                        <EditableText contentKey={`contact.hours.${i}.day`} />
                      </span>
                      <span className="font-medium text-navy">
                        <EditableText contentKey={`contact.hours.${i}.time`} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/972000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-3 bg-[#25D366] text-white font-semibold px-5 py-3 rounded-xl hover:bg-[#20bb5a] transition-colors text-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <EditableText contentKey="contact.whatsapp" />
              </a>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
