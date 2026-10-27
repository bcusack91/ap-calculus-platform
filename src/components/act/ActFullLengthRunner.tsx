'use client'

/**
 * Full-length Enhanced ACT runner: English 35 min → Math 50 → Reading 40 →
 * (Science 40), each section on its own clock that submits the section at
 * 0:00, with a break screen between sections (a 10-minute break after Math,
 * as on test day). One question per screen: passage on the left and the
 * question on the right on desktop, stacked on phones.
 *
 * English passages show each question's underlined portion with its number;
 * the current question's portion is highlighted and scrolled into view.
 * Flags, strike-through, a navigator and a review screen per section; the
 * sitting autosaves to localStorage (per student and form) so a reload
 * resumes it. Answers go to the server only on submit, which grades them.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { trackPracticeTestComplete } from '@/lib/analytics'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ClipboardCheck, Flag, LayoutGrid, Loader2 } from 'lucide-react'
import FocusTrapDialog from '@/components/FocusTrapDialog'
import PassageHighlighter from '@/components/exam/PassageHighlighter'
import QuestionNavigator, { type NavigatorItem } from '@/components/exam/QuestionNavigator'
import ExamReviewScreen from '@/components/exam/ExamReviewScreen'
import { ExamShortcutsHelp, examShortcutFor } from '@/components/exam/exam-shortcuts'
import { renderRichText } from '@/lib/render-rich-text'
import { preloadKatex } from '@/lib/katex-lazy'
import { renderActEnglishHtml } from '@/lib/act-english-markers'
import { ACT_FL_SECTION_LABELS, actFlSectionSeconds, actFlSections } from '@/lib/act-fl-scoring'
import { clearActFlProgress, writeActFlProgress, type ActFlProgress } from '@/lib/act-fl-progress'
import type { HighlightRange } from '@/lib/passage-highlights'
import type { ActFlPublicForm, ActFlPublicPassage, ActFlPublicQuestion } from '@/lib/question-sources/act'
import { ACT_FL_BLUEPRINT, type ActFLSection } from '@/data/act-practice/full-length/types'

const BREAK_AFTER_MATH_MIN = 10
const NO_HIGHLIGHTS: HighlightRange[] = []

const SECTION_DIRECTIONS: Record<ActFLSection, string> = {
  english:
    'Each passage has numbered portions, most of them underlined. For each question, choose the best version of its portion, or answer the question asked about the passage. If the original is best, choose NO CHANGE.',
  math: 'Solve each problem and choose the correct answer. You may use an approved calculator. Figures are not necessarily drawn to scale.',
  reading: 'Read each passage, then choose the best answer to each question about it. Refer to the passage as often as you need.',
  science: 'Each passage presents scientific information. Choose the best answer to each question using the passage, its tables and its figures.',
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']

function RichText({ text, className, inline = false }: { text: string; className?: string; inline?: boolean }) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let m = true
    preloadKatex().then(() => m && setReady(true)).catch(() => {})
    return () => { m = false }
  }, [])
  const html = useMemo(() => renderRichText(text), [text, ready]) // eslint-disable-line react-hooks/exhaustive-deps
  const Tag = inline ? 'span' : 'div'
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
}

export function fmtClock(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds))
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

/** ACT answer letters alternate by question number: odd A–D, even F–J. */
export function actOptionLetters(number: number): string[] {
  return number % 2 === 1 ? ['A', 'B', 'C', 'D'] : ['F', 'G', 'H', 'J']
}

export interface ActFlFlatQuestion {
  id: string
  section: ActFLSection
  /** 1-based number within the section. */
  number: number
  passage: ActFlPublicPassage | null
  passageIndex: number
  q: ActFlPublicQuestion
}

