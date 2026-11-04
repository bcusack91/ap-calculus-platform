import type { DeckFigurePlacement } from './index'
import { SVG_OPEN, ARROW, T, SUB, ARR, DIM, RECT, sinePath, listener } from './mcat-cp-fluids-waves'

/**
 * Waves & Sound (MCAT C/P, topic split Nov 2026) — extra deck figures for the
 * sections the original Fluids & Waves figures do not cover (The Wave Equation,
 * Superposition and Standing Waves, and Doppler come from
 * mcat-cp-fluids-waves.ts and are not repeated here).
 *
 * Every drawing below is ours, drawn from the concept with the shared helpers
 * in mcat-cp-fluids-waves.ts: a displacement–time sine pair offset by a
 * quarter cycle, a mass on a spring and a pendulum at their turning points and
 * at equilibrium, two speakers and a listener with crest-on-crest and
 * crest-on-trough sketches, two close tones and their beating sum, nested
 * spheres around a point source, a decibel ladder, an ultrasound probe with
 * its pulse and echo beside two beams of different frequency, and wavefronts
 * from a source slower than, equal to and faster than sound. No textbook,
 * prep-company or AAMC figure was copied. Curves are the textbook SHAPE and
 * say "illustrative"/"schematic" in the caption. The only numbers drawn are
 * the lesson's own: 72 beats/min → 1.2 Hz, T ≈ 0.83 s, a quarter cycle = 90°
 * (Part 1, Describing Anything That Repeats); the 0.5 m path difference with
 * λ = 1.0 m or 0.5 m (Part 2, Path Difference); the 440 Hz fork, 3 beats/s,
 * 437 or 443 Hz (Part 2, Beats); 1/4, 1/9, 1/100 (Part 3, Inverse-Square);
 * I₀ = 10⁻¹² W/m², ~1 W/m² painful, the ×10/×100/×1000/×2/×¼ table, two
 * 70 dB sources ≈ 73 dB, 40 → 70 dB = ×1000 and the stated landmarks (Part 3,
 * Decibel Scale); 1540 m/s, d = vt/2, 130 µs → 10 cm, 2 cm carotid, 3 MHz →
 * 0.51 mm and 12 MHz → 0.13 mm (Part 4, Ultrasound Imaging and its worked
 * example).
 *
 * Colours: waves and wavefronts BLUE (fig-accent); accelerations, the second
 * oscillator, "answer" annotations and shock fronts RED (fig-accent-2);
 * velocities in SHM BLUE; guides and dimension lines grey (fig-muted).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same coloured group.
 * Marker ids are unique in this file (arr-ws-<figure>-<colour>).
 */

/** A polyline path sampling y = fn(x) from x0 to x1 every `step` units. */
const fpath = (x0: number, x1: number, fn: (x: number) => number, step = 2) => {
  let d = ''
  for (let x = x0; x <= x1 + 0.001; x += step) d += `${x === x0 ? 'M' : ' L'}${x.toFixed(1)} ${fn(x).toFixed(1)}`
  return d
}

/** A vertical wave travelling DOWN from y0 to y1 around xc, its amplitude decaying with depth. */
const vwave = (xc: number, y0: number, y1: number, amp: number, lambda: number, decay: number) => {
  let d = ''
  for (let y = y0; y <= y1; y += 1) {
    const x = xc + amp * Math.exp(-(y - y0) / decay) * Math.sin((2 * Math.PI * (y - y0)) / lambda)
    d += `${y === y0 ? 'M' : ' L'}${x.toFixed(1)} ${y}`
  }
  return d
}

/** A horizontal zig-zag spring from x1 to x2 at height y. */
const spring = (x1: number, x2: number, y: number, coils = 9, h = 13) => {
  const a = x1 + 12
  const b = x2 - 12
  const step = (b - a) / (coils * 2)
  let d = `M${x1} ${y} L${a} ${y}`
  for (let i = 0; i < coils * 2; i++) d += ` L${(a + step * (i + 0.5)).toFixed(1)} ${i % 2 ? y + h : y - h}`
  return `<path d="${d} L${b} ${y} L${x2} ${y}" fill="none" stroke="currentColor" stroke-width="2.2"/>`
}

/** A loudspeaker facing right, its back face at x, centred on y. */
const speaker = (x: number, y: number) =>
  `<path d="M${x} ${y - 14} L${x + 14} ${y - 14} L${x + 14} ${y + 14} L${x} ${y + 14} Z M${x + 14} ${y - 14} L${x + 34} ${y - 32} L${x + 34} ${y + 32} L${x + 14} ${y + 14}" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>`

/** A wall drawn as a vertical line with short hatch marks on its left. */
const wall = (x: number, y1: number, y2: number) => {
  let hatch = ''
  for (let y = y1 + 6; y < y2; y += 16) hatch += ` M${x} ${y} L${x - 12} ${y + 12}`
  return `<path d="M${x} ${y1} L${x} ${y2}${hatch}" fill="none" stroke="currentColor" stroke-width="2.5"/>`
}

const SUP: Record<string, string> = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' }
const pow10 = (e: number) => (e === 0 ? '1' : `10${String(e).split('').map((c) => SUP[c]).join('')}`)

