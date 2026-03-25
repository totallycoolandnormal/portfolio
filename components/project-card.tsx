"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
  className?: string;
}

export function ProjectCard({ project, index, onClick, className = "" }: ProjectCardProps) {
  const y = useMotionValue(0);
  const imageY = useTransform(y, [-200, 200], [8, -8]);

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.97, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      onMouseMove={(e) => {
        const rect = (e.target as HTMLElement).closest("article")?.getBoundingClientRect();
        if (rect) y.set(e.clientY - rect.top - rect.height / 2);
      }}
      className={`group cursor-pointer overflow-hidden rounded-[var(--radius-lg)] border border-border/60 bg-bg-card transition-all duration-300 hover:border-border-light ${className}`}
      style={{
        // @ts-expect-error CSS custom property
        "--card-accent": project.accentColor || "#6C63FF",
      }}
    >
      {/* Cover image with parallax */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <motion.div style={{ y: imageY }} className="absolute inset-[-8px]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        {/* Accent glow on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(to top, ${project.accentColor || "#6C63FF"}15, transparent 60%)`,
          }}
        />
      </div>

      {/* Card content */}
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: project.accentColor || "#6C63FF" }}
          />
          <span className="font-mono text-[10.5px] text-fg-muted">
            {project.company}
          </span>
          <span className="text-fg-dim/40">·</span>
          <span className="font-mono text-[10.5px] text-fg-dim">
            {project.year}
          </span>
        </div>

        <h3 className="mt-2 font-display text-xl font-semibold leading-tight tracking-[-0.01em] text-fg">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-fg-muted line-clamp-2">
          {project.outcome}
        </p>

        {project.metrics && (
          <div className="mt-4 flex gap-6">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <span className="font-display text-2xl font-semibold text-fg">
                  {m.value}
                </span>
                <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-fg-dim">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
