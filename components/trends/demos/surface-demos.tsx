"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";

/* ── Glassmorphism ── */
export function GlassmorphismDemo() {
  return (
    <div className="space-y-4">
      <div
        className="relative h-72 rounded-xl overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Primary glass card */}
        <motion.div
          className="absolute top-6 left-6 right-6 rounded-2xl p-5"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
          whileHover={{ y: -3, boxShadow: "0 16px 48px rgba(0,0,0,0.2)" }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold"
              style={{
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              K
            </div>
            <div>
              <div className="text-sm font-medium text-white">Frosted Glass Panel</div>
              <div className="text-xs text-white/60">
                backdrop-filter: blur(16px) saturate(180%)
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-white/15 rounded-full w-full" />
            <div className="h-2 bg-white/15 rounded-full w-3/4" />
            <div className="h-2 bg-white/15 rounded-full w-1/2" />
          </div>
        </motion.div>

        {/* Secondary floating pill */}
        <motion.div
          className="absolute bottom-5 right-5 rounded-full px-4 py-2 flex items-center gap-2"
          style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px) saturate(160%)",
            WebkitBackdropFilter: "blur(12px) saturate(160%)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs text-white/90 font-medium">Online</span>
        </motion.div>
      </div>

      {/* CSS recipe */}
      <div className="bg-white/[0.03] rounded-lg p-4">
        <span className="text-xs font-mono text-fg-dim block mb-2">
          The glassmorphism recipe
        </span>
        <pre className="text-[11px] font-mono text-accent/70 leading-relaxed whitespace-pre-wrap">{`.glass {
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
}`}</pre>
        <p className="text-[10px] text-fg-dim mt-2">
          Key: the background behind the glass must have visual variation (photos, gradients, colorful content).
          Solid backgrounds show no blur effect. Keep glass panels to 3-5 per view for performance.
        </p>
      </div>
    </div>
  );
}

/* ── Neumorphism ── */
export function NeumorphismDemo() {
  return (
    <div
      className="p-8 rounded-xl flex flex-col items-center gap-6"
      style={{ background: "#2a2a3e" }}
    >
      <div className="flex gap-6 items-center">
        <motion.button
          className="px-6 py-3 rounded-xl text-sm font-medium text-white/80"
          style={{
            background: "#2a2a3e",
            boxShadow: "8px 8px 16px #1e1e2e, -8px -8px 16px #36364e",
          }}
          whileHover={{
            boxShadow: "4px 4px 8px #1e1e2e, -4px -4px 8px #36364e",
          }}
          whileTap={{
            boxShadow: "inset 4px 4px 8px #1e1e2e, inset -4px -4px 8px #36364e",
          }}
        >
          Raised
        </motion.button>
        <div
          className="px-6 py-3 rounded-xl text-sm font-medium text-white/60"
          style={{
            background: "#2a2a3e",
            boxShadow: "inset 4px 4px 8px #1e1e2e, inset -4px -4px 8px #36364e",
          }}
        >
          Pressed
        </div>
      </div>
      <div className="flex items-center gap-3">
        <SoftToggle />
        <span className="text-xs text-white/50">Neumorphic toggle</span>
      </div>
      <div
        className="w-48 h-2 rounded-full"
        style={{
          background: "#2a2a3e",
          boxShadow: "inset 2px 2px 4px #1e1e2e, inset -2px -2px 4px #36364e",
        }}
      >
        <motion.div
          className="h-full rounded-full bg-accent/80"
          initial={{ width: "0%" }}
          whileInView={{ width: "60%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </div>
  );
}

function SoftToggle() {
  const [on, setOn] = useState(false);
  return (
    <motion.button
      className="w-14 h-8 rounded-full relative cursor-pointer"
      style={{
        background: "#2a2a3e",
        boxShadow: "inset 2px 2px 4px #1e1e2e, inset -2px -2px 4px #36364e",
      }}
      onClick={() => setOn(!on)}
    >
      <motion.div
        className="absolute top-1 w-6 h-6 rounded-full"
        style={{
          background: on ? "var(--accent)" : "#3a3a4e",
          boxShadow: "2px 2px 4px #1e1e2e, -2px -2px 4px #36364e",
        }}
        animate={{ left: on ? 28 : 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.button>
  );
}

/* ── Claymorphism ── */
export function ClaymorphismDemo() {
  return (
    <div className="flex gap-4 justify-center flex-wrap py-4">
      {[
        { emoji: "🎨", label: "Design", bg: "#ffd6e7", shadow: "#e6bcd0" },
        { emoji: "⚡", label: "Speed", bg: "#d6f5ff", shadow: "#b8dce6" },
        { emoji: "🧠", label: "Think", bg: "#e8d6ff", shadow: "#ccbae6" },
      ].map((item) => (
        <motion.div
          key={item.label}
          className="rounded-3xl px-6 py-5 text-center cursor-pointer"
          style={{
            background: item.bg,
            boxShadow: `
              8px 8px 16px ${item.shadow},
              inset -4px -4px 8px ${item.shadow},
              inset 4px 4px 8px rgba(255,255,255,0.6)
            `,
            border: "2px solid rgba(255,255,255,0.4)",
          }}
          whileHover={{ y: -6, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <div className="text-3xl mb-1">{item.emoji}</div>
          <div className="text-sm font-semibold text-gray-700">{item.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Liquid Glass (Apple-style) ── */
export function LiquidGlassDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <div
      ref={ref}
      className="relative h-64 rounded-xl overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        perspective: "600px",
      }}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        className="rounded-3xl px-8 py-5 flex items-center gap-4"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.1) 100%)",
          backdropFilter: "blur(24px) saturate(1.5)",
          WebkitBackdropFilter: "blur(24px) saturate(1.5)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.25)",
          rotateX,
          rotateY,
        }}
      >
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
          style={{
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          🍎
        </div>
        <div>
          <div className="text-sm font-semibold text-white drop-shadow-sm">
            Liquid Glass
          </div>
          <div className="text-xs text-white/70 drop-shadow-sm">
            Move your cursor to tilt
          </div>
        </div>
      </motion.div>
      <div className="absolute bottom-3 left-0 right-0 text-center text-[10px] text-white/50 drop-shadow">
        iOS 26 / macOS Tahoe — beautiful but accessibility-challenged
      </div>
    </div>
  );
}
