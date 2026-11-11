import type { Publication, PublicationLinks } from "@/content/types";
import type { ClassNameProps } from "@/lib/react-types";
import { cn } from "@/lib/tailwind-utils";

/** Link keys in the order they are shown. */
const LINK_KEYS = [
  "pdf",
  "doi",
  "cite",
] as const satisfies readonly (keyof PublicationLinks)[];

type PublicationEntryProps = ClassNameProps & {
  publication: Publication;
};

/** One row of the publications list: year on the left, citation on the right. */
export function PublicationEntry({
  publication: { year, title, authors, venue, links },
  className,
}: PublicationEntryProps) {
  const setLinks = LINK_KEYS.flatMap((key) => {
    const href = links?.[key];
    return href ? [{ key, href }] : [];
  });

  return (
    <li
      className={cn(
        "grid grid-cols-[minmax(0,1fr)] gap-2 border-t border-border py-[22px] sm:grid-cols-[136px_minmax(0,1fr)] sm:gap-x-3 sm:gap-y-1.5",
        className,
      )}
    >
      <span className="font-mono text-[12.5px] leading-6 text-muted-foreground">
        {year}
      </span>
      <div className="flex min-w-0 flex-col gap-1.5">
        <cite className="text-[17px] leading-[1.4] font-semibold text-foreground not-italic">
          {title}
        </cite>
        <span className="text-[15px] leading-normal text-foreground-secondary">
          {authors}
        </span>
        <span className="font-mono text-[13px] leading-normal text-foreground">
          {venue}
        </span>
        {setLinks.length > 0 && (
          <span className="mt-1 flex gap-4 font-mono text-[13px] leading-none">
            {setLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="text-foreground underline decoration-accent underline-offset-3 hover:text-accent"
              >
                {key}
              </a>
            ))}
          </span>
        )}
      </div>
    </li>
  );
}
