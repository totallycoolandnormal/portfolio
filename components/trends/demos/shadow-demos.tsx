"use client";

import { motion } from "framer-motion";

/* ── Elevation Scale ── */
export function ElevationScale() {
  const levels = [
    {
      level: 0,
      label: "Ground",
      shadow: "none",
      use: "Flat content, backgrounds",
    },
    {
      level: 1,
      label: "Raised",
      shadow: "0 1px 3px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.15)",
      use: "Cards, list items",
    },
    {
      level: 2,
      label: "Floating",
      shadow: "0 4px 12px rgba(0,0,0,0.25), 0 2px 4px rgba(0,0,0,0.15)",
      use: "Popovers, tooltips",
    },
    {
      level: 3,
      label: "Overlay",
      shadow: "0 8px 24px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)",
      use: "Dropdowns, menus",
    },
    {
      level: 4,
      label: "Modal",
      shadow: "0 16px 48px rgba(0,0,0,0.35), 0 8px 16px rgba(0,0,0,0.2)",
      use: "Modals, dialogs",
    },
    {
      level: 5,
      label: "Peak",
      shadow: "0 24px 64px rgba(0,0,0,0.4), 0 12px 24px rgba(0,0,0,0.25)",
      use: "Notifications, toasts",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
      {levels.map((item) => (
        <motion.div
          key={item.level}
          className="bg-bg-card border border-border rounded-xl p-4 flex flex-col items-center gap-2"
          style={{ boxShadow: item.shadow }}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-xs font-mono text-accent/60">Level {item.level}</span>
          <span className="text-sm font-medium">{item.label}</span>
          <span className="text-[10px] text-fg-dim text-center">{item.use}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Multi-Layer Shadow Technique ── */
export function MultiLayerShadow() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-3">
        <span className="text-xs font-mono text-fg-dim">Single shadow (flat)</span>
        <div
          className="bg-bg-card border border-border rounded-xl p-8 text-center"
          style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}
        >
          <span className="text-sm text-fg-muted">One layer</span>
        </div>
        <pre className="text-[10px] font-mono text-fg-dim bg-white/[0.03] p-2 rounded">
          {`box-shadow: 0 4px 16px rgba(0,0,0,0.3);`}
        </pre>
      </div>
      <div className="space-y-3">
        <span className="text-xs font-mono text-fg-dim">
          Multi-layer (natural depth)
        </span>
        <div
          className="bg-bg-card border border-border rounded-xl p-8 text-center"
          style={{
            boxShadow: `
              0 1px 2px rgba(0,0,0,0.15),
              0 4px 8px rgba(0,0,0,0.12),
              0 12px 24px rgba(0,0,0,0.1),
              0 24px 48px rgba(0,0,0,0.08)
            `,
          }}
        >
          <span className="text-sm text-fg-muted">Four layers</span>
        </div>
        <pre className="text-[10px] font-mono text-fg-dim bg-white/[0.03] p-2 rounded whitespace-pre-wrap">
          {`box-shadow:
  0 1px 2px rgba(0,0,0,0.15),
  0 4px 8px rgba(0,0,0,0.12),
  0 12px 24px rgba(0,0,0,0.1),
  0 24px 48px rgba(0,0,0,0.08);`}
        </pre>
      </div>
    </div>
  );
}
