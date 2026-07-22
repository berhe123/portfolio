import { architecturePrinciples } from '@/content/sections'
import { Reveal } from '@/shared/ui/reveal'
import { SectionHeading } from '@/shared/ui/section-heading'

export function ArchitectureSection() {
  return (
    <section id="architecture" className="section-pad">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Architecture"
          title="Principles that keep systems coherent."
          description="Decisions I return to when complexity rises — boundaries, contracts, and designs optimized for change."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {architecturePrinciples.map((principle, index) => (
            <Reveal key={principle.id} delay={0.05 * index}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition-colors hover:border-[var(--accent)]/40">
                <div
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <span className="font-display text-sm font-semibold text-[var(--accent)] tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-lg md:text-xl font-semibold tracking-tight text-[var(--fg)]">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {principle.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
