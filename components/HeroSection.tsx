"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import EditableText from "@/components/EditableText";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollableDistance = height - window.innerHeight;
      if (scrollableDistance <= 0) return;
      setProgress(Math.max(0, Math.min(1, -top / scrollableDistance)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let op1 = 1, op2 = 0, op3 = 0;
  if (progress <= 0.33) {
    op1 = 1; op2 = 0; op3 = 0;
  } else if (progress <= 0.66) {
    const t = (progress - 0.33) / 0.33;
    op1 = 1 - t; op2 = t; op3 = 0;
  } else {
    const t = (progress - 0.66) / 0.34;
    op1 = 0; op2 = 1 - t; op3 = t;
  }

  const boxShadow = `0 0 60px rgba(201, 166, 70, ${progress * 0.4})`;

  return (
    <div ref={containerRef} className="h-[250vh] relative bg-navy">
      {/* decorative lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-px h-full bg-gold/10" />
        <div className="absolute top-0 right-3/4 w-px h-full bg-gold/5" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gold/5" />
      </div>

      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Right column (first in markup = right in RTL): hero text */}
            <div>
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

            {/* Left column (second in markup = left in RTL): puzzle animation */}
            <div className="flex flex-col items-center">
              <div
                className="relative w-full max-w-[480px] aspect-square mx-auto"
                style={{ boxShadow, transition: "box-shadow 0.3s ease" }}
              >
                <Image
                  src="/puzzle-broken.png"
                  fill
                  className="object-contain"
                  style={{ opacity: op1, transition: "opacity 0.4s ease" }}
                  alt="פאזל שבור"
                  priority
                />
                <Image
                  src="/puzzle-touching.png"
                  fill
                  className="object-contain"
                  style={{ opacity: op2, transition: "opacity 0.4s ease" }}
                  alt="פאזל מתחבר"
                />
                <Image
                  src="/puzzle-joined.png"
                  fill
                  className="object-contain"
                  style={{ opacity: op3, transition: "opacity 0.4s ease" }}
                  alt="פאזל מחובר"
                />
              </div>

              <div
                className="mt-8 flex items-center justify-center"
                style={{ opacity: progress > 0.85 ? 1 : 0, transition: "opacity 0.7s ease" }}
                dir="rtl"
              >
                <p className="text-gold font-heading text-2xl md:text-3xl font-bold text-center">
                  פתרון שמתחיל בשיחה
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to left, transparent, #C9A646, transparent)" }}
        aria-hidden="true"
      />
    </div>
  );
}
