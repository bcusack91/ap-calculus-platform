'use client'

import { useDiagnosticPlanAccess } from '@/components/DiagnosticPlanLock'
import ApDiagnosticResults from '@/components/ap-diagnostic/ApDiagnosticResults'
import { useApDiagnosticStartEvent } from '@/components/ap-diagnostic/useApDiagnosticStartEvent'
import { apDiagnosticCourse } from '@/lib/ap-diagnostic-courses'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { pastAttemptReviewHref } from '@/lib/diagnostic-attempt-scores'
import {
  generateAPPhysicsCEMTest,
  scoreAPPhysicsCEM,
  pickNextForm,
  type APPhysicsCEMTestData,
  type APPhysicsCEMResults,
} from '@/data/ap-physics-c-em-diagnostic'
import { MathText } from '@/components/MathText'
import DiagnosticChallengeCard from '@/components/DiagnosticChallengeCard'
import ReferenceSheetModal from '@/components/ReferenceSheetModal'
import { shuffleOptions } from '@/lib/shuffle-options'
import { signUpUrl } from '@/lib/auth-redirect'
import { useDiagnosticResume, sameQuestionSet } from '@/hooks/useDiagnosticResume'
import { DiagnosticResumePrompt, DiagnosticExitButtons } from '@/components/DiagnosticResumePrompt'

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

