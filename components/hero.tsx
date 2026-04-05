"use client";

import { useCallback } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { MeshGradient } from "./mesh-gradient";

const ease = [0.16, 1, 0.3, 1] as const;
const bounce = [0.34, 1.56, 0.64, 1] as const;

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kurtjeske1", external: true },
  { label: "WhatsApp", href: "https://wa.me/14157545651", external: true },
  { label: "CV", href: "/KJ-CV.pdf", external: true },
];

const stats = [
  { value: "15+", label: "Years" },
  { value: "700M+", label: "Users Reached" },
  { value: "50+", label: "Designers Led" },
];

export function Hero() {
  const avatarControls = useAnimationControls();

  const handleAvatarClick = useCallback(async () => {
    await avatarControls.start({
      scale: 2,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.4, ease: bounce },
    });
    await new Promise((r) => setTimeout(r, 500));
    await avatarControls.start({
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    });
  }, [avatarControls]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <MeshGradient />

      {/* ── Top Nav ── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.2 }}
        className="relative z-20 flex items-center justify-between px-6 py-5 md:px-10"
      >
        <span className="text-lg font-extrabold tracking-tight text-fg">
          KJ
        </span>
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="rounded-xl px-3 py-2 text-sm font-bold text-fg-muted transition-all duration-200 hover:bg-white/5 hover:text-fg"
            >
              {link.label}
              {link.external && (
                <span className="ml-0.5 text-[10px] opacity-50">↗</span>
              )}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* ── Hero Content ── */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-[var(--max-width)] flex-col items-center justify-center px-6 text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: bounce, delay: 0.3 }}
          className="mb-6"
        >
          <motion.div
            className="relative mx-auto h-24 w-24 cursor-pointer overflow-hidden rounded-full border-4 border-green shadow-[0_4px_0_#46A302]"
            animate={avatarControls}
            onClick={handleAvatarClick}
            whileHover={{ scale: 1.08, rotate: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Image
              src="/images/common/headshot.png"
              alt="Kurt Jeske"
              width={128}
              height={128}
              className="h-full w-full object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: bounce, delay: 0.45 }}
          className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[1.05] tracking-[-0.03em] text-fg"
        >
          I make products for{" "}
          <span className="text-green">hundreds of millions</span>{" "}
          feel personal.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.6 }}
          className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-fg-muted"
        >
          Design director with 15 years at Epic Games, EA, and Barnes & Noble.
          I build the teams, systems, and culture that make great products inevitable.
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.75 }}
          className="mt-8 flex gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.4, ease: bounce }}
              className="text-center"
            >
              <div className="font-display text-3xl font-black text-green">
                {stat.value}
              </div>
              <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-fg-dim">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.9 }}
          className="mt-10 flex gap-4"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, y: 4 }}
            className="btn-3d btn-3d-green"
          >
            See My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, y: 4 }}
            className="btn-3d btn-3d-white"
          >
            Let&apos;s Talk
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.5 },
            y: { delay: 1.5, duration: 1.5, repeat: Infinity },
          }}
          className="absolute bottom-8"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-fg-dim"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
