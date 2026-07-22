import { useScrollProgress } from '@/shared/hooks/use-ui'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-transparent"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      aria-label="Reading progress"
    >
      <div
        className="h-full origin-left bg-[var(--accent)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}
