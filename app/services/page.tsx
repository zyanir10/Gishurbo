import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "שירותים | מרכז הבוררות והגישור באילת",
  description:
    "שירותי גישור, בוררות ותיאום הורי — פתרונות ADR מקצועיים לכל סוג סכסוך.",
};

const mediationServices = [
  {
    title: "גישור משפחתי",
    desc: "גישור בסכסוכי משפחה בהסכמה בלבד, על פי חוק — גירושין, משמורת, ירושה וחלוקת רכוש.",
  },
  {
    title: "גישור עסקי ומסחרי",
    desc: "יישוב סכסוכים בין עסקים, חברות ושותפים — מהיר, חסוי ויעיל.",
  },
  {
    title: "גישור בסכסוכי עבודה",
    desc: "פתרון מקצועי לסכסוכים בין עובדים ומעסיקים, כולל פיטורים, זכויות ועוד.",
  },
  {
    title: "גישור שכנים וקהילה",
    desc: "גישור בסכסוכי שכנים, דיירים, ועדי בתים ורשויות מקומיות.",
  },
  {
    title: "גישור ספק-לקוח",
    desc: "יישוב יעיל של סכסוכי צרכנות, שירות ומסחר בין עסקים ללקוחות.",
  },
];

const arbitrationServices = [
  {
    title: "סכסוכים אזרחיים ומסחריים",
    desc: "טיפול מקצועי בסכסוכים אזרחיים עם פסיקה מחייבת בעלת תוקף משפטי מלא.",
  },
  {
    title: "קונפליקטים עסקיים",
    desc: "בוררות מהירה בסכסוכים בין עסקים, שותפויות וחברות.",
  },
  {
    title: "סכסוכים מוסדיים",
    desc: "ניהול בוררות בסכסוכים מוסדיים מורכבים הדורשים מומחיות תחומית.",
  },
  {
    title: "בוררות מחייבת עם פסק בר-אכיפה",
    desc: "פסיקה בעלת תוקף משפטי מלא, בר-אכיפה בבית משפט ישראלי.",
  },
];

const parentalItems = [
  "עם עובדים סוציאליים מוסמכים",
  "התמקדות בצמצום קונפליקט הורי ושיפור תקשורת",
  "עדיפות לרווחת הילדים בכל שלב",
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="w-16 h-px bg-gold mb-6" />
            <h1 className="text-5xl font-bold text-white mb-4">
              השירותים שלנו
            </h1>
            <p className="text-white/55 text-xl">
              פתרונות מקצועיים לכל סוג של סכסוך
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mediation */}
      <SectionWrapper className="bg-white">
        <FadeIn>
          <div className="mb-12">
            <div className="w-12 h-px bg-gold mb-4" />
            <h2 className="text-3xl font-bold text-navy mb-2">גישור</h2>
            <p className="text-gray-500 text-lg">
              יישוב סכסוכים בהסכמה, בדרך אנושית ויעילה
            </p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediationServices.map((s, i) => (
            <FadeIn key={s.title} delay={i * 70}>
              <div className="border border-gray-100 rounded-xl p-7 hover:border-gold hover:shadow-md transition-all duration-300 border-t-4 border-t-gold h-full">
                <h3 className="font-bold text-navy text-lg mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Arbitration */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="mb-12">
              <div className="w-12 h-px bg-gold mb-4" />
              <h2 className="text-3xl font-bold text-navy mb-2">בוררות</h2>
              <p className="text-gray-500 text-lg">
                הליך מחייב עם תוצאה משפטית תקפה ובת-אכיפה
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {arbitrationServices.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-gold transition-all duration-300 h-full">
                  <h3 className="font-bold text-navy text-lg mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {s.desc}
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
            <div
              className="absolute top-0 left-0 right-0 h-1 bg-gold"
              aria-hidden="true"
            />
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full mb-6">
              בקרוב
            </span>
            <div className="w-12 h-px bg-gold mb-6" />
            <h2 className="text-3xl font-bold text-navy mb-4">תיאום הורי</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-10">
              שירות ייחודי לצמצום קונפליקט בין הורים ושיפור תקשורת — לטובת
              רווחת הילדים. בשיתוף עובדים סוציאליים מוסמכים ומומחים בפסיכולוגיה
              של הילד.
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              {parentalItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 flex-1">
                  <span className="text-gold mt-0.5 shrink-0">◆</span>
                  <span className="text-gray-600 text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">
              מעוניינים לשמוע עוד?
            </h2>
            <p className="text-white/50 mb-8">
              צוות המרכז זמין לייעוץ ראשוני ללא התחייבות
            </p>
            <Button href="/contact" variant="primary">
              צרו קשר עכשיו
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
