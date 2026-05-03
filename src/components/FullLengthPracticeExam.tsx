'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Link from 'next/link'
import type { AccentColor } from './PracticeExam'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface MCQItem {
  type: 'mcq'
  stimulus?: string                               // optional shared stimulus (quote, scenario, chart description)
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  topic: string
}

export interface RubricPoint {
  id: string
  label: string
  description: string
}

export interface SAQItem {
  type: 'saq'
  prompt: string                                  // shared stimulus + framing
  parts: { letter: string; question: string; rubric: RubricPoint[] }[]
  topic: string
  sampleResponse?: string
}

export interface DBQItem {
  type: 'dbq'
  prompt: string
  documents: { number: number; source: string; content: string }[]
  rubric: RubricPoint[]
  sampleResponse?: string
  topic: string
}

export interface LEQItem {
  type: 'leq'
  promptOptions: { label: string; prompt: string }[]   // student picks one
  rubric: RubricPoint[]
  sampleResponses?: { promptLabel: string; response: string }[]
  topic: string
}

export type ExamItem = MCQItem | SAQItem | DBQItem | LEQItem

export interface FullExamSection {
  id: string
  name: string                          // e.g. "Section I, Part A"
  shortName: string                     // e.g. "MCQs"
  description: string
  timeLimitMinutes: number
  items: ExamItem[]
  instructions?: string
}

export interface FullLengthExamConfig {
  subject: string
  description: string
  backLink: { href: string; label: string }
  ctaLinks?: { href: string; label: string }[]
  accent: AccentColor
  sections: FullExamSection[]
  totalTimeMinutes: number
  aboutInfo?: { title: string; columns: { heading: string; items: string[] }[] }
}

/* ------------------------------------------------------------------ */
/*  Color tokens                                                       */
/* ------------------------------------------------------------------ */

