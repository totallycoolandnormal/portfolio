"use client";

import { motion } from "framer-motion";

const bounce = [0.34, 1.56, 0.64, 1] as const;

const contactLinks = [
  { label: "Email", href: "mailto:jeskek@gmail.com", display: "jeskek@gmail.com", icon: "✉️", color: "var(--blue)" },
  { label: "WhatsApp", href: "https://wa.me/14157545651", display: "Chat on WhatsApp", icon: "💬", color: "var(--green)" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kurtjeske1", display: "linkedin.com/kurtjeske1", icon: "🔗", color: "var(--purple)" },
  { label: "CV", href: "/KJ-CV.pdf", display: "Download CV", icon: "📄", color: "var(--orange)" },
];

const education = [
  { school: "Stanford University", program: "UI/UX Design for AI Applications", year: "2025" },
  { school: "Stanford University", program: "Product Management Certificate", year: "2021" },
  { school: "Otis College of Art & Design", program: "BA, Communication Arts", year: "2006" },
];

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-[var(--max-width)] px-6 py-[var(--space-2xl)] md:px-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: bounce }}
        className="rounded-[var(--radius-xl)] border-2 border-border bg-bg-card p-8 shadow-[0_4px_0_var(--border)] md:p-12"
      >
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: bounce, delay: 0.2 }}
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green/10 text-3xl"
          >
            👋
          </motion.div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.02em] text-fg">
            Let&apos;s build something great.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-fg-muted">
            I lead design organizations through transformation — building the teams,
            systems, and culture that make great products inevitable.
          </p>
        </div>

        {/* Contact cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: bounce }}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ y: 2, scale: 0.98 }}
              className="group rounded-[var(--radius-md)] border-2 border-border bg-bg-surface px-4 py-4 shadow-[0_3px_0_var(--border)] transition-shadow hover:shadow-[0_5px_0_var(--border)] active:shadow-none"
            >
              <span className="mb-2 block text-2xl">{link.icon}</span>
              <span className="block text-xs font-bold uppercase tracking-wider" style={{ color: link.color }}>
                {link.label}
              </span>
              <span className="mt-1 block text-sm text-fg-muted transition-colors group-hover:text-fg">
                {link.display}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Education */}
        <div className="mt-10 border-t-2 border-border/40 pt-6">
          <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-widest text-fg-dim">
            Education
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {education.map((edu) => (
              <div key={edu.program} className="text-center text-xs text-fg-muted">
                <span className="font-bold text-fg/80">{edu.school}</span>
                <br />
                <span>{edu.program}</span>
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
