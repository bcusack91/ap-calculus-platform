'use client'

/**
 * Builds a custom practice set (/mcat/qbank, /sat/qbank): sections and
 * disciplines, topics (searchable), difficulty, which questions (all, never
 * answered, incorrect, flagged — counted live by GET /api/qbank/counts), how
 * many, and timed vs tutor mode. Also offers to resume an unfinished set and
 * lists recent sets with links to their reviews.
 */

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { BookOpen, Clock, History, Loader2, Play, Search, X } from 'lucide-react'
import {
  QBANK_DIFFICULTIES,
  QBANK_MAX_COUNT,
  QBANK_MIN_COUNT,
  QBANK_SECTIONS,
  sectionLabelFor,
  type QbankCounts,
  type QbankCourse,
  type QbankDifficulty,
  type QbankMode,
  type QbankPoolKind,
  type QbankSessionSummary,
  type QbankSessionView,
} from '@/lib/qbank-types'
import { hasQbankPreset, parseQbankUrlParams } from '@/lib/qbank-url'

const POOL_META: Record<QbankPoolKind, { label: string; hint: string }> = {
  all: { label: 'All questions', hint: 'Everything that matches your filters' },
  unused: { label: 'Unused', hint: "Questions you've never answered anywhere on StudyMondo" },
  incorrect: { label: 'Incorrect', hint: 'Active mistakes: answered wrong or skipped' },
  flagged: { label: 'Flagged', hint: 'Active mistakes you flagged as unsure' },
}

const DIFFICULTY_LABEL: Record<QbankDifficulty, string> = { easy: 'Easy', medium: 'Medium', hard: 'Hard' }

const card = 'rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800'
const legendCls = 'mb-2 text-sm font-semibold text-gray-900 dark:text-white'
const chip = (on: boolean, align = 'items-center') =>
  `inline-flex cursor-pointer select-none ${align} gap-2 rounded-lg border px-3 py-2 text-sm transition focus-within:ring-2 focus-within:ring-accent-ring ${
    on
      ? 'border-accent bg-accent-subtle text-gray-900 dark:bg-accent-light/15 dark:text-white'
      : 'border-gray-200 bg-white text-gray-700 hover:border-accent-muted dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200'
  }`
const countCls = 'text-xs tabular-nums text-gray-500 dark:text-gray-400'

function toggle<T>(set: T[], v: T): T[] {
  return set.includes(v) ? set.filter((x) => x !== v) : [...set, v]
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
  } catch {
    return ''
  }
}

