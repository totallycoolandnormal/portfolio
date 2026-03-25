"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type NavStyle = "classic" | "floating" | "rail" | "inset";

const navStyles: Record<
  NavStyle,
  {
    label: string;
    description: string;
    who: string;
    why: string;
  }
> = {
  classic: {
    label: "Classic Full-Height",
    description:
      "Edge-to-edge sidebar, flush with browser chrome. Clean separation between nav and content.",
    who: "Linear, GitHub, Notion",
    why: "Maximum screen utilization. Professional, tool-like feel. Best for data-dense dashboards where every pixel counts.",
  },
  floating: {
    label: "Floating Rounded",
    description:
      "Sidebar sits inside a rounded container with margin from the viewport edges. The defining sidebar pattern of 2025-2026.",
    who: "Arc Browser, Raycast, shadcn/ui",
    why: "Creates visual breathing room. The rounded container softens the interface and makes the app feel more like a product than a website. Conveys craft and attention to detail.",
  },
  rail: {
    label: "Icon Rail",
    description:
      "Collapsed icon-only strip (48-64px wide). Expands on hover or click. Space-efficient for content-first apps.",
    who: "Slack, VS Code, Discord",
    why: "Maximizes content area. Works well for power users who memorize icon meanings. Pairs with keyboard shortcuts for zero-click navigation.",
  },
  inset: {
    label: "Inset Panel",
    description:
      "Navigation sits inside the content area with a visible background contrast. Often with its own scrolling context.",
    who: "Apple Music, Spotify, macOS Finder",
    why: "Creates a layered spatial model — the nav feels like a panel within the app, not a structural border. Natural for media-heavy interfaces.",
  },
};

const navItems = [
  { icon: "🏠", label: "Home" },
  { icon: "📊", label: "Analytics" },
  { icon: "📝", label: "Projects" },
  { icon: "👥", label: "Team" },
  { icon: "⚙️", label: "Settings" },
];

export function NavigationLayoutExplorer() {
  const [style, setStyle] = useState<NavStyle>("floating");
  const [active, setActive] = useState(0);
  const config = navStyles[style];

  return (
    <div className="space-y-6">
      {/* Style selector */}
      <div className="flex gap-2 flex-wrap">
        {(Object.keys(navStyles) as NavStyle[]).map((s) => (
          <button
            key={s}
            onClick={() => setStyle(s)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-colors ${
              style === s
                ? "bg-accent text-black"
                : "bg-white/[0.06] text-fg-muted hover:text-fg"
            }`}
          >
            {navStyles[s].label}
          </button>
        ))}
      </div>

      {/* Preview */}
      <div className="bg-white/[0.02] rounded-xl border border-border overflow-hidden h-72 flex">
        <AnimatePresence mode="wait">
          <motion.div
            key={style}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="flex w-full"
          >
            {/* Sidebar area */}
            <div
              className={`shrink-0 flex flex-col ${
                style === "classic"
                  ? "w-52 bg-white/[0.04] border-r border-border"
                  : style === "floating"
                  ? "w-52 m-3 bg-white/[0.06] rounded-2xl border border-border/50"
                  : style === "rail"
                  ? "w-16 bg-white/[0.04] border-r border-border items-center"
                  : "w-52 m-3 ml-3 bg-white/[0.03] rounded-xl"
              }`}
            >
              {/* Logo */}
              <div
                className={`flex items-center gap-2 ${
                  style === "rail" ? "p-3 justify-center" : "px-4 py-4"
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-accent/30 flex items-center justify-center text-xs">
                  F
                </div>
                {style !== "rail" && (
                  <span className="text-sm font-medium text-fg/80">Flint</span>
                )}
              </div>

              {/* Nav items */}
              <div className={`flex-1 ${style === "rail" ? "px-2" : "px-2"} space-y-0.5`}>
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.label}
                    onClick={() => setActive(i)}
                    className={`w-full flex items-center gap-3 text-left transition-colors relative ${
                      style === "rail"
                        ? "p-2 justify-center rounded-lg"
                        : "px-3 py-2 rounded-lg"
                    } ${
                      active === i
                        ? "bg-white/[0.08] text-fg"
                        : "text-fg-muted hover:bg-white/[0.04] hover:text-fg"
                    }`}
                  >
                    <span className="text-sm">{item.icon}</span>
                    {style !== "rail" && (
                      <span className="text-xs">{item.label}</span>
                    )}
                    {active === i && (
                      <motion.div
                        layoutId={`nav-active-${style}`}
                        className="absolute inset-0 bg-white/[0.08] rounded-lg"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Content area */}
            <div className="flex-1 p-6">
              <div className="h-3 w-32 bg-white/[0.06] rounded mb-4" />
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-16 bg-white/[0.03] rounded-xl border border-border/30"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Analysis */}
      <div className="bg-white/[0.03] rounded-lg p-4 space-y-2">
        <div className="flex items-baseline justify-between">
          <h4 className="text-sm font-medium text-fg">{config.label}</h4>
          <span className="text-[10px] text-fg-dim font-mono">
            Used by: {config.who}
          </span>
        </div>
        <p className="text-xs text-fg-muted">{config.description}</p>
        <p className="text-xs text-fg-dim">
          <strong className="text-fg-muted">Why it works:</strong> {config.why}
        </p>
      </div>
    </div>
  );
}
