import type { DeckFigurePlacement } from './index'

/**
 * Respiratory System (MCAT B/B) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (a branching airway
 * tree, a box thorax with a diaphragm curve, a lung inside a chest wall, a
 * spirogram, a partial-pressure bar chart, Hill-equation saturation curves,
 * a chemoreceptor pathway of boxes and arrows, three alveolus–capillary
 * units) — no textbook, prep-company or AAMC figure was copied. Curves are
 * the textbook SHAPE (computed from the Hill equation) and say "illustrative"
 * in the caption; the only numbers plotted are the ones the lesson states
 * (lung volumes, the 160/100/40 and 0.3/40/46 mmHg anchors, ~97% and ~75%
 * saturation, the worked example's 75% → 60% Bohr shift at P_O₂ = 40) plus
 * the standard P50 ≈ 26 mmHg. Anatomy is schematic only.
 *
 * Gas colours are consistent across the deck: O₂ RED (fig-accent-2), CO₂ BLUE
 * (fig-accent); blood keeps the cardiovascular convention (oxygenated red,
 * deoxygenated blue); air is drawn in the text colour.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-rs-<figure>-<colour>).
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

/** A vertical bracket (line with end ticks) for the spirogram. */
const BRACKET = (x: number, y1: number, y2: number, sw = 2) =>
  `<path d="M${x - 5} ${y1} L${x + 5} ${y1} M${x} ${y1} L${x} ${y2} M${x - 5} ${y2} L${x + 5} ${y2}" fill="none" stroke="currentColor" stroke-width="${sw}"/>`

/** Hill-equation saturation S = P^n / (P50^n + P^n), in percent. */
const hillS = (p: number, p50: number, n: number) => (100 * Math.pow(p, n)) / (Math.pow(p50, n) + Math.pow(p, n))

/** A Hill curve as an SVG path, sampled every 2 mmHg from 0 to pMax with the given axis maps. */
const hillPath = (p50: number, n: number, pMax: number, xOf: (p: number) => number, yOf: (s: number) => number) => {
  let d = ''
  for (let p = 0; p <= pMax; p += 2) d += `${p === 0 ? 'M' : ' L'}${xOf(p).toFixed(1)} ${yOf(hillS(p, p50, n)).toFixed(1)}`
  return d
}

/* 1 — The airway as a branching tree: conducting zone above, respiratory zone below (replace-table, 560×440) */
const TERMINALS = [215, 248, 281, 314, 347, 380, 413, 446]
const treeSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<rect x="14" y="26" width="532" height="268" rx="14" fill="currentColor" fill-opacity="0.05"/>
<line x1="14" y1="300" x2="546" y2="300" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6"/>
</g>
${T(24, 50, 17, 'Conducting zone', 'start', '700')}
${T(24, 70, 14, 'warm · humidify · filter')}
${T(24, 88, 14, 'no gas exchange')}
${T(24, 106, 14, 'anatomic dead space ~150 mL', 'start', '700')}
<rect x="300" y="30" width="60" height="32" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/>
${T(370, 52, 14, 'nose → pharynx → larynx')}
<path d="M330 62 L330 150" stroke="currentColor" stroke-width="12" stroke-linecap="round"/>
${T(345, 112, 15, 'trachea')}
<path d="M330 150 L264 200 M330 150 L396 200" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
${T(250, 182, 15, 'bronchi', 'end')}
<path d="M264 200 L231 245 M264 200 L297 245 M396 200 L363 245 M396 200 L429 245" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
${T(222, 232, 15, 'bronchioles', 'end')}
<path d="M231 245 L215 285 M231 245 L248 285 M297 245 L281 285 M297 245 L314 285 M363 245 L347 285 M363 245 L380 285 M429 245 L413 285 M429 245 L446 285" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
${T(206, 276, 14, 'terminal bronchioles', 'end')}
<g class="fig-accent">
<defs>${ARROW('arr-rs-tree-b')}</defs>
<line x1="316" y1="140" x2="316" y2="74" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rs-tree-b)"/>
${T(306, 100, 13, 'mucociliary', 'end')}
${T(306, 116, 13, 'escalator ↑', 'end')}
</g>
<g class="fig-accent-2">
${T(24, 326, 17, 'Respiratory zone', 'start', '700')}
<path d="${TERMINALS.map((x) => `M${x} 285 L${x} 322`).join(' ')}" fill="none" stroke="currentColor" stroke-width="2"/>
${TERMINALS.map((x) => `<circle cx="${x}" cy="334" r="7" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.8"/><circle cx="${x - 7}" cy="348" r="7" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.8"/><circle cx="${x + 7}" cy="348" r="7" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.8"/>`).join('')}
<circle cx="500" cy="362" r="30" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
${T(500, 367, 13, 'alveolus', 'middle')}
</g>
${T(24, 348, 14, 'respiratory bronchioles →')}
${T(24, 366, 14, 'alveolar ducts → alveoli')}
${T(24, 384, 14, '~300 million · gas exchange')}
<g class="fig-accent"><circle cx="521" cy="341" r="5" fill="currentColor"/></g>
${T(496, 410, 13, 'type I: thin wall', 'middle')}
<g class="fig-accent">${T(496, 427, 13, 'type II: surfactant', 'middle')}</g>
</svg>`

/* 2 — Breathing is Boyle's law: inspiration and expiration as a box thorax with a diaphragm curve (lead, 1000×460) */
const PALV = (rel: string) =>
  `P<tspan dy="5" font-size="14">alv</tspan><tspan dy="-5"> ${rel} P</tspan><tspan dy="5" font-size="14">atm</tspan>`
const boyleSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rs-boyle')}</defs>
${BOX(90, 70, 260, 220, 30, 3)}
<rect x="208" y="30" width="24" height="42" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-muted"><rect x="120" y="92" width="200" height="134" rx="40" fill="currentColor" fill-opacity="0.12"/></g>
${T(220, 150, 20, 'V ↑', 'middle', '700')}
${T(220, 184, 20, PALV('&lt;'), 'middle', '700')}
<line x1="352" y1="180" x2="398" y2="180" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-boyle)"/>
<line x1="88" y1="180" x2="42" y2="180" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-boyle)"/>
<g class="fig-accent-2">
<defs>${ARROW('arr-rs-boyle-r')}</defs>
<path d="M92 280 Q220 262 348 280" fill="none" stroke="currentColor" stroke-width="5"/>
<line x1="160" y1="236" x2="160" y2="260" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rs-boyle-r)"/>
<line x1="220" y1="236" x2="220" y2="258" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rs-boyle-r)"/>
<line x1="280" y1="236" x2="280" y2="260" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rs-boyle-r)"/>
${T(220, 308, 15, 'diaphragm contracts and flattens ↓', 'middle')}
<path d="M612 280 Q740 196 868 280" fill="none" stroke="currentColor" stroke-width="5"/>
<line x1="690" y1="240" x2="690" y2="216" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rs-boyle-r)"/>
<line x1="740" y1="232" x2="740" y2="214" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rs-boyle-r)"/>
<line x1="790" y1="240" x2="790" y2="216" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rs-boyle-r)"/>
${T(740, 308, 15, 'diaphragm relaxes and domes ↑', 'middle')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-rs-boyle-b')}</defs>
<line x1="220" y1="8" x2="220" y2="96" stroke="currentColor" stroke-width="4" marker-end="url(#arr-rs-boyle-b)"/>
${T(240, 40, 20, 'air in', 'start', '700')}
<line x1="740" y1="96" x2="740" y2="8" stroke="currentColor" stroke-width="4" marker-end="url(#arr-rs-boyle-b)"/>
${T(760, 40, 20, 'air out', 'start', '700')}
</g>
${BOX(610, 70, 260, 220, 30, 3)}
<rect x="728" y="30" width="24" height="42" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-muted"><rect x="650" y="100" width="180" height="110" rx="36" fill="currentColor" fill-opacity="0.12"/></g>
${T(740, 150, 20, 'V ↓', 'middle', '700')}
${T(740, 184, 20, PALV('&gt;'), 'middle', '700')}
<line x1="916" y1="180" x2="872" y2="180" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-boyle)"/>
<line x1="564" y1="180" x2="608" y2="180" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-boyle)"/>
<g class="fig-muted">${T(500, 120, 16, 'constant T:', 'middle')}</g>
${T(500, 158, 24, 'P₁V₁ = P₂V₂', 'middle', '700')}
${T(500, 200, 20, 'V ↑ ⇒ P ↓', 'middle')}
${T(500, 232, 16, 'air flows down', 'middle')}
${T(500, 254, 16, 'the pressure gradient', 'middle')}
${T(220, 340, 22, 'Inspiration — active', 'middle', '700')}
${T(220, 366, 16, 'diaphragm contracts and flattens;', 'middle')}
${T(220, 388, 16, 'external intercostals lift the ribs', 'middle')}
${T(220, 420, 18, `thoracic V ↑ → ${PALV('&lt;')} → air flows in`, 'middle', '700')}
${T(740, 340, 22, 'Expiration — passive at rest', 'middle', '700')}
${T(740, 366, 16, 'muscles relax; elastic recoil of lungs', 'middle')}
${T(740, 388, 16, 'and chest wall shrinks the thorax', 'middle')}
${T(740, 420, 18, `V ↓ → ${PALV('&gt;')} → air flows out`, 'middle', '700')}
<g class="fig-muted">${T(740, 448, 15, 'forced expiration adds abdominals + internal intercostals (active)', 'middle')}</g>
</svg>`

