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
        <nav style={{ zIndex: 100, width: "100%", padding: "36px 0", display: "block", position: "relative" }}>
          <div style={{
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: 1554,
            margin: "0 auto",
            padding: "0 96px",
            display: "flex",
            position: "relative",
          }}>
            {/* Left — Name */}
            <div style={{ alignItems: "center", gap: 16, display: "flex" }}>
              <a
                href="/"
                style={{
                  fontFamily: "var(--font-primary)",
                  color: "#000",
                  borderRadius: 48,
                  alignItems: "center",
                  height: 36,
                  padding: "0 16px",
                  fontSize: 16,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "background .2s",
                  display: "flex",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f9f9f9")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                Kurt J
              </a>
            </div>

            {/* Center — Segmented Control */}
            <div style={{
              background: "#f9f9f9",
              borderRadius: 40,
              gap: 0,
              height: 40,
              padding: 2,
              display: "flex",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}>
              <a
                href="/"
                style={{
                  fontFamily: "var(--font-primary)",
                  color: "#000",
                  background: "#fff",
                  boxShadow: "4px 3px 1px transparent, 2px 2px 1px rgba(0,0,0,0.01), 1px 1px 1px rgba(0,0,0,0.05), 1px 0 1px rgba(0,0,0,0.09)",
                  whiteSpace: "nowrap",
                  borderRadius: 48,
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: 91,
                  padding: "0 24px",
                  fontSize: 16,
                  fontWeight: 500,
                  textDecoration: "none",
                  display: "flex",
                  position: "relative",
                }}
              >
                <span style={{ zIndex: 1, lineHeight: "24px", position: "relative" }}>Work</span>
              </a>
              <a
                href="/about"
                style={{
                  fontFamily: "var(--font-primary)",
                  color: "rgba(0,0,0,0.5)",
                  whiteSpace: "nowrap",
                  borderRadius: 48,
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: 91,
                  padding: "0 24px",
                  fontSize: 16,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color .3s cubic-bezier(.4,0,.2,1), background .3s cubic-bezier(.4,0,.2,1)",
                  display: "flex",
                  position: "relative",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0,0,0,0.5)")}
              >
                <span style={{ zIndex: 1, lineHeight: "24px", position: "relative" }}>About</span>
              </a>
            </div>

            {/* Right — Contact */}
            <div style={{ alignItems: "center", gap: 48, display: "flex" }}>
              <a
                href="https://www.linkedin.com/in/kurtjeske1/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  height: 36,
                  fontFamily: "var(--font-primary)",
                  color: "#000",
                  whiteSpace: "nowrap",
                  border: "none",
                  borderRadius: 48,
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: 89,
                  padding: "0 16px",
                  fontSize: 16,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "background .2s",
                  display: "flex",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f9f9f9")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* ═══════════════ HERO ═══════════════ */}
        <section style={{ padding: "0 0 24px" }}>
          <div style={{ maxWidth: 1554, margin: "0 auto", padding: "0 48px" }}>
            <div style={{ gap: 48, width: "100%", maxWidth: 1496, margin: "0 auto", display: "flex" }}>
              {/* Left card — teal with shader/video */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease }}
                style={{
                  touchAction: "pan-y",
                  backgroundColor: "#004c63",
                  borderRadius: 48,
                  flex: 1,
                  height: 640,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Video background */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.4,
                  }}
                  src="/assets/clocks-video.mp4"
                />

                {/* Text overlays */}
                <div style={{ pointerEvents: "auto", zIndex: 10, position: "absolute", inset: 0 }}>
                  {/* Bio — bottom left */}
                  <p style={{
                    color: "#fff",
                    fontFamily: "var(--font-primary)",
                    textShadow: "0 1px 4px rgba(0,0,0,0.11)",
                    letterSpacing: "0.01em",
                    maxWidth: 360,
                    fontSize: 18,
                    fontWeight: 400,
                    lineHeight: "170%",
                    position: "absolute",
                    bottom: 48,
                    left: 48,
                  }}>
                    Kurt is a product design leader based in New York, with 15 years building products for hundreds of millions of people.
                  </p>

                  {/* Status — bottom right */}
                  <p style={{
                    color: "#fff",
                    fontFamily: "var(--font-primary)",
                    textAlign: "right",
                    textShadow: "0 1px 4px rgba(0,0,0,0.11)",
                    letterSpacing: "0.01em",
                    fontSize: 18,
                    fontWeight: 400,
                    lineHeight: "170%",
                    position: "absolute",
                    bottom: 48,
                    right: 48,
                  }}>
                    Previously at Epic Games
                  </p>
                </div>
              </motion.div>

              {/* Right card — hero background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease, delay: 0.08 }}
                style={{
                  backgroundImage: "url(/assets/hero-background.png)",
                  backgroundPosition: "50%",
                  backgroundSize: "cover",
                  borderRadius: 48,
                  flex: 1,
                  height: 640,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* About button — bottom right */}
                <div style={{
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  padding: 36,
                  display: "flex",
                  position: "absolute",
                  inset: 0,
                }}>
                  <a href="/about" style={{ alignItems: "center", gap: 12, textDecoration: "none", display: "flex" }}>
                    {/* Glass pill label */}
                    <span style={{ position: "relative", borderRadius: 100, overflow: "hidden" }}>
                      <span style={{
                        position: "absolute",
                        inset: 0,
                        backdropFilter: "blur(0.8px)",
                        WebkitBackdropFilter: "blur(0.8px)",
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "inherit",
                        border: "1px solid rgba(255, 255, 255, 0.25)",
                        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 0 16px rgba(255, 255, 255, 0.05), 0 8px 32px rgba(0, 0, 0, 0.12)",
                      }} />
                      <span style={{
                        position: "relative",
                        zIndex: 1,
                        color: "rgba(255,255,255,0.85)",
                        fontFamily: "var(--font-primary)",
                        letterSpacing: "0.01em",
                        whiteSpace: "nowrap",
                        alignItems: "center",
                        padding: "14px 28px",
                        fontSize: 16,
                        fontWeight: 500,
                        display: "flex",
                      }}>
                        Learn about me
                      </span>
                    </span>

                    {/* Glass arrow circle */}
                    <span style={{ position: "relative", borderRadius: 100, overflow: "hidden", display: "flex", width: 48, height: 48, justifyContent: "center", alignItems: "center" }}>
                      <span style={{
                        position: "absolute",
                        inset: 0,
                        backdropFilter: "blur(0.8px)",
                        WebkitBackdropFilter: "blur(0.8px)",
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "inherit",
                        border: "1px solid rgba(255, 255, 255, 0.25)",
                        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 0 16px rgba(255, 255, 255, 0.05), 0 8px 32px rgba(0, 0, 0, 0.12)",
                      }} />
                      <span style={{ position: "relative", zIndex: 1, color: "rgba(255,255,255,0.85)", fontSize: 20 }}>→</span>
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════ WORK GRID ═══════════════ */}
        <section id="work" style={{ padding: "24px 0" }}>
          <div style={{ justifyContent: "center", maxWidth: 1554, margin: "0 auto", padding: "0 48px", display: "flex" }}>
            <div style={{ flexWrap: "wrap", justifyContent: "flex-start", gap: 48, width: "100%", maxWidth: 1496, display: "flex" }}>
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer"
                  style={{
                    aspectRatio: "724/840",
                    backgroundColor: "#fff",
                    border: "1px solid #e9e9e9",
                    borderRadius: 48,
                    flex: "0 0 calc(50% - 24px)",
                    overflow: "hidden",
                    transition: "transform 0.3s ease",
                  }}
                  whileHover={{ scale: 1.005 }}
                >
                  <a style={{ width: "100%", height: "100%", color: "inherit", textDecoration: "none", display: "block" }}>
                    <div style={{ flexDirection: "column", justifyContent: "flex-start", height: "100%", padding: 48, display: "flex" }}>
                      {/* Title + description */}
                      <div>
                        <h3 style={{
                          fontFamily: "var(--font-primary)",
                          color: "#000",
                          marginBottom: 16,
                          fontSize: 24,
                          fontWeight: 500,
                          lineHeight: "120%",
                        }}>
                          {project.title}
                        </h3>
                        <p style={{
                          fontFamily: "var(--font-primary)",
                          color: "#666",
                          fontSize: 16,
                          fontWeight: 400,
                          lineHeight: "140%",
                        }}>
                          {project.outcome}
                        </p>
                      </div>

                      {/* Cover image — fills remaining space */}
                      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", paddingTop: 32 }}>
                        <div style={{ position: "relative", width: "100%", borderRadius: 16, overflow: "hidden", aspectRatio: "16/10" }}>
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
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ FOOTER ═══════════════ */}
        <footer style={{ maxWidth: 1554, margin: "0 auto", padding: "96px 48px 48px" }}>
          <div style={{
            fontFamily: "var(--font-primary)",
            fontSize: 14,
            fontWeight: 400,
            lineHeight: "170%",
            color: "rgba(0,0,0,0.5)",
          }}>
            <div style={{ marginBottom: 4 }}>Copyright · © 2026</div>
            <div style={{ marginBottom: 4 }}>Made in New York</div>
            <div style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
              <span>Get in touch with me</span>
              {[
                { label: "Email", href: "mailto:jeskek@gmail.com" },
                { label: "WhatsApp", href: "https://wa.me/14157545651" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/kurtjeske1/" },
                { label: "CV", href: "/KJ-CV.pdf" },
              ].map((link) => (
                <span key={link.label}>
                  <span style={{ margin: "0 4px" }}>·</span>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{
                      color: "#000",
                      textDecoration: "underline",
                      textDecorationColor: "#e9e9e9",
                      textUnderlineOffset: 2,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    {link.label}
                  </a>
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
