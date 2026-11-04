import type { DeckFigurePlacement } from './index'
import { SVG_OPEN, ARROW, T, SUB, ARR, DIM, RECT } from './mcat-cp-fluids-waves'

/**
 * Fluids (MCAT C/P, topic split Nov 2026) — extra deck figures for sections
 * the original Fluids & Waves figures do not cover (Pressure, Pascal,
 * Archimedes, Continuity, Bernoulli and Viscosity come from
 * mcat-cp-fluids-waves.ts and are not repeated here).
 *
 * Every drawing below is ours, drawn from the concept with the shared helpers
 * in mcat-cp-fluids-waves.ts so the style matches: a specific-gravity scale
 * beside float / hover / sink blocks, a spring scale and two hydrometers, a
 * mercury barometer beside an open U-tube manometer, water and mercury in
 * glass tubes of two widths, three traces across the systemic vessel types,
 * a short and a long stenosis with their pressure traces, and an IV bag on a
 * pole. No textbook, prep-company or AAMC figure was copied. Curve shapes are
 * illustrative; the only numbers drawn are the lesson's own: the SG table
 * (ice 0.92, water 1.00, seawater 1.03, blood 1.05, mercury 13.6) and SG 0.8 =
 * 800 kg/m³ (Part 1, Density); 760 mm and ≈ 10.3 m of water (Part 1,
 * Barometers); aorta 3 cm² at 30 cm/s and capillaries 3000 cm² at 0.03 cm/s
 * (Part 3, Why Capillary Blood Crawls), MAP ≈ 93 mmHg, arterioles ≈ 90 → 35
 * mmHg and CO ≈ 5 L/min (Part 4, Circulation); the IV bag's 1.0 m → 10⁴ Pa ≈
 * 75 mmHg, 0.5 m → ≈ 38 mmHg and venous ≈ 10 mmHg (Part 1 worked example).
 *
 * Colours as in mcat-cp-fluids-waves.ts: fluid BLUE (fig-accent); velocities,
 * pressure arrows and the "answer" annotations RED (fig-accent-2); mercury,
 * guides and reference lines grey (fig-muted). Each marker is defined inside
 * the coloured group that uses it; ids are unique in this file
 * (arr-fl-<figure>-<colour>).
 */

/** A smooth curve (Catmull–Rom → cubic Bézier) through the points. */
const smooth = (pts: [number, number][]) => {
  let d = `M${pts[0][0]} ${pts[0][1]}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] ?? p2
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += ` C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2[0]} ${p2[1]}`
  }
  return d
}

/* 1 — Density and specific gravity: the SG scale, and float / hover / sink in water (lead, 1000×460) */
const sgX = (sg: number) => 70 + (sg - 0.85) * 1200
const SG_ABOVE: [string, string, number][] = [
  ['ice', '0.92', 0.92],
  ['water', '1.00', 1.0],
  ['blood', '1.05', 1.05],
]
const densitySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(250, 44, 24, `SG = ρ / ${SUB('ρ', 'water', 24)}`, 'middle', '700')}
${T(250, 72, 16, 'a ratio of two densities — no units', 'middle')}
<g class="fig-accent"><rect x="70" y="222" width="${sgX(1) - 70}" height="16" fill="currentColor" fill-opacity="0.22"/></g>
<g class="fig-accent-2"><rect x="${sgX(1)}" y="222" width="${370 - sgX(1)}" height="16" fill="currentColor" fill-opacity="0.22"/></g>
<path d="M60 230 L378 230 M402 230 L470 230" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M380 242 L388 218 M392 242 L400 218" fill="none" stroke="currentColor" stroke-width="2"/>
${SG_ABOVE.map(([n, v, sg]) => `<circle cx="${sgX(sg)}" cy="230" r="5" fill="currentColor"/>${T(sgX(sg), 182, 16, n, 'middle', sg === 1 ? '700' : '400')}${T(sgX(sg), 204, 16, v, 'middle', sg === 1 ? '700' : '400')}`).join('')}
<circle cx="${sgX(1.03)}" cy="230" r="5" fill="currentColor"/>
${T(sgX(1.03), 266, 16, 'seawater', 'middle')}${T(sgX(1.03), 286, 16, '1.03', 'middle')}
<g class="fig-muted"><circle cx="440" cy="230" r="7" fill="currentColor" stroke="currentColor" stroke-width="1"/></g>
${T(440, 182, 16, 'mercury', 'middle')}${T(440, 204, 16, '13.6', 'middle', '700')}
<g class="fig-muted">${T(440, 266, 14, '(off scale)', 'middle')}</g>
<g class="fig-accent">${T(150, 330, 17, 'SG &lt; 1: less dense', 'middle', '700')}</g>
<g class="fig-accent-2">${T(330, 330, 17, 'SG &gt; 1: denser', 'middle', '700')}</g>
${T(250, 378, 16, 'SG 0.8 = 80 % as dense as water = 800 kg/m³', 'middle')}
${T(250, 404, 16, 'SG = the density in g/cm³ (water: 1 g/cm³ = 1000 kg/m³)', 'middle')}
<g class="fig-muted">${T(250, 434, 15, 'memorize water (1.00) and mercury (13.6)', 'middle')}</g>
${T(750, 44, 22, 'In water: compare the SG with 1', 'middle', '700')}
<g class="fig-accent"><rect x="540" y="180" width="420" height="210" fill="currentColor" fill-opacity="0.12"/><line x1="540" y1="180" x2="960" y2="180" stroke="currentColor" stroke-width="2"/></g>
<path d="M538 150 L538 392 L962 392 L962 150" fill="none" stroke="currentColor" stroke-width="3"/>
${RECT(587, 174, 76, 76, 2.5, 0.18, 6)}
${RECT(712, 258, 76, 76, 2.5, 0.18, 6)}
${RECT(837, 314, 76, 76, 2.5, 0.18, 6)}
<g class="fig-accent">${T(625, 108, 18, 'floats', 'middle', '700')}</g>
${T(625, 132, 15, 'SG 0.92 (ice)', 'middle')}
${T(750, 108, 18, 'hovers', 'middle', '700')}
${T(750, 132, 15, 'SG = 1', 'middle')}
<g class="fig-accent-2">${T(875, 108, 18, 'sinks', 'middle', '700')}</g>
${T(875, 132, 15, 'SG &gt; 1', 'middle')}
${T(750, 426, 16, 'SG &lt; 1 floats · SG = 1 hovers · SG &gt; 1 sinks', 'middle', '700')}
<g class="fig-muted">${T(750, 450, 15, 'weight W = mg = ρVg', 'middle')}</g>
</svg>`

