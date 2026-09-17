'use client'

import { useCallback, useEffect, useState } from 'react'
import { Check, ChevronDown, ChevronRight, RotateCcw, SlidersHorizontal } from 'lucide-react'
import ConfirmDialog, { type ConfirmRequest } from '@/components/teacher/ConfirmDialog'
import {
  DEFAULT_MAX_REVIEWS_PER_DAY,
  DEFAULT_NEW_PER_DAY,
  MAX_REVIEWS_PER_DAY_MAX,
  MAX_REVIEWS_PER_DAY_MIN,
  NEW_PER_DAY_MAX,
  NEW_PER_DAY_MIN,
} from '@/lib/flashcard-daily-limits'

/**
 * Class-wide flashcard daily limits, for the teacher classroom page's
 * Engagement view. Reads/writes /api/teacher/classrooms/[id]/flashcard-limits,
 * which sets the SAME per-student fields the student's own "Daily limits"
 * control on /flashcards/review uses — so what the teacher applies here is
 * exactly what each student then sees (and may still change themselves).
 */

type LimitSource = 'default' | 'override'
interface LimitView { effective: number; source: LimitSource }
interface StudentLimits {
  userId: string
  name: string
  newPerDay: LimitView
  maxReviewsPerDay: LimitView
}
interface Snapshot {
  defaults: { newPerDay: number; maxReviewsPerDay: number }
  bounds: { newPerDay: { min: number; max: number }; maxReviewsPerDay: { min: number; max: number } }
  summary: { total: number; onDefaults: number; custom: number }
  students: StudentLimits[]
}

type FieldKey = 'newPerDay' | 'maxReviewsPerDay'

const FIELDS: { key: FieldKey; label: string; min: number; max: number; defaultValue: number }[] = [
  { key: 'newPerDay', label: 'New cards per day', min: NEW_PER_DAY_MIN, max: NEW_PER_DAY_MAX, defaultValue: DEFAULT_NEW_PER_DAY },
  { key: 'maxReviewsPerDay', label: 'Max reviews per day', min: MAX_REVIEWS_PER_DAY_MIN, max: MAX_REVIEWS_PER_DAY_MAX, defaultValue: DEFAULT_MAX_REVIEWS_PER_DAY },
]

