'use client'

import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { MathText } from '@/components/MathText'
import { STAGE_H, STAGE_W, fitStepDown, MIN_FIT, stageScale } from '@/lib/slide-stage'
import { FIGURE_THEME_CLASSES, isSafeSvg } from '@/lib/lesson-figure'
import type { SlideFigure } from '@/lib/slide-deck'

/**
 * Shared visual language for slide decks — used by the live presentation
 * (SlideDeckSection) and the teacher library preview so the two always match.
 *
 * Every slide renders inside SlideStage: a fixed 1280 × 720 logical frame
 * scaled uniformly to the viewer's width (src/lib/slide-stage.ts), so the
 * teacher's laptop, the projector and a student's phone show the identical
 * layout and the teacher's pen strokes land on the same word for everyone.
 * Slide type is therefore sized in em off a 16px base that the stage can step
 * down when a slide's content would overflow the frame — no viewport
 * breakpoints inside a slide, ever.
 *
 * Decks get a deterministic accent palette from their title (same topic =
 * same look every time, different topics vary), a full-bleed gradient title
 * slide, and structured content blocks: display math sits centered in accent
 * cards, bullets get colored markers, tables get real table styling, worked-
 * example/solution lines get tinted callouts. All palette classes are literal
 * strings so Tailwind's JIT keeps them.
 */

export interface DeckPalette {
  grad: string
  titleDeco: string
  chip: string
  dot: string
  mathCard: string
  solutionCard: string
  barFill: string
  ring: string
  accentText: string
}

const PALETTES: DeckPalette[] = [
  {
    grad: 'from-indigo-600 to-violet-600',
    titleDeco: 'bg-violet-400/30',
    chip: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
    dot: 'bg-indigo-500',
    mathCard: 'border-indigo-100 bg-indigo-50/70 dark:border-indigo-800 dark:bg-indigo-900/20',
    solutionCard: 'border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-900/20',
    barFill: 'bg-indigo-200/70 dark:bg-indigo-700/40',
    ring: 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20',
    accentText: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    grad: 'from-emerald-600 to-teal-600',
    titleDeco: 'bg-teal-400/30',
    chip: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    dot: 'bg-emerald-500',
    mathCard: 'border-emerald-100 bg-emerald-50/70 dark:border-emerald-800 dark:bg-emerald-900/20',
    solutionCard: 'border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20',
    barFill: 'bg-emerald-200/70 dark:bg-emerald-700/40',
    ring: 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20',
    accentText: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    grad: 'from-rose-600 to-orange-500',
    titleDeco: 'bg-orange-400/30',
    chip: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
    dot: 'bg-rose-500',
    mathCard: 'border-rose-100 bg-rose-50/70 dark:border-rose-800 dark:bg-rose-900/20',
    solutionCard: 'border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20',
    barFill: 'bg-rose-200/70 dark:bg-rose-700/40',
    ring: 'border-rose-500 bg-rose-50 dark:bg-rose-900/20',
    accentText: 'text-rose-600 dark:text-rose-400',
  },
  {
    grad: 'from-blue-600 to-cyan-500',
    titleDeco: 'bg-cyan-400/30',
    chip: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
    dot: 'bg-blue-500',
    mathCard: 'border-blue-100 bg-blue-50/70 dark:border-blue-800 dark:bg-blue-900/20',
    solutionCard: 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20',
    barFill: 'bg-blue-200/70 dark:bg-blue-700/40',
    ring: 'border-blue-500 bg-blue-50 dark:bg-blue-900/20',
    accentText: 'text-blue-600 dark:text-blue-400',
  },
  {
    grad: 'from-amber-500 to-red-500',
    titleDeco: 'bg-amber-400/30',
    chip: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
    dot: 'bg-amber-500',
    mathCard: 'border-amber-100 bg-amber-50/70 dark:border-amber-800 dark:bg-amber-900/20',
    solutionCard: 'border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20',
    barFill: 'bg-amber-200/70 dark:bg-amber-700/40',
    ring: 'border-amber-500 bg-amber-50 dark:bg-amber-900/20',
    accentText: 'text-amber-600 dark:text-amber-400',
  },
  {
    grad: 'from-fuchsia-600 to-purple-600',
    titleDeco: 'bg-fuchsia-400/30',
    chip: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300',
    dot: 'bg-fuchsia-500',
    mathCard: 'border-fuchsia-100 bg-fuchsia-50/70 dark:border-fuchsia-800 dark:bg-fuchsia-900/20',
    solutionCard: 'border-fuchsia-200 bg-fuchsia-50 dark:border-fuchsia-800 dark:bg-fuchsia-900/20',
    barFill: 'bg-fuchsia-200/70 dark:bg-fuchsia-700/40',
    ring: 'border-fuchsia-500 bg-fuchsia-50 dark:bg-fuchsia-900/20',
    accentText: 'text-fuchsia-600 dark:text-fuchsia-400',
  },
]

