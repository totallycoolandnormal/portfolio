"use client";

import { useEffect, useCallback, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import type {
  Project,
  ContentBlock,
  LeadBlock,
  SectionBlock,
  ImageBlock,
  ImageGridBlock,
  CaptionedImagesBlock,
  ResultsBlock,
  RoleBlock,
} from "@/data/projects";

/* ═══════════════════════════════════════════════════════
   Block Renderers — Light mode
   ═══════════════════════════════════════════════════════ */

function LeadRenderer({ block }: { block: LeadBlock }) {
  return (
    <p className="border-t border-border pt-8 text-lg leading-relaxed text-fg-secondary italic">
      {block.text}
    </p>
  );
}

function SectionRenderer({ block }: { block: SectionBlock }) {
  return (
    <div>
      <h3 className="text-xl font-medium tracking-[-0.01em] text-fg">
        {block.heading}
      </h3>
      {block.subheading && (
        <p className="mt-1.5 text-sm font-medium text-fg-secondary">
          {block.subheading}
        </p>
      )}
      <div className="mt-3 space-y-3">
        {block.body.map((paragraph, i) => (
          <p key={i} className="text-sm leading-relaxed text-fg-secondary">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function ImageRenderer({ block }: { block: ImageBlock }) {
  return (
    <figure>
      <div
        className="relative overflow-hidden rounded-[var(--radius)] bg-bg-secondary"
        style={{ aspectRatio: block.aspectRatio || "16/10" }}
      >
        <Image
          src={block.src}
          alt={block.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 900px"
        />
      </div>
      {block.caption && (
        <figcaption className="mt-2 text-center font-mono text-[11px] text-fg-tertiary">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

function ImageGridRenderer({ block }: { block: ImageGridBlock }) {
  const cols = block.columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  return (
    <div>
      {block.label && (
        <h4 className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-fg-tertiary">
          {block.label}
        </h4>
      )}
      <div className={`grid grid-cols-1 gap-3 ${cols}`}>
        {block.images.map((img, i) => (
          <figure key={i}>
            <div
              className="relative overflow-hidden rounded-lg bg-bg-secondary"
              style={{ aspectRatio: "16/10" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes={block.columns === 3 ? "(max-width: 768px) 100vw, 300px" : "(max-width: 768px) 100vw, 450px"}
              />
            </div>
            {img.caption && (
              <figcaption className="mt-1.5 text-center font-mono text-[11px] text-fg-tertiary">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}

function CaptionedImagesRenderer({ block }: { block: CaptionedImagesBlock }) {
  return (
    <div className="space-y-6">
      {block.images.map((img, i) => (
        <figure key={i}>
          <figcaption className="mb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-fg-tertiary">
            {img.caption}
          </figcaption>
          <div
            className="relative overflow-hidden rounded-lg bg-bg-secondary"
            style={{ aspectRatio: "16/10" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
        </figure>
      ))}
    </div>
  );
}

function RoleRenderer({ block }: { block: RoleBlock }) {
  return (
    <div className="rounded-[var(--radius)] border border-border bg-bg-secondary p-5">
      <h4 className="font-mono text-[11px] uppercase tracking-[0.1em] text-fg-tertiary mb-3">
        My Role
      </h4>
      <ul className="space-y-1.5">
        {block.items.map((item, i) => (
          <li key={i} className="text-sm leading-relaxed text-fg-secondary flex gap-2">
            <span className="text-fg-tertiary mt-0.5 shrink-0">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ResultsRenderer({ block }: { block: ResultsBlock }) {
  return (
    <div className="border-l-2 border-fg pl-6">
      <h3 className="text-lg font-medium text-fg">
        {block.heading || "The Results"}
      </h3>
      <div className="mt-3 space-y-3">
        {block.body.map((paragraph, i) => (
          <p key={i} className="text-sm leading-relaxed text-fg-secondary">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function CaseStudyBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "lead": return <LeadRenderer block={block} />;
    case "section": return <SectionRenderer block={block} />;
    case "image": return <ImageRenderer block={block} />;
    case "image-grid": return <ImageGridRenderer block={block} />;
    case "captioned-images": return <CaptionedImagesRenderer block={block} />;
    case "results": return <ResultsRenderer block={block} />;
    case "role": return <RoleRenderer block={block} />;
  }
}

/* ═══════════════════════════════════════════════════════
   Modal — Light mode
   ═══════════════════════════════════════════════════════ */

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) setActiveProject(project);
  }, [project]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (dropdownOpen) setDropdownOpen(false);
        else onClose();
      }
    },
    [onClose, dropdownOpen],
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  const switchProject = useCallback((newProject: Project) => {
    if (newProject.id === activeProject?.id) {
      setDropdownOpen(false);
      return;
    }
    setTransitioning(true);
    setDropdownOpen(false);
    setTimeout(() => {
      setActiveProject(newProject);
      scrollRef.current?.scrollTo({ top: 0 });
      setTimeout(() => setTransitioning(false), 50);
    }, 300);
  }, [activeProject]);

  return (
    <AnimatePresence>
      {project && activeProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-bg shadow-2xl md:my-[5vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-bg/95 px-6 py-3 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-fg">
                  {activeProject.company}
                </span>
                <span className="text-fg-tertiary">·</span>
                <span className="text-sm text-fg-secondary">
                  {activeProject.title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Project switcher */}
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 font-mono text-[11px] text-fg-secondary transition-colors hover:border-fg-tertiary hover:text-fg"
                  >
                    Switch
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M1.5 3L4 5.5L6.5 3" />
                    </svg>
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 top-full mt-1 min-w-[240px] rounded-xl border border-border bg-bg p-1 shadow-xl">
                      {projects.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => switchProject(p)}
                          className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs transition-colors ${
                            p.id === activeProject.id
                              ? "bg-bg-secondary text-fg font-medium"
                              : "text-fg-secondary hover:bg-bg-secondary hover:text-fg"
                          }`}
                        >
                          <span className="truncate">{p.company} — {p.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Close */}
                <button
                  onClick={onClose}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-fg-tertiary transition-colors hover:bg-bg-secondary hover:text-fg"
                  aria-label="Close"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M2 2l10 10M12 2L2 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto"
              style={{
                filter: transitioning ? "blur(8px)" : "blur(0px)",
                opacity: transitioning ? 0 : 1,
                transition: "filter 0.3s ease, opacity 0.3s ease",
              }}
            >
              {/* Hero image */}
              <div className="relative" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={activeProject.coverImage}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 900px"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-fg-tertiary">
                    {activeProject.company}
                  </span>
                  <span className="text-fg-tertiary">·</span>
                  <span className="font-mono text-[11px] text-fg-tertiary">
                    {activeProject.year}
                  </span>
                </div>
                <h2 className="mt-2 text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-tight tracking-[-0.02em] text-fg">
                  {activeProject.title}
                </h2>
                <p className="mt-1 text-sm text-fg-secondary">{activeProject.role}</p>

                {activeProject.metrics && (
                  <div className="mt-6 flex gap-8 border-b border-border pb-6">
                    {activeProject.metrics.map((m) => (
                      <div key={m.label}>
                        <span className="text-3xl font-medium text-fg">
                          {m.value}
                        </span>
                        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-fg-tertiary">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-8 space-y-10">
                  {activeProject.caseStudy.blocks.map((block, i) => (
                    <CaseStudyBlock key={`${activeProject.id}-${i}`} block={block} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
