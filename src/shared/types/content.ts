export type ProjectTag =
  | 'SaaS'
  | 'AI'
  | 'E-commerce'
  | 'Marketplace'
  | 'Support'
  | 'Freelance'
  | 'Farka ICT'
  | 'Platform'
  | 'Productivity'
  | 'Operations'
  | 'Full Stack'

export interface ProjectCaseStudy {
  id: string
  slug: string
  name: string
  shortDescription: string
  overview: string
  problem: string
  solution: string
  architecture: string
  features: string[]
  challenges: string[]
  lessons: string[]
  technologies: string[]
  tags: ProjectTag[]
  liveUrl: string
  githubUrl: string
  year: string
  role: string
  accent: string
  gradient: string
}

export interface ExperienceItem {
  id: string
  company: string
  title: string
  period: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface SkillItem {
  id: string
  name: string
  tooltip: string
  icon: string
  /** Brand color for Simple Icons style chips */
  color?: string
}

export interface SkillGroup {
  id: string
  title: string
  skills: SkillItem[]
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  outcomes: string[]
  icon: string
}

export interface ProcessStep {
  id: string
  step: string
  title: string
  description: string
}

export interface ArchitecturePrinciple {
  id: string
  title: string
  description: string
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
}

export interface Statistic {
  id: string
  label: string
  value: number
  suffix?: string
  prefix?: string
}