/* 1b — Specific-gravity reasoning: weighing in air and water; the hydrometer (lead, 1000×460) */
const ROCK = (cx: number, cy: number) =>
  `<path d="M${cx - 28} ${cy - 6} L${cx - 14} ${cy - 24} L${cx + 16} ${cy - 22} L${cx + 30} ${cy - 2} L${cx + 20} ${cy + 22} L${cx - 18} ${cy + 22} z" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2.5"/>`
const SCALE = (cx: number, top: number, needle: number) =>
  `<line x1="${cx}" y1="92" x2="${cx}" y2="${top}" stroke="currentColor" stroke-width="2"/>
${RECT(cx - 20, top, 40, 74, 2.5, 0, 6)}
<g class="fig-muted">${[0, 1, 2, 3, 4].map((i) => `<line x1="${cx - 12}" y1="${top + 12 + 12 * i}" x2="${cx - 4}" y2="${top + 12 + 12 * i}" stroke="currentColor" stroke-width="1.5"/>`).join('')}</g>
<g class="fig-accent-2"><path d="M${cx - 14} ${needle} L${cx + 10} ${needle}" fill="none" stroke="currentColor" stroke-width="3"/></g>`
/** A hydrometer whose bulb centre sits at y = cy: weighted bulb, narrow stem with a scale. */
const HYDRO = (cx: number, cy: number) =>
  `<ellipse cx="${cx}" cy="${cy}" rx="22" ry="42" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="${cx}" cy="${cy + 26}" r="11" fill="currentColor" fill-opacity="0.7"/>
<rect x="${cx - 7}" y="${cy - 172}" width="14" height="${132}" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted">${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<line x1="${cx - 7}" y1="${cy - 160 + 15 * i}" x2="${cx + (i % 2 ? 0 : 4)}" y2="${cy - 160 + 15 * i}" stroke="currentColor" stroke-width="1.5"/>`).join('')}</g>`
const sgReasoningSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(230, 44, 22, 'Weigh it in air, then in water', 'middle', '700')}
<line x1="70" y1="92" x2="400" y2="92" stroke="currentColor" stroke-width="4"/>
${SCALE(140, 104, 160)}
${ROCK(140, 238)}
<line x1="140" y1="178" x2="140" y2="214" stroke="currentColor" stroke-width="2"/>
${T(172, 150, 18, 'W', 'start', '700')}
${T(140, 300, 15, 'in air', 'middle')}
<g class="fig-accent"><rect x="252" y="230" width="156" height="98" fill="currentColor" fill-opacity="0.14"/><line x1="252" y1="230" x2="408" y2="230" stroke="currentColor" stroke-width="2"/></g>
<path d="M250 200 L250 330 L410 330 L410 200" fill="none" stroke="currentColor" stroke-width="3"/>
${SCALE(330, 104, 136)}
<line x1="330" y1="178" x2="330" y2="256" stroke="currentColor" stroke-width="2"/>
${ROCK(330, 280)}
${T(362, 136, 18, SUB('W', 'app', 18, ' (less)'), 'start', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-fl-sg-b')}</defs>
${ARR(388, 304, 388, 254, 'arr-fl-sg-b', 3.5)}
${T(420, 286, 16, SUB('F', 'B', 16), 'start', '700')}
</g>
${T(230, 382, 20, `SG = W / ${SUB('F', 'B', 20, ' = W / (W − ')}${SUB('W', 'app', 20, ')')}`, 'middle', '700')}
<g class="fig-muted">${T(230, 412, 15, 'how Archimedes tested a crown without melting it', 'middle')}</g>
<g class="fig-muted"><line x1="480" y1="30" x2="480" y2="420" stroke="currentColor" stroke-width="1.5"/></g>
${T(740, 44, 22, 'Hydrometer: rides HIGHER in a denser liquid', 'middle', '700')}
<g class="fig-accent">
<rect x="562" y="190" width="136" height="208" fill="currentColor" fill-opacity="0.12"/><line x1="562" y1="190" x2="698" y2="190" stroke="currentColor" stroke-width="2"/>
<rect x="782" y="190" width="136" height="208" fill="currentColor" fill-opacity="0.3"/><line x1="782" y1="190" x2="918" y2="190" stroke="currentColor" stroke-width="2"/>
</g>
<path d="M560 110 L560 400 L700 400 L700 110 M780 110 L780 400 L920 400 L920 110" fill="none" stroke="currentColor" stroke-width="3"/>
${HYDRO(630, 330)}${HYDRO(850, 290)}
<g class="fig-accent-2">
<defs>${ARROW('arr-fl-sg-r')}</defs>
<line x1="640" y1="190" x2="690" y2="190" stroke="currentColor" stroke-width="3"/>
<line x1="860" y1="190" x2="910" y2="190" stroke="currentColor" stroke-width="3"/>
${ARR(945, 330, 945, 290, 'arr-fl-sg-r', 3)}
${T(940, 270, 15, 'higher', 'middle', '700')}
</g>
${T(630, 424, 16, 'water (SG 1.00)', 'middle')}
${T(850, 424, 16, 'denser liquid (higher SG)', 'middle')}
${T(740, 452, 15, 'same weight displaced ⇒ less volume ⇒ floats higher', 'middle')}
</svg>`

