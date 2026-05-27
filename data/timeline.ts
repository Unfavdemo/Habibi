export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  description: string;
};

/** Narrative beats from Cherrell’s path — themes called out on her deck and bio. */
export const timeline: TimelineEntry[] = [
  {
    id: "lane",
    period: "Today",
    title: "Independent storytelling & production",
    description:
      "Building a lane that centers underrepresented voices through immersive experiences, creative leadership, and cultural amplification.",
  },
  {
    id: "grants",
    period: "Recent recognition",
    title: "Philadelphia arts & culture grants",
    description:
      "City of Philadelphia Illuminate the Arts Grant and Philadelphia Cultural Alliance Grant for creativity, community, and cultural impact.",
  },
  {
    id: "ecosystems",
    period: "Across industries",
    title: "Media, fashion, civic & tech-adjacent worlds",
    description:
      "From legacy outlets like Radio One and FADER to fashion education at Parsons, swim-week runways, and civic-adjacent work with the City of Philadelphia — one through-line: culture-forward production with care for the people in the room.",
  },
  {
    id: "global-conv",
    period: "Conferences & summits",
    title: "Trade floors to galas",
    description:
      "IMEX, POSSIBLE, and corporate-chamber programming (including AHK) sit alongside community summits like Sistas in Sales — balancing logistics, sponsors, talent, and story.",
  },
  {
    id: "decade",
    period: "10+ years",
    title: "Corporate, media & community",
    description:
      "A decade-plus across conferences, trade shows, editorial productions, cultural events, and community-centered activations — partnerships at the intersection of culture and innovation.",
  },
];
