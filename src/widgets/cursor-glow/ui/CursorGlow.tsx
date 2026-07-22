import { useEffect } from 'react'
import { useMousePosition, usePrefersReducedMotion } from '@/shared/hooks/use-ui'

export function CursorGlow() {
  const { x, y } = useMousePosition()
  const reduceMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    document.documentElement.style.setProperty('--cursor-x', `${x}px`)
    document.documentElement.style.setProperty('--cursor-y', `${y}px`)
  }, [x, y, reduceMotion])

  if (reduceMotion) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[40] hidden md:block mix-blend-soft-light"
      style={{
        background: `radial-gradient(520px circle at var(--cursor-x, 50%) var(--cursor-y, 50%), color-mix(in oklab, var(--accent) 14%, transparent), transparent 45%)`,
      }}
    />
  )
}
