import { education } from '@/content/education'
import { Reveal } from '@/shared/ui/reveal'

export function EducationSection() {
  return (
    <section id="education" className="section-pad">
      <div className="container-premium">
        <Reveal className="mb-8 md:mb-10 text-left">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.15] tracking-tight text-[var(--fg)]">
            Education
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.id} delay={0.05 * index}>
              <article className="h-full rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] p-6 md:p-8 shadow-[var(--shadow-soft)] ring-1 ring-[var(--accent)]/10 transition-[border-color,box-shadow] duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_35%,transparent),var(--shadow-soft)]">
                <p className="text-sm font-semibold tabular-nums text-[var(--accent)]">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-lg sm:text-xl md:text-[1.35rem] font-semibold tracking-tight text-[var(--fg)]">
                  {item.degree}
                </h3>
                <p className="mt-2 text-sm font-medium text-[var(--accent)]">
                  {item.school}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
