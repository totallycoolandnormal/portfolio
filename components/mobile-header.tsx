"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kurtjeske1", external: true },
  { label: "WhatsApp", href: "https://wa.me/14157545651", external: true },
  { label: "Email", href: "mailto:jeskek@gmail.com", external: true },
  { label: "CV", href: "/KJ-CV.pdf", external: true },
];

export function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-bg/90 px-6 py-5 backdrop-blur-md md:hidden">
      <Link href="/" className="font-display text-xl font-semibold text-fg">
        KJ
      </Link>
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1.5"
        aria-label="Toggle menu"
      >
        <span className={`block h-[1.5px] w-5 bg-fg transition-transform duration-200 ${open ? "translate-y-[4.5px] rotate-45" : ""}`} />
        <span className={`block h-[1.5px] w-5 bg-fg transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
        <span className={`block h-[1.5px] w-5 bg-fg transition-transform duration-200 ${open ? "-translate-y-[4.5px] -rotate-45" : ""}`} />
      </button>

      {open && (
        <nav className="absolute left-0 top-full w-full border-b border-border/40 bg-bg px-6 py-6">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
                {link.external && " ↗"}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
