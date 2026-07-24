import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS, SITE } from '@/shared/config/site'
import { useUiStore } from '@/shared/lib/store'
import { cn } from '@/shared/lib/cn'
import { Button } from '@/shared/ui/button'

const PRIMARY_NAV = NAV_ITEMS.filter((item) =>
  ['hero', 'summary', 'experience', 'projects', 'tech-stack'].includes(item.id),
)

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { activeSection } = useUiStore()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open ? 'py-3' : 'py-5',
      )}
    >
      <div className="container-wide">
        <div
          className={cn(
            'relative flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-300',
            scrolled || open
              ? 'glass shadow-[var(--shadow-soft)] border border-[var(--border)]'
              : 'bg-transparent',
          )}
        >
          <Link
            to="/#hero"
            onClick={() => {
              if (isHome) {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
            className="relative z-10 font-display text-lg font-bold tracking-tight hover:text-[var(--accent)] transition-colors"
            aria-label={`${SITE.fullName} home`}
          >
            <span className="text-[var(--fg)]">berhe.</span>
            <span className="text-[var(--accent)]">portfolio</span>
          </Link>

          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex items-center gap-1"
            aria-label="Primary"
          >
            {PRIMARY_NAV.map((item) => {
              const href = isHome ? `#${item.id}` : item.href
              const active = isHome && activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={href}
                  onClick={(event) => {
                    if (item.id === 'hero' && isHome) {
                      event.preventDefault()
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                      setOpen(false)
                    }
                  }}
                  className={cn(
                    'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                    active ? 'text-[var(--fg)]' : 'text-[var(--fg-muted)] hover:text-[var(--fg)]',
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-[var(--accent-soft)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </a>
              )
            })}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="relative z-10 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Keeps logo/menu balance on desktop so center nav stays visually centered */}
          <div className="hidden w-11 lg:block" aria-hidden />
        </div>

        {open ? (
          <nav
            className="lg:hidden mt-2 glass rounded-2xl border border-[var(--border)] p-4 shadow-[var(--shadow-soft)]"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-1">
              {PRIMARY_NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={isHome ? `#${item.id}` : item.href}
                    className="block rounded-xl px-3 py-3 text-sm font-medium text-[var(--fg-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--fg)]"
                    onClick={(event) => {
                      if (item.id === 'hero' && isHome) {
                        event.preventDefault()
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                      setOpen(false)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  )
}
