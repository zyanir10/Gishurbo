import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "אודות | מרכז הבוררות והגישור באילת",
  description:
    "היכרות עם מרכז הבוררות והגישור באילת ועם המייסדת עו\"ד מיכל זמרן — מגשרת ובוררת מוסמכת.",
};

const credentials = [
  "עורכת דין בכירה בדיני משפחה עם ניסיון נרחב בליטיגציה",
  "מגשרת מוסמכת",
  "בוררת מוסמכת",
  "מומחית ביישוב סכסוכים מורכבים ורגישים",
  "משלבת ניסיון משפטי עם מתודולוגיות ADR מתקדמות",
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="w-16 h-px bg-gold mb-6" />
            <h1 className="text-5xl font-bold text-white mb-4">אודות המרכז</h1>
            <p className="text-white/55 text-xl">
              מוסד מקצועי ועצמאי לייישוב סכסוכים
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About the center */}
      <SectionWrapper className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div className="w-16 h-px bg-gold mb-8" />
            <h2 className="text-3xl font-bold text-navy mb-6">על המרכז</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              מרכז הבוררות והגישור באילת הוא מוסד מקצועי ועצמאי לייישוב
              סכסוכים מחוץ לכותלי בית המשפט. המרכז מציע מענה מקיף לאנשים
              פרטיים, עסקים ומוסדות — בגישה מקצועית, אנושית ודיסקרטית.
            </p>
            <p className="text-gray-500 leading-relaxed">
              אנו מאמינים שרוב הסכסוכים ניתנים לפתרון ללא הכרח של עימות
              משפטי ממושך. המרכז מציע חלופה יעילה, חסכונית ואנושית לתביעות
              משפטיות.
            </p>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "+200", label: "תיקים בשנה" },
                { num: "90%", label: "שיעור הסכמה" },
                { num: "+50", label: "שותפים" },
                { num: "12", label: "תחומי מומחיות" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 hover:border-gold transition-colors duration-300"
                >
                  <div className="text-3xl font-bold text-gold mb-2">{num}</div>
                  <div className="text-navy text-sm font-medium">{label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Vision */}
      <section className="bg-navy py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-px bg-gold mx-auto mb-8" />
              <h2 className="text-3xl font-bold text-white mb-8">החזון שלנו</h2>
              <p className="text-white/70 text-xl leading-relaxed">
                להיות המוסד המוביל לייישוב סכסוכים בדרום ישראל, תוך בניית מודל
                עבודה שיתופי, מוסדי ואיכותי — המשרת אנשים פרטיים, עסקים
                ומוסדות ציבוריים כאחד.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Michal */}
      <SectionWrapper className="bg-white">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-16 h-px bg-gold mb-6" />
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                המייסדת
              </p>
              <h2 className="text-3xl font-bold text-navy mb-2">
                עו&quot;ד מיכל זמרן
              </h2>
              <p className="text-gray-500 mb-8">
                מגשרת ובוררת מוסמכת | מומחית בדיני משפחה
              </p>
              <ul className="space-y-4 mb-10">
                {credentials.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-1 shrink-0">◆</span>
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <blockquote className="border-r-4 border-gold pr-6 py-2">
                <p className="text-gold text-xl font-semibold">
                  &quot;לא עוד עימות — אדריכלות קונפליקט חכמה ויעילה.&quot;
                </p>
              </blockquote>
            </div>

            {/* Photo placeholder */}
            <div className="bg-gray-100 rounded-2xl aspect-[4/5] flex flex-col items-center justify-center border border-gray-200">
              <div className="text-7xl mb-4" aria-hidden="true">
                👤
              </div>
              <p className="text-gray-400 text-sm">תמונה בקרוב</p>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gold py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy mb-6">
              רוצים להכיר אותנו טוב יותר?
            </h2>
            <Button href="/contact" variant="dark">
              צרו קשר עכשיו
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
