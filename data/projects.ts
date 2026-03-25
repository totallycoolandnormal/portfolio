// --- Content Block Types ---

export type LeadBlock = { type: "lead"; text: string };
export type SectionBlock = {
  type: "section";
  heading: string;
  subheading?: string;
  body: string[];
};
export type ImageBlock = {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
};
export type ImageGridBlock = {
  type: "image-grid";
  label?: string;
  columns?: 2 | 3;
  images: { src: string; alt: string; caption?: string }[];
};
export type CaptionedImagesBlock = {
  type: "captioned-images";
  images: { src: string; alt: string; caption: string }[];
};
export type ResultsBlock = {
  type: "results";
  heading?: string;
  body: string[];
};

export type RoleBlock = {
  type: "role";
  items: string[];
};

export type ContentBlock =
  | LeadBlock
  | SectionBlock
  | ImageBlock
  | ImageGridBlock
  | CaptionedImagesBlock
  | ResultsBlock
  | RoleBlock;

// --- Project Interface ---

export interface Project {
  id: string;
  title: string;
  company: string;
  role: string;
  year: string;
  outcome: string;
  metrics?: { value: string; label: string }[];
  coverImage: string;
  coverAspectRatio: string;
  accentColor: string;
  caseStudy: {
    blocks: ContentBlock[];
  };
}

// --- Projects ---