/* 2 — Barometer (absolute) beside an open U-tube manometer (gauge) (lead, 1000×460) */
const barometerSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(230, 40, 22, 'Mercury barometer — ABSOLUTE', 'middle', '700')}
<g class="fig-muted">
<rect x="92" y="344" width="276" height="54" fill="currentColor" fill-opacity="0.45"/>
<rect x="212" y="140" width="36" height="204" fill="currentColor" fill-opacity="0.45"/>
</g>
<path d="M90 320 L90 400 L370 400 L370 320" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M210 386 L210 72 Q230 58 250 72 L250 386" fill="none" stroke="currentColor" stroke-width="3"/>
<line x1="92" y1="344" x2="210" y2="344" stroke="currentColor" stroke-width="2"/><line x1="250" y1="344" x2="368" y2="344" stroke="currentColor" stroke-width="2"/>
${T(262, 96, 16, '≈ vacuum (P ≈ 0)', 'start', '700')}
<g class="fig-muted">
<defs>${ARROW('arr-fl-baro-m')}</defs>
<line x1="170" y1="140" x2="212" y2="140" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
${DIM(180, 143, 180, 341, 'arr-fl-baro-m', 2)}
</g>
${T(170, 236, 20, 'h', 'end', '700')}
${T(170, 260, 15, '760 mm', 'end', '700')}
${T(170, 280, 15, 'at sea level', 'end')}
<g class="fig-accent-2">
<defs>${ARROW('arr-fl-baro-r')}</defs>
${ARR(120, 292, 120, 338, 'arr-fl-baro-r', 3.5)}
${ARR(320, 292, 320, 338, 'arr-fl-baro-r', 3.5)}
${T(330, 284, 16, SUB('P', 'atm', 16), 'middle', '700')}
</g>
${T(262, 160, 17, `${SUB('ρ', 'Hg', 17, ' g h = ')}${SUB('P', 'atm', 17)}`, 'start', '700')}
${T(262, 186, 15, 'water would need ≈ 10.3 m')}
${T(262, 208, 15, 'altitude → shorter column')}
${T(262, 230, 15, 'vacuum on top ⇒ absolute')}
<g class="fig-muted"><line x1="480" y1="30" x2="480" y2="400" stroke="currentColor" stroke-width="1.5"/></g>
${T(740, 40, 22, 'Open-tube manometer — GAUGE', 'middle', '700')}
<g class="fig-muted"><circle cx="580" cy="138" r="46" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/></g>
${T(580, 134, 16, 'gas or', 'middle', '700')}${T(580, 154, 16, 'vessel: P', 'middle', '700')}
<g class="fig-accent"><path d="M670 250 L670 300 A74 74 0 0 0 818 300 L818 170 L790 170 L790 300 A46 46 0 0 1 698 300 L698 250 z" fill="currentColor" fill-opacity="0.3"/>
<line x1="670" y1="250" x2="698" y2="250" stroke="currentColor" stroke-width="2"/><line x1="790" y1="170" x2="818" y2="170" stroke="currentColor" stroke-width="2"/></g>
<path d="M626 148 L670 148 L670 300 A74 74 0 0 0 818 300 L818 90 M626 128 L698 128 L698 300 A46 46 0 0 1 790 300 L790 90" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent-2">
<defs>${ARROW('arr-fl-mano-r')}</defs>
${ARR(804, 64, 804, 100, 'arr-fl-mano-r', 3.5)}
${T(830, 74, 16, `open: ${SUB('P', 'atm', 16)}`, 'start', '700')}
</g>
<g class="fig-muted">
<defs>${ARROW('arr-fl-mano-m')}</defs>
<line x1="700" y1="250" x2="880" y2="250" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="820" y1="170" x2="880" y2="170" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
${DIM(866, 173, 866, 247, 'arr-fl-mano-m', 2)}
</g>
${T(878, 218, 20, 'Δh', 'start', '700')}
${T(652, 238, 15, 'pushed DOWN on', 'end')}${T(652, 258, 15, 'the high-P side', 'end')}
${T(740, 412, 20, `${SUB('P − P', 'atm', 20, ' = ρgΔh')}`, 'middle', '700')}
${T(500, 452, 16, 'absolute = atmospheric + gauge  ·  blood pressure 120/80 is GAUGE: mmHg above atmospheric', 'middle')}
</svg>`

/* 3 — Cohesion vs adhesion: water climbs glass, mercury is pushed down (lead, 1000×460) */
/** A glass tube (walls) from y 110 down to `bottom`, inner width w centred on cx. */
const GLASS = (cx: number, w: number, bottom: number) =>
  `<path d="M${cx - w / 2} 110 L${cx - w / 2} ${bottom} M${cx + w / 2} 110 L${cx + w / 2} ${bottom}" fill="none" stroke="currentColor" stroke-width="3"/>`
/** Liquid inside a tube: column from the meniscus at `top` down to `base`; concave dips, convex domes. */
const COLUMN = (cx: number, w: number, top: number, base: number, concave: boolean, opacity = 0.35) => {
  const l = cx - w / 2 + 1.5
  const r = cx + w / 2 - 1.5
  const edge = concave ? top : top + 10
  const mid = concave ? top + 14 : top - 6
  return `<path d="M${l} ${base} L${l} ${edge} Q${cx} ${2 * mid - edge} ${r} ${edge} L${r} ${base} z" fill="currentColor" fill-opacity="${opacity}"/>
