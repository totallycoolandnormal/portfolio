"use client";

import Link from "next/link";

const navLinks = [
  { label: "WORK", href: "#work" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/kurtjeske1", external: true },
  { label: "EMAIL", href: "mailto:jeskek@gmail.com", external: true },
  { label: "CV", href: "/KJ-CV.pdf", external: true },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[var(--sidebar-width)] flex-col justify-between bg-bg px-8 py-8 md:flex">
      {/* Top: Name + Title */}
      <div>
        <Link href="/" className="block">
          <h1 className="font-display text-[56px] uppercase leading-[0.82] tracking-[-0.02em] text-fg">
            KURT
            <br />
            JESKE
          </h1>
        </Link>
        <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.02em] text-fg-muted">
          Product Design Leader in New York
        </p>
      </div>

      {/* Middle: Nav */}
      <nav className="flex flex-col gap-1">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-1 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.02em] text-fg-muted transition-colors duration-200 hover:text-fg"
          >
            {link.label}
            {link.external && (
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                className="opacity-60 transition-opacity group-hover:opacity-100"
              >
                <path
                  d="M1 7L7 1M7 1H2M7 1V6"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </a>
        ))}
      </nav>

      {/* Bottom: Copyright */}
      <p className="font-mono text-[10px] text-fg-dim">
        &copy; 2026 Kurt Jeske
      </p>
    </aside>
  );
}
