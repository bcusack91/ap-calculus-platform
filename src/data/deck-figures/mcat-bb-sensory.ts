import type { DeckFigurePlacement } from './index'

/**
 * Sensory Systems (MCAT B/B) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (two spike trains under a
 * step stimulus, a 2×2 receptor grid, a light path as boxes with three
 * schematic eyes, a dark-vs-light cascade, a box retina, a box ear, a ring
 * canal and an otolith shelf, a taste grid, a four-sense relay table) — no
 * textbook, prep-company or AAMC figure was copied. Spike trains are the
 * textbook SHAPE and say "illustrative" in the caption. Anatomy is schematic
 * only: eyes are ellipses, the ear and retina are labelled boxes.
 *
 * The P/S Sensation & Perception deck already draws signal detection, the
 * visual pathway with the chiasm, colour theories, pitch coding on the basilar
 * membrane, gate control and Gestalt — none of those is repeated here; this
 * deck draws the physiology (transduction, circuitry, mechanics).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-sen-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** Attribute strings for the text helper (always pass these, never a number). */
const B = ' font-weight="700"'
const MID = ' text-anchor="middle"'
const MIDB = ' font-weight="700" text-anchor="middle"'
const END = ' text-anchor="end"'

/** Text at (x, y): `attrs` is an attribute string such as MID, MIDB, B, END or ''. */
const T = (x: number, y: number, fs: number, label: string, attrs: string = MID) =>
  `<text x="${x}" y="${y}" font-size="${fs}"${attrs} fill="currentColor">${label}</text>`

/** Rounded box; `dash` is a stroke-dasharray value or '' for solid. */
const BOX = (x: number, y: number, w: number, h: number, op = 0.08, sw = 2.5, dash = '') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="currentColor" fill-opacity="${op}" stroke="currentColor" stroke-width="${sw}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`

/** Box with a bold centred title and an optional smaller second line. */
const LBOX = (x: number, y: number, w: number, h: number, l1: string, l2 = '', fs = 20, op = 0.08) =>
  BOX(x, y, w, h, op) +
  (l2
    ? T(x + w / 2, y + h / 2 - 4, fs, l1, MIDB) + T(x + w / 2, y + h / 2 + 20, fs - 4, l2)
    : T(x + w / 2, y + h / 2 + fs * 0.36, fs, l1, MIDB))

/** A spike train: vertical ticks from y0 (baseline) up to y1 at each x. */
const SPIKES = (xs: number[], y0: number, y1: number) => `<path d="${xs.map((x) => `M${x} ${y0} L${x} ${y1}`).join(' ')}" stroke="currentColor" stroke-width="2.5" fill="none"/>`

const range = (from: number, to: number, step: number) => {
  const out: number[] = []
  for (let x = from; x <= to; x += step) out.push(x)
  return out
}

/* 1 — Tonic vs phasic receptors under a held stimulus (lead, 1000×460) */
const adaptationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<defs>${ARROW('arr-sen-adapt-m')}</defs>
<line x1="230" y1="230" x2="880" y2="230" stroke="currentColor" stroke-width="1.5"/>
<line x1="230" y1="370" x2="880" y2="370" stroke="currentColor" stroke-width="1.5"/>
<line x1="300" y1="100" x2="300" y2="380" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<line x1="720" y1="100" x2="720" y2="380" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
${T(300, 122, 18, 'onset')}
${T(720, 122, 18, 'offset')}
${T(555, 262, 20, 'fires the whole hold → SUSTAINED intensity · nociceptors, Merkel discs, spindles')}
${T(555, 402, 20, 'bursts at onset and offset only → CHANGE · Pacinian corpuscles, olfaction')}
${T(555, 444, 18, 'spike size never changes — intensity is coded by firing FREQUENCY and by recruitment')}
</g>
<path d="M230 95 L300 95 L300 50 L720 50 L720 95 L880 95" fill="none" stroke="currentColor" stroke-width="3"/>
${T(205, 80, 20, 'stimulus', END)}
${T(510, 40, 18, 'held constant')}
<g class="fig-accent">
${T(205, 205, 24, 'Tonic', B + END)}
${T(205, 230, 18, 'slowly adapting', END)}
${SPIKES(range(306, 714, 12), 230, 172)}
</g>
<g class="fig-accent-2">
${T(205, 345, 24, 'Phasic', B + END)}
${T(205, 370, 18, 'rapidly adapting', END)}
${SPIKES([304, 316, 328, 340, 352, 724, 736, 748, 760, 772], 370, 312)}
</g>
</svg>`

/* 2 — The somatosensory roster as a 2×2: adaptation × depth (replace-table, 560×440) */
const rosterSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<rect x="130" y="8" width="208" height="58" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="346" y="8" width="206" height="58" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="8" y="76" width="114" height="160" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="8" y="246" width="114" height="160" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
${T(280, 432, 15, 'Free nerve endings — pain and temperature, all layers, mostly slow')}
</g>
${T(234, 33, 17, 'SUPERFICIAL', MIDB)}
${T(234, 56, 15, 'fine detail')}
${T(449, 33, 17, 'DEEP', MIDB)}
${T(449, 56, 15, 'pressure and stretch')}
${T(65, 150, 17, 'SLOW', MIDB)}
${T(65, 172, 15, 'tonic')}
${T(65, 194, 15, 'sustained')}
${T(65, 320, 17, 'RAPID', MIDB)}
${T(65, 342, 15, 'phasic')}
${T(65, 364, 15, 'change')}
<g class="fig-accent">
${BOX(130, 76, 208, 160, 0.07, 3)}
${BOX(346, 76, 206, 160, 0.07, 3)}
</g>
<g class="fig-accent-2">
${BOX(130, 246, 208, 160, 0.07, 3)}
${BOX(346, 246, 206, 160, 0.07, 3)}
</g>
${T(234, 138, 18, 'Merkel discs', MIDB)}
${T(234, 164, 15, 'fine touch, pressure')}
${T(234, 186, 15, 'texture')}
${T(449, 138, 18, 'Ruffini endings', MIDB)}
${T(449, 164, 15, 'skin stretch')}
${T(234, 308, 18, 'Meissner corpuscles', MIDB)}
${T(234, 334, 15, 'light touch')}
${T(234, 356, 15, 'low-frequency vibration')}
${T(449, 308, 18, 'Pacinian corpuscles', MIDB)}
${T(449, 334, 15, 'deep pressure')}
${T(449, 356, 15, 'high-frequency vibration')}
</svg>`

