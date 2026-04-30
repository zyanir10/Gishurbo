"use client";

import { useRef, useEffect, useState } from "react";

/* ── utilities ─────────────────────────────────────────────────────── */
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number, lo: number, hi: number) =>
  Math.max(0, Math.min(1, (v - lo) / (hi - lo)));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/* ── puzzle piece SVG paths ─────────────────────────────────────────
   Both halves use viewBox "0 0 100 180".
   Left body fills the div; right-side tab protrudes beyond div edge (overflow:visible).
   Right body fills the div; left-side socket cuts inward (also overflow:visible).
─────────────────────────────────────────────────────────────────── */
const LEFT_HALF =
  "M0,0 L100,0 L100,68 C108,70 122,80 122,90 C122,100 108,110 100,112 L100,180 L0,180 Z";

const RIGHT_HALF =
  "M0,0 L100,0 L100,180 L0,180 L0,112 C-8,110 -22,100 -22,90 C-22,80 -8,70 0,68 Z";

/* unified piece: viewBox "-5 -25 210 230" — top tab + wide body */
const UNIFIED =
  "M0,0 L82,0 C82,-22 92,-30 105,-30 C118,-30 128,-22 128,0 L210,0 L210,200 L0,200 Z";

/* crack lightning bolt — viewBox "0 0 22 180" */
const CRACK = "M11,4 L3,52 L17,70 L1,118 L15,136 L7,176";

/* ── particles ──────────────────────────────────────────────────── */
const PARTS = Array.from({ length: 12 }, (_, i) => {
  const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
  const dist = 48 + (i % 3) * 28;
  return {
    id: i,
    dx: Math.cos(angle) * dist,
    dy: Math.sin(angle) * dist,
    r: 3 + (i % 4),
    color: i % 2 === 0 ? "#C9A646" : "#D85C5C",
    delay: (i % 3) * 45,
  };
});

