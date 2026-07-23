'use client'

import { useState } from 'react'
import Link from 'next/link'

interface ExplainDifferentlyProps {
  concept: string
  topicSlug?: string
}

export default function ExplainDifferently({ concept, topicSlug }: ExplainDifferentlyProps) {
  const [explanation, setExplanation] = useState('')
  const [upgradeMsg, setUpgradeMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [needAuth, setNeedAuth] = useState(false)
  const [loading, setLoading] = useState(false)
  const [style, setStyle] = useState<'simple' | 'analogy' | 'visual' | 'example'>('simple')

  const explain = async () => {
    setLoading(true)
    setExplanation('')
    setUpgradeMsg('')
    setErrorMsg('')
    setNeedAuth(false)
    try {
      const res = await fetch('/api/ai/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ concept, style, topicSlug }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        setExplanation(data.explanation ?? '')
      } else if (res.status === 401) {
        // Not signed in — the AI tutor requires an account.
        setNeedAuth(true)
      } else if (res.status === 429 && data.upgrade) {
        // Free daily AI-tutor quota reached — surface the upgrade path.
        setUpgradeMsg(data.error ?? 'Daily limit reached. Upgrade to Premium for unlimited AI explanations.')
      } else if (res.status === 429) {
        setUpgradeMsg('You\'re going a bit fast — please wait a moment and try again.')
      } else {
        // 400 / 5xx / anything unexpected — never leave the button silently dead.
        setErrorMsg('Something went wrong generating that explanation. Please try again.')
      }
    } catch {
      setErrorMsg('Could not reach the tutor. Check your connection and try again.')
    }
    setLoading(false)
  }

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Explain using:</span>
        {[
          { key: 'simple' as const, label: '📝 Simple words' },
          { key: 'analogy' as const, label: '🔗 Analogy' },
          { key: 'visual' as const, label: '🎨 Visual desc.' },
          { key: 'example' as const, label: '📐 Example' },
        ].map(s => (
          <button
            key={s.key}
            onClick={() => { setStyle(s.key); if (explanation) explain() }}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
              style === s.key
                ? 'bg-accent-light text-accent-hover dark:bg-accent-light/30 dark:text-accent-muted'
                : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
            }`}
          >
            {s.label}
          </button>
        ))}
        <button
          onClick={explain}
          disabled={loading}
          className="px-3 py-1 rounded-lg text-xs font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {loading ? '🤔 Thinking...' : '💡 Explain'}
        </button>
      </div>

      {explanation && (
        <div className="mt-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{explanation}</p>
        </div>
      )}

      {upgradeMsg && (
        <div className="mt-3 flex flex-col gap-2 rounded-lg border border-accent-light bg-accent-subtle p-4 dark:border-accent-hover dark:bg-accent-light/20 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-accent-dark dark:text-accent-dark">{upgradeMsg}</p>
          <Link
            href="/pricing"
            className="flex-shrink-0 rounded-lg bg-gradient-to-r from-accent to-accent-secondary px-4 py-2 text-xs font-semibold text-white transition-colors hover:from-accent-hover hover:to-accent-secondary-hover"
          >
            Upgrade to Premium
          </Link>
        </div>
      )}

      {needAuth && (
        <div className="mt-3 flex flex-col gap-2 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-blue-800 dark:text-blue-200">Sign in to use the AI tutor.</p>
          <Link
            href="/auth/signin"
            className="flex-shrink-0 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Sign in
          </Link>
        </div>
      )}

      {errorMsg && (
        <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">{errorMsg}</p>
        </div>
      )}
    </div>
  )
}
