'use client'

import { useCallback, useEffect, useId, useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { ArrowRight, BookOpen, Loader2, PenLine, Plus, Target, Trash2 } from 'lucide-react'
import FullLengthProgress from '@/components/FullLengthProgress'
import { signInUrl, signUpUrl } from '@/lib/auth-redirect'
import { SAT_DOMAINS, type SatDomainKey } from '@/lib/sat-domains'
import {
  BLUEBOOK_SOURCES,
  DOMAIN_BAND_MAX,
  OFFICIAL_SAT_SOURCE,
  validateBluebookEntry,
  type DomainBands,
} from '@/lib/sat-bluebook'
import type { BluebookEntryView, BluebookPlan } from '@/lib/sat-bluebook-server'

interface Payload {
  entries: BluebookEntryView[]
  latest: BluebookEntryView | null
  plan: BluebookPlan | null
}

const card = 'rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800'
const inputCls =
  'mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-ring dark:border-gray-600 dark:bg-gray-900 dark:text-white'
const labelCls = 'block text-xs font-semibold text-gray-700 dark:text-gray-300'
const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring'

const CALLBACK = '/sat/bluebook'

function formatDay(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
}

function todayIso(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

const sourceLabel = (s: string) => (s === OFFICIAL_SAT_SOURCE ? 'Official SAT (test day)' : s.replace('Bluebook Practice', 'Bluebook Practice Test'))

/** Seven segments, like the score report's Knowledge and Skills bars. */
function BandMeter({ band, label }: { band: number; label: string }) {
  return (
    <span className="inline-flex items-center gap-2" role="img" aria-label={`${label}: band ${band} of ${DOMAIN_BAND_MAX}`}>
      <span className="flex gap-0.5" aria-hidden>
        {Array.from({ length: DOMAIN_BAND_MAX }, (_, i) => (
          <span key={i} className={`h-2.5 w-3 rounded-sm ${i < band ? 'bg-accent' : 'bg-gray-200 dark:bg-gray-700'}`} />
        ))}
      </span>
      <span className="text-xs tabular-nums text-gray-600 dark:text-gray-400">
        {band}/{DOMAIN_BAND_MAX}
      </span>
    </span>
  )
}

function SignedOut() {
  return (
    <div className={card}>
      <h2 className="text-lg font-bold text-gray-900 dark:text-white">Get your Bluebook plan</h2>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
        Create a free account to log your score report. You&apos;ll get your weakest content domains, a practice set for each one and the
        lessons that teach them, and your score joins your SAT score history and superscore.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Link
          href={signUpUrl({ callbackUrl: CALLBACK })}
          className={`inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow hover:bg-accent-hover ${focusRing}`}
        >
          Create a free account <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link href={signInUrl({ callbackUrl: CALLBACK })} className={`rounded text-sm font-medium text-accent hover:underline dark:text-accent-muted ${focusRing}`}>
          I have an account
        </Link>
      </div>
    </div>
  )
}

function EntryForm({ onSaved, onCancel }: { onSaved: (p: { entry: BluebookEntryView; plan: BluebookPlan }) => void; onCancel?: () => void }) {
  const id = useId()
  const [source, setSource] = useState(BLUEBOOK_SOURCES[0])
  const [takenAt, setTakenAt] = useState(todayIso)
  const [rw, setRw] = useState('')
  const [math, setMath] = useState('')
  const [total, setTotal] = useState('')
  const [totalTouched, setTotalTouched] = useState(false)
  const [bands, setBands] = useState<DomainBands>({})
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  const autoTotal = (r: string, m: string) => {
    if (totalTouched) return
    const a = Number(r)
    const b = Number(m)
    setTotal(r && m && Number.isFinite(a) && Number.isFinite(b) ? String(a + b) : '')
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const body = { source, takenAt, rw, math, total, domains: bands }
    const check = validateBluebookEntry(body)
    if (!check.ok) {
      setError(check.error)
      return
    }
    setSaving(true)
    try {
      const res = await fetch('/api/sat/bluebook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(check.value),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.plan) throw new Error(data.error || 'Could not save your score. Try again.')
      onSaved(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save your score.')
      setSaving(false)
    }
  }

  const bandField = (key: SatDomainKey, label: string) => {
    const value = bands[key]
    return (
      <fieldset key={key} className="min-w-0">
        <legend className="text-sm font-medium text-gray-800 dark:text-gray-200">{label}</legend>
        <div className="mt-1.5 flex flex-wrap items-center gap-1">
          {Array.from({ length: DOMAIN_BAND_MAX }, (_, i) => i + 1).map((n) => {
            const on = value === n
            return (
              <label
                key={n}
                className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border text-sm font-semibold tabular-nums transition focus-within:ring-2 focus-within:ring-accent-ring ${
                  on
                    ? 'border-accent bg-accent text-accent-foreground'
                    : value !== undefined && n < value
                      ? 'border-accent-muted bg-accent-subtle text-gray-800 dark:bg-accent-light/15 dark:text-gray-100'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-accent-muted dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200'
                }`}
              >
                <input
                  type="radio"
                  name={`${id}-${key}`}
                  value={n}
                  checked={on}
                  onChange={() => setBands((b) => ({ ...b, [key]: n }))}
                  className="sr-only"
                  aria-label={`${label}: band ${n}`}
                />
                {n}
              </label>
            )
          })}
          {value !== undefined && (
            <button
              type="button"
              onClick={() =>
                setBands((b) => {
                  const next = { ...b }
                  delete next[key]
                  return next
                })
              }
              className={`ml-1 rounded px-1.5 text-xs font-medium text-gray-500 hover:underline dark:text-gray-400 ${focusRing}`}
            >
              Clear
            </button>
          )}
        </div>
      </fieldset>
    )
  }

  return (
    <form onSubmit={submit} noValidate className={`${card} space-y-5`} aria-labelledby={`${id}-title`}>
      <div>
        <h2 id={`${id}-title`} className="text-lg font-bold text-gray-900 dark:text-white">
          Log a Bluebook score
        </h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Copy the numbers from your practice score report.</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-source`} className={labelCls}>Which test</label>
          <select id={`${id}-source`} value={source} onChange={(e) => setSource(e.target.value)} className={inputCls}>
            {BLUEBOOK_SOURCES.map((s) => (
              <option key={s} value={s}>
                {sourceLabel(s)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-date`} className={labelCls}>Date taken</label>
          <input id={`${id}-date`} type="date" value={takenAt} max={todayIso()} onChange={(e) => setTakenAt(e.target.value)} className={inputCls} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div>
          <label htmlFor={`${id}-rw`} className={labelCls}>Reading and Writing</label>
          <input
            id={`${id}-rw`}
            type="number"
            inputMode="numeric"
            min={200}
            max={800}
            step={10}
            placeholder="200–800"
            value={rw}
            onChange={(e) => {
              setRw(e.target.value)
              autoTotal(e.target.value, math)
            }}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor={`${id}-math`} className={labelCls}>Math</label>
          <input
            id={`${id}-math`}
            type="number"
            inputMode="numeric"
            min={200}
            max={800}
            step={10}
            placeholder="200–800"
            value={math}
            onChange={(e) => {
              setMath(e.target.value)
              autoTotal(rw, e.target.value)
            }}
            className={inputCls}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor={`${id}-total`} className={labelCls}>Total</label>
          <input
            id={`${id}-total`}
            type="number"
            inputMode="numeric"
            min={400}
            max={1600}
            step={10}
            placeholder="400–1600"
            value={total}
            onChange={(e) => {
              setTotal(e.target.value)
              setTotalTouched(true)
            }}
            className={inputCls}
          />
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">Knowledge and Skills (optional, but it sharpens your plan)</p>
        <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
          Your score report shows a bar for each content domain. Count the filled segments (1 to 7) and tap that number. Fill in all eight
          if you can; the plan uses bands once you&apos;ve entered at least two.
        </p>
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          {(['rw', 'math'] as const).map((section) => (
            <div key={section} className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {section === 'rw' ? 'Reading and Writing' : 'Math'}
              </p>
              {SAT_DOMAINS.filter((d) => d.section === section).map((d) => bandField(d.key, d.label))}
            </div>
          ))}
        </div>
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        <button
          type="submit"
          disabled={saving}
          className={`inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow hover:bg-accent-hover disabled:opacity-50 ${focusRing}`}
        >
          {saving ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Target className="h-4 w-4" aria-hidden />}
          {saving ? 'Building your plan…' : 'Save and build my plan'}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className={`rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 ${focusRing}`}
          >
            Cancel
          </button>
        )}
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Saving counts the test as a full-length: it joins your SAT score history and superscore, and your readiness bar starts over.
      </p>
    </form>
  )
}

function PlanView({ entry, plan }: { entry: BluebookEntryView; plan: BluebookPlan }) {
  return (
    <section className={card} aria-labelledby="bluebook-plan-title">
      <p className="text-xs font-bold uppercase tracking-wider text-accent dark:text-accent-muted">Your Bluebook plan</p>
      <h2 id="bluebook-plan-title" className="mt-1 text-xl font-bold text-gray-900 dark:text-white">
        {sourceLabel(entry.source)}: {entry.total}
      </h2>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        Reading and Writing {entry.rw} · Math {entry.math} · {formatDay(entry.takenAt)}
      </p>
      <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
        {plan.basis === 'bands'
          ? 'Built from your Knowledge and Skills bands: your lowest domains first.'
          : 'Built from your section scores. Next time, add your Knowledge and Skills bands for a sharper plan.'}
      </p>

      <ol className="mt-5 space-y-4">
        {plan.domains.map((d, i) => (
          <li key={d.key} className="rounded-xl border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  {i + 1}. {d.section === 'rw' ? 'Reading and Writing' : 'Math'}
                </p>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{d.label}</h3>
              </div>
              {d.band != null && <BandMeter band={d.band} label={d.label} />}
            </div>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{d.reason}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Link
                href={d.practiceHref}
                className={`inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent-hover ${focusRing}`}
              >
                <PenLine className="h-4 w-4 shrink-0" aria-hidden /> Practice {d.practiceCount} {d.label} questions
              </Link>
            </div>
            {d.lessons.length > 0 && (
              <div className="mt-3">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300">
                  <BookOpen className="h-3.5 w-3.5" aria-hidden /> Lessons
                </p>
                <ul className="mt-1 flex flex-wrap gap-1.5">
                  {d.lessons.map((l) => (
                    <li key={l.slug}>
                      <Link
                        href={l.href}
                        className={`inline-flex rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-800 hover:border-accent-muted hover:text-accent dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 ${focusRing}`}
                      >
                        {l.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-xl bg-gray-50 p-4 text-sm text-gray-700 dark:bg-gray-900/40 dark:text-gray-300">
        <p className="font-semibold text-gray-900 dark:text-white">Your full-length readiness</p>
        <p className="mt-1">
          {plan.resetsReadiness
            ? 'This test counts as your latest full-length, so your readiness bar started over. Finish two study cycles (a diagnostic plus its lessons) before your next practice test, Bluebook or StudyMondo.'
            : 'You have a more recent full-length on record, so this test joined your score history without moving your readiness bar.'}
        </p>
      </div>
      <FullLengthProgress course="sat" compact className="mt-4" />
    </section>
  )
}

export default function BluebookCompanion() {
  const { status } = useSession()
  const [data, setData] = useState<Payload | null>(null)
  const [loadError, setLoadError] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [removing, setRemoving] = useState<string | null>(null)

  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/sat/bluebook', { cache: 'no-store' })
      if (!res.ok) throw new Error('load')
      setData((await res.json()) as Payload)
      setLoadError(false)
    } catch {
      setLoadError(true)
    }
  }, [])

  useEffect(() => {
    if (status === 'authenticated') void load()
  }, [status, load])

  if (status === 'loading') return <div className="h-48 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800" aria-busy="true" />
  if (status === 'unauthenticated') return <SignedOut />
  if (!data) {
    return loadError ? (
      <p role="alert" className="text-sm text-red-700 dark:text-red-400">
        Couldn&apos;t load your scores. Refresh to try again.
      </p>
    ) : (
      <div className="h-48 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800" aria-busy="true" />
    )
  }

  const remove = async (id: string) => {
    if (!window.confirm('Remove this score? It also leaves your score history and superscore.')) return
    setRemoving(id)
    try {
      await fetch(`/api/exam-scores?id=${encodeURIComponent(id)}`, { method: 'DELETE' })
      await load()
    } finally {
      setRemoving(null)
    }
  }

  const { latest, plan, entries } = data
  const hasPlan = !!(latest && plan)

  return (
    <div className="space-y-6">
      {hasPlan && !showForm && (
        <>
          <PlanView entry={latest!} plan={plan!} />
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className={`inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:border-accent-muted dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 ${focusRing}`}
          >
            <Plus className="h-4 w-4" aria-hidden /> Log another test
          </button>
        </>
      )}
      {(!hasPlan || showForm) && (
        <EntryForm
          onCancel={hasPlan ? () => setShowForm(false) : undefined}
          onSaved={() => {
            setShowForm(false)
            void load().then(() => document.getElementById('bluebook-plan-title')?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
          }}
        />
      )}

      {entries.length > 0 && (
        <section className={card} aria-labelledby="bluebook-history-title">
          <h2 id="bluebook-history-title" className="text-sm font-bold text-gray-900 dark:text-white">
            Your College Board scores
          </h2>
          <ul className="mt-3 divide-y divide-gray-100 dark:divide-gray-700">
            {entries.map((e) => (
              <li key={e.id} className="flex flex-wrap items-center gap-x-3 gap-y-1 py-2 text-sm">
                <span className="w-24 shrink-0 text-gray-500 dark:text-gray-400">{formatDay(e.takenAt)}</span>
                <span className="min-w-0 flex-1 text-gray-800 dark:text-gray-100">{sourceLabel(e.source)}</span>
                <span className="font-semibold tabular-nums text-gray-900 dark:text-white">{e.total}</span>
                <button
                  type="button"
                  onClick={() => remove(e.id)}
                  disabled={removing === e.id}
                  aria-label={`Remove ${sourceLabel(e.source)} from ${formatDay(e.takenAt)}`}
                  className={`rounded p-1 text-gray-400 hover:text-red-600 disabled:opacity-50 dark:hover:text-red-400 ${focusRing}`}
                >
                  {removing === e.id ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Trash2 className="h-4 w-4" aria-hidden />}
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            These count toward your <Link href="/dashboard" className="font-medium text-accent hover:underline dark:text-accent-muted">score goal and superscore</Link>.
          </p>
        </section>
      )}
    </div>
  )
}
