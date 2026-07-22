import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'
import { Reveal } from '@/shared/ui/reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  children?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  children,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'mb-12 md:mb-16 max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-tight text-[var(--fg)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base md:text-lg text-[var(--fg-muted)] leading-relaxed">
          {description}
        </p>
      ) : null}
      {children}
    </Reveal>
  )
}
