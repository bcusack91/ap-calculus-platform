import type { DeckFigurePlacement } from './index'

/**
 * Light & Optics (MCAT C/P) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (a transverse wave over
 * the spectrum as an ordered ruler, Snell's law through a glass block with the
 * lesson's 30° → 19° numbers, three rays at a glass–air boundary plus a fiber,
 * the law of reflection and a plane-mirror image, concave-mirror ray diagrams
 * for the three regimes, the convex mirror with the worked example's numbers,
 * parallel rays through a converging and a diverging lens, thin-lens ray
 * diagrams for camera / projector / magnifier, and Young's double slit) — no
 * textbook, prep-company or AAMC figure was copied.
 *
 * GEOMETRY IS COMPUTED, NOT EYEBALLED: `imageDist` applies 1/f = 1/d_o + 1/d_i,
 * `lensRays` / `mirrorRays` build the principal rays from the focal length and
 * every refracted or reflected ray (or its dashed back-extension) is drawn
 * through the computed image tip; `assertConverge` throws at module load if a
 * ray misses it. Snell / critical angles come from Math.asin.
 *
 * Colours: rays BLUE (fig-accent), images and the "answer" quantity RED
 * (fig-accent-2), objects and formulas in the text colour, axes / normals /
 * glass / F and C marks grey (fig-muted). Virtual rays and images are dashed.
 * Marker ids are unique per figure (arr-op-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') =>
  `<text x="${r1(x)}" y="${r1(y)}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** A straight arrow in the current colour ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3, dashed = false) =>
  `<line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2)}" y2="${r1(y2)}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''} marker-end="url(#${marker})"/>`

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2)}" y2="${r1(y2)}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A horizontal dimension line with end ticks. */
const DIM = (x1: number, x2: number, y: number) =>
  `<path d="M${r1(x1)} ${y - 6} L${r1(x1)} ${y + 6} M${r1(x1)} ${y} L${r1(x2)} ${y} M${r1(x2)} ${y - 6} L${r1(x2)} ${y + 6}" fill="none" stroke="currentColor" stroke-width="2"/>`

/** Subscript helper: base + small subscript, back to baseline. */
const SUB = (base: string, sub: string, size: number) =>
  `${base}<tspan dy="${Math.round(size * 0.25)}" font-size="${Math.round(size * 0.7)}">${sub}</tspan><tspan dy="${-Math.round(size * 0.25)}" font-size="${size}"> </tspan>`

/* ───────── geometry helpers ───────── */

type Pt = readonly [number, number]
const DEG = Math.PI / 180
const r1 = (n: number) => Math.round(n * 10) / 10

/** Image distance from 1/f = 1/d_o + 1/d_i (signed: f < 0 diverging, d_i < 0 virtual). */
const imageDist = (f: number, dO: number) => (f * dO) / (dO - f)

/** The point on the line through a and b at x = xt. */
const atX = (a: Pt, b: Pt, xt: number): Pt => [xt, a[1] + ((b[1] - a[1]) * (xt - a[0])) / (b[0] - a[0])]

/** Like atX, but stops where the line leaves the band yMin..yMax. */
const atXClamped = (a: Pt, b: Pt, xt: number, yMin: number, yMax: number): Pt => {
  const p = atX(a, b, xt)
  if (p[1] >= yMin && p[1] <= yMax) return p
  const yb = p[1] < yMin ? yMin : yMax
  return [a[0] + ((yb - a[1]) * (b[0] - a[0])) / (b[1] - a[1]), yb]
}

/** Throws at module load when a principal ray does not pass through the computed image tip. */
const assertConverge = (label: string, a: Pt, b: Pt, img: Pt) => {
  const y = atX(a, b, img[0])[1]
  if (Math.abs(y - img[1]) > 0.01) throw new Error(`deck figure ray "${label}" misses the image tip (${y} vs ${img[1]})`)
}

const SEG = (a: Pt, b: Pt, sw = 2.5, dashed = false) => LINE(a[0], a[1], b[0], b[1], sw, dashed)
const SEGA = (a: Pt, b: Pt, marker: string, sw = 2.5, dashed = false) => ARR(a[0], a[1], b[0], b[1], marker, sw, dashed)

/** An upright arrow (object or image) standing on the axis at x, height h (negative = inverted). */
const STICK = (x: number, y0: number, h: number, marker: string, sw = 3.5, dashed = false) => ARR(x, y0, x, y0 - h, marker, sw, dashed)

/** A biconvex lens outline (half-height H) or a biconcave one, centred on (xe, y0), in the text colour. */
const LENS = (xe: number, y0: number, H: number, converging: boolean) => {
  if (converging) {
    const w = 10, R = (H * H + w * w) / (2 * w)
    return `<path d="M${xe} ${y0 - H} A${r1(R)} ${r1(R)} 0 0 1 ${xe} ${y0 + H} A${r1(R)} ${r1(R)} 0 0 1 ${xe} ${y0 - H} z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>`
  }
  const w = 9, s = 6, R = (H * H + s * s) / (2 * s)
  return `<path d="M${xe - w} ${y0 - H} L${xe + w} ${y0 - H} A${r1(R)} ${r1(R)} 0 0 0 ${xe + w} ${y0 + H} L${xe - w} ${y0 + H} A${r1(R)} ${r1(R)} 0 0 0 ${xe - w} ${y0 - H} z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>`
}

/** A spherical mirror: a shallow arc with its vertex at (xe, y0), concave toward the left (object side) or convex. */
const MIRROR = (xe: number, y0: number, H: number, concave: boolean) => {
  const R = 900, sag = R - Math.sqrt(R * R - H * H)
  const x = concave ? xe - sag : xe + sag
  return `<path d="M${r1(x)} ${y0 - H} A${R} ${R} 0 0 ${concave ? 1 : 0} ${r1(x)} ${y0 + H}" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>`
}

/** A small tick + label on the optical axis. */
const TICK = (x: number, y0: number, label: string, size = 15) => `${LINE(x, y0 - 6, x, y0 + 6, 2)}${T(x, y0 + 24, size, label, 'middle', '700')}`

interface RayOpts {
  xe: number; y0: number; f: number; dO: number; h: number
  /** Ray colour group marker id (blue) and image marker id (red). */
  mk: string; mkImg: string; mkObj: string
  xEnd: number; yMin: number; yMax: number; label: string
}

/**
 * Thin-lens principal rays. Object stands left of the lens at distance dO,
 * height h; light travels right. Returns the SVG for the object, image and
 * three rays (parallel → far focus, centre, near focus → parallel).
 */
