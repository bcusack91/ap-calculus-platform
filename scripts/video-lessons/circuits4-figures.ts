/**
 * The drawings for each Circuits Part 4 checkpoint problem (keyed by
 * video/example): capacitor networks, RC loops with a switch, the membrane as
 * a resistor beside a capacitor, and a defibrillator's charge and discharge
 * loops. Students should SEE the circuit, not only read it (owner, 2026-11-12).
 *
 * Same conventions as circuits3-figures.ts: wires and labels take the text
 * colour (currentColor); what changes in a later part RED (fig-accent-2);
 * notes grey (fig-muted). Output is the lesson-figure shape {svg, alt, size}
 * and must pass isSafeSvg.
 */
import { BATV, BOX, CAPH, CAPV, LINE, RES, SVG_OPEN, T } from '../../src/data/deck-figures/mcat-cp-circuits'
import type { QuestionFigure } from '../../src/lib/video-lesson-core'

type Panel = { inner: string; w: number }

const muted = (s: string) => `<g class="fig-muted">${s}</g>`
const red = (s: string) => `<g class="fig-accent-2">${s}</g>`
const dot = (x: number, y: number) => `<circle cx="${x}" cy="${y}" r="4" fill="currentColor"/>`

const TOP = 60, BOT = 250, MID = 155

function fig(panels: Panel[], captions: string[], alt: string): QuestionFigure {
  const h = BOT + 60
  let x = 0
  const parts: string[] = []
  panels.forEach((p, k) => {
    parts.push(p.inner)
    if (captions[k]) parts.push(muted(T(x + p.w / 2, h - 12, 15, captions[k], 'middle')))
    x += p.w
  })
  return { svg: `${SVG_OPEN} viewBox="0 0 ${x} ${h}">${parts.join('')}</svg>`, alt, size: panels.length > 1 ? 'lg' : 'md' }
}

/** The left wire with a battery (+ on top) from TOP to BOT at x, labelled V. */
const battery = (x: number, V: string) =>
  [LINE(x, TOP, x, MID - 6), LINE(x, MID + 6, x, BOT), BATV(x, MID), T(x - 26, MID - 5, 15, '+', 'middle', '700'), T(x - 40, MID + 7, 17, V, 'end', '700')].join('')

/** A capacitor in the top wire at x, labelled above. The caller's wire must leave a gap from x−5 to x+5. */
const capTop = (x: number, label: string) => CAPH(x, TOP) + T(x, TOP - 26, 16, label, 'middle')

/** A vertical branch at x from TOP to BOT holding one capacitor, labelled to the right. */
const capBranch = (x: number, label: string) =>
  [LINE(x, TOP, x, MID - 5), LINE(x, MID + 5, x, BOT), CAPV(x, MID), T(x + 24, MID + 6, 16, label)].join('')

/** An open switch in the top wire from x to x+44. */
const switchTop = (x: number) =>
  [dot(x, TOP), dot(x + 44, TOP), LINE(x, TOP, x + 38, TOP - 22), muted(T(x + 22, TOP - 30, 14, 'S', 'middle'))].join('')

/* ── video 2: capacitor networks ─────────────────────────────────────────── */

function seriesPair(ox: number): Panel {
  const x0 = ox + 110, xr = ox + 400
  const inner = [
    battery(x0, '12 V'),
    LINE(x0, TOP, ox + 195, TOP), capTop(ox + 200, '3.0 μF'), LINE(ox + 205, TOP, ox + 315, TOP), capTop(ox + 320, '6.0 μF'), LINE(ox + 325, TOP, xr, TOP),
    LINE(xr, TOP, xr, BOT), LINE(x0, BOT, xr, BOT),
  ].join('')
  return { inner, w: 460 }
}

function seriesParallel(ox: number): Panel {
  const x0 = ox + 110, xa = ox + 300, xb = ox + 420
  const inner = [
    battery(x0, '18 V'),
    LINE(x0, TOP, ox + 195, TOP), capTop(ox + 200, '3.0 μF'), LINE(ox + 205, TOP, xb, TOP),
    LINE(x0, BOT, xb, BOT),
    capBranch(xa, '2.0 μF'), capBranch(xb, '4.0 μF'), dot(xa, TOP), dot(xa, BOT),
  ].join('')
  return { inner, w: 530 }
}

/* ── video 4: RC circuits ────────────────────────────────────────────────── */

