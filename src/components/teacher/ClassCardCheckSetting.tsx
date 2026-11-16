'use client'

import { useCallback, useEffect, useState } from 'react'
import { Check, ClipboardCheck } from 'lucide-react'

type Snapshot = { afterReviews: number | null; effective: number; default: number; min: number; max: number }

const inputCls =
  'w-32 rounded-lg border-2 border-gray-200 bg-white px-3 py-2 text-gray-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-light dark:border-gray-600 dark:bg-gray-900 dark:text-white'

/**
 * Class setting for the daily card check (teacher classroom page › Settings):
 * the number of reviews in a day after which a student with a backlog may take
 * the check without finishing every due card. Reads/writes
 * /api/teacher/classrooms/[id]/card-check.
 */
export default function ClassCardCheckSetting({ classroomId }: { classroomId: string }) {
  const endpoint = `/api/teacher/classrooms/${classroomId}/card-check`
  const [snap, setSnap] = useState<Snapshot | null>(null)
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  const load = useCallback(async () => {
    try {
      const res = await fetch(endpoint, { cache: 'no-store' })
      if (!res.ok) throw new Error()
      const data = (await res.json()) as Snapshot
      setSnap(data)
      setValue(String(data.effective))
    } catch {
      setError('Couldn’t load the card check setting. Reload the page to try again.')
    }
  }, [endpoint])

  useEffect(() => {
    void load()
  }, [load])

  const save = async (afterReviews: number | null) => {
    setSaving(true)
    setError(null)
    setNotice(null)
    try {
      const res = await fetch(endpoint, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ afterReviews }) })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Couldn’t save. Try again.')
      setSnap(data)
      setValue(String(data.effective))
      setNotice(afterReviews === null ? `Back to the default of ${data.default} reviews.` : `Saved: the check opens after ${data.effective} reviews.`)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Couldn’t save. Try again.')
    } finally {
      setSaving(false)
    }
  }

  const n = Number(value)
  const valid = !!snap && value.trim() !== '' && Number.isInteger(n) && n >= snap.min && n <= snap.max

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <h2 className="mb-1 flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
        <ClipboardCheck className="h-5 w-5 text-accent" aria-hidden /> Daily card check
      </h2>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
        After reviewing flashcards, students take a short multiple-choice check (up to 15 questions) on the cards they reviewed that day. Their flashcards count as
        done only once they take it, and a card they rated Good or Easy but then missed comes back the next day. The check opens when a student&apos;s due cards are
        finished. A student with a large backlog can take it earlier, after this many reviews in a day (repeats count):
      </p>
      {snap ? (
        <form
          className="flex flex-wrap items-end gap-3"
          onSubmit={(e) => {
            e.preventDefault()
            if (valid) void save(n)
          }}
        >
          <div>
            <label htmlFor="card-check-after" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
              Reviews before the check opens
            </label>
            <input
              id="card-check-after"
              type="number"
              inputMode="numeric"
              min={snap.min}
              max={snap.max}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={inputCls}
            />
          </div>
          <button type="submit" disabled={!valid || saving || n === snap.effective} className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-semibold text-white hover:bg-accent-hover disabled:opacity-50">
            <Check className="h-4 w-4" aria-hidden /> Save
          </button>
          {snap.afterReviews !== null && (
            <button type="button" disabled={saving} onClick={() => void save(null)} className="rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">
              Use the default ({snap.default})
            </button>
          )}
          <p className="w-full text-xs text-gray-500 dark:text-gray-400">
            From {snap.min} to {snap.max}. {snap.afterReviews === null ? `This class uses the default, ${snap.default}.` : `This class is set to ${snap.afterReviews}; the default is ${snap.default}.`} A student in more than one class gets the lowest number.
          </p>
        </form>
      ) : (
        !error && <p className="text-sm text-gray-500 dark:text-gray-400">Loading…</p>
      )}
      {error && <p className="mt-3 text-sm text-red-600 dark:text-red-400" role="alert">{error}</p>}
      {notice && <p className="mt-3 text-sm text-green-700 dark:text-green-400" role="status">{notice}</p>}
    </div>
  )
}
