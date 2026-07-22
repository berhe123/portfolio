import type { IconType } from 'react-icons'
import { Boxes } from 'lucide-react'
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiI18Next,
  SiJavascript,
  SiJest,
  SiJira,
  SiJsonwebtokens,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiSentry,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from 'react-icons/si'

/** Zustand has no Simple Icon in this react-icons build */
const ZustandIcon: IconType = ({ size = 16, color = 'currentColor', className }) => (
  <Boxes size={size} color={color} className={className} aria-hidden />
)

/** Brand icon map for Tech Stack (Simple Icons via react-icons) */
export const techBrandIcons: Record<string, IconType> = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  react: SiReact,
  nextjs: SiNextdotjs,
  nestjs: SiNestjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  prisma: SiPrisma,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  redis: SiRedis,
  docker: SiDocker,
  tailwind: SiTailwindcss,
  html5: SiHtml5,
  css3: SiCss,
  git: SiGit,
  githubactions: SiGithubactions,
  nginx: SiNginx,
  tanstackquery: SiReactquery,
  zustand: ZustandIcon,
  redux: SiRedux,
  zod: SiZod,
  i18n: SiI18Next,
  jwt: SiJsonwebtokens,
  jest: SiJest,
  sentry: SiSentry,
  websockets: SiSocketdotio,
  jira: SiJira,
}

export function getTechBrandIcon(key: string): IconType | null {
  return techBrandIcons[key] ?? null
}
