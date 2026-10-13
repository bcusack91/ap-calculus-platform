'use client'

/**
 * The permanent review of one attempt (/review/<kind>/<id>): every question
 * with the option the student picked, the answer, the explanation, flags and
 * time. Fed by GET /api/review/<kind>/<id> (src/lib/question-resolver.ts).
 *
 * Marks never rely on colour alone: every option the student picked or that
 * is correct carries an icon and a text label ("Your answer", "Correct
 * answer"). Questions that can no longer be rebuilt render a muted card.
 */

import { Fragment, useEffect, useMemo, useState } from 'react'
import {
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Flag,
  HelpCircle,
  History,
  MinusCircle,
  X,
  XCircle,
} from 'lucide-react'
import { preloadKatex } from '@/lib/katex-lazy'
import { renderRichText } from '@/lib/render-rich-text'
import MCATFigure from '@/components/MCATFigure'
import {
  DataVisual,
  RichTextBlock,
  type DiagnosticDataTable,
  type DiagnosticFigure,
} from '@/components/MCATDiagnosticVisuals'
import type { MCATFigureSpec } from '@/data/mcat/types'
import { AnswerStatsSummary, formatShare, sharesOf, useAnswerStats, type QuestionStat } from '@/components/AnswerStats'
import AskAboutQuestion from '@/components/AskAboutQuestion'
import MakeFlashcardButton from '@/components/MakeFlashcardButton'
import ReviewReport from '@/components/ReviewReport'
import { buildReviewReport } from '@/lib/review-report'

export interface ReviewPassageView {
  id: string
  title: string
  body: string
  /** Source-specific figure payload; only shapes we recognise are drawn. */
  figure?: unknown
}

export interface AttemptReviewItem {
  index: number
  /** Number the student saw, when it isn't index + 1 (ACT numbers each section from 1). */
  displayNumber?: number
  questionKey: string
  question: string
  /** Options in the order they were shown. Empty for a grid-in. */
  options: string[]
  correctIndex: number
  explanation: string
  passage?: ReviewPassageView | null
  chosenIndex: number | null
  chosenText?: string | null
  flagged: boolean
  durationMs?: number | null
  topicSlug?: string
  topicTitle?: string
  discipline?: string
  gridIn?: { correctAnswer: number; acceptableAnswers?: number[]; tolerance?: number }
  revised?: boolean
  /** Server-graded result, when the source provides one (grid-ins). */
  correct?: boolean
  /** Reasoning-skill tag (MCAT CARS). */
  skill?: string
  /** One explanation per option, in the shown order (authored items only). */
  optionExplanations?: string[]
}

export interface AttemptReviewData {
  kind: string
  id: string
  title: string
  course: string
  takenAt: string
  score: { correct: number; total: number; label?: string } | null
  backHref: string
  items: (AttemptReviewItem | null)[]
}

export type ItemStatus = 'correct' | 'wrong' | 'skipped' | 'typed'

const isGridIn = (it: AttemptReviewItem) => it.options.length === 0 || it.correctIndex < 0

/** How the student did on one question. A typed grid-in with no server grade is 'typed'. */
export function itemStatus(it: AttemptReviewItem): ItemStatus {
  if (isGridIn(it)) {
    if (!it.chosenText?.trim()) return 'skipped'
    if (typeof it.correct === 'boolean') return it.correct ? 'correct' : 'wrong'
    return 'typed'
  }
  if (it.chosenIndex == null) return 'skipped'
  if (typeof it.correct === 'boolean') return it.correct ? 'correct' : 'wrong'
  return it.chosenIndex === it.correctIndex ? 'correct' : 'wrong'
}

/** "1m 12s", "45s", "2h 3m". */
export function formatDuration(ms: number): string {
  const s = Math.max(0, Math.round(ms / 1000))
  if (s < 60) return `${s}s`
  const m = Math.floor(s / 60)
  if (m < 60) return `${m}m ${s % 60}s`
  return `${Math.floor(m / 60)}h ${m % 60}m`
}

const letter = (i: number) => String.fromCharCode(65 + i)