<path d="M${l} ${edge} Q${cx} ${2 * mid - edge} ${r} ${edge}" fill="none" stroke="currentColor" stroke-width="2.5"/>`
}
const surfaceSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(250, 40, 22, 'Water in glass', 'middle', '700')}
${T(250, 66, 16, 'adhesion &gt; cohesion: concave, RISES', 'middle')}
<g class="fig-accent">
<rect x="82" y="300" width="336" height="88" fill="currentColor" fill-opacity="0.18"/><line x1="82" y1="300" x2="418" y2="300" stroke="currentColor" stroke-width="2"/>
${COLUMN(180, 52, 240, 300, true)}${COLUMN(320, 24, 170, 300, true)}
</g>
<path d="M80 270 L80 390 L420 390 L420 270" fill="none" stroke="currentColor" stroke-width="3"/>
${GLASS(180, 52, 376)}${GLASS(320, 24, 376)}
<g class="fig-muted">
<defs>${ARROW('arr-fl-surf-m')}</defs>
<line x1="210" y1="240" x2="360" y2="240" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
${DIM(356, 173, 356, 297, 'arr-fl-surf-m', 2)}
${DIM(126, 243, 126, 297, 'arr-fl-surf-m', 2)}
</g>
${T(368, 230, 15, 'narrow:', 'start', '700')}${T(368, 250, 15, 'higher rise', 'start')}
${T(116, 266, 15, 'wide', 'end')}
${T(250, 424, 16, 'water climbs the walls: blood into a thin tube, water into paper', 'middle')}
<g class="fig-muted"><line x1="500" y1="30" x2="500" y2="410" stroke="currentColor" stroke-width="1.5"/></g>
${T(750, 40, 22, 'Mercury in glass', 'middle', '700')}
${T(750, 66, 16, 'cohesion &gt; adhesion: convex, pushed DOWN', 'middle')}
<g class="fig-muted">
<rect x="582" y="300" width="336" height="88" fill="currentColor" fill-opacity="0.45"/>
</g>
<rect class="fig-bg" x="655" y="296" width="50" height="92"/><rect class="fig-bg" x="809" y="296" width="22" height="92"/>
<g class="fig-muted">${COLUMN(680, 52, 326, 388, false, 0.45)}${COLUMN(820, 24, 352, 388, false, 0.45)}</g>
<path d="M582 300 L654 300 M706 300 L808 300 M832 300 L918 300" fill="none" stroke="currentColor" stroke-width="2"/>
<path d="M580 270 L580 390 L920 390 L920 270" fill="none" stroke="currentColor" stroke-width="3"/>
${GLASS(680, 52, 384)}${GLASS(820, 24, 384)}
<g class="fig-muted"><line x1="840" y1="300" x2="880" y2="300" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/></g>
<g class="fig-accent-2">
<defs>${ARROW('arr-fl-surf-r')}</defs>
${ARR(860, 302, 860, 356, 'arr-fl-surf-r', 3)}
${T(844, 214, 15, 'narrow:', 'start', '700')}${T(844, 234, 15, 'pushed', 'start')}${T(844, 254, 15, 'further', 'start')}
</g>
${T(750, 424, 16, 'mercury balls up: its own atoms attract more than glass does', 'middle')}
<g class="fig-muted">${T(500, 452, 15, 'narrower tube ⇒ larger rise (or fall) · surfactants lower surface tension γ', 'middle')}</g>
</svg>`

