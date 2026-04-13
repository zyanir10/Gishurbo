import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import Button from "@/components/Button";

const trustItems = [
  { icon: "⚖️", label: "בוררים ומגשרים מוסמכים" },
  { icon: "🔒", label: "דיסקרטיות מלאה" },
  { icon: "⚡", label: "הליך מהיר ויעיל" },
  { icon: "🏛️", label: "ניסיון משפטי רחב" },
];

const services = [
  {
    title: "גישור",
    description:
      'יישוב סכסוכים בהסכמה, בצורה מהירה ויעילה. תהליך אנושי ומכובד המביא לפתרון מותאם לצדדים.',
    href: "/services",
  },
  {
    title: "בוררות",
    description:
      "הליך מחייב עם תוצאה משפטית תקפה. פסיקה מקצועית ומהירה של מומחה בתחום.",
    href: "/services",
  },
  {
    title: "תיאום הורי",
    description:
      "שירות ייחודי לצמצום קונפליקט בין הורים ושיפור תקשורת לטובת הילדים.",
    href: "/services",
    badge: "בקרוב",
  },
];

const stats = [
  { number: "+200", label: "תיקים בשנה" },
  { number: "+50", label: "שותפים פעילים" },
  { number: "90%", label: "שיעור הסכמה" },
  { number: "12", label: "שותפי פעולה" },
];

const whyUs = [
  {
    icon: "⚖️",
    title: "מקצועיות",
    desc: "מגשרים ובוררים מוסמכים עם ניסיון רחב בתחומי משפט מגוונים.",
  },
  {
    icon: "⚡",
    title: "מהירות",
    desc: "הליכים ממוקדים וקצרים לעומת ההתדיינות המשפטית הרגילה.",
  },
  {
    icon: "💰",
    title: "חיסכון",
    desc: "עלות נמוכה משמעותית מניהול תיק בבית משפט.",
  },
  {
    icon: "🔒",
    title: "דיסקרטיות",
    desc: "הליכים חסויים, פרטיים ומוגנים מפני חשיפה ציבורית.",
  },
  {
    icon: "🎯",
    title: "פתרונות מותאמים",
    desc: "גמישות בהסכמות, לא קשורים לנוקשות הדין.",
  },
];

const processSteps = [
  { num: "01", title: "פנייה", desc: "יצירת קשר ותיאור הסכסוך" },
  { num: "02", title: "התאמה", desc: "בחירת מגשר או בורר מתאים" },
  { num: "03", title: "ניהול", desc: "תהליך מובנה ומקצועי" },
  { num: "04", title: "פתרון", desc: "הסכם מחייב וחיסכון בזמן" },
];

const audiences = [
  {
    icon: "👨‍👩‍👧",
    title: "משפחות ופרטים",
    desc: 'גירושין, ירושה, נדל"ן, תביעות אזרחיות',
  },
  {
    icon: "🏢",
    title: "עסקים וחברות",
    desc: "חוזים, שותפויות, ביטוח, תביעות כספיות",
  },
  {
    icon: "⚖️",
    title: "עורכי דין",
    desc: "הפניית תיקים, שיתוף פעולה מקצועי",
  },
  {
    icon: "🏛️",
    title: "גופים ציבוריים",
    desc: "עיריות, שירותי רווחה, מוסדות חינוך",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="min-h-screen bg-navy flex items-center relative overflow-hidden">
        {/* Geometric gold accent lines */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-1/4 w-px h-full bg-gold/10" />
          <div className="absolute top-0 right-3/4 w-px h-full bg-gold/5" />
          <div className="absolute top-1/3 left-0 right-0 h-px bg-gold/5" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 pt-28 pb-20 w-full">
          <FadeIn>
            <div className="max-w-2xl">
              <div className="w-16 h-px bg-gold mb-8" />
              <h1 className="text-5xl md:text-7xl font-bold text-gold leading-tight mb-6">
                פתרונות חכמים
                <br />
                לסכסוכים
              </h1>
              <p className="text-xl text-white/80 mb-4">
                מקצועיות, יעילות ודיסקרטיות – מחוץ לכותלי בית המשפט
              </p>
              <p className="text-white/55 text-lg mb-10 leading-relaxed max-w-xl">
                במקום לנהל מלחמה – מנהלים פתרון. המרכז המוביל לבוררות וגישור
                בדרום ישראל.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary">
                  לקביעת פגישת ייעוץ
                </Button>
                <Button href="/about" variant="outline">
                  למידע נוסף
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Gold animated divider */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to left, transparent, #C9A646, transparent)",
          }}
          aria-hidden="true"
        />
      </section>

      {/* ─── Trust Bar ─── */}
      <div className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustItems.map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {icon}
                </span>
                <span className="text-navy font-semibold text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Services Preview ─── */}
      <SectionWrapper className="bg-gray-50">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-navy mb-3">השירותים שלנו</h2>
            <p className="text-gray-500 text-lg">
              מגוון פתרונות ADR מקצועיים תחת קורת גג אחת
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((card, i) => (
            <FadeIn key={card.title} delay={i * 100}>
              <ServiceCard {...card} />
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── Stats ─── */}
      <section className="bg-navy py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Us ─── */}
      <SectionWrapper className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="w-16 h-px bg-gold mb-8" />
            <h2 className="text-4xl font-bold text-navy mb-10">
              למה לבחור במרכז שלנו?
            </h2>
            <div className="space-y-7">
              {whyUs.map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">
                    {icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-navy mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="bg-navy rounded-2xl p-12 text-white relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gold"
                aria-hidden="true"
              />
              <div className="text-gold/30 text-8xl font-bold leading-none mb-4 select-none">
                "
              </div>
              <blockquote className="text-xl leading-relaxed text-white/90 mb-8">
                לא עוד עימות — אדריכלות קונפליקט חכמה ויעילה.
              </blockquote>
              <div className="text-gold font-bold">עו&quot;ד מיכל זמרן</div>
              <div className="text-white/40 text-sm mt-1">
                מייסדת המרכז | מגשרת ובוררת מוסמכת
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
                תהליך פשוט וברור
              </h2>
              <p className="text-gray-500">
                ארבעה שלבים מהפנייה הראשונה ועד להסכם הסופי
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {processSteps.map(({ num, title, desc }, i) => (
              <FadeIn key={num} delay={i * 90}>
                <div className="text-center group">
                  <div className="text-6xl font-bold text-gold/25 group-hover:text-gold transition-colors duration-400 mb-3 leading-none">
                    {num}
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/process"
              className="text-gold font-semibold hover:underline text-sm"
            >
              לתהליך המלא ←
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Audience ─── */}
      <SectionWrapper className="bg-white">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-navy mb-3">
              למי מיועד המרכז?
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map(({ icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 80}>
              <div className="border border-gray-100 rounded-xl p-8 hover:border-gold hover:shadow-md transition-all duration-300 text-center">
                <div className="text-4xl mb-4" aria-hidden="true">
                  {icon}
                </div>
                <h3 className="font-bold text-navy text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── CTA Banner ─── */}
      <section className="bg-gold py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeIn>
            <div className="w-16 h-px bg-navy/30 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              לא עוד סכסוך — פתרון.
            </h2>
            <p className="text-navy/60 text-lg mb-10">
              צרו קשר עוד היום וקבלו ייעוץ ראשוני
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
