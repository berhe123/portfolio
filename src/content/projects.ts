import type { ProjectCaseStudy } from '@/shared/types/content'

export const projects: ProjectCaseStudy[] = [
  {
    id: 'myswooop-ecommerce',
    slug: 'myswooop-ecommerce',
    name: 'MySwooop E-commerce',
    shortDescription:
      'A production e-commerce platform for MySwooop where customers buy and sell refurbished and second-hand electronics online and through partner stores across Germany.',
    overview:
      'As a Full Stack Developer at MySwooop, I build and improve the customer-facing commerce experience. That includes product discovery, buy and sell journeys, account flows, and reliable checkout-related features. MySwooop is a trusted circular marketplace for tested devices, warranty-backed purchases, and a clear path to sell used electronics. My work focuses on making every UI and API change fast, trustworthy, and easy for real shoppers.',
    problem:
      'Second-hand electronics commerce fails when customers cannot quickly understand product condition, pricing, sell offers, or order status. Friction in catalog browsing, trade-in flows, or account experiences directly reduces conversions and increases support load.',
    solution:
      'Shipped and improved end-to-end e-commerce features across frontend and backend so customers can discover products, complete purchases, and sell devices with a clear and polished experience.',
    architecture:
      'Full stack JavaScript product with React and Next.js customer experiences, Node.js and Express services, and Dockerized environments for consistent delivery into a live commerce platform.',
    features: [
      'Buy and sell journeys for refurbished electronics with clear product and offer flows',
      'Catalog and discovery experiences that help customers compare devices confidently',
      'Reliable full stack feature delivery across React, Next.js, Node.js, and Express',
    ],
    challenges: [
      'Keeping complex commerce flows simple for first-time and returning customers',
      'Shipping production features safely on a live marketplace with real order volume',
    ],
    lessons: [
      'Trust and clarity matter as much as performance in e-commerce UX',
      'Production marketplaces reward disciplined full stack ownership end to end',
    ],
    technologies: ['JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'Docker'],
    tags: ['E-commerce', 'Marketplace', 'Full Stack'],
    liveUrl: 'https://www.myswooop.de/',
    githubUrl: 'https://github.com/',
    year: '2024',
    role: 'MySwooop · Full Stack Developer',
    accent: '#60a5fa',
    gradient: 'from-sky-500/25 via-blue-600/10 to-[#0a0c10]',
  },
  {
    id: 'ai-customer-support',
    slug: 'ai-customer-support',
    name: 'AI Customer Support',
    shortDescription:
      'An AI-assisted support application developed in my MySwooop work to resolve common customer questions faster while keeping clear paths for human escalation.',
    overview:
      'I built conversational support flows focused on speed, clarity, and trust. The product helps reduce repetitive support load while remaining transparent when a request should move to a human agent.',
    problem:
      'Support queues grow faster than headcount, and repetitive questions consume agent time.',
    solution:
      'Implemented AI-assisted responses with context-aware guidance and clean escalation patterns.',
    architecture:
      'Conversational frontend integrated with AI response pipelines and modular service boundaries.',
    features: [
      'Conversational support interface for faster resolutions',
      'Context-aware response flows for common inquiries',
      'Human escalation readiness for complex cases',
    ],
    challenges: [
      'Balancing automation speed with answer reliability',
      'Designing graceful failure and escalation UX',
    ],
    lessons: [
      'Trust is essential for AI support products',
      'Escalation UX is as important as answer quality',
    ],
    technologies: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js'],
    tags: ['AI', 'Support', 'Full Stack'],
    liveUrl: 'https://ai-customer-support-two-eta.vercel.app/',
    githubUrl: 'https://github.com/',
    year: '2024',
    role: 'MySwooop · Full Stack Developer',
    accent: '#60a5fa',
    gradient: 'from-sky-500/25 via-blue-600/10 to-[#0a0c10]',
  },
  {
    id: 'ideago',
    slug: 'ideago',
    name: 'IDEAGO',
    shortDescription:
      'An idea-to-product platform I built at Weyra Consulting to help business owners and developers turn raw ideas into structured execution plans.',
    overview:
      'At Weyra Consulting, I developed IDEAGO as a full stack product that connects founders and engineers around one shared workflow. The platform turns scattered brainstorming into organized product planning with prioritization, roadmaps, and clear next actions — built with React, NestJS, TypeScript, and Node.js.',
    problem:
      'Business owners and developers often lose momentum when ideas live across docs, chats, and whiteboards — with no shared path from concept to product.',
    solution:
      'Created structured idea canvases, scoring workflows, and roadmap-oriented planning views so consulting teams can move ideas into executable product plans.',
    architecture:
      'Modular React frontend with NestJS APIs, typed domain models, and service layers ready for growth.',
    features: [
      'Structured idea capture and prioritization for founders and developers',
      'Planning workflows that support idea-to-product execution',
      'Responsive full stack product experience for consulting delivery',
    ],
    challenges: [
      'Keeping planning UI powerful without becoming complex',
      'Designing flexible idea models for different business and tech stakeholders',
    ],
    lessons: [
      'Constraint-driven UX improves early product tools',
      'Clear domain boundaries speed up consulting delivery',
    ],
    technologies: ['TypeScript', 'React', 'NestJS', 'Node.js', 'Tailwind CSS'],
    tags: ['SaaS', 'Consulting', 'Full Stack'],
    liveUrl: 'https://ideago-rho.vercel.app/',
    githubUrl: 'https://github.com/',
    year: '2023',
    role: 'Weyra Consulting · Full Stack Web Developer',
    accent: '#60a5fa',
    gradient: 'from-sky-500/25 via-blue-600/10 to-[#0a0c10]',
  },
  {
    id: 'brandcast',
    slug: 'brandcast',
    name: 'BrandCast',
    shortDescription:
      'BrandCast is an AI marketing studio developed at Farka ICT Solutions to help brands and agencies create, schedule, and publish on-brand content across Facebook, Instagram, X, LinkedIn, TikTok, and blog — by routing each post to the best AI model or fusing two for higher quality.',
    overview:
      'At Farka ICT Solutions, I developed BrandCast as a full stack AI content platform. Marketers add a brand with voice and channels, describe a post goal or start from a template, and BrandCast routes the brief to the strongest model — or merges two models in hybrid fusion — then returns channel-ready copy. I built brand workspaces, AI content generation, multi-channel publishing support, monthly content planning, scheduling calendar, generation history, model analytics, ready-made templates, and JWT-secured email/Google login so teams can run the full create-to-schedule workflow from one dashboard.',
    problem:
      'Marketing teams waste time switching between AI chatbots, schedulers, and brand notes, and still guess which model writes the best post for each channel and brand voice.',
    solution:
      'Delivered one AI marketing studio with automatic multi-model routing, hybrid fusion, channel-aware generation, templates, scheduling, and analytics so content stays on-brand and publish-ready.',
    architecture:
      'Full stack JavaScript product: React frontend, Express.js REST API, JWT authentication, multi-model AI routing with offline fallback, plus content history, schedule, and analytics services.',
    features: [
      'Multi-model AI router with hybrid fusion for best-of-both drafts',
      'Ready-made content templates with platform and tone selection',
      'Multi-brand workspaces with channel-aware posts for six platforms',
      'Monthly content plans, scheduling calendar, and generation history',
      'Analytics that show which models were chosen and why',
      'JWT authentication with email Continue and Google sign-in',
    ],
    challenges: [
      'Making model choice automatic while keeping the UX simple for marketers',
      'Preserving one brand voice across channels with different length and tone rules',
      'Keeping the product usable without API keys through a reliable offline AI engine',
    ],
    lessons: [
      'Strong AI products hide model complexity and show clear next actions',
      'Brand context and channel fit matter as much as raw generation quality',
      'Offline-first demos accelerate adoption and stakeholder confidence',
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'Express.js', 'Tailwind CSS', 'JWT'],
    tags: ['AI', 'Platform', 'Farka ICT', 'Full Stack'],
    liveUrl: 'https://brandcast.digital',
    githubUrl: 'https://github.com/berhe123/brandcast',
    year: '2021',
    role: 'Farka ICT Solutions · Full Stack Developer',
    accent: '#60a5fa',
    gradient: 'from-sky-500/25 via-blue-600/10 to-[#0a0c10]',
  },
]

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return projects.find((project) => project.slug === slug)
}
