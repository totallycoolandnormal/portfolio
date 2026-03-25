"use client";

import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useState, useRef } from "react";

/* ── Spring Physics Comparison ── */
const springConfigs = [
  { label: "Bouncy", stiffness: 200, damping: 10, color: "#f97316" },
  { label: "Snappy", stiffness: 500, damping: 30, color: "#3b82f6" },
  { label: "Gentle", stiffness: 100, damping: 20, color: "#a78bfa" },
  { label: "Stiff", stiffness: 800, damping: 40, color: "#4ade80" },
];

export function SpringPhysics() {
  const [trigger, setTrigger] = useState(false);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {springConfigs.map((config) => (
          <div key={config.label} className="flex items-center gap-4">
            <span className="text-xs font-mono text-fg-muted w-14 shrink-0">
              {config.label}
            </span>
            <div className="flex-1 h-8 bg-white/[0.03] rounded-lg relative overflow-hidden">
              <motion.div
                className="absolute top-1 bottom-1 left-1 w-10 rounded-md"
                style={{ background: config.color }}
                animate={{ x: trigger ? "calc(100% + 180px)" : 0 }}
                transition={{
                  type: "spring",
                  stiffness: config.stiffness,
                  damping: config.damping,
                }}
              />
            </div>
            <span className="text-[10px] font-mono text-fg-dim w-20 shrink-0 hidden md:block">
              s:{config.stiffness} d:{config.damping}
            </span>
          </div>
        ))}
      </div>
      <button
        onClick={() => setTrigger(!trigger)}
        className="text-sm px-4 py-2 rounded-lg bg-white/[0.06] border border-border hover:bg-white/[0.1] transition-colors"
      >
        {trigger ? "Reset" : "Trigger"} Springs
      </button>
    </div>
  );
}

/* ── Micro-Interaction Showcase ── */
export function MicroInteractions() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(42);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Like button */}
      <div className="bg-white/[0.03] rounded-xl p-5 flex flex-col items-center gap-3">
        <span className="text-xs text-fg-dim">Purposeful feedback</span>
        <motion.button
          onClick={() => {
            setLiked(!liked);
            setCount((c) => (liked ? c - 1 : c + 1));
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-card"
          whileTap={{ scale: 0.92 }}
        >
          <motion.span
            animate={{
              scale: liked ? [1, 1.4, 1] : 1,
              color: liked ? "#ef4444" : "var(--fg-muted)",
            }}
            transition={{ duration: 0.3 }}
            className="text-xl"
          >
            {liked ? "❤️" : "🤍"}
          </motion.span>
          <motion.span
            key={count}
            initial={{ y: liked ? 10 : -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-sm font-mono"
          >
            {count}
          </motion.span>
        </motion.button>
      </div>

      {/* Copy to clipboard */}
      <div className="bg-white/[0.03] rounded-xl p-5 flex flex-col items-center gap-3">
        <span className="text-xs text-fg-dim">State confirmation</span>
        <motion.button
          onClick={() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-bg-card text-sm"
          whileTap={{ scale: 0.95 }}
          animate={{
            borderColor: copied ? "var(--accent)" : "var(--border)",
          }}
        >
          <motion.span
            animate={{ rotate: copied ? [0, -10, 10, 0] : 0 }}
            transition={{ duration: 0.4 }}
          >
            {copied ? "✅" : "📋"}
          </motion.span>
          {copied ? "Copied!" : "Copy code"}
        </motion.button>
      </div>

      {/* Submit with loading */}
      <div className="bg-white/[0.03] rounded-xl p-5 flex flex-col items-center gap-3">
        <span className="text-xs text-fg-dim">Loading → success</span>
        <motion.button
          onClick={() => {
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
          }}
          className="px-6 py-2 rounded-lg text-sm font-medium overflow-hidden relative"
          style={{
            background: submitted ? "var(--accent)" : "white",
            color: submitted ? "black" : "black",
          }}
          whileTap={{ scale: 0.95 }}
          animate={{ width: submitted ? 48 : 120 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {submitted ? (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="block text-center"
            >
              ✓
            </motion.span>
          ) : (
            "Submit"
          )}
        </motion.button>
      </div>

      {/* Hover reveal */}
      <div className="bg-white/[0.03] rounded-xl p-5 flex flex-col items-center gap-3">
        <span className="text-xs text-fg-dim">Playful delight</span>
        <motion.div
          className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center cursor-pointer text-2xl"
          whileHover={{
            rotate: [0, -5, 5, -5, 0],
            scale: 1.1,
            borderRadius: "50%",
          }}
          transition={{ duration: 0.5 }}
        >
          🎉
        </motion.div>
      </div>
    </div>
  );
}

/* ── Scroll-Driven Parallax ── */
export function ScrollParallax() {
  return (
    <div className="h-48 overflow-hidden relative rounded-xl bg-gradient-to-b from-indigo-950 to-purple-950">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 4 + Math.random() * 6,
            height: 4 + Math.random() * 6,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(255,255,255,${0.2 + Math.random() * 0.6})`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-sm text-white/60 font-mono text-center"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll-driven animations trigger
          <br />
          as elements enter the viewport
        </motion.div>
      </div>
    </div>
  );
}
