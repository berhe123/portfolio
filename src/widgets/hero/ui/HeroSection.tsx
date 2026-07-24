import { motion, useReducedMotion } from 'framer-motion'
import { Download, Mail, MapPin, Phone } from 'lucide-react'
import { SITE } from '@/shared/config/site'
import { Button } from '@/shared/ui/button'
import { GithubIcon, LinkedinIcon } from '@/shared/ui/brand-icons'

const chips = [
  {
    id: 'location',
    label: SITE.location,
    href: undefined as string | undefined,
    icon: MapPin,
    external: false,
  },
  {
    id: 'email',
    label: SITE.email,
    href: undefined as string | undefined,
    icon: Mail,
    external: false,
  },
  {
    id: 'phone',
    label: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s+/g, '')}`,
    icon: Phone,
    external: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: SITE.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: SITE.github,
    icon: GithubIcon,
    external: true,
  },
]

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative flex h-[100svh] max-h-[100svh] items-center justify-center overflow-hidden bg-[var(--bg)] px-4 pb-5 pt-[4.25rem] sm:pt-[4.75rem]"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.div
          className="mb-3 sm:mb-4"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto">
            <div
              className="absolute -inset-2.5 rounded-full bg-[var(--accent)]/15 blur-2xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-full border-2 border-[var(--accent)]/70 p-1.5 shadow-[var(--shadow-soft)]">
              <div className="overflow-hidden rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)]">
                <img
                  src={SITE.profileImage}
                  alt={`${SITE.fullName} — profile photo`}
                  width={180}
                  height={180}
                  className="aspect-square h-auto w-[112px] object-cover object-center sm:w-[128px] md:w-[140px]"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-3 inline-flex items-center gap-2.5 rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)]/80 px-4 py-1.5 text-xs sm:mb-4 sm:text-sm text-[var(--fg-muted)] backdrop-blur"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.04 }}
        >
          <span className="relative flex h-2.5 w-2.5" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          </span>
          <span>
            <span className="font-medium text-[var(--accent)]">{SITE.terminalUser}</span>
            <span className="text-[var(--fg-subtle)]"> · Berhe 2026</span>
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-[clamp(2.4rem,7vw,4.75rem)] font-bold leading-[1.05] tracking-tight"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[var(--fg)]">{SITE.firstName}</span>
          {SITE.lastName ? (
            <>
              {' '}
              <span className="text-[var(--accent)]">{SITE.lastName}</span>
            </>
          ) : (
            <span className="text-[var(--accent)]">.</span>
          )}
        </motion.h1>

        <motion.p
          className="mt-2.5 text-base text-[var(--fg-muted)] sm:mt-3 sm:text-lg"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
        >
          {SITE.title}
        </motion.p>

        <motion.p
          className="mt-2 max-w-2xl text-sm text-[var(--accent)] sm:text-base"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
        >
          {SITE.stackLine}
        </motion.p>

        <motion.div
          className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:mt-5 sm:gap-2.5"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          {chips.map((chip) => {
            const Icon = chip.icon
            const className =
              'inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)]/60 px-3 py-1.5 text-xs sm:px-3.5 sm:py-2 sm:text-sm text-[var(--fg-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--fg)]'

            if (!chip.href) {
              return (
                <span key={chip.id} className={className}>
                  <Icon className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden />
                  {chip.label}
                </span>
              )
            }

            return (
              <a
                key={chip.id}
                href={chip.href}
                target={chip.external ? '_blank' : undefined}
                rel={chip.external ? 'noreferrer' : undefined}
                className={className}
              >
                <Icon className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden />
                {chip.label}
              </a>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-4 flex flex-col items-center gap-3 sm:mt-5 sm:gap-4"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24 }}
        >
          <a
            href="#summary"
            className="inline-flex h-8 w-5 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--fg-subtle)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            aria-label="Scroll to summary"
          >
            <motion.span
              className="mt-0.5 h-1.5 w-1 rounded-full bg-current"
              animate={reduceMotion ? undefined : { y: [0, 5, 0], opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${SITE.email}`}>
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={SITE.cvUrl} download>
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
