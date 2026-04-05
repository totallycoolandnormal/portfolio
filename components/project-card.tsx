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

export function ProjectCard({ project, index, onClick, className = "" }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.08,
      }}
      onClick={onClick}
      className={`group cursor-pointer ${className}`}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-[var(--radius)] bg-bg-secondary transition-transform duration-300 ease-out group-hover:scale-[1.01]">
        <div className="relative" style={{ aspectRatio: "16/10" }}>
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Text */}
      <div className="mt-3 px-1">
        <h3 className="text-[15px] font-medium text-fg">
          {project.title}
        </h3>
        <p className="mt-0.5 text-[13px] text-fg-tertiary">
          {project.company}
        </p>
      </div>
    </motion.article>
  );
}
