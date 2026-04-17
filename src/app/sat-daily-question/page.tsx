'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { shuffleOptions } from '@/lib/shuffle-options'

interface DailyQ {
  section: 'math' | 'reading-writing'
  topicSlug: string
  question: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    difficulty: string
  }
  dayNumber: number
}

export default function SATDailyQuestionPage() {
  const [questions, setQuestions] = useState<DailyQ[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Record<string, number | null>>({})
  const [revealed, setRevealed] = useState<Record<string, boolean>>({})

  useEffect(() => {
    fetch('/api/sat-daily-question')
      .then(r => r.json())
      .then(data => {
        const qs = (data.questions ?? []).map((dq: DailyQ) => {
          const s = shuffleOptions(dq.question.options, dq.question.correctAnswer, dq.question.question)
          return { ...dq, question: { ...dq.question, options: s.options, correctAnswer: s.correctIndex } }
        })
        setQuestions(qs)
      })
      .finally(() => setLoading(false))
  }, [])

  function handleSelect(section: string, idx: number) {
    if (revealed[section]) return
    setSelected(prev => ({ ...prev, [section]: idx }))
  }

  function handleReveal(section: string) {
    setRevealed(prev => ({ ...prev, [section]: true }))
  }

  const sectionLabel = (s: string) =>
    s === 'math' ? 'Math' : 'Reading & Writing'

  const sectionColor = (s: string) =>
    s === 'math'
      ? 'from-purple-500 to-pink-500'
      : 'from-blue-500 to-teal-500'

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-12">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Link
            href="/sat"
            className="mb-4 inline-flex items-center gap-1 text-sm text-purple-600 hover:underline dark:text-purple-400"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            SAT Prep
          </Link>
          <h1 className="mb-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            SAT Question of the Day
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Two fresh SAT questions every day — one Math, one Reading &amp; Writing.
            Build consistency by practicing daily!
          </p>
          <p className="mt-2 text-sm font-medium text-purple-600 dark:text-purple-400">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
          </div>
        ) : (
          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
            {questions.map(q => {
              const sec = q.section
              const sel = selected[sec]
              const isRevealed = revealed[sec]
              const correct = q.question.correctAnswer

              return (
                <div
                  key={sec}
                  className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  {/* Section Header */}
                  <div
                    className={`rounded-t-2xl bg-gradient-to-r p-4 text-white ${sectionColor(sec)}`}
                  >
                    <span className="text-sm font-medium opacity-80">
                      Today&apos;s {sectionLabel(sec)} Question
                    </span>
                    <div className="mt-1 text-xs opacity-70">
                      Topic: {q.topicSlug.replace(/^sat-/, '').replace(/-/g, ' ')}
                    </div>
                  </div>

                  {/* Question Body */}
                  <div className="p-6">
                    <p className="mb-5 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                      {q.question.question}
                    </p>

                    {/* Options */}
                    <div className="mb-5 space-y-2">
                      {q.question.options.map((opt, i) => {
                        let cls =
                          'w-full rounded-xl border px-4 py-3 text-left text-sm transition '
                        if (isRevealed) {
                          if (i === correct) {
                            cls +=
                              'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:border-green-600'
                          } else if (i === sel && i !== correct) {
                            cls +=
                              'border-red-500 bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300 dark:border-red-600'
                          } else {
                            cls +=
                              'border-gray-200 text-gray-500 dark:border-gray-600 dark:text-gray-400'
                          }
                        } else if (i === sel) {
                          cls +=
                            'border-purple-500 bg-purple-50 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-500'
                        } else {
                          cls +=
                            'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-purple-50/50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-purple-500'
                        }
                        return (
                          <button
                            key={i}
                            onClick={() => handleSelect(sec, i)}
                            disabled={isRevealed}
                            className={cls}
                          >
                            <span className="mr-2 font-bold">
                              {String.fromCharCode(65 + i)}.
                            </span>
                            {opt}
                          </button>
                        )
                      })}
                    </div>

                    {/* Submit / Explanation */}
                    {!isRevealed ? (
                      <button
                        onClick={() => handleReveal(sec)}
                        disabled={sel === null || sel === undefined}
                        className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-2.5 font-semibold text-white shadow transition hover:shadow-lg disabled:opacity-40"
                      >
                        Check Answer
                      </button>
                    ) : (
                      <div className="rounded-xl bg-gray-50 p-4 text-sm dark:bg-gray-700/50">
                        <div className="mb-1 font-semibold text-gray-900 dark:text-white">
                          {sel === correct ? '✅ Correct!' : '❌ Incorrect'}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {q.question.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* CTA */}
        <div className="mx-auto mt-10 max-w-md text-center">
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            Want more practice? Try a full diagnostic or practice test.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              href="/sat-diagnostic"
              className="rounded-lg bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-400"
            >
              Diagnostic Test
            </Link>
            <Link
              href="/sat-practice"
              className="rounded-lg bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-400"
            >
              Practice Test
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
