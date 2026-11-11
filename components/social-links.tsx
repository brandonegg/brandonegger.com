import type { ReactNode } from "react";

import { profile } from "@/content/resume";
import type { SocialLink } from "@/content/types";
import type { ClassNameProps } from "@/lib/react-types";
import { cn } from "@/lib/tailwind-utils";

const ICONS: Record<SocialLink["icon"], ReactNode> = {
  github: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.3 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
    </svg>
  ),
  linkedin: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
  email: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 6.5 9 6.5 9-6.5" />
    </svg>
  ),
};

type SocialLinksProps = ClassNameProps;

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <nav
      aria-label="Social links"
      className={cn("-ml-2 flex items-center gap-3", className)}
    >
      {profile.socials.map(({ label, href, icon }) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          title={label}
          className="inline-grid size-11 place-items-center rounded-[8px] text-muted-foreground transition-[color,background-color] duration-200 ease-in-out hover:bg-accent-soft/70 hover:text-accent"
        >
          {ICONS[icon]}
        </a>
      ))}
    </nav>
  );
}
