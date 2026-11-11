import { AsciiName } from "@/components/ascii-name";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { PublicationsSection } from "@/components/publications-section";
import { SocialLinks } from "@/components/social-links";

export default function Home() {
  return (
    <main className="mx-auto box-border flex w-full max-w-[880px] flex-1 flex-col gap-14 px-4 pt-14 pb-18 sm:gap-22 sm:px-[clamp(24px,5vw,56px)] sm:pt-24 sm:pb-30">
      <div className="flex flex-col gap-7 sm:gap-9">
        <AsciiName className="mb-4 sm:mb-6" />
        <SocialLinks />
      </div>
      <ExperienceSection />
      <EducationSection />
      <PublicationsSection />
    </main>
  );
}
