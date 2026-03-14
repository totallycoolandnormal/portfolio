import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <ExperienceSection />
      <EducationSection />
    </>
  );
}
