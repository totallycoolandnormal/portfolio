export function Footer() {
  const links = [
    { label: "Email", href: "mailto:jeskek@gmail.com" },
    { label: "WhatsApp", href: "https://wa.me/14157545651" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kurtjeske1/" },
    { label: "CV", href: "/KJ-CV.pdf" },
  ];

  return (
    <footer className="mx-auto max-w-[var(--max-width)] border-t border-border px-6 py-12 md:px-10">
      <div className="flex flex-col gap-4 text-[13px] text-fg-tertiary md:flex-row md:items-center md:justify-between">
        <div>
          <span className="text-fg-secondary">Get in touch</span>
          <span className="mx-3">·</span>
          {links.map((link, i) => (
            <span key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-fg-secondary underline decoration-border underline-offset-2 transition-colors hover:text-fg"
              >
                {link.label}
              </a>
              {i < links.length - 1 && <span className="mx-2">·</span>}
            </span>
          ))}
        </div>
        <div>
          © 2026 · Made in New York
        </div>
      </div>
    </footer>
  );
}
