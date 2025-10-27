'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

interface Flashcard {
  id: string
  front: string
  back: string
  hint?: string
}

interface Topic {
  id: string
  title: string
  slug: string
  flashcards: Flashcard[]
}

export default function FlashcardStudyPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const [topic, setTopic] = useState<Topic | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadTopic() {
      try {
        const response = await fetch(`/api/flashcards/${slug}`)
        if (!response.ok) {
          throw new Error('Failed to load flashcards')
        }
        const data = await response.json()
        setTopic(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    loadTopic()
  }, [slug])

  const handleNext = () => {
    if (topic && currentIndex < topic.flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setIsFlipped(false)
      setShowHint(false)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setIsFlipped(false)
      setShowHint(false)
    }
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  if (loading) {
    return (
      <div className="container py-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg">Loading flashcards...</p>
        </div>
      </div>
    )
  }

  if (error || !topic) {
    return (
      <div className="container py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Flashcards Not Found</h1>
          <p className="text-muted-foreground mb-6">{error || 'The requested flashcards could not be found.'}</p>
          <Link href="/flashcards" className="text-purple-600 hover:underline">
            ← Back to Flashcards
          </Link>
        </div>
      </div>
    )
  }

  if (topic.flashcards.length === 0) {
    return (
      <div className="container py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">{topic.title}</h1>
          <p className="text-muted-foreground mb-6">No flashcards available for this topic yet.</p>
          <Link href="/flashcards" className="text-purple-600 hover:underline">
            ← Back to Flashcards
          </Link>
        </div>
      </div>
    )
  }

  const currentCard = topic.flashcards[currentIndex]
  const progress = ((currentIndex + 1) / topic.flashcards.length) * 100

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Link href="/flashcards" className="text-purple-600 hover:underline mb-4 inline-block">
            ← Back to Flashcards
          </Link>
          <h1 className="text-3xl font-bold mb-2">{topic.title}</h1>
          <p className="text-muted-foreground">
            Card {currentIndex + 1} of {topic.flashcards.length}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Flashcard */}
        <div className="mb-8">
          <div
            onClick={handleFlip}
            className="relative min-h-[300px] cursor-pointer perspective-1000"
          >
            <div
              className={`relative w-full min-h-[300px] transition-all duration-500 preserve-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
              }}
            >
              {/* Front */}
              <div
                className={`absolute w-full backface-hidden ${
                  isFlipped ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="border-2 border-purple-300 rounded-lg p-8 bg-gradient-to-br from-purple-50 to-blue-50 min-h-[300px] flex flex-col justify-center">
                  <div className="text-sm text-purple-600 font-semibold mb-4">QUESTION</div>
                  <div className="text-lg prose prose-purple max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                      {currentCard.front}
                    </ReactMarkdown>
                  </div>
                  <div className="mt-6 text-sm text-gray-500 text-center">
                    Click to reveal answer
                  </div>
                </div>
              </div>

              {/* Back */}
              <div
                className={`absolute w-full backface-hidden ${
                  isFlipped ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <div className="border-2 border-green-300 rounded-lg p-8 bg-gradient-to-br from-green-50 to-teal-50 min-h-[300px] flex flex-col justify-center">
                  <div className="text-sm text-green-600 font-semibold mb-4">ANSWER</div>
                  <div className="text-lg prose prose-green max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                      {currentCard.back}
                    </ReactMarkdown>
                  </div>
                  <div className="mt-6 text-sm text-gray-500 text-center">
                    Click to see question again
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hint */}
          {currentCard.hint && (
            <div className="mt-4">
              {!showHint ? (
                <button
                  onClick={() => setShowHint(true)}
                  className="text-sm text-purple-600 hover:underline"
                >
                  💡 Show Hint
                </button>
              ) : (
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="text-sm text-yellow-800 font-semibold mb-2">💡 HINT</div>
                  <div className="text-sm prose prose-yellow max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                      {currentCard.hint}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300 text-gray-700"
          >
            ← Previous
          </button>

          <button
            onClick={handleFlip}
            className="px-6 py-3 rounded-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white transition-all"
          >
            {isFlipped ? 'Show Question' : 'Show Answer'}
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === topic.flashcards.length - 1}
            className="px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300 text-gray-700"
          >
            Next →
          </button>
        </div>

        {/* Completion Message */}
        {currentIndex === topic.flashcards.length - 1 && (
          <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg text-center">
            <h3 className="text-xl font-bold text-green-900 mb-2">🎉 Great Job!</h3>
            <p className="text-green-700 mb-4">
              You've reviewed all {topic.flashcards.length} flashcards for this topic.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setCurrentIndex(0)
                  setIsFlipped(false)
                  setShowHint(false)
                }}
                className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold"
              >
                Review Again
              </button>
              <Link
                href="/flashcards"
                className="px-4 py-2 rounded-lg bg-white border border-green-600 text-green-600 font-semibold hover:bg-green-50"
              >
                Choose Another Topic
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
