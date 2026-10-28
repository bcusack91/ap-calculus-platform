import type { DeckFigurePlacement } from './index'

/**
 * Sociology (survey) (MCAT P/S) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept (a norms rail that breaks,
 * an institution fanning out to intended and unintended outcomes, two network
 * clusters and a bridge, a tap and a bucket, a bar chart of the lesson's own
 * numbers …) — no textbook or prep-company figure was copied. Curves that are
 * not data say "illustrative" in the caption.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-so-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

const txt = (x: number, y: number, s: string, size = 20, extra = '') =>
  `<text x="${x}" y="${y}" font-size="${size}" text-anchor="middle" fill="currentColor"${extra ? ' ' + extra : ''}>${s}</text>`

/* 1 — Durkheim's anomie: the norms rail breaks (lead, 1000×460) */
const anomieSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-so-anomie')}</defs>
<g class="fig-muted">
${txt(190, 126, 'shared norms hold', 20)}
${txt(560, 126, 'norms lose their grip', 20)}
<line x1="420" y1="90" x2="700" y2="90" stroke="currentColor" stroke-width="6" stroke-dasharray="22 14"/>
<line x1="716" y1="90" x2="960" y2="90" stroke="currentColor" stroke-width="6" stroke-dasharray="6 28"/>
</g>
${txt(382, 48, 'rapid social change', 22, 'font-weight="700"')}
<line x1="40" y1="90" x2="345" y2="90" stroke="currentColor" stroke-width="6"/>
<g class="fig-accent-2">
<path d="M345 90 L360 68 L375 112 L390 68 L405 112 L420 90" fill="none" stroke="currentColor" stroke-width="4"/>
${txt(830, 48, 'anomie', 22, 'font-weight="700"')}
</g>
<rect x="40" y="150" width="300" height="80" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
${txt(190, 182, 'Stable society', 22, 'font-weight="700"')}
${txt(190, 212, 'norms regulate wants and conduct', 19)}
<line x1="342" y1="190" x2="375" y2="190" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-so-anomie)"/>
<rect x="380" y="150" width="300" height="80" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
${txt(530, 182, 'Change outruns the rules', 22, 'font-weight="700"')}
${txt(530, 212, 'the old rules no longer fit', 19)}
<line x1="682" y1="190" x2="715" y2="190" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-so-anomie)"/>
<g class="fig-accent-2">
<defs>${ARROW('arr-so-anomie-r')}</defs>
<rect x="720" y="150" width="240" height="80" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
${txt(840, 182, 'ANOMIE', 24, 'font-weight="700"')}
${txt(840, 212, 'normlessness', 19)}
<line x1="778" y1="232" x2="778" y2="290" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-so-anomie-r)"/>
<line x1="906" y1="232" x2="906" y2="290" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-so-anomie-r)"/>
<rect x="712" y="295" width="132" height="70" rx="12" fill="none" stroke="currentColor" stroke-width="3"/>
${txt(778, 338, 'Deviance ↑', 22, 'font-weight="700"')}
<rect x="852" y="295" width="108" height="70" rx="12" fill="none" stroke="currentColor" stroke-width="3"/>
${txt(906, 338, 'Suicide ↑', 22, 'font-weight="700"')}
</g>
<g class="fig-muted">
<text x="40" y="300" font-size="20" fill="currentColor">Durkheim (1897): suicide rose in economic busts AND booms —</text>
<text x="40" y="330" font-size="20" fill="currentColor">sudden change, not hardship alone, is what loosens norms.</text>
<text x="40" y="385" font-size="20" fill="currentColor">Upheaval (war, recession, epidemic) is where deviance</text>
<text x="40" y="415" font-size="20" fill="currentColor">and health disparities spike.</text>
${txt(840, 400, 'rates climb', 19)}
</g>
</svg>`

/* 2 — Manifest vs latent functions: one institution, three outcomes (replace-table, 560×440) */
const mertonSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-so-merton')}</defs>
<rect x="170" y="14" width="220" height="56" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
${txt(280, 49, 'Education (school)', 18, 'font-weight="700"')}
<line x1="280" y1="70" x2="280" y2="105" stroke="currentColor" stroke-width="2.5"/>
<line x1="95" y1="105" x2="465" y2="105" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">
<defs>${ARROW('arr-so-merton-b')}</defs>
<line x1="95" y1="105" x2="95" y2="162" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-so-merton-b)"/>
<text x="104" y="140" font-size="16" fill="currentColor">intended, recognized</text>
<rect x="10" y="170" width="170" height="130" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
${txt(95, 203, 'Manifest function', 17, 'font-weight="700"')}
${txt(95, 236, 'teach knowledge', 16)}
${txt(95, 260, 'and skills', 16)}
${txt(95, 335, '✓ helps', 18, 'font-weight="700"')}
</g>
<g class="fig-muted">
<line x1="280" y1="105" x2="280" y2="162" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 6" marker-end="url(#arr-so-merton)"/>
<line x1="465" y1="105" x2="465" y2="162" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 6" marker-end="url(#arr-so-merton)"/>
<text x="289" y="140" font-size="16" fill="currentColor">unintended</text>
<text x="474" y="140" font-size="16" fill="currentColor">unintended</text>
</g>
<rect x="195" y="170" width="170" height="130" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
${txt(280, 203, 'Latent function', 17, 'font-weight="700"')}
${txt(280, 236, 'friend networks,', 16)}
${txt(280, 258, 'a dating pool,', 16)}
${txt(280, 280, 'daytime childcare', 16)}
${txt(280, 335, '✓ helps (stabilizes)', 18, 'font-weight="700"')}
<g class="fig-accent-2">
<rect x="380" y="170" width="170" height="130" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
${txt(465, 203, 'Latent dysfunction', 17, 'font-weight="700"')}
${txt(465, 236, 'tracking reproduces', 16)}
${txt(465, 258, 'class inequality', 16)}
${txt(465, 335, '✗ harms', 18, 'font-weight="700"')}
</g>
<g class="fig-muted">
${txt(280, 390, 'MCAT tell: an unintended outcome that stabilizes', 16)}
${txt(280, 414, 'society = latent function, not a dysfunction', 16)}
</g>
</svg>`

