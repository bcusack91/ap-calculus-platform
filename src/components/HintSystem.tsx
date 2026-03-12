'use client'

import { useState } from 'react'

interface HintSystemProps {
  hints: string[]
  explanation: string
  onHintUsed?: (hintIndex: number) => void
}

export default function HintSystem({ hints, explanation, onHintUsed }: HintSystemProps) {
  const [revealedCount, setRevealedCount] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)

  const revealNext = () => {
    if (revealedCount < hints.length) {
      const nextIndex = revealedCount
      setRevealedCount(prev => prev + 1)
      onHintUsed?.(nextIndex)
    } else {
      setShowExplanation(true)
    }
  }

  const hintsRemaining = hints.length - revealedCount

  if (hints.length === 0 && !explanation) return null

  return (
    <div className="mt-4 space-y-2">
      {/* Revealed hints */}
      {hints.slice(0, revealedCount).map((hint, i) => (
        <div
          key={i}
          className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-3 rounded-r-lg animate-fadeIn"
        >
          <p className="text-sm text-gray-800 dark:text-gray-200">
            <span className="font-semibold text-yellow-700 dark:text-yellow-400">
              Hint {i + 1}:
            </span>{' '}
            {hint}
          </p>
        </div>
      ))}

      {/* Full explanation */}
      {showExplanation && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-r-lg animate-fadeIn">
          <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-1">
            Full Explanation:
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-200">{explanation}</p>
        </div>
      )}

      {/* Hint button */}
      {!showExplanation && (
        <button
          onClick={revealNext}
          className="flex items-center gap-2 text-sm text-yellow-700 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 transition-colors mt-2 group"
        >
          <span className="text-lg group-hover:animate-bounce">💡</span>
          <span className="underline decoration-dotted underline-offset-4">
            {revealedCount === 0
              ? "I'm stuck — give me a hint"
              : hintsRemaining > 0
                ? `Show another hint (${hintsRemaining} left)`
                : 'Show full explanation'}
          </span>
        </button>
      )}
    </div>
  )
}
