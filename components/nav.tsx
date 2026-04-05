"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-[border-color] duration-300 md:px-10 ${
        scrolled ? "border-b border-border bg-bg/90 backdrop-blur-md" : "border-b border-transparent bg-bg"
      }`}
    >
      <Link href="/" className="text-[15px] font-medium text-fg">
        Kurt Jeske
      </Link>
      <div className="flex items-center gap-6">
        <a href="#work" className="text-[14px] text-fg-secondary transition-colors hover:text-fg">
          Work
        </a>
        <Link href="/about" className="text-[14px] text-fg-secondary transition-colors hover:text-fg">
          About
        </Link>
        <a
          href="https://www.linkedin.com/in/kurtjeske1/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-fg-secondary transition-colors hover:text-fg"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
