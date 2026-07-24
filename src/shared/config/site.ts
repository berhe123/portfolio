export const SITE = {
  firstName: 'Berhe',
  lastName: 'Arbsie',
  name: 'Berhe.port',
  fullName: 'Berhe Arbsie',
  title: 'Full Stack Developer (TypeScript)',
  stackLine: 'Full Stack Developer (TypeScript) · Next.js · NestJS · React',
  terminalUser: 'berhe@dev',
  tagline: "Let's build the future together.",
  email: 'berhe.arbsie@gmail.com',
  phone: '+49 152 14457833',
  location: 'Bremen, Germany',
  cvUrl: '/cv.pdf',
  profileImage: '/images/profile.png',
  github: 'https://github.com/berhe123',
  linkedin: 'https://www.linkedin.com/in/berhe-arbsie-944854121/',
  website: 'https://yourname.dev',
  availability: 'Full Stack Developer',
} as const

export const NAV_ITEMS = [
  { id: 'hero', label: 'Home', href: '/#' },
  { id: 'summary', label: 'Summary', href: '/#summary' },
  { id: 'experience', label: 'Experience', href: '/#experience' },
  { id: 'projects', label: 'Projects', href: '/#projects' },
  { id: 'tech-stack', label: 'Tech Stack', href: '/#tech-stack' },
  { id: 'education', label: 'Education', href: '/#education' },
  { id: 'languages', label: 'Languages', href: '/#languages' },
] as const

export const SOCIAL_LINKS = [
  { id: 'github', label: 'GitHub', href: SITE.github },
  { id: 'linkedin', label: 'LinkedIn', href: SITE.linkedin },
  { id: 'email', label: 'Email', href: `mailto:${SITE.email}` },
] as const
