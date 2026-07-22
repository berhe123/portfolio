import { processSteps } from '@/content/sections'
import { Reveal } from '@/shared/ui/reveal'
import { SectionHeading } from '@/shared/ui/section-heading'

export function ProcessSection() {
  return (
    <section id="process" className="section-pad">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Process"
          title="A calm path from ambiguity to shipped."
          description="A repeatable delivery rhythm that protects quality without slowing momentum."
        />

        <div className="relative">
          <div
            className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent md:block"
            aria-hidden
          />
          <ol className="grid list-none gap-4 md:grid-cols-5 md:gap-3 p-0 m-0">
            {processSteps.map((step, index) => (
              <li key={step.id} className="h-full">
                <Reveal delay={0.07 * index} className="h-full">
                  <div className="relative glass h-full rounded-2xl border border-[var(--border)] p-5 md:p-6">
                    <span className="font-display text-3xl font-bold tracking-tight text-[var(--accent)]/80">
                      {step.step}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-[var(--fg)]">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[var(--fg-muted)]">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
