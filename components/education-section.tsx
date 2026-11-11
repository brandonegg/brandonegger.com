import { ResumeEntry, StatList } from "@/components/resume-entry";
import { Section } from "@/components/section";
import { education } from "@/content/resume";

export function EducationSection() {
  return (
    <Section id="edu" title="education">
      <ol className="m-0 list-none p-0">
        {education.map((entry) => (
          <ResumeEntry
            key={`${entry.school}-${entry.years}`}
            title={entry.school}
            subtitle={entry.degree}
            years={entry.years}
            summary={entry.note}
            details={<StatList stats={entry.stats} />}
          />
        ))}
      </ol>
    </Section>
  );
}
