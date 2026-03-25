"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type ThemeMode = "light" | "dark" | "adaptive";

const themes = {
  light: {
    bg: "#fafaf9",
    card: "#ffffff",
    border: "#e7e5e4",
    text: "#1c1917",
    muted: "#78716c",
    accent: "#6366f1",
  },
  dark: {
    bg: "#0c0a09",
    card: "#1c1917",
    border: "#292524",
    text: "#fafaf9",
    muted: "#a8a29e",
    accent: "#818cf8",
  },
  adaptive: {
    bg: "#1a1520",
    card: "#231e2a",
    border: "#352e3d",
    text: "#f0ecf4",
    muted: "#a89fb8",
    accent: "#c084fc",
  },
};

export function DarkModeEvolution() {
  const [mode, setMode] = useState<ThemeMode>("dark");
  const t = themes[mode];

  return (
    <div className="space-y-6">
      <div className="flex gap-2 justify-center">
        {(["light", "dark", "adaptive"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-4 py-1.5 rounded-lg text-xs font-mono capitalize transition-colors ${
              mode === m
                ? "bg-accent text-black"
                : "bg-white/[0.06] text-fg-muted hover:text-fg"
            }`}
          >
            {m === "adaptive" ? "Adaptive (2026)" : m}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="rounded-xl overflow-hidden border"
          style={{
            background: t.bg,
            borderColor: t.border,
          }}
        >
          {/* Mock app header */}
          <div
            className="px-5 py-3 flex items-center justify-between border-b"
            style={{ borderColor: t.border }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-md"
                style={{ background: t.accent }}
              />
              <span
                className="text-sm font-medium"
                style={{ color: t.text }}
              >
                Flint
              </span>
            </div>
            <div className="flex gap-2">
              <div
                className="w-8 h-5 rounded"
                style={{ background: t.border }}
              />
              <div
                className="w-8 h-5 rounded"
                style={{ background: t.border }}
              />
            </div>
          </div>

          {/* Mock app content */}
          <div className="p-5 space-y-3">
            <div className="flex gap-3">
              <div
                className="flex-1 rounded-lg p-4"
                style={{ background: t.card, border: `1px solid ${t.border}` }}
              >
                <div
                  className="h-2 rounded-full w-3/4 mb-2"
                  style={{ background: t.border }}
                />
                <div
                  className="h-2 rounded-full w-1/2"
                  style={{ background: t.border }}
                />
                <div className="mt-3 flex gap-2">
                  <div
                    className="px-3 py-1 rounded-md text-xs"
                    style={{ background: t.accent, color: "#fff" }}
                  >
                    Action
                  </div>
                  <div
                    className="px-3 py-1 rounded-md text-xs border"
                    style={{ borderColor: t.border, color: t.muted }}
                  >
                    Cancel
                  </div>
                </div>
              </div>
              <div
                className="w-24 rounded-lg p-3"
                style={{ background: t.card, border: `1px solid ${t.border}` }}
              >
                <div
                  className="w-10 h-10 rounded-full mx-auto mb-2"
                  style={{ background: t.accent + "30" }}
                />
                <div
                  className="h-1.5 rounded-full mx-auto w-12"
                  style={{ background: t.border }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="text-xs text-fg-dim space-y-1">
        {mode === "light" && (
          <p>Classic light mode. White backgrounds, high contrast text, colored accents.</p>
        )}
        {mode === "dark" && (
          <p>
            Standard dark mode. True blacks for OLED efficiency, charcoal cards,
            bright accent pops. Saves up to 30-50% battery on OLED screens.
          </p>
        )}
        {mode === "adaptive" && (
          <p>
            <strong>2026: Adaptive theming.</strong> Colors shift based on time of day,
            ambient light, and user preference. Not just dark — <em>contextually aware</em>.
            Warmer purples at night, higher contrast in sunlight.
          </p>
        )}
      </div>
    </div>
  );
}
