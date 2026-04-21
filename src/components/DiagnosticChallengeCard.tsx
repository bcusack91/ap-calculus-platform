'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

interface DiagnosticChallengeCardProps {
  category: string
  score: number
  correct: number
  total: number
  apScore: number
  currentChallengeToken?: string | null
  challengeSubmitted?: boolean
  onCreated?: (token: string, shareUrl: string) => void
}

export default function DiagnosticChallengeCard({
  category,
  score,
  correct,
  total,
  apScore,
  currentChallengeToken,
  challengeSubmitted,
  onCreated,
}: DiagnosticChallengeCardProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [createdToken, setCreatedToken] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [visibility, setVisibility] = useState<'public' | 'participants_only'>('public')

  const activeToken = currentChallengeToken ?? createdToken

  const shareUrl = useMemo(() => {
    if (!activeToken) return null
    if (typeof window === 'undefined') return `/challenge/${activeToken}`
    return `${window.location.origin}/challenge/${activeToken}`
  }, [activeToken])

  const createChallenge = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/diagnostic-challenges/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category,
          score,
          correct,
          total,
          apScore,
          visibility,
        }),
      })

      if (!res.ok) {
        const payload = await res.json().catch(() => ({ error: 'Failed to create challenge' }))
        throw new Error(payload.error || 'Failed to create challenge')
      }

      const payload = await res.json()
      const token = payload.token as string
      setCreatedToken(token)
      if (token && typeof window !== 'undefined') {
        const url = `${window.location.origin}/challenge/${token}`
        onCreated?.(token, url)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create challenge')
    } finally {
      setLoading(false)
    }
  }

  const copyLink = async () => {
    if (!shareUrl) return
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setError('Could not copy link. Please copy it manually.')
    }
  }

  return (
    <div className="mb-8 rounded-2xl border border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-800 dark:bg-indigo-900/20">
      <h4 className="mb-2 text-base font-semibold text-indigo-900 dark:text-indigo-200">Challenge Your Friends</h4>
      <p className="mb-4 text-sm text-indigo-700 dark:text-indigo-300">
        Turn this result into a head-to-head challenge. Share your link and let friends take the same diagnostic to compare scores.
      </p>

      {!activeToken ? (
        <div className="space-y-3">
          <div>
            <p className="mb-1.5 text-xs font-medium text-indigo-800 dark:text-indigo-200">Leaderboard visibility</p>
            <div className="flex gap-3">
              <label className="flex cursor-pointer items-center gap-1.5 text-xs text-indigo-700 dark:text-indigo-300">
                <input
                  type="radio"
                  name="visibility"
                  value="public"
                  checked={visibility === 'public'}
                  onChange={() => setVisibility('public')}
                  className="accent-indigo-600"
                />
                <span>Public</span>
                <span className="text-indigo-500 dark:text-indigo-400">(anyone with link)</span>
              </label>
              <label className="flex cursor-pointer items-center gap-1.5 text-xs text-indigo-700 dark:text-indigo-300">
                <input
                  type="radio"
                  name="visibility"
                  value="participants_only"
                  checked={visibility === 'participants_only'}
                  onChange={() => setVisibility('participants_only')}
                  className="accent-indigo-600"
                />
                <span>Participants only</span>
                <span className="text-indigo-500 dark:text-indigo-400">(must take test to see board)</span>
              </label>
            </div>
          </div>
          <button
            type="button"
            onClick={createChallenge}
            disabled={loading}
            className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Creating challenge...' : 'Generate Challenge Link'}
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="rounded-xl border border-indigo-200 bg-white px-3 py-2 text-xs text-indigo-900 dark:border-indigo-700 dark:bg-gray-900 dark:text-indigo-200 break-all">
            {shareUrl}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={copyLink}
              className="rounded-lg border border-indigo-300 bg-white px-3 py-1.5 text-xs font-medium text-indigo-700 transition hover:bg-indigo-100 dark:border-indigo-700 dark:bg-gray-900 dark:text-indigo-300"
            >
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
            <Link
              href={`/challenge/${activeToken}`}
              className="rounded-lg border border-indigo-300 bg-white px-3 py-1.5 text-xs font-medium text-indigo-700 transition hover:bg-indigo-100 dark:border-indigo-700 dark:bg-gray-900 dark:text-indigo-300"
            >
              View Challenge Board
            </Link>
            {challengeSubmitted ? (
              <span className="rounded-lg border border-emerald-300 bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                Result submitted to challenge
              </span>
            ) : null}
          </div>
        </div>
      )}

      {error ? <p className="mt-3 text-xs text-red-600 dark:text-red-400">{error}</p> : null}
    </div>
  )
}