/* 3 — The pleural seal: negative intrapleural pressure, and what a pneumothorax does to it (lead, 1000×460) */
const pleuraSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rs-pleura')}</defs>
<g class="fig-accent">
<rect x="94" y="74" width="292" height="252" rx="36" fill="currentColor" fill-opacity="0.14"/>
${T(240, 48, 16, 'pleural space: −4 to −6 cmH₂O (negative)', 'middle')}
</g>
<rect x="80" y="60" width="320" height="280" rx="40" fill="none" stroke="currentColor" stroke-width="6"/>
<line x1="402" y1="200" x2="446" y2="200" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-pleura)"/>
<line x1="78" y1="200" x2="34" y2="200" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-pleura)"/>
${T(452, 205, 14, 'OUT')}
${T(28, 205, 14, 'OUT', 'end')}
<g class="fig-accent-2">
<defs>${ARROW('arr-rs-pleura-r')}</defs>
<rect x="112" y="92" width="256" height="216" rx="32" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="3"/>
<line x1="150" y1="200" x2="190" y2="200" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-pleura-r)"/>
<line x1="330" y1="200" x2="290" y2="200" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-pleura-r)"/>
${T(240, 206, 16, 'recoil IN', 'middle', '700')}
${T(240, 252, 15, 'alveoli: P ≈ atmospheric at rest', 'middle')}
</g>
${T(240, 370, 19, 'Normal: the negative pleural pressure is a seal', 'middle', '700')}
${T(240, 396, 16, 'lung pulls in, chest wall springs out — the gap stays negative', 'middle')}
${T(240, 420, 16, 'so the lung follows every chest-wall movement', 'middle')}
<g class="fig-muted"><line x1="500" y1="40" x2="500" y2="430" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/></g>
<g class="fig-muted"><rect x="614" y="74" width="292" height="252" rx="36" fill="currentColor" fill-opacity="0.10"/></g>
<rect x="600" y="60" width="320" height="280" rx="40" fill="none" stroke="currentColor" stroke-width="6"/>
<rect class="fig-bg" x="910" y="170" width="20" height="56"/>
<g class="fig-accent">
<defs>${ARROW('arr-rs-pleura-b')}</defs>
<line x1="992" y1="198" x2="934" y2="198" stroke="currentColor" stroke-width="4" marker-end="url(#arr-rs-pleura-b)"/>
${T(962, 184, 16, 'air in', 'middle', '700')}
</g>
${T(810, 120, 16, 'pleural P → atmospheric (0)', 'middle')}
<g class="fig-accent-2">
<rect x="640" y="150" width="100" height="100" rx="24" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="3"/>
${T(690, 276, 15, 'collapsed lung', 'middle')}
</g>
${T(810, 300, 15, "seal broken: the lung's own", 'middle')}
${T(810, 322, 15, 'inward recoil collapses it', 'middle')}
${T(760, 370, 19, 'Pneumothorax: air enters, the seal is lost', 'middle', '700')}
${T(760, 396, 16, 'intrapleural pressure rises to atmospheric', 'middle')}
${T(760, 420, 16, 'unopposed elastic recoil collapses the lung', 'middle')}
</svg>`

/* 4 — Lung volumes and capacities on a spirogram (replace-table, 560×440) */
const spiroSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-rs-spiro')}</defs>
<g class="fig-muted">
${T(20, 22, 13, 'quiet breaths → maximal inhale → maximal exhale (illustrative shape, lesson values)')}
<rect x="20" y="343" width="270" height="77" fill="currentColor" fill-opacity="0.12"/>
${T(155, 378, 13, 'RV: never exhaled —', 'middle')}
${T(155, 395, 13, 'invisible to spirometry', 'middle')}
<line x1="150" y1="40" x2="505" y2="40" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="95" y1="233" x2="305" y2="233" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="110" y1="265" x2="460" y2="265" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="200" y1="343" x2="415" y2="343" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
${T(295, 436, 13, 'time →', 'end')}
</g>
<line x1="20" y1="420" x2="505" y2="420" stroke="currentColor" stroke-width="2"/>
${T(14, 424, 11, '0', 'end')}
<path d="M20 265 L35 233 L50 265 L65 233 L80 265 L95 233 L110 265 L150 40 L200 343 L230 265 L245 233 L260 265 L275 233 L290 265" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
${BRACKET(305, 40, 233)}
${T(316, 142, 15, 'IRV ~3000', 'start', '700')}
${BRACKET(305, 233, 265)}
${T(316, 254, 15, 'TV 500', 'start', '700')}
${BRACKET(305, 265, 343)}
${T(316, 309, 15, 'ERV ~1200', 'start', '700')}
${BRACKET(305, 343, 420)}
${T(316, 386, 15, 'RV ~1200', 'start', '700')}
<g class="fig-accent">
${BRACKET(415, 40, 343, 2.5)}
<text x="431" y="191" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor" transform="rotate(-90 431 191)">VC ~4700 = IRV + TV + ERV</text>
${BRACKET(460, 265, 420, 2.5)}
<text x="476" y="342" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor" transform="rotate(-90 476 342)">FRC ~2400 = ERV + RV</text>
${BRACKET(505, 40, 420, 2.5)}
<text x="521" y="230" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor" transform="rotate(-90 521 230)">TLC ~5900 = VC + RV</text>
</g>
</svg>`

