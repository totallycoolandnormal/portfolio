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

export type ContentBlock =
  | LeadBlock
  | SectionBlock
  | ImageBlock
  | ImageGridBlock
  | CaptionedImagesBlock
  | ResultsBlock;

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
  caseStudy: {
    blocks: ContentBlock[];
  };
}

// --- Projects ---

export const projects: Project[] = [
  {
    id: "fortnite-ui",
    title: "Ecosystem Adaptive UI",
    company: "Epic Games",
    role: "Group Director, UXUI & Brand Design",
    year: "2020–2025",
    outcome:
      "A modern, modular UI kit for the metaverse age — with significantly less memory cost",
    metrics: [
      { value: "50%", label: "Faster UI Dev" },
      { value: "700M+", label: "Players Served" },
    ],
    coverImage: "/images/fortnite-ui/hero.png",
    coverAspectRatio: "16/9",
    caseStudy: {
      blocks: [
        {
          type: "lead",
          text: "I led the conversation on component restructuring and creative direction on the UI — a modern, modular UI kit for the metaverse age with significantly less memory cost.",
        },
        {
          type: "section",
          heading: "A live-service game is not for the faint of heart.",
          body: [
            "Fortnite launched in 2017 and hasn't let up on the gas since: adding new modes, infinite partnerships, a LEGO game, a proprietary engine for creator-made content, and much more.",
            "The downside: tech and design debt were piling up, and continually punted to be dealt with later.",
            "Five years in, Fortnite's UI was visually consistent (albeit dated), but wildly inefficient to maintain: every button was a standalone instance. We also knew that by the end of 2023 we'd have several different UI paradigms to support, and needed to overhaul the system both aesthetically and for scale.",
          ],
        },
        {
          type: "image-grid",
          label: "Before and After",
          images: [
            {
              src: "/images/fortnite-ui/old-lobby.png",
              alt: "Fortnite lobby UI circa 2017",
              caption: "2017",
            },
            {
              src: "/images/fortnite-ui/shipped-homebar.png",
              alt: "Fortnite lobby UI after redesign",
              caption: "2024",
            },
          ],
        },
        {
          type: "section",
          heading: "First things first.",
          subheading:
            "Aligning with engineering and exec leadership.",
          body: [
            "Working with Fortnite's UI kit in UMG (Unreal Motion Graphics UI Designer) was increasingly problematic, even for a team sitting next to the team making Unreal Engine. Everything was bespoke and required significant learned domain experience.",
            "While consolidating a component library was perpetually on the roadmap, this was consistently deprioritized in favor of anything required to ship the next season. While the problem statement and goals were well understood, we needed to arrive at an approach. Quickly.",
            "The actual gameplay UI was too baked into the logic of the game to be addressable, but that was also a red herring. The game's 'front end' — lobby, discovery, social, notifications, menus — was far more important to delivering the promise of a multi-product ecosystem experience.",
          ],
        },
        {
          type: "image-grid",
          label: "The problem. And the solution.",
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
          heading: "Setting the bar high.",
          subheading:
            "Defining the visual language for one of the world's biggest interactive entertainment platforms.",
          body: [
            "Fortnite had been rapidly evolving into something more than a game, more akin to your PS5 platform experience than to a Call of Duty game. While we were still designing to deliver personality and premium-polished interactions, we also needed it to be easily scannable and promote lasting twitch-level memorization that would translate across a growing catalog of content.",
            "Further, these changes needed to feel like an evolution to Fortnite's core audience as to not suddenly feel like it had lost its soul to corporate expansion — respecting that love for Fortnite was critical to our success.",
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
          heading: "Where we're going, we don't need roads.",
          subheading: "Codifying adaptive UI.",
          body: [
            "As we were defining these visual systems against the live game, we were also preparing them for the changing IA, optimizing for an ecosystem that would be very aesthetically diverse but anchored by a common journey and foundational UX.",
            "The ecosystem UI may change colors and tone based on content, but the UX would remain consistent. Creators would have access to the white label UI kit to expedite completely customizing their own in-game experience.",
          ],
        },
        {
          type: "captioned-images",
          images: [
            {
              src: "/images/fortnite-ui/ia-overview.png",
              alt: "Information architecture overview",
              caption: "The core IA provides structure to every player's experience",
            },
            {
              src: "/images/fortnite-ui/framework-hierarchy.png",
              alt: "Component framework hierarchy",
              caption: "Reinforced with consistent foundational UX",
            },
          ],
        },
        {
          type: "results",
          body: [
            "Fortnite successfully launched several new tentpole game modes and a new discovery experience that supported infinitely scalable content, powered by this adaptive UI system and a significantly reduced stack of components.",
            "The memory savings were imperative given the new content scaling, and speed of UI development was more than cut in half. We built and maintained robust documentation to provide creators along with the new UI kit, allowing for faster development and more UX consistency across new games published to the ecosystem.",
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
    title: "Social Systems",
    company: "Epic Games",
    role: "Group Director, UXUI & Brand Design",
    year: "2020–2025",
    outcome:
      "Built the cross-platform social SDK powering Fortnite's 700M-account social graph",
    metrics: [
      { value: "700M", label: "Social Graph" },
      { value: "3+", label: "Avg New Connections" },
    ],
    coverImage: "/images/social-systems/header.png",
    coverAspectRatio: "4/3",
    caseStudy: {
      blocks: [
        {
          type: "lead",
          text: "Beyond cleanup, Epic had broader ambitions: build a social SDK for the EOS platform that any game developer could use, connecting players across an interconnected ecosystem.",
        },
        {
          type: "section",
          heading: "The mess we inherited.",
          subheading: "Fortnite's social overlay needed more than a fresh coat of paint.",
          body: [
            "Fortnite's social overlay took up too much screen real estate, had accidental traversal issues in UXR tests, wasn't optimized for controller input, and was generally unattractive.",
            "We redesigned the social panel for a tidier, more intuitive, input-optimized UX — but that was just the starting point. The real ambition was much bigger.",
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
          heading: "Reboot Rally.",
          subheading: "Bringing lapsed players back through their friends.",
          body: [
            "Built Reboot Rally — a program rewarding players with unique cosmetics for inviting lapsed players back. The concept was simple: your friends are your best re-engagement channel.",
            "Launched Social Tags for player-driven matchmaking, letting players signal their play style and preferences to find better matches with compatible strangers.",
          ],
        },
        {
          type: "image-grid",
          images: [
            {
              src: "/images/social-systems/reboot-rally-1.png",
              alt: "Reboot Rally UI",
              caption: "Reboot Rally invite flow",
            },
            {
              src: "/images/social-systems/reboot-rally-2.png",
              alt: "Reboot Rally rewards",
              caption: "Exclusive rewards for bringing friends back",
            },
          ],
        },
        {
          type: "section",
          heading: "Social, wherever you are.",
          subheading: "Designing a cross-platform social SDK, starting mobile-first.",
          body: [
            "Then we shifted to the bigger picture: designing a cross-platform social SDK vision, starting mobile-first, enabling parties, voice, text, and rich presence across any device or game.",
            "The SDK would extend Fortnite's social graph to any developer that integrates it, letting smaller studios reach audiences in ways never before possible.",
          ],
        },
        {
          type: "captioned-images",
          images: [
            { src: "/images/social-systems/mobile-first.png", alt: "Mobile-first social design", caption: "Mobile-first approach to social connectivity" },
            { src: "/images/social-systems/desktop-voice.png", alt: "Desktop voice chat", caption: "Rich voice and presence on desktop" },
            { src: "/images/social-systems/chat.png", alt: "Cross-platform chat", caption: "Unified messaging across platforms" },
          ],
        },
        {
          type: "image",
          src: "/images/social-systems/cross-platform.png",
          alt: "Cross-platform social SDK vision",
          caption: "The SDK connecting players across the entire ecosystem",
        },
        {
          type: "results",
          body: [
            "Reboot Rally brought back millions of players over the years, with returning players making an average of 3 new social connections — also the most successful earned media campaign in Fortnite history.",
            "The social SDK now extends Fortnite's nearly 700M-account social graph to any developer that integrates it, letting smaller studios reach audiences in ways never before possible.",
          ],
        },
      ],
    },
  },
  {
    id: "ea-pc-app",
    title: "The Player Network",
    company: "Electronic Arts",
    role: "UX Director",
    year: "2016–2020",
    outcome:
      "Re-envisioned EA's PC app for subscription-focused cross-platform play",
    metrics: [
      { value: "10M+", label: "Subscribers" },
      { value: "4x", label: "Content Scale" },
    ],
    coverImage: "/images/ea-pc-app/header.png",
    coverAspectRatio: "4/3",
    caseStudy: {
      blocks: [
        {
          type: "lead",
          text: "EA had a successful PC direct-to-consumer business in the Origin app and had just shipped a subscription service. With net bookings consistently gaining on PC, leadership wanted to invest in a re-envisioned product.",
        },
        {
          type: "section",
          heading: "Pitching the dream.",
          subheading: "Securing outsized investment for a complete re-envisioning.",
          body: [
            "The Origin team was small and would need to maintain the current product for years during development, requiring restructuring and cross-studio buy-in.",
            "After initial research and concepting, built a pitch trailer to present at EA's biannual show-and-tell and secure outsized investment. The pitch needed to sell not just a better app, but a fundamentally different player experience.",
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
          heading: "Built on principles.",
          subheading: "A clear UI architecture with regions for navigation, utilities, and content.",
          body: [
            "Created a clear UI architecture with regions for core navigation, utilities, and content, plus a multi-layered system for dynamic content with seamless transitions.",
            "Established adaptability rules for screen-size responsiveness — the app needed to work beautifully whether windowed small or taking over a 4K display.",
          ],
        },
        {
          type: "captioned-images",
          images: [
            { src: "/images/ea-pc-app/structure-1.png", alt: "App structure diagram", caption: "App Structure" },
            { src: "/images/ea-pc-app/structure-2.png", alt: "Navigation model", caption: "Navigation Model" },
            { src: "/images/ea-pc-app/user-journeys.jpg", alt: "User journey maps", caption: "User Journeys" },
          ],
        },
        {
          type: "section",
          heading: "Prototype, test, repeat.",
          subheading: "Iteration cycles across every core surface.",
          body: [
            "Ran prototype-test-repeat cycles across Home, Discover, Search, Product Pages, and Notifications. Each surface went through multiple rounds of user testing with real players.",
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
            "Secured funding and cross-studio support. Shipped a new subscriptions-optimized app that could scale for years to come, built on top of a multi-product design system.",
            "Despite some stickier features not making launch, the foundation delivered on the promise of a modern, subscription-first PC gaming experience.",
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
    title: "Quantum Design System",
    company: "Electronic Arts",
    role: "UX Director",
    year: "2014–2020",
    outcome:
      "Unified EA's web presence, PC app, and subscription services under one design system",
    metrics: [
      { value: "5+", label: "Products Unified" },
      { value: "100+", label: "Components" },
    ],
    coverImage: "/images/quantum-design-system/header.png",
    coverAspectRatio: "4/3",
    caseStudy: {
      blocks: [
        {
          type: "lead",
          text: "Founded in 1982, EA had published hundreds of games across shifting studio organizations. Each studio had its own visual identity, and the corporate identity was either an afterthought or a supporting role.",
        },
        {
          type: "section",
          heading: "An understandable mess.",
          subheading: "When EA began creating direct-to-consumer products, the lack of identity persisted until it became unmanageable.",
          body: [
            "When EA began creating marketing sites and direct-to-consumer products, this lack of identity persisted until it became unmanageable. There was no shared visual language, no component library, no design tokens. Every product was built from scratch.",
          ],
        },
        {
          type: "image",
          src: "/images/quantum-design-system/old-state.png",
          alt: "Fragmented state of EA's visual identity",
          caption: "The fragmented state of EA's visual identity across products",
        },
        {
          type: "section",
          heading: "Every metamorphosis needs a metaphor.",
          subheading: "Finding inspiration in particle physics.",
          body: [
            "Found inspiration outside gaming zeitgeist — which tended to be overly stylized and difficult to scale. Developed a visual language derived from particle physics: photons for color and transitions, fields for spatial relationships, radiation for interactivity and focus.",
          ],
        },
        {
          type: "captioned-images",
          images: [
            { src: "/images/quantum-design-system/photons.png", alt: "Photons concept", caption: "Photons — color and transitions" },
            { src: "/images/quantum-design-system/fields.png", alt: "Fields concept", caption: "Fields — spatial relationships" },
            { src: "/images/quantum-design-system/radiation.png", alt: "Radiation concept", caption: "Radiation — interactivity and focus" },
          ],
        },
        {
          type: "section",
          heading: "Design tokens, before they were cool.",
          subheading: "Codifying all design decisions as tokens in a server-based system.",
          body: [
            "Codified all design decisions as tokens stored in a server-based system that passed platform-specific variants straight into code. This meant a single source of truth for color, spacing, typography, and motion — consumed differently by web, native, and game engine clients.",
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
          heading: "Building the component library.",
          subheading: "Tiles, social, buttons, media, and animations.",
          body: [
            "Built out components for tiles, social, buttons, media, and animations. Each component was designed to be themeable at the token level while maintaining structural consistency across products.",
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
            "Quantum was successfully rolled out across the revised PC app and next-gen subscription apps. The visual identity became the basis for all supporting brand design.",
            "Applied to EA Connect, a cross-play service implemented on all EA Sports titles across supported platforms. Thoroughly documented for multi-product use.",
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
    title: "Nook HD System & Apps",
    company: "Barnes & Noble",
    role: "Sr UX Designer",
    year: "2012–2014",
    outcome:
      "Designed the OS, design system, and core media apps for Nook's tablet line",
    metrics: [
      { value: "4.5★", label: "User Rating" },
      { value: "3", label: "Core Apps Shipped" },
    ],
    coverImage: "/images/nook-hd/hero.jpg",
    coverAspectRatio: "4/3",
    caseStudy: {
      blocks: [
        {
          type: "lead",
          text: "Barnes & Noble was overhauling its Nook line of devices for a new launch. The previous designs felt cold and academic — not at all reflective of B&N's brand pillar of 'cozy.'",
        },
        {
          type: "section",
          heading: "Making it cozy.",
          subheading: "The UI needed to remind readers they were holding a book from a bookstore, not a lifeless digital facsimile.",
          body: [
            "Led design systems and look & feel of the core media apps. Brought organic shadows, stacks and splays for grouped content reminiscent of coffee tables, book spines, and magazine gloss shimmers.",
            "Found the balance between analogy and function — slightly tactile, clean, with contemporary brightness on primary CTAs cutting through the textured warmth.",
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
          heading: "Finding the balance.",
          subheading: "Working within the constraints of early touch interaction.",
          body: [
            "The first round of explorations pushed into highly textured directions — rich paper textures, embossed elements, deep shadows. But user testing revealed that too much texture competed with the content itself.",
            "We pulled back to find the sweet spot: enough warmth to feel like B&N, enough restraint to let the books and magazines be the star.",
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
          heading: "The core media apps.",
          subheading: "Designing the home and discovery experiences.",
          body: [
            "Designed the home and discovery experiences across the core media applications — Books, Newsstand, and Video. Each app shared the design system but had its own personality tuned to the content type.",
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
            "Launched the Nook HD and Nook HD+ to strong reviews for their reading experience.",
            "Despite Nook's ultimate struggles against Amazon, Apple, and Google in the digital content marketplace, the multi-product systems work changed my perspective on what product design is and its value to a business — revealing the true nature of a brand and enabling it to scale.",
          ],
        },
      ],
    },
  },
];
