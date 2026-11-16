/**
 * The drawings for each Circuits Part 3 checkpoint problem (keyed by
 * video/section): real batteries with their internal resistance, cell stacks,
 * meters, and capacitors with and without a dielectric slab. Students should
 * SEE the circuit, not only read it (owner, 2026-11-12).
 *
 * Same conventions as circuit-figures.ts: wires and labels take the text
 * colour (currentColor) so the figure follows light/dark mode; current arrows
 * BLUE (fig-accent); what changes in a later part (a shorting wire, a flipped
 * cell, a misplaced meter, the slab) RED (fig-accent-2); notes grey
 * (fig-muted). Output is the lesson-figure shape {svg, alt, size} and must
 * pass isSafeSvg.
 */
import { ARROW, BATV, BOX, BULB, CAPV, LINE, METER, RES, SVG_OPEN, T } from '../../src/data/deck-figures/mcat-cp-circuits'
import type { QuestionFigure } from '../../src/lib/video-lesson-core'

type Panel = { inner: string; w: number }

const muted = (s: string) => `<g class="fig-muted">${s}</g>`
const red = (s: string) => `<g class="fig-accent-2">${s}</g>`
const blue = (s: string) => `<g class="fig-accent">${s}</g>`
const dot = (x: number, y: number) => `<circle cx="${x}" cy="${y}" r="4" fill="currentColor"/>`
const terminal = (x: number, y: number) => `<circle class="fig-bg" cx="${x}" cy="${y}" r="5" stroke="currentColor" stroke-width="2.5"/>`

/** A cell in a HORIZONTAL wire at (cx, cy): long thin plate (+) on the side the cell pushes toward. The wire must stop at cx−6 and resume at cx+6. */
function BATH(cx: number, cy: number, plusRight = true): string {
  const long = plusRight ? cx + 6 : cx - 6
  const short = plusRight ? cx - 6 : cx + 6
  return `<path d="M${long} ${cy - 18} L${long} ${cy + 18}" stroke="currentColor" stroke-width="3"/><path d="M${short} ${cy - 9} L${short} ${cy + 9}" stroke="currentColor" stroke-width="5.5"/>`
}

function svg(panels: Panel[], h: number, captions?: string[]): string {
  let x = 0
  const parts: string[] = []
  panels.forEach((p, k) => {
    parts.push(p.inner)
    if (captions?.[k]) parts.push(muted(T(x + p.w / 2, h - 12, 15, captions[k], 'middle')))
    x += p.w
  })
  return `${SVG_OPEN} viewBox="0 0 ${x} ${h}">${parts.join('')}</svg>`
}

/* ── a real battery: ideal EMF + internal r inside a dashed box ─────────────── */

type RealBatteryOpts = {
  emf: string
  r: string
  /** What is connected across the terminals. */
  load?: { kind: 'resistor'; label: string } | { kind: 'wire' } | { kind: 'charger'; current: string }
  /** A voltmeter across the terminals showing this reading. */
  reading?: string
}

const TOP = 60, BOT = 250

