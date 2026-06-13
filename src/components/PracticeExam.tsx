'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { InArticleAd } from '@/components/ad-banner'
import ShareScoreCard from '@/components/ShareScoreCard'

/* ------------------------------------------------------------------ */
/*  Public types                                                       */
/* ------------------------------------------------------------------ */

export interface PracticeQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  topic: string
}

export interface PracticeSectionDef {
  id: string
  name: string
  description: string
  questionCount: number
  timeLimitMinutes: number
}

export type AccentColor =
  | 'blue' | 'indigo' | 'emerald' | 'green' | 'rose'
  | 'cyan' | 'amber' | 'violet' | 'red' | 'sky'

export interface PracticeExamConfig {
  subject: string
  description: string
  backLink: { href: string; label: string }
  ctaLinks?: { href: string; label: string }[]
  accent: AccentColor
  sections: PracticeSectionDef[]
  getQuestions: (sectionId: string) => Promise<PracticeQuestion[]>
  aboutInfo?: { title: string; columns: { heading: string; items: string[] }[] }
}

/* ------------------------------------------------------------------ */
/*  Static colour map — every class literal so Tailwind detects them   */
/* ------------------------------------------------------------------ */

const T: Record<AccentColor, {
  pageBg: string; gradient: string; text: string
  sel: string; hover: string; badge: string; cta: string
}> = {
  blue: {
    pageBg: 'from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    gradient: 'from-blue-600 to-indigo-600',
    text: 'text-blue-600 dark:text-blue-400',
    sel: 'border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-500',
    hover: 'hover:border-blue-300 hover:bg-blue-50/50 dark:hover:border-blue-500',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    cta: 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400',
  },
  indigo: {
    pageBg: 'from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    gradient: 'from-indigo-600 to-purple-600',
    text: 'text-indigo-600 dark:text-indigo-400',
    sel: 'border-indigo-500 bg-indigo-50 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-500',
    hover: 'hover:border-indigo-300 hover:bg-indigo-50/50 dark:hover:border-indigo-500',
    badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
    cta: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400',
  },
  emerald: {
    pageBg: 'from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    gradient: 'from-emerald-600 to-teal-600',
    text: 'text-emerald-600 dark:text-emerald-400',
    sel: 'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-500',
    hover: 'hover:border-emerald-300 hover:bg-emerald-50/50 dark:hover:border-emerald-500',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    cta: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400',
  },
  green: {
    pageBg: 'from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    gradient: 'from-green-600 to-emerald-600',
    text: 'text-green-600 dark:text-green-400',
    sel: 'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:border-green-500',
    hover: 'hover:border-green-300 hover:bg-green-50/50 dark:hover:border-green-500',
    badge: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    cta: 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400',
  },
  rose: {
    pageBg: 'from-rose-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    gradient: 'from-rose-600 to-pink-600',
    text: 'text-rose-600 dark:text-rose-400',
    sel: 'border-rose-500 bg-rose-50 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300 dark:border-rose-500',
    hover: 'hover:border-rose-300 hover:bg-rose-50/50 dark:hover:border-rose-500',
    badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
    cta: 'bg-rose-100 text-rose-700 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-400',
  },
  cyan: {
    pageBg: 'from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    gradient: 'from-cyan-600 to-blue-600',
    text: 'text-cyan-600 dark:text-cyan-400',
    sel: 'border-cyan-500 bg-cyan-50 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-500',
    hover: 'hover:border-cyan-300 hover:bg-cyan-50/50 dark:hover:border-cyan-500',
    badge: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
    cta: 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-400',
  },
  amber: {
    pageBg: 'from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    gradient: 'from-amber-600 to-orange-600',
    text: 'text-amber-600 dark:text-amber-400',
    sel: 'border-amber-500 bg-amber-50 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-500',
    hover: 'hover:border-amber-300 hover:bg-amber-50/50 dark:hover:border-amber-500',
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    cta: 'bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400',
  },
  violet: {
    pageBg: 'from-violet-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    gradient: 'from-violet-600 to-purple-600',
    text: 'text-violet-600 dark:text-violet-400',
    sel: 'border-violet-500 bg-violet-50 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-500',
    hover: 'hover:border-violet-300 hover:bg-violet-50/50 dark:hover:border-violet-500',
    badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
    cta: 'bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-violet-900/30 dark:text-violet-400',
  },
  red: {
    pageBg: 'from-red-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    gradient: 'from-red-600 to-rose-600',
    text: 'text-red-600 dark:text-red-400',
    sel: 'border-red-500 bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300 dark:border-red-500',
    hover: 'hover:border-red-300 hover:bg-red-50/50 dark:hover:border-red-500',
    badge: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    cta: 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400',
  },
  sky: {
    pageBg: 'from-sky-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    gradient: 'from-sky-600 to-blue-600',
    text: 'text-sky-600 dark:text-sky-400',
    sel: 'border-sky-500 bg-sky-50 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-500',
    hover: 'hover:border-sky-300 hover:bg-sky-50/50 dark:hover:border-sky-500',
    badge: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400',
    cta: 'bg-sky-100 text-sky-700 hover:bg-sky-200 dark:bg-sky-900/30 dark:text-sky-400',
  },
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatTime(s: number) {
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${m}:${sec.toString().padStart(2, '0')}`
}

function formatTopicTitle(slug: string): string {
  return slug
    .replace(/^(mcat-|sat-|act-|ap-|calcab-|calcbc-)/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function PracticeExam(config: PracticeExamConfig) {
  const { subject, description, backLink, ctaLinks, accent, sections, getQuestions, aboutInfo } = config
  const t = T[accent]

  type Phase = 'select' | 'test' | 'results'
  const [phase, setPhase] = useState<Phase>('select')
  const [activeSection, setActiveSection] = useState<PracticeSectionDef | null>(null)
  const [questions, setQuestions] = useState<PracticeQuestion[]>([])
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [time, setTime] = useState(0)
  const [generating, setGenerating] = useState(false)

  // Timer
  useEffect(() => {
    if (phase !== 'test') return
    const id = setInterval(() => setTime(prev => {
      if (prev <= 0) { clearInterval(id); return 0 }
      return prev - 1
    }), 1000)
    return () => clearInterval(id)
  }, [phase])

  const startTest = useCallback(async (sectionId: string) => {
    const sec = sections.find(s => s.id === sectionId)
    if (!sec) return
    setGenerating(true)
    try {
      const qs = await getQuestions(sectionId)
      setActiveSection(sec)
      setQuestions(qs)
      setAnswers(new Array(qs.length).fill(null))
      setIdx(0)
      setTime(sec.timeLimitMinutes * 60)
      setPhase('test')
    } finally {
      setGenerating(false)
    }
  }, [sections, getQuestions])

  // Scoring
  const score = useCallback(() => {
    let correct = 0
    const topicMap = new Map<string, { correct: number; total: number }>()
    questions.forEach((q, i) => {
      if (!topicMap.has(q.topic)) topicMap.set(q.topic, { correct: 0, total: 0 })
      const entry = topicMap.get(q.topic)!
      entry.total++
      if (answers[i] === q.correctAnswer) { correct++; entry.correct++ }
    })
    const total = questions.length
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0
    return { correct, total, pct, byTopic: Array.from(topicMap.entries()).map(([slug, d]) => ({ slug, ...d })) }
  }, [questions, answers])

  const handleBack = useCallback(() => {
    setPhase('select')
    setActiveSection(null)
    setQuestions([])
  }, [])

  /* ---- Results view ---- */
  if (phase === 'results') {
    const r = score()
    return (
      <div className={`min-h-screen bg-gradient-to-br ${t.pageBg} py-8`}>
        <div className="container"><div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{activeSection?.name} — Results</h2>
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 text-center dark:border-gray-700 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">Score</p>
              <p className={`text-4xl font-black ${t.text}`}>{r.pct}%</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 text-center dark:border-gray-700 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">Correct</p>
              <p className="text-4xl font-black text-teal-600 dark:text-teal-400">{r.correct}/{r.total}</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 text-center dark:border-gray-700 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">Performance</p>
              <p className="text-4xl font-black">{r.pct >= 80 ? '🎉' : r.pct >= 60 ? '👍' : '📚'}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{r.pct >= 80 ? 'Excellent' : r.pct >= 60 ? 'Good' : 'Needs Review'}</p>
            </div>
          </div>

          {/* Share your score */}
          {r.total > 0 && (
            <ShareScoreCard score={r.correct} total={r.total} subject={`${subject}${activeSection?.name ? ` ${activeSection.name}` : ''}`} type="exam" />
          )}

          {/* Ad — on the results screen, after the score summary */}
          <InArticleAd />

          {/* Topic breakdown */}
          {r.byTopic.length > 1 && (
            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">Topic Breakdown</h3>
              <div className="space-y-2">
                {r.byTopic.sort((a, b) => (a.total > 0 ? a.correct / a.total : 0) - (b.total > 0 ? b.correct / b.total : 0)).map(tp => {
                  const pct = tp.total > 0 ? Math.round((tp.correct / tp.total) * 100) : 0
                  return (
                    <div key={tp.slug} className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2 dark:bg-gray-700/50">
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{formatTopicTitle(tp.slug)}</span>
                      <span className={`text-sm font-bold ${pct >= 70 ? 'text-green-600' : 'text-red-500'}`}>{tp.correct}/{tp.total} ({pct}%)</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Question review */}
          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Question Review</h3>
            <div className="space-y-3">
              {questions.map((q, i) => {
                const ok = answers[i] === q.correctAnswer
                return (
                  <div key={i} className={`rounded-xl border p-4 ${ok ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20' : 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20'}`}>
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Q{i + 1}: {q.question.slice(0, 120)}{q.question.length > 120 ? '…' : ''}</p>
                      <span className={`shrink-0 ml-2 text-sm font-bold ${ok ? 'text-green-600' : 'text-red-600'}`}>{ok ? '✓' : '✗'}</span>
                    </div>
                    {!ok && <p className="text-xs text-gray-600 dark:text-gray-400">Your answer: {answers[i] !== null ? q.options[answers[i]!] : 'Skipped'} · Correct: {q.options[q.correctAnswer]}</p>}
                    {q.explanation && <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{q.explanation}</p>}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={handleBack} className={`flex-1 rounded-xl bg-gradient-to-r ${t.gradient} py-3 font-semibold text-white shadow transition hover:shadow-lg`}>Back to Sections</button>
            <button onClick={() => activeSection && startTest(activeSection.id)} className="flex-1 rounded-xl border-2 border-gray-300 py-3 font-semibold text-gray-600 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">Retake</button>
          </div>
        </div></div>
      </div>
    )
  }

  /* ---- Active test view ---- */
  if (phase === 'test' && questions.length > 0) {
    const q = questions[idx]
    const answered = answers.filter(a => a !== null).length
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container"><div className="mx-auto max-w-3xl">
          {/* Header bar */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{idx + 1}/{questions.length}</span>
              <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div className={`h-full rounded-full bg-gradient-to-r ${t.gradient} transition-all`} style={{ width: `${((idx + 1) / questions.length) * 100}%` }} />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-sm font-mono font-bold ${time < 300 ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'}`}>⏱ {formatTime(time)}</span>
              <button onClick={handleBack} className="text-sm text-gray-500 hover:text-red-500 dark:text-gray-400">Exit</button>
            </div>
          </div>

          <div className="mb-4"><span className={`rounded-full px-3 py-1 text-xs font-semibold ${t.badge}`}>{activeSection?.name}</span></div>

          {/* Question card */}
          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <p className="mb-6 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, i) => {
                const isSel = answers[idx] === i
                return (
                  <button key={i} onClick={() => { const u = [...answers]; u[idx] = i; setAnswers(u) }}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition break-words ${isSel ? t.sel : `border-gray-200 text-gray-700 ${t.hover} dark:border-gray-600 dark:text-gray-300`}`}>
                    <span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span>{opt}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button onClick={() => setIdx(p => Math.max(0, p - 1))} disabled={idx === 0}
              className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:opacity-40 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
              ← Previous
            </button>
            <span className="text-xs text-gray-500 dark:text-gray-400">{answered}/{questions.length} answered</span>
            {idx < questions.length - 1 ? (
              <button onClick={() => setIdx(p => Math.min(questions.length - 1, p + 1))}
                className={`rounded-xl bg-gradient-to-r ${t.gradient} px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg`}>
                Next →
              </button>
            ) : (
              <button onClick={() => setPhase('results')}
                className={`rounded-xl bg-gradient-to-r ${t.gradient} px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg`}>
                Submit Test
              </button>
            )}
          </div>
        </div></div>
      </div>
    )
  }

  /* ---- Section selection view ---- */
  return (
    <div className={`min-h-screen bg-gradient-to-br ${t.pageBg}`}>
      <div className="container py-8 sm:py-12"><div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <Link href={backLink.href} className={`mb-4 inline-flex items-center gap-1 text-sm ${t.text} hover:underline`}>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            {backLink.label}
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">{subject} Practice Exam</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{description}</p>
        </div>

        {generating && (
          <div className="flex justify-center py-20"><div className={`h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-current ${t.text}`} /></div>
        )}

        {!generating && (
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">{sections.length === 1 ? 'Start Practice' : 'Choose a Section'}</h2>
            <div className={`grid gap-4 ${sections.length > 1 ? 'sm:grid-cols-2' : ''}`}>
              {sections.map(sec => (
                <div key={sec.id} className="rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                  <div className={`rounded-t-2xl bg-gradient-to-r ${t.gradient} p-4 text-white`}>
                    <h3 className="text-lg font-bold">{sec.name}</h3>
                    <p className="text-sm opacity-80">{sec.questionCount} questions · {sec.timeLimitMinutes} min</p>
                  </div>
                  <div className="p-5">
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{sec.description}</p>
                    <button onClick={() => startTest(sec.id)}
                      className={`w-full cursor-pointer rounded-xl bg-gradient-to-r ${t.gradient} px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:scale-[1.02] hover:shadow-lg active:scale-[0.99]`}>
                      Start Section
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {ctaLinks && ctaLinks.length > 0 && (
          <div className="mx-auto mt-6 max-w-md text-center">
            <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">More resources</p>
            <div className="flex flex-wrap justify-center gap-3">
              {ctaLinks.map(l => (
                <Link key={l.href} href={l.href} className={`rounded-lg px-4 py-2 text-sm font-medium transition ${t.cta}`}>{l.label}</Link>
              ))}
            </div>
          </div>
        )}

        {aboutInfo && (
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">{aboutInfo.title}</h3>
            <div className="grid gap-4 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-400">
              {aboutInfo.columns.map(col => (
                <div key={col.heading}>
                  <h4 className="mb-1 font-medium text-gray-800 dark:text-gray-200">{col.heading}</h4>
                  <ul className="space-y-1">{col.items.map((it, i) => <li key={i}>• {it}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div></div>
    </div>
  )
}