/* 3 — The optical path and the three focal points (lead, 1000×460) */
const eye = (cx: number, rx: number, label: string) =>
  `<ellipse cx="${cx}" cy="300" rx="${rx}" ry="70" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
<path d="M${cx} 230 A ${rx} 70 0 0 1 ${cx} 370" fill="none" stroke="currentColor" stroke-width="7"/>
${T(cx, 395, 16, 'retina')}
${T(cx, 185, 22, label, MIDB)}`

const opticsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-sen-optics')}</defs>
${LBOX(20, 35, 140, 70, 'Cornea', 'most power')}
${LBOX(178, 35, 160, 70, 'Aqueous humor', 'fluid')}
${LBOX(356, 35, 140, 70, 'Pupil', 'iris aperture')}
${LBOX(514, 35, 140, 70, 'Lens', 'fine focus')}
${LBOX(672, 35, 160, 70, 'Vitreous humor', 'gel')}
${LBOX(850, 35, 130, 70, 'Retina', 'image')}
<line x1="160" y1="70" x2="175" y2="70" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-optics)"/>
<line x1="338" y1="70" x2="353" y2="70" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-optics)"/>
<line x1="496" y1="70" x2="511" y2="70" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-optics)"/>
<line x1="654" y1="70" x2="669" y2="70" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-optics)"/>
<line x1="832" y1="70" x2="847" y2="70" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-optics)"/>
<g class="fig-muted">
${T(500, 136, 18, 'accommodation for NEAR: ciliary muscle contracts → zonules slacken → lens rounds up and gains power')}
<line x1="20" y1="152" x2="980" y2="152" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
</g>
${eye(170, 100, 'Normal')}
${eye(510, 115, 'Myopia — eye too long')}
${eye(830, 85, 'Hyperopia — eye too short')}
<g class="fig-accent">
<line x1="30" y1="278" x2="88" y2="278" stroke="currentColor" stroke-width="2.5"/>
<line x1="30" y1="322" x2="88" y2="322" stroke="currentColor" stroke-width="2.5"/>
<line x1="88" y1="278" x2="270" y2="300" stroke="currentColor" stroke-width="2.5"/>
<line x1="88" y1="322" x2="270" y2="300" stroke="currentColor" stroke-width="2.5"/>
<line x1="348" y1="278" x2="413" y2="278" stroke="currentColor" stroke-width="2.5"/>
<line x1="348" y1="322" x2="413" y2="322" stroke="currentColor" stroke-width="2.5"/>
<line x1="413" y1="278" x2="622" y2="306" stroke="currentColor" stroke-width="2.5"/>
<line x1="413" y1="322" x2="622" y2="294" stroke="currentColor" stroke-width="2.5"/>
<line x1="698" y1="278" x2="763" y2="278" stroke="currentColor" stroke-width="2.5"/>
<line x1="698" y1="322" x2="763" y2="322" stroke="currentColor" stroke-width="2.5"/>
<line x1="763" y1="278" x2="912" y2="295" stroke="currentColor" stroke-width="2.5"/>
<line x1="763" y1="322" x2="912" y2="305" stroke="currentColor" stroke-width="2.5"/>
<line x1="912" y1="295" x2="960" y2="300" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 5"/>
<line x1="912" y1="305" x2="960" y2="300" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 5"/>
<circle cx="270" cy="300" r="6" fill="currentColor"/>
${T(170, 425, 18, 'focus ON the retina')}
</g>
<g class="fig-accent-2">
<circle cx="575" cy="300" r="6" fill="currentColor"/>
<circle cx="960" cy="300" r="6" fill="currentColor"/>
${T(575, 340, 16, 'focus in front')}
${T(950, 345, 15, 'focus behind')}
</g>
<g class="fig-accent">
<path d="M358 266 Q 366 300 358 334 M378 266 Q 370 300 378 334 M358 266 L378 266 M358 334 L378 334" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M718 266 Q 704 300 718 334 M718 266 Q 732 300 718 334" fill="none" stroke="currentColor" stroke-width="3"/>
${T(510, 425, 18, 'fix: diverging (concave) lens')}
${T(830, 425, 18, 'fix: converging (convex) lens')}
</g>
</svg>`

/* 4 — Phototransduction: dark current vs light (lead, 1000×460) */
const ptRow = (x: number, y: number, label: string, muted = false) =>
  `${BOX(x, y, 440, 54, muted ? 0.03 : 0.08, 2.5, muted ? '7 6' : '')}${T(x + 220, y + 34, 20, label, muted ? MID : MIDB)}`
const ptArrow = (x: number, y: number, id: string) =>
  `<line x1="${x}" y1="${y + 56}" x2="${x}" y2="${y + 74}" stroke="currentColor" stroke-width="2.5" marker-end="url(#${id})"/>`

const phototransductionSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent">
<defs>${ARROW('arr-sen-pt-b')}</defs>
${T(250, 52, 26, 'DARK', MIDB)}
${ptRow(30, 78, 'no photon — rhodopsin at rest', true)}
${ptRow(30, 152, 'cGMP stays HIGH')}
${ptRow(30, 226, 'Na⁺ channels stay OPEN — the dark current')}
${ptRow(30, 300, 'DEPOLARIZED (≈ −40 mV)')}
${ptRow(30, 374, 'glutamate release HIGH')}
${ptArrow(250, 78, 'arr-sen-pt-b')}${ptArrow(250, 152, 'arr-sen-pt-b')}${ptArrow(250, 226, 'arr-sen-pt-b')}${ptArrow(250, 300, 'arr-sen-pt-b')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-sen-pt-r')}</defs>
${T(750, 52, 26, 'LIGHT', MIDB)}
${ptRow(530, 78, 'photon: 11-cis → all-trans retinal')}
${ptRow(530, 152, 'transducin → PDE hydrolyzes cGMP → LOW')}
${ptRow(530, 226, 'Na⁺ channels CLOSE')}
${ptRow(530, 300, 'HYPERPOLARIZED')}
${ptRow(530, 374, 'glutamate release DROPS')}
${ptArrow(750, 78, 'arr-sen-pt-r')}${ptArrow(750, 152, 'arr-sen-pt-r')}${ptArrow(750, 226, 'arr-sen-pt-r')}${ptArrow(750, 300, 'arr-sen-pt-r')}
</g>
<g class="fig-muted">
<defs>${ARROW('arr-sen-pt-m')}</defs>
<line x1="478" y1="253" x2="522" y2="253" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-pt-m)"/>
${T(500, 240, 15, 'light')}
${T(500, 452, 18, 'the photoreceptor is a dark detector: light is signalled by LESS glutamate, read by the bipolar cells')}
</g>
</svg>`