function realBatteryPanel(o: RealBatteryOpts, ox: number, id: string): Panel {
  const xi = ox + 150 // the battery's inner wire
  const xt = ox + 210 // terminals on the box edge
  const parts: string[] = []
  parts.push(muted(BOX(ox + 30, TOP - 22, 180, BOT - TOP + 44, 12, 2, 0, true) + T(ox + 120, BOT + 46, 14, 'battery', 'middle')))
  // Inside: ideal cell (+ on top) then r, in one vertical wire.
  parts.push(LINE(xi, TOP, xi, 114), BATV(xi, 120), LINE(xi, 126, xi, 160), RES(xi, 160, xi, 230), LINE(xi, 230, xi, BOT))
  parts.push(T(xi - 26, 112, 15, '+', 'middle', '700'), T(xi - 40, 128, 17, o.emf, 'end', '700'))
  parts.push(T(xi - 22, 201, 16, o.r, 'end'))
  parts.push(LINE(xi, TOP, xt, TOP), LINE(xi, BOT, xt, BOT), terminal(xt, TOP), terminal(xt, BOT))
  let right = xt + 20
  if (o.reading) {
    const xm = xt + 60
    parts.push(LINE(xt + 5, TOP, xm, TOP), LINE(xt + 5, BOT, xm, BOT), dot(xm, TOP), dot(xm, BOT), LINE(xm, TOP, xm, BOT), METER(xm, 155, 'V'))
    parts.push(blue(T(xm + 26, 160, 16, `reads ${o.reading}`, 'start', '700')))
    right = xm + 130
  }
  const load = o.load
  if (load) {
    const xl = o.reading ? right + 20 : xt + 110
    const from = o.reading ? xt + 60 : xt + 5
    if (load.kind === 'resistor') {
      parts.push(LINE(from, TOP, xl, TOP), LINE(from, BOT, xl, BOT), RES(xl, TOP, xl, BOT), T(xl + 16, 160, 17, load.label))
      right = xl + 80
    } else if (load.kind === 'wire') {
      parts.push(LINE(from, TOP, xl, TOP), LINE(from, BOT, xl, BOT), red(LINE(xl, TOP, xl, BOT, 4) + T(xl + 12, 160, 15, 'bare wire', 'start', '700')))
      right = xl + 90
    } else {
      // A charger: a source with its + terminal joined to the battery's +, pushing current backward.
      parts.push(LINE(from, TOP, xl, TOP), LINE(from, BOT, xl, BOT))
      parts.push(red(LINE(xl, TOP, xl, 149) + LINE(xl, 161, xl, BOT) + BATV(xl, 155) + T(xl + 26, 150, 15, '+', 'middle', '700') + T(xl + 16, 186, 15, 'charger', 'start', '700')))
      parts.push(blue(`<defs>${ARROW(id)}</defs><line x1="${xl - 14}" y1="${TOP - 22}" x2="${xt + 22}" y2="${TOP - 22}" stroke="currentColor" stroke-width="3" marker-end="url(#${id})"/>` + T((xl + xt) / 2 + 4, TOP - 30, 15, load.current, 'middle', '700')))
      right = xl + 90
    }
  }
  return { inner: parts.join(''), w: Math.max(right, xt + 60) - ox + 10 }
}

/** One to three real-battery panels side by side, captioned. */
export function realBattery(panels: RealBatteryOpts[], captions: string[], alt: string): QuestionFigure {
  let ox = 0
  const ps = panels.map((p, k) => {
    const panel = realBatteryPanel(p, ox, `arr-rb${k}`)
    ox += panel.w
    return panel
  })
  return { svg: svg(ps, BOT + 90, captions), alt, size: panels.length > 1 ? 'lg' : 'md' }
}

/* ── a series stack of cells, each with its own r, driving a bulb ──────────── */

/** Cells along the top wire (+ toward the right), each followed by its internal resistance; a bulb on the right wire. `flip` reverses one cell (0-based) and draws it red. */
export function cellStack(o: { cells: number; emf: string; r: string; bulb: string; flip?: number }, alt: string): QuestionFigure {
  const top = 70, bot = 250, x0 = 40
  const parts: string[] = []
  let x = x0
  parts.push(LINE(x0, top, x0, bot))
  for (let k = 0; k < o.cells; k++) {
    const cx = x + 34
    const flipped = o.flip === k
    parts.push(LINE(x, top, cx - 6, top), LINE(cx + 6, top, cx + 24, top))
    const cell = BATH(cx, top, !flipped) + T(cx, top - 28, 15, o.emf, 'middle', '700')
    parts.push(flipped ? red(cell + T(cx, top + 42, 13, 'reversed', 'middle', '700')) : cell)
    parts.push(RES(cx + 24, top, cx + 104, top), muted(T(cx + 64, top + 32, 13, o.r, 'middle')))
    x = cx + 104
  }
  const xr = x + 50
  parts.push(LINE(x, top, xr, top), LINE(xr, top, xr, 144), BULB(xr, 160), LINE(xr, 176, xr, bot), LINE(x0, bot, xr, bot))
  parts.push(T(xr + 24, 166, 16, o.bulb))
  parts.push(muted(T((x0 + xr) / 2, bot + 30, 14, `each cell: ${o.emf}, internal resistance ${o.r}`, 'middle')))
  return { svg: `${SVG_OPEN} viewBox="0 0 ${xr + 130} ${bot + 50}">${parts.join('')}</svg>`, alt, size: 'md' }
}

/* ── a battery, a resistor and a lamp in series, with meters ───────────────── */