export default function APPhysicsCEMDiagnosticPage() {
  const planAccess = useDiagnosticPlanAccess()
  const { status, data: session } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const challengeToken = searchParams.get('challenge')
  const challengeFormRaw = Number(searchParams.get('challengeForm'))
  const challengeForm = Number.isFinite(challengeFormRaw) && challengeFormRaw >= 1
    ? challengeFormRaw
    : null

  const [phase, setPhase] = useState<'menu' | 'testing' | 'results'>('menu')

  useApDiagnosticStartEvent('ap-physics-c-em', phase)
  const [testData, setTestData] = useState<APPhysicsCEMTestData | null>(null)
  const [results, setResults] = useState<APPhysicsCEMResults | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [eliminatedOptions, setEliminatedOptions] = useState<Set<number>[]>([])
  const [timeRemaining, setTimeRemaining] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [challengeSubmitted, setChallengeSubmitted] = useState(false)
  const [showReference, setShowReference] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') router.push(signUpUrl({ callbackUrl: '/ap-physics-c-em-diagnostic', reason: 'diagnostic', label: 'AP Physics C: E&M' }))
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/ap-physics-c-em-diagnostic/history')
        .then(r => (r.ok ? r.json() : { attempts: [] }))
        .then(data => setHistory(data.attempts ?? []))
        .catch(() => {})
    }
  }, [status])

  // The sitting is mirrored to localStorage on every answer, move and tick
  // (src/hooks/useDiagnosticResume.ts); the menu offers Resume / Start over.
  const resume = useDiagnosticResume<APPhysicsCEMTestData>({
    userId: session?.user?.id,
    course: 'ap-physics-c-em',
    version: 1,
    phase,
    testData,
    answers,
    eliminated: eliminatedOptions,
    currentIndex,
    timeRemaining,
    validate: (data) => sameQuestionSet(data.questions, generateAPPhysicsCEMTest(data.form as Parameters<typeof generateAPPhysicsCEMTest>[0]).questions),
  })
  // The clock-expiry auto-submit calls the latest handleFinish (the interval
  // closure would otherwise score the answers as they were when the clock started).
  const finishRef = useRef<() => void>(() => {})

  useEffect(() => {
    if (phase !== 'testing') return
    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) { clearInterval(timerRef.current!); finishRef.current(); return 0 }
        return prev - 1
      })
    }, 1000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [phase])

  const startTest = useCallback(() => {
    const previousForms = history
      .map(h => {
        const f = (h.results as Record<string, unknown> | null)?.form
        return typeof f === 'number' ? f : typeof f === 'string' ? parseInt(f, 10) : undefined
      })
      .filter((f): f is number => typeof f === 'number' && !isNaN(f))
    const form = (challengeForm ?? pickNextForm(previousForms)) as (1|2|3|4|5|6|7|8|9|10)
    const data = generateAPPhysicsCEMTest(form)
    // Shuffle options so correct answer position is randomized
    data.questions.forEach((q) => {
      const s = shuffleOptions(q.options, q.correctAnswer, q.question)
      q.options = s.options
      q.correctAnswer = s.correctIndex
    })
        setTestData(data); setCurrentIndex(0); setAnswers(new Array(data.questions.length).fill(null))
    setEliminatedOptions(Array.from({ length: data.questions.length }, () => new Set<number>())); setTimeRemaining(data.timeLimitMinutes * 60); setPhase('testing')
  }, [history, challengeForm])

  const resumeTest = useCallback(() => {
    const saved = resume.restore()
    if (!saved) return
    setTestData(saved.testData)
    setCurrentIndex(saved.currentIndex)
    setAnswers(saved.answers)
    setEliminatedOptions(saved.eliminated)
    setTimeRemaining(saved.timeRemaining)
    setPhase('testing')
  }, [resume])

  const handleFinish = useCallback(async () => {
    if (!testData) return
    if (timerRef.current) clearInterval(timerRef.current)
    const answersRecord: Record<number, number> = {}
    answers.forEach((a, i) => { if (a !== null) answersRecord[i] = a })
    const diagnosticResults = scoreAPPhysicsCEM(testData.form, testData.questions, answersRecord)
    setResults(diagnosticResults); setPhase('results')
    try {
      await fetch('/api/ap-physics-c-em-diagnostic/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: `ap-physics-c-em-diagnostic-${testData.form}`, results: { review: { questions: testData.questions, answers, domainNames: Object.fromEntries(testData.domains.map(d => [d.id, d.name])) }, form: diagnosticResults.form, totalCorrect: diagnosticResults.totalCorrect, totalQuestions: diagnosticResults.totalQuestions, percentage: diagnosticResults.percentage, estimatedAPScore: diagnosticResults.estimatedAPScore, domains: diagnosticResults.domains, recommendedTopics: diagnosticResults.recommendedTopics }, weakAreas: diagnosticResults.weakAreas, strengths: diagnosticResults.strengths.join(', ') }),
      })
      const histRes = await fetch('/api/ap-physics-c-em-diagnostic/history')
      if (histRes.ok) { const histData = await histRes.json(); setHistory(histData.attempts ?? []) }

      // Add flashcards for recommended (weak) topics

      if (challengeToken) {
        const challengeRes = await fetch(`/api/diagnostic-challenges/${challengeToken}/submit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            category: `ap-physics-c-em-diagnostic-${diagnosticResults.form}`,
            score: diagnosticResults.percentage,
            correct: diagnosticResults.totalCorrect,
            total: diagnosticResults.totalQuestions,
            apScore: diagnosticResults.estimatedAPScore,
          }),
        })
        if (challengeRes.ok) {
          setChallengeSubmitted(true)
        }
      }

    } catch { /* silent */ }
  }, [testData, answers, challengeToken])

  useEffect(() => { finishRef.current = () => { void handleFinish() } }, [handleFinish])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container py-12"><div className="mx-auto max-w-2xl space-y-6"><div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" /><div className="h-64 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" /></div></div>
      </div>
    )
  }

  if (phase === 'testing' && testData) {
    const q = testData.questions[currentIndex]
    const answeredCount = answers.filter(a => a !== null).length
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container"><div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{currentIndex + 1}/{testData.questions.length}</span>
              <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"><div className="h-full rounded-full bg-amber-500 transition-all" style={{ width: `${((currentIndex + 1) / testData.questions.length) * 100}%` }} /></div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-sm font-mono font-bold ${timeRemaining < 300 ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'}`}>⏱ {formatTime(timeRemaining)}</span>
              <button onClick={() => setShowReference(true)} className="rounded-lg border border-amber-300 px-3 py-1 text-xs font-medium text-amber-700 transition hover:bg-amber-50 dark:border-amber-600 dark:text-amber-400 dark:hover:bg-amber-900/20">📋 Reference Sheet</button>
              <DiagnosticExitButtons
                  onSaveExit={() => { if (timerRef.current) clearInterval(timerRef.current); setPhase('menu'); setTestData(null) }}
                  onDiscard={() => { if (timerRef.current) clearInterval(timerRef.current); resume.discard(); setPhase('menu'); setTestData(null) }}
                />
            </div>
          </div>
          <div className="mb-4"><span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">{testData.domains.find(d => d.id === q.domain)?.name ?? q.domain}</span></div>
          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            {/* Question text can carry $…$ LaTeX — render through the shared
                MathText pipeline (same one the post-test review already uses). */}
            <MathText text={q.question} className="mb-6 text-sm leading-relaxed text-gray-800 dark:text-gray-200" />
            <div className="space-y-2">
              {q.options.map((opt, i) => {
                const isSelected = answers[currentIndex] === i
                  const isEliminated = eliminatedOptions[currentIndex]?.has(i) ?? false
                return (
                  <button key={i} onClick={() => { if (isEliminated) return; const updated = [...answers]; updated[currentIndex] = i; setAnswers(updated) }}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${isSelected ? 'border-amber-500 bg-amber-50 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-500' : 'border-gray-200 text-gray-700 hover:border-amber-300 hover:bg-amber-50/50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-amber-500'}`}>
                    <div className="flex items-center justify-between gap-3">
                      <span className={`flex-1 ${isEliminated ? 'line-through opacity-50 decoration-2 decoration-gray-400 dark:decoration-gray-500' : ''}`}>
                        <span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span><MathText inline text={opt} />
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
              <button onClick={() => setCurrentIndex(prev => prev + 1)} className="rounded-xl bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-amber-700">Next →</button>
            ) : (
              <button onClick={handleFinish} className="rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg">Submit Diagnostic</button>
            )}
          </div>
          <ReferenceSheetModal open={showReference} onClose={() => setShowReference(false)} courseSlug="ap-physics-c-em" />
        </div></div>
      </div>
    )
  }

  if (phase === 'results' && results) {
    return (
      <ApDiagnosticResults
        course={apDiagnosticCourse('ap-physics-c-em')}
        results={results}
        planAccess={planAccess}
        history={history}
        review={testData ? { questions: testData.questions, answers, domainNames: Object.fromEntries(testData.domains.map(d => [d.id, d.name])) } : null}
        onRetake={() => { setResults(null); setTestData(null); startTest() }}
        secondary={(
          <DiagnosticChallengeCard
            category={`ap-physics-c-em-diagnostic-${results.form ?? 1}`}
            score={results.percentage}
            correct={results.totalCorrect}
            total={results.totalQuestions}
            apScore={Math.max(1, Math.min(5, results.estimatedAPScore))}
            currentChallengeToken={challengeToken}
            challengeSubmitted={challengeSubmitted}
          />
        )}
      />
    )
  }

  const lastResult = history.length > 0 ? (history[0].results as Record<string, unknown> ?? {}) : null
  const lastRecommendedTopics = lastResult?.recommendedTopics as { slug: string; name: string; priority: string }[] | undefined

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-8 sm:py-12"><div className="mx-auto max-w-2xl">
        <Link href="/courses/ap-physics-c-em" className="mb-4 inline-flex items-center gap-1 text-sm text-amber-600 hover:underline dark:text-amber-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>AP Physics C: E&M
        </Link>
        <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">⚡ AP Physics C: E&M Diagnostic</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">Calculus-based electricity & magnetism — identify strengths and weaknesses across all 5 domains and get a personalized study plan.</p>

        {lastRecommendedTopics && lastRecommendedTopics.length > 0 && (
          <div className="mb-6 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 dark:border-amber-700 dark:bg-amber-900/20">
            <h3 className="mb-1 text-base font-bold text-amber-800 dark:text-amber-300">🎯 Your Current Study Plan</h3>
            <p className="mb-3 text-sm text-amber-600 dark:text-amber-400">From your last diagnostic — review these topics, then retake the test:</p>
            <div className="space-y-2">
              {lastRecommendedTopics.map((topic, i) => (
                <Link key={topic.slug} href={`/topics/${topic.slug}/interactive`} className="flex items-center justify-between rounded-xl border border-amber-200 bg-white px-4 py-3 transition hover:border-amber-400 hover:shadow-sm dark:border-amber-700 dark:bg-gray-800 group">
                  <div className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">{i + 1}</span><span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-amber-700 dark:group-hover:text-amber-400">{topic.name}</span><span className={`text-xs px-2 py-0.5 rounded-full ${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>{topic.priority === 'high' ? 'High' : 'Medium'}</span></div>
                  <span className="text-amber-500 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {lastResult && (
          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Most Recent Result</h3>
            <div className="flex items-center justify-between">
              <div><p className="text-3xl font-bold text-amber-600 dark:text-amber-400">{String(lastResult.estimatedAPScore ?? '—')}/5</p><p className="text-sm text-gray-500 dark:text-gray-400">Estimated AP Score</p></div>
              <div className="text-right"><p className="text-sm text-gray-600 dark:text-gray-400">{String(lastResult.totalCorrect ?? '—')}/{String(lastResult.totalQuestions ?? '—')} correct</p><p className="text-xs text-gray-400">Form {String(lastResult.form ?? '—')} · {new Date(history[0].createdAt).toLocaleDateString()}<br /><Link href={pastAttemptReviewHref(history[0])} className="mt-1 inline-block text-xs font-semibold text-purple-600 hover:underline dark:text-purple-400" onClick={(e) => e.stopPropagation()}>Review past attempt →</Link></p></div>
            </div>
          </div>
        )}

        <DiagnosticResumePrompt
          label="AP Physics C: E&M"
          resumable={resume.resumable}
          onResume={resumeTest}
          onStartOver={() => { resume.discard(); startTest() }}
        />

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">What to Expect</h3>
          <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            {[`${apDiagnosticCourse('ap-physics-c-em').questionCount} questions spanning 5 AP Physics C: E&M domains`, `${apDiagnosticCourse('ap-physics-c-em').timeLimitMinutes} minute time limit`, 'Estimated AP score (1–5) with per-domain breakdown', 'Personalized topic recommendations', '10 rotating forms with different questions each time'].map(item => (
              <li key={item} className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{item}</li>
            ))}
          </ul>
          <button onClick={startTest} className="w-full rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl">{lastResult ? 'Take Next Diagnostic' : 'Start Diagnostic Test'}</button>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <Link href="/ap-physics-c-em-score-predictor" className="rounded-lg bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400">Score Predictor</Link>
            <Link href="/ap-physics-c-em-daily-question" className="rounded-lg bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400">Daily Question</Link>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-3 text-base font-semibold text-gray-800 dark:text-gray-200">🔄 How the Diagnostic Cycle Works</h3>
          <div className="space-y-3">
            {[
              { step: '1', text: 'Take the diagnostic test — questions cover all 5 AP Physics C: E&M domains' },
              { step: '2', text: 'Get your results and topic recommendations based on what you missed' },
              { step: '3', text: 'Study those specific topics (lessons, practice problems)' },
              { step: '4', text: 'Retake the diagnostic — a different form with fresh questions' },
              { step: '5', text: 'Repeat until you\'re scoring 4+ across all domains!' },
            ].map(item => (
              <div key={item.step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">{item.step}</span>
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
                  <Link key={h.id} href={pastAttemptReviewHref(h)} className="flex items-center justify-between rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50 cursor-pointer transition hover:bg-gray-100 dark:hover:bg-gray-600/60 hover:shadow-sm">
                    <div className="flex items-center gap-3"><span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Score: {String(parsed?.estimatedAPScore ?? '—')}/5</span><span className="text-xs text-gray-500 dark:text-gray-400">Form {String(parsed?.form ?? '?')}</span></div>
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
