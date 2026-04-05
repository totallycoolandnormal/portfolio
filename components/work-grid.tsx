"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { CaseStudyModal } from "./case-study-modal";
import type { Project } from "@/data/projects";

export function WorkGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="mx-auto max-w-[var(--max-width)] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
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