/** Inline rich text (KaTeX, markdown emphasis); `ready` re-renders it once KaTeX loads. */
function Rich({ text, as: Tag = 'span', className }: { text: string; as?: 'span' | 'div' | 'p'; className?: string; ready?: boolean }) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: renderRichText(text) }} />
}

type Rec = Record<string, unknown>
const asRec = (v: unknown): Rec | null => (v && typeof v === 'object' && !Array.isArray(v) ? (v as Rec) : null)
const hasSeries = (v: unknown): boolean => {
  const r = asRec(v)
  return !!r && Array.isArray(r.xValues) && Array.isArray(r.yValues)
}

/** The passage's figure, drawing only the shapes we know: authored markdown, a chart spec, a data table / figure. */
function PassageFigure({ figure }: { figure: unknown }) {
  const f = asRec(figure)
  if (!f) return null
  const markdown = typeof f.figureMarkdown === 'string' && f.figureMarkdown.trim() ? f.figureMarkdown : null
  const chart = hasSeries(f.chart) ? (f.chart as MCATFigureSpec) : null
  const dataTable = hasSeries(f.dataTable) ? (f.dataTable as DiagnosticDataTable) : undefined
  const fig = hasSeries(f.figure) ? (f.figure as DiagnosticFigure) : undefined
  return (
    <>
      {markdown && (
        <RichTextBlock text={markdown} className="mt-4 overflow-x-auto text-sm leading-relaxed text-gray-800 dark:text-gray-200" />
      )}
      {chart && (
        <div className="mt-4">
          <MCATFigure spec={chart} />
        </div>
      )}
      {(dataTable || fig) && <DataVisual data={{ dataTable, figure: fig }} />}
    </>
  )
}

export function PassageContent({ passage }: { passage: ReviewPassageView }) {
  return (
    <>
      {passage.body && (
        <RichTextBlock text={passage.body} className="mt-3 text-sm leading-relaxed text-gray-800 dark:text-gray-200" />
      )}
      {passage.figure != null && <PassageFigure figure={passage.figure} />}
    </>
  )
}

/** A collapsible passage block ("Show passage"), shared by the review and the re-quiz. */
export function PassageDisclosure({ passage, label, defaultOpen = false }: { passage: ReviewPassageView; label?: string; defaultOpen?: boolean }) {
  return (
    <details open={defaultOpen} className="group rounded-xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-900/40">
      <summary className="cursor-pointer select-none rounded text-sm font-semibold text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-gray-200">
        <span className="group-open:hidden">Show passage</span>
        <span className="hidden group-open:inline">Hide passage</span>
        {passage.title && <span className="font-normal text-gray-500 dark:text-gray-400"> · {passage.title}</span>}
        {label && <span className="font-normal text-gray-500 dark:text-gray-400"> · {label}</span>}
      </summary>
      <PassageContent passage={passage} />
    </details>
  )
}

const STATUS_META: Record<ItemStatus, { label: string; Icon: typeof CheckCircle2; cls: string }> = {
  correct: { label: 'Correct', Icon: CheckCircle2, cls: 'text-green-700 dark:text-green-400' },
  wrong: { label: 'Incorrect', Icon: XCircle, cls: 'text-red-700 dark:text-red-400' },
  skipped: { label: 'Skipped', Icon: MinusCircle, cls: 'text-amber-700 dark:text-amber-400' },
  typed: { label: 'Typed answer', Icon: HelpCircle, cls: 'text-gray-600 dark:text-gray-300' },
}

/** Usable per-option explanations for these options, or null. */
export function usableOptionExplanations(item: { options: string[]; optionExplanations?: string[] }): string[] | null {
  const e = item.optionExplanations
  return e && e.length === item.options.length && e.some((x) => x?.trim()) ? e : null
}

/**
 * The options list with the student's pick and the key marked in text and
 * icons. Optional extras, shown only after answering: `shares` (how other
 * students answered, aligned to the options) and per-option explanations.
 */
