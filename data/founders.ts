import { profile } from "@/data/profile";

export type Founder = {
  id: string;
  name: string;
  alias: string;
  title: string;
  tagline: string;
  imageUrl: string;
  bio: readonly string[];
  highlights: readonly string[];
  roles: readonly string[];
};

export const founders: Founder[] = [
  {
    id: "cherrell-woodley",
    name: profile.founder,
    alias: profile.founderAlias,
    title: "Founder & Creative Director",
    tagline:
      "Producer, cultural amplification specialist, and the force behind PHRESH UNDER PRESSURE.",
    imageUrl: profile.heroPortraitImageUrl,
    roles: [
      "Producer",
      "Cultural amplification specialist",
      "Event project manager",
      "Multi-hyphenate creative",
    ],
    bio: [
      `Cherrell Woodley — known to the culture as Relly Habibi — is the founder of PHRESH UNDER PRESSURE. The name tells her story before she ever speaks a word. "Relly" came from childhood, a soft abbreviation of Cherrell, and "Habibi" found her at 12, when she embraced The Nation of Islam and later grew within the community. It means my love — the same meaning carried in her given name. Her identity was shaped by faith, culture, and the people who poured into her, grounding her in love, authenticity, and purpose.`,
      `Professionally, Cherrell is a multidisciplinary creative, producer, and cultural amplification specialist with over a decade of experience in event production, creative direction, and storytelling across the arts, media, and corporate landscapes. She's spent her career amplifying underrepresented voices, building immersive experiences, and using creativity as a vehicle for truth-telling, representation, and belonging.`,
      `Her journey into freelancing mirrors the very stories PHRESH helps uplift. Like many Black women navigating professional spaces, she experienced bias, gatekeeping, and the invisible ceilings of corporate hiring processes. Instead of shrinking, she chose to build her own lane — pouring her talent into storytelling, production, and creative leadership that centers people like her. That lived experience is the foundation of everything PUP stands for.`,
      `PHRESH UNDER PRESSURE was born from that truth: creatives who build under pressure deserve a platform, a community, and the tools to thrive — not just survive. Cherrell brings institutional credibility and community heart to the movement, with collaborations spanning YouTube, the Recording Academy, IMEX, Miami Swim Week, Getty Images for the Met Gala, and beyond.`,
    ],
    highlights: [
      "City of Philadelphia Illuminate the Arts Grant recipient",
      "Philadelphia Cultural Alliance Grant recipient",
      "10+ years across corporate conferences, trade shows, and cultural events",
      "Co-designer with YouTube on AI and avatar development for marginalized communities",
      "Collaborations with the Recording Academy, IMEX, POSSIBLE, Miami Swim Week, and more",
    ],
  },
];

export const foundersPage = {
  eyebrow: "Founders",
  headline: "Built by someone who's been under the pressure",
  subheadline:
    "PHRESH UNDER PRESSURE didn't come from a boardroom pitch. It came from a decade of building lanes, breaking ceilings, and deciding the culture deserved better.",
} as const;