export default function QbankBuilder({ course, onStart }: { course: QbankCourse; onStart: (s: QbankSessionView) => void }) {
  const [sections, setSections] = useState<string[]>([])
  const [disciplines, setDisciplines] = useState<string[]>([])
  const [topics, setTopics] = useState<string[]>([])
  const [difficulties, setDifficulties] = useState<QbankDifficulty[]>([])
  const [pool, setPool] = useState<QbankPoolKind>('all')
  const [count, setCount] = useState(20)
  const [mode, setMode] = useState<QbankMode>('tutor')
  const [topicQuery, setTopicQuery] = useState('')
  const [counts, setCounts] = useState<QbankCounts | null>(null)
  const [countsError, setCountsError] = useState(false)
  const [history, setHistory] = useState<{ sessions: QbankSessionSummary[]; inProgressId: string | null } | null>(null)
  const [building, setBuilding] = useState(false)
  const [resuming, setResuming] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [presetNote, setPresetNote] = useState<string | null>(null)

  // Deep links (e.g. a Bluebook plan's "practice Algebra") preset the builder
  // from the query string: /sat/qbank?domain=algebra&count=15&mode=tutor.
  // Read once on mount from window.location so the page stays static (no
  // useSearchParams suspense boundary); with no params nothing changes.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const preset = parseQbankUrlParams(window.location.search, course)
    if (!hasQbankPreset(preset)) return
    if (preset.sections) setSections(preset.sections)
    if (preset.disciplines) setDisciplines(preset.disciplines)
    if (preset.topics) setTopics(preset.topics)
    if (preset.difficulties) setDifficulties(preset.difficulties)
    if (preset.pool) setPool(preset.pool)
    if (preset.count) setCount(preset.count)
    if (preset.mode) setMode(preset.mode)
    if (preset.disciplines?.length) setPresetNote(`Set up for ${preset.disciplines.join(', ')}. Adjust anything, then start.`)
  }, [course])

  // Live counts, debounced while the student clicks around.
  const query = useMemo(() => {
    const p = new URLSearchParams({ course })
    if (sections.length) p.set('sections', sections.join(','))
    if (disciplines.length) p.set('disciplines', disciplines.join(','))
    if (topics.length) p.set('topics', topics.join(','))
    if (difficulties.length) p.set('difficulties', difficulties.join(','))
    return p.toString()
  }, [course, sections, disciplines, topics, difficulties])
  useEffect(() => {
    let cancelled = false
    const t = setTimeout(() => {
      fetch(`/api/qbank/counts?${query}`, { cache: 'no-store' })
        .then((r) => (r.ok ? r.json() : Promise.reject(new Error('counts'))))
        .then((d: QbankCounts) => {
          if (!cancelled) {
            setCounts(d)
            setCountsError(false)
          }
        })
        .catch(() => {
          if (!cancelled) setCountsError(true)
        })
    }, 250)
    return () => {
      cancelled = true
      clearTimeout(t)
    }
  }, [query])

  useEffect(() => {
    let cancelled = false
    fetch(`/api/qbank?course=${course}`, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled && d) setHistory({ sessions: Array.isArray(d.sessions) ? d.sessions : [], inProgressId: d.inProgressId ?? null })
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [course])

  const available = counts?.pools[pool] ?? null
  const maxCount = available === null ? QBANK_MAX_COUNT : Math.max(QBANK_MIN_COUNT, Math.min(QBANK_MAX_COUNT, available))
  const effectiveCount = Math.min(count, maxCount)

  // Disciplines shown: those in the selected sections (all when none are picked).
  const disciplineList = (counts?.disciplines ?? []).filter((d) => !sections.length || sections.includes(d.section) || disciplines.includes(d.id))
  const topicList = useMemo(() => {
    const q = topicQuery.trim().toLowerCase()
    return (counts?.topics ?? []).filter((t) => (t.count > 0 || topics.includes(t.slug)) && (!q || t.title.toLowerCase().includes(q)))
  }, [counts, topicQuery, topics])
  const topicTitle = (slug: string) => counts?.topics.find((t) => t.slug === slug)?.title ?? slug

  const build = async () => {
    setBuilding(true)
    setError(null)
    try {
      const r = await fetch('/api/qbank', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          course,
          count: effectiveCount,
          mode,
          pool,
          ...(sections.length ? { sections } : {}),
          ...(disciplines.length ? { disciplines } : {}),
          ...(topics.length ? { topics } : {}),
          ...(difficulties.length ? { difficulties } : {}),
        }),
      })
      const d = await r.json().catch(() => null)
      if (!r.ok || !d?.session) throw new Error(d?.error || 'Could not build that set. Try again.')
      onStart(d.session as QbankSessionView)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not build that set.')
      setBuilding(false)
    }
  }

  const resume = async (id: string) => {
    setResuming(true)
    setError(null)
    try {
      const r = await fetch(`/api/qbank/${id}`, { cache: 'no-store' })
      const d = await r.json().catch(() => null)
      if (!r.ok || !d?.session) throw new Error('Could not load that set.')
      onStart(d.session as QbankSessionView)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not load that set.')
      setResuming(false)
    }
  }

  const inProgress = history?.inProgressId ? history.sessions.find((s) => s.id === history.inProgressId) : null
  const disciplineWord = course === 'mcat' ? 'Disciplines' : 'Content domains'

  return (
    <div className="space-y-5">
      {inProgress && (
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-accent-light bg-accent-subtle p-4 dark:border-accent/40 dark:bg-accent-light/10">
          <History className="h-5 w-5 shrink-0 text-accent dark:text-accent-muted" aria-hidden />
          <p className="min-w-0 flex-1 text-sm text-gray-800 dark:text-gray-100">
            You have an unfinished {inProgress.mode} set of {inProgress.total} questions from {formatDate(inProgress.startedAt)}.
          </p>
          <button
            type="button"
            onClick={() => resume(inProgress.id)}
            disabled={resuming}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring disabled:opacity-50"
          >
            {resuming ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Play className="h-4 w-4" aria-hidden />} Resume
          </button>
        </div>
      )}

      <div className={`${card} space-y-6`}>
        {presetNote && (
          <p role="status" className="rounded-lg bg-accent-subtle px-3 py-2 text-sm text-gray-800 dark:bg-accent-light/10 dark:text-gray-100">
            {presetNote}
          </p>
        )}
        {countsError && (
          <p role="alert" className="text-sm text-red-700 dark:text-red-400">
            Couldn&apos;t load question counts. You can still build a set.
          </p>
        )}

        {/* Sections */}
        <fieldset>
          <legend className={legendCls}>Sections</legend>
          <div className="flex flex-wrap gap-2">
            {QBANK_SECTIONS[course].map((s) => {
              const n = counts?.sections.find((c) => c.id === s.id)?.count
              const on = sections.includes(s.id)
              return (
                <label key={s.id} className={chip(on)}>
                  <input type="checkbox" className="sr-only" checked={on} onChange={() => setSections((x) => toggle(x, s.id))} />
                  <span className="font-medium">{s.label}</span>
                  {n !== undefined && <span className={countCls}>{n}</span>}
                </label>
              )
            })}
          </div>
          <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">None selected = every section.</p>
        </fieldset>

        {/* Disciplines / domains */}
        {/* ACT disciplines are the sections themselves: no second row. */}
        {disciplineList.length > 0 && course !== 'act' && (
          <fieldset>
            <legend className={legendCls}>{disciplineWord}</legend>
            <div className="flex flex-wrap gap-2">
              {disciplineList.map((d) => {
                const on = disciplines.includes(d.id)
                return (
                  <label key={d.id} className={chip(on)}>
                    <input type="checkbox" className="sr-only" checked={on} onChange={() => setDisciplines((x) => toggle(x, d.id))} />
                    <span>{d.id}</span>
                    <span className={countCls}>{d.count}</span>
                  </label>
                )
              })}
            </div>
          </fieldset>
        )}

        {/* Topics */}
        <fieldset>
          <legend className={legendCls}>Topics</legend>
          {topics.length > 0 && (
            <div className="mb-2 flex flex-wrap items-center gap-1.5">
              {topics.map((slug) => (
                <button
                  key={slug}
                  type="button"
                  onClick={() => setTopics((x) => x.filter((s) => s !== slug))}
                  className="inline-flex items-center gap-1 rounded-full bg-accent-subtle px-2.5 py-1 text-xs font-medium text-gray-800 hover:bg-accent-light focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:bg-accent-light/15 dark:text-gray-100"
                  aria-label={`Remove ${topicTitle(slug)}`}
                >
                  {topicTitle(slug)} <X className="h-3 w-3" aria-hidden />
                </button>
              ))}
              <button
                type="button"
                onClick={() => setTopics([])}
                className="rounded text-xs font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted"
              >
                Clear
              </button>
            </div>
          )}
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden />
            <input
              type="search"
              value={topicQuery}
              onChange={(e) => setTopicQuery(e.target.value)}
              placeholder="Search topics"
              aria-label="Search topics"
              className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-ring dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mt-2 max-h-60 overflow-y-auto rounded-lg border border-gray-200 dark:border-gray-700">
            {counts === null ? (
              <p className="flex items-center gap-2 p-3 text-sm text-gray-500 dark:text-gray-400">
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Loading topics…
              </p>
            ) : topicList.length === 0 ? (
              <p className="p-3 text-sm text-gray-500 dark:text-gray-400">No topics match.</p>
            ) : (
              <ul className="divide-y divide-gray-100 dark:divide-gray-700">
                {topicList.map((t) => {
                  const on = topics.includes(t.slug)
                  return (
                    <li key={t.slug}>
                      <label className="flex cursor-pointer items-center gap-3 px-3 py-2 text-sm hover:bg-gray-50 focus-within:bg-gray-50 dark:hover:bg-gray-700/50 dark:focus-within:bg-gray-700/50">
                        <input
                          type="checkbox"
                          checked={on}
                          onChange={() => setTopics((x) => toggle(x, t.slug))}
                          className="h-4 w-4 rounded border-gray-300 accent-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-600"
                        />
                        <span className="min-w-0 flex-1 text-gray-800 dark:text-gray-100">{t.title}</span>
                        <span className="hidden text-xs text-gray-500 sm:inline dark:text-gray-400">{t.section ? sectionLabelFor(course, t.section) : ''}</span>
                        <span className={countCls}>{t.count}</span>
                      </label>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
          <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">None selected = every topic in the sections above.</p>
        </fieldset>

        {/* Difficulty */}
        <fieldset>
          <legend className={legendCls}>Difficulty</legend>
          <div className="flex flex-wrap gap-2">
            {QBANK_DIFFICULTIES.map((d) => {
              const on = difficulties.includes(d)
              return (
                <label key={d} className={chip(on)}>
                  <input type="checkbox" className="sr-only" checked={on} onChange={() => setDifficulties((x) => toggle(x, d))} />
                  <span>{DIFFICULTY_LABEL[d]}</span>
                  {counts && <span className={countCls}>{counts.difficulties[d]}</span>}
                </label>
              )
            })}
          </div>
          <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">Passage sets aren&apos;t difficulty-tagged and count as medium.</p>
        </fieldset>

        {/* Pool */}
        <fieldset>
          <legend className={legendCls}>Which questions</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {(Object.keys(POOL_META) as QbankPoolKind[]).map((k) => {
              const on = pool === k
              const n = counts?.pools[k]
              return (
                <label key={k} className={chip(on, 'items-start')}>
                  <input type="radio" name="qbank-pool" className="sr-only" checked={on} onChange={() => setPool(k)} />
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="font-medium">{POOL_META[k].label}</span>
                      {n !== undefined && <span className={countCls}>{n}</span>}
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">{POOL_META[k].hint}</span>
                  </span>
                </label>
              )
            })}
          </div>
        </fieldset>

        {/* Count */}
        <div>
          <label htmlFor="qbank-count" className={`${legendCls} flex items-center justify-between`}>
            <span>Number of questions</span>
            <span className="text-lg tabular-nums text-accent dark:text-accent-muted">{effectiveCount}</span>
          </label>
          <input
            id="qbank-count"
            type="range"
            min={QBANK_MIN_COUNT}
            max={maxCount}
            step={1}
            value={effectiveCount}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full accent-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Passages are served whole, so a set can land a question or two off this number.
            {available !== null && available < QBANK_MAX_COUNT ? ` ${available} available with these filters.` : ''}
          </p>
        </div>

        {/* Mode */}
        <fieldset>
          <legend className={legendCls}>Mode</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            <label className={chip(mode === 'tutor', 'items-start')}>
              <input type="radio" name="qbank-mode" className="sr-only" checked={mode === 'tutor'} onChange={() => setMode('tutor')} />
              <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-accent dark:text-accent-muted" aria-hidden />
              <span>
                <span className="block font-medium">Tutor</span>
                <span className="block text-xs text-gray-500 dark:text-gray-400">Untimed. See the answer and explanation after each question.</span>
              </span>
            </label>
            <label className={chip(mode === 'timed', 'items-start')}>
              <input type="radio" name="qbank-mode" className="sr-only" checked={mode === 'timed'} onChange={() => setMode('timed')} />
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent dark:text-accent-muted" aria-hidden />
              <span>
                <span className="block font-medium">Timed</span>
                <span className="block text-xs text-gray-500 dark:text-gray-400">
                  {course === 'mcat'
                    ? 'Exam pace: 95 s per question.'
                    : course === 'act'
                      ? 'Exam pace: 42 s per English, 67 s per Math or Reading, 60 s per Science question.'
                      : 'Exam pace: 71 s per Reading and Writing question, 95 s per Math question.'}{' '}
                  Answers at the end.
                </span>
              </span>
            </label>
          </div>
        </fieldset>

        {error && (
          <p role="alert" className="text-sm text-red-700 dark:text-red-400">
            {error}
          </p>
        )}

        <button
          type="button"
          onClick={build}
          disabled={building || available === 0}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow transition hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto dark:focus-visible:ring-offset-gray-900"
        >
          {building ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Play className="h-4 w-4" aria-hidden />}
          {available === 0 ? 'No questions match' : `Start ${effectiveCount}-question set`}
        </button>
      </div>

      {/* Recent sets */}
      {history && history.sessions.some((s) => s.completedAt) && (
        <div className={card}>
          <h2 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">Recent sets</h2>
          <ul className="divide-y divide-gray-100 dark:divide-gray-700">
            {history.sessions
              .filter((s) => s.completedAt)
              .slice(0, 10)
              .map((s) => (
                <li key={s.id} className="flex flex-wrap items-center gap-x-3 gap-y-1 py-2 text-sm">
                  <span className="w-16 shrink-0 text-gray-500 dark:text-gray-400">{formatDate(s.completedAt ?? s.startedAt)}</span>
                  <span className="min-w-0 flex-1 text-gray-800 dark:text-gray-100">
                    {s.mode === 'timed' ? 'Timed' : 'Tutor'} · {s.sections.length ? s.sections.map((x) => sectionLabelFor(course, x)).join(', ') : 'All sections'}
                  </span>
                  <span className="font-semibold tabular-nums text-gray-900 dark:text-white">
                    {s.correct ?? 0} / {s.total}
                  </span>
                  <Link
                    href={`/review/qbank/${s.id}`}
                    className="rounded text-sm font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted"
                  >
                    Review
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  )
}