export function OptionList({
  item,
  chosenIndex,
  ready,
  shares,
  pickLabel = 'Your answer',
}: {
  item: Pick<AttemptReviewItem, 'options' | 'correctIndex' | 'optionExplanations'>
  chosenIndex: number | null
  ready?: boolean
  shares?: number[] | null
  /** Badge on the chosen option ("Student's answer" when a teacher is reviewing). */
  pickLabel?: string
}) {
  const perOption = usableOptionExplanations(item)
  const bars = shares && shares.length === item.options.length ? shares : null
  return (
    <ul className="space-y-1.5">
      {item.options.map((opt, oi) => {
        const isKey = oi === item.correctIndex
        const isPick = oi === chosenIndex
        const cls = isKey
          ? 'border-green-300 bg-green-50 text-green-900 dark:border-green-700 dark:bg-green-900/25 dark:text-green-200'
          : isPick
            ? 'border-red-300 bg-red-50 text-red-900 dark:border-red-700 dark:bg-red-900/25 dark:text-red-200'
            : 'border-gray-200 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300'
        return (
          <li key={oi} className={`flex flex-wrap items-start gap-2 rounded-lg border px-3 py-2 text-sm ${cls}`}>
            <span className="font-bold">{letter(oi)}.</span>
            <Rich text={opt} className="min-w-0 flex-1 break-words" ready={ready} />
            {(isPick || isKey) && (
              <span className="flex shrink-0 flex-wrap gap-1.5">
                {isPick && (
                  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${isKey ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200'}`}>
                    {isKey ? <Check className="h-3.5 w-3.5" aria-hidden /> : <X className="h-3.5 w-3.5" aria-hidden />}
                    {pickLabel}
                  </span>
                )}
                {isKey && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-900/50 dark:text-green-200">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                    Correct answer
                  </span>
                )}
              </span>
            )}
            {bars && (
              <span className="flex basis-full items-center gap-2 pl-5">
                <span className="h-1.5 flex-1 overflow-hidden rounded bg-gray-200 dark:bg-gray-700" aria-hidden>
                  <span className="block h-full rounded bg-accent dark:bg-accent-muted" style={{ width: `${Math.max(0, Math.min(1, bars[oi])) * 100}%` }} />
                </span>
                <span className="w-10 shrink-0 text-right text-xs font-medium tabular-nums text-gray-700 dark:text-gray-300">
                  {formatShare(bars[oi])}
                  <span className="sr-only"> of students chose {letter(oi)}</span>
                </span>
              </span>
            )}
            {perOption?.[oi]?.trim() && (
              <span className="block basis-full pl-5 text-xs leading-relaxed text-gray-700 dark:text-gray-300">
                <span className="font-semibold">{isKey ? 'Why it\u2019s right: ' : 'Why it\u2019s wrong: '}</span>
                <Rich text={perOption[oi]} ready={ready} />
              </span>
            )}
          </li>
        )
      })}
    </ul>
  )
}

/**
 * The question's explanation. With authored per-option explanations it is
 * only a fallback: shown when the correct option has none of its own.
 */
export function Explanation({ text, ready, item }: { text: string; ready?: boolean; item?: { options: string[]; correctIndex: number; optionExplanations?: string[] } }) {
  if (!text.trim()) return null
  const perOption = item ? usableOptionExplanations(item) : null
  if (perOption && item && perOption[item.correctIndex]?.trim()) return null
  return (
    <div className="mt-3 rounded-lg border border-accent-light bg-accent-subtle p-3 dark:border-accent/40 dark:bg-accent-light/10">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent dark:text-accent-muted">Explanation</p>
      <Rich as="div" text={text} className="text-sm leading-relaxed text-gray-800 dark:text-gray-200" ready={ready} />
    </div>
  )
}

type Filter = 'missed' | 'flagged' | 'all' | 'report'

/** Attempts long enough for a Report tab: full-lengths, practice tests, question-bank sets, SAT tests and diagnostics. */
const REPORT_KINDS = new Set(['mcat-fl', 'mcat-practice', 'qbank', 'sat-practice', 'diagnostic', 'act-fl'])
/** Kinds whose per-question times are averages (per passage / per attempt). */
const APPROX_TIMING_KINDS = new Set(['mcat-fl', 'mcat-practice'])
/** Mistake-log / flashcard course slugs per review course. */
const COURSE_SLUGS: Record<string, string> = { mcat: 'mcat-prep', sat: 'sat-prep', act: 'act-prep' }

