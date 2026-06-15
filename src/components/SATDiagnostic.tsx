'use client'

import { useDiagnosticPlanAccess, DiagnosticPlanPaywall } from '@/components/DiagnosticPlanLock'
import { useState, useEffect, useCallback, useRef } from 'react'
import { preloadKatex } from '@/lib/katex-lazy'
import { renderRichText } from '@/lib/render-rich-text'
import type {
  DiagnosticTestData,
  DiagnosticResults,
} from '@/data/sat-practice/diagnostic-generator'
import ScratchPad from '@/components/ScratchPad'

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function renderLatex(text: string): string {
  return renderRichText(text)
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
  onComplete: (results: DiagnosticResults, rawAnswers: (number | null)[]) => void
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
  const [phase, setPhase] = useState<'intro' | 'testing' | 'section-break' | 'complete'>('intro')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<
    { questionIndex: number; selectedIndex: number | null }[]
  >(testData.questions.map((_, i) => ({ questionIndex: i, selectedIndex: null })))
  const [eliminatedOptions, setEliminatedOptions] = useState<Map<number, Set<number>>>(new Map())
  const [timeRemaining, setTimeRemaining] = useState(testData.timeLimitMinutes * 60)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [katexReady, setKatexReady] = useState(false)

  // Pre-load KaTeX lazily on mount
  useEffect(() => { preloadKatex().then(() => setKatexReady(true)) }, [])

  // Derive section boundaries
  const mathStartIndex = testData.questions.findIndex(q => q.section === 'math')
  const rwCount = mathStartIndex === -1 ? testData.totalQuestions : mathStartIndex
  const mathCount = testData.totalQuestions - rwCount

  const currentQuestion = testData.questions[currentIndex]
  const currentAnswer = answers[currentIndex]
  const answeredCount = answers.filter(a => a.selectedIndex !== null).length
  const currentSection = currentQuestion?.section ?? 'reading-writing'
  const isRW = currentSection === 'reading-writing'

  // Section-specific progress
  const sectionStart = isRW ? 0 : rwCount
  const sectionTotal = isRW ? rwCount : mathCount
  const sectionIndex = currentIndex - sectionStart
  const sectionAnswered = answers.slice(sectionStart, sectionStart + sectionTotal).filter(a => a.selectedIndex !== null).length

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

  // Handle advancing to next question, with section break
  const handleNext = useCallback(() => {
    const nextIndex = currentIndex + 1
    if (nextIndex >= testData.totalQuestions) return
    // Show section break when crossing from R&W to Math
    if (mathStartIndex > 0 && currentIndex < mathStartIndex && nextIndex >= mathStartIndex) {
      if (timerRef.current) clearInterval(timerRef.current)
      setPhase('section-break')
    } else {
      setCurrentIndex(nextIndex)
    }
  }, [currentIndex, mathStartIndex, testData.totalQuestions])

  const selectAnswer = useCallback(
    (optionIdx: number) => {
      if (eliminatedOptions.get(currentIndex)?.has(optionIdx)) return
      setAnswers(prev => {
        const next = [...prev]
        next[currentIndex] = { ...next[currentIndex], selectedIndex: optionIdx }
        return next
      })
    },
    [currentIndex, eliminatedOptions],
  )

  const toggleEliminate = useCallback(
    (questionIndex: number, optionIdx: number) => {
      setEliminatedOptions(prev => {
        const next = new Map(prev)
        const qSet = new Set(next.get(questionIndex) ?? new Set<number>())
        if (qSet.has(optionIdx)) {
          qSet.delete(optionIdx)
        } else {
          qSet.add(optionIdx)
          if (answers[questionIndex]?.selectedIndex === optionIdx) {
            setAnswers(curr => {
              const updated = [...curr]
              updated[questionIndex] = { ...updated[questionIndex], selectedIndex: null }
              return updated
            })
          }
        }
        next.set(questionIndex, qSet)
        return next
      })
    },
    [answers],
  )

  const handleSubmit = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)

    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { analyzeDiagnosticResults } = require('@/data/sat-practice/diagnostic-generator')
    const results = analyzeDiagnosticResults(testData.questions, answers)

    setPhase('complete')
    onComplete(results, answers.map(a => a.selectedIndex))
  }, [testData.questions, answers, onComplete])

  // ----------------------------------------------------------------
  //  Intro
  // ----------------------------------------------------------------
  if (phase === 'intro') {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
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
              <li>• {testData.totalQuestions} questions across 2 sections</li>
              <li>• <strong>Section 1:</strong> Reading & Writing ({rwCount} questions)</li>
              <li>• <strong>Section 2:</strong> Math ({mathCount} questions)</li>
              <li>• {testData.timeLimitMinutes} minute time limit</li>
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
  //  Section Break (R&W → Math)
  // ----------------------------------------------------------------
  if (phase === 'section-break') {
    const rwAnswered = answers.slice(0, rwCount).filter(a => a.selectedIndex !== null).length
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-500">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Section 1 Complete!
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              You answered {rwAnswered} of {rwCount} Reading & Writing questions.
            </p>
          </div>

          <div className="mb-6 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="mb-2 font-semibold text-green-800 dark:text-green-300">
              Up Next: Math Section
            </h4>
            <ul className="space-y-1 text-sm text-green-700 dark:text-green-400">
              <li>• {mathCount} questions covering Algebra, Advanced Math, Functions, Data Analysis, and Geometry</li>
              <li>• Your timer will continue from {formatTime(timeRemaining)}</li>
            </ul>
          </div>

          <button
            onClick={() => {
              setCurrentIndex(mathStartIndex)
              setPhase('testing')
            }}
            className="w-full rounded-xl bg-gradient-to-r from-green-600 to-teal-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl"
          >
            Continue to Math Section →
          </button>
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
          <div className="flex items-center gap-2">
            <span className={`rounded-md px-2 py-0.5 text-xs font-bold uppercase tracking-wide ${
              isRW
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
                : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300'
            }`}>
              {isRW ? 'Reading & Writing' : 'Math'}
            </span>
            <span className="text-xs text-gray-400">Section {isRW ? '1' : '2'} of 2</span>
          </div>
          <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-400">
            Question {sectionIndex + 1} of {sectionTotal} &middot; {sectionAnswered}/{sectionTotal} answered
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
          className={`h-full rounded-full transition-all duration-300 ${
            isRW
              ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
              : 'bg-gradient-to-r from-green-500 to-teal-500'
          }`}
          style={{ width: `${((sectionIndex + 1) / sectionTotal) * 100}%` }}
        />
      </div>

      {/* Tools */}
      <div className="flex items-center justify-end gap-2 mb-4">
        <ScratchPad storageKey={`diagnostic-${isRW ? 'rw' : 'math'}`} />
      </div>

      {/* Question */}
      <div key={katexReady ? 'k' : 'l'} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8 dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
              isRW
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
                : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300'
            }`}>
              Q{sectionIndex + 1}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-400">
              {currentQuestion.category}
            </span>
          </div>
          {currentQuestion.passage && (
            <div className="mb-4 rounded-xl border border-blue-200 bg-blue-50/50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Read the passage below, then answer the question.</p>
              <div className="prose prose-sm max-w-none text-gray-800 dark:prose-invert dark:text-gray-200">
                <p>{currentQuestion.passage}</p>
              </div>
            </div>
          )}
          <div
            className="prose prose-lg max-w-none text-gray-900 dark:prose-invert dark:text-white"
            dangerouslySetInnerHTML={{ __html: renderLatex(currentQuestion.question) }}
          />
        </div>

        <div className="mb-6 space-y-3">
          {currentQuestion.options.map((option, idx) => {
            const letters = ['A', 'B', 'C', 'D']
            const isSelected = currentAnswer?.selectedIndex === idx
            const isEliminated = eliminatedOptions.get(currentIndex)?.has(idx) ?? false
            return (
              <button
                key={idx}
                onClick={() => selectAnswer(idx)}
                className={`flex w-full items-start gap-3 rounded-xl border-2 p-4 text-left transition ${
                  isSelected
                    ? isRW
                      ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/20'
                      : 'border-green-500 bg-green-50 dark:border-green-400 dark:bg-green-900/20'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:hover:border-gray-500 dark:hover:bg-gray-700/50'
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    isSelected
                      ? isRW
                        ? 'bg-blue-600 text-white'
                        : 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                  }`}
                >
                  {letters[idx]}
                </span>
                <span
                  className={`flex-1 pt-1 text-gray-800 dark:text-gray-200 ${isEliminated ? 'line-through opacity-50 decoration-2 decoration-gray-400 dark:decoration-gray-500' : ''}`}
                  dangerouslySetInnerHTML={{ __html: renderLatex(option) }}
                />
                <span
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleEliminate(currentIndex, idx)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      e.stopPropagation()
                      toggleEliminate(currentIndex, idx)
                    }
                  }}
                  className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                    isEliminated
                      ? 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                      : 'text-gray-400 dark:text-gray-500 hover:bg-red-100 hover:text-red-500 dark:hover:bg-red-900/30 dark:hover:text-red-400'
                  }`}
                  title={isEliminated ? 'Restore this answer' : 'Eliminate this answer'}
                  aria-label={isEliminated ? 'Restore this answer' : 'Eliminate this answer'}
                >
                  ✕
                </span>
              </button>
            )
          })}
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(sectionStart, prev - 1))}
            disabled={currentIndex === sectionStart}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            ← Back
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setAnswers(prev => {
                  const next = [...prev]
                  next[currentIndex] = { ...next[currentIndex], selectedIndex: null }
                  return next
                })

                if (currentIndex === testData.totalQuestions - 1) {
                  handleSubmit()
                } else {
                  handleNext()
                }
              }}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              I Would Be Guessing
            </button>
            {currentIndex === testData.totalQuestions - 1 ? (
              <button
                onClick={handleSubmit}
                className={`rounded-xl px-6 py-2 text-sm font-semibold text-white shadow transition hover:shadow-lg ${
                  isRW
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                    : 'bg-gradient-to-r from-green-600 to-teal-600'
                }`}
              >
                Submit ({answeredCount}/{testData.totalQuestions} answered)
              </button>
            ) : (
              <button
                onClick={handleNext}
                className={`rounded-xl px-6 py-2 text-sm font-semibold text-white shadow transition hover:shadow-lg ${
                  isRW
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                    : 'bg-gradient-to-r from-green-600 to-teal-600'
                }`}
              >
                {mathStartIndex > 0 && currentIndex === mathStartIndex - 1
                  ? 'Continue to Math Section →'
                  : 'Next →'}
              </button>
            )}
          </div>
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
  const planAccess = useDiagnosticPlanAccess()
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
      <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
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
        {results.recommendedTopics.length > 0 && !planAccess.loading && !planAccess.canAccess && <DiagnosticPlanPaywall />}
        {results.recommendedTopics.length > 0 && planAccess.canAccess && (
          <div className="mb-8">
            <h3 className="mb-3 font-semibold text-gray-800 dark:text-gray-200">
              Recommended Study Topics
            </h3>
            <div className="space-y-2">
              {results.recommendedTopics.slice(0, 8).map(t => (
                <a
                  key={t.slug}
                  href={`/topics/${t.slug}/interactive`}
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
