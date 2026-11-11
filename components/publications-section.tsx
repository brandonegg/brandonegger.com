import { PublicationEntry } from "@/components/publication-entry";
import { Section } from "@/components/section";
import { publications } from "@/content/resume";

export function PublicationsSection() {
  return (
    <Section id="pubs" title="publications">
      <ol className="m-0 flex list-none flex-col p-0">
        {publications.map((publication) => (
          <PublicationEntry
            key={`${publication.year}-${publication.title}`}
            publication={publication}
          />
        ))}
      </ol>
    </Section>
  );
}
