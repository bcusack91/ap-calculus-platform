'use client'

import { useEffect, useRef, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import {
  DEFAULT_MAX_REVIEWS_PER_DAY,
  DEFAULT_NEW_PER_DAY,
  MAX_REVIEWS_PER_DAY_MAX,
  MAX_REVIEWS_PER_DAY_MIN,
  NEW_PER_DAY_MAX,
  NEW_PER_DAY_MIN,
} from '@/lib/flashcard-daily-limits'

/**
 * Anki-style "Daily limits" control for the flashcard review dashboard.
 * Two number inputs (new cards/day, max reviews/day) saved optimistically to
 * PATCH /api/flashcards/settings on blur/Enter; blank = use the default
 * (100 new / 200 reviews). Reverts and shows an error if the save fails.
 */

interface FlashcardDailyLimitsProps {
  /** Called after a successful save so the parent can refetch due counts. */
  onChanged?: () => void
}

type FieldKey = 'newPerDay' | 'maxReviewsPerDay'

const FIELDS: Array<{
  key: FieldKey
  label: string
  help: string
  min: number
  max: number
  defaultValue: number
}> = [
  {
    key: 'newPerDay',
    label: 'New cards per day',
    help: `How many never-studied cards are introduced each day (default ${DEFAULT_NEW_PER_DAY})`,
    min: NEW_PER_DAY_MIN,
    max: NEW_PER_DAY_MAX,
    defaultValue: DEFAULT_NEW_PER_DAY,
  },
  {
    key: 'maxReviewsPerDay',
    label: 'Max reviews per day',
    help: `The most due cards you'll be asked to review in a day (default ${DEFAULT_MAX_REVIEWS_PER_DAY})`,
    min: MAX_REVIEWS_PER_DAY_MIN,
    max: MAX_REVIEWS_PER_DAY_MAX,
    defaultValue: DEFAULT_MAX_REVIEWS_PER_DAY,
  },
]

export default function FlashcardDailyLimits({ onChanged }: FlashcardDailyLimitsProps) {
  // Input text per field ('' = unset → default applies).
  const [values, setValues] = useState<Record<FieldKey, string>>({ newPerDay: '', maxReviewsPerDay: '' })
  const [error, setError] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)
  // Last server-confirmed values, for reverting a failed optimistic save.
  const confirmed = useRef<Record<FieldKey, string>>({ newPerDay: '', maxReviewsPerDay: '' })
  const savedTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch('/api/flashcards/settings')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled || !data) return
        const loaded: Record<FieldKey, string> = {
          newPerDay: data.newPerDay == null ? '' : String(data.newPerDay),
          maxReviewsPerDay: data.maxReviewsPerDay == null ? '' : String(data.maxReviewsPerDay),
        }
        confirmed.current = loaded
        setValues(loaded)
      })
      .catch(() => {})
    return () => {
      cancelled = true
      if (savedTimer.current) clearTimeout(savedTimer.current)
    }
  }, [])

  async function commit(field: FieldKey) {
    const spec = FIELDS.find((f) => f.key === field)!
    const raw = values[field].trim()
    if (raw === confirmed.current[field]) return // unchanged

    let payloadValue: number | null = null
    if (raw !== '') {
      const num = Number(raw)
      if (!Number.isFinite(num) || !Number.isInteger(num) || num < spec.min || num > spec.max) {
        setError(`${spec.label} must be a whole number between ${spec.min} and ${spec.max}.`)
        setValues((v) => ({ ...v, [field]: confirmed.current[field] }))
        return
      }
      payloadValue = num
    }

    // Optimistic: the input already shows the new value; confirm or revert.
    setError(null)
    try {
      const res = await fetch('/api/flashcards/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [field]: payloadValue }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error || 'Failed to save')
      }
      confirmed.current = { ...confirmed.current, [field]: raw }
      setSaved(true)
      if (savedTimer.current) clearTimeout(savedTimer.current)
      savedTimer.current = setTimeout(() => setSaved(false), 2500)
      onChanged?.()
    } catch (e) {
      setValues((v) => ({ ...v, [field]: confirmed.current[field] }))
      setError(e instanceof Error ? e.message : 'Failed to save — please try again.')
    }
  }

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-1">
        <h2 className="font-bold text-gray-900 flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-accent" aria-hidden />
          Daily limits
        </h2>
        <span aria-live="polite" className="text-xs font-semibold text-green-700">
          {saved ? 'Saved ✓' : ''}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Anki-style pacing — leave a field blank to use the defaults ({DEFAULT_NEW_PER_DAY} new
        / {DEFAULT_MAX_REVIEWS_PER_DAY} reviews).
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {FIELDS.map((f) => (
          <div key={f.key}>
            <label htmlFor={`daily-limit-${f.key}`} className="block text-sm font-semibold text-gray-900 mb-1">
              {f.label}
            </label>
            <input
              id={`daily-limit-${f.key}`}
              type="number"
              inputMode="numeric"
              min={f.min}
              max={f.max}
              step={1}
              placeholder={String(f.defaultValue)}
              value={values[f.key]}
              onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
              onBlur={() => commit(f.key)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') (e.target as HTMLInputElement).blur()
              }}
              aria-describedby={`daily-limit-${f.key}-help`}
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-light text-gray-900 bg-white"
            />
            <p id={`daily-limit-${f.key}-help`} className="mt-1 text-xs text-gray-500">
              {f.help}
            </p>
          </div>
        ))}
      </div>

      {error && (
        <p role="alert" className="mt-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {error}
        </p>
      )}
    </div>
  )
}
