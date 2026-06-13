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
  const [loading, setLoading] = useState(false)
  const [style, setStyle] = useState<'simple' | 'analogy' | 'visual' | 'example'>('simple')

  const explain = async () => {
    setLoading(true)
    setExplanation('')
    setUpgradeMsg('')
    try {
      const res = await fetch('/api/ai/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ concept, style, topicSlug }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        setExplanation(data.explanation ?? '')
      } else if (res.status === 429 && data.upgrade) {
        // Free daily AI-tutor quota reached — surface the upgrade path.
        setUpgradeMsg(data.error ?? 'Daily limit reached. Upgrade to Premium for unlimited AI explanations.')
      } else if (res.status === 429) {
        setUpgradeMsg('You\'re going a bit fast — please wait a moment and try again.')
      }
    } catch { /* silent */ }
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
                ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
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
        <div className="mt-3 flex flex-col gap-2 rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-700 dark:bg-purple-900/20 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-purple-800 dark:text-purple-200">{upgradeMsg}</p>
          <Link
            href="/pricing"
            className="flex-shrink-0 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:from-purple-700 hover:to-blue-700"
          >
            Upgrade to Premium
          </Link>
        </div>
      )}
    </div>
  )
}
