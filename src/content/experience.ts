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
      'Delivered full stack solutions using JavaScript, React, Next.js, Node.js, and Express.js, with Docker for consistent development and deployment environments.',
    ],
    technologies: [
      'JavaScript',
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'Docker',
    ],
  },
  {
    id: 'weyra',
    company: 'Weyra Consulting',
    title: 'Full Stack Web Developer',
    period: '2022 — 2024',
    location: 'Remote',
    description:
      'Worked at Weyra Consulting, a consulting company that brings developers and business owners together to turn ideas into real products. I collaborated with founders and technical teams to clarify product goals, design solutions, and ship production web applications — with IDEAGO as a core idea-to-product platform.',
    achievements: [
      'Built IDEAGO, an idea-to-execution platform that helps business owners and developers move from raw concepts to structured product plans using React, TypeScript, Next.js, and Node.js.',
      'Supported consulting engagements by translating business ideas into clear technical requirements, prioritization workflows, and actionable product roadmaps.',
      'Delivered full stack features across planning, collaboration, and execution views so founders and engineers could work from one shared product system.',
      'Owned end-to-end delivery in a consulting setting: stakeholder communication, architecture decisions, implementation, and production deployment.',
    ],
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
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
