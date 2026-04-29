"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function PuzzleAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollableDistance = height - window.innerHeight;
      if (scrollableDistance <= 0) return;
      const p = Math.max(0, Math.min(1, -top / scrollableDistance));
      setProgress(p);
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

  const glowAlpha = progress * 0.4;
  const boxShadow = `0 0 60px rgba(201, 166, 70, ${glowAlpha})`;
  const textOpacity = progress > 0.85 ? 1 : 0;

  return (
    <div
      ref={containerRef}
      className="h-[250vh] relative w-full bg-[#223558]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Image stack */}
        <div
          className="relative w-full max-w-[500px] aspect-square mx-4"
          style={{ boxShadow, transition: "box-shadow 0.3s ease" }}
        >
          <Image
            src="/puzzle-broken.png"
            fill
            className="object-contain"
            style={{ opacity: op1, transition: "opacity 0.4s ease" }}
            alt="Broken puzzle"
            priority
          />
          <Image
            src="/puzzle-touching.png"
            fill
            className="object-contain"
            style={{ opacity: op2, transition: "opacity 0.4s ease" }}
            alt="Touching puzzle"
          />
          <Image
            src="/puzzle-joined.png"
            fill
            className="object-contain"
            style={{ opacity: op3, transition: "opacity 0.4s ease" }}
            alt="Joined puzzle"
          />
        </div>

        {/* Reveal text */}
        <div
          className="mt-12 h-16 flex items-center justify-center"
          style={{ opacity: textOpacity, transition: "opacity 0.7s ease" }}
          dir="rtl"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-center font-heading"
            style={{ color: "#C9A646" }}
          >
            פתרון שמתחיל בשיחה
          </h2>
        </div>
      </div>
    </div>
  );
}
