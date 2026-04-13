import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionWrapper from "@/components/SectionWrapper";
import JoinForm from "./JoinForm";

export const metadata: Metadata = {
  title: "הצטרפות | מרכז הבוררות והגישור באילת",
  description:
    "הצטרפו כמגשרים ובוררים למרכז הבוררות והגישור באילת. סטנדרט גבוה, הכשרה מתמשכת ותמריצים.",
};

const requirements = [
  {
    icon: "🎓",
    title: "קריטריוני קבלה",
    items: [
      "הסמכה מוכרת בגישור / בוררות",
      "ניסיון מינימלי של 5 שנים",
      "המלצות מקצועיות",
      "עמידה בקוד אתי",
    ],
  },
  {
    icon: "🌐",
    title: "מאגר רב-תחומי",
    items: [
      "עורכי דין",
      "פסיכולוגים ועובדים סוציאליים",
      'אנשי עסקים ורו"ח',
      "מומחי נדל\"ן ועבודה",
    ],
  },
  {
    icon: "📚",
    title: "הכשרה מתמשכת",
    items: [
      "תוכנית הכשרה פנימית",
      "עדכון מקצועי שנתי",
      "פיקוח מקצועי",
      "כנסים והשתלמויות",
    ],
  },
  {
    icon: "💼",
    title: "תמריצים",
    items: [
      "עמלות תחרותיות",
      "חשיפה ללקוחות מגוונים",
      "תמיכה שיווקית",
      "שותפות מוסדית",
    ],
  },
];

export default function JoinPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="w-16 h-px bg-gold mb-6" />
            <h1 className="text-5xl font-bold text-white mb-4">
              הצטרפו כמגשרים ובוררים
            </h1>
            <p className="text-white/55 text-xl">
              גיוס מגשרים ובוררים — סטנדרט גבוה
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Requirements */}
      <SectionWrapper className="bg-white">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-navy mb-4">
              תנאי קבלה ויתרונות
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              אנו מחפשים מקצוענים בעלי ניסיון ומחויבות לסטנדרטים גבוהים
              של מקצועיות ואתיקה.
            </p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {requirements.map(({ icon, title, items }, i) => (
            <FadeIn key={title} delay={i * 80}>
              <div className="border border-gray-100 rounded-xl p-7 hover:border-gold hover:shadow-md transition-all duration-300 h-full border-t-4 border-t-gold">
                <div className="text-3xl mb-4" aria-hidden="true">
                  {icon}
                </div>
                <h3 className="font-bold text-navy text-lg mb-4">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="text-gold mt-0.5 shrink-0 text-xs">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Application form */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-[640px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <div className="w-16 h-px bg-gold mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-navy mb-3">
                שלח בקשת הצטרפות
              </h2>
              <p className="text-gray-500">
                נבחן את הפנייה ונחזור אליכם בהקדם האפשרי
              </p>
            </div>
          </FadeIn>
          <JoinForm />
        </div>
      </section>
    </>
  );
}
