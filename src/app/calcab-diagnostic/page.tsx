'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  generateCalcABDiagnosticTest,
  scoreCalcABDiagnostic,
  pickNextForm,
  type CalcABDiagnosticTestData,
  type CalcABDiagnosticResults,
} from '@/data/ap-calculus-ab-diagnostic'

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

interface HistoryEntry {
  id: string
  category: string
  results: Record<string, unknown>
  weakAreas: unknown
  strengths: string | null
  createdAt: string
}

export default function CalcABDiagnosticPage() {
  const { status } = useSession()
  const router = useRouter()

  const [phase, setPhase] = useState<'menu' | 'testing' | 'results'>('menu')
  const [testData, setTestData] = useState<CalcABDiagnosticTestData | null>(null)
  const [results, setResults] = useState<CalcABDiagnosticResults | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [timeRemaining, setTimeRemaining] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [history, setHistory] = useState<HistoryEntry[]>([])

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/calcab-diagnostic')
    }
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/calcab-diagnostic/history')
        .then(r => (r.ok ? r.json() : { attempts: [] }))
        .then(data => setHistory(data.attempts ?? []))
        .catch(() => {})
    }
  }, [status])

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

  const startTest = useCallback(() => {
    const previousForms = history
      .map(h => (h.results as Record<string, unknown>)?.form as 'A' | 'B' | undefined)
      .filter((f): f is 'A' | 'B' => f === 'A' || f === 'B')

    const form = pickNextForm(previousForms)
    const data = generateCalcABDiagnosticTest(form)
    setTestData(data)
    setCurrentIndex(0)
    setAnswers(new Array(data.questions.length).fill(null))
    setTimeRemaining(data.timeLimitMinutes * 60)
    setPhase('testing')
  }, [history])

  const handleFinish = useCallback(async () => {
    if (!testData) return
    if (timerRef.current) clearInterval(timerRef.current)

    const answersRecord: Record<number, number> = {}
    answers.forEach((a, i) => { if (a !== null) answersRecord[i] = a })
    const diagnosticResults = scoreCalcABDiagnostic(testData.form, testData.questions, answersRecord)
    setResults(diagnosticResults)
    setPhase('results')

    try {
      await fetch('/api/calcab-diagnostic/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: `calcab-diagnostic-${testData.form}`,
          results: {
            form: diagnosticResults.form,
            totalCorrect: diagnosticResults.totalCorrect,
            totalQuestions: diagnosticResults.totalQuestions,
            percentage: diagnosticResults.percentage,
            estimatedAPScore: diagnosticResults.estimatedAPScore,
            domains: diagnosticResults.domains,
            recommendedTopics: diagnosticResults.recommendedTopics,
          },
          weakAreas: diagnosticResults.weakAreas,
          strengths: diagnosticResults.strengths.join(', '),
        }),
      })
      const histRes = await fetch('/api/calcab-diagnostic/history')
      if (histRes.ok) {
        const histData = await histRes.json()
        setHistory(histData.attempts ?? [])
      }
    } catch { /* silent */ }
  }, [testData, answers])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container py-12">
          <div className="mx-auto max-w-2xl space-y-6">
            <div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
            <div className="h-64 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
      </div>
    )
  }

  /* ── TESTING ── */
  if (phase === 'testing' && testData) {
    const q = testData.questions[currentIndex]
    const answeredCount = answers.filter(a => a !== null).length

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{currentIndex + 1}/{testData.questions.length}</span>
                <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className="h-full rounded-full bg-purple-500 transition-all" style={{ width: `${((currentIndex + 1) / testData.questions.length) * 100}%` }} />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-sm font-mono font-bold ${timeRemaining < 300 ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'}`}>⏱ {formatTime(timeRemaining)}</span>
                <button onClick={() => { if (timerRef.current) clearInterval(timerRef.current); setPhase('menu'); setTestData(null) }} className="text-sm text-gray-500 hover:text-red-500 dark:text-gray-400">Exit</button>
              </div>
            </div>

            <div className="mb-4">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                {testData.domains.find(d => d.id === q.domain)?.name ?? q.domain}
              </span>
            </div>

            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <p className="mb-6 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{q.question}</p>
              <div className="space-y-2">
                {q.options.map((opt, i) => {
                  const isSelected = answers[currentIndex] === i
                  return (
                    <button key={i} onClick={() => { const u = [...answers]; u[currentIndex] = i; setAnswers(u) }}
                      className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${isSelected ? 'border-purple-500 bg-purple-50 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-500' : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-purple-50/50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-purple-500'}`}>
                      <span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span>{opt}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button onClick={() => setCurrentIndex(p => Math.max(0, p - 1))} disabled={currentIndex === 0} className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:opacity-40 dark:border-gray-600 dark:text-gray-400">← Previous</button>
              <span className="text-xs text-gray-500 dark:text-gray-400">{answeredCount}/{testData.questions.length} answered</span>
              {currentIndex < testData.questions.length - 1 ? (
                <button onClick={() => setCurrentIndex(p => p + 1)} className="rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-purple-700">Next →</button>
              ) : (
                <button onClick={handleFinish} className="rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg">Submit Diagnostic</button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  /* ── RESULTS ── */
  if (phase === 'results' && results) {
    const apScoreEmoji = results.estimatedAPScore >= 4 ? '🎉' : results.estimatedAPScore >= 3 ? '👍' : '📚'

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 py-8 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">AP Calculus AB Diagnostic Results</h2>

            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Estimated AP Score</p>
                <p className="text-5xl font-black text-purple-600 dark:text-purple-400">{results.estimatedAPScore}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">out of 5</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Correct</p>
                <p className="text-4xl font-black text-violet-600 dark:text-violet-400">{results.totalCorrect}/{results.totalQuestions}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{results.percentage}%</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Performance</p>
                <p className="text-4xl">{apScoreEmoji}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{results.percentage >= 80 ? 'Excellent' : results.percentage >= 60 ? 'Good' : 'Needs Review'}</p>
              </div>
            </div>

            {/* Domain Breakdown */}
            <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Unit Breakdown</h3>
              <div className="space-y-3">
                {results.domains.map(d => (
                  <div key={d.domainId}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{d.domainName}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${d.level === 'strong' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : d.level === 'moderate' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                        {d.correct}/{d.total} ({d.percentage}%)
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                      <div className={`h-full rounded-full transition-all ${d.level === 'strong' ? 'bg-green-500' : d.level === 'moderate' ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${d.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-900/20">
                <h4 className="mb-2 font-semibold text-green-800 dark:text-green-300">💪 Strengths</h4>
                <ul className="space-y-1 text-sm text-green-700 dark:text-green-400">
                  {results.strengths.length > 0 ? results.strengths.map(s => <li key={s}>• {s}</li>) : <li>Complete more questions to identify strengths</li>}
                </ul>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-900/20">
                <h4 className="mb-2 font-semibold text-red-800 dark:text-red-300">📚 Areas to Improve</h4>
                <ul className="space-y-1 text-sm text-red-700 dark:text-red-400">
                  {results.weakAreas.length > 0 ? results.weakAreas.map(w => <li key={w}>• {w}</li>) : <li>Great job — no major weak areas!</li>}
                </ul>
              </div>
            </div>

            {/* Recommended Modules */}
            {results.recommendedTopics.length > 0 && (
              <div className="mb-8 rounded-2xl border-2 border-purple-300 bg-purple-50 p-6 dark:border-purple-700 dark:bg-purple-900/20">
                <h3 className="mb-1 text-lg font-bold text-purple-800 dark:text-purple-300">🎯 Your Personalized Study Plan</h3>
                <p className="mb-4 text-sm text-purple-600 dark:text-purple-400">
                  Based on your results, we recommend reviewing these {results.recommendedTopics.length} module{results.recommendedTopics.length > 1 ? 's' : ''}. Once you&apos;ve completed them, come back to take another diagnostic test to track your improvement.
                </p>
                <div className="space-y-2">
                  {results.recommendedTopics.map((topic, i) => (
                    <Link key={topic.slug} href={`/topics/${topic.slug}`} className="flex items-center justify-between rounded-xl border border-purple-200 bg-white px-4 py-3 transition hover:border-purple-400 hover:shadow-sm dark:border-purple-700 dark:bg-gray-800 dark:hover:border-purple-500 group">
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">{i + 1}</span>
                        <div>
                          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-purple-700 dark:group-hover:text-purple-400">{topic.name}</span>
                          <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>
                            {topic.priority === 'high' ? 'High Priority' : 'Medium Priority'}
                          </span>
                        </div>
                      </div>
                      <span className="text-purple-500 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Cycle explanation */}
            <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-800 dark:bg-blue-900/20">
              <h4 className="mb-2 font-semibold text-blue-800 dark:text-blue-300">🔄 How This Cycle Works</h4>
              <ol className="space-y-2 text-sm text-blue-700 dark:text-blue-400 list-decimal list-inside">
                <li>Review the {results.recommendedTopics.length} recommended module{results.recommendedTopics.length > 1 ? 's' : ''} above</li>
                <li>Complete each module&apos;s lessons, practice problems, and flashcards</li>
                <li>Come back and take the next diagnostic test (Form {results.form === 'A' ? 'B' : 'A'}) — different questions, same breadth</li>
                <li>Get a new set of personalized recommendations based on your updated results</li>
                <li>Repeat until you&apos;re scoring 4+ across all units!</li>
              </ol>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <button onClick={() => { setResults(null); setTestData(null); startTest() }} className="flex-1 rounded-xl border-2 border-purple-500 py-3 font-semibold text-purple-600 transition hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-purple-900/20">Take Next Diagnostic</button>
              <Link href="/courses/ap-calculus-ab" className="flex-1 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 py-3 text-center font-semibold text-white shadow transition hover:shadow-lg">Browse All AB Modules</Link>
              <Link href="/ap-calcab-score-predictor" className="flex-1 rounded-xl border border-purple-300 py-3 text-center font-semibold text-purple-700 transition hover:bg-purple-50 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-900/20">View Score Predictor</Link>
              <Link href="/ap-calcab-daily-question" className="flex-1 rounded-xl border border-purple-300 py-3 text-center font-semibold text-purple-700 transition hover:bg-purple-50 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-900/20">Today&apos;s Question</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  /* ── MENU ── */
  const lastResult = history.length > 0 ? (history[0].results as Record<string, unknown> ?? {}) : null
  const lastRecommendedTopics = lastResult?.recommendedTopics as { slug: string; name: string; priority: string }[] | undefined

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-8 sm:py-12">
        <div className="mx-auto max-w-2xl">
          <Link href="/courses/ap-calculus-ab" className="mb-4 inline-flex items-center gap-1 text-sm text-purple-600 hover:underline dark:text-purple-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            AP Calculus AB
          </Link>
          <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">∫ AP Calculus AB Diagnostic Test</h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">Find your strengths and weaknesses across all AP Calculus AB units and get a personalized study plan with 3-5 focused modules.</p>

          {lastRecommendedTopics && lastRecommendedTopics.length > 0 && (
            <div className="mb-6 rounded-2xl border-2 border-purple-300 bg-purple-50 p-6 dark:border-purple-700 dark:bg-purple-900/20">
              <h3 className="mb-1 text-base font-bold text-purple-800 dark:text-purple-300">🎯 Your Current Study Plan</h3>
              <p className="mb-3 text-sm text-purple-600 dark:text-purple-400">From your last diagnostic — review these modules, then retake the test:</p>
              <div className="space-y-2">
                {lastRecommendedTopics.map((topic, i) => (
                  <Link key={topic.slug} href={`/topics/${topic.slug}`} className="flex items-center justify-between rounded-xl border border-purple-200 bg-white px-4 py-3 transition hover:border-purple-400 hover:shadow-sm dark:border-purple-700 dark:bg-gray-800 group">
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">{i + 1}</span>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-purple-700 dark:group-hover:text-purple-400">{topic.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>
                        {topic.priority === 'high' ? 'High' : 'Medium'}
                      </span>
                    </div>
                    <span className="text-purple-500 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {lastResult && (
            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Most Recent Result</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{String(lastResult.estimatedAPScore ?? '—')}/5</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Estimated AP Score</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{String(lastResult.totalCorrect ?? '—')}/{String(lastResult.totalQuestions ?? '—')} correct</p>
                  <p className="text-xs text-gray-400 dark:text-gray-400">Form {String(lastResult.form ?? '—')} · {new Date(history[0].createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          )}

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">What to Expect</h3>
            <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {['~35 questions spanning all 7 AP Calculus AB units', '45 minute time limit', 'Estimated AP score (1–5) with per-unit breakdown', '3-5 personalized module recommendations to focus your studying', 'Alternating forms (A/B) — each test has different questions'].map(text => (
                <li key={text} className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {text}
                </li>
              ))}
            </ul>
            <button onClick={startTest} className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl">
              {lastResult ? 'Take Next Diagnostic' : 'Start Diagnostic Test'}
            </button>
            <Link href="/ap-calcab-score-predictor" className="mt-3 block text-center text-sm font-medium text-purple-700 transition hover:underline dark:text-purple-300">Prefer a quick estimate? Open the AP Calculus AB Score Predictor</Link>
            <Link href="/ap-calcab-daily-question" className="mt-1 block text-center text-sm font-medium text-purple-700 transition hover:underline dark:text-purple-300">Need a warm-up first? Try today&apos;s AP Calculus AB question</Link>
          </div>

          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-base font-semibold text-gray-800 dark:text-gray-200">🔄 How the Diagnostic Cycle Works</h3>
            <div className="space-y-3">
              {[
                { step: '1', text: 'Take the diagnostic test — questions cover all AP Calculus AB units' },
                { step: '2', text: 'Get your results and 3-5 module recommendations based on what you missed' },
                { step: '3', text: 'Study those specific modules (lessons, problems, flashcards)' },
                { step: '4', text: 'Retake the diagnostic — a different form with fresh questions' },
                { step: '5', text: 'Repeat until you\'re scoring 4+ across all units!' },
              ].map(item => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">{item.step}</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {history.length > 1 && (
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Previous Attempts</h3>
              <div className="space-y-2">
                {history.slice(1, 8).map(h => {
                  const parsed = h.results as Record<string, unknown>
                  return (
                    <div key={h.id} className="flex items-center justify-between rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Score: {String(parsed?.estimatedAPScore ?? '—')}/5</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Form {String(parsed?.form ?? '?')}</span>
                      </div>
                      <span className="text-xs text-gray-400 dark:text-gray-400">{new Date(h.createdAt).toLocaleDateString()}</span>
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
