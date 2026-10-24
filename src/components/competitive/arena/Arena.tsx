'use client'

/**
 * Shared head-to-head "arena" pieces for the live match screens (1v1, 2v2,
 * async). Presentation only: every handler is passed in by the page, so the
 * match logic (polling, timers, bot, payloads) stays where it was.
 */

import { useEffect, type ReactNode } from 'react'
import { Check, X } from 'lucide-react'
import AvatarDisplay from '@/components/AvatarDisplay'
import type { AnyAvatarData, AvatarEmotion } from '@/types/avatar'
import { rankProgress, rankTierForMMR } from '@/lib/competitive-ranks'

/* ------------------------------------------------------------------ */
/*  Versus header                                                      */
/* ------------------------------------------------------------------ */

export interface VersusBadge {
  emoji?: string
  text: string
  className: string
}

export interface VersusSide {
  name: ReactNode
  /** Shown instead of `name` on phones (team headers: "Us" / "Them"). */
  shortName?: string
  avatar?: AnyAvatarData | null
  /** Team matches: several small avatars instead of one. */
  teamAvatars?: Array<AnyAvatarData | null | undefined>
  emotion?: AvatarEmotion
  isYou: boolean
  badge?: VersusBadge | null
  score: number
  /** Short progress caption, e.g. "7 / 10". */
  caption: string
  /** 0–1 toward the mode's target. */
  progress: number
  /** Brief "just answered" signal (opponent activity). */
  activity?: { key: number; correct: boolean } | null
  extra?: ReactNode
}

function SideAvatar({ side, size }: { side: VersusSide; size: number }) {
  if (side.teamAvatars) {
    return (
      <span className="flex shrink-0 -space-x-3">
        {side.teamAvatars.map((a, i) => (
          <span key={i} className="inline-flex rounded-full bg-card ring-2 ring-card">
            <AvatarDisplay avatarData={a ?? null} size={size * 0.8} className="rounded-full" />
          </span>
        ))}
      </span>
    )
  }
  return (
    <span className={`inline-flex shrink-0 rounded-full bg-card p-0.5 ring-2 ${side.isYou ? 'ring-accent' : 'ring-card-border'}`}>
      <AvatarDisplay avatarData={side.avatar ?? null} size={size} emotion={side.emotion} className="rounded-full" />
    </span>
  )
}

function Side({ side, align }: { side: VersusSide; align: 'left' | 'right' }) {
  const right = align === 'right'
  return (
    <div className={`min-w-0 ${right ? 'text-right' : ''}`}>
      <div className={`flex items-center gap-2 sm:gap-3 ${right ? 'flex-row-reverse' : ''}`}>
        <span className="relative inline-flex shrink-0">
          <span className="inline-flex sm:hidden"><SideAvatar side={side} size={36} /></span>
          <span className="hidden sm:inline-flex"><SideAvatar side={side} size={52} /></span>
          {side.activity && (
            <span
              key={side.activity.key}
              className={`animate-celebration-pop absolute -bottom-1 ${right ? '-left-1' : '-right-1'} flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold text-white shadow ${side.activity.correct ? 'bg-green-600' : 'bg-gray-500'}`}
              aria-hidden
            >
              {side.activity.correct ? '+1' : <X className="h-3 w-3" />}
            </span>
          )}
        </span>
        <div className="min-w-0 flex-1">
          <p data-qa="player-name" className="truncate text-sm font-bold text-foreground sm:text-base">
            {side.shortName ? (
              <><span className="sm:hidden">{side.shortName}</span><span className="hidden sm:inline">{side.name}</span></>
            ) : side.name}
            {side.isYou && !side.teamAvatars && <span className="ml-1 text-xs font-semibold text-accent">(you)</span>}
          </p>
          {side.badge && (
            <span className={`mt-0.5 hidden items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 sm:inline-flex ${side.badge.className}`}>
              {side.badge.emoji && <span aria-hidden>{side.badge.emoji}</span>} {side.badge.text}
            </span>
          )}
        </div>
        <span
          data-qa={side.isYou ? 'my-score' : 'opponent-score'}
          className={`shrink-0 text-2xl font-black tabular-nums sm:text-4xl ${side.isYou ? 'text-accent' : 'text-foreground'}`}
        >
          {side.score}
        </span>
      </div>
      <div className={`mt-2 flex items-center gap-2 ${right ? 'flex-row-reverse' : ''}`}>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 sm:h-2.5">
          <div
            className={`h-full rounded-full transition-all duration-500 ${right ? 'ml-auto' : ''} ${side.isYou ? 'bg-brand-gradient' : 'bg-gray-500 dark:bg-gray-400'}`}
            style={{ width: `${Math.max(0, Math.min(1, side.progress)) * 100}%` }}
          />
        </div>
        <span data-qa="score-label" className="shrink-0 text-[11px] font-semibold tabular-nums text-muted-foreground sm:text-xs">{side.caption}</span>
      </div>
      {side.extra}
    </div>
  )
}

