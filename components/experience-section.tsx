import { ResumeEntry, StatList } from "@/components/resume-entry";
import { Section } from "@/components/section";
import { experience } from "@/content/resume";

export function ExperienceSection() {
  return (
    <Section id="exp" title="experience">
      <ol className="m-0 list-none p-0">
        {experience.map((entry) => (
          <ResumeEntry
            key={`${entry.org}-${entry.years}`}
            title={entry.org}
            subtitle={entry.role}
            years={entry.years}
            summary={entry.summary}
            details={<StatList stats={entry.stats} />}
          />
        ))}
      </ol>
    </Section>
  );
}
