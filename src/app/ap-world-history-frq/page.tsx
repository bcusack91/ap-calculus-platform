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
  getApWorldHistoryFRQs,
  generateFullExamFRQs,
  type WorldHistoryFRQ,
  type FRQRubricItem,
} from '@/data/ap-world-history-frq/questions'
import { ToolPageSeoBody } from '@/components/ToolPageSeoBody'

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
type Filter = 'all' | 'long' | 'short'

function APWorldHistoryFRQPageInner() {
  const { status } = useSession()
  const router = useRouter()

  const [mode, setMode] = useState<Mode>('menu')
  const [filter, setFilter] = useState<Filter>('all')
  const [frqs, setFrqs] = useState<WorldHistoryFRQ[]>([])
  // FRQ pool from the content store (DB) with a static fallback (#10).
  const [allFrqs, setAllFrqs] = useState<WorldHistoryFRQ[]>(() => getApWorldHistoryFRQs())
  const [currentIdx, setCurrentIdx] = useState(0)
  const [responses, setResponses] = useState<Record<string, string>>({})
  const [results, setResults] = useState<Record<string, ReturnType<typeof gradeResponse>>>({})
  const [showSample, setShowSample] = useState<Record<string, boolean>>({})
  const [showRubric, setShowRubric] = useState<Record<string, boolean>>({})
  const [timeRemaining, setTimeRemaining] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/ap-world-history-frq')
    }
  }, [status, router])

  useEffect(() => {
    let active = true
    fetch('/api/frq/ap-world-history')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => { if (active && Array.isArray(data?.frqs) && data.frqs.length > 0) setAllFrqs(data.frqs) })
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
    const pool = f === 'long' ? allFrqs.filter(q => q.type === 'long') : f === 'short' ? allFrqs.filter(q => q.type === 'short') : allFrqs
    setFrqs(pool)
    setCurrentIdx(0)
    setResponses({})
    setResults({})
    setShowSample({})
    setShowRubric({})
    setMode('practice')
  }, [allFrqs])

  const startTimedExam = useCallback(() => {
    const { long, short } = generateFullExamFRQs(allFrqs)
    setFrqs([...long, ...short])
    setCurrentIdx(0)
    setResponses({})
    setResults({})
    setShowSample({})
    setShowRubric({})
    setTimeRemaining(100 * 60)
    setMode('timed')
  }, [allFrqs])

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
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link
            href="/ap-world-history"
            className="inline-flex items-center gap-1 text-sm text-amber-600 dark:text-amber-400 hover:underline mb-6"
          >
            &larr; Back to AP World History
          </Link>

          <div className="text-center mb-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
              📝 Free Response Practice
            </div>
            <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-3">
              AP World History{' '}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                FRQ Practice
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Practice with AP World History free-response questions. Each question includes a scoring
              rubric and sample response.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">AP World History FRQ Format</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Section II Structure</h4>
                <ul className="space-y-1">
                  <li>• FRQs in 100 minutes</li>
                  <li>• Long and short format questions</li>
                  <li>• Rubric-based scoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">What&apos;s Tested</h4>
                <ul className="space-y-1">
                  <li>• Applying AP World History concepts</li>
                  <li>• Analyzing data and evidence</li>
                  <li>• Making evidence-based arguments</li>
                  <li>• Connecting ideas across units</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <button onClick={() => startPractice('long')} className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-left hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xl">📄</div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400">Long FRQs</h3>
                  <p className="text-xs text-gray-500">7 points · ~25 min each</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Multi-part problems covering key topics in AP World History.</p>
            </button>

            <button onClick={() => startPractice('short')} className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-left hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl">📝</div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">Short FRQs</h3>
                  <p className="text-xs text-gray-500">4 points · ~12 min each</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Focused questions on specific topics in AP World History.</p>
            </button>

            <button onClick={() => startPractice('all')} className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-left hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xl">📚</div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">All FRQs</h3>
                  <p className="text-xs text-gray-500">{allFrqs.length} questions · Untimed</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Browse and practice all available FRQ questions at your own pace.</p>
            </button>

            <button onClick={startTimedExam} className="group rounded-2xl border-2 border-amber-300 dark:border-amber-600 bg-white dark:bg-gray-800 p-6 text-left hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white text-xl">⏱️</div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">Timed Exam Simulation</h3>
                  <p className="text-xs text-gray-500">100 min</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Simulate the real AP World History Section II under exam conditions with a countdown timer.</p>
            </button>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 border border-amber-200 dark:border-amber-700">
            <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3">💡 FRQ Tips</h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-amber-700 dark:text-amber-400">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">✓</span>
                Use specific AP World History vocabulary and terminology
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">✓</span>
                Define key terms before applying them
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">✓</span>
                Reference specific examples, data, or cases
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">✓</span>
                For explanation questions, state the mechanism not just the outcome
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">✓</span>
                Connect your answer to broader themes in AP World History
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">✓</span>
                Budget your time according to point values
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  if (mode === 'results') {
    const percentage = totalPossible > 0 ? Math.round((totalEarned / totalPossible) * 100) : 0
    const estimatedScore = percentage >= 72 ? 5 : percentage >= 58 ? 4 : percentage >= 43 ? 3 : percentage >= 30 ? 2 : 1

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-6 text-center">FRQ Results</h1>
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-8 text-center mb-6 sm:mb-8">
            <div className="text-6xl font-black mb-2">
              <span className={percentage >= 70 ? 'text-green-600' : percentage >= 50 ? 'text-yellow-600' : 'text-red-600'}>{totalEarned}/{totalPossible}</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{percentage}% correct</p>
            <div className="inline-flex items-center gap-2 text-lg font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-4 py-2 rounded-xl">Estimated AP Score: {estimatedScore}/5</div>
          </div>
          <div className="space-y-4 mb-8">
            {frqs.map((frq) => {
              const frqTotal = frq.parts.reduce((s, p) => { const key = `${frq.id}-${p.label}`; return s + (results[key]?.pointsEarned || 0) }, 0)
              return (
                <div key={frq.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${frq.type === 'long' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600' : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600'}`}>{frq.type === 'long' ? 'Long FRQ' : 'Short FRQ'}</span>
                      <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">{frq.title}</span>
                    </div>
                    <span className={`font-bold ${frqTotal >= frq.totalPoints * 0.7 ? 'text-green-600' : frqTotal >= frq.totalPoints * 0.4 ? 'text-yellow-600' : 'text-red-600'}`}>{frqTotal}/{frq.totalPoints}</span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setMode('menu')} className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold hover:shadow-lg transition">Practice More</button>
            <Link href="/ap-world-history" className="px-6 py-3 rounded-xl border-2 border-amber-300 dark:border-amber-600 text-amber-700 dark:text-amber-400 font-semibold hover:bg-amber-50 dark:hover:bg-amber-900/20 transition">Back to AP World History</Link>
          </div>
        </div>
      </div>
    )
  }

  if (!currentFRQ) return <div className="min-h-screen flex items-center justify-center"><p className="text-gray-500">No questions available.</p></div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <button onClick={() => setMode('menu')} className="text-sm text-amber-600 dark:text-amber-400 hover:underline mb-1">&larr; Back to Menu</button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">{mode === 'timed' ? 'Timed FRQ Exam' : `FRQ Practice (${filter})`}</h1>
          </div>
          <div className="flex items-center gap-4">
            {mode === 'timed' && (
              <div className={`font-mono text-lg font-bold px-4 py-2 rounded-xl ${timeRemaining <= 300 ? 'bg-red-100 dark:bg-red-900/30 text-red-600 animate-pulse' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'}`}>⏱ {formatTime(timeRemaining)}</div>
            )}
            <span className="text-sm text-gray-500">{currentIdx + 1} / {frqs.length}</span>
          </div>
        </div>

        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all" style={{ width: `${((currentIdx + 1) / frqs.length) * 100}%` }} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded mr-2 ${currentFRQ.type === 'long' ? 'bg-amber-800' : 'bg-purple-700'}`}>{currentFRQ.type === 'long' ? 'Long FRQ' : 'Short FRQ'}</span>
                <h2 className="text-lg font-bold mt-1">{currentFRQ.title}</h2>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="bg-amber-700 px-3 py-1 rounded-full">{currentFRQ.totalPoints} pts</span>
                <span className="bg-amber-700 px-3 py-1 rounded-full">{currentFRQ.timeRecommendation}</span>
              </div>
            </div>
          </div>

          <div className="px-6 py-5">
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5 mb-6 border border-amber-200 dark:border-amber-700">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{escapeCurrencyMath(currentFRQ.prompt)}</ReactMarkdown>
              </div>
            </div>

            <div className="space-y-6">
              {currentFRQ.parts.map((part) => {
                const key = `${currentFRQ.id}-${part.label}`
                const result = results[key]
                return (
                  <div key={part.label} className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">{part.label}</span>
                        <span className="text-sm text-amber-600 dark:text-amber-400 font-medium">({part.maxPoints} {part.maxPoints === 1 ? 'point' : 'points'})</span>
                      </div>
                      {result && <span className={`font-bold text-sm ${result.pointsEarned === part.maxPoints ? 'text-green-600' : result.pointsEarned > 0 ? 'text-yellow-600' : 'text-red-600'}`}>{result.pointsEarned}/{part.maxPoints}</span>}
                    </div>
                    <div className="mb-3 prose prose-sm max-w-none dark:prose-invert"><ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{escapeCurrencyMath(part.prompt)}</ReactMarkdown></div>
                    <textarea value={responses[key] || ''} onChange={(ev) => setResponses((prev) => ({ ...prev, [key]: ev.target.value }))} placeholder="Write your response here..." className="w-full h-36 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-y text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500" disabled={!!result} maxLength={2000} />
                    {!result ? (
                      <div className="mt-3"><button onClick={() => handleGrade(currentFRQ.id, part.label, part.rubric)} className="px-4 py-2 text-sm bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors disabled:opacity-50 font-medium" disabled={!(responses[key] || '').trim()}>Grade Part {part.label}</button></div>
                    ) : (
                      <div className="mt-3 space-y-3">
                        <div className="space-y-1">
                          {result.breakdown.map((b, i) => (
                            <div key={i} className={`text-xs flex items-start gap-2 p-2 rounded ${b.earned ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
                              <span>{b.earned ? '✅' : '❌'}</span>
                              <span className={b.earned ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>({b.item.points} pt) {b.item.description}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <button onClick={() => setShowRubric((prev) => ({ ...prev, [key]: !prev[key] }))} className="text-xs px-3 py-1.5 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 hover:bg-amber-200 transition font-medium">{showRubric[key] ? 'Hide' : 'Show'} Full Rubric</button>
                          <button onClick={() => setShowSample((prev) => ({ ...prev, [key]: !prev[key] }))} className="text-xs px-3 py-1.5 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 hover:bg-orange-200 transition font-medium">{showSample[key] ? 'Hide' : 'Show'} Sample Answer</button>
                        </div>
                        {showRubric[key] && (
                          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-700">
                            <h5 className="font-semibold text-amber-800 dark:text-amber-300 mb-2 text-xs">Scoring Rubric:</h5>
                            <ul className="space-y-1">{part.rubric.map((r, i) => <li key={i} className="text-xs text-amber-700 dark:text-amber-400 flex items-start gap-2"><span className="font-bold">{r.points}pt:</span>{r.description}</li>)}</ul>
                          </div>
                        )}
                        {showSample[key] && (
                          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-700">
                            <h5 className="font-semibold text-orange-800 dark:text-orange-300 mb-2 text-xs">Sample Response:</h5>
                            <div className="prose prose-sm max-w-none dark:prose-invert text-xs"><ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{escapeCurrencyMath(part.sampleAnswer)}</ReactMarkdown></div>
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
          <button onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))} className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition font-medium disabled:opacity-50" disabled={currentIdx === 0}>&larr; Previous</button>
          <div className="flex gap-2">
            {frqs.map((_, i) => (
              <button key={i} onClick={() => setCurrentIdx(i)} className={`w-8 h-8 rounded-full text-xs font-bold transition ${i === currentIdx ? 'bg-amber-600 text-white' : frqs[i].parts.every((p) => results[`${frqs[i].id}-${p.label}`]) ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}>{i + 1}</button>
            ))}
          </div>
          {currentIdx < frqs.length - 1 ? (
            <button onClick={() => setCurrentIdx(currentIdx + 1)} className="px-5 py-2.5 rounded-xl bg-amber-600 text-white hover:bg-amber-700 transition font-medium">Next &rarr;</button>
          ) : (
            <button onClick={finishExam} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:shadow-lg transition font-medium">Finish &amp; Score</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function APWorldHistoryFRQPage() {
  return (
    <>
      <APWorldHistoryFRQPageInner />
      <ToolPageSeoBody subjectName="AP World History: Modern" />
    </>
  )
}