function rcNetwork(ox: number): Panel {
  const x0 = ox + 110, xa = ox + 360, xb = ox + 500
  const inner = [
    battery(x0, '12 V'),
    LINE(x0, TOP, ox + 140, TOP), switchTop(ox + 140), LINE(ox + 184, TOP, ox + 210, TOP),
    RES(ox + 210, TOP, ox + 330, TOP), T(ox + 270, TOP - 22, 16, 'R₁ = 2.0 Ω', 'middle'), LINE(ox + 330, TOP, xb, TOP),
    LINE(x0, BOT, xb, BOT),
    RES(xa, TOP, xa, BOT), T(xa - 16, MID + 6, 16, 'R₂ = 4.0 Ω', 'end'), dot(xa, TOP), dot(xa, BOT),
    RES(xb, TOP, xb, 180), T(xb + 18, 126, 16, 'R₃ = 4.0 Ω'),
    LINE(xb, 180, xb, 205), CAPV(xb, 210), LINE(xb, 215, xb, BOT), T(xb + 24, 216, 16, '5.0 μF'),
  ].join('')
  return { inner, w: 630 }
}

function rcCharge(ox: number): Panel {
  const x0 = ox + 110, xr = ox + 380
  const inner = [
    battery(x0, '9.0 V'),
    LINE(x0, TOP, ox + 140, TOP), switchTop(ox + 140), LINE(ox + 184, TOP, ox + 220, TOP),
    RES(ox + 220, TOP, ox + 340, TOP), T(ox + 280, TOP - 22, 16, '50 kΩ', 'middle'), LINE(ox + 340, TOP, xr, TOP),
    capBranch(xr, '40 μF'), LINE(x0, BOT, xr, BOT),
  ].join('')
  return { inner, w: 480 }
}

function rcDischarge(ox: number): Panel {
  const xl = ox + 80, xr = ox + 280
  const inner = [
    LINE(xl, TOP, xl, MID - 5), LINE(xl, MID + 5, xl, BOT), CAPV(xl, MID), T(xl - 24, MID - 2, 16, '40 μF', 'end'), muted(T(xl - 24, MID + 18, 14, 'full', 'end')),
    LINE(xl, TOP, xr, TOP), LINE(xl, BOT, xr, BOT),
    red(RES(xr, TOP, xr, BOT) + T(xr + 18, MID + 6, 16, '50 kΩ')),
  ].join('')
  return { inner, w: 380 }
}

/* ── video 6: the membrane ───────────────────────────────────────────────── */

function membraneRC(ox: number, Rm: string, changed: boolean): Panel {
  const xa = ox + 130, xb = ox + 300, x0 = ox + 50, x1 = ox + 380
  const r = RES(xa, TOP, xa, BOT) + T(xa - 16, MID - 4, 16, 'R', 'end') + T(xa - 16, MID + 16, 14, Rm, 'end')
  const inner = [
    LINE(x0, TOP, x1, TOP), LINE(x0, BOT, x1, BOT),
    muted(T(x1 + 8, TOP + 5, 14, 'outside') + T(x1 + 8, BOT + 5, 14, 'inside')),
    changed ? red(r) : r,
    capBranch(xb, '1.5 × 10⁻¹⁰ F'), dot(xa, TOP), dot(xa, BOT), dot(xb, TOP), dot(xb, BOT),
  ].join('')
  return { inner, w: 470 }
}

function membraneSheet(ox: number): Panel {
  const x0 = ox + 70, x1 = ox + 330, yo = 120, yi = 190
  const plus = [0, 1, 2, 3, 4].map((k) => T(x0 + 30 + k * 50, yo - 12, 16, '+', 'middle', '700')).join('')
  const minus = [0, 1, 2, 3, 4].map((k) => T(x0 + 30 + k * 50, yi + 24, 16, '−', 'middle', '700')).join('')
  const inner = [
    LINE(x0, yo, x1, yo, 3.5), LINE(x0, yi, x1, yi, 3.5), plus, minus,
    muted(T(x0, yo - 40, 14, 'outside') + T(x0, yi + 52, 14, 'inside')),
    LINE(x1 + 22, yo, x1 + 22, yi, 2), LINE(x1 + 16, yo, x1 + 28, yo, 2), LINE(x1 + 16, yi, x1 + 28, yi, 2),
    T(x1 + 36, MID + 5, 16, '5.0 nm'),
    T((x0 + x1) / 2, MID + 6, 16, '200 pF, 75 mV', 'middle'),
  ].join('')
  return { inner, w: 470 }
}

function myelinStack(ox: number): Panel {
  const x0 = ox + 70, x1 = ox + 290
  const lines = [0, 1, 2, 3, 4, 5].map((k) => LINE(x0, 90 + k * 26, x1, 90 + k * 26, 3)).join('')
  const inner = red(lines + T((x0 + x1) / 2, 254, 16, '25 layers in series', 'middle', '700')) + muted(T(x1 + 14, MID + 5, 14, 'same 75 mV'))
  return { inner, w: 420 }
}

/* ── video 8: defibrillators ─────────────────────────────────────────────── */

function defibCharge(ox: number): Panel {
  const xl = ox + 90, xr = ox + 300
  const inner = [
    muted(BOX(xl - 50, MID - 34, 100, 68, 10, 2, 0, true)), T(xl, MID + 6, 16, 'charger', 'middle'),
    LINE(xl, TOP, xl, MID - 34), LINE(xl, MID + 34, xl, BOT), LINE(xl, TOP, xr, TOP), LINE(xl, BOT, xr, BOT),
    capBranch(xr, '100 μF'), muted(T(xr + 24, MID + 26, 14, '→ 2000 V')),
  ].join('')
  return { inner, w: 430 }
}

