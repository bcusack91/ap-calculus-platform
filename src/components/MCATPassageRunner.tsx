'use client'

/**
 * Two-pane, passage-based MCAT runner — the real exam's defining format:
 * passage (and figure) on the left, questions on the right. Handles both:
 *   - mode="practice": answer a passage, Check → reveal keys + explanations,
 *     advance. Per-passage and running score. (CARS library, section practice.)
 *   - mode="exam": all passages in sequence, timer + auto-submit, flagging, no
 *     feedback until final Submit → section-aware 472-528 report + review mode.
 *
 * On mobile the two panes stack (passage collapsible) so passage reading stays
 * usable on a phone.
 */

import { useState, useEffect, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { renderRichText } from '@/lib/render-rich-text'
import { preloadKatex } from '@/lib/katex-lazy'
import { scoreMCAT, type MCATScoreReport } from '@/lib/mcat-scoring'
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

interface FlatQuestion {
  passageIdx: number
  qIdx: number
  section: MCATSection
}

/** Where to send a student to remediate a weak section after a full-length. */
const SECTION_PRACTICE: Record<MCATSection, { href: string; label: string }> = {
  'chem-phys': { href: '/mcat-chem-phys', label: 'Chem/Phys passage practice' },
  cars: { href: '/mcat-cars', label: 'CARS passage practice' },
  'bio-biochem': { href: '/mcat-bio-biochem', label: 'Bio/Biochem passage practice' },
  'psych-soc': { href: '/mcat-psych-soc', label: 'Psych/Soc passage practice' },
}

export default function MCATPassageRunner({
  passages,
  mode,
  title,
  backHref,
  backLabel = 'Back',
  timeLimitMinutes,
}: {
  passages: MCATPassage[]
  mode: Mode
  title: string
  backHref: string
  backLabel?: string
  timeLimitMinutes?: number
}) {
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

  const passage = passages[active]
  const key = (p: number, q: number) => `${p}:${q}`

  const flatQuestions: FlatQuestion[] = useMemo(
    () => passages.flatMap((p, pi) => p.questions.map((_, qi) => ({ passageIdx: pi, qIdx: qi, section: p.section }))),
    [passages],
  )

  const finish = useCallback(() => setSubmitted(true), [])

  // Exam timer — decrement (and auto-submit at zero) from the async timeout
  // callback, never synchronously in the effect body.
  useEffect(() => {
    if (mode !== 'exam' || submitted || !timeLimitMinutes || secondsLeft <= 0) return
    const t = setTimeout(() => {
      if (secondsLeft <= 1) finish()
      else setSecondsLeft((s) => s - 1)
    }, 1000)
    return () => clearTimeout(t)
  }, [mode, submitted, secondsLeft, timeLimitMinutes, finish])

  function select(qi: number, oi: number) {
    if (submitted || checkedPassages.has(active)) return
    setAnswers((a) => ({ ...a, [key(active, qi)]: oi }))
  }
  function toggleEliminate(qi: number, oi: number) {
    if (submitted || checkedPassages.has(active)) return
    setEliminated((e) => {
      const set = new Set(e[key(active, qi)] ?? [])
      set.has(oi) ? set.delete(oi) : set.add(oi)
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
  }, [submitted, mode, passages, answers]) // eslint-disable-line react-hooks/exhaustive-deps

  const answeredCount = Object.keys(answers).length
  const totalQuestions = flatQuestions.length

  // ---------- Results screen ----------
  if (submitted && report) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-8 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container max-w-3xl">
          <h1 className="mb-1 text-2xl font-black text-gray-900 dark:text-white">{title} — Results</h1>
          {mode === 'exam' && (
            <>
              <div className="my-6 rounded-2xl border border-blue-200 bg-white p-6 text-center shadow-sm dark:border-blue-800 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Estimated total score</p>
                <p className="text-5xl font-black text-blue-600 dark:text-blue-400">{report.total}</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{report.percentileLabel} · scale 472–528</p>
              </div>
              <div className="mb-6 grid gap-3 sm:grid-cols-2">
                {report.sections.map((s) => (
                  <div key={s.section} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{s.short}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{s.scaled}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{s.correct}/{s.total} correct</p>
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
            <button onClick={() => { setSubmitted(false); setAnswers({}); setEliminated({}); setCheckedPassages(new Set()); setActive(0); if (timeLimitMinutes) setSecondsLeft(timeLimitMinutes * 60) }} className="rounded-xl border-2 border-gray-300 px-6 py-3 font-semibold text-gray-600 dark:border-gray-600 dark:text-gray-300">Retake</button>
          </div>
        </div>
      </div>
    )
  }

  // ---------- Runner screen ----------
  const passageChecked = checkedPassages.has(active)
  const mm = Math.floor(secondsLeft / 60)
  const ss = String(secondsLeft % 60).padStart(2, '0')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* top bar */}
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-gray-700 dark:bg-gray-900/90">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Link href={backHref} className="text-sm text-blue-600 hover:underline dark:text-blue-400">← {backLabel}</Link>
            <span className="hidden text-sm font-semibold text-gray-700 sm:inline dark:text-gray-200">{title}</span>
            <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">{MCAT_SECTION_META[passage.section].short}</span>
          </div>
          <div className="flex items-center gap-3">
            {mode === 'exam' && timeLimitMinutes ? (
              <span role="timer" aria-label={`Time remaining: ${mm} minutes ${ss} seconds`} className={`font-mono text-sm font-bold ${secondsLeft < 300 ? 'text-red-600' : 'text-gray-700 dark:text-gray-200'}`}>{mm}:{ss}</span>
            ) : null}
            <span className="text-xs text-gray-500 dark:text-gray-400">Passage {active + 1}/{passages.length}</span>
          </div>
        </div>
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
              <button onClick={() => { setFlags((f) => { const n = new Set(f); n.has(active) ? n.delete(active) : n.add(active); return n }) }} aria-pressed={flags.has(active)} aria-label={flags.has(active) ? 'Unflag this passage for review' : 'Flag this passage for review'} className={`rounded-xl border-2 px-4 py-2.5 text-sm font-semibold ${flags.has(active) ? 'border-amber-400 text-amber-600' : 'border-gray-300 text-gray-500 dark:border-gray-600'}`}>
                {flags.has(active) ? '★ Flagged' : '☆ Flag'}
              </button>
              <div className="ml-auto flex gap-2">
                <button onClick={() => { setActive((i) => Math.max(0, i - 1)); setShowPassageMobile(true) }} disabled={active === 0} className="rounded-xl border-2 border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-600 disabled:opacity-40 dark:border-gray-600 dark:text-gray-300">Prev</button>
                {active < passages.length - 1 ? (
                  <button onClick={() => { setActive((i) => i + 1); setShowPassageMobile(true) }} className="rounded-xl bg-gray-800 px-5 py-2.5 text-sm font-semibold text-white dark:bg-gray-200 dark:text-gray-900">Next passage</button>
                ) : (
                  <button onClick={finish} className="rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-5 py-2.5 text-sm font-semibold text-white">{mode === 'exam' ? 'Submit exam' : 'Finish'}</button>
                )}
              </div>
            </div>
            {mode === 'exam' && (
              <p className="text-center text-xs text-gray-400">{answeredCount}/{totalQuestions} answered · you can submit anytime</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
