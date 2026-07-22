import { useMemo, useState, type FormEvent } from 'react'
import { BookOpen, Disc3, Mail } from 'lucide-react'
import { nowPlaying, readingList } from '@/content/sections'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Reveal } from '@/shared/ui/reveal'
import { SectionHeading } from '@/shared/ui/section-heading'
import { cn } from '@/shared/lib/cn'
import { GithubIcon } from '@/shared/ui/brand-icons'
/** Deterministic pseudo-contribution levels for a polished heatmap placeholder. */
function buildHeatmap(weeks = 52, days = 7): number[][] {
  const cells: number[][] = []
  for (let w = 0; w < weeks; w++) {
    const column: number[] = []
    for (let d = 0; d < days; d++) {
      const seed = (w * 17 + d * 31 + 11) % 100
      if (seed < 28) column.push(0)
      else if (seed < 48) column.push(1)
      else if (seed < 68) column.push(2)
      else if (seed < 85) column.push(3)
      else column.push(4)
    }
    cells.push(column)
  }
  return cells
}

const LEVEL_CLASS = [
  'bg-[var(--bg-muted)]',
  'bg-[var(--accent)]/25',
  'bg-[var(--accent)]/45',
  'bg-[var(--accent)]/70',
  'bg-[var(--accent)]',
] as const

export function ExtrasSection() {
  const heatmap = useMemo(() => buildHeatmap(), [])
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function onNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section id="extras" className="section-pad">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Extras"
          title="Small signals from the workshop."
          description="What’s on rotation, what I’m reading, and a few living widgets that keep the portfolio feeling alive."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="glass h-full rounded-2xl border border-[var(--border)] p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Disc3 className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="eyebrow">Now Playing</p>
                  <p className="text-xs text-[var(--fg-subtle)]">{nowPlaying.status}</p>
                </div>
              </div>
              <div className="mt-6 flex items-end gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[var(--bg-muted)]">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/40 via-[var(--accent)]/10 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex items-end justify-center gap-0.5 pb-3" aria-hidden>
                    {[0.45, 0.8, 0.55, 0.95, 0.4].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 rounded-full bg-[var(--accent)] animate-pulse"
                        style={{
                          height: `${h * 100}%`,
                          animationDelay: `${i * 120}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="font-display text-lg font-semibold tracking-tight text-[var(--fg)] truncate">
                    {nowPlaying.track}
                  </p>
                  <p className="mt-1 text-sm text-[var(--fg-muted)]">{nowPlaying.artist}</p>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="glass h-full rounded-2xl border border-[var(--border)] p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                  <BookOpen className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="eyebrow">Reading</p>
                  <p className="text-xs text-[var(--fg-subtle)]">Currently on the shelf</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {readingList.map((book) => (
                  <li
                    key={book.id}
                    className="flex items-start justify-between gap-4 border-b border-[var(--border)] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm font-medium text-[var(--fg)]">{book.title}</span>
                    <span className="shrink-0 text-xs text-[var(--fg-subtle)]">{book.author}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <article className="glass rounded-2xl border border-[var(--border)] p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                    <GithubIcon className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="eyebrow">GitHub</p>
                    <p className="text-xs text-[var(--fg-subtle)]">
                      Contribution graph · illustrative placeholder
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-[var(--fg-subtle)]">
                  <span>Less</span>
                  {LEVEL_CLASS.map((cls, i) => (
                    <span key={i} className={cn('h-2.5 w-2.5 rounded-sm', cls)} />
                  ))}
                  <span>More</span>
                </div>
              </div>

              <div className="mt-5 overflow-x-auto pb-1">
                <div
                  className="inline-grid gap-[3px]"
                  style={{
                    gridTemplateColumns: `repeat(${heatmap.length}, minmax(0, 1fr))`,
                    gridTemplateRows: 'repeat(7, minmax(0, 1fr))',
                    gridAutoFlow: 'column',
                  }}
                  role="img"
                  aria-label="GitHub-style contribution heatmap placeholder"
                >
                  {heatmap.map((week, wi) =>
                    week.map((level, di) => (
                      <span
                        key={`${wi}-${di}`}
                        className={cn(
                          'h-2.5 w-2.5 rounded-[2px] sm:h-3 sm:w-3',
                          LEVEL_CLASS[level] ?? LEVEL_CLASS[0],
                        )}
                      />
                    )),
                  )}
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.14} className="lg:col-span-2">
            <article className="glass rounded-2xl border border-[var(--border)] p-6">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-md">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                      <Mail className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="eyebrow">Newsletter</p>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-[var(--fg)]">
                    Occasional notes on product engineering.
                  </h3>
                  <p className="mt-2 text-sm text-[var(--fg-muted)]">
                    No spam — just architecture, craft, and shipping lessons when there’s something worth sharing.
                  </p>
                </div>

                {subscribed ? (
                  <p className="text-sm font-medium text-[var(--accent)] md:pb-2">
                    You’re on the list. Thanks for joining.
                  </p>
                ) : (
                  <form
                    onSubmit={onNewsletter}
                    className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
                  >
                    <Input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-label="Email for newsletter"
                    />
                    <Button type="submit" className="shrink-0">
                      Subscribe
                    </Button>
                  </form>
                )}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
