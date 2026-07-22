import { ArrowUp, Mail } from 'lucide-react'
import { SITE, SOCIAL_LINKS } from '@/shared/config/site'
import { GithubIcon, LinkedinIcon } from '@/shared/ui/brand-icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative py-12">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
        aria-hidden
      />
      <div className="container-premium flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-bold tracking-tight text-[var(--fg)]">
            {SITE.name}
          </p>
          <p className="mt-2 text-sm text-[var(--fg-muted)] max-w-md">{SITE.tagline}</p>
          <p className="mt-4 text-xs text-[var(--fg-subtle)]">
            © {year} {SITE.fullName}.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 h-10 text-xs font-semibold text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-[var(--border-strong)] transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      <div className="container-premium mt-6">
        <p className="sr-only">Social links: {SOCIAL_LINKS.map((l) => l.label).join(', ')}</p>
      </div>
    </footer>
  )
}
