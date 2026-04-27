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
    'px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm'

  return (
    <div>
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