const inputCls =
  'w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2 text-gray-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-light dark:border-gray-600 dark:bg-gray-900 dark:text-white'

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`

export default function ClassFlashcardLimits({ classroomId }: { classroomId: string }) {
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [values, setValues] = useState<Record<FieldKey, string>>({ newPerDay: '', maxReviewsPerDay: '' })
  const [formError, setFormError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const [showStudents, setShowStudents] = useState(false)
  const [confirmReq, setConfirmReq] = useState<ConfirmRequest | null>(null)

  const endpoint = `/api/teacher/classrooms/${classroomId}/flashcard-limits`

  useEffect(() => {
    let cancelled = false
    fetch(endpoint, { cache: 'no-store' })
      .then(async r => {
        const d = await r.json().catch(() => ({}))
        if (!r.ok) throw new Error(d.error || 'Could not load flashcard limits')
        if (!cancelled) { setSnapshot(d); setLoadError(null) }
      })
      .catch(e => { if (!cancelled) setLoadError(e instanceof Error ? e.message : 'Could not load flashcard limits') })
    return () => { cancelled = true }
  }, [endpoint])

  const patch = useCallback(async (body: Record<string, unknown>) => {
    const res = await fetch(endpoint, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const d = await res.json().catch(() => ({}))
    if (!res.ok) throw new Error(d.error || 'Could not update flashcard limits')
    return d as Snapshot & { updated: number }
  }, [endpoint])

  /** Parse the two inputs; returns the PATCH payload or an error message. */
  const parseInputs = (): { ok: true; body: Partial<Record<FieldKey, number>>; parts: string[] } | { ok: false; error: string } => {
    const body: Partial<Record<FieldKey, number>> = {}
    const parts: string[] = []
    for (const f of FIELDS) {
      const raw = values[f.key].trim()
      if (raw === '') continue
      const num = Number(raw)
      if (!Number.isFinite(num) || !Number.isInteger(num) || num < f.min || num > f.max) {
        return { ok: false, error: `${f.label} must be a whole number between ${f.min} and ${f.max}.` }
      }
      body[f.key] = num
      parts.push(f.key === 'newPerDay' ? `${num} new cards/day` : `${num} reviews/day`)
    }
    if (parts.length === 0) return { ok: false, error: 'Enter at least one limit to apply.' }
    return { ok: true, body, parts }
  }

  const total = snapshot?.summary.total ?? 0

  const requestApply = () => {
    setNotice(null)
    const parsed = parseInputs()
    if (!parsed.ok) { setFormError(parsed.error); return }
    setFormError(null)
    setConfirmReq({
      title: 'Apply limits to the class',
      message: `Set ${parsed.parts.join(' and ')} for all ${plural(total, 'student')} in this class? Students can still adjust their own limits afterwards.`,
      confirmLabel: 'Apply',
      onConfirm: async () => {
        try {
          const d = await patch(parsed.body)
          setSnapshot(d)
          setValues({ newPerDay: '', maxReviewsPerDay: '' })
          setNotice(`Applied ${parsed.parts.join(' and ')} to ${plural(d.updated, 'student')}.`)
        } catch (e) {
          setFormError(e instanceof Error ? e.message : 'Could not update flashcard limits')
        }
      },
    })
  }

  const requestReset = () => {
    setNotice(null)
    setFormError(null)
    setConfirmReq({
      title: 'Reset the class to defaults',
      message: `Clear every stored limit for all ${plural(total, 'student')} so the defaults (${DEFAULT_NEW_PER_DAY} new / ${DEFAULT_MAX_REVIEWS_PER_DAY} reviews per day) apply again? This also clears limits students set themselves.`,
      confirmLabel: 'Reset',
      onConfirm: async () => {
        try {
          const d = await patch({ reset: true })
          setSnapshot(d)
          setValues({ newPerDay: '', maxReviewsPerDay: '' })
          setNotice(`Reset ${plural(d.updated, 'student')} to the defaults.`)
        } catch (e) {
          setFormError(e instanceof Error ? e.message : 'Could not update flashcard limits')
        }
      },
    })
  }

  const anyInput = FIELDS.some(f => values[f.key].trim() !== '')

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <h2 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
        <SlidersHorizontal className="-mt-1 mr-1.5 inline h-5 w-5 text-accent" aria-hidden />
        Flashcard daily limits
      </h2>
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        Students only ever see what is actually due — these are ceilings on new cards introduced and reviews offered per
        day, not targets. Defaults: {DEFAULT_NEW_PER_DAY} new / {DEFAULT_MAX_REVIEWS_PER_DAY} reviews.
      </p>

      {loadError && (
        <p role="alert" className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-300">
          {loadError}
        </p>
      )}

      {!snapshot && !loadError && <div className="h-24 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />}

      {snapshot && (
        <>
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
            <span className="font-medium text-gray-800 dark:text-gray-200" data-testid="limits-distribution">
              {snapshot.summary.onDefaults} on defaults, {snapshot.summary.custom} custom
            </span>
            <span className="text-gray-400 dark:text-gray-500">· {plural(snapshot.summary.total, 'active student')}</span>
            {snapshot.students.length > 0 && (
              <button
                type="button"
                onClick={() => setShowStudents(s => !s)}
                aria-expanded={showStudents}
                className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
              >
                {showStudents ? <ChevronDown className="h-3.5 w-3.5" aria-hidden /> : <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
                {showStudents ? 'Hide students' : 'Show students'}
              </button>
            )}
          </div>

          {showStudents && (
            <div className="mb-4 max-h-64 overflow-y-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-left text-xs uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
                    <th className="px-3 py-2">Student</th>
                    <th className="px-3 py-2 text-right">New / day</th>
                    <th className="px-3 py-2 text-right">Reviews / day</th>
                  </tr>
                </thead>
                <tbody>
                  {snapshot.students.map(s => (
                    <tr key={s.userId} className="border-b border-gray-100 last:border-0 dark:border-gray-700/50">
                      <td className="px-3 py-1.5 font-medium text-gray-800 dark:text-gray-200">{s.name}</td>
                      {([s.newPerDay, s.maxReviewsPerDay] as LimitView[]).map((v, i) => (
                        <td key={i} className="px-3 py-1.5 text-right text-gray-600 dark:text-gray-300">
                          {v.effective}
                          {v.source === 'override' && (
                            <span className="ml-1.5 rounded-full bg-accent-subtle px-1.5 py-0.5 text-[10px] font-semibold uppercase text-accent dark:bg-accent-light/20 dark:text-accent-muted">
                              custom
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FIELDS.map(f => (
              <div key={f.key}>
                <label htmlFor={`class-limit-${f.key}`} className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {f.label}
                </label>
                <input
                  id={`class-limit-${f.key}`}
                  type="number"
                  inputMode="numeric"
                  min={f.min}
                  max={f.max}
                  step={1}
                  placeholder={`${f.defaultValue} (default)`}
                  value={values[f.key]}
                  onChange={e => setValues(v => ({ ...v, [f.key]: e.target.value }))}
                  onKeyDown={e => { if (e.key === 'Enter') requestApply() }}
                  className={inputCls}
                />
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{f.min}–{f.max}. Leave blank to keep as is.</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={requestApply}
              disabled={!anyInput || total === 0}
              className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-accent-hover disabled:opacity-50"
            >
              <Check className="h-4 w-4" aria-hidden />
              Apply to class
            </button>
            <button
              type="button"
              onClick={requestReset}
              disabled={total === 0}
              className="inline-flex items-center gap-1.5 rounded-xl bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-200 disabled:opacity-50 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              <RotateCcw className="h-4 w-4" aria-hidden />
              Reset to defaults
            </button>
            <span aria-live="polite" className="text-xs font-semibold text-green-700 dark:text-green-400">
              {notice ?? ''}
            </span>
          </div>

          {formError && (
            <p role="alert" className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-300">
              {formError}
            </p>
          )}
        </>
      )}

      <ConfirmDialog request={confirmReq} onClose={() => setConfirmReq(null)} />
    </div>
  )
}
