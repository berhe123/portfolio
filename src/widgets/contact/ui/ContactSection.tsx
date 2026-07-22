import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Loader2, Mail, MapPin, Send } from 'lucide-react'
import { SITE } from '@/shared/config/site'
import { cn } from '@/shared/lib/cn'
import { Button } from '@/shared/ui/button'
import { Input, Textarea } from '@/shared/ui/input'
import { Reveal } from '@/shared/ui/reveal'
import { SectionHeading } from '@/shared/ui/section-heading'
import { GithubIcon, LinkedinIcon } from '@/shared/ui/brand-icons'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface FormState {
  name: string
  email: string
  message: string
}

const INITIAL: FormState = { name: '', email: '', message: '' }

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: Mail,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Connect',
    href: SITE.linkedin,
    icon: LinkedinIcon,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'Follow',
    href: SITE.github,
    icon: GithubIcon,
  },
  {
    id: 'location',
    label: 'Location',
    value: SITE.location,
    href: undefined as string | undefined,
    icon: MapPin,
  },
]

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      })

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again or email me directly.')
      }

      setStatus('success')
      setForm(INITIAL)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send right now. Please email me directly.',
      )
    }
  }

  return (
    <section id="contact" className="section-pad">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something excellent."
          description="Tell me about a role, product, or problem you’re solving."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal>
            <div className="space-y-4">
              {contactLinks.map((link) => {
                const Icon = link.icon
                const content = (
                  <>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--fg-subtle)]">
                        {link.label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-medium text-[var(--fg)]">
                        {link.value}
                      </span>
                    </span>
                  </>
                )

                if (link.href) {
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      target={link.id === 'email' ? undefined : '_blank'}
                      rel="noreferrer"
                      className="glass flex items-center gap-4 rounded-2xl border border-[var(--border)] p-4 transition-colors hover:border-[var(--accent)]/50"
                    >
                      {content}
                    </a>
                  )
                }

                return (
                  <div
                    key={link.id}
                    className="glass flex items-center gap-4 rounded-2xl border border-[var(--border)] p-4"
                  >
                    {content}
                  </div>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass relative overflow-hidden rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-[var(--shadow-soft)]">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="flex min-h-[22rem] flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 280, damping: 18 }}
                      className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]"
                    >
                      <CheckCircle2 className="h-8 w-8" aria-hidden />
                    </motion.div>
                    <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-[var(--fg)]">
                      Message sent
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--fg-muted)]">
                      Thanks for reaching out. I’ll get back to you as soon as I can — usually within
                      a couple of days.
                    </p>
                    <Button
                      type="button"
                      variant="secondary"
                      className="mt-8"
                      onClick={() => setStatus('idle')}
                    >
                      Send another
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    onSubmit={onSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--fg-subtle)]">
                          Name
                        </span>
                        <Input
                          name="name"
                          autoComplete="name"
                          required
                          placeholder="Your name"
                          value={form.name}
                          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                          disabled={status === 'submitting'}
                        />
                      </label>
                      <label className="block space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--fg-subtle)]">
                          Email
                        </span>
                        <Input
                          type="email"
                          name="email"
                          autoComplete="email"
                          required
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                          disabled={status === 'submitting'}
                        />
                      </label>
                    </div>

                    <label className="block space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--fg-subtle)]">
                        Message
                      </span>
                      <Textarea
                        name="message"
                        required
                        placeholder="Tell me about the role, product, or problem you’re solving…"
                        value={form.message}
                        onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                        disabled={status === 'submitting'}
                        className="min-h-40"
                      />
                    </label>

                    {errorMessage ? (
                      <p role="alert" className={cn('text-sm text-[var(--danger)]')}>
                        {errorMessage}
                      </p>
                    ) : null}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send message
                          <Send className="h-4 w-4" aria-hidden />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
