/**
 * The drawings for the Fluids Part 4 checkpoint problems that are easier to
 * read as a circuit of vessels (keyed by video/example): four vessel levels in
 * series, three organ beds in parallel, and an artery in series with the bed
 * it feeds. Vessels are drawn as resistors, as the videos draw them.
 *
 * Same conventions as circuits4-figures.ts: lines and labels take the text
 * colour (currentColor); what changes in a later part RED (fig-accent-2);
 * notes grey (fig-muted). Output is the lesson-figure shape {svg, alt, size}
 * and must pass isSafeSvg.
 */
import { LINE, RES, SVG_OPEN, T } from '../../src/data/deck-figures/mcat-cp-circuits'
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

/** A chain of resistors along y = MID starting at x0, each `step` wide, with a name above and a value below. */
function chain(x0: number, items: { name: string; value: string; changed?: boolean }[], left: string, right: string, step = 120): Panel & { end: number } {
  const parts: string[] = [dot(x0, MID), muted(T(x0, MID - 52, 14, left, 'middle'))]
  let x = x0
  for (const it of items) {
    const r = RES(x, MID, x + step, MID) + T(x + step / 2, MID - 24, 15, it.name, 'middle') + T(x + step / 2, MID + 36, 16, it.value, 'middle', '700')
    parts.push(it.changed ? red(r) : r)
    x += step
  }
  parts.push(dot(x, MID), muted(T(x, MID - 52, 14, right, 'middle')))
  return { inner: parts.join(''), w: x + 70, end: x }
}

/* ── video 6: the circulation as a circuit ───────────────────────────────── */

function seriesLevels(): Panel {
  return chain(70, [
    { name: 'arteries', value: '1.0' },
    { name: 'arterioles', value: '11' },
    { name: 'capillaries', value: '4.0' },
    { name: 'veins', value: '2.0' },
  ], '90 mmHg', '≈ 0')
}

function parallelBeds(): Panel {
  const x0 = 60, x1 = 500
  const bed = (x: number, label: string, changed: boolean) => {
    const r = RES(x, TOP, x, BOT) + T(x + 18, MID + 6, 16, label)
    return (changed ? red(r) : r) + dot(x, TOP) + dot(x, BOT)
  }
  const inner = [
    LINE(x0, TOP, x1, TOP), LINE(x0, BOT, x1, BOT),
    muted(T(x0, TOP - 14, 14, 'aorta: 90 mmHg') + T(x0, BOT + 24, 14, 'veins: ≈ 0')),
    bed(170, '60', false), bed(300, '60', false), bed(430, '30', true),
  ].join('')
  return { inner, w: 560 }
}

/* ── video 8: a long narrowing in series ─────────────────────────────────── */

function arteryBed(): Panel {
  return chain(80, [
    { name: 'leg artery', value: '4.0' },
    { name: 'muscle bed', value: '21' },
  ], '100 mmHg', '0')
}

function arteryNarrowed(ox: number): Panel {
  const c = chain(ox + 80, [
    { name: '3/4 of the artery', value: 'normal' },
    { name: 'narrowed 1/4', value: 'half the radius', changed: true },
    { name: 'muscle bed', value: '21' },
  ], '100 mmHg', '0', 160)
  return { inner: c.inner, w: c.end + 70 - ox }
}

export const FIG = {
  v6_ex1: fig(
    [seriesLevels()],
    ['resistances in mmHg·min/L; the same 5.0 L/min passes through every level'],
    'Four resistors in a row between a point at 90 mmHg and a point at about 0: arteries 1.0, arterioles 11, capillaries 4.0 and veins 2.0, all in series.',
  ),
  v6_ex2: fig(
    [parallelBeds()],
    ['resistances in mmHg·min/L; the 30-unit bed (red) constricts in part (c)'],
    'Three resistors side by side, each joining a top rail labelled aorta, 90 mmHg, to a bottom rail labelled veins, about 0. Their resistances are 60, 60 and 30; the 30-unit bed is drawn in red.',
  ),
  v8_ex2: fig(
    [arteryBed(), arteryNarrowed(390)],
    ['(a): before, in mmHg·s/mL', '(b) to (d): one quarter of the artery narrows'],
    'Left: a leg artery of resistance 4.0 in series with a muscle bed of resistance 21, with 100 mmHg across the pair. Right: the same chain with the artery split into three quarters that stay normal and one narrowed quarter, drawn in red, at half the radius, followed by the muscle bed of 21.',
  ),
} satisfies Record<string, QuestionFigure>
