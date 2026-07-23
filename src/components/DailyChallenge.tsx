'use client'

import { useCallback, useEffect, useState } from 'react'
import { MathText } from '@/components/MathText'

/**
 * Daily Challenge — 5 server-selected questions per UTC day, same for every
 * user. Questions come from GET /api/daily-challenge (answers stripped);
 * grading, completion state and streak advancement are all server-side via
 * POST /api/daily-challenge/answer. Completion is the DailyChallengeResult
 * row, not localStorage.
 */

interface PublicQuestion {
  id: string
  subject: string
  question: string
  options: string[]
}

interface ChallengeData {
  day: string
  questions: PublicQuestion[]
  result: { score: number; total: number; completedAt: string } | null
  streak: number
}

interface ReviewItem {
  id: string
  correct: boolean
  correctAnswer: number
  explanation: string
}

const OPTION_LABELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export function DailyChallenge() {
  const [data, setData] = useState<ChallengeData | null>(null)
  const [loadError, setLoadError] = useState(false)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [done, setDone] = useState<{ score: number; total: number; streak: number | null } | null>(null)
  const [review, setReview] = useState<ReviewItem[] | null>(null)

  const load = useCallback(() => {
    setLoadError(false)
    fetch('/api/daily-challenge')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<ChallengeData>
      })
      .then((d) => {
        setData(d)
        setAnswers(new Array(d.questions.length).fill(null))
        if (d.result) {
          setDone({ score: d.result.score, total: d.result.total, streak: d.streak })
        }
      })
      .catch(() => setLoadError(true))
  }, [])

  useEffect(() => { load() }, [load])

  const submit = useCallback(async () => {
    if (!data || submitting || answers.some((a) => a === null)) return
    setSubmitting(true)
    setSubmitError(null)
    try {
      const res = await fetch('/api/daily-challenge/answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers }),
      })
      const body = await res.json()
      if (res.ok) {
        setDone({ score: body.score, total: body.total, streak: body.streak ?? null })
        setReview(body.review ?? null)
      } else if (res.status === 409 && body.alreadyCompleted) {
        setDone({ score: body.score, total: body.total, streak: data.streak })
      } else {
        setSubmitError('Could not submit your answers. Please try again.')
      }
    } catch {
      setSubmitError('Could not submit your answers. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }, [data, answers, submitting])

  const cardClass =
    'bg-gradient-to-br from-indigo-50 to-accent-subtle dark:from-gray-800 dark:to-gray-800 rounded-xl border border-indigo-200 dark:border-indigo-800 p-6'

  if (loadError) {
    return (
      <div className={cardClass}>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">🎯 Daily Challenge</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Couldn&apos;t load today&apos;s challenge.</p>
        <button
          onClick={load}
          className="px-4 py-2 text-base bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Try again
        </button>
      </div>
    )
  }

  if (!data) {
    return (
      <div className={cardClass}>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">🎯 Daily Challenge</h3>
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-indigo-200/60 dark:bg-gray-700 rounded w-3/4" />
          <div className="h-10 bg-indigo-200/60 dark:bg-gray-700 rounded" />
          <div className="h-10 bg-indigo-200/60 dark:bg-gray-700 rounded" />
        </div>
      </div>
    )
  }

  // Completed (either fetched from the server or just submitted)
  if (done) {
    return (
      <div className={cardClass}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">🎯 Daily Challenge</h3>
          {done.streak !== null && done.streak > 0 && (
            <span className="text-sm font-bold text-orange-600 dark:text-orange-400">🔥 {done.streak}-day streak</span>
          )}
        </div>
        <div className="text-center py-2 mb-2">
          <p className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-300">
            {done.score}/{done.total}
          </p>
          <p className="text-sm font-semibold text-green-600 dark:text-green-400 mt-1">
            ✅ Completed for today — come back tomorrow for a new challenge!
          </p>
        </div>
        {review && (
          <div className="space-y-3 mt-3">
            {review.map((r, i) => {
              const q = data.questions[i]
              return (
                <div
                  key={r.id}
                  className={`p-3 rounded-lg border text-sm ${
                    r.correct
                      ? 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20'
                      : 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20'
                  }`}
                >
                  <p className="font-bold text-gray-900 dark:text-white mb-1">
                    {r.correct ? '✅' : '❌'} Q{i + 1} · {q?.subject}
                  </p>
                  {q && (
                    <MathText text={q.question} className="text-gray-800 dark:text-gray-200 mb-1" />
                  )}
                  {q && (
                    <p className="text-gray-700 dark:text-gray-300">
                      Correct answer:{' '}
                      <MathText inline text={q.options[r.correctAnswer] ?? ''} className="font-semibold" />
                    </p>
                  )}
                  {r.explanation && (
                    <MathText text={r.explanation} className="text-gray-600 dark:text-gray-400 mt-1" />
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  const question = data.questions[current]
  if (!question) {
    return (
      <div className={cardClass}>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">🎯 Daily Challenge</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">No challenge available today. Check back tomorrow!</p>
      </div>
    )
  }

  const total = data.questions.length
  const isLast = current === total - 1
  const selected = answers[current]
  const allAnswered = answers.every((a) => a !== null)

  return (
    <div className={cardClass}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">🎯 Daily Challenge</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Question {current + 1} of {total} · {question.subject}
          </p>
        </div>
        {data.streak > 0 && (
          <span className="text-sm font-bold text-orange-600 dark:text-orange-400">🔥 {data.streak}</span>
        )}
      </div>

      {/* Progress dots */}
      <div className="flex gap-1.5 mb-4">
        {data.questions.map((q, i) => (
          <div
            key={q.id}
            className={`h-1.5 flex-1 rounded-full ${
              i === current
                ? 'bg-indigo-600'
                : answers[i] !== null
                  ? 'bg-indigo-400'
                  : 'bg-gray-200 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>

      <MathText text={question.question} className="text-gray-800 dark:text-gray-200 font-medium mb-4" />

      <div className="space-y-2 mb-4">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => {
              setAnswers((prev) => {
                const next = [...prev]
                next[current] = i
                return next
              })
            }}
            className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all text-base ${
              selected === i
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                : 'border-gray-200 dark:border-gray-600 hover:border-indigo-300'
            }`}
          >
            <span className="font-bold mr-2">{OPTION_LABELS[i] ?? i + 1}.</span>
            <MathText inline text={opt} />
          </button>
        ))}
      </div>

      {submitError && (
        <p className="text-sm text-red-600 dark:text-red-400 mb-2">{submitError}</p>
      )}

      <div className="flex gap-2">
        {current > 0 && (
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={submitting}
            className="px-4 py-2.5 text-base border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-indigo-300 disabled:opacity-50 transition-colors"
          >
            Back
          </button>
        )}
        {!isLast ? (
          <button
            onClick={() => setCurrent((c) => Math.min(total - 1, c + 1))}
            disabled={selected === null}
            className="flex-1 py-2.5 text-base bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors"
          >
            Next
          </button>
        ) : (
          <button
            onClick={submit}
            disabled={!allAnswered || submitting}
            className="flex-1 py-2.5 text-base bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors"
          >
            {submitting ? 'Submitting…' : 'Submit Answers'}
          </button>
        )}
      </div>
    </div>
  )
}
