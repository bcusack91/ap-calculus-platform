/**
 * The drawings for the Fluids Part 1 checkpoint problems that need one (keyed
 * by video/example): an open-tube manometer, a hanging IV bag, a hydraulic
 * lift in cross-section and a jack's two pistons seen from above. A drawing is
 * given only where the layout decides the answer (which arm stands higher,
 * which height counts, which piston is which).
 *
 * Same conventions as the fluids deck figures: outlines and labels take the
 * text colour (currentColor); the liquid BLUE (fig-accent); forces and what
 * the question asks about RED (fig-accent-2); notes and dimension lines grey
 * (fig-muted). Output is the lesson-figure shape {svg, alt, size} and must
 * pass isSafeSvg.
 */
import { ARR, ARROW, DIM, RECT, SVG_OPEN, T } from '../../src/data/deck-figures/mcat-cp-fluids-waves'
import type { QuestionFigure } from '../../src/lib/video-lesson-core'

const muted = (s: string) => `<g class="fig-muted">${s}</g>`
const red = (s: string) => `<g class="fig-accent-2">${s}</g>`
const blue = (s: string) => `<g class="fig-accent">${s}</g>`
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2.5, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="6 5"' : ''}/>`
const PATH = (d: string, sw = 2.5) => `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${sw}"/>`
const FILL = (d: string, opacity = 0.22) => `<path d="${d}" fill="currentColor" fill-opacity="${opacity}" stroke="none"/>`

const svg = (w: number, h: number, id: string, inner: string[]) =>
  `${SVG_OPEN} viewBox="0 0 ${w} ${h}">${muted(`<defs>${ARROW(`${id}-m`)}</defs>`)}${red(`<defs>${ARROW(`${id}-r`)}</defs>`)}${inner.join('')}</svg>`

/* ── open-tube manometer ─────────────────────────────────────────────────── */

/**
 * A gas tank on the left joined to the left arm of a U-tube; the right arm is
 * open. `gasLevel` and `openLevel` are the y of the liquid surface in each arm
 * (smaller y = higher). `dh` labels the height difference; `liquid` names the
 * liquid under the tube.
 */
function manometer(id: string, gasLevel: number, openLevel: number, dh: string, liquid: string): string {
  const BOTTOM = 250
  const hi = Math.min(gasLevel, openLevel), lo = Math.max(gasLevel, openLevel)
  return svg(500, 340, id, [
    // the tank and its pipe, turning down into the left arm (x 230–260)
    RECT(40, 40, 130, 100, 2.5, 0, 10),
    T(105, 96, 18, 'gas', 'middle', '700'),
    PATH(`M170 70 L260 70 L260 ${BOTTOM}`),
    PATH(`M170 100 L230 100 L230 ${BOTTOM}`),
    // the open right arm (x 330–360) and the bend
    LINE(330, 50, 330, BOTTOM), LINE(360, 50, 360, BOTTOM),
    PATH(`M230 ${BOTTOM} A65 65 0 0 0 360 ${BOTTOM}`),
    PATH(`M260 ${BOTTOM} A35 35 0 0 0 330 ${BOTTOM}`),
    // the liquid
    blue(
      [
        FILL(`M230 ${gasLevel} L260 ${gasLevel} L260 ${BOTTOM} L230 ${BOTTOM} Z`),
        FILL(`M330 ${openLevel} L360 ${openLevel} L360 ${BOTTOM} L330 ${BOTTOM} Z`),
        FILL(`M230 ${BOTTOM} A65 65 0 0 0 360 ${BOTTOM} L330 ${BOTTOM} A35 35 0 0 1 260 ${BOTTOM} Z`),
        LINE(230, gasLevel, 260, gasLevel, 3), LINE(330, openLevel, 360, openLevel, 3),
      ].join(''),
    ),
    // the height difference
    muted([LINE(262, gasLevel, 420, gasLevel, 1.5, true), LINE(362, openLevel, 420, openLevel, 1.5, true), DIM(410, hi + 4, 410, lo - 4, `${id}-m`)].join('')),
    red(T(424, (hi + lo) / 2 + 6, 17, dh, 'start', '700')),
    muted(T(345, 36, 15, 'open to the air', 'middle')),
    muted(T(295, 332, 15, liquid, 'middle')),
  ])
}

/* ── IV bag ──────────────────────────────────────────────────────────────── */

