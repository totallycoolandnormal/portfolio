"use client";

import { motion } from "framer-motion";
import { TrendNav } from "@/components/trends/trend-nav";
import { SectionHeader } from "@/components/trends/section-header";
import { DemoCard } from "@/components/trends/demo-card";
import {
  ContentAwareColor,
  ElevatedNeutrals,
  GradientShowcase,
} from "@/components/trends/demos/color-demos";
import {
  VariableFontDemo,
  KineticTypography,
  FluidTypeScale,
  TypePairing,
} from "@/components/trends/demos/typography-demos";
import {
  GlassmorphismDemo,
  NeumorphismDemo,
  ClaymorphismDemo,
  LiquidGlassDemo,
} from "@/components/trends/demos/surface-demos";
import {
  SpringPhysics,
  MicroInteractions,
  ScrollParallax,
} from "@/components/trends/demos/motion-demos";
import {
  CornerShapeExplorer,
  RadiusScale,
} from "@/components/trends/demos/corner-demos";
import {
  ElevationScale,
  MultiLayerShadow,
} from "@/components/trends/demos/shadow-demos";
import {
  IconStyleComparison,
  AnimatedIconDemo,
} from "@/components/trends/demos/icon-demos";
import { DarkModeEvolution } from "@/components/trends/demos/dark-mode-demo";
import {
  EasingCurveComparison,
  DurationScale,
  SpringVsDuration,
} from "@/components/trends/demos/animation-curve-demo";
import { NavigationLayoutExplorer } from "@/components/trends/demos/nav-layout-demo";
import {
  IllustrationStyleExplorer,
  BreathingCharacterDemo,
  GrainTextureDemo,
  MaximalMinimalismDemo,
} from "@/components/trends/demos/illustration-demos";
import {
  PhotographyStyleComparison,
  ColorGradingDemo,
  BrandVisualUniverse,
  ProductPhotoStyling,
} from "@/components/trends/demos/photography-demos";

