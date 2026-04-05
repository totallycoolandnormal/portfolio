import { WorkGrid } from "@/components/work-grid";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="pt-20">
      {/* Intro */}
      <section className="mx-auto max-w-[var(--max-width)] px-6 pb-16 pt-12 md:px-10 md:pb-20 md:pt-16">
        <p className="max-w-xl text-[20px] leading-[1.6] text-fg">
          Kurt is a product design leader based in New York, with 15 years
          building products at Epic Games, Electronic Arts, and Barnes &amp; Noble.
        </p>
        <p className="mt-3 text-[14px] text-fg-tertiary">
          Previously at Epic Games
        </p>
        <a
          href="/about"
          className="mt-2 inline-block text-[14px] text-fg-secondary transition-colors hover:text-fg"
        >
          Learn about me →
        </a>
      </section>

      {/* Work */}
      <WorkGrid />

      {/* Footer */}
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
