"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

/* ── Variable Font Weight Slider ── */
export function VariableFontDemo() {
  const [weight, setWeight] = useState(400);
  const [width, setWidth] = useState(100);

  return (
    <div className="space-y-6">
      <motion.div
        className="text-4xl md:text-5xl leading-tight tracking-tight"
        style={{
          fontVariationSettings: `'wght' ${weight}, 'wdth' ${width}`,
          fontFamily: "var(--font-body)",
        }}
        animate={{ fontVariationSettings: `'wght' ${weight}, 'wdth' ${width}` }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        One file,
        <br />
        infinite expression.
      </motion.div>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-xs text-fg-muted mb-1">
            <span>Weight</span>
            <span className="font-mono">{weight}</span>
          </div>
          <input
            type="range"
            min={100}
            max={900}
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="w-full accent-accent h-1 bg-border rounded-full appearance-none cursor-pointer"
          />
        </div>
        <div>
          <div className="flex justify-between text-xs text-fg-muted mb-1">
            <span>Width</span>
            <span className="font-mono">{width}%</span>
          </div>
          <input
            type="range"
            min={75}
            max={125}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full accent-accent h-1 bg-border rounded-full appearance-none cursor-pointer"
          />
        </div>
      </div>
      <p className="text-xs text-fg-dim">
        Variable fonts contain every weight, width, and style in a single file. Drag the
        sliders to see smooth interpolation — no font-swap, no layout shift.
      </p>
    </div>
  );
}

/* ── Kinetic Typography ── */
const words = ["Design", "is", "how", "it", "works."];

export function KineticTypography() {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 items-baseline justify-center py-8">
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="text-4xl md:text-6xl font-display"
          initial={{ opacity: 0, y: 40, rotateX: -40 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: i * 0.12,
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
          whileHover={{
            scale: 1.1,
            color: "var(--accent)",
            transition: { duration: 0.2 },
          }}
          style={{ cursor: "default", display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

/* ── Fluid Type Scale ── */
export function FluidTypeScale() {
  return (
    <div className="space-y-4">
      {[
        { label: "Display", size: "clamp(2.5rem, 5vw + 1rem, 5rem)", weight: 800 },
        { label: "H1", size: "clamp(2rem, 3vw + 0.75rem, 3.5rem)", weight: 700 },
        { label: "H2", size: "clamp(1.5rem, 2vw + 0.5rem, 2.5rem)", weight: 600 },
        { label: "H3", size: "clamp(1.25rem, 1.5vw + 0.5rem, 1.75rem)", weight: 600 },
        { label: "Body", size: "clamp(1rem, 0.5vw + 0.75rem, 1.125rem)", weight: 400 },
        { label: "Small", size: "clamp(0.75rem, 0.3vw + 0.5rem, 0.875rem)", weight: 400 },
      ].map((item) => (
        <motion.div
          key={item.label}
          className="flex items-baseline gap-4"
          whileHover={{ x: 8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-xs text-fg-dim font-mono w-16 shrink-0">
            {item.label}
          </span>
          <span
            style={{
              fontSize: item.size,
              fontWeight: item.weight,
              lineHeight: 1.2,
            }}
          >
            Aa
          </span>
          <span className="text-[10px] text-fg-dim font-mono hidden md:block">
            {item.size.replace("clamp(", "").replace(")", "")}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Serif + Sans Pairing ── */
export function TypePairing() {
  return (
    <div className="space-y-8">
      <div className="border-l-2 border-accent pl-6">
        <p
          className="text-2xl md:text-3xl leading-snug mb-3"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          The best design isn&apos;t seen — it&apos;s felt.
        </p>
        <p className="text-fg-muted text-sm" style={{ fontFamily: "var(--font-body)" }}>
          Serif display + sans-serif body is the defining pairing of 2026.
          Warmth meets clarity. Personality meets readability.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/[0.03] rounded-lg p-4">
          <span className="text-xs text-fg-dim font-mono block mb-2">Display</span>
          <span className="text-xl" style={{ fontFamily: "Georgia, serif" }}>
            Serif Typefaces
          </span>
          <p className="text-xs text-fg-muted mt-1">
            Fraunces, Playfair, Literata, Source Serif, Newsreader
          </p>
        </div>
        <div className="bg-white/[0.03] rounded-lg p-4">
          <span className="text-xs text-fg-dim font-mono block mb-2">Body</span>
          <span className="text-xl">Sans-Serif Typefaces</span>
          <p className="text-xs text-fg-muted mt-1">
            Inter, Satoshi, General Sans, Plus Jakarta, Geist
          </p>
        </div>
      </div>
    </div>
  );
}