/* 4 — The circulation: total area, speed and mean pressure across the vessel types (lead, 1000×460) */
const VX = [236, 367, 498, 629, 760, 891]
const VESSELS = ['aorta', 'arteries', 'arterioles', 'capillaries', 'venules', 'veins']
const AREA_Y = [198, 186, 156, 84, 146, 176]
const SPEED_Y = [84, 98, 146, 200, 166, 120]
const pY = (p: number) => 370 - p * 1.1
const PRESSURE_PTS: [number, number][] = [
  [180, 93], [301, 92], [432, 90], [563, 35], [694, 17], [825, 8], [950, 1],
]
const circulationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(560, 34, 21, 'Systemic circulation: one Q through vessels in SERIES', 'middle', '700')}
<g class="fig-accent"><rect x="563" y="58" width="131" height="157" fill="currentColor" fill-opacity="0.08"/></g>
<g class="fig-accent-2"><rect x="432" y="250" width="131" height="120" fill="currentColor" fill-opacity="0.08"/></g>
<g class="fig-muted">
${[301, 432, 563, 694, 825].map((x) => `<line x1="${x}" y1="58" x2="${x}" y2="370" stroke="currentColor" stroke-width="1" stroke-dasharray="3 5"/>`).join('')}
<line x1="170" y1="215" x2="956" y2="215" stroke="currentColor" stroke-width="2"/>
<line x1="170" y1="370" x2="956" y2="370" stroke="currentColor" stroke-width="2"/>
</g>
<g class="fig-accent">
<path d="${smooth(VX.map((x, i) => [x, AREA_Y[i]]))}" fill="none" stroke="currentColor" stroke-width="3.5"/>
<circle cx="236" cy="198" r="5" fill="currentColor"/><circle cx="629" cy="84" r="5" fill="currentColor"/>
${T(250, 214, 15, '3 cm²', 'start', '700')}
${T(629, 72, 15, '3000 cm²', 'middle', '700')}
${T(30, 110, 17, 'total', 'start', '700')}${T(30, 130, 17, 'area', 'start', '700')}
</g>
<g class="fig-accent-2">
<path d="${smooth(VX.map((x, i) => [x, SPEED_Y[i]]))}" fill="none" stroke="currentColor" stroke-width="3.5" stroke-dasharray="10 5"/>
<circle cx="236" cy="84" r="5" fill="currentColor"/><circle cx="629" cy="200" r="5" fill="currentColor"/>
${T(250, 78, 15, '30 cm/s', 'start', '700')}
${T(642, 236, 15, '0.03 cm/s', 'start', '700')}
${T(30, 170, 17, 'speed', 'start', '700')}${T(30, 190, 15, '(dashed)', 'start')}
</g>
<polyline points="${PRESSURE_PTS.map(([x, p]) => `${x},${pY(p).toFixed(1)}`).join(' ')}" fill="none" stroke="currentColor" stroke-width="3.5"/>
${T(180, 258, 15, '93 (MAP)', 'start', '700')}
${T(432, 262, 15, '90', 'middle', '700')}
${T(575, 328, 15, '35', 'start', '700')}
${T(950, 356, 15, '≈ 0 (right atrium)', 'end')}
<g class="fig-accent-2">${T(498, 362, 15, 'largest drop', 'middle', '700')}</g>
${T(30, 296, 17, 'mean', 'start', '700')}${T(30, 316, 17, 'pressure', 'start', '700')}${T(30, 336, 15, '(mmHg)', 'start')}
${VESSELS.map((v, i) => T(VX[i], 394, 16, v, 'middle', i === 2 || i === 3 ? '700' : '400')).join('')}
${T(560, 426, 16, 'A × v is the same at every level (CO ≈ 5 L/min): biggest total area ⇒ slowest blood', 'middle')}
<g class="fig-muted">${T(560, 450, 15, 'curve shapes illustrative; labelled values are the lesson’s', 'middle')}</g>
</svg>`

/* 5 — Grading a stenosis: short narrowing (continuity + Bernoulli) vs long (Poiseuille) (lead, 1000×460) */
const stenosisSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(250, 34, 20, 'SHORT narrowing', 'middle', '700')}
<g class="fig-accent"><path d="M50 90 L200 90 C222 90 226 112 244 112 L276 112 C294 112 298 90 320 90 L460 90 L460 170 L320 170 C298 170 294 148 276 148 L244 148 C226 148 222 170 200 170 L50 170 z" fill="currentColor" fill-opacity="0.15"/></g>
<path d="M50 90 L200 90 C222 90 226 112 244 112 L276 112 C294 112 298 90 320 90 L460 90 M50 170 L200 170 C222 170 226 148 244 148 L276 148 C294 148 298 170 320 170 L460 170" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent-2">
<defs>${ARROW('arr-fl-sten-r')}</defs>
${ARR(80, 130, 120, 130, 'arr-fl-sten-r', 3.5)}
${ARR(222, 130, 312, 130, 'arr-fl-sten-r', 4)}
<path d="M332 112 q16 -12 30 2 t30 -2 t30 4 M332 148 q16 12 30 -2 t30 4 t30 -4" fill="none" stroke="currentColor" stroke-width="2"/>
<path d="M370 128 a10 10 0 1 1 14 8" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arr-fl-sten-r)"/>
<path d="M420 136 a10 10 0 1 0 -14 -8" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arr-fl-sten-r)"/>
${T(260, 70, 15, 'fast jet', 'middle', '700')}
${T(395, 70, 15, 'turbulence: bruit', 'middle', '700')}
</g>
<g class="fig-muted">
<line x1="50" y1="210" x2="460" y2="210" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="50" y1="330" x2="460" y2="330" stroke="currentColor" stroke-width="2"/>
</g>
${T(40, 270, 16, 'P', 'end', '700')}
<path d="M50 210 L195 211 C220 212 226 288 246 290 L274 290 C300 290 316 244 340 240 L460 240" fill="none" stroke="currentColor" stroke-width="3.5"/>
${T(260, 312, 15, 'Bernoulli: P dips in the jet', 'middle', '700')}
${T(400, 262, 15, 'not fully recovered', 'middle')}
<g class="fig-muted"><line x1="500" y1="20" x2="500" y2="338" stroke="currentColor" stroke-width="1.5"/></g>
${T(750, 34, 20, 'LONG narrowing', 'middle', '700')}
<g class="fig-accent"><path d="M540 90 L610 90 C628 90 632 112 650 112 L850 112 C868 112 872 90 890 90 L960 90 L960 170 L890 170 C872 170 868 148 850 148 L650 148 C632 148 628 170 610 170 L540 170 z" fill="currentColor" fill-opacity="0.15"/></g>
<path d="M540 90 L610 90 C628 90 632 112 650 112 L850 112 C868 112 872 90 890 90 L960 90 M540 170 L610 170 C628 170 632 148 650 148 L850 148 C868 148 872 170 890 170 L960 170" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent-2">${ARR(690, 130, 760, 130, 'arr-fl-sten-r', 3.5)}${ARR(570, 130, 600, 130, 'arr-fl-sten-r', 3)}</g>
${T(750, 70, 15, 'friction all along: R = 8ηL / πr⁴', 'middle', '700')}
<g class="fig-muted">
<line x1="540" y1="210" x2="960" y2="210" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="540" y1="330" x2="960" y2="330" stroke="currentColor" stroke-width="2"/>
</g>
<path d="M540 212 L630 218 L870 296 L960 302" fill="none" stroke="currentColor" stroke-width="3.5"/>
${T(650, 290, 15, 'Poiseuille: P falls steadily;', 'middle', '700')}
${T(650, 310, 15, 'less flow at a fixed ΔP', 'middle')}
<g class="fig-muted"><line x1="40" y1="350" x2="960" y2="350" stroke="currentColor" stroke-width="1.5"/></g>
${T(180, 382, 16, 'How fast is the blood?', 'middle', '700')}
${T(500, 382, 16, 'Pressure in the narrow part?', 'middle', '700')}
${T(820, 382, 16, 'Flow at a given driving ΔP?', 'middle', '700')}
<g class="fig-accent-2">
${T(180, 410, 17, 'continuity: faster, v ∝ 1/A', 'middle', '700')}
${T(500, 410, 17, 'Bernoulli: lower', 'middle', '700')}
${T(820, 410, 17, 'Poiseuille: less, R ∝ 1/r⁴', 'middle', '700')}
</g>
<g class="fig-muted">${T(500, 444, 15, 'pressure traces illustrative · continuity fixes Q; Poiseuille says what keeping Q costs', 'middle')}</g>
</svg>`