type MeterSetup = 'correct' | 'ammeter-across' | 'voltmeter-series'

function metersPanel(setup: MeterSetup, ox: number, o: { V: string; R: string; lamp: string; meterR?: string }): Panel {
  const x0 = ox + 90, xr = ox + 300, top = TOP, bot = BOT
  const parts: string[] = []
  parts.push(LINE(x0, top, x0, 149), LINE(x0, 161, x0, bot), BATV(x0, 155), T(x0 - 26, 150, 15, '+', 'middle', '700'), T(x0 - 40, 162, 17, o.V, 'end', '700'))
  parts.push(LINE(x0, top, x0 + 40, top), RES(x0 + 40, top, x0 + 160, top), LINE(x0 + 160, top, xr, top), T(x0 + 100, top - 18, 16, o.R, 'middle'))
  parts.push(LINE(xr, top, xr, 139), BULB(xr, 155), LINE(xr, 171, xr, bot), T(xr - 24, 160, 15, o.lamp, 'end'))
  if (setup === 'voltmeter-series') {
    const xm = (x0 + xr) / 2
    parts.push(LINE(x0, bot, xm - 18, bot), LINE(xm + 18, bot, xr, bot))
    parts.push(red(METER(xm, bot, 'V') + T(xm, bot + 40, 14, `in series${o.meterR ? `, ${o.meterR}` : ''}`, 'middle', '700')))
  } else if (setup === 'correct') {
    const xm = (x0 + xr) / 2
    parts.push(LINE(x0, bot, xm - 18, bot), LINE(xm + 18, bot, xr, bot), METER(xm, bot, 'A'))
    const xv = xr + 70
    parts.push(LINE(xr, top + 40, xv, top + 40), LINE(xr, bot - 40, xv, bot - 40), dot(xr, top + 40), dot(xr, bot - 40), LINE(xv, top + 40, xv, bot - 40), METER(xv, 155, 'V'))
  } else {
    parts.push(LINE(x0, bot, xr, bot))
    const xa = xr + 70
    parts.push(dot(xr, top + 40), dot(xr, bot - 40))
    parts.push(red(LINE(xr, top + 40, xa, top + 40) + LINE(xr, bot - 40, xa, bot - 40) + LINE(xa, top + 40, xa, bot - 40) + METER(xa, 155, 'A') + T(xa, bot - 14, 14, 'across', 'middle', '700')))
  }
  return { inner: parts.join(''), w: 420 }
}

/** The meters example: one, two or three setups side by side. */
export function meterLoops(setups: MeterSetup[], o: { V: string; R: string; lamp: string; meterR?: string }, captions: string[], alt: string): QuestionFigure {
  const ps = setups.map((s, k) => metersPanel(s, k * 420, o))
  return { svg: svg(ps, BOT + 90, captions), alt, size: setups.length > 1 ? 'lg' : 'md' }
}

/* ── capacitors ─────────────────────────────────────────────────────────────── */

/** A battery wired to a capacitor (circuit symbol), one panel per voltage. */
export function capLoop(o: { C: string; volts: string[] }, captions: string[], alt: string): QuestionFigure {
  const ps = o.volts.map((V, k) => {
    const ox = k * 360
    const x0 = ox + 100, xr = ox + 240
    const inner = [
      LINE(x0, TOP, x0, 149), LINE(x0, 161, x0, BOT), BATV(x0, 155), T(x0 - 26, 150, 15, '+', 'middle', '700'), T(x0 - 40, 162, 17, V, 'end', '700'),
      LINE(x0, TOP, xr, TOP), LINE(x0, BOT, xr, BOT), LINE(xr, TOP, xr, 150), CAPV(xr, 155), LINE(xr, 160, xr, BOT), T(xr + 26, 162, 17, o.C),
    ].join('')
    return { inner, w: 360 }
  })
  return { svg: svg(ps, BOT + 60, captions), alt, size: ps.length > 1 ? 'lg' : 'md' }
}

type PlatesOpts = {
  /** Half the plate width in drawing units (bigger plates are drawn wider). */
  half: number
  /** Gap in drawing units, and its label. */
  gap: number
  gapLabel: string
  /** Label for the capacitance, e.g. 'C = 6.0 pF'. */
  label: string
  /** Battery label; omit when `connected` is false. */
  V?: string
  /** false: the battery has been disconnected (wires end in open terminals). */
  connected?: boolean
  /** A dielectric slab filling the gap, with this label (e.g. 'κ = 4'). */
  slab?: string
  /** A tag under the drawing, e.g. 'Q fixed'. */
  tag?: string
}