/** You on the left, opponent on the right, mode/clock in the middle. */
export function VersusHeader({ you, opponent, center }: { you: VersusSide; opponent: VersusSide; center: ReactNode }) {
  return (
    <div className="sticky top-16 z-20 -mx-3 mb-4 px-3 pt-2 sm:mx-0 sm:px-0">
      <div className="rounded-2xl border border-card-border bg-card/95 p-3 shadow-sm backdrop-blur sm:rounded-3xl sm:p-4">
        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 sm:gap-5">
          <Side side={you} align="left" />
          <div className="flex flex-col items-center gap-1 text-center">{center}</div>
          <Side side={opponent} align="right" />
        </div>
      </div>
    </div>
  )
}

/** The middle column: mode chip over an optional clock / target line. */
export function ModeChip({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-accent-subtle px-2 py-0.5 text-[11px] font-bold text-accent ring-1 ring-accent-light sm:px-2.5 sm:text-xs">
      <span aria-hidden>{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Clock                                                              */
/* ------------------------------------------------------------------ */

export function formatClock(sec: number): string {
  return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`
}

/** Clock tone: accent normally, amber in the last two minutes, red in the last one. */
export function clockTone(remaining: number): 'normal' | 'warn' | 'danger' {
  if (remaining <= 60) return 'danger'
  if (remaining <= 120) return 'warn'
  return 'normal'
}

const TONE_STROKE = { normal: 'stroke-accent', warn: 'stroke-amber-500', danger: 'stroke-red-500' }
const TONE_TEXT = {
  normal: 'text-foreground',
  warn: 'text-amber-700 dark:text-amber-400',
  danger: 'text-red-600 dark:text-red-400',
}

export function MatchClock({ remaining, total }: { remaining: number; total: number }) {
  const tone = clockTone(remaining)
  const r = 22
  const c = 2 * Math.PI * r
  const frac = total > 0 ? Math.max(0, Math.min(1, remaining / total)) : 0
  return (
    <div data-qa="match-clock" className={`relative h-14 w-14 sm:h-16 sm:w-16 ${tone === 'danger' ? 'motion-safe:animate-pulse' : ''}`} role="timer" aria-label={`${formatClock(remaining)} left`}>
      <svg viewBox="0 0 52 52" className="h-full w-full -rotate-90" aria-hidden>
        <circle cx="26" cy="26" r={r} fill="none" strokeWidth="5" className="stroke-gray-200 dark:stroke-gray-700" />
        <circle
          cx="26" cy="26" r={r} fill="none" strokeWidth="5" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - frac)}
          className={`${TONE_STROKE[tone]} transition-[stroke-dashoffset] duration-1000 ease-linear`}
        />
      </svg>
      <span data-qa="clock-text" className={`absolute inset-0 flex items-center justify-center font-mono text-xs font-bold tabular-nums sm:text-sm ${TONE_TEXT[tone]}`}>
        {formatClock(remaining)}
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Question card + answer tiles                                       */
/* ------------------------------------------------------------------ */

const DIFFICULTY_CHIP: Record<string, string> = {
  easy: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  medium: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  hard: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
}

export function QuestionCard({ counter, difficulty, chips, questionIndex, children }: {
  counter: string
  difficulty?: string
  chips?: ReactNode
  /** Exposed as data-question-index for QA tooling. */
  questionIndex: number
  children: ReactNode
}) {
  return (
    <section data-question-index={questionIndex} className="rounded-2xl border border-card-border bg-card p-4 shadow-sm sm:rounded-3xl sm:p-7">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span data-qa="question-meta" className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{counter}</span>
        {difficulty && DIFFICULTY_CHIP[difficulty] && (
          <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${DIFFICULTY_CHIP[difficulty]}`}>{difficulty}</span>
        )}
        {chips}
      </div>
      {children}
    </section>
  )
}

export type AnswerState = 'idle' | 'selected' | 'correct' | 'incorrect' | 'eliminated'

