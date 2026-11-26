/**
 * The drawings for the Fluids Part 3 checkpoint problems whose geometry is
 * easier to see than to read (keyed by video/example): a level pipe that
 * narrows, a pipe that climbs as it narrows, a tank with a hole, a tank on a
 * platform with its jet, and a Venturi meter.
 *
 * Same conventions as circuits4-figures.ts: outlines and labels take the text
 * colour (currentColor); water and flow arrows BLUE (fig-accent); what the
 * problem asks for RED (fig-accent-2); dimension lines and notes grey
 * (fig-muted). Output is the lesson-figure shape {svg, alt, size} and must
 * pass isSafeSvg.
 */
import { ARROW, LINE, SVG_OPEN, T } from '../../src/data/deck-figures/mcat-cp-circuits'
import type { QuestionFigure } from '../../src/lib/video-lesson-core'

const muted = (s: string) => `<g class="fig-muted">${s}</g>`
const blue = (s: string) => `<g class="fig-accent">${s}</g>`
const red = (s: string) => `<g class="fig-accent-2">${s}</g>`

/** An outline in the current colour. */
const stroke = (d: string, sw = 2.5) => `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linejoin="round"/>`
/** A blue tint for the water inside a closed outline. */
const water = (d: string) => blue(`<path d="${d}" fill="currentColor" fill-opacity="0.14" stroke="none"/>`)
/** A blue flow arrow; `id` must be unique in the figure. */
const flow = (id: string, x1: number, y1: number, x2: number, y2: number) =>
  blue(`<defs>${ARROW(id)}</defs><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="3" marker-end="url(#${id})"/>`)
/** A vertical dimension line with end ticks. */
const vdim = (x: number, y1: number, y2: number) =>
  `<path d="M${x - 6} ${y1} L${x + 6} ${y1} M${x} ${y1} L${x} ${y2} M${x - 6} ${y2} L${x + 6} ${y2}" fill="none" stroke="currentColor" stroke-width="2"/>`
/** A horizontal dimension line with end ticks. */
const hdim = (x1: number, x2: number, y: number) =>
  `<path d="M${x1} ${y - 6} L${x1} ${y + 6} M${x1} ${y} L${x2} ${y} M${x2} ${y - 6} L${x2} ${y + 6}" fill="none" stroke="currentColor" stroke-width="2"/>`
const point = (x: number, y: number, n: string) => `<circle cx="${x}" cy="${y}" r="4" fill="currentColor"/>` + T(x, y + 26, 16, n, 'middle', '700')

const svg = (w: number, h: number, parts: string[]) => `${SVG_OPEN} viewBox="0 0 ${w} ${h}">${parts.join('')}</svg>`

/* ── video 4, example 1: a level pipe that narrows ───────────────────────── */

const levelPipe = svg(700, 300, [
  water('M40 100 L280 100 L360 121 L660 121 L660 179 L360 179 L280 200 L40 200 Z'),
  stroke('M40 100 L280 100 L360 121 L660 121'),
  stroke('M40 200 L280 200 L360 179 L660 179'),
  flow('arr-fl3-41-a', 110, 150, 160, 150),
  flow('arr-fl3-41-b', 440, 150, 570, 150),
  point(80, 150, '1'),
  point(410, 150, '2'),
  T(160, 62, 17, '12 cm²', 'middle'),
  T(160, 86, 17, '2 m/s · 150 kPa', 'middle'),
  T(510, 86, 17, '4 cm²', 'middle'),
  red(T(510, 108, 17, 'v = ?   P = ?', 'middle', '700')),
  muted(T(350, 250, 15, 'horizontal pipe · water, ρ = 1000 kg/m³', 'middle')),
])

/* ── video 4, example 2: a pipe that climbs as it narrows ────────────────── */

const risingPipe = svg(740, 410, [
  water('M40 276 L250 276 L430 66 L660 66 L660 114 L470 114 L290 344 L40 344 Z'),
  stroke('M40 276 L250 276 L430 66 L660 66'),
  stroke('M40 344 L290 344 L470 114 L660 114'),
  flow('arr-fl3-42-a', 90, 310, 150, 310),
  flow('arr-fl3-42-b', 500, 90, 600, 90),
  point(60, 310, '1'),
  '<circle cx="470" cy="96" r="4" fill="currentColor"/>' + T(470, 86, 16, '2', 'middle', '700'),
  T(150, 262, 17, '3 m/s · 250 kPa', 'middle'),
  muted(T(150, 378, 15, 'ground level', 'middle')),
  T(550, 34, 17, 'half the area', 'middle'),
  red(T(550, 56, 17, 'v = ?   P = ?', 'middle', '700')),
  muted(LINE(300, 310, 712, 310, 1.5, true) + LINE(664, 90, 712, 90, 1.5, true) + vdim(700, 90, 310) + T(690, 206, 16, '5 m', 'end')),
])

