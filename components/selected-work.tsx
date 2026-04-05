"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { CaseStudyModal } from "./case-study-modal";
import type { Project } from "@/data/projects";

const bounce = [0.34, 1.56, 0.64, 1] as const;

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="mx-auto max-w-[var(--max-width)] px-6 py-[var(--space-2xl)] md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: bounce }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-green/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-green">
            Selected Work
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1.05] tracking-[-0.02em] text-fg">
            Five projects. Twelve years.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-fg-muted">
            Collectively touched by over a billion people.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
              className={i === 0 ? "md:col-span-2" : ""}
            />
          ))}
        </div>
      </section>

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
