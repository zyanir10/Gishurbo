import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { c } from "@/lib/content";

export const metadata: Metadata = {
  title: "אודות | מרכז הבוררות והגישור באילת",
  description:
    "היכרות עם מרכז הבוררות והגישור באילת ועם המייסדת עו\"ד מיכל זמרן — מגשרת ובוררת מוסמכת.",
};

const teamMembers = [
  {
    name: "אסנת אדלר",
    role: "עורכת דין ומגשרת",
    image: "/osnat.png",
    points: [
      "מגשרת מקצועית עם ניסיון של למעלה מ-10 שנים ביישוב סכסוכים מורכבים בדרך יצירתית ויעילה",
      "מרצה באוניברסיטת בן גוריון ומנחה קורסי גישור מטעם קבוצת \"גומא-גבים\"",
      "לשעבר עוזרת משפטית לשופט בבית משפט השלום",
      "בעלת משרד עצמאי המתמחה בדיני משפחה ועבודה",
    ],
  },
  {
    name: "אייל שמריהו",
    role: "מגשר ועורך דין",
    image: "/eyal.png",
    points: [
      "בעל ניסיון של 14 שנה במגזר הפרטי בתחום הגישור וייישוב סכסוכים",
      "ניסיון מצטבר של כ-18 שנה בתחום הגישור וייישוב סכסוכים",
      "לשעבר עורך דין ביחידת הסיוע של בתי המשפט",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="w-16 h-px bg-gold mb-6" />
            <h1 className="text-5xl font-bold text-white mb-4">
              {c["about.header.title"]}
            </h1>
            <p className="text-white/55 text-xl">
              {c["about.header.subtitle"]}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About the center */}
      <SectionWrapper className="bg-white">
        <FadeIn>
          <div className="max-w-3xl">
            <div className="w-16 h-px bg-gold mb-8" />
            <h2 className="text-3xl font-bold text-navy mb-6">
              {c["about.center.title"]}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {c["about.center.p1"]}
            </p>
            <p className="text-gray-500 leading-relaxed">
              {c["about.center.p2"]}
            </p>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Vision */}
      <section className="bg-navy py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-px bg-gold mx-auto mb-8" />
              <h2 className="text-3xl font-bold text-white mb-8">
                {c["about.vision.title"]}
              </h2>
              <p className="text-white/70 text-xl leading-relaxed">
                {c["about.vision.body"]}
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
              <p className="text-gold font-semibold text-lg uppercase tracking-wider mb-2">
                {c["about.founder.label"]}
              </p>
              <h2 className="text-4xl font-bold text-navy mb-2">
                {c["about.founder.name"]}
              </h2>
              <p className="text-lg text-gray-500 mb-8">
                {c["about.founder.role"]}
              </p>
              <ul className="space-y-4 mb-10">
                {[0, 1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-1 shrink-0">◆</span>
                    <span className="text-gray-600 text-xl leading-relaxed">
                      {c[`about.founder.${i}`]}
                    </span>
                  </li>
                ))}
              </ul>
              <blockquote className="border-r-4 border-gold pr-6 py-2">
                <p className="text-gold text-xl font-semibold">
                  &quot;{c["about.founder.quote"]}&quot;
                </p>
              </blockquote>
            </div>

            {/* Founder photo */}
            <div className="rounded-2xl overflow-hidden aspect-[4/5] relative shadow-lg">
              <Image
                src="/michal.png"
                alt="עו״ד מיכל זמרן — מייסדת המרכז"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper className="bg-gray-50">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-navy mb-2">
              {c["about.team.title"]}
            </h2>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {teamMembers.map((member, idx) => (
            <FadeIn key={idx} delay={idx * 120} className="h-full">
              <div className="h-full bg-white rounded-2xl p-8 border border-gold/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                <div
                  className="mb-6 shrink-0 rounded-full overflow-hidden"
                  style={{ width: 320, height: 320, border: "3px solid #C9A646" }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-4xl font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-xl font-semibold mb-6" style={{ color: "#C9A646" }}>{member.role}</p>
                <ul className="space-y-3 text-right w-full">
                  {member.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-right">
                      <span className="shrink-0 mt-1" style={{ color: "#C9A646" }}>◆</span>
                      <span className="text-gray-600 text-xl leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gold py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy mb-6">
              {c["about.cta.title"]}
            </h2>
            <Button href="/contact" variant="dark">
              {c["about.cta.button"]}
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
