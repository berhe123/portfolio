import type { ExperienceItem } from '@/shared/types/content'

/**
 * Edit this file to update the Experience section.
 * Keep achievements outcome-focused and technologies accurate.
 */
export const experiences: ExperienceItem[] = [
  {
    id: 'myswooop',
    company: 'MySwooop',
    title: 'Full Stack Developer',
    period: '2024 — Present',
    location: 'Bremen, Germany',
    description:
      'Since 2024 I have been working at MySwooop as a Full Stack Developer, building and improving e-commerce applications, an Operation Management System (OMS), and an AI customer support product. I deliver end-to-end features across frontend and backend, with a focus on reliable workflows, clear user experiences, and production-ready systems.',
    achievements: [
      'Developed and maintained e-commerce applications supporting product catalogs, order flows, and customer-facing experiences.',
      'Built features for the Operation Management System to improve order tracking, status workflows, and operational visibility.',
      'Contributed to an AI customer support application that helps resolve common inquiries faster while keeping clear escalation paths.',
      'Delivered full stack solutions using JavaScript, TypeScript, React, Next.js, Node.js, and Express.js, with Docker for consistent development and deployment environments.',
    ],
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'Docker',
    ],
  },
  {
    id: 'freelance',
    company: 'Freelancer / Self-Employed',
    title: 'Full Stack Web Developer',
    period: '2022 — 2024',
    location: 'Remote',
    description:
      'Worked independently as a Full Stack Developer, owning the full product lifecycle from requirements and architecture to development, testing, and deployment. Delivered production web applications for real users, with a strong focus on clean TypeScript architecture, polished UI, and reliable backend services.',
    achievements: [
      'Built IDEAGO, an idea-to-execution platform that helps founders capture concepts, prioritize initiatives, and turn ideas into structured product plans using React, TypeScript, Next.js, and Node.js.',
      'Developed Lango, a language-learning web application focused on practice flows, progress tracking, and engaging user experience with React, TypeScript, Next.js, and modern frontend architecture.',
      'Designed and shipped AI CV Builder, a full stack AI-powered CV platform with a React TypeScript frontend and NestJS backend, including authentication, document generation, and intelligent content workflows with Prisma.',
      'Managed projects end to end as a self-employed engineer: client communication, technical decisions, implementation, and production deployment, while keeping codebases maintainable and interview-ready in quality.',
    ],
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'NestJS',
      'Prisma',
      'Tailwind CSS',
    ],
  },
  {
    id: 'farka',
    company: 'Farka ICT Solutions',
    title: 'Full Stack Developer',
    period: '2019 — 2022',
    location: 'On-site',
    description:
      'Worked at Farka ICT Solutions as a Full Stack Developer, delivering business and education software for colleges and private companies. Built and supported production systems across web frontends and backend services, with strong ownership of feature delivery, data modeling, and reliable application workflows.',
    achievements: [
      'Developed BrandCast, a brand storytelling and content presentation web application using React, JavaScript, Next.js, and modern frontend practices for polished, shareable campaign experiences.',
      'Built and maintained student Attendance Management systems for different colleges, improving daily tracking, reporting, and administrative visibility.',
      'Delivered a private company consulting application supporting client workflows, case handling, and internal operational processes.',
      'Contributed to ERP and HR systems covering core business operations such as records management, employee processes, and structured data workflows using React, JavaScript, Express.js, PostgreSQL, and MySQL.',
    ],
    technologies: [
      'JavaScript',
      'React',
      'Express.js',
      'PostgreSQL',
      'MySQL',
    ],
  },
]
