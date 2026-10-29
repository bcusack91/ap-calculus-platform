import type { DeckFigurePlacement } from './index'

/**
 * Acid-Base & Equilibrium (MCAT C/P) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (a logarithmic pH ruler,
 * two beakers of particles, computed curves, an indicator chart, a Q number
 * line, a 2×2 panel set) — no textbook, prep-company or AAMC figure was
 * copied. The curves are COMPUTED here from the constants the lesson states:
 * acetic acid Ka = 1.8 × 10⁻⁵ (pKa 4.74), Kw = 10⁻¹⁴, 0.100 M solutions and
 * 50.0 mL titrated with 0.100 M NaOH. The percent-dissociation curve is the
 * exact quadratic; both titration curves are the exact charge balance solved
 * by bisection (water included), so every pH label is the solved value.
 *
 * Colours are consistent across the deck: acid / H⁺ / "shifts left" RED
 * (fig-accent-2), base / OH⁻ / A⁻ / "shifts right" BLUE (fig-accent), axes,
 * glassware and reference curves grey (fig-muted), equations in the text colour.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-ab-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** A rounded box outlined in the current colour; `fillOpacity` > 0 tints it with the same colour. */
const BOX = (x: number, y: number, w: number, h: number, rx = 12, sw = 2.5, fillOpacity = 0) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fillOpacity ? 'currentColor' : 'none'}"${fillOpacity ? ` fill-opacity="${fillOpacity}"` : ''} stroke="currentColor" stroke-width="${sw}"/>`

/** A straight arrow in the current colour ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''} marker-end="url(#${marker})"/>`

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A filled dot in the current colour. */
const DOT = (cx: number, cy: number, r = 6) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor"/>`

/** A beaker open at the top (glass outline only). */
const BEAKER = (x: number, w: number, top: number, bottom: number) =>
  `<path d="M${x} ${top} L${x} ${bottom} L${x + w} ${bottom} L${x + w} ${top}" fill="none" stroke="currentColor" stroke-width="2.5"/>`

/** An open polyline through the points, in the current colour. */
const CURVE = (pts: Array<[number, number]>, sw = 3.5, dashed = false) =>
  `<path d="${pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')}" fill="none" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''} stroke-linejoin="round"/>`

/** Unicode superscript digits for 10⁻ⁿ labels. */
const SUP = (n: number) => `${n < 0 ? '⁻' : ''}${String(Math.abs(n)).split('').map((d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+d]).join('')}`

/* ---------- the chemistry, from the lesson's constants ---------- */

const KA = 1.8e-5 // acetic acid (lesson)
const PKA = 4.74
const KW = 1e-14

/** [H⁺] of a weak acid HA at concentration c — the exact quadratic Ka = x² / (c − x). */
const weakAcidH = (c: number, ka = KA) => (-ka + Math.sqrt(ka * ka + 4 * ka * c)) / 2

/**
 * pH of 50.0 mL of 0.100 M acid after `vb` mL of 0.100 M NaOH: the charge
 * balance Na⁺ + H⁺ = A⁻ + OH⁻ solved by bisection on pH (ka = Infinity is a
 * strong acid, fully dissociated). Exact, water included.
 */
const titrationPH = (vb: number, ka: number) => {
  const ca = 5 / (50 + vb)
  const na = (0.1 * vb) / (50 + vb)
  const f = (h: number) => na + h - (ka === Infinity ? ca : (ca * ka) / (ka + h)) - KW / h
  let lo = 0
  let hi = 14
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2
    if (f(10 ** -mid) > 0) lo = mid
    else hi = mid
  }
  return (lo + hi) / 2
}

/** Sample volumes for a titration curve: every 0.5 mL, denser around the jump. */
const TITRATION_VOLUMES = (() => {
  const v: number[] = []
  for (let x = 0; x <= 100; x += 0.5) v.push(x)
  for (let x = 48; x <= 52; x += 0.05) v.push(+x.toFixed(2))
  return [...new Set(v)].sort((a, b) => a - b)
})()