/* ── Woman SVG figure ───────────────────────────────────────────── */
function Woman({ armDeg }: { armDeg: number }) {
  return (
    <svg
      viewBox="0 0 100 185"
      style={{ width: "100%", height: "100%", overflow: "visible" }}
      aria-hidden="true"
    >
      {/* hair */}
      <ellipse cx="50" cy="16" rx="18" ry="16" fill="#1A0808" />
      <path d="M32,24 Q28,38 33,46" stroke="#1A0808" strokeWidth="6" fill="none" />
      {/* face */}
      <ellipse cx="50" cy="23" rx="14" ry="15" fill="#F8C9A0" />
      {/* neck */}
      <rect x="44" y="36" width="12" height="10" rx="3" fill="#F8C9A0" />
      {/* yellow blazer */}
      <path d="M16,46 Q32,41 50,43 Q68,41 84,46 L86,108 L14,108 Z" fill="#E8A020" />
      {/* inner shirt */}
      <polygon points="50,43 43,58 50,62 57,58" fill="#F5F0EA" />
      {/* outer arm — hangs at side */}
      <line x1="17" y1="54" x2="4" y2="89" stroke="#E8A020" strokeWidth="13" strokeLinecap="round" />
      <ellipse cx="4" cy="92" rx="7" ry="6" fill="#F8C9A0" />
      {/* inner arm — reaches toward puzzle (right side), rotates in phase 3 */}
      <g style={{ transform: `rotate(${-armDeg}deg)`, transformOrigin: "83px 54px" }}>
        <line x1="83" y1="54" x2="100" y2="89" stroke="#E8A020" strokeWidth="13" strokeLinecap="round" />
        <ellipse cx="101" cy="92" rx="7" ry="6" fill="#F8C9A0" />
      </g>
      {/* pants */}
      <rect x="15" y="108" width="26" height="64" rx="5" fill="#1a1a2e" />
      <rect x="59" y="108" width="26" height="64" rx="5" fill="#1a1a2e" />
      {/* shoes */}
      <ellipse cx="28" cy="173" rx="16" ry="7" fill="#0D0D1A" />
      <path d="M63,166 L80,172 L76,178 L59,178 Z" fill="#0D0D1A" />
      {/* eyes */}
      <ellipse cx="43" cy="21" rx="3" ry="3.5" fill="#2C1010" />
      <ellipse cx="57" cy="21" rx="3" ry="3.5" fill="#2C1010" />
      {/* smile */}
      <path d="M44,31 Q50,36 56,31" stroke="#C07850" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ── Man SVG figure ─────────────────────────────────────────────── */
function Man({ armDeg }: { armDeg: number }) {
  return (
    <svg
      viewBox="0 0 100 185"
      style={{ width: "100%", height: "100%", overflow: "visible" }}
      aria-hidden="true"
    >
      {/* hair */}
      <ellipse cx="50" cy="12" rx="18" ry="12" fill="#1A0808" />
      <rect x="32" y="8" width="36" height="14" fill="#1A0808" />
      {/* face */}
      <ellipse cx="50" cy="23" rx="14" ry="15" fill="#D4956A" />
      {/* neck */}
      <rect x="44" y="36" width="12" height="10" rx="3" fill="#D4956A" />
      {/* teal blazer */}
      <path d="M14,46 Q30,41 50,43 Q70,41 86,46 L88,108 L12,108 Z" fill="#2BA8B8" />
      {/* inner shirt */}
      <polygon points="50,43 43,58 50,62 57,58" fill="#F5F0EA" />
      {/* outer arm — hangs at side (right) */}
      <line x1="83" y1="54" x2="96" y2="89" stroke="#2BA8B8" strokeWidth="13" strokeLinecap="round" />
      <ellipse cx="97" cy="92" rx="7" ry="6" fill="#D4956A" />
      {/* inner arm — reaches toward puzzle (left side), rotates in phase 3 */}
      <g style={{ transform: `rotate(${armDeg}deg)`, transformOrigin: "17px 54px" }}>
        <line x1="17" y1="54" x2="0" y2="89" stroke="#2BA8B8" strokeWidth="13" strokeLinecap="round" />
        <ellipse cx="-1" cy="92" rx="7" ry="6" fill="#D4956A" />
      </g>
      {/* pants */}
      <rect x="14" y="108" width="26" height="64" rx="5" fill="#1a1a2e" />
      <rect x="60" y="108" width="26" height="64" rx="5" fill="#1a1a2e" />
      {/* shoes */}
      <path d="M14,166 L-4,172 L-1,178 L27,178 Z" fill="#0D0D1A" />
      <ellipse cx="73" cy="173" rx="16" ry="7" fill="#0D0D1A" />
      {/* eyes */}
      <ellipse cx="43" cy="21" rx="3" ry="3.5" fill="#2C1010" />
      <ellipse cx="57" cy="21" rx="3" ry="3.5" fill="#2C1010" />
      {/* smile */}
      <path d="M44,31 Q50,36 56,31" stroke="#A06040" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ── Main component ─────────────────────────────────────────────── */
export default function PuzzleAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [burst, setBurst] = useState(false);
  const didBurst = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    function onScroll() {
      const rect = el!.getBoundingClientRect();
      const total = el!.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, -rect.top / total));
      setProgress(p);

      if (p >= 0.66 && !didBurst.current) {
        didBurst.current = true;
        setBurst(true);
        setTimeout(() => setBurst(false), 750);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── derived animation values ── */

  // Woman X (vw): phase 1: -60→-35 | phase 2: -35→-20 | phase 3: -20→-12
  const womanVW =
    progress < 0.33
      ? lerp(-60, -35, easeOut(clamp01(progress, 0, 0.33)))
      : progress < 0.66
      ? lerp(-35, -20, easeOut(clamp01(progress, 0.33, 0.66)))
      : lerp(-20, -12, easeOut(clamp01(progress, 0.66, 1)));
  const manVW = -womanVW;

  // Body lean ±8deg in phase 1, straight by end of phase 2
  const lean = lerp(8, 0, easeOut(clamp01(progress, 0, 0.66)));

  // Piece gap 30→0 over phase 2
  const gap = lerp(30, 0, easeOut(clamp01(progress, 0.33, 0.66)));

  // Piece tilt ±5deg → 0 by end of phase 2
  const tilt = lerp(5, 0, easeOut(clamp01(progress, 0, 0.66)));

  // Crack visible in phase 1, fades in phase 2
  const crackOp = lerp(1, 0, easeOut(clamp01(progress, 0.33, 0.56)));

  // Split ↔ unified crossfade
  const unifiedOp = clamp01(progress, 0.64, 0.76);
  const splitOp = 1 - unifiedOp;

  // Centre glow grows over phase 2, pulses in phase 3 (CSS animation handles pulse)
  const glowSize = lerp(0, 80, clamp01(progress, 0.33, 0.66));
  const inPhase3 = progress >= 0.66;

  // Unified piece scale 1→1.08 in phase 3
  const unifiedScale = lerp(1, 1.08, easeOut(clamp01(progress, 0.66, 1)));

  // Arm reach: inner arm rotates ~12deg inward during phase 3
  const armDeg = lerp(0, 12, easeOut(clamp01(progress, 0.66, 1)));

  // Tagline
  const tagOp = clamp01(progress, 0.72, 0.86);
  const tagY = lerp(18, 0, easeOut(clamp01(progress, 0.72, 0.86)));

  // Scroll hint
  const hintOp = 1 - clamp01(progress, 0, 0.12);

  return (
    <div ref={sectionRef} style={{ height: "300vh", position: "relative" }}>
      {/* ── sticky viewport ── */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          background: "#223558",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          direction: "rtl",
        }}
      >
        {/* SVG filter defs */}
        <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
          <defs>
            <filter id="pa-red-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feFlood floodColor="#FF4444" floodOpacity="0.9" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="cb" />
              <feMerge>
                <feMergeNode in="cb" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="pa-gold-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feFlood floodColor="#C9A646" floodOpacity="0.55" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="cb" />
              <feMerge>
                <feMergeNode in="cb" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* particles — burst at progress 0.66 */}
        {burst &&
          PARTS.map((p) => (
            <div
              key={p.id}
              style={
                {
                  position: "absolute",
                  left: "50%",
                  top: "45%",
                  width: p.r * 2,
                  height: p.r * 2,
                  borderRadius: "50%",
                  background: p.color,
                  pointerEvents: "none",
                  zIndex: 50,
                  animationDelay: `${p.delay}ms`,
                  animationDuration: "700ms",
                  animationName: "pa-burst",
                  animationTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                  animationFillMode: "forwards",
                  "--dx": `${p.dx}px`,
                  "--dy": `${p.dy}px`,
                } as React.CSSProperties
              }
            />
          ))}

        {/* ── scene stage ── */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 860,
            height: 320,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          {/* Woman (left side of screen) */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: 0,
              width: 130,
              height: 240,
              transform: `translateX(calc(${womanVW}vw - 65px)) rotate(${lean}deg)`,
              transformOrigin: "center bottom",
              willChange: "transform",
              zIndex: 2,
            }}
          >
            <Woman armDeg={armDeg} />
          </div>

          {/* Man (right side of screen) */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: 0,
              width: 130,
              height: 240,
              transform: `translateX(calc(${manVW}vw - 65px)) rotate(${-lean}deg)`,
              transformOrigin: "center bottom",
              willChange: "transform",
              zIndex: 2,
            }}
          >
            <Man armDeg={armDeg} />
          </div>

          {/* Centre glow */}
          {glowSize > 0 && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: glowSize,
                height: glowSize,
                marginLeft: -glowSize / 2,
                marginTop: -glowSize / 2,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(201,166,70,0.38) 0%, transparent 70%)",
                pointerEvents: "none",
                zIndex: 1,
                animationName: inPhase3 ? "pa-gold-pulse" : "none",
                animationDuration: "2s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
              }}
            />
          )}

          {/* Left puzzle half */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 110,
              height: 180,
              marginTop: -90,
              transform: `translateX(calc(-110px - ${gap / 2}px)) rotate(${-tilt}deg)`,
              transformOrigin: "center center",
              opacity: splitOp,
              willChange: "transform, opacity",
              zIndex: 4,
            }}
          >
            <svg
              viewBox="0 0 100 180"
              width="110"
              height="180"
              style={{ overflow: "visible" }}
              aria-hidden="true"
            >
              <path d={LEFT_HALF} fill="#D85C5C" />
            </svg>
          </div>

          {/* Right puzzle half */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 110,
              height: 180,
              marginTop: -90,
              transform: `translateX(${gap / 2}px) rotate(${tilt}deg)`,
              transformOrigin: "center center",
              opacity: splitOp,
              willChange: "transform, opacity",
              zIndex: 3,
            }}
          >
            <svg
              viewBox="0 0 100 180"
              width="110"
              height="180"
              style={{ overflow: "visible" }}
              aria-hidden="true"
            >
              <path d={RIGHT_HALF} fill="#D85C5C" />
            </svg>
          </div>

          {/* Crack */}
          {crackOp > 0 && splitOp > 0 && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                marginLeft: -11,
                marginTop: -90,
                opacity: crackOp * splitOp,
                pointerEvents: "none",
                zIndex: 5,
              }}
            >
              <svg
                viewBox="0 0 22 180"
                width="22"
                height="180"
                style={{ overflow: "visible" }}
                aria-hidden="true"
              >
                <path
                  d={CRACK}
                  stroke="white"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#pa-red-glow)"
                />
              </svg>
            </div>
          )}

          {/* Unified piece */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 210,
              marginLeft: -105,
              marginTop: -110,
              opacity: unifiedOp,
              transform: `scale(${unifiedScale})`,
              transformOrigin: "center center",
              willChange: "transform, opacity",
              zIndex: 4,
              filter: unifiedOp > 0.4 ? "url(#pa-gold-glow)" : "none",
            }}
          >
            <svg
              viewBox="-5 -35 220 240"
              width="210"
              height="220"
              style={{ overflow: "visible" }}
              aria-hidden="true"
            >
              <path d={UNIFIED} fill="#D85C5C" />
            </svg>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            opacity: tagOp,
            transform: `translateY(${tagY}px)`,
            textAlign: "center",
            marginTop: 20,
            padding: "0 24px",
            pointerEvents: "none",
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(20px, 3.5vw, 34px)",
              fontWeight: 800,
              fontFamily: "var(--font-heebo), sans-serif",
              lineHeight: 1.3,
              margin: "0 0 8px",
            }}
          >
            פתרון שמתחיל בשיחה
          </h2>
          <p
            style={{
              color: "#C9A646",
              fontSize: "clamp(13px, 1.8vw, 17px)",
              fontFamily: "var(--font-assistant), sans-serif",
              margin: 0,
            }}
          >
            גישור ובוררות — כשהצדדים מתחברים, הפתרון מתאפשר
          </p>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: hintOp,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 11,
              letterSpacing: "0.15em",
              fontFamily: "var(--font-assistant), sans-serif",
            }}
          >
            גלול למטה
          </span>
          <div style={{ animationName: "pa-bounce", animationDuration: "1.4s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite" }}>
            <div
              style={{
                width: 16,
                height: 16,
                borderRight: "2px solid #C9A646",
                borderBottom: "2px solid #C9A646",
                transform: "rotate(45deg)",
              }}
            />
          </div>
        </div>

        {/* keyframes */}
        <style>{`
          @keyframes pa-burst {
            0%   { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(0); opacity: 0; }
          }
          @keyframes pa-bounce {
            0%, 100% { transform: translateY(0); }
            50%       { transform: translateY(6px); }
          }
          @keyframes pa-gold-pulse {
            0%, 100% { opacity: 0.4; }
            50%       { opacity: 0.9; }
          }
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
