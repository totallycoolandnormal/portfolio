"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* ── Easing Curve Comparison ── */
const curves = [
  {
    name: "ease-out",
    label: "Ease Out (Entrances)",
    css: "cubic-bezier(0, 0, 0.2, 1)",
    framer: { duration: 0.4, ease: [0, 0, 0.2, 1] },
    description: "Fast start, gradual stop. Objects entering the viewport should arrive with confidence.",
    when: "Elements appearing, modals opening, toasts entering",
    color: "#4ade80",
  },
  {
    name: "ease-in",
    label: "Ease In (Exits)",
    css: "cubic-bezier(0.4, 0, 1, 1)",
    framer: { duration: 0.3, ease: [0.4, 0, 1, 1] },
    description: "Slow start, fast finish. Objects leaving should accelerate away — they're done, get out.",
    when: "Elements disappearing, modals closing, items being deleted",
    color: "#f97316",
  },
  {
    name: "ease-in-out",
    label: "Ease In-Out (Movement)",
    css: "cubic-bezier(0.4, 0, 0.2, 1)",
    framer: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    description: "Smooth acceleration and deceleration. For elements moving between positions on screen.",
    when: "Tab switches, carousel slides, repositioning",
    color: "#3b82f6",
  },
  {
    name: "spring",
    label: "Spring (Interactive)",
    css: "N/A — requires JS",
    framer: { type: "spring" as const, stiffness: 400, damping: 25 },
    description: "Physics-based. No fixed duration — ends naturally like a real object settling. The gold standard for 2026 UI.",
    when: "Buttons, toggles, drag-and-drop, any user-initiated action",
    color: "#a78bfa",
  },
  {
    name: "snappy",
    label: "Snappy (Micro-feedback)",
    css: "cubic-bezier(0.16, 1, 0.3, 1)",
    framer: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    description: "Expo-out. Feels instantaneous but has a graceful tail. Apple's favorite curve.",
    when: "Icon transitions, hover states, small state changes",
    color: "#ec4899",
  },
];

export function EasingCurveComparison() {
  const [trigger, setTrigger] = useState(false);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {curves.map((curve) => (
          <div key={curve.name} className="flex items-center gap-3">
            <span
              className="text-xs font-mono w-28 shrink-0 text-right"
              style={{ color: curve.color }}
            >
              {curve.name}
            </span>
            <div className="flex-1 h-8 bg-white/[0.03] rounded-lg relative overflow-hidden">
              <motion.div
                className="absolute top-1 bottom-1 left-1 w-10 rounded-md"
                style={{ background: curve.color }}
                animate={{ x: trigger ? 280 : 0 }}
                transition={curve.framer as any}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setTrigger(!trigger)}
        className="text-sm px-4 py-2 rounded-lg bg-white/[0.06] border border-border hover:bg-white/[0.1] transition-colors"
      >
        {trigger ? "Reset" : "Play All Curves"}
      </button>

      {/* Curve details */}
      <div className="grid md:grid-cols-2 gap-3">
        {curves.map((curve) => (
          <div
            key={curve.name}
            className="bg-white/[0.03] rounded-lg p-3 border-l-2"
            style={{ borderColor: curve.color }}
          >
            <div className="text-xs font-medium text-fg mb-1">{curve.label}</div>
            <p className="text-[10px] text-fg-muted mb-1">{curve.description}</p>
            <span className="text-[10px] text-fg-dim">
              Use for: {curve.when}
            </span>
            <div className="mt-1">
              <code className="text-[9px] font-mono text-fg-dim">{curve.css}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Duration Scale ── */
export function DurationScale() {
  const [playing, setPlaying] = useState(false);
  const durations = [
    { ms: 100, label: "Instant", use: "Button feedback, checkbox toggle, hover color", tier: "T1" },
    { ms: 150, label: "Fast", use: "Tooltips, icon swaps, micro-state changes", tier: "T1" },
    { ms: 250, label: "Standard", use: "Dropdowns, accordions, slide transitions", tier: "T2" },
    { ms: 350, label: "Moderate", use: "Modal entry, page transitions, panel slides", tier: "T2" },
    { ms: 500, label: "Slow", use: "Complex reveals, staggered lists, onboarding", tier: "T3" },
    { ms: 800, label: "Dramatic", use: "Hero animations, first-visit reveals only", tier: "T3" },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        {durations.map((d) => (
          <div key={d.ms} className="flex items-center gap-3">
            <span className="text-xs font-mono text-fg-muted w-12 shrink-0 text-right">
              {d.ms}ms
            </span>
            <div className="flex-1 h-6 bg-white/[0.03] rounded relative overflow-hidden">
              <motion.div
                className="absolute top-0.5 bottom-0.5 left-0.5 rounded bg-accent/50"
                animate={{ width: playing ? `${(d.ms / 800) * 100}%` : "4px" }}
                transition={{ duration: d.ms / 1000, ease: "easeOut" }}
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-fg-dim">
                {d.label} — {d.use}
              </span>
            </div>
            <span className="text-[9px] font-mono text-fg-dim w-6">{d.tier}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setPlaying(!playing)}
          className="text-sm px-4 py-2 rounded-lg bg-white/[0.06] border border-border hover:bg-white/[0.1] transition-colors"
        >
          {playing ? "Reset" : "Visualize Durations"}
        </button>
        <p className="text-[10px] text-fg-dim">
          Motion tokens: 3 tiers (T1 fast, T2 standard, T3 expressive). Most UI never needs T3.
        </p>
      </div>
    </div>
  );
}

/* ── Why Springs Beat Durations ── */
export function SpringVsDuration() {
  const [trigger, setTrigger] = useState(false);

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white/[0.03] rounded-xl p-5 text-center space-y-4">
          <span className="text-xs font-mono text-fg-dim">Duration-based (CSS)</span>
          <motion.div
            className="w-16 h-16 bg-blue-500/30 rounded-2xl mx-auto"
            animate={{
              scale: trigger ? 1.5 : 1,
              borderRadius: trigger ? "50%" : "16px",
            }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          />
          <p className="text-[10px] text-fg-dim">
            Fixed 400ms. Feels mechanical.<br />
            Interrupting mid-animation feels wrong.
          </p>
        </div>
        <div className="bg-white/[0.03] rounded-xl p-5 text-center space-y-4">
          <span className="text-xs font-mono text-accent/60">Spring-based (Physics)</span>
          <motion.div
            className="w-16 h-16 bg-accent/30 rounded-2xl mx-auto"
            animate={{
              scale: trigger ? 1.5 : 1,
              borderRadius: trigger ? "50%" : "16px",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <p className="text-[10px] text-fg-dim">
            No fixed duration. Settles naturally.<br />
            Interrupting feels smooth — velocity transfers.
          </p>
        </div>
      </div>
      <button
        onClick={() => setTrigger(!trigger)}
        className="text-sm px-4 py-2 rounded-lg bg-white/[0.06] border border-border hover:bg-white/[0.1] transition-colors"
      >
        Toggle Both
      </button>
      <p className="text-xs text-fg-dim">
        Springs don&apos;t have a fixed duration — they simulate real physics (mass, tension, friction).
        When you interrupt a spring mid-motion, the object&apos;s current velocity carries over into the
        new animation. This is why spring animations feel &ldquo;alive&rdquo; and CSS transitions feel
        &ldquo;robotic.&rdquo; In 2026, springs are the default for any interactive element.
      </p>
    </div>
  );
}
