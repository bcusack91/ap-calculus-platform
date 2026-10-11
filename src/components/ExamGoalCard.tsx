'use client'

import { useCallback, useEffect, useId, useMemo, useState } from 'react'
import Link from 'next/link'
import { GraduationCap, Pencil, Plus, Target, X } from 'lucide-react'
import { COLLEGE_SCORE_RANGES } from '@/data/college-score-ranges'
import {
  GOAL_COURSES,
  MAX_GOAL_COLLEGES,
  goalProgress,
  rangeStanding,
  type GoalCollege,
  type GoalCourse,
  type RangeStanding,
} from '@/lib/exam-goals'
import type { Superscore } from '@/lib/superscore'

interface GoalPayload {
  goal: { course: GoalCourse; targetScore: number; colleges: GoalCollege[]; updatedAt: string } | null
  current: {
    score: number | null
    basis: string | null
    source: string | null
    at: string | null
    superscore?: Superscore | null
  }
}

const STANDING_COPY: Record<RangeStanding, { label: string; className: string }> = {
  above: { label: 'Above range', className: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' },
  within: { label: 'In range', className: 'bg-accent-light text-accent-dark' },
  below: { label: 'Below range', className: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300' },
  unknown: { label: '', className: '' },
}

const NO_SCORE_COPY: Record<GoalCourse, { text: string; href: string; cta: string }> = {
  sat: { text: 'Take a full SAT practice test or enter a College Board score to see your superscore here.', href: '/sat-practice', cta: 'Take a practice test' },
  mcat: { text: 'Take a full-length or enter an AAMC score to measure progress toward your goal.', href: '/mcat-full-length', cta: 'Take a full-length' },
  act: { text: 'Your goal is saved. Practice-test progress for the ACT isn’t tracked here yet.', href: '/act-practice', cta: 'ACT practice' },
  psat: { text: 'Your goal is saved. See where your section scores put you for National Merit.', href: '/psat-selection-index', cta: 'Selection Index calculator' },
}

function formatDay(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
}

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800'
const inputClass =
  'w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-ring/40 dark:border-gray-600 dark:bg-gray-900 dark:text-white'

/**
 * Score goal + target colleges for one exam. Shows the student's current score
 * (SAT: superscore across StudyMondo tests and entered College Board scores;
 * MCAT: latest full-length), progress toward the goal, and each chosen
 * college's middle-50% range against that score. Renders nothing signed out.
 */
export default function ExamGoalCard({ course, className = '' }: { course: GoalCourse; className?: string }) {
  const id = useId()
  const cfg = GOAL_COURSES[course]
  const [data, setData] = useState<GoalPayload | null>(null)
  const [hidden, setHidden] = useState(false)
  const [editing, setEditing] = useState(false)
  const [targetRaw, setTargetRaw] = useState('')
  const [colleges, setColleges] = useState<GoalCollege[]>([])
  const [query, setQuery] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchGoal = useCallback(
    () =>
      fetch(`/api/exam-goals?course=${course}`, { cache: 'no-store' })
        .then(async (res) => {
          if (res.status === 401) return 'hidden' as const
          if (!res.ok) return null
          const body = (await res.json()) as Partial<GoalPayload> | null
          // Render nothing rather than crash on an unexpected payload.
          return body && typeof body.current === 'object' && body.current ? (body as GoalPayload) : null
        })
        .catch(() => null),
    [course],
  )

  useEffect(() => {
    let active = true
    fetchGoal().then((v) => {
      if (!active) return
      if (v === 'hidden') setHidden(true)
      else if (v) setData(v)
    })
    return () => { active = false }
  }, [fetchGoal])

  const startEditing = () => {
    setTargetRaw(data?.goal ? String(data.goal.targetScore) : '')
    setColleges(data?.goal?.colleges ?? [])
    setQuery('')
    setError(null)
    setEditing(true)
  }

  const suggestions = useMemo(() => {
    if (!cfg.collegeRanges) return []
    const q = query.trim().toLowerCase()
    if (!q) return []
    const chosen = new Set(colleges.map((c) => c.name.toLowerCase()))
    return COLLEGE_SCORE_RANGES.filter((c) => c.name.toLowerCase().includes(q) && !chosen.has(c.name.toLowerCase())).slice(0, 6)
  }, [query, colleges, cfg.collegeRanges])

  const addCollege = (name: string) => {
    const clean = name.trim().replace(/\s+/g, ' ')
    if (!clean || colleges.length >= MAX_GOAL_COLLEGES) return
    if (colleges.some((c) => c.name.toLowerCase() === clean.toLowerCase())) { setQuery(''); return }
    const known = cfg.collegeRanges ? COLLEGE_SCORE_RANGES.find((c) => c.name.toLowerCase() === clean.toLowerCase()) : undefined
    const range = known && cfg.collegeRanges ? known[cfg.collegeRanges] : null
    setColleges((prev) => [...prev, { name: known?.name ?? clean, low: range?.low ?? null, high: range?.high ?? null }])
    setQuery('')
  }

  const save = async () => {
    const target = Number(targetRaw)
    if (!Number.isInteger(target) || target < cfg.min || target > cfg.max) {
      setError(`Enter a ${cfg.label} goal from ${cfg.min} to ${cfg.max}.`)
      return
    }
    setSaving(true)
    setError(null)
    try {
      const res = await fetch('/api/exam-goals', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ course, targetScore: target, colleges: colleges.map((c) => ({ name: c.name })) }),
      })
      const body = await res.json().catch(() => null)
      if (!res.ok) { setError(body?.error ?? 'Could not save your goal.'); return }
      const fresh = await fetchGoal()
      if (fresh && fresh !== 'hidden') setData(fresh)
      setEditing(false)
    } catch {
      setError('Could not save your goal. Check your connection and try again.')
    } finally {
      setSaving(false)
    }
  }

  if (hidden || !data) return null

  const goal = data.goal
  const current = data.current
  const superscore = course === 'sat' ? current.superscore ?? null : null
  const progress = goal ? goalProgress(course, current.score, goal.targetScore) : 0
  const toGo = goal && current.score != null ? goal.targetScore - current.score : null
  const noScore = NO_SCORE_COPY[course]

  return (
    <section
      aria-labelledby={`${id}-title`}
      className={`rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 dark:border-gray-700 dark:bg-gray-800 ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 id={`${id}-title`} className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white">
          <Target className="h-4 w-4 text-accent" aria-hidden />
          {cfg.label} score goal
        </h3>
        {!editing && (
          <button
            type="button"
            onClick={startEditing}
            className={`inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold text-accent hover:bg-accent-subtle ${focusRing}`}
          >
            {goal ? <Pencil className="h-3.5 w-3.5" aria-hidden /> : <Plus className="h-3.5 w-3.5" aria-hidden />}
            {goal ? 'Edit goal' : 'Set a goal'}
          </button>
        )}
      </div>

      {editing ? (
        <form
          className="mt-3 space-y-4"
          onSubmit={(e) => { e.preventDefault(); void save() }}
        >
          <div>
            <label htmlFor={`${id}-target`} className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              Target {cfg.label} score ({cfg.min}–{cfg.max})
            </label>
            <input
              id={`${id}-target`}
              type="number"
              inputMode="numeric"
              min={cfg.min}
              max={cfg.max}
              step={cfg.step}
              value={targetRaw}
              onChange={(e) => setTargetRaw(e.target.value)}
              className={`mt-1 ${inputClass} max-w-[10rem] tabular-nums`}
              required
            />
          </div>

          {course !== 'psat' && (
            <div>
              <label htmlFor={`${id}-college`} className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                {course === 'mcat' ? 'Target medical schools' : 'Target colleges'} (up to {MAX_GOAL_COLLEGES})
              </label>
              <div className="relative mt-1">
                <input
                  id={`${id}-college`}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') { e.preventDefault(); addCollege(suggestions[0]?.name ?? query) }
                  }}
                  placeholder={cfg.collegeRanges ? 'Search or type a college' : 'Type a school name'}
                  disabled={colleges.length >= MAX_GOAL_COLLEGES}
                  autoComplete="off"
                  aria-describedby={`${id}-college-help`}
                  className={inputClass}
                />
                {suggestions.length > 0 && (
                  <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-900" role="listbox" aria-label="Matching colleges">
                    {suggestions.map((s) => (
                      <li key={s.name} role="option" aria-selected={false}>
                        <button
                          type="button"
                          onClick={() => addCollege(s.name)}
                          className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm text-gray-800 hover:bg-accent-subtle dark:text-gray-200 ${focusRing}`}
                        >
                          <span className="min-w-0 truncate">{s.name}</span>
                          {cfg.collegeRanges && (
                            <span className="shrink-0 text-xs tabular-nums text-gray-500 dark:text-gray-400">
                              {s[cfg.collegeRanges].low}–{s[cfg.collegeRanges].high}
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <p id={`${id}-college-help`} className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {cfg.collegeRanges
                  ? 'Pick from the list to see its middle-50% range, or press Enter to add any school by name.'
                  : 'Medians vary by school and year; check each school’s published class profile.'}
              </p>
              {query.trim() && suggestions.length === 0 && (
                <button
                  type="button"
                  onClick={() => addCollege(query)}
                  className={`mt-2 inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold text-accent hover:bg-accent-subtle ${focusRing}`}
                >
                  <Plus className="h-3.5 w-3.5" aria-hidden /> Add &ldquo;{query.trim()}&rdquo;
                </button>
              )}
              {colleges.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2" aria-label="Chosen schools">
                  {colleges.map((c) => (
                    <li key={c.name} className="inline-flex max-w-full items-center gap-1 rounded-full bg-gray-100 py-1 pl-3 pr-1 text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                      <span className="truncate">{c.name}</span>
                      <button
                        type="button"
                        onClick={() => setColleges((prev) => prev.filter((p) => p.name !== c.name))}
                        aria-label={`Remove ${c.name}`}
                        className={`rounded-full p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white ${focusRing}`}
                      >
                        <X className="h-3 w-3" aria-hidden />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {error && <p className="text-sm text-red-600 dark:text-red-400" role="alert">{error}</p>}
          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              disabled={saving}
              className={`rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent-hover disabled:opacity-60 ${focusRing}`}
            >
              {saving ? 'Saving…' : 'Save goal'}
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 ${focusRing}`}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="mt-3 space-y-4">
          <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">{current.basis ?? 'Current score'}</p>
              <p className="text-2xl font-extrabold tabular-nums text-gray-900 dark:text-white">{current.score ?? '—'}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Goal</p>
              <p className="text-2xl font-extrabold tabular-nums text-accent">{goal?.targetScore ?? '—'}</p>
            </div>
            {toGo != null && (
              <p className="pb-1 text-sm text-gray-700 dark:text-gray-300">
                {toGo <= 0 ? <span className="font-semibold text-green-700 dark:text-green-400">Goal reached</span> : <>{toGo} point{toGo === 1 ? '' : 's'} to go</>}
              </p>
            )}
          </div>

          {goal && current.score != null && (
            <div
              className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"
              role="progressbar"
              aria-label={`Progress toward a ${cfg.label} score of ${goal.targetScore}`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress * 100)}
            >
              <div className="h-full rounded-full bg-brand-gradient" style={{ width: `${Math.round(progress * 100)}%` }} />
            </div>
          )}

          {!goal && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Set a target score{course === 'psat' ? '' : ' and the schools you’re aiming for'} to track how far you have to go.
            </p>
          )}

          {current.score == null && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {noScore.text}{' '}
              <Link href={noScore.href} className={`rounded font-semibold text-accent hover:underline ${focusRing}`}>{noScore.cta}</Link>
            </p>
          )}

          {superscore && (
            <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-900/50">
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                Superscore {superscore.total}
                {superscore.combined && <span className="font-normal text-gray-500 dark:text-gray-400"> · best single test {superscore.bestSingle.total}</span>}
              </p>
              <dl className="mt-2 grid gap-2 text-xs sm:grid-cols-2">
                {([['Reading & Writing', superscore.rw], ['Math', superscore.math]] as const).map(([label, part]) => (
                  <div key={label} className="min-w-0">
                    <dt className="text-gray-500 dark:text-gray-400">{label}</dt>
                    <dd className="text-gray-900 dark:text-white">
                      <span className="text-base font-bold tabular-nums">{part.score}</span>{' '}
                      <span className="text-gray-500 dark:text-gray-400">from {part.from.label}, {formatDay(part.from.date)}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {goal && goal.colleges.length > 0 && (
            <div>
              <p className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300">
                <GraduationCap className="h-3.5 w-3.5 text-accent" aria-hidden />
                {course === 'mcat' ? 'Target medical schools' : 'Target colleges'}
                {cfg.collegeRanges && <span className="font-normal text-gray-500 dark:text-gray-400">· middle 50% of enrolled students</span>}
              </p>
              <ul className="mt-2 divide-y divide-gray-100 dark:divide-gray-700">
                {goal.colleges.map((c) => {
                  const standing = rangeStanding(current.score, c.low, c.high)
                  const copy = STANDING_COPY[standing]
                  return (
                    <li key={c.name} className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 py-2 text-sm">
                      <span className="min-w-0 text-gray-900 dark:text-white">{c.name}</span>
                      <span className="flex items-center gap-2">
                        {c.low != null && c.high != null && (
                          <span className="tabular-nums text-gray-600 dark:text-gray-400">{c.low}–{c.high}</span>
                        )}
                        {standing !== 'unknown' && (
                          <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${copy.className}`}>{copy.label}</span>
                        )}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {course === 'psat' && (
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Aiming for National Merit?{' '}
              <Link href="/psat-selection-index" className={`rounded font-semibold text-accent hover:underline ${focusRing}`}>Check your Selection Index</Link>
            </p>
          )}
        </div>
      )}
    </section>
  )
}
