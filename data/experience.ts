export interface Experience {
  company: string;
  dateRange: string;
  roles: {
    title: string;
    period?: string;
  }[];
  keyProjects: string[];
  scope: string[];
}

export const experiences: Experience[] = [
  {
    company: "Consultant",
    dateRange: "Mar 2025 – Present",
    roles: [
      {
        title: "Designer & Advisor",
      },
    ],
    keyProjects: [
      "Startup design strategy and product-market fit advisory",
      "AI product design for EdTech platforms",
      "Design system architecture consulting",
    ],
    scope: [
      "Product Strategy",
      "Design Leadership",
      "AI/ML Products",
      "Advisory",
    ],
  },
  {
    company: "Epic Games",
    dateRange: "May 2020 – Mar 2025",
    roles: [
      {
        title: "Group Director, UXUI & Brand Design",
        period: "May 2020 – Mar 2025",
      },
    ],
    keyProjects: [
      "Fortnite Adaptive UI: Cut UI dev speed by 50%+ with modular component system serving 700M+ players",
      "Social Systems: Built cross-platform social SDK powering 700M-account social graph",
      "Reboot Rally: Most successful earned media campaign in Fortnite history — millions of returning players",
      "Epic Games Store, ArtStation, Fab.com, EOS SDK design oversight",
    ],
    scope: [
      "Product Strategy",
      "UX Research",
      "UI Design",
      "Design Systems",
      "Brand Design",
      "Team Leadership",
    ],
  },
  {
    company: "Electronic Arts",
    dateRange: "Apr 2014 – May 2020",
    roles: [
      {
        title: "UX Director",
        period: "May 2016 – May 2020",
      },
      {
        title: "UX Lead",
        period: "Apr 2014 – May 2016",
      },
    ],
    keyProjects: [
      "EA App: Re-envisioned PC app for subscription-focused cross-platform play — secured outsized cross-studio investment",
      "Quantum Design System: Unified EA's web, PC app, and subscription services under one token-based design system",
      "EA Play / EA Access: Subscription service UX from launch through scale",
      "EA Connect: Cross-play identity and commerce service across all EA Sports titles",
    ],
    scope: [
      "Product Strategy",
      "UX Research",
      "UI Design",
      "Design Systems",
      "Cross-Platform",
      "Subscriptions",
    ],
  },
  {
    company: "Barnes & Noble",
    dateRange: "Mar 2012 – Mar 2014",
    roles: [
      {
        title: "Sr UX Designer",
      },
    ],
    keyProjects: [
      "Nook HD/HD+: OS design system and core media apps — strong reviews for reading experience",
      "Multi-product design system enabling consistent UX across device family",
    ],
    scope: [
      "UI Design",
      "Design Systems",
      "Mobile/Tablet",
      "Consumer Electronics",
    ],
  },
  {
    company: "Amazon",
    dateRange: "Aug 2010 – Mar 2012",
    roles: [
      {
        title: "Sr UX Designer",
      },
    ],
    keyProjects: [
      "Amazon Instant Video: Search and discovery UX for streaming platform",
      "Video storefront optimization and conversion improvements",
    ],
    scope: [
      "UX Design",
      "Search & Discovery",
      "E-Commerce",
      "Streaming",
    ],
  },
  {
    company: "Early Career",
    dateRange: "May 2006 – Aug 2010",
    roles: [
      {
        title: "Designer & Art Director",
      },
    ],
    keyProjects: [
      "LACMTA: Transit system wayfinding and digital signage (LA)",
      "Agency and freelance work across branding, web, and interactive",
    ],
    scope: [
      "Visual Design",
      "Art Direction",
      "Branding",
      "Wayfinding",
    ],
  },
];

export interface Education {
  school: string;
  degree: string;
  detail: string;
}

export const education: Education[] = [
  {
    school: "Stanford University",
    degree: "UI/UX Design for AI Applications",
    detail: "2025",
  },
  {
    school: "Stanford University",
    degree: "Product Management Certificate",
    detail: "2021",
  },
  {
    school: "Otis College of Art & Design",
    degree: "BA, Communication Arts",
    detail: "2006 • Los Angeles",
  },
];
