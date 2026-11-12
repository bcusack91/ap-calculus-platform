/**
 * Circuit drawings for the video-lesson checkpoint problems (Circuits Part 2):
 * a student should SEE the circuit, not only read it (owner, 2026-11-12).
 *
 * Every drawing is ours, built from the deck-figure symbol helpers (battery =
 * long/short plates, resistor = zigzag). Wires and labels take the text
 * colour (currentColor), so the figure follows light/dark mode; current
 * arrows are BLUE (fig-accent), changes to the circuit (an added branch, a
 * bare wire) RED (fig-accent-2), notes grey (fig-muted). Output is the
 * lesson-figure shape {svg, alt, size} and must pass isSafeSvg.
 */
import { ARROW, BATV, LINE, RES, SVG_OPEN, T } from '../../src/data/deck-figures/mcat-cp-circuits'
import type { QuestionFigure } from '../../src/lib/video-lesson-core'

type Branch = {
  /** Resistor labels along the branch (one or two, drawn in series). */
  r: string[]
  /** A dashed branch with a note, e.g. 'added'. */
  added?: boolean
  /** An open switch at the top of the branch: the branch is broken open. */
  opens?: boolean
  /** A bare wire laid across the branch (a short). */
  shorted?: boolean
  /** Note beside the branch ('blood', 'opens in part d', …). */
  note?: string
}

export type NetworkOpts = {
  /** Battery label, e.g. '12 V'. */
  V: string
  /** Resistors along the top wire, in order from the battery's + terminal. */
  series?: string[]
  /** Parallel branches on the right (none = a plain loop). */
  bank?: Branch[]
  /** Node letters: top-left (after the battery), top-right (start of the bank), bottom wire. */
  nodes?: { a?: string; b?: string; c?: string }
  /** Current arrow on the top wire with this label (e.g. 'I' or '3 A'). */
  current?: string
  /** Mark the battery's − terminal as ground (0 V). */
  ground?: boolean
}

const TOP = 60, BOT = 240, BX = 112, SEG = 96, GAP = 86

/** The circuit as inner SVG plus its width; `ox` shifts it right for side-by-side panels. */
function networkInner(o: NetworkOpts, ox = 0, idSuffix = ''): { inner: string; w: number } {
  const series = o.series ?? []
  const bank = o.bank ?? []
  const parts: string[] = []
  const x0 = BX + ox
  // Battery in the left wire.
  parts.push(LINE(x0, TOP, x0, 150 - 6), LINE(x0, 150 + 6, x0, BOT), BATV(x0, 150))
  parts.push(T(x0 - 34, 146, 17, '+', 'middle', '700'), T(x0 - 34, 168, 19, '−', 'middle', '700'))
  parts.push(T(x0 - 50, 156, 19, o.V, 'end', '700'))
  if (o.ground) {
    parts.push(LINE(x0, BOT, x0, BOT + 14), LINE(x0 - 16, BOT + 14, x0 + 16, BOT + 14), LINE(x0 - 10, BOT + 20, x0 + 10, BOT + 20), LINE(x0 - 4, BOT + 26, x0 + 4, BOT + 26))
    parts.push(`<g class="fig-muted">${T(x0 + 22, BOT + 26, 14, '0 V')}</g>`)
  }
  // Top wire with the series resistors.
  let x = x0
  const seriesEnd = x0 + 40 + series.length * SEG
  parts.push(LINE(x0, TOP, x0 + 40, TOP))
  x = x0 + 40
  for (const label of series) {
    parts.push(RES(x, TOP, x + SEG, TOP), T(x + SEG / 2, TOP - 18, 17, label, 'middle'))
    x += SEG
  }
  // The bank (or a plain right wire).
  const bankX0 = seriesEnd + (bank.length ? 40 : 60)
  let right = bankX0
  if (bank.length === 0) {
    parts.push(LINE(seriesEnd, TOP, bankX0, TOP), LINE(bankX0, TOP, bankX0, BOT), LINE(x0, BOT, bankX0, BOT))
  } else {
    right = bankX0 + (bank.length - 1) * GAP
    let shortX = 0
    bank.forEach((b, k) => {
      const bx = bankX0 + k * GAP
      const g: string[] = []
      if (b.opens) {
        // Open switch at the top of the branch, then the resistor(s) below it.
        g.push(LINE(bx, TOP, bx, TOP + 22), `<circle cx="${bx}" cy="${TOP + 24}" r="3" fill="currentColor"/>`, LINE(bx, TOP + 50, bx + 18, TOP + 28, 2.5))
        g.push(LINE(bx, TOP + 50, bx, TOP + 56))
        g.push(...branchResistors(bx, TOP + 56, BOT, b.r))
        g.push(`<g class="fig-muted">${T(bx + 24, TOP + 24, 14, 'opens')}</g>`)
      } else {
        g.push(...branchResistors(bx, TOP, BOT, b.r))
      }
      if (b.note) g.push(`<g class="fig-muted">${T(bx, BOT + 22, 14, b.note, 'middle')}</g>`)
      if (b.added) {
        parts.push(`<g class="fig-accent-2" stroke-dasharray="7 5">${g.join('')}</g>`)
        parts.push(`<g class="fig-accent-2">${T(bx, TOP - 18, 15, 'added', 'middle', '700')}</g>`)
      } else parts.push(g.join(''))
      if (b.shorted) shortX = bx + 64
    })
    if (shortX) {
      right = Math.max(right, shortX)
      parts.push(`<g class="fig-accent-2">${LINE(shortX, TOP, shortX, BOT, 3.5)}${T(shortX + 8, 150, 15, 'bare wire', 'start', '700')}</g>`)
    }
    parts.push(LINE(seriesEnd, TOP, right, TOP), LINE(x0, BOT, right, BOT))
    // Junction dots where the bank joins the wires.
    parts.push(`<circle cx="${bankX0}" cy="${TOP}" r="4" fill="currentColor"/><circle cx="${bankX0}" cy="${BOT}" r="4" fill="currentColor"/>`)
  }
  // Node letters.
  if (o.nodes?.a) parts.push(`<g class="fig-accent">${T(x0 + 12, TOP - 12, 19, o.nodes.a, 'start', '700')}</g>`)
  if (o.nodes?.b) parts.push(`<g class="fig-accent">${T(bankX0 + 10, TOP - 12, 19, o.nodes.b, 'start', '700')}</g>`)
  if (o.nodes?.c) parts.push(`<g class="fig-accent">${T((x0 + right) / 2, BOT + 24, 19, o.nodes.c, 'middle', '700')}</g>`)
  // Current arrow on the top wire, just after the battery.
  if (o.current) {
    const id = `arr-cf${idSuffix}`
    parts.push(`<g class="fig-accent"><defs>${ARROW(id)}</defs><line x1="${x0 + 4}" y1="${TOP - 26}" x2="${x0 + 34}" y2="${TOP - 26}" stroke="currentColor" stroke-width="3" marker-end="url(#${id})"/>${T(x0 + 19, TOP - 34, 15, o.current, 'middle', '700')}</g>`)
  }
  const w = right + 70 + (bank.some((b) => b.note) ? 20 : 0) + (bank.some((b) => b.shorted) ? 70 : 0)
  return { inner: parts.join(''), w }
}

