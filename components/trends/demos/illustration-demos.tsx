"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

/* ═══════════════════════════════════════════════════════
   1. Illustration Style Explorer
   Toggle between 2026 illustration paradigms
   ═══════════════════════════════════════════════════════ */
export function IllustrationStyleExplorer() {
  const [style, setStyle] = useState<"plushcore" | "flat-3d" | "handdrawn" | "geometric">("plushcore");

  const styles = [
    { key: "plushcore" as const, label: "Plushcore", color: "#F2B5D4" },
    { key: "flat-3d" as const, label: "3D × Flat", color: "#7EC8E3" },
    { key: "handdrawn" as const, label: "Hand-drawn", color: "#C4B28F" },
    { key: "geometric" as const, label: "Minimal Geo", color: "#B8A9E8" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {styles.map((s) => (
          <button
            key={s.key}
            onClick={() => setStyle(s.key)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              style === s.key
                ? "text-[#0a0a0a]"
                : "bg-white/5 text-fg-muted hover:bg-white/10"
            }`}
            style={style === s.key ? { backgroundColor: s.color } as React.CSSProperties : undefined}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="relative h-72 rounded-xl overflow-hidden bg-[#0e0e0e] border border-border">
        <AnimatePresence mode="wait">
          {style === "plushcore" && <PlushcoreScene key="plush" />}
          {style === "flat-3d" && <Flat3DScene key="flat3d" />}
          {style === "handdrawn" && <HanddrawnScene key="hand" />}
          {style === "geometric" && <GeometricScene key="geo" />}
        </AnimatePresence>

        {/* Style description overlay */}
        <motion.div
          key={style}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
        >
          <p className="text-xs text-white/70">
            {style === "plushcore" && "Soft, toy-like forms with pastel gradients. Characters feel tactile and approachable — popular with Gen Alpha brands, fintech, and health apps."}
            {style === "flat-3d" && "Flat vector shapes gain isometric depth and subtle 3D transforms. The hybrid approach: dimensional without realism. Used by Shopify, Stripe, Linear."}
            {style === "handdrawn" && "Intentionally imperfect linework, visible texture, and raw energy. The antidote to AI-generated polish. Brands like Notion, Figma, and indie studios."}
            {style === "geometric" && "Stripped to essentials: circles, squares, lines. Color as the emotional carrier. Maximum clarity on small screens. Linear, Vercel, and dev tooling."}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Plushcore: Soft rounded shapes, gradient fills, puffy feel ── */
function PlushcoreScene() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute inset-0 flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #FDE2E4 0%, #F2B5D4 40%, #D4A5E5 100%)" }}
    >
      {/* Puffy character */}
      <div className="relative">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Body */}
          <div className="w-32 h-32 rounded-[40%] bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent" />
            {/* Face */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="flex gap-4">
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="w-3 h-3 rounded-full bg-[#2D2D2D]"
                />
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="w-3 h-3 rounded-full bg-[#2D2D2D]"
                />
              </div>
              <div className="w-4 h-2 rounded-full bg-[#F4A0B5]" />
            </div>
          </div>
          {/* Arms */}
          <motion.div
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-5 top-12 w-6 h-10 rounded-full bg-white/80 shadow-md origin-right"
          />
          <motion.div
            animate={{ rotate: [5, -5, 5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-5 top-12 w-6 h-10 rounded-full bg-white/80 shadow-md origin-left"
          />
        </motion.div>

        {/* Floating decorative elements */}
        {[
          { x: -80, y: -40, size: 12, delay: 0, color: "#FFD4E0" },
          { x: 90, y: -30, size: 16, delay: 0.5, color: "#E0D4FF" },
          { x: -60, y: 50, size: 10, delay: 1, color: "#D4F0FF" },
          { x: 75, y: 45, size: 14, delay: 0.3, color: "#FFF4D4" },
        ].map((dot, i) => (
          <motion.div
            key={i}
            animate={{
              y: [dot.y, dot.y - 12, dot.y],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: dot.delay }}
            className="absolute rounded-full"
            style={{
              left: `calc(50% + ${dot.x}px)`,
              top: `calc(50% + ${dot.y}px)`,
              width: dot.size,
              height: dot.size,
              backgroundColor: dot.color,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ── 3D meets Flat: Isometric shapes with flat color fills ── */
function Flat3DScene() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute inset-0 flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #0F1729 0%, #1A2744 100%)" }}
    >
      <div className="relative" style={{ perspective: "600px" }}>
        {/* Isometric card stack */}
        {[
          { z: 0, color: "#7EC8E3", y: 40, rotate: -2 },
          { z: 1, color: "#4FACCE", y: 20, rotate: 0 },
          { z: 2, color: "#2D8AB8", y: 0, rotate: 2 },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: card.y }}
            transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-44 h-28 rounded-xl"
            style={{
              backgroundColor: card.color,
              transform: `rotateX(12deg) rotateY(-8deg) rotateZ(${card.rotate}deg) translateZ(${card.z * 20}px)`,
              boxShadow: `0 ${8 + i * 4}px ${20 + i * 10}px rgba(0,0,0,0.3)`,
              left: "50%",
              top: "50%",
              marginLeft: "-88px",
              marginTop: "-56px",
              zIndex: card.z,
            }}
          >
            {/* Flat vector elements on the card */}
            <div className="p-3 h-full flex flex-col justify-between">
              <div className="flex gap-1.5">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="w-2 h-2 rounded-full bg-white/30" />
                ))}
              </div>
              <div className="space-y-1.5">
                <div className="w-20 h-1.5 rounded-full bg-white/40" />
                <div className="w-14 h-1.5 rounded-full bg-white/25" />
              </div>
            </div>
          </motion.div>
        ))}

        {/* Floating flat icons */}
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -right-16 -top-8 w-8 h-8 rounded-lg bg-[#FFB74D] flex items-center justify-center text-xs font-bold text-[#0F1729]"
        >
          ◆
        </motion.div>
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute -left-14 top-8 w-6 h-6 rounded-full bg-[#81C784] flex items-center justify-center"
        >
          <div className="w-2 h-2 rounded-full bg-[#0F1729]" />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── Hand-drawn: Sketchy lines, uneven strokes, grain ── */
function HanddrawnScene() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute inset-0 flex items-center justify-center"
      style={{ background: "#F5F0E8" }}
    >
      {/* Noise overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <filter id="handNoise">
          <feTurbulence baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#handNoise)" />
      </svg>

      <div className="relative z-10">
        {/* Sketchy frame */}
        <svg width="260" height="180" viewBox="0 0 260 180" className="absolute -left-4 -top-4">
          <motion.path
            d="M10,10 Q15,5 130,8 Q245,5 250,10 Q255,15 252,90 Q255,165 250,170 Q245,175 130,172 Q15,175 10,170 Q5,165 8,90 Q5,15 10,10"
            fill="none"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeDasharray="4,3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>

        <div className="w-64 h-44 flex flex-col items-center justify-center gap-3 relative">
          {/* Handwritten-style text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#2D2D2D] text-center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <p className="text-lg italic" style={{ transform: "rotate(-2deg)" }}>
              imperfection is
            </p>
            <p className="text-2xl font-bold" style={{ transform: "rotate(1deg)" }}>
              the new premium
            </p>
          </motion.div>

          {/* Doodle elements */}
          <svg width="200" height="60" viewBox="0 0 200 60" className="mt-2">
            {/* Wavy underline */}
            <motion.path
              d="M20,15 Q40,5 60,15 Q80,25 100,15 Q120,5 140,15 Q160,25 180,15"
              fill="none"
              stroke="#C4B28F"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            />
            {/* Arrow */}
            <motion.path
              d="M30,40 Q90,35 160,40"
              fill="none"
              stroke="#D4756A"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
            <motion.path
              d="M152,34 L160,40 L152,46"
              fill="none"
              stroke="#D4756A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.8, duration: 0.3 }}
            />
          </svg>

          {/* Scattered dots */}
          {[
            { x: 20, y: 30, r: 3, color: "#E8C170" },
            { x: 230, y: 20, r: 4, color: "#7DB5A0" },
            { x: 15, y: 130, r: 3, color: "#D4756A" },
            { x: 235, y: 140, r: 5, color: "#8B9DC3" },
          ].map((dot, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.2, type: "spring" }}
              className="absolute rounded-full"
              style={{
                left: dot.x,
                top: dot.y,
                width: dot.r * 2,
                height: dot.r * 2,
                backgroundColor: dot.color,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Geometric Minimal: Clean shapes, deliberate color ── */
function GeometricScene() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute inset-0 flex items-center justify-center"
      style={{ background: "#0C0C0C" }}
    >
      <div className="relative w-64 h-52">
        {/* Large circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute rounded-full"
          style={{
            width: 120,
            height: 120,
            background: "linear-gradient(135deg, #B8A9E8, #8B78D0)",
            left: 20,
            top: 20,
          }}
        />
        {/* Square */}
        <motion.div
          initial={{ scale: 0, rotate: 45 }}
          animate={{ scale: 1, rotate: 45 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute"
          style={{
            width: 60,
            height: 60,
            backgroundColor: "#E8D4A9",
            left: 140,
            top: 10,
          }}
        />
        {/* Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute origin-left"
          style={{
            width: 200,
            height: 2,
            backgroundColor: "#ffffff20",
            left: 30,
            top: 160,
          }}
        />
        {/* Small accent circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
          className="absolute rounded-full"
          style={{
            width: 24,
            height: 24,
            backgroundColor: "#E87461",
            left: 180,
            top: 100,
          }}
        />
        {/* Text label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute text-white/40 text-[10px] tracking-[0.2em] uppercase"
          style={{ left: 30, top: 170 }}
        >
          clarity through restraint
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   2. Breathing Character Demo
   A character with idle animation — the "motion illustration" trend
   ═══════════════════════════════════════════════════════ */
export function BreathingCharacterDemo() {
  const [mood, setMood] = useState<"idle" | "happy" | "thinking">("idle");

  return (
    <div className="space-y-4">
      <div className="flex gap-2 justify-center">
        {(["idle", "happy", "thinking"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMood(m)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all capitalize ${
              mood === m ? "bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30" : "bg-white/5 text-fg-muted hover:bg-white/10"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="h-56 rounded-xl bg-gradient-to-b from-[#1a1f2e] to-[#0e1118] flex items-center justify-center relative overflow-hidden">
        {/* Ambient glow behind character */}
        <motion.div
          animate={{
            scale: mood === "happy" ? [1, 1.2, 1] : [1, 1.05, 1],
            opacity: mood === "happy" ? [0.15, 0.25, 0.15] : [0.08, 0.12, 0.08],
          }}
          transition={{ duration: mood === "happy" ? 1.5 : 3, repeat: Infinity }}
          className="absolute w-40 h-40 rounded-full"
          style={{
            background: mood === "happy" ? "radial-gradient(circle, #4ade80, transparent)" :
              mood === "thinking" ? "radial-gradient(circle, #a78bfa, transparent)" :
              "radial-gradient(circle, #60a5fa, transparent)",
          }}
        />

        {/* Character */}
        <div className="relative z-10">
          <motion.div
            animate={{
              scaleY: mood === "idle" ? [1, 1.02, 1] : mood === "happy" ? [1, 1.06, 0.96, 1] : [1, 0.98, 1],
              y: mood === "happy" ? [0, -8, 0] : mood === "thinking" ? [0, 2, 0] : [0, -3, 0],
            }}
            transition={{
              duration: mood === "happy" ? 1 : mood === "thinking" ? 4 : 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Head */}
            <div className="w-20 h-20 rounded-[36%] bg-gradient-to-b from-[#4FC3F7] to-[#29B6F6] mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
              {/* Eyes */}
              <div className="absolute top-7 left-0 right-0 flex justify-center gap-3">
                <motion.div
                  animate={{
                    scaleY: mood === "happy" ? [1, 0.1, 1] : mood === "thinking" ? [1, 1, 0.1, 1] : [1, 1, 0.1, 1],
                    scaleX: mood === "happy" ? 1.1 : 1,
                  }}
                  transition={{
                    duration: mood === "thinking" ? 4 : 3.5,
                    repeat: Infinity,
                    repeatDelay: mood === "thinking" ? 1 : 2,
                  }}
                  className="w-2.5 h-2.5 rounded-full bg-[#1a1f2e]"
                />
                <motion.div
                  animate={{
                    scaleY: mood === "happy" ? [1, 0.1, 1] : mood === "thinking" ? [1, 1, 0.1, 1] : [1, 1, 0.1, 1],
                  }}
                  transition={{
                    duration: mood === "thinking" ? 4 : 3.5,
                    repeat: Infinity,
                    repeatDelay: mood === "thinking" ? 1 : 2,
                  }}
                  className="w-2.5 h-2.5 rounded-full bg-[#1a1f2e]"
                />
              </div>
              {/* Mouth */}
              <motion.div
                animate={{
                  width: mood === "happy" ? 14 : mood === "thinking" ? 6 : 10,
                  height: mood === "happy" ? 8 : mood === "thinking" ? 6 : 4,
                  borderRadius: mood === "happy" ? "0 0 10px 10px" : mood === "thinking" ? "50%" : "10px",
                }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#1a1f2e]/60"
              />
            </div>
            {/* Body */}
            <motion.div
              animate={{ scaleX: mood === "idle" ? [1, 1.02, 1] : 1 }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-14 h-10 rounded-b-[40%] bg-gradient-to-b from-[#29B6F6] to-[#0288D1] mx-auto -mt-1"
            />
          </motion.div>

          {/* Thinking dots */}
          <AnimatePresence>
            {mood === "thinking" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -right-12 -top-4 flex gap-1"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -6, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                    className="w-1.5 h-1.5 rounded-full bg-violet-400"
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Label */}
        <div className="absolute bottom-3 left-0 right-0 text-center">
          <span className="text-[10px] text-white/30 tracking-wider uppercase">
            {mood === "idle" && "Idle breathing — subtle scale + translate"}
            {mood === "happy" && "Happy bounce — spring physics + squash/stretch"}
            {mood === "thinking" && "Thinking — slow rhythm + particle indicators"}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   3. Grain + Texture Overlay Demo
   Show how grain, paper, and noise textures are applied
   ═══════════════════════════════════════════════════════ */
export function GrainTextureDemo() {
  const [texture, setTexture] = useState<"none" | "grain" | "paper" | "halftone">("none");

  const textures = [
    { key: "none" as const, label: "No Texture" },
    { key: "grain" as const, label: "Film Grain" },
    { key: "paper" as const, label: "Paper" },
    { key: "halftone" as const, label: "Halftone" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        {textures.map((t) => (
          <button
            key={t.key}
            onClick={() => setTexture(t.key)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              texture === t.key
                ? "bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/30"
                : "bg-white/5 text-fg-muted hover:bg-white/10"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="relative h-52 rounded-xl overflow-hidden">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #E07A5F 0%, #D4A373 50%, #81B29A 100%)",
          }}
        />

        {/* Illustration content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-1" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
              Warmth
            </div>
            <div className="text-white/70 text-sm">Through texture and imperfection</div>
          </div>
        </div>

        {/* Texture overlays */}
        {texture === "grain" && (
          <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" style={{ opacity: 0.35 }}>
            <filter id="demoGrain">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#demoGrain)" />
          </svg>
        )}

        {texture === "paper" && (
          <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" style={{ opacity: 0.15, mixBlendMode: "multiply" }}>
            <filter id="demoPaper">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" stitchTiles="stitch" seed="2" />
              <feColorMatrix type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="2" />
              </feComponentTransfer>
            </filter>
            <rect width="100%" height="100%" filter="url(#demoPaper)" fill="#D4C5A9" />
          </svg>
        )}

        {texture === "halftone" && (
          <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" style={{ opacity: 0.12, mixBlendMode: "multiply" }}>
            <pattern id="halftonePattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" fill="#000" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#halftonePattern)" />
          </svg>
        )}

        {/* Comparison label */}
        <div className="absolute bottom-3 right-3 z-30 px-2 py-1 rounded-md bg-black/40 backdrop-blur-sm text-[10px] text-white/70">
          {texture === "none" && "Clean digital — no texture applied"}
          {texture === "grain" && "SVG feTurbulence — 0.8 freq, 35% opacity"}
          {texture === "paper" && "Fractal noise — 0.04 freq, multiply blend"}
          {texture === "halftone" && "SVG pattern — 6px grid, 12% opacity"}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   4. Maximum Minimalism Demo
   One bold color, generous whitespace, single illustration
   ═══════════════════════════════════════════════════════ */
export function MaximalMinimalismDemo() {
  const [accent, setAccent] = useState(0);
  const accents = [
    { color: "#FF6B35", name: "Energetic Orange", bg: "#FEFAF7" },
    { color: "#3D5A80", name: "Trust Blue", bg: "#F5F8FA" },
    { color: "#9B5DE5", name: "Creative Violet", bg: "#FAF5FF" },
    { color: "#06D6A0", name: "Growth Green", bg: "#F0FDF9" },
  ];

  const current = accents[accent];

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {accents.map((a, i) => (
          <button
            key={a.name}
            onClick={() => setAccent(i)}
            className={`w-7 h-7 rounded-full transition-all ${accent === i ? "ring-2 ring-offset-2 ring-offset-bg scale-110" : "hover:scale-105"}`}
            style={{ backgroundColor: a.color, outlineColor: accent === i ? a.color : undefined }}
            title={a.name}
          />
        ))}
      </div>

      <motion.div
        key={accent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-52 rounded-xl overflow-hidden relative"
        style={{ backgroundColor: current.bg }}
      >
        {/* Generous whitespace with single element */}
        <div className="absolute inset-0 flex items-center justify-between px-12">
          {/* Text side */}
          <div className="space-y-2">
            <div className="w-32 h-2 rounded-full" style={{ backgroundColor: current.color, opacity: 0.2 }} />
            <div className="text-lg font-semibold" style={{ color: "#1a1a1a" }}>
              One accent.
            </div>
            <div className="text-sm" style={{ color: "#666" }}>
              Maximum clarity.
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-4 py-1.5 rounded-full text-white text-xs font-medium cursor-pointer mt-2"
              style={{ backgroundColor: current.color }}
            >
              {current.name}
            </motion.div>
          </div>

          {/* Single illustration element */}
          <motion.div
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="100" height="100" viewBox="0 0 100 100">
              <motion.circle
                cx="50" cy="50" r="40"
                fill="none"
                stroke={current.color}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.circle
                cx="50" cy="50" r="25"
                fill={current.color}
                opacity={0.15}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              />
              <motion.circle
                cx="50" cy="50" r="8"
                fill={current.color}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
