'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { escapeCurrencyMath } from '@/lib/escape-currency-math'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import {
  getStatsFRQs,
  generateFullExamFRQs,
  STATS_FRQ_TYPES,
  type StatsFRQ,
  type StatsFRQType,
  type FRQRubricItem,
} from '@/data/ap-stats-frq/questions'
import { ToolPageSeoBody } from '@/components/ToolPageSeoBody'
import { useRecordFrqAttempt } from '@/lib/use-frq-attempt'
import { signUpUrl } from '@/lib/auth-redirect'

/**
 * Word-start keyword match, so 'tea' does not match "instead" and 'war' does not match
 * "toward"; prefix stems still match. A keyword that starts with punctuation or a space
 * is matched as a plain substring.
 */
function keywordMatches(text: string, keyword: string): boolean {
  const kw = keyword.toLowerCase()
  if (!/^[a-z0-9]/.test(kw)) return text.includes(kw)
  const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  // A letter-initial keyword may follow a digit ("8mg/l" matches "mg/l"), but
  // never another letter, so "tea" does not score inside "instead".
  const before = /^[a-z]/.test(kw) ? '[^a-z]' : '[^a-z0-9]'
  return new RegExp('(^|' + before + ')' + escaped).test(text)
}

function gradeResponse(
  response: string,
  rubric: FRQRubricItem[]
): { pointsEarned: number; breakdown: { earned: boolean; item: FRQRubricItem }[] } {
  const lower = response.toLowerCase().replace(/\s+/g, ' ')
  const breakdown = rubric.map((item) => {
    const earned = item.keywords.some((kw) => keywordMatches(lower, kw))
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
type Filter = 'all' | StatsFRQType

const TYPE_META = Object.fromEntries(STATS_FRQ_TYPES.map((t) => [t.type, t])) as Record<StatsFRQType, (typeof STATS_FRQ_TYPES)[number]>

const TYPE_STYLE: Record<StatsFRQType, { icon: string; gradient: string; badge: string; headerBadge: string; blurb: string }> = {
  'practices-1-2': { icon: '🧪', gradient: 'from-teal-500 to-cyan-500', badge: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600', headerBadge: 'bg-teal-800', blurb: 'Formulate an investigative question and plan the data collection: sampling methods, bias, and experimental design.' },
  'practices-3-4': { icon: '📊', gradient: 'from-purple-500 to-pink-500', badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600', headerBadge: 'bg-purple-700', blurb: 'Analyze data and interpret results: distributions, outliers, z-scores, and least-squares regression.' },
  inference: { icon: '🎯', gradient: 'from-sky-500 to-blue-500', badge: 'bg-sky-100 dark:bg-sky-900/30 text-sky-600', headerBadge: 'bg-sky-700', blurb: 'A complete significance test or confidence interval: variables, procedure, conditions, calculations, and a conclusion in context.' },
  'practices-2-3-4': { icon: '🧩', gradient: 'from-amber-500 to-orange-500', badge: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600', headerBadge: 'bg-amber-700', blurb: 'Several content areas in one question: probability, the binomial and normal models, and sampling distributions.' },
}

/** Only current-format items (the four 2027 types); an older content-store copy falls back to the static pool. */
function currentFormat(frqs: unknown): StatsFRQ[] {
  if (!Array.isArray(frqs)) return []
  return frqs.filter((q): q is StatsFRQ => typeof q?.type === 'string' && q.type in TYPE_META)
}

function APStatsFRQPageInner() {
  const { status } = useSession()
  const router = useRouter()

  const [mode, setMode] = useState<Mode>('menu')
  const [filter, setFilter] = useState<Filter>('all')
  const [frqs, setFrqs] = useState<StatsFRQ[]>([])
  // FRQ pool from the content store (DB) with a static fallback (#10). Practice uses DB; timed exam stays static.
  const [allFrqs, setAllFrqs] = useState<StatsFRQ[]>(() => getStatsFRQs())
  const [currentIdx, setCurrentIdx] = useState(0)
  const [responses, setResponses] = useState<Record<string, string>>({})
  const [results, setResults] = useState<Record<string, ReturnType<typeof gradeResponse>>>({})
  const [showSample, setShowSample] = useState<Record<string, boolean>>({})
  const [showRubric, setShowRubric] = useState<Record<string, boolean>>({})
  const [timeRemaining, setTimeRemaining] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(signUpUrl({ callbackUrl: '/ap-stats-frq', reason: 'frq', label: 'AP Statistics' }))
    }
  }, [status, router])

  useEffect(() => {
    let active = true
    fetch('/api/frq/ap-stats')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        const fresh = currentFormat(data?.frqs)
        if (active && fresh.length > 0) setAllFrqs(fresh)
      })
      .catch(() => {})
    return () => { active = false }
  }, [])

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
    const pool = f === 'all' ? allFrqs : allFrqs.filter((q) => q.type === f)
    setFrqs(pool)
    setCurrentIdx(0)
    setResponses({})
    setResults({})
    setShowSample({})
    setShowRubric({})
    setMode('practice')
  }, [allFrqs])

  const startTimedExam = useCallback(() => {
    const { questions, totalMinutes } = generateFullExamFRQs()
    setFrqs(questions)
    setCurrentIdx(0)
    setResponses({})
    setResults({})
    setShowSample({})
    setShowRubric({})
    setTimeRemaining(totalMinutes * 60)
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

  // Persist the session so it reaches the teacher's student report.
  useRecordFrqAttempt('ap-stats', mode, totalEarned, totalPossible, frqs.length)

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-500">Loading...</div>
      </div>
    )
  }

  if (mode === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link
            href="/ap-statistics"
            className="inline-flex items-center gap-1 text-sm text-teal-600 dark:text-teal-400 hover:underline mb-6"
          >
            ← Back to AP Statistics
          </Link>

          <div className="text-center mb-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-semibold text-teal-700 dark:bg-teal-900/40 dark:text-teal-300">
              📝 Free Response Practice
            </div>
            <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-3">
              AP Statistics{' '}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                FRQ Practice
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Practice with AP Statistics free-response questions. Each question includes a scoring
              rubric and sample response — the FRQ section is 50% of your AP exam score.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">AP Statistics FRQ Format</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Section II Structure
                </h4>
                <ul className="space-y-1">
                  <li>• 4 free-response questions (10 pts each, 12.5% of the score each)</li>
                  <li>• Q1 Practices 1 &amp; 2; Q2 Practices 3 &amp; 4; Q3 Inference; Q4 Practices 2, 3 &amp; 4 (no investigative task from May 2027)</li>
                  <li>• Total: 40 points in 90 minutes</li>
                  <li>• Graphing calculator + built-in Desmos</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  What&apos;s Tested
                </h4>
                <ul className="space-y-1">
                  <li>• Investigative questions, sampling & experimental design</li>
                  <li>• Describing distributions & least-squares regression</li>
                  <li>• Probability, the binomial & normal models, sampling distributions</li>
                  <li>• Inference for proportions & means: intervals and tests</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {STATS_FRQ_TYPES.map((t) => (
              <button
                key={t.type}
                onClick={() => startPractice(t.type)}
                className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-left hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r ${TYPE_STYLE[t.type].gradient} text-white text-xl`}>
                    {TYPE_STYLE[t.type].icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      {t.short}: {t.label}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {t.points} points · ~{t.minutes} min · {allFrqs.filter((q) => q.type === t.type).length} questions
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{TYPE_STYLE[t.type].blurb}</p>
              </button>
            ))}

            <button
              onClick={() => startPractice('all')}
              className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-left hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-xl">
                  📚
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    All FRQs
                  </h3>
                  <p className="text-xs text-gray-500">
                    {allFrqs.length} questions · Untimed
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Browse and practice all available FRQ questions at your own pace.
              </p>
            </button>

            <button
              onClick={startTimedExam}
              className="group rounded-2xl border-2 border-teal-300 dark:border-teal-600 bg-white dark:bg-gray-800 p-6 text-left hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white text-xl">
                  ⏱️
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">
                    Timed Exam Simulation
                  </h3>
                  <p className="text-xs text-gray-500">Q1–Q4, 1 of each type · 40 points · 90 min</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Simulate the real AP Statistics Section II under exam conditions with a countdown timer.
              </p>
            </button>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-6 border border-teal-200 dark:border-teal-700">
            <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-3">
              💡 FRQ Tips from AP Graders
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-teal-700 dark:text-teal-400">
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                Always name the test or interval procedure you are using
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                Check and state conditions (random, normal, independence) before computing
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                Use context in your conclusions — refer to the specific variables and scenario
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                On Q3, identify and classify the variables, then name the procedure before you compute
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                A valid investigative question names the variables, the parameter with a direction, and the population
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                Budget: about 22 minutes per question (4 questions, 10 points each)
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
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-6 text-center">
            FRQ Results
          </h1>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-8 text-center mb-6 sm:mb-8">
            <div className="text-6xl font-black mb-2">
              <span
                className={
                  percentage >= 70
                    ? 'text-teal-600'
                    : percentage >= 50
                      ? 'text-yellow-600'
                      : 'text-red-600'
                }
              >
                {totalEarned}/{totalPossible}
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{percentage}% correct</p>
            <div className="inline-flex items-center gap-2 text-lg font-bold bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-xl">
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
                        className={`text-xs font-bold px-2 py-0.5 rounded ${TYPE_STYLE[frq.type]?.badge ?? ''}`}
                      >
                        {TYPE_META[frq.type]?.short ?? 'FRQ'}
                      </span>
                      <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                        {frq.title}
                      </span>
                    </div>
                    <span
                      className={`font-bold ${frqTotal >= frq.totalPoints * 0.7 ? 'text-teal-600' : frqTotal >= frq.totalPoints * 0.4 ? 'text-yellow-600' : 'text-red-600'}`}
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
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold hover:shadow-lg transition"
            >
              Practice More
            </button>
            <Link
              href="/ap-statistics"
              className="px-6 py-3 rounded-xl border-2 border-teal-300 dark:border-teal-600 text-teal-700 dark:text-teal-400 font-semibold hover:bg-teal-50 dark:hover:bg-teal-900/20 transition"
            >
              Back to AP Statistics
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <button
              onClick={() => setMode('menu')}
              className="text-sm text-teal-600 dark:text-teal-400 hover:underline mb-1"
            >
              ← Back to Menu
            </button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              {mode === 'timed' ? 'Timed FRQ Exam' : `FRQ Practice: ${filter === 'all' ? 'All FRQs' : TYPE_META[filter].label}`}
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
            className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all"
            style={{ width: `${((currentIdx + 1) / frqs.length) * 100}%` }}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded mr-2 ${TYPE_STYLE[currentFRQ.type]?.headerBadge ?? ''}`}
                >
                  {TYPE_META[currentFRQ.type] ? `${TYPE_META[currentFRQ.type].short} · ${TYPE_META[currentFRQ.type].label}` : 'FRQ'}
                </span>
                <span className="text-xs text-teal-200">Unit {currentFRQ.unit}</span>
                <h2 className="text-lg font-bold mt-1">{currentFRQ.title}</h2>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="bg-teal-700 px-3 py-1 rounded-full">
                  {currentFRQ.totalPoints} pts
                </span>
                <span className="bg-teal-700 px-3 py-1 rounded-full">
                  {currentFRQ.timeRecommendation}
                </span>
                <span
                  className={`px-3 py-1 rounded-full ${currentFRQ.calculatorAllowed ? 'bg-teal-700' : 'bg-red-700'}`}
                >
                  {currentFRQ.calculatorAllowed ? '🖩 Calculator OK' : '🚫 No Calculator'}
                </span>
              </div>
            </div>
          </div>

          <div className="px-6 py-5">
            {currentFRQ.dataTableHtml && (
              <div
                className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-5 mb-4 border border-gray-200 dark:border-gray-600 overflow-x-auto prose prose-sm max-w-none dark:prose-invert [&_table]:w-full [&_th]:bg-teal-100 [&_th]:dark:bg-teal-900/30 [&_th]:px-3 [&_th]:py-1.5 [&_td]:px-3 [&_td]:py-1.5 [&_td]:border [&_th]:border [&_td]:border-gray-300 [&_th]:border-gray-300 [&_td]:dark:border-gray-600 [&_th]:dark:border-gray-600 [&_pre]:bg-gray-100 [&_pre]:dark:bg-gray-800 [&_pre]:p-3 [&_pre]:rounded-lg [&_pre]:text-xs"
                dangerouslySetInnerHTML={{ __html: currentFRQ.dataTableHtml }}
              />
            )}

            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-5 mb-6 border border-teal-200 dark:border-teal-700">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {escapeCurrencyMath(currentFRQ.prompt)}
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
                        <span className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                          {part.label}
                        </span>
                        <span className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                          ({part.maxPoints} {part.maxPoints === 1 ? 'point' : 'points'})
                        </span>
                      </div>
                      {result && (
                        <span
                          className={`font-bold text-sm ${result.pointsEarned === part.maxPoints ? 'text-teal-600' : result.pointsEarned > 0 ? 'text-yellow-600' : 'text-red-600'}`}
                        >
                          {result.pointsEarned}/{part.maxPoints}
                        </span>
                      )}
                    </div>

                    <div className="mb-3 prose prose-sm max-w-none dark:prose-invert">
                      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                        {escapeCurrencyMath(part.prompt)}
                      </ReactMarkdown>
                    </div>

                    <textarea
                      value={responses[key] || ''}
                      onChange={(e) =>
                        setResponses((prev) => ({ ...prev, [key]: e.target.value }))
                      }
                      placeholder="Write your response here... Name procedures, check conditions, and use context for full credit."
                      className="w-full h-36 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-y text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      disabled={!!result}
                      maxLength={2000}
                    />

                    {!result ? (
                      <div className="mt-3">
                        <button
                          onClick={() => handleGrade(currentFRQ.id, part.label, part.rubric)}
                          className="px-4 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 font-medium"
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
                              className={`text-xs flex items-start gap-2 p-2 rounded ${b.earned ? 'bg-teal-50 dark:bg-teal-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}
                            >
                              <span>{b.earned ? '✅' : '❌'}</span>
                              <span
                                className={
                                  b.earned
                                    ? 'text-teal-700 dark:text-teal-400'
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
                            className="text-xs px-3 py-1.5 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 hover:bg-teal-200 transition font-medium"
                          >
                            {showRubric[key] ? 'Hide' : 'Show'} Full Rubric
                          </button>
                          <button
                            onClick={() =>
                              setShowSample((prev) => ({ ...prev, [key]: !prev[key] }))
                            }
                            className="text-xs px-3 py-1.5 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-200 transition font-medium"
                          >
                            {showSample[key] ? 'Hide' : 'Show'} Sample Answer
                          </button>
                        </div>

                        {showRubric[key] && (
                          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4 border border-teal-200 dark:border-teal-700">
                            <h5 className="font-semibold text-teal-800 dark:text-teal-300 mb-2 text-xs">
                              Scoring Rubric:
                            </h5>
                            <ul className="space-y-1">
                              {part.rubric.map((r, i) => (
                                <li
                                  key={i}
                                  className="text-xs text-teal-700 dark:text-teal-400 flex items-start gap-2"
                                >
                                  <span className="font-bold">{r.points}pt:</span>
                                  {r.description}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {showSample[key] && (
                          <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4 border border-cyan-200 dark:border-cyan-700">
                            <h5 className="font-semibold text-cyan-800 dark:text-cyan-300 mb-2 text-xs">
                              Sample Response:
                            </h5>
                            <div className="prose prose-sm max-w-none dark:prose-invert text-xs">
                              <ReactMarkdown
                                remarkPlugins={[remarkMath]}
                                rehypePlugins={[rehypeKatex]}
                              >
                                {escapeCurrencyMath(part.sampleAnswer)}
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
                    ? 'bg-teal-600 text-white'
                    : frqs[i].parts.every((p) => results[`${frqs[i].id}-${p.label}`])
                      ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-700'
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
              className="px-5 py-2.5 rounded-xl bg-teal-600 text-white hover:bg-teal-700 transition font-medium"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={finishExam}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:shadow-lg transition font-medium"
            >
              Finish & Score
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function APStatsFRQPage() {
  return (
    <>
      <APStatsFRQPageInner />
      <ToolPageSeoBody subjectName="AP Statistics" />
    </>
  )
}