/* 3 — Social networks: two clusters and the weak-tie bridge (lead, 1000×460) */
const cluster = (cx: number, cy: number) => {
  const r = 95
  const pts: [number, number][] = [0, 60, 120, 180, 240, 300].map((deg) => {
    const a = (deg * Math.PI) / 180
    return [Math.round(cx + r * Math.cos(a)), Math.round(cy + r * Math.sin(a))]
  })
  const edges: string[] = []
  for (const [x, y] of pts) edges.push(`<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"/>`)
  for (let i = 0; i < 6; i++) {
    const [x1, y1] = pts[i]
    const [x2, y2] = pts[(i + 1) % 6]
    edges.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`)
  }
  edges.push(`<line x1="${pts[1][0]}" y1="${pts[1][1]}" x2="${pts[4][0]}" y2="${pts[4][1]}"/>`)
  edges.push(`<line x1="${pts[2][0]}" y1="${pts[2][1]}" x2="${pts[5][0]}" y2="${pts[5][1]}"/>`)
  const nodes = [[cx, cy], ...pts].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="13" fill="currentColor"/>`)
  return `<g stroke="currentColor" stroke-width="3">${edges.join('')}</g>${nodes.join('')}`
}

const networkSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(250, 50, 'your close circle — strong ties', 22, 'font-weight="700"')}
${txt(750, 50, 'another cluster', 22, 'font-weight="700"')}
<g class="fig-muted">${cluster(250, 230)}${cluster(750, 230)}</g>
<g class="fig-accent-2">
<line x1="345" y1="230" x2="655" y2="230" stroke="currentColor" stroke-width="4" stroke-dasharray="12 10"/>
<circle cx="655" cy="230" r="15" fill="none" stroke="currentColor" stroke-width="4"/>
<text x="628" y="212" font-size="20" text-anchor="end" fill="currentColor">acquaintance</text>
${txt(500, 268, 'weak tie = the bridge', 22, 'font-weight="700"')}
</g>
<g class="fig-accent">
<circle cx="345" cy="230" r="16" fill="currentColor"/>
<text x="372" y="212" font-size="20" fill="currentColor">you</text>
</g>
<g class="fig-muted">
${txt(500, 298, 'new information crosses here', 19)}
${txt(250, 395, 'dense, overlapping ties: everyone', 19)}
${txt(250, 422, 'already knows what you know', 19)}
${txt(750, 395, 'jobs, trial openings, referrals', 19)}
${txt(750, 422, 'you would never otherwise hear of', 19)}
</g>
</svg>`

/* 4 — Stratification systems on an openness axis (replace-table, 560×440) */
const stratBox = (x: number, title: string, l1: string, l2: string, mob: string, status: string, cls: string) =>
  `<rect x="${x}" y="90" width="125" height="185" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
