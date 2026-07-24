import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'

interface SectionTitleProps {
  children: ReactNode
  className?: string
}

/**
 * Section heading with three accent points to the right.
 */
export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <div className={cn('flex items-center gap-3 sm:gap-4', className)}>
      <h2 className="shrink-0 font-display text-2xl sm:text-3xl md:text-4xl leading-[1.15] tracking-tight text-[var(--fg)]">
        {children}
      </h2>

      <div className="flex items-center gap-1.5" aria-hidden>
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--fg-subtle)]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
      </div>
    </div>
  )
}
