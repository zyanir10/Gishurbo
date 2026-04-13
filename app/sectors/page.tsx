import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "קהלי יעד | מרכז הבוררות והגישור באילת",
  description:
    "המרכז מציע פתרונות ADR לאנשים פרטיים, עסקים, עורכי דין וגופים ציבוריים.",
};

const sectors = [
  {
    icon: "👨‍👩‍👧",
    title: "משפחות ופרטים",
    subtitle: "פתרונות אישיים ורגישים",
    desc: "עימותים במשפחה הם מהסכסוכים הרגישים ביותר. המרכז מציע גישה אנושית, מכבדת ומקצועית לכל סוגי הסכסוכים הפרטיים.",
    services: [
      "גירושין וסדרי ראייה",
      "סכסוכי ירושה וצוואה",
      'מחלוקות נדל"ן ודיירים',
      "תביעות אזרחיות בין-אישיות",
      "סכסוכי שכנים",
    ],
    bg: "bg-white",
  },
  {
    icon: "🏢",
    title: "עסקים וחברות",
    subtitle: "פתרונות עסקיים מהירים",
    desc: "סכסוכים עסקיים עלולים לפגוע בעסק, במוניטין ובמערכות יחסים עסקיות. אנו מציעים פתרונות מהירים ודיסקרטיים.",
    services: [
      "סכסוכי חוזים ועסקאות",
      "מחלוקות בין שותפים",
      "תביעות ביטוח",
      "סכסוכי ספקים ולקוחות",
      "מחלוקות כספיות",
    ],
    bg: "bg-gray-50",
  },
  {
    icon: "⚖️",
    title: "עורכי דין ומשרדי דין",
    subtitle: "שיתוף פעולה מקצועי",
    desc: "עורכי דין ומשרדי עורכי דין יכולים להפנות תיקים לטיפול במסגרת ADR, ולהגדיל את הערך שהם מעניקים ללקוחותיהם.",
    services: [
      "הפניית תיקים מתאימים",
      "שיתוף פעולה בגישור משותף",
      "ייצוג לקוחות בהליכי ADR",
      "ייעוץ מקצועי לקולגות",
      "הסכמי שיתוף פעולה",
    ],
    bg: "bg-white",
  },
  {
    icon: "🏛️",
    title: "גופים ציבוריים ורשויות",
    subtitle: "שירות לקהל ולמוסדות",
    desc: "גופים ציבוריים, עיריות ומוסדות חינוך ורווחה נתקלים בסכסוכים רבים. המרכז מציע מסגרת מוסדית מובנית ומקצועית.",
    services: [
      "עיריית אילת ורשויות מקומיות",
      "שירותי רווחה ורשויות סוציאליות",
      "מוסדות חינוך וגני ילדים",
      "גופי בריאות וסיעוד",
      "מוסדות ציבוריים ועמותות",
    ],
    bg: "bg-gray-50",
  },
];

export default function SectorsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="w-16 h-px bg-gold mb-6" />
            <h1 className="text-5xl font-bold text-white mb-4">
              למי מיועד המרכז?
            </h1>
            <p className="text-white/55 text-xl">
              שירותי ADR מקצועיים לכל מגזר
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sectors */}
      {sectors.map((sector, i) => (
        <section key={sector.title} className={`${sector.bg} py-24`}>
          <div className="max-w-[1200px] mx-auto px-6">
            <FadeIn delay={i % 2 === 0 ? 0 : 80}>
              <div
                className={`grid md:grid-cols-2 gap-16 items-center ${
                  i % 2 === 1 ? "md:[direction:ltr]" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:[direction:rtl]" : ""}>
                  <div className="text-5xl mb-6" aria-hidden="true">
                    {sector.icon}
                  </div>
                  <div className="w-12 h-px bg-gold mb-4" />
                  <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">
                    {sector.subtitle}
                  </p>
                  <h2 className="text-3xl font-bold text-navy mb-5">
                    {sector.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {sector.desc}
                  </p>
                  <Button href="/contact" variant="primary">
                    לפרטים נוספים
                  </Button>
                </div>
                <div className={i % 2 === 1 ? "md:[direction:rtl]" : ""}>
                  <div className="bg-navy rounded-2xl p-8">
                    <h3 className="text-gold font-semibold mb-5 text-sm uppercase tracking-wider">
                      תחומי טיפול
                    </h3>
                    <ul className="space-y-4">
                      {sector.services.map((s, j) => (
                        <li key={j} className="flex items-center gap-3 text-white/70 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {s}
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
              מצאתם את עצמכם כאן?
            </h2>
            <p className="text-navy/60 mb-8">
              צרו קשר וקבלו ייעוץ ראשוני ללא התחייבות
            </p>
            <Button href="/contact" variant="dark">
              צרו קשר עכשיו
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
