"use client";

import { useRef, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { CaseStudyModal } from "./case-study-modal";
import type { Project } from "@/data/projects";

export function SelectedWork() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  function scrollBy(direction: "left" | "right") {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.7;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <>
      <section id="work" className="py-[var(--space-xl)]">
        {/* Header */}
        <div className="flex items-end justify-between px-6 md:px-12">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] uppercase leading-[0.95] tracking-[-0.02em] text-fg">
            Selected Work
          </h2>

          {/* Carousel controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollBy("left")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:border-fg-muted hover:text-fg"
              aria-label="Previous"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M9 2L4 7l5 5" />
              </svg>
            </button>
            <button
              onClick={() => scrollBy("right")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:border-fg-muted hover:text-fg"
              aria-label="Next"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M5 2l5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal scroll area */}
        <div
          ref={scrollRef}
          className="hide-scrollbar mt-8 flex gap-[var(--gap)] overflow-x-auto px-6 md:px-12"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
          {/* Spacer for last card padding */}
          <div className="w-6 shrink-0 md:w-12" />
        </div>

        {/* Section transition button */}
        <div className="mt-8 flex justify-center">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.15em] text-fg-muted transition-colors duration-200 hover:border-fg-muted hover:text-fg"
          >
            Experience
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M5 1v8M1 5l4 4 4-4" />
            </svg>
          </a>
        </div>
      </section>

      {/* Case study modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
