'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { generateFullExamFRQs, type ChemFRQ, type FRQRubricItem } from '@/data/ap-chem-frq/questions'
import { generateExitQuiz } from '@/data/exit-quizzes'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface MCQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  topic: string
}

type Phase = 'menu' | 'section1' | 'break' | 'section2' | 'results'

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatTime(seconds: number): string {
  const hrs = Math.floor(seconds / 3600)
  const mins = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  if (hrs > 0) return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

function gradeResponse(
  response: string,
  rubric: FRQRubricItem[]
): { pointsEarned: number; breakdown: { earned: boolean; item: FRQRubricItem }[] } {
  const lower = response.toLowerCase().replace(/\s+/g, ' ')
  const breakdown = rubric.map((item) => {
    const earned = item.keywords.some((kw) => lower.includes(kw.toLowerCase()))
    return { earned, item }
  })
  return {
    pointsEarned: breakdown.filter((b) => b.earned).reduce((s, b) => s + b.item.points, 0),
    breakdown,
  }
}

const TOPIC_SLUGS = [
  'atomic-structure-periodicity-apchem', 'chemical-bonding-apchem', 'intermolecular-forces-apchem',
  'stoichiometry-apchem', 'gas-laws-apchem', 'solutions-mixtures-apchem',
  'thermodynamics-apchem', 'enthalpy-hess-law-apchem', 'entropy-gibbs-apchem',
  'kinetics-rate-laws-apchem', 'reaction-mechanisms-apchem', 'equilibrium-apchem',
  'le-chatelier-principle-apchem', 'acids-bases-apchem', 'buffers-titrations-apchem',
  'electrochemistry-apchem', 'oxidation-reduction-apchem', 'nuclear-chemistry-apchem',
  'spectroscopy-analysis-apchem', 'molecular-geometry-apchem',
  'lewis-structures-apchem', 'periodic-trends-apchem',
  'colligative-properties-apchem', 'calorimetry-apchem',
  'solubility-equilibrium-apchem', 'chemical-equations-apchem',
]

async function loadMCQuestions(): Promise<MCQuestion[]> {
  const all: MCQuestion[] = []
  for (const slug of TOPIC_SLUGS) {
    try {
      const pool = await generateExitQuiz(slug, 4)
      all.push(...pool.map(q => ({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctIndex ?? 0,
        explanation: q.explanation,
        topic: slug,
      })))
    } catch { /* skip unavailable */ }
  }
  return all.sort(() => Math.random() - 0.5).slice(0, 60)
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function APChemFullExamPage() {
  const { status } = useSession()
  const router = useRouter()

  const [phase, setPhase] = useState<Phase>('menu')
  const [loading, setLoading] = useState(false)

  // Section 1: MC
  const [mcQuestions, setMcQuestions] = useState<MCQuestion[]>([])
  const [mcAnswers, setMcAnswers] = useState<(number | null)[]>([])
  const [mcCurrentIdx, setMcCurrentIdx] = useState(0)

  // Section 2: FRQ
  const [frqs, setFrqs] = useState<ChemFRQ[]>([])
  const [frqCurrentIdx, setFrqCurrentIdx] = useState(0)
  const [frqResponses, setFrqResponses] = useState<Record<string, string>>({})
  const [frqResults, setFrqResults] = useState<Record<string, ReturnType<typeof gradeResponse>>>({})

  // Timer
  const [timeRemaining, setTimeRemaining] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/ap-chem-full-exam')
    }
  }, [status, router])

  // Timer
  useEffect(() => {
    if ((phase !== 'section1' && phase !== 'section2') || timeRemaining <= 0) return
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [phase, timeRemaining])

  const startExam = useCallback(async () => {
    setLoading(true)
    try {
      const questions = await loadMCQuestions()
      setMcQuestions(questions)
      setMcAnswers(new Array(questions.length).fill(null))
      setMcCurrentIdx(0)

      const { long, short } = generateFullExamFRQs()
      setFrqs([...long, ...short])
      setFrqCurrentIdx(0)
      setFrqResponses({})
      setFrqResults({})

      setTimeRemaining(90 * 60) // 90 minutes for Section I
      setPhase('section1')
    } finally {
      setLoading(false)
    }
  }, [])

  const finishSection1 = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    setPhase('break')
  }

  const startSection2 = () => {
    setTimeRemaining(105 * 60) // 105 minutes for Section II
    setPhase('section2')
  }

  const finishExam = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    // Auto-grade FRQ parts
    for (const frq of frqs) {
      for (const part of frq.parts) {
        const key = `${frq.id}-${part.label}`
        if (!frqResults[key] && frqResponses[key]?.trim()) {
          setFrqResults((prev) => ({
            ...prev,
            [key]: gradeResponse(frqResponses[key], part.rubric),
          }))
        }
      }
    }
    setPhase('results')
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400">Loading exam questions...</p>
        </div>
      </div>
    )
  }

  /* ── Menu ─────────────────────────────────────────────── */
  if (phase === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link href="/ap-chemistry" className="inline-flex items-center gap-1 text-sm text-teal-600 dark:text-teal-400 hover:underline mb-6">
            ← Back to AP Chemistry
          </Link>

          <div className="text-center mb-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-700 dark:bg-red-900/40 dark:text-red-300">
              🎯 Full-Length Exam
            </div>
            <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-3">
              AP Chemistry{' '}
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Full Practice Exam
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Simulate the complete AP Chemistry exam with both sections timed exactly like the real test.
              Allow 3 hours and 15 minutes for the full experience.
            </p>
          </div>

          {/* Exam structure */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Exam Structure</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">I</div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Section I: Multiple Choice</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">60 questions · 90 minutes · 50% of score</p>
                  <p className="text-xs text-gray-500 mt-1">Calculator allowed · No penalty for guessing</p>
                </div>
              </div>

              <div className="flex items-center justify-center text-gray-400">
                <span className="text-sm">10-minute break</span>
              </div>

              <div className="flex items-start gap-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white font-bold">II</div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Section II: Free Response</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">7 questions (3 long + 4 short) · 105 minutes · 50% of score</p>
                  <p className="text-xs text-gray-500 mt-1">Calculator allowed · Show all work</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700">
              <p className="text-sm text-amber-800 dark:text-amber-300 font-medium">⚠️ Exam Tips</p>
              <ul className="mt-2 text-xs text-amber-700 dark:text-amber-400 space-y-1">
                <li>• Find a quiet space with no distractions</li>
                <li>• Have a calculator, periodic table, and scratch paper ready</li>
                <li>• Don&apos;t leave MC questions blank — there&apos;s no penalty for guessing</li>
                <li>• On FRQs, show all work for partial credit</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={startExam}
              className="px-10 py-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg font-bold shadow-lg hover:shadow-xl transition"
            >
              Begin Full Exam
            </button>
            <p className="text-xs text-gray-500 mt-3">Total estimated time: 3 hours 15 minutes</p>
          </div>
        </div>
      </div>
    )
  }

  /* ── Section I: Multiple Choice ─────────────────────── */
  if (phase === 'section1') {
    const currentQ = mcQuestions[mcCurrentIdx]
    if (!currentQ) return null
    const answered = mcAnswers.filter(a => a !== null).length

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Section I: Multiple Choice</h2>
              <p className="text-sm text-gray-500">{answered}/{mcQuestions.length} answered</p>
            </div>
            <div className={`font-mono text-lg font-bold px-4 py-2 rounded-xl ${timeRemaining <= 300 ? 'bg-red-100 dark:bg-red-900/30 text-red-600 animate-pulse' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'}`}>
              ⏱ {formatTime(timeRemaining)}
            </div>
          </div>

          {/* Progress */}
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-6 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all" style={{ width: `${((mcCurrentIdx + 1) / mcQuestions.length) * 100}%` }} />
          </div>

          {/* Question */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">Question {mcCurrentIdx + 1}</span>
              <span className="text-xs text-gray-400">of {mcQuestions.length}</span>
            </div>

            <div className="prose prose-sm max-w-none dark:prose-invert mb-6">
              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{currentQ.question}</ReactMarkdown>
            </div>

            <div className="space-y-3">
              {currentQ.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const newAnswers = [...mcAnswers]
                    newAnswers[mcCurrentIdx] = i
                    setMcAnswers(newAnswers)
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl border-2 transition text-sm ${
                    mcAnswers[mcCurrentIdx] === i
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:bg-blue-50/50 dark:hover:border-blue-500'
                  }`}
                >
                  <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} components={{ p: ({ children }) => <span>{children}</span> }}>{opt}</ReactMarkdown>
                </button>
              ))}
            </div>
          </div>

          {/* Question grid */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 mb-6">
            <p className="text-xs text-gray-500 mb-2">Question Navigator</p>
            <div className="flex flex-wrap gap-1.5">
              {mcQuestions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMcCurrentIdx(i)}
                  className={`w-7 h-7 rounded text-xs font-bold transition ${
                    i === mcCurrentIdx
                      ? 'bg-blue-600 text-white'
                      : mcAnswers[i] !== null
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-500'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setMcCurrentIdx(Math.max(0, mcCurrentIdx - 1))}
              className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition font-medium disabled:opacity-50"
              disabled={mcCurrentIdx === 0}
            >
              ← Previous
            </button>
            {mcCurrentIdx < mcQuestions.length - 1 ? (
              <button onClick={() => setMcCurrentIdx(mcCurrentIdx + 1)} className="px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition font-medium">
                Next →
              </button>
            ) : (
              <button onClick={finishSection1} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg transition font-medium">
                Finish Section I →
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  /* ── Break ──────────────────────────────────────────── */
  if (phase === 'break') {
    const mcCorrect = mcAnswers.filter((a, i) => a === mcQuestions[i]?.correctAnswer).length
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-8">
            <div className="text-5xl mb-4">☕</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Section I Complete!</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              You answered {mcAnswers.filter(a => a !== null).length}/{mcQuestions.length} questions.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6 text-sm text-blue-700 dark:text-blue-300">
              MC Score: {mcCorrect}/{mcQuestions.length} ({Math.round((mcCorrect / mcQuestions.length) * 100)}%)
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Take a 10-minute break like the real exam, then continue to Section II (Free Response).
            </p>
            <button
              onClick={startSection2}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold hover:shadow-lg transition"
            >
              Start Section II: Free Response →
            </button>
          </div>
        </div>
      </div>
    )
  }

  /* ── Section II: FRQ ────────────────────────────────── */
  if (phase === 'section2') {
    const currentFRQ = frqs[frqCurrentIdx]
    if (!currentFRQ) return null

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Section II: Free Response</h2>
              <p className="text-sm text-gray-500">Question {frqCurrentIdx + 1} of {frqs.length}</p>
            </div>
            <div className={`font-mono text-lg font-bold px-4 py-2 rounded-xl ${timeRemaining <= 300 ? 'bg-red-100 dark:bg-red-900/30 text-red-600 animate-pulse' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'}`}>
              ⏱ {formatTime(timeRemaining)}
            </div>
          </div>

          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-6 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all" style={{ width: `${((frqCurrentIdx + 1) / frqs.length) * 100}%` }} />
          </div>

          {/* FRQ Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded mr-2 ${currentFRQ.type === 'long' ? 'bg-indigo-800' : 'bg-purple-700'}`}>
                    {currentFRQ.type === 'long' ? 'Long FRQ' : 'Short FRQ'}
                  </span>
                  <h3 className="text-lg font-bold mt-1">{currentFRQ.title}</h3>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="bg-indigo-700 px-3 py-1 rounded-full">{currentFRQ.totalPoints} pts</span>
                  <span className="bg-indigo-700 px-3 py-1 rounded-full">{currentFRQ.timeRecommendation}</span>
                </div>
              </div>
            </div>

            <div className="px-6 py-5">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 mb-6 border border-blue-200 dark:border-blue-700">
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{currentFRQ.prompt}</ReactMarkdown>
                </div>
              </div>

              <div className="space-y-6">
                {currentFRQ.parts.map((part) => {
                  const key = `${currentFRQ.id}-${part.label}`
                  return (
                    <div key={part.label} className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">{part.label}</span>
                        <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">({part.maxPoints} pts)</span>
                      </div>
                      <div className="mb-3 prose prose-sm max-w-none dark:prose-invert">
                        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{part.prompt}</ReactMarkdown>
                      </div>
                      <textarea
                        value={frqResponses[key] || ''}
                        onChange={(e) => setFrqResponses((prev) => ({ ...prev, [key]: e.target.value }))}
                        placeholder="Write your response here... Show all work for full credit."
                        className="w-full h-32 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-y text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        maxLength={2000}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setFrqCurrentIdx(Math.max(0, frqCurrentIdx - 1))}
              className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition font-medium disabled:opacity-50"
              disabled={frqCurrentIdx === 0}
            >
              ← Previous
            </button>
            <div className="flex gap-2">
              {frqs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setFrqCurrentIdx(i)}
                  className={`w-8 h-8 rounded-full text-xs font-bold transition ${i === frqCurrentIdx ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            {frqCurrentIdx < frqs.length - 1 ? (
              <button onClick={() => setFrqCurrentIdx(frqCurrentIdx + 1)} className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition font-medium">
                Next →
              </button>
            ) : (
              <button onClick={finishExam} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg transition font-medium">
                Finish Exam →
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  /* ── Results ──────────────────────────────────────────── */
  const mcCorrect = mcAnswers.filter((a, i) => a === mcQuestions[i]?.correctAnswer).length
  const mcPercent = mcQuestions.length > 0 ? Math.round((mcCorrect / mcQuestions.length) * 100) : 0

  const frqTotalPossible = frqs.reduce((s, f) => s + f.totalPoints, 0)
  const frqTotalEarned = frqs.reduce((s, f) => {
    return s + f.parts.reduce((ps, p) => {
      const key = `${f.id}-${p.label}`
      return ps + (frqResults[key]?.pointsEarned || 0)
    }, 0)
  }, 0)
  const frqPercent = frqTotalPossible > 0 ? Math.round((frqTotalEarned / frqTotalPossible) * 100) : 0

  // Composite: 50% MC + 50% FRQ
  const composite = Math.round(mcPercent * 0.5 + frqPercent * 0.5)
  const estimatedScore = composite >= 72 ? 5 : composite >= 58 ? 4 : composite >= 43 ? 3 : composite >= 30 ? 2 : 1

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-8 text-center">
          Full Exam Results
        </h1>

        {/* Score Circle */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-8 text-center mb-6 sm:mb-8">
          <div className="text-6xl font-black mb-2">
            <span className={estimatedScore >= 4 ? 'text-green-600' : estimatedScore >= 3 ? 'text-yellow-600' : 'text-red-600'}>
              {estimatedScore}
            </span>
            <span className="text-2xl text-gray-400">/5</span>
          </div>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
            Estimated AP Score
          </p>
          <p className="text-sm text-gray-500">Composite: {composite}%</p>
        </div>

        {/* Section breakdown */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-3">Section I: Multiple Choice</h3>
            <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">{mcCorrect}/{mcQuestions.length}</div>
            <p className="text-sm text-gray-500">{mcPercent}% · 50% of exam weight</p>
            <div className="mt-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: `${mcPercent}%` }} />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="font-bold text-indigo-600 dark:text-indigo-400 mb-3">Section II: Free Response</h3>
            <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">{frqTotalEarned}/{frqTotalPossible}</div>
            <p className="text-sm text-gray-500">{frqPercent}% · 50% of exam weight</p>
            <div className="mt-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${frqPercent}%` }} />
            </div>
          </div>
        </div>

        {/* MC Review */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Multiple Choice Review</h3>
          <div className="grid grid-cols-10 gap-1.5">
            {mcQuestions.map((q, i) => {
              const correct = mcAnswers[i] === q.correctAnswer
              const unanswered = mcAnswers[i] === null
              return (
                <div
                  key={i}
                  className={`w-full aspect-square rounded flex items-center justify-center text-xs font-bold ${
                    unanswered ? 'bg-gray-100 dark:bg-gray-700 text-gray-400' :
                    correct ? 'bg-green-100 dark:bg-green-900/30 text-green-700' :
                    'bg-red-100 dark:bg-red-900/30 text-red-700'
                  }`}
                  title={`Q${i + 1}: ${unanswered ? 'Unanswered' : correct ? 'Correct' : 'Incorrect'}`}
                >
                  {i + 1}
                </div>
              )
            })}
          </div>
          <div className="mt-3 flex gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-100 dark:bg-green-900/30" />Correct</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-red-100 dark:bg-red-900/30" />Incorrect</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-gray-100 dark:bg-gray-700" />Unanswered</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/ap-chem-frq" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold hover:shadow-lg transition">
            Practice More FRQs
          </Link>
          <Link href="/ap-chemistry" className="px-6 py-3 rounded-xl border-2 border-teal-300 dark:border-teal-600 text-teal-700 dark:text-teal-400 font-semibold hover:bg-teal-50 dark:hover:bg-teal-900/20 transition">
            Back to AP Chemistry
          </Link>
        </div>
      </div>
    </div>
  )
}