/* 1 — The pH scale as a logarithmic ruler, with the lesson's examples (lead, 1000×460). x = 80 + 60·pH */
const PX = (ph: number) => 80 + 60 * ph
const phMark = (ph: number, label: string, y: number, cls: 'fig-accent' | 'fig-accent-2' | '', anchor: 'middle' | 'end' = 'middle') => {
  const x = PX(ph)
  const tx = anchor === 'end' ? x - 8 : x
  const body = `${LINE(x, 174, x, y - 18, 2, true)}${DOT(x, 174, 6)}${T(tx, y, 15, label, anchor, '700')}${T(tx, y + 19, 14, `pH ${ph % 1 === 0 ? ph : ph.toFixed(2)}`, anchor)}`
  return cls ? `<g class="${cls}">${body}</g>` : body
}
const phScaleSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(500, 36, 20, 'pH = −log[H⁺] — each step is a factor of TEN in [H⁺]', 'middle', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-ab-ph-r')}</defs>
<rect x="80" y="150" width="420" height="24" fill="currentColor" fill-opacity="0.16"/>
${ARR(470, 92, 110, 92, 'arr-ab-ph-r', 3)}
${T(290, 80, 15, 'acidic: every step left multiplies [H⁺] by 10', 'middle', '700')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-ab-ph-b')}</defs>
<rect x="500" y="150" width="420" height="24" fill="currentColor" fill-opacity="0.16"/>
${ARR(530, 92, 890, 92, 'arr-ab-ph-b', 3)}
${T(710, 80, 15, 'basic: every step right divides [H⁺] by 10', 'middle', '700')}
</g>
${LINE(80, 162, 920, 162, 3)}
${Array.from({ length: 15 }, (_, ph) => `${LINE(PX(ph), 150, PX(ph), 174, 2)}${T(PX(ph), 138, 16, String(ph), 'middle', '700')}`).join('')}
<g class="fig-muted">
${[0, 2, 4, 6, 8, 10, 12, 14].map((ph) => T(PX(ph), 198, 13, `10${SUP(-ph)} M`, 'middle')).join('')}
${T(62, 167, 14, 'pH', 'end', '700')}
${T(44, 198, 13, '[H⁺]', 'end')}
</g>
${phMark(2, '0.010 M HCl', 250, 'fig-accent-2')}
${phMark(2.87, '0.100 M acetic acid', 300, 'fig-accent-2')}
${phMark(7, 'pure water', 250, '', 'end')}
${phMark(7.4, 'blood', 300, '')}
${phMark(11, '0.0010 M NaOH', 250, 'fig-accent')}
<g class="fig-muted">
${LINE(80, 372, 920, 372, 2)}
${Array.from({ length: 15 }, (_, ph) => `${LINE(PX(ph), 366, PX(ph), 378, 1.5)}${T(PX(ph), 398, 13, String(14 - ph), 'middle')}`).join('')}
${T(62, 377, 14, 'pOH', 'end', '700')}
</g>
${T(500, 438, 16, 'pH + pOH = 14 at 25 °C, because Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ — neutral is 7, not “no H⁺”', 'middle')}
</svg>`

/* 2 — Strong vs weak acid as particle pictures: 0.010 M HCl vs 0.100 M acetic acid (lead, 1000×460) */
const HCL_PAIRS: Array<[number, number]> = [[96, 215], [150, 205], [206, 222], [262, 208], [300, 250], [110, 268], [170, 262], [232, 275], [286, 300], [100, 322], [158, 318], [220, 330], [272, 352], [120, 372], [186, 378], [244, 385], [304, 392], [86, 262], [312, 330], [190, 300]]
const strongWeakSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${BEAKER(60, 270, 150, 410)}
${BEAKER(420, 270, 150, 410)}
<rect x="61" y="190" width="268" height="219" fill="currentColor" fill-opacity="0.05"/>
<rect x="421" y="190" width="268" height="219" fill="currentColor" fill-opacity="0.05"/>
${T(195, 96, 19, '0.010 M HCl — strong', 'middle', '700')}
<g class="fig-muted">${T(195, 120, 14, 'every HCl has split; no HCl molecules remain', 'middle')}</g>
${T(555, 96, 19, '0.100 M acetic acid — weak', 'middle', '700')}
<g class="fig-muted">${T(555, 120, 14, 'ten times more acid, almost all of it still intact', 'middle')}</g>
<g class="fig-accent-2">
${HCL_PAIRS.slice(0, 10).map(([x, y]) => `<circle cx="${x}" cy="${y}" r="12" fill="currentColor" fill-opacity="0.85"/>`).join('')}
<circle cx="112" cy="138" r="8" fill="currentColor" fill-opacity="0.85"/>${T(126, 143, 13, 'H⁺', 'start', '700')}
</g>
<g class="fig-muted">
${HCL_PAIRS.slice(10).map(([x, y]) => `<circle cx="${x}" cy="${y}" r="12" fill="none" stroke="currentColor" stroke-width="2.5"/>`).join('')}
<circle cx="182" cy="138" r="8" fill="none" stroke="currentColor" stroke-width="2.5"/>${T(196, 143, 13, 'Cl⁻', 'start', '700')}
${T(246, 143, 13, 'no HCl left', 'start')}
<circle cx="452" cy="138" r="7" fill="currentColor" fill-opacity="0.45"/>${T(464, 143, 13, 'HA intact', 'start', '700')}
${Array.from({ length: 77 }, (_, k) => {
  const i = k % 11
  const j = Math.floor(k / 11)
  if (i === 5 && j === 3) return ''
  return `<circle cx="${445 + 24 * i}" cy="${212 + 28 * j}" r="8" fill="currentColor" fill-opacity="0.45"/>`
}).join('')}
</g>
<g class="fig-accent-2"><circle cx="558" cy="296" r="8" fill="currentColor"/><circle cx="562" cy="138" r="7" fill="currentColor"/>${T(574, 143, 13, 'H⁺', 'start', '700')}</g>
<g class="fig-accent"><circle cx="576" cy="296" r="8" fill="currentColor"/><circle cx="618" cy="138" r="7" fill="currentColor"/>${T(630, 143, 13, 'A⁻', 'start', '700')}</g>
<g class="fig-accent-2">${T(195, 436, 15, '10 of 10 split → [H⁺] = 0.010 M → pH 2', 'middle', '700')}</g>
${T(555, 436, 15, '≈ 1 of 75 split → [H⁺] = 1.3 × 10⁻³ M → pH 2.87', 'middle', '700')}
<g class="fig-muted">${LINE(715, 30, 715, 440, 1.5)}</g>
${T(735, 70, 20, 'strong: 100 % dissociated', 'start', '700')}
${T(735, 100, 17, '[H⁺] = C exactly → pH = −log C')}
<g class="fig-accent-2">${T(735, 128, 17, '0.010 M HCl = 10⁻² M → pH 2', 'start', '700')}</g>
<g class="fig-muted">${T(735, 152, 14, 'the 7: HCl, HBr, HI, HNO₃,')}${T(735, 170, 14, 'H₂SO₄, HClO₄, HClO₃')}</g>
${T(735, 212, 20, 'weak: only a few % split', 'start', '700')}
${T(735, 240, 17, '[H⁺] ≈ √(Ka · C)  (5 % rule)')}
${T(735, 266, 16, '√(1.8×10⁻⁵ × 0.100) = 1.34 × 10⁻³ M')}
${T(735, 292, 17, '→ pH = 3 − log 1.34 ≈ 2.87', 'start', '700')}
${T(735, 338, 17, 'ten times MORE acid,', 'start', '700')}
${T(735, 360, 17, 'yet LESS H⁺:', 'start', '700')}
${T(735, 384, 16, 'strength (Ka) and amount (C)')}
${T(735, 406, 16, 'are different dials')}
<g class="fig-muted">${T(735, 436, 14, 'strong base: [OH⁻] = C, pH = 14 − pOH')}</g>
</svg>`

/* 3 — Percent dissociation of acetic acid against concentration, computed from Ka (lead, 1000×460). x = 110 + 72·(log C + 5), y = 400 − 3.2·% */
const PD_X = (logC: number) => 110 + 72 * (logC + 5)
const PD_Y = (pct: number) => 400 - 3.2 * pct
const pdCurve: Array<[number, number]> = []
for (let lc = -5; lc <= 0.0001; lc += 0.05) {
  const c = 10 ** lc
  pdCurve.push([PD_X(lc), PD_Y((100 * weakAcidH(c)) / c)])
}
const PD_ROWS = [0, -1, -2, -3, -4, -5].map((lc) => {
  const c = 10 ** lc
  const h = weakAcidH(c)
  return { lc, pct: (100 * h) / c, ph: -Math.log10(h), label: lc === 0 ? '1.0 M' : lc >= -2 ? c.toFixed(-lc) : `10${SUP(lc)}` }
})
const pctLabel = (p: number) => (p >= 10 ? p.toFixed(0) : p.toFixed(1)) + ' %'
const percentDissSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ab-pd')}</defs>
${T(300, 34, 17, 'acetic acid, Ka = 1.8 × 10⁻⁵ — % dissociated vs concentration', 'middle', '700')}
${ARR(110, 400, 500, 400, 'arr-ab-pd', 2.5)}
${ARR(110, 400, 110, 60, 'arr-ab-pd', 2.5)}
${T(100, 54, 15, '% dissociated', 'end')}
${T(300, 452, 15, 'C on a log scale — dilution runs leftward ←', 'middle')}
<g class="fig-muted">
${[0, 25, 50, 75, 100].map((p) => `${LINE(104, PD_Y(p), 116, PD_Y(p), 2)}${T(96, PD_Y(p) + 5, 14, `${p}`, 'end')}${p ? LINE(116, PD_Y(p), 470, PD_Y(p), 1, true) : ''}`).join('')}
${PD_ROWS.map((r) => `${LINE(PD_X(r.lc), 394, PD_X(r.lc), 406, 2)}${T(PD_X(r.lc), 426, 14, r.label, 'middle')}`).join('')}
${LINE(540, 30, 540, 440, 1.5)}
</g>
<g class="fig-accent-2">
${CURVE(pdCurve, 4)}
${PD_ROWS.map((r) => DOT(PD_X(r.lc), PD_Y(r.pct), 6)).join('')}
${PD_ROWS.map((r) => T(PD_X(r.lc) + 10, PD_Y(r.pct) - 10, 14, pctLabel(r.pct), 'start', '700')).join('')}
</g>
${T(560, 70, 20, 'dilute a weak acid and…', 'start', '700')}
<g class="fig-accent-2">${T(560, 100, 17, '% dissociation RISES (more of it splits)')}</g>
<g class="fig-accent">${T(560, 126, 17, '[H⁺] FALLS anyway (fewer molecules per litre)')}</g>
<g class="fig-muted">${T(560, 150, 14, 'Le Châtelier: fewer particles per litre → the side with more particles')}</g>
${T(560, 190, 15, 'C', 'start', '700')}${T(700, 190, 15, '% dissociated', 'start', '700')}${T(860, 190, 15, 'pH', 'start', '700')}
<g class="fig-muted">${LINE(560, 198, 960, 198, 1.5)}</g>
${PD_ROWS.map((r, i) => `${T(560, 224 + 26 * i, 15, r.label)}${T(700, 224 + 26 * i, 15, pctLabel(r.pct))}${T(860, 224 + 26 * i, 15, r.ph.toFixed(2))}`).join('')}
${T(560, 405, 16, '% = [H⁺]eq / [HA]₀ × 100 — table: exact quadratic', 'start', '700')}
<g class="fig-muted">${T(560, 430, 14, 'the √(Ka·C) shortcut (2.87 at 0.100 M) holds while % &lt; 5')}</g>
</svg>`

/* 4 — Henderson–Hasselbalch as a curve: pH against the fraction present as A⁻ (lead, 1000×460). x = 110 + 3.5·%, y = 400 − 73.3·(pH − 2.5) */
const HH_X = (pct: number) => 110 + 3.5 * pct
const HH_Y = (ph: number) => 400 - 73.3 * (ph - 2.5)
const hhPH = (pct: number) => PKA + Math.log10(pct / (100 - pct))
const hhCurve: Array<[number, number]> = []
for (let p = 0.6; p <= 99.4; p += 0.4) hhCurve.push([HH_X(p), HH_Y(hhPH(p))])
const HH_LO = 100 / 11 // 1:10 → pKa − 1
const HH_HI = 1000 / 11 // 10:1 → pKa + 1
const HH_EX = 200 / 3 // 0.200 M A⁻ with 0.100 M HA
const hhSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ab-hh')}</defs>
${T(300, 34, 17, 'acetic acid / acetate (pKa 4.74): pH vs % of the pair as A⁻', 'middle', '700')}
<g class="fig-accent">
<rect x="${HH_X(HH_LO).toFixed(1)}" y="${HH_Y(PKA + 1).toFixed(1)}" width="${(HH_X(HH_HI) - HH_X(HH_LO)).toFixed(1)}" height="${(HH_Y(PKA - 1) - HH_Y(PKA + 1)).toFixed(1)}" fill="currentColor" fill-opacity="0.08"/>
${T(HH_X(50), HH_Y(PKA + 1) - 10, 14, 'useful buffer: pKa ± 1  (1:10 … 10:1)', 'middle', '700')}
</g>
${ARR(110, 400, 500, 400, 'arr-ab-hh', 2.5)}
${ARR(110, 400, 110, 60, 'arr-ab-hh', 2.5)}
${T(100, 54, 15, 'pH', 'end')}
${T(300, 452, 15, '% of the pair present as A⁻', 'middle')}
<g class="fig-muted">
${[3, 4, 5, 6, 7].map((ph) => `${LINE(104, HH_Y(ph), 116, HH_Y(ph), 2)}${T(96, HH_Y(ph) + 5, 14, `${ph}`, 'end')}`).join('')}
${[0, 25, 50, 75, 100].map((p) => `${LINE(HH_X(p), 394, HH_X(p), 406, 2)}${T(HH_X(p), 426, 14, `${p}`, 'middle')}`).join('')}
${LINE(110, HH_Y(PKA), HH_X(50), HH_Y(PKA), 1.5, true)}
${LINE(HH_X(50), HH_Y(PKA), HH_X(50), 400, 1.5, true)}
${LINE(540, 30, 540, 440, 1.5)}
</g>
${CURVE(hhCurve, 4)}
${DOT(HH_X(50), HH_Y(PKA), 7)}
${T(HH_X(50) + 12, HH_Y(PKA) + 22, 15, '1:1 → pH = pKa = 4.74', 'start', '700')}
<g class="fig-accent">
${DOT(HH_X(HH_EX), HH_Y(hhPH(HH_EX)), 7)}
${T(HH_X(HH_EX) + 12, HH_Y(hhPH(HH_EX)) + 4, 15, '2:1 → 5.04', 'start', '700')}
</g>
<g class="fig-accent-2">
${T(HH_X(4) + 6, HH_Y(3.1), 14, 'steep: little A⁻ left,', 'start', '700')}
${T(HH_X(4) + 6, HH_Y(3.1) + 18, 14, 'added H⁺ shows at once')}
${T(HH_X(96) - 6, HH_Y(6.55), 14, 'steep: little HA left', 'end', '700')}
</g>
${T(560, 70, 20, 'pH = pKa + log([A⁻] / [HA])', 'start', '700')}
${T(560, 100, 16, 'the ratio sets pH; the pKa sets the centre')}
${T(560, 146, 17, 'worked: 0.100 M acid, 0.200 M acetate', 'start', '700')}
<g class="fig-accent">${T(560, 174, 17, '4.74 + log 2 = 4.74 + 0.30 = 5.04')}</g>
<g class="fig-muted">${T(560, 198, 14, 'more base than acid → pH above pKa, as it should')}</g>
${T(560, 244, 17, 'flat middle = buffering:', 'start', '700')}
${T(560, 270, 16, 'moving the ratio barely moves pH')}
${T(560, 296, 16, 'max capacity at 1:1 (pH = pKa)')}
${T(560, 338, 17, 'beyond 10:1 or 1:10 (pKa ± 1)', 'start', '700')}
<g class="fig-accent-2">${T(560, 364, 16, 'the curve turns steep — buffer exhausted')}</g>
<g class="fig-muted">${T(560, 410, 14, 'choose a pair with pKa within 1 of the target pH')}</g>
</svg>`

/* ---------- titration curves (shared axes): x = 100 + 3.6·V(mL), y = 410 − 25·pH ---------- */
const TX = (v: number) => 100 + 3.6 * v
const TY = (ph: number) => 410 - 25 * ph
const titrationCurve = (ka: number): Array<[number, number]> => TITRATION_VOLUMES.map((v) => [TX(v), TY(titrationPH(v, ka))])
const titrationAxes = (marker: string) => `${ARR(100, 410, 480, 410, marker, 2.5)}${ARR(100, 410, 100, 50, marker, 2.5)}
${T(90, 48, 15, 'pH', 'end')}
${T(290, 454, 15, 'mL of 0.100 M NaOH added', 'middle')}
<g class="fig-muted">
${[0, 2, 4, 6, 8, 10, 12, 14].map((ph) => `${LINE(94, TY(ph), 106, TY(ph), 2)}${T(86, TY(ph) + 5, 14, `${ph}`, 'end')}`).join('')}
${[0, 25, 50, 75, 100].map((v) => `${LINE(TX(v), 404, TX(v), 416, 2)}${T(TX(v), 434, 14, `${v}`, 'middle')}`).join('')}
${LINE(106, TY(7), TX(50), TY(7), 1, true)}
${LINE(540, 30, 540, 440, 1.5)}
</g>`

/* 5 — Strong acid + strong base: 50.0 mL of 0.100 M HCl with 0.100 M NaOH (lead, 1000×460) */
const SA = { start: titrationPH(0, Infinity), half: titrationPH(25, Infinity), eq: titrationPH(50, Infinity), near: titrationPH(49.9, Infinity), past: titrationPH(50.1, Infinity), end: titrationPH(100, Infinity) }
const strongStrongSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ab-sa')}</defs>
${T(300, 26, 17, '50.0 mL of 0.100 M HCl titrated with 0.100 M NaOH (computed)', 'middle', '700')}
${titrationAxes('arr-ab-sa')}
<g class="fig-accent-2">
${CURVE(titrationCurve(Infinity).filter(([x]) => x <= TX(50)), 4)}
${DOT(TX(0), TY(SA.start), 6)}
${T(TX(1), 322, 13, 'excess H⁺ shrinks slowly:')}
${T(TX(1), 342, 13, `pH ${SA.start.toFixed(2)} → ${SA.half.toFixed(2)} at 25 mL`, 'start', '700')}
</g>
<g class="fig-accent">
${CURVE(titrationCurve(Infinity).filter(([x]) => x >= TX(50)), 4)}
${DOT(TX(100), TY(SA.end), 6)}
${T(TX(100) - 12, TY(SA.end) + 22, 14, `100 mL: pH ${SA.end.toFixed(2)}`, 'end', '700')}
${T(TX(100) - 12, TY(SA.end) + 40, 14, 'excess OH⁻', 'end')}
</g>
${DOT(TX(50), TY(SA.eq), 7)}
${T(TX(53), TY(7) + 5, 15, `equivalence: 50.0 mL, pH ${SA.eq.toFixed(2)}`, 'start', '700')}
<g class="fig-muted">
${T(TX(53), TY(7) + 24, 13, `jump: pH ${SA.near.toFixed(1)} → ${SA.past.toFixed(1)} within ±0.1 mL`)}
${T(TX(53), TY(7) + 41, 13, 'any indicator from pH 4 to 10 works')}
</g>
${T(560, 70, 20, 'moles acid = moles base', 'start', '700')}
${T(560, 100, 17, 'MaVa = MbVb → 0.100 × 50.0 = 0.100 × Vb')}
${T(560, 128, 17, '→ equivalence at Vb = 50.0 mL', 'start', '700')}
<g class="fig-accent-2">${T(560, 178, 17, 'before: pH from the LEFTOVER strong acid')}</g>
<g class="fig-muted">${T(560, 202, 14, '[H⁺] = (5.00 − 0.100 Vb) mmol ÷ (50 + Vb) mL')}</g>
${T(560, 240, 17, 'at equivalence: NaCl + water → pH 7.00', 'start', '700')}
<g class="fig-muted">${T(560, 264, 14, 'neither Na⁺ nor Cl⁻ hydrolyzes')}</g>
<g class="fig-accent">${T(560, 302, 17, 'after: pH from the EXCESS strong base')}</g>
<g class="fig-muted">${T(560, 326, 14, '[OH⁻] = (0.100 Vb − 5.00) ÷ (50 + Vb) → pOH → 14 − pOH')}</g>
${T(560, 372, 17, 'no buffer region, no half-equivalence rule', 'start', '700')}
${T(560, 398, 16, 'a strong acid has no useful pKa to read off')}
<g class="fig-muted">${T(560, 430, 14, 'pH 1 at the start — NOT 0: 0.100 M, not 1 M')}</g>
</svg>`

/* 6 — Weak acid + strong base: 50.0 mL of 0.100 M acetic acid with 0.100 M NaOH, computed from Ka (lead, 1000×460) */
const WA = { start: titrationPH(0, KA), half: titrationPH(25, KA), eq: titrationPH(50, KA), end: titrationPH(100, KA) }
const weakStrongSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ab-wa')}</defs>
${T(300, 26, 17, '50.0 mL of 0.100 M acetic acid + 0.100 M NaOH (computed)', 'middle', '700')}
<g class="fig-accent">
<rect x="${TX(50 / 11).toFixed(1)}" y="${TY(PKA + 1).toFixed(1)}" width="${(TX(500 / 11) - TX(50 / 11)).toFixed(1)}" height="${(TY(PKA - 1) - TY(PKA + 1)).toFixed(1)}" fill="currentColor" fill-opacity="0.09"/>
${T(TX(25), TY(PKA + 1) - 8, 14, 'buffer region (pKa ± 1)', 'middle', '700')}
</g>
${titrationAxes('arr-ab-wa')}
<g class="fig-muted">
${CURVE(titrationCurve(Infinity), 2, true)}
${T(TX(52), 392, 13, 'dashed: strong acid, for comparison')}
</g>
${CURVE(titrationCurve(KA), 4)}
<g class="fig-accent-2">
${DOT(TX(0), TY(WA.start), 6)}
${T(TX(0) + 12, TY(WA.start) + 20, 14, 'start 2.87 ≈ √(Ka·C)', 'start', '700')}
</g>
${DOT(TX(25), TY(WA.half), 7)}
${LINE(TX(25) + 4, TY(WA.half) + 6, TX(54) - 6, 306, 1.5)}
${T(TX(54), 300, 15, 'half-equivalence, 25 mL:', 'start', '700')}
${T(TX(54), 320, 15, `pH ${PKA.toFixed(2)} = pKa  ([HA] = [A⁻])`, 'start', '700')}
<g class="fig-muted">${T(TX(54), 340, 13, 'the MCAT key fact')}</g>
<g class="fig-accent">
${DOT(TX(50), TY(WA.eq), 7)}
${T(TX(53), TY(WA.eq) - 30, 15, `equivalence: 50 mL, pH ${WA.eq.toFixed(2)}`, 'start', '700')}
${T(TX(53), TY(WA.eq) - 12, 13, 'all acetate; A⁻ + H₂O ⇌ HA + OH⁻ → basic')}
${DOT(TX(100), TY(WA.end), 6)}
${T(TX(100) - 12, TY(WA.end) + 22, 14, `100 mL: pH ${WA.end.toFixed(2)}`, 'end', '700')}
</g>
${T(560, 70, 20, 'four regions, four tools', 'start', '700')}
<g class="fig-accent-2">${T(560, 100, 17, 'start: weak acid alone → √(Ka·C), pH 2.87')}</g>
${T(560, 136, 17, 'buffer: HA + A⁻ → Henderson–Hasselbalch', 'start', '700')}
${T(560, 162, 16, `halfway (25 mL): ratio 1:1 → pH = pKa = ${PKA.toFixed(2)}`)}
<g class="fig-muted">${T(560, 186, 14, 'flattest part of the curve, pKa ± 1 wide')}</g>
<g class="fig-accent">${T(560, 224, 17, `equivalence: only A⁻ → Kb = Kw/Ka, pH ${WA.eq.toFixed(2)} (&gt; 7)`)}</g>
<g class="fig-muted">${T(560, 248, 14, 'so use phenolphthalein (8.2–10), not methyl orange')}</g>
${T(560, 284, 17, 'after: excess OH⁻ rules, same as a strong acid')}
${T(560, 330, 17, 'vs the strong acid (grey):', 'start', '700')}
${T(560, 356, 16, 'higher start, a shelf in the middle,')}
${T(560, 380, 16, 'a smaller jump, equivalence ABOVE 7')}
<g class="fig-muted">${T(560, 420, 14, 'weak base + strong acid is the mirror image: equivalence &lt; 7')}</g>
</svg>`

/* 7 — Indicator transition ranges on the pH ruler, with the two equivalence pHs (replace-table, 560×440). x = 40 + 34·pH */
const IX = (ph: number) => 40 + 34 * ph
const INDICATORS: Array<{ name: string; lo: number; hi: number; colours: string }> = [
  { name: 'methyl orange', lo: 3.1, hi: 4.4, colours: 'red → yellow' },
  { name: 'bromothymol blue', lo: 6.0, hi: 7.6, colours: 'yellow → blue' },
  { name: 'litmus', lo: 6.0, hi: 8.0, colours: 'red → blue' },
  { name: 'phenolphthalein', lo: 8.2, hi: 10.0, colours: 'colourless → pink' },
]
const indicatorsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(280, 24, 16, 'each indicator changes colour over ≈ its own pKa ± 1', 'middle', '700')}
<g class="fig-muted">
${LINE(IX(0), 62, IX(14), 62, 2.5)}
${Array.from({ length: 15 }, (_, ph) => `${LINE(IX(ph), 56, IX(ph), 68, 1.5)}${T(IX(ph), 48, 12, String(ph), 'middle')}`).join('')}
${T(IX(14) + 4, 67, 12, 'pH')}
</g>
${INDICATORS.map((ind, i) => {
  const y = 90 + 62 * i
  const tx = ind.hi < WA.eq ? Math.max(IX(ind.hi) + 6, IX(WA.eq) + 10) : IX(ind.hi) + 6
  return `${BOX(IX(ind.lo), y, IX(ind.hi) - IX(ind.lo), 28, 6, 2, 0.14)}
${T(IX(ind.lo) - 6, y + 19, 13, ind.name, 'end', '700')}
${T(tx, y + 13, 12, `${ind.lo}–${ind.hi}`)}
${T(tx, y + 27, 12, ind.colours)}`
}).join('')}
<g class="fig-accent-2">
${LINE(IX(7), 72, IX(7), 340, 2, true)}
${T(IX(7) - 4, 354, 12, 'strong + strong: 7.00', 'end', '700')}
</g>
<g class="fig-accent">
${LINE(IX(WA.eq), 72, IX(WA.eq), 340, 2, true)}
${T(IX(WA.eq) + 4, 354, 12, `weak acid + NaOH: ${WA.eq.toFixed(2)}`, 'start', '700')}
</g>
${T(280, 392, 14, 'choose a range that CONTAINS the equivalence pH', 'middle', '700')}
<g class="fig-muted">
${T(280, 412, 12, 'phenolphthalein catches both; methyl orange would', 'middle')}
${T(280, 428, 12, 'change colour long before the weak-acid equivalence', 'middle')}
</g>
</svg>`

/* 8 — The reaction quotient on a number line: Q chases K (replace-table, 560×440) */
const qNumberLineSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(280, 26, 16, 'same expression as K, evaluated NOW — compare to K', 'middle', '700')}
<g class="fig-muted">
${LINE(30, 190, 530, 190, 3)}
${T(528, 216, 13, 'Q →', 'end')}
</g>
${LINE(280, 160, 280, 220, 4)}
${T(280, 150, 18, 'Q = K', 'middle', '700')}
${T(280, 240, 14, 'equilibrium: no net change', 'middle')}
<g class="fig-accent">
<defs>${ARROW('arr-ab-q-b')}</defs>
<rect x="30" y="178" width="250" height="24" fill="currentColor" fill-opacity="0.12"/>
${ARR(80, 120, 250, 120, 'arr-ab-q-b', 4)}
${T(150, 76, 17, 'Q &lt; K', 'middle', '700')}
${T(150, 100, 14, 'too few products', 'middle')}
${T(150, 266, 15, 'shifts RIGHT →', 'middle', '700')}
${T(150, 286, 13, 'makes products, Q climbs to K', 'middle')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-ab-q-r')}</defs>
<rect x="280" y="178" width="250" height="24" fill="currentColor" fill-opacity="0.12"/>
${ARR(480, 120, 310, 120, 'arr-ab-q-r', 4)}
${T(410, 76, 17, 'Q &gt; K', 'middle', '700')}
${T(410, 100, 14, 'too many products', 'middle')}
${T(410, 266, 15, '← shifts LEFT', 'middle', '700')}
${T(410, 286, 13, 'makes reactants, Q falls to K', 'middle')}
</g>
${BOX(30, 318, 500, 104, 10, 2, 0.04)}
${T(45, 344, 14, 'N₂ + 3H₂ ⇌ 2NH₃,  K = 0.060,  every species 1.0 M', 'start', '700')}
${T(45, 370, 14, 'Q = (1.0)² / (1.0 × 1.0³) = 1.0')}
<g class="fig-accent-2">${T(45, 396, 14, 'Q = 1.0 &gt; K = 0.060 → shifts LEFT: NH₃ breaks back down', 'start', '700')}</g>
<g class="fig-muted">${T(45, 415, 12, 'Q is a snapshot; the reaction moves Q toward K, never K toward Q')}</g>
</svg>`

/* 9 — Le Châtelier as four panels: add reactant, remove product, compress, heat (replace-table, 560×440) */
const panel = (x: number, y: number, title: string, body: string) =>
  `${BOX(x, y, 262, 180, 10, 2)}${T(x + 12, y + 22, 14, title, 'start', '700')}${body}`
const bars = (x: number, y: number, r: number, p: number) =>
  `<rect x="${x}" y="${y - r}" width="26" height="${r}" fill="currentColor" fill-opacity="0.35"/><rect x="${x + 34}" y="${y - p}" width="26" height="${p}" fill="currentColor" fill-opacity="0.35"/>${T(x + 13, y + 14, 11, 'R', 'middle')}${T(x + 47, y + 14, 11, 'P', 'middle')}`
const leChatelierSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-accent"><defs>${ARROW('arr-ab-lc-b')}</defs></g>
<g class="fig-accent-2"><defs>${ARROW('arr-ab-lc-r')}</defs></g>
<g class="fig-muted"><defs>${ARROW('arr-ab-lc-m')}</defs></g>
${panel(12, 14, 'add reactant', `
${bars(30, 130, 50, 50)}
<g class="fig-accent-2"><rect x="30" y="50" width="26" height="30" fill="currentColor" fill-opacity="0.6"/>${T(60, 68, 11, '+R', 'start', '700')}</g>
<g class="fig-muted">${ARR(104, 110, 140, 110, 'arr-ab-lc-m', 2)}</g>
${bars(150, 130, 60, 76)}
<g class="fig-accent">${T(240, 70, 15, 'R ⇌ P →', 'end', '700')}${T(240, 92, 13, 'shifts right', 'end')}</g>
${T(240, 166, 12, 'uses up part of the extra R', 'end')}
<g class="fig-muted">${T(240, 184, 12, 'K unchanged', 'end', '700')}</g>`)}
${panel(286, 14, 'remove product', `
${bars(304, 130, 50, 22)}
<g class="fig-accent-2"><rect x="338" y="80" width="26" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>${T(351, 74, 11, '−P', 'middle', '700')}</g>
<g class="fig-muted">${ARR(378, 110, 414, 110, 'arr-ab-lc-m', 2)}</g>
${bars(424, 130, 36, 32)}
<g class="fig-accent">${T(514, 70, 15, 'R ⇌ P →', 'end', '700')}${T(514, 92, 13, 'shifts right', 'end')}</g>
${T(514, 166, 12, 'refills part of the P removed', 'end')}
<g class="fig-muted">${T(514, 184, 12, 'K unchanged', 'end', '700')}</g>`)}
${panel(12, 208, 'compress (raise P)', `
<rect x="34" y="258" width="70" height="104" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="36" y="259" width="66" height="30" fill="currentColor" fill-opacity="0.08"/>
${LINE(34, 290, 104, 290, 4)}
${LINE(69, 262, 69, 288, 3)}
<g class="fig-accent-2">${ARR(69, 236, 69, 256, 'arr-ab-lc-r', 3)}</g>
${[[48, 310], [68, 326], [90, 312], [52, 346], [84, 346]].map(([cx, cy]) => `<circle cx="${cx}" cy="${cy}" r="5" fill="currentColor"/>`).join('')}
${T(120, 268, 13, '2SO₂ + O₂ ⇌ 2SO₃', 'start', '700')}
${T(120, 288, 12, '3 mol gas  →  2 mol gas')}
<g class="fig-accent">${T(120, 320, 14, 'shifts right →', 'start', '700')}${T(120, 338, 12, 'toward FEWER gas moles')}</g>
<g class="fig-muted">${T(120, 362, 12, 'inert gas, fixed V: no shift')}${T(120, 380, 12, 'K unchanged', 'start', '700')}</g>`)}
${panel(286, 208, 'raise temperature', `
${T(304, 258, 14, 'heat + A ⇌ 2B  (endothermic)', 'start', '700')}
<g class="fig-accent-2">
<path d="M318 330 Q302 308 314 292 Q316 308 326 304 Q332 288 326 274 Q348 292 340 320 Q336 334 318 330 z" fill="currentColor" fill-opacity="0.75"/>
${T(326, 352, 11, 'heat is a', 'middle')}
${T(326, 366, 11, 'reactant', 'middle')}
</g>
<g class="fig-accent">${T(372, 300, 14, 'shifts right →', 'start', '700')}${T(372, 318, 12, 'toward the endothermic side')}</g>
<g class="fig-accent-2">${T(372, 350, 14, 'K CHANGES (rises)', 'start', '700')}</g>
<g class="fig-muted">${T(372, 368, 12, 'exothermic: heat on the right,')}${T(372, 382, 12, 'heating shifts left, K falls')}</g>`)}
<g class="fig-muted">${T(280, 418, 12, 'only temperature changes K — concentration and pressure move the position only', 'middle')}</g>
<g class="fig-muted">${T(280, 434, 12, 'a catalyst changes neither; the shift only PARTLY undoes the disturbance', 'middle')}</g>
</svg>`

export const mcatAcidBaseFigures: DeckFigurePlacement[] = [
  {
    at: 'The pH Scale',
    mode: 'lead',
    figure: {
      svg: phScaleSvg,
      alt:
        'A horizontal pH ruler from 0 to 14, acidic half shaded red (0–7) and basic half blue (7–14), with [H⁺] written under every second tick as 10⁰, 10⁻², … 10⁻¹⁴ M. A red arrow pointing left reads “acidic: every step left multiplies [H⁺] by 10” and a blue arrow pointing right reads “basic: every step right divides [H⁺] by 10”. Markers on the ruler: 0.010 M HCl at pH 2 and 0.100 M acetic acid at pH 2.87 (red), pure water at pH 7 and blood at pH 7.40, 0.0010 M NaOH at pH 11 (blue). A second grey ruler underneath shows pOH running the opposite way, 14 under pH 0 down to 0 under pH 14. Footer: pH + pOH = 14 at 25 °C because Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴; neutral is 7, not “no H⁺”.',
      caption: 'The pH ruler is logarithmic: one unit is a tenfold change in [H⁺], acidic to the left of 7 and basic to the right, with pOH running the other way so the two always add to 14.',
    },
    blocks: [
      '- $\\text{pH} = -\\log[\\text{H}^+]$: one unit = **tenfold** in $[\\text{H}^+]$; pH 2 has 10⁹ times the H⁺ of pH 11',
      '- $\\text{pH} + \\text{pOH} = 14$ because $K_w = [\\text{H}^+][\\text{OH}^-] = 10^{-14}$ at 25 °C (neutral = 7)',
    ],
  },
  {
    at: 'Strong Acids and Bases — 100% Dissociation',
    mode: 'lead',
    figure: {
      svg: strongWeakSvg,
      alt:
        'Two beakers as particle pictures. Left, 0.010 M HCl (strong): ten red H⁺ circles and ten grey Cl⁻ circles, no intact HCl — 10 of 10 split, so [H⁺] = 0.010 M and pH 2. Right, 0.100 M acetic acid (weak): a dense grid of about 75 grey intact HA molecules with a single one split into a red H⁺ and a blue A⁻ — about 1 of 75 split, [H⁺] = 1.3 × 10⁻³ M, pH 2.87. Right column: strong means 100 % dissociated, [H⁺] = C exactly so pH = −log C, 0.010 M HCl = 10⁻² M → pH 2; the seven strong acids HCl HBr HI HNO₃ H₂SO₄ HClO₄ HClO₃. Weak means a few percent, Ka decides: [H⁺] ≈ √(Ka·C) by the 5 % rule, √(1.8 × 10⁻⁵ × 0.100) = 1.34 × 10⁻³ M → pH = 3 − log 1.34 ≈ 2.87. Ten times more acid yet less H⁺: strength (Ka) and concentration (C) are different dials. Strong base: [OH⁻] = C → pOH → pH = 14 − pOH.',
      caption: 'Strength is not concentration: 0.010 M HCl is fully split (pH 2) while 0.100 M acetic acid, ten times more concentrated, keeps about 99 % of its molecules intact (pH 2.87).',
    },
    blocks: [
      '- Strong (the 7 acids, Group 1 and heavy Group 2 hydroxides): 100 % split, so $[\\text{H}^+]$ or $[\\text{OH}^-]$ = $C$',
      '- Weak: only a few % split — $[\\text{H}^+] \\approx \\sqrt{K_a C}$; strength ($K_a$) and concentration ($C$) are different dials',
    ],
  },
  {
    at: 'Percent Dissociation',
    mode: 'lead',
    figure: {
      svg: percentDissSvg,
      alt:
        `Graph of percent dissociation (0–100 %) of acetic acid, Ka = 1.8 × 10⁻⁵, against concentration on a log scale from 1 M down to 10⁻⁵ M, computed exactly. The red curve rises slowly then steeply as the acid is diluted: ${PD_ROWS.map((r) => `${r.label} → ${pctLabel(r.pct)}`).join(', ')}. A table on the right gives, for each concentration, the percent dissociated and the pH: ${PD_ROWS.map((r) => `${r.label}: ${pctLabel(r.pct)}, pH ${r.ph.toFixed(2)}`).join('; ')}. Headline: dilute a weak acid and % dissociation rises (more of it splits) while [H⁺] falls anyway (fewer molecules per litre) — Le Châtelier, toward the side with more particles. % = [H⁺]eq / [HA]₀ × 100; the 5 % shortcut [H⁺] ≈ √(Ka·C) fails below about 0.01 M here, where the quadratic is needed.`,
      caption: 'Percent dissociation of acetic acid computed from Ka = 1.8 × 10⁻⁵: dilution makes a larger fraction split even as [H⁺] (and so the acidity) falls.',
    },
    blocks: [
      '- $\\%\\text{ diss} = [\\text{H}^+]_{eq}/[\\text{HA}]_0 \\times 100$: dilute → **% up, $[\\text{H}^+]$ down** (0.1 M acetic 1.3 %, 10⁻⁴ M 34 %)',
      '- The $\\sqrt{K_a C}$ shortcut holds while % < 5; below ~0.01 M acetic acid, solve the quadratic',
    ],
  },
  {
    at: 'Henderson-Hasselbalch Equation',
    mode: 'lead',
    figure: {
      svg: hhSvg,
      alt:
        'Graph of pH (3 to 7) against the percentage of the acetic acid / acetate pair present as A⁻ (0–100 %), pKa 4.74, computed from pH = pKa + log([A⁻]/[HA]). The curve is an S: steep near 0 % (little A⁻ left, added H⁺ shows at once) and near 100 % (little HA left), flat in the middle. A blue band marks the useful buffer range pKa ± 1, from 1:10 (9 % A⁻, pH 3.74) to 10:1 (91 % A⁻, pH 5.74). A dot at 50 % reads 1:1 → pH = pKa = 4.74; a blue dot at 67 % reads 2:1 → 5.04, the lesson’s worked example (0.100 M acid, 0.200 M acetate: 4.74 + log 2 = 5.04, more base than acid so pH above pKa). Right column: the ratio sets pH and the pKa sets the centre; the flat middle is buffering — moving the ratio barely moves pH, maximum capacity at 1:1; beyond 10:1 or 1:10 the curve turns steep and the buffer is exhausted; choose a pair with pKa within 1 of the target pH.',
      caption: 'Henderson–Hasselbalch drawn out: pH sits at pKa when acid and base are 1:1, drifts only ±1 across the whole 1:10 to 10:1 range, and the worked example (2:1) lands at 5.04.',
    },
    blocks: [
      '- $\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{A}^-]}{[\\text{HA}]}$: 1:1 → pH = p$K_a$ (4.74); 2:1 → 4.74 + 0.30 = **5.04**',
      '- Flat middle = buffering (p$K_a$ ± 1 covers 1:10 … 10:1); past that the curve turns steep — buffer exhausted',
    ],
  },
  {
    at: 'Strong Acid + Strong Base',
    mode: 'lead',
    figure: {
      svg: strongStrongSvg,
      alt:
        `Computed titration curve: pH (0–14) against mL of 0.100 M NaOH (0–100) added to 50.0 mL of 0.100 M HCl. The curve starts at pH ${SA.start.toFixed(2)} (0.100 M H⁺), drifts up slowly as the excess H⁺ shrinks (red; pH ${SA.half.toFixed(2)} at 25 mL), then jumps almost vertically through the equivalence point at 50.0 mL, pH ${SA.eq.toFixed(2)} — from pH ${SA.near.toFixed(1)} to ${SA.past.toFixed(1)} within ±0.1 mL — and levels off in excess OH⁻ (blue), reaching pH ${SA.end.toFixed(2)} at 100 mL; any indicator from pH 4 to 10 works. Right column: moles acid = moles base, MaVa = MbVb → 0.100 × 50.0 = 0.100 × Vb → equivalence at 50.0 mL; before: pH from the leftover strong acid, [H⁺] = (5.00 − 0.100 Vb) mmol ÷ (50 + Vb) mL; at equivalence NaCl + water → pH 7.00, neither ion hydrolyzes; after: pH from the excess strong base via pOH; no buffer region and no half-equivalence rule — a strong acid has no useful pKa; the start is pH 1, not 0, because the acid is 0.100 M.`,
      caption: 'Strong acid + strong base (50.0 mL of 0.100 M HCl with 0.100 M NaOH, computed): a long flat run in excess acid, a near-vertical jump through pH 7.00 at 50.0 mL, then excess base.',
    },
    blocks: [
      '- $M_aV_a = M_bV_b$ → equivalence at 50.0 mL, pH **7.00** (NaCl does not hydrolyze); the jump spans pH ~3 → ~11',
      '- Before: pH from leftover H⁺; after: pH from excess OH⁻ (via pOH). No buffer shelf, no half-equivalence rule',
    ],
  },
  {
    at: 'Weak Acid + Strong Base',
    mode: 'lead',
    figure: {
      svg: weakStrongSvg,
      alt:
        `Computed titration curve of 50.0 mL of 0.100 M acetic acid (pKa 4.74) with 0.100 M NaOH, with the strong-acid curve dashed in grey for comparison. The weak-acid curve starts higher, at pH 2.87 (√(Ka·C); exact ${WA.start.toFixed(2)}), then runs through a shaded blue buffer region (pKa ± 1, about 4.5 to 45 mL) with its flattest point at the half-equivalence point: 25 mL, pH 4.74 = pKa, where [HA] = [A⁻] — the MCAT key fact. The equivalence point at 50 mL sits at pH ${WA.eq.toFixed(2)}, above 7, because the solution is all acetate and A⁻ + H₂O ⇌ HA + OH⁻; after that excess OH⁻ takes over and the curve joins the strong-acid curve, pH ${WA.end.toFixed(2)} at 100 mL. Right column: four regions, four tools — start: weak acid alone → √(Ka·C); buffer: HA + A⁻ → Henderson–Hasselbalch, halfway the ratio is 1:1 so pH = pKa, the flattest part, pKa ± 1 wide; equivalence: only A⁻, Kb = Kw/Ka, pH ${WA.eq.toFixed(2)} (> 7), so use phenolphthalein (8.2–10) not methyl orange; after: excess OH⁻ rules, same as a strong acid. Versus the strong acid: higher start, a shelf in the middle, a smaller jump, equivalence above 7; weak base + strong acid is the mirror image with equivalence below 7.`,
      caption: `Weak acid + strong base computed from Ka = 1.8 × 10⁻⁵: a buffer shelf with pH = pKa = 4.74 at half-equivalence (25 mL) and a basic equivalence point (pH ${WA.eq.toFixed(2)}) because acetate hydrolyzes; the strong-acid curve is dashed for comparison.`,
    },
    blocks: [
      `- Half-equivalence (25 mL): $[\\text{HA}] = [\\text{A}^-]$ → **pH = p$K_a$ = 4.74**; equivalence (50 mL): all A⁻, pH ${WA.eq.toFixed(2)} > 7`,
      '- Four regions, four tools: $\\sqrt{K_aC}$ → Henderson–Hasselbalch → $K_b = K_w/K_a$ → excess OH⁻',
    ],
  },
  {
    at: 'Acid-Base Indicators',
    mode: 'replace-table',
    figure: {
      svg: indicatorsSvg,
      alt:
        `A pH ruler from 0 to 14 with four indicator transition ranges drawn as bars beneath it: methyl orange 3.1–4.4 (red → yellow), bromothymol blue 6.0–7.6 (yellow → blue), litmus 6.0–8.0 (red → blue), phenolphthalein 8.2–10.0 (colourless → pink). Two dashed vertical lines cross the bars: red at pH 7.00, the strong acid + strong base equivalence point, and blue at pH ${WA.eq.toFixed(2)}, the weak acid + NaOH equivalence point. Rule: choose a range that contains the equivalence pH — phenolphthalein catches both; methyl orange would change colour long before the weak-acid equivalence.`,
      caption: `Indicator ranges on the pH ruler: an indicator (a weak acid HIn) changes colour over about its pKa ± 1, so pick one whose range contains the equivalence pH — 7.00 for strong/strong, ${WA.eq.toFixed(2)} for the acetic acid titration.`,
    },
    blocks: [
      '- An indicator is a weak acid: $\\text{HIn} \\rightleftharpoons \\text{H}^+ + \\text{In}^-$, two colours, switch at pH ≈ p$K_a$ ± 1',
      '- Pick the range that **contains the equivalence pH**: strong/strong (7) → almost any',
      '- Weak acid + NaOH (equivalence > 7) → phenolphthalein (8.2–10.0), never methyl orange',
      '- Endpoint (colour change) ≈ equivalence point only when the indicator is chosen this way',
    ],
  },
  {
    at: 'Reaction Quotient Q',
    mode: 'replace-table',
    figure: {
      svg: qNumberLineSvg,
      alt:
        'A number line for Q with K marked at the centre (Q = K: equilibrium, no net change). The left half is blue, Q < K, too few products: a blue arrow points right toward K — shifts RIGHT, makes products, Q climbs to K. The right half is red, Q > K, too many products: a red arrow points left toward K — shifts LEFT, makes reactants, Q falls to K. Boxed example from the lesson: N₂ + 3H₂ ⇌ 2NH₃, K = 0.060, every species 1.0 M, so Q = (1.0)² / (1.0 × 1.0³) = 1.0; Q = 1.0 > K = 0.060, so the system shifts left and NH₃ breaks back down. Q is a snapshot; the reaction moves Q toward K, never K toward Q.',
      caption: 'Q is K’s expression evaluated right now: the reaction always runs in the direction that drives Q toward K — right when Q < K, left when Q > K.',
    },
    blocks: [
      '- $Q = \\frac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b}$ at any moment — same form as $K$, not necessarily its value',
      '- $Q < K$ → too few products → shifts **right**; $Q > K$ → shifts **left**; $Q = K$ → at equilibrium',
      '- Lesson example: all 1.0 M gives $Q = 1.0 > K = 0.060$ → NH₃ decomposes (left)',
    ],
  },
  {
    at: "Le Chatelier's Principle",
    mode: 'replace-table',
    figure: {
      svg: leChatelierSvg,
      alt:
        'Four panels. Add reactant: bar chart of R and P before and after — extra R (red) is added, the system shifts right, using up part of the extra R and raising P; K unchanged. Remove product: part of the P bar is removed (dashed), the system shifts right and refills part of the P removed; K unchanged. Compress (raise P): a piston pushed down on a cylinder of gas molecules; 2SO₂ + O₂ ⇌ 2SO₃ goes from 3 mol gas to 2 mol gas, so it shifts right toward fewer gas moles; an inert gas at constant volume causes no shift; K unchanged. Raise temperature: heat + A ⇌ 2B (endothermic), a flame marks heat as a reactant, so heating shifts right toward the endothermic side and K CHANGES (rises); for an exothermic reaction heat is a product, heating shifts left and K falls. Footer: only temperature changes K — concentration and pressure move the position, a catalyst changes neither; the shift only partly undoes the disturbance.',
      caption: 'Le Châtelier in four pictures: add a reactant or remove a product and the system shifts right; squeeze a gas mixture and it shifts toward fewer gas moles; heat it and it shifts toward the endothermic side — the only case where K itself changes.',
    },
    blocks: [
      '- Disturb an equilibrium and it shifts to **partly** undo the change: add reactant / remove product → right',
      '- Compress → toward fewer moles of gas (2SO₂ + O₂ ⇌ 2SO₃ goes right); inert gas at constant $V$ → no shift',
      '- Heat → toward the endothermic side; **only temperature changes $K$**',
      '- Catalyst: equilibrium reached faster, position and $K$ untouched',
    ],
  },
]
