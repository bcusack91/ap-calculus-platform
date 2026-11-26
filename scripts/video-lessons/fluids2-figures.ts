/**
 * The drawings for the Fluids Part 2 worked examples whose setup is easier to
 * see than to read (keyed by video/example): the cube and its two depths, the
 * raft, the implant on its scale in air and in water, the buoy tied to the
 * lake bed, and the tubes standing in water and in mercury.
 *
 * Same conventions as circuits4-figures.ts: outlines and labels take the text
 * colour (currentColor); the liquid is BLUE (fig-accent); notes grey
 * (fig-muted). Nothing a part asks for is drawn: no liquid level inside a
 * tube, no force arrow, no waterline depth. Output is the lesson-figure shape
 * {svg, alt, size} and must pass isSafeSvg.
 */
import { BOX, LINE, SVG_OPEN, T } from '../../src/data/deck-figures/mcat-cp-circuits'
import type { QuestionFigure } from '../../src/lib/video-lesson-core'

const muted = (s: string) => `<g class="fig-muted">${s}</g>`
const blue = (s: string) => `<g class="fig-accent">${s}</g>`

/** A body of liquid: a tinted block with its surface line on top. */
const liquid = (x: number, y: number, w: number, h: number) =>
  blue(`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="currentColor" fill-opacity="0.14"/>` + LINE(x, y, x + w, y, 2.5))

/** A solid object: an outlined box, lightly filled. */
const solid = (x: number, y: number, w: number, h: number, rx = 4) => BOX(x, y, w, h, rx, 2.5, 0.12)

/** A vertical dimension line with end ticks. */
const VDIM = (x: number, y1: number, y2: number) =>
  `<path d="M${x - 6} ${y1} L${x + 6} ${y1} M${x} ${y1} L${x} ${y2} M${x - 6} ${y2} L${x + 6} ${y2}" fill="none" stroke="currentColor" stroke-width="2"/>`

/** A horizontal dimension line with end ticks. */
const HDIM = (x1: number, x2: number, y: number) =>
  `<path d="M${x1} ${y - 6} L${x1} ${y + 6} M${x1} ${y} L${x2} ${y} M${x2} ${y - 6} L${x2} ${y + 6}" fill="none" stroke="currentColor" stroke-width="2"/>`

/** A spring scale: a box showing its reading, hung from a bar, with a string down to `stringTo`. */
const scale = (cx: number, reading: string, stringTo: number) =>
  [LINE(cx - 46, 34, cx + 46, 34, 4), LINE(cx, 34, cx, 52), BOX(cx - 44, 52, 88, 44, 8), T(cx, 81, 18, reading, 'middle', '700'), LINE(cx, 96, cx, stringTo, 2)].join('')

const svg = (w: number, h: number, parts: string[]) => `${SVG_OPEN} viewBox="0 0 ${w} ${h}">${parts.join('')}</svg>`