/* ── Reusable analysis block ── */
function AnalysisBlock({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="bg-white/[0.03] border border-border rounded-xl p-6 space-y-5">
      {items.map((item) => (
        <div key={item.title}>
          <h4 className="text-sm font-medium text-fg mb-1">{item.title}</h4>
          <p className="text-xs text-fg-muted leading-relaxed">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

/* ── Inline Bento Grid Demo ── */
function BentoGridDemo() {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-3 h-64">
      <motion.div
        className="col-span-2 row-span-2 bg-accent/10 border border-accent/20 rounded-xl p-4 flex flex-col justify-end"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-sm font-medium">Hero Tile</span>
        <span className="text-xs text-fg-dim">2x2 featured content</span>
      </motion.div>
      <motion.div
        className="col-span-2 bg-white/[0.04] border border-border rounded-xl p-3 flex items-center gap-3"
        whileHover={{ scale: 1.02 }}
      >
        <div className="w-8 h-8 rounded-lg bg-blue-500/20" />
        <div className="text-xs text-fg-muted">Metric card</div>
      </motion.div>
      <motion.div className="bg-white/[0.04] border border-border rounded-xl p-3" whileHover={{ scale: 1.04 }}>
        <div className="text-xs text-fg-dim">1x1</div>
      </motion.div>
      <motion.div className="bg-white/[0.04] border border-border rounded-xl p-3" whileHover={{ scale: 1.04 }}>
        <div className="text-xs text-fg-dim">1x1</div>
      </motion.div>
      <motion.div className="col-span-2 bg-purple-500/10 border border-purple-500/20 rounded-xl p-3 flex items-center justify-center" whileHover={{ scale: 1.02 }}>
        <span className="text-xs text-fg-muted">Chart / visualization</span>
      </motion.div>
      <motion.div className="col-span-2 bg-white/[0.04] border border-border rounded-xl p-3 flex items-center justify-center" whileHover={{ scale: 1.02 }}>
        <span className="text-xs text-fg-muted">Activity feed</span>
      </motion.div>
    </div>
  );
}

export default function DesignTrends2026() {
  return (
    <>
      <TrendNav />
      <main className="ml-0 lg:ml-[200px] max-w-4xl mx-auto px-6 py-16 space-y-36">
        {/* ═══════════════════ HERO ═══════════════════ */}
        <section className="pt-12 md:pt-24">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <span className="text-xs font-mono text-fg-dim tracking-widest uppercase">Research Report — March 2026</span>
            <h1 className="text-5xl md:text-7xl font-display tracking-tight mt-4 mb-6 leading-[0.95]">
              Product Design<br /><span className="text-accent">Trends 2026</span>
            </h1>
            <p className="text-lg md:text-xl text-fg-muted max-w-2xl leading-relaxed">
              A comprehensive analysis of the visual language, interaction patterns, and design systems shaping software and mobile apps in 2026. Every trend is evaluated through the lens of usability, retention, and business impact — with live interactive demos and implementation guidance.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stat: "9,900%", label: "ROI per $1 spent on UX" },
              { stat: "88%", label: "users won't return after bad UX" },
              { stat: "23%", label: "faster task completion with modular layouts" },
              { stat: "2.7x", label: "better outcomes when research drives design" },
            ].map((item) => (
              <div key={item.label} className="bg-bg-card border border-border rounded-xl p-4">
                <div className="text-2xl font-display text-accent">{item.stat}</div>
                <div className="text-xs text-fg-muted mt-1">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ═══════════════════ THESIS ═══════════════════ */}
        <SectionHeader id="thesis" number="00" title="The Thesis" subtitle="Design trends are not decoration. They're strategic tools for retention, comprehension, and competitive advantage.">
          <div className="space-y-6 text-fg-muted leading-relaxed">
            <p>The conversation about design trends usually stops at the surface: &ldquo;glassmorphism is in, flat is out.&rdquo; That framing is useless for product teams. The real question is: <strong className="text-fg">why do certain visual patterns work better for user retention, task completion, and product differentiation?</strong></p>
            <p>In 2026, the answer is convergence. Three forces are colliding:</p>
            <div className="grid md:grid-cols-3 gap-4 my-8">
              {[
                { title: "Perceptual Science", body: "Research proves rounded corners are processed 20% faster. Multi-layer shadows create depth hierarchies the brain already understands. Spring physics in animations mirror real-world object behavior, reducing cognitive load. Content-aware color creates instant contextual mapping — the interface tells you what you're looking at before you read a word." },
                { title: "Technical Capability", body: "Container queries, CSS corner-shape, View Transitions API, variable fonts, and backdrop-filter have all matured. What required JavaScript hacks is now native CSS. The gap between 'design trend' and 'shippable product' has collapsed. A designer can propose a squircle corner and an engineer can implement it in one CSS property." },
                { title: "AI Acceleration", body: "AI-driven color systems adapt to content in real time. Design tokens feed AI agents that generate compliant UI. Personalization isn't a feature — it's the default. Adaptive theming responds to ambient light, time of day, and user behavior. Design systems now have semantic intelligence that AI agents can read and act on." },
              ].map((card) => (
                <div key={card.title} className="bg-white/[0.03] border border-border rounded-xl p-5">
                  <h3 className="text-sm font-medium text-fg mb-2">{card.title}</h3>
                  <p className="text-xs text-fg-muted leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
            <p>The thesis is simple: <strong className="text-fg">trends that stick solve real UX problems</strong>. Content-aware color isn&apos;t just pretty — it creates instant visual context. Bento grids aren&apos;t just trendy — users complete tasks 23% faster. Micro-interactions aren&apos;t just fun — they reduce perceived latency and confirm state changes. Every trend in this report is evaluated through that lens.</p>
            <p>Organizations that embed design research into strategy report <strong className="text-accent">2.7x better outcomes</strong>, including 5x better brand perception, 3.6x more active users, and 3.2x better product-market fit. A 5% boost in retention can grow profits by 25-95%. 90% of users are more likely to stay engaged with brands that offer personalized interactions. This isn&apos;t taste — it&apos;s leverage.</p>
          </div>
        </SectionHeader>

        {/* ═══════════════════ COLOR ═══════════════════ */}
        <SectionHeader id="color" number="01" title="Color" subtitle="From static palettes to adaptive, content-aware, AI-driven color systems.">
          <div className="space-y-8">
            <DemoCard title="Content-Aware Color" description="The UI adopts the dominant color of the content it displays. The container reflects the thing inside it.">
              <ContentAwareColor />
            </DemoCard>

            <AnalysisBlock items={[
              { title: "Why content-aware color works", body: "Our brains process color before text — it takes 13 milliseconds to register a color vs 200+ ms to parse a word. When a music player card turns warm red for a hip-hop album and cool blue for ambient electronic, the user knows what they're looking at before reading the title. This isn't decoration; it's pre-cognitive context. Spotify reports that color-matched Now Playing screens increase session duration because the visual immersion reduces the impulse to switch away." },
              { title: "How it's implemented", body: "Color extraction uses k-means clustering on image pixel data to find dominant color groups. Libraries like Color Thief, Vibrant.js, or native Android Palette API extract primary, muted, vibrant, and dark vibrant swatches. The extracted color is then mapped to the UI through CSS custom properties. Critical: always run a contrast check (WCAG 4.5:1) between the dynamic background and text — programmatically switch text to black or white based on luma calculation." },
              { title: "Who does it well", body: "Spotify (album art → player background gradient), Apple Music (album art → full-screen ambient wash), YouTube Ambient Mode (video frame → page background glow using color temperature mapping), Google Material You (wallpaper → entire OS color scheme via HCT color space), Instagram Stories (sticker backgrounds adapt to photo content)." },
              { title: "Challenges", body: "Dynamic colors can break brand consistency if not constrained. Accessibility is the primary risk — bright album art can produce backgrounds where white text becomes unreadable. Solution: clamp saturation and lightness ranges, and always have fallback contrast-safe colors. Performance cost: extracting colors from images requires canvas pixel reading, which blocks the main thread — use OffscreenCanvas in a Web Worker for video/real-time extraction." },
            ]} />

            <DemoCard title="Elevated Neutrals" description="Pure white (#FFF) is fading. 2026 favors warm sand, cool stone, moss, and terracotta.">
              <ElevatedNeutrals />
            </DemoCard>

            <AnalysisBlock items={[
              { title: "Why neutrals are warming up", body: "After a decade of stark white (#FFFFFF) interfaces, there's a measurable fatigue. Warm neutrals (beige, sand, stone) reduce eye strain in long sessions — critical for productivity tools where users spend 6+ hours daily. Cool whites feel clinical; warm neutrals feel human. Notion's shift to warm greys is the canonical example: the product literally feels more comfortable to use for extended periods." },
              { title: "What these colors convey", body: "Warm Sand/Beige: comfort, approachability, premium craft (think luxury packaging). Cool Stone/Slate: professionalism, reliability, technical competence. Moss/Sage: growth, sustainability, calm (wellness apps, eco brands). Terracotta/Clay: warmth, earthiness, authenticity (food, lifestyle). Oatmeal/Taupe: neutrality, sophistication, works-with-everything base." },
              { title: "The challenge with neutrals", body: "Warm neutrals can feel dated if overused — they risk 'millennial beige' territory. They also reduce contrast ratios compared to pure white, making WCAG AA compliance harder for small text. Solution: pair elevated neutrals with hyper-saturated accent colors. The contrast between a warm stone background and an electric blue CTA is more visually striking than white + blue." },
            ]} />

            <DemoCard title="Gradient Evolution" description="Linear → Mesh → Grainy → Aurora. Gradients have matured from decorative stripes to atmospheric effects.">
              <GradientShowcase />
            </DemoCard>

            <AnalysisBlock items={[
              { title: "Why gradients evolved", body: "Linear gradients (2015-era) felt flat and predictable. Mesh gradients simulate how light actually behaves — multiple light sources creating organic, non-uniform color fields. Grainy gradients add texture that breaks the 'too digital' feeling. Aurora gradients (animated mesh) create a sense of life and movement. Pantone's 2026 Color of the Year — Cloud Dancer (11-4201), a soft airy white — reflects this shift toward ambient, atmospheric color rather than bold declaration." },
              { title: "Hyper-saturated accents", body: "Electric blue, neon green, punchy coral, radiant violet — used sparingly against minimal layouts. Green signals growth/success (fintech gains). Blue signals reliability/trust (enterprise SaaS). Coral/orange signals energy/action (CTAs, notifications). Violet signals creativity/premium (design tools, luxury). The pattern: muted background + saturated accent = modern. The accent color carries all the emotional weight." },
              { title: "AI-generated palettes", body: "Tools like Coolors AI and Adobe Firefly now suggest palettes based on brand personality labels, user behavior data, accessibility requirements, and conversion goals. They auto-adjust across components and modes. The human designer's role shifts from picking colors to defining intent — 'I need a palette that feels trustworthy but energetic' — and validating the AI output against brand guidelines." },
            ]} />
          </div>
        </SectionHeader>

        {/* ═══════════════════ TYPOGRAPHY ═══════════════════ */}
        <SectionHeader id="typography" number="02" title="Typography" subtitle="Variable fonts go from trend to infrastructure. Type becomes the hero image. Serif makes a serious comeback.">
          <div className="space-y-8">
            <DemoCard title="Variable Fonts" description="One file, every weight and width. 3.5M+ weekly npm downloads. Performance improvement: fewer font files, zero layout shift.">
              <VariableFontDemo />
            </DemoCard>

            <AnalysisBlock items={[
              { title: "Why variable fonts won", body: "A traditional font family might require 8-12 separate files (regular, bold, italic, etc.). A variable font is one file that contains every weight, width, and style on a continuous axis. This means: faster page loads (one HTTP request vs many), smooth weight transitions for hover effects and animations, responsive typography that adjusts weight based on viewport size. In 2026, variable fonts aren't a nice-to-have — they're the backbone of any performant type system." },
              { title: "How we got here", body: "Variable fonts were spec'd in 2016 (OpenType 1.8) but browser support was spotty until 2020. By 2023, support hit 95%+. Google Fonts began defaulting to variable files. By 2025, major design systems (Material, Fluent, Apple HIG) all recommended variable fonts as the standard. The tipping point was performance: a single variable font file is typically 30-50% smaller than loading 4+ static weights." },
            ]} />

            <DemoCard title="Kinetic Typography" description="Text that breathes, expands on hover, reveals word-by-word. In 2026, the headline IS the hero.">
              <KineticTypography />
            </DemoCard>

            <DemoCard title="Fluid Type Scale" description="CSS clamp()-based responsive type. No breakpoints — type smoothly scales from mobile to desktop.">
              <FluidTypeScale />
            </DemoCard>

            <DemoCard title="Serif + Sans-Serif Revival" description="The defining type pairing of 2026. 30% more engagement with brand-consistent fonts.">
              <TypePairing />
            </DemoCard>

            <AnalysisBlock items={[
              { title: "Why serif is back", body: "After a decade of geometric sans-serif dominance (Helvetica, Inter, SF Pro), serif typefaces are returning for display text. The reason is differentiation — when every SaaS app uses Inter, switching to a serif like Fraunces or Newsreader for headlines immediately signals craft and personality. Serifs also carry connotations of authority, editorial quality, and timelessness that sans-serifs can't replicate." },
              { title: "The imperfect, humanized aesthetic", body: "More brands are deliberately introducing imperfection — grain, sketchy lines, hand-drawn lettering, messy typography. This is a direct counter-reaction to AI-generated polish. When every AI output is smooth and perfect, human imperfection becomes a trust signal. Brands like Spotify Wrapped lean into this: folder-style text, casual copy, humor over corporate polish." },
              { title: "Trending typefaces for 2026", body: "Display serifs: Fraunces (variable, playful optical sizing), Newsreader (editorial authority), Literata (Google's reading serif), Playfair Display (high contrast elegance). Body sans-serifs: Inter (the default), Satoshi (geometric warmth), Geist (Vercel's system font), General Sans (friendly geometric), Plus Jakarta Sans (rounded, approachable). Mono: JetBrains Mono, Geist Mono, Berkeley Mono." },
            ]} />
          </div>
        </SectionHeader>

        {/* ═══════════════════ LAYOUT & NAV ═══════════════════ */}
        <SectionHeader id="layout" number="03" title="Layout & Navigation" subtitle="Bento grids dominate dashboards. Sidebars return — often in rounded containers. Container queries change everything.">
          <div className="space-y-8">
            <DemoCard title="Bento Grid" description="67% of the top 100 SaaS products use modular layouts. Users complete tasks 23% faster in bento grids vs linear pages.">
              <BentoGridDemo />
            </DemoCard>

            <AnalysisBlock items={[
              { title: "Why bento grids work", body: "The bento grid solves information density. Dashboards need to show many data types simultaneously — metrics, charts, lists, actions. A bento grid gives each data type its own self-contained tile that can be scanned independently. A 2025 Journal of Usability Studies found participants completed information-finding tasks 23% faster on modularly organized pages. The visual containment (each tile with its own border, background, and padding) reduces cognitive load by creating natural groupings." },
              { title: "Container Queries — the breakthrough", body: "The biggest technical advancement for bento grids in 2026: container queries. Each tile can now be self-aware — adjusting its internal layout based on its own size, not the viewport. A metric card in a 2x2 tile shows a full chart; the same card in a 1x1 tile shows just the number. This means truly responsive components that work regardless of where they're placed." },
              { title: "Spacing is everything", body: "Successful bento implementations maintain uniform gaps between all cards — typically 12-24px. Even 1px inconsistency breaks the visual rhythm. Use CSS gap (not margin) for guaranteed uniformity. Corner radius should scale with tile size: small tiles get 8-12px radius, large hero tiles get 16-24px." },
            ]} />

            <DemoCard title="Navigation Layout Patterns" description="Sidebars are back — often floating inside rounded containers with margin from viewport edges. The defining layout pattern of 2025-2026.">
              <NavigationLayoutExplorer />
            </DemoCard>

            <AnalysisBlock items={[
              { title: "Why sidebars returned", body: "The hamburger menu era (2015-2020) sacrificed discoverability for cleanliness. Research consistently showed that hidden navigation reduced feature usage by 20-40%. Sidebars put navigation permanently visible, reducing the cognitive cost of 'Where do I go?' to near-zero. The 2025-2026 innovation isn't the sidebar itself — it's the floating rounded container pattern that makes it feel more like a product component than a structural wall." },
              { title: "The floating sidebar pattern", body: "Arc Browser pioneered the 'sidebar in a rounded pill' pattern, and shadcn/ui's sidebar component codified it. The sidebar sits inside a container with margin from the viewport edges and rounded corners, creating visual breathing room. This softens the interface and makes the app feel crafted rather than templated. Notion, Linear, and Raycast all adopted variations of this pattern." },
              { title: "Icon rail for power users", body: "The collapsed icon-only sidebar (48-64px wide) maximizes content area while keeping navigation one click away. Slack, VS Code, and Discord prove this works for complex apps with many top-level destinations. The key: icons must be distinct enough to be scannable without labels. Pair with keyboard shortcuts for zero-click navigation." },
            ]} />
          </div>
        </SectionHeader>

        {/* ═══════════════════ SURFACES ═══════════════════ */}
        <SectionHeader id="surfaces" number="04" title="Surfaces & Effects" subtitle="Glassmorphism matures. Apple's Liquid Glass is controversial. Texture and grain return to fight digital sterility.">
          <div className="space-y-8">
            <DemoCard title="Glassmorphism 2.0" description="Frosted glass over a photograph. The background must have visual variation — solid colors show no blur effect.">
              <GlassmorphismDemo />
            </DemoCard>

            <AnalysisBlock items={[
              { title: "Why glassmorphism works (when done right)", body: "Glass surfaces create spatial hierarchy — they imply 'this element floats above that content.' The blur preserves the sense that something exists behind the panel without competing for attention. It's depth without darkness. The 2026 version is more restrained than the 2021 hype: lower opacity (8-15% white), subtle blur (12-20px), and always paired with a 1px border (rgba white at 15-20%) for edge definition." },
              { title: "How we got here", body: "Apple introduced backdrop-filter in Safari in 2015. It took until 2020 for cross-browser support to reach 90%+. The first wave (2020-2021) was overused — glass on glass on glass, unreadable text, decorative chaos. The 2026 maturity: glass is now a functional layer, not an aesthetic. Use it for overlays, navigation bars, and floating panels. Never for primary content containers." },
              { title: "Performance reality", body: "backdrop-filter is GPU-intensive. Each glass element triggers separate blur calculations. 3-5 glass elements: negligible on modern devices. 10+ elements: noticeable lag on mid-range phones. The rule: use glassmorphism for 'floating' UI (toolbars, popovers, command palettes) — never for cards in a grid or list items." },
            ]} />

            <DemoCard title="Neumorphism (Soft UI)" description="Elements pushed out of or pressed into the background. Found its niche: toggles, sliders, music players.">
              <NeumorphismDemo />
            </DemoCard>

            <DemoCard title="Claymorphism" description="Soft 3D with inner shadows and a sculpted feel. Popular in onboarding, feature cards, and Gen Alpha-targeted products.">
              <ClaymorphismDemo />
            </DemoCard>

            <DemoCard title="Apple's Liquid Glass" description="iOS 26's headline design. Translucent, refractive, device-tilt-responsive. Beautiful but accessibility-challenged." className="border-orange-500/20">
              <LiquidGlassDemo />
            </DemoCard>

            <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-6 space-y-3">
              <h3 className="text-sm font-medium text-orange-400">Liquid Glass: Beautiful Design, Broken Usability</h3>
              <div className="text-xs text-fg-muted space-y-2">
                <p>NN/g&apos;s accessibility report gave failing grades across multiple categories. This is the most important case study in 2026 design: <strong className="text-fg">visual ambition without usability testing is a liability.</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li><strong>Contrast failure:</strong> Text on translucent panels becomes illegible over busy backgrounds. Mail app search: text on text creates &ldquo;an illegible mess&rdquo;</li>
                  <li><strong>Touch targets shrank:</strong> Below Apple&apos;s own 1cm x 1cm / 0.4cm spacing guideline. Photos app controls significantly cramped vs iOS 18</li>
                  <li><strong>Navigation instability:</strong> Controls appear, vanish, collapse, and expand based on context. Safari&apos;s forward button presence varies by browsing history</li>
                  <li><strong>Discoverability loss:</strong> Breadcrumb labels removed from back buttons. URL bar squeezed between toolbar buttons</li>
                </ul>
                <p className="text-orange-400/80"><strong>The takeaway:</strong> Liquid Glass is visually influential — many apps will adopt translucent surfaces. But always ship with accessible contrast ratios (WCAG 4.5:1 minimum), stable navigation patterns, and sufficient touch targets. Test with real users, not just design reviews.</p>
              </div>
            </div>

            <AnalysisBlock items={[
              { title: "Grain and texture return", body: "After years of perfectly smooth digital surfaces, grain overlays and noise textures are back. Why: they counteract 'AI sterility.' When every AI-generated image is pixel-perfect, analog texture (film grain, paper fiber, noise) becomes a trust signal that says 'a human was here.' Implementation: SVG noise filter overlaid at 3-8% opacity on gradients. Or use CSS with feTurbulence for lightweight noise generation." },
              { title: "The grainy blur aesthetic", body: "The grainy blur (gradient + gaussian blur + grain overlay) is the defining atmospheric effect of 2026. It creates visuals that feel emotional and immersive rather than clinical. Popular in hero sections, card backgrounds, and onboarding flows. Start with a mesh gradient, apply 20-40px blur, overlay fractalNoise at 5-10% opacity." },
            ]} />
          </div>
        </SectionHeader>

        {/* ═══════════════════ DEPTH ═══════════════════ */}
        <SectionHeader id="depth" number="05" title="Depth & Shadow" subtitle="Multi-layer shadows, elevation scales, and the return to tactile realism.">
          <div className="space-y-8">
            <DemoCard title="Elevation Scale" description="5-6 levels: Ground → Raised → Floating → Overlay → Modal → Peak. Each with distinct shadow and z-index.">
              <ElevationScale />
            </DemoCard>

            <DemoCard title="Multi-Layer Shadow Technique" description="Single shadows look flat. 2-5 layered shadows mimic real light: sharp key shadow for edges, diffused ambient for distance.">
              <MultiLayerShadow />
            </DemoCard>

            <AnalysisBlock items={[
              { title: "Why multi-layer shadows look better", body: "In the real world, objects don't cast one uniform shadow — they cast multiple shadows from different light sources at different distances. A card 2px off the surface has a tight, dark contact shadow. The same card also has a large, soft ambient shadow from environmental light. Combining 2-5 shadow layers at different offsets, blurs, and opacities creates depth that the brain recognizes as physically plausible." },
              { title: "The Fluent 2 approach", body: "Microsoft's Fluent 2 defines two shadow types applied together: Key shadow (sharp, directional, small offset) defines the element's edges. Ambient shadow (soft, diffused, large offset) implies distance from the surface. This two-layer minimum creates natural hierarchy without requiring 5+ shadow declarations for every component." },
              { title: "Elevation tokens in design systems", body: "Best practice: define elevation as a semantic token, not individual shadow values. elevation.raised maps to a specific shadow stack. When you need to adjust the light source angle or intensity globally, you change the token — not 400 component files. If two layers have different meanings, they should look meaningfully different — combine elevation with spacing, background color, and borders." },
            ]} />
          </div>
        </SectionHeader>

        {/* ═══════════════════ MOTION & CURVES ═══════════════════ */}
        <SectionHeader id="motion" number="06" title="Motion & Animation Curves" subtitle="Spring physics replace fixed durations. Motion tokens standardize timing. Every animation needs a reason to exist.">
          <div className="space-y-8">
            <DemoCard title="Easing Curve Comparison" description="Different curves for different purposes. Ease-out for entrances, ease-in for exits, springs for interaction.">
              <EasingCurveComparison />
            </DemoCard>

            <DemoCard title="Duration Scale & Motion Tokens" description="Standardize timing across your product. Three tiers: fast (100-150ms), standard (250ms), expressive (350-500ms).">
              <DurationScale />
            </DemoCard>

            <DemoCard title="Why Springs Beat Durations" description="Physics-based springs have no fixed duration. They settle naturally. Interrupting mid-motion transfers velocity — that's why they feel alive.">
              <SpringVsDuration />
            </DemoCard>

            <AnalysisBlock items={[
              { title: "Spring physics explained", body: "A spring animation is governed by three parameters: Mass (weight of the object — heavier = slower, more inertia), Tension/Stiffness (how tightly wound — higher = snappier), and Friction/Damping (what stops the oscillation — higher = less bounce). Unlike CSS transitions, springs don't need a duration — they simulate real physics and settle naturally. The key advantage: when you interrupt a spring mid-animation, the object's current velocity carries into the new animation. This is why spring animations feel 'alive' and CSS transitions feel 'robotic.'" },
              { title: "Motion token framework for 2026", body: "The best teams standardize motion with tokens: Duration tiers — T1 (100-150ms) for instant feedback, T2 (250ms) for standard transitions, T3 (350-500ms) for expressive reveals. Easing library — ease-out for entrances, ease-in for exits, one custom cubic-bezier for brand personality. Spring presets — snappy (s:500 d:30) for buttons, gentle (s:200 d:20) for panels, bouncy (s:300 d:10) for playful elements." },
              { title: "The reduce-motion imperative", body: "All animations must respect prefers-reduced-motion. This isn't optional — 1 in 5 people experience motion sensitivity. Implementation: @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } } Replace motion cues with non-motion alternatives (color changes, icon swaps, opacity)." },
            ]} />

            <DemoCard title="Spring Physics Comparison" description="Configurable stiffness, damping, and mass. Drag the trigger to see how different configs feel.">
              <SpringPhysics />
            </DemoCard>

            <DemoCard title="Micro-Interactions" description="Every interaction answers: 'Did it work?' Purposeful feedback (confirmation, state change) and playful delight.">
              <MicroInteractions />
            </DemoCard>

            <DemoCard title="Scroll-Driven Animation" description="Elements fade, translate, and scale as they enter the viewport. CSS scroll-driven animations make this performant and declarative.">
              <ScrollParallax />
            </DemoCard>

            <div className="bg-white/[0.03] border border-border rounded-xl p-6 space-y-4">
              <h3 className="text-sm font-medium">Animation Libraries (2026 Landscape)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-xs text-fg-muted">
                <div>
                  <strong className="text-fg block mb-1">The Big Four</strong>
                  <ul className="space-y-1.5">
                    <li><strong>Framer Motion / Motion</strong> — 3.5M+ weekly npm downloads. React standard. Best for: spring physics, gesture-driven animation, layout animations, AnimatePresence.</li>
                    <li><strong>GSAP</strong> — Industry standard for timeline and scroll-triggered animation. Best for: complex sequences, ScrollTrigger, SVG morphing, cross-framework.</li>
                    <li><strong>Motion One</strong> — Built on Web Animations API. Lightweight (3.8kb). Best for: vanilla JS, performance-critical, non-React projects.</li>
                    <li><strong>Lottie</strong> — Renders After Effects animations as JSON. Best for: complex vector animations, loading states, onboarding illustrations.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-fg block mb-1">Performance Rules</strong>
                  <ul className="space-y-1.5">
                    <li>Only animate <code className="text-accent/60">transform</code> and <code className="text-accent/60">opacity</code> — they&apos;re GPU-composited and don&apos;t trigger layout/paint</li>
                    <li>Target 60fps on mid-range devices. Use <code className="text-accent/60">will-change</code> sparingly</li>
                    <li>Lazy-load animation libraries below the fold</li>
                    <li>Use <code className="text-accent/60">requestAnimationFrame()</code> for JS-driven animation loops, never setInterval</li>
                    <li>iOS: prefer subtle spring effects. Android: MotionLayout for state mapping. Web: GPU-friendly transforms only</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SectionHeader>

        {/* ═══════════════════ CORNERS ═══════════════════ */}
        <SectionHeader id="corners" number="07" title="Corner Shape" subtitle="Beyond border-radius. Sharp corners make a strategic comeback. CSS corner-shape unlocks squircles, bevels, and notches.">
          <div className="space-y-8">
            <DemoCard title="Corner Shape Explorer" description="CSS corner-shape (Chrome 139+, March 2026) modifies the curve border-radius creates. No more SVG masks or clip-path hacks.">
              <CornerShapeExplorer />
            </DemoCard>

            <DemoCard title="Radius Scale System" description="Radii should scale with component size. Buttons rounder than cards, chips rounder than buttons. Use clamp() for responsive scaling.">
              <RadiusScale />
            </DemoCard>

            <AnalysisBlock items={[
              { title: "Why rounded corners dominate", body: "Research suggests our brains process rounded shapes 20% faster than angular ones. Rounded corners draw the eye inward, focusing attention on the content within. They feel approachable, friendly, modern. iOS's fully rounded buttons and pills set the standard; most consumer apps follow. The squircle (Apple's continuous curvature, now available via CSS corner-shape: squircle) creates the premium 'iOS feel' that users associate with quality." },
              { title: "The case for sharp corners", body: "Sharp corners aren't dead — they're strategic. Sharp edges convey: seriousness, professionalism, precision, authority. Microsoft's website uses sharp corners for enterprise gravitas. Neobrutalist designs use them for rebellious energy. Data-heavy interfaces (tables, code editors, terminal UIs) use them because sharp edges create cleaner visual boundaries for dense information. The psychological difference: rounded corners say 'come in, it's friendly' — sharp corners say 'pay attention, this is important.'" },
              { title: "When to use which", body: "Interactive elements users tap (buttons, toggles, chips): rounder — they feel more clickable and reduce accidental missed taps. Static containers with critical information (data tables, code blocks, alerts): sharper — draws focus to the edges and creates visual weight. Large cards and panels: moderate radius (12-16px) — enough softness without losing structure. The worst mistake: applying uniform border-radius across everything. It removes visual hierarchy — be intentional." },
              { title: "CSS corner-shape (Chrome 139+)", body: "The new corner-shape property is a companion to border-radius — it modifies the curve shape. Values: round (default), squircle (Apple's superellipse), bevel (faceted gem cuts), scoop (concave inward curves), notch (angular stamps). Use @supports for progressive enhancement. Squircle for premium/consumer, bevel for gaming/tech, scoop for editorial/lifestyle, notch for developer tools." },
            ]} />
          </div>
        </SectionHeader>

        {/* ═══════════════════ ICONS ═══════════════════ */}
        <SectionHeader id="icons" number="08" title="Icons" subtitle="From static glyphs to context-aware, animated, multi-style systems. Icons are now a design system deliverable, not an afterthought.">
          <div className="space-y-8">
            <DemoCard title="Icon Styles: Outline → Filled → Duotone" description="The best icon systems support all three from one component. Outlined for nav, filled for active states, duotone for decoration.">
              <IconStyleComparison />
            </DemoCard>

            <DemoCard title="Animated Icons" description="Trigger-based: bells ring on notification, gears rotate on hover, hearts pulse on like. Systematic, not decorative.">
              <AnimatedIconDemo />
            </DemoCard>

            <div className="bg-white/[0.03] border border-border rounded-xl p-6">
              <h3 className="text-sm font-medium mb-4">8 Icon Trends for 2026</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                {[
                  { name: "Soft 3D", note: "Rounded, pastel, plush textures. The Gen Alpha effect — friendly and tactile.", industry: "Lifestyle, gaming, fintech" },
                  { name: "Hyper-Minimal", note: "Ultra-thin strokes, geometric precision. High legibility at small sizes.", industry: "Productivity, SaaS, crypto" },
                  { name: "Retrofuturist", note: "Neon glows, chrome highlights, pixel-blur edges. 80s-90s nostalgia.", industry: "Music, gaming, Gen Z brands" },
                  { name: "Mascot", note: "Micro-characters like Duolingo's Duo. Change based on user interaction.", industry: "EdTech, chat apps, onboarding" },
                  { name: "Micro-Illustrated", note: "Hand-crafted with warm character. Storytelling in 24x24px.", industry: "Editorial, blogs, learning" },
                  { name: "Variable", note: "Adapt to context: light/dark mode, hover states. The next frontier.", industry: "OS design systems, dashboards" },
                  { name: "Bold Geometric", note: "Thick strokes, color blocks, punchy shapes. High contrast, accessible.", industry: "Social media, events, brand" },
                  { name: "Multi-Material", note: "Glass, metal, textile finishes. Premium feel inspired by Apple's Liquid Glass.", industry: "Fintech, fashion, luxury" },
                ].map((trend) => (
                  <div key={trend.name} className="bg-white/[0.03] rounded-lg p-3">
                    <div className="text-fg font-medium">{trend.name}</div>
                    <div className="text-fg-dim mt-1">{trend.note}</div>
                    <div className="text-fg-dim mt-1 text-[10px] italic">{trend.industry}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionHeader>

        {/* ═══════════════════ ILLUSTRATION ═══════════════════ */}
        <SectionHeader id="illustration" number="09" title="Illustration" subtitle="The pushback against AI polish. Human warmth, wonky charm, and cultural storytelling are the defining illustration values of 2026.">
          <div className="space-y-8">
            <DemoCard title="2026 Illustration Paradigms" description="Toggle between the four dominant illustration styles. Each conveys a different brand personality and audience expectation.">
              <IllustrationStyleExplorer />
            </DemoCard>

            <div className="grid md:grid-cols-2 gap-6">
              <DemoCard title="Motion Illustration" description="Static illustrations are dead. Characters breathe, react, and emote. Toggle moods to see how idle animation creates personality.">
                <BreathingCharacterDemo />
              </DemoCard>

              <DemoCard title="Texture as Trust Signal" description="Grain, paper, and halftone textures trigger perception of authenticity. Compare the same gradient with different texture treatments.">
                <GrainTextureDemo />
              </DemoCard>
            </div>

            <DemoCard title="Maximum Minimalism" description="One accent color, generous whitespace, a single illustration element. The 2026 antidote to visual noise — clarity through restraint.">
              <MaximalMinimalismDemo />
            </DemoCard>

            <AnalysisBlock items={[
              { title: "Post-AI authenticity", body: "As AI-generated imagery saturated every feed, audiences developed a hunger for raw, imperfect, and deeply personal art. Zine-inspired formats, expressive linework, hand lettering, and collage techniques signal 'a human made this.' Brands like Jolene Bakery use childlike face drawings. Sad On Sundays uses black handwritten doodles on white boxes. The imperfection IS the brand signal. This is the biggest shift in illustration since flat design killed skeuomorphism." },
              { title: "3D meets flat design", body: "The boundary between 2D illustration and 3D modeling continues to blur. Artists blend objects from Blender or Spline with flat vector illustrations, achieving depth and interactivity without committing to full realism. Isometric illustrations, layered depth effects, and interactive 3D elements you can rotate on scroll. Brands like Shopify and Stripe use this hybrid approach on feature pages." },
              { title: "Plushcore and stylized realism", body: "Characters that look like high-end toys or sculptures rather than actual humans. Rounded forms, soft materials, pastel palettes, touchable textures. This avoids the uncanny valley while feeling premium and contemporary. Dominant on TikTok and in Gen Alpha-targeted brand design. Think: Pixar-quality character design applied to UI illustrations." },
              { title: "Cultural reclamation", body: "Illustration used for authentic cultural storytelling and representation. Regional narratives, indigenous patterns, and locally-rooted visual languages. Not tokenistic diversity imagery — actual collaboration between illustrators, historians, and community groups. This trend reflects consumer demand for authentic localized perspectives." },
              { title: "Eco-visualism", body: "Sustainability-focused storytelling through illustration. Organic motifs, earthy palettes, warming stripes, climate data visualization rendered as emotional imagery. Environmental organizations and sustainable brands use illustration to translate complex data into resonant visual narratives." },
              { title: "Motion illustrations", body: "Static illustrations are giving way to micro-animations and looped GIFs. Procreate Dreams and After Effects enable lightweight animations. A character that breathes, a plant that grows, a loading state that tells a story. These create scroll-stopping content that increases engagement and dwell time." },
              { title: "Maximum minimalism", body: "Streamlined layouts with one or two bold color pops (neon, canary yellow), generous whitespace, and a single delicate illustration. Provides clarity on small screens without sacrificing visual impact. Popular in mobile-first apps and modern editorial design." },
              { title: "Grain and handmade texture", body: "Grain overlays, paper textures, uneven brush strokes, scanned paper effects. Creates an inviting human feel despite digital origin. Psychologically triggers perception of authenticity and craftsmanship that increases audience trust. Implementation: SVG noise filter at 3-8% opacity, or scanned paper textures as CSS background-blend-mode overlays." },
            ]} />

            <div className="bg-white/[0.03] border border-border rounded-xl p-6">
              <h3 className="text-sm font-medium mb-3">Brand Illustration Examples</h3>
              <div className="grid md:grid-cols-2 gap-4 text-xs text-fg-muted">
                <div><strong className="text-fg">Spotify Wrapped</strong> — Prioritizes feelings and humor over corporate sleekness. Folder-style text, casual copy, relatable visuals. Illustration as personality.</div>
                <div><strong className="text-fg">Duolingo</strong> — Mascot-driven storytelling. Duo the owl changes expression based on user behavior. The mascot IS the brand. Passive-aggressive push notifications as character design.</div>
                <div><strong className="text-fg">Zocdoc</strong> — Illustrations humanize healthcare guidance. Friendly characters make clinical subjects approachable. Reduces anxiety through visual warmth.</div>
                <div><strong className="text-fg">Tesco Finest</strong> — Landscape illustrations on tea packaging communicate product character (cityscape at dusk for Earl Grey, sunrise for English Breakfast). Narrative through illustration.</div>
                <div><strong className="text-fg">Shopify</strong> — 3D/flat hybrid on feature pages. Isometric merchant scenes with interactive hover states. Technical product made tangible.</div>
                <div><strong className="text-fg">Linear</strong> — Minimal, geometric illustration. Abstract shapes and gradients. The illustration doesn&apos;t tell a story — it creates a mood. Premium restraint.</div>
              </div>
            </div>
          </div>
        </SectionHeader>

        {/* ═══════════════════ PHOTOGRAPHY ═══════════════════ */}
        <SectionHeader id="photography" number="10" title="Photography & Brand Identity" subtitle="Authenticity over polish. Candid over staged. How brands use imagery to feel unique and personal.">
          <div className="space-y-8">
            <DemoCard title="Corporate vs. Authentic" description="The shift from 2020 sanitized stock imagery to 2026 human-first photography. Toggle to see what changed and why.">
              <PhotographyStyleComparison />
            </DemoCard>

            <DemoCard title="Color Grading & Film Look" description="Post-processing defines mood. The same scene graded four ways — from clinical digital to warm analog film.">
              <ColorGradingDemo />
            </DemoCard>

            <DemoCard title="Brand Visual Universes" description="The best brands don't just have logos — they have entire visual worlds. Explore four distinctive approaches.">
              <BrandVisualUniverse />
            </DemoCard>

            <DemoCard title="Product Photography Evolution" description="From clinical white-background e-commerce to lifestyle and editorial. Context is the new quality.">
              <ProductPhotoStyling />
            </DemoCard>

            <AnalysisBlock items={[
              { title: "The authenticity mandate", body: "Overly staged, stock-photo-style imagery is dead. In 2026, brands invest in candid photography with unfiltered energy and genuine emotion. The 'Human Imperfection' trend embraces grain, natural light, and slightly asymmetric compositions. When branding for authenticity, imperfections make the brand feel real. The rise of AI-generated imagery has made this more important, not less — audiences can increasingly sense synthetic perfection and distrust it." },
              { title: "Editorial lifestyle composition", body: "Unpredictable layouts with loose, zine-style compositions. Grainy photography, uneven letterforms, and slightly asymmetric page layouts that evoke a handmade quality. The intent: purposeful warmth and authenticity rather than sloppiness. Magazine-quality art direction applied to app marketing and brand content." },
              { title: "Product photography evolution", body: "Lifestyle-driven product styling creates context and builds brand loyalty. Detail props add editorial richness — a coffee mug next to a keyboard tells a story that a product-on-white-background cannot. Bold, saturated color with strong hues dominates fashion, beauty, and lifestyle photography. The key: make the product feel like it belongs in someone's real life, not a catalog." },
              { title: "Organic and analog textures", body: "Hand-rendered letterpress-inspired fonts, earthy textures (sand, stone, bark), and low-contrast minimal forms. Photography increasingly features natural materials and environments. The visual language of sustainability: real materials, real places, real people — not 3D renders of idealized spaces." },
              { title: "How top brands differentiate visually", body: "The best brands in 2026 don't just have a color palette and a logo — they have a visual universe. Stripe's particle animations and technical photography create a sense of precision. Notion's warm, slightly nostalgic photography feels approachable. Linear's monochrome, high-contrast imagery feels premium and developer-focused. Apple's product photography is theatrical — every shadow and reflection is art-directed. The pattern: the photography style should be as distinctive as the logo." },
            ]} />
          </div>
        </SectionHeader>

        {/* ═══════════════════ DARK MODE ═══════════════════ */}
        <SectionHeader id="dark-mode" number="11" title="Dark Mode & Adaptive Theming" subtitle="Dark mode is no longer a toggle. It's a context-aware system that responds to time, light, and user behavior.">
          <div className="space-y-8">
            <DemoCard title="The Evolution: Light → Dark → Adaptive" description="Adaptive theming adjusts to ambient light, time of day, and device settings. OLED dark modes save 30-50% battery.">
              <DarkModeEvolution />
            </DemoCard>

            <AnalysisBlock items={[
              { title: "Beyond the toggle", body: "In 2026, dark mode and dynamic theming are foundational components of human-centered UX, not optional enhancements. The evolution: 2018 — dark mode as a user preference toggle. 2022 — automatic switching based on system setting. 2024 — time-of-day aware theming (warmer at night). 2026 — fully adaptive systems that adjust contrast, saturation, and accent colors based on ambient light sensors, user behavior patterns, and content type." },
              { title: "OLED optimization", body: "On OLED/AMOLED displays, true black (#000000) pixels are literally off — consuming zero power. Dark themes can save 30-50% battery. But true black has a design problem: it creates a 'void' effect where UI elements feel like they're floating in nothingness. The 2026 solution: near-black backgrounds (#0a0a0a to #121212) that save significant battery while maintaining visual depth. Charcoal cards on near-black backgrounds create enough contrast for hierarchy." },
              { title: "Implementation with tokens", body: "Three-tier token architecture makes dark mode implementation trivial: Primitive tokens define both light and dark color values. Semantic tokens (background.primary, text.secondary) alias to the appropriate primitive based on mode. Component tokens reference semantics. Switch modes = swap the alias layer. Every component updates automatically. What used to take weeks takes hours with proper token architecture." },
            ]} />
          </div>
        </SectionHeader>

        {/* ═══════════════════ DESIGN SYSTEMS ═══════════════════ */}
        <SectionHeader id="design-systems" number="12" title="Design Systems" subtitle="From component libraries to intelligent, AI-driven systems that enforce brand compliance autonomously. The most important infrastructure investment a product team can make.">
          <div className="space-y-6">
            <AnalysisBlock items={[
              { title: "The AI transformation", body: "Design systems are evolving from passive repositories into active systems of interaction. AI agents can now read design tokens semantically — they understand that 'action.primary' means 'the most important interactive element' and can generate compliant UI autonomously. The Model Context Protocol (MCP) enables AI agents to understand design systems and generate code that stays on-brand and on-system. This is the biggest shift since design systems moved from Sketch to Figma." },
              { title: "Three-tier token architecture", body: "The standard: Primitive tokens (foundation) — raw values: color.blue.500 = #3b82f6, spacing.4 = 16px. These are your core palette, reducing infinite possibilities to a curated set. Semantic tokens (theme) — intent-based aliases: action.primary → color.blue.500, background.surface → color.gray.50. They carry meaning: 'use this for primary actions.' Component tokens (application) — element-specific: button.primary.background → action.primary. Each tier references the one below. The critical insight: semantic tokens require you to articulate the WHY behind every decision. Theming, dark mode, and rebranding become token swaps instead of rewrites." },
              { title: "Multi-brand architecture", body: "Enterprises are shifting from monolithic design systems to orchestrated multi-brand architectures. A core system of primitive tokens is intelligently overridden for sub-brands or platforms. Global identity stays consistent; individual product teams get autonomy to innovate without breaking the core system. Example: a parent company's design system defines spacing, typography scale, and interaction patterns globally. Each sub-brand overrides color tokens and border-radius to express its own personality." },
              { title: "Automated CI/CD for design", body: "Design updates now trigger automated pipelines. When a designer modifies tokens in Figma: the system auto-generates a pull request with the token changes, documentation updates automatically, Slack notifications alert relevant teams, visual regression tests catch unintended side effects. Design changes ship like code changes — versioned, reviewed, tested, deployed. The DTCG (Design Tokens Community Group) standard enables universal interoperability across tools." },
              { title: "Generative UI", body: "Interfaces assembled just-in-time based on user context. The design system provides the rules (tokens, components, layout constraints); AI assembles the UI. A dashboard that reorganizes based on the user's role. A form that adapts its complexity based on user expertise level. A notification that adjusts its visual priority based on urgency. The design system becomes the grammar; AI writes the sentences." },
              { title: "Accessibility as foundation", body: "Not retrofitted — built into the token layer from day one. Color tokens include contrast ratio metadata. Spacing tokens enforce minimum touch target sizes. Typography tokens guarantee readable line heights. AI-powered tools validate screen-reader compatibility and keyboard navigation automatically. In 2026, accessibility isn't a checklist item — it's a byproduct of using the system correctly." },
              { title: "How design systems absorb trends", body: "When a new visual trend emerges (glassmorphism, squircle corners, spring animations), a well-structured design system absorbs it through token updates — not component rewrites. Add a new surface variant: surface.glass with blur and opacity tokens. Add a corner-shape token: radius.squircle. Add spring presets: motion.spring.snappy, motion.spring.gentle. Teams adopt the trend by switching a token value, not rewriting CSS. This is how design systems make trend adoption safe and reversible." },
            ]} />
          </div>
        </SectionHeader>

        {/* ═══════════════════ BEST DESIGNED APPS ═══════════════════ */}
        <SectionHeader id="best-apps" number="13" title="Best Designed Apps" subtitle="What the best-designed products in 2026 are doing — and why it works.">
          <div className="space-y-4">
            {[
              {
                name: "Linear",
                category: "Project Management",
                doing: [
                  "Dark-first design with high-contrast accents. Every pixel feels intentional.",
                  "Spring-physics animations on every interaction. Cards slide, panels expand, lists reorder with physics-based motion.",
                  "Keyboard-first navigation. Power users never touch the mouse.",
                  "Command palette (⌘K) as primary navigation. Reduces cognitive load — type what you want instead of navigating menus.",
                  "Monochrome illustration style: abstract gradients and geometric shapes. The visual identity is restraint.",
                ],
                why: "Linear proved that developer tools can be beautiful without sacrificing speed or density. Their design language is opinionated — dark mode only, no theme customization — and that constraint creates a cohesive experience.",
              },
              {
                name: "Raycast",
                category: "Productivity Launcher",
                doing: [
                  "Glassmorphism as functional design — the command bar floats over your desktop with frosted glass.",
                  "Instant feedback on every keystroke. Input → result in under 100ms.",
                  "Extension marketplace with consistent design language. Third-party extensions feel native.",
                  "Respectful of the user's workflow — it appears when called, does its job, and disappears.",
                ],
                why: "Raycast's design philosophy: 'Designed by people who get it. This respects my workflow.' The product is invisible until needed, then beautiful when present.",
              },
              {
                name: "Notion",
                category: "Workspace",
                doing: [
                  "Warm neutral palette — soft greys and beige instead of stark white. Reduces eye strain in long sessions.",
                  "Block-based content model reflected in the UI. Every element is a draggable block with consistent interaction patterns.",
                  "Sidebar navigation with collapsible sections. Deep nesting without confusion.",
                  "Adaptive accents — Notion uses monochrome base with occasional accent pops that don't overwhelm.",
                ],
                why: "Notion makes complexity feel calm. The warm color palette and generous whitespace create a workspace you want to live in for 8 hours. Their design system scales from personal notes to enterprise wikis.",
              },
              {
                name: "Amie",
                category: "Calendar",
                doing: [
                  "Playful without being cluttered. Fast event creation with keyboard shortcuts.",
                  "Color-coded events with content-aware backgrounds.",
                  "Fluid animations on day/week/month transitions — the calendar slides and morphs, never jump-cuts.",
                  "Integrated to-dos that don't feel like an afterthought.",
                ],
                why: "Amie treats a calendar as a design canvas, not a data grid. Events feel like objects you place, not rows in a table.",
              },
              {
                name: "Spotify",
                category: "Music Streaming",
                doing: [
                  "Content-aware color — the entire UI shifts based on album art. The gold standard for dynamic theming.",
                  "Spotify Wrapped — the most imitated design moment of the decade. Illustration as personality.",
                  "Home screen personalization based on listening patterns. The UI reorganizes itself around user behavior.",
                  "Ambient background effects that make browsing feel immersive, not transactional.",
                ],
                why: "Spotify's design advantage is emotional immersion. You're not using a music database — you're in a mood. The dynamic color system creates that feeling.",
              },
              {
                name: "Duolingo",
                category: "Education",
                doing: [
                  "Mascot-driven UX. Duo the owl changes expression based on user behavior — guilt, celebration, encouragement.",
                  "Gamification micro-interactions: streaks, confetti, progress rings, XP animations.",
                  "Claymorphic 3D character design. Soft, touchable, friendly.",
                  "Passive-aggressive push notifications that are both effective and entertaining — the notification IS the design.",
                ],
                why: "Duolingo proves that design can drive retention metrics directly. The gamification, mascot personality, and emotional micro-interactions create daily habit loops that competitors can't replicate by copying features.",
              },
            ].map((app) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="p-5 border-b border-border">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-medium">{app.name}</h3>
                    <span className="text-xs text-fg-dim font-mono">{app.category}</span>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <ul className="space-y-1.5 text-xs text-fg-muted">
                    {app.doing.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="text-accent mt-0.5 shrink-0">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-fg-dim border-t border-border/50 pt-3 mt-3">
                    <strong className="text-fg-muted">Why it works:</strong> {app.why}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionHeader>

        {/* ═══════════════════ INDUSTRY ═══════════════════ */}
        <SectionHeader id="industry" number="14" title="By Industry" subtitle="Different verticals gravitate toward different visual languages.">
          <div className="space-y-4">
            {[
              {
                industry: "EdTech",
                visual: "Warm, approachable, illustration-heavy, gamified",
                traits: [
                  "Rounded corners, playful type, mascot icons (Duolingo's Duo sets the standard)",
                  "Claymorphism for onboarding, soft 3D for engagement elements",
                  "Gamification micro-interactions — streaks, confetti, progress rings, XP animations",
                  "AI-powered personalized learning pathways with visual feedback",
                  "Accessibility-first: neurodivergent-friendly design, high-contrast modes, motion controls",
                ],
                examples: "Duolingo, Khan Academy, Flint, School.AI",
                colors: ["#6366f1", "#a78bfa", "#34d399", "#fbbf24", "#fb7185"],
              },
              {
                industry: "Fintech",
                visual: "High-contrast, data-dense, trust-signaling",
                traits: [
                  "Dark mode default, OLED-optimized near-blacks",
                  "Hyper-saturated green for gains, red for losses — color as instant data",
                  "Minimal icons (hyper-minimal line style) for clean dashboards",
                  "Glassmorphism for overlays, neumorphism for sliders and controls",
                  "Explainable AI — confidence signals, intent previews, action audit trails",
                ],
                examples: "Stripe, Mercury, Robinhood, Revolut",
                colors: ["#0a0a0a", "#22c55e", "#ef4444", "#3b82f6", "#a78bfa"],
              },
              {
                industry: "SaaS / Productivity",
                visual: "Clean, modular, information-first",
                traits: [
                  "Bento grids for dashboards, container queries for responsive tiles",
                  "Elevated neutrals (warm greys, stone) — Notion's warm palette is the template",
                  "Floating rounded sidebar navigation (Arc/shadcn pattern)",
                  "Variable fonts with fluid type scale via clamp()",
                  "Command palette (⌘K) as primary navigation pattern",
                ],
                examples: "Notion, Linear, Figma, Slack, Raycast",
                colors: ["#f5f0eb", "#6366f1", "#0ea5e9", "#1c1917", "#e7e5e4"],
              },
              {
                industry: "Consumer / Social",
                visual: "Bold, expressive, emotion-first, immersive",
                traits: [
                  "Content-aware adaptive color (Spotify, Apple Music, Instagram)",
                  "Kinetic typography, motion posters, animated backgrounds",
                  "Liquid Glass / glassmorphism surfaces for depth and immersion",
                  "Mascot and animated icons that respond to user state",
                  "Anti-design and intentional imperfection for authenticity signaling",
                ],
                examples: "Spotify, Instagram, TikTok, Discord, BeReal",
                colors: ["#1db954", "#e1306c", "#ff0050", "#5865f2", "#ffd700"],
              },
              {
                industry: "Health & Wellness",
                visual: "Soft, organic, calming, nature-connected",
                traits: [
                  "Eco-inspired palettes — moss, ocean, terracotta, warm browns",
                  "Organic shapes and fluid curves, never sharp geometric",
                  "Soft gradients with grain texture for atmospheric warmth",
                  "Generous whitespace and breathing room — the UI itself feels calming",
                  "Serif typography for warmth, trust, and authority",
                ],
                examples: "Calm, Headspace, Apple Health, Oura, Whoop",
                colors: ["#86efac", "#93c5fd", "#fda4af", "#fde68a", "#d4c5b5"],
              },
            ].map((sector) => (
              <motion.div key={sector.industry} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-bg-card border border-border rounded-xl overflow-hidden">
                <div className="p-5 border-b border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium">{sector.industry}</h3>
                    <div className="flex gap-1">
                      {sector.colors.map((c) => (
                        <div key={c} className="w-4 h-4 rounded-full" style={{ background: c }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-fg-muted">{sector.visual}</p>
                </div>
                <div className="p-5">
                  <ul className="space-y-1.5 text-xs text-fg-muted">
                    {sector.traits.map((trait) => (
                      <li key={trait} className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">•</span>{trait}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[10px] text-fg-dim mt-3">Examples: {sector.examples}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionHeader>

        {/* ═══════════════════ SOURCES ═══════════════════ */}
        <SectionHeader id="sources" number="15" title="Sources" subtitle="Research backing for all findings in this report.">
          <div className="space-y-4 text-xs">
            {[
              {
                category: "Color & Visual Design",
                links: [
                  { title: "UI Color Trends to Watch in 2026 — Updivision", url: "https://updivision.com/blog/post/ui-color-trends-to-watch-in-2026" },
                  { title: "Dynamic Theming: A Developer's Guide — Dev.to", url: "https://dev.to/mike-at-redspace/dynamic-theming-a-developers-guide-to-adaptive-color-in-ui-53ml" },
                  { title: "8 Color Scheme Trends in Mobile App Design 2026 — Envato", url: "https://elements.envato.com/learn/color-scheme-trends-in-mobile-app-design" },
                  { title: "Grainy Blur Design Trend 2026 — Kittl", url: "https://www.kittl.com/blogs/grainy-blur-effect-stl/" },
                ],
              },
              {
                category: "Typography",
                links: [
                  { title: "10 Design & Typography Trends for 2026 — Fontfabric", url: "https://www.fontfabric.com/blog/10-design-trends-shaping-the-visual-typographic-landscape-in-2026/" },
                  { title: "Top Typography Trends for 2026 — Creative Bloq", url: "https://www.creativebloq.com/design/fonts-typography/breaking-rules-and-bringing-joy-top-typography-trends-for-2026" },
                  { title: "50 Fonts Popular in 2026 — Creative Boom", url: "https://www.creativeboom.com/resources/top-50-fonts-in-2026/" },
                ],
              },
              {
                category: "Layout & Navigation",
                links: [
                  { title: "Designing Bento Grids That Work — SaaSFrame", url: "https://www.saasframe.io/blog/designing-bento-grids-that-actually-work-a-2026-practical-guide" },
                  { title: "Best Sidebar Menu Design Examples 2026 — Navbar Gallery", url: "https://www.navbar.gallery/blog/best-side-bar-navigation-menu-design-examples" },
                ],
              },
              {
                category: "Surfaces & Effects",
                links: [
                  { title: "Liquid Glass Is Cracked — NN/g", url: "https://www.nngroup.com/articles/liquid-glass/" },
                  { title: "Apple New Software Design — Apple Newsroom", url: "https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/" },
                  { title: "Glassmorphism in UX — Clay", url: "https://clay.global/blog/glassmorphism-ui" },
                  { title: "Next-level Frosted Glass — Josh Comeau", url: "https://www.joshwcomeau.com/css/backdrop-filter/" },
                ],
              },
              {
                category: "Motion & Animation",
                links: [
                  { title: "CSS/JS Animation Trends 2026 — Web Peak", url: "https://webpeak.org/blog/css-js-animation-trends/" },
                  { title: "Spring Physics Introduction — Josh Comeau", url: "https://www.joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/" },
                  { title: "UI Animation Practical Guide 2026 — Ripplix", url: "https://www.ripplix.com/blog/ui-animation-practical-guide-for-2026" },
                  { title: "Agentic AI UX Patterns — Smashing Magazine", url: "https://www.smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/" },
                ],
              },
              {
                category: "Corners & Shape",
                links: [
                  { title: "CSS corner-shape Property — Smashing Magazine", url: "https://www.smashingmagazine.com/2026/03/beyond-border-radius-css-corner-shape-property-ui/" },
                  { title: "Edge Shapes Influence Interaction — Brady Starr", url: "https://bradyux.medium.com/the-cornerstone-of-ui-design-how-edge-shapes-influence-interaction-and-information-flow-f633c3177e57" },
                ],
              },
              {
                category: "Icons & Illustration",
                links: [
                  { title: "8 Icon Design Trends 2026 — Envato", url: "https://elements.envato.com/learn/icon-design-trends" },
                  { title: "Emerging Illustration Styles 2026 — GetIllustrations", url: "https://getillustrations.com/blog/emerging-illustration-styles-to-watch-in-2026/" },
                  { title: "Messy and Human Illustration Trends — Creative Bloq", url: "https://www.creativebloq.com/art/illustration/messy-meaningful-and-made-by-humans-the-biggest-illustration-trends-for-2026" },
                ],
              },
              {
                category: "Dark Mode & Theming",
                links: [
                  { title: "Dark Mode & Dynamic Theming Strategy — Figmenta", url: "https://studio.figmenta.com/en/insights/dark-mode-and-dynamic-theming-ux-comfort-strategy-for-2026" },
                  { title: "Dark Mode Design Best Practices 2026 — Tech-RZ", url: "https://www.tech-rz.com/blog/dark-mode-design-best-practices-in-2026/" },
                ],
              },
              {
                category: "Design Systems",
                links: [
                  { title: "Future of Enterprise Design Systems — Supernova", url: "https://www.supernova.io/blog/the-future-of-enterprise-design-systems-2026-trends-and-tools-for-success" },
                  { title: "Design Token Architecture — Martin Fowler", url: "https://martinfowler.com/articles/design-token-based-ui-architecture.html" },
                  { title: "Design Tokens Guide — Product Rocket", url: "https://productrocket.ro/articles/design-tokens-guide/" },
                ],
              },
              {
                category: "UX Research & Metrics",
                links: [
                  { title: "30+ Essential UX Stats — Maze", url: "https://maze.co/blog/ux-statistics/" },
                  { title: "12 Data-Backed UI/UX Trends — Index.dev", url: "https://www.index.dev/blog/ui-ux-design-trends" },
                  { title: "UX Statistics & Business Impact — DesignRush", url: "https://www.designrush.com/agency/ui-ux-design/trends/ui-ux-statistics" },
                ],
              },
              {
                category: "Photography & Brand",
                links: [
                  { title: "2026 Branding & Photography Trends — Jessica Strobel", url: "https://jessicastrobelphotography.com/2026-photography-trends/" },
                  { title: "Design Trends 2026 — Adobe", url: "https://www.adobe.com/express/learn/blog/design-trends-2026" },
                  { title: "Luxury Product Photography 2026 — Felix Gaertner", url: "https://felixgaertner.com/luxury-product-photography-trends-2026/" },
                ],
              },
              {
                category: "Industry-Specific",
                links: [
                  { title: "Top 7 SaaS Design Trends 2026 — Lollypop", url: "https://lollypop.design/blog/2025/april/saas-design-trends/" },
                  { title: "Fintech UX Design Trends 2026 — Brainhub", url: "https://brainhub.eu/library/fintech-ux-design-trends" },
                  { title: "EdTech Trends 2026 — OpenField", url: "https://openfieldx.com/edtech-trends-2026/" },
                ],
              },
            ].map((section) => (
              <div key={section.category} className="space-y-1.5">
                <h3 className="text-sm font-medium text-fg">{section.category}</h3>
                <ul className="space-y-1 text-fg-muted">
                  {section.links.map((link) => (
                    <li key={link.url}>
                      <a href={link.url} className="text-accent/70 hover:text-accent transition-colors" target="_blank" rel="noopener">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionHeader>

        {/* Footer */}
        <footer className="border-t border-border pt-12 pb-24 text-center text-xs text-fg-dim space-y-2">
          <p>Research compiled March 2026 by <strong className="text-fg-muted">Sanskarbot</strong> for <strong className="text-fg-muted">Kurt Jeske</strong>.</p>
          <p>Built with Next.js 16, React 19, Tailwind v4, and Framer Motion. All interactive demos are live code, not screenshots.</p>
          <p className="text-fg-dim/60 mt-4">40+ sources researched. 16 sections. 20+ interactive demos. Every trend evaluated through the lens of usability, retention, and business impact.</p>
        </footer>
      </main>
    </>
  );
}
