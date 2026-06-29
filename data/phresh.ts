/** PHRESH UNDER PRESSURE — platform, content, and community. */

export const phresh = {
  brandName: "PHRESH UNDER PRESSURE",
  trademark: "™",
  shortName: "Phresh. UP!",
  mantra: "Stay PHRESH",
  tagline: "Join the community. Partner with us. Build with us.",
  rolesLine: "Freelancer Community + Culture Platform",
  youtube: "https://www.youtube.com/channel/UCvURhlLFvoziforBrGCWnSg",
  instagram: "https://www.instagram.com/phreshunderpressure/",
  intro: [
    `Founded by Relly Habibi, Phresh Under Pressure exists to support underrepresented creatives and freelancers navigating life, work, and building under pressure.`,
    `Through community, storytelling, cultural experiences, and opportunities, Phresh creates space for creatives to connect, grow, and stay PHRESH while doing it.`,
  ],
  manifesto: [
    `Phresh Under Pressure was created for the creatives who kept creating anyway.`,
    `The ones balancing a 9–5 while building something after hours. The freelancers who took the leap and figured it out in real time. The independent artists, producers, designers, photographers, makers, storytellers, and visionaries carrying big ideas through uncertainty.`,
    `We know pressure.`,
    `And we know that pressure doesn't always look dramatic. Sometimes it looks like rewriting your portfolio at midnight. Sending one more invoice. Creating between responsibilities. Choosing yourself after years of choosing stability. Being the only one in the room. Building while Black. Building while Brown. Building without a blueprint.`,
    `Phresh Under Pressure (Phresh. UP!) is a creative community, cultural platform, and lifestyle brand rooted in the belief that creativity deserves visibility, resources, and room to breathe.`,
  ],
} as const;

export type ContentHighlight = {
  title: string;
  description: string;
  tag: string;
  href?: string;
};

export const contentHighlights: ContentHighlight[] = [
  {
    title: "Freelancer stories",
    description:
      "Real journeys from creatives building under pressure — the wins, the lessons, the receipts.",
    tag: "YouTube",
    href: "https://www.youtube.com/channel/UCvURhlLFvoziforBrGCWnSg",
  },
  {
    title: "Business & invoices",
    description:
      "Practical tools for getting paid, setting rates, and running your creative business with confidence.",
    tag: "Resources",
  },
  {
    title: "Culture drops",
    description:
      "Daily inspiration, community highlights, and cultural moments on @phreshunderpressure.",
    tag: "Instagram",
    href: "https://www.instagram.com/phreshunderpressure/",
  },
  {
    title: "Industry insider",
    description:
      "A decade of production, events, and cultural work — knowledge shared so you don't have to figure it out alone.",
    tag: "Strategy",
  },
];