function platesPanel(o: PlatesOpts, ox: number): Panel {
  const xb = ox + 120 // battery wire
  const xc = ox + 340 // plate centre
  const mid = 160
  const yT = mid - o.gap / 2, yB = mid + o.gap / 2
  const parts: string[] = []
  // Plates.
  parts.push(`<rect x="${xc - o.half}" y="${yT - 8}" width="${2 * o.half}" height="8" fill="currentColor"/>`)
  parts.push(`<rect x="${xc - o.half}" y="${yB}" width="${2 * o.half}" height="8" fill="currentColor"/>`)
  if (o.slab) {
    parts.push(red(`<rect x="${xc - o.half}" y="${yT + 2}" width="${2 * o.half}" height="${o.gap - 4}" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>` + T(xc, mid + 6, 16, o.slab, 'middle', '700')))
  }
  // Leads from the plate centres up and down to the wires.
  const yw1 = 50, yw2 = 270
  parts.push(LINE(xc, yT - 8, xc, yw1), LINE(xc, yB + 8, xc, yw2))
  if (o.connected === false) {
    parts.push(LINE(xc, yw1, xb + 70, yw1), LINE(xc, yw2, xb + 70, yw2), terminal(xb + 65, yw1), terminal(xb + 65, yw2))
    parts.push(muted(T(xb + 20, mid + 6, 14, 'battery', 'middle') + T(xb + 20, mid + 24, 14, 'removed', 'middle')))
  } else {
    parts.push(LINE(xc, yw1, xb, yw1), LINE(xc, yw2, xb, yw2), LINE(xb, yw1, xb, mid - 6), LINE(xb, mid + 6, xb, yw2), BATV(xb, mid))
    parts.push(T(xb - 26, mid - 4, 15, '+', 'middle', '700'), T(xb - 40, mid + 8, 17, o.V ?? '', 'end', '700'))
  }
  // Gap dimension on the right of the plates, and the label.
  const xd = xc + o.half + 26
  parts.push(muted(`<path d="M${xd - 6} ${yT} L${xd + 6} ${yT} M${xd} ${yT} L${xd} ${yB} M${xd - 6} ${yB} L${xd + 6} ${yB}" fill="none" stroke="currentColor" stroke-width="2"/>` + T(xd + 12, mid + 6, 15, o.gapLabel)))
  parts.push(T(xc, yw2 + 34, 17, o.label, 'middle', '700'))
  if (o.tag) parts.push(blue(T(xc, yw2 + 58, 15, o.tag, 'middle', '700')))
  return { inner: parts.join(''), w: Math.max(520, xd + 110 - ox) }
}

/** Parallel-plate capacitors drawn side on, one panel per state. */
export function plates(panels: PlatesOpts[], captions: string[], alt: string): QuestionFigure {
  let ox = 0
  const ps = panels.map((p) => {
    const panel = platesPanel(p, ox)
    ox += panel.w
    return panel
  })
  const tagged = panels.some((p) => p.tag)
  return { svg: svg(ps, tagged ? 380 : 350, captions), alt, size: panels.length > 1 ? 'lg' : 'md' }
}

/* ── the Circuits Part 3 set ──────────────────────────────────────────────── */