/** A vertical branch from y1 to y2 at x carrying one or two resistors with labels to the right. */
function branchResistors(x: number, y1: number, y2: number, labels: string[]): string[] {
  const out: string[] = []
  if (labels.length === 1) {
    out.push(RES(x, y1, x, y2), T(x + 16, (y1 + y2) / 2 + 6, 17, labels[0]))
  } else {
    const mid = (y1 + y2) / 2
    out.push(RES(x, y1, x, mid), RES(x, mid, x, y2), T(x + 16, (y1 + mid) / 2 + 6, 17, labels[0]), T(x + 16, (mid + y2) / 2 + 6, 17, labels[1]))
  }
  return out
}

/** A current divider: a labelled current enters a node, splits among horizontal branches, and rejoins. */
export type DividerOpts = {
  I: string
  branches: { r: string; note?: string }[]
  /** Label the two outer ends (e.g. 'electrode'). */
  ends?: string
}

function dividerInner(o: DividerOpts, ox = 0, idSuffix = ''): { inner: string; w: number } {
  const n = o.branches.length
  const xIn = 30 + ox, xL = 130 + ox, xR = 400 + ox, xOut = 500 + ox
  const yc = 150
  const ys = n === 1 ? [150] : n === 2 ? [95, 205] : [70, 150, 230]
  const parts: string[] = []
  const id = `arr-cd${idSuffix}`
  parts.push(`<g class="fig-accent"><defs>${ARROW(id)}</defs><line x1="${xIn}" y1="${yc}" x2="${xL - 8}" y2="${yc}" stroke="currentColor" stroke-width="3" marker-end="url(#${id})"/>${T((xIn + xL) / 2, yc - 14, 16, o.I, 'middle', '700')}</g>`)
  parts.push(`<g class="fig-accent"><line x1="${xR + 4}" y1="${yc}" x2="${xOut}" y2="${yc}" stroke="currentColor" stroke-width="3" marker-end="url(#${id})"/></g>`)
  parts.push(LINE(xL, Math.min(...ys), xL, Math.max(...ys)), LINE(xR, Math.min(...ys), xR, Math.max(...ys)))
  parts.push(`<circle cx="${xL}" cy="${yc}" r="4" fill="currentColor"/><circle cx="${xR}" cy="${yc}" r="4" fill="currentColor"/>`)
  o.branches.forEach((b, k) => {
    const y = ys[k]
    parts.push(RES(xL, y, xR, y), T((xL + xR) / 2, y - 16, 17, b.r, 'middle'))
    if (b.note) parts.push(`<g class="fig-muted">${T((xL + xR) / 2, y + 26, 14, b.note, 'middle')}</g>`)
  })
  if (o.ends) {
    parts.push(`<g class="fig-muted">${T(xIn + 6, yc + 30, 13, o.ends, 'middle')}${T(xOut - 6, yc + 30, 13, o.ends, 'middle')}</g>`)
  }
  return { inner: parts.join(''), w: xOut - ox + 30 }
}