const TOKENS: Record<AccentColor, { pageBg: string; gradient: string; text: string; sel: string; hover: string; badge: string }> = {
  blue:    { pageBg: 'from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-blue-600 to-indigo-600', text: 'text-blue-600 dark:text-blue-400', sel: 'border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300', hover: 'hover:border-blue-300 hover:bg-blue-50/50 dark:hover:border-blue-500', badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
  indigo:  { pageBg: 'from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-indigo-600 to-purple-600', text: 'text-indigo-600 dark:text-indigo-400', sel: 'border-indigo-500 bg-indigo-50 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300', hover: 'hover:border-indigo-300 hover:bg-indigo-50/50 dark:hover:border-indigo-500', badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' },
  emerald: { pageBg: 'from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-emerald-600 to-teal-600', text: 'text-emerald-600 dark:text-emerald-400', sel: 'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300', hover: 'hover:border-emerald-300 hover:bg-emerald-50/50 dark:hover:border-emerald-500', badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
  green:   { pageBg: 'from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-green-600 to-emerald-600', text: 'text-green-600 dark:text-green-400', sel: 'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300', hover: 'hover:border-green-300 hover:bg-green-50/50 dark:hover:border-green-500', badge: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
  rose:    { pageBg: 'from-rose-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-rose-600 to-pink-600', text: 'text-rose-600 dark:text-rose-400', sel: 'border-rose-500 bg-rose-50 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300', hover: 'hover:border-rose-300 hover:bg-rose-50/50 dark:hover:border-rose-500', badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400' },
  cyan:    { pageBg: 'from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-cyan-600 to-blue-600', text: 'text-cyan-600 dark:text-cyan-400', sel: 'border-cyan-500 bg-cyan-50 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300', hover: 'hover:border-cyan-300 hover:bg-cyan-50/50 dark:hover:border-cyan-500', badge: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400' },
  amber:   { pageBg: 'from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-amber-600 to-orange-600', text: 'text-amber-600 dark:text-amber-400', sel: 'border-amber-500 bg-amber-50 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300', hover: 'hover:border-amber-300 hover:bg-amber-50/50 dark:hover:border-amber-500', badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
  violet:  { pageBg: 'from-violet-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-violet-600 to-purple-600', text: 'text-violet-600 dark:text-violet-400', sel: 'border-violet-500 bg-violet-50 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300', hover: 'hover:border-violet-300 hover:bg-violet-50/50 dark:hover:border-violet-500', badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400' },
  red:     { pageBg: 'from-red-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-red-600 to-rose-600', text: 'text-red-600 dark:text-red-400', sel: 'border-red-500 bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300', hover: 'hover:border-red-300 hover:bg-red-50/50 dark:hover:border-red-500', badge: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
  sky:     { pageBg: 'from-sky-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-sky-600 to-blue-600', text: 'text-sky-600 dark:text-sky-400', sel: 'border-sky-500 bg-sky-50 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300', hover: 'hover:border-sky-300 hover:bg-sky-50/50 dark:hover:border-sky-500', badge: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400' },
}

function fmt(s: number) { const m = Math.floor(s / 60); const sec = s % 60; return `${m}:${sec.toString().padStart(2, '0')}` }

/* ------------------------------------------------------------------ */
/*  State shape                                                        */
/* ------------------------------------------------------------------ */

interface MCQAnswer { type: 'mcq'; selected: number | null }
interface SAQAnswer { type: 'saq'; responses: string[]; checked: Record<string, boolean>; submitted: boolean }
interface DBQAnswer { type: 'dbq'; chosenPromptIndex: number; response: string; checked: Record<string, boolean>; submitted: boolean }
interface LEQAnswer { type: 'leq'; chosenPromptIndex: number; response: string; checked: Record<string, boolean>; submitted: boolean }
type ItemAnswer = MCQAnswer | SAQAnswer | DBQAnswer | LEQAnswer

function blankAnswer(item: ExamItem): ItemAnswer {
  if (item.type === 'mcq') return { type: 'mcq', selected: null }
  if (item.type === 'saq') return { type: 'saq', responses: item.parts.map(() => ''), checked: {}, submitted: false }
  if (item.type === 'dbq') return { type: 'dbq', chosenPromptIndex: 0, response: '', checked: {}, submitted: false }
  return { type: 'leq', chosenPromptIndex: 0, response: '', checked: {}, submitted: false }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FullLengthPracticeExam(config: FullLengthExamConfig) {
  const { subject, description, backLink, ctaLinks, accent, sections, totalTimeMinutes, aboutInfo } = config
  const t = TOKENS[accent]

  type Phase = 'overview' | 'section' | 'section-complete' | 'final-results'
  const [phase, setPhase] = useState<Phase>('overview')
  const [sectionIdx, setSectionIdx] = useState(0)
  const [itemIdx, setItemIdx] = useState(0)
  const [answers, setAnswers] = useState<ItemAnswer[][]>([])
  const [time, setTime] = useState(0)

  const currentSection = sections[sectionIdx]

  // Per-section timer
  useEffect(() => {
    if (phase !== 'section') return
    const id = setInterval(() => setTime(prev => (prev <= 0 ? 0 : prev - 1)), 1000)
    return () => clearInterval(id)
  }, [phase])

  // Auto-advance when timer hits zero
  useEffect(() => {
    if (phase === 'section' && time === 0 && currentSection) {
      setPhase('section-complete')
    }
  }, [time, phase, currentSection])

  const startExam = useCallback(() => {
    setAnswers(sections.map(sec => sec.items.map(blankAnswer)))
    setSectionIdx(0)
    setItemIdx(0)
    setTime(sections[0].timeLimitMinutes * 60)
    setPhase('section')
  }, [sections])

  const finishSection = useCallback(() => setPhase('section-complete'), [])

  const goToNextSection = useCallback(() => {
    if (sectionIdx + 1 >= sections.length) {
      setPhase('final-results')
    } else {
      const next = sectionIdx + 1
      setSectionIdx(next)
      setItemIdx(0)
      setTime(sections[next].timeLimitMinutes * 60)
      setPhase('section')
    }
  }, [sectionIdx, sections])

  const updateAnswer = useCallback((updater: (a: ItemAnswer) => ItemAnswer) => {
    setAnswers(prev => {
      const copy = prev.map(arr => [...arr])
      copy[sectionIdx][itemIdx] = updater(copy[sectionIdx][itemIdx])
      return copy
    })
  }, [sectionIdx, itemIdx])

  /* -------------------- Scoring -------------------- */
  const scoring = useMemo(() => {
    if (answers.length === 0) return null
    const perSection = sections.map((sec, sIdx) => {
      let earned = 0
      let possible = 0
      sec.items.forEach((item, iIdx) => {
        const a = answers[sIdx]?.[iIdx]
        if (!a) return
        if (item.type === 'mcq') {
          possible += 1
          if (a.type === 'mcq' && a.selected === item.correctAnswer) earned += 1
        } else if (item.type === 'saq' && a.type === 'saq') {
          item.parts.forEach(p => {
            p.rubric.forEach(rp => {
              possible += 1
              if (a.checked[`${iIdx}-${p.letter}-${rp.id}`]) earned += 1
            })
          })
        } else if (item.type === 'dbq' && a.type === 'dbq') {
          item.rubric.forEach(rp => {
            possible += 1
            if (a.checked[`${iIdx}-${rp.id}`]) earned += 1
          })
        } else if (item.type === 'leq' && a.type === 'leq') {
          item.rubric.forEach(rp => {
            possible += 1
            if (a.checked[`${iIdx}-${rp.id}`]) earned += 1
          })
        }
      })
      return { name: sec.shortName, earned, possible, pct: possible ? Math.round((earned / possible) * 100) : 0 }
    })
    const earned = perSection.reduce((s, x) => s + x.earned, 0)
    const possible = perSection.reduce((s, x) => s + x.possible, 0)
    return { perSection, earned, possible, pct: possible ? Math.round((earned / possible) * 100) : 0 }
  }, [sections, answers])

  /* =================================================================== */
  /*  OVERVIEW                                                           */
  /* =================================================================== */
  if (phase === 'overview') {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${t.pageBg}`}>
        <div className="container py-8 sm:py-12"><div className="mx-auto max-w-4xl">
          <Link href={backLink.href} className={`mb-4 inline-flex items-center gap-1 text-sm ${t.text} hover:underline`}>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            {backLink.label}
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">{subject} Full Practice Exam</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{description}</p>

          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Exam Structure</h2>
            <div className="space-y-3">
              {sections.map((sec, i) => (
                <div key={sec.id} className="flex items-start gap-4 rounded-xl bg-gray-50 p-4 dark:bg-gray-900/40">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-sm font-bold text-white`}>{i + 1}</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{sec.name} — {sec.shortName}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{sec.items.length} {sec.items[0]?.type === 'mcq' ? 'questions' : 'item' + (sec.items.length > 1 ? 's' : '')} · {sec.timeLimitMinutes} minutes</p>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{sec.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <strong>Total time:</strong> {Math.floor(totalTimeMinutes / 60)}h {totalTimeMinutes % 60}m. Each section has its own timer; sections are completed back-to-back. Free-response sections use a self-grading rubric checklist after you write your response.
            </p>
            <button onClick={startExam} className={`mt-6 w-full cursor-pointer rounded-xl bg-gradient-to-r ${t.gradient} px-6 py-3 text-base font-semibold text-white shadow transition hover:scale-[1.01] hover:shadow-lg active:scale-[0.99]`}>
              Begin Full Exam
            </button>
          </div>

          {ctaLinks && ctaLinks.length > 0 && (
            <div className="mx-auto mt-8 max-w-md text-center">
              <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">More resources</p>
              <div className="flex flex-wrap justify-center gap-3">
                {ctaLinks.map(l => (
                  <Link key={l.href} href={l.href} className={`rounded-lg px-4 py-2 text-sm font-medium transition ${t.badge} hover:opacity-80`}>{l.label}</Link>
                ))}
              </div>
            </div>
          )}

          {aboutInfo && (
            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
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

  /* =================================================================== */
  /*  SECTION COMPLETE (between sections)                                */
  /* =================================================================== */
  if (phase === 'section-complete') {
    const isLast = sectionIdx + 1 >= sections.length
    return (
      <div className={`min-h-screen bg-gradient-to-br ${t.pageBg} py-8`}>
        <div className="container"><div className="mx-auto max-w-2xl text-center">
          <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-2xl text-white`}>✓</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{currentSection.name} complete</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {isLast ? 'You\'ve finished the final section. View your full exam results next.' : `Up next: ${sections[sectionIdx + 1].name} — ${sections[sectionIdx + 1].shortName} (${sections[sectionIdx + 1].timeLimitMinutes} min). Take a short break, then continue when ready.`}
          </p>
          <button onClick={goToNextSection} className={`mt-6 cursor-pointer rounded-xl bg-gradient-to-r ${t.gradient} px-8 py-3 font-semibold text-white shadow transition hover:scale-[1.02] hover:shadow-lg`}>
            {isLast ? 'See Final Results' : 'Begin Next Section'}
          </button>
        </div></div>
      </div>
    )
  }

  /* =================================================================== */
  /*  FINAL RESULTS                                                      */
  /* =================================================================== */
  if (phase === 'final-results' && scoring) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${t.pageBg} py-8`}>
        <div className="container"><div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{subject} — Full Exam Results</h2>
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">Composite</p>
              <p className={`text-4xl font-black ${t.text}`}>{scoring.pct}%</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">Points Earned</p>
              <p className="text-4xl font-black text-teal-600 dark:text-teal-400">{scoring.earned}/{scoring.possible}</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">Performance</p>
              <p className="text-4xl font-black">{scoring.pct >= 80 ? '🎉' : scoring.pct >= 60 ? '👍' : '📚'}</p>
            </div>
          </div>

          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">Section Breakdown</h3>
            <div className="space-y-2">
              {scoring.perSection.map(s => (
                <div key={s.name} className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2 dark:bg-gray-700/50">
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{s.name}</span>
                  <span className={`text-sm font-bold ${s.pct >= 70 ? 'text-green-600' : s.pct >= 50 ? 'text-amber-600' : 'text-red-500'}`}>{s.earned}/{s.possible} ({s.pct}%)</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">Free-response scores reflect your self-graded rubric checks. Be honest with yourself — that's where the learning happens.</p>

          <div className="flex gap-3">
            <Link href={backLink.href} className={`flex-1 rounded-xl bg-gradient-to-r ${t.gradient} py-3 text-center font-semibold text-white shadow transition hover:shadow-lg`}>Back to {backLink.label}</Link>
            <button onClick={startExam} className="flex-1 rounded-xl border-2 border-gray-300 py-3 font-semibold text-gray-600 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">Retake Exam</button>
          </div>
        </div></div>
      </div>
    )
  }

  /* =================================================================== */
  /*  ACTIVE SECTION                                                     */
  /* =================================================================== */
  if (phase !== 'section' || !currentSection) return null

  const item = currentSection.items[itemIdx]
  const ans = answers[sectionIdx]?.[itemIdx]
  const totalItems = currentSection.items.length
  const isLastItem = itemIdx === totalItems - 1

  // Header (shared across all item types)
  const header = (
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${t.badge}`}>{currentSection.name}</span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{itemIdx + 1}/{totalItems}</span>
        <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <div className={`h-full rounded-full bg-gradient-to-r ${t.gradient} transition-all`} style={{ width: `${((itemIdx + 1) / totalItems) * 100}%` }} />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className={`text-sm font-mono font-bold ${time < 300 ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'}`}>⏱ {fmt(time)}</span>
        <button onClick={() => { if (confirm('Exit the exam? Your progress will be lost.')) setPhase('overview') }} className="text-sm text-gray-500 hover:text-red-500 dark:text-gray-400">Exit</button>
      </div>
    </div>
  )

  const navFooter = (onSubmit?: () => void, submitLabel?: string) => (
    <div className="mt-6 flex items-center justify-between">
      <button onClick={() => setItemIdx(i => Math.max(0, i - 1))} disabled={itemIdx === 0}
        className="cursor-pointer rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
        ← Previous
      </button>
      {!isLastItem ? (
        <button onClick={() => setItemIdx(i => Math.min(totalItems - 1, i + 1))}
          className={`cursor-pointer rounded-xl bg-gradient-to-r ${t.gradient} px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg`}>
          Next →
        </button>
      ) : (
        <button onClick={onSubmit ?? finishSection}
          className={`cursor-pointer rounded-xl bg-gradient-to-r ${t.gradient} px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg`}>
          {submitLabel ?? 'Finish Section'}
        </button>
      )}
    </div>
  )

  /* ---------- MCQ rendering ---------- */
  if (item.type === 'mcq' && ans?.type === 'mcq') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container"><div className="mx-auto max-w-3xl">
          {header}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            {item.stimulus && (
              <div className="mb-4 rounded-lg border-l-4 border-gray-300 bg-gray-50 p-4 text-sm italic leading-relaxed text-gray-800 whitespace-pre-line dark:border-gray-600 dark:bg-gray-900/40 dark:text-gray-200">
                {item.stimulus}
              </div>
            )}
            <p className="mb-6 whitespace-pre-line text-sm leading-relaxed text-gray-800 dark:text-gray-200">{item.question}</p>
            <div className="space-y-2">
              {item.options.map((opt, i) => {
                const isSel = ans.selected === i
                return (
                  <button key={i} onClick={() => updateAnswer(a => a.type === 'mcq' ? { ...a, selected: i } : a)}
                    className={`w-full cursor-pointer rounded-xl border px-4 py-3 text-left text-sm transition ${isSel ? t.sel : `border-gray-200 text-gray-700 ${t.hover} dark:border-gray-600 dark:text-gray-300`}`}>
                    <span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span>{opt}
                  </button>
                )
              })}
            </div>
          </div>
          {navFooter()}
        </div></div>
      </div>
    )
  }

  /* ---------- SAQ rendering ---------- */
  if (item.type === 'saq' && ans?.type === 'saq') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container"><div className="mx-auto max-w-3xl">
          {header}
          <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Short-Answer Question {itemIdx + 1}</h3>
            <p className="whitespace-pre-line text-sm leading-relaxed text-gray-800 dark:text-gray-200">{item.prompt}</p>
          </div>
          {item.parts.map((part, pi) => (
            <div key={part.letter} className="mb-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <p className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100">({part.letter}) {part.question}</p>
              <textarea
                value={ans.responses[pi]}
                onChange={e => {
                  const newResp = [...ans.responses]
                  newResp[pi] = e.target.value
                  updateAnswer(a => a.type === 'saq' ? { ...a, responses: newResp } : a)
                }}
                disabled={ans.submitted}
                placeholder="Write your response (1–3 sentences)…"
                className="min-h-[80px] w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-800 focus:border-amber-400 focus:outline-none disabled:bg-gray-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200"
              />
              {ans.submitted && (
                <div className="mt-3 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
                  <p className="mb-2 text-xs font-semibold text-amber-900 dark:text-amber-200">Self-grade — check each rubric point your response earned:</p>
                  {part.rubric.map(rp => {
                    const key = `${itemIdx}-${part.letter}-${rp.id}`
                    return (
                      <label key={rp.id} className="mb-2 flex cursor-pointer items-start gap-2 text-xs text-gray-800 dark:text-gray-200">
                        <input type="checkbox" checked={!!ans.checked[key]} onChange={e => updateAnswer(a => a.type === 'saq' ? { ...a, checked: { ...a.checked, [key]: e.target.checked } } : a)} className="mt-0.5 cursor-pointer" />
                        <span><strong>{rp.label}:</strong> {rp.description}</span>
                      </label>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
          {!ans.submitted && (
            <button onClick={() => updateAnswer(a => a.type === 'saq' ? { ...a, submitted: true } : a)}
              className={`mb-4 w-full cursor-pointer rounded-xl bg-gradient-to-r ${t.gradient} py-3 text-sm font-semibold text-white shadow transition hover:shadow-lg`}>
              Submit Response & Reveal Rubric
            </button>
          )}
          {ans.submitted && item.sampleResponse && (
            <details className="mb-4 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
              <summary className="cursor-pointer text-sm font-semibold text-gray-800 dark:text-gray-200">View high-scoring sample response</summary>
              <p className="mt-3 whitespace-pre-line text-sm text-gray-700 dark:text-gray-300">{item.sampleResponse}</p>
            </details>
          )}
          {navFooter()}
        </div></div>
      </div>
    )
  }

  /* ---------- DBQ rendering ---------- */
  if (item.type === 'dbq' && ans?.type === 'dbq') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container"><div className="mx-auto max-w-3xl">
          {header}
          <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Document-Based Question</h3>
            <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200">{item.prompt}</p>
          </div>
          <div className="mb-4 space-y-3">
            {item.documents.map(doc => (
              <div key={doc.number} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-amber-700 dark:text-amber-400">Document {doc.number}</p>
                <p className="mb-2 text-xs italic text-gray-500 dark:text-gray-400">{doc.source}</p>
                <p className="whitespace-pre-line text-sm text-gray-800 dark:text-gray-200">{doc.content}</p>
              </div>
            ))}
          </div>
          <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">Your essay:</p>
            <textarea
              value={ans.response}
              onChange={e => updateAnswer(a => a.type === 'dbq' ? { ...a, response: e.target.value } : a)}
              disabled={ans.submitted}
              placeholder="Write your DBQ essay. Aim for a clear thesis, contextualization, evidence from at least 6 documents, evidence beyond the documents, sourcing analysis, and a complex argument."
              className="min-h-[300px] w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-800 focus:border-amber-400 focus:outline-none disabled:bg-gray-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200"
            />
            <p className="mt-1 text-xs text-gray-500">{ans.response.split(/\s+/).filter(Boolean).length} words</p>
          </div>
          {!ans.submitted && (
            <button onClick={() => updateAnswer(a => a.type === 'dbq' ? { ...a, submitted: true } : a)}
              className={`mb-4 w-full cursor-pointer rounded-xl bg-gradient-to-r ${t.gradient} py-3 text-sm font-semibold text-white shadow transition hover:shadow-lg`}>
              Submit DBQ & Reveal Rubric
            </button>
          )}
          {ans.submitted && (
            <div className="mb-4 rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
              <p className="mb-3 text-sm font-semibold text-amber-900 dark:text-amber-200">Self-grade your DBQ (7 points possible):</p>
              {item.rubric.map(rp => {
                const key = `${itemIdx}-${rp.id}`
                return (
                  <label key={rp.id} className="mb-3 flex cursor-pointer items-start gap-2 text-sm text-gray-800 dark:text-gray-200">
                    <input type="checkbox" checked={!!ans.checked[key]} onChange={e => updateAnswer(a => a.type === 'dbq' ? { ...a, checked: { ...a.checked, [key]: e.target.checked } } : a)} className="mt-1 cursor-pointer" />
                    <span><strong>{rp.label}:</strong> {rp.description}</span>
                  </label>
                )
              })}
            </div>
          )}
          {ans.submitted && item.sampleResponse && (
            <details className="mb-4 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
              <summary className="cursor-pointer text-sm font-semibold text-gray-800 dark:text-gray-200">View high-scoring sample response</summary>
              <p className="mt-3 whitespace-pre-line text-sm text-gray-700 dark:text-gray-300">{item.sampleResponse}</p>
            </details>
          )}
          {navFooter()}
        </div></div>
      </div>
    )
  }

  /* ---------- LEQ rendering ---------- */
  if (item.type === 'leq' && ans?.type === 'leq') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container"><div className="mx-auto max-w-3xl">
          {header}
          <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Long Essay Question</h3>
            <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">Choose <strong>one</strong> of the following prompts:</p>
            <div className="space-y-2">
              {item.promptOptions.map((opt, i) => (
                <button key={i}
                  onClick={() => !ans.submitted && updateAnswer(a => a.type === 'leq' ? { ...a, chosenPromptIndex: i } : a)}
                  disabled={ans.submitted}
                  className={`block w-full cursor-pointer rounded-xl border px-4 py-3 text-left text-sm transition disabled:cursor-not-allowed ${ans.chosenPromptIndex === i ? t.sel : `border-gray-200 text-gray-700 ${t.hover} dark:border-gray-600 dark:text-gray-300`}`}>
                  <span className="mr-2 font-bold">{opt.label}.</span>{opt.prompt}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">Your essay (Option {item.promptOptions[ans.chosenPromptIndex].label}):</p>
            <textarea
              value={ans.response}
              onChange={e => updateAnswer(a => a.type === 'leq' ? { ...a, response: e.target.value } : a)}
              disabled={ans.submitted}
              placeholder="Write your LEQ essay. Aim for a clear defensible thesis, contextualization, specific historical evidence, complex reasoning, and a complex argument."
              className="min-h-[300px] w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-800 focus:border-amber-400 focus:outline-none disabled:bg-gray-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200"
            />
            <p className="mt-1 text-xs text-gray-500">{ans.response.split(/\s+/).filter(Boolean).length} words</p>
          </div>
          {!ans.submitted && (
            <button onClick={() => updateAnswer(a => a.type === 'leq' ? { ...a, submitted: true } : a)}
              className={`mb-4 w-full cursor-pointer rounded-xl bg-gradient-to-r ${t.gradient} py-3 text-sm font-semibold text-white shadow transition hover:shadow-lg`}>
              Submit Essay & Reveal Rubric
            </button>
          )}
          {ans.submitted && (
            <div className="mb-4 rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
              <p className="mb-3 text-sm font-semibold text-amber-900 dark:text-amber-200">Self-grade your LEQ (6 points possible):</p>
              {item.rubric.map(rp => {
                const key = `${itemIdx}-${rp.id}`
                return (
                  <label key={rp.id} className="mb-3 flex cursor-pointer items-start gap-2 text-sm text-gray-800 dark:text-gray-200">
                    <input type="checkbox" checked={!!ans.checked[key]} onChange={e => updateAnswer(a => a.type === 'leq' ? { ...a, checked: { ...a.checked, [key]: e.target.checked } } : a)} className="mt-1 cursor-pointer" />
                    <span><strong>{rp.label}:</strong> {rp.description}</span>
                  </label>
                )
              })}
            </div>
          )}
          {ans.submitted && item.sampleResponses && item.sampleResponses.find(s => s.promptLabel === item.promptOptions[ans.chosenPromptIndex].label) && (
            <details className="mb-4 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
              <summary className="cursor-pointer text-sm font-semibold text-gray-800 dark:text-gray-200">View high-scoring sample response for Option {item.promptOptions[ans.chosenPromptIndex].label}</summary>
              <p className="mt-3 whitespace-pre-line text-sm text-gray-700 dark:text-gray-300">
                {item.sampleResponses.find(s => s.promptLabel === item.promptOptions[ans.chosenPromptIndex].label)!.response}
              </p>
            </details>
          )}
          {navFooter()}
        </div></div>
      </div>
    )
  }

  return null
}
