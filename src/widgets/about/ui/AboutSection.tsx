import { aboutContent } from '@/content/sections'
import { Reveal } from '@/shared/ui/reveal'

export function AboutSection() {
  return (
    <section id="summary" className="section-pad">
      <div className="container-premium">
        <Reveal className="mb-6 md:mb-8 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl leading-[1.15] tracking-tight text-[var(--fg)]">
            {aboutContent.title}
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <article className="rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] p-5 sm:p-6 md:p-8 shadow-[var(--shadow-soft)] ring-1 ring-[var(--accent)]/10 transition-[border-color,box-shadow] duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_35%,transparent),var(--shadow-soft)]">
            <div className="space-y-4 md:space-y-5">
              {aboutContent.biography.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