function wrap(panels: { inner: string; w: number }[], h = 300): string {
  const w = panels.reduce((acc, p) => acc + p.w, 0)
  return `${SVG_OPEN} viewBox="0 0 ${w} ${h}">${panels.map((p) => p.inner).join('')}</svg>`
}

export function network(o: NetworkOpts, alt: string): QuestionFigure {
  const p = networkInner(o)
  return { svg: wrap([p], o.ground ? 300 : 290), alt, size: 'md' }
}

export function divider(o: DividerOpts, alt: string): QuestionFigure {
  return { svg: wrap([dividerInner(o)]), alt, size: 'md' }
}

/** Two panels side by side: a series loop (voltage divider) and a current divider. */
export function bothDividers(loop: NetworkOpts, div: DividerOpts, alt: string): QuestionFigure {
  const a = networkInner(loop, 0, '-a')
  const b = dividerInner(div, a.w, '-b')
  const svg = `${SVG_OPEN} viewBox="0 0 ${a.w + b.w} 300">${a.inner}${b.inner}` +
    `<g class="fig-muted">${T(a.w / 2, 285, 14, '(a) series', 'middle')}${T(a.w + b.w / 2, 285, 14, '(b) parallel', 'middle')}</g></svg>`
  return { svg, alt, size: 'lg' }
}

/** Two resistors end to end on one wire with a third wire leaving their meeting point. */
export function junctionBetween(alt: string): QuestionFigure {
  const y = 80
  const parts = [
    LINE(20, y, 60, y, 2.5, true), RES(60, y, 250, y), RES(270, y, 460, y), LINE(460, y, 500, y, 2.5, true),
    T(155, y - 18, 17, 'R₁', 'middle'), T(365, y - 18, 17, 'R₂', 'middle'),
    `<circle cx="260" cy="${y}" r="5" fill="currentColor"/>`,
    LINE(260, y, 260, 190), LINE(260, 190, 260, 225, 2.5, true),
    `<g class="fig-muted">${T(272, 150, 14, 'third wire,')}${T(272, 168, 14, 'to another part')}${T(272, 186, 14, 'of the circuit')}</g>`,
  ]
  return { svg: `${SVG_OPEN} viewBox="0 0 520 240">${parts.join('')}</svg>`, alt, size: 'md' }
}

/** One loop with two batteries pushing opposite ways (Example 2 of the Kirchhoff video). */
export function twoSourceLoop(alt: string): QuestionFigure {
  const xL = 112, xR = 470, top = 60, bot = 240
  const parts = [
    LINE(xL, top, xL, 144), LINE(xL, 156, xL, bot), BATV(xL, 150),
    T(xL - 34, 146, 17, '+', 'middle', '700'), T(xL - 34, 168, 19, '−', 'middle', '700'), T(xL - 50, 156, 19, '12 V', 'end', '700'),
    // Right battery reversed: long (+) plate BELOW, short (−) plate above.
    LINE(xR, top, xR, 144), LINE(xR, 156, xR, bot),
    `<path d="M${xR - 9} ${144} L${xR + 9} ${144}" stroke="currentColor" stroke-width="5.5"/><path d="M${xR - 18} ${156} L${xR + 18} ${156}" stroke="currentColor" stroke-width="3"/>`,
    T(xR + 34, 146, 19, '−', 'middle', '700'), T(xR + 34, 170, 17, '+', 'middle', '700'), T(xR + 46, 156, 19, '4 V', 'start', '700'),
    LINE(xL, top, 190, top), RES(190, top, 390, top), LINE(390, top, xR, top), T(290, top - 18, 17, '2 Ω', 'middle'),
    LINE(xL, bot, 190, bot), RES(190, bot, 390, bot), LINE(390, bot, xR, bot), T(290, bot + 30, 17, '6 Ω', 'middle'),
  ]
  return { svg: `${SVG_OPEN} viewBox="0 0 580 290">${parts.join('')}</svg>`, alt, size: 'md' }
}