/** Same deck → same palette, always; different decks vary. */
export function deckPalette(seed: string): DeckPalette {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0
  return PALETTES[Math.abs(h) % PALETTES.length]
}

/** Entrance animation for slide changes — keyframes injected once per page. */
export function SlideMotionStyles() {
  return (
    <style>{`@keyframes deckSlideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }`}</style>
  )
}

export const SLIDE_IN: React.CSSProperties = { animation: 'deckSlideIn 0.35s ease' }

/* ------------------------------------------------------------------ */
/*  The stage                                                          */
/* ------------------------------------------------------------------ */

/** Base font size the em-sized slide type hangs off (× the fit factor). */
const STAGE_BASE_FONT_PX = 16
/** Keep the whole stage on screen: the frame's height cap below the window height. */
const STAGE_CHROME_PX = 96
const STAGE_MIN_MAX_HEIGHT = 240

/** Height budget for the stage in this window (whole slide visible, no page scroll to find the bottom). */
function windowStageMaxHeight(): number {
  if (typeof window === 'undefined') return Infinity
  return Math.max(STAGE_MIN_MAX_HEIGHT, window.innerHeight - STAGE_CHROME_PX)
}

/**
 * The fixed logical frame, scaled to the container. `children` lay out at
 * STAGE_W × STAGE_H and are scaled by k; `overlay(k)` renders in VIEWER pixels
 * over the stage box (the pen canvas — see slide-stage.ts for why it can't sit
 * inside the transform); `below(k)` renders under the stage at native size
 * (phone answer buttons). Content that would overflow the frame steps its
 * type down (deterministically, so every viewer agrees) and past the floor
 * scrolls inside the frame — the frame itself never reflows.
 */
