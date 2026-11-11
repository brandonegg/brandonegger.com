import type { ReactNode } from "react";
import type { ClassNameProps } from "@/lib/react-types";
import { cn } from "@/lib/tailwind-utils";

type ResumeEntryProps = ClassNameProps & {
  /** Large mono heading, e.g. an organization or school. */
  title: string;
  /** Line under the title, e.g. a role or degree. */
  subtitle: string;
  /** Free-form date range, e.g. "2023 – now". */
  years: string;
  /** Short paragraph in the right column. */
  summary: string;
  /** Rendered under the summary, e.g. a StatList or TagList. */
  details?: ReactNode;
};

/**
 * A two-column resume row (title, subtitle and years on the left; summary and
 * details on the right) that stacks into one column on mobile. Renders an
 * `<li>`, so place it inside a list.
 */
export function ResumeEntry({
  title,
  subtitle,
  years,
  summary,
  details,
  className,
}: ResumeEntryProps) {
  return (
    <li
      className={cn(
        "grid grid-cols-[minmax(0,1fr)] items-start gap-2.5 border-t border-border py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-x-9 sm:py-8",
        className,
      )}
    >
      <div className="flex min-w-0 flex-col gap-2">
        <b className="font-mono text-[26px] leading-none font-semibold tracking-[-0.04em] sm:text-[30px]">
          {title}
        </b>
        <span className="text-[15px] leading-[1.4] text-foreground-secondary">
          {subtitle}
        </span>
        <span className="font-mono text-[12.5px] leading-[1.4] text-muted-foreground">
          {years}
        </span>
      </div>
      <div className="flex min-w-0 flex-col gap-3.5 pt-0.5">
        <p className="m-0 text-[15.5px] leading-[1.6] text-foreground-secondary">
          {summary}
        </p>
        {details}
      </div>
    </li>
  );
}

type DetailListProps = ClassNameProps & {
  children: ReactNode;
};

/** A wrapping row of small mono details under a ResumeEntry summary. */
function DetailList({ children, className }: DetailListProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-x-[18px] gap-y-1.5 font-mono text-[12.5px] leading-[1.4] text-muted-foreground",
        className,
      )}
    >
      {children}
    </div>
  );
}

type StatListProps = ClassNameProps & {
  stats: { value: string; label: string }[];
};

/** Details as highlighted values with labels, e.g. "5+ campuses". */
export function StatList({ stats, className }: StatListProps) {
  return (
    <DetailList className={className}>
      {stats.map(({ value, label }, i) => (
        <span key={i}>
          <b className="font-semibold text-accent">{value}</b> {label}
        </span>
      ))}
    </DetailList>
  );
}

type TagListProps = ClassNameProps & {
  tags: string[];
};

/** Details as hashtags, e.g. "#robotics". */
export function TagList({ tags, className }: TagListProps) {
  return (
    <DetailList className={className}>
      {tags.map((tag, i) => (
        <span key={i}>
          <span className="text-accent">#</span>
          {tag}
        </span>
      ))}
    </DetailList>
  );
}
