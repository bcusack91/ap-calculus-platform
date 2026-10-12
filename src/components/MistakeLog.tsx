'use client'

/**
 * The student's mistake log for one course (/mcat/mistakes, /sat/mistakes, /act/mistakes):
 * every question they missed, skipped or flagged that they haven't yet
 * answered correctly twice since. Rows link back to the attempt the miss
 * came from; the primary button re-quizzes the filtered set (MistakeQuiz).
 */

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { ExternalLink, Flag, MinusCircle, RotateCcw, XCircle } from 'lucide-react'
import MistakeQuiz, { type MistakeCourse } from '@/components/MistakeQuiz'
import HelpLink, { HELP_ARTICLES } from '@/components/HelpLink'
import { countBySkill } from '@/lib/cars-skills'

interface MistakeRow {
  questionKey: string
  topicSlug: string
  topicTitle: string | null
  discipline: string
  source: string
  /** The attempt kind the miss came from ('qbank', 'mcat-practice', …). */
  attemptKind?: string | null
  /** CARS reasoning skill (MCAT CARS questions only). */
  skill?: string | null
  reason: 'wrong' | 'skipped' | 'flagged'
  misses: number
  correctSince: number
  lastMissedAt: string
  reviewHref: string | null
}

interface MistakesResponse {
  total: number
  retireAfter: number
  items: MistakeRow[]
  filters: { sources: string[]; sections: string[]; topics: { slug: string; title: string }[] }
}

const SOURCE_LABELS: Record<string, string> = {
  EXIT: 'Exit quiz',
  DIAGNOSTIC: 'Diagnostic',
  UNIT_TEST: 'Unit test',
  PRACTICE: 'Practice test',
  FULL_LENGTH: 'Full-length',
  ENTRANCE: 'Entrance quiz',
  LESSON: 'Lesson',
  DAILY: 'Daily question',
  COMPETITIVE: 'Competitive',
}

/** Attempt kinds whose label differs from their answer-log source. */
const ATTEMPT_KIND_LABELS: Record<string, string> = {
  qbank: 'Question bank',
}

export function sourceLabel(s: string, attemptKind?: string | null): string {
  if (attemptKind && ATTEMPT_KIND_LABELS[attemptKind]) return ATTEMPT_KIND_LABELS[attemptKind]
  return SOURCE_LABELS[s] ?? s.charAt(0) + s.slice(1).toLowerCase().replace(/_/g, ' ')
}