export function SlideStage({
  children,
  overlay,
  below,
  onScale,
  maxHeight,
  className = '',
}: {
  children: ReactNode
  overlay?: (k: number) => ReactNode
  below?: (k: number) => ReactNode
  onScale?: (k: number) => void
  /** Overrides the window-derived height cap (the library preview passes none). */
  maxHeight?: number
  className?: string
}) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [k, setK] = useState(0)
  const [fit, setFit] = useState(1)
  const onScaleRef = useRef(onScale)
  useLayoutEffect(() => {
    onScaleRef.current = onScale
  }, [onScale])

  // Scale: follow the container's width and the window's height.
  useLayoutEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const measure = () => {
      const width = el.getBoundingClientRect().width || el.clientWidth
      const next = stageScale(width, maxHeight ?? windowStageMaxHeight())
      setK(prev => (Math.abs(prev - next) < 1e-4 ? prev : next))
    }
    measure()
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null
    ro?.observe(el)
    window.addEventListener('resize', measure)
    return () => { ro?.disconnect(); window.removeEventListener('resize', measure) }
  }, [maxHeight])

  useLayoutEffect(() => {
    if (k > 0) onScaleRef.current?.(k)
  }, [k])

  // Fit: step the type down while the content overflows the frame. Runs on
  // mount, on every content resize (KaTeX finishing, a poll revealing) and
  // once the web font is in — all deterministic inputs.
  useLayoutEffect(() => {
    const inner = innerRef.current
    const content = contentRef.current
    if (!inner || !content) return
    let alive = true
    const check = () => {
      if (!alive) return
      if (inner.scrollHeight > STAGE_H + 1) setFit(f => (f > MIN_FIT ? fitStepDown(f) : f))
    }
    check()
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(check) : null
    ro?.observe(content)
    const fonts = typeof document !== 'undefined' ? (document as { fonts?: { ready?: Promise<unknown> } }).fonts : undefined
    fonts?.ready?.then(check, () => {})
    return () => { alive = false; ro?.disconnect() }
  }, [fit])

  const atFloor = fit <= MIN_FIT
  return (
    <div ref={wrapRef} className={`relative w-full ${className}`}>
      {k > 0 && (
        <div className="relative mx-auto overflow-hidden" style={{ width: STAGE_W * k, height: STAGE_H * k }} data-slide-stage>
          <div
            ref={innerRef}
            className={`slide-stage absolute left-0 top-0 origin-top-left bg-white dark:bg-gray-800 ${atFloor ? 'overflow-y-auto' : 'overflow-hidden'}`}
            style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${k})`, fontSize: `${STAGE_BASE_FONT_PX * fit}px` }}
          >
            <div ref={contentRef} className="min-h-full">{children}</div>
          </div>
          {overlay?.(k)}
        </div>
      )}
      {k > 0 && below?.(k)}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Slide views (logical units: em off the stage base, fixed px frame) */
/* ------------------------------------------------------------------ */

/** Light markdown niceties the rich-text pipeline doesn't cover (first-party content only). */
function mdLite(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
}

export function TitleSlideView({ title, subtitle, palette }: { title: string; subtitle: string; palette: DeckPalette }) {
  return (
    <div style={SLIDE_IN} className={`relative flex h-[720px] flex-col items-center justify-center overflow-hidden bg-gradient-to-br ${palette.grad} px-16 py-16 text-center text-white`}>
      <div className={`absolute -left-16 -top-16 h-72 w-72 rounded-full ${palette.titleDeco} blur-3xl`} />
      <div className={`absolute -bottom-24 -right-16 h-80 w-80 rounded-full ${palette.titleDeco} blur-3xl`} />
      <h2 className="relative mb-6 max-w-[1040px] text-[3.75em] font-extrabold leading-tight tracking-tight"><MathText inline text={title} /></h2>
      <span className="relative rounded-full bg-white/20 px-5 py-2 text-[1.125em] font-medium backdrop-blur"><MathText inline text={subtitle} /></span>
    </div>
  )
}

/**
 * An authored figure on a slide (src/data/deck-figures): sanitized inline SVG
 * in the shared figure theme, caption under it. A fixed pixel cap on the
 * drawing keeps the stage's fit logic deterministic — only the text steps
 * down when a slide overflows. An SVG that fails isSafeSvg shows its alt text
 * so the slide is never blank.
 */
function SlideFigureView({ figure, side }: { figure: SlideFigure; side: boolean }) {
  const alt = typeof figure.alt === 'string' ? figure.alt : ''
  return (
    <figure className="m-0 flex w-full flex-col items-center gap-3">
      {isSafeSvg(figure.svg) ? (
        <div
          role="img"
          aria-label={alt}
          data-testid="slide-figure-svg"
          className={`w-full rounded-2xl border border-gray-200 p-4 dark:border-gray-700 [&>svg]:mx-auto [&>svg]:block [&>svg]:h-auto [&>svg]:w-full ${side ? '[&>svg]:max-h-[500px]' : '[&>svg]:max-h-[380px]'} ${FIGURE_THEME_CLASSES}`}
          dangerouslySetInnerHTML={{ __html: figure.svg }}
        />
      ) : (
        <div role="img" aria-label={alt} className="w-full rounded-2xl border-2 border-dashed border-gray-300 p-6 text-center text-[1.125em] text-gray-600 dark:border-gray-600 dark:text-gray-300">
          {alt || 'Figure unavailable.'}
        </div>
      )}
      {figure.caption && (
        <figcaption className="text-center text-[1.125em] leading-snug text-gray-600 dark:text-gray-300">
          <MathText inline text={mdLite(figure.caption)} />
        </figcaption>
      )}
    </figure>
  )
}

export function ContentSlideView({ title, blocks, palette, figure, layout }: { title: string; blocks: string[]; palette: DeckPalette; figure?: SlideFigure; layout?: 'side' | 'full' }) {
  // A figure sits beside short text ('side') or above it, full width ('full').
  const side = !!figure && (layout ?? (blocks.length > 0 ? 'side' : 'full')) === 'side'
  // Under a full-width figure the lines are its takeaway, not the lesson
  // text — a step smaller, so two of them still fit beneath the drawing.
  const body = renderBlocks(blocks, palette, figure && !side ? 'text-[1.375em]' : 'text-[1.625em]')
  return (
    <div style={SLIDE_IN} className="min-h-full px-14 py-10">
      <div className="mb-6 flex items-center gap-4">
        <span className={`h-[2.25em] w-1.5 shrink-0 rounded-full bg-gradient-to-b ${palette.grad}`} />
        <h2 className="text-[2.25em] font-bold leading-tight text-gray-900 dark:text-white"><MathText inline text={title} /></h2>
      </div>
      {figure && side ? (
        <div className="grid grid-cols-[560px_minmax(0,1fr)] items-start gap-10">
          <SlideFigureView figure={figure} side />
          <div className="space-y-4">{body}</div>
        </div>
      ) : (
        <div className="max-w-[1120px] space-y-4">
          {figure && <SlideFigureView figure={figure} side={false} />}
          {body}
        </div>
      )}
    </div>
  )
}

function renderBlocks(blocks: string[], palette: DeckPalette, textSize = 'text-[1.625em]') {
  return (
    <>
        {blocks.map((raw, i) => {
          const b = raw.trim()
          // Display math — centered, on an accent card.
          if (b.startsWith('$$')) {
            return (
              <div key={i} className={`rounded-xl border px-5 py-4 text-center ${palette.mathCard}`}>
                <MathText text={b} className="text-[1.5em]" />
              </div>
            )
          }
          // Tables — MathText renders the pipe table; give it real borders.
          if (b.includes('\n') && b.includes('|')) {
            return (
              <div key={i} className="overflow-x-auto">
                <MathText
                  text={b}
                  className="text-[1.125em] [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-gray-200 [&_td]:px-3 [&_td]:py-1.5 [&_th]:border [&_th]:border-gray-200 [&_th]:bg-gray-50 [&_th]:px-3 [&_th]:py-1.5 [&_th]:text-left [&_th]:font-semibold dark:[&_td]:border-gray-600 dark:[&_th]:border-gray-600 dark:[&_th]:bg-gray-700/50"
                />
              </div>
            )
          }
          // Worked-example solutions / flashcard answers — tinted callout.
          if (/^(Solution:|→ )/.test(b)) {
            return (
              <div key={i} className={`flex items-start gap-3 rounded-xl border px-5 py-3 ${palette.solutionCard}`}>
                <span className={`mt-1 text-[1em] font-bold ${palette.accentText}`}>✓</span>
                <MathText text={mdLite(b.replace(/^(Solution:|→ )/, ''))} className="text-[1.375em] leading-relaxed text-gray-800 dark:text-gray-200" />
              </div>
            )
          }
          // Bullets — colored dot markers.
          if (/^([-*•]\s+)/.test(b)) {
            return (
              <div key={i} className="flex items-start gap-4">
                <span className={`mt-[0.85em] h-2.5 w-2.5 shrink-0 rounded-full ${palette.dot}`} />
                <MathText text={mdLite(b.replace(/^[-*•]\s+/, ''))} className={`${textSize} leading-snug text-gray-800 dark:text-gray-200`} />
              </div>
            )
          }
          // Plain paragraph.
          return (
            <MathText key={i} text={mdLite(b)} className={`${textSize} leading-snug text-gray-800 dark:text-gray-200`} />
          )
        })}
    </>
  )
}

export function QuizSlideView({ title, palette, children }: { title: string; palette: DeckPalette; children?: React.ReactNode }) {
  return (
    <div style={SLIDE_IN} className={`relative flex h-[720px] flex-col items-center justify-center overflow-hidden bg-gradient-to-br ${palette.grad} px-16 py-14 text-center text-white`}>
      <div className={`absolute -right-14 -top-14 h-72 w-72 rounded-full ${palette.titleDeco} blur-3xl`} />
      <p className="relative mb-4 text-[3em]">🎯</p>
      <h2 className="relative mb-4 text-[2.25em] font-bold leading-tight">Your turn: <MathText inline text={title} /></h2>
      <p className="relative mb-8 max-w-[640px] text-[1.25em] text-white/85">
        Take the exit quiz to lock in what we covered — it unlocks this topic&apos;s flashcards, and passing counts toward homework.
      </p>
      <div className="relative">{children}</div>
    </div>
  )
}

/** Letter badge for poll options (A/B/C/D). */
export function OptionBadge({ index, active, palette }: { index: number; active?: boolean; palette: DeckPalette }) {
  return (
    <span className={`flex h-[1.9em] w-[1.9em] shrink-0 items-center justify-center rounded-full text-[0.95em] font-bold ${active ? palette.chip : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}>
      {String.fromCharCode(65 + index)}
    </span>
  )
}

