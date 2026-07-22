import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '@/content/projects'
import { Reveal } from '@/shared/ui/reveal'
import { cn } from '@/shared/lib/cn'

export function ProjectsSection() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-premium">
        <Reveal className="mb-7 md:mb-9 text-left">
          <h2 className="font-display text-2xl sm:text-[1.75rem] md:text-[2rem] leading-[1.15] tracking-tight text-[var(--fg)]">
            Projects
          </h2>
        </Reveal>

        <div className="grid gap-5 md:gap-6">
          {projects.map((project, index) => {
            const number = String(index + 1).padStart(2, '0')
            const highlights = project.features.slice(0, 3)

            return (
              <Reveal key={project.id} delay={Math.min(index * 0.05, 0.25)}>
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  aria-label={`Open ${project.name} live demo`}
                  className={cn(
                    'group relative block cursor-pointer overflow-hidden rounded-2xl border border-[var(--border-strong)]',
                    'bg-[var(--bg-elevated)] shadow-[var(--shadow-soft)] outline-none ring-1 ring-[var(--accent)]/10',
                    'transition-[border-color,box-shadow] duration-300',
                    'hover:border-[var(--accent)] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_35%,transparent),var(--shadow-soft)]',
                    'focus-visible:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]/30',
                  )}
                >
                  <div className="relative flex flex-col gap-4 p-5 sm:gap-5 sm:p-6 md:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="inline-flex items-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-2.5 py-0.5 font-mono text-[11px] font-semibold tracking-wide text-[var(--accent)]">
                          {number}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--fg-subtle)]">
                          {project.year} · {project.role}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[var(--border)] bg-[var(--bg)]/60 px-2 py-0.5 text-[10px] font-medium tracking-wide text-[var(--fg-subtle)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display text-lg sm:text-xl md:text-[1.35rem] font-semibold tracking-tight text-[var(--fg)] transition-colors group-hover:text-[var(--accent)]">
                        {project.name}
                      </h3>

                      <p className="mt-3 text-[13px] sm:text-sm leading-[1.7] text-[var(--fg-muted)]">
                        {project.shortDescription}
                      </p>
                      <p className="mt-2.5 text-[13px] sm:text-sm leading-[1.7] text-[var(--fg-muted)]">
                        {project.overview}
                      </p>

                      <ul className="mt-5 space-y-2.5">
                        {highlights.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-relaxed text-[var(--fg-muted)]"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                              aria-hidden
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <ul className="mt-5 flex flex-wrap gap-1.5 list-none p-0 m-0 border-t border-[var(--border)] pt-4">
                        {project.technologies.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-md border border-[var(--border)] bg-[var(--bg)]/70 px-2 py-1 text-[10px] sm:text-[11px] font-medium tracking-wide text-[var(--fg-subtle)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-3.5 py-2 text-[11px] sm:text-xs font-semibold text-[var(--accent-fg)] transition-all group-hover:brightness-110">
                        Live demo
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      </span>
                    </div>
                  </div>
                </motion.a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
