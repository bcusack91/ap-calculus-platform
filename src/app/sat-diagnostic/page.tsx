'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { generateDiagnosticTest, rebuildRecommendedTopics } from '@/data/sat-practice/diagnostic-generator'
import { generateHardModule, HARD_MODULE_CATEGORY, HARD_MODULE_COUNT } from '@/data/sat-practice/hard-modules'
import type { DiagnosticResults, DiagnosticTestData, DomainResult } from '@/data/sat-practice/diagnostic-generator'
import DiagnosticReview from '@/components/DiagnosticReview'
import DiagnosticChallengeCard from '@/components/DiagnosticChallengeCard'
import { InArticleAd } from '@/components/ad-banner'
import 'katex/dist/katex.min.css'
import { shuffleOptions } from '@/lib/shuffle-options'

// Heavy (~660-line) interactive component — only rendered once the user starts the
// test or views results, so code-split it out of the initial page bundle.
const diagnosticSkeleton = (
  <div className="mx-auto max-w-3xl space-y-6">
    <div className="h-8 w-48 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
    <div className="h-64 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
  </div>
)

const DiagnosticTest = dynamic(() => import('@/components/SATDiagnostic'), {
  ssr: false,
  loading: () => diagnosticSkeleton,
})

const DiagnosticResultsView = dynamic(
  () => import('@/components/SATDiagnostic').then((m) => m.DiagnosticResultsView),
  { ssr: false, loading: () => diagnosticSkeleton },
)

