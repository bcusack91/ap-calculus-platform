'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'next/navigation'

interface Card {
  id: string
  front: string
  back: string
}
interface SetData {
  id: string
  title: string
  subject: string | null
  topicSlug: string | null
  cards: Card[]
}

export default function FlashcardSetViewer() {
  const params = useParams()
  const id = params.id as string

  const [set, setSet] = useState<SetData | null>(null)
  const [loading, setLoading] = useState(true)
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    fetch(`/api/flashcard-sets/${id}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => setSet(d.set))
      .catch(() => setSet(null))
      .finally(() => setLoading(false))
  }, [id])

  const go = useCallback(
    (delta: number) => {
      if (!set || set.cards.length === 0) return
      setFlipped(false)
      setIndex((i) => (i + delta + set.cards.length) % set.cards.length)
    },
    [set],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        setFlipped((f) => !f)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">Loading…</div>
    )
  }
  if (!set || set.cards.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="text-5xl mb-3">🗂️</div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Flashcard set not found</h1>
        <p className="text-gray-500 mt-1">This set may have been deleted or the link is incorrect.</p>
      </div>
    )
  }

  const card = set.cards[index]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{set.title}</h1>
          {set.subject && <p className="text-sm text-gray-500 mt-1">{set.subject}</p>}
          <p className="text-xs text-gray-400 mt-2">
            Card {index + 1} of {set.cards.length}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          className="w-full min-h-[16rem] rounded-2xl border-2 border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 shadow-lg p-8 flex flex-col items-center justify-center text-center transition-all hover:shadow-xl"
          aria-label="Flip card"
        >
          <span className="text-xs uppercase tracking-wide text-gray-400 mb-3">
            {flipped ? 'Answer' : 'Term'}
          </span>
          <span className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white whitespace-pre-wrap">
            {flipped ? card.back : card.front}
          </span>
          <span className="text-xs text-gray-400 mt-4">Tap or press space to flip</span>
        </button>

        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => go(-1)}
            className="px-5 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
          >
            ← Previous
          </button>
          <button
            onClick={() => setFlipped((f) => !f)}
            className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all"
          >
            Flip
          </button>
          <button
            onClick={() => go(1)}
            className="px-5 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}
