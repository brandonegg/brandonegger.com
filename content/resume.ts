// Everything the homepage renders lives in this file. Edit the entries below to
// change the site; the shapes are documented in content/types.ts.
//
// Entries are rendered in the order they appear. Values in [brackets] are
// placeholders taken from the design and still need real content.

import type {
  EducationEntry,
  ExperienceEntry,
  Profile,
  Project,
  Publication,
} from "./types";

export const profile: Profile = {
  bio: "Software engineer and CTO at SeatStock, based in Iowa City. I build fast, accessible web apps, and right now I'm changing how students buy and sell event tickets.",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/brandonegger",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/brandonegger",
      icon: "linkedin",
    },
    {
      label: "Email me@brandonegger.com",
      href: "mailto:me@brandonegger.com",
      icon: "email",
    },
  ],
};

export const experience: ExperienceEntry[] = [
  {
    org: "SeatStock",
    role: "Chief Technology Officer",
    years: "2023 – now",
    summary: "Built the platform from scratch and lead technical development.",
    stats: [
      { value: "5+", label: "campuses" },
      { value: "1,200+", label: "tickets traded" },
      { value: "1st", label: "GSEA Pitch" },
    ],
  },
  {
    org: "Collins Aerospace",
    role: "Software Engineer Intern",
    years: "2022 – 2023",
    summary: "Software engineering internship on aerospace systems.",
    stats: [
      { value: "1 yr", label: "on the team" },
      { value: "aero", label: "domain" },
      { value: "[add]", label: "[metric]" },
    ],
  },
  {
    org: "Kliemann Labs",
    role: "Research Assistant",
    years: "2021 – 2023",
    summary: "Neuroscience research with Python, Pandas and Matplotlib.",
    stats: [
      { value: "2 yrs", label: "in the lab" },
      { value: "neuro", label: "domain" },
      { value: "[add]", label: "[metric]" },
    ],
  },
  {
    org: "PeachPay",
    role: "Software Developer",
    years: "2021 – 2022",
    summary: "Worked on one-click checkout.",
    stats: [
      { value: "1 yr", label: "on the team" },
      { value: "checkout", label: "focus" },
      { value: "[add]", label: "[metric]" },
    ],
  },
];

export const education: EducationEntry[] = [
  {
    school: "University of Iowa",
    degree: "M.S., Computer Engineering",
    years: "[start] – [end]",
    note: "[Focus area, thesis or advisor, and any honors.]",
    tags: ["[course or area]", "[course or area]", "[course or area]"],
  },
];

export const projects: Project[] = [
  {
    name: "SeatStock",
    years: "2023 – now",
    description:
      "A student ticket exchange for buying and selling event tickets, live on 5+ campuses.",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    cover: {
      kind: "image",
      src: "/projects/seatstock.png",
      alt: "SeatStock cover",
    },
  },
  {
    name: "Iowa ATR",
    years: "2022",
    description:
      "An auditory training platform built for the University of Iowa.",
    stack: ["TypeScript", "React", "Web Audio API"],
    cover: { kind: "glyph", text: "▁▃▆█▆▃▁▂▅▇▅▂▁" },
  },
  {
    name: "Spotify Recs",
    years: "2021",
    description:
      "Song recommendations based on cosine similarity between tracks.",
    stack: ["TypeScript", "Spotify API"],
    cover: { kind: "glyph", text: "cos(θ) = 0.94" },
  },
  {
    name: "tempProbe",
    years: "2020",
    description: "A wireless ESP32 temperature monitor that sends SMS alerts.",
    stack: ["C++", "ESP32", "Flutter", "Twilio"],
    cover: { kind: "glyph", text: "23.4°C ▲" },
  },
];

export const publications: Publication[] = [
  {
    year: "2023",
    title: "[Paper title]",
    authors: "[Co-author], B. Egger, [Co-author], [Lab PI]",
    venue: "[Journal or conference], vol. [n]",
  },
  {
    year: "2022",
    title: "[Paper title]",
    authors: "B. Egger, [Co-author]",
    venue: "[Journal or conference]",
  },
];
