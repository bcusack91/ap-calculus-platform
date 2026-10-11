'use client'

/**
 * "Ask about this question" — an AI explanation (Claude Haiku 4.5) of why the
 * key is right and why the student's pick is wrong, grounded in the stored
 * explanation. Renders NOTHING unless GET /api/ai/status says the tutor is
 * configured (owner ruling: hidden until ANTHROPIC_API_KEY exists). The server
 * rebuilds the question itself from `target`; only the follow-up text is sent.
 * Mount it only after the student has answered.
 */

import { useEffect, useId, useState } from 'react'
import Link from 'next/link'
import { Loader2, MessageCircleQuestion, Send } from 'lucide-react'

export type AskTarget =
  | { kind: string; attemptId: string; itemIndex: number }
  | { questionKey: string; origin: { attemptKind: string; attemptId: string; itemIndex: number } }

const FOLLOW_UP_MAX = 300

let statusPromise: Promise<boolean> | null = null

/** Is the question tutor configured? One request per page load, shared by every card. */
export function fetchQuestionTutorStatus(): Promise<boolean> {
  if (!statusPromise) {
    statusPromise = fetch('/api/ai/status', { cache: 'no-store' })
      .then(async (r) => {
        if (!r.ok) throw new Error(`status ${r.status}`)
        return (await r.json().catch(() => null))?.questionTutor === true
      })
      .catch(() => {
        // A failed request is retried on the next mount rather than remembered.
        statusPromise = null
        return false
      })
  }
  return statusPromise
}

/** Test hook: forget the cached status. */
export function resetQuestionTutorStatus(): void {
  statusPromise = null
}

function useQuestionTutor(): boolean {
  const [on, setOn] = useState(false)
  useEffect(() => {
    let live = true
    fetchQuestionTutorStatus().then((v) => {
      if (live) setOn(v)
    })
    return () => {
      live = false
    }
  }, [])
  return on
}

export default function AskAboutQuestion({ target, className = '' }: { target: AskTarget; className?: string }) {
  const enabled = useQuestionTutor()
  const [followUp, setFollowUp] = useState('')
  const [showFollowUp, setShowFollowUp] = useState(false)
  const [loading, setLoading] = useState(false)
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState<{ text: string; upgrade?: boolean; signIn?: boolean } | null>(null)
  const inputId = useId()

  if (!enabled) return null

  const ask = async () => {
    if (loading) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/ai/question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...target, ...(followUp.trim() ? { followUp: followUp.trim().slice(0, FOLLOW_UP_MAX) } : {}) }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && typeof data.answer === 'string') {
        setAnswer(data.answer)
      } else if (res.status === 401) {
        setError({ text: 'Sign in to use the AI tutor.', signIn: true })
      } else if (res.status === 429 && data.upgrade) {
        setError({ text: data.error ?? 'Daily limit reached. Upgrade to Premium for unlimited AI explanations.', upgrade: true })
      } else if (res.status === 429) {
        setError({ text: 'You’re going a bit fast. Wait a moment and try again.' })
      } else if (res.status === 403) {
        setError({ text: 'Answer the question first, then ask about it.' })
      } else {
        setError({ text: 'Something went wrong getting an explanation. Please try again.' })
      }
    } catch {
      setError({ text: 'Could not reach the tutor. Check your connection and try again.' })
    }
    setLoading(false)
  }

  const btn =
    'inline-flex items-center gap-1.5 rounded-lg border border-accent-muted bg-white px-3 py-1.5 text-sm font-medium text-accent hover:bg-accent-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring disabled:cursor-not-allowed disabled:opacity-60 dark:border-accent/60 dark:bg-gray-800 dark:text-accent-muted dark:hover:bg-accent-light/10'

  return (
    <div className={`mt-3 ${className}`}>
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => void ask()} disabled={loading} className={btn}>
          {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <MessageCircleQuestion className="h-4 w-4" aria-hidden />}
          {loading ? 'Thinking…' : answer ? 'Ask again' : 'Ask about this question'}
        </button>
        {!showFollowUp && (
          <button
            type="button"
            onClick={() => setShowFollowUp(true)}
            className="rounded text-xs font-medium text-gray-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-gray-400"
          >
            Add a question of your own
          </button>
        )}
      </div>

      {showFollowUp && (
        <div className="mt-2">
          <label htmlFor={inputId} className="block text-xs font-medium text-gray-700 dark:text-gray-300">
            Your question <span className="font-normal text-gray-500 dark:text-gray-400">(optional, {FOLLOW_UP_MAX} characters max)</span>
          </label>
          <div className="mt-1 flex flex-col gap-2 sm:flex-row">
            <input
              id={inputId}
              type="text"
              value={followUp}
              maxLength={FOLLOW_UP_MAX}
              onChange={(e) => setFollowUp(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') void ask()
              }}
              placeholder="e.g. Why doesn't choice A work?"
              className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <button type="button" onClick={() => void ask()} disabled={loading} className={`${btn} justify-center`}>
              <Send className="h-4 w-4" aria-hidden /> Ask
            </button>
          </div>
        </div>
      )}

      <div aria-live="polite">
        {answer && (
          <div className="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-900/40">
            <p className="mb-1 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
              <MessageCircleQuestion className="h-3.5 w-3.5" aria-hidden /> AI tutor
            </p>
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-800 dark:text-gray-200">{answer}</p>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">AI-generated from this question&apos;s official explanation. If they disagree, trust the explanation.</p>
          </div>
        )}
        {error && (
          <div className="mt-3 flex flex-col gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 sm:flex-row sm:items-center sm:justify-between dark:border-amber-800 dark:bg-amber-900/20">
            <p role="alert" className="text-sm text-amber-900 dark:text-amber-200">{error.text}</p>
            {error.upgrade && (
              <Link href="/pricing" className="shrink-0 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring">
                Upgrade to Premium
              </Link>
            )}
            {error.signIn && (
              <Link href="/auth/signin" className="shrink-0 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring">
                Sign in
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
