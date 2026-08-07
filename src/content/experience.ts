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
      'Worked at Weyra Consulting, a consulting company that brings developers and business owners together to turn ideas into real products. I owned IDEAGO as the core idea-to-product platform — translating founder goals into technical requirements and shipping a full stack web application used in consulting delivery.',
    achievements: [
      'Built IDEAGO, an AI-powered idea-to-product platform that helps founders and developers move from raw concepts to structured blueprints, roadmaps, and execution plans.',
      'Developed AI blueprint flows (validation, business model, product plan, design brief), an AI Startup Copilot, collaboration workspace, and expert marketplace features.',
      'Implemented JWT-based authentication and NestJS REST APIs with Prisma/PostgreSQL to secure and power idea, workspace, and marketplace workflows.',
      'Delivered the React frontend for idea capture, blueprint review, and project execution, collaborating with stakeholders to align product outcomes before release.',
    ],
    technologies: [
      'TypeScript',
      'React',
      'NestJS',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'JWT',
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
      'Worked at Farka ICT Solutions as a Full Stack Developer. My standout product work was BrandCast, an AI marketing studio that helps brands research company context, generate on-brand posts with multi-model AI routing, and schedule content across major social channels. I also delivered attendance, consulting, ERP, and HR systems for colleges and private companies.',
    achievements: [
      'Developed BrandCast end to end as an AI marketing studio: brand workspaces, website-based brand research, multi-model content routing, hybrid fusion drafts, and channel-aware generation for Facebook, Instagram, X, LinkedIn, TikTok, and blog.',
      'Implemented BrandCast create-to-publish workflows including monthly content planning, post scheduling, generation history, and analytics that show which AI models were selected for each brief.',
      'Built JWT-secured authentication for BrandCast with email and Google sign-in, plus Express.js REST APIs and a React dashboard so marketers could manage brands and content from one place.',
      'Also delivered college Attendance Management systems, a private consulting application, and ERP/HR workflows using React, JavaScript, Express.js, PostgreSQL, and MySQL.',
    ],
    technologies: [
      'JavaScript',
      'React',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'MySQL',
      'JWT',
    ],
  },
]