function ivBag(id: string): string {
  const SURFACE = 62, NEEDLE = 286
  return svg(460, 340, id, [
    // the bag and the fluid in it
    RECT(170, 30, 90, 100, 2.5, 0, 14),
    blue([FILL(`M172 ${SURFACE} L258 ${SURFACE} L258 118 Q258 128 248 128 L182 128 Q172 128 172 118 Z`), LINE(172, SURFACE, 258, SURFACE, 3)].join('')),
    T(276, 84, 16, 'saline'),
    // the line down to the needle in the arm
    blue(PATH(`M215 130 L215 250 Q215 ${NEEDLE} 250 ${NEEDLE} L318 ${NEEDLE}`, 4)),
    RECT(300, 270, 140, 34, 2.5, 0.08, 17),
    T(370, 326, 15, 'arm', 'middle'),
    red(`<circle cx="318" cy="${NEEDLE}" r="5" fill="currentColor"/>` + T(318, 258, 16, 'needle', 'middle', '700')),
    // the height that counts
    muted([LINE(100, SURFACE, 170, SURFACE, 1.5, true), LINE(100, NEEDLE, 300, NEEDLE, 1.5, true), DIM(120, SURFACE + 4, 120, NEEDLE - 4, `${id}-m`)].join('')),
    red(T(108, (SURFACE + NEEDLE) / 2 + 6, 17, '1.0 m', 'end', '700')),
    muted(T(96, SURFACE - 8, 14, 'fluid surface', 'middle')),
  ])
}

/* ── hydraulic lift ──────────────────────────────────────────────────────── */

function lift(id: string, a1: string, a2: string, push: string, load: string): string {
  const PISTON = 150
  return svg(540, 340, id, [
    // the two cylinders joined along the bottom
    PATH('M60 100 L60 280 L480 280 L480 100'),
    PATH('M120 100 L120 230 L300 230 L300 100'),
    blue(FILL(`M60 ${PISTON} L120 ${PISTON} L120 230 L300 230 L300 ${PISTON} L480 ${PISTON} L480 280 L60 280 Z`)),
    // the pistons
    RECT(62, PISTON - 14, 56, 14, 2, 0.45), RECT(302, PISTON - 14, 176, 14, 2, 0.45),
    // the push in and the load out
    red(ARR(90, 60, 90, PISTON - 20, `${id}-r`) + T(90, 48, 17, push, 'middle', '700')),
    RECT(345, PISTON - 64, 90, 50, 2.5, 0.1, 6),
    T(390, PISTON - 33, 16, load, 'middle', '700'),
    T(90, 312, 16, a1, 'middle'), T(390, 312, 16, a2, 'middle'),
    muted(T(90, 332, 14, 'input piston', 'middle') + T(390, 332, 14, 'output piston', 'middle')),
  ])
}

/* ── two pistons seen from above ─────────────────────────────────────────── */

function pistonsFromAbove(id: string): string {
  return svg(520, 300, id, [
    `<circle cx="110" cy="150" r="20" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>`,
    `<circle cx="340" cy="150" r="80" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>`,
    muted(DIM(92, 150, 128, 150, `${id}-m`) + DIM(264, 150, 416, 150, `${id}-m`)),
    red(T(110, 118, 17, 'd', 'middle', '700') + T(340, 138, 17, '4d', 'middle', '700')),
    T(110, 260, 16, 'input piston', 'middle'), T(340, 260, 16, 'output piston', 'middle'),
    muted(T(340, 282, 14, 'holds up the 800 kg engine', 'middle')),
  ])
}

export const FIG = {
  v5_manometer: {
    svg: manometer('fl1-v5', 150, 210, 'Δh', 'liquid'),
    alt: 'A flask of gas joined to the left arm of a U-shaped tube of liquid; the right arm is open to the air. The liquid surface in the left arm, on the gas side, is higher than the liquid surface in the open arm. The height difference is labeled Δh.',
    size: 'md',
  },
  v6_ex1: {
    svg: manometer('fl1-v6a', 210, 130, '0.20 m', 'mercury'),
    alt: 'A gas tank joined to the left arm of a U-shaped tube of mercury; the right arm is open to the air. The mercury surface in the open arm is 0.20 m higher than the mercury surface in the arm joined to the tank.',
    size: 'md',
  },
  v6_ex2: {
    svg: ivBag('fl1-v6b'),
    alt: 'A bag of saline hanging above a patient’s arm, with a line running down from the bag to a needle in the arm. The fluid surface inside the bag is 1.0 m above the needle.',
    size: 'md',
  },
  v8_ex1: {
    svg: lift('fl1-v8a', '0.020 m²', '0.50 m²', '400 N', 'load'),
    alt: 'A hydraulic lift in cross-section: a narrow cylinder and a wide cylinder joined along the bottom and filled with one liquid, each closed by a piston at the same height. A 400 N force pushes down on the narrow input piston, of area 0.020 m². A load rests on the wide output piston, of area 0.50 m².',
    size: 'md',
  },
  v8_ex2: {
    svg: pistonsFromAbove('fl1-v8b'),
    alt: 'Two circular pistons seen from above. The input piston has diameter d. The output piston, which holds up the 800 kg engine, has diameter 4d.',
    size: 'md',
  },
} satisfies Record<string, QuestionFigure>
