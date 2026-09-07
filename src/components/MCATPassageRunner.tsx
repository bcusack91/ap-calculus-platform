'use client'

/**
 * Two-pane, passage-based MCAT runner — the real exam's defining format:
 * passage (and figure) on the left, questions on the right. Handles:
 *   - mode="practice": answer a passage, Check → reveal keys + explanations,
 *     advance. Per-passage and running score. (CARS library, section practice.)
 *     With `pacing`, a per-passage stopwatch tracks the CARS 10-min/passage
 *     soft target (gentle over-pace indicator, never a hard cutoff).
 *   - mode="exam" (flat): all passages in sequence, one timer + auto-submit,
 *     flagging, no feedback until Submit. Used for timed single-section runs.
 *   - mode="exam" + `sectioned`: the real full-length structure — 4 sequential
 *     sections in AAMC order, each with its own MCAT_SECTION_META timer, a
 *     section-start screen, hard submit at 0:00 (or "End section" early), timed
 *     breaks between sections (10 / 30 / 10 min, resumable early), and NO
 *     returning to a completed section. Section state (current section, clocks,
 *     answers, flags, strikes) persists to localStorage so a reload resumes
 *     mid-exam; the clocks are wall-clock deadlines, so time away still counts
 *     against the section.
 *
 * On mobile the two panes stack (passage collapsible) so passage reading stays
 * usable on a phone.
 */

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import MCATFigure from '@/components/MCATFigure'
import { renderRichText } from '@/lib/render-rich-text'
import { preloadKatex } from '@/lib/katex-lazy'
import { scoreMCAT, projectionRange, type MCATScoreReport } from '@/lib/mcat-scoring'
import { recommendFromFullLength } from '@/lib/mcat-fulllength-recs'
import { MCAT_SECTION_META, type MCATPassage, type MCATSection } from '@/data/mcat/types'
import 'katex/dist/katex.min.css'

function RichText({ text, className, inline = false }: { text: string; className?: string; inline?: boolean }) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let m = true
    preloadKatex().then(() => m && setReady(true))
    return () => { m = false }
  }, [])
  const html = useMemo(() => renderRichText(text), [text, ready]) // eslint-disable-line react-hooks/exhaustive-deps
  const Tag = inline ? 'span' : 'div'
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
}

type Mode = 'practice' | 'exam'
type Phase = 'section-start' | 'in-section' | 'break'

interface FlatQuestion {
  passageIdx: number
  qIdx: number
  section: MCATSection
}

interface SectionRange {
  section: MCATSection
  start: number // first passage index (inclusive)
  end: number // last passage index (inclusive)
  qCount: number
}

/** Real-exam break lengths AFTER sections 1, 2, 3 (10 min / 30-min lunch / 10 min). */
const BREAK_MINUTES = [10, 30, 10]

/** CARS soft pacing target: 10 minutes per passage. */
const PACING_TARGET_SECONDS = 600

/** "95:00"-style clock (minutes can exceed 59, matching exam-timer convention). */
function fmtClock(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds))
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

/** Where to send a student to remediate a weak section after a full-length. */
const SECTION_PRACTICE: Record<MCATSection, { href: string; label: string }> = {
  'chem-phys': { href: '/mcat-chem-phys', label: 'Chem/Phys passage practice' },
  cars: { href: '/mcat-cars', label: 'CARS passage practice' },
  'bio-biochem': { href: '/mcat-bio-biochem', label: 'Bio/Biochem passage practice' },
  'psych-soc': { href: '/mcat-psych-soc', label: 'Psych/Soc passage practice' },
}

/** Shape persisted to localStorage for mid-exam resume (sectioned mode only). */
interface SavedProgress {
  v: 1
  qCount: number
  phase: Phase
  sectionIdx: number
  active: number
  answers: Record<string, number>
  eliminated: Record<string, number[]>
  flags: number[]
  sectionDeadline: number | null
  breakDeadline: number | null
  sectionElapsed: Record<string, number>
}

