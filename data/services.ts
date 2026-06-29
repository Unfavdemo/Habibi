export type Service = {
  id: string;
  title: string;
  description: string;
};

export const servicesHeadline =
  "Creative strategy meets culture, community, and execution.";

export const services: Service[] = [
  {
    id: "creative-direction",
    title: "Creative Direction",
    description:
      "Creative concepts, storytelling, campaign ideation, and bringing bold ideas to life.",
  },
  {
    id: "event-project-management",
    title: "Event + Project Management",
    description:
      "End-to-end planning, coordination, logistics, and execution for events, experiences, and special projects.",
  },
  {
    id: "event-producing",
    title: "Event Producing",
    description:
      "Producing conferences, activations, panels, experiences, and community-centered moments from concept to completion.",
  },
  {
    id: "creative-brief-development",
    title: "Creative Brief Development",
    description:
      "Building clear, intentional creative briefs that align teams and move projects forward.",
  },
  {
    id: "cultural-programming",
    title: "Cultural Programming",
    description:
      "Designing meaningful experiences, conversations, and programming that connect communities and audiences.",
  },
];

/** Featured on home preview */
export const featuredServiceIds = [
  "creative-direction",
  "event-producing",
  "cultural-programming",
] as const;

export const speaking = {
  headline: "Speaking + Brand Partnerships",
  intro:
    "Interested in bringing Relly Habibi to your event, campaign, or platform?",
  offerings: [
    "Speaking Engagements",
    "Panel Discussions",
    "Workshop Facilitation",
    "Event Hosting + Moderation",
    "Sponsored Content + Brand Collaborations",
    "Media Features + Creative Partnerships",
  ],
  inquiryNote:
    "To inquire, please submit a booking request including your event details, audience, timeline, and goals.",
} as const;
