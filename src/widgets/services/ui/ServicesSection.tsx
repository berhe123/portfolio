import { Check } from 'lucide-react'
import { services } from '@/content/sections'
import { getIcon } from '@/shared/ui/icon-map'
import { Reveal } from '@/shared/ui/reveal'
import { SectionHeading } from '@/shared/ui/section-heading'

export function ServicesSection() {
  return (
    <section id="services" className="section-pad">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Services"
          title="How I help teams ship better products."
          description="Engagements focused on clarity, craft, and systems that stay coherent under real product pressure."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = getIcon(service.icon)
            return (
              <Reveal key={service.id} delay={0.06 * index}>
                <article className="group glass relative h-full overflow-hidden rounded-2xl border border-[var(--border)] p-6 md:p-8 transition-colors hover:border-[var(--accent)]/50">
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--accent)]/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display text-xl md:text-2xl font-semibold tracking-tight text-[var(--fg)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-[var(--fg-muted)]">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {service.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-center gap-2.5 text-sm text-[var(--fg-muted)]"
                      >
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                          <Check className="h-3 w-3" aria-hidden />
                        </span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
