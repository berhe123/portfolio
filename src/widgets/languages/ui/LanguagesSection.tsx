import { languagesContent } from '@/content/languages'
import { Reveal } from '@/shared/ui/reveal'
import { SectionTitle } from '@/shared/ui/section-title'

export function LanguagesSection() {
  return (
    <section id="languages" className="section-pad">
      <div className="container-premium">
        <Reveal className="mb-8 md:mb-10 text-left">
          <SectionTitle>Languages</SectionTitle>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {languagesContent.languages.map((lang, index) => (
            <Reveal key={lang.id} delay={0.05 * index}>
              <article className="h-full rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] p-5 sm:p-6 shadow-[var(--shadow-soft)] ring-1 ring-[var(--accent)]/10 transition-[border-color,box-shadow] duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_35%,transparent),var(--shadow-soft)]">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg sm:text-xl font-semibold tracking-tight text-[var(--fg)]">
                    {lang.name}
                  </h3>
                  <p className="text-sm font-medium text-[var(--accent)]">{lang.level}</p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]">{lang.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
