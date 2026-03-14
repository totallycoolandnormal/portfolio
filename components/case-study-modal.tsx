"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type {
  Project,
  ContentBlock,
  LeadBlock,
  SectionBlock,
  ImageBlock,
  ImageGridBlock,
  CaptionedImagesBlock,
  ResultsBlock,
} from "@/data/projects";

// --- Block Renderers ---

function LeadRenderer({ block }: { block: LeadBlock }) {
  return (
    <p className="border-t border-border/30 pt-8 text-base italic leading-relaxed text-fg/70">
      {block.text}
    </p>
  );
}

function SectionRenderer({ block }: { block: SectionBlock }) {
  return (
    <div>
      <h3 className="font-mono text-[10.5px] uppercase tracking-[0.15em] text-fg-muted">
        {block.heading}
      </h3>
      {block.subheading && (
        <p className="mt-2 text-lg font-medium leading-snug text-fg/90">
          {block.subheading}
        </p>
      )}
      <div className="mt-3 space-y-3">
        {block.body.map((paragraph, i) => (
          <p key={i} className="text-sm leading-relaxed text-fg/80">
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
        className="relative overflow-hidden rounded-[var(--radius-sm)] bg-bg"
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
        <figcaption className="mt-2 text-center font-mono text-[10px] italic text-fg-dim">
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
        <h4 className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.15em] text-fg-muted">
          {block.label}
        </h4>
      )}
      <div className={`grid grid-cols-1 gap-3 ${cols}`}>
        {block.images.map((img, i) => (
          <figure key={i}>
            <div
              className="relative overflow-hidden rounded-[var(--radius-sm)] bg-bg"
              style={{ aspectRatio: "16/10" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes={
                  block.columns === 3
                    ? "(max-width: 768px) 100vw, 300px"
                    : "(max-width: 768px) 100vw, 450px"
                }
              />
            </div>
            {img.caption && (
              <figcaption className="mt-1.5 text-center font-mono text-[10px] text-fg-dim">
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
          <figcaption className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.15em] text-fg-muted">
            {img.caption}
          </figcaption>
          <div
            className="relative overflow-hidden rounded-[var(--radius-sm)] bg-bg"
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

function ResultsRenderer({ block }: { block: ResultsBlock }) {
  return (
    <div className="border-t border-border/40 pt-8">
      <h3 className="font-mono text-[10.5px] uppercase tracking-[0.15em] text-fg-muted">
        {block.heading || "The Results"}
      </h3>
      <div className="mt-3 space-y-3">
        {block.body.map((paragraph, i) => (
          <p key={i} className="text-sm leading-relaxed text-fg/80">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

// --- Block Dispatcher ---

function CaseStudyBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "lead":
      return <LeadRenderer block={block} />;
    case "section":
      return <SectionRenderer block={block} />;
    case "image":
      return <ImageRenderer block={block} />;
    case "image-grid":
      return <ImageGridRenderer block={block} />;
    case "captioned-images":
      return <CaptionedImagesRenderer block={block} />;
    case "results":
      return <ResultsRenderer block={block} />;
  }
}

// --- Modal ---

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
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

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-bg/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative my-8 w-full max-w-4xl rounded-[var(--radius-lg)] border border-border/60 bg-bg-card md:my-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-bg/60 text-fg-muted backdrop-blur-sm transition-colors hover:text-fg"
              aria-label="Close"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M2 2l10 10M12 2L2 12" />
              </svg>
            </button>

            {/* Hero image */}
            <div
              className="relative overflow-hidden rounded-t-[var(--radius-lg)]"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 900px"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-10">
              {/* Header */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-fg-muted">
                  {project.company}
                </span>
                <span className="text-fg-dim">·</span>
                <span className="font-mono text-[10.5px] text-fg-dim">
                  {project.year}
                </span>
              </div>
              <h2 className="mt-2 font-display text-[clamp(1.5rem,3vw,2.5rem)] uppercase leading-tight tracking-[-0.02em] text-fg">
                {project.title}
              </h2>
              <p className="mt-1 text-sm text-fg-muted">{project.role}</p>

              {/* Metrics */}
              {project.metrics && (
                <div className="mt-6 flex gap-8 border-b border-border/40 pb-6">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <span className="font-display text-3xl uppercase text-fg">
                        {m.value}
                      </span>
                      <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-fg-dim">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Editorial content blocks */}
              <div className="mt-8 space-y-10">
                {project.caseStudy.blocks.map((block, i) => (
                  <CaseStudyBlock key={i} block={block} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
