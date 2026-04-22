'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
  generateACTDiagnosticTest,
  scoreACTDiagnostic,
  pickNextForm,
  TOTAL_FORMS,
  type ACTDiagnosticTestData,
  type ACTDiagnosticResults,
} from '@/data/act-practice/diagnostic-generator'
import DiagnosticReview from '@/components/DiagnosticReview'
import DiagnosticChallengeCard from '@/components/DiagnosticChallengeCard'
import { shuffleOptions } from '@/lib/shuffle-options'

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

export default function ACTDiagnosticPage() {
  const { status } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const challengeToken = searchParams.get('challenge')
  const challengeFormRaw = Number(searchParams.get('challengeForm'))
  const challengeForm = Number.isFinite(challengeFormRaw) && challengeFormRaw >= 1
    ? challengeFormRaw
    : null

  const [phase, setPhase] = useState<'menu' | 'testing' | 'results'>('menu')
  const [testData, setTestData] = useState<ACTDiagnosticTestData | null>(null)
  const [results, setResults] = useState<ACTDiagnosticResults | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [eliminatedOptions, setEliminatedOptions] = useState<Set<number>[]>([])
  const [timeRemaining, setTimeRemaining] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [challengeSubmitted, setChallengeSubmitted] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/signin?callbackUrl=/act-diagnostic')
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/act-diagnostic/history')
        .then(r => (r.ok ? r.json() : { attempts: [] }))
        .then(data => setHistory(data.attempts ?? []))
        .catch(() => {})
    }
  }, [status])

  useEffect(() => {
    if (phase !== 'testing') return
    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) { clearInterval(timerRef.current!); handleFinish(); return 0 }
        return prev - 1
      })
    }, 1000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  const [loading, setLoading] = useState(false)

  const startTest = useCallback(async () => {
    setLoading(true)
    const previousForms = history
      .map(h => Number((h.results as Record<string, unknown> | null)?.form))
      .filter((f): f is number => Number.isFinite(f))
    const form = (challengeForm ?? pickNextForm(previousForms)) as (1|2|3|4|5|6|7|8|9|10)
    const data = await generateACTDiagnosticTest({ form })
    // Shuffle options so correct answer position is randomized
    data.questions.forEach((q) => {
      const s = shuffleOptions(q.options, q.correctIndex, q.question)
      q.options = s.options
      q.correctIndex = s.correctIndex
    })
        setTestData(data); setCurrentIndex(0); setAnswers(new Array(data.questions.length).fill(null))
    setEliminatedOptions(Array.from({ length: data.questions.length }, () => new Set<number>())); setTimeRemaining(data.timeLimitMinutes * 60); setPhase('testing'); setLoading(false)
  }, [history, challengeForm])

  const handleFinish = useCallback(async () => {
    if (!testData) return
    if (timerRef.current) clearInterval(timerRef.current)
    const answersRecord: Record<number, number> = {}
    answers.forEach((a, i) => { if (a !== null) answersRecord[i] = a })
    const diagnosticResults = scoreACTDiagnostic(testData.form, testData.questions, answersRecord)
    setResults(diagnosticResults); setPhase('results')
    try {
      await fetch('/api/act-diagnostic/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: `act-diagnostic-${testData.form}`, results: { review: { questions: testData.questions, answers, domainNames: Object.fromEntries(testData.domains.map(d => [d.id, d.name])) }, form: diagnosticResults.form, totalCorrect: diagnosticResults.totalCorrect, totalQuestions: diagnosticResults.totalQuestions, percentage: diagnosticResults.percentage, estimatedComposite: diagnosticResults.estimatedComposite, englishScore: diagnosticResults.englishScore, mathScore: diagnosticResults.mathScore, readingScore: diagnosticResults.readingScore, scienceScore: diagnosticResults.scienceScore, domains: diagnosticResults.domains, recommendedTopics: diagnosticResults.recommendedTopics }, weakAreas: diagnosticResults.weakAreas, strengths: diagnosticResults.strengths.join(', ') }),
      })
      const histRes = await fetch('/api/act-diagnostic/history')
      if (histRes.ok) { const histData = await histRes.json(); setHistory(histData.attempts ?? []) }

      // Add flashcards for recommended (weak/moderate) topics

      if (challengeToken) {
        const challengeRes = await fetch(`/api/diagnostic-challenges/${challengeToken}/submit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            category: `act-diagnostic-${diagnosticResults.form}`,
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

      if (diagnosticResults.recommendedTopics.length > 0) {
        fetch('/api/flashcards/add-from-missed', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topicSlugs: diagnosticResults.recommendedTopics.map((t: { slug: string }) => t.slug) }),
        }).catch(() => {})
      }
    } catch { /* silent */ }
  }, [testData, answers, challengeToken])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container py-12"><div className="mx-auto max-w-2xl space-y-6"><div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" /><div className="h-64 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" /></div></div>
      </div>
    )
  }

  /* LOADING PHASE */
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container py-12">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <div className="h-8 w-48 mx-auto animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
            <p className="text-gray-500">Generating diagnostic questions from question banks…</p>
          </div>
        </div>
      </div>
    )
  }

  /* TESTING PHASE */
  if (phase === 'testing' && testData) {
    const q = testData.questions[currentIndex]
    const answeredCount = answers.filter(a => a !== null).length
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container"><div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{currentIndex + 1}/{testData.questions.length}</span>
              <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"><div className="h-full rounded-full bg-red-500 transition-all" style={{ width: `${((currentIndex + 1) / testData.questions.length) * 100}%` }} /></div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-sm font-mono font-bold ${timeRemaining < 300 ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'}`}>⏱ {formatTime(timeRemaining)}</span>
              <button onClick={() => { if (timerRef.current) clearInterval(timerRef.current); setPhase('menu'); setTestData(null) }} className="text-sm text-gray-500 hover:text-red-500 dark:text-gray-400">Exit</button>
            </div>
          </div>
          <div className="mb-4"><span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400">{testData.domains.find(d => d.id === q.domain)?.name ?? q.domain}</span></div>
          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <p className="mb-6 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, i) => {
                const isSelected = answers[currentIndex] === i
                  const isEliminated = eliminatedOptions[currentIndex]?.has(i) ?? false
                return (
                  <button key={i} onClick={() => { if (isEliminated) return; const updated = [...answers]; updated[currentIndex] = i; setAnswers(updated) }}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${isSelected ? 'border-red-500 bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300 dark:border-red-500' : 'border-gray-200 text-gray-700 hover:border-red-300 hover:bg-red-50/50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-red-500'}`}>
                    <div className="flex items-center justify-between gap-3">
                      <span className={`flex-1 ${isEliminated ? 'line-through opacity-50 decoration-2 decoration-gray-400 dark:decoration-gray-500' : ''}`}>
                        <span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span>{opt}
                      </span>
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.stopPropagation()
                          setEliminatedOptions(prev => {
                            const next = prev.map(set => new Set(set))
                            const qSet = new Set(next[currentIndex] ?? [])
                            if (qSet.has(i)) {
                              qSet.delete(i)
                            } else {
                              qSet.add(i)
                              if (answers[currentIndex] === i) {
                                const updated = [...answers]
                                updated[currentIndex] = null
                                setAnswers(updated)
                              }
                            }
                            next[currentIndex] = qSet
                            return next
                          })
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            e.stopPropagation()
                            setEliminatedOptions(prev => {
                              const next = prev.map(set => new Set(set))
                              const qSet = new Set(next[currentIndex] ?? [])
                              if (qSet.has(i)) qSet.delete(i)
                              else qSet.add(i)
                              next[currentIndex] = qSet
                              return next
                            })
                          }
                        }}
                        className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition ${isEliminated ? 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500 hover:bg-red-100 hover:text-red-500 dark:hover:bg-red-900/30 dark:hover:text-red-400'}`}
                        title={isEliminated ? 'Restore this answer' : 'Eliminate this answer'}
                        aria-label={isEliminated ? 'Restore this answer' : 'Eliminate this answer'}
                      >
                        ✕
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))} disabled={currentIndex === 0} className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:opacity-40 dark:border-gray-600 dark:text-gray-400">← Previous</button>
            <span className="text-xs text-gray-500 dark:text-gray-400">{answeredCount}/{testData.questions.length} answered</span>
            <button
              onClick={() => { const updated = [...answers]
                updated[currentIndex] = null
                setAnswers(updated)
                if (currentIndex < testData.questions.length - 1) {
                  setCurrentIndex(prev => prev + 1)
                } else {
                  handleFinish()
                }
              }}
              className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              I Would Be Guessing
            </button>
            {currentIndex < testData.questions.length - 1 ? (
              <button onClick={() => setCurrentIndex(prev => prev + 1)} className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-red-700">Next →</button>
            ) : (
              <button onClick={handleFinish} className="rounded-xl bg-gradient-to-r from-red-600 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg">Submit Diagnostic</button>
            )}
          </div>
        </div></div>
      </div>
    )
  }

  /* RESULTS PHASE */
  if (phase === 'results' && results) {
    const scoreEmoji = results.estimatedComposite >= 30 ? '🎉' : results.estimatedComposite >= 24 ? '👍' : '📚'
    const completedModules = history.length
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 py-8 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container"><div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">ACT Diagnostic Results</h2>
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800"><p className="text-sm text-gray-500 dark:text-gray-400">Estimated Composite</p><p className="text-5xl font-black text-red-600 dark:text-red-400">{results.estimatedComposite}</p><p className="text-xs text-gray-500 dark:text-gray-400">out of 36</p></div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800"><p className="text-sm text-gray-500 dark:text-gray-400">Correct</p><p className="text-4xl font-black text-orange-600 dark:text-orange-400">{results.totalCorrect}/{results.totalQuestions}</p><p className="text-xs text-gray-500 dark:text-gray-400">{results.percentage}%</p></div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800"><p className="text-sm text-gray-500 dark:text-gray-400">Performance</p><p className="text-4xl">{scoreEmoji}</p><p className="text-xs text-gray-500 dark:text-gray-400">{results.estimatedComposite >= 30 ? 'Excellent' : results.estimatedComposite >= 24 ? 'Good' : 'Needs Review'}</p></div>
          </div>

          {/* Per-Section Scores */}
          <div className="mb-8 grid gap-3 sm:grid-cols-4">
            {[
              { label: 'English', score: results.englishScore },
              { label: 'Math', score: results.mathScore },
              { label: 'Reading', score: results.readingScore },
              { label: 'Science', score: results.scienceScore },
            ].map(s => (
              <div key={s.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400">{s.label}</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{s.score ?? '—'}</p>
                <p className="text-xs text-gray-400">out of 36</p>
              </div>
            ))}
          </div>

          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Section Breakdown</h3>
            <div className="space-y-3">
              {results.domains.map(d => (
                <div key={d.domainId}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{d.domainName}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${d.level === 'strong' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : d.level === 'moderate' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>{d.correct}/{d.total} ({d.percentage}%)</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"><div className={`h-full rounded-full transition-all ${d.level === 'strong' ? 'bg-green-500' : d.level === 'moderate' ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${d.percentage}%` }} /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-900/20"><h4 className="mb-2 font-semibold text-green-800 dark:text-green-300">💪 Strengths</h4><ul className="space-y-1 text-sm text-green-700 dark:text-green-400">{results.strengths.length > 0 ? results.strengths.map(s => <li key={s}>• {s}</li>) : <li>Complete more questions to identify strengths</li>}</ul></div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-900/20"><h4 className="mb-2 font-semibold text-red-800 dark:text-red-300">📚 Areas to Improve</h4><ul className="space-y-1 text-sm text-red-700 dark:text-red-400">{results.weakAreas.length > 0 ? results.weakAreas.map(w => <li key={w}>• {w}</li>) : <li>Great job — no major weak areas!</li>}</ul></div>
          </div>

          {/* Review Test */}
          
          <DiagnosticChallengeCard
            category={`act-diagnostic-${results.form ?? 1}`}
            score={results.percentage}
            correct={results.totalCorrect}
            total={results.totalQuestions}
            apScore={Math.max(1, Math.min(5, Math.ceil((results.percentage ?? 0) / 20)))}
            currentChallengeToken={challengeToken}
            challengeSubmitted={challengeSubmitted}
          />
          {testData && (
            <DiagnosticReview
              questions={testData.questions}
              answers={answers}
              domainNames={Object.fromEntries(testData.domains.map(d => [d.id, d.name]))}
            />
          )}

          {results.recommendedTopics.length > 0 && (
            <div className="mb-8 rounded-2xl border-2 border-red-300 bg-red-50 p-6 dark:border-red-700 dark:bg-red-900/20">
              <h3 className="mb-1 text-lg font-bold text-red-800 dark:text-red-300">🎯 Your Personalized Study Plan</h3>
              <p className="mb-4 text-sm text-red-600 dark:text-red-400">Based on your results, review these {results.recommendedTopics.length} module{results.recommendedTopics.length > 1 ? 's' : ''}.</p>
              <div className="space-y-2">
                {results.recommendedTopics.map((topic, i) => (
                  <Link key={topic.slug} href={`/topics/${topic.slug}/interactive`} className="flex items-center justify-between rounded-xl border border-red-200 bg-white px-4 py-3 transition hover:border-red-400 hover:shadow-sm dark:border-red-700 dark:bg-gray-800 dark:hover:border-red-500 group">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700 dark:bg-red-900/50 dark:text-red-300">{i + 1}</span>
                      <div>
                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-red-700 dark:group-hover:text-red-400">{topic.name}</span>
                        <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>{topic.priority === 'high' ? 'High Priority' : 'Medium Priority'}</span>
                      </div>
                    </div>
                    <span className="text-red-500 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-900/20">
            <h4 className="mb-2 font-semibold text-red-800 dark:text-red-300">🔄 How This Cycle Works</h4>
            <ol className="space-y-2 text-sm text-red-700 dark:text-red-400 list-decimal list-inside">
              <li>Click a recommended module above to start studying</li>
              <li>Take the <strong>entrance quiz</strong> to pinpoint which lesson parts you need</li>
              <li>Work through the <strong>interactive lessons</strong> at your own pace</li>
              <li>Pass the <strong>exit quiz</strong> to confirm you&apos;ve mastered the topic</li>
              <li>Come back and take the next diagnostic (Form {results.form < TOTAL_FORMS ? results.form + 1 : 1})</li>
              <li>Repeat until you&apos;re reaching your target composite score!</li>
            </ol>
            {completedModules > 0 && <p className="mt-3 text-xs text-red-500 dark:text-red-400">You&apos;ve taken {completedModules} diagnostic test{completedModules > 1 ? 's' : ''} so far — keep going!</p>}
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <button onClick={() => { setResults(null); setTestData(null); startTest() }} className="flex-1 rounded-xl border-2 border-red-500 py-3 font-semibold text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20">Take Next Diagnostic</button>
            <Link href="/act" className="flex-1 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 py-3 text-center font-semibold text-white shadow transition hover:shadow-lg">Browse All ACT Modules</Link>
            <Link href="/act-score-predictor" className="flex-1 rounded-xl border border-red-300 py-3 text-center font-semibold text-red-700 transition hover:bg-red-50 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-900/20">View Score Predictor</Link>
            <Link href="/act-daily-question" className="flex-1 rounded-xl border border-red-300 py-3 text-center font-semibold text-red-700 transition hover:bg-red-50 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-900/20">Today&apos;s Question</Link>
          </div>
        </div></div>
      </div>
    )
  }

  /* MENU PHASE */
  const lastResult = history.length > 0 ? (history[0].results as Record<string, unknown> ?? {}) : null
  const lastRecommendedTopics = lastResult?.recommendedTopics as { slug: string; name: string; priority: string }[] | undefined

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-8 sm:py-12"><div className="mx-auto max-w-2xl">
        <Link href="/act" className="mb-4 inline-flex items-center gap-1 text-sm text-red-600 hover:underline dark:text-red-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>ACT
        </Link>
        <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">📝 ACT Diagnostic Test</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">Identify your strengths and weaknesses across all 4 ACT sections — English, Math, Reading, and Science.</p>

        {lastRecommendedTopics && lastRecommendedTopics.length > 0 && (
          <div className="mb-6 rounded-2xl border-2 border-red-300 bg-red-50 p-6 dark:border-red-700 dark:bg-red-900/20">
            <h3 className="mb-1 text-base font-bold text-red-800 dark:text-red-300">🎯 Your Current Study Plan</h3>
            <p className="mb-3 text-sm text-red-600 dark:text-red-400">From your last diagnostic — review these modules, then retake the test:</p>
            <div className="space-y-2">
              {lastRecommendedTopics.map((topic, i) => (
                <Link key={topic.slug} href={`/topics/${topic.slug}/interactive`} className="flex items-center justify-between rounded-xl border border-red-200 bg-white px-4 py-3 transition hover:border-red-400 hover:shadow-sm dark:border-red-700 dark:bg-gray-800 group">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700 dark:bg-red-900/50 dark:text-red-300">{i + 1}</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-red-700 dark:group-hover:text-red-400">{topic.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>{topic.priority === 'high' ? 'High' : 'Medium'}</span>
                  </div>
                  <span className="text-red-500 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {lastResult && (
          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Most Recent Result</h3>
            <div className="flex items-center justify-between">
              <div><p className="text-3xl font-bold text-red-600 dark:text-red-400">{String(lastResult.estimatedComposite ?? '—')}/36</p><p className="text-sm text-gray-500 dark:text-gray-400">Estimated Composite</p></div>
              <div className="text-right"><p className="text-sm text-gray-600 dark:text-gray-400">{String(lastResult.totalCorrect ?? '—')}/{String(lastResult.totalQuestions ?? '—')} correct</p><p className="text-xs text-gray-400">Form {String(lastResult.form ?? '—')} · {new Date(history[0].createdAt).toLocaleDateString()}<br /><Link href={`/diagnostic-review/${history[0].id}`} className="mt-1 inline-block text-xs font-semibold text-purple-600 hover:underline dark:text-purple-400" onClick={(e) => e.stopPropagation()}>Review past attempt →</Link></p></div>
            </div>
          </div>
        )}

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">What to Expect</h3>
          <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            {['~40 questions dynamically generated across English, Math, Reading & Science', '40 minute time limit', 'Estimated ACT composite score (1–36) with per-section scores', 'Personalized study recommendations with entrance quiz → lesson → exit quiz flow', 'Fresh questions each time — 10 unique forms from our question bank'].map(item => (
              <li key={item} className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{item}</li>
            ))}
          </ul>
          <button onClick={startTest} className="w-full rounded-xl bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl">{lastResult ? 'Take Next Diagnostic' : 'Start Diagnostic Test'}</button>
          <Link href="/act-score-predictor" className="mt-3 block text-center text-sm font-medium text-red-700 transition hover:underline dark:text-red-300">Prefer a quick estimate? Open the ACT Score Predictor</Link>
          <Link href="/act-daily-question" className="mt-1 block text-center text-sm font-medium text-red-700 transition hover:underline dark:text-red-300">Need a warm-up first? Try today&apos;s ACT question</Link>
        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-3 text-base font-semibold text-gray-800 dark:text-gray-200">🔄 How the Diagnostic Cycle Works</h3>
          <div className="space-y-3">
            {[
              { step: '1', text: 'Take the diagnostic test — questions drawn from all 4 ACT sections' },
              { step: '2', text: 'Get your results and topic recommendations based on what you missed' },
              { step: '3', text: 'Click a topic → take the entrance quiz to find your weak spots' },
              { step: '4', text: 'Work through interactive lessons — text, visuals, and embedded practice' },
              { step: '5', text: 'Pass the exit quiz to confirm mastery, then retake the diagnostic!' },
            ].map(item => (
              <div key={item.step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700 dark:bg-red-900/50 dark:text-red-300">{item.step}</span>
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
                  <Link key={h.id} href={`/diagnostic-review/${h.id}`} className="flex items-center justify-between rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50 cursor-pointer transition hover:bg-gray-100 dark:hover:bg-gray-600/60 hover:shadow-sm">
                    <div className="flex items-center gap-3"><span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Score: {String(parsed?.estimatedComposite ?? '—')}/36</span><span className="text-xs text-gray-500 dark:text-gray-400">Form {String(parsed?.form ?? '?')}</span></div>
                    <span className="text-xs text-gray-400">{new Date(h.createdAt).toLocaleDateString()}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div></div>
    </div>
  )
}