/* 5 — Partial pressures of O₂ and CO₂ along the path atmosphere → alveolus → artery → tissue (replace-table, 560×440) */
const PP_GROUPS: { cx: number; o2: number; o2Label: string; co2: number; co2Label: string; name: [string, string] }[] = [
  { cx: 105, o2: 160, o2Label: '160', co2: 0.3, co2Label: '0.3', name: ['atmosphere', '(sea level)'] },
  { cx: 235, o2: 100, o2Label: '100', co2: 40, co2Label: '40', name: ['alveolar', 'air'] },
  { cx: 365, o2: 97, o2Label: '95–100', co2: 40, co2Label: '40', name: ['arterial', 'blood'] },
  { cx: 495, o2: 40, o2Label: '40', co2: 46, co2Label: '46', name: ['tissues /', 'venous blood'] },
]
const PP_Y = (mmHg: number) => 330 - mmHg * 1.6875
const ppBars = PP_GROUPS.map((g) => {
  const o2Top = PP_Y(g.o2)
  const co2Top = Math.min(PP_Y(g.co2), 329)
  return `<g class="fig-accent-2"><rect x="${g.cx - 38}" y="${o2Top.toFixed(1)}" width="34" height="${(330 - o2Top).toFixed(1)}" fill="currentColor" fill-opacity="0.55"/>${T(g.cx - 21, Math.round(o2Top) - 6, 14, g.o2Label, 'middle', '700')}</g>` +
    `<g class="fig-accent"><rect x="${g.cx + 4}" y="${co2Top.toFixed(1)}" width="34" height="${(330 - co2Top).toFixed(1)}" fill="currentColor" fill-opacity="0.55"/>${T(g.cx + 21, Math.round(co2Top) - 6, 14, g.co2Label, 'middle', '700')}</g>` +
    `${T(g.cx, 352, 13, g.name[0], 'middle')}${T(g.cx, 369, 13, g.name[1], 'middle')}`
}).join('\n')
const ppSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-rs-pp')}</defs>
<line x1="46" y1="330" x2="48" y2="48" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rs-pp)"/>
<line x1="46" y1="330" x2="540" y2="330" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">
${T(50, 40, 12, 'mmHg')}
${T(40, 64, 12, '160', 'end')}
${T(40, 165, 12, '100', 'end')}
${T(40, 266, 12, '40', 'end')}
${T(40, 334, 12, '0', 'end')}
${T(166, 112, 12, 'humidified +', 'middle')}
${T(166, 128, 12, 'mixed with', 'middle')}
${T(166, 144, 12, 'CO₂-rich', 'middle')}
${T(166, 160, 12, 'residual gas', 'middle')}
</g>
${ppBars}
<g class="fig-accent-2">
<defs>${ARROW('arr-rs-pp-r')}</defs>
<line x1="250" y1="200" x2="322" y2="200" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-pp-r)"/>
${T(286, 192, 14, 'O₂', 'middle', '700')}
<line x1="380" y1="200" x2="452" y2="200" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-pp-r)"/>
${T(416, 192, 14, 'O₂', 'middle', '700')}
<rect x="46" y="389" width="14" height="12" fill="currentColor" fill-opacity="0.55"/>
${T(66, 400, 13, 'O₂', 'start', '700')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-rs-pp-b')}</defs>
<line x1="322" y1="238" x2="250" y2="238" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-pp-b)"/>
${T(286, 230, 14, 'CO₂', 'middle', '700')}
<line x1="452" y1="238" x2="380" y2="238" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-pp-b)"/>
${T(416, 230, 14, 'CO₂', 'middle', '700')}
<rect x="110" y="389" width="14" height="12" fill="currentColor" fill-opacity="0.55"/>
${T(130, 400, 13, 'CO₂', 'start', '700')}
</g>
<g class="fig-muted">${T(180, 400, 13, 'each gas moves down ITS OWN gradient')}</g>
${T(46, 423, 13, 'lungs: O₂ in, CO₂ out · tissues: both reverse (venous CO₂ 46 → alveolar 40)')}
</svg>`

/* 6 — The oxygen–hemoglobin dissociation curve, with myoglobin for contrast (lead, 1000×460) */
const HB_N = 2.7
const HB_P50 = 26
const hbX = (p: number) => 100 + 4 * p
const hbY = (s: number) => 400 - 3.2 * s
const hbSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rs-hb')}</defs>
<g class="fig-muted">
<rect x="${hbX(60)}" y="80" width="${hbX(120) - hbX(60)}" height="320" fill="currentColor" fill-opacity="0.06"/>
<line x1="100" y1="${hbY(hillS(100, HB_P50, HB_N)).toFixed(1)}" x2="${hbX(100)}" y2="${hbY(hillS(100, HB_P50, HB_N)).toFixed(1)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
<line x1="${hbX(100)}" y1="400" x2="${hbX(100)}" y2="${hbY(hillS(100, HB_P50, HB_N)).toFixed(1)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
<line x1="100" y1="${hbY(hillS(40, HB_P50, HB_N)).toFixed(1)}" x2="${hbX(40)}" y2="${hbY(hillS(40, HB_P50, HB_N)).toFixed(1)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
<line x1="${hbX(40)}" y1="400" x2="${hbX(40)}" y2="${hbY(hillS(40, HB_P50, HB_N)).toFixed(1)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
<line x1="100" y1="32" x2="140" y2="32" stroke="currentColor" stroke-width="3" stroke-dasharray="7 5"/>
${T(150, 37, 16, 'myoglobin — hyperbolic, higher affinity (takes O₂ from Hb)')}
<path d="${hillPath(2.75, 1, 120, hbX, hbY)}" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="7 5"/>
${T(260, 442, 14, 'tissue', 'middle')}
${T(500, 442, 14, 'arterial', 'middle')}
</g>
<line x1="100" y1="58" x2="140" y2="58" stroke="currentColor" stroke-width="4"/>
${T(150, 63, 16, 'hemoglobin — sigmoidal (cooperative binding, 4 hemes)')}
<line x1="100" y1="400" x2="600" y2="400" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rs-hb)"/>
<line x1="100" y1="400" x2="100" y2="74" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rs-hb)"/>
<path d="${hillPath(HB_P50, HB_N, 120, hbX, hbY)}" fill="none" stroke="currentColor" stroke-width="4"/>
<circle cx="${hbX(100)}" cy="${hbY(hillS(100, HB_P50, HB_N)).toFixed(1)}" r="7" fill="currentColor"/>
<circle cx="${hbX(40)}" cy="${hbY(hillS(40, HB_P50, HB_N)).toFixed(1)}" r="7" fill="currentColor"/>
${T(92, 93, 15, '~97%', 'end', '700')}
${T(92, 165, 15, '~75%', 'end', '700')}
${T(92, 245, 15, '50%', 'end')}
${T(100, 422, 15, '0', 'middle')}
${T(260, 422, 15, '40', 'middle', '700')}
${T(500, 422, 15, '100', 'middle', '700')}
${T(380, 442, 16, 'P<tspan dy="4" font-size="12">O₂</tspan><tspan dy="-4"> (mmHg)</tspan>', 'middle')}
<text x="40" y="240" font-size="16" text-anchor="middle" fill="currentColor" transform="rotate(-90 40 240)">Hb O₂ saturation (%)</text>
<g class="fig-accent-2">
<line x1="100" y1="240" x2="${hbX(HB_P50)}" y2="240" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
<line x1="${hbX(HB_P50)}" y1="400" x2="${hbX(HB_P50)}" y2="240" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
<circle cx="${hbX(HB_P50)}" cy="240" r="7" fill="currentColor"/>
${T(hbX(HB_P50), 422, 15, 'P₅₀ ≈ 26', 'middle', '700')}
</g>
${T(300, 296, 17, 'Hb: sigmoidal', 'start', '700')}
${T(300, 318, 15, 'the first O₂ makes the next easier')}
${T(620, 110, 19, 'Flat top = loading plateau', 'start', '700')}
${T(620, 136, 16, 'arterial Hb stays ~97% saturated')}
${T(620, 158, 16, 'even if alveolar P<tspan dy="4" font-size="12">O₂</tspan><tspan dy="-4"> dips modestly</tspan>')}
${T(620, 206, 19, 'Steep middle = unloading zone', 'start', '700')}
${T(620, 232, 16, 'a small P<tspan dy="4" font-size="12">O₂</tspan><tspan dy="-4"> drop at the tissues</tspan>')}
${T(620, 254, 16, 'releases a lot of O₂ (~75% left at 40 mmHg)')}
${T(620, 302, 19, 'Cooperativity → sigmoid', 'start', '700')}
${T(620, 328, 16, 'each O₂ bound tips Hb toward the')}
${T(620, 350, 16, 'high-affinity R state (4 subunits, 4 O₂)')}
<g class="fig-muted">${T(620, 398, 16, 'dissolved O₂ ≈ 1.5%; ~98.5% rides on Hb')}</g>
</svg>`

