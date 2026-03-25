"use client";

import { useCallback } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { MeshGradient } from "./mesh-gradient";

const companies = ["Epic Games", "Electronic Arts", "Barnes & Noble", "Amazon"];

const principles = [
  "The system is the product",
  "AI is my co-designer, not my replacement",
  "Polish is not a phase — it's the whole point",
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const avatarControls = useAnimationControls();

  const handleAvatarClick = useCallback(async () => {
    await avatarControls.start({
      scale: 2,
      transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
    });
    await new Promise((r) => setTimeout(r, 600));
    await avatarControls.start({
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    });
  }, [avatarControls]);

  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 py-20 md:px-12 md:py-0 overflow-hidden">
      <MeshGradient />

      <div className="relative z-10 max-w-3xl">
        {/* Headshot + name row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center gap-4 mb-6"
        >
          <motion.div
            className="h-14 w-14 cursor-pointer overflow-hidden rounded-full border-2 border-fg/20 shadow-lg shadow-black/30"
            animate={avatarControls}
            onClick={handleAvatarClick}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Image
              src="/images/common/headshot.png"
              alt="Kurt Jeske"
              width={96}
              height={96}
              className="h-full w-full object-cover"
              priority
            />
          </motion.div>
          <div>
            <p className="text-sm font-medium text-fg/70">Kurt Jeske</p>
            <p className="font-mono text-[10.5px] text-fg-dim">New York</p>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-fg"
        >

          I&apos;ve spent 15 years making products used by{" "}
          <span className="bg-gradient-to-r from-[#6C63FF] via-[#FF6384] to-[#00D2FF] bg-clip-text text-transparent">
            hundreds of millions
          </span>{" "}
          of people feel personal.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.35 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-fg-muted"
        >

          Design director. 50-person teams. Fortnite, EA, and what&apos;s next.
          I believe AI should make designers more ambitious, not more replaceable.
        </motion.p>

        {/* Philosophy strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          {principles.map((p, i) => (
            <span
              key={p}
              className="rounded-full border border-border px-4 py-1.5 font-mono text-[11px] text-fg-muted transition-colors hover:border-fg-dim hover:text-fg"
            >
              {p}
            </span>
          ))}
        </motion.div>

        {/* Company strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex items-center gap-6"
        >
          {companies.map((company) => (
            <span
              key={company}
              className="font-mono text-[10px] uppercase tracking-[0.1em] text-fg-dim/60"
            >
              {company}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.15em] text-fg-muted transition-colors duration-200 hover:border-fg-muted hover:text-fg"
        >
          Selected Work
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M5 1v8M1 5l4 4 4-4" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
