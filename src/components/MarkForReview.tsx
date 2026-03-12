'use client'

import { useState } from 'react'

interface MarkForReviewProps {
  cardId: string
  initialMarked?: boolean
  onToggle?: (cardId: string, marked: boolean) => void
}

export default function MarkForReview({ cardId, initialMarked = false, onToggle }: MarkForReviewProps) {
  const [marked, setMarked] = useState(initialMarked)

  const toggle = () => {
    const next = !marked
    setMarked(next)
    onToggle?.(cardId, next)
  }

  return (
    <button
      onClick={toggle}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
        marked
          ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 ring-1 ring-yellow-300 dark:ring-yellow-700'
          : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
      }`}
      aria-label={marked ? 'Unmark for review' : 'Mark for review'}
    >
      {marked ? '🔖 Marked' : '📌 Mark for Review'}
    </button>
  )
}