/* 7 — Right and left shifts of the curve: the Bohr effect at tissue P_O₂ = 40 (lead, 1000×460) */
const bohrX = (p: number) => 90 + 5 * p
const bohrY = (s: number) => 400 - 3.2 * s
const BOHR_RIGHT_P50 = 34.4 // chosen so the shifted curve reads 60% at P_O₂ = 40, the lesson's worked-example numbers
const BOHR_LEFT_P50 = 20
const bohrSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rs-bohr')}</defs>
<g class="fig-muted">
<line x1="${bohrX(40)}" y1="400" x2="${bohrX(40)}" y2="${bohrY(hillS(40, BOHR_LEFT_P50, HB_N)).toFixed(1)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
<line x1="90" y1="${bohrY(hillS(40, HB_P50, HB_N)).toFixed(1)}" x2="${bohrX(40)}" y2="${bohrY(hillS(40, HB_P50, HB_N)).toFixed(1)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
${T(bohrX(40), 442, 14, 'tissue P<tspan dy="4" font-size="11">O₂</tspan>', 'middle')}
</g>
<line x1="90" y1="400" x2="610" y2="400" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rs-bohr)"/>
<line x1="90" y1="400" x2="90" y2="50" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rs-bohr)"/>
${T(90, 422, 15, '0', 'middle')}
${T(bohrX(40), 422, 15, '40', 'middle', '700')}
${T(bohrX(100), 422, 15, '100', 'middle')}
${T(590, 442, 15, 'P<tspan dy="4" font-size="11">O₂</tspan><tspan dy="-4"> (mmHg)</tspan>', 'end')}
<text x="40" y="225" font-size="16" text-anchor="middle" fill="currentColor" transform="rotate(-90 40 225)">Hb O₂ saturation (%)</text>
<path d="${hillPath(HB_P50, HB_N, 100, bohrX, bohrY)}" fill="none" stroke="currentColor" stroke-width="4"/>
<circle cx="${bohrX(40)}" cy="${bohrY(hillS(40, HB_P50, HB_N)).toFixed(1)}" r="7" fill="currentColor"/>
${T(82, Math.round(bohrY(hillS(40, HB_P50, HB_N))) + 5, 15, '75%', 'end', '700')}
${T(596, 98, 15, 'normal', 'start', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-rs-bohr-r')}</defs>
<path d="${hillPath(BOHR_RIGHT_P50, HB_N, 100, bohrX, bohrY)}" fill="none" stroke="currentColor" stroke-width="4"/>
<line x1="90" y1="${bohrY(hillS(40, BOHR_RIGHT_P50, HB_N)).toFixed(1)}" x2="${bohrX(40)}" y2="${bohrY(hillS(40, BOHR_RIGHT_P50, HB_N)).toFixed(1)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
<circle cx="${bohrX(40)}" cy="${bohrY(hillS(40, BOHR_RIGHT_P50, HB_N)).toFixed(1)}" r="7" fill="currentColor"/>
${T(82, Math.round(bohrY(hillS(40, BOHR_RIGHT_P50, HB_N))) + 5, 15, '60%', 'end', '700')}
${T(596, 118, 15, 'right shift', 'start', '700')}
<line x1="215" y1="345" x2="275" y2="345" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-bohr-r)"/>
${T(245, 366, 14, 'right', 'middle')}
${T(320, 322, 16, '60% vs 75% saturation', 'start', '700')}
${T(700, 96, 18, 'RIGHT shift = easier unloading', 'start', '700')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-rs-bohr-b')}</defs>
<path d="${hillPath(BOHR_LEFT_P50, HB_N, 100, bohrX, bohrY)}" fill="none" stroke="currentColor" stroke-width="3"/>
<circle cx="${bohrX(40)}" cy="${bohrY(hillS(40, BOHR_LEFT_P50, HB_N)).toFixed(1)}" r="6" fill="currentColor"/>
${T(596, 78, 15, 'left shift', 'start', '700')}
<line x1="175" y1="250" x2="125" y2="250" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-bohr-b)"/>
${T(150, 240, 14, 'left', 'middle')}
${T(700, 250, 18, 'LEFT shift = holds O₂ tighter', 'start', '700')}
</g>
${T(320, 300, 16, 'at tissue P<tspan dy="4" font-size="12">O₂</tspan><tspan dy="-4"> = 40 mmHg:</tspan>')}
${T(320, 344, 16, '→ 15% more O₂ released')}
${T(700, 124, 17, '↑ P<tspan dy="4" font-size="12">CO₂</tspan><tspan dy="-4">, ↑ H⁺ (↓ pH): the Bohr effect</tspan>')}
${T(700, 148, 17, '↑ temperature')}
${T(700, 172, 17, '↑ 2,3-BPG (altitude, anemia)')}
<g class="fig-muted">${T(700, 198, 15, 'signatures of active tissue; P₅₀ rises')}</g>
${T(700, 278, 17, '↓ CO₂, ↓ H⁺, ↓ temperature, ↓ 2,3-BPG')}
${T(700, 302, 17, 'fetal Hb (binds 2,3-BPG poorly)')}
${T(700, 326, 17, 'CO (and it also steals heme sites)')}
<g class="fig-muted">${T(700, 352, 15, 'P₅₀ falls — harder to unload')}</g>
<g class="fig-muted">
${T(700, 392, 15, 'loading barely suffers: the lung')}
${T(700, 412, 15, 'plateau is flat at P<tspan dy="4" font-size="11">O₂</tspan><tspan dy="-4"> ≈ 100</tspan>')}
</g>
</svg>`

/* 8 — Chemoreceptors: CO₂ read as CSF H⁺ by central receptors, O₂ only by the peripheral bodies (replace-table, 560×440) */
const chemoSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-rs-chemo')}</defs>
<g class="fig-muted">${T(22, 16, 13, 'arterial blood')}</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-rs-chemo-r')}</defs>
<rect x="20" y="24" width="520" height="52" rx="26" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
${T(440, 55, 13, '↓ P<tspan dy="3" font-size="10">O₂</tspan><tspan dy="-3"> (&lt; ~60) · ↑ CO₂ · ↑ H⁺</tspan>', 'middle', '700')}
<line x1="440" y1="78" x2="440" y2="158" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-chemo-r)"/>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-rs-chemo-b')}</defs>
${T(100, 56, 17, 'CO₂', 'middle', '700')}
<line x1="100" y1="78" x2="100" y2="138" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-chemo-b)"/>
${T(112, 94, 13, 'crosses freely')}
</g>
${T(230, 56, 17, 'H⁺', 'middle', '700')}
<line x1="230" y1="78" x2="230" y2="96" stroke="currentColor" stroke-width="3"/>
<path d="M224 100 L236 112 M236 100 L224 112" stroke="currentColor" stroke-width="2.5"/>
${T(242, 94, 13, 'blocked')}
<g class="fig-muted">
<rect x="20" y="100" width="280" height="12" fill="currentColor" fill-opacity="0.35"/>
${T(308, 110, 13, 'blood–brain barrier')}
</g>
${BOX(30, 140, 260, 60, 10)}
${T(160, 163, 14, 'CSF: CO₂ + H₂O → H⁺ + HCO₃⁻', 'middle')}
<g class="fig-muted">${T(160, 186, 13, 'CO₂ is hydrated → CSF H⁺ rises', 'middle')}</g>
<line x1="160" y1="200" x2="160" y2="220" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rs-chemo)"/>
${BOX(30, 222, 260, 50, 10)}
${T(160, 243, 15, 'central chemoreceptors', 'middle', '700')}
${T(160, 263, 13, 'medulla · read CSF H⁺ = CO₂ · blind to O₂', 'middle')}
${BOX(318, 160, 218, 72, 10)}
${T(427, 182, 14, 'peripheral chemoreceptors', 'middle', '700')}
${T(427, 201, 13, 'carotid and aortic bodies', 'middle')}
<g class="fig-accent-2">${T(427, 221, 13, 'the ONLY sensors of low O₂', 'middle', '700')}</g>
<line x1="160" y1="272" x2="160" y2="298" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rs-chemo)"/>
<line x1="427" y1="232" x2="392" y2="298" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rs-chemo)"/>
${BOX(130, 300, 300, 46, 10, 2.5, 0.06)}
${T(280, 320, 15, 'respiratory center (medulla)', 'middle', '700')}
${T(280, 339, 13, '↑ rhythm → phrenic nerve → diaphragm', 'middle')}
<line x1="280" y1="346" x2="280" y2="370" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rs-chemo)"/>
${BOX(130, 372, 300, 44, 10)}
${T(280, 391, 15, '↑ ventilation', 'middle', '700')}
${T(280, 409, 13, 'blows off CO₂ → P<tspan dy="3" font-size="10">CO₂</tspan><tspan dy="-3"> and H⁺ fall</tspan>', 'middle')}
<g class="fig-muted">
<defs>${ARROW('arr-rs-chemo-m')}</defs>
<path d="M430 394 L545 394 L545 84" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#arr-rs-chemo-m)"/>
${T(488, 436, 12, 'negative feedback', 'middle')}
</g>
</svg>`

/* 9 — Ventilation–perfusion matching: shunt, normal, dead space as three alveolus–capillary units (lead, 1000×460) */
const vqUnit = (cx: number, kind: 'shunt' | 'normal' | 'dead') => {
  const tube = `<rect x="${cx - 16}" y="20" width="32" height="74" fill="none" stroke="currentColor" stroke-width="2.5"/>`
  const air = kind === 'shunt'
    ? `<g class="fig-muted"><rect x="${cx - 14}" y="48" width="28" height="30" fill="currentColor" fill-opacity="0.6"/>${T(cx + 24, 68, 14, 'plug')}</g>`
    : `<line x1="${cx}" y1="34" x2="${cx}" y2="84" stroke="currentColor" stroke-width="2.5" marker-start="url(#arr-rs-vq)" marker-end="url(#arr-rs-vq)"/>${T(cx + 24, 60, 15, kind === 'normal' ? 'V = air' : 'air')}`
  const alveolus = kind === 'shunt'
    ? `<g class="fig-muted"><circle cx="${cx}" cy="150" r="60" fill="currentColor" fill-opacity="0.22"/>${T(cx, 155, 14, 'no air', 'middle')}</g><circle cx="${cx}" cy="150" r="60" fill="none" stroke="currentColor" stroke-width="3"/>`
    : `<circle cx="${cx}" cy="150" r="60" fill="none" stroke="currentColor" stroke-width="3"/>`
  const capillary = `<rect x="${cx - 130}" y="236" width="260" height="40" rx="20" fill="none" stroke="currentColor" stroke-width="2.5"/>`
  let blood = ''
  if (kind === 'normal') {
    blood = `<g class="fig-accent"><rect x="${cx - 128}" y="238" width="130" height="36" rx="18" fill="currentColor" fill-opacity="0.3"/><line x1="${cx - 162}" y1="256" x2="${cx - 136}" y2="256" stroke="currentColor" stroke-width="4" marker-end="url(#arr-rs-vq-b)"/><line x1="${cx + 22}" y1="234" x2="${cx + 22}" y2="212" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-vq-b)"/>${T(cx + 32, 230, 15, 'CO₂', 'start', '700')}</g>` +
      `<g class="fig-accent-2"><rect x="${cx - 2}" y="238" width="130" height="36" rx="18" fill="currentColor" fill-opacity="0.3"/><line x1="${cx + 136}" y1="256" x2="${cx + 162}" y2="256" stroke="currentColor" stroke-width="4" marker-end="url(#arr-rs-vq-r)"/><line x1="${cx - 22}" y1="214" x2="${cx - 22}" y2="234" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rs-vq-r)"/>${T(cx - 32, 230, 15, 'O₂', 'end', '700')}</g>` +
      `<g class="fig-muted">${T(cx, 300, 15, 'Q = blood', 'middle')}</g>`
  } else if (kind === 'shunt') {
    blood = `<g class="fig-accent"><rect x="${cx - 128}" y="238" width="256" height="36" rx="18" fill="currentColor" fill-opacity="0.3"/><line x1="${cx - 162}" y1="256" x2="${cx - 136}" y2="256" stroke="currentColor" stroke-width="4" marker-end="url(#arr-rs-vq-b)"/><line x1="${cx + 136}" y1="256" x2="${cx + 162}" y2="256" stroke="currentColor" stroke-width="4" marker-end="url(#arr-rs-vq-b)"/>${T(cx, 261, 14, 'still deoxygenated', 'middle', '700')}</g>`
  } else {
    blood = `<g class="fig-accent"><line x1="${cx - 162}" y1="256" x2="${cx - 140}" y2="256" stroke="currentColor" stroke-width="4" marker-end="url(#arr-rs-vq-b)"/></g>` +
      `<ellipse cx="${cx - 114}" cy="256" rx="15" ry="14" fill="currentColor"/>${T(cx - 114, 300, 14, 'embolus', 'middle')}` +
      `<g class="fig-muted">${T(cx + 12, 261, 14, 'no blood flow', 'middle')}</g>`
  }
  return tube + air + alveolus + capillary + blood
}
const vqSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rs-vq')}</defs>
<g class="fig-accent"><defs>${ARROW('arr-rs-vq-b')}</defs></g>
<g class="fig-accent-2"><defs>${ARROW('arr-rs-vq-r')}</defs></g>
${vqUnit(170, 'shunt')}
${vqUnit(500, 'normal')}
${vqUnit(830, 'dead')}
${T(170, 330, 20, 'Shunt: V/Q → 0', 'middle', '700')}
${T(170, 358, 17, 'perfused, not ventilated', 'middle')}
${T(170, 382, 16, '(mucus plug, pneumonia fluid)', 'middle')}
${T(170, 406, 16, 'blood passes unoxygenated;', 'middle')}
${T(170, 428, 16, '100% O₂ barely helps', 'middle')}
${T(500, 330, 20, 'Normal: V/Q ≈ 0.8', 'middle', '700')}
${T(500, 358, 17, 'air and blood meet at the same alveolus', 'middle')}
${T(500, 382, 16, 'O₂ loads, CO₂ unloads', 'middle')}
<g class="fig-muted">
${T(500, 410, 15, 'upright: V/Q high at the apex,', 'middle')}
${T(500, 430, 15, 'low at the base (perfusion rises faster)', 'middle')}
</g>
${T(830, 330, 20, 'Dead space: V/Q → ∞', 'middle', '700')}
${T(830, 358, 17, 'ventilated, not perfused', 'middle')}
${T(830, 382, 16, '(pulmonary embolism)', 'middle')}
${T(830, 406, 16, 'air moves, but no blood', 'middle')}
${T(830, 428, 16, 'arrives to collect the O₂', 'middle')}
</svg>`

export const mcatRespiratoryFigures: DeckFigurePlacement[] = [
  {
    at: 'Conducting vs. Respiratory Zones',
    mode: 'replace-table',
    figure: {
      svg: treeSvg,
      alt:
        'The airway drawn as a branching tree. A shaded upper band is the conducting zone: nose → pharynx → larynx (a box at the top), then the trachea trunk splitting into two bronchi, then bronchioles and eight terminal bronchioles, each level thinner; a blue arrow up the trachea marks the mucociliary escalator. Notes: warm, humidify, filter; no gas exchange; anatomic dead space ~150 mL. Below a dashed line is the respiratory zone in red: each terminal bronchiole continues as a respiratory bronchiole into a cluster of three alveoli; notes: respiratory bronchioles → alveolar ducts → ~300 million alveoli, gas exchange. Inset: one alveolus as a circle whose wall is the thin type I cell, with a blue dot for a type II cell that secretes surfactant.',
      caption: 'Conducting zone (dead space, no exchange) above the dashed line; respiratory zone (alveoli, gas exchange) below it — schematic.',
    },
    blocks: [
      '- **Conducting zone** (nose → pharynx → larynx → trachea → bronchi → terminal bronchioles): warms, humidifies, filters — **no gas exchange**; anatomic dead space ~150 mL',
      '- **Respiratory zone** (respiratory bronchioles → alveolar ducts → ~300 million alveoli): gas exchange across the alveolar–capillary membrane',
      '- Defenses: nasal hairs, the **mucociliary escalator** (goblet-cell mucus swept up by cilia), alveolar **macrophages**',
      '- Alveolar wall = **type I** pneumocytes, one cell thick; **type II** pneumocytes secrete **surfactant**',
    ],
  },
  {
    at: "Breathing Is Boyle's Law",
    mode: 'lead',
    figure: {
      svg: boyleSvg,
      alt:
        'Two box thoraxes side by side with P₁V₁ = P₂V₂ between them. Left, inspiration (active): the red diaphragm curve at the bottom flattens downward (red arrows down), arrows push the chest wall outward, the lung inside is large and labelled V ↑ and P_alv < P_atm, and a blue arrow brings air in through the trachea; text: diaphragm contracts and flattens, external intercostals lift the ribs; thoracic V ↑ → P_alv < P_atm → air flows in. Right, expiration (passive at rest): the diaphragm domes upward (red arrows up), arrows push the chest wall inward, the lung is smaller and labelled V ↓ and P_alv > P_atm, and a blue arrow carries air out; text: muscles relax, elastic recoil of lungs and chest wall shrinks the thorax; V ↓ → P_alv > P_atm → air flows out; forced expiration adds abdominals and internal intercostals.',
      caption: "Breathing is Boyle's law: muscles change thoracic volume, alveolar pressure follows, and air flows down the pressure gradient — schematic.",
    },
    blocks: [
      '- Muscles set thoracic **volume**; pressure follows ($P_1V_1 = P_2V_2$) and air flows down the gradient',
      '- Quiet expiration = **passive** elastic recoil; forced expiration adds abdominals + internal intercostals',
    ],
  },
  {
    at: 'The Pleural Seal',
    mode: 'lead',
    figure: {
      svg: pleuraSvg,
      alt:
        'Left, normal: a lung (red outline) sits inside a thick chest wall with a thin blue-shaded pleural space between them labelled −4 to −6 cmH₂O (negative). Red arrows inside the lung point inward (recoil IN); arrows on the chest wall point outward (OUT); the alveoli are at about atmospheric pressure at rest. Caption: the negative pleural pressure is a seal — lung pulls in, chest wall springs out, the gap stays negative, so the lung follows every chest-wall movement. Right, pneumothorax: the chest wall has a hole on the right through which a blue arrow brings air in; the pleural space is now large and grey, labelled pleural P → atmospheric (0); the lung is a small collapsed red shape; caption: air enters, the seal is lost, intrapleural pressure rises to atmospheric, and unopposed elastic recoil collapses the lung.',
      caption: 'The pleural seal: negative intrapleural pressure couples lung to chest wall; a pneumothorax vents it and the lung collapses from its own recoil — schematic.',
    },
    blocks: [
      '- Intrapleural pressure is **negative** (−4 to −6 cmH₂O): the lung recoils in while the chest wall springs out',
      '- **Pneumothorax** vents the pleural space → pressure equalizes → elastic recoil collapses the lung',
    ],
  },
  {
    at: 'Lung Volumes & Capacities',
    mode: 'replace-table',
    figure: {
      svg: spiroSvg,
      alt:
        'A spirogram: volume against time. Three quiet tidal breaths, then one maximal inhalation up to total lung capacity, one maximal exhalation down to residual volume, then quiet breaths again. A grey shaded band at the bottom is the residual volume, which is never exhaled and invisible to spirometry. Brackets on the right stack the four volumes: IRV ~3000 mL (from the top of a tidal breath up to TLC), TV 500 mL, ERV ~1200 mL (below a tidal breath down to RV), RV ~1200 mL (the bottom band). Blue brackets further right show the capacities as sums: VC ~4700 = IRV + TV + ERV; FRC ~2400 = ERV + RV; TLC ~5900 = VC + RV.',
      caption: 'Lung volumes and capacities on a spirogram (illustrative shape, lesson values): every capacity is a sum of volumes, and anything containing RV is invisible to spirometry.',
    },
    blocks: [
      '- Four primitive **volumes**: TV 500, IRV ~3000, ERV ~1200, RV ~1200 mL — RV keeps alveoli open and can **never** be exhaled',
      '- **Capacities are sums**: VC = IRV + TV + ERV (~4700); FRC = ERV + RV (~2400); TLC = VC + RV (~5900 mL)',
      '- **Spirometry cannot measure RV** — nor FRC or TLC, which contain it',
    ],
  },
  {
    at: 'Partial Pressures Drive Everything',
    mode: 'replace-table',
    figure: {
      svg: ppSvg,
      alt:
        'A bar chart of partial pressures (mmHg) at four locations along the path: atmosphere (sea level), alveolar air, arterial blood, tissues / venous blood. Red O₂ bars step down: 160, 100, 95–100, 40. Blue CO₂ bars step up: 0.3, 40, 40, 46. Between atmosphere and alveolus a note explains the drop: inspired air is humidified and mixed with CO₂-rich residual gas. Between alveolus and blood a red arrow carries O₂ forward and a blue arrow carries CO₂ back toward the alveolus; between blood and tissue the same pair — O₂ onward into tissue, CO₂ back into blood. Footnote: each gas moves down its own gradient; lungs: O₂ in, CO₂ out; tissues: both reverse (venous CO₂ 46 → alveolar 40).',
      caption: 'Partial pressures along the path (lesson values): O₂ falls from 160 to 40 mmHg, CO₂ rises from 0.3 to 46 — each gas diffuses down its own gradient.',
    },
    blocks: [
      '- **Dalton:** $P_x = F_x \\times P_{total}$; **Henry:** dissolved gas ∝ its partial pressure',
      '- Gases diffuse **down partial-pressure gradients** — never "toward where they are needed"',
      '- Alveolar $P_{O_2}$ (~100) is below atmospheric (~160): inspired air is **humidified** and mixes with CO2-rich residual gas',
      '- At the alveolus O2 enters blood and CO2 leaves; at the tissues both gradients **reverse** (venous ~40 / ~46 mmHg)',
    ],
  },
  {
    at: 'Hemoglobin and the Oxygen Dissociation Curve',
    mode: 'lead',
    figure: {
      svg: hbSvg,
      alt:
        'Hb O₂ saturation (%) against P_O₂ (mmHg) from 0 to 120. A thick sigmoidal hemoglobin curve rises slowly at first, steeply through the middle, and flattens above about 60 mmHg (the shaded loading plateau). Dots and dashed guides mark ~97% at P_O₂ 100 (arterial), ~75% at 40 (tissue), and 50% at the red P₅₀ ≈ 26 mmHg. A dashed grey myoglobin curve is hyperbolic, rising almost immediately to near-saturation — higher affinity, it takes O₂ from Hb. Notes: flat top = loading plateau, arterial Hb stays ~97% saturated even if alveolar P_O₂ dips modestly; steep middle = unloading zone, a small P_O₂ drop at the tissues releases a lot of O₂; cooperativity → sigmoid, each O₂ bound tips Hb toward the high-affinity R state; dissolved O₂ ≈ 1.5%, ~98.5% rides on Hb.',
      caption: 'The O₂–hemoglobin dissociation curve (illustrative Hill-equation shape): sigmoidal for cooperative Hb, hyperbolic for myoglobin; ~97% at 100 mmHg, ~75% at 40, P₅₀ ≈ 26.',
    },
    blocks: [
      '- **Cooperativity** (T → R) makes the Hb curve sigmoidal; myoglobin is hyperbolic with higher affinity',
      '- Flat top: arterial ~97% even if alveolar $P_{O_2}$ dips; steep middle: ~75% at tissue $P_{O_2}$ = 40',
    ],
  },
  {
    at: 'Right Shift = Easier Unloading',
    mode: 'lead',
    figure: {
      svg: bohrSvg,
      alt:
        'Three saturation curves against P_O₂: the normal Hb curve in the text colour, a red right-shifted curve and a blue left-shifted curve. A dashed vertical line at tissue P_O₂ = 40 mmHg crosses them: the normal curve reads 75%, the right-shifted curve 60% (both labelled on the axis) and the left-shifted curve higher still. Note: at tissue P_O₂ = 40, 60% vs 75% saturation → 15% more O₂ released. Small arrows show the shift directions. Right panel, red: RIGHT shift = easier unloading — ↑ P_CO₂ and ↑ H⁺ (↓ pH, the Bohr effect), ↑ temperature, ↑ 2,3-BPG (altitude, anemia); signatures of active tissue, P₅₀ rises. Blue: LEFT shift = holds O₂ tighter — ↓ CO₂, ↓ H⁺, ↓ temperature, ↓ 2,3-BPG, fetal Hb (binds 2,3-BPG poorly), CO (which also steals heme sites); P₅₀ falls. Footnote: loading barely suffers because the lung plateau is flat at P_O₂ ≈ 100.',
      caption: 'The Bohr effect (illustrative curves, worked-example numbers): a right shift raises P₅₀ and unloads more O₂ at the same tissue P_O₂ — 60% instead of 75% at 40 mmHg.',
    },
    blocks: [
      '- **Right shift** (↑$P_{50}$): ↑CO2, ↑H⁺, ↑temperature, ↑2,3-BPG — the signatures of active tissue',
      '- **Left shift**: the opposites, fetal Hb and CO — CO also steals heme sites while arterial $P_{O_2}$ reads normal',
    ],
  },
  {
    at: 'Chemoreceptors — CO2 Is the Boss',
    mode: 'replace-table',
    figure: {
      svg: chemoSvg,
      alt:
        'A pathway of boxes and arrows. Across the top, a red band of arterial blood carrying CO₂ (blue), H⁺, and on the right ↓ P_O₂ (< ~60), ↑ CO₂, ↑ H⁺. Below the left part lies a grey blood–brain barrier band: a blue arrow shows CO₂ crossing freely, while the H⁺ arrow stops at a cross (blocked). Under the barrier: a CSF box (CO₂ + H₂O → H⁺ + HCO₃⁻; CO₂ is hydrated, CSF H⁺ rises) leading to the central chemoreceptors box (medulla; read CSF H⁺ = CO₂; blind to O₂). On the right a red arrow from the blood leads to the peripheral chemoreceptors box (carotid and aortic bodies — the ONLY sensors of low O₂). Both boxes feed the respiratory center (medulla): ↑ rhythm → phrenic nerve → diaphragm, which leads to ↑ ventilation: blows off CO₂, so P_CO₂ and H⁺ fall. A dashed grey arrow returns from there to the blood: negative feedback.',
      caption: 'Chemoreceptor control: central receptors read arterial CO₂ as CSF H⁺ (blind to O₂); only the carotid and aortic bodies sense low O₂ — schematic.',
    },
    blocks: [
      '- **Central** (medulla): read **H⁺ in CSF** made from CO2 that crossed the blood–brain barrier — the dominant drive; **blind to O2**',
      '- **Peripheral** (carotid + aortic bodies): the **only** sensors of low $P_{O_2}$ (matters below ~60 mmHg); also ↑CO2, ↑H⁺',
      '- Blood H⁺ crosses the barrier poorly, CO2 crosses freely → central receptors read arterial CO2 with an H⁺ electrode',
    ],
  },
  {
    at: 'Ventilation–Perfusion (V/Q) Matching',
    mode: 'lead',
    figure: {
      svg: vqSvg,
      alt:
        'Three alveolus–capillary units. Left, shunt (V/Q → 0): the airway tube is blocked by a grey plug, the alveolus is grey (no air), yet blood (blue) flows through the capillary beneath and leaves still deoxygenated; perfused, not ventilated (mucus plug, pneumonia fluid); blood passes unoxygenated and 100% O₂ barely helps. Middle, normal (V/Q ≈ 0.8): a two-headed arrow shows air moving in and out of the tube (V = air), the capillary (Q = blood) enters blue and leaves red, a red arrow carries O₂ from alveolus into blood and a blue arrow carries CO₂ out; air and blood meet at the same alveolus; note: upright, V/Q is high at the apex and low at the base because perfusion rises faster. Right, dead space (V/Q → ∞): the alveolus is ventilated but a dark embolus blocks the capillary, so there is no blood flow; ventilated, not perfused (pulmonary embolism); air moves but no blood arrives to collect the O₂.',
      caption: 'Ventilation–perfusion matching, schematic: shunt = blood without air (V/Q → 0), dead space = air without blood (V/Q → ∞); exchange needs both at the same alveolus.',
    },
    blocks: [
      '- Exchange needs air **and** blood at the same alveolus; ideal V/Q ≈ 0.8 (apex high, base low when upright)',
      '- **Shunt** = perfused, not ventilated (100% O2 helps little); **dead space** = ventilated, not perfused',
    ],
  },
]
