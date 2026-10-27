'use client'

/**
 * Full-length practice exam runner: every AP course (and a few non-AP math
 * courses, PSAT and ACT practice) share it. Exam-screen tools follow the MCAT
 * and SAT runners: a question navigator and review screen per section, flags,
 * strike-through on options, a highlighter on stimuli, Alt-key shortcuts, the
 * reference sheet and calculator the real exam provides, and separately timed
 * no-calculator / calculator parts where the real exam has them (AP Calculus,
 * Precalculus). The sitting autosaves to localStorage, so a refresh or coming
 * back resumes it; each stage's clock is an absolute deadline that keeps
 * running while the student is away. Pure logic: src/lib/ap-practice-runner.ts.
 */

import { ToolPageSeoBody } from '@/components/ToolPageSeoBody'
import { ToolBreadcrumb } from '@/components/ToolBreadcrumb'
import { toolLearningResourceJsonLd } from '@/lib/jsonld'
import { useState, useEffect, useCallback, useMemo, useRef, type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { trackPracticeTestComplete } from '@/lib/analytics'
import { Ban, BookOpen, ClipboardCheck, Flag, LayoutGrid, LogOut } from 'lucide-react'
import type { AccentColor } from './PracticeExam'
import { renderRichText } from '@/lib/render-rich-text'
import { shuffleOptions } from '@/lib/shuffle-options'
import { psatTotal, projectionRange as psatProjectionRange } from '@/lib/psat-scoring'
import { actSectionScaled, actComposite, projectionRange as actProjectionRange } from '@/lib/act-scoring'
import { preloadKatex } from '@/lib/katex-lazy'
import { apCompositePercent, estimateApScore } from '@/lib/ap-scoring'
import { estimateAfqtFromPercentCorrect } from '@/lib/asvab-scoring'
import { InArticleAd } from '@/components/ad-banner'
import ShareScoreCard from '@/components/ShareScoreCard'
import FocusTrapDialog from '@/components/FocusTrapDialog'
import DesmosCalculatorLink from '@/components/DesmosCalculatorLink'
import ReferenceSheetModal from '@/components/ReferenceSheetModal'
import PassageHighlighter from '@/components/exam/PassageHighlighter'
import QuestionNavigator, { type NavigatorItem } from '@/components/exam/QuestionNavigator'
import ExamReviewScreen from '@/components/exam/ExamReviewScreen'
import { ExamShortcutsHelp, examShortcutFor } from '@/components/exam/exam-shortcuts'
import type { HighlightRange } from '@/lib/passage-highlights'
import {
  apExamTools,
  apProgressKey,
  blankAnswer,
  buildStages,
  examSignature,
  frqSubmission,
  hashText,
  highlightKey,
  isAnswered,
  parseApExamProgress,
  partHeading,
  restoreSitting,
  rubricKeys,
  stageName,
  type ApExamPhase,
  type ApExamProgress,
  type ApFrqSubmission,
  type ItemAnswer,
} from '@/lib/ap-practice-runner'
import { apPracticeSittingId } from '@/lib/ap-practice-forms'
import 'katex/dist/katex.min.css'

/**
 * Exam content (questions, options, stimuli, rubrics) is LaTeX- and
 * markdown-table-bearing across the STEM courses — render it through the same
 * rich-text pipeline as ExitQuiz instead of as plain text. Re-renders once
 * KaTeX's lazy chunk arrives.
 */
function RichText({
  text,
  className,
  inline = false,
}: {
  text: string
  className?: string
  inline?: boolean
}) {
  const [katexReady, setKatexReady] = useState(false)
  useEffect(() => {
    let mounted = true
    preloadKatex().then(() => { if (mounted) setKatexReady(true) })
    return () => { mounted = false }
  }, [])
  const html = useMemo(
    () => renderRichText(text),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- katexReady forces re-render once KaTeX loads
    [text, katexReady],
  )
  const Tag = inline ? 'span' : 'div'
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
}

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
  /** Why each option is right or wrong, aligned to the authored `options` order (shown on the review page). */
  optionExplanations?: string[]
  topic: string
  /** The course's canonical lesson slug (course-includes topic) this item drills; informational. */
  lesson?: string
  /** CED topic code, e.g. "1.7" or "3.10"; informational. */
  ced?: string
  /**
   * Trusted authored markup (a generated inline SVG: a circuit, a machine, a
   * geometry figure, an Assembling Objects box) drawn above the question.
   * Data files only, never user input. Options may also be single SVG strings.
   */
  figureHtml?: string
}

export interface RubricPoint {
  id: string
  label: string
  description: string
}

export interface SAQItem {
  type: 'saq'
  prompt?: string                                 // shared stimulus + framing (preferred)
  stimulus?: string                               // legacy alias for prompt
  parts: {
    letter?: string                               // optional; auto 'a','b','c'... when omitted
    question?: string                             // preferred field for the part question
    prompt?: string                               // legacy alias for question
    rubric: string | RubricPoint[]                // string = single self-grade summary; array = itemized rubric
  }[]
  topic: string
  sampleResponse?: string
  /**
   * Trusted authored markup (an inline SVG graph or an HTML table) rendered above
   * the prompt, the way the FRQ banks' `dataTableHtml` is; for the periodic-modeling
   * FRQ whose Part A reads five points off a sinusoid. Data files only, never user input.
   */
  figureHtml?: string
  /** Canonical lesson slug and CED topic code; informational. */
  lesson?: string
  ced?: string
}

/** Helpers for tolerating both data shapes in SAQ items. */
function saqPrompt(item: SAQItem): string {
  return item.prompt ?? item.stimulus ?? ''
}
function partLetter(part: SAQItem['parts'][number], pi: number): string {
  return part.letter ?? String.fromCharCode(97 + pi) // 'a', 'b', 'c', ...
}
function partQuestion(part: SAQItem['parts'][number]): string {
  return part.question ?? part.prompt ?? ''
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
  title?: string                                  // heading; defaults to "Long Essay Question"
  promptOptions: { label: string; prompt: string }[]   // student picks one (a single entry = no choice)
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
  /**
   * Percent of the AP composite this section carries on the real exam (e.g.
   * Calc MCQ 50 / FRQ 50; APUSH MCQ 40 / SAQ 20 / DBQ 25 / LEQ 15). When every
   * section has one, the composite % and estimated AP score are section-weighted
   * (apCompositePercent in @/lib/ap-scoring); otherwise they are raw points.
   */
  weight?: number
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
  /**
   * Optional scaled-score projection for exam-scale courses. When set, the
   * final results screen adds an estimated scaled score shown as an honest
   * range ('psat': 320-1520 total from the R&W + Math sections; 'act': 1-36
   * composite from the four sections) through the calibrated anchor curves
   * in @/lib/psat-scoring and @/lib/act-scoring. Additive — courses that
   * omit it (all AP subjects) are unchanged.
   */
  scaledExam?: 'psat' | 'act' | 'asvab'
  /**
   * Show a question-by-question review (your answer, the key, the explanation
   * and why each choice is right or wrong) on the final results screen. For
   * exams that are not saved to the server (no examKey), which otherwise have
   * no review page. Additive: off unless set.
   */
  answerReview?: boolean
  /**
   * Non-AP exams: an endpoint that saves a finished sitting for signed-in
   * students (POST { clientAttemptId, mcq: [{ s, i, chosen }] }, graded on the
   * server), e.g. '/api/asvab-practice/submit'. AP exams use examKey instead.
   */
  saveEndpoint?: string
  /**
   * AP exams: the key the page loaded this exam by (src/lib/ap-practice-exams.ts).
   * Set, a finished exam is saved for signed-in students (graded on the server,
   * reviewable afterwards, visible to their teacher) and the results show an
   * estimated AP score on the shared 1–5 scale.
   */
  examKey?: string
  /**
   * AP exams with more than one form (src/lib/ap-practice-exams.ts): which
   * form this is (default 1). Saved with the attempt; forms 2 and 3 resume
   * from their own device slot.
   */
  form?: number
  /** The form picker, shown on the start screen (ApPracticeFormPicker). */
  formPicker?: ReactNode
  /** Called once a finished exam has been saved. */
  onAttemptSaved?: (id: string) => void
}

