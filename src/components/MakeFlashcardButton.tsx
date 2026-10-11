'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Layers } from 'lucide-react'
import UserFlashcardEditor, { type UserFlashcardDraft } from '@/components/UserFlashcardEditor'
import { USER_CARD_MAX_TEXT, type UserCardOrigin } from '@/lib/user-flashcard-ids'

export interface MakeFlashcardButtonProps {
  /** Prefilled front (e.g. the question stem). Trimmed to the 2,000-char limit. */
  front: string
  /** Prefilled back (e.g. the correct answer + explanation). Trimmed likewise. */
  back: string
  courseSlug?: string
  topicSlug?: string
  /** 'mistake' when made from a missed question (the default); 'manual' otherwise. */
  origin?: UserCardOrigin
  /** Button text. */
  label?: string
  className?: string
}

const clip = (s: string) => (s.length > USER_CARD_MAX_TEXT ? s.slice(0, USER_CARD_MAX_TEXT) : s)

/**
 * "Make a flashcard from this question": opens an inline editor prefilled
 * with the given front/back; saving POSTs to /api/user-flashcards and the
 * card joins the student's own deck (reviewed in the normal session).
 */
export default function MakeFlashcardButton({
  front,
  back,
  courseSlug,
  topicSlug,
  origin = 'mistake',
  label = 'Make a flashcard',
  className = '',
}: MakeFlashcardButtonProps) {
  const [open, setOpen] = useState(false)
  const [saved, setSaved] = useState(false)

  async function save(draft: UserFlashcardDraft): Promise<string | null> {
    let res: Response
    try {
      res = await fetch('/api/user-flashcards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          front: draft.front,
          back: draft.back,
          hint: draft.hint || undefined,
          courseSlug: courseSlug || undefined,
          topicSlug: topicSlug || undefined,
          origin,
        }),
      })
    } catch {
      return 'You appear to be offline. Try again once you’re connected.'
    }
    if (res.status === 401) return 'Sign in to save flashcards.'
    if (!res.ok) {
      const data = await res.json().catch(() => null)
      return (data && typeof data.error === 'string' && data.error) || 'Could not save the card.'
    }
    setSaved(true)
    setOpen(false)
    return null
  }

  if (saved) {
    return (
      <div className={`inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-green-700 dark:text-green-400 ${className}`} role="status">
        <Check className="h-4 w-4" aria-hidden />
        <span>Saved to your flashcards.</span>
        <Link href="/flashcards/mine" className="font-semibold text-accent-dark dark:text-accent-muted underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring">
          View my cards
        </Link>
        <button
          type="button"
          onClick={() => { setSaved(false); setOpen(true) }}
          className="text-gray-600 dark:text-gray-400 underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
        >
          Make another
        </button>
      </div>
    )
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-1.5 rounded-lg border border-accent-light dark:border-accent/40 bg-accent-subtle dark:bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent-dark dark:text-accent-muted hover:bg-accent-light/60 dark:hover:bg-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring ${className}`}
      >
        <Layers className="h-4 w-4" aria-hidden />
        {label}
      </button>
    )
  }

  return (
    <div className={`w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 ${className}`}>
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
        <Layers className="h-4 w-4 text-accent" aria-hidden />
        New flashcard
      </div>
      <UserFlashcardEditor
        initial={{ front: clip(front), back: clip(back) }}
        submitLabel="Save to my cards"
        onSave={save}
        onCancel={() => setOpen(false)}
        autoFocus
      />
    </div>
  )
}
