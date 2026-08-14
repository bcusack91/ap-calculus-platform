'use client'

import { MathText } from '@/components/MathText'

/**
 * Shared visual language for slide decks — used by the live presentation
 * (SlideDeckSection) and the teacher library preview so the two always match.
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

/** Light markdown niceties the rich-text pipeline doesn't cover (first-party content only). */
function mdLite(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
}

export function TitleSlideView({ title, subtitle, palette }: { title: string; subtitle: string; palette: DeckPalette }) {
  return (
    <div style={SLIDE_IN} className={`relative flex min-h-[42vh] flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${palette.grad} px-8 py-16 text-center text-white`}>
      <div className={`absolute -left-16 -top-16 h-56 w-56 rounded-full ${palette.titleDeco} blur-3xl`} />
      <div className={`absolute -bottom-20 -right-12 h-64 w-64 rounded-full ${palette.titleDeco} blur-3xl`} />
      <h2 className="relative mb-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
      <span className="relative rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur">{subtitle}</span>
    </div>
  )
}

export function ContentSlideView({ title, blocks, palette }: { title: string; blocks: string[]; palette: DeckPalette }) {
  return (
    <div style={SLIDE_IN}>
      <div className="mb-7 flex items-center gap-3">
        <span className={`h-9 w-1.5 shrink-0 rounded-full bg-gradient-to-b ${palette.grad}`} />
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">{title}</h2>
      </div>
      <div className="max-w-3xl space-y-4">
        {blocks.map((raw, i) => {
          const b = raw.trim()
          // Display math — centered, on an accent card.
          if (b.startsWith('$$')) {
            return (
              <div key={i} className={`rounded-xl border px-4 py-4 text-center ${palette.mathCard}`}>
                <MathText text={b} className="text-lg sm:text-xl" />
              </div>
            )
          }
          // Tables — MathText renders the pipe table; give it real borders.
          if (b.includes('\n') && b.includes('|')) {
            return (
              <div key={i} className="overflow-x-auto">
                <MathText
                  text={b}
                  className="text-base [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-gray-200 [&_td]:px-3 [&_td]:py-1.5 [&_th]:border [&_th]:border-gray-200 [&_th]:bg-gray-50 [&_th]:px-3 [&_th]:py-1.5 [&_th]:text-left [&_th]:font-semibold dark:[&_td]:border-gray-600 dark:[&_th]:border-gray-600 dark:[&_th]:bg-gray-700/50"
                />
              </div>
            )
          }
          // Worked-example solutions / flashcard answers — tinted callout.
          if (/^(Solution:|→ )/.test(b)) {
            return (
              <div key={i} className={`flex items-start gap-2.5 rounded-xl border px-4 py-3 ${palette.solutionCard}`}>
                <span className={`mt-1 text-sm font-bold ${palette.accentText}`}>✓</span>
                <MathText text={mdLite(b.replace(/^(Solution:|→ )/, ''))} className="text-base leading-relaxed text-gray-800 sm:text-lg dark:text-gray-200" />
              </div>
            )
          }
          // Bullets — colored dot markers.
          if (/^([-*•]\s+)/.test(b)) {
            return (
              <div key={i} className="flex items-start gap-3">
                <span className={`mt-2.5 h-2 w-2 shrink-0 rounded-full ${palette.dot}`} />
                <MathText text={mdLite(b.replace(/^[-*•]\s+/, ''))} className="text-lg leading-relaxed text-gray-800 sm:text-xl dark:text-gray-200" />
              </div>
            )
          }
          // Plain paragraph.
          return (
            <MathText key={i} text={mdLite(b)} className="text-lg leading-relaxed text-gray-800 sm:text-xl dark:text-gray-200" />
          )
        })}
      </div>
    </div>
  )
}

export function QuizSlideView({ title, palette, children }: { title: string; palette: DeckPalette; children?: React.ReactNode }) {
  return (
    <div style={SLIDE_IN} className={`relative flex min-h-[42vh] flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${palette.grad} px-8 py-14 text-center text-white`}>
      <div className={`absolute -right-14 -top-14 h-56 w-56 rounded-full ${palette.titleDeco} blur-3xl`} />
      <p className="relative mb-3 text-4xl">🎯</p>
      <h2 className="relative mb-3 text-2xl font-bold sm:text-3xl">Your turn: {title}</h2>
      <p className="relative mb-6 max-w-md text-white/85">
        Take the exit quiz to lock in what we covered — it unlocks this topic&apos;s flashcards, and passing counts toward homework.
      </p>
      <div className="relative">{children}</div>
    </div>
  )
}

/** Letter badge for poll options (A/B/C/D). */
export function OptionBadge({ index, active, palette }: { index: number; active?: boolean; palette: DeckPalette }) {
  return (
    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold ${active ? palette.chip : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}>
      {String.fromCharCode(65 + index)}
    </span>
  )
}
