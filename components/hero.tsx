"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";

const companies = [
  "Epic Games",
  "Electronic Arts",
  "Barnes & Noble",
  "Amazon",
  "Stanford",
];

const heroText =
  "Hi, I\u2019m Kurt. I\u2019m a design leader focused on complex, high-scale products. With experience at Epic Games and Electronic Arts, I specialize in building design systems, platform UX, and product strategy at scale \u2014 combining systems thinking, craft, and 20 years of building products that matter.";

const heroWords = heroText.split(" ");

const WORD_INTERVAL = 55; // ms between each word reveal
const START_DELAY = 500; // ms before first word appears

export function Hero() {
  const [revealedCount, setRevealedCount] = useState(0);
  const [animationDone, setAnimationDone] = useState(false);
  const containerRef = useRef<HTMLHeadingElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const avatarControls = useAnimationControls();

  // ── Staggered word reveal ──────────────────────────────────────
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i++;
        if (i > heroWords.length) {
          clearInterval(interval);
          setAnimationDone(true);
          return;
        }
        setRevealedCount(i);
      }, WORD_INTERVAL);
    }, START_DELAY);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  // ── Position cursor at trailing edge of last revealed word ─────
  useEffect(() => {
    if (revealedCount === 0) return;
    const container = containerRef.current;
    const cursor = cursorRef.current;
    const word = wordRefs.current[revealedCount - 1];
    if (!container || !cursor || !word) return;

    const cRect = container.getBoundingClientRect();
    const wRect = word.getBoundingClientRect();

    cursor.style.left = `${wRect.right - cRect.left + 6}px`;
    cursor.style.top = `${wRect.top - cRect.top + wRect.height / 2}px`;
    cursor.style.opacity = "1";
  }, [revealedCount]);

  // ── Recalculate cursor on resize ───────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      if (revealedCount === 0) return;
      const container = containerRef.current;
      const cursor = cursorRef.current;
      const idx = Math.min(revealedCount - 1, heroWords.length - 1);
      const word = wordRefs.current[idx];
      if (!container || !cursor || !word) return;

      const cRect = container.getBoundingClientRect();
      const wRect = word.getBoundingClientRect();
      cursor.style.left = `${wRect.right - cRect.left + 6}px`;
      cursor.style.top = `${wRect.top - cRect.top + wRect.height / 2}px`;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [revealedCount]);

  // ── Click-to-enlarge interaction ───────────────────────────────
  const handleAvatarClick = useCallback(async () => {
    // Scale up with a springy overshoot
    await avatarControls.start({
      scale: 2,
      transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
    });
    // Hold at full size
    await new Promise((r) => setTimeout(r, 600));
    // Ease back down
    await avatarControls.start({
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    });
  }, [avatarControls]);

  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 py-20 md:px-12 md:py-0">
      {/* Company ticker */}
      <div className="absolute left-0 top-6 w-full overflow-hidden md:top-10">
        <div className="animate-ticker flex whitespace-nowrap">
          {[...companies, ...companies, ...companies, ...companies].map(
            (company, i) => (
              <span
                key={i}
                className="font-mono text-[10.5px] uppercase tracking-[0.15em] text-fg-dim"
              >
                <span className="mx-4 text-fg-dim/40">•</span>
                {company}
              </span>
            ),
          )}
        </div>
      </div>

      {/* ── Animated hero text ──────────────────────────────────── */}
      <div className="max-w-4xl">
        <h2
          ref={containerRef}
          className="relative font-body text-[clamp(1.75rem,3.5vw,3rem)] font-medium leading-[1.35] tracking-[-0.02em] text-fg"
        >
          {heroWords.map((word, i) => (
            <span
              key={i}
              ref={(el) => {
                wordRefs.current[i] = el;
              }}
              className="transition-opacity duration-150"
              style={{ opacity: i < revealedCount ? 1 : 0 }}
            >
              {word}
              {i < heroWords.length - 1 ? " " : ""}
            </span>
          ))}

          {/* ── Headshot cursor ──────────────────────────────── */}
          <span
            ref={cursorRef}
            className="absolute will-change-transform"
            style={{
              width: "1.15em",
              height: "1.15em",
              opacity: 0,
              transform: "translateY(-50%)",
              transition:
                "left 80ms ease-out, top 80ms ease-out, opacity 200ms ease",
              zIndex: 10,
            }}
          >
            <motion.span
              className="block h-full w-full cursor-pointer overflow-hidden rounded-full border-2 border-white shadow-lg shadow-black/40"
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
            </motion.span>
          </span>
        </h2>
      </div>

      {/* Scroll to work — fades in after text animation completes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: animationDone ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.15em] text-fg-muted transition-colors duration-200 hover:border-fg-muted hover:text-fg"
        >
          Selected Work
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M5 1v8M1 5l4 4 4-4" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