export const FIG = {
  // Video 2: EMF worked examples
  v2_ex1: realBattery(
    [
      { emf: 'ε ?', r: 'r ?', reading: '9.0 V' },
      { emf: 'ε ?', r: 'r ?', reading: '8.0 V', load: { kind: 'resistor', label: '4.0 Ω' } },
    ],
    ['nothing attached', 'with a 4.0 Ω resistor'],
    'Two drawings of one battery, shown as a dashed box holding an ideal cell of unknown EMF ε in series with an unknown internal resistance r. Left: only a voltmeter across the terminals, reading 9.0 V. Right: a 4.0 Ω resistor is also connected across the terminals, and the voltmeter reads 8.0 V.',
  ),
  v2_ex2: realBattery(
    [
      { emf: '12 V', r: '0.50 Ω', load: { kind: 'resistor', label: '5.5 Ω' } },
      { emf: '12 V', r: '0.50 Ω', load: { kind: 'wire' } },
      { emf: '12 V', r: '0.50 Ω', load: { kind: 'charger', current: '3.0 A' } },
    ],
    ['(a) a 5.5 Ω load', '(b) shorted by a wire', '(c) being recharged'],
    'Three drawings of one battery (a dashed box holding a 12 V ideal cell in series with a 0.50 Ω internal resistance). (a) A 5.5 Ω load across the terminals. (b) A bare wire, drawn in red, across the terminals. (c) A charger, drawn in red, connected + to +, driving 3.0 A backward into the battery’s + terminal.',
  ),
  // Video 4: cells and meters worked examples
  v4_ex1: cellStack(
    { cells: 3, emf: '1.5 V', r: '0.20 Ω', bulb: '2.4 Ω bulb' },
    'Three 1.5 V cells in series along the top wire, all facing the same way, each followed by its 0.20 Ω internal resistance; the stack drives a 2.4 Ω bulb on the right wire.',
  ),
  v4_ex1_flip: cellStack(
    { cells: 3, emf: '1.5 V', r: '0.20 Ω', bulb: '2.4 Ω bulb', flip: 1 },
    'The same three-cell stack driving the 2.4 Ω bulb, but the middle cell, drawn in red and marked "reversed", faces the opposite way; each cell still has its 0.20 Ω internal resistance.',
  ),
  v4_ex2: meterLoops(
    ['correct', 'ammeter-across', 'voltmeter-series'],
    { V: '12 V', R: '4.0 Ω', lamp: '2.0 Ω lamp', meterR: '1.0 MΩ' },
    ['(a) meters placed correctly', '(b) ammeter across the lamp', '(c) voltmeter in series'],
    'Three versions of one loop: a 12 V battery, a 4.0 Ω resistor on the top wire and a 2.0 Ω lamp on the right wire. (a) An ammeter in series on the bottom wire and a voltmeter across the lamp. (b) No other meters; an ammeter, drawn in red, connected directly across the lamp. (c) A 1.0 MΩ voltmeter, drawn in red, connected in series on the bottom wire.',
  ),
  // Video 6: capacitance worked examples
  v6_ex1: capLoop(
    { C: '3.0 μF', volts: ['9.0 V', '18 V'] },
    ['(a) and (b): a 9.0 V battery', '(c): an 18 V battery instead'],
    'Two drawings of the same 3.0 μF capacitor wired to a battery: on the left a 9.0 V battery, on the right an 18 V battery.',
  ),
  v6_ex2: plates(
    [
      { half: 70, gap: 50, gapLabel: '1.5 mm', label: 'C = 6.0 pF', V: '12 V' },
      { half: 121, gap: 100, gapLabel: '3.0 mm', label: 'area × 3, gap × 2', V: '12 V' },
    ],
    ['(a) as built', '(b) and (c): rebuilt, still on 12 V'],
    'Two side views of an air-filled parallel-plate capacitor on a 12 V battery. Left: C = 6.0 pF with a 1.5 mm gap. Right: the rebuilt capacitor, with plates of three times the area and the gap doubled to 3.0 mm, still connected to the 12 V battery.',
  ),
  // Video 8: dielectrics and energy worked examples
  v8_ex1: plates(
    [
      { half: 80, gap: 70, gapLabel: 'air', label: '2.0 μF at 100 V', V: '100 V' },
      { half: 80, gap: 70, gapLabel: 'filled', label: 'slab slid in', connected: false, slab: 'κ = 4', tag: 'Q fixed' },
    ],
    ['charged to 100 V', 'then disconnected, slab in'],
    'Left: a 2.0 μF air-filled parallel-plate capacitor connected to a 100 V battery. Right: the battery has been removed (the wires end in open terminals) and a slab with κ = 4, drawn in red, fills the gap; a tag reads "Q fixed".',
  ),
  v8_ex2: plates(
    [{ half: 80, gap: 70, gapLabel: 'filled', label: '2.0 μF, slab slid in', V: '100 V', slab: 'κ = 4', tag: 'V fixed' }],
    [''],
    'The same 2.0 μF parallel-plate capacitor with a κ = 4 slab, drawn in red, filling the gap, and the 100 V battery still connected; a tag reads "V fixed".',
  ),
} satisfies Record<string, QuestionFigure>
