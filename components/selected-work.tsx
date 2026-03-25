"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { CaseStudyModal } from "./case-study-modal";
import type { Project } from "@/data/projects";

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="px-6 py-[var(--space-xl)] md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-fg">
            Selected Work
          </h2>
          <p className="mt-2 max-w-lg text-sm text-fg-muted">
            Five projects. Twelve years. Collectively touched by over a billion people.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
              className={
                /* First card spans full width on desktop */
                i === 0 ? "md:col-span-2" : ""
              }
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
