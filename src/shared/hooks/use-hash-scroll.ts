import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll to hash targets after route/hash changes (e.g. /#projects). */
export function useHashScroll() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (pathname !== '/' || !hash) return
    const id = hash.replace('#', '')
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [hash, pathname])
}
