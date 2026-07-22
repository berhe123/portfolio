import { ArrowUpRight, Clock } from 'lucide-react'
import { blogPosts } from '@/content/sections'
import { Badge } from '@/shared/ui/badge'
import { Reveal } from '@/shared/ui/reveal'
import { SectionHeading } from '@/shared/ui/section-heading'

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(iso))
}

export function BlogSection() {
  return (
    <section id="blog" className="section-pad">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Blog"
          title="Notes on craft, systems, and shipping."
          description="Writing is warming up. These essays are queued — polished, practical, and coming soon."
        />

        <div className="mb-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-3.5 py-1.5 text-xs font-semibold text-[var(--accent)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              </span>
              Coming soon
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.id} delay={0.06 * index}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition-colors hover:border-[var(--accent)]/40">
                <div className="flex items-center justify-between gap-3 text-xs text-[var(--fg-subtle)]">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" aria-hidden />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg md:text-xl font-semibold tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--fg-subtle)] group-hover:text-[var(--accent)] transition-colors">
                    Preview
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </div>

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)]/40 via-transparent to-transparent opacity-60"
                  aria-hidden
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
