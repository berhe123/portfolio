import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useUiStore } from '@/shared/lib/store'

const SECTION_IDS = [
  'hero',
  'summary',
  'experience',
  'projects',
  'tech-stack',
  'education',
  'languages',
]

export function useActiveSection() {
  const setActiveSection = useUiStore((s) => s.setActiveSection)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') return

    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const top = visible[0]
        if (top?.target.id) setActiveSection(top.target.id)
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [location.pathname, setActiveSection])
}
