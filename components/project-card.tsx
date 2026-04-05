"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
  className?: string;
}

const bounce = [0.34, 1.56, 0.64, 1] as const;

export function ProjectCard({ project, index, onClick, className = "" }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        ease: bounce,
        delay: index * 0.1,
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      whileTap={{ y: 4, scale: 0.98, transition: { duration: 0.1 } }}
      onClick={onClick}
      className={`group cursor-pointer overflow-hidden rounded-[var(--radius-xl)] border-2 border-border bg-bg-card shadow-[0_4px_0_var(--border)] transition-shadow duration-200 hover:shadow-[0_6px_0_var(--border)] active:shadow-[0_0px_0_var(--border)] ${className}`}
    >
      {/* Cover image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Color overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(to top, ${project.accentColor}30, transparent 60%)`,
          }}
        />
      </div>

      {/* Card content */}
      <div className="p-5 md:p-6">
        {/* Company + year badge */}
        <div className="flex items-center gap-2">
          <span
            className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
            style={{
              backgroundColor: project.accentColor + "20",
              color: project.accentColor,
            }}
          >
            {project.company}
          </span>
          <span className="font-mono text-[10px] text-fg-dim">
            {project.year}
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl font-extrabold leading-tight tracking-[-0.01em] text-fg">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-fg-muted line-clamp-2">
          {project.outcome}
        </p>

        {project.metrics && (
          <div className="mt-4 flex gap-6">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <span className="font-display text-2xl font-black text-green">
                  {m.value}
                </span>
                <p className="mt-0.5 font-mono text-[9px] uppercase tracking-widest text-fg-dim">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* View case study indicator */}
        <div className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-green opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          View Case Study
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.article>
  );
}
