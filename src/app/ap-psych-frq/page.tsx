'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import {
  getApPsychFRQs,
  getConceptApplicationFRQs,
  getResearchDesignFRQs,
  generateFullExamFRQs,
  type PsychFRQ,
  type FRQRubricItem,
} from '@/data/ap-psych-frq/questions'

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

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

type Mode = 'menu' | 'practice' | 'timed' | 'results'
type Filter = 'all' | 'concept-application' | 'research-design'

export default function APPsychFRQPage() {
  const { status } = useSession()
  const router = useRouter()

  const [mode, setMode] = useState<Mode>('menu')
  const [filter, setFilter] = useState<Filter>('all')
  const [frqs, setFrqs] = useState<PsychFRQ[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [responses, setResponses] = useState<Record<string, string>>({})
  const [results, setResults] = useState<Record<string, ReturnType<typeof gradeResponse>>>({})
  const [showSample, setShowSample] = useState<Record<string, boolean>>({})
  const [showRubric, setShowRubric] = useState<Record<string, boolean>>({})
  const [timeRemaining, setTimeRemaining] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/ap-psych-frq')
    }
  }, [status, router])

  useEffect(() => {
    if (mode !== 'timed' || timeRemaining <= 0) return
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [mode, timeRemaining])

  const startPractice = useCallback((f: Filter) => {
    setFilter(f)
    const pool =
      f === 'concept-application'
        ? getConceptApplicationFRQs()
        : f === 'research-design'
          ? getResearchDesignFRQs()
          : getApPsychFRQs()
    setFrqs(pool)
    setCurrentIdx(0)
    setResponses({})
    setResults({})
    setShowSample({})
    setShowRubric({})
    setMode('practice')
  }, [])

  const startTimedExam = useCallback(() => {
    const { conceptApplication, researchDesign } = generateFullExamFRQs()
    setFrqs([conceptApplication, researchDesign])
    setCurrentIdx(0)
    setResponses({})
    setResults({})
    setShowSample({})
    setShowRubric({})
    setTimeRemaining(50 * 60)
    setMode('timed')
  }, [])

  const handleGrade = (frqId: string, partLabel: string, rubric: FRQRubricItem[]) => {
    const key = `${frqId}-${partLabel}`
    const response = responses[key] || ''
    if (!response.trim()) return
    setResults((prev) => ({ ...prev, [key]: gradeResponse(response, rubric) }))
  }

  const finishExam = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    for (const frq of frqs) {
      for (const part of frq.parts) {
        const key = `${frq.id}-${part.label}`
        if (!results[key] && responses[key]?.trim()) {
          setResults((prev) => ({
            ...prev,
            [key]: gradeResponse(responses[key], part.rubric),
          }))
        }
      }
    }
    setMode('results')
  }

  const currentFRQ = frqs[currentIdx]

  const totalPossible = frqs.reduce((s, f) => s + f.totalPoints, 0)
  const totalEarned = frqs.reduce((s, f) => {
    return (
      s +
      f.parts.reduce((ps, p) => {
        const key = `${f.id}-${p.label}`
        return ps + (results[key]?.pointsEarned || 0)
      }, 0)
    )
  }, 0)

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-500">Loading...</div>
      </div>
    )
  }

  if (mode === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link
            href="/ap-psychology"
            className="inline-flex items-center gap-1 text-sm text-pink-600 dark:text-pink-400 hover:underline mb-6"
          >
            ← Back to AP Psychology
          </Link>

          <div className="text-center mb-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-sm font-semibold text-pink-700 dark:bg-pink-900/40 dark:text-pink-300">
              📝 Free Response Practice
            </div>
            <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-3">
              AP Psychology{' '}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                FRQ Practice
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Practice with AP Psychology free-response questions. Each question includes a scoring
              rubric and sample response — the FRQ section is 33% of your AP exam score.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">
              AP Psychology FRQ Format
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Section II Structure
                </h4>
                <ul className="space-y-1">
                  <li>• 1 Concept Application FRQ (7 pts)</li>
                  <li>• 1 Research Design FRQ (7 pts)</li>
                  <li>• Total: 14 points in 50 minutes</li>
                  <li>• No calculator allowed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  What&apos;s Tested
                </h4>
                <ul className="space-y-1">
                  <li>• Applying psychological concepts to scenarios</li>
                  <li>• Designing & evaluating research studies</li>
                  <li>• Identifying variables, methods & ethics</li>
                  <li>• Using key terminology accurately</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => startPractice('concept-application')}
              className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-left hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xl">
                  🧠
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400">
                    Concept Application
                  </h3>
                  <p className="text-xs text-gray-500">7 points · ~25 min each</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Apply psychological concepts to real-world scenarios involving behavior, cognition,
                and mental health.
              </p>
            </button>

            <button
              onClick={() => startPractice('research-design')}
              className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-left hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl">
                  🔬
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    Research Design
                  </h3>
                  <p className="text-xs text-gray-500">7 points · ~25 min each</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Design experiments, identify variables, evaluate methodology, and address ethical
                considerations.
              </p>
            </button>

            <button
              onClick={() => startPractice('all')}
              className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-left hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-fuchsia-500 text-white text-xl">
                  📚
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400">
                    All FRQs
                  </h3>
                  <p className="text-xs text-gray-500">
                    {getApPsychFRQs().length} questions · Untimed
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Browse and practice all available FRQ questions at your own pace.
              </p>
            </button>

            <button
              onClick={startTimedExam}
              className="group rounded-2xl border-2 border-pink-300 dark:border-pink-600 bg-white dark:bg-gray-800 p-6 text-left hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white text-xl">
                  ⏱️
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">
                    Timed Exam Simulation
                  </h3>
                  <p className="text-xs text-gray-500">1 CA + 1 RD · 50 min</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Simulate the real AP Psychology Section II under exam conditions with a countdown
                timer.
              </p>
            </button>
          </div>

          <div className="bg-pink-50 dark:bg-pink-900/20 rounded-2xl p-6 border border-pink-200 dark:border-pink-700">
            <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-3">
              💡 FRQ Tips from AP Graders
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-pink-700 dark:text-pink-400">
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-0.5">✓</span>
                Define the term AND apply it to the specific scenario
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-0.5">✓</span>
                Use precise psychological terminology (not everyday language)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-0.5">✓</span>
                For research design, identify IV, DV, controls, and ethics
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-0.5">✓</span>
                Don&apos;t just list concepts — explain HOW they apply
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-0.5">✓</span>
                Reference specific psychologists when relevant (e.g., Bandura, Piaget)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-0.5">✓</span>
                Budget time: ~25 min per FRQ, answer every part
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  if (mode === 'results') {
    const percentage = totalPossible > 0 ? Math.round((totalEarned / totalPossible) * 100) : 0
    const estimatedScore =
      percentage >= 72 ? 5 : percentage >= 58 ? 4 : percentage >= 43 ? 3 : percentage >= 30 ? 2 : 1

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-6 text-center">
            FRQ Results
          </h1>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-8 text-center mb-6 sm:mb-8">
            <div className="text-6xl font-black mb-2">
              <span
                className={
                  percentage >= 70
                    ? 'text-green-600'
                    : percentage >= 50
                      ? 'text-yellow-600'
                      : 'text-red-600'
                }
              >
                {totalEarned}/{totalPossible}
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{percentage}% correct</p>
            <div className="inline-flex items-center gap-2 text-lg font-bold bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-4 py-2 rounded-xl">
              Estimated AP Score: {estimatedScore}/5
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {frqs.map((frq) => {
              const frqTotal = frq.parts.reduce((s, p) => {
                const key = `${frq.id}-${p.label}`
                return s + (results[key]?.pointsEarned || 0)
              }, 0)
              return (
                <div
                  key={frq.id}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded ${frq.type === 'concept-application' ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-600' : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600'}`}
                      >
                        {frq.type === 'concept-application'
                          ? 'Concept Application'
                          : 'Research Design'}
                      </span>
                      <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                        {frq.title}
                      </span>
                    </div>
                    <span
                      className={`font-bold ${frqTotal >= frq.totalPoints * 0.7 ? 'text-green-600' : frqTotal >= frq.totalPoints * 0.4 ? 'text-yellow-600' : 'text-red-600'}`}
                    >
                      {frqTotal}/{frq.totalPoints}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setMode('menu')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold hover:shadow-lg transition"
            >
              Practice More
            </button>
            <Link
              href="/ap-psychology"
              className="px-6 py-3 rounded-xl border-2 border-pink-300 dark:border-pink-600 text-pink-700 dark:text-pink-400 font-semibold hover:bg-pink-50 dark:hover:bg-pink-900/20 transition"
            >
              Back to AP Psychology
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (!currentFRQ) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No questions available.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <button
              onClick={() => setMode('menu')}
              className="text-sm text-pink-600 dark:text-pink-400 hover:underline mb-1"
            >
              ← Back to Menu
            </button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              {mode === 'timed' ? 'Timed FRQ Exam' : `FRQ Practice (${filter})`}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            {mode === 'timed' && (
              <div
                className={`font-mono text-lg font-bold px-4 py-2 rounded-xl ${timeRemaining <= 300 ? 'bg-red-100 dark:bg-red-900/30 text-red-600 animate-pulse' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'}`}
              >
                ⏱ {formatTime(timeRemaining)}
              </div>
            )}
            <span className="text-sm text-gray-500">
              {currentIdx + 1} / {frqs.length}
            </span>
          </div>
        </div>

        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all"
            style={{ width: `${((currentIdx + 1) / frqs.length) * 100}%` }}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded mr-2 ${currentFRQ.type === 'concept-application' ? 'bg-pink-800' : 'bg-purple-700'}`}
                >
                  {currentFRQ.type === 'concept-application'
                    ? 'Concept Application'
                    : 'Research Design'}
                </span>
                <h2 className="text-lg font-bold mt-1">{currentFRQ.title}</h2>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="bg-pink-700 px-3 py-1 rounded-full">
                  {currentFRQ.totalPoints} pts
                </span>
                <span className="bg-pink-700 px-3 py-1 rounded-full">
                  {currentFRQ.timeRecommendation}
                </span>
                <span className="bg-red-700 px-3 py-1 rounded-full">🚫 No Calculator</span>
              </div>
            </div>
          </div>

          <div className="px-6 py-5">
            <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-5 mb-6 border border-pink-200 dark:border-pink-700">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {currentFRQ.prompt}
                </ReactMarkdown>
              </div>
            </div>

            <div className="space-y-6">
              {currentFRQ.parts.map((part) => {
                const key = `${currentFRQ.id}-${part.label}`
                const result = results[key]
                return (
                  <div
                    key={part.label}
                    className="border border-gray-200 dark:border-gray-700 rounded-xl p-5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                          {part.label}
                        </span>
                        <span className="text-sm text-pink-600 dark:text-pink-400 font-medium">
                          ({part.maxPoints} {part.maxPoints === 1 ? 'point' : 'points'})
                        </span>
                      </div>
                      {result && (
                        <span
                          className={`font-bold text-sm ${result.pointsEarned === part.maxPoints ? 'text-green-600' : result.pointsEarned > 0 ? 'text-yellow-600' : 'text-red-600'}`}
                        >
                          {result.pointsEarned}/{part.maxPoints}
                        </span>
                      )}
                    </div>

                    <div className="mb-3 prose prose-sm max-w-none dark:prose-invert">
                      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                        {part.prompt}
                      </ReactMarkdown>
                    </div>

                    <textarea
                      value={responses[key] || ''}
                      onChange={(e) =>
                        setResponses((prev) => ({ ...prev, [key]: e.target.value }))
                      }
                      placeholder="Write your response here... Define the concept and explain how it applies to the scenario."
                      className="w-full h-36 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-y text-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      disabled={!!result}
                      maxLength={2000}
                    />

                    {!result ? (
                      <div className="mt-3">
                        <button
                          onClick={() => handleGrade(currentFRQ.id, part.label, part.rubric)}
                          className="px-4 py-2 text-sm bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors disabled:opacity-50 font-medium"
                          disabled={!(responses[key] || '').trim()}
                        >
                          Grade Part {part.label}
                        </button>
                      </div>
                    ) : (
                      <div className="mt-3 space-y-3">
                        <div className="space-y-1">
                          {result.breakdown.map((b, i) => (
                            <div
                              key={i}
                              className={`text-xs flex items-start gap-2 p-2 rounded ${b.earned ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}
                            >
                              <span>{b.earned ? '✅' : '❌'}</span>
                              <span
                                className={
                                  b.earned
                                    ? 'text-green-700 dark:text-green-400'
                                    : 'text-red-700 dark:text-red-400'
                                }
                              >
                                ({b.item.points} pt) {b.item.description}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <button
                            onClick={() =>
                              setShowRubric((prev) => ({ ...prev, [key]: !prev[key] }))
                            }
                            className="text-xs px-3 py-1.5 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 hover:bg-pink-200 transition font-medium"
                          >
                            {showRubric[key] ? 'Hide' : 'Show'} Full Rubric
                          </button>
                          <button
                            onClick={() =>
                              setShowSample((prev) => ({ ...prev, [key]: !prev[key] }))
                            }
                            className="text-xs px-3 py-1.5 rounded-lg bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 hover:bg-rose-200 transition font-medium"
                          >
                            {showSample[key] ? 'Hide' : 'Show'} Sample Answer
                          </button>
                        </div>

                        {showRubric[key] && (
                          <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4 border border-pink-200 dark:border-pink-700">
                            <h5 className="font-semibold text-pink-800 dark:text-pink-300 mb-2 text-xs">
                              Scoring Rubric:
                            </h5>
                            <ul className="space-y-1">
                              {part.rubric.map((r, i) => (
                                <li
                                  key={i}
                                  className="text-xs text-pink-700 dark:text-pink-400 flex items-start gap-2"
                                >
                                  <span className="font-bold">{r.points}pt:</span>
                                  {r.description}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {showSample[key] && (
                          <div className="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-4 border border-rose-200 dark:border-rose-700">
                            <h5 className="font-semibold text-rose-800 dark:text-rose-300 mb-2 text-xs">
                              Sample Response:
                            </h5>
                            <div className="prose prose-sm max-w-none dark:prose-invert text-xs">
                              <ReactMarkdown
                                remarkPlugins={[remarkMath]}
                                rehypePlugins={[rehypeKatex]}
                              >
                                {part.sampleAnswer}
                              </ReactMarkdown>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
            className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition font-medium disabled:opacity-50"
            disabled={currentIdx === 0}
          >
            ← Previous
          </button>

          <div className="flex gap-2">
            {frqs.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIdx(i)}
                className={`w-8 h-8 rounded-full text-xs font-bold transition ${
                  i === currentIdx
                    ? 'bg-pink-600 text-white'
                    : frqs[i].parts.every((p) => results[`${frqs[i].id}-${p.label}`])
                      ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-700'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {currentIdx < frqs.length - 1 ? (
            <button
              onClick={() => setCurrentIdx(currentIdx + 1)}
              className="px-5 py-2.5 rounded-xl bg-pink-600 text-white hover:bg-pink-700 transition font-medium"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={finishExam}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:shadow-lg transition font-medium"
            >
              Finish & Score
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
