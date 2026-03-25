"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export function SectionHeader({
  id,
  number,
  title,
  subtitle,
  children,
}: SectionHeaderProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-baseline gap-4 mb-2">
          <span className="text-fg-dim font-mono text-sm">{number}</span>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight">
            {title}
          </h2>
        </div>
        <p className="text-fg-muted text-lg max-w-2xl mb-12">{subtitle}</p>
        {children}
      </motion.div>
    </section>
  );
}
