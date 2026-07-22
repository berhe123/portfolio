import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import type { ProjectCaseStudy } from '@/shared/types/content'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import { Reveal } from '@/shared/ui/reveal'
import { cn } from '@/shared/lib/cn'
import { GithubIcon } from '@/shared/ui/brand-icons'

interface ProjectCaseStudyViewProps {
  project: ProjectCaseStudy
}

export function ProjectCaseStudyView({ project }: ProjectCaseStudyViewProps) {
  return (
    <article className="pb-24">
      <section
        className={cn('relative overflow-hidden pt-28 pb-16 mesh-bg bg-gradient-to-br', project.gradient)}
      >
        <div className="container-premium relative z-10">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <h1 className="font-display text-4xl md:text-6xl tracking-tight max-w-4xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-[var(--fg-muted)] leading-relaxed">
              {project.shortDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live demo
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-3xl">
              {[
                ['Year', project.year],
                ['Role', project.role],
                ['Stack', `${project.technologies.length} technologies`],
                ['Status', 'Live'],
              ].map(([label, value]) => (
                <div key={label} className="glass rounded-2xl p-4 border border-[var(--border)]">
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-[var(--fg-subtle)]">
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      <div className="container-premium mt-16 grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="lg:sticky lg:top-28 h-fit space-y-6">
          <Reveal>
            <div className="glass rounded-2xl border border-[var(--border)] p-6">
              <h2 className="font-display text-lg mb-4">Tech stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--fg-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div
              className={cn(
                'relative overflow-hidden rounded-2xl border border-[var(--border)] min-h-[220px] bg-gradient-to-br',
                project.gradient,
              )}
            >
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }}
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2), transparent 35%)',
                  backgroundSize: '160% 160%',
                }}
              />
              <div className="absolute inset-0 flex items-end p-6">
                <p className="text-sm text-white/80">Animated preview surface</p>
              </div>
            </div>
          </Reveal>
        </aside>

        <div className="space-y-12">
          {[
            ['Overview', project.overview],
            ['Problem', project.problem],
            ['Solution', project.solution],
            ['Architecture', project.architecture],
          ].map(([title, body], i) => (
            <Reveal key={title} delay={i * 0.04}>
              <section>
                <h2 className="font-display text-2xl tracking-tight mb-4">{title}</h2>
                <p className="text-[var(--fg-muted)] leading-relaxed text-base md:text-lg">{body}</p>
              </section>
            </Reveal>
          ))}

          <Reveal>
            <section>
              <h2 className="font-display text-2xl tracking-tight mb-4">Features</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-sm text-[var(--fg-muted)]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="font-display text-2xl tracking-tight mb-4">Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((item) => (
                  <li key={item} className="flex gap-3 text-[var(--fg-muted)] leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="font-display text-2xl tracking-tight mb-4">Lessons learned</h2>
              <ul className="space-y-3">
                {project.lessons.map((item) => (
                  <li key={item} className="flex gap-3 text-[var(--fg-muted)] leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>
      </div>
    </article>
  )
}