function defibDischarge(ox: number): Panel {
  const xl = ox + 110, xr = ox + 300
  const inner = [
    LINE(xl, TOP, xl, MID - 5), LINE(xl, MID + 5, xl, BOT), CAPV(xl, MID), T(xl - 24, MID - 2, 16, '100 μF', 'end'), muted(T(xl - 24, MID + 18, 14, 'at 2000 V', 'end')),
    LINE(xl, TOP, xr, TOP), LINE(xl, BOT, xr, BOT),
    red(RES(xr, TOP, xr, BOT) + T(xr + 18, MID - 2, 16, '50 Ω') + T(xr + 18, MID + 18, 14, 'chest')),
  ].join('')
  return { inner, w: 400 }
}

function storedCap(ox: number, C: string, U: string, V: string, half: number, changed: boolean): Panel {
  const cx = ox + 170
  const plates = `<path d="M${cx - half} ${MID - 8} L${cx + half} ${MID - 8} M${cx - half} ${MID + 8} L${cx + half} ${MID + 8}" stroke="currentColor" stroke-width="4"/>`
  const body = [LINE(cx, 90, cx, MID - 8), LINE(cx, MID + 8, cx, 220), plates, T(cx, 76, 17, C, 'middle', '700'), T(cx, 244, 16, `stores ${U}`, 'middle')].join('')
  return { inner: (changed ? red(body) : body) + muted(T(cx, 266, 14, V, 'middle')), w: 340 }
}

export const FIG = {
  v2_ex1: fig([seriesPair(0)], [''], 'A 12 V battery with a 3.0 μF capacitor and a 6.0 μF capacitor in series along the top wire, one after the other in a single loop.'),
  v2_ex2: fig(
    [seriesParallel(0)],
    [''],
    'An 18 V battery with a 3.0 μF capacitor in the top wire, followed by two capacitors side by side in parallel branches, 2.0 μF and 4.0 μF, between the top and bottom wires.',
  ),
  v4_ex1: fig(
    [rcNetwork(0)],
    [''],
    'A 12 V battery, an open switch S and R₁ = 2.0 Ω in the top wire, then R₂ = 4.0 Ω from the top wire to the bottom wire. A second branch across R₂ holds R₃ = 4.0 Ω in series with a 5.0 μF capacitor.',
  ),
  v4_ex2: fig(
    [rcCharge(0), rcDischarge(480)],
    ['(a) to (d): charging', '(e): the full capacitor across the resistor'],
    'Left: a 9.0 V battery, an open switch S, a 50 kΩ resistor and a 40 μF capacitor in one loop. Right: the full 40 μF capacitor, with the battery removed, joined across the same 50 kΩ resistor, drawn in red.',
  ),
  v6_ex1: fig(
    [membraneRC(0, '2.0 × 10⁸ Ω', false), membraneRC(470, '5.0 × 10⁷ Ω', true)],
    ['(a) and (c): before the drug', '(b): the drug opens channels'],
    'Two drawings of a membrane as a resistor R beside a capacitor of 1.5 × 10⁻¹⁰ F, both joining the outside of the cell to the inside. Left: R is 2.0 × 10⁸ Ω. Right: after the drug, R, drawn in red, is 5.0 × 10⁷ Ω; the capacitor is unchanged.',
  ),
  v6_ex2: fig(
    [membraneSheet(0), myelinStack(470)],
    ['(a) to (c): one membrane', '(d): wrapped in myelin'],
    'Left: a membrane drawn as two parallel sheets 5.0 nm apart, with plus charges on the outer face and minus charges on the inner face, labelled 200 pF and 75 mV. Right: a stack of membrane layers, drawn in red and labelled "25 layers in series", holding the same 75 mV.',
  ),
  v8_ex1: fig(
    [defibCharge(0), defibDischarge(430)],
    ['charging: 5.0 s', 'discharging through the chest'],
    'Left: a charger wired to a 100 μF capacitor, which it charges to 2000 V over 5.0 s. Right: the charged capacitor connected across the patient’s chest, drawn in red as a 50 Ω resistor.',
  ),
  v8_ex2: fig(
    [storedCap(0, '300 μF', '150 J', 'part (b): 600 J on this capacitor', 34, false), storedCap(340, '1200 μF', '150 J', 'design B', 68, true)],
    ['(a) and (b): the fixed capacitor', '(c): a different capacitor'],
    'Left: a 300 μF capacitor storing 150 J; part (b) asks about 600 J on this same capacitor. Right: design B, drawn in red, a 1200 μF capacitor storing the same 150 J.',
  ),
} satisfies Record<string, QuestionFigure>