const TILE: Record<AnswerState, string> = {
  idle: 'border-card-border bg-card hover:border-accent-muted hover:bg-accent-subtle/60',
  selected: 'border-accent bg-accent-subtle ring-1 ring-accent',
  correct: 'border-green-500 bg-green-50 ring-1 ring-green-500 dark:bg-green-900/25 animate-answer-correct',
  incorrect: 'border-red-500 bg-red-50 ring-1 ring-red-500 dark:bg-red-900/25 animate-answer-wrong',
  eliminated: 'border-dashed border-gray-300 bg-gray-50 opacity-40 dark:border-gray-700 dark:bg-gray-900/40',
}
const LETTER: Record<AnswerState, string> = {
  idle: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200',
  selected: 'bg-accent text-white',
  correct: 'bg-green-600 text-white',
  incorrect: 'bg-red-600 text-white',
  eliminated: 'bg-gray-100 text-gray-400 line-through dark:bg-gray-800',
}

export function AnswerTile({ index, letter, state, disabled, onClick, children }: {
  index: number
  letter: string
  state: AnswerState
  disabled?: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      data-answer-index={index}
      onClick={onClick}
      disabled={disabled}
      className={`group flex min-h-14 w-full items-center gap-3 rounded-2xl border-2 p-3 text-left transition-all duration-150 sm:p-4 ${TILE[state]} ${
        disabled ? (state === 'idle' ? 'cursor-not-allowed opacity-70' : 'cursor-default') : 'cursor-pointer active:scale-[0.99]'
      }`}
    >
      <span data-qa="answer-letter" className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black transition-colors ${LETTER[state]}`}>
        {state === 'correct' ? <Check className="h-5 w-5" aria-hidden /> : state === 'incorrect' ? <X className="h-5 w-5" aria-hidden /> : letter}
      </span>
      <span data-qa="answer-text" className="min-w-0 flex-1 overflow-x-auto text-base text-foreground">{children}</span>
      <kbd className="hidden shrink-0 rounded-md border border-card-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground lg:inline">{index + 1}</kbd>
    </button>
  )
}

/**
 * Desktop shortcuts: 1–9 or A–I pick the option with that ORIGINAL index (the
 * same letter shown on the tile), through the page's own answer handler.
 */
export function useAnswerHotkeys(enabled: boolean, optionCount: number, pick: (index: number) => void) {
  useEffect(() => {
    if (!enabled || optionCount < 1) return
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return
      const t = e.target as HTMLElement | null
      if (t && (t.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(t.tagName))) return
      let idx = -1
      if (/^[1-9]$/.test(e.key)) idx = Number(e.key) - 1
      else if (/^[a-i]$/i.test(e.key)) idx = e.key.toLowerCase().charCodeAt(0) - 97
      if (idx < 0 || idx >= optionCount) return
      e.preventDefault()
      pick(idx)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [enabled, optionCount, pick])
}

/**
 * Grid for the answer tiles: two columns when every option is short (on
 * phones only when they are tiny, e.g. numbers), one column otherwise.
 */
export function answerGridClass(options: string[] | undefined): string {
  const opts = options ?? []
  if (opts.length === 0 || opts.some(o => o.includes('|') || o.includes('\n'))) return ''
  const longest = Math.max(...opts.map(o => o.replace(/\$/g, '').length))
  if (longest <= 12) return 'grid-cols-2'
  if (longest <= 32) return 'sm:grid-cols-2'
  return ''
}

/* ------------------------------------------------------------------ */
/*  Results                                                            */
/* ------------------------------------------------------------------ */

export type Outcome = 'win' | 'loss' | 'draw'

const HERO_BAND: Record<Outcome, string> = {
  // Deep shades so white text holds 4.5:1 (green-500/amber-400 measured ~2:1).
  win: 'bg-gradient-to-br from-emerald-700 to-green-700',
  draw: 'bg-gradient-to-br from-amber-700 to-orange-700',
  loss: 'bg-gray-700 dark:bg-gray-800',
}
const HERO_EMOJI: Record<Outcome, string> = { win: '🏆', draw: '🤝', loss: '⚔️' }

export function ResultHero({ outcome, title, subtitle, children }: { outcome: Outcome; title: string; subtitle: ReactNode; children?: ReactNode }) {
  return (
    <section className="overflow-hidden rounded-3xl border border-card-border bg-card shadow-sm" role="status" aria-live="polite">
      <div className={`relative px-5 pb-8 pt-7 text-center text-white sm:pt-9 ${HERO_BAND[outcome]}`}>
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" aria-hidden />
        <span className={`relative mx-auto mb-2 block text-5xl sm:text-6xl ${outcome === 'win' ? 'animate-celebration-pop' : ''}`} aria-hidden>{HERO_EMOJI[outcome]}</span>
        <h1 data-qa="result-title" className="relative text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
        <p data-qa="result-sub" className="relative mt-1 text-base font-medium text-white">{subtitle}</p>
      </div>
      {children}
    </section>
  )
}

/** Two-sided final scoreboard under the hero (you left). */
export function FinalScore({ you, opponent }: {
  you: { name: ReactNode; avatar?: AnyAvatarData | null; teamAvatars?: Array<AnyAvatarData | null | undefined>; score: number; sub?: string; won: boolean }
  opponent: { name: ReactNode; avatar?: AnyAvatarData | null; teamAvatars?: Array<AnyAvatarData | null | undefined>; score: number; sub?: string; won: boolean }
}) {
  const col = (p: typeof you, isYou: boolean) => (
    <div className={`flex min-w-0 flex-col items-center text-center ${isYou ? '' : ''}`}>
      <SideAvatar side={{ name: p.name, avatar: p.avatar, teamAvatars: p.teamAvatars, isYou, score: p.score, caption: '', progress: 0 }} size={56} />
      <p className="mt-2 max-w-full truncate text-sm font-semibold text-foreground">{p.name}</p>
      <p className={`text-4xl font-black tabular-nums sm:text-5xl ${p.won ? 'text-green-600 dark:text-green-400' : 'text-foreground'}`}>{p.score}</p>
      {p.sub && <p className="text-xs text-muted-foreground">{p.sub}</p>}
    </div>
  )
  return (
    <div className="-mt-6 px-4 sm:px-8">
      <div className="relative grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 rounded-2xl border border-card-border bg-card p-4 shadow-md sm:p-5">
        {col(you, true)}
        <span className="text-sm font-black text-muted-foreground">VS</span>
        {col(opponent, false)}
      </div>
    </div>
  )
}

/** MMR delta plus the rank bar after the match (thresholds: competitive-ranks.ts). */
export function RankDelta({ before, after }: { before: number; after: number }) {
  const delta = after - before
  const prog = rankProgress(after)
  const rankedUp = rankTierForMMR(after).name !== rankTierForMMR(before).name && delta > 0
  const rankedDown = rankTierForMMR(after).name !== rankTierForMMR(before).name && delta < 0
  return (
    <div className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-800/60">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">MMR</p>
        <span className={`rounded-full px-2.5 py-0.5 text-sm font-black tabular-nums ${delta >= 0 ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300'}`}>
          {delta >= 0 ? '+' : ''}{delta}
        </span>
      </div>
      <p className="mt-1 text-2xl font-black tabular-nums text-foreground">
        <span className="text-base font-semibold text-muted-foreground">{before} → </span>{after}
      </p>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div className="h-full rounded-full bg-brand-gradient transition-all duration-700" style={{ width: `${Math.max(4, prog.fraction * 100)}%` }} />
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">{prog.current.emoji} {prog.current.name}</span>
        {prog.next ? <> · {prog.toNext} MMR to {prog.next.emoji} {prog.next.name}</> : <> · top rank</>}
      </p>
      {rankedUp && <p className="mt-2 text-sm font-bold text-green-700 dark:text-green-400">Ranked up to {prog.current.emoji} {prog.current.name}!</p>}
      {rankedDown && <p className="mt-2 text-sm font-semibold text-muted-foreground">Dropped to {prog.current.name} — win one to climb back.</p>}
    </div>
  )
}

export function StatTile({ label, value, sub }: { label: string; value: ReactNode; sub?: string }) {
  return (
    <div className="rounded-2xl bg-gray-50 p-3 dark:bg-gray-800/60 sm:p-4">
      <p data-qa="stat-label" className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground sm:text-xs">{label}</p>
      <p className="mt-1 text-xl font-bold tabular-nums text-foreground sm:text-2xl">{value}</p>
      {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
    </div>
  )
}

/** Rank badge for a human player from their pre-match MMR. */
export function rankBadge(mmr: number | null | undefined): VersusBadge | null {
  if (typeof mmr !== 'number') return null
  const t = rankTierForMMR(mmr)
  return { emoji: t.emoji, text: t.name, className: t.badge }
}

export const BOT_BADGE_CLASS = 'bg-gray-100 text-gray-700 ring-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-700'

/** Longest run of consecutive correct answers in a chronological list. */
export function bestStreakOf(answers: Array<{ correct: boolean }>): number {
  let best = 0
  let run = 0
  for (const a of answers) {
    run = a.correct ? run + 1 : 0
    if (run > best) best = run
  }
  return best
}
