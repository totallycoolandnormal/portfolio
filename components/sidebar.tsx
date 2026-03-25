"use client";

import Link from "next/link";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kurtjeske1", external: true },
  { label: "WhatsApp", href: "https://wa.me/14157545651", external: true },
  { label: "CV", href: "/KJ-CV.pdf", external: true },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[var(--sidebar-width)] flex-col justify-between bg-bg px-8 py-8 md:flex">
      {/* Name */}
      <div>
        <Link href="/" className="block">
          <h1 className="font-display text-4xl font-semibold tracking-[-0.02em] text-fg">
            Kurt Jeske
          </h1>
        </Link>
        <p className="mt-2 text-sm text-fg-muted">
          Product Design Leader
        </p>
        <p className="mt-0.5 font-mono text-[10.5px] text-fg-dim">
          New York
        </p>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-0.5">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between py-2 text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
          >
            {link.label}
            {link.external && (
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className="opacity-40 transition-opacity group-hover:opacity-100"
              >
                <path
                  d="M2 8L8 2M8 2H3.5M8 2V6.5"
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

      {/* Footer */}
      <div className="space-y-3">
        <a
          href="mailto:jeskek@gmail.com"
          className="block text-sm text-fg-muted transition-colors hover:text-fg"
        >
          jeskek@gmail.com
        </a>
        <p className="font-mono text-[10px] text-fg-dim">
          &copy; 2026 Kurt Jeske
        </p>
      </div>
    </aside>
  );
}
