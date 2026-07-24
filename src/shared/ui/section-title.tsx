import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'

interface SectionTitleProps {
  children: ReactNode
  className?: string
}

/**
 * Section heading with an accent rule extending to the right.
 * Used for recruiter-facing portfolio sections.
 */
export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <div className={cn('flex items-center gap-4 sm:gap-5 md:gap-6', className)}>
      <h2 className="shrink-0 font-display text-2xl sm:text-3xl md:text-4xl leading-[1.15] tracking-tight text-[var(--fg)]">
        {children}
      </h2>

      <div className="relative min-w-[3rem] flex-1" aria-hidden>
        <div className="h-px w-full bg-gradient-to-r from-[var(--fg-subtle)] via-[var(--fg-subtle)]/45 to-transparent" />
        <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[var(--fg-subtle)]" />
        <span className="absolute left-3 top-1/2 h-px w-8 -translate-y-1/2 bg-[var(--fg-subtle)]/80" />
      </div>
    </div>
  )
}
