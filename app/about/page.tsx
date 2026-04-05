import Image from "next/image";
import Link from "next/link";

const experience = [
  {
    company: "Consultant",
    period: "2025 – Present",
    location: "New York, NY",
    title: "Designer & Advisor",
    description:
      "Interim head of design for several AI-driven startups in edtech, fintech, and gaming. Defining product foundations and building teams.",
  },
  {
    company: "Epic Games",
    period: "2020 – 2025",
    location: "San Francisco, CA",
    title: "Group Director, UXUI & Brand Design",
    description:
      "Led a 50+ person team focused on Fortnite's platform presence — the shared social, marketplace, and discovery experiences, plus user-generated content tools. Defined a scalable design system for Epic's tools, services, and games. Also led design for Epic Games Store, Epic Online Services SDK, ArtStation, and Fab.com.",
  },
  {
    company: "Electronic Arts",
    period: "2014 – 2020",
    location: "San Francisco & Orlando",
    title: "UX Director → UX Lead",
    description:
      "Led the design of the subscription-focused EA App and EA Play across PC and partner platforms, as well as social functions including cross-play. Owned identity and commerce UX. Built Quantum, EA's first enterprise design system unifying web, PC app, and subscription services.",
  },
  {
    company: "Barnes & Noble",
    period: "2012 – 2014",
    location: "New York, NY",
    title: "Sr UX Designer",
    description:
      "Led the design of the Home, Profile, and Shop experiences for the Nook HD+ tablet, as well as companion web and mobile app experiences. Owned the design system.",
  },
  {
    company: "Amazon",
    period: "2010 – 2012",
    location: "New York, NY",
    title: "Sr UX Designer",
    description:
      "Owned critical search and discovery features for the cross-platform launch of Instant Video.",
  },
  {
    company: "Early Career",
    period: "2006 – 2010",
    location: "Los Angeles & New York",
    title: "Designer & Art Director",
    description:
      "Started at LACMTA building transit information design, then worked at agencies and freelanced across branding, web, and interactive.",
  },
];

const education = [
  { school: "Stanford University", program: "UI/UX Design for AI Applications", year: "2025" },
  { school: "Stanford University", program: "Product Management Certificate", year: "2021" },
  { school: "Otis College of Art & Design", program: "BA, Communication Arts", year: "2006" },
];

