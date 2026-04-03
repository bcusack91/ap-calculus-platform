'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { generateDiagnosticTest, rebuildRecommendedTopics } from '@/data/sat-practice/diagnostic-generator'
import type { DiagnosticResults, DiagnosticTestData, DomainResult } from '@/data/sat-practice/diagnostic-generator'
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
    { id: string; category: string; results: Record<string, unknown>; weakAreas?: string; strengths?: string; createdAt: string }[]
  >([])
  const [viewingHistory, setViewingHistory] = useState(false)

  // Reconstruct full DiagnosticResults from a stored history entry
  const reconstructResults = useCallback(
    (stored: Record<string, unknown>): DiagnosticResults | null => {
      const domains = (stored.domains ?? []) as DomainResult[]
      if (!domains.length) return null

      const weakAreas = stored.weakAreas
        ? (stored.weakAreas as string[])
        : domains.filter(d => d.level === 'weak').map(d => d.domainName)
      const moderateAreas = stored.moderateAreas
        ? (stored.moderateAreas as string[])
        : domains.filter(d => d.level === 'moderate').map(d => d.domainName)
      const strengths = stored.strengths
        ? (stored.strengths as string[])
        : domains.filter(d => d.level === 'strong').map(d => d.domainName)
      const recommendedTopics = stored.recommendedTopics
        ? (stored.recommendedTopics as DiagnosticResults['recommendedTopics'])
        : rebuildRecommendedTopics(domains)

      return {
        totalCorrect: (stored.totalCorrect as number) ?? 0,
        totalQuestions: (stored.totalQuestions as number) ?? 0,
        percentage: (stored.percentage as number) ?? 0,
        estimatedScore: (stored.estimatedScore as number) ?? 0,
        rwScore: (stored.rwScore as number) ?? 0,
        mathScore: (stored.mathScore as number) ?? 0,
        domains,
        weakAreas,
        moderateAreas,
        strengths,
        recommendedTopics,
      }
    },
    [],
  )

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
              weakAreas: diagnosticResults.weakAreas,
              moderateAreas: diagnosticResults.moderateAreas,
              strengths: diagnosticResults.strengths,
              recommendedTopics: diagnosticResults.recommendedTopics,
            }),
            weakAreas: diagnosticResults.weakAreas.join(', '),
            strengths: diagnosticResults.strengths.join(', '),
          }),
        })

        // Add flashcards for recommended (weak/moderate) topics
        if (diagnosticResults.recommendedTopics.length > 0) {
          fetch('/api/flashcards/add-from-missed', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              topicSlugs: diagnosticResults.recommendedTopics.map(t => t.slug),
            }),
          }).catch(() => {})
        }
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

          {/* How the cycle works */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-900/20">
              <h4 className="mb-2 font-semibold text-green-800 dark:text-green-300">🔄 How This Cycle Works</h4>
              <ol className="space-y-2 text-sm text-green-700 dark:text-green-400 list-decimal list-inside">
                <li>Click a recommended topic above to start studying</li>
                <li>Take the <strong>entrance quiz</strong> to pinpoint which lesson parts you need</li>
                <li>Work through the <strong>interactive lessons</strong> at your own pace</li>
                <li>Pass the <strong>exit quiz</strong> to confirm you&apos;ve mastered the topic</li>
                <li>Retake the diagnostic to get updated recommendations and track your progress!</li>
              </ol>
            </div>
          </div>

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

  // Viewing past results from history
  if (viewingHistory && history.length > 0) {
    const restored = reconstructResults(history[0].results as unknown as Record<string, unknown>)
    if (restored) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
          <div className="container">
            <div className="mx-auto mb-4 max-w-3xl">
              <button
                onClick={() => setViewingHistory(false)}
                className="flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                Back to Menu
              </button>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Results from {new Date(history[0].createdAt).toLocaleDateString()}
              </p>
            </div>
            <DiagnosticResultsView
              results={restored}
              onRetake={() => {
                setViewingHistory(false)
                setResults(null)
                setTestData(null)
                setPhase('testing')
              }}
              onGoToStudy={() => router.push('/dashboard')}
            />

            {/* How the cycle works */}
            <div className="mt-8 max-w-3xl mx-auto">
              <div className="rounded-2xl border border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-900/20">
                <h4 className="mb-2 font-semibold text-green-800 dark:text-green-300">🔄 How This Cycle Works</h4>
                <ol className="space-y-2 text-sm text-green-700 dark:text-green-400 list-decimal list-inside">
                  <li>Click a recommended topic above to start studying</li>
                  <li>Take the <strong>entrance quiz</strong> to pinpoint which lesson parts you need</li>
                  <li>Work through the <strong>interactive lessons</strong> at your own pace</li>
                  <li>Pass the <strong>exit quiz</strong> to confirm you&apos;ve mastered the topic</li>
                  <li>Retake the diagnostic to get updated recommendations and track your progress!</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )
    }
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
              <button
                onClick={() => setViewingHistory(true)}
                className="mt-4 w-full rounded-xl border border-purple-300 bg-purple-50 px-4 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-100 dark:border-purple-700 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50"
              >
                View Your Study Plan &amp; Results
              </button>
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

          {/* Cycle explanation */}
          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-base font-semibold text-gray-800 dark:text-gray-200">🔄 How the Study Cycle Works</h3>
            <div className="space-y-3">
              {[
                { step: '1', text: 'Take the diagnostic test — questions drawn from all SAT domains' },
                { step: '2', text: 'Get your results and topic recommendations based on what you missed' },
                { step: '3', text: 'Click a topic → take the entrance quiz to find your weak spots' },
                { step: '4', text: 'Work through interactive lessons — text, visuals, and embedded practice' },
                { step: '5', text: 'Pass the exit quiz to confirm mastery, then retake the diagnostic!' },
              ].map(item => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700 dark:bg-green-900/50 dark:text-green-300">{item.step}</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
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
