'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface AsyncChallengeButtonProps {
  /** Topic slug for the async challenge — required (button is disabled if not provided). */
  topicSlug: string | null
  /** Number of questions in the challenge. Defaults to 10. */
  questionCount?: number
  /** Time limit in seconds. Defaults to 300. */
  timeLimit?: number
  /** Optional className overriding the default button gradient. */
  className?: string
  /** Optional helper text rendered below the button. */
  helperText?: string
}

/**
 * Renders a "Create Async Challenge" button. When clicked, creates an async
 * challenge for the given topic and navigates the challenger to play their half.
 *
 * Designed to be dropped into any course-specific competitive page so students
 * can create a challenge link to share with friends instead of waiting in the
 * matchmaking queue (useful for low-traffic / niche topics).
 */
export default function AsyncChallengeButton({
  topicSlug,
  questionCount = 10,
  timeLimit = 300,
  className,
  helperText,
}: AsyncChallengeButtonProps) {
  const router = useRouter()
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClick = async () => {
    if (!topicSlug || creating) return
    setError(null)
    setCreating(true)
    try {
      const res = await fetch('/api/competitive/async-challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicSlug, questionCount, timeLimit }),
      })
      const data = await res.json()
      if (!res.ok || !data.challengeId) {
        throw new Error(data.error || 'Failed to create challenge')
      }
      router.push(`/competitive/async/${data.challengeId}`)
    } catch (err) {
      console.error('Error creating async challenge:', err)
      setError('Could not create challenge. Please try again.')
      setCreating(false)
    }
  }

  const defaultClass =
    'w-full px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-xl text-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed'

  return (
    <div>
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full bg-amber-400 text-amber-900">
          ⭐ Recommended
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">Best for low-traffic times</span>
      </div>
      <button
        type="button"
        onClick={handleClick}
        disabled={!topicSlug || creating}
        className={className ?? defaultClass}
        title={!topicSlug ? 'Select a topic first' : 'Create a shareable async challenge link'}
      >
        {creating ? 'Creating…' : '📬 Create Async Challenge'}
      </button>
      {helperText && (
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
      {error && (
        <p className="mt-2 text-xs text-red-500">{error}</p>
      )}
    </div>
  )
}