/** Prefilled card for "Make a flashcard": the stem on the front, the answer (and why) on the back. */
function flashcardFor(item: AttemptReviewItem): { front: string; back: string } {
  const answer = isGridIn(item)
    ? item.gridIn ? String(item.gridIn.correctAnswer) : ''
    : item.options[item.correctIndex] ?? ''
  const back = [answer && `Answer: ${answer}`, item.explanation.trim()].filter(Boolean).join('\n\n')
  return { front: item.question, back }
}

interface Row {
  pos: number
  item: AttemptReviewItem | null
}
const NO_ROWS: Row[] = []

interface CardContext {
  kind: string
  attemptId: string
  course: string
}

function QuestionCard({
  row,
  open,
  onToggle,
  ready,
  stat,
  ctx,
  pickLabel = 'Your answer',
}: {
  row: Row
  open: boolean
  onToggle: () => void
  ready: boolean
  stat?: QuestionStat
  /** Student-only actions (ask the tutor, make a flashcard); omitted for a teacher. */
  ctx?: CardContext
  pickLabel?: string
}) {
  const { item, pos } = row
  if (!item) {
    return (
      <li className="rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900/40 dark:text-gray-400">
        <span className="font-medium text-gray-600 dark:text-gray-300">Q{pos + 1}</span> · This question is no longer available.
      </li>
    )
  }
  const status = itemStatus(item)
  const meta = STATUS_META[status]
  const n = item.displayNumber ?? item.index + 1
  const tag = item.discipline || item.topicTitle || null
  const grid = isGridIn(item)
  const bodyId = `review-q-${pos}`
  return (
    <li
      id={`review-card-${pos}`}
      className={`scroll-mt-4 rounded-xl border bg-white dark:bg-gray-800 ${status === 'wrong' ? 'border-red-200 dark:border-red-900' : status === 'skipped' ? 'border-amber-200 dark:border-amber-900' : 'border-gray-200 dark:border-gray-700'}`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={bodyId}
        className="flex w-full items-start gap-3 rounded-xl px-4 py-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
      >
        <meta.Icon className={`mt-0.5 h-5 w-5 shrink-0 ${meta.cls}`} aria-hidden />
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
            <span className="font-semibold text-gray-700 dark:text-gray-200">Q{n}</span>
            <span className={`font-semibold ${meta.cls}`}>{meta.label}</span>
            {tag && (
              <span className="rounded-full bg-gray-100 px-2 py-0.5 font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">{tag}</span>
            )}
            {item.flagged && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                <Flag className="h-3 w-3" aria-hidden /> Flagged
              </span>
            )}
            {item.revised && (
              <span
                className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-2 py-0.5 font-medium text-sky-800 dark:bg-sky-900/40 dark:text-sky-300"
                title={pickLabel === 'Your answer' ? 'This question was edited after you took it. You are seeing the current version.' : 'This question was edited after this attempt. This is the current version.'}
              >
                <History className="h-3 w-3" aria-hidden /> {pickLabel === 'Your answer' ? 'Revised since you took it' : 'Revised since this attempt'}
              </span>
            )}
            {item.durationMs ? (
              <span className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <Clock className="h-3 w-3" aria-hidden /> {formatDuration(item.durationMs)}
              </span>
            ) : null}
          </span>
          <Rich
            text={item.question}
            className={`mt-1 block text-sm text-gray-800 dark:text-gray-200 ${open ? '' : 'line-clamp-2'}`}
            ready={ready}
          />
        </span>
        {open ? (
          <ChevronUp className="mt-1 h-4 w-4 shrink-0 text-gray-400" aria-hidden />
        ) : (
          <ChevronDown className="mt-1 h-4 w-4 shrink-0 text-gray-400" aria-hidden />
        )}
      </button>
      {open && (
        <div id={bodyId} className="border-t border-gray-100 px-4 pb-4 pt-3 dark:border-gray-700">
          {grid ? (
            <div className="space-y-1.5 text-sm">
              <p className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-800 dark:border-gray-700 dark:bg-gray-900/40 dark:text-gray-200">
                {pickLabel}:{' '}
                {item.chosenText?.trim() ? <span className="font-semibold">{item.chosenText}</span> : <span className="italic">no answer entered</span>}
              </p>
              {item.gridIn ? (
                <p className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-300">
                  Accepted answer: <span className="font-semibold">{item.gridIn.correctAnswer}</span>
                </p>
              ) : status === 'typed' ? (
                <p className="text-xs text-gray-500 dark:text-gray-400">Typed answer: check it against the explanation below.</p>
              ) : null}
            </div>
          ) : (
            <OptionList item={item} chosenIndex={item.chosenIndex} ready={ready} shares={sharesOf(stat, item.options.length)} pickLabel={pickLabel} />
          )}
          <AnswerStatsSummary stat={stat} durationMs={item.durationMs} className="mt-2" taker={pickLabel === 'Your answer' ? 'you' : pickLabel.replace(/'s answer$/, '')} />
          <Explanation text={item.explanation} ready={ready} item={item} />
          {ctx && (
            <>
              <AskAboutQuestion target={{ kind: ctx.kind, attemptId: ctx.attemptId, itemIndex: item.index }} />
              <div className="mt-3">
                <MakeFlashcardButton
                  {...flashcardFor(item)}
                  courseSlug={COURSE_SLUGS[ctx.course]}
                  topicSlug={item.topicSlug}
                  origin="mistake"
                />
              </div>
            </>
          )}
        </div>
      )}
    </li>
  )
}

/**
 * `studentName` set = a teacher reviewing a student's attempt: the student's
 * answers are labelled as theirs, and the student-only actions (ask the
 * tutor, make a flashcard) are hidden.
 */
export default function AttemptReview({ attempt, studentName }: { attempt: AttemptReviewData; studentName?: string }) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let live = true
    preloadKatex().then(() => live && setReady(true))
    return () => {
      live = false
    }
  }, [])

  const rows: Row[] = useMemo(() => attempt.items.map((item, pos) => ({ pos, item })), [attempt.items])
  const missed = useMemo(() => rows.filter((r) => r.item && (itemStatus(r.item) === 'wrong' || itemStatus(r.item) === 'skipped')), [rows])
  const flagged = useMemo(() => rows.filter((r) => r.item?.flagged), [rows])
  const [filter, setFilter] = useState<Filter>(() => (missed.length > 0 ? 'missed' : 'all'))
  // Missed questions start open; everything else is one click away.
  const [open, setOpen] = useState<Set<number>>(() => new Set(missed.map((r) => r.pos)))
  const toggle = (pos: number) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(pos)) next.delete(pos)
      else next.add(pos)
      return next
    })

  const visible = filter === 'missed' ? missed : filter === 'flagged' ? flagged : filter === 'report' ? NO_ROWS : rows

  // How others answered: one batched request for the whole attempt (it is
  // already submitted, so every question has been answered).
  const statRequests = useMemo(
    () => attempt.items.filter((i): i is AttemptReviewItem => !!i).map((i) => ({ questionKey: i.questionKey, options: i.options })),
    [attempt.items],
  )
  const stats = useAnswerStats(statRequests)
  const ctx: CardContext = useMemo(() => ({ kind: attempt.kind, attemptId: attempt.id, course: attempt.course }), [attempt.kind, attempt.id, attempt.course])

  const hasReport = REPORT_KINDS.has(attempt.kind) && attempt.items.some(Boolean)
  const report = useMemo(() => {
    if (!hasReport) return null
    const medians = new Map<string, number | null>()
    for (const [k, s] of stats) if (!s.insufficient) medians.set(k, s.medianSeconds)
    return buildReviewReport(
      attempt.items
        .filter((i): i is AttemptReviewItem => !!i)
        .map((i) => ({
          index: i.index,
          questionKey: i.questionKey,
          topicSlug: i.topicSlug,
          topicTitle: i.topicTitle,
          discipline: i.discipline,
          skill: i.skill,
          durationMs: i.durationMs,
          status: itemStatus(i),
        })),
      { medianSecondsByKey: medians },
    )
  }, [hasReport, attempt.items, stats])

  const openQuestion = (index: number) => {
    const r = rows.find((x) => x.item?.index === index)
    if (!r) return
    setFilter('all')
    setOpen((prev) => new Set(prev).add(r.pos))
    requestAnimationFrame(() => document.getElementById(`review-card-${r.pos}`)?.scrollIntoView({ block: 'start' }))
  }

  // Consecutive visible questions on the same passage share one passage block.
  const groups = useMemo(() => {
    const out: { passage: ReviewPassageView | null; rows: Row[] }[] = []
    for (const r of visible) {
      const p = r.item?.passage && (r.item.passage.body || r.item.passage.figure) ? r.item.passage : null
      const last = out[out.length - 1]
      if (p && last?.passage && last.passage.id && last.passage.id === p.id) last.rows.push(r)
      else out.push({ passage: p, rows: [r] })
    }
    return out
  }, [visible])

  const taken = new Date(attempt.takenAt)
  const unavailable = attempt.items.filter((i) => !i).length
  const tabs: { key: Filter; label: string; count?: number }[] = [
    { key: 'missed', label: 'Missed', count: missed.length },
    { key: 'flagged', label: 'Flagged', count: flagged.length },
    { key: 'all', label: 'All', count: rows.length },
    ...(hasReport ? [{ key: 'report' as const, label: 'Report' }] : []),
  ]

  return (
    <div>
      <header className="mb-5">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">{attempt.title}</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {Number.isNaN(taken.getTime()) ? '' : taken.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}
        </p>
        {attempt.score && (
          <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            {attempt.score.label && (
              <span className="text-3xl font-black text-gray-900 dark:text-white">
                <span className="sr-only">Score </span>
                {attempt.score.label}
              </span>
            )}
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {attempt.score.correct} of {attempt.score.total} correct
            </span>
          </p>
        )}
      </header>

      <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Show questions">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setFilter(t.key)}
            aria-pressed={filter === t.key}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring ${
              filter === t.key
                ? 'bg-accent text-accent-foreground'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {t.key === 'report' ? (
              <span className="inline-flex items-center gap-1.5">
                <BarChart3 className="h-4 w-4" aria-hidden /> {t.label}
              </span>
            ) : (
              `${t.label} (${t.count})`
            )}
          </button>
        ))}
      </div>

      {unavailable > 0 && (
        <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
          {unavailable} question{unavailable === 1 ? '' : 's'} from this attempt can no longer be shown.
        </p>
      )}

      {filter === 'report' && report ? (
        <ReviewReport
          report={report}
          approximateTiming={APPROX_TIMING_KINDS.has(attempt.kind)}
          onOpenQuestion={openQuestion}
          studentName={studentName}
          {...(attempt.course === 'act'
            ? { skillsTitle: 'By ACT reporting category', skillsHint: 'Weakest first. Each question is tagged with the ACT reporting category it tests.' }
            : {})}
        />
      ) : visible.length === 0 ? (
        <p className="rounded-xl border border-gray-200 bg-white px-4 py-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
          {filter === 'missed' ? 'Nothing missed on this attempt.' : filter === 'flagged' ? studentName ? 'No questions were flagged.' : 'You did not flag any questions.' : 'No questions to show.'}
        </p>
      ) : (
        <div className="space-y-3">
          {groups.map((g, gi) => (
            <Fragment key={`${gi}-${g.rows[0].pos}`}>
              {g.passage && (
                <PassageDisclosure
                  passage={g.passage}
                  label={g.rows.length > 1 ? `Q${(g.rows[0].item?.index ?? g.rows[0].pos) + 1}–${(g.rows[g.rows.length - 1].item?.index ?? g.rows[g.rows.length - 1].pos) + 1}` : undefined}
                />
              )}
              <ul className="space-y-2">
                {g.rows.map((r) => (
                  <QuestionCard
                    key={r.pos}
                    row={r}
                    open={open.has(r.pos)}
                    onToggle={() => toggle(r.pos)}
                    ready={ready}
                    stat={r.item ? stats.get(r.item.questionKey) : undefined}
                    ctx={studentName ? undefined : ctx}
                    pickLabel={studentName ? `${studentName}'s answer` : 'Your answer'}
                  />
                ))}
              </ul>
            </Fragment>
          ))}
        </div>
      )}
    </div>
  )
}
