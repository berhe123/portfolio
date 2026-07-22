import { MapPin } from 'lucide-react'
import { experiences } from '@/content/experience'
import { Badge } from '@/shared/ui/badge'
import { Reveal } from '@/shared/ui/reveal'

export function ExperienceSection() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-premium">
        <Reveal className="mb-8 md:mb-10 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl leading-[1.15] tracking-tight text-[var(--fg)]">
            Work Experience
          </h2>
        </Reveal>

        <div className="relative">
          <div
            className="absolute left-0 md:left-[7.5rem] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/35 to-transparent hidden sm:block"
            aria-hidden
          />

          <ul className="space-y-10 md:space-y-14 list-none p-0 m-0">
            {experiences.map((item, index) => (
              <li key={item.id}>
                <Reveal delay={0.05 * index}>
                  <div className="relative grid gap-6 md:grid-cols-[7.5rem_1fr] md:gap-10">
                    <div className="md:pt-1">
                      <p className="text-sm font-semibold text-[var(--accent)] tabular-nums">
                        {item.period}
                      </p>
                      <p className="mt-2 flex items-center gap-1.5 text-xs text-[var(--fg-subtle)]">
                        <MapPin className="h-3 w-3 shrink-0" aria-hidden />
                        {item.location}
                      </p>
                    </div>

                    <article className="relative rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] p-6 md:p-8 shadow-[var(--shadow-soft)] ring-1 ring-[var(--accent)]/10 transition-[border-color,box-shadow] duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_35%,transparent),var(--shadow-soft)]">
                      <span
                        className="absolute -left-[1.35rem] top-8 hidden md:block h-2.5 w-2.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg)] shadow-[var(--shadow-glow)]"
                        aria-hidden
                      />
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                        <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-[var(--fg)]">
                          {item.title}
                        </h3>
                        <p className="text-sm font-medium text-[var(--accent)]">{item.company}</p>
                      </div>
                      <p className="mt-4 text-sm md:text-base leading-relaxed text-[var(--fg-muted)]">
                        {item.description}
                      </p>

                      <ul className="mt-5 space-y-2.5">
                        {item.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex gap-3 text-sm leading-relaxed text-[var(--fg-muted)]"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                              aria-hidden
                            />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border)] pt-5">
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="accent">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </article>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