const lensRays = (o: RayOpts) => {
  const { xe, y0, f, dO, h, xEnd, yMin, yMax } = o
  const dI = imageDist(f, dO)
  const hI = (-dI / dO) * h
  const virtual = dI < 0
  const Tp: Pt = [xe - dO, y0 - h]
  const I: Pt = [xe + dI, y0 - hI]
  const F1: Pt = [xe - f, y0], F2: Pt = [xe + f, y0], Cn: Pt = [xe, y0]
  // ray 1: parallel, then through F2
  const h1: Pt = [xe, Tp[1]]
  assertConverge(o.label + ' r1', h1, F2, I)
  // ray 2: through the centre
  assertConverge(o.label + ' r2', Tp, Cn, I)
  // ray 3: through (or from) F1, then parallel
  const h3 = atX(F1, Tp, xe)
  assertConverge(o.label + ' r3', h3, [xe + 50, h3[1]], I)
  const rays = `
${SEG(Tp, h1)}${SEGA(h1, atXClamped(h1, F2, xEnd, yMin, yMax), o.mk)}
${SEGA(Tp, atXClamped(Tp, Cn, xEnd, yMin, yMax), o.mk)}
${dO < f ? SEG(F1, Tp, 2, true) : ''}${SEG(Tp, h3)}${SEGA(h3, [xEnd, h3[1]], o.mk)}
${virtual ? `${SEG(h1, I, 2, true)}${SEG(Tp, I, 2, true)}${SEG([xe, h3[1]], I, 2, true)}` : ''}`
  const img = `<g class="fig-accent-2">${STICK(I[0], y0, hI, o.mkImg, 3.5, virtual)}</g>`
  const obj = STICK(Tp[0], y0, h, o.mkObj)
  return { svg: `<g class="fig-accent">${rays}</g>${img}${obj}`, dI, hI, I, Tp }
}

/**
 * Spherical-mirror principal rays. Mirror vertex at xe, object left of it at
 * distance dO; f > 0 concave, f < 0 convex. Two principal rays: parallel →
 * through F, and through (or toward) F → parallel. Reflected rays travel left.
 */
const mirrorRays = (o: RayOpts & { xStart: number }) => {
  const { xe, y0, f, dO, h, xStart, yMin, yMax } = o
  const dI = imageDist(f, dO)
  const hI = (-dI / dO) * h
  const virtual = dI < 0
  const Tp: Pt = [xe - dO, y0 - h]
  const I: Pt = [xe - dI, y0 - hI]
  const F: Pt = [xe - f, y0]
  // ray 1: parallel in, reflected along the line through F
  const h1: Pt = [xe, Tp[1]]
  assertConverge(o.label + ' r1', h1, F, I)
  // ray 2: through / toward F, reflected parallel
  const h2 = atX(F, Tp, xe)
  assertConverge(o.label + ' r2', h2, [xe - 50, h2[1]], I)
  const rays = `
${SEG(Tp, h1)}${SEGA(h1, atXClamped(h1, F, xStart, yMin, yMax), o.mk)}
${f > 0 && dO < f ? SEG(F, Tp, 2, true) : ''}${SEG(Tp, h2)}${f < 0 ? SEG(h2, F, 1.5, true) : ''}${SEGA(h2, [xStart, h2[1]], o.mk)}
${virtual ? `${SEG(h1, I, 2, true)}${SEG([xe, h2[1]], I, 2, true)}` : ''}`
  const img = `<g class="fig-accent-2">${STICK(I[0], y0, hI, o.mkImg, 3.5, virtual)}</g>`
  const obj = STICK(Tp[0], y0, h, o.mkObj)
  return { svg: `<g class="fig-accent">${rays}</g>${img}${obj}`, dI, hI, I, Tp }
}

/** A sine wave path (one cycle = λ px) from x0 over `cycles`, amplitude A about y0, starting at phase `ph` (radians). */
const SINE = (x0: number, y0: number, lambda: number, cycles: number, A: number, ph = 0, sw = 2.5) => {
  const pts: string[] = []
  const n = Math.round(cycles * 24)
  for (let i = 0; i <= n; i++) {
    const x = x0 + (i / n) * cycles * lambda
    const y = y0 - A * Math.sin(((x - x0) / lambda) * 2 * Math.PI + ph)
    pts.push(`${i ? 'L' : 'M'}${r1(x)} ${r1(y)}`)
  }
  return `<path d="${pts.join(' ')}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round"/>`
}

/* 1 — Light is a transverse EM wave; the spectrum as an ordered ruler (lead, 1000×460) */
const BANDS = ['radio', 'micro-\nwave', 'infrared', 'VISIBLE', 'ultra-\nviolet', 'X-ray', 'gamma']
const bandCells = (() => {
  const x0 = 60, w = 880 / BANDS.length, y = 255, hgt = 54
  return BANDS.map((name, i) => {
    const x = x0 + i * w
    const vis = name === 'VISIBLE'
    const lines = name.split('\n')
    const label = lines.map((l, k) => T(x + w / 2, y + 24 + k * 18 + (lines.length === 1 ? 9 : 0), 17, l, 'middle', vis ? '700' : '400')).join('')
    return `<rect x="${r1(x)}" y="${y}" width="${r1(w)}" height="${hgt}" fill="currentColor" fill-opacity="${vis ? 0.22 : i % 2 ? 0.1 : 0.05}" stroke="currentColor" stroke-width="1.5"/>${label}`
  }).join('\n')
})()
const spectrumSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-op-spec')}</defs>
${T(300, 36, 19, 'a transverse wave: fields oscillate ⊥ to the travel direction', 'middle', '700')}
<g class="fig-muted">
${LINE(60, 120, 470, 120, 1.5, true)}
<defs>${ARROW('arr-op-spec-m')}</defs>
${DIM(110, 310, 190)}${T(210, 212, 18, 'λ (one wavelength)', 'middle')}
</g>
<g class="fig-accent">
${SINE(60, 120, 200, 2, 40)}
<defs>${ARROW('arr-op-spec-b')}</defs>
${ARR(475, 120, 540, 120, 'arr-op-spec-b', 3)}
${T(507, 108, 18, 'c', 'middle', '700')}
</g>
${T(600, 80, 21, 'c = fλ = 3 × 10⁸ m/s in vacuum', 'start', '700')}
${T(600, 116, 19, 'E = hf — energy rises with frequency')}
${T(600, 148, 19, 'in matter: f fixed, v and λ shrink by n')}
<g class="fig-muted">${T(600, 180, 16, 'no medium needed — it crosses empty space')}</g>
${bandCells}
<g class="fig-accent-2">
<defs>${ARROW('arr-op-spec-r')}</defs>
${ARR(300, 338, 940, 338, 'arr-op-spec-r', 3)}
${T(620, 362, 18, 'frequency f and photon energy E increase →', 'middle', '700')}
</g>
<g class="fig-accent">
${ARR(260, 338, 60, 338, 'arr-op-spec-b', 3)}
${T(160, 362, 18, '← wavelength λ', 'middle', '700')}
</g>
<g class="fig-muted">
${LINE(437, 309, 300, 395, 1.5, true)}
${LINE(563, 309, 700, 395, 1.5, true)}
</g>
<rect x="300" y="395" width="400" height="22" rx="4" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/>
${T(300, 440, 17, '400 nm  violet', 'start', '700')}
${T(700, 440, 17, 'red  700 nm', 'end', '700')}
${T(500, 440, 16, 'visible: higher f = bluer', 'middle')}
<g class="fig-muted">${T(940, 246, 14, 'order only — not to scale', 'end')}</g>
</svg>`

/* 2 — Snell's law through a glass block with the lesson's numbers (lead, 1000×460) */
const snellSvg = (() => {
  const n1 = 1.0, n2 = 1.5, t1 = 30 * DEG
  const t2 = Math.asin((n1 * Math.sin(t1)) / n2) // 19.47°
  const top = 150, bot = 330, xIn = 330
  const start: Pt = [xIn - (top - 30) * Math.tan(t1), 30]
  const entry: Pt = [xIn, top]
  const exit: Pt = [xIn + (bot - top) * Math.tan(t2), bot]
  const end: Pt = [exit[0] + (440 - bot) * Math.tan(t1), 440]
  const ghost: Pt = [xIn + (440 - top) * Math.tan(t1), 440]
  const arc = (c: Pt, rad: number, a0: number, a1: number) =>
    `<path d="M${r1(c[0] + rad * Math.sin(a0))} ${r1(c[1] - rad * Math.cos(a0))} A${rad} ${rad} 0 0 1 ${r1(c[0] + rad * Math.sin(a1))} ${r1(c[1] - rad * Math.cos(a1))}" fill="none" stroke="currentColor" stroke-width="2"/>`
  return `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-op-snell')}</defs>
