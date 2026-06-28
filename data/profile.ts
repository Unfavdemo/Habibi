/** PHRESH UNDER PRESSURE — brand, mission, and contact. */

export const profile = {
  brandName: "PHRESH UNDER PRESSURE",
  brandShort: "PUP",
  trademark: "™",
  tagline: "Building Under Pressure, 1 invoice & 1 vision at a time.",
  mantra: "Stay PHRESH",
  rolesLine:
    "Freelancer Community + Cultural Platform for Underrepresented Creatives",
  founder: "Cherrell Woodley",
  founderAlias: "Relly Habibi",
  youtube: "https://www.youtube.com/channel/UCvURhlLFvoziforBrGCWnSg",
  instagram: "https://www.instagram.com/phreshunderpressure/",
  linkedin: "https://www.linkedin.com/in/cherrellwoodley/",
  email: "RellyHabibi@outlook.com",
  phoneDisplay: "(215) 445-9128",
  phoneTel: "+12154459128",
  heroPortraitImageUrl:
    "https://lh3.googleusercontent.com/d/182_BrFOaPFhUqpWO-4lj1VwTuAb148Zq=w1600",
  aboutParagraphs: [
    `PHRESH UNDER PRESSURE is a freelancer community and cultural platform built for creatives who've been told to shrink, settle, or stay invisible. We exist at the intersection of hustle and heritage — where underrepresented voices turn pressure into power, one invoice and one vision at a time.`,
    `Founded by Cherrell Woodley — known to the culture as Relly Habibi — this platform grew from a lived truth: the freelance journey for Black women and underrepresented creatives is rarely a straight line. It's gatekeeping, bias, invisible ceilings, and the quiet decision to build your own lane anyway. PHRESH is that lane — amplified.`,
    `With over a decade in event production, creative direction, and cultural storytelling across YouTube, the Recording Academy, IMEX, Miami Swim Week, Getty Images for the Met Gala, and beyond, Relly brings institutional credibility and community heart to everything PUP touches. This isn't theory. It's been built under real pressure.`,
    `Through content, community, and cultural programming, PHRESH UNDER PRESSURE equips freelancers with the tools, visibility, and belonging they deserve. We celebrate the grind without glorifying the burnout. We make space for stories that mainstream platforms overlook. We stay PHRESH — because the culture demands it.`,
  ],
  serviceGroups: [
    {
      title: "Freelancer community",
      items: [
        "Peer support & accountability circles",
        "Invoice-ready resources & business tools",
        "Visibility for underrepresented talent",
        "Real talk on rates, contracts & boundaries",
      ],
    },
    {
      title: "Cultural platform",
      items: [
        "YouTube content — stories, skills & strategy",
        "Instagram — daily culture & community drops",
        "Events, activations & creative showcases",
        "Partnerships that center equity & access",
      ],
    },
    {
      title: "Creative services",
      items: [
        "Event production & experiential design",
        "Creative direction & cultural amplification",
        "Brand storytelling & visual aesthetics",
        "Consulting for mission-driven organizations",
      ],
    },
  ],
} as const;

export type PlatformPillar = {
  id: string;
  title: string;
  summary: string;
  icon: "community" | "content" | "culture" | "commerce" | "collab" | "vision";
};

export const platformPillars: PlatformPillar[] = [
  {
    id: "community",
    title: "The Community",
    summary:
      "A home for freelancers who build under pressure — sharing wins, resources, and real strategies for sustainable creative careers.",
    icon: "community",
  },
  {
    id: "content",
    title: "The Content",
    summary:
      "YouTube and Instagram drops that educate, inspire, and keep the culture informed — from invoice tips to industry insider knowledge.",
    icon: "content",
  },
  {
    id: "culture",
    title: "The Culture",
    summary:
      "Programming and activations that celebrate underrepresented creatives — where heritage meets hustle and stories get the spotlight they deserve.",
    icon: "culture",
  },
  {
    id: "commerce",
    title: "The Commerce",
    summary:
      "Building sustainable income streams — one invoice at a time. Business tools, rate transparency, and the mindset to get paid what you're worth.",
    icon: "commerce",
  },
  {
    id: "collab",
    title: "The Collabs",
    summary:
      "Partnerships across media, fashion, tech, and civic spaces — proof that underrepresented creatives belong in every room.",
    icon: "collab",
  },
  {
    id: "vision",
    title: "The Vision",
    summary:
      "One vision at a time — amplifying voices, building lanes, and creating the future of freelance culture on our own terms.",
    icon: "vision",
  },
];