/* 1 — Period, amplitude and phase on a displacement–time graph (lead, 1000×460) */
const periodicSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(330, 40, 20, 'Displacement vs. time for two oscillators', 'middle', '700')}
<g class="fig-muted">
<defs>${ARROW('arr-ws-per-g')}</defs>
<line x1="70" y1="120" x2="600" y2="120" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 5"/>
<line x1="70" y1="280" x2="600" y2="280" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 5"/>
${DIM(632, 122, 632, 278, 'arr-ws-per-g', 2)}
</g>
${T(644, 206, 18, '2A', 'start', '700')}
${ARR(70, 200, 612, 200, 'arr-ws-per-k', 2)}
${ARR(70, 320, 70, 70, 'arr-ws-per-k', 2)}
<defs>${ARROW('arr-ws-per-k')}</defs>
${T(604, 226, 17, 't', 'middle', '700')}
${T(84, 78, 17, 'x', 'start', '700')}
<g class="fig-accent"><path d="${sinePath(70, 590, 200, 80, 200)}" fill="none" stroke="currentColor" stroke-width="3.5"/></g>
<g class="fig-accent-2">
<defs>${ARROW('arr-ws-per-r')}</defs>
<path d="${sinePath(70, 590, 200, 80, 200, -Math.PI / 2)}" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="10 6"/>
${DIM(522, 100, 568, 100, 'arr-ws-per-r', 2)}
${T(545, 88, 16, '¼T = 90°', 'middle', '700')}
</g>
<g class="fig-muted">${DIM(122, 100, 318, 100, 'arr-ws-per-g', 2)}${DIM(120, 198, 120, 122, 'arr-ws-per-g', 2)}</g>
${T(220, 88, 18, 'T (one cycle)', 'middle', '700')}
${T(106, 168, 18, 'A', 'end', '700')}
<g class="fig-accent"><line x1="80" y1="352" x2="130" y2="352" stroke="currentColor" stroke-width="3.5"/></g>
${T(142, 358, 16, 'oscillator 1')}
<g class="fig-accent-2"><line x1="290" y1="352" x2="340" y2="352" stroke="currentColor" stroke-width="3" stroke-dasharray="10 6"/></g>
${T(352, 358, 16, 'oscillator 2: same T and A, a quarter cycle behind')}
${T(80, 398, 16, 'A = centre line to peak (not peak to peak, which is 2A)')}
<g class="fig-muted">${T(80, 426, 15, 'one cycle = 360° = 2π rad; a quarter-cycle offset is 90°')}</g>
<g class="fig-muted"><line x1="700" y1="30" x2="700" y2="440" stroke="currentColor" stroke-width="1.5"/></g>
${T(845, 74, 30, 'f = 1 / T', 'middle', '700')}
${T(845, 102, 15, 'Hz = cycles per second', 'middle')}
${T(845, 150, 15, 'in phase: peaks together', 'middle', '700')}
<g class="fig-accent"><path d="${sinePath(765, 925, 178, 12, 80)}" fill="none" stroke="currentColor" stroke-width="2.5"/></g>
<g class="fig-accent-2"><path d="${sinePath(765, 925, 210, 12, 80)}" fill="none" stroke="currentColor" stroke-width="2.5"/></g>
${T(845, 256, 15, '180° out of phase: peak meets trough', 'middle', '700')}
<g class="fig-accent"><path d="${sinePath(765, 925, 284, 12, 80)}" fill="none" stroke="currentColor" stroke-width="2.5"/></g>
<g class="fig-accent-2"><path d="${sinePath(765, 925, 316, 12, 80, Math.PI)}" fill="none" stroke="currentColor" stroke-width="2.5"/></g>
<g class="fig-muted">${[785, 865].map((x) => `<line x1="${x}" y1="160" x2="${x}" y2="226" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><line x1="${x}" y1="266" x2="${x}" y2="332" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/>`).join('')}</g>
${T(845, 380, 15, 'heart at 72 beats/min:', 'middle')}
${T(845, 406, 17, 'f = 72/60 = 1.2 Hz, T ≈ 0.83 s', 'middle', '700')}
<g class="fig-muted">${T(845, 430, 14, 'convert per minute to per second first', 'middle')}</g>
</svg>`

/* 2 — SHM: a mass on a spring and a pendulum at the turning points and at equilibrium (lead, 1000×460) */
const SPRING_ROWS: [number, number, string][] = [
  [100, 310, '+A'],
  [190, 240, '0'],
  [280, 170, '−A'],
]
const PIV_X = 760
const PIV_Y = 62
const PEN_L = 220
const bob = (deg: number) => {
  const t = (deg * Math.PI) / 180
  return [PIV_X + PEN_L * Math.sin(t), PIV_Y + PEN_L * Math.cos(t)]
}
const [BLX, BLY] = bob(-22)
const [BCX, BCY] = bob(0)
const [BRX, BRY] = bob(22)
const tan22 = [Math.cos((22 * Math.PI) / 180), Math.sin((22 * Math.PI) / 180)]
const shmSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(240, 36, 20, 'Mass on a spring', 'middle', '700')}
${T(PIV_X, 36, 20, 'Simple pendulum', 'middle', '700')}
<g class="fig-muted">
${[170, 240, 310].map((x) => `<line x1="${x}" y1="60" x2="${x}" y2="306" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 5"/>`).join('')}
</g>
${T(170, 326, 16, '−A', 'middle')}${T(240, 326, 16, 'x = 0', 'middle')}${T(310, 326, 16, '+A', 'middle')}
${wall(50, 66, 306)}
${SPRING_ROWS.map(([y, c]) => `${spring(50, c - 30, y)}${RECT(c - 30, y - 22, 60, 44, 2.5, 0.18, 4)}${T(c, y + 6, 16, 'm', 'middle', '700')}`).join('')}
<g class="fig-accent-2">
<defs>${ARROW('arr-ws-shm-r')}</defs>
${ARR(330, 68, 270, 68, 'arr-ws-shm-r', 3)}
${ARR(150, 248, 210, 248, 'arr-ws-shm-r', 3)}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-ws-shm-b')}</defs>
${ARR(270, 158, 206, 158, 'arr-ws-shm-b', 3)}
</g>
${T(358, 98, 15, 'v = 0')}${T(358, 118, 15, 'a max (toward 0)')}
${T(296, 188, 15, 'v max')}${T(296, 208, 15, 'a = 0, F = 0')}
${T(226, 278, 15, 'v = 0')}${T(226, 298, 15, 'a max (toward 0)')}
${T(240, 372, 24, 'T = 2π√(m/k)', 'middle', '700')}
<g class="fig-accent-2">${T(240, 402, 16, 'NOT changed by: amplitude, g (same on the Moon)', 'middle', '700')}</g>
<g class="fig-muted">${T(240, 428, 15, '4× mass → T doubles; 4× stiffer spring → T halves', 'middle')}</g>
<g class="fig-muted"><line x1="500" y1="30" x2="500" y2="440" stroke="currentColor" stroke-width="1.5"/>
<path d="M${BLX.toFixed(1)} ${BLY.toFixed(1)} A ${PEN_L} ${PEN_L} 0 0 0 ${BRX.toFixed(1)} ${BRY.toFixed(1)}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
<line x1="${PIV_X}" y1="${PIV_Y}" x2="${PIV_X}" y2="${BCY + 30}" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/>
</g>
<line x1="${PIV_X - 40}" y1="${PIV_Y}" x2="${PIV_X + 40}" y2="${PIV_Y}" stroke="currentColor" stroke-width="3"/>
${[[BLX, BLY], [BRX, BRY]].map(([x, y]) => `<line x1="${PIV_X}" y1="${PIV_Y}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="currentColor" stroke-width="2"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="16" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>`).join('')}
<line x1="${PIV_X}" y1="${PIV_Y}" x2="${BCX}" y2="${BCY}" stroke="currentColor" stroke-width="2"/><circle cx="${BCX}" cy="${BCY}" r="16" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>
${T(PIV_X + 12, 165, 17, 'L', 'start', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-ws-pen-r')}</defs>
${ARR(+(BLX + 18 * tan22[0]).toFixed(1), +(BLY + 18 * tan22[1]).toFixed(1), +(BLX + 50 * tan22[0]).toFixed(1), +(BLY + 50 * tan22[1]).toFixed(1), 'arr-ws-pen-r', 3)}
${ARR(+(BRX - 18 * tan22[0]).toFixed(1), +(BRY + 18 * tan22[1]).toFixed(1), +(BRX - 50 * tan22[0]).toFixed(1), +(BRY + 50 * tan22[1]).toFixed(1), 'arr-ws-pen-r', 3)}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-ws-pen-b')}</defs>
${ARR(BCX - 30, BCY + 30, BCX + 32, BCY + 30, 'arr-ws-pen-b', 3)}
</g>
${T(BLX - 24, BLY - 18, 15, 'v = 0', 'end')}${T(BLX - 24, BLY + 2, 15, 'a max', 'end')}
${T(BRX + 24, BRY - 18, 15, 'v = 0')}${T(BRX + 24, BRY + 2, 15, 'a max')}
${T(BCX, BCY + 56, 15, 'v max, a = 0', 'middle')}
${T(PIV_X, 372, 24, 'T = 2π√(L/g)', 'middle', '700')}
<g class="fig-accent-2">${T(PIV_X, 402, 16, 'NOT changed by: amplitude (small swings), mass', 'middle', '700')}</g>
<g class="fig-muted">${T(PIV_X, 428, 15, '4× length → T doubles; smaller g (Moon) → T longer', 'middle')}</g>
</svg>`

/* 3 — Path difference decides the phase: two speakers, a listener, crest-on-crest vs crest-on-trough (lead, 1000×460) */
const pathSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(225, 44, 20, 'Two speakers, one signal (in phase)', 'middle', '700')}
<g class="fig-accent">${speaker(64, 130)}${speaker(64, 300)}</g>
<g class="fig-muted"><line x1="104" y1="130" x2="364" y2="204" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/><line x1="104" y1="300" x2="364" y2="212" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/></g>
${listener(380)}
${T(230, 150, 20, SUB('d', '1', 20), 'middle', '700')}
${T(230, 284, 20, SUB('d', '2', 20), 'middle', '700')}
${T(225, 360, 22, `Δd = |${SUB('d', '1', 22, ' − ')}${SUB('d', '2', 22)}|`, 'middle', '700')}
${T(225, 390, 16, 'convert Δd into WAVELENGTHS before deciding', 'middle')}
<g class="fig-muted">${T(225, 418, 15, 'Δd = 0.5 m: quiet if λ = 1.0 m, loud if λ = 0.5 m', 'middle')}</g>
<g class="fig-muted"><line x1="455" y1="30" x2="455" y2="440" stroke="currentColor" stroke-width="1.5"/></g>
${T(720, 52, 17, 'Δd = 0, λ, 2λ, …  →  crest meets crest', 'middle', '700')}
<g class="fig-muted">${[505, 585].map((x) => `<line x1="${x}" y1="70" x2="${x}" y2="168" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/>`).join('')}</g>
<g class="fig-accent"><path d="${sinePath(485, 645, 96, 18, 80)}" fill="none" stroke="currentColor" stroke-width="3"/></g>
<g class="fig-accent-2"><path d="${sinePath(485, 645, 146, 18, 80)}" fill="none" stroke="currentColor" stroke-width="3"/></g>
${T(700, 130, 28, '=', 'middle', '700')}
<path d="${sinePath(760, 920, 121, 36, 80)}" fill="none" stroke="currentColor" stroke-width="3.5"/>
${T(840, 186, 16, 'constructive: LOUD', 'middle', '700')}
${T(840, 206, 15, `amplitude ${SUB('A', '1', 15, ' + ')}${SUB('A', '2', 15)}`, 'middle')}
${T(720, 262, 17, 'Δd = ½λ, 3/2λ, …  →  crest meets trough', 'middle', '700')}
<g class="fig-muted">${[505, 585].map((x) => `<line x1="${x}" y1="280" x2="${x}" y2="378" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/>`).join('')}</g>
<g class="fig-accent"><path d="${sinePath(485, 645, 306, 18, 80)}" fill="none" stroke="currentColor" stroke-width="3"/></g>
<g class="fig-accent-2"><path d="${sinePath(485, 645, 356, 18, 80, Math.PI)}" fill="none" stroke="currentColor" stroke-width="3"/></g>
${T(700, 340, 28, '=', 'middle', '700')}
<line x1="760" y1="331" x2="920" y2="331" stroke="currentColor" stroke-width="3.5"/>
${T(840, 386, 16, 'destructive: QUIET', 'middle', '700')}
${T(840, 406, 15, 'equal amplitudes cancel completely', 'middle')}
<g class="fig-muted">${T(720, 440, 14, 'noise-cancelling headphones: same f and A, shifted half a cycle', 'middle')}</g>
</svg>`

/* 4 — Beats: two close tones and their sum with the beat envelope (lead, 1000×460) */
const B_X0 = 80
const B_X1 = 600
const L1 = 520 / 13
const L2 = 520 / 15
const beatSum = (x: number) => 310 - 25 * Math.sin((2 * Math.PI * (x - B_X0)) / L1) - 25 * Math.sin((2 * Math.PI * (x - B_X0)) / L2)
const env = (x: number) => 50 * Math.abs(Math.cos((Math.PI * (x - B_X0)) / 260))
const beatsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(B_X0, 46, 16, `tone 1: ${SUB('f', '1', 16)}`, 'start', '700')}
<g class="fig-accent"><path d="${fpath(B_X0, B_X1, (x) => 90 - 22 * Math.sin((2 * Math.PI * (x - B_X0)) / L1))}" fill="none" stroke="currentColor" stroke-width="2.2"/></g>
${T(B_X0, 142, 16, `tone 2: ${SUB('f', '2', 16, ', slightly higher')}`, 'start', '700')}
<g class="fig-accent"><path d="${fpath(B_X0, B_X1, (x) => 186 - 22 * Math.sin((2 * Math.PI * (x - B_X0)) / L2))}" fill="none" stroke="currentColor" stroke-width="2.2"/></g>
${T(B_X0, 244, 16, 'played together: the sum swells and fades', 'start', '700')}
<g class="fig-accent-2">
<path d="${fpath(B_X0, B_X1, (x) => 310 - env(x), 4)} ${fpath(B_X0, B_X1, (x) => 310 + env(x), 4)}" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>
</g>
<path d="${fpath(B_X0, B_X1, beatSum, 1)}" fill="none" stroke="currentColor" stroke-width="2.2"/>
${[B_X0 + 4, 340, B_X1 - 4].map((x) => T(x, 386, 15, 'loud', 'middle', '700')).join('')}
${[210, 470].map((x) => T(x, 386, 15, 'quiet', 'middle')).join('')}
<g class="fig-muted">
<defs>${ARROW('arr-ws-beat-g')}</defs>
${DIM(B_X0 + 2, 404, 338, 404, 'arr-ws-beat-g', 2)}
</g>
${T(210, 430, 15, `one beat period = 1 / ${SUB('f', 'beat', 15)}`, 'middle')}
<g class="fig-muted"><line x1="640" y1="30" x2="640" y2="440" stroke="currentColor" stroke-width="1.5"/></g>
${T(810, 76, 28, `${SUB('f', 'beat', 28, ' = |')}${SUB('f', '1', 28, ' − ')}${SUB('f', '2', 28, '|')}`, 'middle', '700')}
${T(810, 108, 15, 'throbs per second; pitch heard = the average', 'middle')}
${T(810, 162, 17, 'Tuning a string against a 440 Hz fork', 'middle', '700')}
${T(810, 190, 16, '3 beats/s → string is 437 or 443 Hz', 'middle')}
${T(810, 216, 15, 'beats alone cannot say which', 'middle')}
${T(810, 260, 16, 'tighten the string (raises its f):', 'middle', '700')}
<g class="fig-accent-2">
${T(810, 290, 16, 'beats SLOWER → it was flat, 437 Hz', 'middle', '700')}
${T(810, 318, 16, 'beats FASTER → it was sharp, 443 Hz', 'middle', '700')}
</g>
${T(810, 352, 16, 'beats vanish → frequencies match', 'middle')}
<g class="fig-muted">${T(810, 420, 14, 'tone frequencies drawn far apart for clarity', 'middle')}</g>
</svg>`

/* 5 — Intensity and the inverse-square law: one point source, spheres at r, 2r, 3r (lead, 1000×460) */
const SRC_X = 80
const SRC_Y = 216
const arc = (r: number, deg: number) => {
  const t = (deg * Math.PI) / 180
  const x = (SRC_X + r * Math.cos(t)).toFixed(1)
  return `M${x} ${(SRC_Y - r * Math.sin(t)).toFixed(1)} A ${r} ${r} 0 0 1 ${x} ${(SRC_Y + r * Math.sin(t)).toFixed(1)}`
}
const CONE = 9
const coneX = (SRC_X + 330 * Math.cos((CONE * Math.PI) / 180)).toFixed(1)
const coneDy = 330 * Math.sin((CONE * Math.PI) / 180)
const inverseSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(220, 40, 19, 'One source, power P, spreading over spheres', 'middle', '700')}
<g class="fig-accent">
<polygon points="${SRC_X},${SRC_Y} ${coneX},${(SRC_Y - coneDy).toFixed(1)} ${coneX},${(SRC_Y + coneDy).toFixed(1)}" fill="currentColor" fill-opacity="0.12"/>
${[100, 200, 300].map((r) => `<path d="${arc(r, Math.min(38, (Math.asin(Math.min(1, 120 / r)) * 180) / Math.PI))}" fill="none" stroke="currentColor" stroke-width="2.5"/>`).join('')}
</g>
<g class="fig-accent-2">
${[100, 200, 300].map((r) => `<path d="${arc(r, CONE)}" fill="none" stroke="currentColor" stroke-width="7"/>`).join('')}
<circle cx="${SRC_X}" cy="${SRC_Y}" r="9" fill="currentColor"/>
</g>
${T(SRC_X, SRC_Y + 34, 16, 'P', 'middle', '700')}
<g class="fig-muted"><line x1="${SRC_X}" y1="${SRC_Y + 144}" x2="400" y2="${SRC_Y + 144}" stroke="currentColor" stroke-width="1.2"/>
${[100, 200, 300].map((r) => `<line x1="${SRC_X + r}" y1="${SRC_Y + 138}" x2="${SRC_X + r}" y2="${SRC_Y + 150}" stroke="currentColor" stroke-width="1.5"/>`).join('')}</g>
${[['r', 100], ['2r', 200], ['3r', 300]].map(([l, r]) => T(SRC_X + +r, SRC_Y + 170, 16, l as string, 'middle', '700')).join('')}
<g class="fig-accent-2">${[['I', 100], ['I/4', 200], ['I/9', 300]].map(([l, r]) => T(SRC_X + +r + 12, SRC_Y - 66, 18, l as string, 'start', '700')).join('')}</g>
${T(220, 414, 15, 'the same power crosses each red patch;', 'middle')}
${T(220, 438, 15, 'the patch area grows as r², so I falls as 1/r²', 'middle')}
<g class="fig-muted"><line x1="460" y1="30" x2="460" y2="440" stroke="currentColor" stroke-width="1.5"/></g>
${T(720, 72, 26, 'I = P / A = P / (4πr²)', 'middle', '700')}
${T(720, 102, 15, 'intensity: power per square metre, in W/m²', 'middle')}
${T(560, 150, 16, 'distance', 'middle', '700')}${T(720, 150, 16, 'sphere area', 'middle', '700')}${T(880, 150, 16, 'intensity', 'middle', '700')}
<g class="fig-muted"><line x1="500" y1="162" x2="940" y2="162" stroke="currentColor" stroke-width="1.5"/></g>
${[['r', '4πr²', 'I'], ['2r', '× 4', 'I / 4'], ['3r', '× 9', 'I / 9'], ['10r', '× 100', 'I / 100']]
  .map(([d, a, i], k) => `${T(560, 192 + 32 * k, 17, d, 'middle')}${T(720, 192 + 32 * k, 17, a, 'middle')}<g class="fig-accent-2">${T(880, 192 + 32 * k, 17, i, 'middle', '700')}</g>`)
  .join('')}
${T(720, 344, 20, 'I ∝ 1 / r²', 'middle', '700')}
${T(720, 376, 16, 'double the distance → one-quarter the intensity', 'middle')}
<g class="fig-muted">${T(720, 418, 15, 'intensity also grows as amplitude squared (I ∝ A²)', 'middle')}</g>
</svg>`

/* 6 — The decibel ladder: each +10 dB rung is ×10 intensity (lead, 1000×460) */
const ladY = (db: number) => 410 - 2.7 * db
const RUNGS = Array.from({ length: 14 }, (_, i) => i * 10)
const bracket = (x: number, db1: number, db2: number) =>
  `<path d="M${x + 8} ${ladY(db1)} L${x} ${ladY(db1)} L${x} ${ladY(db2)} L${x + 8} ${ladY(db2)}" fill="none" stroke="currentColor" stroke-width="2"/>`
const decibelSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent">
<line x1="210" y1="${ladY(0)}" x2="210" y2="${ladY(130)}" stroke="currentColor" stroke-width="3"/>
<line x1="256" y1="${ladY(0)}" x2="256" y2="${ladY(130)}" stroke="currentColor" stroke-width="3"/>
${RUNGS.map((d) => `<line x1="210" y1="${ladY(d)}" x2="256" y2="${ladY(d)}" stroke="currentColor" stroke-width="2"/>`).join('')}
</g>
${RUNGS.map((d) => T(194, ladY(d) + 5, 15, pow10(d / 10 - 12), 'end')).join('')}
${RUNGS.map((d) => T(270, ladY(d) + 5, 15, `${d}`, 'start', d % 30 === 0 ? '700' : '400')).join('')}
${T(160, 444, 15, 'I (W/m²)', 'middle', '700')}${T(282, 444, 15, 'β (dB)', 'middle', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-ws-db-r')}</defs>
<path d="M120 ${ladY(30)} Q96 ${(ladY(30) + ladY(40)) / 2} 120 ${ladY(40)}" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ws-db-r)"/>
${T(98, ladY(35) - 4, 15, '+10 dB', 'end', '700')}${T(98, ladY(35) + 14, 15, '×10 I', 'end', '700')}
<path d="M120 ${ladY(60)} Q88 ${ladY(70)} 120 ${ladY(80)}" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ws-db-r)"/>
${T(92, ladY(70) - 4, 15, '+20 dB', 'end', '700')}${T(92, ladY(70) + 14, 15, '×100 I', 'end', '700')}
</g>
${T(332, ladY(0) + 5, 15, '0 dB = threshold of hearing, I₀')}
${T(332, ladY(30) + 5, 15, 'whisper ≈ 30')}
${T(332, ladY(60) + 5, 15, 'conversation ≈ 60')}
${T(332, ladY(80) + 5, 15, 'heavy traffic ≈ 80')}
<g class="fig-muted">${bracket(318, 110, 120)}${bracket(318, 120, 130)}</g>
${T(332, ladY(115) + 5, 15, 'siren up close ≈ 110–120')}
${T(332, ladY(125) + 5, 15, 'pain ≈ 120–130 (about 1 W/m²)')}
<g class="fig-muted">${T(332, ladY(100) + 5, 14, 'landmarks approximate')}</g>
<g class="fig-muted"><line x1="590" y1="30" x2="590" y2="440" stroke="currentColor" stroke-width="1.5"/></g>
${T(790, 66, 26, 'β = 10 log (I / I₀)', 'middle', '700')}
${T(790, 96, 16, `${SUB('I', '0', 16, ' = 10⁻¹² W/m² defines 0 dB')}`, 'middle')}
${[['× 10', '+10 dB'], ['× 100', '+20 dB'], ['× 1000', '+30 dB'], ['× 2', '≈ +3 dB'], ['× ¼ (2× distance)', '≈ −6 dB']]
  .map(([r, d], k) => `${T(770, 146 + 30 * k, 17, `I ${r}`, 'end')}${T(786, 146 + 30 * k, 17, '→', 'middle')}<g class="fig-accent-2">${T(802, 146 + 30 * k, 17, d, 'start', '700')}</g>`)
  .join('')}
<g class="fig-muted">${T(790, 294, 14, 'log 2 ≈ 0.3, so a factor of 2 is about 3 dB', 'middle')}</g>
${T(790, 334, 17, 'Never add decibels', 'middle', '700')}
${T(790, 360, 16, 'two 70 dB sources ≈ 73 dB, not 140', 'middle')}
${T(790, 386, 16, '40 → 70 dB is × 1000, not × 70/40', 'middle')}
<g class="fig-muted">${T(790, 426, 14, 'turn every ×10 into 10 dB and every ×2 into 3 dB', 'middle')}</g>
</svg>`

/* 7 — Ultrasound: pulse out, echo back, d = vt/2; frequency trades resolution for penetration (lead, 1000×460) */
const UV_TOP = 98
const usSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(230, 34, 19, 'Depth from echo time', 'middle', '700')}
${RECT(150, 52, 100, 38, 2.5, 0.2, 6)}
${T(262, 72, 15, 'probe')}${T(262, 90, 14, '(piezoelectric crystal)')}
<g class="fig-accent"><rect x="140" y="90" width="120" height="8" fill="currentColor" fill-opacity="0.35"/></g>
${T(132, 98, 14, 'gel', 'end')}
<line x1="60" y1="${UV_TOP}" x2="420" y2="${UV_TOP}" stroke="currentColor" stroke-width="2"/>
${T(412, 120, 14, 'skin', 'end')}
<g class="fig-accent"><path d="M60 300 Q140 288 220 300 T420 296 L420 330 L60 330 Z" fill="currentColor" fill-opacity="0.12"/></g>
<path d="M60 300 Q140 288 220 300 T420 296" fill="none" stroke="currentColor" stroke-width="2.5"/>
${T(412, 322, 14, 'tissue boundary', 'end')}
<g class="fig-accent-2">
<defs>${ARROW('arr-ws-us-r')}</defs>
${ARR(184, 104, 184, 292, 'arr-ws-us-r', 3.5)}
${T(172, 200, 16, 'pulse out', 'end', '700')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-ws-us-b')}</defs>
${ARR(216, 294, 216, 106, 'arr-ws-us-b', 3.5)}
${T(228, 200, 16, 'echo back', 'start', '700')}
</g>
<g class="fig-muted">
<defs>${ARROW('arr-ws-us-g')}</defs>
${DIM(84, 102, 84, 294, 'arr-ws-us-g', 2)}
</g>
${T(74, 204, 18, 'd', 'end', '700')}
${T(230, 368, 26, 'd = vt / 2', 'middle', '700')}
${T(230, 396, 15, 'v ≈ 1540 m/s in soft tissue; t = round-trip time', 'middle')}
<g class="fig-accent-2">${T(230, 424, 15, 'echo after 130 µs: vt ≈ 0.20 m → d ≈ 10 cm', 'middle', '700')}</g>
<g class="fig-muted"><line x1="460" y1="30" x2="460" y2="440" stroke="currentColor" stroke-width="1.5"/></g>
${T(730, 34, 19, 'Higher frequency: finer detail, less depth', 'middle', '700')}
${RECT(650, 52, 60, 34, 2.5, 0.2, 5)}${RECT(850, 52, 60, 34, 2.5, 0.2, 5)}
<line x1="480" y1="${UV_TOP}" x2="980" y2="${UV_TOP}" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">
<line x1="480" y1="${UV_TOP + 60}" x2="980" y2="${UV_TOP + 60}" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 5"/>
<line x1="480" y1="${UV_TOP + 300}" x2="980" y2="${UV_TOP + 300}" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 5"/>
${T(484, UV_TOP + 52, 14, 'carotid ≈ 2 cm')}
${T(484, UV_TOP + 292, 14, 'liver ≈ 10 cm')}
</g>
<g class="fig-accent"><path d="${vwave(680, UV_TOP, UV_TOP + 300, 26, 40, 260)}" fill="none" stroke="currentColor" stroke-width="2.5"/></g>
<g class="fig-accent-2"><path d="${vwave(880, UV_TOP, UV_TOP + 300, 26, 10, 60)}" fill="none" stroke="currentColor" stroke-width="2"/></g>
${T(680, 74, 15, '3 MHz', 'middle', '700')}${T(880, 74, 15, '12 MHz', 'middle', '700')}
${T(680, 422, 15, 'λ ≈ 0.51 mm', 'middle', '700')}${T(680, 442, 14, 'reaches the liver', 'middle')}
${T(880, 422, 15, 'λ ≈ 0.13 mm', 'middle', '700')}${T(880, 442, 14, 'sees the carotid wall', 'middle')}
<g class="fig-muted">${T(484, 240, 14, 'tissue absorbs high')}${T(484, 260, 14, 'frequencies more')}${T(484, 280, 14, 'strongly')}</g>
</svg>`

/* 8 — Shock waves: source slower than, equal to and faster than sound (lead, 1000×460) */
const U = 24
const frontsSvg = (sx: number, ratio: number, cy = 222) =>
  [1, 2, 3, 4].map((k) => `<circle cx="${(sx - ratio * U * k).toFixed(1)}" cy="${cy}" r="${U * k}" fill="none" stroke="currentColor" stroke-width="2.2"/>`).join('')
const dotsSvg = (sx: number, ratio: number, cy = 222) =>
  [1, 2, 3, 4].map((k) => `<circle cx="${(sx - ratio * U * k).toFixed(1)}" cy="${cy}" r="2.5" fill="currentColor"/>`).join('')
const P3 = 920
const CONE_LEN = 205
const shockSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(170, 46, 17, `${SUB('v', 's', 17, ' &lt; v')}`, 'middle', '700')}
${T(170, 70, 15, 'fronts bunch up ahead', 'middle')}
${T(470, 46, 17, `${SUB('v', 's', 17, ' = v')}`, 'middle', '700')}
${T(470, 70, 15, 'fronts pile into one front', 'middle')}
${T(790, 46, 17, `${SUB('v', 's', 17, ' &gt; v')}`, 'middle', '700')}
${T(790, 70, 15, 'source outruns its own fronts', 'middle')}
<g class="fig-accent">${frontsSvg(250, 0.5)}${frontsSvg(560, 1)}${frontsSvg(P3, 2)}</g>
<g class="fig-muted">${dotsSvg(250, 0.5)}${dotsSvg(560, 1)}${dotsSvg(P3, 2)}</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-ws-shk-r')}</defs>
${[250, 560, P3].map((x) => `<circle cx="${x}" cy="222" r="7" fill="currentColor"/>${ARR(x + 10, 222, x + 40, 222, 'arr-ws-shk-r', 3)}`).join('')}
<line x1="560" y1="112" x2="560" y2="332" stroke="currentColor" stroke-width="4"/>
<path d="M${(P3 - CONE_LEN * Math.cos(Math.PI / 6)).toFixed(1)} ${(222 - CONE_LEN * 0.5).toFixed(1)} L${P3} 222 L${(P3 - CONE_LEN * Math.cos(Math.PI / 6)).toFixed(1)} ${(222 + CONE_LEN * 0.5).toFixed(1)}" fill="none" stroke="currentColor" stroke-width="4"/>
${T(760, 106, 15, 'shock wave', 'middle', '700')}
</g>
${T(170, 370, 15, 'Doppler formula works:', 'middle')}
${T(170, 392, 15, 'higher pitch ahead', 'middle')}
${T(470, 370, 15, `denominator v − ${SUB('v', 's', 15, ' = 0:')}`, 'middle')}
${T(470, 392, 15, 'the formula no longer applies', 'middle')}
${T(790, 370, 15, 'fronts overlap on the Mach cone', 'middle', '700')}
${T(790, 392, 15, `M = ${SUB('v', 's', 15, ' / v')}; faster → narrower cone`, 'middle')}
<g class="fig-accent-2">${T(500, 432, 16, 'sonic boom = the cone sweeping past you: heard AFTER the plane passes, all through supersonic flight', 'middle', '700')}</g>
</svg>`

export const mcatWavesSoundExtraFigures: DeckFigurePlacement[] = [
  {
    at: 'Describing Anything That Repeats',
    mode: 'lead',
    figure: {
      svg: periodicSvg,
      alt:
        'A displacement–time graph with two sine curves of the same period and amplitude. Oscillator 1 (solid blue) and oscillator 2 (dashed red) peak a quarter cycle apart; a red marker between their peaks reads ¼T = 90°. A grey dimension arrow from one blue peak to the next is labelled T (one cycle); a vertical arrow from the centre line up to the first peak is labelled A; dashed guide lines at the peaks and troughs carry a 2A dimension. Notes: A is measured from the centre line to a peak, not peak to peak (2A); one cycle = 360° = 2π rad and a quarter-cycle offset is 90°. Right: f = 1/T (cycles per second ↔ seconds per cycle); two small paired sketches — in phase, peaks together; 180° out of phase, peak meets trough; and the heart example: 72 beats/min gives f = 72/60 = 1.2 Hz and T ≈ 0.83 s, converting per minute to per second first.',
      caption: 'Period, amplitude and phase on one graph: the dashed oscillator is identical but a quarter cycle (90°) behind — illustrative.',
    },
    blocks: [
      '- $f = 1/T$; amplitude $A$ is centre line to peak (peak to peak is $2A$)',
      '- Phase: one cycle $= 360^\\circ = 2\\pi$; in phase = peaks together, $180^\\circ$ = peak meets trough',
    ],
  },
  {
    at: 'Simple Harmonic Motion',
    mode: 'lead',
    figure: {
      svg: shmSvg,
      alt:
        'Left: a mass m on a horizontal spring attached to a wall, drawn in three rows at x = +A (spring stretched), x = 0 and x = −A (spring compressed), with dashed grey guides at −A, 0 and +A. At +A and −A the mass has v = 0 and a red acceleration arrow of maximum size pointing back toward x = 0; at x = 0 a blue velocity arrow shows v max, with a = 0 and F = 0. Below: T = 2π√(m/k); not changed by amplitude or g (same on the Moon); 4× mass doubles T, a 4× stiffer spring halves T. Right: a simple pendulum of length L swinging along a dashed arc, drawn at both extremes and at the bottom. At each extreme v = 0 and a red arrow along the arc points back toward the bottom (a max); under the bottom bob a blue arrow shows v max, a = 0. Below: T = 2π√(L/g); not changed by amplitude (small swings) or mass; 4× length doubles T and a smaller g (Moon) makes T longer.',
      caption: 'Simple harmonic motion: at the turning points speed is zero and acceleration is greatest; at equilibrium speed is greatest and acceleration is zero — schematic.',
    },
    blocks: [
      '- Extremes: $v = 0$, $|a|$ max; equilibrium: $v$ max, $a = 0$ (energy sloshes between PE and KE)',
      '- **Amplitude never changes $T$**; the pendulum\'s mass cancels; the spring ignores $g$',
    ],
  },
  {
    at: 'Path Difference Decides the Phase',
    mode: 'lead',
    figure: {
      svg: pathSvg,
      alt:
        'Left: two speakers driven by the same signal, one above the other, with dashed lines d₁ and d₂ running to a listener on the right; the path difference is Δd = |d₁ − d₂|. Notes: convert Δd into wavelengths before deciding; Δd = 0.5 m is quiet if λ = 1.0 m but loud if λ = 0.5 m. Right, top: for Δd = 0, λ, 2λ, … a blue wave and a red wave are drawn one above the other with their crests aligned (dashed guides), and their sum is a wave of double height — constructive, loud, amplitude A₁ + A₂. Right, bottom: for Δd = ½λ, 3/2λ, … the red wave is shifted half a cycle so each crest lines up with a trough, and the sum is a flat line — destructive, quiet, equal amplitudes cancel completely. Footnote: noise-cancelling headphones play the same f and A shifted half a cycle.',
      caption: 'Two in-phase speakers: a whole number of wavelengths of path difference gives crest on crest (loud); an odd number of half-wavelengths gives crest on trough (quiet) — schematic.',
    },
    blocks: [
      '- $\\Delta d = 0, \\lambda, 2\\lambda, \\ldots$ → loud; $\\tfrac12\\lambda, \\tfrac32\\lambda, \\ldots$ → quiet',
      '- Always convert the path difference into **wavelengths** first',
    ],
  },
  {
    at: 'Beats',
    mode: 'lead',
    figure: {
      svg: beatsSvg,
      alt:
        'Left: three traces over the same time window. Tone 1 (f₁) and tone 2 (f₂, slightly higher) are blue sine waves of equal amplitude that drift in and out of step. Below them their sum, drawn in the text colour inside a dashed red envelope, swells to double amplitude (loud) where the tones are in step and shrinks to nothing (quiet) where they are opposite, twice across the window; a grey dimension marks one beat period = 1/f_beat between two loud points. Right: f_beat = |f₁ − f₂|, throbs per second, and the pitch heard is their average. Tuning example: a string against a 440 Hz fork gives 3 beats/s, so the string is 437 or 443 Hz and the beats alone cannot say which; tighten the string (raising its frequency): beats slower means it was flat (437 Hz), beats faster means it was sharp (443 Hz), beats vanish means the frequencies match.',
      caption: 'Beats: two close frequencies drift in and out of phase, so the loudness throbs |f₁ − f₂| times per second — illustrative, frequencies not to scale.',
    },
    blocks: [
      '- $f_{beat} = |f_1 - f_2|$; the pitch you hear is the average, pulsing in loudness',
      '- 440 Hz fork + 3 beats/s → 437 or 443 Hz; tighten: slower beats = was flat, faster = was sharp',
    ],
  },
  {
    at: 'Intensity and the Inverse-Square Law',
    mode: 'lead',
    figure: {
      svg: inverseSvg,
      alt:
        'Left: a red point source of power P with three blue spherical wavefronts, cut away to show arcs at distances r, 2r and 3r marked on a grey scale below. A narrow shaded blue cone from the source crosses each sphere in a thick red patch; the patch grows with distance and the intensity labels read I at r, I/4 at 2r and I/9 at 3r. Notes: the same power crosses each red patch; the patch area grows as r², so I falls as 1/r². Right: I = P/A = P/(4πr²), intensity being power per square metre in W/m². A table: distance r — sphere area 4πr² — intensity I; 2r — ×4 — I/4; 3r — ×9 — I/9; 10r — ×100 — I/100. Then I ∝ 1/r²: double the distance, one-quarter the intensity; intensity also grows as amplitude squared (I ∝ A²).',
      caption: 'The inverse-square law: a point source spreads the same power over spheres of area 4πr², so intensity falls as 1/r² — schematic.',
    },
    blocks: [
      '- Point source: $I = \\dfrac{P}{4\\pi r^2}$, so $I \\propto 1/r^2$',
      '- $2r$ → $I/4$; $3r$ → $I/9$; $10r$ → $I/100$; intensity also $\\propto$ amplitude²',
    ],
  },
  {
    at: 'The Decibel Scale',
    mode: 'lead',
    figure: {
      svg: decibelSvg,
      alt:
        'A vertical ladder with a rung every 10 dB from 0 to 130 dB. Left of each rung is its intensity, from 10⁻¹² W/m² at 0 dB up to 1 W/m² at 120 dB and 10¹ at 130 dB; right of each rung is its level in dB. Red curved arrows on the left show that one rung, +10 dB (30 to 40), is ×10 intensity and two rungs, +20 dB (60 to 80), are ×100. Landmarks beside the ladder: 0 dB = threshold of hearing, I₀; whisper ≈ 30; conversation ≈ 60; heavy traffic ≈ 80; bracketed ranges for a siren up close ≈ 110–120 and pain ≈ 120–130 (about 1 W/m²); landmarks approximate. Right: β = 10 log(I/I₀), with I₀ = 10⁻¹² W/m² defining 0 dB. Rules: I ×10 → +10 dB; ×100 → +20 dB; ×1000 → +30 dB; ×2 → ≈ +3 dB (log 2 ≈ 0.3); ×¼ (distance doubled) → ≈ −6 dB. Never add decibels: two 70 dB sources ≈ 73 dB, not 140; 40 → 70 dB is ×1000, not ×70/40. Turn every ×10 into 10 dB and every ×2 into 3 dB.',
      caption: 'The decibel ladder: every +10 dB rung multiplies the intensity by 10, starting from 0 dB at 10⁻¹² W/m²; landmark levels are approximate.',
    },
    blocks: [
      '- $\\beta = 10\\log(I/I_0)$, $I_0 = 10^{-12}$ W/m² $= 0$ dB; each $+10$ dB is ×10 intensity, $+3$ dB ≈ ×2',
      '- Never add decibels: two 70 dB sources ≈ 73 dB; a level difference is a **ratio**',
    ],
  },
  {
    at: 'Ultrasound Imaging',
    mode: 'lead',
    figure: {
      svg: usSvg,
      alt:
        'Left: a probe (piezoelectric crystal) on a thin layer of gel on the skin. A red arrow carries the pulse down to a tissue boundary and a blue arrow carries the echo back up; a grey dimension arrow marks the depth d from the skin to the boundary. Below: d = vt/2, with v ≈ 1540 m/s in soft tissue and t the round-trip time; example: an echo after 130 µs gives vt ≈ 0.20 m, so d ≈ 10 cm. Right, titled higher frequency: finer detail, less depth: two probes on the skin send waves downward, with dashed depth lines at about 2 cm (carotid) and 10 cm (liver); a side note says tissue absorbs high frequencies more strongly. The 3 MHz beam (blue) has a long wavelength and fades slowly, still visible at the liver line: λ ≈ 0.51 mm, reaches the liver. The 12 MHz beam (red) has a much shorter wavelength but dies out within a few centimetres: λ ≈ 0.13 mm, sees the carotid wall.',
      caption: 'Ultrasound: echo time gives depth by d = vt/2, and higher frequency buys finer resolution at the cost of penetration — schematic, worked-example numbers.',
    },
    blocks: [
      '- $d = vt/2$ with $v \\approx 1540$ m/s: the pulse goes there **and back**',
      '- Higher $f$ → shorter $\\lambda$ → finer detail, but absorbed sooner → less penetration',
    ],
  },
  {
    at: 'Shock Waves and Sonic Booms',
    mode: 'lead',
    figure: {
      svg: shockSvg,
      alt:
        'Three panels, each a red source moving right with four blue circular wavefronts emitted from earlier positions (grey dots). Left, v_s < v: the fronts are bunched ahead of the source but never touch; the Doppler formula works and the pitch is higher ahead. Middle, v_s = v: every front touches the source at one point, piling into a single thick red front; the denominator v − v_s = 0, so the formula no longer applies. Right, v_s > v: the source is ahead of all its fronts, which overlap along two red lines trailing back from the source — the Mach cone, labelled shock wave; M = v_s/v and the faster the source, the narrower the cone. Across the bottom: a sonic boom is the cone sweeping past you, heard after the plane passes and all through supersonic flight.',
      caption: 'Shock waves: once the source matches and then outruns its own wavefronts, they pile into a Mach cone whose sweep is the sonic boom — schematic.',
    },
    blocks: [
      '- $v_s > v$: fronts overlap on the **Mach cone** (a shock wave); $M = v_s/v$, faster → narrower cone',
      '- The boom follows the plane all through supersonic flight; each listener hears it AFTER it passes',
    ],
  },
]
