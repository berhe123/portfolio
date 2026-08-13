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
      'Worked on-site at EXCEED IT Systems in Addis Ababa. Main project: Decathlon Store Safety Audit System — a web application that digitized safety audits across Decathlon stores and warehouses. It replaced paper and Excel-based processes with digital audit workflows, incident reporting, and centralized management, enabling employees to complete safety checks and helping managers monitor results.',
    achievements: [
      'Worked with a team of 3 developers and developed the web app for digital safety audits, incident reporting, and compliance management.',
      'Developed secure backend APIs to manage audit workflows, safety data, and dashboard access.',
      'Designed reusable frontend components and backend services with a focus on maintainability, performance, scalability, and consistent user experience across different store and warehouse locations.',
      'Implemented authentication, authorization, and role-based access controls so employees, managers, and administrators could securely access the right workflows, reports, and operational data.',
      'Collaborated with QA teams to ensure project objectives were integrated seamlessly before release.',
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
      'Worked at Farka ICT Solutions as a Full Stack Developer, delivering business and education software for colleges and private companies. Built and supported production systems across web frontends and backend services, with strong ownership of feature delivery and reliable application workflows.',
    achievements: [
      'Built and maintained student Attendance Management systems for different colleges, improving daily tracking, reporting, and administrative visibility.',
      'Delivered a private company consulting application supporting client workflows, case handling, and internal operational processes.',
      'Contributed to ERP and HR systems covering records management, employee processes, and structured data workflows using React, JavaScript, Express.js, PostgreSQL, and MySQL.',
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
