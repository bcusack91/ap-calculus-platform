/**
 * Lesson figures — authored inline SVG graphs/diagrams for interactive lessons.
 *
 * SECTION SHAPE (src/data/interactive-lessons/*-partN.ts)
 *
 *   // 1) A figure on ANY section (text, input-boxes, multiple-choice, dropdown-select, …).
 *   //    It is drawn ABOVE the section's content / questions, so a check can say
 *   //    "Use the graph above".
 *   {
 *     id: 'elg1-check',
 *     type: 'multiple-choice' as const,
 *     content: 'Use the graph above.',
 *     figure: {
 *       svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">…</svg>',
 *       alt: 'Graph of y = f(x): a curve approaching (1, 4) from both sides, with an open circle at (1, 4) and a filled dot at (1, 2).',
 *       caption: 'Figure 1. The graph of $f$.',   // optional; markdown + $math$
 *       size: 'md',                                // optional: 'sm' | 'md' (default) | 'lg'
 *     },
 *     exercise: { questions: [ … ] },
 *   }
 *
 *   // 2) A stand-alone figure step: type 'figure'. `content` (optional markdown)
 *   //    is rendered as a text section BELOW the figure(s).
 *   { id: 'elg4-panels', type: 'figure' as const, content: '…', figure: [panelA, panelB, panelC, panelD] }
 *
 *   `figure` may be one figure or an array; several figures render as a grid
 *   (two per row from the sm breakpoint) — e.g. four small graph panels.
 *
 * SVG RULES (enforced by isSafeSvg, src/lib/safe-svg.ts — an SVG that fails is
 * NOT drawn; the alt text is shown in a dashed box instead, and the lesson
 * figure test fails):
 *  - one <svg>…</svg> with a viewBox (it scales to the column; omit width/height);
 *  - drawing tags only: svg g path line polyline polygon rect circle ellipse
 *    text tspan defs marker title desc pattern clipPath linearGradient
 *    radialGradient stop;
 *  - no style / href / src / on* attributes, no comments, no data: URLs;
 *  - at most 60,000 characters.
 *
 * THEME (light + dark): the figure box sets the text colour, so draw axes,
 * curves and labels with `stroke="currentColor"` / `fill="currentColor"`.
 * These classes (on any element or <g>) are styled by the renderer:
 *  - class="fig-accent"   → accent colour (blue) — use currentColor inside it
 *  - class="fig-accent-2" → second accent (red)  — use currentColor inside it
 *  - class="fig-muted"    → grey (grid lines, asymptotes) — currentColor inside
 *  - class="fig-bg"       → FILL = the figure background, for open circles:
 *                           <circle class="fig-bg" cx=… cy=… r="4" stroke="currentColor" stroke-width="2"/>
 *  Filled (closed) dots: fill="currentColor". Never hard-code white/black.
 */

import { isSafeSvg, svgProblems } from '@/lib/safe-svg'

export interface LessonFigureSpec {
  /** Inline `<svg viewBox=…>…</svg>`; must pass isSafeSvg. */
  svg: string
  /** Required text alternative — what a student who cannot see the graph needs to know. */
  alt: string
  /** Optional caption under the figure; markdown + `$…$` math. */
  caption?: string
  /** Maximum width: sm ≈ 20rem, md ≈ 32rem (default), lg ≈ full column. */
  size?: 'sm' | 'md' | 'lg'
}

/** The figure(s) a section carries, normalized to an array (empty when none). */
export function sectionFigures(section: { figure?: unknown } | null | undefined): LessonFigureSpec[] {
  const raw = section?.figure
  if (!raw) return []
  const list = Array.isArray(raw) ? raw : [raw]
  return list.filter(
    (f): f is LessonFigureSpec => !!f && typeof f === 'object' && typeof (f as LessonFigureSpec).svg === 'string',
  )
}

/** Authoring problems with one figure (empty = fine). Used by the lesson-figure content test. */
export function figureProblems(fig: unknown): string[] {
  if (!fig || typeof fig !== 'object') return ['figure must be an object { svg, alt, caption?, size? }']
  const f = fig as Partial<LessonFigureSpec>
  const problems: string[] = []
  if (typeof f.svg !== 'string' || !f.svg.trim()) problems.push('svg is required')
  else {
    problems.push(...svgProblems(f.svg))
    if (f.svg.length > 60_000) problems.push('svg is longer than 60,000 characters')
  }
  if (typeof f.alt !== 'string' || f.alt.trim().length < 10) problems.push('alt text is required (describe what the graph shows)')
  if (f.caption !== undefined && typeof f.caption !== 'string') problems.push('caption must be a string')
  if (f.size !== undefined && !['sm', 'md', 'lg'].includes(f.size)) problems.push("size must be 'sm', 'md' or 'lg'")
  return problems
}

export { isSafeSvg }
