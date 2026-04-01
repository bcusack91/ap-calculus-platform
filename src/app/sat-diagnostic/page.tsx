'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { generateDiagnosticTest } from '@/data/sat-practice/diagnostic-generator'
import type { DiagnosticResults, DiagnosticTestData } from '@/data/sat-practice/diagnostic-generator'
import DiagnosticTest, { DiagnosticResultsView } from '@/components/SATDiagnostic'
import DiagnosticReview from '@/components/DiagnosticReview'
import { InArticleAd } from '@/components/ad-banner'
import 'katex/dist/katex.min.css'

export default function SATDiagnosticPage() {
  const { status } = useSession()
  const router = useRouter()

  const [phase, setPhase] = useState<'menu' | 'testing' | 'results'>('menu')
  const [testData, setTestData] = useState<DiagnosticTestData | null>(null)
  const [results, setResults] = useState<DiagnosticResults | null>(null)
  const [rawAnswers, setRawAnswers] = useState<(number | null)[]>([])
  const [history, setHistory] = useState<
    { id: string; category: string; results: string; createdAt: string }[]
  >([])

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/sat-diagnostic')
    }
  }, [status, router])

  // Fetch previous diagnostic history
  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/sat-diagnostic/history')
        .then(r => (r.ok ? r.json() : { attempts: [] }))
        .then(data => setHistory(data.attempts ?? []))
        .catch(() => {})
    }
  }, [status])

  const handleComplete = useCallback(
    async (diagnosticResults: DiagnosticResults, answers: (number | null)[]) => {
      setResults(diagnosticResults)
      setRawAnswers(answers)
      setPhase('results')

      // Save to API
      try {
        await fetch('/api/sat-diagnostic/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            category: 'sat-full-diagnostic',
            results: JSON.stringify({
              totalCorrect: diagnosticResults.totalCorrect,
              totalQuestions: diagnosticResults.totalQuestions,
              percentage: diagnosticResults.percentage,
              estimatedScore: diagnosticResults.estimatedScore,
              rwScore: diagnosticResults.rwScore,
              mathScore: diagnosticResults.mathScore,
              domains: diagnosticResults.domains,
            }),
            weakAreas: diagnosticResults.weakAreas.join(', '),
            strengths: diagnosticResults.strengths.join(', '),
          }),
        })
      } catch {
        // Silent fail
      }
    },
    [],
  )

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container py-12">
          <div className="mx-auto max-w-2xl space-y-6">
            <div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
            <div className="h-64 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
      </div>
    )
  }

  if (phase === 'testing') {
    if (!testData) {
      // Load test data asynchronously
      generateDiagnosticTest().then(setTestData)
      return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
          <div className="container py-12">
            <div className="mx-auto max-w-2xl space-y-6 text-center">
              <div className="h-8 w-48 mx-auto animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
              <p className="text-gray-500">Generating diagnostic questions…</p>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container">
          <DiagnosticTest
            testData={testData}
            onComplete={handleComplete}
            onCancel={() => { setPhase('menu'); setTestData(null) }}
          />
        </div>
      </div>
    )
  }

  if (phase === 'results' && results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container">
          <DiagnosticResultsView
            results={results}
            onRetake={() => {
              setResults(null)
              setTestData(null)
              setPhase('testing')
            }}
            onGoToStudy={() => router.push('/dashboard')}
          />
          {/* Review Test */}
          {testData && (
            <div className="mt-8 max-w-3xl mx-auto">
              <DiagnosticReview
                questions={testData.questions}
                answers={rawAnswers}
                domainNames={Object.fromEntries(testData.domains.map(d => [d.id, d.name]))}
              />
            </div>
          )}
          {/* Ad after diagnostic results — high engagement moment */}
          <div className="mt-8 max-w-2xl mx-auto">
            <InArticleAd />
          </div>
        </div>
      </div>
    )
  }

  // Menu
  const lastResult = history.length > 0 ? (history[0].results as unknown as Record<string, unknown> ?? {}) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-8 sm:py-12">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            SAT Diagnostic Test
          </h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Find out where you stand and get a personalized study plan.
          </p>

          {/* Last result */}
          {lastResult && (
            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
                Most Recent Result
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {String(lastResult.estimatedScore ?? '—')}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Estimated Score</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    R&W: {String(lastResult.rwScore ?? '—')} &middot; Math: {String(lastResult.mathScore ?? '—')}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-400">
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
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                ~30 questions across 11 domains (Reading, Writing, Math)
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                25 minute time limit
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Estimated SAT score and domain-by-domain breakdown
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Personalized topic recommendations based on results
              </li>
            </ul>

            <button
              onClick={() => setPhase('testing')}
              className="w-full rounded-xl bg-gradient-to-r from-green-600 to-teal-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              {lastResult ? 'Take Next Diagnostic' : 'Start Diagnostic Test'}
            </button>
            <a href="/sat-score-predictor" className="mt-3 block text-center text-sm font-medium text-green-700 transition hover:underline dark:text-green-300">Prefer a quick estimate? Open the SAT Score Predictor</a>
            <a href="/sat-daily-question" className="mt-1 block text-center text-sm font-medium text-green-700 transition hover:underline dark:text-green-300">Need a warm-up first? Try today&apos;s SAT question</a>
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
                      <span className="text-xs text-gray-400 dark:text-gray-400">
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
