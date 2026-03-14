"use client";

import { motion } from "framer-motion";
import { education } from "@/data/experience";

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-[var(--space-xl)] md:px-12">
      <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] uppercase leading-[0.95] tracking-[-0.02em] text-fg">
        Education
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {education.map((edu, i) => (
          <motion.div
            key={edu.school + edu.degree}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
              delay: i * 0.08,
            }}
            className="rounded-[var(--radius-lg)] border border-border/60 bg-bg-card p-6 md:p-8"
          >
            <h3 className="font-body text-lg font-semibold text-fg">
              {edu.school}
            </h3>
            <p className="mt-2 text-sm font-medium text-fg-muted">
              {edu.degree}
            </p>
            <p className="mt-1 font-mono text-[10.5px] text-fg-dim">
              {edu.detail}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-border/40 pt-6">
        <p className="font-mono text-[10px] text-fg-dim">
          &copy; 2026 Kurt Jeske
        </p>
      </div>
    </section>
  );
}
