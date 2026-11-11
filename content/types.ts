// Shapes for the entries in content/resume.ts. Components import these types,
// so adding a field here is the first step to rendering something new.

export type SocialLink = {
  /** Accessible name, e.g. "GitHub". */
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
};

export type Profile = {
  /** Shown as the output of the typed `$ whoami` command. */
  bio: string;
  socials: SocialLink[];
};

export type ExperienceStat = {
  /** Highlighted value, e.g. "5+". */
  value: string;
  /** Label after the value, e.g. "campuses". */
  label: string;
};

export type ExperienceEntry = {
  org: string;
  role: string;
  /** Free-form date range, e.g. "2023 – now". */
  years: string;
  summary: string;
  stats: ExperienceStat[];
};

export type EducationEntry = {
  school: string;
  degree: string;
  /** Free-form date range, e.g. "2019 – 2023". */
  years: string;
  note: string;
  /** Rendered as "#tag". */
  tags: string[];
};

export type ProjectCover =
  /** A path under public/, e.g. "/projects/seatstock.png". */
  | { kind: "image"; src: string; alt: string }
  /** Short text art drawn on the cover instead of an image. */
  | { kind: "glyph"; text: string };

export type Project = {
  name: string;
  /** Free-form date or range, e.g. "2022" or "2023 – now". */
  years: string;
  description: string;
  stack: string[];
  cover: ProjectCover;
};

export type PublicationLinks = {
  pdf?: string;
  doi?: string;
  cite?: string;
};

export type Publication = {
  year: string;
  title: string;
  authors: string;
  venue: string;
  /** Only the links you set are shown. */
  links?: PublicationLinks;
};
