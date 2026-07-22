import { HeroSection } from '@/widgets/hero/ui/HeroSection'
import { AboutSection } from '@/widgets/about/ui/AboutSection'
import { ExperienceSection } from '@/widgets/experience/ui/ExperienceSection'
import { ProjectsSection } from '@/widgets/projects/ui/ProjectsSection'
import { TechStackSection } from '@/widgets/skills/ui/SkillsSection'
import { EducationSection } from '@/widgets/education/ui/EducationSection'
import { LanguagesSection } from '@/widgets/languages/ui/LanguagesSection'

export function HomePage() {
  return (
    <main id="main" className="grid-bg">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackSection />
      <EducationSection />
      <LanguagesSection />
    </main>
  )
}
