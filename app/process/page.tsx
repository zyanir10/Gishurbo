import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "תהליך | מרכז הבוררות והגישור באילת",
  description:
    "ארבעה שלבים פשוטים מהפנייה הראשונה ועד להסכם הסופי. כך עובד תהליך הגישור והבוררות במרכז.",
};

const steps = [
  {
    num: "01",
    title: "פנייה ראשונית",
    desc: "יצירת קשר עם המרכז, תיאור הסכסוך, וקביעת פגישת ייעוץ ראשונית עם מומחה מתאים.",
    details: [
      "מילוי טופס פנייה מקוון",
      "שיחת טלפון ראשונית",
      "קביעת פגישת ייעוץ",
      "הצגת המקרה בקצרה",
    ],
  },
  {
    num: "02",
    title: "התאמת מומחה",
    desc: "בחירת מגשר או בורר המתאים לסוג הסכסוך, תחום המומחיות, ולצרכי שני הצדדים.",
    details: [
      "בחינת מאפייני הסכסוך",
      "התאמת מומחה מהמאגר",
      "הצגת המומחה לצדדים",
      "אישור ההסכמה להמשיך",
    ],
  },
  {
    num: "03",
    title: "ניהול ההליך",
    desc: "תהליך מובנה, מקצועי ודיסקרטי — ניהול הדיונים, ליווי הצדדים, ובניית הסכמות.",
    details: [
      "פגישות גישור / דיוני בוררות",
      "ליווי מקצועי לאורך כל ההליך",
      "שמירה על חיסיון מוחלט",
      "גמישות בלוח הזמנים",
    ],
  },
  {
    num: "04",
    title: "הסכם ופתרון",
    desc: "הגעה להסכמה מחייבת, חיסכון בזמן ובעלויות, וסיום ההליך בהצלחה לשני הצדדים.",
    details: [
      "גיבוש הסכם מפורט",
      "חתימה על ההסכם",
      "פסק בורר (בבוררות)",
      "סגירת התיק",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="w-16 h-px bg-gold mb-6" />
            <h1 className="text-5xl font-bold text-white mb-4">
              איך זה עובד?
            </h1>
            <p className="text-white/55 text-xl">
              ארבעה שלבים פשוטים להגעה לפתרון
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="space-y-20">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 80}>
                <div className="grid md:grid-cols-[180px_1fr] gap-10 items-start">
                  {/* Step number */}
                  <div className="text-center md:text-right">
                    <div className="text-8xl font-bold text-gold/20 leading-none select-none">
                      {step.num}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="border-r-4 border-gold pr-8">
                    <h2 className="text-2xl font-bold text-navy mb-4">
                      {step.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-7">
                      {step.desc}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.details.map((d, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connector */}
                {i < steps.length - 1 && (
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
              מוכנים להתחיל?
            </h2>
            <p className="text-navy/60 mb-8">דברו איתנו ונצא יחד לדרך</p>
            <Button href="/contact" variant="dark">
              צרו קשר עכשיו
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