/* ------------------------------------------------------------------ */
/*  Color tokens                                                       */
/* ------------------------------------------------------------------ */

const TOKENS: Record<AccentColor, { pageBg: string; gradient: string; text: string; sel: string; hover: string; badge: string }> = {
  blue:    { pageBg: 'from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-blue-600 to-indigo-600', text: 'text-blue-600 dark:text-blue-400', sel: 'border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300', hover: 'hover:border-blue-300 hover:bg-blue-50/50 dark:hover:border-blue-500', badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
  indigo:  { pageBg: 'from-indigo-50 via-white to-accent-subtle dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-indigo-600 to-accent', text: 'text-indigo-600 dark:text-indigo-400', sel: 'border-indigo-500 bg-indigo-50 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300', hover: 'hover:border-indigo-300 hover:bg-indigo-50/50 dark:hover:border-indigo-500', badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' },
  emerald: { pageBg: 'from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-emerald-600 to-teal-600', text: 'text-emerald-600 dark:text-emerald-400', sel: 'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300', hover: 'hover:border-emerald-300 hover:bg-emerald-50/50 dark:hover:border-emerald-500', badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
  green:   { pageBg: 'from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-green-600 to-emerald-600', text: 'text-green-600 dark:text-green-400', sel: 'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300', hover: 'hover:border-green-300 hover:bg-green-50/50 dark:hover:border-green-500', badge: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
  rose:    { pageBg: 'from-rose-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-rose-600 to-pink-600', text: 'text-rose-600 dark:text-rose-400', sel: 'border-rose-500 bg-rose-50 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300', hover: 'hover:border-rose-300 hover:bg-rose-50/50 dark:hover:border-rose-500', badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400' },
  cyan:    { pageBg: 'from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-cyan-600 to-blue-600', text: 'text-cyan-600 dark:text-cyan-400', sel: 'border-cyan-500 bg-cyan-50 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300', hover: 'hover:border-cyan-300 hover:bg-cyan-50/50 dark:hover:border-cyan-500', badge: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400' },
  amber:   { pageBg: 'from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-amber-600 to-orange-600', text: 'text-amber-600 dark:text-amber-400', sel: 'border-amber-500 bg-amber-50 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300', hover: 'hover:border-amber-300 hover:bg-amber-50/50 dark:hover:border-amber-500', badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
  violet:  { pageBg: 'from-violet-50 via-white to-accent-subtle dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-violet-600 to-accent', text: 'text-violet-600 dark:text-violet-400', sel: 'border-violet-500 bg-violet-50 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300', hover: 'hover:border-violet-300 hover:bg-violet-50/50 dark:hover:border-violet-500', badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400' },
  red:     { pageBg: 'from-red-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-red-600 to-rose-600', text: 'text-red-600 dark:text-red-400', sel: 'border-red-500 bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300', hover: 'hover:border-red-300 hover:bg-red-50/50 dark:hover:border-red-500', badge: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
  sky:     { pageBg: 'from-sky-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradient: 'from-sky-600 to-blue-600', text: 'text-sky-600 dark:text-sky-400', sel: 'border-sky-500 bg-sky-50 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300', hover: 'hover:border-sky-300 hover:bg-sky-50/50 dark:hover:border-sky-500', badge: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400' },
}


function fmt(s: number) { const m = Math.floor(s / 60); const sec = s % 60; return `${m}:${sec.toString().padStart(2, '0')}` }

const NO_HIGHLIGHTS: HighlightRange[] = []

const TOOL_BTN =
  'inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700'
const TEXTAREA =
  'w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-800 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring disabled:bg-gray-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200 dark:disabled:bg-gray-900/60'

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

type Phase = 'overview' | ApExamPhase

function FullLengthPracticeExamInner(config: FullLengthExamConfig) {
  const { subject, description, backLink, ctaLinks, accent, sections: rawSections, totalTimeMinutes, aboutInfo, scaledExam, answerReview, saveEndpoint, examKey, formPicker, onAttemptSaved } = config
  const form = config.form ?? 1
  const t = TOKENS[accent]

  // Deterministically shuffle every MCQ's options. Authored key positions
  // skew heavily toward the early letters (two subjects shipped with 100% of
  // keys at A) and the exam previously rendered options in authored order, so
  // the key position was predictable. Seeded by subject + stem, the shuffle is
  // stable across re-renders and remaps correctAnswer, so grading and the
  // review screen stay consistent.
  const sections = useMemo(
    () =>
      rawSections.map((sec) => ({
        ...sec,
        items: sec.items.map((item) => {
          if (item.type !== 'mcq') return item
          // Figure items can share a stem ("Which figure best shows…"), so the figure joins the seed.
          const seed = `${subject}|${item.question}${item.figureHtml ? `|${hashText(item.figureHtml)}` : ''}`
          const s = shuffleOptions(item.options, item.correctAnswer, seed)
          // Keep the per-option explanations aligned with the shuffled options.
          const optionExplanations = item.optionExplanations?.length === item.options.length
            ? s.options.map((o) => item.optionExplanations![item.options.indexOf(o)])
            : item.optionExplanations
          return { ...item, options: s.options, correctAnswer: s.correctIndex, optionExplanations }
        }),
      })),
    [rawSections, subject],
  )

  // What the real exam gives students (reference sheet, calculator), and its
  // separately timed parts. Indices stay (section, item), so parts never
  // change grading.
  const tools = useMemo(() => apExamTools(examKey), [examKey])
  const stages = useMemo(() => buildStages(sections, tools), [sections, tools])
  const sig = useMemo(() => examSignature(subject, sections, stages, form), [subject, sections, stages, form])
  const storageKey = useMemo(() => apProgressKey(examKey ? apPracticeSittingId(examKey, form) : `subject-${hashText(subject)}`), [examKey, form, subject])
  const examHasCalculator = stages.some((s) => s.calculator)
  const hasFrq = sections.some((sec) => sec.items.some((it) => it.type !== 'mcq'))

  const [phase, setPhase] = useState<Phase>('overview')
  const [stageIdx, setStageIdx] = useState(0)
  const [itemIdx, setItemIdx] = useState(0)
  const [answers, setAnswers] = useState<ItemAnswer[][]>([])
  const [flags, setFlags] = useState<string[]>([])
  const [struck, setStruck] = useState<Record<string, number[]>>({})
  const [highlights, setHighlights] = useState<Record<string, HighlightRange[]>>({})
  const [deadline, setDeadline] = useState<number | null>(null)
  const [now, setNow] = useState(() => Date.now())
  // Saving a finished AP exam: one attempt id per sitting (a retry can't double-save).
  const [attemptId, setAttemptId] = useState('')
  const [save, setSave] = useState<{ state: 'idle' | 'saving' | 'saved' | 'signin' | 'error'; id?: string }>({ state: 'idle' })
  const [restored, setRestored] = useState(false)
  const [resumed, setResumed] = useState(false)
  const [reviewOpen, setReviewOpen] = useState(false)
  const [confirmEnd, setConfirmEnd] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [exitOpen, setExitOpen] = useState(false)
  const [refOpen, setRefOpen] = useState(false)

  const stage = stages[Math.min(stageIdx, Math.max(0, stages.length - 1))]
  const currentSection = stage ? sections[stage.sectionIdx] : undefined
  const isLastStage = stageIdx >= stages.length - 1


  /* -------------------- Resume -------------------- */
  // Restore a sitting saved on this device (same exam only). A part whose
  // clock ran out while the student was away is over.
  useEffect(() => {
    let p: ApExamProgress | null = null
    try {
      p = parseApExamProgress(localStorage.getItem(storageKey), sig, sections, stages.length, Date.now())
    } catch {
      p = null
    }
    if (p) {
      const r = restoreSitting(p, stages, Date.now())
      setAttemptId(r.clientAttemptId)
      setAnswers(r.answers)
      setFlags(r.flags)
      setStruck(r.struck)
      setHighlights(r.highlights)
      setStageIdx(r.stageIdx)
      setItemIdx(r.itemIdx)
      setDeadline(r.deadline)
      setNow(Date.now())
      setPhase(r.phase)
      setResumed(true)
    }
    setRestored(true)
    // Runs once per exam; sections/stages are derived from the same props as sig.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey, sig])

  // Persist every meaningful change; clear once the exam is finished and saved
  // (or there is nothing to save to), or discarded.
  useEffect(() => {
    if (!restored) return
    try {
      if (phase === 'overview' || (phase === 'final-results' && (!(examKey || saveEndpoint) || save.state === 'saved'))) {
        localStorage.removeItem(storageKey)
        return
      }
      const payload: ApExamProgress = {
        v: 1, sig, clientAttemptId: attemptId, phase, stageIdx, itemIdx, answers, flags, struck, highlights, deadline, savedAt: Date.now(),
      }
      localStorage.setItem(storageKey, JSON.stringify(payload))
    } catch { /* storage full or blocked: the exam still runs, just without resume */ }
  }, [restored, storageKey, sig, examKey, saveEndpoint, save.state, attemptId, phase, stageIdx, itemIdx, answers, flags, struck, highlights, deadline])

  // A new screen (phase, part, question or the review screen) starts at the
  // top, after it renders: scrolling from the click handler raced the
  // re-render and a smooth scroll, leaving phones deep in the page.
  useEffect(() => {
    if (!restored) return
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [restored, phase, stageIdx, itemIdx, reviewOpen])

  /* -------------------- Clock -------------------- */
  useEffect(() => {
    if (phase !== 'section') return
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [phase])
  const left = phase === 'section' && deadline !== null ? Math.max(0, Math.ceil((deadline - now) / 1000)) : stage?.seconds ?? 0

  const endStage = useCallback(() => {
    setPhase('section-complete')
    setDeadline(null)
    setReviewOpen(false)
    setConfirmEnd(false)
    setNavOpen(false)
  }, [])

  // The stage's clock ran out (also while the student was on another tab).
  useEffect(() => {
    if (phase === 'section' && deadline !== null && now >= deadline) endStage()
  }, [phase, deadline, now, endStage])

  const beginStage = useCallback((idx: number) => {
    const st = stages[idx]
    if (!st) return
    const ts = Date.now()
    setStageIdx(idx)
    setItemIdx(st.start)
    setDeadline(ts + st.seconds * 1000)
    setNow(ts)
    setReviewOpen(false)
    setConfirmEnd(false)
    setResumed(false)
    setPhase('section')
  }, [stages])

  const startExam = useCallback(() => {
    setAttemptId(`ap-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`)
    setSave({ state: 'idle' })
    setAnswers(sections.map(sec => sec.items.map(blankAnswer)))
    setFlags([])
    setStruck({})
    setHighlights({})
    beginStage(0)
  }, [sections, beginStage])

  const discardAttempt = useCallback(() => {
    setExitOpen(false)
    setAnswers([])
    setDeadline(null)
    setResumed(false)
    setPhase('overview')
  }, [])

  const goToNextStage = useCallback(() => {
    if (stageIdx + 1 >= stages.length) {
      setResumed(false)
      setPhase('final-results')
      } else {
      beginStage(stageIdx + 1)
    }
  }, [stageIdx, stages.length, beginStage])

  /* -------------------- Saving -------------------- */
  /** Send the finished exam to be graded and stored (AP exams, signed-in students). */
  const saveAttempt = useCallback(() => {
    if (!examKey && !saveEndpoint) return
    const mcq: { s: number; i: number; chosen: string | null }[] = []
    const frq: ApFrqSubmission[] = []
    sections.forEach((sec, s) => sec.items.forEach((item, i) => {
      const a = answers[s]?.[i]
      if (item.type === 'mcq') {
        mcq.push({ s, i, chosen: a?.type === 'mcq' && a.selected !== null ? item.options[a.selected] ?? null : null })
      } else {
        const sub = frqSubmission(item, a, s, i)
        if (sub) frq.push(sub)
      }
    }))
    setSave({ state: 'saving' })
    fetch(examKey ? '/api/ap-practice/submit' : saveEndpoint!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(examKey ? { examKey, form, clientAttemptId: attemptId || undefined, mcq, frq } : { clientAttemptId: attemptId || undefined, mcq }),
    })
      .then(async (r) => {
        const d = await r.json().catch(() => ({}))
        if (r.status === 401) setSave({ state: 'signin' })
        else if (!r.ok) setSave({ state: 'error' })
        else {
          setSave({ state: 'saved', id: d.id })
          if (typeof d.id === 'string') onAttemptSaved?.(d.id)
        }
      })
      .catch(() => setSave({ state: 'error' }))
  }, [examKey, saveEndpoint, form, sections, answers, attemptId, onAttemptSaved])

  // Save on reaching the results (including a results screen restored after a
  // refresh: the attempt id makes a repeat POST a no-op on the server).
  useEffect(() => {
    if (phase === 'final-results' && (examKey || saveEndpoint) && save.state === 'idle' && answers.length > 0) saveAttempt()
  }, [phase, examKey, saveEndpoint, save.state, answers.length, saveAttempt])

  /* -------------------- Answering & navigation -------------------- */
  const updateAnswer = useCallback((updater: (a: ItemAnswer) => ItemAnswer) => {
    if (!stage) return
    const s = stage.sectionIdx
    setAnswers(prev => {
      if (!prev[s]?.[itemIdx]) return prev
      const copy = prev.map(arr => [...arr])
      copy[s][itemIdx] = updater(copy[s][itemIdx])
      return copy
    })
  }, [stage, itemIdx])

  const go = useCallback((i: number) => {
    if (!stage) return
    setItemIdx(Math.max(stage.start, Math.min(stage.end - 1, i)))
    setReviewOpen(false)
    setConfirmEnd(false)
    setNavOpen(false)
  }, [stage])

  const toggleFlag = useCallback((k: string) => {
    setFlags(prev => (prev.includes(k) ? prev.filter(f => f !== k) : [...prev, k]))
  }, [])

  const toggleStrike = useCallback((k: string, oi: number) => {
    setStruck(prev => {
      const had = prev[k] ?? []
      return { ...prev, [k]: had.includes(oi) ? had.filter(x => x !== oi) : [...had, oi] }
    })
  }, [])

  const openReview = useCallback(() => {
    setNavOpen(false)
    setConfirmEnd(false)
    setReviewOpen(true)
  }, [])

  // Real-exam shortcuts (Alt+N / Alt+P / Alt+F / Alt+V), live only on the
  // question screen. The listener reads the latest handler through a ref.
  const shortcutRef = useRef<(e: KeyboardEvent) => void>(() => {})
  useEffect(() => {
    shortcutRef.current = (e: KeyboardEvent) => {
      const action = examShortcutFor(e)
      if (!action || !stage) return
      const inDialog = e.target instanceof Element && !!e.target.closest('[role="dialog"]')
      if (inDialog && !(action === 'navigator' && navOpen)) return
      if (exitOpen || refOpen) return
      e.preventDefault()
      if (action === 'navigator') setNavOpen(v => !v)
      else if (action === 'next') go(itemIdx + 1)
      else if (action === 'prev') go(itemIdx - 1)
      else if (action === 'flag' && !reviewOpen) toggleFlag(`${stage.sectionIdx}:${itemIdx}`)
    }
  })
  useEffect(() => {
    if (phase !== 'section') return
    const onKey = (e: KeyboardEvent) => shortcutRef.current(e)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase])

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
        } else if (a.type !== 'mcq') {
          // One point per rubric box (same count as the server grader).
          const keys = rubricKeys(item)
          possible += keys.length
          earned += keys.filter(k => a.checked[k]).length
        }
      })
      return { name: sec.shortName, earned, possible, pct: possible ? Math.round((earned / possible) * 100) : 0, weight: sec.weight }
    })
    const earned = perSection.reduce((s, x) => s + x.earned, 0)
    const possible = perSection.reduce((s, x) => s + x.possible, 0)
    // Same function the server grader uses, so the composite here matches the saved result.
    return { perSection, earned, possible, pct: apCompositePercent(perSection) }
  }, [sections, answers])

  /* -------------------- Key event: practice_test_complete -------------------- */
  // Saved exams count once the server stored the attempt (keyed on its id, so
  // a results screen restored after a refresh re-POSTs as a no-op and is not
  // counted twice); exams with nowhere to save count on reaching the results,
  // keyed on the sitting's client id.
  const pathname = usePathname()
  const analyticsCourse = examKey ?? (pathname?.split('/')[1]?.replace(/-practice$/, '') || 'practice-exam')
  const savesAttempt = !!(examKey || saveEndpoint)
  const completionKey = phase !== 'final-results' ? null : savesAttempt ? (save.state === 'saved' ? save.id ?? null : null) : attemptId || null
  const scorePct = scoring?.pct
  useEffect(() => {
    if (!completionKey) return
    trackPracticeTestComplete({ courseSlug: analyticsCourse, testId: `form-${form}`, attemptKey: completionKey, scorePercent: scorePct })
  }, [completionKey, analyticsCourse, form, scorePct])

  /* =================================================================== */
  /*  OVERVIEW                                                           */
  /* =================================================================== */
  if (phase === 'overview') {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${t.pageBg}`}>
        <div className="container py-8 sm:py-12"><div className="mx-auto max-w-4xl">
          <Link href={backLink.href} className={`mb-4 inline-flex items-center gap-1 rounded text-sm ${t.text} hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring`}>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            {backLink.label}
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">{subject} Full Practice Exam</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{description}</p>

          {formPicker}

          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Exam Structure</h2>
            <div className="space-y-3">
              {sections.map((sec, i) => {
                const parts = stages.filter(st => st.sectionIdx === i)
                return (
                  <div key={sec.id} className="flex items-start gap-4 rounded-xl bg-gray-50 p-4 dark:bg-gray-900/40">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-sm font-bold text-white`}>{i + 1}</div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{sec.name} — {sec.shortName}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{sec.items.length} {sec.items[0]?.type === 'mcq' ? 'questions' : 'item' + (sec.items.length > 1 ? 's' : '')} · {sec.timeLimitMinutes} minutes</p>
                      <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{sec.description}</p>
                      {parts.length > 1 && (
                        <ul className="mt-2 space-y-1 text-xs text-gray-700 dark:text-gray-300">
                          {parts.map(st => (
                            <li key={st.partIdx} className="flex flex-wrap items-center gap-x-2">
                              <span className="font-semibold">{st.partLabel}</span>
                              <span>Q{st.start + 1}–Q{st.end} · {Math.round(st.seconds / 60)} min, timed separately</span>
                              <span className="inline-flex items-center gap-1 font-medium">
                                {st.calculator ? 'Calculator allowed' : 'No calculator'}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <strong>Total time:</strong> {Math.floor(totalTimeMinutes / 60)}h {totalTimeMinutes % 60}m. Each section{stages.length > sections.length ? ' and part' : ''} has its own timer and is completed back-to-back.{hasFrq ? ' Free-response sections use a self-grading rubric checklist after you write your response.' : ''}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <strong>Exam tools:</strong> a question navigator and review screen, flags, answer strike-through, a highlighter for stimuli
              {tools.referenceSheet ? ', the exam’s reference sheet' : ''}
              {examHasCalculator ? (stages.every(s => s.calculator) ? ', and a Desmos calculator' : ', and a Desmos calculator on the calculator parts') : ''}.
              Your progress saves on this device, so you can refresh or come back later; the clock keeps running while you are away, as on test day.
            </p>
            <button onClick={startExam} className={`mt-6 w-full cursor-pointer rounded-xl bg-gradient-to-r ${t.gradient} px-6 py-3 text-base font-semibold text-white shadow transition hover:scale-[1.01] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:scale-100 dark:focus-visible:ring-offset-gray-800`}>
              Begin Full Exam
            </button>
          </div>

          {ctaLinks && ctaLinks.length > 0 && (
            <div className="mx-auto mt-8 max-w-md text-center">
              <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">More resources</p>
              <div className="flex flex-wrap justify-center gap-3">
                {ctaLinks.map(l => (
                  <Link key={l.href} href={l.href} className={`rounded-lg px-4 py-2 text-sm font-medium transition ${t.badge} hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring`}>{l.label}</Link>
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
  /*  STAGE COMPLETE (between sections / parts)                          */
  /* =================================================================== */
  if (phase === 'section-complete' && stage && currentSection) {
    const next = stages[stageIdx + 1]
    const nextSection = next ? sections[next.sectionIdx] : undefined
    return (
      <div className={`min-h-screen bg-gradient-to-br ${t.pageBg} py-8`}>
        <div className="container"><div className="mx-auto max-w-2xl text-center">
          <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-2xl text-white`} aria-hidden="true">✓</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{stageName(currentSection.name, stage)} complete</h2>
          {resumed && (
            <p className="mt-2 text-sm text-amber-800 dark:text-amber-300" role="status">Welcome back. Time ran out on this part while you were away, so it has ended.</p>
          )}
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {!next || !nextSection
              ? 'You\'ve finished the final section. View your full exam results next.'
              : next.sectionIdx === stage.sectionIdx
                ? `Up next: ${stageName(nextSection.name, next)} (${Math.round(next.seconds / 60)} min, ${next.calculator ? 'calculator allowed' : 'no calculator'}). You cannot return to the questions in ${stage.partLabel ?? 'this part'}.`
                : `Up next: ${stageName(nextSection.name, next)} — ${nextSection.shortName} (${Math.round(next.seconds / 60)} min${examHasCalculator ? `, ${next.calculator ? 'calculator allowed' : 'no calculator'}` : ''}). Take a short break, then continue when ready.`}
          </p>
          <button onClick={goToNextStage} className={`mt-6 cursor-pointer rounded-xl bg-gradient-to-r ${t.gradient} px-8 py-3 font-semibold text-white shadow transition hover:scale-[1.02] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:scale-100 dark:focus-visible:ring-offset-gray-900`}>
            {!next ? 'See Final Results' : next.sectionIdx === stage.sectionIdx ? `Begin ${next.partLabel ?? 'Next Part'}` : 'Begin Next Section'}
          </button>
        </div></div>
      </div>
    )
  }

  /* =================================================================== */
  /*  FINAL RESULTS                                                      */
  /* =================================================================== */
  if (phase === 'final-results' && scoring) {
    // Optional scaled projection (PSAT total / ACT composite) through the
    // calibrated anchor curves — always displayed as a range, never a bare
    // number, because a practice exam is a sample, not a real administration.
    let scaledCard: { heading: string; range: string; outOf: string; note: string } | null = null
    if (scaledExam === 'psat' && scoring.perSection.length >= 2) {
      // PSAT configs list Reading & Writing first, then Math.
      const fr = scoring.perSection.map(s => (s.possible ? s.earned / s.possible : 0))
      const total = psatTotal(fr[0], fr[1])
      const r = psatProjectionRange(total, scoring.possible >= 90 ? 'high' : 'medium')
      scaledCard = {
        heading: 'Estimated PSAT/NMSQT Score',
        range: `${r.low}–${r.high}`,
        outOf: 'on the 320–1520 scale',
        note: 'Estimate from one practice exam — expect a score within this range, not an exact number.',
      }
    } else if (scaledExam === 'asvab') {
      // AFQT = AR + MK + 2·VE (VE from WK and PC) on the CAT's IRT scale; no
      // public number-right table exists, so this is an estimate with a range
      // from percent correct on the four AFQT subtests (src/lib/asvab-scoring.ts).
      const sc = (id: string) => {
        const i = sections.findIndex((sec) => sec.id === id)
        return i >= 0 ? scoring.perSection[i] : undefined
      }
      const frac = (id: string) => {
        const x = sc(id)
        return x && x.possible ? x.earned / x.possible : undefined
      }
      const n = (id: string) => sc(id)?.possible || undefined
      const est = estimateAfqtFromPercentCorrect(
        { WK: frac('wk'), PC: frac('pc'), AR: frac('ar'), MK: frac('mk') },
        { WK: n('wk'), PC: n('pc'), AR: n('ar'), MK: n('mk') },
      )
      scaledCard = est
        ? {
            heading: 'Estimated AFQT',
            range: `${est.range.low}–${est.range.high}`,
            outOf: `percentile (point estimate ${est.percentile}, Category ${est.category})`,
            note: 'Estimate from WK, PC, AR and MK on one fixed practice form. The real CAT-ASVAB is adaptive and scores which questions you get right, not a count, so expect a range, not an exact number.',
          }
        : {
            heading: 'Estimated AFQT',
            range: '—',
            outOf: 'percentile',
            note: 'The AFQT estimate is not available yet. Your per-subtest results are below.',
          }
    } else if (scaledExam === 'act' && scoring.perSection.length > 0) {
      const sectionScores = scoring.perSection.map(s => actSectionScaled(s.possible ? s.earned / s.possible : 0))
      const composite = actComposite(sectionScores)
      const r = actProjectionRange(composite, 'medium')
      scaledCard = {
        heading: 'Estimated ACT Composite',
        range: `${r.low}–${r.high}`,
        outOf: 'out of 36',
        note: 'Estimate from a shortened practice exam — expect a composite within this range, not an exact number.',
      }
    }
    return (
      <div className={`min-h-screen bg-gradient-to-br ${t.pageBg} py-8`}>
        <div className="container"><div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{subject} — Full Exam Results</h2>
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">Composite</p>
              <p className={`text-4xl font-black ${t.text}`}>{scoring.pct}%</p>
              {scoring.perSection.every(s => s.weight) && (
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Sections weighted as on the real exam</p>
              )}
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

          {examKey && !scaledCard && (
            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">Estimated AP Score</p>
              <p className={`text-5xl font-black ${t.text}`}>{estimateApScore(scoring.pct)}</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">on the 1–5 scale</p>
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                Estimate from one practice exam with self-graded free response. Real AP cutoffs vary by subject and year.
              </p>
            </div>
          )}

          {(examKey || saveEndpoint) && save.state !== 'idle' && (
            <p className="mb-6 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300" role="status">
              {save.state === 'saving' && 'Saving your results…'}
              {save.state === 'saved' && (
                <>
                  Saved to your history.{' '}
                  {save.id && examKey && (
                    <Link href={`/review/ap-practice/${save.id}`} className={`rounded font-semibold ${t.text} hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring`}>
                      Review every question and your free responses →
                    </Link>
                  )}
                </>
              )}
              {save.state === 'signin' && (
                <>
                  <Link href={`/auth/signin?callbackUrl=${encodeURIComponent(typeof window !== 'undefined' ? window.location.pathname : '/')}`} className={`rounded font-semibold ${t.text} hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring`}>Sign in</Link>{' '}
                  to save your results and review them later. They stay on this device until you do.
                </>
              )}
              {save.state === 'error' && (
                <>
                  Your results couldn’t be saved. They are still shown here.{' '}
                  <button type="button" onClick={() => setSave({ state: 'idle' })} className={`rounded font-semibold ${t.text} hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring`}>
                    Try again
                  </button>
                </>
              )}
            </p>
          )}

          {scaledCard && (
            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">{scaledCard.heading}</p>
              <p className={`text-5xl font-black ${t.text}`}>{scaledCard.range}</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{scaledCard.outOf}</p>
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">{scaledCard.note}</p>
            </div>
          )}

          {/* Share your score */}
          {scoring.possible > 0 && (
            <ShareScoreCard score={scoring.earned} total={scoring.possible} subject={subject} type="exam" />
          )}

          {/* Ad — on the final results screen, after the score summary */}
          <InArticleAd />

          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">Section Breakdown</h3>
            <div className="space-y-2">
              {scoring.perSection.map(s => (
                <div key={s.name} className="flex items-center justify-between gap-3 rounded-lg bg-gray-50 px-4 py-2 dark:bg-gray-700/50">
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{s.name}{s.weight ? ` · ${Number(s.weight.toFixed(1))}% of score` : ''}</span>
                  <span className={`text-sm font-bold ${s.pct >= 70 ? 'text-green-600 dark:text-green-400' : s.pct >= 50 ? 'text-amber-600 dark:text-amber-400' : 'text-red-500 dark:text-red-400'}`}>{s.earned}/{s.possible} ({s.pct}%)</span>
                </div>
              ))}
            </div>
          </div>

          {answerReview && (
            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">Review Every Question</h3>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">Open a section to see your answer, the correct answer and why each choice is right or wrong.</p>
              <div className="space-y-2">
                {sections.map((sec, sIdx) => (
                  <details key={sec.id} className="rounded-xl border border-gray-200 dark:border-gray-700">
                    <summary className="cursor-pointer rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-gray-200">
                      {sec.name} ({scoring.perSection[sIdx]?.earned ?? 0}/{scoring.perSection[sIdx]?.possible ?? 0})
                    </summary>
                    <ol className="space-y-4 px-4 pb-4">
                      {sec.items.map((it, iIdx) => {
                        if (it.type !== 'mcq') return null
                        const a = answers[sIdx]?.[iIdx]
                        const chosen = a?.type === 'mcq' ? a.selected : null
                        const right = chosen === it.correctAnswer
                        return (
                          <li key={iIdx} className="border-t border-gray-100 pt-3 text-sm dark:border-gray-700">
                            <p className={`mb-1 text-xs font-bold ${right ? 'text-green-700 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                              Question {iIdx + 1} · {chosen === null ? 'Not answered' : right ? 'Correct' : 'Incorrect'}
                            </p>
                            {it.figureHtml && (
                              <div className="mb-2 overflow-x-auto rounded-lg bg-gray-50 p-2 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200 [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full" dangerouslySetInnerHTML={{ __html: it.figureHtml }} />
                            )}
                            {it.stimulus && <RichText text={it.stimulus} className="mb-2 rounded-lg bg-gray-50 p-3 text-xs italic text-gray-700 dark:bg-gray-900/40 dark:text-gray-300" />}
                            <RichText text={it.question} className="mb-2 text-gray-800 dark:text-gray-200" />
                            <ul className="mb-2 space-y-1">
                              {it.options.map((opt, oi) => (
                                <li key={oi} className={`rounded-lg border px-3 py-1.5 ${oi === it.correctAnswer ? 'border-green-400 bg-green-50 dark:border-green-600 dark:bg-green-900/20' : oi === chosen ? 'border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/20' : 'border-gray-200 dark:border-gray-700'}`}>
                                  <span className="mr-1 font-bold">{String.fromCharCode(65 + oi)}.</span>
                                  <RichText inline text={opt} className={opt.startsWith('<svg') ? 'inline-block align-middle [&_svg]:h-auto [&_svg]:max-w-full' : 'text-gray-800 dark:text-gray-200'} />
                                  {oi === it.correctAnswer && <span className="ml-2 text-xs font-semibold text-green-700 dark:text-green-400">Correct answer</span>}
                                  {oi === chosen && oi !== it.correctAnswer && <span className="ml-2 text-xs font-semibold text-red-600 dark:text-red-400">Your answer</span>}
                                  {it.optionExplanations?.[oi] && <RichText text={it.optionExplanations[oi]} className="mt-1 text-xs text-gray-600 dark:text-gray-400" />}
                                </li>
                              ))}
                            </ul>
                            <RichText text={it.explanation} className="text-xs text-gray-700 dark:text-gray-300" />
                          </li>
                        )
                      })}
                    </ol>
                  </details>
                ))}
              </div>
            </div>
          )}

          {hasFrq && (
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">Free-response scores reflect your self-graded rubric checks. Be honest with yourself &mdash; that&apos;s where the learning happens.</p>
          )}

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={backLink.href} className={`flex-1 rounded-xl bg-gradient-to-r ${t.gradient} py-3 text-center font-semibold text-white shadow transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900`}>Back to {backLink.label}</Link>
            <button onClick={startExam} className="flex-1 rounded-xl border-2 border-gray-300 py-3 font-semibold text-gray-600 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">Retake Exam</button>
          </div>
        </div></div>
      </div>
    )
  }

  /* =================================================================== */
  /*  ACTIVE STAGE                                                       */
  /* =================================================================== */
  if (phase !== 'section' || !stage || !currentSection) return null

  const s = stage.sectionIdx
  const item = currentSection.items[itemIdx]
  const ans = answers[s]?.[itemIdx]
  if (!item || !ans) return null
  const k = `${s}:${itemIdx}`
  const flagged = flags.includes(k)
  const stageTitle = stageName(currentSection.name, stage)
  const stageCount = stage.end - stage.start
  const lowTime = left <= 5 * 60
  const criticalTime = left <= 60
  const isLastItem = itemIdx >= stage.end - 1
  const unitWord = stage.partLabel ? 'part' : 'section'

  const navItems: NavigatorItem[] = []
  for (let i = stage.start; i < stage.end; i++) {
    navItems.push({
      key: `${s}:${i}`,
      label: String(i + 1),
      answered: isAnswered(answers[s]?.[i]),
      flagged: flags.includes(`${s}:${i}`),
      current: i === itemIdx && !reviewOpen,
    })
  }
  const answeredInStage = navItems.filter(n => n.answered).length
  const jumpInStage = (idx: number) => go(stage.start + idx)

  const highlighter = (hk: string, text: string, label: string, className: string) => (
    <PassageHighlighter
      key={`${k}:${hk}`}
      text={text}
      highlights={highlights[hk] ?? NO_HIGHLIGHTS}
      onChange={(next) => setHighlights(h => ({ ...h, [hk]: next }))}
      label={label}
      className={className}
    />
  )

  const flagButton = (
    <button
      type="button"
      onClick={() => toggleFlag(k)}
      aria-pressed={flagged}
      aria-keyshortcuts="Alt+F"
      className={`inline-flex shrink-0 items-center gap-1 rounded-md border px-2 py-1 text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring ${flagged ? 'border-amber-400 bg-amber-50 text-amber-800 dark:border-amber-500 dark:bg-amber-900/30 dark:text-amber-200' : 'border-gray-300 text-gray-600 hover:border-amber-300 dark:border-gray-600 dark:text-gray-300'}`}
    >
      <Flag className="h-3.5 w-3.5" fill={flagged ? 'currentColor' : 'none'} aria-hidden="true" />
      {flagged ? 'Flagged' : 'Flag for review'}
    </button>
  )

  const itemHeader = (heading: string) => (
    <div className="mb-3 flex items-start justify-between gap-3">
      <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
        {heading} <span className="font-normal">· {itemIdx - stage.start + 1} of {stageCount}{stage.partLabel ? ` in ${stage.partLabel}` : ''}</span>
      </h2>
      {flagButton}
    </div>
  )

  const navFooter = (
    <div className="mt-6 flex items-center justify-between gap-2">
      <button
        type="button"
        onClick={() => go(itemIdx - 1)}
        disabled={itemIdx <= stage.start}
        aria-keyshortcuts="Alt+P"
        className="cursor-pointer rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700"
      >
        ← Previous
      </button>
      {!isLastItem ? (
        <button
          type="button"
          onClick={() => go(itemIdx + 1)}
          aria-keyshortcuts="Alt+N"
          className={`cursor-pointer rounded-xl bg-gradient-to-r ${t.gradient} px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950`}
        >
          Next →
        </button>
      ) : (
        <button
          type="button"
          onClick={openReview}
          className={`cursor-pointer rounded-xl bg-gradient-to-r ${t.gradient} px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950`}
        >
          Review {unitWord}
        </button>
      )}
    </div>
  )

  const card = 'rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800'
  let content: React.ReactNode = null

  /* ---------- MCQ ---------- */
  if (item.type === 'mcq' && ans.type === 'mcq') {
    const struckHere = struck[k] ?? []
    content = (
      <div className={card}>
        {itemHeader(`Question ${itemIdx + 1}`)}
        {item.figureHtml && (
          <div
            className="mb-4 overflow-x-auto rounded-xl border border-gray-200 bg-gray-50 p-3 text-gray-800 dark:border-gray-600 dark:bg-gray-700/50 dark:text-gray-200 [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full"
            dangerouslySetInnerHTML={{ __html: item.figureHtml }}
          />
        )}
        {item.stimulus && (
          <div className="mb-4 rounded-lg border-l-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-900/40">
            {highlighter(highlightKey('stim', item.stimulus), item.stimulus, 'Stimulus', 'text-sm italic leading-relaxed text-gray-800 dark:text-gray-200')}
          </div>
        )}
        <RichText text={item.question} className="mb-5 text-sm leading-relaxed text-gray-800 sm:text-base dark:text-gray-200" />
        <fieldset>
          <legend className="sr-only">Answer choices for question {itemIdx + 1}</legend>
          <div className="space-y-2">
            {item.options.map((opt, i) => {
              const isSel = ans.selected === i
              const isStruck = struckHere.includes(i)
              const letter = String.fromCharCode(65 + i)
              return (
                <div key={i} className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-sm transition motion-reduce:transition-none ${isSel ? t.sel : `border-gray-200 text-gray-700 ${t.hover} dark:border-gray-600 dark:text-gray-300`}`}>
                  <button
                    type="button"
                    onClick={() => updateAnswer(a => a.type === 'mcq' ? { ...a, selected: i } : a)}
                    aria-pressed={isSel}
                    className={`flex flex-1 cursor-pointer items-start gap-2 rounded text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring ${isStruck ? 'text-gray-400 line-through dark:text-gray-500' : ''}`}
                  >
                    <span className="font-bold" aria-hidden="true">{letter}.</span>
                    <span className="sr-only">{letter}. {isStruck ? '(crossed out) ' : ''}</span>
                    <RichText inline text={opt} className={opt.startsWith('<svg') ? 'inline-block [&_svg]:h-auto [&_svg]:max-w-full' : undefined} />
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleStrike(k, i)}
                    aria-pressed={isStruck}
                    aria-label={`${isStruck ? 'Restore' : 'Cross out'} choice ${letter}`}
                    className="shrink-0 rounded px-1.5 py-0.5 text-xs text-gray-400 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-gray-500 dark:hover:text-red-400"
                  >
                    {isStruck ? 'undo' : <span className="line-through" aria-hidden="true">abc</span>}
                  </button>
                </div>
              )
            })}
          </div>
        </fieldset>
        {navFooter}
      </div>
    )
  }

  /* ---------- SAQ ---------- */
  if (item.type === 'saq' && ans.type === 'saq') {
    const prompt = saqPrompt(item)
    content = (
      <>
        <div className={`mb-4 ${card}`}>
          {itemHeader(`Free-response question ${itemIdx + 1}`)}
          {item.figureHtml && (
            <div
              className="mb-3 overflow-x-auto rounded-xl border border-gray-200 bg-gray-50 p-3 text-gray-800 dark:border-gray-600 dark:bg-gray-700/50 dark:text-gray-200"
              dangerouslySetInnerHTML={{ __html: item.figureHtml }}
            />
          )}
          {prompt && highlighter(highlightKey('prompt', prompt), prompt, 'Question stimulus', 'text-sm leading-relaxed text-gray-800 dark:text-gray-200')}
        </div>
        {item.parts.map((part, pi) => {
          const letter = partLetter(part, pi)
          const fieldId = `frq-${k}-${letter}`
          return (
            <div key={letter} className="mb-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <label htmlFor={fieldId} className="mb-3 block text-sm font-semibold text-gray-900 dark:text-gray-100">
                <RichText inline text={partHeading(letter, partQuestion(part))} />
              </label>
              <textarea
                id={fieldId}
                value={ans.responses[pi] ?? ''}
                onChange={e => {
                  const v = e.target.value
                  updateAnswer(a => {
                    if (a.type !== 'saq') return a
                    const responses = [...a.responses]
                    responses[pi] = v
                    return { ...a, responses }
                  })
                }}
                disabled={ans.submitted}
                placeholder="Write your response…"
                className={`min-h-[80px] ${TEXTAREA}`}
              />
              {ans.submitted && (
                <div className="mt-3 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
                  <p className="mb-2 text-xs font-semibold text-amber-900 dark:text-amber-200">Self-grade — check each rubric point your response earned:</p>
                  {Array.isArray(part.rubric) ? part.rubric.map(rp => {
                    const key = `${letter}-${rp.id}`
                    return (
                      <label key={rp.id} className="mb-2 flex cursor-pointer items-start gap-2 text-xs text-gray-800 dark:text-gray-200">
                        <input type="checkbox" checked={!!ans.checked[key]} onChange={e => { const v = e.target.checked; updateAnswer(a => a.type === 'saq' ? { ...a, checked: { ...a.checked, [key]: v } } : a) }} className="mt-0.5 cursor-pointer" />
                        <span><strong><RichText inline text={rp.label} />:</strong> <RichText inline text={rp.description} /></span>
                      </label>
                    )
                  }) : (
                    <>
                      <RichText text={part.rubric} className="mb-2 text-xs text-gray-800 dark:text-gray-200" />
                      <label className="flex cursor-pointer items-start gap-2 text-xs text-gray-800 dark:text-gray-200">
                        <input type="checkbox" checked={!!ans.checked[`${letter}-self`]} onChange={e => { const v = e.target.checked; updateAnswer(a => a.type === 'saq' ? { ...a, checked: { ...a.checked, [`${letter}-self`]: v } } : a) }} className="mt-0.5 cursor-pointer" />
                        <span>I earned credit for this part.</span>
                      </label>
                    </>
                  )}
                </div>
              )}
            </div>
          )
        })}
        {!ans.submitted && (
          <button type="button" onClick={() => updateAnswer(a => a.type === 'saq' ? { ...a, submitted: true } : a)}
            className={`mb-4 w-full cursor-pointer rounded-xl bg-gradient-to-r ${t.gradient} py-3 text-sm font-semibold text-white shadow transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950`}>
            Submit Response & Reveal Rubric
          </button>
        )}
        {ans.submitted && item.sampleResponse && (
          <details className="mb-4 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <summary className="cursor-pointer rounded text-sm font-semibold text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-gray-200">View high-scoring sample response</summary>
            <RichText text={item.sampleResponse} className="mt-3 text-sm text-gray-700 dark:text-gray-300" />
          </details>
        )}
        {navFooter}
      </>
    )
  }

  /* ---------- DBQ ---------- */
  if (item.type === 'dbq' && ans.type === 'dbq') {
    const fieldId = `frq-${k}-essay`
    content = (
      <>
        <div className={`mb-4 ${card}`}>
          {itemHeader('Document-Based Question')}
          <RichText text={item.prompt} className="text-sm leading-relaxed text-gray-800 dark:text-gray-200" />
        </div>
        <div className="mb-4 space-y-3">
          {item.documents.map(doc => (
            <div key={doc.number} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-amber-700 dark:text-amber-400">Document {doc.number}</p>
              <p className="mb-2 text-xs italic text-gray-500 dark:text-gray-400">{doc.source}</p>
              {highlighter(highlightKey('doc', doc.content), doc.content, `Document ${doc.number}`, 'text-sm text-gray-800 dark:text-gray-200')}
            </div>
          ))}
        </div>
        <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <label htmlFor={fieldId} className="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-100">Your essay:</label>
          <textarea
            id={fieldId}
            value={ans.response}
            onChange={e => { const v = e.target.value; updateAnswer(a => a.type === 'dbq' ? { ...a, response: v } : a) }}
            disabled={ans.submitted}
            placeholder="Write your DBQ essay. Aim for a defensible thesis, contextualization, evidence from most of the documents, evidence beyond them, sourcing analysis, and well-developed reasoning."
            className={`min-h-[300px] ${TEXTAREA}`}
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{ans.response.split(/\s+/).filter(Boolean).length} words</p>
        </div>
        {!ans.submitted && (
          <button type="button" onClick={() => updateAnswer(a => a.type === 'dbq' ? { ...a, submitted: true } : a)}
            className={`mb-4 w-full cursor-pointer rounded-xl bg-gradient-to-r ${t.gradient} py-3 text-sm font-semibold text-white shadow transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950`}>
            Submit DBQ & Reveal Rubric
          </button>
        )}
        {ans.submitted && (
          <div className="mb-4 rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="mb-3 text-sm font-semibold text-amber-900 dark:text-amber-200">Self-grade your DBQ ({item.rubric.length} points possible):</p>
            {item.rubric.map(rp => (
              <label key={rp.id} className="mb-3 flex cursor-pointer items-start gap-2 text-sm text-gray-800 dark:text-gray-200">
                <input type="checkbox" checked={!!ans.checked[rp.id]} onChange={e => { const v = e.target.checked; updateAnswer(a => a.type === 'dbq' ? { ...a, checked: { ...a.checked, [rp.id]: v } } : a) }} className="mt-1 cursor-pointer" />
                <span><strong><RichText inline text={rp.label} />:</strong> <RichText inline text={rp.description} /></span>
              </label>
            ))}
          </div>
        )}
        {ans.submitted && item.sampleResponse && (
          <details className="mb-4 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <summary className="cursor-pointer rounded text-sm font-semibold text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-gray-200">View high-scoring sample response</summary>
            <RichText text={item.sampleResponse} className="mt-3 text-sm text-gray-700 dark:text-gray-300" />
          </details>
        )}
        {navFooter}
      </>
    )
  }

  /* ---------- LEQ ---------- */
  if (item.type === 'leq' && ans.type === 'leq') {
    // Guard against an out-of-bounds chosenPromptIndex so the prompt label never throws.
    const chosenPrompt = item.promptOptions[ans.chosenPromptIndex] ?? item.promptOptions[0]
    if (!chosenPrompt) return null
    const fieldId = `frq-${k}-essay`
    const sample = ans.submitted ? item.sampleResponses?.find(x => x.promptLabel === chosenPrompt.label) : undefined
    content = (
      <>
        <div className={`mb-4 ${card}`}>
          {itemHeader(item.title ?? 'Long Essay Question')}
          {item.promptOptions.length === 1 ? (
            <div className="text-sm text-gray-700 dark:text-gray-300"><RichText text={item.promptOptions[0].prompt} /></div>
          ) : (<>
            <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">Choose <strong>one</strong> of the following prompts:</p>
            <div className="space-y-2">
              {item.promptOptions.map((opt, i) => (
                <button key={i} type="button"
                  onClick={() => !ans.submitted && updateAnswer(a => a.type === 'leq' ? { ...a, chosenPromptIndex: i } : a)}
                  disabled={ans.submitted}
                  aria-pressed={ans.chosenPromptIndex === i}
                  className={`block w-full cursor-pointer rounded-xl border px-4 py-3 text-left text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring disabled:cursor-not-allowed ${ans.chosenPromptIndex === i ? t.sel : `border-gray-200 text-gray-700 ${t.hover} dark:border-gray-600 dark:text-gray-300`}`}>
                  <span className="mr-2 font-bold">{opt.label}.</span><RichText inline text={opt.prompt} />
                </button>
              ))}
            </div>
          </>)}
        </div>
        <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <label htmlFor={fieldId} className="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-100">{item.promptOptions.length === 1 ? 'Your essay:' : `Your essay (Option ${chosenPrompt.label}):`}</label>
          <textarea
            id={fieldId}
            value={ans.response}
            onChange={e => { const v = e.target.value; updateAnswer(a => a.type === 'leq' ? { ...a, response: v } : a) }}
            disabled={ans.submitted}
            placeholder={item.title ? 'Write your essay. Aim for a clear, defensible claim, specific evidence, and reasoning that ties them together.' : 'Write your LEQ essay. Aim for a clear defensible thesis, contextualization, specific historical evidence, complex reasoning, and a complex argument.'}
            className={`min-h-[300px] ${TEXTAREA}`}
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{ans.response.split(/\s+/).filter(Boolean).length} words</p>
        </div>
        {!ans.submitted && (
          <button type="button" onClick={() => updateAnswer(a => a.type === 'leq' ? { ...a, submitted: true } : a)}
            className={`mb-4 w-full cursor-pointer rounded-xl bg-gradient-to-r ${t.gradient} py-3 text-sm font-semibold text-white shadow transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950`}>
            Submit Essay & Reveal Rubric
          </button>
        )}
        {ans.submitted && (
          <div className="mb-4 rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="mb-3 text-sm font-semibold text-amber-900 dark:text-amber-200">Self-grade your essay ({item.rubric.length} points possible):</p>
            {item.rubric.map(rp => (
              <label key={rp.id} className="mb-3 flex cursor-pointer items-start gap-2 text-sm text-gray-800 dark:text-gray-200">
                <input type="checkbox" checked={!!ans.checked[rp.id]} onChange={e => { const v = e.target.checked; updateAnswer(a => a.type === 'leq' ? { ...a, checked: { ...a.checked, [rp.id]: v } } : a) }} className="mt-1 cursor-pointer" />
                <span><strong><RichText inline text={rp.label} />:</strong> <RichText inline text={rp.description} /></span>
              </label>
            ))}
          </div>
        )}
        {sample && (
          <details className="mb-4 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <summary className="cursor-pointer rounded text-sm font-semibold text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-gray-200">View high-scoring sample response for Option {chosenPrompt.label}</summary>
            <RichText text={sample.response} className="mt-3 text-sm text-gray-700 dark:text-gray-300" />
          </details>
        )}
        {navFooter}
      </>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="sticky top-16 z-10 border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-700 dark:bg-gray-900/95">
        <div className="container flex flex-wrap items-center justify-between gap-2 px-4 py-2.5">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${t.badge}`}>{stageTitle}</span>
            <span className="hidden text-sm font-medium text-gray-600 sm:inline dark:text-gray-400">{currentSection.shortName}</span>
          </div>
          <div className="flex items-center gap-3">
            <span
              role="timer"
              aria-label={`${stage.partLabel ? 'Part' : 'Section'} time remaining: ${fmt(left)}`}
              className={`rounded-md px-2 py-0.5 font-mono text-sm font-bold ${criticalTime ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' : lowTime ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300' : 'text-gray-800 dark:text-gray-100'}`}
            >
              {fmt(left)}
            </span>
            <button type="button" onClick={() => setExitOpen(true)} aria-haspopup="dialog" className={TOOL_BTN}>
              <LogOut className="h-3.5 w-3.5" aria-hidden="true" /> Exit
            </button>
          </div>
        </div>
        <div className="container flex flex-wrap items-center gap-2 px-4 pb-2" role="toolbar" aria-label="Exam tools">
          <button type="button" onClick={() => setNavOpen(true)} className={TOOL_BTN} aria-haspopup="dialog" aria-keyshortcuts="Alt+V">
            <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" /> Navigator
            <span className="font-normal text-gray-500 dark:text-gray-400">({answeredInStage}/{stageCount})</span>
          </button>
          {!reviewOpen && (
            <button type="button" onClick={openReview} className={TOOL_BTN}>
              <ClipboardCheck className="h-3.5 w-3.5" aria-hidden="true" /> Review screen
            </button>
          )}
          {tools.referenceSheet && (
            <button type="button" onClick={() => setRefOpen(true)} className={TOOL_BTN} aria-haspopup="dialog">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" /> Reference sheet
            </button>
          )}
          {stage.calculator ? (
            <DesmosCalculatorLink label="Calculator" />
          ) : examHasCalculator ? (
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-gray-300 px-2.5 py-1.5 text-xs font-semibold text-gray-600 dark:border-gray-600 dark:text-gray-300">
              <Ban className="h-3.5 w-3.5" aria-hidden="true" /> No calculator in this part
            </span>
          ) : null}
          <div className="ml-auto hidden sm:block">
            <ExamShortcutsHelp />
          </div>
        </div>
        {lowTime && (
          <div className={`border-t px-4 py-1 text-center text-xs font-semibold ${criticalTime ? 'border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300' : 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-300'}`}>
            {criticalTime ? `Under 1 minute: this ${unitWord} ends itself at 0:00.` : `Under 5 minutes left in this ${unitWord}.`}
          </div>
        )}
      </div>

      <FocusTrapDialog open={navOpen} onClose={() => setNavOpen(false)} title="Question navigator" className="mx-4 w-full max-w-2xl">
        <div className="p-5 sm:p-6">
          <h2 className="mb-3 pr-8 text-lg font-bold text-gray-900 dark:text-white">Navigator · {stageTitle}</h2>
          <QuestionNavigator items={navItems} onJump={jumpInStage} />
          <button
            type="button"
            onClick={openReview}
            className="mt-5 inline-flex items-center gap-1.5 rounded-xl border-2 border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <ClipboardCheck className="h-4 w-4" aria-hidden="true" /> Go to {unitWord} review
          </button>
        </div>
      </FocusTrapDialog>

      <FocusTrapDialog open={exitOpen} onClose={() => setExitOpen(false)} title="Leave the exam?" className="mx-4 w-full max-w-md">
        <div className="p-5 sm:p-6">
          <h2 className="mb-2 pr-8 text-lg font-bold text-gray-900 dark:text-white">Leave the exam?</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Your answers are saved on this device, so you can come back to this exam. The clock keeps running while you are away, as on test day.
          </p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Link href={backLink.href} className="rounded-xl bg-accent px-4 py-2 text-center text-sm font-semibold text-accent-foreground hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800">
              Save and leave
            </Link>
            <button type="button" onClick={() => setExitOpen(false)} className="rounded-xl border-2 border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">
              Keep working
            </button>
            <button type="button" onClick={discardAttempt} className="rounded-xl px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 dark:text-red-300 dark:hover:bg-red-900/20 sm:ml-auto">
              Discard this attempt
            </button>
          </div>
        </div>
      </FocusTrapDialog>

      {tools.referenceSheet && <ReferenceSheetModal open={refOpen} onClose={() => setRefOpen(false)} courseSlug={tools.referenceSheet} />}

      <div className="container px-4 py-5">
        {resumed && (
          <p className="mx-auto mb-4 flex max-w-3xl flex-wrap items-center justify-between gap-2 rounded-xl border border-accent-muted bg-accent-subtle px-4 py-2.5 text-sm text-gray-800 dark:text-gray-100" role="status">
            <span>Welcome back. Your exam was restored where you left off; the clock kept running while you were away.</span>
            <button type="button" onClick={() => setResumed(false)} className="rounded text-xs font-semibold text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted">Dismiss</button>
          </p>
        )}
        {reviewOpen ? (
          <ExamReviewScreen
            title={stageTitle}
            items={navItems}
            onJump={jumpInStage}
            onReturn={() => setReviewOpen(false)}
            onEnd={() => setConfirmEnd(true)}
            endLabel={isLastStage ? 'End section & finish exam' : `End ${unitWord}`}
          >
            {confirmEnd && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm dark:border-red-800 dark:bg-red-900/20">
                <p role="alert" className="font-semibold text-red-800 dark:text-red-200">
                  End {stageTitle}? You cannot come back to it. {answeredInStage} of {stageCount} answered.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button type="button" onClick={endStage} className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2">
                    {isLastStage ? 'Yes, end and finish' : `Yes, end this ${unitWord}`}
                  </button>
                  <button type="button" onClick={() => setConfirmEnd(false)} className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-600 dark:text-gray-200">
                    Keep working
                  </button>
                </div>
              </div>
            )}
          </ExamReviewScreen>
        ) : (
          <div className="mx-auto max-w-3xl">{content}</div>
        )}
      </div>
    </div>
  )
}

export default function FullLengthPracticeExam(config: FullLengthExamConfig) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolLearningResourceJsonLd({ subjectName: config.subject, tool: 'practice' })
          ),
        }}
      />
      <ToolBreadcrumb subjectName={config.subject} tool="Practice Exam" />
      <FullLengthPracticeExamInner {...config} />
      <ToolPageSeoBody subjectName={config.subject} tool="practice" />
    </>
  )
}