${txt(x + 62, 120, title, 18, 'font-weight="700"')}
${txt(x + 62, 152, l1, 16)}
${txt(x + 62, 174, l2, 16)}
${txt(x + 62, 212, mob, 16, 'font-weight="700"')}
${txt(x + 62, 246, status, 16, `class="${cls}" font-weight="700"`)}`

const stratificationSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-so-strat')}</defs>
<line x1="30" y1="62" x2="540" y2="62" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-so-strat)"/>
<g class="fig-muted">
<text x="30" y="42" font-size="16" fill="currentColor">closed</text>
<text x="535" y="42" font-size="16" text-anchor="end" fill="currentColor">open</text>
</g>
${txt(280, 42, 'how open is the system?', 17, 'font-weight="700"')}
${stratBox(10, 'Caste', 'position fixed', 'at birth', 'mobility: none', 'ascribed', 'fig-accent-2')}
${stratBox(145, 'Estate', 'feudal land', 'hierarchy', 'very low', 'ascribed', 'fig-accent-2')}
${stratBox(280, 'Class', 'economic', 'resources', 'some', 'achieved', 'fig-accent')}
${stratBox(415, 'Meritocracy', 'ability and', 'effort', 'high (ideal)', 'achieved', 'fig-accent')}
<g class="fig-accent-2">${txt(342, 266, '(+ ascribed)', 15)}</g>
<text x="20" y="318" font-size="16" fill="currentColor"><tspan class="fig-accent-2" font-weight="700">Ascribed</tspan> = assigned at birth, involuntary (race, caste)</text>
<text x="20" y="350" font-size="16" fill="currentColor"><tspan class="fig-accent" font-weight="700">Achieved</tspan> = earned by choices and effort (physician)</text>
<text x="20" y="382" font-size="16" fill="currentColor"><tspan font-weight="700">Master status</tspan> = the one that dominates how others</text>
<text x="20" y="404" font-size="16" fill="currentColor">see you, overriding the rest (“patient”, “felon”)</text>
</svg>`