/* 5 — Retinal circuitry: light enters from the ganglion side; rods converge, cones do not (lead, 1000×460) */
const cell = (x: number, y: number, w: number, h: number, label: string, fs = 18) => `${BOX(x, y, w, h, 0.08, 2.5)}${T(x + w / 2, y + h / 2 + fs * 0.36, fs, label)}`

const retinaSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-sen-ret')}</defs>
${T(235, 40, 20, 'Ganglion cells', MIDB)}
${T(435, 40, 20, 'Bipolar cells', MIDB)}
${T(635, 40, 20, 'Photoreceptors', MIDB)}
<g class="fig-muted">
<defs>${ARROW('arr-sen-ret-m')}</defs>
${T(335, 66, 16, 'amacrine cells (lateral)')}
${T(535, 66, 16, 'horizontal cells (lateral)')}
<line x1="30" y1="250" x2="700" y2="250" stroke="currentColor" stroke-width="3" stroke-dasharray="10 8" marker-end="url(#arr-sen-ret-m)"/>
${T(390, 236, 18, 'light crosses the inner layers first and is absorbed at the back')}
${T(235, 436, 18, 'the only cells that fire action potentials')}
${T(535, 436, 18, 'graded potentials only')}
</g>
<g class="fig-accent">
${cell(570, 92, 130, 28, 'rod', 16)}
${cell(570, 128, 130, 28, 'rod', 16)}
${cell(570, 164, 130, 28, 'rod', 16)}
${cell(370, 112, 130, 56, 'bipolar')}
${cell(170, 112, 130, 56, 'ganglion')}
<defs>${ARROW('arr-sen-ret-b')}</defs>
<line x1="568" y1="106" x2="506" y2="136" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-ret-b)"/>
<line x1="568" y1="142" x2="506" y2="140" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-ret-b)"/>
<line x1="568" y1="178" x2="506" y2="144" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-ret-b)"/>
<line x1="368" y1="140" x2="306" y2="140" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-ret-b)"/>
<line x1="168" y1="140" x2="80" y2="140" stroke="currentColor" stroke-width="3" marker-end="url(#arr-sen-ret-b)"/>
${T(118, 128, 15, 'optic nerve')}
${T(745, 118, 20, 'Rods: convergence', B)}
${T(745, 143, 18, 'many rods → one ganglion', '')}
${T(745, 166, 18, 'sensitivity ↑ acuity ↓', '')}
${T(745, 189, 18, 'periphery · dim light', '')}
</g>
<g class="fig-accent-2">
${cell(570, 322, 130, 56, 'cone')}
${cell(370, 322, 130, 56, 'bipolar')}
${cell(170, 322, 130, 56, 'ganglion')}
<defs>${ARROW('arr-sen-ret-r')}</defs>
<line x1="568" y1="350" x2="506" y2="350" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-ret-r)"/>
<line x1="368" y1="350" x2="306" y2="350" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-ret-r)"/>
<line x1="168" y1="350" x2="80" y2="350" stroke="currentColor" stroke-width="3" marker-end="url(#arr-sen-ret-r)"/>
${T(118, 338, 15, 'optic nerve')}
${T(745, 328, 20, 'Cones: 1 : 1 (fovea)', B)}
${T(745, 353, 18, 'private line → acuity', '')}
${T(745, 376, 18, 'colour · bright light', '')}
${T(745, 399, 18, 'look straight at it', '')}
</g>
</svg>`

/* 6 — The sound pathway as a box chain, outer → middle → inner (lead, 1000×460) */
const soundSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-sen-snd')}</defs>
<g class="fig-muted">
<defs>${ARROW('arr-sen-snd-m')}</defs>
${T(290, 42, 18, 'OUTER EAR', MIDB)}
${T(752, 42, 18, 'MIDDLE EAR — ossicles', MIDB)}
${T(500, 200, 18, 'INNER EAR — cochlea', MIDB)}
<line x1="548" y1="42" x2="548" y2="126" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
${T(500, 152, 17, 'impedance matching: big eardrum → small oval window raises pressure (P = F/A); the ossicles add leverage')}
<path d="M935 90 L985 90 L985 178 L90 178 L90 210" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-snd-m)"/>
${T(500, 440, 20, '→ cochlear nuclei → medial geniculate nucleus (MGN) → auditory cortex, temporal lobe')}
</g>
${LBOX(35, 62, 100, 56, 'Pinna', '', 20)}
${LBOX(160, 62, 160, 56, 'Auditory canal', '', 20)}
${LBOX(345, 62, 200, 56, 'Tympanic membrane', '', 19)}
${LBOX(570, 62, 110, 56, 'Malleus', '', 20)}
${LBOX(705, 62, 95, 56, 'Incus', '', 20)}
${LBOX(825, 62, 110, 56, 'Stapes', '', 20)}
<line x1="135" y1="90" x2="157" y2="90" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-snd)"/>
<line x1="320" y1="90" x2="342" y2="90" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-snd)"/>
<line x1="545" y1="90" x2="567" y2="90" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-snd)"/>
<line x1="680" y1="90" x2="702" y2="90" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-snd)"/>
<line x1="800" y1="90" x2="822" y2="90" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-snd)"/>
${LBOX(25, 214, 130, 56, 'Oval window', '', 18)}
${LBOX(180, 214, 130, 56, 'Perilymph', '', 18)}
${LBOX(335, 214, 180, 56, 'Basilar membrane', '', 18)}
${LBOX(695, 214, 160, 56, 'Spiral ganglion', '', 18)}
${LBOX(880, 214, 100, 56, 'CN VIII', '', 18)}
<g class="fig-accent-2">
<defs>${ARROW('arr-sen-snd-r')}</defs>
${LBOX(540, 214, 130, 56, 'Hair cells', '', 18)}
<line x1="605" y1="272" x2="605" y2="296" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-snd-r)"/>
${T(605, 322, 20, 'K⁺ flows IN → depolarization', MIDB)}
${T(605, 346, 17, 'endolymph is K⁺-rich, so opening the mechanically gated channels lets K⁺ rush in')}
${T(605, 368, 17, '(the reverse of the usual neuron story) → transmitter onto the spiral ganglion')}
</g>
<line x1="155" y1="242" x2="177" y2="242" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-snd)"/>
<line x1="310" y1="242" x2="332" y2="242" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-snd)"/>
<line x1="515" y1="242" x2="537" y2="242" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-snd)"/>
<line x1="670" y1="242" x2="692" y2="242" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-snd)"/>
<line x1="855" y1="242" x2="877" y2="242" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-snd)"/>
<g class="fig-accent">
<defs>${ARROW('arr-sen-snd-b')}</defs>
<line x1="90" y1="272" x2="90" y2="296" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-snd-b)"/>
${T(40, 322, 17, 'round window bulges OUT', B)}
${T(40, 344, 17, 'as the oval window is pushed in', '')}
${T(40, 366, 17, '(incompressible fluid needs relief)', '')}
</g>
<g class="fig-muted">
${T(440, 408, 17, 'basilar membrane vibrates → stereocilia shear against the tectorial membrane → channels open')}
</g>
</svg>`

