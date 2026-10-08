'use client'

import { useId, useState } from 'react'
import { FULL_LENGTH_COURSES, type FullLengthCourse } from '@/lib/full-length-progress'

/**
 * Enter a full-length score earned outside StudyMondo (AAMC / College Board).
 * Saving counts as a full-length taken: the readiness bar starts over and the
 * score joins the student's history.
 */
export default function ExternalScoreForm({
  course,
  onSaved,
  onCancel,
}: {
  course: FullLengthCourse
  onSaved: () => void
  onCancel?: () => void
}) {
  const cfg = FULL_LENGTH_COURSES[course]
  const id = useId()
  const today = new Date()
  const todayIso = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  const [source, setSource] = useState(cfg.externalSources[0])
  const [takenAt, setTakenAt] = useState(todayIso)
  const [total, setTotal] = useState('')
  const [sections, setSections] = useState<Record<string, string>>({})
  const [showSections, setShowSections] = useState(false)
  const [note, setNote] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  const input = 'w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-ring dark:border-gray-600 dark:bg-gray-700 dark:text-white'
  const label = 'block text-xs font-semibold text-gray-700 dark:text-gray-300'

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const totalScore = Number(total)
    if (!Number.isInteger(totalScore) || totalScore < cfg.total.min || totalScore > cfg.total.max) {
      setError(`Enter a total between ${cfg.total.min} and ${cfg.total.max}.`)
      return
    }
    const sectionScores: Record<string, number> = {}
    for (const s of cfg.sections) {
      const raw = sections[s.key]?.trim()
      if (!raw) continue
      const v = Number(raw)
      if (!Number.isInteger(v) || v < s.min || v > s.max) {
        setError(`${s.label} runs ${s.min}–${s.max}.`)
        return
      }
      sectionScores[s.key] = v
    }
    setSaving(true)
    try {
      const res = await fetch('/api/exam-scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ course, source, totalScore, sectionScores, takenAt, note: note.trim() || undefined }),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error || 'Could not save the score.')
      onSaved()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save the score.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-3 rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40" aria-labelledby={`${id}-title`}>
      <p id={`${id}-title`} className="text-sm font-semibold text-gray-900 dark:text-white">
        Enter {cfg.label === 'MCAT' ? 'an' : 'a'} {cfg.externalLabel} score
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        It counts as a full-length taken: your readiness bar starts over and the score joins your history.
      </p>
      <div className="grid gap-3 sm:grid-cols-3">
        <div>
          <label htmlFor={`${id}-source`} className={label}>Test</label>
          <select id={`${id}-source`} value={source} onChange={(e) => setSource(e.target.value)} className={`mt-1 ${input}`}>
            {cfg.externalSources.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-date`} className={label}>Date taken</label>
          <input id={`${id}-date`} type="date" value={takenAt} max={todayIso} onChange={(e) => setTakenAt(e.target.value)} required className={`mt-1 ${input}`} />
        </div>
        <div>
          <label htmlFor={`${id}-total`} className={label}>Total score ({cfg.total.min}–{cfg.total.max})</label>
          <input
            id={`${id}-total`}
            type="number"
            inputMode="numeric"
            min={cfg.total.min}
            max={cfg.total.max}
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            required
            className={`mt-1 ${input}`}
          />
        </div>
      </div>
      {showSections ? (
        <div className={`grid gap-3 ${cfg.sections.length > 2 ? 'sm:grid-cols-4' : 'sm:grid-cols-2'}`}>
          {cfg.sections.map((s) => (
            <div key={s.key}>
              <label htmlFor={`${id}-${s.key}`} className={label}>{s.label} ({s.min}–{s.max})</label>
              <input
                id={`${id}-${s.key}`}
                type="number"
                inputMode="numeric"
                min={s.min}
                max={s.max}
                value={sections[s.key] ?? ''}
                onChange={(e) => setSections((prev) => ({ ...prev, [s.key]: e.target.value }))}
                className={`mt-1 ${input}`}
              />
            </div>
          ))}
        </div>
      ) : (
        <button type="button" onClick={() => setShowSections(true)} className="text-xs font-medium text-accent hover:underline">
          + Add section scores (optional)
        </button>
      )}
      <div>
        <label htmlFor={`${id}-note`} className={label}>Note (optional)</label>
        <input id={`${id}-note`} type="text" maxLength={500} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Timed, full conditions…" className={`mt-1 ${input}`} />
      </div>
      {error && <p role="alert" className="text-sm text-red-600 dark:text-red-400">{error}</p>}
      <div className="flex flex-wrap gap-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover disabled:opacity-50"
        >
          {saving ? 'Saving…' : 'Save score'}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}
