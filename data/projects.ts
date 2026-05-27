export type ProjectCategory =
  | "Development"
  | "Marketing"
  | "Creative"
  | "Media"
  | "Experiential"
  | "Community"
  | "Partnerships";

export type Project = {
  id: string;
  title: string;
  summary: string;
  categories: ProjectCategory[];
  /** Optional; collaborations often use typographic cards without a unique photo asset. */
  imageSrc?: string;
  href?: string;
};

/**
 * Collaborations reflected on Cherrell Woodley’s portfolio deck (Canva, Nov 2025)
 * and supporting bio copy — recreated here so the site stands alone without the PDF.
 */
export const projects: Project[] = [
  {
    id: "youtube-ai",
    title: "YouTube",
    summary:
      "Co-designing explorations in AI and avatar development for marginalized communities — innovation guided by equity and alignment with Cherrell’s mission.",
    categories: ["Development", "Creative"],
  },
  {
    id: "getty-met",
    title: "Getty Images — Met Gala",
    summary:
      "Editorial and cultural storytelling in a high-visibility luxury context, bringing rigor and narrative clarity to the moment.",
    categories: ["Creative", "Marketing"],
  },
  {
    id: "recording-academy",
    title: "The Recording Academy",
    summary:
      "Cultural programming, live experiences, and storytelling within the music industry ecosystem — where audiences expect craft and credibility.",
    categories: ["Creative", "Media"],
  },
  {
    id: "imex",
    title: "IMEX Group",
    summary:
      "Global trade-show and conference environments where logistics, sponsorship, and audience journey meet creative intention at scale.",
    categories: ["Experiential", "Marketing"],
  },
  {
    id: "possible",
    title: "POSSIBLE",
    summary:
      "Large-format industry gatherings where brand worlds collide on the floor — including partner presence from companies such as SAP, The Trade Desk, GitLab, and OpenAI in event backdrops Cherrell has supported.",
    categories: ["Marketing", "Experiential"],
  },
  {
    id: "miami-swim",
    title: "Miami Swim Week",
    summary:
      "Fashion and experiential production where visual identity, flow, and sensory design shape how audiences feel on site.",
    categories: ["Creative", "Experiential"],
  },
  {
    id: "dope-labs",
    title: "Dope Labs",
    summary:
      "Story-driven, culturally grounded media-adjacent collaborations that meet audiences where curiosity and community intersect.",
    categories: ["Media", "Creative"],
  },
  {
    id: "sistas-in-sales",
    title: "Sistas in Sales",
    summary:
      "Community-forward summits and galas where stage design, flow, and sponsor storytelling reinforce belonging and professional elevation.",
    categories: ["Community", "Experiential"],
  },
  {
    id: "canva",
    title: "Canva",
    summary:
      "Creative-industry moments with global creative platforms — blending brand presence, attendee experience, and photographic storytelling.",
    categories: ["Partnerships", "Marketing"],
  },
  {
    id: "hitouch",
    title: "HiTouch",
    summary:
      "Corporate and conference-adjacent programs where polished execution and stakeholder care keep complex calendars moving.",
    categories: ["Partnerships", "Experiential"],
  },
  {
    id: "visit-org",
    title: "Visit.org",
    summary:
      "Social-impact and experience-forward partnerships that connect purpose-led programming with real-world participation and narrative.",
    categories: ["Community", "Partnerships"],
  },
  {
    id: "ahk",
    title: "AHK (German American Chamber of Commerce)",
    summary:
      "Cross-border business and cultural programming where clarity, hospitality, and logistics support diverse professional audiences.",
    categories: ["Partnerships", "Marketing"],
  },
  {
    id: "radio-one",
    title: "Radio One",
    summary:
      "Legacy media and live-adjacent storytelling environments where culture, audience trust, and production discipline matter.",
    categories: ["Media", "Marketing"],
  },
  {
    id: "city-of-philadelphia",
    title: "City of Philadelphia",
    summary:
      "Civic-adjacent collaboration alongside local recognition through the Illuminate the Arts Grant — creativity anchored in Philadelphia roots.",
    categories: ["Community", "Partnerships"],
  },
  {
    id: "ndsu",
    title: "North Dakota State University (NDSU)",
    summary:
      "Higher-education and institutional contexts where programming, logistics, and audience experience support academic and public gatherings.",
    categories: ["Partnerships", "Experiential"],
  },
  {
    id: "black-girl-art-show",
    title: "A Spectacular Black Girl Art Show",
    summary:
      "Art-forward, identity-centered cultural platforms where curation, flow, and production honor Black women artists and audiences.",
    categories: ["Creative", "Community"],
  },
  {
    id: "fader",
    title: "FADER",
    summary:
      "Music-and-culture media environments where editorial credibility meets live energy and brand-sensitive production.",
    categories: ["Media", "Creative"],
  },
  {
    id: "parsons",
    title: "Parsons School of Fashion",
    summary:
      "Fashion- and design-education ecosystems where presentation rigor, student experience, and institutional storytelling converge.",
    categories: ["Creative", "Partnerships"],
  },
];
