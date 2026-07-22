import { Quote } from 'lucide-react'
import { testimonials } from '@/content/sections'
import { Reveal } from '@/shared/ui/reveal'
import { SectionHeading } from '@/shared/ui/section-heading'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by product and engineering leaders."
          description="Feedback from collaborators who care about craft, clarity, and delivery quality."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delay={0.07 * index}>
              <blockquote className="glass relative flex h-full flex-col rounded-2xl border border-[var(--border)] p-6 md:p-7">
                <Quote
                  className="h-8 w-8 text-[var(--accent)]/40"
                  aria-hidden
                />
                <p className="mt-5 flex-1 text-sm md:text-[0.95rem] leading-relaxed text-[var(--fg-muted)]">
                  “{item.quote}”
                </p>
                <footer className="mt-8 border-t border-[var(--border)] pt-5">
                  <cite className="not-italic">
                    <span className="block font-display text-base font-semibold tracking-tight text-[var(--fg)]">
                      {item.name}
                    </span>
                    <span className="mt-1 block text-xs text-[var(--fg-subtle)]">
                      {item.role} · {item.company}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