export default function AboutPage() {
  return (
    <main>
      {/* Nav — same as homepage */}
      <nav style={{ zIndex: 100, width: "100%", padding: "36px 0", display: "block", position: "relative" }}>
        <div style={{
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1554,
          margin: "0 auto",
          padding: "0 96px",
          display: "flex",
          position: "relative",
        }}>
          <div style={{ alignItems: "center", gap: 16, display: "flex" }}>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-primary)",
                color: "#000",
                borderRadius: 48,
                alignItems: "center",
                height: 36,
                padding: "0 16px",
                fontSize: 16,
                fontWeight: 500,
                textDecoration: "none",
                display: "flex",
              }}
            >
              Kurt J
            </Link>
          </div>

          <div style={{
            background: "#f9f9f9",
            borderRadius: 40,
            height: 40,
            padding: 2,
            display: "flex",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-primary)",
                color: "rgba(0,0,0,0.5)",
                borderRadius: 48,
                justifyContent: "center",
                alignItems: "center",
                minWidth: 91,
                padding: "0 24px",
                fontSize: 16,
                fontWeight: 500,
                textDecoration: "none",
                display: "flex",
              }}
            >
              <span style={{ zIndex: 1, lineHeight: "24px", position: "relative" }}>Work</span>
            </Link>
            <Link
              href="/about"
              style={{
                fontFamily: "var(--font-primary)",
                color: "#000",
                background: "#fff",
                boxShadow: "4px 3px 1px transparent, 2px 2px 1px rgba(0,0,0,0.01), 1px 1px 1px rgba(0,0,0,0.05), 1px 0 1px rgba(0,0,0,0.09)",
                borderRadius: 48,
                justifyContent: "center",
                alignItems: "center",
                minWidth: 91,
                padding: "0 24px",
                fontSize: 16,
                fontWeight: 500,
                textDecoration: "none",
                display: "flex",
              }}
            >
              <span style={{ zIndex: 1, lineHeight: "24px", position: "relative" }}>About</span>
            </Link>
          </div>

          <div style={{ alignItems: "center", gap: 48, display: "flex" }}>
            <a
              href="https://www.linkedin.com/in/kurtjeske1/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                height: 36,
                fontFamily: "var(--font-primary)",
                color: "#000",
                borderRadius: 48,
                justifyContent: "center",
                alignItems: "center",
                minWidth: 89,
                padding: "0 16px",
                fontSize: 16,
                fontWeight: 500,
                textDecoration: "none",
                display: "flex",
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: 1554, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ maxWidth: 1496, margin: "0 auto", display: "flex", gap: 96 }}>
          {/* Left column — Photo + links */}
          <div style={{ flex: "0 0 360px" }}>
            <div style={{ borderRadius: 32, overflow: "hidden", marginBottom: 32 }}>
              <Image
                src="/images/common/headshot.png"
                alt="Kurt Jeske"
                width={360}
                height={360}
                className="object-cover"
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "Email", href: "mailto:jeskek@gmail.com" },
                { label: "WhatsApp", href: "https://wa.me/14157545651" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/kurtjeske1/" },
                { label: "Download CV", href: "/KJ-CV.pdf" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    fontFamily: "var(--font-primary)",
                    color: "#000",
                    fontSize: 16,
                    fontWeight: 400,
                    textDecoration: "underline",
                    textDecorationColor: "#e9e9e9",
                    textUnderlineOffset: 3,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right column — Bio + Experience */}
          <div style={{ flex: 1, paddingTop: 8 }}>
            {/* Bio */}
            <p style={{
              fontFamily: "var(--font-primary)",
              color: "#000",
              fontSize: 24,
              fontWeight: 500,
              lineHeight: "140%",
              marginBottom: 24,
            }}>
              I&apos;m a product design leader with 15 years building products used by hundreds of millions of people at Epic Games, Electronic Arts, Barnes &amp; Noble, and Amazon.
            </p>

            <p style={{
              fontFamily: "var(--font-primary)",
              color: "rgba(0,0,0,0.6)",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "170%",
              marginBottom: 16,
            }}>
              I build the teams, systems, and culture that make great products inevitable. My work sits at the intersection of design leadership, systems thinking, and product strategy — with a deep belief that AI tools enable greater and faster design, not replace it.
            </p>

            <p style={{
              fontFamily: "var(--font-primary)",
              color: "rgba(0,0,0,0.6)",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "170%",
              marginBottom: 16,
            }}>
              At Epic Games I directed a team of 50+ designers across Fortnite, Epic Games Store, and Epic Online Services — defining scalable design systems for products serving 700M+ accounts. At Electronic Arts I built Quantum, EA&apos;s first enterprise design system, and led the subscription-focused redesign of the EA App.
            </p>

            <p style={{
              fontFamily: "var(--font-primary)",
              color: "rgba(0,0,0,0.6)",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "170%",
              marginBottom: 64,
            }}>
              I care about craft, about research, about understanding the problem before jumping to solutions. And I believe the best design organizations are the ones where every designer feels ownership over the product, not just their Figma file.
            </p>

            {/* Experience */}
            <h2 style={{
              fontFamily: "var(--font-primary)",
              color: "#000",
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: "0.01em",
              marginBottom: 32,
              paddingBottom: 16,
              borderBottom: "1px solid #e9e9e9",
            }}>
              Experience
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {experience.map((exp) => (
                <div key={exp.company} style={{ display: "flex", gap: 48 }}>
                  <div style={{ flex: "0 0 200px" }}>
                    <div style={{
                      fontFamily: "var(--font-primary)",
                      color: "#000",
                      fontSize: 16,
                      fontWeight: 500,
                      lineHeight: "140%",
                    }}>
                      {exp.company}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-primary)",
                      color: "rgba(0,0,0,0.5)",
                      fontSize: 14,
                      fontWeight: 400,
                      lineHeight: "170%",
                    }}>
                      {exp.period}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-primary)",
                      color: "rgba(0,0,0,0.35)",
                      fontSize: 14,
                      fontWeight: 400,
                    }}>
                      {exp.location}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "var(--font-primary)",
                      color: "rgba(0,0,0,0.5)",
                      fontSize: 14,
                      fontWeight: 500,
                      marginBottom: 8,
                    }}>
                      {exp.title}
                    </div>
                    <p style={{
                      fontFamily: "var(--font-primary)",
                      color: "rgba(0,0,0,0.6)",
                      fontSize: 16,
                      fontWeight: 400,
                      lineHeight: "170%",
                    }}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <h2 style={{
              fontFamily: "var(--font-primary)",
              color: "#000",
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: "0.01em",
              marginTop: 64,
              marginBottom: 32,
              paddingBottom: 16,
              borderBottom: "1px solid #e9e9e9",
            }}>
              Education
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {education.map((edu) => (
                <div key={edu.program} style={{ display: "flex", gap: 48 }}>
                  <div style={{ flex: "0 0 200px" }}>
                    <div style={{
                      fontFamily: "var(--font-primary)",
                      color: "#000",
                      fontSize: 16,
                      fontWeight: 500,
                    }}>
                      {edu.school}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-primary)",
                      color: "rgba(0,0,0,0.5)",
                      fontSize: 14,
                    }}>
                      {edu.year}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontFamily: "var(--font-primary)",
                      color: "rgba(0,0,0,0.6)",
                      fontSize: 16,
                      lineHeight: "170%",
                    }}>
                      {edu.program}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Back to work */}
            <div style={{ marginTop: 80, paddingTop: 32, borderTop: "1px solid #e9e9e9" }}>
              <Link
                href="/"
                style={{
                  fontFamily: "var(--font-primary)",
                  color: "#000",
                  fontSize: 16,
                  fontWeight: 500,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                ← Back to work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ maxWidth: 1554, margin: "0 auto", padding: "96px 48px 48px" }}>
        <div style={{
          fontFamily: "var(--font-primary)",
          fontSize: 14,
          fontWeight: 400,
          lineHeight: "170%",
          color: "rgba(0,0,0,0.5)",
        }}>
          <div style={{ marginBottom: 4 }}>Copyright · © 2026</div>
          <div style={{ marginBottom: 4 }}>Made in New York</div>
        </div>
      </footer>
    </main>
  );
}
