'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { escapeCurrencyMath } from '@/lib/escape-currency-math'
import { previewIntervals, formatIntervalShort } from '@/lib/spaced-repetition'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import { formatFlashcardContent } from '@/lib/format-flashcard-content'
import { detectCloze } from '@/lib/cloze-utils'
import { ClozeFlashcard } from '@/components/cloze-flashcard'

interface Flashcard {
  id: string
  front: string
  back: string
  hint?: string
  topic: {
    title: string
    slug: string
  }
}

interface FlashcardProgress {
  id: string
  easeFactor: number
  interval: number
  repetitions: number
  isMinuteInterval?: boolean
  nextReview: Date
  reviewCount: number
  flashcard: Flashcard
}

interface ReviewStats {
  total: number
  due: number
  new: number
  review: number
}

export default function FlashcardReviewPage() {
  const { status } = useSession()
  const [cards, setCards] = useState<FlashcardProgress[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState<ReviewStats | null>(null)
  const [reviewComplete, setReviewComplete] = useState(false)
  const [reviewing, setReviewing] = useState(false)

  useEffect(() => {
    if (status === 'authenticated') {
      loadDueCards()
    }
  }, [status])

  async function loadDueCards() {
    try {
      const response = await fetch('/api/flashcards/review')
      if (!response.ok) throw new Error('Failed to load flashcards')
      
      const data = await response.json()
      setCards(data.cards)
      setStats(data.stats)
      
      if (data.cards.length === 0) {
        setReviewComplete(true)
      }
    } catch (error) {
      console.error('Error loading flashcards:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleRating(rating: 'again' | 'hard' | 'good' | 'easy') {
    if (reviewing) return // Prevent double-clicks
    
    setReviewing(true)
    const currentCard = cards[currentIndex]
    
    try {
      const response = await fetch('/api/flashcards/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          flashcardId: currentCard.flashcard.id,
          rating
        })
      })

      if (!response.ok) throw new Error('Failed to submit review')

      // Move to next card
      if (currentIndex < cards.length - 1) {
        setCurrentIndex(currentIndex + 1)
        setIsFlipped(false)
        setShowHint(false)
      } else {
        // Finished reviewing all due cards
        setReviewComplete(true)
      }
    } catch (error) {
      console.error('Error submitting review:', error)
    } finally {
      setReviewing(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="container py-10">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
          <p className="mt-4 text-muted-foreground">Loading your flashcards...</p>
        </div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <div className="container py-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Sign In Required</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Please sign in to review your flashcards with spaced repetition.
          </p>
          <Link
            href="/auth/signin"
            className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover"
          >
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  if (reviewComplete || cards.length === 0) {
    return (
      <div className="container py-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-300 rounded-xl p-12">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">All Caught Up!</h1>
            <p className="text-lg text-gray-700 mb-6">
              You&apos;ve reviewed all your due flashcards. Great work!
            </p>
            
            {stats && (
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-3xl font-bold text-accent">{stats.total}</div>
                  <div className="text-sm text-gray-600">Total Cards</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-3xl font-bold text-green-600">0</div>
                  <div className="text-sm text-gray-600">Due Now</div>
                </div>
              </div>
            )}

            <div className="flex gap-4 justify-center">
              <Link
                href="/flashcards"
                className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover"
              >
                Browse All Flashcards
              </Link>
              <Link
                href="/topics"
                className="px-6 py-3 bg-white border border-accent text-accent-dark rounded-lg font-semibold hover:bg-accent-subtle"
              >
                Continue Learning
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentCard = cards[currentIndex]
  const progress = Math.round(((currentIndex) / cards.length) * 100)
  const isClozeCard = detectCloze(currentCard.flashcard.front).isCloze

  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Link href="/flashcards/review" className="text-accent hover:underline mb-2 inline-block">
            ← Back to Review Dashboard
          </Link>
          <h1 className="text-3xl font-bold mb-2">Flashcard Review</h1>
          <p className="text-muted-foreground">
            Card {currentIndex + 1} of {cards.length} • {stats?.due || 0} cards due today
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-accent to-accent-secondary h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Render Cloze or Regular Flashcard */}
        {isClozeCard ? (
          <ClozeFlashcard
            front={currentCard.flashcard.front}
            back={currentCard.flashcard.back}
            hint={currentCard.flashcard.hint}
            topicTitle={currentCard.flashcard.topic.title}
            onRate={handleRating}
            reviewing={reviewing}
            intervals={previewIntervals(
              currentCard.easeFactor,
              currentCard.interval,
              currentCard.repetitions,
              currentCard.isMinuteInterval ?? false,
            )}
          />
        ) : (
          <>
            {/* Regular Flashcard */}
            <div className="mb-8">
              {/* Both faces sit in the SAME grid cell (not absolute), so the
                  container's height is always the TALLER face — a long answer
                  pushes everything below it (hint, rating buttons) further
                  down instead of overflowing a fixed 350px box and painting
                  over the Again/Hard/Good/Easy buttons. */}
              <div
                onClick={() => !isFlipped && setIsFlipped(true)}
                className={`cursor-pointer perspective-1000 ${!isFlipped ? 'hover:scale-105' : ''} transition-transform duration-200`}
              >
                <div
                  className={`grid w-full transition-all duration-500 preserve-3d`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
                  }}
                >
                  {/* Front */}
                  <div
                    className={`col-start-1 row-start-1 w-full backface-hidden ${
                      isFlipped ? 'pointer-events-none opacity-0' : 'opacity-100'
                    }`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="border-2 border-accent-muted rounded-xl p-10 bg-gradient-to-br from-accent-subtle to-blue-50 min-h-[350px] h-full flex flex-col justify-center">
                      <div className="text-sm text-accent-dark font-semibold mb-4">QUESTION</div>
                      <div className="text-xl prose prose-purple max-w-none text-gray-900">
                        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                          {escapeCurrencyMath(formatFlashcardContent(currentCard.flashcard.front))}
                        </ReactMarkdown>
                      </div>
                      <div className="mt-8 text-sm text-gray-600 text-center italic">
                        Click to reveal answer
                      </div>
                    </div>
                  </div>

              {/* Back */}
              <div
                className={`col-start-1 row-start-1 w-full backface-hidden ${
                  isFlipped ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="border-2 border-green-300 rounded-xl p-10 bg-gradient-to-br from-green-50 to-emerald-50 min-h-[350px] h-full flex flex-col justify-center">
                  <div className="text-sm text-green-900 font-semibold mb-4">ANSWER</div>
                  <div className="text-xl prose prose-green max-w-none text-gray-900">
                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                      {escapeCurrencyMath(formatFlashcardContent(currentCard.flashcard.back))}
                    </ReactMarkdown>
                  </div>
                  <div className="mt-8 text-sm text-gray-600 text-center">
                    <span className="font-semibold">Topic:</span> {currentCard.flashcard.topic.title}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hint */}
          {currentCard.flashcard.hint && !isFlipped && (
            <div className="mt-4">
              {!showHint ? (
                <button
                  onClick={() => setShowHint(true)}
                  className="text-sm text-accent-dark hover:underline font-semibold"
                >
                  💡 Show Hint
                </button>
              ) : (
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="text-sm text-yellow-900 font-semibold mb-2">💡 HINT</div>
                  <div className="text-sm prose prose-yellow max-w-none text-gray-900">
                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                      {escapeCurrencyMath(formatFlashcardContent(currentCard.flashcard.hint || ''))}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Rating Buttons. Times are the REAL schedule each
            rating would produce for this card's current state (they grow as
            the card matures), not static labels. */}
        {isFlipped && (() => {
          const preview = previewIntervals(
            currentCard.easeFactor,
            currentCard.interval,
            currentCard.repetitions,
            currentCard.isMinuteInterval ?? false,
          )
          const buttons = [
            { key: 'again' as const, label: 'Again', time: preview.again, cls: 'bg-red-100 hover:bg-red-200 border-red-300 text-red-900' },
            { key: 'hard' as const, label: 'Hard', time: preview.hard, cls: 'bg-orange-100 hover:bg-orange-200 border-orange-300 text-orange-900' },
            { key: 'good' as const, label: 'Good', time: preview.good, cls: 'bg-green-100 hover:bg-green-200 border-green-300 text-green-900' },
            { key: 'easy' as const, label: 'Easy', time: preview.easy, cls: 'bg-blue-100 hover:bg-blue-200 border-blue-300 text-blue-900' },
          ]
          return (
            <div className="grid grid-cols-4 gap-3">
              {buttons.map((b) => (
                <button
                  key={b.key}
                  onClick={() => handleRating(b.key)}
                  disabled={reviewing}
                  className={`px-4 py-6 rounded-lg border-2 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${b.cls}`}
                >
                  <div className="text-sm mb-1">{b.label}</div>
                  <div className="text-xs opacity-75">{b.time}</div>
                </button>
              ))}
            </div>
          )
        })()}
          </>
        )}

        {/* Instructions */}
        {!isFlipped && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>How it works:</strong> Study the question, then click to reveal the answer. 
              Rate your recall — each answer schedules the card&apos;s next review at the right moment.
            </p>
          </div>
        )}

        {isFlipped && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Rate your recall:</strong>
            </p>
            <ul className="text-sm text-blue-900 mt-2 space-y-1 ml-4">
              <li>• <strong>Again:</strong> Completely forgot - see it again soon</li>
              <li>• <strong>Hard:</strong> Remembered with difficulty</li>
              <li>• <strong>Good:</strong> Correct response with some thought</li>
              <li>• <strong>Easy:</strong> Perfect recall, no hesitation</li>
            </ul>
          </div>
        )}

        {/* Card Stats */}
        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="font-semibold text-gray-900">Reviews</div>
              <div className="text-gray-600">{currentCard.reviewCount}</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Ease</div>
              <div className="text-gray-600">{(currentCard.easeFactor * 100).toFixed(0)}%</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Interval</div>
              <div className="text-gray-600">{formatIntervalShort(currentCard.interval, currentCard.isMinuteInterval ?? false)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