export const FIG = {
  v2_ex1: {
    svg: svg(520, 330, [
      liquid(40, 60, 440, 250),
      muted(T(468, 52, 14, 'surface', 'end')),
      blue(T(64, 296, 15, 'water')),
      solid(220, 180, 80, 80),
      VDIM(180, 60, 180),
      T(168, 126, 16, '0.30 m', 'end'),
      VDIM(334, 180, 260),
      T(346, 226, 16, '0.20 m'),
      HDIM(220, 300, 284),
      T(260, 304, 16, '0.20 m', 'middle'),
      muted(T(260, 172, 14, 'top face', 'middle')),
    ]),
    alt: 'A cube under water, drawn from the side. Its top face is level and 0.30 m below the surface. The cube is 0.20 m tall and 0.20 m wide, so its bottom face is 0.50 m below the surface.',
    size: 'md',
  },
  v4_ex2: {
    svg: svg(560, 290, [
      liquid(40, 150, 480, 120),
      muted(T(508, 142, 14, 'waterline', 'end')),
      blue(T(64, 256, 15, 'fresh water')),
      solid(120, 108, 320, 60),
      T(280, 132, 17, '540 kg', 'middle', '700'),
      HDIM(120, 440, 84),
      T(280, 72, 16, 'base area 6.0 m²', 'middle'),
      VDIM(470, 108, 168),
      T(482, 136, 16, '0.30 m'),
      VDIM(96, 150, 168),
      T(84, 186, 16, 'd = ?', 'end'),
    ]),
    alt: 'A flat rectangular raft floating level in fresh water, drawn from the side. Its base area is 6.0 square meters, it is 0.30 m thick and its mass is 540 kg. The depth d of the part below the waterline is marked as unknown.',
    size: 'md',
  },
  v6_ex1: {
    svg: svg(560, 320, [
      // in air
      scale(140, '9.0 N', 190),
      solid(118, 190, 44, 44, 10),
      muted(T(140, 304, 15, 'in air', 'middle')),
      // in water
      scale(410, '7.0 N', 200),
      LINE(330, 130, 330, 280), LINE(490, 130, 490, 280), LINE(330, 280, 490, 280),
      liquid(331, 152, 158, 127),
      solid(388, 200, 44, 44, 10),
      muted(T(410, 304, 15, 'fully under water', 'middle')),
    ]),
    alt: 'Two drawings of the same implant hanging by a string from a spring scale. Left: in air, the scale reads 9.0 N. Right: with the implant hanging fully under the water in a beaker and touching nothing, the scale reads 7.0 N.',
    size: 'md',
  },
  v6_ex2: {
    svg: svg(440, 320, [
      liquid(40, 50, 360, 232),
      muted(T(388, 42, 14, 'surface', 'end')),
      blue(T(60, 268, 15, 'water')),
      LINE(40, 283, 400, 283, 4),
      muted(T(220, 306, 15, 'lake bed', 'middle')),
      `<circle cx="220" cy="140" r="40" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>`,
      T(220, 146, 16, 'buoy', 'middle', '700'),
      T(274, 132, 16, '4.0 kg'),
      T(274, 154, 16, '0.010 m³'),
      LINE(220, 180, 220, 283, 2),
      T(232, 238, 15, 'rope'),
    ]),
    alt: 'A round foam buoy of mass 4.0 kg and volume 0.010 cubic meters, at rest fully under the water of a lake. A rope runs straight down from the buoy to the lake bed and holds it under.',
    size: 'sm',
  },
  v8_ex1: {
    svg: svg(640, 300, [
      ...[0, 320].flatMap((ox, k) => [
        // the dish
        LINE(ox + 40, 196, ox + 40, 250), LINE(ox + 280, 196, ox + 280, 250), LINE(ox + 40, 250, ox + 280, 250),
        k === 0 ? liquid(ox + 41, 212, 238, 37) : muted(`<rect x="${ox + 41}" y="212" width="238" height="37" fill="currentColor" fill-opacity="0.35"/>` + LINE(ox + 41, 212, ox + 279, 212, 2.5)),
        // three open tubes: 4 mm, 2 mm, 1 mm
        ...[
          { x: ox + 90, w: 28, label: '4 mm' },
          { x: ox + 160, w: 14, label: '2 mm' },
          { x: ox + 230, w: 7, label: '1 mm' },
        ].flatMap((t) => [
          // the inside of each tube is left blank (figure background), so no level is shown
          `<rect class="fig-bg" x="${t.x - t.w / 2}" y="60" width="${t.w}" height="180"/>`,
          LINE(t.x - t.w / 2, 60, t.x - t.w / 2, 240, 2), LINE(t.x + t.w / 2, 60, t.x + t.w / 2, 240, 2), T(t.x, 48, 15, t.label, 'middle'),
        ]),
        T(ox + 160, 282, 16, k === 0 ? 'dish of water' : 'dish of mercury', 'middle', '700'),
      ]),
      muted(T(320, 20, 14, 'the level and meniscus inside each tube are for you to predict', 'middle')),
    ]),
    alt: 'Two shallow dishes side by side, one of water and one of mercury. In each dish stand three open glass tubes with inner diameters of 4 mm, 2 mm and 1 mm. The liquid levels inside the tubes are not drawn.',
    size: 'lg',
  },
} satisfies Record<string, QuestionFigure>
