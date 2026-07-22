import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/lib/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--accent)] text-[var(--accent-fg)] shadow-[var(--shadow-glow)] hover:brightness-110',
        secondary:
          'glass text-[var(--fg)] hover:bg-[var(--surface-hover)] border border-[var(--border-strong)]',
        ghost: 'text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--accent-soft)]',
        outline:
          'border border-[var(--border-strong)] bg-transparent text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)]',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        md: 'h-11 px-5',
        lg: 'h-12 px-7 text-base',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  },
)
Button.displayName = 'Button'