/** The sitting's questions per section, in order. */
export function flattenActForm(form: ActFlPublicForm, includeScience: boolean): Record<ActFLSection, ActFlFlatQuestion[]> {
  const out: Record<ActFLSection, ActFlFlatQuestion[]> = { english: [], math: [], reading: [], science: [] }
  for (const section of actFlSections(includeScience)) {
    let n = 0
    if (section === 'math') {
      out.math = form.math.map((q) => ({ id: q.id, section, number: ++n, passage: null, passageIndex: -1, q }))
      continue
    }
    form[section].forEach((p, pi) => p.questions.forEach((q) => out[section].push({ id: q.id, section, number: ++n, passage: p, passageIndex: pi, q })))
  }
  return out
}

const PASSAGE_KIND_LABEL: Record<string, string> = {
  narrative: 'Narrative essay',
  informative: 'Informative essay',
  argumentative: 'Argumentative essay',
  'literary-narrative': 'Literary narrative',
  'social-science': 'Social science',
  humanities: 'Humanities',
  'natural-science': 'Natural science',
  paired: 'Paired passages',
  'data-representation': 'Data representation',
  'research-summary': 'Research summary',
  'conflicting-viewpoints': 'Conflicting viewpoints',
}

export default function ActFullLengthRunner({
  form,
  userId,
  initial,
}: {
  form: ActFlPublicForm
  userId: string
  initial: ActFlProgress
}) {
  const router = useRouter()
  const [p, setP] = useState<ActFlProgress>(initial)
  const [now, setNow] = useState(() => Date.now())
  const [reviewOpen, setReviewOpen] = useState(false)
  const [confirmEnd, setConfirmEnd] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const submittingRef = useRef(false)
  const passagePaneRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const sections = useMemo(() => actFlSections(p.includeScience), [p.includeScience])
  const flat = useMemo(() => flattenActForm(form, p.includeScience), [form, p.includeScience])
  const section = sections[Math.min(p.sectionIdx, sections.length - 1)]
  const list = flat[section]
  const qIdx = Math.min(Math.max(0, p.qIdx), list.length - 1)
  const cur = list[qIdx]
  const limit = actFlSectionSeconds(section)
  const left = p.phase === 'in' && p.sectionDeadline ? Math.max(0, Math.ceil((p.sectionDeadline - now) / 1000)) : limit
  const breakLeft = p.phase === 'break' && p.breakDeadline ? Math.max(0, Math.ceil((p.breakDeadline - now) / 1000)) : 0

  // Persist every change (the clock tick included: per-question time).
  useEffect(() => {
    if (p.phase === 'submit' && !submitError) return // about to be cleared on success
    writeActFlProgress(userId, { ...p, savedAt: Date.now() })
  }, [p, userId, submitError])

  // One tick a second: the clocks, and a second on the current question.
  const curIdRef = useRef<string | null>(null)
  curIdRef.current = p.phase === 'in' && !reviewOpen ? cur?.id ?? null : null
  useEffect(() => {
    const t = setInterval(() => {
      setNow(Date.now())
      const id = curIdRef.current
      if (id && (typeof document === 'undefined' || document.visibilityState === 'visible')) {
        setP((prev) => (prev.phase === 'in' ? { ...prev, questionSeconds: { ...prev.questionSeconds, [id]: (prev.questionSeconds[id] ?? 0) + 1 } } : prev))
      }
    }, 1000)
    return () => clearInterval(t)
  }, [])

  const endSection = useCallback(() => {
    setP((prev) => {
      if (prev.phase !== 'in') return prev
      const secs = prev.sectionDeadline ? Math.max(0, Math.min(limit, limit - Math.ceil((prev.sectionDeadline - Date.now()) / 1000))) : limit
      const sectionSeconds = { ...prev.sectionSeconds, [section]: secs }
      if (prev.sectionIdx >= sections.length - 1) return { ...prev, sectionSeconds, phase: 'submit', sectionDeadline: null }
      return {
        ...prev,
        sectionSeconds,
        sectionIdx: prev.sectionIdx + 1,
        qIdx: 0,
        phase: 'break',
        sectionDeadline: null,
        breakDeadline: section === 'math' ? Date.now() + BREAK_AFTER_MATH_MIN * 60_000 : null,
      }
    })
    setReviewOpen(false)
    setConfirmEnd(false)
    setNavOpen(false)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0 })
  }, [limit, section, sections.length])

  // The section clock ran out (also when it ran out while the student was away).
  useEffect(() => {
    if (p.phase === 'in' && p.sectionDeadline && now >= p.sectionDeadline) endSection()
  }, [p.phase, p.sectionDeadline, now, endSection])

  const beginSection = () => {
    setP((prev) => ({ ...prev, phase: 'in', qIdx: 0, sectionDeadline: Date.now() + limit * 1000, breakDeadline: null }))
    setNow(Date.now())
    if (typeof window !== 'undefined') window.scrollTo({ top: 0 })
  }

  const submit = useCallback(async () => {
    if (submittingRef.current) return
    submittingRef.current = true
    setSubmitError(null)
    try {
      const res = await fetch('/api/act-full-length/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form: p.form,
          includeScience: p.includeScience,
          answers: p.answers,
          flags: p.flags,
          questionSeconds: p.questionSeconds,
          sectionSeconds: p.sectionSeconds,
          clientAttemptId: p.clientAttemptId,
        }),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok || typeof body.id !== 'string') throw new Error(body.error || 'Could not submit your test.')
      trackPracticeTestComplete({
        courseSlug: 'act',
        testId: `form-${p.form}`,
        attemptKey: body.id,
        score: typeof body.composite === 'number' ? body.composite : undefined,
      })
      clearActFlProgress(userId, p.form)
      router.push(`/act-practice/full-length/results/${body.id}`)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Could not submit your test.')
      submittingRef.current = false
    }
  }, [p, router, userId])

  useEffect(() => {
    if (p.phase === 'submit' && !submitError && !submittingRef.current) void submit()
  }, [p.phase, submit, submitError])

  const go = useCallback((i: number) => {
    setP((prev) => ({ ...prev, qIdx: Math.max(0, Math.min(list.length - 1, i)) }))
    setReviewOpen(false)
    setConfirmEnd(false)
    setNavOpen(false)
  }, [list.length])

  const toggleFlag = useCallback((id: string) => {
    setP((prev) => ({ ...prev, flags: prev.flags.includes(id) ? prev.flags.filter((f) => f !== id) : [...prev.flags, id] }))
  }, [])

  const choose = (id: string, oi: number) => setP((prev) => ({ ...prev, answers: { ...prev.answers, [id]: oi } }))
  const toggleStrike = (id: string, oi: number) =>
    setP((prev) => {
      const had = prev.struck[id] ?? []
      const next = had.includes(oi) ? had.filter((x) => x !== oi) : [...had, oi]
      return { ...prev, struck: { ...prev.struck, [id]: next } }
    })

  // Keyboard shortcuts (Alt+N / Alt+P / Alt+F / Alt+V).
  useEffect(() => {
    if (p.phase !== 'in') return
    const onKey = (e: KeyboardEvent) => {
      const action = examShortcutFor(e)
      if (!action) return
      e.preventDefault()
      if (action === 'next') go(qIdx + 1)
      else if (action === 'prev') go(qIdx - 1)
      else if (action === 'flag' && cur) toggleFlag(cur.id)
      else if (action === 'navigator') setNavOpen((v) => !v)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [p.phase, qIdx, cur, go, toggleFlag])

  // English: the current question's marker, highlighted and kept in view.
  const activeMarker = section === 'english' ? cur?.q.marker ?? null : null
  const englishHtml = useCallback((t: string) => renderActEnglishHtml(t, activeMarker), [activeMarker])
  const passageId = cur?.passage?.id ?? null
  useEffect(() => {
    const pane = passagePaneRef.current
    if (!pane) return
    const el = pane.querySelector<HTMLElement>('[data-act-active]')
    if (!el) return
    const paneBox = pane.getBoundingClientRect()
    const box = el.getBoundingClientRect()
    if (box.top < paneBox.top + 40 || box.bottom > paneBox.bottom - 20) {
      pane.scrollTo({ top: pane.scrollTop + (box.top - paneBox.top) - pane.clientHeight / 3, behavior: 'smooth' })
    }
  }, [activeMarker, passageId, p.phase, reviewOpen])
  // A new passage starts at its top.
  useEffect(() => {
    passagePaneRef.current?.scrollTo({ top: 0 })
  }, [passageId])
  // Phones (stacked layout): after Next/Previous the student is often scrolled
  // down at the buttons; bring the passage + new question back under the bar.
  const curId = cur?.id
  useEffect(() => {
    const el = contentRef.current
    const bar = barRef.current
    if (!el || !bar || typeof window === 'undefined') return
    const barBottom = bar.getBoundingClientRect().bottom
    const top = el.getBoundingClientRect().top
    if (top < barBottom - 1) window.scrollTo({ top: window.scrollY + top - barBottom - 8 })
  }, [curId, reviewOpen])

  const navItems: NavigatorItem[] = list.map((fq, i) => ({
    key: fq.id,
    label: String(fq.number),
    answered: p.answers[fq.id] !== undefined,
    flagged: p.flags.includes(fq.id),
    current: i === qIdx && !reviewOpen,
    ...(fq.passage ? { group: `Passage ${ROMAN[fq.passageIndex] ?? fq.passageIndex + 1}` } : {}),
  }))
  const answeredInSection = navItems.filter((n) => n.answered).length
  const isLastSection = p.sectionIdx >= sections.length - 1
  const title = `ACT Form ${form.form}`

  /* ---------------- Submitting ---------------- */
  if (p.phase === 'submit') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <div className="container max-w-xl py-16 text-center">
          {submitError ? (
            <div className="rounded-2xl border border-red-200 bg-white p-6 shadow-sm dark:border-red-800 dark:bg-gray-800">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Your test is saved on this device</h1>
              <p role="alert" className="mt-2 text-sm text-red-700 dark:text-red-300">{submitError}</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Nothing is lost. Check your connection and try again.</p>
              <button
                type="button"
                onClick={() => { void submit() }}
                className="mt-5 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
              >
                Try again
              </button>
            </div>
          ) : (
            <div aria-live="polite" className="flex flex-col items-center gap-3 text-gray-700 dark:text-gray-200">
              <Loader2 className="h-8 w-8 animate-spin text-accent" aria-hidden />
              <p className="font-semibold">Scoring your test…</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  /* ---------------- Section start / break ---------------- */
  if (p.phase === 'start' || p.phase === 'break') {
    const prev = p.sectionIdx > 0 ? sections[p.sectionIdx - 1] : null
    const onBreak = p.phase === 'break' && p.breakDeadline !== null && breakLeft > 0
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <div className="container max-w-2xl px-4 py-10">
          <Link href="/act-practice/full-length" className="text-sm font-medium text-accent hover:underline">← Full-length tests (progress is saved)</Link>
          {p.phase === 'break' && prev && (
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{ACT_FL_SECTION_LABELS[prev]} is done.</p>
              {onBreak ? (
                <>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Take your {BREAK_AFTER_MATH_MIN}-minute break. Begin whenever you are ready.</p>
                  <p role="timer" aria-label={`Break time remaining: ${fmtClock(breakLeft)}`} className="mt-3 font-mono text-5xl font-black text-gray-900 dark:text-white">
                    {fmtClock(breakLeft)}
                  </p>
                </>
              ) : (
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Stretch, then start the next section when you are ready. Its clock starts when you begin.</p>
              )}
            </div>
          )}
          <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-accent">
            {title} · Section {p.sectionIdx + 1} of {sections.length}
          </p>
          <h1 className="mt-1 text-3xl font-black tracking-tight text-gray-900 dark:text-white">{ACT_FL_SECTION_LABELS[section]}</h1>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{list.length}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">questions</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{ACT_FL_BLUEPRINT[section].minutes} min</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">ends itself at 0:00</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Directions: </span>
            {SECTION_DIRECTIONS[section]}
          </p>
          <ol className="mt-5 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
            {sections.map((s, i) => {
              const done = i < p.sectionIdx
              const current = i === p.sectionIdx
              return (
                <li key={s} className={`flex items-center justify-between px-4 py-2.5 text-sm ${i > 0 ? 'border-t border-gray-100 dark:border-gray-700' : ''} ${current ? 'bg-accent-subtle dark:bg-accent-light/10' : ''}`}>
                  <span className={done ? 'text-gray-400 line-through dark:text-gray-500' : 'font-medium text-gray-900 dark:text-white'}>{ACT_FL_SECTION_LABELS[s]}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {done ? `Done · ${fmtClock(p.sectionSeconds[s] ?? 0)}` : current ? 'Up next' : `${ACT_FL_BLUEPRINT[s].minutes} min`}
                  </span>
                </li>
              )
            })}
          </ol>
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            You can move freely inside a section, flag questions and use the review screen. Once a section ends you cannot go back to it.
          </p>
          <button
            type="button"
            onClick={beginSection}
            className="mt-6 w-full rounded-xl bg-accent px-6 py-4 text-lg font-semibold text-accent-foreground shadow transition hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950"
          >
            Begin {ACT_FL_SECTION_LABELS[section]} · {ACT_FL_BLUEPRINT[section].minutes}:00
          </button>
        </div>
      </div>
    )
  }

  /* ---------------- In a section ---------------- */
  if (!cur) return null
  const lowTime = left <= 5 * 60
  const criticalTime = left <= 60
  const letters = actOptionLetters(cur.number)
  const picked = p.answers[cur.id]
  const struck = p.struck[cur.id] ?? []
  const flagged = p.flags.includes(cur.id)
  const passage = cur.passage
  const toolBtn =
    'inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700'

  const questionCard = (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
          Question {cur.number} <span className="font-normal">of {list.length}</span>
        </h2>
        <button
          type="button"
          onClick={() => toggleFlag(cur.id)}
          aria-pressed={flagged}
          aria-keyshortcuts="Alt+F"
          className={`inline-flex shrink-0 items-center gap-1 rounded-md border px-2 py-1 text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring ${flagged ? 'border-amber-400 bg-amber-50 text-amber-800 dark:border-amber-500 dark:bg-amber-900/30 dark:text-amber-200' : 'border-gray-300 text-gray-600 hover:border-amber-300 dark:border-gray-600 dark:text-gray-300'}`}
        >
          <Flag className="h-3.5 w-3.5" fill={flagged ? 'currentColor' : 'none'} aria-hidden />
          {flagged ? 'Flagged' : 'Flag for review'}
        </button>
      </div>
      {cur.q.question.trim() && (
        <RichText text={cur.q.question} className="mb-4 text-base leading-relaxed text-gray-900 dark:text-gray-100" />
      )}
      <fieldset>
        <legend className="sr-only">Answer choices for question {cur.number}</legend>
        <div className="space-y-2">
          {cur.q.options.map((opt, oi) => {
            const isPicked = picked === oi
            const isStruck = struck.includes(oi)
            return (
              <div
                key={oi}
                className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm transition ${isPicked ? 'border-accent bg-accent-subtle ring-1 ring-accent dark:bg-accent-light/15' : 'border-gray-200 hover:border-accent-muted dark:border-gray-700'}`}
              >
                <button
                  type="button"
                  onClick={() => choose(cur.id, oi)}
                  aria-pressed={isPicked}
                  className={`flex flex-1 items-start gap-2.5 text-left focus:outline-none focus-visible:underline ${isStruck ? 'text-gray-400 line-through dark:text-gray-500' : 'text-gray-800 dark:text-gray-100'}`}
                >
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${isPicked ? 'border-accent bg-accent text-accent-foreground' : 'border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-300'}`} aria-hidden>
                    {letters[oi]}
                  </span>
                  <span className="sr-only">{letters[oi]}. </span>
                  <RichText inline text={opt} className="pt-0.5" />
                </button>
                <button
                  type="button"
                  onClick={() => toggleStrike(cur.id, oi)}
                  aria-pressed={isStruck}
                  aria-label={`${isStruck ? 'Restore' : 'Cross out'} choice ${letters[oi]}`}
                  className="shrink-0 rounded px-1.5 py-0.5 text-xs text-gray-400 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:hover:text-red-400"
                >
                  {isStruck ? 'undo' : <span className="line-through">abc</span>}
                </button>
              </div>
            )
          })}
        </div>
      </fieldset>
      <div className="mt-5 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => go(qIdx - 1)}
          disabled={qIdx === 0}
          aria-keyshortcuts="Alt+P"
          className="rounded-xl border-2 border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 disabled:opacity-40 dark:border-gray-600 dark:text-gray-200"
        >
          Previous
        </button>
        {qIdx < list.length - 1 ? (
          <button
            type="button"
            onClick={() => go(qIdx + 1)}
            aria-keyshortcuts="Alt+N"
            className="rounded-xl bg-gray-900 px-5 py-2 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setReviewOpen(true)}
            className="rounded-xl bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent-hover"
          >
            Review section
          </button>
        )}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div ref={barRef} className="sticky top-16 z-10 border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-700 dark:bg-gray-900/95">
        <div className="container flex flex-wrap items-center justify-between gap-2 px-4 py-2.5">
          <div className="flex min-w-0 items-center gap-2">
            <span className="hidden text-sm font-semibold text-gray-700 sm:inline dark:text-gray-200">{title}</span>
            <span className="rounded-full bg-accent-subtle px-2.5 py-0.5 text-xs font-semibold text-accent dark:bg-accent-light/20 dark:text-accent-muted">
              {ACT_FL_SECTION_LABELS[section]} · {p.sectionIdx + 1}/{sections.length}
            </span>
          </div>
          <span
            role="timer"
            aria-label={`Section time remaining: ${fmtClock(left)}`}
            className={`rounded-md px-2 py-0.5 font-mono text-sm font-bold ${criticalTime ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' : lowTime ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300' : 'text-gray-800 dark:text-gray-100'}`}
          >
            {fmtClock(left)}
          </span>
        </div>
        <div className="container flex flex-wrap items-center gap-2 px-4 pb-2" role="toolbar" aria-label="Exam tools">
          <button type="button" onClick={() => setNavOpen(true)} className={toolBtn} aria-haspopup="dialog" aria-keyshortcuts="Alt+V">
            <LayoutGrid className="h-3.5 w-3.5" aria-hidden /> Navigator
            <span className="font-normal text-gray-500 dark:text-gray-400">({answeredInSection}/{list.length})</span>
          </button>
          {!reviewOpen && (
            <button type="button" onClick={() => setReviewOpen(true)} className={toolBtn}>
              <ClipboardCheck className="h-3.5 w-3.5" aria-hidden /> Review screen
            </button>
          )}
          <div className="ml-auto hidden sm:block">
            <ExamShortcutsHelp />
          </div>
        </div>
        {lowTime && (
          <div className={`border-t px-4 py-1 text-center text-xs font-semibold ${criticalTime ? 'border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300' : 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-300'}`}>
            {criticalTime ? 'Under 1 minute: the section ends itself at 0:00.' : 'Under 5 minutes left. There is no penalty for guessing, so answer every question.'}
          </div>
        )}
      </div>

      <FocusTrapDialog open={navOpen} onClose={() => setNavOpen(false)} title="Question navigator" className="mx-4 w-full max-w-2xl">
        <div className="p-5 sm:p-6">
          <h2 className="mb-3 pr-8 text-lg font-bold text-gray-900 dark:text-white">Navigator · {ACT_FL_SECTION_LABELS[section]}</h2>
          <QuestionNavigator items={navItems} onJump={go} />
          <button
            type="button"
            onClick={() => { setNavOpen(false); setReviewOpen(true) }}
            className="mt-5 inline-flex items-center gap-1.5 rounded-xl border-2 border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <ClipboardCheck className="h-4 w-4" aria-hidden /> Go to section review
          </button>
        </div>
      </FocusTrapDialog>

      <div ref={contentRef} className="container scroll-mt-40 px-4 py-5">
        {reviewOpen ? (
          <ExamReviewScreen
            title={ACT_FL_SECTION_LABELS[section]}
            items={navItems}
            onJump={go}
            onReturn={() => setReviewOpen(false)}
            onEnd={() => setConfirmEnd(true)}
            endLabel={isLastSection ? 'End section & submit test' : 'End section'}
          >
            {confirmEnd && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm dark:border-red-800 dark:bg-red-900/20">
                <p role="alert" className="font-semibold text-red-800 dark:text-red-200">
                  End {ACT_FL_SECTION_LABELS[section]}? You cannot come back to it. {answeredInSection} of {list.length} answered.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button type="button" onClick={endSection} className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2">
                    {isLastSection ? 'Yes, end and submit' : 'Yes, end this section'}
                  </button>
                  <button type="button" onClick={() => setConfirmEnd(false)} className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 dark:border-gray-600 dark:text-gray-200">
                    Keep working
                  </button>
                </div>
              </div>
            )}
          </ExamReviewScreen>
        ) : passage ? (
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
            <section aria-label={`Passage ${ROMAN[cur.passageIndex] ?? cur.passageIndex + 1}`} className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="border-b border-gray-100 px-5 pb-2 pt-4 dark:border-gray-700">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Passage {ROMAN[cur.passageIndex] ?? cur.passageIndex + 1}
                  {PASSAGE_KIND_LABEL[passage.kind] ? ` · ${PASSAGE_KIND_LABEL[passage.kind]}` : ''}
                </p>
                <h2 className="text-base font-bold text-gray-900 dark:text-white">{passage.title}</h2>
              </div>
              <div ref={passagePaneRef} className="max-h-[42vh] overflow-y-auto px-5 py-3 lg:max-h-[calc(100vh-15rem)]" data-testid="act-passage-pane">
                <PassageHighlighter
                  key={passage.id}
                  text={passage.text}
                  highlights={p.highlights[passage.id] ?? NO_HIGHLIGHTS}
                  onChange={(next) => setP((prev) => ({ ...prev, highlights: { ...prev.highlights, [passage.id]: next } }))}
                  label={`Passage: ${passage.title}`}
                  {...(section === 'english' ? { renderHtml: englishHtml } : {})}
                  className="act-passage text-[0.95rem] leading-7 text-gray-800 dark:text-gray-200 [&_table]:my-3 [&_table]:text-sm [&_td]:border [&_td]:border-gray-300 [&_td]:px-2 [&_td]:py-1 [&_th]:border [&_th]:border-gray-300 [&_th]:bg-gray-50 [&_th]:px-2 [&_th]:py-1 dark:[&_td]:border-gray-600 dark:[&_th]:border-gray-600 dark:[&_th]:bg-gray-900/40"
                />
              </div>
            </section>
            <div>{questionCard}</div>
          </div>
        ) : (
          <div className="mx-auto max-w-3xl">{questionCard}</div>
        )}
        {!reviewOpen && (
          <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
            {answeredInSection} of {list.length} answered · this section ends at 0:00 or when you end it
          </p>
        )}
      </div>
    </div>
  )
}
