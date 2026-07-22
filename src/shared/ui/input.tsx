import * as React from 'react'
import { cn } from '@/shared/lib/cn'

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        'flex h-12 w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-4 text-sm text-[var(--fg)] placeholder:text-[var(--fg-subtle)] transition-colors focus-visible:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/30 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
)
Input.displayName = 'Input'

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        'flex min-h-32 w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-4 py-3 text-sm text-[var(--fg)] placeholder:text-[var(--fg-subtle)] transition-colors focus-visible:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/30 disabled:cursor-not-allowed disabled:opacity-50 resize-y',
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
)
Textarea.displayName = 'Textarea'