/* 7 — The vestibular system: rotation vs linear acceleration (replace-table, 560×440) */
const vestibularSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<defs>${ARROW('arr-sen-vest-m')}</defs>
<line x1="12" y1="222" x2="548" y2="222" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<path d="M110 175 A 57 57 0 0 0 167 118" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 5" marker-end="url(#arr-sen-vest-m)"/>
${T(110, 206, 13, 'endolymph lags the other way')}
<line x1="150" y1="318" x2="120" y2="318" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 5" marker-end="url(#arr-sen-vest-m)"/>
${T(134, 334, 12, 'otoliths lag')}
${T(225, 200, 14, 'steady spin: fluid catches up, signal fades', '')}
${T(225, 406, 14, 'utricle ≈ horizontal · saccule ≈ vertical', '')}
</g>
<circle cx="110" cy="118" r="68" fill="none" stroke="currentColor" stroke-width="3"/>
<circle cx="110" cy="118" r="46" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent">
<defs>${ARROW('arr-sen-vest-b')}</defs>
<rect x="104" y="52" width="12" height="36" rx="5" fill="currentColor"/>
${T(126, 100, 13, 'cupula', '')}
<path d="M110 36 A 82 82 0 0 1 192 118" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-sen-vest-b)"/>
${T(104, 30, 13, 'head rotates', END)}
</g>
${T(225, 52, 18, 'Semicircular canals', B)}
${T(225, 74, 15, 'three, mutually orthogonal', '')}
<g class="fig-accent">${T(225, 104, 17, 'ROTATIONAL acceleration', B)}</g>
${T(225, 128, 15, 'endolymph lags behind the head', '')}
${T(225, 150, 15, '→ deflects the cupula over the crista', '')}
${T(225, 172, 15, '→ bends the hair cells beneath', '')}
<g class="fig-accent-2">
<defs>${ARROW('arr-sen-vest-r')}</defs>
<line x1="40" y1="296" x2="112" y2="296" stroke="currentColor" stroke-width="3" marker-end="url(#arr-sen-vest-r)"/>
${T(75, 284, 13, 'head accelerates')}
<circle cx="50" cy="348" r="7" fill="currentColor"/><circle cx="74" cy="346" r="7" fill="currentColor"/><circle cx="98" cy="348" r="7" fill="currentColor"/><circle cx="122" cy="346" r="7" fill="currentColor"/><circle cx="146" cy="348" r="7" fill="currentColor"/>
${T(176, 352, 12, 'otoliths', '')}
</g>
<rect x="30" y="356" width="140" height="26" rx="6" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
${T(100, 374, 13, 'gel layer')}
<path d="M42 382 L42 398 M58 382 L58 398 M74 382 L74 398 M90 382 L90 398 M106 382 L106 398 M122 382 L122 398 M138 382 L138 398 M154 382 L154 398" stroke="currentColor" stroke-width="2.5"/>
<rect x="30" y="398" width="140" height="30" rx="6" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
${T(100, 418, 13, 'hair cells')}
${T(225, 258, 18, 'Utricle &amp; saccule', B)}
${T(225, 280, 15, 'the otolithic organs', '')}
<g class="fig-accent-2">${T(225, 310, 17, 'LINEAR acceleration + static tilt', B)}</g>
${T(225, 334, 15, 'dense CaCO₃ otoliths ride on a gel', '')}
${T(225, 356, 15, 'inertia (or gravity) shears the gel', '')}
${T(225, 378, 15, '→ bends the hair cells beneath', '')}
</svg>`

/* 8 — Gustation: five tastes, two transduction strategies (replace-table, 560×440) */
const tasteSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-accent">
${BOX(12, 10, 262, 54, 0.12, 3)}
${T(143, 34, 18, 'GPCR', MIDB)}
${T(143, 55, 14, 'second-messenger cascade')}
${BOX(12, 78, 262, 70, 0.06, 2.5)}
${T(143, 108, 18, 'Sweet', MIDB)}
${T(143, 132, 14, 'sugars')}
${BOX(12, 160, 262, 70, 0.06, 2.5)}
${T(143, 190, 18, 'Umami', MIDB)}
${T(143, 214, 14, 'glutamate')}
<path d="M274 90 L292 90 L292 218 L274 218 M292 154 L306 154" fill="none" stroke="currentColor" stroke-width="2.5"/>
${BOX(12, 242, 262, 90, 0.06, 2.5)}
${T(143, 275, 18, 'Bitter', MIDB)}
${T(143, 298, 14, 'a separate, LARGE receptor family')}
${T(143, 318, 14, 'many receptors = broad poison alarm')}
</g>
<g class="fig-accent-2">
${BOX(300, 10, 248, 54, 0.12, 3)}
${T(424, 34, 18, 'ION CHANNEL', MIDB)}
${T(424, 55, 14, 'the ion itself depolarizes the cell')}
${BOX(300, 78, 248, 112, 0.06, 2.5)}
${T(424, 118, 18, 'Salty', MIDB)}
${T(424, 144, 14, 'Na⁺ enters directly')}
${T(424, 166, 14, 'through a channel')}
${BOX(300, 220, 248, 112, 0.06, 2.5)}
${T(424, 260, 18, 'Sour', MIDB)}
${T(424, 286, 14, 'H⁺ acts through')}
${T(424, 308, 14, 'proton-sensitive channels')}
</g>
<g class="fig-muted">
${T(308, 158, 13, 'shared', '')}
${T(308, 172, 13, 'subunit', '')}
<line x1="12" y1="352" x2="548" y2="352" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
${T(280, 380, 15, 'taste cells are modified epithelial cells, not neurons')}
${T(280, 404, 15, 'every taste is sensed across the whole tongue — no tongue map')}
${T(280, 428, 15, 'the gustatory pathway DOES relay through the thalamus')}
</g>
</svg>`

/* 9 — Four senses, one relay rule: only olfaction skips the thalamus (lead, 1000×460) */
const relayRow = (y: number, sense: string, receptor: string, nerve: string, relay: string, cortex: string, cortex2 = '') =>
  `${LBOX(15, y, 225, 60, sense, receptor, 19)}
${LBOX(275, y, 205, 60, nerve, '', 19)}
${LBOX(525, y, 180, 60, relay, '', 19)}
${LBOX(740, y, 245, 60, cortex, cortex2, 19)}
<line x1="240" y1="${y + 30}" x2="272" y2="${y + 30}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-relay)"/>
<line x1="480" y1="${y + 30}" x2="522" y2="${y + 30}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-relay)"/>
<line x1="705" y1="${y + 30}" x2="737" y2="${y + 30}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-relay)"/>`

const relaySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-sen-relay')}</defs>
<g class="fig-muted">
<rect x="510" y="22" width="210" height="428" rx="16" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
${T(615, 50, 18, 'THALAMUS', MIDB)}
${T(127, 50, 16, 'receptor')}
${T(377, 50, 16, 'first station')}
${T(862, 50, 16, 'cortex')}
</g>
${relayRow(66, 'VISION', 'retina', 'optic nerve', 'LGN', 'occipital cortex (V1)')}
${relayRow(158, 'AUDITION', 'cochlear hair cells', 'CN VIII', 'MGN', 'temporal cortex')}
${relayRow(250, 'TOUCH · TASTE', 'skin, taste buds', 'cord / brainstem', 'thalamic relay', 'somatosensory, gustatory')}
<g class="fig-accent-2">
<defs>${ARROW('arr-sen-relay-r')}</defs>
${LBOX(15, 362, 225, 60, 'OLFACTION', 'olfactory neurons (GPCR)', 19)}
${LBOX(275, 362, 205, 60, 'olfactory bulb', '', 19)}
${LBOX(740, 362, 245, 60, 'olfactory cortex', '+ amygdala, hippocampus', 19)}
<line x1="240" y1="392" x2="272" y2="392" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sen-relay-r)"/>
<path d="M480 392 C 560 392, 590 336, 615 336 C 640 336, 670 392, 737 392" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-sen-relay-r)"/>
<rect x="525" y="362" width="180" height="60" rx="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 6"/>
${T(615, 399, 19, 'bypassed', MIDB)}
</g>
</svg>`

export const mcatSensoryFigures: DeckFigurePlacement[] = [
  {
    at: 'Adaptation: Tonic vs. Phasic',
    mode: 'lead',
    figure: {
      svg: adaptationSvg,
      alt:
        'A stimulus trace steps up at onset, stays constant, and steps down at offset. Below it two recordings: a tonic (slowly adapting) receptor fires action potentials at a steady rate for the whole hold, coding sustained intensity (nociceptors, Merkel discs, muscle spindles). A phasic (rapidly adapting) receptor fires a short burst at onset and another at offset and is silent in between, coding change (Pacinian corpuscles, olfactory neurons). Every spike is the same height: intensity is coded by firing frequency and recruitment, not spike size.',
      caption: 'Tonic receptors report that a stimulus is still there; phasic receptors report that it changed (illustrative spike trains).',
    },
    blocks: ['- Pain must not adapt away → nociceptors are tonic; a Pacinian corpuscle falls silent during a steady hold'],
  },
  {
    at: 'The Somatosensory Roster',
    mode: 'replace-table',
    figure: {
      svg: rosterSvg,
      alt:
        'A two-by-two grid of skin mechanoreceptors. Columns: superficial versus deep. Rows: slow-adapting (tonic, sustained) versus rapid-adapting (phasic, change). Slow and superficial: Merkel discs, fine touch, pressure and texture. Slow and deep: Ruffini endings, skin stretch. Rapid and superficial: Meissner corpuscles, light touch and low-frequency vibration. Rapid and deep: Pacinian corpuscles, deep pressure and high-frequency vibration. Below the grid: free nerve endings sense pain and temperature in all layers and are mostly slow-adapting.',
    },
    blocks: [
      '- Slow (tonic) = **Merkel** + **Ruffini**; rapid (phasic) = **Meissner** + **Pacinian**',
      '- Superficial = Merkel + Meissner; deep = Ruffini + Pacinian',
      '- Pacinian: deep, rapid, high-frequency vibration — the 250 Hz detector',
      '- Free nerve endings: pain and temperature in every layer, mostly slow',
    ],
  },
  {
    at: 'The Optical Path',
    mode: 'lead',
    figure: {
      svg: opticsSvg,
      alt:
        'Top: the light path as six boxes in order — cornea (most refractive power), aqueous humor, pupil (the iris aperture), lens (adjustable fine focus), vitreous humor, retina — with a note that accommodation for near objects contracts the ciliary muscle, slackens the zonules and rounds the lens. Bottom: three schematic eyes with parallel rays entering. Normal: rays focus on the retina. Myopia, eye too long: rays focus in front of the retina (red dot); fixed with a diverging, concave lens. Hyperopia, eye too short: rays reach the retina before converging, focal point behind it (red dot); fixed with a converging, convex lens.',
      caption: 'The cornea does most of the bending, the lens does the fine focus; where the rays meet relative to the retina names the error and its lens.',
    },
    blocks: ['- Too long or too strong → focus in front → **concave** lens; too short → focus behind → **convex** lens'],
  },
  {
    at: 'Phototransduction: The Dark Current',
    mode: 'lead',
    figure: {
      svg: phototransductionSvg,
      alt:
        'Two parallel cascades. Dark (blue): no photon, rhodopsin at rest; cGMP stays high; cGMP-gated sodium channels stay open (the dark current); the photoreceptor is depolarized at about minus 40 millivolts; glutamate release is high. Light (red): a photon converts 11-cis-retinal to all-trans-retinal in rhodopsin; transducin activates phosphodiesterase, which hydrolyzes cGMP so it falls; sodium channels close; the cell hyperpolarizes; glutamate release drops. Footnote: the photoreceptor is a dark detector — light is signalled by less glutamate, read by the bipolar cells.',
      caption: 'The dark current, step by step: light closes channels, so the photoreceptor hyperpolarizes and releases LESS glutamate.',
    },
    blocks: ['- Dark = depolarized, releasing glutamate; light = hyperpolarized, quieter — the direction examiners test'],
  },
  {
    at: 'Retinal Circuitry and the Visual Pathway',
    mode: 'lead',
    figure: {
      svg: retinaSvg,
      alt:
        'Schematic retina. Light enters from the left, crosses the ganglion and bipolar layers, and is absorbed by the photoreceptors at the back. Signals run the other way: photoreceptor to bipolar cell to ganglion cell, whose axon leaves as the optic nerve. Top circuit (blue): three rods converge onto one bipolar cell and one ganglion cell — pooling gives sensitivity in dim light but low acuity. Bottom circuit (red): one cone, one bipolar, one ganglion — the fovea\'s private line gives high acuity in bright light. Amacrine and horizontal cells provide lateral processing. Only ganglion cells fire action potentials; photoreceptors and bipolar cells use graded potentials.',
      caption: 'The vertical path is photoreceptor → bipolar → ganglion; convergence trades acuity for sensitivity.',
    },
    blocks: ['- Only **ganglion cells** fire action potentials; nasal fibres cross at the chiasm → LGN → V1 (occipital)'],
  },
  {
    at: 'The Sound Pathway, In Order',
    mode: 'lead',
    figure: {
      svg: soundSvg,
      alt:
        'The sound pathway as a chain of boxes. Outer ear: pinna, auditory canal, tympanic membrane. Middle ear: malleus, incus, stapes; a note explains impedance matching — the eardrum\'s area is much larger than the oval window\'s, so the same force gives higher pressure (P = F over A) and the ossicles add leverage. Inner ear (cochlea): oval window, perilymph, basilar membrane, hair cells (highlighted), spiral ganglion, cranial nerve eight. Two callouts: the round window bulges out as the oval window is pushed in; hair cells depolarize by potassium flowing IN because the endolymph is potassium-rich, the reverse of the usual neuron story. Footer: cochlear nuclei, medial geniculate nucleus, auditory cortex in the temporal lobe.',
      caption: 'Air to bone to fluid to hair cell: the mechanical chain, with the two details examiners exploit.',
    },
    blocks: ['- Hair cells depolarize by **K⁺ influx** from K⁺-rich endolymph; the round window is the pressure-relief valve'],
  },
  {
    at: 'The Vestibular System',
    mode: 'replace-table',
    figure: {
      svg: vestibularSvg,
      alt:
        'Two panels. Top: a ring-shaped semicircular canal with a cupula (blue bar) in its wall; an arrow shows the head rotating one way while a dashed arrow shows the endolymph lagging the other way, deflecting the cupula over the crista and bending the hair cells beneath — rotational acceleration; during constant-speed spin the fluid catches up and the signal fades. Bottom: a shelf of hair cells under a gel layer topped with dense calcium carbonate otoliths; as the head accelerates linearly (red arrow) the heavy otoliths lag and shear the gel, bending the hair cells — linear acceleration and static tilt. Utricle is roughly horizontal (a car speeding up), saccule roughly vertical (an elevator).',
    },
    blocks: [
      '- Same transducer (hair cells), different mechanical attachment',
      '- **Canals**: rotation — endolymph lags, cupula bends; the signal fades at constant speed',
      '- **Utricle / saccule**: linear acceleration + head tilt — otoliths shear the hair cells',
      '- Utricle ≈ horizontal (car speeding up), saccule ≈ vertical (elevator)',
    ],
  },
  {
    at: 'Gustation: Two Transduction Strategies',
    mode: 'replace-table',
    figure: {
      svg: tasteSvg,
      alt:
        'Five tastes sorted by transduction mechanism. GPCR column (blue): sweet (sugars), umami (glutamate) — these two share a receptor subunit — and bitter, which uses a separate, large receptor family so bitterness works as a broad poison alarm. Ion-channel column (red): salty, where sodium enters directly through a channel, and sour, where protons act through proton-sensitive channels. Footer: taste cells are modified epithelial cells, not neurons; every taste is sensed across the whole tongue (no tongue map); the gustatory pathway does relay through the thalamus.',
    },
    blocks: [
      '- **GPCR**: sweet, umami, bitter — a second-messenger cascade',
      '- **Ion channel**: salty (Na⁺ in) and sour (H⁺) depolarize the cell directly',
      '- Sweet and umami share a receptor subunit; bitter has MANY receptors (poison alarm)',
      '- Taste cells are epithelial, not neurons; gustation DOES relay through the thalamus',
    ],
  },
  {
    at: 'Olfaction: The Rule-Breaker',
    mode: 'lead',
    figure: {
      svg: relaySvg,
      alt:
        'Four sensory pathways drawn as rows of boxes from receptor to cortex, with a shaded thalamus column in the middle. Vision: retina, optic nerve, LGN, occipital cortex (V1). Audition: cochlear hair cells, CN VIII, MGN, temporal cortex. Touch and taste: skin and taste buds, spinal cord or brainstem, a thalamic relay, somatosensory and gustatory cortex. Olfaction (red): olfactory neurons (GPCRs), olfactory bulb, then an arrow arches over a dashed empty thalamus box labelled bypassed, straight to olfactory cortex plus amygdala and hippocampus.',
      caption: 'Every sense relays through the thalamus on its way to cortex — except smell, which goes bulb → cortex and limbic system directly.',
    },
    blocks: ['- One receptor gene per olfactory neuron; an odour is the **combination** of receptors it activates'],
  },
]
