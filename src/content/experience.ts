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
    id: 'exceed',
    company: 'EXCEED IT Systems',
    title: 'Senior Full-stack Developer',
    period: '2022 — 2024',
    location: 'Addis Ababa, Ethiopia',
    description:
      'Worked on-site at EXCEED IT Systems, a software development and digital transformation company in Addis Ababa delivering custom software, ERP, and enterprise solutions. My main project was the Decathlon Store Safety Audit System — a web application that digitized safety audits across Decathlon stores and warehouses, replacing paper and Excel processes with digital workflows, incident reporting, and centralized management.',
    achievements: [
      'Developed the Decathlon Store Safety Audit System with a team of 3 developers, covering digital safety audits, incident reporting, and compliance management for store and warehouse operations.',
      'Built secure backend REST APIs to manage audit workflows, safety data, and dashboard access, with authentication, authorization, and role-based controls for employees, managers, and administrators.',
      'Designed reusable frontend components and backend services focused on maintainability, performance, scalability, and a consistent experience across different store and warehouse locations.',
      'Collaborated with QA teams to validate project objectives and ensure a smooth, reliable release before go-live.',
    ],
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'REST APIs',
    ],
  },
  {
    id: 'farka',
    company: 'Farka ICT Solutions',
    title: 'Full Stack Developer',
    period: '2019 — 2022',
    location: 'On-site',
    description:
      'Worked at Farka ICT Solutions as a Full Stack Developer. My standout product work was BrandCast, an AI marketing studio that helps brands generate on-brand posts with multi-model AI routing and schedule content across major social channels. I also delivered attendance, consulting, ERP, and HR systems for colleges and private companies.',
    achievements: [
      'Developed BrandCast end to end as an AI marketing studio: brand workspaces, multi-model content routing, hybrid fusion drafts, ready-made templates, and channel-aware generation for Facebook, Instagram, X, LinkedIn, TikTok, and blog.',
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
