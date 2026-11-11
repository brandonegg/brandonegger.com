// Everything the homepage renders lives in this file. Edit the entries below to
// change the site; the shapes are documented in content/types.ts.
//
// Entries are rendered in the order they appear. Values in [brackets] are
// placeholders taken from the design and still need real content.

import type {
  EducationEntry,
  ExperienceEntry,
  Profile,
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
      href: "https://www.linkedin.com/in/brandon-egger",
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
    org: "Source Allies",
    href: "https://www.sourceallies.com/",
    role: "Software Consultant",
    years: "2026 – now",
    summary:
      "Supporting feature development on a high volume enterprise Java platform.",
    stats: [],
  },
  {
    org: "SeatStock",
    href: "https://www.seatstock.com/",
    role: "Chief Technology Officer",
    years: "2023 – 2026",
    summary:
      "Co-Founded a platform for students to buy and sell tickets. Lead technical development, product design, and infrastructure scale out.",
    stats: [
      { value: "25+", label: "campuses" },
      { value: "75K+", label: "tickets traded" },
      { value: "100K+", label: "students" },
      { value: "$2.5 mil", label: "pre-seed valuation" },
    ],
  },
  {
    org: "Collins Aerospace",
    href: "https://www.rtx.com/collinsaerospace",
    role: "Software Engineer Intern",
    years: "2022 – 2023",
    summary:
      "Developed software solutions in the aerospace industry, working on systems requiring high reliability and performance.",
    stats: [],
  },
  {
    org: "Kliemann Labs",
    href: "https://kliemann.lab.uiowa.edu/",
    role: "Research Assistant",
    years: "2021 – 2023",
    summary: "Neuroscience research with Python, Pandas and Matplotlib.",
    stats: [
      { value: "1 paper", label: "co-authored" },
      { value: "neuro", label: "domain" },
      { value: "[add]", label: "[metric]" },
    ],
  },
  {
    org: "PeachPay",
    href: "https://peachpay.app/",
    role: "Software Developer",
    years: "2021 – 2022",
    summary:
      "Wroked on the one-click checkout plugin for WordPress WooCommerce, improving e-commerce conversion rates.",
    stats: [
      { value: "+10%", label: "GMV growth" },
      { value: "1k+", label: "merchants" },
      { value: "10k+", label: "daily transactions" },
    ],
  },
];

export const education: EducationEntry[] = [
  {
    school: "University of Iowa",
    degree: "M.S., Computer Engineering",
    years: "2024 – 2025",
    note: "Focus in Electrical and Computer Engineering with a minor in Economics.",
    stats: [
      {
        value: "4.0",
        label: "GPA",
      },
    ],
  },
];

export const publications: Publication[] = [
  {
    year: "2025",
    title:
      "Electronic School Medication Administration Record (ESMAR) application development",
    authors: "B. Egger",
    venue: "M.S. thesis, University of Iowa",
    links: {
      pdf: "https://iro.uiowa.edu/view/pdfCoverPage?instCode=01IOWA_INST&filePid=13974724960002771&download=true",
      doi: "https://doi.org/10.25820/etd.007915",
    },
  },
  {
    year: "2024",
    title:
      "Resting-State Functional Connectivity of the Amygdala in Autism: A Preregistered Large-Scale Study",
    authors:
      "D. Kliemann, P. Galdi, A. L. Van De Water, B. Egger, D. Jarecka, R. Adolphs, S. S. Ghosh",
    venue: "American Journal of Psychiatry, vol. 181, no. 12, pp. 1076–1085",
    links: {
      pdf: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11667795/pdf/nihms-2037725.pdf",
      doi: "https://doi.org/10.1176/appi.ajp.20230249",
    },
  },
];
