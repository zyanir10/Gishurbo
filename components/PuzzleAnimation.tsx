"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";

interface Props {
  kicker?: string;
  tagline?: string;
  subtitle?: string;
}

const GOLD = "#C9A646";
const RED = "#E63946";
const BG = "#223558";

/* ── 40 twinkling stars (seeded positions so no hydration mismatch) ── */
const STARS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: ((i * 137.508 + 17) % 100),
  y: ((i * 97.333 + 31) % 100),
  r: 1 + ((i * 53) % 3) * 0.6,
  delay: (i * 0.19) % 3,
  dur: 2 + ((i * 71) % 20) * 0.1,
}));

/* ── Puzzle piece SVG paths (viewBox 0 0 120 120) ── */
/* Left piece: tab protrudes right, blank on left */
const LEFT_PIECE_PATH =
  "M10,10 L70,10 L70,45 Q90,45 90,55 Q90,65 70,65 L70,110 L10,110 Z";
/* Right piece: blank receives right tab of left, tab protrudes up */
const RIGHT_PIECE_PATH =
  "M30,10 L30,45 Q10,45 10,55 Q10,65 30,65 L30,110 L110,110 L110,10 Z";

/* ── Flat SVG woman figure (right side) ── */
function WomanFigure({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 280"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* head */}
      <ellipse cx="80" cy="38" rx="28" ry="30" fill="#F5CBA7" />
      {/* hair */}
      <ellipse cx="80" cy="22" rx="28" ry="16" fill="#3D2B1F" />
      {/* neck */}
      <rect x="70" y="64" width="20" height="18" rx="4" fill="#F5CBA7" />
      {/* yellow blazer body */}
      <path d="M30 82 Q30 78 50 76 L80 80 L110 76 Q130 78 130 82 L128 160 L32 160 Z" fill="#E8A020" />
      {/* blazer lapels */}
      <path d="M80 80 L64 100 L72 160 L80 155 L88 160 L96 100 Z" fill="#fff" opacity="0.9" />
      {/* collar */}
      <path d="M70 76 L80 94 L90 76" fill="none" stroke="#C8821A" strokeWidth="1.5" />
      {/* skirt */}
      <path d="M36 160 L30 230 L130 230 L124 160 Z" fill="#223558" />
      {/* left arm */}
      <path d="M32 90 Q10 110 14 150" stroke="#E8A020" strokeWidth="22" strokeLinecap="round" fill="none" />
      {/* right arm */}
      <path d="M128 90 Q150 110 146 150" stroke="#E8A020" strokeWidth="22" strokeLinecap="round" fill="none" />
      {/* left hand */}
      <ellipse cx="14" cy="152" rx="10" ry="8" fill="#F5CBA7" />
      {/* right hand */}
      <ellipse cx="146" cy="152" rx="10" ry="8" fill="#F5CBA7" />
      {/* legs */}
      <rect x="50" y="230" width="22" height="44" rx="8" fill="#1a1a2e" />
      <rect x="88" y="230" width="22" height="44" rx="8" fill="#1a1a2e" />
      {/* shoes */}
      <ellipse cx="61" cy="274" rx="16" ry="7" fill="#1a0a00" />
      <ellipse cx="99" cy="274" rx="16" ry="7" fill="#1a0a00" />
      {/* face details */}
      <ellipse cx="68" cy="40" rx="4" ry="5" fill="#3D2B1F" />
      <ellipse cx="92" cy="40" rx="4" ry="5" fill="#3D2B1F" />
      <path d="M72 54 Q80 60 88 54" stroke="#c0735a" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ── Flat SVG man figure (left side) ── */
function ManFigure({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 280"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* head */}
      <ellipse cx="80" cy="38" rx="27" ry="30" fill="#D4A574" />
      {/* hair */}
      <ellipse cx="80" cy="20" rx="27" ry="14" fill="#2C1A0E" />
      {/* neck */}
      <rect x="70" y="64" width="20" height="18" rx="4" fill="#D4A574" />
      {/* teal jacket */}
      <path d="M28 82 Q28 78 48 76 L80 80 L112 76 Q132 78 132 82 L130 168 L30 168 Z" fill="#2A9D8F" />
      {/* shirt/tie area */}
      <path d="M80 80 L68 96 L74 168 L80 162 L86 168 L92 96 Z" fill="#fff" opacity="0.9" />
      {/* tie */}
      <path d="M80 90 L76 130 L80 140 L84 130 Z" fill="#E63946" />
      {/* trousers */}
      <path d="M34 168 L32 240 L78 240 L80 200 L82 240 L128 240 L126 168 Z" fill="#2C3E50" />
      {/* left arm */}
      <path d="M30 90 Q8 110 12 150" stroke="#2A9D8F" strokeWidth="22" strokeLinecap="round" fill="none" />
      {/* right arm */}
      <path d="M130 90 Q152 110 148 150" stroke="#2A9D8F" strokeWidth="22" strokeLinecap="round" fill="none" />
      {/* hands */}
      <ellipse cx="12" cy="152" rx="10" ry="8" fill="#D4A574" />
      <ellipse cx="148" cy="152" rx="10" ry="8" fill="#D4A574" />
      {/* shoes */}
      <ellipse cx="55" cy="244" rx="22" ry="8" fill="#0a0a0a" />
      <ellipse cx="105" cy="244" rx="22" ry="8" fill="#0a0a0a" />
      {/* face */}
      <ellipse cx="68" cy="40" rx="4" ry="5" fill="#2C1A0E" />
      <ellipse cx="92" cy="40" rx="4" ry="5" fill="#2C1A0E" />
      <path d="M72 54 Q80 59 88 54" stroke="#a0674a" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ── Single puzzle piece SVG ── */
function PuzzlePiece({
  path,
  glowing,
  flip,
}: {
  path: string;
  glowing: boolean;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      width="110"
      height="110"
      style={{ transform: flip ? "scaleX(-1)" : "none", overflow: "visible" }}
      aria-hidden="true"
    >
      {glowing && (
        <filter id="pieceGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      )}
      <path
        d={path}
        fill={RED}
        stroke={glowing ? GOLD : "rgba(255,255,255,0.3)"}
        strokeWidth={glowing ? 3 : 1.5}
        filter={glowing ? "url(#pieceGlow)" : undefined}
        style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
      />
    </svg>
  );
}

/* ── Particle ── */
interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
}

export default function PuzzleAnimation({
  kicker = "שיתוף פעולה",
  tagline = "יחד, אנחנו מגיעים לפתרון",
  subtitle = "גישור ובוררות — כשהצדדים מתחברים, הפתרון מתאפשר",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [connected, setConnected] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [glowBurst, setGlowBurst] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);
  const didConnect = useRef(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* pieces travel from sides toward center */
  const leftPieceX = useTransform(scrollYProgress, [0, 0.85], [-220, 0]);
  const rightPieceX = useTransform(scrollYProgress, [0, 0.85], [220, 0]);

  /* figures slide in from further sides */
  const leftFigureX = useTransform(scrollYProgress, [0, 0.7], [-160, 0]);
  const rightFigureX = useTransform(scrollYProgress, [0, 0.7], [160, 0]);
  const figureOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  /* trigger connection effects once */
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      if (v >= 0.87 && !didConnect.current) {
        didConnect.current = true;
        triggerConnection();
      }
    });
    return unsub;
  }, [scrollYProgress]);

  function triggerConnection() {
    /* shake */
    setShaking(true);
    setTimeout(() => setShaking(false), 180);

    /* glow burst */
    setGlowBurst(true);
    setTimeout(() => setGlowBurst(false), 600);

    /* piece glow */
    setConnected(true);

    /* 16 particles */
    const now = Date.now();
    const newParticles: Particle[] = Array.from({ length: 16 }, (_, i) => {
      const angle = (i / 16) * Math.PI * 2;
      const speed = 3 + Math.random() * 5;
      return {
        id: now + i,
        x: 0,
        y: 0,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: i % 2 === 0 ? GOLD : RED,
        size: 4 + Math.random() * 5,
        life: 1,
      };
    });
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1200);

    /* tagline */
    setTimeout(() => setTaglineVisible(true), 300);
  }

  return (
    <div ref={containerRef} style={{ height: "300vh", position: "relative" }}>
      {/* sticky viewport */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          background: BG,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          direction: "rtl",
        }}
      >
        {/* stars */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          aria-hidden="true"
        >
          {STARS.map((s) => (
            <circle key={s.id} cx={`${s.x}%`} cy={`${s.y}%`} r={s.r} fill="white" opacity="0.5">
              <animate
                attributeName="opacity"
                values="0.2;0.8;0.2"
                dur={`${s.dur}s`}
                begin={`${s.delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>

        {/* glow burst overlay */}
        <AnimatePresence>
          {glowBurst && (
            <motion.div
              initial={{ opacity: 0.8, scale: 0.5 }}
              animate={{ opacity: 0, scale: 3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                position: "absolute",
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${GOLD}88 0%, ${RED}44 50%, transparent 75%)`,
                pointerEvents: "none",
                zIndex: 30,
              }}
            />
          )}
        </AnimatePresence>

        {/* particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{
              x: p.vx * 60,
              y: p.vy * 60,
              opacity: 0,
              scale: 0,
            }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            style={{
              position: "absolute",
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: p.color,
              pointerEvents: "none",
              zIndex: 40,
            }}
          />
        ))}

        {/* kicker */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            color: GOLD,
            fontSize: 13,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: 12,
            fontFamily: "var(--font-heebo), sans-serif",
          }}
        >
          {kicker}
        </motion.p>

        {/* scene: figures + puzzle pieces */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 0,
            width: "100%",
            maxWidth: 700,
            transform: shaking
              ? `translateX(${Math.random() > 0.5 ? 4 : -4}px)`
              : "translateX(0)",
            transition: shaking ? "none" : "transform 0.05s",
          }}
        >
          {/* left figure (man) — RTL: left = left side of screen */}
          <motion.div
            style={{
              x: leftFigureX,
              opacity: figureOpacity,
              position: "relative",
              zIndex: 10,
              marginLeft: -20,
            }}
          >
            <ManFigure className="w-36 h-auto drop-shadow-xl" />
          </motion.div>

          {/* left puzzle piece */}
          <motion.div
            style={{
              x: leftPieceX,
              position: "relative",
              zIndex: 20,
              marginBottom: 80,
              alignSelf: "center",
            }}
          >
            <PuzzlePiece path={LEFT_PIECE_PATH} glowing={connected} />
          </motion.div>

          {/* right puzzle piece */}
          <motion.div
            style={{
              x: rightPieceX,
              position: "relative",
              zIndex: 20,
              marginBottom: 80,
              alignSelf: "center",
            }}
          >
            <PuzzlePiece path={RIGHT_PIECE_PATH} glowing={connected} flip />
          </motion.div>

          {/* right figure (woman) */}
          <motion.div
            style={{
              x: rightFigureX,
              opacity: figureOpacity,
              position: "relative",
              zIndex: 10,
              marginRight: -20,
            }}
          >
            <WomanFigure className="w-36 h-auto drop-shadow-xl" />
          </motion.div>
        </div>

        {/* tagline reveal */}
        <AnimatePresence>
          {taglineVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ textAlign: "center", marginTop: 32, padding: "0 24px" }}
            >
              <h2
                style={{
                  color: "#ffffff",
                  fontSize: "clamp(22px, 4vw, 36px)",
                  fontWeight: 800,
                  fontFamily: "var(--font-heebo), sans-serif",
                  lineHeight: 1.3,
                  marginBottom: 10,
                }}
              >
                {tagline}
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "clamp(14px, 2vw, 18px)",
                  fontFamily: "var(--font-assistant), sans-serif",
                  maxWidth: 500,
                  margin: "0 auto",
                }}
              >
                {subtitle}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* scroll hint */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
          aria-hidden="true"
          transition={{ duration: 0.3 }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 28,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, letterSpacing: "0.15em" }}>
              גלול למטה
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              style={{
                width: 20,
                height: 20,
                borderRight: `2px solid ${GOLD}`,
                borderBottom: `2px solid ${GOLD}`,
                transform: "rotate(45deg)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
