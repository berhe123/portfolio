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
      'At Weyra Consulting, I developed IDEAGO as a full stack product that connects founders and engineers around one shared workflow. The platform turns scattered brainstorming into organized product planning with prioritization, roadmaps, and clear next actions — built with React, Next.js, TypeScript, and Node.js.',
    problem:
      'Business owners and developers often lose momentum when ideas live across docs, chats, and whiteboards — with no shared path from concept to product.',
    solution:
      'Created structured idea canvases, scoring workflows, and roadmap-oriented planning views so consulting teams can move ideas into executable product plans.',
    architecture:
      'Modular React architecture with typed domain models and API-ready service layers.',
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
    technologies: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS'],
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
      'A brand storytelling web application I developed at Farka ICT Solutions to present campaigns and brand narratives through polished, shareable digital experiences.',
    overview:
      'At Farka ICT Solutions, I contributed to BrandCast as a production web product focused on visual clarity, responsive layouts, and maintainable frontend architecture. It demonstrates how I turn content and design requirements into a professional, deployable application.',
    problem:
      'Brand presentations often live in static decks that are hard to share and update on the web.',
    solution:
      'Built narrative-driven sections and media-forward layouts for interactive brand storytelling.',
    architecture:
      'Content-driven React architecture with reusable section blocks and consistent styling.',
    features: [
      'Narrative-driven brand and campaign sections',
      'Responsive presentation-grade layouts',
      'Reusable frontend structure for faster iteration',
    ],
    challenges: [
      'Preserving visual impact without harming readability',
      'Keeping content blocks flexible and consistent',
    ],
    lessons: [
      'Storytelling products need strong visual rhythm',
      'Reusable UI structure improves delivery speed',
    ],
    technologies: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Express.js'],
    tags: ['Platform', 'Farka ICT', 'Full Stack'],
    liveUrl: 'https://brandcast.digital',
    githubUrl: 'https://github.com/',
    year: '2021',
    role: 'Farka ICT Solutions · Full Stack Developer',
    accent: '#60a5fa',
    gradient: 'from-sky-500/25 via-blue-600/10 to-[#0a0c10]',
  },
]

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return projects.find((project) => project.slug === slug)
}