/* ── video 6, example 1: a hole in a tank ────────────────────────────────── */

const tankHole = svg(560, 380, [
  water('M80 80 L330 80 L330 320 L80 320 Z'),
  stroke('M80 50 L80 320 L330 320 L330 278 M330 262 L330 50'),
  blue(LINE(80, 80, 330, 80, 2)),
  blue('<path d="M330 270 Q400 270 440 345" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>'),
  muted(vdim(290, 80, 270) + T(280, 180, 16, '3.2 m', 'end')),
  muted(T(205, 40, 15, 'open to the air', 'middle')),
  T(346, 244, 16, 'hole: 2.0 cm²'),
  red(T(450, 300, 17, 'v = ?', 'start', '700')),
])

/* ── video 6, example 2: a tank on a platform, and where the jet lands ───── */

const tankRange = svg(640, 440, [
  LINE(40, 390, 620, 390, 2.5),
  muted('<rect x="70" y="300" width="220" height="90" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>'),
  water('M80 120 L280 120 L280 300 L80 300 Z'),
  stroke('M80 90 L80 300 L280 300 L280 238 M280 222 L280 90'),
  blue(LINE(80, 120, 280, 120, 2)),
  blue('<path d="M280 230 Q400 230 520 390" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>'),
  muted(vdim(250, 120, 230) + T(240, 180, 16, '0.45 m', 'end')),
  muted(vdim(304, 240, 390) + T(316, 330, 16, '0.80 m')),
  red(hdim(280, 520, 410) + T(400, 432, 17, 'range = ?', 'middle', '700')),
  muted(T(180, 350, 15, 'platform', 'middle')),
])

/* ── video 8, example 1: a Venturi meter ─────────────────────────────────── */

const venturi = svg(720, 380, [
  water('M40 250 L220 250 L300 267 L420 267 L500 250 L680 250 L680 330 L500 330 L420 313 L300 313 L220 330 L40 330 Z'),
  water('M120 90 L140 90 L140 250 L120 250 Z'),
  water('M350 170 L370 170 L370 267 L350 267 Z'),
  stroke('M40 250 L120 250 M140 250 L220 250 L300 267 L350 267 M370 267 L420 267 L500 250 L680 250'),
  stroke('M40 330 L220 330 L300 313 L420 313 L500 330 L680 330'),
  stroke('M120 250 L120 40 M140 250 L140 40 M350 267 L350 40 M370 267 L370 40'),
  blue(LINE(120, 90, 140, 90, 2.5) + LINE(350, 170, 370, 170, 2.5)),
  flow('arr-fl3-81-a', 60, 290, 110, 290),
  flow('arr-fl3-81-b', 320, 290, 400, 290),
  muted(LINE(140, 90, 446, 90, 1.5, true) + LINE(370, 170, 446, 170, 1.5, true) + vdim(436, 90, 170) + T(450, 136, 16, '0.40 m')),
  T(130, 360, 17, '6.0 cm²', 'middle'),
  T(360, 360, 17, '2.0 cm²', 'middle'),
  muted(T(590, 296, 15, 'water', 'middle')),
])

export const FIG: Record<string, QuestionFigure> = {
  v4_ex1: {
    svg: levelPipe,
    alt: 'A horizontal pipe carrying water from left to right. The wide section on the left has an area of 12 square centimeters, where the water moves at 2 meters per second at 150 kilopascals (point 1). It narrows to a section of 4 square centimeters on the right (point 2), where the speed and pressure are unknown.',
    size: 'md',
  },
  v4_ex2: {
    svg: risingPipe,
    alt: 'A pipe carrying water from ground level, where it moves at 3 meters per second at 250 kilopascals (point 1), up a slope to a higher section with half the cross-sectional area (point 2). The upper section is 5 meters above the lower one, and its speed and pressure are unknown.',
    size: 'md',
  },
  v6_ex1: {
    svg: tankHole,
    alt: 'A wide tank of water, open to the air at the top, with a small hole of area 2.0 square centimeters in its side wall. The hole is 3.2 meters below the water surface, and a jet of water leaves it sideways.',
    size: 'md',
  },
  v6_ex2: {
    svg: tankRange,
    alt: 'An open tank of water standing on a platform. A small hole in its side wall is 0.45 meters below the water surface and 0.80 meters above the floor. The jet leaves the hole horizontally and curves down to the floor; the distance from the tank to where it lands is unknown.',
    size: 'md',
  },
  v8_ex1: {
    svg: venturi,
    alt: 'A horizontal Venturi meter carrying water: a wide section of area 6.0 square centimeters narrows to a throat of area 2.0 square centimeters and widens again. An open vertical tube stands above the wide section and another above the throat. The water stands 0.40 meters lower in the tube over the throat.',
    size: 'md',
  },
}
