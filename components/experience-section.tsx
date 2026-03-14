"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-[var(--space-xl)] md:px-12">
      <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] uppercase leading-[0.95] tracking-[-0.02em] text-fg">
        Experience
      </h2>

      <div className="mt-10 space-y-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
              delay: i * 0.05,
            }}
            className="overflow-hidden rounded-[var(--radius-lg)] border border-border/60 bg-bg-card p-6 md:p-8"
          >
            {/* Company name + date range */}
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <h3 className="font-body text-xl font-semibold text-fg md:text-2xl">
                {exp.company}
              </h3>
              <span className="shrink-0 font-mono text-[10.5px] text-fg-dim">
                {exp.dateRange}
              </span>
            </div>

            {/* Three-column layout */}
            <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-[1fr_2fr_1fr]">
              {/* ROLE */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-dim">
                  Role
                </p>
                <div className="mt-2 space-y-2">
                  {exp.roles.map((role) => (
                    <div key={role.title}>
                      <p className="text-sm font-medium text-fg">
                        {role.title}
                      </p>
                      {role.period && (
                        <p className="mt-0.5 font-mono text-[10px] text-fg-dim">
                          {role.period}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* KEY PROJECTS */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-dim">
                  Key Projects
                </p>
                <ul className="mt-2 space-y-2">
                  {exp.keyProjects.map((project) => {
                    const colonIdx = project.indexOf(": ");
                    if (colonIdx > -1) {
                      return (
                        <li key={project} className="text-sm leading-relaxed text-fg-muted">
                          <span className="font-semibold text-fg">{project.slice(0, colonIdx)}:</span>{" "}
                          {project.slice(colonIdx + 2)}
                        </li>
                      );
                    }
                    return (
                      <li key={project} className="text-sm leading-relaxed text-fg-muted">
                        {project}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* SCOPE */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-dim">
                  Scope
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {exp.scope.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-fg-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll to education */}
      <div className="mt-8 flex justify-center">
        <a
          href="#education"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.15em] text-fg-muted transition-colors duration-200 hover:border-fg-muted hover:text-fg"
        >
          Education
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
  );
}
