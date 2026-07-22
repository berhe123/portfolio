import type { LucideIcon } from 'lucide-react'
import {
  Boxes,
  Braces,
  Cloud,
  Code2,
  Compass,
  Container,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Hexagon,
  Layers,
  LayoutPanelLeft,
  Leaf,
  Monitor,
  Network,
  Package,
  Palette,
  Play,
  Server,
  Sparkles,
  SquareTerminal,
  TestTube2,
  Workflow,
  Zap,
} from 'lucide-react'

/**
 * Maps content icon string keys to Lucide components.
 * Keys cover skills (skills.ts) and services (sections.ts).
 */
export const iconMap: Record<string, LucideIcon> = {
  // Frontend / languages
  react: Hexagon,
  next: Globe,
  tailwind: Palette,
  motion: Sparkles,
  typescript: FileCode2,
  javascript: Braces,
  html: Code2,
  sql: Database,
  // Backend
  node: Server,
  nest: Boxes,
  api: Network,
  graphql: Workflow,
  express: SquareTerminal,
  // Data
  db: Database,
  prisma: Hexagon,
  redis: Zap,
  mongo: Leaf,
  // DevOps / cloud
  docker: Container,
  compose: Package,
  cicd: GitBranch,
  linux: SquareTerminal,
  vercel: Globe,
  aws: Cloud,
  cloud: Cloud,
  cdn: Globe,
  // Testing
  jest: TestTube2,
  test: TestTube2,
  cypress: Monitor,
  playwright: Play,
  // Tools / frameworks
  git: GitBranch,
  figma: Palette,
  code: Code2,
  postman: Network,
  query: Workflow,
  zustand: Boxes,
  router: Network,
  // Services
  layers: Layers,
  panel: LayoutPanelLeft,
  server: Server,
  compass: Compass,
}

export function getIcon(key: string): LucideIcon {
  return iconMap[key] ?? Sparkles
}
