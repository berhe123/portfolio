import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useUiStore } from '@/shared/lib/store'

const LINES = ['Initializing systems', 'Compiling interfaces', 'Calibrating motion', 'Ready']

export function LoadingScreen() {
  const { loadingComplete, setLoadingComplete } = useUiStore()
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) {
      setLoadingComplete(true)
      return
    }

    const progressTimer = window.setInterval(() => {
      setProgress((p) => Math.min(100, p + Math.random() * 18 + 8))
    }, 180)

    const lineTimer = window.setInterval(() => {
      setIndex((i) => Math.min(LINES.length - 1, i + 1))
    }, 420)

    const done = window.setTimeout(() => setLoadingComplete(true), 1800)

    return () => {
      window.clearInterval(progressTimer)
      window.clearInterval(lineTimer)
      window.clearTimeout(done)
    }
  }, [reduceMotion, setLoadingComplete])

  return (
    <AnimatePresence>
      {!loadingComplete ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
          role="status"
          aria-live="polite"
          aria-label="Loading Berhe"
        >
          <div className="absolute inset-0 mesh-bg opacity-80" />
          <motion.div
            className="relative z-10 text-center px-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="font-display text-4xl md:text-5xl tracking-tight mb-6">B</p>
            <p className="text-sm text-[var(--fg-muted)] font-mono tabular-nums mb-8">
              {LINES[index]}…
            </p>
            <div className="mx-auto h-1 w-48 overflow-hidden rounded-full bg-[var(--border)]">
              <motion.div
                className="h-full bg-[var(--accent)]"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
