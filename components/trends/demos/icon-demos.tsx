"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* ── Icon Style Comparison ── */
export function IconStyleComparison() {
  const [style, setStyle] = useState<"outline" | "filled" | "duotone">("outline");

  const icons = [
    {
      name: "Home",
      outline: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      filled: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 9v11a2 2 0 002 2h4v-8h6v8h4a2 2 0 002-2V9l-9-7z" />
        </svg>
      ),
      duotone: (
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" fill="currentColor" opacity="0.15" />
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path d="M9 22V12h6v10" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      ),
    },
    {
      name: "Heart",
      outline: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      ),
      filled: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      ),
      duotone: (
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      ),
    },
    {
      name: "Bell",
      outline: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 01-3.46 0" />
        </svg>
      ),
      filled: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 01-3.46 0" />
        </svg>
      ),
      duotone: (
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.75" />
          <path d="M13.73 21a2 2 0 01-3.46 0" fill="none" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      ),
    },
    {
      name: "Settings",
      outline: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      ),
      filled: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
          <circle cx="12" cy="12" r="3" fill="var(--bg)" />
        </svg>
      ),
      duotone: (
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex gap-2 justify-center">
        {(["outline", "filled", "duotone"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setStyle(s)}
            className={`px-4 py-1.5 rounded-lg text-xs font-mono capitalize transition-colors ${
              style === s
                ? "bg-accent text-black"
                : "bg-white/[0.06] text-fg-muted hover:text-fg"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-8">
        {icons.map((icon) => (
          <motion.div
            key={icon.name}
            className="flex flex-col items-center gap-2"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              key={`${icon.name}-${style}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="text-fg"
            >
              {icon[style]}
            </motion.div>
            <span className="text-[10px] text-fg-dim">{icon.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Animated Icon Demo ── */
export function AnimatedIconDemo() {
  const [active, setActive] = useState(false);

  return (
    <div className="flex items-center justify-center gap-8 py-4">
      <motion.div
        className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center cursor-pointer"
        onHoverStart={() => setActive(true)}
        onHoverEnd={() => setActive(false)}
        whileHover={{ scale: 1.1 }}
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        >
          <motion.path
            d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"
            animate={active ? { rotate: [0, -15, 15, -10, 10, 0] } : {}}
            transition={{ duration: 0.6 }}
            style={{ originX: 0.5, originY: 0 }}
          />
          <motion.path
            d="M13.73 21a2 2 0 01-3.46 0"
            animate={active ? { y: [0, 2, 0] } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
        </motion.svg>
      </motion.div>

      <motion.div
        className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.1, rotate: 90 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09" />
        </svg>
      </motion.div>

      <motion.div
        className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          whileHover={{
            stroke: "var(--accent)",
          }}
        >
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </motion.svg>
      </motion.div>

      <span className="text-xs text-fg-dim">Hover these icons</span>
    </div>
  );
}
