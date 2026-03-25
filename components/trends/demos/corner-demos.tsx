"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* ── Corner Shape Explorer ── */
const cornerStyles = [
  {
    name: "round",
    label: "Round",
    description: "The standard. Approachable, modern, universal.",
    radius: "16px",
    css: "border-radius: 16px;\ncorner-shape: round;",
    industry: "Consumer apps, SaaS",
  },
  {
    name: "squircle",
    label: "Squircle",
    description: "Apple's signature. Continuous curvature, premium feel.",
    radius: "16px",
    css: "border-radius: 16px;\ncorner-shape: squircle;",
    industry: "Apple ecosystem, premium brands",
  },
  {
    name: "bevel",
    label: "Bevel",
    description: "Faceted, gem-like. Sharp precision without sharp corners.",
    radius: "16px",
    css: "border-radius: 16px;\ncorner-shape: bevel;",
    industry: "Gaming, tech, crypto",
  },
  {
    name: "scoop",
    label: "Scoop",
    description: "Concave inward curves. Organic and editorial.",
    radius: "16px",
    css: "border-radius: 16px;\ncorner-shape: scoop;",
    industry: "Editorial, lifestyle",
  },
  {
    name: "notch",
    label: "Notch",
    description: "Inward angular cuts. Technical, precise, machine-stamped.",
    radius: "12px",
    css: "border-radius: 12px;\ncorner-shape: notch;",
    industry: "DevTools, gaming HUDs",
  },
];

export function CornerShapeExplorer() {
  const [selected, setSelected] = useState(0);
  const style = cornerStyles[selected];

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        {cornerStyles.map((s, i) => (
          <button
            key={s.name}
            onClick={() => setSelected(i)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              i === selected
                ? "bg-accent text-black"
                : "bg-white/[0.06] text-fg-muted hover:text-fg"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/[0.03] rounded-xl p-8 flex items-center justify-center min-h-[180px]">
          <motion.div
            layout
            className="w-36 h-36 bg-accent/20 border-2 border-accent/40 flex items-center justify-center"
            style={{
              borderRadius:
                style.name === "squircle"
                  ? "30% / 30%"
                  : style.name === "bevel"
                  ? "4px 16px"
                  : style.name === "scoop"
                  ? "50% 0"
                  : style.name === "notch"
                  ? "0 16px 0 16px"
                  : "16px",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <span className="text-xs font-mono text-accent">{style.label}</span>
          </motion.div>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-fg-muted">{style.description}</p>
          <div>
            <span className="text-xs text-fg-dim block mb-1">CSS (Chrome 139+)</span>
            <pre className="text-xs font-mono bg-white/[0.04] rounded-lg p-3 text-accent/80">
              {style.css}
            </pre>
          </div>
          <div>
            <span className="text-xs text-fg-dim block mb-1">Best for</span>
            <span className="text-xs text-fg-muted">{style.industry}</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-fg-dim">
        The CSS <code className="text-accent/60">corner-shape</code> property (Chrome 139+, March 2026)
        modifies the curve created by border-radius. Progressive enhancement — use{" "}
        <code className="text-accent/60">@supports</code> to layer it on.
      </p>
    </div>
  );
}

/* ── Radius Scale ── */
export function RadiusScale() {
  return (
    <div className="flex items-end gap-4 justify-center py-4">
      {[
        { r: "4px", label: "xs", size: "w-10 h-10" },
        { r: "8px", label: "sm", size: "w-14 h-14" },
        { r: "12px", label: "md", size: "w-18 h-18" },
        { r: "16px", label: "lg", size: "w-22 h-22" },
        { r: "24px", label: "xl", size: "w-28 h-28" },
        { r: "9999px", label: "full", size: "w-16 h-16" },
      ].map((item) => (
        <motion.div
          key={item.label}
          className={`bg-accent/15 border border-accent/30 flex flex-col items-center justify-center gap-1 ${item.size}`}
          style={{ borderRadius: item.r, minWidth: 40, minHeight: 40 }}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(74,222,128,0.25)" }}
        >
          <span className="text-[10px] font-mono text-accent/70">{item.r}</span>
          <span className="text-[9px] text-fg-dim">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
