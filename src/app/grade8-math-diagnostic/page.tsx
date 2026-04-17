'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  generateGrade8MathDiagnosticTest,
  scoreGrade8MathDiagnostic,
  pickNextForm,
  TOTAL_FORMS,
  type Grade8MathTestData,
  type Grade8MathResults,
} from '@/data/grade8-math-diagnostic'
import DiagnosticReview from '@/components/DiagnosticReview'
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

export default function Grade8MathDiagnosticPage() {
  const { status } = useSession()
  const router = useRouter()

  const [phase, setPhase] = useState<'menu' | 'testing' | 'results'>('menu')
  const [testData, setTestData] = useState<Grade8MathTestData | null>(null)
  const [results, setResults] = useState<Grade8MathResults | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [eliminatedOptions, setEliminatedOptions] = useState<Set<number>[]>([])
  const [timeRemaining, setTimeRemaining] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [history, setHistory] = useState<HistoryEntry[]>([])

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/signin?callbackUrl=/grade8-math-diagnostic')
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/grade8-math-diagnostic/history')
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

  const startTest = useCallback(() => {
    const previousForms = history
      .map(h => Number((h.results as Record<string, unknown> | null)?.form))
      .filter((f): f is number => Number.isFinite(f))
    const form = pickNextForm(previousForms)
    const data = generateGrade8MathDiagnosticTest(form)
    // Shuffle options so correct answer position is randomized
    data.questions.forEach((q) => {
      const s = shuffleOptions(q.options, q.correctAnswer, q.question)
      q.options = s.options
      q.correctAnswer = s.correctIndex
    })
        setTestData(data); setCurrentIndex(0); setAnswers(new Array(data.questions.length).fill(null))
    setEliminatedOptions(Array.from({ length: data.questions.length }, () => new Set<number>())); setTimeRemaining(data.timeLimitMinutes * 60); setPhase('testing')
  }, [history])

  const handleFinish = useCallback(async () => {
    if (!testData) return
    if (timerRef.current) clearInterval(timerRef.current)
    const answersRecord: Record<number, number> = {}
    answers.forEach((a, i) => { if (a !== null) answersRecord[i] = a })
    const diagnosticResults = scoreGrade8MathDiagnostic(testData.form, testData.questions, answersRecord)
    setResults(diagnosticResults); setPhase('results')
    try {
      await fetch('/api/grade8-math-diagnostic/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: `grade8-math-diagnostic-${testData.form}`, results: { form: diagnosticResults.form, totalCorrect: diagnosticResults.totalCorrect, totalQuestions: diagnosticResults.totalQuestions, percentage: diagnosticResults.percentage, estimatedLevel: diagnosticResults.estimatedLevel, domains: diagnosticResults.domains, recommendedTopics: diagnosticResults.recommendedTopics }, weakAreas: diagnosticResults.weakAreas, strengths: diagnosticResults.strengths.join(', ') }),
      })
      const histRes = await fetch('/api/grade8-math-diagnostic/history')
      if (histRes.ok) { const histData = await histRes.json(); setHistory(histData.attempts ?? []) }
    } catch { /* silent */ }
  }, [testData, answers])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container py-12"><div className="mx-auto max-w-2xl space-y-6"><div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" /><div className="h-64 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" /></div></div>
      </div>
    )
  }

  if (phase === 'testing' && testData) {
    const q = testData.questions[currentIndex]
    const answeredCount = answers.filter(a => a !== null).length
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container"><div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{currentIndex + 1}/{testData.questions.length}</span>
              <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"><div className="h-full rounded-full bg-pink-500 transition-all" style={{ width: `${((currentIndex + 1) / testData.questions.length) * 100}%` }} /></div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-sm font-mono font-bold ${timeRemaining < 300 ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'}`}>⏱ {formatTime(timeRemaining)}</span>
              <button onClick={() => { if (timerRef.current) clearInterval(timerRef.current); setPhase('menu'); setTestData(null) }} className="text-sm text-gray-500 hover:text-red-500 dark:text-gray-400">Exit</button>
            </div>
          </div>
          <div className="mb-4"><span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">{testData.domains.find(d => d.id === q.domain)?.name ?? q.domain}</span></div>
          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <p className="mb-6 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, i) => {
                const isSelected = answers[currentIndex] === i
                  const isEliminated = eliminatedOptions[currentIndex]?.has(i) ?? false
                return (
                  <button key={i} onClick={() => { if (isEliminated) return; const updated = [...answers]; updated[currentIndex] = i; setAnswers(updated) }}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${isSelected ? 'border-pink-500 bg-pink-50 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-500' : 'border-gray-200 text-gray-700 hover:border-pink-300 hover:bg-pink-50/50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-pink-500'}`}>
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
              <button onClick={() => setCurrentIndex(prev => prev + 1)} className="rounded-xl bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-pink-700">Next →</button>
            ) : (
              <button onClick={handleFinish} className="rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg">Submit Diagnostic</button>
            )}
          </div>
        </div></div>
      </div>
    )
  }

  if (phase === 'results' && results) {
    const levelEmoji = results.estimatedLevel === 'Advanced' ? '🎉' : results.estimatedLevel === 'Proficient' ? '👍' : '📚'
    const completedModules = history.length
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 py-8 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container"><div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Grade 8 Math Diagnostic Results</h2>
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800"><p className="text-sm text-gray-500 dark:text-gray-400">Level</p><p className="text-3xl font-black text-pink-600 dark:text-pink-400">{results.estimatedLevel}</p></div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800"><p className="text-sm text-gray-500 dark:text-gray-400">Correct</p><p className="text-4xl font-black text-rose-600 dark:text-rose-400">{results.totalCorrect}/{results.totalQuestions}</p><p className="text-xs text-gray-500 dark:text-gray-400">{results.percentage}%</p></div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800"><p className="text-sm text-gray-500 dark:text-gray-400">Performance</p><p className="text-4xl">{levelEmoji}</p><p className="text-xs text-gray-500 dark:text-gray-400">{results.percentage >= 80 ? 'Excellent' : results.percentage >= 60 ? 'Good' : 'Needs Review'}</p></div>
          </div>
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Domain Breakdown</h3>
            <div className="space-y-3">
              {results.domains.map(d => (
                <div key={d.domainId}>
                  <div className="flex items-center justify-between mb-1"><span className="text-sm font-medium text-gray-700 dark:text-gray-300">{d.domainName}</span><span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${d.level === 'strong' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : d.level === 'moderate' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>{d.correct}/{d.total} ({d.percentage}%)</span></div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"><div className={`h-full rounded-full transition-all ${d.level === 'strong' ? 'bg-green-500' : d.level === 'moderate' ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${d.percentage}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-pink-200 bg-pink-50 p-5 dark:border-pink-800 dark:bg-pink-900/20"><h4 className="mb-2 font-semibold text-pink-800 dark:text-pink-300">💪 Strengths</h4><ul className="space-y-1 text-sm text-pink-700 dark:text-pink-400">{results.strengths.length > 0 ? results.strengths.map(s => <li key={s}>• {s}</li>) : <li>Complete more questions to identify strengths</li>}</ul></div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-900/20"><h4 className="mb-2 font-semibold text-red-800 dark:text-red-300">📚 Areas to Improve</h4><ul className="space-y-1 text-sm text-red-700 dark:text-red-400">{results.weakAreas.length > 0 ? results.weakAreas.map(w => <li key={w}>• {w}</li>) : <li>Great job — no major weak areas!</li>}</ul></div>
          </div>

          {/* Review Test */}
          {testData && (
            <DiagnosticReview
              questions={testData.questions}
              answers={answers}
              domainNames={Object.fromEntries(testData.domains.map(d => [d.id, d.name]))}
            />
          )}

          {results.recommendedTopics.length > 0 && (
            <div className="mb-8 rounded-2xl border-2 border-pink-300 bg-pink-50 p-6 dark:border-pink-700 dark:bg-pink-900/20">
              <h3 className="mb-1 text-lg font-bold text-pink-800 dark:text-pink-300">🎯 Your Personalized Study Plan</h3>
              <p className="mb-4 text-sm text-pink-600 dark:text-pink-400">Based on your results, review these {results.recommendedTopics.length} topic{results.recommendedTopics.length > 1 ? 's' : ''}.</p>
              <div className="space-y-2">
                {results.recommendedTopics.map((topic, i) => (
                  <Link key={topic.slug} href={`/topics/${topic.slug}/interactive`} className="flex items-center justify-between rounded-xl border border-pink-200 bg-white px-4 py-3 transition hover:border-pink-400 hover:shadow-sm dark:border-pink-700 dark:bg-gray-800 dark:hover:border-pink-500 group">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-100 text-xs font-bold text-pink-700 dark:bg-pink-900/50 dark:text-pink-300">{i + 1}</span>
                      <div><span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-pink-700 dark:group-hover:text-pink-400">{topic.name}</span><span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>{topic.priority === 'high' ? 'High Priority' : 'Medium Priority'}</span></div>
                    </div>
                    <span className="text-pink-500 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div className="mb-8 rounded-2xl border border-pink-200 bg-pink-50 p-5 dark:border-pink-800 dark:bg-pink-900/20">
            <h4 className="mb-2 font-semibold text-pink-800 dark:text-pink-300">🔄 How This Cycle Works</h4>
            <ol className="space-y-2 text-sm text-pink-700 dark:text-pink-400 list-decimal list-inside">
              <li>Review the recommended topics above</li>
              <li>Complete each topic&apos;s lessons and practice problems</li>
              <li>Come back and take the next diagnostic (Form {results.form < TOTAL_FORMS ? results.form + 1 : 1})</li>
              <li>Get updated personalized recommendations</li>
              <li>Repeat until you reach the Advanced level!</li>
            </ol>
            {completedModules > 0 && <p className="mt-3 text-xs text-pink-500 dark:text-pink-400">You&apos;ve taken {completedModules} diagnostic test{completedModules > 1 ? 's' : ''} so far — keep going!</p>}
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <button onClick={() => { setResults(null); setTestData(null); startTest() }} className="flex-1 rounded-xl border-2 border-pink-500 py-3 font-semibold text-pink-600 transition hover:bg-pink-50 dark:text-pink-400 dark:hover:bg-pink-900/20">Take Next Diagnostic</button>
            <Link href="/courses/grade-8-math" className="flex-1 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 py-3 text-center font-semibold text-white shadow transition hover:shadow-lg">Browse Grade 8 Topics</Link>
            <Link href="/grade8-math-score-predictor" className="flex-1 rounded-xl border border-pink-300 py-3 text-center font-semibold text-pink-700 transition hover:bg-pink-50 dark:border-pink-700 dark:text-pink-300 dark:hover:bg-pink-900/20">View Score Predictor</Link>
            <Link href="/grade8-math-daily-question" className="flex-1 rounded-xl border border-pink-300 py-3 text-center font-semibold text-pink-700 transition hover:bg-pink-50 dark:border-pink-700 dark:text-pink-300 dark:hover:bg-pink-900/20">Today&apos;s Question</Link>
          </div>
        </div></div>
      </div>
    )
  }

  const lastResult = history.length > 0 ? (history[0].results as Record<string, unknown> ?? {}) : null
  const lastRecommendedTopics = lastResult?.recommendedTopics as { slug: string; name: string; priority: string }[] | undefined

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-8 sm:py-12"><div className="mx-auto max-w-2xl">
        <Link href="/courses/grade-8-math" className="mb-4 inline-flex items-center gap-1 text-sm text-pink-600 hover:underline dark:text-pink-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Grade 8 Math
        </Link>
        <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">🧮 Grade 8 Math Diagnostic Test</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">Identify your strengths and weaknesses across all Grade 8 Math domains and get a personalized study plan.</p>

        {lastRecommendedTopics && lastRecommendedTopics.length > 0 && (
          <div className="mb-6 rounded-2xl border-2 border-pink-300 bg-pink-50 p-6 dark:border-pink-700 dark:bg-pink-900/20">
            <h3 className="mb-1 text-base font-bold text-pink-800 dark:text-pink-300">🎯 Your Current Study Plan</h3>
            <p className="mb-3 text-sm text-pink-600 dark:text-pink-400">From your last diagnostic — review these topics, then retake the test:</p>
            <div className="space-y-2">
              {lastRecommendedTopics.map((topic, i) => (
                <Link key={topic.slug} href={`/topics/${topic.slug}/interactive`} className="flex items-center justify-between rounded-xl border border-pink-200 bg-white px-4 py-3 transition hover:border-pink-400 hover:shadow-sm dark:border-pink-700 dark:bg-gray-800 group">
                  <div className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-xs font-bold text-pink-700 dark:bg-pink-900/50 dark:text-pink-300">{i + 1}</span><span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-pink-700 dark:group-hover:text-pink-400">{topic.name}</span><span className={`text-xs px-2 py-0.5 rounded-full ${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>{topic.priority === 'high' ? 'High' : 'Medium'}</span></div>
                  <span className="text-pink-500 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {lastResult && (
          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Most Recent Result</h3>
            <div className="flex items-center justify-between">
              <div><p className="text-3xl font-bold text-pink-600 dark:text-pink-400">{String(lastResult.estimatedLevel ?? '—')}</p><p className="text-sm text-gray-500 dark:text-gray-400">Estimated Level</p></div>
              <div className="text-right"><p className="text-sm text-gray-600 dark:text-gray-400">{String(lastResult.totalCorrect ?? '—')}/{String(lastResult.totalQuestions ?? '—')} correct</p><p className="text-xs text-gray-400">Form {String(lastResult.form ?? '—')} · {new Date(history[0].createdAt).toLocaleDateString()}</p></div>
            </div>
          </div>
        )}

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">What to Expect</h3>
          <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            {['~30 questions spanning 6 Grade 8 Math domains', '30 minute time limit', 'Proficiency level assessment with per-domain breakdown', 'Personalized topic recommendations', `${TOTAL_FORMS} unique forms with different questions each time`].map(item => (
              <li key={item} className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 shrink-0 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{item}</li>
            ))}
          </ul>
          <button onClick={startTest} className="w-full rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl">{lastResult ? 'Take Next Diagnostic' : 'Start Diagnostic Test'}</button>
          <Link href="/grade8-math-score-predictor" className="mt-3 block text-center text-sm font-medium text-pink-700 transition hover:underline dark:text-pink-300">Prefer a quick estimate? Open the Grade 8 Math Score Predictor</Link>
          <Link href="/grade8-math-daily-question" className="mt-1 block text-center text-sm font-medium text-pink-700 transition hover:underline dark:text-pink-300">Need a warm-up first? Try today&apos;s Grade 8 Math question</Link>
        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-3 text-base font-semibold text-gray-800 dark:text-gray-200">🔄 How the Diagnostic Cycle Works</h3>
          <div className="space-y-3">
            {[
              { step: '1', text: 'Take the diagnostic test — questions cover all 6 Grade 8 Math domains' },
              { step: '2', text: 'Get your results and topic recommendations based on what you missed' },
              { step: '3', text: 'Study those specific topics (lessons, practice problems)' },
              { step: '4', text: 'Retake the diagnostic — a different form with fresh questions' },
              { step: '5', text: 'Repeat until you reach the Advanced level!' },
            ].map(item => (
              <div key={item.step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-100 text-xs font-bold text-pink-700 dark:bg-pink-900/50 dark:text-pink-300">{item.step}</span>
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
                    <div className="flex items-center gap-3"><span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Level: {String(parsed?.estimatedLevel ?? '—')}</span><span className="text-xs text-gray-500 dark:text-gray-400">Form {String(parsed?.form ?? '?')}</span></div>
                    <span className="text-xs text-gray-400">{new Date(h.createdAt).toLocaleDateString()}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div></div>
    </div>
  )
}
