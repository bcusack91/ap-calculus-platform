'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  generateMCATDiagnosticTest,
  scoreMCATDiagnostic,
  type MCATDiagnosticTestData,
  type MCATDiagnosticResults,
} from '@/data/mcat-practice/diagnostic-generator'

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function MCATDiagnosticPage() {
  const { status } = useSession()
  const router = useRouter()

  const [phase, setPhase] = useState<'menu' | 'testing' | 'results'>('menu')
  const [testData, setTestData] = useState<MCATDiagnosticTestData | null>(null)
  const [results, setResults] = useState<MCATDiagnosticResults | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [timeRemaining, setTimeRemaining] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [history, setHistory] = useState<
    { id: string; category: string; results: string; createdAt: string }[]
  >([])

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/mcat-diagnostic')
    }
  }, [status, router])

  // Fetch history
  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/mcat-diagnostic/history')
        .then(r => (r.ok ? r.json() : { attempts: [] }))
        .then(data => setHistory(data.attempts ?? []))
        .catch(() => {})
    }
  }, [status])

  // Timer
  useEffect(() => {
    if (phase !== 'testing') return
    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!)
          handleFinish()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  const startTest = useCallback(async () => {
    const data = await generateMCATDiagnosticTest()
    setTestData(data)
    setCurrentIndex(0)
    setAnswers(new Array(data.questions.length).fill(null))
    setTimeRemaining(data.timeLimitMinutes * 60)
    setPhase('testing')
  }, [])

  const handleFinish = useCallback(async () => {
    if (!testData) return
    if (timerRef.current) clearInterval(timerRef.current)

    // Convert answers array to Record<number, number> for scoring
    const answersRecord: Record<number, number> = {}
    answers.forEach((a, i) => { if (a !== null) answersRecord[i] = a })
    const diagnosticResults = scoreMCATDiagnostic(testData.questions, answersRecord)
    setResults(diagnosticResults)
    setPhase('results')

    // Save to API
    try {
      await fetch('/api/mcat-diagnostic/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: 'mcat-full-diagnostic',
          results: JSON.stringify({
            totalCorrect: diagnosticResults.totalCorrect,
            totalQuestions: diagnosticResults.totalQuestions,
            percentage: diagnosticResults.percentage,
            estimatedScore: diagnosticResults.estimatedScore,
            chemPhysScore: diagnosticResults.chemPhysScore,
            carsScore: diagnosticResults.carsScore,
            bioBiochemScore: diagnosticResults.bioBiochemScore,
            psychSocScore: diagnosticResults.psychSocScore,
            domains: diagnosticResults.domains,
          }),
          weakAreas: diagnosticResults.weakAreas.join(', '),
          strengths: diagnosticResults.strengths.join(', '),
        }),
      })
    } catch {
      // Silent fail
    }
  }, [testData, answers])

  // Loading state
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container py-12">
          <div className="mx-auto max-w-2xl space-y-6">
            <div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
            <div className="h-64 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
      </div>
    )
  }

  // Testing phase
  if (phase === 'testing' && testData) {
    const q = testData.questions[currentIndex]
    const answeredCount = answers.filter(a => a !== null).length

    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {/* Progress bar */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {currentIndex + 1}/{testData.questions.length}
                </span>
                <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all"
                    style={{ width: `${((currentIndex + 1) / testData.questions.length) * 100}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-sm font-mono font-bold ${timeRemaining < 300 ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'}`}>
                  ⏱ {formatTime(timeRemaining)}
                </span>
                <button
                  onClick={() => { if (timerRef.current) clearInterval(timerRef.current); setPhase('menu'); setTestData(null) }}
                  className="text-sm text-gray-400 hover:text-red-500"
                >
                  Exit
                </button>
              </div>
            </div>

            {/* Domain label */}
            <div className="mb-4">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                {q.domain}
              </span>
            </div>

            {/* Question */}
            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <p className="mb-6 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, i) => {
                  const isSelected = answers[currentIndex] === i
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        const updated = [...answers]
                        updated[currentIndex] = i
                        setAnswers(updated)
                      }}
                      className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-500'
                          : 'border-gray-200 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50/50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-emerald-500'
                      }`}
                    >
                      <span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span>
                      {opt}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:opacity-40 dark:border-gray-600 dark:text-gray-400"
              >
                ← Previous
              </button>
              <span className="text-xs text-gray-400">{answeredCount}/{testData.questions.length} answered</span>
              {currentIndex < testData.questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex(prev => prev + 1)}
                  className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-emerald-700"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg"
                >
                  Submit Diagnostic
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Results phase
  if (phase === 'results' && results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-8 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              MCAT Diagnostic Results
            </h2>

            {/* Score summary */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Estimated Total</p>
                <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
                  {results.estimatedScore}
                </p>
                <p className="text-xs text-gray-400">out of 528</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Correct</p>
                <p className="text-4xl font-black text-teal-600 dark:text-teal-400">
                  {results.totalCorrect}/{results.totalQuestions}
                </p>
                <p className="text-xs text-gray-400">{results.percentage}%</p>
              </div>
              <div className="sm:col-span-2 lg:col-span-1 rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Performance</p>
                <p className="text-4xl">
                  {results.percentage >= 80 ? '🎉' : results.percentage >= 60 ? '👍' : '📚'}
                </p>
                <p className="text-xs text-gray-400">
                  {results.percentage >= 80 ? 'Excellent' : results.percentage >= 60 ? 'Good' : 'Needs Review'}
                </p>
              </div>
            </div>

            {/* Section Scores */}
            <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                Section Scores
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: 'Chem/Phys', score: results.chemPhysScore },
                  { label: 'CARS', score: results.carsScore },
                  { label: 'Bio/Biochem', score: results.bioBiochemScore },
                  { label: 'Psych/Soc', score: results.psychSocScore },
                ].map(s => (
                  <div key={s.label} className="rounded-xl bg-gray-50 p-4 dark:bg-gray-700/50">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {s.label}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {s.score}
                    </p>
                    <p className="text-xs text-gray-400">out of 132</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Domain Breakdown */}
            <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                Domain Breakdown
              </h3>
              <div className="space-y-3">
                {results.domains.map(d => (
                  <div key={d.domainId} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {d.domainName}
                        </span>
                        <span className="text-sm text-gray-500">
                          {d.correct}/{d.total} ({d.percentage}%)
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className={`h-full rounded-full transition-all ${
                            d.percentage >= 75
                              ? 'bg-green-500'
                              : d.percentage >= 50
                              ? 'bg-amber-500'
                              : 'bg-red-500'
                          }`}
                          style={{ width: `${d.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-900/20">
                <h4 className="mb-2 font-semibold text-green-800 dark:text-green-300">
                  💪 Strengths
                </h4>
                <ul className="space-y-1 text-sm text-green-700 dark:text-green-400">
                  {results.strengths.length > 0
                    ? results.strengths.map(s => <li key={s}>• {s}</li>)
                    : <li>Complete more questions to identify strengths</li>}
                </ul>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-900/20">
                <h4 className="mb-2 font-semibold text-red-800 dark:text-red-300">
                  📚 Areas to Improve
                </h4>
                <ul className="space-y-1 text-sm text-red-700 dark:text-red-400">
                  {results.weakAreas.length > 0
                    ? results.weakAreas.map(w => <li key={w}>• {w}</li>)
                    : <li>Great job — no major weak areas identified!</li>}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => { setResults(null); setTestData(null); setPhase('testing'); startTest() }}
                className="flex-1 rounded-xl border-2 border-emerald-500 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
              >
                Retake Diagnostic
              </button>
              <Link
                href="/mcat-practice"
                className="flex-1 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3 text-center font-semibold text-white shadow transition hover:shadow-lg"
              >
                Practice Sections
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Menu phase
  const lastResult = history.length > 0 ? (history[0].results as unknown as Record<string, unknown> ?? {}) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-8 sm:py-12">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/mcat"
            className="mb-4 inline-flex items-center gap-1 text-sm text-emerald-600 hover:underline dark:text-emerald-400"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            MCAT Prep
          </Link>
          <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            MCAT Diagnostic Test
          </h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Find out where you stand across all four MCAT sections and get personalized recommendations.
          </p>

          {/* Last result */}
          {lastResult && (
            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
                Most Recent Result
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                    {String(lastResult.estimatedScore ?? '—')}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Estimated Score</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {String(lastResult.totalCorrect ?? '—')}/{String(lastResult.totalQuestions ?? '—')} correct
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {new Date(history[0].createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Start card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
              What to Expect
            </h3>
            <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                ~35 questions across 9 MCAT domains
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                40 minute time limit
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Estimated MCAT score (472–528) with section breakdown
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Personalized strengths and focus-area recommendations
              </li>
            </ul>

            <button
              onClick={startTest}
              className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              {lastResult ? 'Retake Diagnostic' : 'Start Diagnostic Test'}
            </button>
          </div>

          {/* History */}
          {history.length > 1 && (
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
                Previous Attempts
              </h3>
              <div className="space-y-2">
                {history.slice(1, 6).map(h => {
                  const parsed = (h.results ?? {}) as unknown as Record<string, unknown>
                  return (
                    <div
                      key={h.id}
                      className="flex items-center justify-between rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50"
                    >
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Score: {String(parsed.estimatedScore ?? '—')}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        {new Date(h.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
