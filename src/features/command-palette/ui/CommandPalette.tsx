import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Command } from 'cmdk'
import {
  Briefcase,
  FolderGit2,
  Home,
  Moon,
  Sun,
  User,
  Wrench,
} from 'lucide-react'
import { projects } from '@/content/projects'
import { NAV_ITEMS } from '@/shared/config/site'
import { useThemeStore, useUiStore } from '@/shared/lib/store'
import { cn } from '@/shared/lib/cn'

export function CommandPalette() {
  const navigate = useNavigate()
  const { commandOpen, setCommandOpen } = useUiStore()
  const { theme, toggleTheme } = useThemeStore()

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setCommandOpen(!commandOpen)
      }
      if (event.key === 'Escape') setCommandOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [commandOpen, setCommandOpen])

  const navItems = useMemo(
    () =>
      NAV_ITEMS.map((item) => ({
        ...item,
        icon:
          item.id === 'summary'
            ? User
            : item.id === 'experience'
              ? Briefcase
              : item.id === 'projects'
                ? FolderGit2
                : item.id === 'tech-stack'
                  ? Wrench
                  : Home,
      })),
    [],
  )

  const run = (fn: () => void) => {
    setCommandOpen(false)
    fn()
  }

  if (!commandOpen) return null

  return (
    <div className="fixed inset-0 z-[90]">
      <button
        type="button"
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
        aria-label="Close command palette"
        onClick={() => setCommandOpen(false)}
      />
      <div className="relative mx-auto mt-[12vh] w-[min(560px,calc(100%-1.5rem))]">
        <Command
          className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[var(--shadow-soft)]"
          label="Command palette"
        >
          <Command.Input
            placeholder="Search pages, projects, actions…"
            className="h-14 w-full border-b border-[var(--border)] bg-transparent px-5 text-sm outline-none placeholder:text-[var(--fg-subtle)]"
          />
          <Command.List className="max-h-[360px] overflow-y-auto p-2">
            <Command.Empty className="px-3 py-8 text-center text-sm text-[var(--fg-muted)]">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="px-2 py-2 text-xs text-[var(--fg-subtle)]">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Command.Item
                    key={item.id}
                    value={item.label}
                    onSelect={() =>
                      run(() => {
                        navigate('/')
                        requestAnimationFrame(() => {
                          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                        })
                      })
                    }
                    className={cn(
                      'flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[var(--fg-muted)]',
                      'data-[selected=true]:bg-[var(--accent-soft)] data-[selected=true]:text-[var(--fg)]',
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Command.Item>
                )
              })}
            </Command.Group>

            <Command.Group heading="Projects" className="px-2 py-2 text-xs text-[var(--fg-subtle)]">
              {projects.map((project) => (
                <Command.Item
                  key={project.id}
                  value={`${project.name} ${project.technologies.join(' ')}`}
                  onSelect={() => run(() => navigate(`/projects/${project.slug}`))}
                  className={cn(
                    'flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[var(--fg-muted)]',
                    'data-[selected=true]:bg-[var(--accent-soft)] data-[selected=true]:text-[var(--fg)]',
                  )}
                >
                  <FolderGit2 className="h-4 w-4" />
                  {project.name}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Actions" className="px-2 py-2 text-xs text-[var(--fg-subtle)]">
              <Command.Item
                value="Toggle theme"
                onSelect={() => run(toggleTheme)}
                className={cn(
                  'flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[var(--fg-muted)]',
                  'data-[selected=true]:bg-[var(--accent-soft)] data-[selected=true]:text-[var(--fg)]',
                )}
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                Switch to {theme === 'dark' ? 'light' : 'dark'} mode
              </Command.Item>
            </Command.Group>
          </Command.List>
          <div className="flex items-center justify-between border-t border-[var(--border)] px-4 py-2 text-[11px] text-[var(--fg-subtle)]">
            <span>Navigate with ↑↓ · Enter to select</span>
            <kbd className="rounded border border-[var(--border)] px-1.5 py-0.5">Esc</kbd>
          </div>
        </Command>
      </div>
    </div>
  )
}
