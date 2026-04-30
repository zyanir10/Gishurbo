"use client";

import { useRef, useEffect, useState, useMemo } from "react";

// ─── Utilities ───────────────────────────────────────────────────────────────
function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
function pp(progress: number, s: number, e: number) {
  return Math.max(0, Math.min(1, (progress - s) / (e - s)));
}

// ─── Constants ────────────────────────────────────────────────────────────────
const CX = 400; // SVG center x
const PUZZLE_CY = 230; // puzzle vertical center in SVG
const FIG_CY = 195; // figure waist center y

// ─── Puzzle piece paths (centered at 0,0) ─────────────────────────────────
// Left piece: x -75 to 0, tab protrudes right (+12px)
const LEFT_PIECE =
  "M -75,-40 L -75,40 L 0,40 L 0,13 Q 12,13 12,0 Q 12,-13 0,-13 L 0,-40 Z";
// Right piece: x 0 to 75, socket cut into left (-12px)
const RIGHT_PIECE =
  "M 0,-40 L 0,-13 Q -12,-13 -12,0 Q -12,13 0,13 L 0,40 L 75,40 L 75,-40 Z";

export default function PuzzleAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [burst, setBurst] = useState(false);
  const prevP = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      if (scrollable <= 0) return;
      const p = Math.max(0, Math.min(1, -top / scrollable));
      if (prevP.current < 0.66 && p >= 0.66) setBurst(true);
      prevP.current = p;
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ─── Phase local progress ───────────────────────────────────────────────
  const p1 = pp(progress, 0, 0.33);      // CONFLICT
  const p2 = pp(progress, 0.33, 0.66);   // APPROACHING
  const p3 = pp(progress, 0.66, 1.0);    // RESOLUTION

  // ─── Figure X positions ─────────────────────────────────────────────────
  let wX: number, mX: number;
  if (progress <= 0.33) {
    wX = CX + lerp(-0.60, -0.35, p1) * 400;
    mX = CX + lerp(0.60, 0.35, p1) * 400;
  } else if (progress <= 0.66) {
    wX = CX + lerp(-0.35, -0.20, p2) * 400;
    mX = CX + lerp(0.35, 0.20, p2) * 400;
  } else {
    wX = CX + lerp(-0.20, -0.12, p3) * 400;
    mX = CX + lerp(0.20, 0.12, p3) * 400;
  }

  // ─── Figure rotation (lean inward in phase 1, straighten in phase 2) ───
  const lean = progress <= 0.33 ? lerp(0, 8, p1) : lerp(8, 0, p2);
  const wRot = progress <= 0.66 ? lean : 0;
  const mRot = progress <= 0.66 ? -lean : 0;

  // ─── Arm rotation toward puzzle in phase 3 ─────────────────────────────
  const armRot = lerp(0, 25, p3);

  // ─── Puzzle gap ─────────────────────────────────────────────────────────
  const gap = progress <= 0.33 ? 30 : lerp(30, 0, p2);

  // ─── Puzzle piece rotation (pulled apart in phase 1) ───────────────────
  const pieceRot = progress <= 0.33 ? lerp(0, 5, p1) : lerp(5, 0, p2);

  // ─── Opacity layers ─────────────────────────────────────────────────────
  const crackOp = progress <= 0.33 ? 1 : lerp(1, 0, p2);
  const halfOp = progress <= 0.33 ? 1 : lerp(1, 0, p2);
  const unifiedOp = progress <= 0.33 ? 0 : lerp(0, 1, p2);
  const puzzleScale = progress <= 0.66 ? 1 : lerp(1, 1.08, p3);

  // ─── Glow ───────────────────────────────────────────────────────────────
  const glowOp = progress <= 0.33 ? 0 : progress <= 0.66 ? lerp(0, 0.3, p2) : lerp(0.3, 0.55, p3);
  const glowRx = progress <= 0.33 ? 0 : progress <= 0.66 ? lerp(0, 90, p2) : 90;

  // ─── Text ────────────────────────────────────────────────────────────────
  const textOp = progress > 0.85 ? pp(progress, 0.85, 1.0) : 0;

  // ─── Particles (stable) ──────────────────────────────────────────────────
  const particles = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      angle: (i / 12) * Math.PI * 2 + (i % 3) * 0.2,
      dist: 35 + (i % 4) * 12,
      r: 3 + (i % 3) * 1.5,
      color: i % 2 === 0 ? "#C9A646" : "#D85C5C",
      delay: i * 35,
    })), []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: "300vh", background: "#223558" }}
    >
      <style>{`
        @keyframes particleBurst {
          0%   { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(var(--pdx), var(--pdy)) scale(0.4); }
        }
        @keyframes goldPulse {
          0%, 100% { opacity: 0.35; }
          50%       { opacity: 0.75; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 800 420"
          className="w-full"
          style={{ maxWidth: 720, maxHeight: "72vh" }}
          aria-hidden="true"
        >
          <defs>
            {/* Red glow filter for crack */}
            <filter id="crackGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feColorMatrix in="blur" type="matrix"
                values="2 0 0 0 0.8  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
                result="red" />
              <feMerge>
                <feMergeNode in="red" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Gold radial glow */}
            <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C9A646" stopOpacity={glowOp} />
              <stop offset="100%" stopColor="#C9A646" stopOpacity={0} />
            </radialGradient>

            {/* Gold pulse glow (phase 3) */}
            <radialGradient id="pulseGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C9A646" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#C9A646" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ── Background glow ─────────────────────────────────────────── */}
          <ellipse
            cx={CX} cy={PUZZLE_CY}
            rx={glowRx} ry={glowRx * 0.65}
            fill="url(#glowGrad)"
          />
          {progress > 0.66 && (
            <ellipse
              cx={CX} cy={PUZZLE_CY}
              rx={110} ry={70}
              fill="url(#pulseGrad)"
              style={{ animation: "goldPulse 2s ease-in-out infinite" }}
            />
          )}

          {/* ── WOMAN figure (left side) ─────────────────────────────────── */}
          <g style={{
            transform: `translate(${wX}px, ${FIG_CY}px) rotate(${wRot}deg)`,
            transformOrigin: `${wX}px ${FIG_CY}px`,
          }}>
            {/* Hair */}
            <ellipse cx={0} cy={-82} rx={21} ry={9} fill="#15152a" />
            <rect x={-21} y={-90} width={42} height={16} rx={8} fill="#15152a" />
            {/* Head */}
            <circle cx={0} cy={-63} r={21} fill="#d4a574" />
            {/* Blazer */}
            <path d="M -19,-40 Q 0,-46 19,-40 L 22,30 Q 0,35 -22,30 Z" fill="#E8A020" />
            {/* Lapels */}
            <path d="M -7,-40 L 0,-30 L 7,-40" fill="none" stroke="#f5f0e8" strokeWidth={1.5} strokeLinejoin="round" />
            {/* Left arm (outer, away from puzzle) */}
            <rect x={-32} y={-35} width={13} height={56} rx={6} fill="#E8A020" />
            <circle cx={-25.5} cy={22} r={5.5} fill="#d4a574" />
            {/* Right arm (inner, toward puzzle) — rotates in phase 3 */}
            <g style={{
              transform: `rotate(${armRot}deg)`,
              transformOrigin: "22px -25px",
            }}>
              <rect x={19} y={-35} width={13} height={56} rx={6} fill="#E8A020" />
              <circle cx={25.5} cy={22} r={5.5} fill="#d4a574" />
            </g>
            {/* Legs */}
            <rect x={-17} y={30} width={13} height={62} rx={6} fill="#15152a" />
            <rect x={4}   y={30} width={13} height={62} rx={6} fill="#15152a" />
          </g>

          {/* ── MAN figure (right side) ──────────────────────────────────── */}
          <g style={{
            transform: `translate(${mX}px, ${FIG_CY}px) rotate(${mRot}deg)`,
            transformOrigin: `${mX}px ${FIG_CY}px`,
          }}>
            {/* Hair */}
            <rect x={-21} y={-90} width={42} height={14} rx={6} fill="#15152a" />
            {/* Head */}
            <circle cx={0} cy={-63} r={21} fill="#c4956a" />
            {/* Blazer */}
            <path d="M -19,-40 Q 0,-46 19,-40 L 22,30 Q 0,35 -22,30 Z" fill="#2BA8B8" />
            {/* Lapels */}
            <path d="M -7,-40 L 0,-30 L 7,-40" fill="none" stroke="#f5f0e8" strokeWidth={1.5} strokeLinejoin="round" />
            {/* Right arm (outer, away from puzzle) */}
            <rect x={19} y={-35} width={13} height={56} rx={6} fill="#2BA8B8" />
            <circle cx={25.5} cy={22} r={5.5} fill="#c4956a" />
            {/* Left arm (inner, toward puzzle) — rotates in phase 3 */}
            <g style={{
              transform: `rotate(${-armRot}deg)`,
              transformOrigin: "-22px -25px",
            }}>
              <rect x={-32} y={-35} width={13} height={56} rx={6} fill="#2BA8B8" />
              <circle cx={-25.5} cy={22} r={5.5} fill="#c4956a" />
            </g>
            {/* Legs */}
            <rect x={-17} y={30} width={13} height={62} rx={6} fill="#15152a" />
            <rect x={4}   y={30} width={13} height={62} rx={6} fill="#15152a" />
          </g>

          {/* ── PUZZLE (centered at CX, PUZZLE_CY) ───────────────────────── */}
          <g style={{
            transform: `translate(${CX}px, ${PUZZLE_CY}px) scale(${puzzleScale})`,
            transformOrigin: `${CX}px ${PUZZLE_CY}px`,
          }}>
            {/* Left half-piece */}
            <g
              opacity={halfOp}
              style={{
                transform: `translate(${-gap / 2}px, 0px) rotate(${-pieceRot}deg)`,
                transformOrigin: "0px 0px",
              }}
            >
              <path d={LEFT_PIECE} fill="#D85C5C" />
            </g>

            {/* Right half-piece */}
            <g
              opacity={halfOp}
              style={{
                transform: `translate(${gap / 2}px, 0px) rotate(${pieceRot}deg)`,
                transformOrigin: "0px 0px",
              }}
            >
              <path d={RIGHT_PIECE} fill="#D85C5C" />
            </g>

            {/* Crack / lightning bolt (visible in gap area) */}
            <g opacity={crackOp} filter="url(#crackGlow)">
              <path
                d="M 2,-32 L -5,-12 L 6,0 L -4,14 L 3,34"
                fill="none"
                stroke="#FF4444"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* Unified piece */}
            <g opacity={unifiedOp}>
              <rect x={-75} y={-40} width={150} height={80} rx={3} fill="#D85C5C" />
              {/* Faint seam */}
              <line x1={0} y1={-40} x2={0} y2={40} stroke="#b84040" strokeWidth={1} opacity={0.4} />
            </g>

            {/* Particle burst */}
            {burst && particles.map((pt, i) => {
              const dx = Math.cos(pt.angle) * pt.dist * 2.2;
              const dy = Math.sin(pt.angle) * pt.dist * 2.2;
              return (
                <circle
                  key={i}
                  cx={0} cy={0}
                  r={pt.r}
                  fill={pt.color}
                  style={{
                    ["--pdx" as string]: `${dx}px`,
                    ["--pdy" as string]: `${dy}px`,
                    animation: `particleBurst 0.6s cubic-bezier(0.22,1,0.36,1) ${pt.delay}ms forwards`,
                  } as React.CSSProperties}
                />
              );
            })}
          </g>
        </svg>

        {/* Hebrew text reveal */}
        <p
          dir="rtl"
          className="font-heading font-bold text-center mt-6 px-4"
          style={{
            opacity: textOp,
            transition: "opacity 0.5s cubic-bezier(0.22,1,0.36,1)",
            color: "#C9A646",
            fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
            letterSpacing: "0.01em",
          }}
        >
          פתרון שמתחיל בשיחה
        </p>
      </div>
    </section>
  );
}
