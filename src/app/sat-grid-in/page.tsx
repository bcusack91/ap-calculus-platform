'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { generateGridInProblems, checkGridInAnswer, type GridInProblem } from '@/data/sat-grid-in'

export default function SATGridInPage() {
  const [problems, setProblems] = useState<GridInProblem[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null)
  const [score, setScore] = useState({ correct: 0, total: 0 })
  const [showExplanation, setShowExplanation] = useState(false)

  useEffect(() => {
    setProblems(generateGridInProblems(10))
  }, [])

  const current = problems[currentIdx]

  function handleSubmit() {
    if (!current || result) return
    const num = parseFloat(inputValue)
    if (isNaN(num)) return
    const isCorrect = checkGridInAnswer(current, num)
    setResult(isCorrect ? 'correct' : 'incorrect')
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }))
    setShowExplanation(true)
  }

  function handleNext() {
    if (currentIdx < problems.length - 1) {
      setCurrentIdx(prev => prev + 1)
      setInputValue('')
      setResult(null)
      setShowExplanation(false)
    }
  }

  function handleNewSet() {
    setProblems(generateGridInProblems(10))
    setCurrentIdx(0)
    setInputValue('')
    setResult(null)
    setShowExplanation(false)
    setScore({ correct: 0, total: 0 })
  }

  const finished = currentIdx === problems.length - 1 && result !== null
  const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0

  if (!problems.length) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-12">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <Link
            href="/sat"
            className="mb-4 inline-flex items-center gap-1 text-sm text-purple-600 hover:underline dark:text-purple-400"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            SAT Prep
          </Link>
          <h1 className="mb-2 text-3xl font-black tracking-tight text-gray-900 dark:text-white">
            Grid-In Practice
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Student-produced response questions — type your numeric answer instead of choosing from options.
          </p>
        </div>

        {/* Score Bar */}
        <div className="mx-auto mb-6 flex max-w-2xl items-center justify-between rounded-xl border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Question {currentIdx + 1} of {problems.length}
          </span>
          <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
            {score.correct}/{score.total} correct ({pct}%)
          </span>
        </div>

        {/* Question Card */}
        {current && (
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8 dark:border-gray-700 dark:bg-gray-800">
            {/* Category & Difficulty */}
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                {current.category}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  current.difficulty === 'easy'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400'
                    : current.difficulty === 'medium'
                      ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
                      : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400'
                }`}
              >
                {current.difficulty}
              </span>
            </div>

            {/* Question */}
            <p className="mb-6 text-lg leading-relaxed text-gray-900 dark:text-white">
              {current.question}
            </p>

            {/* Input */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Answer
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  inputMode="decimal"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                  disabled={result !== null}
                  placeholder="Type a number..."
                  className={`flex-1 rounded-xl border-2 px-4 py-3 text-lg font-mono transition focus:outline-none ${
                    result === 'correct'
                      ? 'border-green-500 bg-green-50 text-green-800 dark:border-green-600 dark:bg-green-900/30 dark:text-green-300'
                      : result === 'incorrect'
                        ? 'border-red-500 bg-red-50 text-red-800 dark:border-red-600 dark:bg-red-900/30 dark:text-red-300'
                        : 'border-gray-300 bg-white focus:border-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-purple-400'
                  }`}
                />
                {!result && (
                  <button
                    onClick={handleSubmit}
                    disabled={!inputValue.trim()}
                    className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white shadow transition hover:shadow-lg disabled:opacity-40"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>

            {/* Result */}
            {result && (
              <div
                className={`mb-4 rounded-xl p-4 ${
                  result === 'correct'
                    ? 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    : 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                }`}
              >
                <p className="font-semibold">
                  {result === 'correct' ? '✅ Correct!' : `❌ Incorrect — the answer is ${current.correctAnswer}`}
                </p>
              </div>
            )}

            {/* Explanation */}
            {showExplanation && (
              <div className="mb-4 rounded-xl bg-gray-50 p-4 text-sm dark:bg-gray-700/50">
                <p className="mb-1 font-semibold text-gray-900 dark:text-white">Explanation</p>
                <p className="text-gray-600 dark:text-gray-400">{current.explanation}</p>
              </div>
            )}

            {/* Next / Finish */}
            <div className="flex justify-end gap-3">
              {finished ? (
                <button
                  onClick={handleNewSet}
                  className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2.5 font-semibold text-white shadow transition hover:shadow-lg"
                >
                  New Set of 10
                </button>
              ) : result ? (
                <button
                  onClick={handleNext}
                  className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2.5 font-semibold text-white shadow transition hover:shadow-lg"
                >
                  Next Question →
                </button>
              ) : null}
            </div>
          </div>
        )}

        {/* Finished Summary */}
        {finished && (
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Set Complete!
            </h2>
            <p className="text-3xl font-black text-purple-600 dark:text-purple-400">
              {score.correct}/{score.total}
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {pct >= 80 ? 'Excellent work!' : pct >= 60 ? 'Good effort — keep practicing!' : 'Keep working at it — you\'ll improve!'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
