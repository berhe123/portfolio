import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import { TooltipProvider } from '@/shared/ui/tooltip'
import { Header } from '@/widgets/header/ui/Header'
import { Footer } from '@/widgets/footer/ui/Footer'
import { LoadingScreen } from '@/widgets/loading/ui/LoadingScreen'
import { ScrollProgress } from '@/widgets/scroll-progress/ui/ScrollProgress'
import { CommandPalette } from '@/features/command-palette/ui/CommandPalette'
import { useActiveSection } from '@/features/section-observer/model/use-active-section'
import { useHashScroll } from '@/shared/hooks/use-hash-scroll'
import { useThemeStore } from '@/shared/lib/store'
import { usePrefersReducedMotion } from '@/shared/hooks/use-ui'
import { HomePage } from '@/pages/home/ui/HomePage'
import { ProjectPage } from '@/pages/project/ui/ProjectPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

function SmoothScroll() {
  const reduceMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })
    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    document.documentElement.classList.add('lenis', 'lenis-smooth')
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      document.documentElement.classList.remove('lenis', 'lenis-smooth')
    }
  }, [reduceMotion])

  return null
}

function ThemeBoot() {
  const theme = useThemeStore((s) => s.theme)
  const setTheme = useThemeStore((s) => s.setTheme)

  useEffect(() => {
    setTheme(theme)
  }, [setTheme, theme])

  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  useActiveSection()
  useHashScroll()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider delayDuration={200}>
        <BrowserRouter>
          <ThemeBoot />
          <SmoothScroll />
          <LoadingScreen />
          <ScrollProgress />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[var(--accent-fg)]"
          >
            Skip to content
          </a>
          <Header />
          <AnimatedRoutes />
          <Footer />
          <CommandPalette />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
}