export interface PollOptionState {
  /** Highlighted as this viewer's own answer. */
  mine?: boolean
  /** Shown as the correct option (after reveal, or in the teacher's prep view). */
  correct?: boolean
  /** Tally for this option — shown only when the view has tallies. */
  count?: number
  pct?: number
}

/**
 * The poll slide, identical for everyone so pen strokes line up: the teacher's
 * tallies and the student's "your answer" marker are overlaid without taking
 * layout space, the status line is a fixed one-line slot whatever it says,
 * and the explanation panel is always in the layout (it fills the rest of the
 * frame; the text appears on reveal and scrolls inside the panel if long), so
 * nothing above it moves when the answer is revealed.
 */
export function PollSlideView({
  question,
  options,
  palette,
  chipText,
  states,
  showTallies,
  statusText,
  explanation,
  onPick,
  disabled,
}: {
  question: string
  options: string[]
  palette: DeckPalette
  chipText: string
  states: PollOptionState[]
  showTallies: boolean
  statusText?: string | null
  /** Shown when non-empty; the panel keeps its place either way. */
  explanation?: string | null
  /** Student taps; absent → options are not interactive. */
  onPick?: (i: number) => void
  disabled?: boolean
}) {
  return (
    <div style={SLIDE_IN} className="flex min-h-full flex-col px-14 py-10">
      <p className={`mb-2 inline-block self-start rounded-full px-3 py-1 text-[0.75em] font-bold uppercase tracking-wide ${palette.chip}`}>
        {chipText}
      </p>
      <MathText text={question} className="mb-5 text-[1.75em] font-semibold leading-snug text-gray-900 dark:text-white" />
      <div className="space-y-2.5">
        {options.map((opt, i) => {
          const st = states[i] ?? {}
          const pct = st.pct ?? 0
          return (
            <button
              key={i}
              type="button"
              onClick={onPick ? () => onPick(i) : undefined}
              disabled={!onPick || disabled}
              aria-pressed={!!st.mine}
              className={`relative block w-full overflow-hidden rounded-xl border-2 px-4 py-3 text-left transition ${
                st.correct
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                  : st.mine
                  ? palette.ring
                  : 'border-gray-200 hover:border-gray-300 dark:border-gray-600'
              } ${onPick ? '' : 'cursor-default'}`}
            >
              {showTallies && (
                <div
                  className={`absolute inset-y-0 left-0 transition-all duration-500 ${st.correct ? 'bg-green-200/60 dark:bg-green-800/30' : palette.barFill}`}
                  style={{ width: `${pct}%` }}
                />
              )}
              <span className="relative flex items-center gap-3 pr-28 text-[1.25em] leading-snug">
                <OptionBadge index={i} active={!!(st.mine || st.correct)} palette={palette} />
                <MathText inline text={opt} />
              </span>
              {/* Per-viewer marks sit over the row's right edge — no layout effect. */}
              <span className="absolute inset-y-0 right-4 flex items-center gap-2 text-[0.85em] font-semibold">
                {st.mine && !st.correct && <span className="text-indigo-600 dark:text-indigo-400">your answer</span>}
                {st.correct && <span className="text-green-600 dark:text-green-400">✓ correct</span>}
                {showTallies && <span className="text-gray-500 dark:text-gray-400">{st.count ?? 0} · {pct}%</span>}
              </span>
            </button>
          )
        })}
      </div>
      <p className="mt-3 h-[1.6em] text-[1em] text-gray-500 dark:text-gray-400">{statusText ?? ''}</p>
      <div
        className={`mt-3 min-h-[88px] flex-1 overflow-y-auto rounded-xl border p-4 ${
          explanation ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20' : 'border-transparent'
        }`}
        aria-live="polite"
      >
        {explanation && <MathText text={explanation} className="text-[1.125em] leading-relaxed text-gray-800 dark:text-gray-200" />}
      </div>
    </div>
  )
}
