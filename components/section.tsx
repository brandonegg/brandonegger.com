import type { ReactNode } from "react";
import type { ClassNameProps } from "@/lib/react-types";
import { cn } from "@/lib/tailwind-utils";

type SectionHeadingProps = ClassNameProps & {
  children: ReactNode;
};

/** Small mono heading with an accent "## " prefix, e.g. "## experience". */
export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "m-0 font-mono text-[13px] leading-none font-medium text-muted-foreground",
        className,
      )}
    >
      <span className="text-accent" aria-hidden="true">
        ##{" "}
      </span>
      {children}
    </h2>
  );
}

type SectionProps = ClassNameProps & {
  /** Anchor id, e.g. "exp" for /#exp. */
  id: string;
  title: string;
  children: ReactNode;
};

/** A homepage section: a SectionHeading followed by its content. */
export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("flex flex-col gap-4", className)}>
      <SectionHeading>{title}</SectionHeading>
      {children}
    </section>
  );
}