export default function MCATPassageRunner({
  passages,
  mode,
  title,
  backHref,
  backLabel = 'Back',
  timeLimitMinutes,
  form,
  sectioned = false,
  pacing = false,
}: {
  passages: MCATPassage[]
  mode: Mode
  title: string
  backHref: string
  backLabel?: string
  timeLimitMinutes?: number
  /** Full-length form number (1|2). When set in exam mode, results are persisted. */
  form?: number
  /**
   * Exam mode only: run the real 4-section structure (per-section timers from
   * MCAT_SECTION_META, breaks, no returning) instead of one flat timer.
   * Requires `passages` to be grouped contiguously by section in exam order
   * (buildFullLength guarantees this).
   */
  sectioned?: boolean
  /** Practice mode only: per-passage 10-min soft-target stopwatch (CARS pacing). */
  pacing?: boolean
}) {
  const { data: session } = useSession()
  const [active, setActive] = useState(0) // active passage index
  // answers keyed "p:q" → selected option index
  const [answers, setAnswers] = useState<Record<string, number>>({})
  // eliminated options keyed "p:q" → set of struck indices
  const [eliminated, setEliminated] = useState<Record<string, Set<number>>>({})
  const [flags, setFlags] = useState<Set<number>>(new Set())
  const [checkedPassages, setCheckedPassages] = useState<Set<number>>(new Set()) // practice mode
  const [submitted, setSubmitted] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(timeLimitMinutes ? timeLimitMinutes * 60 : 0)
  const [showPassageMobile, setShowPassageMobile] = useState(true)

  // ----- Sectioned-exam state (only meaningful when `sectioned`) -----
  const [phase, setPhase] = useState<Phase>('section-start')
  const [sectionIdx, setSectionIdx] = useState(0)
  // Wall-clock deadlines (epoch ms) so reloads / backgrounded tabs still lose time.
  const [sectionDeadline, setSectionDeadline] = useState<number | null>(null)
  const [breakDeadline, setBreakDeadline] = useState<number | null>(null)
  const [breakSecondsLeft, setBreakSecondsLeft] = useState(0)
  // Seconds actually used per completed section (keyed by section id) — additive
  // submit-payload field and results-screen display.
  const [sectionElapsed, setSectionElapsed] = useState<Record<string, number>>({})
  const [confirmEnd, setConfirmEnd] = useState(false)
  const [restored, setRestored] = useState(false)

  // ----- CARS pacing state (practice + `pacing` only) -----
  const [passageSeconds, setPassageSeconds] = useState<Record<number, number>>({})

  const passage = passages[active]
  const key = (p: number, q: number) => `${p}:${q}`

  const flatQuestions: FlatQuestion[] = useMemo(
    () => passages.flatMap((p, pi) => p.questions.map((_, qi) => ({ passageIdx: pi, qIdx: qi, section: p.section }))),
    [passages],
  )
  const totalQuestions = flatQuestions.length

  // Contiguous per-section passage ranges (sectioned mode).
  const sectionRanges: SectionRange[] = useMemo(() => {
    if (!sectioned) return []
    const ranges: SectionRange[] = []
    passages.forEach((p, i) => {
      const last = ranges[ranges.length - 1]
      if (last && last.section === p.section) {
        last.end = i
        last.qCount += p.questions.length
      } else {
        ranges.push({ section: p.section, start: i, end: i, qCount: p.questions.length })
      }
    })
    return ranges
  }, [sectioned, passages])

  const currentRange = sectioned ? sectionRanges[Math.min(sectionIdx, sectionRanges.length - 1)] : null
  // Sections present at all — a single-section exam (timed section drill) gets a
  // section-scoped results screen instead of a fake 472-528 total.
  const sectionsPresent = useMemo(() => [...new Set(passages.map((p) => p.section))], [passages])

  const finish = useCallback(() => setSubmitted(true), [])

  // ---------- Sectioned flow: end the current section (early or at 0:00) ----------
  const endSection = useCallback(() => {
    if (!sectioned || phase !== 'in-section' || submitted) return
    const range = sectionRanges[sectionIdx]
    if (!range) return
    const allotted = MCAT_SECTION_META[range.section].minutes * 60
    const left = sectionDeadline ? Math.max(0, Math.ceil((sectionDeadline - Date.now()) / 1000)) : 0
    setSectionElapsed((e) => ({ ...e, [range.section]: allotted - left }))
    setConfirmEnd(false)
    setSectionDeadline(null)
    if (sectionIdx >= sectionRanges.length - 1) {
      setSubmitted(true)
    } else {
      const breakMin = BREAK_MINUTES[Math.min(sectionIdx, BREAK_MINUTES.length - 1)]
      setSectionIdx(sectionIdx + 1)
      setBreakSecondsLeft(breakMin * 60)
      setBreakDeadline(Date.now() + breakMin * 60_000)
      setPhase('break')
    }
  }, [sectioned, phase, submitted, sectionRanges, sectionIdx, sectionDeadline])

  function beginSection() {
    const range = sectionRanges[sectionIdx]
    if (!range) return
    const allotted = MCAT_SECTION_META[range.section].minutes * 60
    setActive(range.start)
    setShowPassageMobile(true)
    setConfirmEnd(false)
    setSecondsLeft(allotted)
    setSectionDeadline(Date.now() + allotted * 1000)
    setBreakDeadline(null)
    setPhase('in-section')
  }

  // ---------- Resume safety: restore sectioned progress from localStorage ----------
  const storageKey = sectioned && mode === 'exam' && form ? `mcat-fl-progress-v1:form-${form}` : null
  useEffect(() => {
    if (!storageKey) { setRestored(true); return }
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw) {
        const s = JSON.parse(raw) as SavedProgress
        // Signature guard: only restore onto the same assembled form.
        if (s && s.v === 1 && s.qCount === totalQuestions && sectionRanges.length > 0) {
          setAnswers(s.answers ?? {})
          setEliminated(Object.fromEntries(
            Object.entries(s.eliminated ?? {}).map(([k, arr]) => [k, new Set(Array.isArray(arr) ? arr : [])]),
          ))
          setFlags(new Set(Array.isArray(s.flags) ? s.flags : []))
          setSectionElapsed(s.sectionElapsed ?? {})
          const savedIdx = Math.min(Math.max(0, s.sectionIdx ?? 0), sectionRanges.length - 1)
          const savedRange = sectionRanges[savedIdx]
          const clampedActive = Math.min(Math.max(savedRange.start, s.active ?? savedRange.start), savedRange.end)
          setActive(clampedActive)
          if (s.phase === 'in-section' && typeof s.sectionDeadline === 'number') {
            if (s.sectionDeadline > Date.now()) {
              // Mid-section reload: keep the original deadline — time away counted.
              setSectionIdx(savedIdx)
              setSectionDeadline(s.sectionDeadline)
              setSecondsLeft(Math.max(0, Math.ceil((s.sectionDeadline - Date.now()) / 1000)))
              setPhase('in-section')
            } else {
              // Section expired while away: it's over — full time consumed.
              setSectionElapsed((e) => ({
                ...e,
                [savedRange.section]: MCAT_SECTION_META[savedRange.section].minutes * 60,
              }))
              if (savedIdx >= sectionRanges.length - 1) {
                setSectionIdx(savedIdx)
                setSubmitted(true) // last section expired → the exam auto-submits
              } else {
                // Break time elapsed while away too — land on the next start screen.
                setSectionIdx(savedIdx + 1)
                setPhase('section-start')
              }
            }
          } else if (s.phase === 'break' && typeof s.breakDeadline === 'number' && s.breakDeadline > Date.now()) {
            setSectionIdx(savedIdx)
            setBreakDeadline(s.breakDeadline)
            setBreakSecondsLeft(Math.max(0, Math.ceil((s.breakDeadline - Date.now()) / 1000)))
            setPhase('break')
          } else {
            // Saved at a start screen, or a break that expired while away.
            setSectionIdx(savedIdx)
            setPhase('section-start')
          }
        }
      }
    } catch { /* corrupt/unavailable storage → start fresh */ }
    setRestored(true)
    // Runs once per storageKey; passage data is static per form.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey])

  // Persist sectioned progress on every meaningful change; clear once submitted.
  useEffect(() => {
    if (!storageKey || !restored) return
    try {
      if (submitted) { localStorage.removeItem(storageKey); return }
      const payload: SavedProgress = {
        v: 1,
        qCount: totalQuestions,
        phase,
        sectionIdx,
        active,
        answers,
        eliminated: Object.fromEntries(Object.entries(eliminated).map(([k, set]) => [k, [...set]])),
        flags: [...flags],
        sectionDeadline,
        breakDeadline,
        sectionElapsed,
      }
      localStorage.setItem(storageKey, JSON.stringify(payload))
    } catch { /* storage unavailable — exam still runs, just without resume */ }
  }, [storageKey, restored, submitted, phase, sectionIdx, active, answers, eliminated, flags, sectionDeadline, breakDeadline, sectionElapsed, totalQuestions])

  // ---------- Timers ----------
  // Flat exam timer (non-sectioned) — decrement (and auto-submit at zero) from
  // the async timeout callback, never synchronously in the effect body.
  useEffect(() => {
    if (mode !== 'exam' || sectioned || submitted || !timeLimitMinutes || secondsLeft <= 0) return
    const t = setTimeout(() => {
      if (secondsLeft <= 1) finish()
      else setSecondsLeft((s) => s - 1)
    }, 1000)
    return () => clearTimeout(t)
  }, [mode, sectioned, submitted, secondsLeft, timeLimitMinutes, finish])

  // Sectioned per-section timer: recompute from the wall-clock deadline every
  // second so throttled/backgrounded tabs can't stretch the section.
  useEffect(() => {
    if (!sectioned || submitted || phase !== 'in-section' || !sectionDeadline) return
    const tick = () => {
      const left = Math.max(0, Math.ceil((sectionDeadline - Date.now()) / 1000))
      setSecondsLeft(left)
      if (left <= 0) endSection()
    }
    tick()
    const t = setInterval(tick, 1000)
    return () => clearInterval(t)
  }, [sectioned, submitted, phase, sectionDeadline, endSection])

  // Break countdown → back to the next section's start screen at 0:00.
  useEffect(() => {
    if (!sectioned || submitted || phase !== 'break' || !breakDeadline) return
    const tick = () => {
      const left = Math.max(0, Math.ceil((breakDeadline - Date.now()) / 1000))
      setBreakSecondsLeft(left)
      if (left <= 0) { setBreakDeadline(null); setPhase('section-start') }
    }
    tick()
    const t = setInterval(tick, 1000)
    return () => clearInterval(t)
  }, [sectioned, submitted, phase, breakDeadline])

  // CARS pacing stopwatch: counts up on the active passage until it's checked.
  useEffect(() => {
    if (!pacing || mode !== 'practice' || submitted || checkedPassages.has(active)) return
    const t = setInterval(() => setPassageSeconds((s) => ({ ...s, [active]: (s[active] ?? 0) + 1 })), 1000)
    return () => clearInterval(t)
  }, [pacing, mode, submitted, active, checkedPassages])

  function select(qi: number, oi: number) {
    if (submitted || checkedPassages.has(active)) return
    setAnswers((a) => ({ ...a, [key(active, qi)]: oi }))
  }
  function toggleEliminate(qi: number, oi: number) {
    if (submitted || checkedPassages.has(active)) return
    setEliminated((e) => {
      const set = new Set(e[key(active, qi)] ?? [])
      if (set.has(oi)) set.delete(oi); else set.add(oi)
      return { ...e, [key(active, qi)]: set }
    })
  }

  const report: MCATScoreReport | null = useMemo(() => {
    if (!submitted && mode === 'exam') return null
    const raw: Record<MCATSection, { correct: number; total: number }> = {
      'chem-phys': { correct: 0, total: 0 }, cars: { correct: 0, total: 0 },
      'bio-biochem': { correct: 0, total: 0 }, 'psych-soc': { correct: 0, total: 0 },
    }
    passages.forEach((p, pi) => p.questions.forEach((q, qi) => {
      raw[p.section].total++
      if (answers[key(pi, qi)] === q.correctAnswer) raw[p.section].correct++
    }))
    return scoreMCAT(raw)
  }, [submitted, mode, passages, answers])

  // Topic-level lesson recommendations for the full-length results screen,
  // attributed via passage discipline (see mcat-fulllength-recs). Exam mode only.
  const topicRecs = useMemo(
    () => (mode === 'exam' ? recommendFromFullLength(passages, answers) : []),
    [mode, passages, answers],
  )

  const answeredCount = Object.keys(answers).length

  // Persist a completed full-length once, so a weak result feeds the adaptive
  // study plan (mirrors the diagnostic). Best-effort & fire-and-forget: only
  // when signed in and we have a scored report; never blocks the results UI, and
  // a failed POST is swallowed. The ref guards against React re-renders firing
  // it twice; it resets on Retake (submitted -> false).
  const savedRef = useRef(false)
  useEffect(() => {
    if (!submitted) { savedRef.current = false; return }
    // `form` gates persistence: timed single-section drills run exam mode with
    // no form and must never write an 'mcat-full-length' row (a 1-of-4-section
    // "total" would pollute the adaptive plan).
    if (mode !== 'exam' || !form || !report || !session?.user?.id || savedRef.current) return
    savedRef.current = true
    fetch('/api/mcat-full-length/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        form,
        total: report.total,
        percentileLabel: report.percentileLabel,
        sections: report.sections.map((s) => ({
          section: s.section, short: s.short, correct: s.correct, total: s.total, scaled: s.scaled,
          // Additive: genuinely section-bounded time used (sectioned mode only).
          elapsedSeconds: sectionElapsed[s.section],
        })),
        recommendedTopics: topicRecs,
        weakAreas: report.sections
          .filter((s) => s.total > 0 && s.correct / s.total < 0.5)
          .map((s) => s.short),
      }),
    }).catch(() => { /* best-effort; results UI is unaffected */ })
  }, [submitted, mode, report, topicRecs, form, sectionElapsed, session?.user?.id])

  function retake() {
    setSubmitted(false)
    setAnswers({})
    setEliminated({})
    setFlags(new Set())
    setCheckedPassages(new Set())
    setActive(0)
    setPassageSeconds({})
    if (timeLimitMinutes) setSecondsLeft(timeLimitMinutes * 60)
    if (sectioned) {
      setPhase('section-start')
      setSectionIdx(0)
      setSectionDeadline(null)
      setBreakDeadline(null)
      setSectionElapsed({})
      setConfirmEnd(false)
      if (storageKey) { try { localStorage.removeItem(storageKey) } catch { /* noop */ } }
    }
  }

  // ---------- Results screen ----------
  if (submitted && report) {
    const singleSection = mode === 'exam' && sectionsPresent.length === 1
      ? report.sections.find((s) => s.section === sectionsPresent[0]) ?? null
      : null
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container max-w-3xl">
          <h1 className="mb-1 text-2xl font-black text-gray-900 dark:text-white">{title} — Results</h1>
          {mode === 'exam' && singleSection && (
            <>
              <div className="my-6 rounded-2xl border border-blue-200 bg-white p-6 text-center shadow-sm dark:border-blue-800 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Estimated {singleSection.short} section score</p>
                <p className="text-5xl font-black text-blue-600 dark:text-blue-400">{singleSection.scaled}</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{singleSection.correct}/{singleSection.total} correct · scale 118–132 · typically ±1</p>
              </div>
              <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Scaled scores are estimates from an unequated curve — use them for relative feedback, not as an official prediction.</p>
              <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-900/20">
                <p className="mb-2 text-sm font-bold text-amber-900 dark:text-amber-200">Keep the reps going</p>
                <Link
                  href={SECTION_PRACTICE[singleSection.section].href}
                  className="flex items-center justify-between rounded-lg border border-amber-300 bg-white px-4 py-2.5 transition hover:border-amber-400 hover:shadow-sm dark:border-amber-700 dark:bg-gray-800"
                >
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{SECTION_PRACTICE[singleSection.section].label} (untimed, with explanations)</span>
                  <span className="text-amber-600 dark:text-amber-400">→</span>
                </Link>
              </div>
            </>
          )}
          {mode === 'exam' && !singleSection && (
            <>
              {(() => {
                // One full-length from unequated practice items = medium
                // evidence, so the honest headline is a ±3 band, with the
                // point estimate de-emphasized below it.
                const range = projectionRange(report.total, 'medium')
                return (
                  <div className="my-6 rounded-2xl border border-blue-200 bg-white p-6 text-center shadow-sm dark:border-blue-800 dark:bg-gray-800">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Estimated total score</p>
                    <p className="text-5xl font-black text-blue-600 dark:text-blue-400">{range.low}–{range.high}</p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">midpoint {report.total} · {report.percentileLabel} · scale 472–528</p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Estimate from practice items — expect a score within this band</p>
                  </div>
                )
              })()}
              <div className="mb-6 grid gap-3 sm:grid-cols-2">
                {report.sections.map((s) => (
                  <div key={s.section} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{s.short}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{s.scaled}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{s.correct}/{s.total} correct</p>
                    {sectioned && sectionElapsed[s.section] != null && (
                      <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                        Time used {fmtClock(sectionElapsed[s.section])} of {MCAT_SECTION_META[s.section].minutes}:00
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Scaled scores are estimates from an unequated curve — use them for relative section feedback, not as an official prediction.</p>
              {(() => {
                // Route the weakest section(s) to targeted remediation. Flag any
                // section within 1 scaled point of the lowest so ties both show.
                const sorted = [...report.sections].sort((a, b) => a.scaled - b.scaled)
                const lowest = sorted[0].scaled
                const weak = sorted.filter((s) => s.scaled <= lowest + 1)
                return (
                  <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-900/20">
                    <p className="mb-3 text-sm font-bold text-amber-900 dark:text-amber-200">🎯 Focus your next study block here</p>
                    <div className="space-y-2">
                      {weak.map((s) => (
                        <Link
                          key={s.section}
                          href={SECTION_PRACTICE[s.section].href}
                          className="flex items-center justify-between rounded-lg border border-amber-300 bg-white px-4 py-2.5 transition hover:border-amber-400 hover:shadow-sm dark:border-amber-700 dark:bg-gray-800"
                        >
                          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            {s.short} <span className="text-gray-400">· {s.scaled}</span> — {SECTION_PRACTICE[s.section].label}
                          </span>
                          <span className="text-amber-600 dark:text-amber-400">→</span>
                        </Link>
                      ))}
                    </div>
                    <p className="mt-3 text-xs text-amber-700 dark:text-amber-400">
                      Then review the underlying lessons from your{' '}
                      <Link href="/mcat-diagnostic" className="underline">diagnostic plan</Link>.
                    </p>
                  </div>
                )
              })()}
            </>
          )}
          {mode === 'exam' && topicRecs.length > 0 && (
            <div className="mb-6 rounded-2xl border-2 border-emerald-300 bg-white p-5 shadow-sm dark:border-emerald-700 dark:bg-gray-800">
              <p className="mb-1 text-sm font-bold text-emerald-900 dark:text-emerald-200">📚 Recommended lessons</p>
              <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
                Based on the topics you missed most — open a lesson to remediate before your retake.
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {topicRecs.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/topics/${r.slug}`}
                    className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 transition hover:border-emerald-400 dark:border-emerald-700 dark:bg-emerald-900/20"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{r.name}</span>
                      <span className={`rounded-full px-1.5 py-0.5 text-[10px] ${r.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>
                        {r.priority === 'high' ? 'High' : 'Med'}
                      </span>
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400">Open →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {/* Review */}
          <h2 className="mb-3 mt-8 text-lg font-bold text-gray-900 dark:text-white">Review</h2>
          <div className="space-y-6">
            {passages.map((p, pi) => (
              <details key={p.id} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800" open={pi === 0}>
                <summary className="cursor-pointer text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {MCAT_SECTION_META[p.section].short} · {p.title}
                  {' '}({p.questions.filter((q, qi) => answers[key(pi, qi)] === q.correctAnswer).length}/{p.questions.length})
                </summary>
                <RichText text={p.passageText} className="prose prose-sm mt-3 max-w-none border-l-2 border-gray-200 pl-3 text-gray-600 dark:prose-invert dark:border-gray-700 dark:text-gray-400" />
                {p.chart && <div className="mt-3"><MCATFigure spec={p.chart} /></div>}
                {p.figure && <RichText text={p.figure} className="prose prose-sm mt-2 max-w-none dark:prose-invert" />}
                {p.questions.map((q, qi) => {
                  const picked = answers[key(pi, qi)]
                  return (
                    <div key={qi} className="mt-4 border-t border-gray-100 pt-3 dark:border-gray-700">
                      <RichText text={q.question} className="text-sm font-medium text-gray-900 dark:text-gray-100" />
                      {q.needsReview && <span className="ml-1 rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">draft</span>}
                      <div className="mt-2 space-y-1">
                        {q.options.map((opt, oi) => {
                          const isCorrect = oi === q.correctAnswer
                          const isPicked = picked === oi
                          return (
                            <div key={oi} className={`flex items-start gap-2 rounded px-2 py-1 text-sm ${isCorrect ? 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300' : isPicked ? 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300' : 'text-gray-600 dark:text-gray-400'}`}>
                              <span className="font-bold">{isCorrect ? '✓' : isPicked ? '✗' : String.fromCharCode(65 + oi)}</span>
                              <RichText inline text={opt} />
                            </div>
                          )
                        })}
                      </div>
                      <RichText text={`**Explanation:** ${q.explanation}`} className="prose prose-sm mt-2 max-w-none rounded bg-gray-50 p-2 dark:prose-invert dark:bg-gray-900/40" />
                    </div>
                  )
                })}
              </details>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <Link href={backHref} className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 font-semibold text-white">{backLabel}</Link>
            <button onClick={retake} className="rounded-xl border-2 border-gray-300 px-6 py-3 font-semibold text-gray-600 dark:border-gray-600 dark:text-gray-300">Retake</button>
          </div>
        </div>
      </div>
    )
  }

  // Sectioned mode waits one frame for the localStorage restore so a mid-exam
  // reload never flashes the Section-1 start screen before jumping back.
  if (sectioned && !restored) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <p className="text-sm text-gray-400">Loading exam…</p>
      </div>
    )
  }

  // ---------- Sectioned flow: section-start screen ----------
  if (sectioned && phase === 'section-start' && currentRange) {
    const meta = MCAT_SECTION_META[currentRange.section]
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container max-w-2xl py-12">
          <Link href={backHref} className="text-sm text-blue-600 hover:underline dark:text-blue-400">← {backLabel}</Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">{title} · Section {sectionIdx + 1} of {sectionRanges.length}</p>
          <h1 className="mb-2 mt-1 text-3xl font-black tracking-tight text-gray-900 dark:text-white">{meta.short}</h1>
          <p className="mb-6 text-gray-600 dark:text-gray-400">{meta.name}</p>

          <div className="mb-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{currentRange.qCount}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">questions</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{meta.minutes} min</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">hard time limit</p>
            </div>
          </div>

          {/* Exam map: completed / current / upcoming */}
          <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            {sectionRanges.map((r, i) => {
              const m = MCAT_SECTION_META[r.section]
              const done = i < sectionIdx
              const current = i === sectionIdx
              return (
                <div key={r.section} className={`flex items-center justify-between px-5 py-3 ${i > 0 ? 'border-t border-gray-100 dark:border-gray-700' : ''} ${current ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}>
                  <div>
                    <p className={`text-sm font-semibold ${done ? 'text-gray-400 line-through dark:text-gray-500' : 'text-gray-900 dark:text-white'}`}>{m.short}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{r.qCount} Q · {m.minutes} min</p>
                  </div>
                  <span className={`text-xs font-semibold ${done ? 'text-green-600 dark:text-green-400' : current ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>
                    {done
                      ? `Done${sectionElapsed[r.section] != null ? ` · ${fmtClock(sectionElapsed[r.section])}` : ''}`
                      : current ? 'Up next' : 'Locked'}
                  </span>
                </div>
              )
            })}
          </div>

          <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
            <p className="font-semibold">Real-exam rules apply</p>
            <ul className="mt-1 list-inside list-disc space-y-0.5 text-amber-800 dark:text-amber-300">
              <li>The clock starts when you begin and auto-submits this section at 0:00.</li>
              <li>You can move freely within the section, but once it ends you cannot return.</li>
              {sectionIdx < sectionRanges.length - 1 && (
                <li>A {BREAK_MINUTES[Math.min(sectionIdx, BREAK_MINUTES.length - 1)]}-minute break follows this section.</li>
              )}
            </ul>
          </div>

          <button onClick={beginSection} className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl">
            Begin {meta.short} — {meta.minutes}:00 on the clock
          </button>
        </div>
      </div>
    )
  }

  // ---------- Sectioned flow: break screen ----------
  if (sectioned && phase === 'break' && currentRange) {
    const nextMeta = MCAT_SECTION_META[currentRange.section]
    const breakMin = BREAK_MINUTES[Math.min(sectionIdx - 1, BREAK_MINUTES.length - 1)]
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container flex min-h-screen max-w-xl flex-col items-center justify-center py-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">{title}</p>
          <h1 className="mb-1 mt-2 text-3xl font-black text-gray-900 dark:text-white">
            {breakMin === 30 ? 'Mid-exam break' : 'Break'}
          </h1>
          <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            Up to {breakMin} minutes — stretch, hydrate, reset. Next up: <span className="font-semibold">{nextMeta.short}</span> ({currentRange.qCount} Q · {nextMeta.minutes} min).
          </p>
          <p role="timer" aria-label={`Break time remaining: ${fmtClock(breakSecondsLeft)}`} className="mb-8 font-mono text-6xl font-black text-gray-900 dark:text-white">
            {fmtClock(breakSecondsLeft)}
          </p>
          <button
            onClick={() => { setBreakDeadline(null); setPhase('section-start') }}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl"
          >
            Resume early → {nextMeta.short}
          </button>
          <p className="mt-4 text-xs text-gray-400">The break clock keeps running even if you leave this page. When it hits 0:00 you&apos;ll go to the {nextMeta.short} start screen — its section timer only starts when you begin.</p>
        </div>
      </div>
    )
  }

  // ---------- Runner screen ----------
  const passageChecked = checkedPassages.has(active)
  const rangeStart = sectioned && currentRange ? currentRange.start : 0
  const rangeEnd = sectioned && currentRange ? currentRange.end : passages.length - 1
  const showTimer = mode === 'exam' && (sectioned ? phase === 'in-section' : !!timeLimitMinutes)
  const mm = Math.floor(secondsLeft / 60)
  const ss = String(secondsLeft % 60).padStart(2, '0')
  const lowTime = secondsLeft < 300 // amber warning under 5 minutes
  const criticalTime = secondsLeft < 60
  const answeredInSection = sectioned
    ? flatQuestions.filter((fq) => fq.passageIdx >= rangeStart && fq.passageIdx <= rangeEnd && answers[key(fq.passageIdx, fq.qIdx)] !== undefined).length
    : answeredCount
  const sectionQCount = sectioned && currentRange ? currentRange.qCount : totalQuestions
  const pacingSecs = passageSeconds[active] ?? 0
  const overPace = pacing && pacingSecs > PACING_TARGET_SECONDS

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* top bar */}
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-gray-700 dark:bg-gray-900/90">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Link href={backHref} className="text-sm text-blue-600 hover:underline dark:text-blue-400">← {backLabel}</Link>
            <span className="hidden text-sm font-semibold text-gray-700 sm:inline dark:text-gray-200">{title}</span>
            <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {MCAT_SECTION_META[passage.section].short}
              {sectioned ? ` · ${sectionIdx + 1}/${sectionRanges.length}` : ''}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {showTimer ? (
              <span
                role="timer"
                aria-label={`Section time remaining: ${mm} minutes ${ss} seconds`}
                className={`rounded-md px-2 py-0.5 font-mono text-sm font-bold ${
                  criticalTime ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300'
                    : lowTime ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'
                      : 'text-gray-700 dark:text-gray-200'
                }`}
              >
                {mm}:{ss}
              </span>
            ) : null}
            {mode === 'practice' && pacing ? (
              <span
                role="timer"
                aria-label={`Time on this passage: ${fmtClock(pacingSecs)} of a 10 minute pacing goal`}
                className={`rounded-md px-2 py-0.5 font-mono text-xs font-bold ${overPace ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' : 'text-gray-600 dark:text-gray-300'}`}
              >
                {fmtClock(pacingSecs)} <span className="font-sans font-medium text-[10px]">/ 10:00{overPace ? ' · over pace' : ''}</span>
              </span>
            ) : null}
            <span className="text-xs text-gray-500 dark:text-gray-400">Passage {active - rangeStart + 1}/{rangeEnd - rangeStart + 1}</span>
          </div>
        </div>
        {showTimer && lowTime && (
          <div className={`border-t px-4 py-1 text-center text-xs font-semibold ${criticalTime ? 'border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300' : 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-300'}`}>
            {criticalTime ? 'Under 1 minute — the section submits itself at 0:00.' : 'Under 5 minutes in this section — make sure every question has an answer.'}
          </div>
        )}
      </div>

      <div className="container py-5">
        <button onClick={() => setShowPassageMobile((v) => !v)} className="mb-3 w-full rounded-lg border border-gray-200 py-2 text-sm font-medium text-gray-600 lg:hidden dark:border-gray-700 dark:text-gray-300">
          {showPassageMobile ? 'Hide' : 'Show'} passage
        </button>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Passage pane */}
          <div className={`${showPassageMobile ? '' : 'hidden'} lg:block`}>
            <div className="lg:sticky lg:top-20 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">{passage.title}</h2>
              <p className="mb-3 text-xs uppercase tracking-wide text-gray-400">{passage.discipline}</p>
              <RichText text={passage.passageText} className="prose prose-sm max-w-none leading-relaxed text-gray-800 dark:prose-invert dark:text-gray-200" />
              {passage.chart && <div className="mt-4"><MCATFigure spec={passage.chart} /></div>}
              {passage.figure && (
                <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-900/40">
                  <RichText text={passage.figure} className="prose prose-sm max-w-none dark:prose-invert" />
                </div>
              )}
            </div>
          </div>

          {/* Questions pane */}
          <div className="space-y-5">
            {passage.questions.map((q, qi) => {
              const k = key(active, qi)
              const picked = answers[k]
              const struck = eliminated[k] ?? new Set<number>()
              const revealed = passageChecked
              return (
                <div key={qi} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <RichText text={`**${qi + 1}.** ${q.question}`} className="text-sm font-medium text-gray-900 dark:text-gray-100" />
                    {q.needsReview && <span className="shrink-0 rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300" title="AI-authored — pending expert review">draft</span>}
                  </div>
                  <div className="space-y-2">
                    {q.options.map((opt, oi) => {
                      const isPicked = picked === oi
                      const isCorrect = oi === q.correctAnswer
                      const isStruck = struck.has(oi)
                      const cls = revealed
                        ? isCorrect ? 'border-green-400 bg-green-50 dark:border-green-500 dark:bg-green-900/20'
                          : isPicked ? 'border-red-400 bg-red-50 dark:border-red-500 dark:bg-red-900/20'
                          : 'border-gray-200 dark:border-gray-700'
                        : isPicked ? 'border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-blue-900/20'
                          : 'border-gray-200 hover:border-blue-300 dark:border-gray-700'
                      return (
                        <div key={oi} className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${cls}`}>
                          <button onClick={() => select(qi, oi)} disabled={revealed} aria-pressed={isPicked} className={`flex flex-1 items-start gap-2 text-left ${isStruck ? 'text-gray-400 line-through' : 'text-gray-800 dark:text-gray-200'}`}>
                            <span className="font-bold" aria-hidden="true">{revealed && isCorrect ? '✓' : revealed && isPicked ? '✗' : String.fromCharCode(65 + oi)}</span>
                            {revealed && (isCorrect || isPicked) && (
                              <span className="sr-only">{isCorrect ? 'Correct answer. ' : 'Your answer, incorrect. '}</span>
                            )}
                            <RichText inline text={opt} />
                          </button>
                          {!revealed && (
                            <button onClick={() => toggleEliminate(qi, oi)} aria-pressed={isStruck} aria-label={`${isStruck ? 'Restore' : 'Eliminate'} option ${String.fromCharCode(65 + oi)}`} className="shrink-0 text-xs text-gray-400 hover:text-red-500">strike</button>
                          )}
                        </div>
                      )
                    })}
                  </div>
                  {revealed && (
                    <RichText text={`**Explanation:** ${q.explanation}`} className="prose prose-sm mt-3 max-w-none rounded-lg bg-gray-50 p-3 dark:prose-invert dark:bg-gray-900/40" />
                  )}
                </div>
              )
            })}

            {/* Per-passage / nav controls */}
            <div className="flex flex-wrap items-center gap-3">
              {mode === 'practice' && !passageChecked && (
                <button
                  onClick={() => setCheckedPassages((s) => new Set(s).add(active))}
                  disabled={passage.questions.some((_, qi) => answers[key(active, qi)] === undefined)}
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-2.5 font-semibold text-white disabled:opacity-50"
                >Check answers</button>
              )}
              {mode === 'practice' && pacing && passageChecked && (
                <span className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${overPace ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'}`}>
                  Passage time {fmtClock(pacingSecs)}{overPace ? ' — over the 10:00 pace' : ' — on pace'}
                </span>
              )}
              <button onClick={() => { setFlags((f) => { const n = new Set(f); if (n.has(active)) n.delete(active); else n.add(active); return n }) }} aria-pressed={flags.has(active)} aria-label={flags.has(active) ? 'Unflag this passage for review' : 'Flag this passage for review'} className={`rounded-xl border-2 px-4 py-2.5 text-sm font-semibold ${flags.has(active) ? 'border-amber-400 text-amber-600' : 'border-gray-300 text-gray-500 dark:border-gray-600'}`}>
                {flags.has(active) ? '★ Flagged' : '☆ Flag'}
              </button>
              <div className="ml-auto flex gap-2">
                <button onClick={() => { setActive((i) => Math.max(rangeStart, i - 1)); setShowPassageMobile(true) }} disabled={active <= rangeStart} className="rounded-xl border-2 border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-600 disabled:opacity-40 dark:border-gray-600 dark:text-gray-300">Prev</button>
                {active < rangeEnd ? (
                  <button onClick={() => { setActive((i) => i + 1); setShowPassageMobile(true) }} className="rounded-xl bg-gray-800 px-5 py-2.5 text-sm font-semibold text-white dark:bg-gray-200 dark:text-gray-900">Next passage</button>
                ) : sectioned ? (
                  <button onClick={() => setConfirmEnd(true)} className="rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-5 py-2.5 text-sm font-semibold text-white">
                    {sectionIdx >= sectionRanges.length - 1 ? 'End section & submit exam' : 'End section'}
                  </button>
                ) : (
                  <button onClick={finish} className="rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-5 py-2.5 text-sm font-semibold text-white">{mode === 'exam' ? 'Submit exam' : 'Finish'}</button>
                )}
              </div>
            </div>
            {sectioned && confirmEnd && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm dark:border-red-800 dark:bg-red-900/20">
                <p className="font-semibold text-red-800 dark:text-red-200">
                  End {MCAT_SECTION_META[passage.section].short}? You cannot come back to this section — {answeredInSection}/{sectionQCount} answered.
                </p>
                <div className="mt-3 flex gap-2">
                  <button onClick={endSection} className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">
                    {sectionIdx >= sectionRanges.length - 1 ? 'Yes, end section & submit' : 'Yes, end this section'}
                  </button>
                  <button onClick={() => setConfirmEnd(false)} className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-600 dark:border-gray-600 dark:text-gray-300">Keep working</button>
                </div>
              </div>
            )}
            {mode === 'exam' && (
              <p className="text-center text-xs text-gray-400">
                {sectioned
                  ? `${answeredInSection}/${sectionQCount} answered in this section · it locks when the clock hits 0:00 or you end it`
                  : `${answeredCount}/${totalQuestions} answered · you can submit anytime`}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
