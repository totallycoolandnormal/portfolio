"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.1,
      }}
      onClick={onClick}
      className="group w-[min(640px,85vw)] shrink-0 cursor-pointer overflow-hidden rounded-[var(--radius-lg)] border border-border/60 bg-bg-card transition-all duration-300 hover:border-border-light hover:bg-bg-card-hover"
    >
      {/* Cover image */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "16/9" }}
      >
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="640px"
        />
      </div>

      {/* Card content */}
      <div className="p-6">
        <h3 className="font-display text-xl uppercase leading-tight tracking-[-0.01em] text-fg">
          {project.title}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <span className="font-mono text-[10.5px] text-fg-muted">
            {project.company}
          </span>
          <span className="text-fg-dim">·</span>
          <span className="font-mono text-[10.5px] text-fg-dim">
            {project.year}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-fg-muted">
          {project.outcome}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div className="mt-5 flex gap-6">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <span className="font-display text-2xl uppercase text-fg">
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