export const projects: Project[] = [
  {
    id: "fortnite-ui",
    title: "Redesigning Fortnite for 700M Players",
    company: "Epic Games",
    role: "Group Director, UXUI & Brand Design",
    year: "2020–2025",
    outcome:
      "Overhauled Fortnite's entire frontend to support infinite content expansion — cutting UI component creation time from 4 days to 1.5",
    metrics: [
      { value: "62%", label: "Faster UI Dev" },
      { value: "700M+", label: "Players Served" },
    ],
    coverImage: "/images/fortnite-ui/hero.png",
    coverAspectRatio: "16/9",
    accentColor: "#7B68EE",
    caseStudy: {
      blocks: [
        {
          type: "lead",
          text: "When I joined Epic, every button in Fortnite was a standalone asset. There were over 800 of them. We needed to overhaul the system both aesthetically and for scale — while never taking the live game offline.",
        },
        {
          type: "role",
          items: [
            "Directed a team of 12 designers and 3 UX researchers across the frontend UI workstream",
            "Presented the component strategy to Epic's SVP of Product and secured prioritization against competing season deadlines",
            "Negotiated 6-month runway with engineering leadership by demonstrating projected memory cost savings",
            "Oversaw creative direction, visual language definition, and the IA restructure",
          ],
        },
        {
          type: "section",
          heading: "A live-service game is not for the faint of heart.",
          body: [
            "Fortnite launched in 2017 and hasn't let up since: new modes, infinite partnerships, LEGO Fortnite, a proprietary engine for creator content. Five years of relentless shipping had left the UI visually consistent but wildly inefficient — every button bespoke, every component a snowflake.",
            "The component library had been on the roadmap for years. It was consistently deprioritized in favor of shipping the next season. I reframed the pitch: this wasn't a design system project — it was a prerequisite for the ecosystem strategy. That changed the conversation.",
          ],
        },
        {
          type: "image-grid",
          label: "Before and After",
          images: [
            { src: "/images/fortnite-ui/old-lobby.png", alt: "Fortnite lobby UI circa 2017", caption: "2017" },
            { src: "/images/fortnite-ui/shipped-homebar.png", alt: "Fortnite lobby UI after redesign", caption: "2024" },
          ],
        },
        {
          type: "section",
          heading: "The gameplay UI was a red herring.",
          subheading: "The real opportunity was the 'front end' — lobby, discovery, social, menus.",
          body: [
            "The actual gameplay UI was too baked into game logic to address. But the game's frontend — the experience you see before and after every match — was far more important for delivering on the promise of a multi-game ecosystem.",
            "I convinced engineering leadership to scope the overhaul to the frontend only. This made the project viable in 6 months instead of 2 years, and gave us a proving ground before touching gameplay.",
          ],
        },
        {
          type: "image-grid",
          label: "Strategy Deck",
          images: [
            { src: "/images/fortnite-ui/deck-01.png", alt: "Process deck slide 1" },
            { src: "/images/fortnite-ui/deck-02.png", alt: "Process deck slide 2" },
            { src: "/images/fortnite-ui/deck-03.png", alt: "Process deck slide 3" },
            { src: "/images/fortnite-ui/deck-04.png", alt: "Process deck slide 4" },
            { src: "/images/fortnite-ui/deck-05.png", alt: "Process deck slide 5" },
            { src: "/images/fortnite-ui/deck-06.png", alt: "Process deck slide 6" },
          ],
        },
        {
          type: "section",
          heading: "Evolving the soul, not replacing it.",
          subheading: "Fortnite's audience had to feel like the game grew up with them, not that it was taken over by suits.",
          body: [
            "Fortnite had become more platform than game — closer to a PS5 home screen than a Call of Duty lobby. The visual language needed to be scannable, memorizable, and translatable across a growing catalog of wildly different content.",
            "The hardest constraint: these changes needed to feel like an evolution, not a corporate rebrand. Players are fiercely protective of Fortnite's identity. Respecting that love was non-negotiable.",
          ],
        },
        {
          type: "captioned-images",
          images: [
            { src: "/images/fortnite-ui/style-tile-02.jpg", alt: "Style tile exploration", caption: "Style Tiles" },
            { src: "/images/fortnite-ui/style-tile-07.jpg", alt: "Style tile dark variant", caption: "Style Tiles" },
            { src: "/images/fortnite-ui/style-tile-08.jpg", alt: "Style tile light variant", caption: "Style Tiles" },
            { src: "/images/fortnite-ui/ui-tiles.png", alt: "UI component tiles", caption: "Component Tiles" },
          ],
        },
        {
          type: "section",
          heading: "Designing for the games that don't exist yet.",
          subheading: "A white-label UI kit for creators to customize their own in-game experience.",
          body: [
            "While defining visual systems for the live game, we were simultaneously preparing them for a future where thousands of creator-made experiences would need their own UI — each aesthetically distinct, but anchored by consistent foundational UX.",
            "The adaptive system changes colors and tone based on content, but the navigation, information hierarchy, and interaction patterns remain rock-solid. Creators get the UI kit pre-built and documented; they customize the skin, not the skeleton.",
          ],
        },
        {
          type: "captioned-images",
          images: [
            { src: "/images/fortnite-ui/ia-overview.png", alt: "Information architecture overview", caption: "The core IA — structure for every player's experience" },
            { src: "/images/fortnite-ui/framework-hierarchy.png", alt: "Component framework hierarchy", caption: "Consistent foundational UX underneath adaptive theming" },
          ],
        },
        {
          type: "results",
          body: [
            "UI component creation time dropped from ~4 days to ~1.5 days — a 62% reduction. The consolidated component library reduced unique UI assets by over 70%, freeing significant memory for content.",
            "Fortnite launched multiple tentpole game modes and a new discovery experience on this foundation. The UI kit and documentation enabled creators to build polished, consistent experiences without our team bottlenecking them.",
            "The tradeoff: we couldn't address the gameplay HUD in this phase. That debt remains. But the frontend system proved the approach, and the methodology is now being applied to gameplay UI in a follow-up initiative.",
          ],
        },
        {
          type: "image-grid",
          label: "Shipped",
          images: [
            { src: "/images/fortnite-ui/shipped-homebar.png", alt: "Shipped home bar" },
            { src: "/images/fortnite-ui/shipped-passes.png", alt: "Shipped battle passes" },
            { src: "/images/fortnite-ui/shipped-shop.png", alt: "Shipped item shop" },
            { src: "/images/fortnite-ui/shipped-social.jpeg", alt: "Shipped social panel" },
          ],
        },
      ],
    },
  },
  {
    id: "social-systems",
    title: "Fortnite Social & the EOS SDK",
    company: "Epic Games",
    role: "Group Director, UXUI & Brand Design",
    year: "2020–2025",
    outcome:
      "Redesigned social overlay, launched Reboot Rally (most successful re-engagement campaign in Fortnite history), and designed the SDK enabling any developer to access Epic's 700M-account social graph",
    metrics: [
      { value: "700M", label: "Account Graph" },
      { value: "3+", label: "Avg Reconnections" },
    ],
    coverImage: "/images/social-systems/header.png",
    coverAspectRatio: "4/3",
    accentColor: "#4FC3F7",
    caseStudy: {
      blocks: [
        {
          type: "lead",
          text: "Fortnite's social overlay was the most-complained-about screen in UXR studies. But fixing it was just the beginning — Epic's real ambition was to turn Fortnite's social graph into a platform that any game developer could plug into.",
        },
        {
          type: "role",
          items: [
            "Directed 8 designers across social, voice, and SDK workstreams",
            "Defined the SDK's design language and developer-facing documentation strategy",
            "Championed Reboot Rally from concept through launch — pitched the retention model to executive leadership",
            "Coordinated across console, PC, and mobile teams for input-aware social UX",
          ],
        },
        {
          type: "section",
          heading: "Nobody liked the social panel. Including us.",
          body: [
            "It consumed too much screen real estate, had accidental traversal issues with controllers, and looked like it was designed in 2018 — because it was. UXR studies consistently ranked it the most frustrating screen.",
            "We redesigned it for clarity, input optimization, and visual coherence. But this was the easy win. The harder, more interesting question: what if Fortnite's social infrastructure could power other games?",
          ],
        },
        {
          type: "image",
          src: "/images/social-systems/old-menu.png",
          alt: "Original social overlay in Fortnite",
          caption: "The original social overlay — functional but bloated",
        },
        {
          type: "section",
          heading: "Your friends are your best re-engagement channel.",
          subheading: "Reboot Rally turned lapsed players into an acquisition strategy.",
          body: [
            "I pitched a program that rewarded active players for bringing lapsed friends back with exclusive cosmetics. The concept was dead simple, but it required coordinating across game design, economy, marketing, and engineering.",
            "We also launched Social Tags — player-defined matchmaking preferences that helped strangers find compatible teammates. The hypothesis: make it easier to form new connections and retention improves. It did.",
          ],
        },
        {
          type: "image-grid",
          images: [
            { src: "/images/social-systems/reboot-rally-1.png", alt: "Reboot Rally UI", caption: "Reboot Rally invite flow" },
            { src: "/images/social-systems/reboot-rally-2.png", alt: "Reboot Rally rewards", caption: "Exclusive rewards for bringing friends back" },
          ],
        },
        {
          type: "section",
          heading: "From game feature to platform infrastructure.",
          subheading: "Designing a mobile-first social SDK for Epic Online Services.",
          body: [
            "The bigger play: package Fortnite's social layer — parties, voice, text, rich presence — into an SDK that any developer can integrate. Start mobile-first, because that's where the growth is.",
            "This meant designing for two audiences simultaneously: the players using it, and the developers building on it. The SDK needed to feel native to whatever game it was in, not like a Fortnite widget stapled on.",
          ],
        },
        {
          type: "captioned-images",
          images: [
            { src: "/images/social-systems/mobile-first.png", alt: "Mobile-first social design", caption: "Mobile-first: designed for thumbs" },
            { src: "/images/social-systems/desktop-voice.png", alt: "Desktop voice chat", caption: "Desktop: rich voice and presence" },
            { src: "/images/social-systems/chat.png", alt: "Cross-platform chat", caption: "Unified messaging everywhere" },
          ],
        },
        {
          type: "image",
          src: "/images/social-systems/cross-platform.png",
          alt: "Cross-platform social SDK vision",
          caption: "The SDK — one social layer, every platform, any game",
        },
        {
          type: "results",
          body: [
            "Reboot Rally brought back millions of lapsed players over multiple seasons, with returning players forming an average of 3+ new social connections. It became Fortnite's most successful earned media campaign — entirely player-driven, zero paid spend.",
            "The social SDK now extends Epic's 700M-account graph to any developer on EOS. Smaller studios can offer the kind of social features previously only possible at Fortnite's scale.",
            "What I'd do differently: we spent too long on the desktop voice experience when mobile voice was the higher-impact surface. That misprioritization cost us about 6 weeks.",
          ],
        },
      ],
    },
  },
  {
    id: "ea-pc-app",
    title: "The EA App Redesign",
    company: "Electronic Arts",
    role: "UX Director",
    year: "2016–2020",
    outcome:
      "Convinced EA to invest in a ground-up redesign of its PC platform — from Origin to the subscription-first EA App serving 10M+ subscribers",
    metrics: [
      { value: "10M+", label: "Subscribers" },
      { value: "4x", label: "Content Scale" },
    ],
    coverImage: "/images/ea-pc-app/header.png",
    coverAspectRatio: "4/3",
    accentColor: "#FF6B35",
    caseStudy: {
      blocks: [
        {
          type: "lead",
          text: "Origin was EA's PC app — a Steam competitor that had stalled. PC net bookings were climbing, but the product felt like an afterthought. I saw an opportunity to pitch a complete re-envisioning. Getting funded was the harder design challenge.",
        },
        {
          type: "role",
          items: [
            "Directed a team of 6 designers, growing to 10 during peak production",
            "Conceived and presented the product vision to EA's C-suite, securing outsized investment across 3 studios",
            "Defined the UI architecture, component system, and responsive framework",
            "Managed external agency partner for motion design and prototyping",
          ],
        },
        {
          type: "section",
          heading: "The hardest design challenge was a PowerPoint.",
          subheading: "Securing investment by selling a vision, not a feature list.",
          body: [
            "The Origin team was small — 6 designers maintaining a live product. A ground-up redesign would require multi-year commitment and coordination across 3 studios. Nobody was going to fund that based on wireframes.",
            "I produced a pitch trailer — part product vision, part hype video — for EA's biannual show-and-tell. It positioned the new app not as a better launcher, but as the central nervous system for EA's subscription business. It worked. We got funded.",
          ],
        },
        {
          type: "image-grid",
          label: "The Pitch",
          images: [
            { src: "/images/ea-pc-app/pitch-p2.png", alt: "Pitch deck page" },
            { src: "/images/ea-pc-app/pitch-p31.png", alt: "Pitch deck page" },
            { src: "/images/ea-pc-app/pitch-p34.png", alt: "Pitch deck page" },
          ],
          columns: 3,
        },
        {
          type: "section",
          heading: "We needed rules before we needed screens.",
          subheading: "A UI architecture that could survive 4K monitors and 1024px windows.",
          body: [
            "Established a clear spatial architecture: regions for navigation, utilities, and content with defined behaviors at every breakpoint. A multi-layered content system handled seamless transitions between discovery, product pages, and in-progress downloads.",
            "The app needed to look premium whether windowed at minimum size or stretched across a 32-inch display. This constraint forced us to think in systems rather than static layouts — which turned out to be the best thing that happened to the project.",
          ],
        },
        {
          type: "captioned-images",
          images: [
            { src: "/images/ea-pc-app/structure-1.png", alt: "App structure diagram", caption: "Spatial Architecture" },
            { src: "/images/ea-pc-app/structure-2.png", alt: "Navigation model", caption: "Navigation Model" },
            { src: "/images/ea-pc-app/user-journeys.jpg", alt: "User journey maps", caption: "User Journeys" },
          ],
        },
        {
          type: "section",
          heading: "We tested everything. Players told us we were wrong. A lot.",
          body: [
            "Every core surface — Home, Discover, Search, Product Pages, Notifications — went through multiple rounds of prototype testing with real EA Play subscribers. The social features we were most excited about tested poorly. The subscription management flows we thought were simple confused everyone.",
            "We killed three features we'd spent months designing. That hurt. But the data was unambiguous, and shipping things players don't want is worse than cutting them.",
          ],
        },
        {
          type: "image-grid",
          label: "High Fidelity",
          images: [
            { src: "/images/ea-pc-app/hifi-1.jpg", alt: "High fidelity mockup" },
            { src: "/images/ea-pc-app/hifi-2.jpg", alt: "High fidelity mockup" },
            { src: "/images/ea-pc-app/hifi-add-member.jpg", alt: "Add member flow" },
            { src: "/images/ea-pc-app/hifi-vote.jpg", alt: "Voting feature" },
          ],
        },
        {
          type: "results",
          body: [
            "Secured funding and multi-studio support for a ground-up redesign — the first time the Origin team had received that level of investment. The new EA App launched as a subscription-first platform serving 10M+ subscribers.",
            "Three features we fought for — social hubs, community voting, and gameplay clips — didn't make the initial launch. Social hubs and clips were later shipped in modified forms; voting was permanently cut. I learned that advocating for features you love and accepting when the data disagrees are the same skill.",
          ],
        },
        {
          type: "image-grid",
          label: "What We Shipped",
          images: [
            { src: "/images/ea-pc-app/dashboard-shipped.png", alt: "Shipped dashboard" },
            { src: "/images/ea-pc-app/shipped-full.png", alt: "Shipped full view" },
            { src: "/images/ea-pc-app/shipped-search.png", alt: "Shipped search" },
          ],
          columns: 3,
        },
      ],
    },
  },
  {
    id: "quantum-design-system",
    title: "Quantum — EA's First Design System",
    company: "Electronic Arts",
    role: "UX Director → founding system architect",
    year: "2014–2020",
    outcome:
      "Conceived and built EA's first unified design language — with server-based design tokens years before the industry had a playbook for it",
    metrics: [
      { value: "5+", label: "Products Unified" },
      { value: "40+", label: "Designers Onboarded" },
    ],
    coverImage: "/images/quantum-design-system/header.png",
    coverAspectRatio: "4/3",
    accentColor: "#635BFF",
    caseStudy: {
      blocks: [
        {
          type: "lead",
          text: "In 2014, there was no industry consensus on 'design systems.' Material Design had just launched. Design tokens weren't a thing. At EA, every product was built from scratch — different colors, different components, different everything. I decided to fix that.",
        },
        {
          type: "role",
          items: [
            "Conceived the system's foundational principles, naming conventions, and conceptual framework — without prior industry examples to reference",
            "Architected a server-based token system that delivered platform-specific variants to web, native, and game engine clients",
            "Evangelized adoption across 5 product teams and onboarded 40+ designers over 3 years",
            "Managed a dedicated systems team of 3 designers and coordinated with 4 engineering partners",
          ],
        },
        {
          type: "section",
          heading: "An understandable mess — and nobody's job to fix.",
          body: [
            "EA had published hundreds of games across dozens of studios since 1982. Each studio had its own visual identity. When EA started building consumer-facing products — websites, apps, subscription services — that fragmentation came with them. No shared components, no shared colors, no shared anything.",
            "The biggest obstacle wasn't technical. It was organizational. No team owned the problem. Every product team was incentivized to ship fast, not to build shared infrastructure. I had to convince leadership that the investment would pay for itself — and then prove it.",
          ],
        },
        {
          type: "image",
          src: "/images/quantum-design-system/old-state.png",
          alt: "Fragmented state of EA's visual identity",
          caption: "EA's consumer products before Quantum — every product a one-off",
        },
        {
          type: "section",
          heading: "Every good system needs a metaphor.",
          subheading: "We named it Quantum and rooted it in particle physics.",
          body: [
            "Gaming's visual language tended toward stylized excess — dark gradients, glow effects, aggressive typography. It didn't scale. We needed something that felt premium and intelligent without being tied to any one genre or franchise.",
            "I found the metaphor in particle physics. Photons governed color and transitions. Fields governed spatial relationships. Radiation governed interactivity and focus states. The metaphor gave the team a shared vocabulary that was more intuitive than technical specifications — you could reason about 'photon intensity' faster than 'HSL shift at 60% lightness.'",
          ],
        },
        {
          type: "captioned-images",
          images: [
            { src: "/images/quantum-design-system/photons.png", alt: "Photons concept", caption: "Photons — color and transition" },
            { src: "/images/quantum-design-system/fields.png", alt: "Fields concept", caption: "Fields — spatial relationships" },
            { src: "/images/quantum-design-system/radiation.png", alt: "Radiation concept", caption: "Radiation — interactivity and focus" },
          ],
        },
        {
          type: "section",
          heading: "Tokens before they were tokens.",
          subheading: "A server-based system delivering platform-specific design decisions to code.",
          body: [
            "Before Figma tokens, before Style Dictionary, before the W3C Design Token spec — we built a server-based system that stored every design decision as a token and delivered platform-specific variants straight to code. Web got CSS custom properties. Native got Swift/Kotlin constants. The game engine client got UMG-compatible values.",
            "One source of truth. Change a color in the token server, and it propagates to 5 products within a deploy cycle. This was 2015 — we were solving problems the industry wouldn't name for another 5 years.",
            "The skepticism was real. 'Why do we need a server for colors?' I heard that question from engineering leads, product managers, and my own VP. The answer only became obvious after the third product adopted the system and a brand refresh that would have taken months was completed in a week.",
          ],
        },
        {
          type: "captioned-images",
          images: [
            { src: "/images/quantum-design-system/colors.png", alt: "Color system", caption: "Color System" },
            { src: "/images/quantum-design-system/tokens.png", alt: "Token architecture", caption: "Token Architecture" },
          ],
        },
        {
          type: "section",
          heading: "Components that could wear different clothes.",
          subheading: "Themeable at the token level, structurally consistent across products.",
          body: [
            "The component library — tiles, social, buttons, media players, loading animations — was designed so that any product could retheme it by swapping token values. Structure stayed locked. Aesthetics were flexible. This let EA.com, the Origin app, and EA Play share 80% of their component code while looking distinct.",
          ],
        },
        {
          type: "image-grid",
          images: [
            { src: "/images/quantum-design-system/tiles.png", alt: "Tile components" },
            { src: "/images/quantum-design-system/buttons-quantum.png", alt: "Button components" },
          ],
        },
        {
          type: "results",
          body: [
            "Quantum unified 5+ products under one visual language and component library. 40+ designers onboarded across 3 years. A brand refresh that was scoped at 3 months was completed in under 2 weeks thanks to the token architecture.",
            "The system was adopted by EA Connect — a cross-play identity service across all EA Sports titles. When that rolled out to console, PC, and mobile simultaneously, the token architecture handled the platform-specific rendering without any design intervention.",
            "What I underestimated: governance. Building the system was the easy part. Getting 5 product teams to actually use it correctly — and not fork it — required sustained evangelism, office hours, and a few uncomfortable conversations about autonomy vs. consistency. That experience shaped how I approach system adoption to this day.",
          ],
        },
        {
          type: "image-grid",
          label: "Shipped",
          images: [
            { src: "/images/quantum-design-system/ea-connect-1.png", alt: "EA Connect" },
            { src: "/images/quantum-design-system/shipped-final.png", alt: "Shipped final product" },
          ],
        },
      ],
    },
  },
  {
    id: "nook-hd",
    title: "Nook HD — B&N's Tablet Line",
    company: "Barnes & Noble",
    role: "Sr UX Designer",
    year: "2012–2014",
    outcome:
      "Designed the OS experience and core media apps for Nook HD — my first lesson in how design systems reveal a brand's soul",
    metrics: [
      { value: "4.5★", label: "User Rating" },
      { value: "3", label: "Core Apps Shipped" },
    ],
    coverImage: "/images/nook-hd/hero.jpg",
    coverAspectRatio: "4/3",
    accentColor: "#81B29A",
    caseStudy: {
      blocks: [
        {
          type: "lead",
          text: "This is the project that taught me what design systems are really for. Not consistency — identity. The Nook needed to feel like a bookstore in your hands, not a cheaper iPad.",
        },
        {
          type: "role",
          items: [
            "Owned design system definition and visual direction for all core media apps",
            "Collaborated with industrial design and hardware engineering on OS-level experience",
            "Presented creative direction to B&N's VP of Digital Products",
          ],
        },
        {
          type: "section",
          heading: "A bookstore should feel cozy. The Nook didn't.",
          subheading: "The previous UI was cold and academic — the opposite of B&N's brand.",
          body: [
            "Introduced organic shadows, stacked-and-splayed content layouts (reminiscent of coffee tables and book piles), and magazine-gloss shimmers. The goal: when you hold this device, it should remind you why you walk into a Barnes & Noble.",
            "The balance was delicate — enough skeuomorphic warmth to feel analog, enough restraint to let the books and magazines be the star.",
          ],
        },
        {
          type: "image-grid",
          label: "Moodboards",
          images: [
            { src: "/images/nook-hd/moodboard-1.png", alt: "Design moodboard" },
            { src: "/images/nook-hd/moodboard-2.jpg", alt: "Design moodboard" },
          ],
        },
        {
          type: "section",
          heading: "Testing killed our favorite ideas.",
          body: [
            "The first round pushed into rich paper textures, embossed elements, and deep shadows. We loved it. Users didn't — too much texture competed with the actual book covers and magazine layouts.",
            "We pulled back hard. The final direction kept just enough warmth to feel branded while letting content breathe. It was my first experience with the gap between what designers love and what users need.",
          ],
        },
        {
          type: "image-grid",
          label: "Early Explorations",
          images: [
            { src: "/images/nook-hd/round1-a.jpg", alt: "First round exploration" },
            { src: "/images/nook-hd/round1-b.jpg", alt: "First round exploration" },
          ],
        },
        {
          type: "captioned-images",
          images: [
            { src: "/images/nook-hd/final-1.jpg", alt: "Final direction", caption: "Final Direction" },
            { src: "/images/nook-hd/final-2.jpg", alt: "Final direction", caption: "Final Direction" },
            { src: "/images/nook-hd/final-3.jpg", alt: "Final direction", caption: "Final Direction" },
          ],
        },
        {
          type: "section",
          heading: "Three apps, one personality, different moods.",
          body: [
            "Books, Newsstand, and Video each shared the component system but had their own emotional tuning. Books was warm and quiet. Newsstand was glossy and vibrant. Video was dark and cinematic. The shared system made this possible without tripling the design effort.",
          ],
        },
        {
          type: "image-grid",
          columns: 3,
          images: [
            { src: "/images/nook-hd/app-design-1.jpg", alt: "App design" },
            { src: "/images/nook-hd/app-design-2.jpg", alt: "App design" },
            { src: "/images/nook-hd/app-design-3.jpg", alt: "App design" },
          ],
        },
        {
          type: "results",
          body: [
            "Nook HD and HD+ launched to strong reviews for their reading experience and app quality.",
            "Nook ultimately lost to Amazon, Apple, and Google. The product I helped design didn't survive the market. But the work changed my perspective on what product design is. A design system doesn't just create consistency — it reveals the true nature of a brand and gives it the means to scale. That lesson shaped everything I've done since.",
          ],
        },
      ],
    },
  },
];
