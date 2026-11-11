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

export type Stat = {
  /** Highlighted value, e.g. "5+". */
  value: string;
  /** Label after the value, e.g. "campuses". */
  label: string;
};

export type ExperienceEntry = {
  org: string;
  role: string;
  href?: string;
  /** Free-form date range, e.g. "2023 – now". */
  years: string;
  summary: string;
  stats: Stat[];
};

export type EducationEntry = {
  school: string;
  degree: string;
  /** Free-form date range, e.g. "2019 – 2023". */
  years: string;
  note: string;
  stats: Stat[];
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