/** "CARS mistakes by skill": counts drawn to scale, each with its number in text. */
function CarsSkillsPanel({ items }: { items: MistakeRow[] }) {
  const counts = countBySkill(items.map((m) => ({ skill: m.skill ?? undefined })))
  if (counts.length === 0) return null
  const max = counts[0].count
  const total = counts.reduce((n, c) => n + c.count, 0)
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 dark:border-gray-700 dark:bg-gray-800" aria-labelledby="cars-skills-heading">
      <h2 id="cars-skills-heading" className="text-sm font-semibold text-gray-900 dark:text-white">CARS mistakes by reasoning skill</h2>
      <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
        {total} CARS question{total === 1 ? '' : 's'} in this view. The skills at the top are the ones to practise.
      </p>
      <ul className="mt-3 space-y-2">
        {counts.map((c) => (
          <li key={c.skill} className="grid grid-cols-[minmax(0,10rem)_1fr_auto] items-center gap-2 text-sm">
            <span className="truncate text-gray-800 dark:text-gray-100">{c.label}</span>
            <span className="h-2 overflow-hidden rounded bg-gray-200 dark:bg-gray-700" aria-hidden>
              <span className="block h-full rounded bg-accent dark:bg-accent-muted" style={{ width: `${(c.count / max) * 100}%` }} />
            </span>
            <span className="w-8 text-right font-semibold tabular-nums text-gray-900 dark:text-white">
              {c.count}
              <span className="sr-only"> mistake{c.count === 1 ? '' : 's'}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

const REASON_META = {
  wrong: { label: 'Wrong', Icon: XCircle, cls: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300' },
  skipped: { label: 'Skipped', Icon: MinusCircle, cls: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300' },
  flagged: { label: 'Flagged', Icon: Flag, cls: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300' },
} as const

const SESSION_MAX = 20
const COURSE_LABEL: Record<MistakeCourse, string> = { mcat: 'MCAT', sat: 'SAT', act: 'ACT' }

interface Filters {
  source: string
  section: string
  topic: string
  from: string
  to: string
}
const NO_FILTERS: Filters = { source: '', section: '', topic: '', from: '', to: '' }

const selectCls =
  'mt-1 block w-full rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100'

export default function MistakeLog({ course }: { course: MistakeCourse }) {
  const [filters, setFilters] = useState<Filters>(NO_FILTERS)
  const [quizzing, setQuizzing] = useState(false)
  const [reload, setReload] = useState(0)
  // The last response, tagged with the request it answered: loading is "the
  // latest response is for an older request", so no state is set in the effect body.
  const requestKey = `${course}|${JSON.stringify(filters)}|${reload}`
  const [resp, setResp] = useState<{ key: string; data: MistakesResponse | null; error: string | null }>({ key: '', data: null, error: null })

  useEffect(() => {
    let cancelled = false
    const qs = new URLSearchParams({ course })
    for (const [k, v] of Object.entries(filters)) if (v) qs.set(k, v)
    fetch(`/api/mistakes?${qs.toString()}`, { cache: 'no-store' })
      .then(async (r) => {
        if (!r.ok) throw new Error('Could not load your mistake log. Refresh to try again.')
        return r.json()
      })
      .then((d: MistakesResponse) => {
        if (!cancelled) setResp({ key: requestKey, data: d, error: null })
      })
      .catch((e) => {
        if (!cancelled) setResp((prev) => ({ key: requestKey, data: prev.data, error: e instanceof Error ? e.message : 'Could not load your mistake log.' }))
      })
    return () => {
      cancelled = true
    }
  }, [course, filters, requestKey])

  const loading = resp.key !== requestKey
  const data = resp.data
  const error = loading ? null : resp.error

  const set = (k: keyof Filters) => (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => setFilters((f) => ({ ...f, [k]: e.target.value }))
  const anyFilter = Object.values(filters).some(Boolean)
  const closeQuiz = useCallback(() => {
    setQuizzing(false)
    setReload((n) => n + 1)
  }, [])

  if (quizzing) {
    return <MistakeQuiz course={course} filters={{ source: filters.source || undefined, topic: filters.topic || undefined, section: filters.section || undefined, from: filters.from || undefined, to: filters.to || undefined }} onDone={closeQuiz} />
  }

  const items = data?.items ?? []
  const retireAfter = data?.retireAfter ?? 2
  const quizCount = Math.min(items.length, SESSION_MAX)

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Every {COURSE_LABEL[course]} question you missed, skipped or flagged lands here. Answer it correctly {retireAfter} times in a row, anywhere on the site, and it retires.
          <HelpLink article={HELP_ARTICLES.reviewAndMistakeLog} label="How the mistake log works" className="ml-1" />
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setQuizzing(true)}
            disabled={quizCount === 0 || loading}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow transition hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RotateCcw className="h-4 w-4" aria-hidden /> Re-quiz my mistakes ({quizCount})
          </button>
          {items.length > SESSION_MAX && (
            <span className="text-xs text-gray-500 dark:text-gray-400">{SESSION_MAX} at a time, newest first.</span>
          )}
        </div>
      </div>

      {data && data.total > 0 && (
        <fieldset className="grid grid-cols-1 gap-3 rounded-2xl border border-gray-200 bg-white p-4 sm:grid-cols-2 lg:grid-cols-5 dark:border-gray-700 dark:bg-gray-800">
          <legend className="sr-only">Filter your mistakes</legend>
          <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
            Source
            <select value={filters.source} onChange={set('source')} className={selectCls}>
              <option value="">All sources</option>
              {data.filters.sources.map((s) => (
                <option key={s} value={s}>{sourceLabel(s)}</option>
              ))}
            </select>
          </label>
          <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
            Section
            <select value={filters.section} onChange={set('section')} className={selectCls}>
              <option value="">All sections</option>
              {data.filters.sections.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
            Topic
            <select value={filters.topic} onChange={set('topic')} className={selectCls}>
              <option value="">All topics</option>
              {data.filters.topics.map((t) => (
                <option key={t.slug} value={t.slug}>{t.title}</option>
              ))}
            </select>
          </label>
          <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
            From
            <input type="date" value={filters.from} onChange={set('from')} max={filters.to || undefined} className={selectCls} />
          </label>
          <label className="text-xs font-medium text-gray-600 dark:text-gray-300">
            To
            <input type="date" value={filters.to} onChange={set('to')} min={filters.from || undefined} className={selectCls} />
          </label>
          {anyFilter && (
            <div className="sm:col-span-2 lg:col-span-5">
              <button
                type="button"
                onClick={() => setFilters(NO_FILTERS)}
                className="rounded text-sm font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted"
              >
                Clear filters
              </button>
            </div>
          )}
        </fieldset>
      )}

      {course === 'mcat' && !error && items.length > 0 && <CarsSkillsPanel items={items} />}

      {error ? (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300">{error}</p>
      ) : loading && !data ? (
        <div className="space-y-2" aria-busy="true">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-20 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-800" />
          ))}
        </div>
      ) : data && data.total === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-8 text-center dark:border-gray-700 dark:bg-gray-800">
          <p className="font-semibold text-gray-900 dark:text-white">Nothing in your log yet</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            When you miss, skip or flag a question on an exit quiz, diagnostic, unit test or practice test, it shows up here.
          </p>
        </div>
      ) : items.length === 0 ? (
        <p className="rounded-xl border border-gray-200 bg-white px-4 py-6 text-center text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
          No mistakes match these filters.
        </p>
      ) : (
        <ul className={`space-y-2 ${loading ? 'opacity-60' : ''}`} aria-busy={loading}>
          {items.map((m) => {
            const reason = REASON_META[m.reason] ?? REASON_META.wrong
            const title = m.topicTitle ?? (m.discipline || 'Question')
            return (
              <li key={m.questionKey} className="rounded-xl border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 dark:text-white">{title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {[m.topicTitle && m.discipline ? m.discipline : null, sourceLabel(m.source, m.attemptKind)].filter(Boolean).join(' · ')}
                    </p>
                  </div>
                  <span className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${reason.cls}`}>
                    <reason.Icon className="h-3.5 w-3.5" aria-hidden /> {reason.label}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600 dark:text-gray-300">
                  <span>Missed {m.misses}×</span>
                  <span>{m.correctSince} of {retireAfter} correct since</span>
                  <span>{new Date(m.lastMissedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  {m.reviewHref ? (
                    <Link
                      href={m.reviewHref}
                      className="ml-auto inline-flex items-center gap-1 rounded font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted"
                    >
                      Review attempt <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  ) : m.topicSlug ? (
                    <Link
                      href={`/topics/${m.topicSlug}/interactive`}
                      className="ml-auto rounded font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted"
                    >
                      Practice this topic
                    </Link>
                  ) : null}
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