<g class="fig-muted">
<rect x="120" y="${top}" width="440" height="${bot - top}" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
${T(135, top + 28, 17, 'glass  n = 1.5')}
${T(135, top - 12, 17, 'air  n = 1.00')}
${T(135, bot + 24, 17, 'air  n = 1.00')}
${LINE(entry[0], top - 110, entry[0], top + 110, 1.5, true)}
${LINE(exit[0], bot - 110, exit[0], bot + 110, 1.5, true)}
${T(entry[0] + 8, top - 96, 14, 'normal')}
${SEG(entry, ghost, 1.5, true)}
${T(ghost[0] + 8, 436, 14, 'original line')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-op-snell-b')}</defs>
${SEGA(start, entry, 'arr-op-snell-b', 3.5)}
${SEGA(entry, exit, 'arr-op-snell-b', 3.5)}
${SEGA(exit, end, 'arr-op-snell-b', 3.5)}
</g>
${arc(entry, 60, -t1, 0)}
${T(entry[0] - 30, top - 66, 18, '30°', 'end', '700')}
<g class="fig-accent-2">
${arc(exit, 60, Math.PI - t2 - 0.001, Math.PI)}
${T(exit[0] - 24, top + 110, 18, '19°', 'end', '700')}
</g>
${arc(exit, 60, Math.PI - t1, Math.PI)}
${T(exit[0] - 30, bot + 76, 18, '30°', 'end', '700')}
${T(780, 70, 22, `${SUB('n', '1', 22)}sin ${SUB('θ', '1', 22)}= ${SUB('n', '2', 22)}sin ${SUB('θ', '2', 22)}`, 'middle', '700')}
${T(600, 120, 19, 'into glass (denser): sin θ₂ = 0.5 / 1.5')}
${T(600, 150, 19, '→ θ₂ ≈ 19°, bent TOWARD the normal', 'start', '700')}
${T(600, 200, 19, 'back into air: bends AWAY, out at 30°')}
${T(600, 230, 19, 'parallel to the original line, shifted')}
${T(600, 280, 19, 'head-on (θ₁ = 0): no bend, just slower')}
<g class="fig-muted">
${T(600, 330, 17, 'all angles from the NORMAL, never the surface')}
${T(600, 358, 17, 'f never changes; v and λ shrink by n')}
</g>
</svg>`
})()

/* 3 — Total internal reflection: three rays at a glass–air boundary, then a fiber (lead, 1000×460) */
const tirSvg = (() => {
  const n1 = 1.5, n2 = 1.0
  const tc = Math.asin(n2 / n1) // 41.8°
  const yb = 220, L = 125
  const hits = [120, 300, 480]
  const angs = [25 * DEG, tc, 55 * DEG]
  const ray = (xh: number, th: number, kind: 'refract' | 'critical' | 'total', mkb: string, mkr: string) => {
    const from: Pt = [xh - L * Math.sin(th), yb + L * Math.cos(th)]
    const hit: Pt = [xh, yb]
    const refl: Pt = [xh + L * Math.sin(th), yb + L * Math.cos(th)]
    let out = ''
    if (kind === 'refract') {
      const t2 = Math.asin((n1 * Math.sin(th)) / n2)
      const to: Pt = [xh + L * Math.sin(t2), yb - L * Math.cos(t2)]
      out = `<g class="fig-accent">${SEGA(hit, to, mkb, 3.5)}</g><g class="fig-muted">${SEGA(hit, [xh + 70 * Math.sin(th), yb + 70 * Math.cos(th)], 'arr-op-tir-m', 2, true)}</g>`
    } else if (kind === 'critical') {
      out = `<g class="fig-accent">${SEGA(hit, [xh + L, yb - 2], mkb, 3.5)}</g><g class="fig-muted">${SEGA(hit, [xh + 80 * Math.sin(th), yb + 80 * Math.cos(th)], 'arr-op-tir-m', 2, true)}</g>`
    } else {
      out = `<g class="fig-accent-2">${SEGA(hit, refl, mkr, 3.5)}</g>`
    }
    return `<g class="fig-muted">${LINE(xh, yb - 80, xh, yb + 100, 1.5, true)}</g><g class="fig-accent">${SEGA(from, hit, mkb, 3.5)}</g>${out}`
  }
  // fiber: core between y 300 and 360 from x 640 to 960; bounce angle 60° from the normal
  const fy0 = 300, fy1 = 360, fx0 = 640, fx1 = 960, th = 60 * DEG
  const run = (fy1 - fy0) / Math.tan(Math.PI / 2 - th)
  let x = fx0 + 10, y = fy1 - 6, dir = -1
  const zig: Pt[] = [[x, y]]
  while (x + run < fx1 - 10) { x += run; y = dir < 0 ? fy0 : fy1; zig.push([x, y]); dir = -dir }
  const zigPath = zig.map((p, i) => `${i ? 'L' : 'M'}${r1(p[0])} ${r1(p[1])}`).join(' ')
  return `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-op-tir')}</defs>
<g class="fig-muted">
<defs>${ARROW('arr-op-tir-m')}</defs>
<rect x="30" y="${yb}" width="560" height="140" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
${T(40, yb + 150 + 20, 16, 'glass  n₁ = 1.5')}
${T(40, yb - 12, 16, 'air  n₂ = 1.00')}
${LINE(610, 40, 610, 440, 1.5)}
<rect x="${fx0}" y="${fy0}" width="${fx1 - fx0}" height="${fy1 - fy0}" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
${T(fx0, fy1 + 24, 15, 'glass core')}
</g>
<g class="fig-accent"><defs>${ARROW('arr-op-tir-b')}</defs></g>
<g class="fig-accent-2"><defs>${ARROW('arr-op-tir-r')}</defs></g>
${ray(hits[0], angs[0], 'refract', 'arr-op-tir-b', 'arr-op-tir-r')}
${ray(hits[1], angs[1], 'critical', 'arr-op-tir-b', 'arr-op-tir-r')}
${ray(hits[2], angs[2], 'total', 'arr-op-tir-b', 'arr-op-tir-r')}
${T(hits[0], 60, 17, 'θ &lt; θc', 'middle', '700')}
${T(hits[0], 82, 15, 'refracts AWAY from', 'middle')}
${T(hits[0], 100, 15, 'the normal (+ faint reflection)', 'middle')}
${T(hits[1], 60, 17, 'θ = θc ≈ 42°', 'middle', '700')}
${T(hits[1], 82, 15, 'refracted ray skims', 'middle')}
${T(hits[1], 100, 15, 'the surface (θ₂ = 90°)', 'middle')}
<g class="fig-accent-2">${T(hits[2], 60, 17, 'θ &gt; θc', 'middle', '700')}</g>
${T(hits[2], 82, 15, 'ALL reflected — total', 'middle')}
${T(hits[2], 100, 15, 'internal reflection', 'middle')}
${T(310, 420, 18, 'sin θc = n₂ / n₁ = 1 / 1.5 → θc ≈ 42°', 'middle', '700')}
${T(310, 446, 16, 'needs dense → rare travel AND θ beyond θc', 'middle')}
${T(800, 70, 20, 'optical fiber / endoscope', 'middle', '700')}
<g class="fig-accent-2">
<path d="${zigPath}" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" marker-end="url(#arr-op-tir-r)"/>
</g>
<g class="fig-muted">${LINE(zig[1][0], fy0 - 40, zig[1][0], fy0 + 40, 1.5, true)}</g>
${T(zig[1][0] + 10, fy0 - 24, 15, 'θ = 60° &gt; θc')}
${T(800, 130, 16, 'every bounce meets the wall beyond θc,', 'middle')}
${T(800, 152, 16, 'so no light leaks out — even round', 'middle')}
${T(800, 174, 16, 'gentle bends, for kilometres of glass', 'middle')}
${T(800, 420, 16, 'air → glass can never TIR:', 'middle', '700')}
${T(800, 444, 15, 'bending toward the normal always leaves a refracted ray', 'middle')}
</svg>`
})()

/* 4 — The law of reflection and the plane-mirror image (lead, 1000×460) */
const planeSvg = (() => {
  const ms = 300, nx = 250, th = 40 * DEG, L = 200
  const inc: Pt = [nx - L * Math.sin(th), ms - L * Math.cos(th)]
  const ref: Pt = [nx + L * Math.sin(th), ms - L * Math.cos(th)]
  const arc = (rad: number, a0: number, a1: number) =>
    `<path d="M${r1(nx + rad * Math.sin(a0))} ${r1(ms - rad * Math.cos(a0))} A${rad} ${rad} 0 0 1 ${r1(nx + rad * Math.sin(a1))} ${r1(ms - rad * Math.cos(a1))}" fill="none" stroke="currentColor" stroke-width="2"/>`
  // plane mirror at x = 760; object at x = 640, tip (640, 220); image at x = 880
  const mx = 760, ox = 640, ix = 880, base = 340, tipY = 220
  const tip: Pt = [ox, tipY], itip: Pt = [ix, tipY]
  const hitA: Pt = [mx, 290], hitB: Pt = [mx, 170]
  const eye: Pt = atX(hitA, [2 * mx - itip[0], itip[1]], 560) // reflected ray = line from the image tip through the hit point
  const upA: Pt = atX(hitB, [2 * mx - itip[0], itip[1]], 640)
  return `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-op-pl')}</defs>
${T(250, 40, 19, 'law of reflection: θi = θr, from the NORMAL', 'middle', '700')}
<g class="fig-muted">
${LINE(60, ms, 440, ms, 5)}
<path d="M70 ${ms + 14} L82 ${ms} M100 ${ms + 14} L112 ${ms} M130 ${ms + 14} L142 ${ms} M160 ${ms + 14} L172 ${ms} M190 ${ms + 14} L202 ${ms} M220 ${ms + 14} L232 ${ms} M250 ${ms + 14} L262 ${ms} M280 ${ms + 14} L292 ${ms} M310 ${ms + 14} L322 ${ms} M340 ${ms + 14} L352 ${ms} M370 ${ms + 14} L382 ${ms} M400 ${ms + 14} L412 ${ms}" stroke="currentColor" stroke-width="1.5"/>
${LINE(nx, ms - 210, nx, ms - 20, 1.5, true)}
${T(nx + 8, ms - 196, 15, 'normal')}
${LINE(500, 30, 500, 440, 1.5)}
${LINE(mx, 60, mx, 420, 5)}
<path d="M${mx} 80 L${mx + 12} 68 M${mx} 110 L${mx + 12} 98 M${mx} 140 L${mx + 12} 128 M${mx} 170 L${mx + 12} 158 M${mx} 200 L${mx + 12} 188 M${mx} 230 L${mx + 12} 218 M${mx} 260 L${mx + 12} 248 M${mx} 290 L${mx + 12} 278 M${mx} 320 L${mx + 12} 308 M${mx} 350 L${mx + 12} 338 M${mx} 380 L${mx + 12} 368 M${mx} 410 L${mx + 12} 398" stroke="currentColor" stroke-width="1.5"/>
${DIM(ox, mx, 400)}${T((ox + mx) / 2, 424, 17, 'd', 'middle')}
${DIM(mx, ix, 400)}${T((mx + ix) / 2, 424, 17, 'd (same)', 'middle')}
${T(mx, 452, 15, 'mirror', 'middle')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-op-pl-b')}</defs>
${SEGA(inc, [nx, ms], 'arr-op-pl-b', 3.5)}
${SEGA([nx, ms], ref, 'arr-op-pl-b', 3.5)}
${SEGA(tip, hitA, 'arr-op-pl-b', 3)}${SEGA(hitA, eye, 'arr-op-pl-b', 3)}
${SEGA(tip, hitB, 'arr-op-pl-b', 3)}${SEGA(hitB, upA, 'arr-op-pl-b', 3)}
${SEG(hitA, itip, 2, true)}${SEG(hitB, itip, 2, true)}
</g>
${arc(70, -th, 0)}${arc(70, 0, th)}
${T(nx - 36, ms - 78, 18, 'θi', 'end', '700')}
${T(nx + 36, ms - 78, 18, 'θr', 'start', '700')}
<g class="fig-accent-2">${T(250, 370, 17, 'NOT the angle to the surface (50° here)', 'middle', '700')}</g>
${T(250, 400, 16, 'reflection never changes the speed or λ', 'middle')}
${T(750, 40, 18, 'plane mirror: image as far behind as the object is in front', 'middle', '700')}
${STICK(ox, base, base - tipY, 'arr-op-pl', 4)}
${T(ox - 12, base - 50, 17, 'object', 'end')}
<g class="fig-accent-2">
<defs>${ARROW('arr-op-pl-r')}</defs>
${STICK(ix, base, base - tipY, 'arr-op-pl-r', 3.5, true)}
${T(ix + 12, base - 50, 17, 'image')}
${T(ix + 12, base - 28, 15, 'virtual · upright')}
${T(ix + 12, base - 8, 15, 'same size')}
</g>
<ellipse cx="${r1(eye[0] - 6)}" cy="${r1(eye[1])}" rx="16" ry="9" fill="none" stroke="currentColor" stroke-width="2"/>
<circle cx="${r1(eye[0] - 6)}" cy="${r1(eye[1])}" r="4" fill="currentColor"/>
${T(eye[0] - 6, eye[1] + 30, 15, 'eye', 'middle')}
<g class="fig-muted">${T(690, 120, 14, 'the rays only SEEM to', 'middle')}${T(690, 136, 14, 'come from behind', 'middle')}</g>
</svg>`
})()

/* 5 — Concave mirror, three regimes (lead, 1000×460) */
const concaveSvg = (() => {
  const f = 55, y0 = 240, H = 90
  const panel = (ox: number, xe: number, dO: number, h: number, title: string, result: string[], label: string) => {
    const r = mirrorRays({ xe, y0, f, dO, h, mk: 'arr-op-cc-b', mkImg: 'arr-op-cc-r', mkObj: 'arr-op-cc', xEnd: xe, xStart: ox + 20, yMin: 120, yMax: 372, label })
    return `${T(ox + 160, 40, 19, title, 'middle', '700')}
<g class="fig-muted">
${LINE(ox + 20, y0, ox + 310, y0, 1.5)}
${TICK(xe - 2 * f, y0, 'C')}${TICK(xe - f, y0, 'F')}
</g>
${MIRROR(xe, y0, H, true)}
${r.svg}
${result.map((l, i) => T(ox + 160, 410 + i * 26, i ? 15 : 17, l, 'middle', i ? '400' : '700')).join('')}`
  }
  return `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-op-cc')}</defs>
<g class="fig-accent"><defs>${ARROW('arr-op-cc-b')}</defs></g>
<g class="fig-accent-2"><defs>${ARROW('arr-op-cc-r')}</defs></g>
<g class="fig-muted">${LINE(335, 30, 335, 440, 1.5)}${LINE(665, 30, 665, 440, 1.5)}</g>
${panel(10, 290, 3 * f, 60, 'object beyond C', ['real · inverted · REDUCED', 'image between F and C'], 'concave A')}
${panel(340, 620, 1.5 * f, 30, 'object between C and F', ['real · inverted · ENLARGED', 'image beyond C'], 'concave B')}
${panel(670, 870, 0.6 * f, 30, 'object inside F', ['virtual · upright · ENLARGED', 'behind the mirror (makeup mirror)'], 'concave C')}
<g class="fig-muted">${T(995, 232, 13, 'behind', 'end')}</g>
</svg>`
})()

/* 6 — Convex mirror with the worked example's numbers: d_o = 20 cm, f = −20 cm (beside, 560×440) */
const convexSvg = (() => {
  const scale = 5 // px per cm
  const f = -20 * scale, dO = 20 * scale, xe = 320, y0 = 230, h = 70
  const r = mirrorRays({ xe, y0, f, dO, h, mk: 'arr-op-cv-b', mkImg: 'arr-op-cv-r', mkObj: 'arr-op-cv', xEnd: xe, xStart: 30, yMin: 60, yMax: 400, label: 'convex' })
  if (Math.abs(r.dI + 10 * scale) > 0.01) throw new Error('convex mirror: expected d_i = −10 cm')
  return `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-op-cv')}</defs>
<g class="fig-accent"><defs>${ARROW('arr-op-cv-b')}</defs></g>
<g class="fig-accent-2"><defs>${ARROW('arr-op-cv-r')}</defs></g>
${T(280, 30, 17, 'convex mirror: d₀ = 20 cm, f = −20 cm', 'middle', '700')}
<g class="fig-muted">
${LINE(30, y0, 545, y0, 1.5)}
${TICK(xe - f, y0, 'F')}${TICK(xe - 2 * f, y0, 'C')}
<rect x="${xe + 4}" y="${y0 - 120}" width="${560 - xe - 4}" height="240" fill="currentColor" fill-opacity="0.05"/>
${T(545, y0 - 104, 13, 'behind the mirror', 'end')}
</g>
${MIRROR(xe, y0, 110, false)}
${r.svg}
${T(r.Tp[0] - 10, y0 - h - 10, 15, 'object', 'end')}
<g class="fig-accent-2">
${T(r.I[0] + 10, y0 - r.hI - 10, 15, 'image')}
${T(280, 390, 16, `${SUB('d', 'i', 16)}= −10 cm (behind) · m = +½`, 'middle', '700')}
</g>
${T(280, 416, 15, 'virtual · upright · reduced — the only convex-mirror image', 'middle')}
${T(40, 300, 14, 'reflected rays spread out;')}
${T(40, 318, 14, 'their back-extensions meet behind')}
</svg>`
})()

/* 7 — Lens types: parallel rays through a converging and a diverging lens (lead, 1000×460) */
const lensTypesSvg = (() => {
  const y0 = 240, f = 160, H = 100
  const ys = [-80, -40, 0, 40, 80]
  // converging lens at x = 250, F at 410
  const cx = 250, cF: Pt = [cx + f, y0]
  const conv = ys.map((dy) => {
    const a: Pt = [60, y0 + dy], b: Pt = [cx, y0 + dy]
    const end = dy === 0 ? ([520, y0] as Pt) : atX(b, cF, 520)
    return `${SEG(a, b, 2.5)}${SEGA(b, end, 'arr-op-lt-b', 2.5)}`
  }).join('')
  // diverging lens at x = 750, virtual F at 590
  const dx = 750, dF: Pt = [dx - f, y0]
  const div = ys.map((dy) => {
    const a: Pt = [560, y0 + dy], b: Pt = [dx, y0 + dy]
    const end = dy === 0 ? ([960, y0] as Pt) : atX(dF, b, 940)
    return `${SEG(a, b, 2.5)}${SEGA(b, end, 'arr-op-lt-b', 2.5)}${dy ? SEG(b, dF, 1.5, true) : ''}`
  }).join('')
  return `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-op-lt')}</defs>
${T(250, 40, 20, 'converging (convex): thicker in the middle', 'middle', '700')}
${T(750, 40, 20, 'diverging (concave): thinner in the middle', 'middle', '700')}
<g class="fig-muted">
${LINE(40, y0, 540, y0, 1.5, true)}${LINE(560, y0, 980, y0, 1.5, true)}
${LINE(500, 30, 500, 440, 1.5)}
</g>
${LENS(cx, y0, H, true)}${LENS(dx, y0, H, false)}
<g class="fig-accent">
<defs>${ARROW('arr-op-lt-b')}</defs>
${conv}${div}
</g>
<g class="fig-accent-2">
<circle cx="${cF[0]}" cy="${cF[1]}" r="6" fill="currentColor"/>
${T(cF[0] - 12, y0 + 28, 18, 'F', 'end', '700')}
<circle cx="${dF[0]}" cy="${dF[1]}" r="6" class="fig-bg" stroke="currentColor" stroke-width="3"/>
${T(dF[0] - 12, y0 + 28, 18, 'F', 'end', '700')}
</g>
${T(250, 390, 19, 'parallel rays meet at F (real focus): f &gt; 0', 'middle', '700')}
${T(250, 418, 16, 'can make a REAL image', 'middle')}
${T(750, 390, 19, 'rays spread as if from F (virtual focus): f &lt; 0', 'middle', '700')}
${T(750, 418, 16, 'only virtual, upright, reduced images', 'middle')}
<g class="fig-muted">${T(500, 450, 15, 'vocabulary flip: the convex LENS converges, the concave MIRROR converges', 'middle')}</g>
</svg>`
})()

/* 8 — Thin-lens ray diagrams: camera, projector (15 cm / 10 cm), magnifier (5 cm / 10 cm) (lead, 1000×460) */
const thinLensSvg = (() => {
  const f = 40, y0 = 250, H = 70 // 4 px per cm
  const panel = (ox: number, xe: number, dO: number, h: number, title: string, result: string[], label: string) => {
    const r = lensRays({ xe: ox + xe, y0, f, dO, h, mk: 'arr-op-tl-b', mkImg: 'arr-op-tl-r', mkObj: 'arr-op-tl', xEnd: ox + 305, yMin: 130, yMax: 362, label })
    return `${T(ox + 160, 40, 19, title, 'middle', '700')}
<g class="fig-muted">
${LINE(ox + 15, y0, ox + 310, y0, 1.5)}
${TICK(ox + xe - 2 * f, y0, '2F', 14)}${TICK(ox + xe - f, y0, 'F', 14)}${TICK(ox + xe + f, y0, 'F', 14)}${TICK(ox + xe + 2 * f, y0, '2F', 14)}
</g>
${LENS(ox + xe, y0, H, true)}
${r.svg}
${result.map((l, i) => T(ox + 160, 404 + i * 24, i ? 15 : 16, l, 'middle', i ? '400' : '700')).join('')}`
  }
  return `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-op-tl')}</defs>
<g class="fig-accent"><defs>${ARROW('arr-op-tl-b')}</defs></g>
<g class="fig-accent-2"><defs>${ARROW('arr-op-tl-r')}</defs></g>
<g class="fig-muted">${LINE(335, 30, 335, 440, 1.5)}${LINE(665, 30, 665, 440, 1.5)}</g>
${panel(10, 160, 3 * f, 50, 'd₀ &gt; 2f — the camera', ['real · inverted · reduced', 'image between F and 2F', 'on the FAR side'], 'lens A')}
${panel(340, 100, 60, 30, 'f &lt; d₀ &lt; 2f — the projector', [`d₀ = 15 cm, f = 10 cm → ${SUB('d', 'i', 16)}= +30 cm`, 'm = −30/15 = −2: inverted, doubled', 'slides go in upside down'], 'lens B')}
${panel(670, 190, 20, 30, 'd₀ &lt; f — the magnifier', [`d₀ = 5 cm, f = 10 cm → ${SUB('d', 'i', 16)}= −10 cm`, 'm = +2: virtual, upright, doubled', 'same side as the object'], 'lens C')}
</svg>`
})()

/* 9 — Young's double slit: path difference d sinθ and the fringe ladder (lead, 1000×460) */
const slitSvg = (() => {
  const bx = 250, y0 = 250, d = 110, sx = 760, Lsc = sx - bx
  const S1: Pt = [bx, y0 - d / 2], S2: Pt = [bx, y0 + d / 2]
  const ratio = 0.11 // λ/d on the drawing's own scale
  const fringeY = (m: number) => y0 - Lsc * Math.tan(Math.asin(m * ratio))
  const fringes = [-3, -2, -1, 0, 1, 2, 3].map((m) => {
    const y = fringeY(m)
    const op = [0.9, 0.6, 0.4, 0.25][Math.abs(m)]
    return `<rect x="${sx + 3}" y="${r1(y - 8)}" width="36" height="16" rx="3" fill="currentColor" fill-opacity="${op}"/>${m <= 0 && m > -3 ? T(sx + 48, y + 5, 14, `m = ${Math.abs(m)}`) : ''}`
  }).join('')
  const P: Pt = [sx, fringeY(2)]
  // perpendicular foot from S1 onto the S2→P ray: the extra path d·sinθ
  const ux = P[0] - S2[0], uy = P[1] - S2[1], len = Math.hypot(ux, uy)
  const t = ((S1[0] - S2[0]) * ux + (S1[1] - S2[1]) * uy) / len
  const foot: Pt = [S2[0] + (t * ux) / len, S2[1] + (t * uy) / len]
  const theta = Math.atan2(-(P[1] - S2[1]), P[0] - S2[0])
  const arcEnd: Pt = [S2[0] + 90 * Math.cos(theta), S2[1] - 90 * Math.sin(theta)]
  return `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-op-ds')}</defs>
<g class="fig-muted">
${[60, 95, 130, 165, 200].map((x) => LINE(x, 150, x, 350, 2)).join('')}
<defs>${ARROW('arr-op-ds-m')}</defs>
${ARR(60, 120, 215, 120, 'arr-op-ds-m', 2)}
${T(130, 108, 14, 'plane waves, one λ', 'middle')}
${LINE(bx, 60, bx, S1[1] - 8, 7)}${LINE(bx, S1[1] + 8, bx, S2[1] - 8, 7)}${LINE(bx, S2[1] + 8, bx, 440, 7)}
${LINE(S2[0], S2[1], S2[0] + 120, S2[1], 1.5, true)}
${LINE(sx, 40, sx, 460, 5)}
${T(sx, 30, 14, 'screen', 'middle')}
<path d="M${bx - 22} ${S1[1]} L${bx - 22} ${S2[1]} M${bx - 28} ${S1[1]} L${bx - 16} ${S1[1]} M${bx - 28} ${S2[1]} L${bx - 16} ${S2[1]}" fill="none" stroke="currentColor" stroke-width="2"/>
${T(bx - 32, y0 + 6, 17, 'd', 'end', '700')}
${SEG(S1, foot, 1.5, true)}
</g>
${fringes}
<g class="fig-accent">
<defs>${ARROW('arr-op-ds-b')}</defs>
${SEGA(S1, P, 'arr-op-ds-b', 2.5)}${SEGA(S2, P, 'arr-op-ds-b', 2.5)}
</g>
<path d="M${S2[0] + 90} ${S2[1]} A90 90 0 0 0 ${r1(arcEnd[0])} ${r1(arcEnd[1])}" fill="none" stroke="currentColor" stroke-width="2"/>
${T(S2[0] + 100, S2[1] - 12, 17, 'θ', 'start', '700')}
<g class="fig-accent-2">
${SEG(S2, foot, 5)}
${T(foot[0] + 14, foot[1] + 22, 16, 'extra path = d sinθ', 'start', '700')}
</g>
${T(sx + 48, fringeY(2) + 5, 14, 'P: m = 2')}
${T(sx + 48, fringeY(0) - 14, 13, 'central')}
${T(150, 392, 18, 'bright: d sinθ = mλ', 'start', '700')}
${T(150, 420, 18, 'dark: d sinθ = (m + ½)λ', 'start', '700')}
<g class="fig-muted">${T(150, 446, 14, 'crest on crest adds; crest on trough cancels', 'start')}</g>
${T(920, 80, 14, 'in step (path diff. mλ)', 'middle', '700')}
<g class="fig-accent">${SINE(874, 115, 40, 2.8, 12)}${SINE(874, 150, 40, 2.8, 12)}</g>
${T(930, 192, 15, '→ bright', 'middle')}
${T(930, 240, 15, 'half a λ apart', 'middle', '700')}
<g class="fig-accent">${SINE(874, 275, 40, 2.8, 12)}${SINE(874, 310, 40, 2.8, 12, Math.PI)}</g>
${T(930, 352, 15, '→ dark', 'middle')}
<g class="fig-muted">${T(920, 426, 13, 'longer λ or smaller d', 'middle')}${T(920, 442, 13, '→ fringes spread apart', 'middle')}</g>
</svg>`
})()

export const mcatOpticsFigures: DeckFigurePlacement[] = [
  {
    at: 'Light Is an Electromagnetic Wave',
    mode: 'lead',
    figure: {
      svg: spectrumSvg,
      alt:
        'Top: a blue sine wave travelling right (arrow c) with one wavelength λ dimensioned between crests — a transverse wave whose fields oscillate perpendicular to the travel direction. Beside it: c = fλ = 3 × 10⁸ m/s in vacuum; E = hf, energy rises with frequency; in matter f is fixed while v and λ shrink by n; no medium needed. Bottom: the spectrum as a ruler of seven bands in order — radio, microwave, infrared, visible (highlighted), ultraviolet, X-ray, gamma — with a red arrow to the right labelled frequency and photon energy increase and a blue arrow to the left labelled wavelength. The visible band is expanded underneath: 400 nm violet at the left to 700 nm red at the right, higher frequency is bluer. Note: order only, not to scale.',
      caption: 'Light as a transverse electromagnetic wave and the spectrum in order of rising frequency and energy (band widths schematic, not to scale); visible light spans about 400–700 nm.',
    },
    blocks: [
      '- Transverse EM wave, no medium: $c = f\\lambda = 3 \\times 10^8$ m/s; $E = hf$ — frequency sets the energy',
      '- Spectrum in order of rising $f$: radio → micro → IR → visible (400–700 nm) → UV → X-ray → gamma',
    ],
  },
  {
    at: "Snell's Law",
    mode: 'lead',
    figure: {
      svg: snellSvg,
      alt:
        'A blue ray in air strikes the top of a grey glass block (n = 1.5) at 30° from the dashed normal. Inside the glass it continues at 19° from the normal, bent toward it. At the bottom face it exits back into air at 30° from the normal, bent away again, running parallel to a dashed line showing its original direction but shifted sideways. Right: n₁ sin θ₁ = n₂ sin θ₂; into glass (denser) sin θ₂ = 0.5/1.5, so θ₂ ≈ 19°, bent toward the normal; back into air it bends away and leaves at 30°, parallel to the original line but shifted; head-on incidence (θ₁ = 0) gives no bend, just a slower speed; all angles are measured from the normal, never the surface; frequency never changes, speed and wavelength shrink by n.',
      caption: 'Snell’s law through a parallel-sided glass block with the lesson’s numbers: 30° in air becomes 19° in glass (toward the normal) and 30° again on exit, the ray displaced but parallel.',
    },
    blocks: [
      '- $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$: into a denser medium the ray bends **toward** the normal; out again, away',
      '- Air → glass at 30°: $\\sin\\theta_2 = 0.5/1.5 \\Rightarrow \\theta_2 \\approx 19°$; a parallel exit face restores 30°, shifted sideways',
    ],
  },
  {
    at: 'Total Internal Reflection',
    mode: 'lead',
    figure: {
      svg: tirSvg,
      alt:
        'Left: a grey glass region (n₁ = 1.5) below a horizontal boundary with air (n₂ = 1.00) above, and three blue rays rising from the glass to the boundary at different angles from the dashed normals. At θ less than θc the ray refracts into the air bent away from the normal, with a faint dashed reflected ray. At θ = θc ≈ 42° the refracted ray skims along the surface (θ₂ = 90°). At θ greater than θc the ray is entirely reflected back into the glass (red): total internal reflection. Text: sin θc = n₂/n₁ = 1/1.5 so θc ≈ 42°; needs dense-to-rare travel and θ beyond θc. Right: an optical fiber drawn as a horizontal glass core with a red ray zig-zagging along it, each bounce meeting the wall at 60°, beyond θc, so no light leaks out even round gentle bends; air to glass can never give total internal reflection because bending toward the normal always leaves a refracted ray.',
      caption: 'Glass to air: below the critical angle light refracts away from the normal, at θc ≈ 42° it skims the surface, beyond θc it is all reflected — the trick an optical fiber repeats at every bounce.',
    },
    blocks: [
      '- Dense → rare only: $\\sin\\theta_c = n_2/n_1$; glass → air gives $\\theta_c \\approx 42°$, water → air $\\approx 49°$',
      '- Beyond $\\theta_c$ nothing escapes — fibers, endoscopes; air → glass can never totally reflect',
    ],
  },
  {
    at: 'Plane Mirrors',
    mode: 'lead',
    figure: {
      svg: planeSvg,
      alt:
        'Left: a flat hatched mirror surface with a dashed normal; a blue ray comes in at angle θi from the normal and leaves at an equal angle θr on the other side — θi = θr, both measured from the normal, not from the surface (which would read 50° here); reflection never changes the speed or wavelength. Right: a vertical plane mirror with an upright object arrow a distance d in front and a dashed red image arrow the same distance d behind it, the same size and upright. Two blue rays from the object’s tip reflect off the mirror and diverge, one into an eye; their dashed back-extensions behind the mirror meet at the image tip — the rays only seem to come from behind the mirror, so the image is virtual.',
      caption: 'Law of reflection (angles from the normal) and the plane-mirror construction: reflected rays diverge, their back-extensions meet behind the glass — a virtual, upright, same-size image as far behind as the object is in front.',
    },
    blocks: [
      '- $\\theta_i = \\theta_r$, both from the **normal**; a plane mirror’s image: virtual, upright, same size, $d_i = -d_o$',
      '- Rays only *appear* to come from behind the glass — nothing can be caught on a screen there',
    ],
  },
  {
    at: 'Concave Mirror — Three Regimes',
    mode: 'lead',
    figure: {
      svg: concaveSvg,
      alt:
        'Three ray diagrams for the same concave mirror (f = R/2), with C and F marked on the axis and two blue principal rays from the object’s tip: one parallel to the axis reflecting through F, one through F reflecting parallel. Object beyond C: the rays cross in front of the mirror between F and C at a small inverted red image — real, inverted, reduced. Object between C and F: the rays cross beyond C at a large inverted image — real, inverted, enlarged. Object inside F: the reflected rays diverge; their dashed back-extensions meet behind the mirror at a large upright dashed image — virtual, upright, enlarged (the makeup mirror).',
      caption: 'Concave mirror, three regimes drawn from the mirror equation: beyond C → real, inverted, reduced; between C and F → real, inverted, enlarged; inside F → virtual, upright, enlarged behind the glass.',
    },
    blocks: [
      '- Two principal rays locate every image: parallel → through $F$; through $F$ → parallel (a third goes through $C$ and back)',
      '- Beyond $C$: small real · between $C$ and $F$: large real · inside $F$: large upright virtual — at $d_o = f$ no image',
    ],
  },
  {
    at: 'Convex Mirror — One Regime',
    mode: 'beside',
    figure: {
      svg: convexSvg,
      alt:
        'Ray diagram for a convex mirror with the worked example’s numbers, d₀ = 20 cm and f = −20 cm. The mirror bulges toward the object; F and C sit behind it. An upright object stands 20 cm in front. Two blue rays from its tip reflect and spread apart: the parallel ray reflects as if coming from F, the ray aimed at F reflects parallel. Their dashed back-extensions meet behind the mirror at an upright dashed red image half the object’s height, 10 cm behind the glass: d_i = −10 cm, m = +½ — virtual, upright, reduced, the only image a convex mirror can make.',
      caption: 'The convex-mirror sanity check drawn to scale: d₀ = 20 cm, f = −20 cm gives d_i = −10 cm and m = +½ — virtual, upright, reduced, as every convex-mirror image is.',
    },
  },
  {
    at: 'Lens Types',
    mode: 'lead',
    figure: {
      svg: lensTypesSvg,
      alt:
        'Left: a biconvex (converging) lens, thicker in the middle; five parallel blue rays enter from the left and all cross the axis at a red dot F on the far side, the real focus — f > 0, it can make a real image. Right: a biconcave (diverging) lens, thinner in the middle; parallel rays spread apart after the lens, and their dashed back-extensions meet at an open red circle F on the near side, the virtual focus — f < 0, only virtual, upright, reduced images. Note at the bottom: vocabulary flip — the convex LENS converges, the concave MIRROR converges.',
      caption: 'Parallel rays through the two lens types: a converging (convex) lens brings them to a real focus, f > 0; a diverging (concave) lens spreads them as if from a virtual focus, f < 0.',
    },
    blocks: [
      '- **Converging** = convex = thicker in the middle, $f > 0$, real focus · **Diverging** = concave, $f < 0$, virtual focus',
      '- Flip from mirrors: the concave *mirror* and the convex *lens* are the converging ones',
    ],
  },
  {
    at: 'Thin-Lens Equation',
    mode: 'lead',
    figure: {
      svg: thinLensSvg,
      alt:
        'Three ray diagrams for the same converging lens with F and 2F marked on both sides, each with three blue principal rays from the object’s tip (parallel → through the far F; through the centre undeviated; through the near F → parallel). Object beyond 2F, the camera: the rays meet on the far side between F and 2F at a small inverted red image — real, inverted, reduced. Object between F and 2F, the projector, with the lesson’s numbers d₀ = 15 cm and f = 10 cm: the rays meet beyond 2F at d_i = +30 cm with m = −2, inverted and doubled, which is why slides go in upside down. Object inside F, the magnifier, d₀ = 5 cm: the rays diverge after the lens and their dashed back-extensions meet on the object’s side at d_i = −10 cm with m = +2 — virtual, upright, doubled.',
      caption: 'The thin-lens regimes drawn from 1/f = 1/d₀ + 1/d_i: camera (beyond 2F), projector (15 cm from a 10 cm lens → real image at 30 cm, m = −2) and magnifier (5 cm → virtual image at −10 cm, m = +2).',
    },
    blocks: [
      '- Same equation as mirrors, $\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$, $m = -\\frac{d_i}{d_o}$; a lens’s real image is on the FAR side',
      '- Beyond $2f$ camera · $f$ to $2f$ projector · inside $f$ magnifier (virtual, upright) · diverging: always virtual, upright, reduced',
    ],
  },
  {
    at: 'Interference — Waves Add',
    mode: 'lead',
    figure: {
      svg: slitSvg,
      alt:
        'Young’s double slit, not to scale. Plane waves of one wavelength arrive from the left at a barrier with two slits a distance d apart. Two blue rays, one from each slit, travel to the same point P on a screen at the right, at angle θ above the axis. The lower ray is longer by a red segment labelled extra path = d sinθ, marked off by a dashed perpendicular from the upper slit. On the screen a ladder of bright fringes is drawn, brightest at the centre (m = 0) and fading outward through m = 1, 2, 3 on each side; P is the m = 2 bright fringe. Formulas: bright when d sinθ = mλ, dark when d sinθ = (m + ½)λ; crest on crest adds, crest on trough cancels. Right: two small sine waves in step add to bright; two waves half a wavelength apart give dark. Longer λ or smaller d spreads the fringes apart.',
      caption: 'Young’s double slit (schematic, not to scale): the two paths to a screen point differ by d sinθ, so bright fringes sit where d sinθ = mλ and dark ones half a wavelength off.',
    },
    blocks: [
      '- Path difference $d\\sin\\theta = m\\lambda$ → bright; $(m + \\tfrac{1}{2})\\lambda$ → dark; the lesson’s slits: $\\lambda = (2\\,\\mu\\text{m})(0.25) = 500$ nm',
      '- Longer $\\lambda$ or smaller $d$ spreads the fringes; thin-film colours are the same interference set by film thickness',
    ],
  },
]
