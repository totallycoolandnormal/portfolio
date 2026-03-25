"use client";

import { motion } from "framer-motion";

const contactLinks = [
  { label: "Email", href: "mailto:jeskek@gmail.com", display: "jeskek@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/14157545651", display: "Chat on WhatsApp" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kurtjeske1", display: "linkedin.com/kurtjeske1" },
  { label: "CV", href: "/KJ-CV.pdf", display: "Download CV" },
];

const education = [
  { school: "Stanford University", program: "UI/UX Design for AI Applications", year: "2025" },
  { school: "Stanford University", program: "Product Management Certificate", year: "2021" },
  { school: "Otis College of Art & Design", program: "BA, Communication Arts", year: "2006" },
];

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-[var(--space-xl)] md:px-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl border border-border bg-bg-card p-8 md:p-12"
      >
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-fg">
          Let&apos;s talk.
        </h2>
        <p className="mt-3 max-w-lg text-sm text-fg-muted">
          I lead design organizations through transformation — building the teams,
          systems, and culture that make great products inevitable.
          If you&apos;re hiring for that, let&apos;s talk about what&apos;s next.
        </p>

        {/* Contact links */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group rounded-xl border border-border px-4 py-3 transition-all duration-200 hover:border-accent/40 hover:bg-accent/5"
            >
              <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-fg-dim">
                {link.label}
              </span>
              <span className="mt-1 block text-sm text-fg-muted transition-colors group-hover:text-fg">
                {link.display}
              </span>
            </a>
          ))}
        </div>

        {/* Education */}
        <div className="mt-10 border-t border-border/40 pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-dim mb-3">
            Education
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {education.map((edu) => (
              <div key={edu.program} className="text-xs text-fg-muted">
                <span className="font-medium text-fg/80">{edu.school}</span>
                <span className="mx-1.5 text-fg-dim/40">·</span>
                {edu.program}
                <span className="mx-1.5 text-fg-dim/40">·</span>
                <span className="text-fg-dim">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <p className="mt-8 text-center font-mono text-[10px] text-fg-dim">
        &copy; 2026 Kurt Jeske
      </p>
    </section>
  );
}