export default function SATDiagnosticPage() {
  const { status } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const challengeToken = searchParams.get('challenge')
  // Assigned class diagnostic — load the teacher's frozen test so the whole
  // class answers identical questions.
  const assignedId = searchParams.get('assigned')

  const [phase, setPhase] = useState<'menu' | 'testing' | 'results'>('menu')
  const [testData, setTestData] = useState<DiagnosticTestData | null>(null)
  const [results, setResults] = useState<DiagnosticResults | null>(null)
  const [rawAnswers, setRawAnswers] = useState<(number | null)[]>([])
  const [history, setHistory] = useState<
    { id: string; category: string; results: Record<string, unknown>; weakAreas?: string; strengths?: string; createdAt: string }[]
  >([])
  const [viewingHistory, setViewingHistory] = useState(false)
  // Hard track: the 700-800 path. Unlocked by one exceptional diagnostic;
  // after two in a row the regular diagnostic retires for this student.
  const [hardTrack, setHardTrack] = useState<{
    unlocked: boolean; graduated: boolean; consecutiveStrong: number
    completedModules: number; nextModule: number | null
  } | null>(null)
  const [hardModuleNumber, setHardModuleNumber] = useState<number | null>(null)
  const [challengeSubmitted, setChallengeSubmitted] = useState(false)

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
        .then(data => { setHistory(data.attempts ?? []); setHardTrack(data.hardTrack ?? null) })
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
            category: hardModuleNumber ? `${HARD_MODULE_CATEGORY}-${hardModuleNumber}` : 'sat-full-diagnostic',
            classDiagnosticId: hardModuleNumber ? undefined : (assignedId || undefined),
            results: JSON.stringify({
              review: testData ? { questions: testData.questions, answers, domainNames: Object.fromEntries(testData.domains.map(d => [d.id, d.name])) } : undefined,
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

        if (challengeToken) {
          const challengeRes = await fetch(`/api/diagnostic-challenges/${challengeToken}/submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              category: 'sat-full-diagnostic-1',
              score: diagnosticResults.percentage,
              correct: diagnosticResults.totalCorrect,
              total: diagnosticResults.totalQuestions,
              apScore: Math.max(1, Math.min(5, Math.ceil(diagnosticResults.percentage / 20))),
            }),
          })
          if (challengeRes.ok) {
            setChallengeSubmitted(true)
          }
        }
      } catch {
        // Silent fail
      }
    },
    [challengeToken, testData, assignedId, hardModuleNumber],
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
      // Load test data asynchronously — the teacher's frozen assigned test
      // when ?assigned= is present, a fresh generated one otherwise.
      const loadTest = async (): Promise<DiagnosticTestData> => {
        // Hard track: a 20-question all-hard-tier module instead of the
        // 30-question mid-level screen.
        if (hardModuleNumber) {
          const mod = await generateHardModule(hardModuleNumber)
          return {
            questions: mod.questions,
            domains: [],
            totalQuestions: mod.totalQuestions,
            timeLimitMinutes: mod.timeLimitMinutes,
          }
        }
        if (assignedId) {
          const r = await fetch(`/api/class-diagnostics/${assignedId}`, { cache: 'no-store' })
          if (r.ok) return (await r.json()).diagnostic.testData as DiagnosticTestData
          // Assignment unavailable — fall back to a normal generated test.
        }
        return generateDiagnosticTest()
      }
      loadTest().then(data => {
        data.questions.forEach(q => {
          const s = shuffleOptions(q.options, q.correctIndex, q.question)
          q.options = s.options
          q.correctIndex = s.correctIndex
        })
        setTestData(data)
      })
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

          <div className="mt-6 max-w-3xl mx-auto">
            <DiagnosticChallengeCard
              category="sat-full-diagnostic-1"
              score={results.percentage}
              correct={results.totalCorrect}
              total={results.totalQuestions}
              apScore={Math.max(1, Math.min(5, Math.ceil(results.percentage / 20)))}
              currentChallengeToken={challengeToken}
              challengeSubmitted={challengeSubmitted}
            />
          </div>

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
                Results from {new Date(history[0].createdAt).toLocaleDateString()}<br /><Link href={`/diagnostic-review/${history[0].id}`} className="mt-1 inline-block text-xs font-semibold text-purple-600 hover:underline dark:text-purple-400" onClick={(e) => e.stopPropagation()}>Review past attempt →</Link>
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
  // Stored since the recommendations feature shipped; rebuilt (domain-level)
  // for older attempts so returning students always see a study plan.
  const lastRecommendedTopics = lastResult
    ? ((lastResult.recommendedTopics as DiagnosticResults['recommendedTopics'] | undefined) ??
       (Array.isArray(lastResult.domains) ? rebuildRecommendedTopics(lastResult.domains as DomainResult[]) : []))
    : []

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
                  <Link
                    href={`/diagnostic-review/${history[0].id}`}
                    className="mt-1 inline-block text-xs font-semibold text-purple-600 hover:underline dark:text-purple-400"
                  >
                    Review past attempt →
                  </Link>
                </div>
              </div>
              <button
                onClick={() => setViewingHistory(true)}
                className="mt-4 w-full rounded-xl border border-purple-300 bg-purple-50 px-4 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-100 dark:border-purple-700 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50"
              >
                View Your Full Results
              </button>
            </div>
          )}

          {/* Current study plan — the last diagnostic's top priorities, right on
              the menu so returning students see them without any clicks. */}
          {lastRecommendedTopics.length > 0 && (
            <div className="mb-6 rounded-2xl border-2 border-green-300 bg-green-50 p-6 dark:border-green-700 dark:bg-green-900/20">
              <h3 className="mb-1 text-base font-bold text-green-800 dark:text-green-300">🎯 Your Current Study Plan</h3>
              <p className="mb-3 text-sm text-green-600 dark:text-green-400">
                Your top {lastRecommendedTopics.length} priorities from your last diagnostic — ranked by what you missed and how much of a real SAT each topic covers. Work through them, then retake the test:
              </p>
              <div className="space-y-2">
                {lastRecommendedTopics.slice(0, 5).map((topic, i) => (
                  <Link
                    key={topic.slug}
                    href={`/topics/${topic.slug}/interactive`}
                    className="flex items-center justify-between rounded-xl border border-green-200 bg-white px-4 py-3 transition hover:border-green-400 hover:shadow-sm dark:border-green-700 dark:bg-gray-800 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700 dark:bg-green-900/50 dark:text-green-300">{i + 1}</span>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-green-700 dark:group-hover:text-green-400">{topic.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>
                        {topic.priority === 'high' ? 'High' : 'Medium'}
                      </span>
                    </div>
                    <span className="text-green-500 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                ))}
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

            {/* Hard track: once a student proves the top band, the mid-level
                screen stops telling them anything useful. */}
            {hardTrack?.unlocked && hardTrack.nextModule !== null && (
              <div className="mb-4 rounded-xl border-2 border-purple-300 bg-purple-50 p-4 dark:border-purple-700 dark:bg-purple-900/20">
                <div className="mb-1 flex items-center gap-2">
                  <span className="rounded-full bg-purple-600 px-2 py-0.5 text-[10px] font-bold text-white">700-800 TRACK</span>
                  <span className="text-xs text-purple-700 dark:text-purple-300">
                    Module {hardTrack.nextModule} of {HARD_MODULE_COUNT}
                    {hardTrack.completedModules > 0 && ` · ${hardTrack.completedModules} done`}
                  </span>
                </div>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                  {hardTrack.graduated
                    ? 'You have scored in the top band twice in a row, so the standard diagnostic is retired for you — it can no longer tell you anything you do not already know. These modules are 20 questions (10 Reading & Writing, 10 Math) drawn entirely from the hardest tier.'
                    : 'Your last diagnostic scored in the top band. This module is 20 questions (10 Reading & Writing, 10 Math) drawn entirely from the hardest tier — the multi-step modeling, rate chains, and precision-of-language items that separate 700 from 800.'}
                </p>
                <button
                  onClick={() => { setHardModuleNumber(hardTrack.nextModule); setPhase('testing') }}
                  className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl"
                >
                  Start Hard Module {hardTrack.nextModule}
                </button>
              </div>
            )}
            {hardTrack?.graduated && hardTrack.nextModule === null && (
              <div className="mb-4 rounded-xl border-2 border-purple-300 bg-purple-50 p-4 text-sm text-gray-700 dark:border-purple-700 dark:bg-purple-900/20 dark:text-gray-300">
                You have completed all {HARD_MODULE_COUNT} hard modules. Full-length adaptive practice tests are the next step — they route you to the harder Module 2 when you earn it.
              </div>
            )}

            <button
              onClick={() => { setHardModuleNumber(null); setPhase('testing') }}
              className={`w-full rounded-xl px-6 py-3 font-semibold shadow-lg transition hover:shadow-xl ${
                hardTrack?.graduated
                  ? 'border border-gray-300 bg-white text-gray-600 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300'
                  : 'bg-gradient-to-r from-green-600 to-teal-600 text-white'
              }`}
            >
              {hardTrack?.graduated
                ? 'Take the standard diagnostic anyway'
                : lastResult ? 'Take Next Diagnostic' : 'Start Diagnostic Test'}
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
                    <Link
                      key={h.id} href={`/diagnostic-review/${h.id}`}
                      className="flex items-center justify-between rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50 cursor-pointer transition hover:bg-gray-100 dark:hover:bg-gray-600/60 hover:shadow-sm">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Score: {String(parsed.estimatedScore ?? '—')}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-400">
                        {new Date(h.createdAt).toLocaleDateString()}
                      </span>
                    </Link>
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
