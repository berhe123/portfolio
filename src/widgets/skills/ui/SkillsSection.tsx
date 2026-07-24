import { mainStack, fullStackGroups, allSkills } from '@/content/skills'
import type { SkillItem } from '@/shared/types/content'
import { cn } from '@/shared/lib/cn'
import { getTechBrandIcon } from '@/shared/ui/tech-brand-icons'
import { Reveal } from '@/shared/ui/reveal'
import { SectionTitle } from '@/shared/ui/section-title'

function BrandIcon({ skill, size }: { skill: SkillItem; size: number }) {
  const Icon = getTechBrandIcon(skill.icon)
  if (!Icon) return null
  return (
    <Icon
      size={size}
      color={skill.color ?? 'currentColor'}
      className="shrink-0"
      aria-hidden
    />
  )
}

/** Main stack pill — soft accent border + glow */
function MainStackChip({ skill }: { skill: SkillItem }) {
  return (
    <span className="inline-flex cursor-default items-center gap-2.5 rounded-xl border border-[var(--accent)]/55 bg-[var(--bg-elevated)] px-4 py-2.5 text-sm font-medium text-[var(--fg)] shadow-[0_0_14px_0_color-mix(in_oklab,var(--accent)_22%,transparent)] transition-[border-color,box-shadow] hover:border-[var(--accent)] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_35%,transparent),0_0_14px_0_color-mix(in_oklab,var(--accent)_22%,transparent)]">
      <BrandIcon skill={skill} size={16} />
      <span>{skill.name}</span>
    </span>
  )
}

/** Smaller skill badge inside category cards — no tooltip descriptions */
function SkillBadge({ skill }: { skill: SkillItem }) {
  return (
    <span className="group inline-flex cursor-default items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg)]/80 px-2.5 py-1.5 transition-colors hover:border-[var(--accent)]/50">
      <BrandIcon skill={skill} size={14} />
      <span className="text-xs font-semibold tracking-wide text-[var(--fg-subtle)] transition-colors group-hover:text-white">
        {skill.name}
      </span>
    </span>
  )
}

function AllSkillTile({ skill }: { skill: SkillItem }) {
  return (
    <div className="group flex cursor-default flex-col items-center gap-1">
      <div
        className={cn(
          'flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)]',
          'transition-colors group-hover:border-[var(--accent)]',
        )}
      >
        <BrandIcon skill={skill} size={24} />
      </div>
      <span className="text-xs font-semibold tracking-wide text-[var(--fg-subtle)] transition-colors group-hover:text-white">
        {skill.name}
      </span>
    </div>
  )
}

export function TechStackSection() {
  return (
    <section id="tech-stack" className="section-pad">
      <div className="container-premium">
        <Reveal className="mb-8 md:mb-10 text-left">
          <SectionTitle>Technical Stack</SectionTitle>
        </Reveal>

        <div className="space-y-10 md:space-y-12">
          {/* Main stack */}
          <Reveal>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
                Main stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {mainStack.map((skill) => (
                  <MainStackChip key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Full stack — 2-column category cards */}
          <Reveal delay={0.05}>
            <div>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
                Full stack
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                {fullStackGroups.map((group) => (
                  <div
                    key={group.id}
                    className="rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] p-5 shadow-[var(--shadow-soft)] ring-1 ring-white/[0.03] transition-[border-color,box-shadow] duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_35%,transparent),var(--shadow-soft)] sm:p-6"
                  >
                    <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--fg-subtle)]">
                      {group.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <SkillBadge key={skill.id} skill={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* All skills */}
          <Reveal delay={0.1}>
            <div>
              <h3 className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
                All skills
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {allSkills.map((skill) => (
                  <AllSkillTile key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
