"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import { CaseStudyModal } from "@/components/case-study-modal";
import type { Project } from "@/data/projects";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <main>
        {/* ═══════════════ NAV ═══════════════ */}
        <nav className="mx-auto flex max-w-[var(--container-max)] items-center justify-between px-[var(--container-padding)] py-6">
          <a href="/" className="text-[15px] font-medium text-[var(--foreground)]">
            Kurt J
          </a>
          <div className="flex items-center gap-6">
            <a href="#work" className="text-[15px] text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]">
              Work
            </a>
            <a href="/about" className="text-[15px] text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]">
              About
            </a>
            <a
              href="https://www.linkedin.com/in/kurtjeske1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* ═══════════════ HERO ═══════════════ */}
        <section className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)] pb-6">
          <div className="flex gap-[var(--grid-gap)]">
            {/* Left card — teal with bio */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease }}
              className="relative flex-1 overflow-hidden rounded-[var(--card-radius)]"
              style={{ backgroundColor: "#004c63", height: 640 }}
            >
              {/* Video background */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
                src="/assets/clocks-video.mp4"
              />

              {/* Bio text — bottom left */}
              <div className="absolute bottom-12 left-12 right-12 z-10">
                <p className="max-w-[360px] text-[18px] font-normal leading-[170%] tracking-[0.01em] text-white/90" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.11)" }}>
                  Kurt is a product design leader based in New York, with 15 years building products for hundreds of millions of people.
                </p>
              </div>

              {/* "Currently at" — bottom right */}
              <div className="absolute bottom-12 right-12 z-10">
                <p className="text-[15px] font-normal tracking-[0.01em] text-white/50">
                  Previously at Epic Games
                </p>
              </div>
            </motion.div>

            {/* Right card — light with about link */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="relative flex-1 overflow-hidden rounded-[var(--card-radius)]"
              style={{
                backgroundImage: "url(/images/common/hero.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 640,
              }}
            >
              {/* About link — bottom right */}
              <div className="absolute bottom-9 right-9 z-10 flex items-center gap-3">
                <a
                  href="/about"
                  className="flex items-center gap-3 text-decoration-none"
                >
                  {/* Glass pill */}
                  <span className="relative overflow-hidden rounded-[100px]" style={{ borderRadius: 100 }}>
                    <span className="absolute inset-0" style={{
                      backdropFilter: "blur(0.8px)",
                      WebkitBackdropFilter: "blur(0.8px)",
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "inherit",
                      border: "1px solid rgba(255, 255, 255, 0.25)",
                      boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 0 16px rgba(255, 255, 255, 0.05), 0 8px 32px rgba(0, 0, 0, 0.12)",
                    }} />
                    <span className="relative z-10 flex items-center whitespace-nowrap px-7 py-3.5 text-[16px] font-medium tracking-[0.01em] text-white/85">
                      Learn about me
                    </span>
                  </span>
                  {/* Glass arrow circle */}
                  <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full">
                    <span className="absolute inset-0" style={{
                      backdropFilter: "blur(0.8px)",
                      WebkitBackdropFilter: "blur(0.8px)",
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "inherit",
                      border: "1px solid rgba(255, 255, 255, 0.25)",
                      boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 0 16px rgba(255, 255, 255, 0.05), 0 8px 32px rgba(0, 0, 0, 0.12)",
                    }} />
                    <span className="relative z-10 text-[20px] text-white/85">→</span>
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ WORK GRID ═══════════════ */}
        <section id="work" className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)] py-6">
          <div className="flex flex-wrap gap-[var(--grid-gap)]">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer overflow-hidden rounded-[var(--card-radius)] border border-border bg-[var(--card-bg)] transition-transform duration-300 hover:scale-[1.01]"
                style={{
                  flex: i < 2 ? "0 0 calc(50% - 24px)" : "0 0 calc(50% - 24px)",
                  aspectRatio: i < 2 ? "724/840" : "724/840",
                }}
              >
                <div className="flex h-full flex-col p-12">
                  {/* Logo + title */}
                  <div>
                    <h3 className="text-[24px] font-medium leading-[120%] text-[var(--foreground)]">
                      {project.title}
                    </h3>
                    {project.outcome && (
                      <p className="mt-4 text-[16px] font-normal leading-[140%] text-[var(--text-secondary)]">
                        {project.outcome}
                      </p>
                    )}
                  </div>

                  {/* Cover image */}
                  <div className="mt-auto flex-1 flex items-end pt-8">
                    <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "16/10" }}>
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 700px"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════ FOOTER ═══════════════ */}
        <footer className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)] pb-12 pt-24">
          <div className="space-y-3 text-[14px] leading-[170%] text-[var(--text-secondary)]">
            <div>Copyright · © 2026</div>
            <div>Made in New York</div>
            <div className="flex items-center gap-1">
              <span>Get in touch with me</span>
              <span className="mx-2">·</span>
              {[
                { label: "Email", href: "mailto:jeskek@gmail.com" },
                { label: "WhatsApp", href: "https://wa.me/14157545651" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/kurtjeske1/" },
                { label: "CV", href: "/KJ-CV.pdf" },
              ].map((link, i, arr) => (
                <span key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[var(--foreground)] underline decoration-[var(--border-card)] underline-offset-2 transition-colors hover:text-[var(--foreground)]"
                  >
                    {link.label}
                  </a>
                  {i < arr.length - 1 && <span className="mx-1.5">·</span>}
                </span>
              ))}
            </div>
          </div>
        </footer>
      </main>

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
