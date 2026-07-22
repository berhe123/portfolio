import type { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/lib/cn'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium tracking-wide transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-[var(--border)] bg-[var(--bg-muted)] text-[var(--fg-muted)]',
        accent:
          'border-transparent bg-[var(--accent-soft)] text-[var(--accent)]',
        outline:
          'border-[var(--border-strong)] bg-transparent text-[var(--fg-muted)]',
        soft: 'border-transparent bg-[var(--surface)] text-[var(--fg-muted)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
