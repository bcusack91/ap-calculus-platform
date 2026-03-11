'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { renderKatexSync, preloadKatex } from '@/lib/katex-lazy'
import type {
  DiagnosticTestData,
  DiagnosticQuestion,
  DiagnosticResults,
} from '@/data/sat-practice/diagnostic-generator'

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function renderLatex(text: string): string {
  return text.replace(
    /\$\$(.*?)\$\$|\$(.*?)\$/g,
    (_, block: string | undefined, inline: string | undefined) => {
      const expr = block ?? inline ?? ''
      try {
        return renderKatexSync(expr, {
          displayMode: !!block,
        })
      } catch {
        return expr
      }
    },
  )
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

interface DiagnosticTestProps {
  testData: DiagnosticTestData
  onComplete: (results: DiagnosticResults) => void
  onCancel: () => void
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function DiagnosticTest({
  testData,
  onComplete,
  onCancel,
}: DiagnosticTestProps) {
  const [phase, setPhase] = useState<'intro' | 'testing' | 'complete'>('intro')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<
    { questionIndex: number; selectedIndex: number | null }[]
  >(testData.questions.map((_, i) => ({ questionIndex: i, selectedIndex: null })))
  const [timeRemaining, setTimeRemaining] = useState(testData.timeLimitMinutes * 60)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Pre-load KaTeX lazily on mount
  useEffect(() => { preloadKatex() }, [])

  const currentQuestion = testData.questions[currentIndex]
  const currentAnswer = answers[currentIndex]
  const answeredCount = answers.filter(a => a.selectedIndex !== null).length

  // Timer
  useEffect(() => {
    if (phase !== 'testing') return
    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current)
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  const selectAnswer = useCallback(
    (optionIdx: number) => {
      setAnswers(prev => {
        const next = [...prev]
        next[currentIndex] = { ...next[currentIndex], selectedIndex: optionIdx }
        return next
      })
    },
    [currentIndex],
  )

  const handleSubmit = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)

    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { analyzeDiagnosticResults } = require('@/data/sat-practice/diagnostic-generator')
    const results = analyzeDiagnosticResults(testData.questions, answers)

    setPhase('complete')
    onComplete(results)
  }, [testData.questions, answers, onComplete])

  // ----------------------------------------------------------------
  //  Intro
  // ----------------------------------------------------------------
  if (phase === 'intro') {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-teal-500">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              SAT Diagnostic Test
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Discover your strengths and areas for improvement
            </p>
          </div>

          <div className="mb-6 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="mb-2 font-semibold text-green-800 dark:text-green-300">
              How It Works
            </h4>
            <ul className="space-y-1 text-sm text-green-700 dark:text-green-400">
              <li>• {testData.totalQuestions} questions sampling all SAT domains</li>
              <li>• {testData.timeLimitMinutes} minute time limit</li>
              <li>• Covers both Reading & Writing and Math sections</li>
              <li>• Instant analysis of your skill levels per domain</li>
              <li>• Personalized study recommendations</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <button
              onClick={onCancel}
              className="flex-1 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={() => setPhase('testing')}
              className="flex-1 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Start Diagnostic
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ----------------------------------------------------------------
  //  Complete (spinner)
  // ----------------------------------------------------------------
  if (phase === 'complete') {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />
          <p className="text-gray-600 dark:text-gray-400">Analyzing your results...</p>
        </div>
      </div>
    )
  }

  // ----------------------------------------------------------------
  //  Testing
  // ----------------------------------------------------------------
  if (!currentQuestion) return null

  const timeWarning = timeRemaining <= 180
  const timeCritical = timeRemaining <= 60

  return (
    <div className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between rounded-xl border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            SAT Diagnostic
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-400">
            Question {currentIndex + 1} of {testData.totalQuestions} &middot; {answeredCount} answered
          </p>
        </div>
        <div
          className={`rounded-lg px-4 py-2 font-mono text-lg font-bold ${
            timeCritical
              ? 'animate-pulse bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400'
              : timeWarning
                ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
          }`}
        >
          {formatTime(timeRemaining)}
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-green-500 to-teal-500 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / testData.totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8 dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/50 dark:text-green-300">
              Q{currentIndex + 1}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-400">
              {currentQuestion.category}
            </span>
          </div>
          <div
            className="prose prose-lg max-w-none text-gray-900 dark:prose-invert dark:text-white"
            dangerouslySetInnerHTML={{ __html: renderLatex(currentQuestion.question) }}
          />
        </div>

        <div className="mb-6 space-y-3">
          {currentQuestion.options.map((option, idx) => {
            const letters = ['A', 'B', 'C', 'D']
            const isSelected = currentAnswer?.selectedIndex === idx
            return (
              <button
                key={idx}
                onClick={() => selectAnswer(idx)}
                className={`flex w-full items-start gap-3 rounded-xl border-2 p-4 text-left transition ${
                  isSelected
                    ? 'border-green-500 bg-green-50 dark:border-green-400 dark:bg-green-900/20'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:hover:border-gray-500 dark:hover:bg-gray-700/50'
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    isSelected
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                  }`}
                >
                  {letters[idx]}
                </span>
                <span
                  className="flex-1 pt-1 text-gray-800 dark:text-gray-200"
                  dangerouslySetInnerHTML={{ __html: renderLatex(option) }}
                />
              </button>
            )
          })}
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            ← Back
          </button>

          {currentIndex === testData.totalQuestions - 1 ? (
            <button
              onClick={handleSubmit}
              className="rounded-xl bg-gradient-to-r from-green-600 to-teal-600 px-6 py-2 text-sm font-semibold text-white shadow transition hover:shadow-lg"
            >
              Submit ({answeredCount}/{testData.totalQuestions} answered)
            </button>
          ) : (
            <button
              onClick={() => setCurrentIndex(prev => Math.min(testData.totalQuestions - 1, prev + 1))}
              className="rounded-xl bg-gradient-to-r from-green-600 to-teal-600 px-6 py-2 text-sm font-semibold text-white shadow transition hover:shadow-lg"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Results Component                                                  */
/* ------------------------------------------------------------------ */

export function DiagnosticResultsView({
  results,
  onRetake,
  onGoToStudy,
}: {
  results: DiagnosticResults
  onRetake: () => void
  onGoToStudy: () => void
}) {
  const levelColor = (level: string) => {
    if (level === 'strong') return 'text-green-600 dark:text-green-400'
    if (level === 'moderate') return 'text-amber-600 dark:text-amber-400'
    return 'text-red-600 dark:text-red-400'
  }

  const levelBg = (level: string) => {
    if (level === 'strong') return 'bg-green-500'
    if (level === 'moderate') return 'bg-amber-500'
    return 'bg-red-500'
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-teal-500">
            <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Diagnostic Results
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {results.totalCorrect}/{results.totalQuestions} correct ({results.percentage}%)
          </p>
        </div>

        {/* Estimated Score */}
        <div className="mb-8 text-center">
          <p className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
            Estimated SAT Score
          </p>
          <p className="text-5xl font-black text-purple-600 dark:text-purple-400">
            {results.estimatedScore}
          </p>
          <div className="mt-2 flex justify-center gap-6 text-sm">
            <span className="text-blue-600 dark:text-blue-400">
              R&W: {results.rwScore}
            </span>
            <span className="text-green-600 dark:text-green-400">
              Math: {results.mathScore}
            </span>
          </div>
        </div>

        {/* Domain Breakdown */}
        <div className="mb-8">
          <h3 className="mb-4 font-semibold text-gray-800 dark:text-gray-200">
            Performance by Domain
          </h3>

          {/* R&W Domains */}
          <p className="mb-2 text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            Reading & Writing
          </p>
          <div className="mb-4 space-y-2">
            {results.domains
              .filter(d => d.section === 'reading-writing')
              .map(d => (
                <div key={d.domainId} className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {d.domainName}
                    </span>
                    <span className={`text-sm font-semibold ${levelColor(d.level)}`}>
                      {d.correct}/{d.total} ({d.percentage}%)
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
                    <div
                      className={`h-full rounded-full ${levelBg(d.level)}`}
                      style={{ width: `${d.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>

          {/* Math Domains */}
          <p className="mb-2 text-xs font-medium text-green-600 uppercase dark:text-green-400">
            Math
          </p>
          <div className="space-y-2">
            {results.domains
              .filter(d => d.section === 'math')
              .map(d => (
                <div key={d.domainId} className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {d.domainName}
                    </span>
                    <span className={`text-sm font-semibold ${levelColor(d.level)}`}>
                      {d.correct}/{d.total} ({d.percentage}%)
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
                    <div
                      className={`h-full rounded-full ${levelBg(d.level)}`}
                      style={{ width: `${d.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Recommended Topics */}
        {results.recommendedTopics.length > 0 && (
          <div className="mb-8">
            <h3 className="mb-3 font-semibold text-gray-800 dark:text-gray-200">
              Recommended Study Topics
            </h3>
            <div className="space-y-2">
              {results.recommendedTopics.slice(0, 8).map(t => (
                <a
                  key={t.slug}
                  href={`/topics/${t.slug}`}
                  className="flex items-center justify-between rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100 dark:bg-gray-700/50 dark:hover:bg-gray-700"
                >
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {t.name}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                      t.priority === 'high'
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400'
                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
                    }`}
                  >
                    {t.priority} priority
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="mb-6 flex items-center justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" /> Strong (75%+)
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500" /> Moderate (50-74%)
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" /> Needs Work (&lt;50%)
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={onRetake}
            className="flex-1 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            Retake Diagnostic
          </button>
          <button
            onClick={onGoToStudy}
            className="flex-1 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl"
          >
            Start Studying
          </button>
        </div>
      </div>
    </div>
  )
}
