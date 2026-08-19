'use client'

import { useState, useEffect, useCallback } from 'react'
import { renderRichText } from '@/lib/render-rich-text'
import { detectCloze, maskClozeText, revealClozeText } from '@/lib/cloze-utils'
import { previewIntervals } from '@/lib/spaced-repetition'

interface SessionCard {
  id: string
  front: string
  back: string
  topicSlug?: string
  topicTitle?: string
  progress: { repetitions: number; easeFactor: number; interval: number; isMinuteInterval?: boolean } | null
}

interface SessionStats {
  dueCount: number
  newCount: number
  totalInDeck: number
  sessionSize: number
}

interface ReviewResult {
  cardId: string
  rating: 'again' | 'hard' | 'good' | 'easy'
  wasCorrect: boolean
}

interface FlashcardStudySessionProps {
  topicSlug?: string
  onComplete?: () => void
}

export default function FlashcardStudySession({ topicSlug, onComplete }: FlashcardStudySessionProps) {
  const [cards, setCards] = useState<SessionCard[]>([])
  const [stats, setStats] = useState<SessionStats | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [results, setResults] = useState<ReviewResult[]>([])
  const [sessionComplete, setSessionComplete] = useState(false)

  const loadSession = useCallback(() => {
    setLoading(true)
    setError(null)
    const url = topicSlug
      ? `/api/flashcards/session?topicSlug=${encodeURIComponent(topicSlug)}`
      : '/api/flashcards/session'
    fetch(url)
      .then((r) => { if (!r.ok) throw new Error('Failed to load flashcards'); return r.json() })
      .then((data) => {
        setCards(data.cards ?? [])
        setStats(data.stats ?? null)
        if (!data.cards?.length) setSessionComplete(true)
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [topicSlug])

  // eslint-disable-next-line react-hooks/set-state-in-effect -- async fetch callback, not synchronous
  useEffect(() => { loadSession() }, [loadSession])

  const handleRating = useCallback(
    async (rating: 'again' | 'hard' | 'good' | 'easy') => {
      const card = cards[currentIndex]
      if (!card) return

      setResults((prev) => [
        ...prev,
        { cardId: card.id, rating, wasCorrect: rating !== 'again' },
      ])

      // Send review to API
      try {
        await fetch('/api/flashcards/review', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ flashcardId: card.id, rating }),
        })
      } catch {
        console.error('Failed to submit review')
      }

      setFlipped(false)

      if (currentIndex + 1 >= cards.length) {
        setSessionComplete(true)
      } else {
        setCurrentIndex((i) => i + 1)
      }
    },
    [cards, currentIndex]
  )

  // Keyboard shortcuts
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (sessionComplete) return
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        if (!flipped) setFlipped(true)
      }
      if (flipped) {
        if (e.key === '1') handleRating('again')
        if (e.key === '2') handleRating('hard')
        if (e.key === '3') handleRating('good')
        if (e.key === '4') handleRating('easy')
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [flipped, sessionComplete, handleRating])

  if (loading) {
    return (
      <div className="max-w-lg mx-auto p-6">
        <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-lg mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
          <div className="text-3xl mb-2">⚠️</div>
          <p className="text-gray-600 dark:text-gray-400 mb-3">{error}</p>
          <button onClick={loadSession} className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors text-sm font-medium">
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (sessionComplete) {
    const correct = results.filter((r) => r.wasCorrect).length
    const total = results.length
    const retention = total > 0 ? Math.round((correct / total) * 100) : 0

    return (
      <div className="max-w-lg mx-auto p-6 text-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Session Complete!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {total === 0 ? 'No cards were due for review.' : `You reviewed ${total} cards.`}
          </p>

          {total > 0 && (
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                <p className="text-2xl font-bold text-green-600">{correct}</p>
                <p className="text-xs text-green-600">Correct</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <p className="text-2xl font-bold text-red-600">{total - correct}</p>
                <p className="text-xs text-red-600">Again</p>
              </div>
              <div className="bg-accent-subtle dark:bg-accent-light/20 rounded-xl p-4">
                <p className="text-2xl font-bold text-accent">{retention}%</p>
                <p className="text-xs text-accent">Retention</p>
              </div>
            </div>
          )}

          {/* Rating breakdown */}
          {total > 0 && (
            <div className="flex justify-center gap-3 mb-6">
              {(['again', 'hard', 'good', 'easy'] as const).map((r) => {
                const count = results.filter((x) => x.rating === r).length
                const colors = { again: 'text-red-600', hard: 'text-orange-600', good: 'text-green-600', easy: 'text-blue-600' }
                return (
                  <div key={r} className="text-center">
                    <p className={`text-lg font-bold ${colors[r]}`}>{count}</p>
                    <p className="text-xs text-gray-500 capitalize">{r}</p>
                  </div>
                )
              })}
            </div>
          )}

          <button
            onClick={onComplete}
            className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-hover transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    )
  }

  const card = cards[currentIndex]
  // Cloze cards: mask deletions on the question side (raw {{c1::…}} would
  // print the answer), and on the answer side show the completed sentence
  // before the explanation.
  const isClozeCard = detectCloze(card.front).isCloze
  const cardHtml = flipped
    ? isClozeCard
      ? `${renderRichText(revealClozeText(card.front, true))}<br><br>${renderRichText(card.back)}`
      : renderRichText(card.back)
    : renderRichText(maskClozeText(card.front))

  return (
    <div className="max-w-lg mx-auto p-6">
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {currentIndex + 1} / {cards.length}
        </span>
        <div className="flex-1 mx-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
          />
        </div>
        {stats && (
          <span className="text-xs text-gray-400">
            {stats.dueCount} due · {stats.newCount} new
          </span>
        )}
      </div>

      {/* Card */}
      <div
        onClick={() => !flipped && setFlipped(true)}
        role="region"
        aria-live="polite"
        aria-label={flipped ? 'Flashcard answer' : 'Flashcard question'}
        className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 min-h-[16rem] flex flex-col items-center justify-center cursor-pointer transition-all hover:shadow-xl ${
          !flipped ? 'hover:scale-[1.01]' : ''
        }`}
      >
        {card.topicTitle && (
          <p className="text-xs text-accent dark:text-accent-muted mb-3 uppercase tracking-wider">{card.topicTitle}</p>
        )}
        <p
          className="text-lg text-center text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: cardHtml }}
        />
        {!flipped && (
          <p className="text-sm text-gray-400 mt-4">
            Tap to reveal · <kbd className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs">Space</kbd>
          </p>
        )}
        {card.progress === null && !flipped && (
          <span className="mt-2 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full">New</span>
        )}
      </div>

      {/* Rating buttons — times are the real schedule each rating would set
          for this card's current state: they grow as the card matures */}
      {flipped && (() => {
        const preview = previewIntervals(
          card.progress?.easeFactor ?? 2.5,
          card.progress?.interval ?? 0,
          card.progress?.repetitions ?? 0,
          card.progress?.isMinuteInterval ?? false,
        )
        return (
          <div className="grid grid-cols-4 gap-2 mt-4">
            {[
              { key: 'again' as const, label: 'Again', time: preview.again, color: 'bg-red-500 hover:bg-red-600', kbd: '1' },
              { key: 'hard' as const, label: 'Hard', time: preview.hard, color: 'bg-orange-500 hover:bg-orange-600', kbd: '2' },
              { key: 'good' as const, label: 'Good', time: preview.good, color: 'bg-green-500 hover:bg-green-600', kbd: '3' },
              { key: 'easy' as const, label: 'Easy', time: preview.easy, color: 'bg-blue-500 hover:bg-blue-600', kbd: '4' },
            ].map((btn) => (
              <button
                key={btn.key}
                onClick={() => handleRating(btn.key)}
                className={`${btn.color} text-white py-3 rounded-xl font-medium transition-colors text-sm`}
              >
                {btn.label}
                <br />
                <span className="text-xs opacity-80">{btn.time}</span>
                <kbd className="ml-1 text-xs opacity-60">{btn.kbd}</kbd>
              </button>
            ))}
          </div>
        )
      })()}
    </div>
  )
}
