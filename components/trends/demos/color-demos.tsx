"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Content-Aware Color ── */
const albums = [
  {
    name: "Brat",
    artist: "Charli XCX",
    hue: "142",
    bg: "rgb(138, 204, 57)",
    text: "#000",
    cover: "linear-gradient(135deg, #8acc39 0%, #6db82a 100%)",
  },
  {
    name: "GNX",
    artist: "Kendrick Lamar",
    hue: "220",
    bg: "rgb(30, 58, 138)",
    text: "#fff",
    cover: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
  },
  {
    name: "Hit Me Hard and Soft",
    artist: "Billie Eilish",
    hue: "200",
    bg: "rgb(56, 189, 248)",
    text: "#000",
    cover: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)",
  },
  {
    name: "Cowboy Carter",
    artist: "Beyonce",
    hue: "25",
    bg: "rgb(217, 119, 6)",
    text: "#fff",
    cover: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
  },
];

export function ContentAwareColor() {
  const [idx, setIdx] = useState(0);
  const album = albums[idx];

  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % albums.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={album.name}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl p-5 flex items-center gap-5 transition-colors"
          style={{ background: album.bg, color: album.text }}
        >
          <div
            className="w-20 h-20 rounded-lg shrink-0 shadow-lg"
            style={{ background: album.cover }}
          />
          <div>
            <div className="font-medium text-lg leading-tight">{album.name}</div>
            <div className="opacity-70 text-sm">{album.artist}</div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-32 h-1 rounded-full bg-current opacity-30 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-current"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "linear" }}
                  key={album.name}
                />
              </div>
              <span className="text-xs opacity-60 font-mono">2:34</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 justify-center">
        {albums.map((a, i) => (
          <button
            key={a.name}
            onClick={() => setIdx(i)}
            className="w-2.5 h-2.5 rounded-full transition-all duration-300"
            style={{
              background: i === idx ? a.bg : "var(--border)",
              transform: i === idx ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>
      <p className="text-xs text-fg-dim text-center">
        The card&apos;s background adapts to the dominant color of the content.
        Click dots or wait for auto-advance.
      </p>
    </div>
  );
}

/* ── Elevated Neutrals ── */
const neutralPalettes = [
  { name: "Warm Sand", colors: ["#f5f0eb", "#e8ddd4", "#d4c5b5", "#b8a894", "#8c7a66"] },
  { name: "Cool Stone", colors: ["#f0f2f5", "#dfe3e8", "#c4cad3", "#9aa5b1", "#6b7a8d"] },
  { name: "Moss", colors: ["#f0f4f0", "#dce5dc", "#b8ccb8", "#8aab8a", "#5c8a5c"] },
  { name: "Terracotta", colors: ["#f5eeea", "#e8d8cf", "#d4b8a8", "#c09882", "#a07058"] },
];

export function ElevatedNeutrals() {
  return (
    <div className="space-y-5">
      {neutralPalettes.map((palette) => (
        <div key={palette.name}>
          <span className="text-xs text-fg-muted font-mono mb-2 block">
            {palette.name}
          </span>
          <div className="flex gap-1.5">
            {palette.colors.map((color) => (
              <motion.div
                key={color}
                whileHover={{ scale: 1.15, y: -4 }}
                className="flex-1 h-14 rounded-lg cursor-pointer relative group"
                style={{ background: color }}
              >
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-fg-dim opacity-0 group-hover:opacity-100 transition-opacity">
                  {color}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Gradient Evolution ── */
export function GradientShowcase() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <div
          className="h-28 rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, #a78bfa 0%, #ec4899 50%, #f97316 100%)",
          }}
        />
        <span className="text-xs text-fg-dim font-mono">Linear Multi-Stop</span>
      </div>
      <div className="space-y-2">
        <div
          className="h-28 rounded-xl"
          style={{
            background: `
              radial-gradient(at 20% 30%, rgba(168,85,247,0.6) 0%, transparent 50%),
              radial-gradient(at 80% 70%, rgba(236,72,153,0.5) 0%, transparent 50%),
              radial-gradient(at 50% 50%, rgba(59,130,246,0.4) 0%, transparent 60%),
              #1a1a2e
            `,
          }}
        />
        <span className="text-xs text-fg-dim font-mono">Mesh Gradient</span>
      </div>
      <div className="space-y-2">
        <div
          className="h-28 rounded-xl overflow-hidden relative"
          style={{
            background:
              "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <span className="text-xs text-fg-dim font-mono">Grainy Gradient</span>
      </div>
      <div className="space-y-2">
        <motion.div
          className="h-28 rounded-xl"
          animate={{
            background: [
              "linear-gradient(0deg, #a78bfa, #3b82f6)",
              "linear-gradient(120deg, #ec4899, #a78bfa)",
              "linear-gradient(240deg, #3b82f6, #ec4899)",
              "linear-gradient(360deg, #a78bfa, #3b82f6)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <span className="text-xs text-fg-dim font-mono">Aurora / Animated</span>
      </div>
    </div>
  );
}
