'use client'

import ApDiagnosticVersionSwitch from '@/components/ap-diagnostic-v2/ApDiagnosticVersionSwitch'
import { useDiagnosticPlanAccess } from '@/components/DiagnosticPlanLock'
import ApDiagnosticResults from '@/components/ap-diagnostic/ApDiagnosticResults'
import { useApDiagnosticStartEvent } from '@/components/ap-diagnostic/useApDiagnosticStartEvent'
import { apDiagnosticCourse } from '@/lib/ap-diagnostic-courses'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { pastAttemptReviewHref } from '@/lib/diagnostic-attempt-scores'
import {
  generateAPPrecalculusDiagnosticTest,
  scoreAPPrecalculusDiagnostic,
  pickNextForm,
  TOTAL_FORMS,
  AP_PRECALCULUS_LEGACY_DOMAIN_NAMES,
  type APPrecalculusTestData,
  type APPrecalculusResults,
} from '@/data/ap-precalculus-diagnostic'
import { shuffleOptions } from '@/lib/shuffle-options'
import { MathText } from '@/components/MathText'
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

function APPrecalculusDiagnosticPageV1() {
  const planAccess = useDiagnosticPlanAccess()
  const { status, data: session } = useSession()
  const router = useRouter()

  const [phase, setPhase] = useState<'menu' | 'testing' | 'results'>('menu')

  useApDiagnosticStartEvent('ap-precalculus', phase)
  const [testData, setTestData] = useState<APPrecalculusTestData | null>(null)
  const [results, setResults] = useState<APPrecalculusResults | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [eliminatedOptions, setEliminatedOptions] = useState<Set<number>[]>([])
  const [timeRemaining, setTimeRemaining] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [history, setHistory] = useState<HistoryEntry[]>([])

  useEffect(() => {
    if (status === 'unauthenticated') router.push(signUpUrl({ callbackUrl: '/ap-precalculus-diagnostic', reason: 'diagnostic', label: 'AP Precalculus' }))
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/ap-precalculus-diagnostic/history')
        .then(r => (r.ok ? r.json() : { attempts: [] }))
        .then(data => setHistory(data.attempts ?? []))
        .catch(() => {})
    }
  }, [status])

  // The sitting is mirrored to localStorage on every answer, move and tick
  // (src/hooks/useDiagnosticResume.ts); the menu offers Resume / Start over.
  const resume = useDiagnosticResume<APPrecalculusTestData>({
    userId: session?.user?.id,
    course: 'ap-precalculus',
    version: 1,
    phase,
    testData,
    answers,
    eliminated: eliminatedOptions,
    currentIndex,
    timeRemaining,
    validate: (data) => sameQuestionSet(data.questions, generateAPPrecalculusDiagnosticTest(data.form as Parameters<typeof generateAPPrecalculusDiagnosticTest>[0]).questions),
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
      .map(h => (h.results as Record<string, unknown> | null)?.form as number | string | undefined)
      .filter((f): f is number | string => f != null)
    const form = pickNextForm(previousForms)
    const data = generateAPPrecalculusDiagnosticTest(form)
    // Shuffle options so correct answer position is randomized
    data.questions.forEach((q) => {
      const s = shuffleOptions(q.options, q.correctAnswer, q.question)
      q.options = s.options
      q.correctAnswer = s.correctIndex
    })
        setTestData(data); setCurrentIndex(0); setAnswers(new Array(data.questions.length).fill(null))
    setEliminatedOptions(Array.from({ length: data.questions.length }, () => new Set<number>())); setTimeRemaining(data.timeLimitMinutes * 60); setPhase('testing')
  }, [history])

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
    const diagnosticResults = scoreAPPrecalculusDiagnostic(testData.form, testData.questions, answersRecord)
    setResults(diagnosticResults); setPhase('results')
    try {
      await fetch('/api/ap-precalculus-diagnostic/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: `ap-precalculus-diagnostic-${testData.form}`, results: { review: { questions: testData.questions, answers, domainNames: Object.fromEntries(testData.domains.map(d => [d.id, d.name])) }, form: diagnosticResults.form, totalCorrect: diagnosticResults.totalCorrect, totalQuestions: diagnosticResults.totalQuestions, percentage: diagnosticResults.percentage, estimatedAPScore: diagnosticResults.estimatedAPScore, domains: diagnosticResults.domains, recommendedTopics: diagnosticResults.recommendedTopics }, weakAreas: diagnosticResults.weakAreas, strengths: diagnosticResults.strengths.join(', ') }),
      })
      const histRes = await fetch('/api/ap-precalculus-diagnostic/history')
      if (histRes.ok) { const histData = await histRes.json(); setHistory(histData.attempts ?? []) }

    } catch { /* silent */ }
  }, [testData, answers])

  useEffect(() => { finishRef.current = () => { void handleFinish() } }, [handleFinish])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container py-12"><div className="mx-auto max-w-2xl space-y-6"><div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" /><div className="h-64 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" /></div></div>
      </div>
    )
  }

  if (phase === 'testing' && testData) {
    const q = testData.questions[currentIndex]
    const answeredCount = answers.filter(a => a !== null).length
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container"><div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{currentIndex + 1}/{testData.questions.length}</span>
              <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"><div className="h-full rounded-full bg-cyan-500 transition-all" style={{ width: `${((currentIndex + 1) / testData.questions.length) * 100}%` }} /></div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-sm font-mono font-bold ${timeRemaining < 300 ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'}`}>⏱ {formatTime(timeRemaining)}</span>
              <DiagnosticExitButtons
                  onSaveExit={() => { if (timerRef.current) clearInterval(timerRef.current); setPhase('menu'); setTestData(null) }}
                  onDiscard={() => { if (timerRef.current) clearInterval(timerRef.current); resume.discard(); setPhase('menu'); setTestData(null) }}
                />
            </div>
          </div>
          <div className="mb-4"><span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">{testData.domains.find(d => d.id === q.domain)?.name ?? AP_PRECALCULUS_LEGACY_DOMAIN_NAMES[q.domain] ?? q.domain}</span></div>
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
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${isSelected ? 'border-cyan-500 bg-cyan-50 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-500' : 'border-gray-200 text-gray-700 hover:border-cyan-300 hover:bg-cyan-50/50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-cyan-500'}`}>
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
              <button onClick={() => setCurrentIndex(prev => prev + 1)} className="rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-cyan-700">Next →</button>
            ) : (
              <button onClick={handleFinish} className="rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg">Submit Diagnostic</button>
            )}
          </div>
        </div></div>
      </div>
    )
  }

  if (phase === 'results' && results) {
    return (
      <ApDiagnosticResults
        course={apDiagnosticCourse('ap-precalculus')}
        results={results}
        planAccess={planAccess}
        history={history}
        review={testData ? { questions: testData.questions, answers, domainNames: Object.fromEntries(testData.domains.map(d => [d.id, d.name])) } : null}
        onRetake={() => { setResults(null); setTestData(null); startTest() }}
      />
    )
  }

  const lastResult = history.length > 0 ? (history[0].results as Record<string, unknown> ?? {}) : null
  const lastRecommendedTopics = lastResult?.recommendedTopics as { slug: string; name: string; priority: string }[] | undefined

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-8 sm:py-12"><div className="mx-auto max-w-2xl">
        <Link href="/courses/ap-precalculus" className="mb-4 inline-flex items-center gap-1 text-sm text-cyan-600 hover:underline dark:text-cyan-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>AP Precalculus
        </Link>
        <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">📊 AP Precalculus Diagnostic Test</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">Assess your AP Precalculus readiness across all units and get a personalized study plan for exam day.</p>

        {lastRecommendedTopics && lastRecommendedTopics.length > 0 && (
          <div className="mb-6 rounded-2xl border-2 border-cyan-300 bg-cyan-50 p-6 dark:border-cyan-700 dark:bg-cyan-900/20">
            <h3 className="mb-1 text-base font-bold text-cyan-800 dark:text-cyan-300">🎯 Your Current Study Plan</h3>
            <p className="mb-3 text-sm text-cyan-600 dark:text-cyan-400">From your last diagnostic — review these topics, then retake the test:</p>
            <div className="space-y-2">
              {lastRecommendedTopics.map((topic, i) => (
                <Link key={topic.slug} href={`/topics/${topic.slug}/interactive`} className="flex items-center justify-between rounded-xl border border-cyan-200 bg-white px-4 py-3 transition hover:border-cyan-400 hover:shadow-sm dark:border-cyan-700 dark:bg-gray-800 group">
                  <div className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300">{i + 1}</span><span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-cyan-700 dark:group-hover:text-cyan-400">{topic.name}</span><span className={`text-xs px-2 py-0.5 rounded-full ${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>{topic.priority === 'high' ? 'High' : 'Medium'}</span></div>
                  <span className="text-cyan-500 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {lastResult && (
          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Most Recent Result</h3>
            <div className="flex items-center justify-between">
              <div><p className="text-5xl font-black text-cyan-600 dark:text-cyan-400">{String(lastResult.estimatedAPScore ?? '—')}<span className="text-lg font-normal text-gray-400">/5</span></p><p className="text-sm text-gray-500 dark:text-gray-400">Estimated AP Score</p></div>
              <div className="text-right"><p className="text-sm text-gray-600 dark:text-gray-400">{String(lastResult.totalCorrect ?? '—')}/{String(lastResult.totalQuestions ?? '—')} correct</p><p className="text-xs text-gray-400">Form {String(lastResult.form ?? '—')} · {new Date(history[0].createdAt).toLocaleDateString()}<br /><Link href={pastAttemptReviewHref(history[0])} className="mt-1 inline-block text-xs font-semibold text-purple-600 hover:underline dark:text-purple-400" onClick={(e) => e.stopPropagation()}>Review past attempt →</Link></p></div>
            </div>
          </div>
        )}

        <DiagnosticResumePrompt
          label="AP Precalculus"
          resumable={resume.resumable}
          onResume={resumeTest}
          onStartOver={() => { resume.discard(); startTest() }}
        />

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">What to Expect</h3>
          <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            {[`${apDiagnosticCourse('ap-precalculus').questionCount} questions spanning the 3 assessed AP Precalculus units`, `${apDiagnosticCourse('ap-precalculus').timeLimitMinutes} minute time limit`, 'Estimated AP score (1-5) with per-unit breakdown', 'Personalized topic recommendations', `${TOTAL_FORMS} unique forms with different questions each time`].map(item => (
              <li key={item} className="flex items-start gap-2"><svg className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{item}</li>
            ))}
          </ul>
          <button onClick={startTest} className="w-full rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl">{lastResult ? 'Take Next Diagnostic' : 'Start Diagnostic Test'}</button>
          <Link href="/ap-precalculus-score-predictor" className="mt-3 block text-center text-sm font-medium text-cyan-700 transition hover:underline dark:text-cyan-300">Prefer a quick estimate? Open the AP Precalculus Score Predictor</Link>
          <Link href="/ap-precalculus-daily-question" className="mt-1 block text-center text-sm font-medium text-cyan-700 transition hover:underline dark:text-cyan-300">Need a warm-up first? Try today&apos;s AP Precalculus question</Link>
        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-3 text-base font-semibold text-gray-800 dark:text-gray-200">🔄 How the Diagnostic Cycle Works</h3>
          <div className="space-y-3">
            {[
              { step: '1', text: 'Take the diagnostic test — questions cover the 3 AP Precalculus units on the exam' },
              { step: '2', text: 'Get your estimated AP score and topic recommendations' },
              { step: '3', text: 'Study those specific topics (lessons, practice problems)' },
              { step: '4', text: 'Retake the diagnostic — a different form with fresh questions' },
              { step: '5', text: 'Repeat until you hit a 5!' },
            ].map(item => (
              <div key={item.step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300">{item.step}</span>
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

/**
 * v1 (10 fixed forms) until this course's diagnostic v2 bank is live; v2 is
 * previewable with ?diagV2=1 outside production. See src/lib/ap-diagnostic-v2.
 */
export default function APPrecalculusDiagnosticPage() {
  return <ApDiagnosticVersionSwitch course="ap-precalculus" v1={<APPrecalculusDiagnosticPageV1 />} />
}