/* 6 — The IV bag worked example: height above the needle sets the pressure (after, 1000×460) */
const ivSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted"><path d="M140 40 L140 410 M100 410 L180 410 M140 40 L176 40 L176 52" fill="none" stroke="currentColor" stroke-width="4"/></g>
<path d="M150 56 L202 56 Q212 56 212 66 L212 150 Q212 166 196 166 L156 166 Q140 166 140 150 L140 66 Q140 56 150 56 z" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent"><path d="M142 100 L210 100 L210 150 Q210 164 196 164 L156 164 Q142 164 142 150 z" fill="currentColor" fill-opacity="0.3"/><line x1="142" y1="100" x2="210" y2="100" stroke="currentColor" stroke-width="2"/></g>
<rect x="168" y="166" width="16" height="30" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent"><path d="M176 196 L176 300 Q176 362 236 362 L404 362" fill="none" stroke="currentColor" stroke-width="4"/></g>
<rect x="164" y="250" width="24" height="14" rx="3" fill="currentColor" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
${T(196, 262, 15, 'clamp', 'start')}
<path d="M330 344 L560 344 Q584 344 584 366 Q584 388 560 388 L330 388" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent-2"><circle cx="410" cy="362" r="5" fill="currentColor"/></g>
${T(440, 418, 15, 'needle in a vein of the arm', 'middle')}
<g class="fig-muted">
<defs>${ARROW('arr-fl-iv-m')}</defs>
<line x1="214" y1="100" x2="300" y2="100" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
${DIM(286, 103, 286, 359, 'arr-fl-iv-m', 2)}
</g>
${T(298, 220, 20, 'h = 1.0 m', 'start', '700')}
${T(298, 244, 15, 'surface → needle', 'start')}
${T(298, 140, 15, 'only this HEIGHT counts:', 'start', '700')}
${T(298, 160, 15, 'not the bag’s width or fullness', 'start')}
${T(300, 296, 17, 'ρgh = (1000)(10)(1.0)', 'start', '700')}
${T(300, 320, 17, '= 1.0 × 10⁴ Pa ≈ 75 mmHg', 'start', '700')}
<g class="fig-muted"><line x1="610" y1="30" x2="610" y2="440" stroke="currentColor" stroke-width="1.5"/></g>
${T(795, 44, 19, 'Gauge pressure at the needle', 'middle', '700')}
${T(795, 68, 15, '(mmHg)', 'middle')}
<g class="fig-muted"><line x1="650" y1="360" x2="950" y2="360" stroke="currentColor" stroke-width="2"/></g>
<g class="fig-accent">
<rect x="665" y="172" width="80" height="188" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
<rect x="785" y="265" width="80" height="95" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
${T(705, 160, 18, '75', 'middle', '700')}
${T(825, 253, 18, '≈ 38', 'middle', '700')}
</g>
<g class="fig-accent-2">
<line x1="650" y1="335" x2="950" y2="335" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 5"/>
${T(905, 324, 15, 'vein ≈ 10', 'middle', '700')}
</g>
${T(705, 386, 15, 'bag at 1.0 m', 'middle')}
${T(825, 386, 15, 'bag at 0.5 m', 'middle')}
${T(795, 418, 15, 'above venous ⇒ saline flows IN', 'middle', '700')}
<g class="fig-accent-2">${T(795, 442, 15, 'bag below the arm ⇒ blood backs up', 'middle', '700')}</g>
</svg>`

export const mcatFluidsExtraFigures: DeckFigurePlacement[] = [
  {
    at: 'Density and Specific Gravity',
    mode: 'lead',
    figure: {
      svg: densitySvg,
      alt:
        'Left: SG = ρ / ρ_water, a ratio of two densities with no units. A number line zoomed around 1 shows the lesson’s table: ice 0.92, water 1.00 (bold), seawater 1.03 and blood 1.05, with mercury 13.6 placed past a break in the line, off scale. The part of the line below 1 is shaded blue (SG < 1: less dense than water) and the part above 1 red (SG > 1: denser). Notes: SG 0.8 = 80 % as dense as water = 800 kg/m³; SG equals the density in g/cm³ (water: 1 g/cm³ = 1000 kg/m³); memorize water (1.00) and mercury (13.6). Right: a tank of water with three blocks — an ice block of SG 0.92 floating with a thin sliver above the surface, a block of SG = 1 hovering fully submerged in mid-water, and a block of SG > 1 resting on the bottom. Caption under the tank: SG < 1 floats, SG = 1 hovers, SG > 1 sinks; weight W = mg = ρVg.',
      caption: 'Specific gravity is density relative to water: below 1 floats in water, 1 hovers, above 1 sinks — the values are the lesson’s table.',
    },
    blocks: [
      '- $\\rho = m/V$; $SG = \\rho/\\rho_{water}$ — no units, and numerically the density in g/cm³',
      '- In water: $SG < 1$ floats, $SG = 1$ hovers, $SG > 1$ sinks (water 1.00, mercury 13.6)',
    ],
  },
  {
    at: 'Specific Gravity Reasoning',
    mode: 'lead',
    figure: {
      svg: sgReasoningSvg,
      alt:
        'Left: weigh it in air, then in water. A rock hangs from a spring scale in air, reading W; the same rock hangs from a spring scale fully submerged in a beaker of water and the scale reads less, W_app, because a blue buoyant-force arrow F_B pushes up on it. Below: SG = W / F_B = W / (W − W_app) — how Archimedes tested a crown without melting it. Right: hydrometer — rides higher in a denser liquid. Two identical hydrometers (a weighted bulb with a narrow graduated stem) float in two jars filled to the same level: in water (SG 1.00) the bulb sits low and the surface meets the stem high up its scale; in a denser liquid (higher SG) the same hydrometer floats higher, with a red arrow labelled higher. The SG is read where the surface meets the stem. Footnote: fixed weight ⇒ same weight displaced ⇒ smaller volume in the denser liquid.',
      caption: 'Specific gravity two ways: weight over buoyant force on a spring scale, and a hydrometer that floats higher in a denser liquid.',
    },
    blocks: [
      '- $SG = W/F_B = W/(W - W_{\\text{apparent}})$: the weight lost in water is the buoyant force',
      '- A hydrometer rides **higher** in a denser liquid (concentrated urine reads a higher SG)',
    ],
  },
  {
    at: 'Barometers, Manometers and Blood Pressure',
    mode: 'lead',
    figure: {
      svg: barometerSvg,
      alt:
        'Left: a mercury barometer — a long tube closed at the top, inverted in a dish of mercury. Red arrows labelled P_atm press down on the open mercury surface in the dish. The mercury column in the tube stands h = 760 mm above the dish surface at sea level, and the space above it is marked ≈ vacuum (P ≈ 0). Notes: ρ_Hg g h = P_atm; water would need ≈ 10.3 m; altitude gives a shorter column; vacuum on top means the reading is absolute. Right: an open-tube manometer — a U-shaped tube of blue liquid whose left arm connects to a gas or vessel at pressure P and whose right arm is open to P_atm (red arrow). The liquid is pushed down on the high-pressure side, so the left surface sits lower than the right, and the height difference Δh between the two surfaces gives P − P_atm = ρgΔh. Bottom: absolute = atmospheric + gauge; blood pressure 120/80 is gauge, mmHg above atmospheric.',
      caption: 'A barometer’s vacuum makes it read absolute pressure (760 mm of mercury at sea level); an open manometer reads gauge pressure as the height difference.',
    },
    blocks: [
      '- Barometer: vacuum on top, $\\rho_{Hg} g h = P_{atm}$, $h = 760$ mm at sea level — ABSOLUTE',
      '- Open manometer: $P - P_{atm} = \\rho g \\Delta h$ — GAUGE; blood pressure is gauge too',
    ],
  },
  {
    at: 'Surface Tension, Cohesion and Adhesion',
    mode: 'lead',
    figure: {
      svg: surfaceSvg,
      alt:
        'Left: water in glass — a dish of water with a wide and a narrow glass tube standing in it. In both tubes the water climbs above the dish level with a concave meniscus that curves up at the walls; the narrow tube’s column rises about twice as high as the wide tube’s (narrow: higher rise). Label: adhesion > cohesion — concave, rises; water climbs the walls, as blood does into a thin tube and water into paper. Right: mercury in glass — a dish of grey mercury with a wide and a narrow tube. In both tubes the mercury sits below the dish level with a convex meniscus that domes up in the middle, and a red arrow shows the narrow tube’s level pushed further down. Label: cohesion > adhesion — convex, pushed down; mercury’s own atoms attract more than glass does. Footnote: narrower tube ⇒ larger rise (or fall); surfactants lower surface tension γ.',
      caption: 'Capillary action: water wets glass (concave meniscus, rises) while mercury does not (convex, depressed), and the narrower tube shows the larger effect — schematic.',
    },
    blocks: [
      '- adhesion > cohesion (water in glass): concave meniscus, liquid **rises**',
      '- cohesion > adhesion (mercury in glass): convex, pushed **down**; narrower tube ⇒ bigger effect',
    ],
  },
  {
    at: 'The Circulation as a Fluids Problem',
    mode: 'lead',
    figure: {
      svg: circulationSvg,
      alt:
        'A plot across six vessel types in series: aorta, arteries, arterioles, capillaries, venules, veins. Top panel: a solid blue curve of total cross-sectional area starts low at the aorta (3 cm²), climbs through the arteries and arterioles to a tall peak at the capillaries (3000 cm²), then falls through the venules to the veins, still above the aorta. A dashed red curve of speed is its mirror image: highest at the aorta (30 cm/s), falling to a minimum at the capillaries (0.03 cm/s), then rising again in the venules and veins without regaining aortic speed. Bottom panel: mean pressure in mmHg starts at 93 (MAP) in the aorta, is still about 90 entering the arterioles, drops steeply across the shaded arterioles to about 35 (the largest drop), then falls gently through capillaries, venules and veins to about 0 at the right atrium. Footnote: A × v is the same at every level (CO ≈ 5 L/min), so the biggest total area means the slowest blood; curve shapes illustrative, labelled values are the lesson’s.',
      caption: 'Across the systemic circulation, total area peaks and speed bottoms out at the capillaries, while the steepest pressure drop is across the arterioles (illustrative shapes, lesson values).',
    },
    blocks: [
      '- Same $Q$ through every series level: capillaries have the largest TOTAL area, so the slowest blood',
      '- Largest pressure drop: the **arterioles** ($\\approx 90 \\to 35$ mmHg); $MAP \\approx CO \\times TPR$',
    ],
  },
  {
    at: 'Grading a Stenosis: Which Law Applies?',
    mode: 'lead',
    figure: {
      svg: stenosisSvg,
      alt:
        'Left, a short narrowing: a blood vessel pinches briefly to a narrow throat. A short red arrow upstream becomes a long red arrow in the throat (fast jet), and just downstream wavy lines and curling eddies mark turbulence, heard as a bruit. Below it, a pressure trace runs level upstream, dips sharply in the throat (Bernoulli: P dips in the jet) and climbs back only partway afterwards, staying below the dashed upstream level (not fully recovered). Right, a long narrowing: the vessel stays narrow over a long stretch, labelled friction all along, R = 8ηL / πr⁴. Its pressure trace falls gently before the narrowing, steeply and steadily all along it, and gently after it (Poiseuille: P falls steadily; less flow at a fixed ΔP). Bottom row, which law answers which question: How fast is the blood? continuity — faster, v ∝ 1/A. Pressure in the narrow part? Bernoulli — lower. Flow at a given driving ΔP? Poiseuille — less, R ∝ 1/r⁴. Footnote: pressure traces illustrative; continuity fixes Q, Poiseuille says what keeping Q costs.',
      caption: 'One stenosis, three laws: continuity gives the speed, Bernoulli the pressure dip in a short jet, Poiseuille the resistance of a long narrowing (illustrative traces).',
    },
    blocks: [
      '- Speed → **continuity** ($v \\propto 1/A$); pressure in the jet → **Bernoulli** (lower)',
      '- Flow at a fixed driving pressure, or a LONG narrowing → **Poiseuille** ($R \\propto 1/r^4$)',
    ],
  },
  {
    at: 'Worked Example — Hanging an IV Bag',
    mode: 'after',
    figure: {
      svg: ivSvg,
      alt:
        'Left: an IV pole holding a bag of saline with a drip chamber and a clamp on the line, which runs down and across to a needle in a vein of the arm. A grey dimension arrow measures h = 1.0 m from the fluid surface in the bag down to the needle (surface → needle); notes: only this height counts, not the bag’s width or fullness; ρgh = (1000)(10)(1.0) = 1.0 × 10⁴ Pa ≈ 75 mmHg. Right: gauge pressure at the needle as bars in mmHg — the bag at 1.0 m gives 75, the bag at 0.5 m gives about 38 — with a red dashed line at the vein’s pressure, about 10. Both bars stand above venous pressure, so saline flows in; if the bag is lowered below the arm, blood backs up into the line.',
      caption: 'The worked example: a bag surface 1.0 m above the needle gives ρgh ≈ 75 mmHg, well above the vein’s ≈ 10 mmHg; halving the height halves it.',
    },
    blocks: [
      '- $\\rho g h = (1000)(10)(1.0) = 10^4$ Pa ≈ 75 mmHg at the needle vs ≈ 10 mmHg in the vein',
      '- Only the HEIGHT counts: 0.5 m → ≈ 38 mmHg; bag below the arm → blood backs up',
    ],
  },
]
