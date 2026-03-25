"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
  { id: "thesis", label: "Thesis" },
  { id: "color", label: "Color" },
  { id: "typography", label: "Typography" },
  { id: "layout", label: "Layout & Nav" },
  { id: "surfaces", label: "Surfaces" },
  { id: "depth", label: "Depth & Shadow" },
  { id: "motion", label: "Motion & Curves" },
  { id: "corners", label: "Corners" },
  { id: "icons", label: "Icons" },
  { id: "illustration", label: "Illustration" },
  { id: "photography", label: "Photography" },
  { id: "dark-mode", label: "Dark Mode" },
  { id: "design-systems", label: "Design Systems" },
  { id: "best-apps", label: "Best Designed Apps" },
  { id: "industry", label: "By Industry" },
  { id: "sources", label: "Sources" },
];

export function TrendNav() {
  const [active, setActive] = useState("thesis");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 h-screen w-[200px] border-r border-border flex flex-col justify-center gap-0.5 px-4 z-50 bg-bg/80 backdrop-blur-xl max-lg:hidden">
      <div className="text-[10px] font-mono text-fg-dim tracking-widest uppercase mb-4 px-3">
        Contents
      </div>
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`relative px-3 py-1.5 text-[12px] rounded-md transition-colors duration-200 ${
            active === id
              ? "text-fg font-medium"
              : "text-fg-muted hover:text-fg"
          }`}
        >
          {active === id && (
            <motion.div
              layoutId="nav-pill"
              className="absolute inset-0 bg-white/[0.06] rounded-md"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
          <span className="relative z-10">{label}</span>
        </a>
      ))}
    </nav>
  );
}
