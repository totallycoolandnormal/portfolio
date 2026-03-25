"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DemoCardProps {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

export function DemoCard({
  title,
  description,
  children,
  className = "",
}: DemoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl border border-border bg-bg-card overflow-hidden ${className}`}
    >
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-fg-muted text-sm">{description}</p>
      </div>
      <div className="p-6">{children}</div>
    </motion.div>
  );
}
