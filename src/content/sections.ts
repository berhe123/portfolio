import type {
  ArchitecturePrinciple,
  BlogPost,
  ProcessStep,
  ServiceItem,
  Statistic,
  Testimonial,
} from '@/shared/types/content'

export const statistics: Statistic[] = [
  { id: 'years', label: 'Years of experience', value: 5, suffix: '+' },
  { id: 'projects', label: 'Projects completed', value: 30, suffix: '+' },
  { id: 'technologies', label: 'Technologies', value: 25, suffix: '+' },
  { id: 'clients', label: 'Happy clients', value: 18, suffix: '+' },
]

export const aboutContent = {
  eyebrow: 'Professional Summary',
  title: 'Professional Summary',
  lead: '',
  biography: [
    'Full stack developer specializing in JavaScript, TypeScript, Next.js, and NestJS, with strong experience delivering products built on clean architecture, quality engineering practices, and modern deployment workflows.',
    'I work across planning, technical design, and product dashboards, using React, Node.js, Prisma, Docker, and related tools to turn business needs into reliable, maintainable software with a clear focus on UX and performance.',
  ],
  timeline: [],
}

export const services: ServiceItem[] = [
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    description:
      'End-to-end feature delivery from discovery to production — architecture, UX collaboration, and maintainable implementation.',
    outcomes: ['Shippable MVPs', 'Scalable foundations', 'Clear technical roadmap'],
    icon: 'layers',
  },
  {
    id: 'frontend-systems',
    title: 'Frontend Systems',
    description:
      'Design systems, interaction craft, and performance-minded React applications that feel premium and stay coherent.',
    outcomes: ['Reusable UI kits', 'Accessible interfaces', 'Motion with purpose'],
    icon: 'panel',
  },
  {
    id: 'api-platforms',
    title: 'API & Backend Platforms',
    description:
      'NestJS modular monoliths, typed contracts, and domain-oriented services designed for growth without chaos.',
    outcomes: ['Clean modules', 'Reliable APIs', 'Observable systems'],
    icon: 'server',
  },
  {
    id: 'architecture',
    title: 'Architecture Consulting',
    description:
      'Technical audits, migration plans, and pragmatic architecture decisions for teams scaling product complexity.',
    outcomes: ['Reduced complexity', 'Clear boundaries', 'Faster delivery'],
    icon: 'compass',
  },
]

export const processSteps: ProcessStep[] = [
  {
    id: 'discover',
    step: '01',
    title: 'Discover',
    description:
      'Clarify business goals, constraints, users, and success metrics before writing a single line of production code.',
  },
  {
    id: 'architect',
    step: '02',
    title: 'Architect',
    description:
      'Define boundaries, data models, and interface contracts. Choose the simplest architecture that can grow.',
  },
  {
    id: 'build',
    step: '03',
    title: 'Build',
    description:
      'Implement in vertical slices with strict typing, reusable components, and continuous quality checks.',
  },
  {
    id: 'refine',
    step: '04',
    title: 'Refine',
    description:
      'Polish interactions, performance, accessibility, and edge cases until the product feels intentional.',
  },
  {
    id: 'ship',
    step: '05',
    title: 'Ship & Learn',
    description:
      'Deploy confidently, observe real usage, and iterate with evidence — not assumptions.',
  },
]

export const architecturePrinciples: ArchitecturePrinciple[] = [
  {
    id: 'boundaries',
    title: 'Clear boundaries',
    description:
      'Features own their logic. Shared layers stay generic. Dependencies point inward toward stable domains.',
  },
  {
    id: 'contracts',
    title: 'Contracts over coupling',
    description:
      'Typed interfaces between UI, API, and data layers prevent accidental entanglement as teams scale.',
  },
  {
    id: 'simplicity',
    title: 'Simple by default',
    description:
      'Prefer modular monoliths and explicit designs until complexity genuinely demands distribution.',
  },
  {
    id: 'observability',
    title: 'Observable systems',
    description:
      'Logging, metrics, and failure modes are designed early — not bolted on after incidents.',
  },
  {
    id: 'ux-parity',
    title: 'UX is architecture',
    description:
      'Loading states, errors, and latency budgets are first-class concerns in system design.',
  },
  {
    id: 'change',
    title: 'Optimized for change',
    description:
      'Code should be easy to delete, extend, and reason about six months later under new requirements.',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Berhe brings rare balance — architectural clarity, product instinct, and a polish that makes interfaces feel expensive.',
    name: 'Amelia Hart',
    role: 'Head of Product',
    company: 'Northline Digital',
  },
  {
    id: 't2',
    quote:
      'Our platform went from fragile feature sprawl to a coherent system. Delivery got faster and quality went up simultaneously.',
    name: 'Jonah Ellis',
    role: 'CTO',
    company: 'Harbor Systems',
  },
  {
    id: 't3',
    quote:
      'He treats motion, accessibility, and performance as engineering problems — not afterthoughts. The difference is obvious.',
    name: 'Sofia Nguyen',
    role: 'Design Lead',
    company: 'Pixelcraft Studio',
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'Designing frontend architecture that survives growth',
    excerpt:
      'How feature boundaries, typed contracts, and deliberate shared layers keep React codebases healthy.',
    date: '2026-03-12',
    readTime: '8 min',
    tags: ['Architecture', 'React'],
  },
  {
    id: 'b2',
    title: 'NestJS modular monoliths done right',
    excerpt:
      'A pragmatic approach to domain modules, dependency direction, and scaling without premature microservices.',
    date: '2026-01-28',
    readTime: '10 min',
    tags: ['NestJS', 'Backend'],
  },
  {
    id: 'b3',
    title: 'Motion that earns its place',
    excerpt:
      'Principles for product animation: hierarchy, feedback, and restraint over decorative noise.',
    date: '2025-11-04',
    readTime: '6 min',
    tags: ['UX', 'Motion'],
  },
]

export const readingList = [
  { id: 'r1', title: 'A Philosophy of Software Design', author: 'John Ousterhout' },
  { id: 'r2', title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann' },
  { id: 'r3', title: 'Refactoring UI', author: 'Adam Wathan & Steve Schoger' },
]

export const nowPlaying = {
  track: 'Midnight City',
  artist: 'M83',
  status: 'Focus playlist',
}