/* 5 — Income is a flow, wealth is a stock (lead, 1000×460) */
const sesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-so-ses')}</defs>
<rect x="380" y="40" width="40" height="10" rx="3" fill="currentColor"/>
<rect x="396" y="50" width="8" height="14" fill="currentColor"/>
<rect x="330" y="62" width="130" height="22" rx="6" fill="none" stroke="currentColor" stroke-width="3"/>
<rect x="432" y="84" width="28" height="42" rx="4" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent">
<defs>${ARROW('arr-so-ses-b')}</defs>
<line x1="446" y1="132" x2="446" y2="212" stroke="currentColor" stroke-width="4" stroke-dasharray="10 10" marker-end="url(#arr-so-ses-b)"/>
<text x="420" y="160" font-size="24" font-weight="700" text-anchor="end" fill="currentColor">INCOME</text>
<text x="420" y="190" font-size="20" text-anchor="end" fill="currentColor">a flow: dollars earned per year</text>
<path d="M337 285 L350 405 L560 405 L573 285 Z" fill="currentColor" fill-opacity="0.15"/>
</g>
<path d="M330 220 L350 405 L560 405 L580 220" fill="none" stroke="currentColor" stroke-width="3"/>
${txt(455, 322, 'WEALTH', 24, 'font-weight="700"')}
${txt(455, 352, 'a stock: assets − debts', 20)}
${txt(455, 382, 'accumulates over time', 20)}
<g class="fig-accent-2">
<defs>${ARROW('arr-so-ses-r')}</defs>
<line x1="700" y1="340" x2="590" y2="340" stroke="currentColor" stroke-width="3" marker-end="url(#arr-so-ses-r)"/>
${txt(645, 326, 'inheritance', 20)}
</g>
<g class="fig-muted">
<defs>${ARROW('arr-so-ses-m')}</defs>
<line x1="345" y1="392" x2="290" y2="392" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-so-ses-m)"/>
<text x="280" y="398" font-size="19" text-anchor="end" fill="currentColor">spending, debt</text>
${txt(160, 250, 'Wealth is far more unequally', 20)}
${txt(160, 278, 'distributed than income:', 20)}
${txt(160, 306, 'the top 10% of U.S. households', 20)}
${txt(160, 334, 'hold about two-thirds of it.', 20)}
</g>
<rect x="730" y="50" width="250" height="60" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
${txt(855, 88, 'Education', 22, 'font-weight="700"')}
<line x1="855" y1="112" x2="855" y2="160" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-so-ses)"/>
<rect x="730" y="165" width="170" height="60" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
${txt(815, 202, 'Occupation', 20)}
<path d="M728 195 H600 V73 H470" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-so-ses)"/>
<text x="612" y="140" font-size="19" fill="currentColor">sets income</text>
<g class="fig-muted">
<line x1="958" y1="112" x2="958" y2="275" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 6" marker-end="url(#arr-so-ses-m)"/>
<text x="948" y="256" font-size="18" text-anchor="end" fill="currentColor">predicts</text>
</g>
<rect x="730" y="280" width="250" height="60" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
${txt(855, 318, 'Health', 22, 'font-weight="700"')}
<g class="fig-muted">${txt(855, 372, 'every step up SES → better health', 19)}</g>
</svg>`

/* 6 — Life expectancy by group, the lesson's numbers (replace-table, 560×440) */
const LE_X0 = 215 // 70 years
const LE_PX = 16 // per year
const leBar = (y: number, label: string, yrs: number, cls: string) => {
  const w = (yrs - 70) * LE_PX
  return `<text x="203" y="${y + 23}" font-size="16" text-anchor="end" fill="currentColor">${label}</text>
<g class="${cls}"><rect x="${LE_X0}" y="${y}" width="${w}" height="32" rx="4" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/></g>
<text x="${LE_X0 + w + 8}" y="${y + 23}" font-size="17" font-weight="700" fill="currentColor">~${yrs}</text>`
}

const lifeExpSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<text x="10" y="30" font-size="16" font-weight="700" fill="currentColor">By income (expected age at death, age 40)</text>
${leBar(44, 'top income fifth', 87, 'fig-accent')}
${leBar(92, 'bottom income fifth', 78, 'fig-accent')}
<text x="10" y="172" font-size="16" font-weight="700" fill="currentColor">By race / ethnicity (life expectancy at birth)</text>
${leBar(186, 'Hispanic', 82, 'fig-muted')}
${leBar(234, 'non-Hispanic White', 79, 'fig-muted')}
${leBar(282, 'non-Hispanic Black', 75, 'fig-muted')}
<g class="fig-accent-2">
<line x1="${LE_X0 + 8 * LE_PX}" y1="80" x2="${LE_X0 + 17 * LE_PX}" y2="80" stroke="currentColor" stroke-width="2"/>
<line x1="${LE_X0 + 8 * LE_PX}" y1="74" x2="${LE_X0 + 8 * LE_PX}" y2="86" stroke="currentColor" stroke-width="2"/>
<line x1="${LE_X0 + 17 * LE_PX}" y1="74" x2="${LE_X0 + 17 * LE_PX}" y2="86" stroke="currentColor" stroke-width="2"/>
<text x="${LE_X0 + 12.5 * LE_PX}" y="140" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">~9-year gap</text>
<line x1="${LE_X0 + 5 * LE_PX}" y1="273" x2="${LE_X0 + 9 * LE_PX}" y2="273" stroke="currentColor" stroke-width="2"/>
<line x1="${LE_X0 + 5 * LE_PX}" y1="267" x2="${LE_X0 + 5 * LE_PX}" y2="279" stroke="currentColor" stroke-width="2"/>
<line x1="${LE_X0 + 9 * LE_PX}" y1="267" x2="${LE_X0 + 9 * LE_PX}" y2="279" stroke="currentColor" stroke-width="2"/>
<text x="${LE_X0 + 9 * LE_PX + 12}" y="279" font-size="16" font-weight="700" fill="currentColor">~4-yr gap</text>
</g>
<line x1="${LE_X0}" y1="330" x2="${LE_X0 + 20 * LE_PX}" y2="330" stroke="currentColor" stroke-width="2"/>
${[70, 75, 80, 85, 90]
  .map((v) => `<line x1="${LE_X0 + (v - 70) * LE_PX}" y1="330" x2="${LE_X0 + (v - 70) * LE_PX}" y2="338" stroke="currentColor" stroke-width="2"/>${txt(LE_X0 + (v - 70) * LE_PX, 358, String(v), 16)}`)
  .join('')}
<g class="fig-muted">
${txt(LE_X0 + 10 * LE_PX, 384, 'years (axis starts at 70)', 16)}
${txt(280, 422, 'illustrative U.S. figures, pre-pandemic', 16)}
</g>
</svg>`

/* 7 — Social influence as a staircase of pressure (lead, 1000×460) */
const step = (x: number, y: number, title: string, source: string, study: string) =>
  `<rect x="${x}" y="${y}" width="225" height="110" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
${txt(x + 112, y + 36, title, 24, 'font-weight="700"')}
${txt(x + 112, y + 66, source, 20)}
<g class="fig-muted">${txt(x + 112, y + 94, study, 18)}</g>`

const influenceSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-so-infl')}</defs>
${step(30, 300, 'Conformity', 'an implicit group norm', 'Asch — line judgments')}
${step(270, 230, 'Compliance', 'a direct request', 'foot-in-the-door')}
${step(510, 160, 'Obedience', 'an explicit authority', 'Milgram — shocks')}
${step(750, 90, 'Internalization', 'your own changed belief', 'most durable')}
<g class="fig-muted">
<circle cx="110" cy="262" r="9" fill="currentColor"/><circle cx="142" cy="262" r="9" fill="currentColor"/><circle cx="174" cy="262" r="9" fill="currentColor"/>
<circle cx="365" cy="192" r="9" fill="currentColor"/>
<rect x="386" y="172" width="40" height="30" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="622" cy="100" r="12" fill="currentColor"/>
<line x1="622" y1="116" x2="622" y2="146" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-so-infl-m)"/>
<defs>${ARROW('arr-so-infl-m')}</defs>
<circle cx="862" cy="54" r="14" fill="none" stroke="currentColor" stroke-width="3"/>
</g>
<g class="fig-accent">
<circle cx="70" cy="262" r="9" fill="currentColor"/>
<line x1="80" y1="262" x2="97" y2="262" stroke="currentColor" stroke-width="2.5"/>
<text x="406" y="196" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">?</text>
<path d="M854 55 L860 61 L871 47" fill="none" stroke="currentColor" stroke-width="3"/>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-so-infl-b')}</defs>
<line x1="30" y1="440" x2="975" y2="440" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-so-infl-b)"/>
<text x="500" y="430" font-size="20" text-anchor="middle" fill="currentColor">where the push comes from: the group → a requester → an authority → yourself</text>
</g>
<g class="fig-muted">
<line x1="40" y1="300" x2="40" y2="80" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 6" marker-end="url(#arr-so-infl-m)"/>
<text x="60" y="94" font-size="19" fill="currentColor">deeper, more lasting change</text>
<text x="60" y="122" font-size="19" fill="currentColor">(public behaviour → private belief)</text>
</g>
</svg>`

/* 8 — Demographic transition model (replace-table, 560×440) */
const dtmSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-so-dtm')}</defs>
<g class="fig-muted">
<line x1="180" y1="60" x2="180" y2="340" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<line x1="300" y1="60" x2="300" y2="340" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<line x1="420" y1="60" x2="420" y2="340" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
${txt(120, 52, 'pre-industrial', 15)}
${txt(240, 52, 'industrializing', 15)}
${txt(360, 52, 'late industrial', 15)}
${txt(480, 52, 'post-industrial', 15)}
<text x="52" y="105" font-size="15" text-anchor="end" fill="currentColor">high</text>
<text x="52" y="335" font-size="15" text-anchor="end" fill="currentColor">low</text>
${txt(280, 412, 'illustrative curves', 15)}
</g>
${txt(120, 30, 'Stage 1', 16, 'font-weight="700"')}
${txt(240, 30, 'Stage 2', 16, 'font-weight="700"')}
${txt(360, 30, 'Stage 3', 16, 'font-weight="700"')}
${txt(480, 30, 'Stage 4', 16, 'font-weight="700"')}
<line x1="60" y1="340" x2="548" y2="340" stroke="currentColor" stroke-width="2" marker-end="url(#arr-so-dtm)"/>
<line x1="60" y1="340" x2="60" y2="64" stroke="currentColor" stroke-width="2" marker-end="url(#arr-so-dtm)"/>
<g class="fig-accent">
<path d="M180 100 C230 100 260 100 300 110 C340 125 370 220 420 248 L420 272 C380 270 340 262 300 240 C260 215 220 135 180 112 Z" fill="currentColor" fill-opacity="0.12"/>
<path d="M60 100 L180 100 C230 100 260 100 300 110 C340 125 370 220 420 248 L540 256" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="470" y="228" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">births fall later</text>
<text x="275" y="182" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">natural increase</text>
<text x="275" y="202" font-size="15" text-anchor="middle" fill="currentColor">= population boom</text>
<line x1="70" y1="372" x2="110" y2="372" stroke="currentColor" stroke-width="3"/>
<text x="118" y="378" font-size="16" fill="currentColor">birth rate</text>
</g>
<g class="fig-accent-2">
<path d="M60 118 C80 100 95 135 115 112 C135 92 150 132 180 112 C220 135 260 215 300 240 C340 262 380 270 420 272 L540 274" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="258" y="300" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">deaths fall first</text>
<line x1="222" y1="372" x2="262" y2="372" stroke="currentColor" stroke-width="3"/>
<text x="270" y="378" font-size="16" fill="currentColor">death rate</text>
</g>
<g class="fig-muted">
<path d="M60 332 L180 328 C240 320 280 290 330 240 C380 185 450 110 540 92" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="9 7"/>
<line x1="380" y1="372" x2="420" y2="372" stroke="currentColor" stroke-width="3" stroke-dasharray="9 7"/>
<text x="428" y="378" font-size="16" fill="currentColor">population</text>
</g>
</svg>`

/* 9 — The sick role as an exchange (replace-table, 560×440) */
const sickRoleSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<rect x="10" y="70" width="150" height="310" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
${txt(85, 214, 'Society', 18, 'font-weight="700"')}
${txt(85, 240, '(and the doctor)', 16)}
<rect x="400" y="70" width="150" height="310" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
${txt(475, 196, 'The sick', 18, 'font-weight="700"')}
${txt(475, 220, 'person', 18, 'font-weight="700"')}
<g class="fig-muted">
${txt(475, 258, 'a temporary,', 15)}
${txt(475, 278, 'sanctioned', 15)}
${txt(475, 298, 'deviant role', 15)}
<line x1="170" y1="222" x2="390" y2="222" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
${txt(280, 418, 'fits acute illness best; chronic or stigmatized conditions strain it', 15)}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-so-sick-b')}</defs>
${txt(280, 50, 'RIGHTS granted', 18, 'font-weight="700"')}
<line x1="170" y1="110" x2="388" y2="110" stroke="currentColor" stroke-width="3" marker-end="url(#arr-so-sick-b)"/>
${txt(280, 100, 'excused from normal duties', 16)}
<line x1="170" y1="180" x2="388" y2="180" stroke="currentColor" stroke-width="3" marker-end="url(#arr-so-sick-b)"/>
${txt(280, 170, 'not blamed for being ill', 16)}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-so-sick-r')}</defs>
${txt(280, 258, 'OBLIGATIONS owed', 18, 'font-weight="700"')}
<line x1="390" y1="300" x2="172" y2="300" stroke="currentColor" stroke-width="3" marker-end="url(#arr-so-sick-r)"/>
${txt(280, 290, 'must want to get well', 16)}
<line x1="390" y1="360" x2="172" y2="360" stroke="currentColor" stroke-width="3" marker-end="url(#arr-so-sick-r)"/>
${txt(280, 350, 'seek competent help', 16)}
${txt(280, 384, 'and cooperate with treatment', 16)}
</g>
</svg>`

export const mcatSociologyFigures: DeckFigurePlacement[] = [
  {
    at: "Durkheim's Concept of Anomie",
    mode: 'lead',
    figure: {
      svg: anomieSvg,
      alt:
        'A rail representing shared norms runs left to right: solid while society is stable, then a red jagged break labelled "rapid social change", then dashed as norms lose their grip, then only dots labelled "anomie". Beneath the rail three boxes in sequence: Stable society (norms regulate wants and conduct) → Change outruns the rules (old norms no longer fit, new ones unsettled) → ANOMIE, normlessness, in red, from which two red arrows drop to "Deviance ↑" and "Suicide ↑". A note recalls Durkheim (1897): suicide rose in economic busts AND booms — sudden change, not hardship alone, loosens norms — and that upheaval (war, recession, epidemic) is where deviance and health disparities spike.',
      caption: 'Anomie: when change outruns the rules, norms stop regulating conduct, and deviance and suicide rise.',
    },
    blocks: ['- Durkheim: it is the **suddenness** of change that matters — a boom loosens norms as surely as a bust'],
  },
  {
    at: 'Manifest vs. Latent Functions',
    mode: 'replace-table',
    figure: {
      svg: mertonSvg,
      alt:
        'One institution, Education (school), fans out to three outcome boxes. A solid blue arrow labelled "intended, recognized" leads to the Manifest function: teach knowledge and skills — marked "helps". Two dashed arrows labelled "unintended" lead to the Latent function — friend networks, a dating pool, daytime childcare — marked "helps (stabilizes)", and to the red Latent dysfunction — tracking reproduces class inequality — marked "harms". A note: the MCAT tell is that an unintended outcome that stabilizes society is a latent function, not a dysfunction.',
    },
    blocks: [
      '- **Manifest** = intended and recognized; **latent** = unintended, often unnoticed',
      '- Latent **dysfunction** = unintended **and harmful** (tracking → class inequality)',
      '- MCAT tell: an unintended-but-stabilizing outcome is a **latent function**',
    ],
  },
  {
    at: 'Social Networks & Structure',
    mode: 'lead',
    figure: {
      svg: networkSvg,
      alt:
        'Two clusters of seven nodes each, every node joined to most of the others by thick grey lines (strong ties). The left cluster is labelled "your close circle — strong ties", with one node marked "you" in blue; the right cluster is "another cluster". A single red dashed line — "weak tie = the bridge" — joins "you" to one node in the other cluster, labelled "acquaintance"; "new information crosses here". Beneath: dense, overlapping ties mean everyone already knows what you know, whereas the other cluster holds jobs, trial openings and referrals you would never otherwise hear of.',
      caption: 'Granovetter (1973), the strength of weak ties: acquaintances bridge clusters, so novel information travels through them.',
    },
    blocks: ['- **Social capital** = the resources reachable through these ties; it predicts health outcomes'],
  },
  {
    at: 'Types of Social Stratification',
    mode: 'replace-table',
    figure: {
      svg: stratificationSvg,
      alt:
        'Four systems placed along an arrow from "closed" to "open", headed "how open is the system?". Caste: position fixed at birth, mobility none, status ascribed (red). Estate: feudal land hierarchy, mobility very low, ascribed (red). Class: economic resources, mobility some, status achieved (blue) plus ascribed. Meritocracy: ability and effort, mobility high (ideal), achieved (blue). A key: ascribed = assigned at birth, involuntary (race, caste); achieved = earned by choices and effort (physician); master status = the one that dominates how others see you, overriding the rest ("patient", "felon").',
    },
    blocks: [
      '- **Caste** and **estate** are closed, **ascribed** systems; **class** allows some mobility; **meritocracy** is the achieved ideal',
      '- **Ascribed** status = assigned at birth; **achieved** = earned',
      '- **Master status** dominates how others see you ("patient", "felon")',
    ],
  },
  {
    at: 'Social Class Indicators',
    mode: 'lead',
    figure: {
      svg: sesSvg,
      alt:
        'A tap pours a blue dashed stream labelled INCOME — a flow, dollars earned per year — into a bucket labelled WEALTH — a stock, assets minus debts, which accumulates over time. A red arrow labelled "inheritance" also feeds the bucket from the side; a small grey arrow at the bottom drains it, labelled "spending, debt". A note: wealth is far more unequally distributed than income — the top 10% of U.S. households hold about two-thirds of it. On the right a chain: Education → Occupation, which "sets income" via an arrow back to the tap; a dashed arrow from Education "predicts" Health, with the note "every step up SES → better health".',
      caption: 'The SES indicators: income flows, wealth stocks (and is inherited), education sets occupation and income — and all of them track health.',
    },
    blocks: ['- Flow vs stock is the MCAT distinction: two households with the same **income** can have wildly different **wealth**'],
  },
  {
    at: 'Demographic Snapshot',
    mode: 'replace-table',
    figure: {
      svg: lifeExpSvg,
      alt:
        'Horizontal bar chart of approximate U.S. life expectancy, axis from 70 to 90 years. By income (expected age at death for 40-year-olds): top income fifth about 87, bottom income fifth about 78 — a red bracket marks the roughly 9-year gap. By race or ethnicity (life expectancy at birth): Hispanic about 82, non-Hispanic White about 79, non-Hispanic Black about 75 — a red bracket marks the roughly 4-year White–Black gap. Illustrative pre-pandemic figures; the axis starts at 70.',
      caption: 'Illustrative, pre-pandemic U.S. figures (the lesson table drawn as bars; axis starts at 70).',
    },
    blocks: [
      '- The largest gap is by **income** (~9 yrs), bigger than the Black–White gap (~4 yrs) — the **SES gradient**',
      '- **Hispanic paradox**: outcomes better than SES alone would predict',
      '- Income rows: expected age at death for 40-year-olds; race rows: life expectancy at birth',
    ],
  },
  {
    at: 'Social Influence: A Hierarchy of Pressure',
    mode: 'lead',
    figure: {
      svg: influenceSvg,
      alt:
        'Four boxes rise like a staircase from left to right. Conformity — an implicit group norm (Asch, line judgments), with an icon of a lone blue dot drifting toward a row of grey dots. Compliance — a direct request (foot-in-the-door), icon of a dot with a question-mark speech bubble. Obedience — an explicit authority (Milgram, shocks), icon of a large dot above a small one with an arrow pointing down. Internalization — your own changed belief (most durable), icon of a circle with a check mark. A blue arrow along the bottom reads "where the push comes from: the group → a requester → an authority → yourself"; a dashed arrow up the left side reads "deeper, more lasting change (public behaviour → private belief)".',
      caption: 'Four kinds of social influence, sorted by where the pressure comes from; only internalization changes private belief.',
    },
    blocks: ['- Conformity splits into **normative** (to be liked) and **informational** (to be right, when uncertain)'],
  },
  {
    at: 'Demographic Transition Model',
    mode: 'replace-table',
    figure: {
      svg: dtmSvg,
      alt:
        'Illustrative curves across four stages. Blue birth rate: high and flat through Stage 1 (pre-industrial) and Stage 2 (industrializing), then falling through Stage 3 (late industrial) to low in Stage 4 (post-industrial) — labelled "births fall later". Red death rate: high and fluctuating in Stage 1, dropping steeply through Stage 2 — "deaths fall first" — and low thereafter. The gap between the two curves in Stages 2 and 3 is shaded and labelled "natural increase = population boom". A dashed grey population curve stays low in Stage 1, climbs steeply through Stages 2 and 3 and levels off in Stage 4.',
    },
    blocks: [
      '- **Stage 2**: deaths fall first (sanitation, vaccines, food) while births stay high → the **boom**',
      '- **Stage 3**: births fall as children become costs and women gain education, work and contraception',
      '- **Stage 4**: both low → stable or shrinking, **aging** population',
    ],
  },
  {
    at: 'The Sick Role (Parsons) — Functionalist',
    mode: 'replace-table',
    figure: {
      svg: sickRoleSvg,
      alt:
        'An exchange between two boxes, Society (and the doctor) on the left and The sick person — a temporary, sanctioned deviant role — on the right. Two blue arrows run from society to the sick person under the heading RIGHTS granted: excused from normal duties; not blamed for being ill. Two red arrows run back from the sick person to society under OBLIGATIONS owed: must want to get well; seek competent help and cooperate with treatment. A footnote: the model fits acute illness best; chronic or stigmatized conditions strain it.',
    },
    blocks: [
      '- **Rights**: exempt from normal duties; not held responsible for being ill',
      '- **Obligations**: want to get well; seek competent help and cooperate',
      '- Limitation: fits **acute** illness better than **chronic** or stigmatized conditions, where blame persists',
    ],
  },
]
