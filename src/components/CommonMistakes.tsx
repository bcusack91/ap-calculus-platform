'use client'

import { useState } from 'react'

interface Mistake {
  mistake: string
  why: string
  correct: string
}

interface CommonMistakesSectionProps {
  topic: string
  mistakes: Mistake[]
}

export function CommonMistakesSection({ topic, mistakes }: CommonMistakesSectionProps) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  return (
    <div className="my-6 rounded-lg border-2 border-red-200 dark:border-red-700 overflow-hidden">
      <div className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-5 py-3">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <span>⚠️</span> Common Mistakes: {topic}
        </h3>
        <p className="text-red-100 text-sm mt-0.5">
          Avoid these {mistakes.length} frequent errors
        </p>
      </div>

      <div className="p-4 space-y-3 bg-red-50 dark:bg-red-900/10">
        {mistakes.map((m, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 rounded-lg border border-red-200 dark:border-red-700 overflow-hidden"
          >
            <button
              onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
              className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <span className="font-medium text-gray-900 dark:text-white text-sm">
                  {m.mistake}
                </span>
              </div>
              <span className={`text-gray-400 transition-transform ${expandedIdx === i ? 'rotate-180' : ''}`}>
                ▾
              </span>
            </button>
            {expandedIdx === i && (
              <div className="px-4 pb-4 space-y-3">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3 border-l-4 border-red-400">
                  <p className="text-sm font-semibold text-red-800 dark:text-red-300 mb-1">
                    ❌ Why it&apos;s wrong:
                  </p>
                  <p className="text-sm text-red-700 dark:text-red-400">{m.why}</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border-l-4 border-green-400">
                  <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-1">
                    ✅ Correct approach:
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-400">{m.correct}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
