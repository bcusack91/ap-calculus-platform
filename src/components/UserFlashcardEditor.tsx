'use client'

import { useId, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { USER_CARD_MAX_HINT, USER_CARD_MAX_TEXT } from '@/lib/user-flashcard-ids'

export interface UserFlashcardDraft {
  front: string
  back: string
  hint: string
  courseSlug: string
}

export interface CourseOption {
  slug: string
  name: string
}

interface Props {
  initial?: Partial<UserFlashcardDraft>
  /** When given, a course picker is shown. */
  courses?: CourseOption[]
  submitLabel?: string
  /** Resolve to an error message to show, or null on success. */
  onSave: (draft: UserFlashcardDraft) => Promise<string | null>
  onCancel?: () => void
  autoFocus?: boolean
}

export const FIELD_CLASS =
  'w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring'

const BUTTON_PRIMARY =
  'inline-flex items-center justify-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900'

const BUTTON_SECONDARY =
  'inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring'

function Counter({ value, max }: { value: string; max: number }) {
  const over = value.length > max
  return (
    <span className={`text-xs tabular-nums ${over ? 'text-red-600 dark:text-red-400 font-semibold' : 'text-gray-500 dark:text-gray-400'}`}>
      {value.length.toLocaleString()} / {max.toLocaleString()}
    </span>
  )
}

/**
 * Front / back / hint (+ optional course) editor for a student-made card.
 * Shared by /flashcards/mine and MakeFlashcardButton. Supports the same
 * markdown + $math$ the review session renders.
 */
export default function UserFlashcardEditor({
  initial,
  courses,
  submitLabel = 'Save card',
  onSave,
  onCancel,
  autoFocus,
}: Props) {
  const uid = useId()
  const [front, setFront] = useState(initial?.front ?? '')
  const [back, setBack] = useState(initial?.back ?? '')
  const [hint, setHint] = useState(initial?.hint ?? '')
  const [courseSlug, setCourseSlug] = useState(initial?.courseSlug ?? '')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const tooLong = front.length > USER_CARD_MAX_TEXT || back.length > USER_CARD_MAX_TEXT || hint.length > USER_CARD_MAX_HINT
  const canSave = front.trim().length > 0 && back.trim().length > 0 && !tooLong && !saving

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSave) return
    setSaving(true)
    setError(null)
    try {
      const message = await onSave({ front: front.trim(), back: back.trim(), hint: hint.trim(), courseSlug })
      if (message) setError(message)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div>
        <div className="mb-1 flex items-center justify-between">
          <label htmlFor={`${uid}-front`} className="text-sm font-medium text-gray-800 dark:text-gray-200">
            Front
          </label>
          <Counter value={front} max={USER_CARD_MAX_TEXT} />
        </div>
        <textarea
          id={`${uid}-front`}
          value={front}
          onChange={(e) => setFront(e.target.value)}
          rows={3}
          autoFocus={autoFocus}
          placeholder="Question or prompt"
          className={FIELD_CLASS}
        />
      </div>
      <div>
        <div className="mb-1 flex items-center justify-between">
          <label htmlFor={`${uid}-back`} className="text-sm font-medium text-gray-800 dark:text-gray-200">
            Back
          </label>
          <Counter value={back} max={USER_CARD_MAX_TEXT} />
        </div>
        <textarea
          id={`${uid}-back`}
          value={back}
          onChange={(e) => setBack(e.target.value)}
          rows={3}
          placeholder="Answer"
          className={FIELD_CLASS}
        />
      </div>
      <div>
        <div className="mb-1 flex items-center justify-between">
          <label htmlFor={`${uid}-hint`} className="text-sm font-medium text-gray-800 dark:text-gray-200">
            Hint <span className="font-normal text-gray-500 dark:text-gray-400">(optional)</span>
          </label>
          {hint.length > 0 && <Counter value={hint} max={USER_CARD_MAX_HINT} />}
        </div>
        <input
          id={`${uid}-hint`}
          value={hint}
          onChange={(e) => setHint(e.target.value)}
          placeholder="A nudge shown before the answer"
          className={FIELD_CLASS}
        />
      </div>
      {courses && courses.length > 0 && (
        <div>
          <label htmlFor={`${uid}-course`} className="mb-1 block text-sm font-medium text-gray-800 dark:text-gray-200">
            Course <span className="font-normal text-gray-500 dark:text-gray-400">(optional)</span>
          </label>
          <select
            id={`${uid}-course`}
            value={courseSlug}
            onChange={(e) => setCourseSlug(e.target.value)}
            className={FIELD_CLASS}
          >
            <option value="">No course</option>
            {courses.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Tip: **bold**, *italics* and math in $…$ work just like on the site&apos;s cards.
      </p>
      {error && (
        <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-300">
          {error}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        <button type="submit" disabled={!canSave} className={BUTTON_PRIMARY}>
          {saving && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
          {submitLabel}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className={BUTTON_SECONDARY}>
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}
