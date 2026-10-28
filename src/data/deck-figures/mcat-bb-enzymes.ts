import type { DeckFigurePlacement } from './index'

/**
 * Enzymes & Kinetics (MCAT B/B) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept (a reaction-coordinate
 * hump, a saturating hyperbola, a double-reciprocal line, boxes-and-arrows
 * pathways …) — no textbook or prep-company figure was copied. The kinetic
 * curves are computed from the textbook equations with made-up constants and
 * say "illustrative" in the caption; no molecule is drawn structurally.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-enz-<figure>-<colour>, bar-enz-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** Inhibition "bar" head (⊣) for allosteric-inhibitor arrows. */
const BAR = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M5,0 L5,10" stroke="currentColor" stroke-width="2.5"/></marker>`

/**
 * Rich SVG text with subscripts: `rich('v', ['0'], ' = V', ['max'], '[S]')`.
 * A `[sub]` part is a smaller tspan shifted down; the NEXT plain part shifts
 * back up (a tspan's dy persists for everything after it, so every subscript
 * that is followed by text must be built this way, never by string-concat).
 * `{ t, attrs }` is a plain part with extra attributes (e.g. a lighter weight).
 */
type RichPart = string | [string] | { t: string; attrs: string }
const rich = (...parts: RichPart[]) => {
  let out = ''
  let shifted = false
  for (const p of parts) {
    if (Array.isArray(p)) {
      out += `<tspan dy="${shifted ? 0 : 6}" font-size="0.72em">${p[0]}</tspan>`
      shifted = true
    } else {
      const t = typeof p === 'string' ? p : p.t
      const attrs = typeof p === 'string' ? '' : ` ${p.attrs}`
      out += shifted || attrs ? `<tspan dy="${shifted ? -6 : 0}"${attrs}>${t}</tspan>` : t
      shifted = false
    }
  }
  return out
}
const SUB = (base: string, sub: string, rest = '') => rich(base, [sub], ...(rest ? [rest] : []))
const KM = rich('K', ['m'])
const VMAX = rich('V', ['max'])

/** Polyline path of y = f(x) for x in [0, xmax] px, drawn from origin (ox, oy) with y UP. */
const curvePath = (ox: number, oy: number, xmax: number, step: number, f: (x: number) => number) => {
  const pts: string[] = []
  for (let x = 0; x <= xmax + 1e-6; x += step) pts.push(`${Math.round((ox + x) * 10) / 10} ${Math.round((oy - f(x)) * 10) / 10}`)
  return 'M' + pts.join(' L')
}
const michaelis = (H: number, K: number) => (x: number) => (H * x) / (K + x)
const hill = (H: number, K: number, n: number) => (x: number) => (H * Math.pow(x, n)) / (Math.pow(K, n) + Math.pow(x, n))

/* 1 — Reaction-coordinate diagram: the enzyme lowers Ea, ΔG unchanged (lead, 1000×460) */
const activationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-enz-ea')}</defs>
<line x1="90" y1="400" x2="950" y2="400" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-enz-ea)"/>
<line x1="90" y1="400" x2="90" y2="40" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-enz-ea)"/>
<text x="104" y="52" font-size="21" fill="currentColor">Free energy (G)</text>
<text x="520" y="442" font-size="21" text-anchor="middle" fill="currentColor">Reaction progress →</text>
<g class="fig-muted">
<line x1="300" y1="220" x2="905" y2="220" stroke="currentColor" stroke-width="2" stroke-dasharray="4 6"/>
<line x1="480" y1="80" x2="672" y2="80" stroke="currentColor" stroke-width="2" stroke-dasharray="4 6"/>
<line x1="520" y1="170" x2="702" y2="170" stroke="currentColor" stroke-width="2" stroke-dasharray="4 6"/>
</g>
<line x1="120" y1="220" x2="300" y2="220" stroke="currentColor" stroke-width="4"/>
<line x1="760" y1="330" x2="920" y2="330" stroke="currentColor" stroke-width="4"/>
<text x="210" y="200" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Reactants (S)</text>
<text x="840" y="366" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Products (P)</text>
<path d="M300 220 C 400 220, 420 80, 480 80 C 560 80, 640 330, 760 330" fill="none" stroke="currentColor" stroke-width="4"/>
<text x="480" y="62" font-size="19" text-anchor="middle" fill="currentColor">transition state ‡</text>
<g class="fig-accent">
<path d="M300 220 C 410 220, 450 170, 520 170 C 600 170, 660 330, 760 330" fill="none" stroke="currentColor" stroke-width="4"/>
<defs>${ARROW('arr-enz-ea-b')}</defs>
<line x1="690" y1="220" x2="690" y2="170" stroke="currentColor" stroke-width="2.5" marker-start="url(#arr-enz-ea-b)" marker-end="url(#arr-enz-ea-b)"/>
<text x="702" y="206" font-size="20" font-weight="700" fill="currentColor">E${SUB('', 'a', ' with enzyme')}</text>
</g>
<line x1="660" y1="220" x2="660" y2="80" stroke="currentColor" stroke-width="2.5" marker-start="url(#arr-enz-ea)" marker-end="url(#arr-enz-ea)"/>
<text x="672" y="130" font-size="20" font-weight="700" fill="currentColor">E${SUB('', 'a', ' no enzyme')}</text>
<g class="fig-accent-2">
<defs>${ARROW('arr-enz-ea-r')}</defs>
<line x1="905" y1="220" x2="905" y2="330" stroke="currentColor" stroke-width="2.5" marker-start="url(#arr-enz-ea-r)" marker-end="url(#arr-enz-ea-r)"/>
<text x="892" y="282" font-size="20" font-weight="700" text-anchor="end" fill="currentColor">ΔG unchanged</text>
</g>
<line x1="760" y1="56" x2="800" y2="56" stroke="currentColor" stroke-width="4"/>
<text x="810" y="62" font-size="19" fill="currentColor">no enzyme</text>
<g class="fig-accent">
<line x1="760" y1="88" x2="800" y2="88" stroke="currentColor" stroke-width="4"/>
<text x="810" y="94" font-size="19" fill="currentColor">with enzyme</text>
</g>
</svg>`

/* 2 — Michaelis–Menten saturation curve with Km and Vmax marked (lead, 1000×460) */
const mmSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-enz-mm')}</defs>
<line x1="110" y1="390" x2="958" y2="390" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-enz-mm)"/>
<line x1="110" y1="390" x2="110" y2="40" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-enz-mm)"/>
<text x="124" y="52" font-size="21" fill="currentColor">v${SUB('', '0', ' (initial rate)')}</text>
<text x="950" y="422" font-size="21" text-anchor="end" fill="currentColor">[S]</text>
<text x="560" y="74" font-size="25" text-anchor="middle" fill="currentColor">${rich('v', ['0'], ' = V', ['max'], '[S] / (K', ['m'], ' + [S])')}</text>
<g class="fig-muted">
<line x1="110" y1="110" x2="940" y2="110" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/>
<line x1="240" y1="390" x2="240" y2="250" stroke="currentColor" stroke-width="2" stroke-dasharray="4 6"/>
<line x1="110" y1="250" x2="240" y2="250" stroke="currentColor" stroke-width="2" stroke-dasharray="4 6"/>
</g>
<text x="935" y="102" font-size="22" font-weight="700" text-anchor="end" fill="currentColor">${VMAX}</text>
<text x="100" y="257" font-size="21" text-anchor="end" fill="currentColor">${rich('V', ['max'], '/2')}</text>
<path d="${curvePath(110, 390, 830, 10, michaelis(280, 130))}" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
<g class="fig-accent">
<line x1="110" y1="390" x2="185" y2="228" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 6"/>
<text x="262" y="334" font-size="19" fill="currentColor">${rich('[S] ≪ K', ['m'], ': first order, v', ['0'], ' ∝ [S]')}</text>
</g>
<g class="fig-accent-2">
<circle cx="240" cy="250" r="7" fill="currentColor"/>
<text x="240" y="420" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">${KM}</text>
<text x="600" y="216" font-size="19" fill="currentColor">${rich('[S] ≫ K', ['m'], ': zero order, saturated — v', ['0'], ' ≈ V', ['max'])}</text>
</g>
</svg>`

/* 3 — Lineweaver–Burk line with both intercepts and the slope (after, 1000×460) */
const lbSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-enz-lb')}</defs>
<line x1="120" y1="330" x2="935" y2="330" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-enz-lb)"/>
<line x1="420" y1="400" x2="420" y2="46" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-enz-lb)"/>
<text x="434" y="62" font-size="21" fill="currentColor">1/v${SUB('', '0')}</text>
<text x="930" y="364" font-size="21" text-anchor="end" fill="currentColor">1/[S]</text>
<text x="408" y="354" font-size="18" text-anchor="end" fill="currentColor">0</text>
<text x="560" y="60" font-size="23" fill="currentColor">${rich('1/v', ['0'], ' = (K', ['m'], '/V', ['max'], ') · 1/[S] + 1/V', ['max'])}</text>
<g class="fig-muted">
<line x1="220" y1="330" x2="420" y2="250" stroke="currentColor" stroke-width="3" stroke-dasharray="8 7"/>
<text x="300" y="258" font-size="17" text-anchor="middle" fill="currentColor">extrapolated</text>
</g>
<g class="fig-accent">
<line x1="420" y1="250" x2="860" y2="74" stroke="currentColor" stroke-width="4"/>
<circle cx="420" cy="250" r="8" fill="currentColor"/>
<text x="438" y="290" font-size="21" font-weight="700" fill="currentColor">y-intercept = 1/${VMAX}</text>
<text x="665" y="128" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor" transform="rotate(-21.8 665 128)">${rich('slope = K', ['m'], '/V', ['max'])}</text>
</g>
<g class="fig-accent-2">
<circle cx="220" cy="330" r="8" fill="currentColor"/>
<text x="220" y="366" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">x-intercept = −1/${KM}</text>
</g>
<g class="fig-muted">
<text x="560" y="416" font-size="19" text-anchor="middle" fill="currentColor">${rich('higher y-intercept → lower V', ['max'], '; x-intercept closer to 0 → larger K', ['m'])}</text>
</g>
</svg>`

/* 4 — Hexokinase (low Km) vs glucokinase (high Km) on one axis (lead, 1000×460) */
const hexoSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-enz-hexo')}</defs>
<line x1="110" y1="390" x2="958" y2="390" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-enz-hexo)"/>
<line x1="110" y1="390" x2="110" y2="40" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-enz-hexo)"/>
<text x="124" y="52" font-size="21" fill="currentColor">${rich("rate (fraction of each enzyme's V", ['max'], ')')}</text>
<text x="950" y="422" font-size="21" text-anchor="end" fill="currentColor">[glucose]</text>
<g class="fig-muted">
<line x1="110" y1="110" x2="940" y2="110" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/>
<line x1="440" y1="390" x2="440" y2="120" stroke="currentColor" stroke-width="2" stroke-dasharray="4 6"/>
<line x1="700" y1="390" x2="700" y2="120" stroke="currentColor" stroke-width="2" stroke-dasharray="4 6"/>
<text x="440" y="420" font-size="20" text-anchor="middle" fill="currentColor">fasting glucose</text>
<text x="700" y="420" font-size="20" text-anchor="middle" fill="currentColor">after a meal</text>
</g>
<text x="935" y="102" font-size="22" font-weight="700" text-anchor="end" fill="currentColor">${VMAX}</text>
<g class="fig-accent">
<path d="${curvePath(110, 390, 830, 10, michaelis(280, 35))}" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
<circle cx="440" cy="137" r="7" fill="currentColor"/>
<circle cx="700" cy="126" r="7" fill="currentColor"/>
<text x="150" y="92" font-size="20" font-weight="700" fill="currentColor">${rich('Hexokinase (most tissues): low K', ['m'], { t: ' — saturated even when fasting', attrs: 'font-weight="400"' })}</text>
</g>
<g class="fig-accent-2">
<path d="${curvePath(110, 390, 830, 10, michaelis(280, 330))}" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
<circle cx="440" cy="250" r="7" fill="currentColor"/>
<circle cx="700" cy="210" r="7" fill="currentColor"/>
<text x="456" y="272" font-size="18" fill="currentColor">½ ${VMAX}</text>
<text x="716" y="300" font-size="20" font-weight="700" fill="currentColor">Glucokinase (liver, β cells)</text>
<text x="716" y="326" font-size="19" fill="currentColor">${rich('high K', ['m'], ' ≈ fasting glucose,')}</text>
<text x="716" y="352" font-size="19" fill="currentColor">so its rate tracks blood sugar</text>
</g>
</svg>`

/* 5 — The four reversible inhibitors: where I binds, Km / Vmax, rescue by substrate (replace-table, 560×440) */
const inhibitionPanel = (
  x0: number,
  y0: number,
  title: string,
  opts: { sInSite: boolean; iInSite: boolean; iAllo: boolean; sFloating?: boolean; sDashed?: boolean; tag?: string },
  lines: [string, string, string],
) => {
  const siteX = x0 + 116
  const siteY = y0 + 64
  const alloX = x0 + 69
  const alloY = y0 + 106
  const diamond = (cx: number, cy: number) =>
    `<polygon points="${cx},${cy - 14} ${cx + 14},${cy} ${cx},${cy + 14} ${cx - 14},${cy}" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2.5"/><text x="${cx}" y="${cy + 6}" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">I</text>`
  const sCircle = (cx: number, cy: number, dashed = false) =>
    `<circle cx="${cx}" cy="${cy}" r="13" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"${dashed ? ' stroke-dasharray="4 3"' : ''}/><text x="${cx}" y="${cy + 6}" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">S</text>`
  return `
<g class="fig-muted"><rect x="${x0}" y="${y0}" width="268" height="210" rx="12" fill="none" stroke="currentColor" stroke-width="2"/></g>
<text x="${x0 + 134}" y="${y0 + 26}" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">${title}</text>
<rect x="${x0 + 40}" y="${y0 + 40}" width="76" height="66" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="${x0 + 68}" y="${y0 + 82}" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">E</text>
<circle class="fig-bg" cx="${siteX}" cy="${siteY}" r="17" stroke="currentColor" stroke-width="2"/>
<rect class="fig-bg" x="${alloX - 13}" y="${alloY - 13}" width="26" height="26" rx="5" stroke="currentColor" stroke-width="2"/>
${opts.sInSite ? `<g class="fig-accent">${sCircle(siteX, siteY, opts.sDashed)}</g>` : ''}
${opts.iInSite ? `<g class="fig-accent-2">${diamond(siteX, siteY)}</g>` : ''}
${opts.iAllo ? `<g class="fig-accent-2">${diamond(alloX, alloY)}</g>` : ''}
${
  opts.sFloating
    ? `<g class="fig-accent">${sCircle(x0 + 206, y0 + 56)}</g><g class="fig-muted"><line x1="${x0 + 190}" y1="${y0 + 59}" x2="${x0 + 140}" y2="${y0 + 63}" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4"/></g><g class="fig-accent-2"><text x="${x0 + 165}" y="${y0 + 52}" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">✕</text></g>`
    : ''
}
${opts.tag ? `<g class="fig-accent-2"><text x="${x0 + 200}" y="${y0 + 112}" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">${opts.tag}</text></g>` : ''}
<text x="${x0 + 14}" y="${y0 + 146}" font-size="15" fill="currentColor">${lines[0]}</text>
<text x="${x0 + 14}" y="${y0 + 170}" font-size="16" font-weight="700" fill="currentColor">${lines[1]}</text>
<text x="${x0 + 14}" y="${y0 + 194}" font-size="15" fill="currentColor">${lines[2]}</text>`
}
const inhibitionSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${inhibitionPanel(8, 6, 'Competitive', { sInSite: false, iInSite: true, iAllo: false, sFloating: true }, [
  'I takes the active site of free E',
  rich('K', ['m'], ' ↑   V', ['max'], ' unchanged'),
  'more substrate wins: YES',
])}
${inhibitionPanel(284, 6, 'Noncompetitive', { sInSite: true, iInSite: false, iAllo: true, sDashed: true }, [
  'I binds E or ES equally, other site',
  rich('K', ['m'], ' unchanged   V', ['max'], ' ↓'),
  'more substrate wins: NO',
])}
${inhibitionPanel(8, 222, 'Uncompetitive', { sInSite: true, iInSite: false, iAllo: true, tag: 'ES only' }, [
  'I binds ONLY the ES complex',
  rich('K', ['m'], ' ↓   V', ['max'], ' ↓ (same factor)'),
  'more substrate wins: NO — helps I',
])}
${inhibitionPanel(284, 222, 'Mixed', { sInSite: true, iInSite: false, iAllo: true, sDashed: true, tag: 'E ≠ ES' }, [
  'I binds E and ES unequally',
  rich('K', ['m'], ' ↑ or ↓   V', ['max'], ' ↓'),
  'more substrate wins: NO',
])}
</svg>`

/* 6 — Lineweaver–Burk signatures of the three classic inhibitors (lead, 1000×460) */
const lbPanel = (px: number, title: string, sub: string, inhibited: { xInt: number; yInt: number; endX: number; endY: number }, dot: [number, number] | null, notes: [string, string]) => {
  const ax = px + 150 // y-axis x
  const base = 300 // x-axis y
  return `
<g class="fig-muted"><rect x="${px}" y="14" width="310" height="398" rx="14" fill="none" stroke="currentColor" stroke-width="2"/></g>
<text x="${px + 155}" y="46" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">${title}</text>
<text x="${px + 155}" y="72" font-size="18" text-anchor="middle" fill="currentColor">${sub}</text>
<line x1="${px + 18}" y1="${base}" x2="${px + 302}" y2="${base}" stroke="currentColor" stroke-width="2" marker-end="url(#arr-enz-lbs)"/>
<line x1="${ax}" y1="${base + 30}" x2="${ax}" y2="88" stroke="currentColor" stroke-width="2" marker-end="url(#arr-enz-lbs)"/>
<text x="${ax + 10}" y="104" font-size="16" fill="currentColor">1/v${SUB('', '0')}</text>
<text x="${px + 300}" y="${base + 22}" font-size="16" text-anchor="end" fill="currentColor">1/[S]</text>
<line x1="${px + 75}" y1="${base}" x2="${ax}" y2="255" stroke="currentColor" stroke-width="3" stroke-dasharray="7 6"/>
<line x1="${ax}" y1="255" x2="${px + 295}" y2="168" stroke="currentColor" stroke-width="3.5"/>
<g class="fig-accent-2">
<line x1="${px + inhibited.xInt}" y1="${base}" x2="${ax}" y2="${inhibited.yInt}" stroke="currentColor" stroke-width="3" stroke-dasharray="7 6"/>
<line x1="${ax}" y1="${inhibited.yInt}" x2="${px + inhibited.endX}" y2="${inhibited.endY}" stroke="currentColor" stroke-width="3.5"/>
</g>
${dot ? `<g class="fig-accent"><circle cx="${px + dot[0]}" cy="${dot[1]}" r="8" fill="none" stroke="currentColor" stroke-width="3.5"/></g>` : ''}
<text x="${px + 155}" y="364" font-size="18" text-anchor="middle" fill="currentColor">${notes[0]}</text>
<text x="${px + 155}" y="390" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">${notes[1]}</text>`
}
const lbSignaturesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-enz-lbs')}</defs>
${lbPanel(15, 'Competitive', 'lines meet on the y-axis', { xInt: 112.5, yInt: 255, endX: 295, endY: 81 }, [150, 255], [rich('same 1/V', ['max'], ' → V', ['max'], ' unchanged'), rich('x-intercept nearer 0 → K', ['m'], ' ↑')])}
${lbPanel(345, 'Noncompetitive', 'lines meet on the x-axis', { xInt: 75, yInt: 210, endX: 233, endY: 110 }, [75, 300], [rich('same −1/K', ['m'], ' → K', ['m'], ' unchanged'), rich('y-intercept higher → V', ['max'], ' ↓')])}
${lbPanel(675, 'Uncompetitive', 'parallel lines', { xInt: 25, yInt: 225, endX: 295, endY: 138 }, null, [rich('same slope K', ['m'], '/V', ['max']), rich('K', ['m'], ' ↓ and V', ['max'], ' ↓ by one factor')])}
<line x1="330" y1="440" x2="372" y2="440" stroke="currentColor" stroke-width="3.5"/>
<text x="382" y="446" font-size="18" fill="currentColor">no inhibitor</text>
<g class="fig-accent-2">
<line x1="540" y1="440" x2="582" y2="440" stroke="currentColor" stroke-width="3.5"/>
<text x="592" y="446" font-size="18" fill="currentColor">+ inhibitor</text>
</g>
</svg>`

/* 7 — Sigmoidal allosteric curve vs hyperbola; effectors shift K0.5 (lead, 1000×460) */
const allostericSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-enz-allo')}</defs>
<text x="290" y="34" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Allosteric vs Michaelis–Menten</text>
<text x="785" y="34" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Heterotropic effectors shift ${SUB('K', '0.5')}</text>
<line x1="90" y1="390" x2="505" y2="390" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-enz-allo)"/>
<line x1="90" y1="390" x2="90" y2="52" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-enz-allo)"/>
<text x="104" y="68" font-size="20" fill="currentColor">v${SUB('', '0')}</text>
<text x="498" y="418" font-size="20" text-anchor="end" fill="currentColor">[S]</text>
<g class="fig-muted">
<line x1="90" y1="110" x2="490" y2="110" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/>
<line x1="270" y1="390" x2="270" y2="250" stroke="currentColor" stroke-width="2" stroke-dasharray="4 6"/>
<text x="488" y="102" font-size="18" text-anchor="end" fill="currentColor">${VMAX}</text>
</g>
<path d="${curvePath(90, 390, 400, 10, michaelis(280, 180))}" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
<text x="330" y="300" font-size="18" fill="currentColor">hyperbolic (M–M)</text>
<g class="fig-accent">
<rect x="238" y="120" width="64" height="270" fill="currentColor" fill-opacity="0.1"/>
<path d="${curvePath(90, 390, 400, 10, hill(280, 180, 3.5))}" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
<circle cx="270" cy="250" r="7" fill="currentColor"/>
<text x="100" y="150" font-size="19" font-weight="700" fill="currentColor">sigmoidal — cooperative (T → R)</text>
<text x="270" y="418" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">${SUB('K', '0.5')}</text>
<text x="320" y="350" font-size="18" fill="currentColor">a switch, not a dimmer:</text>
<text x="320" y="374" font-size="18" fill="currentColor">small Δ[S] → big Δv${SUB('', '0')}</text>
</g>
<line x1="580" y1="390" x2="995" y2="390" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-enz-allo)"/>
<line x1="580" y1="390" x2="580" y2="52" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-enz-allo)"/>
<text x="594" y="68" font-size="20" fill="currentColor">v${SUB('', '0')}</text>
<text x="988" y="418" font-size="20" text-anchor="end" fill="currentColor">[S]</text>
<g class="fig-muted"><line x1="580" y1="110" x2="980" y2="110" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/></g>
<g class="fig-accent">
<defs>${ARROW('arr-enz-allo-b')}</defs>
<path d="${curvePath(580, 390, 390, 10, hill(280, 170, 3.5))}" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
<path d="${curvePath(580, 390, 390, 10, hill(280, 110, 3.5))}" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="9 7" stroke-linejoin="round"/>
<line x1="742" y1="250" x2="700" y2="250" stroke="currentColor" stroke-width="3" marker-end="url(#arr-enz-allo-b)"/>
<line x1="800" y1="312" x2="840" y2="312" stroke="currentColor" stroke-width="3" stroke-dasharray="9 7"/>
<text x="850" y="318" font-size="18" fill="currentColor">+ activator (→ R)</text>
<line x1="800" y1="340" x2="840" y2="340" stroke="currentColor" stroke-width="4"/>
<text x="850" y="346" font-size="18" fill="currentColor">substrate alone</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-enz-allo-r')}</defs>
<path d="${curvePath(580, 390, 390, 10, hill(280, 260, 3.5))}" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="9 7" stroke-linejoin="round"/>
<line x1="758" y1="250" x2="830" y2="250" stroke="currentColor" stroke-width="3" marker-end="url(#arr-enz-allo-r)"/>
<line x1="800" y1="368" x2="840" y2="368" stroke="currentColor" stroke-width="3" stroke-dasharray="9 7"/>
<text x="850" y="374" font-size="18" fill="currentColor">+ inhibitor (→ T)</text>
</g>
</svg>`

/* 8 — Covalent modification (reversible) vs zymogen cleavage (irreversible) vs control proteins (replace-table, 560×440) */
const covalentSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-enz-cov')}</defs>
<g class="fig-muted">
<line x1="14" y1="154" x2="546" y2="154" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="14" y1="302" x2="546" y2="302" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
</g>
<text x="14" y="28" font-size="17" font-weight="700" fill="currentColor">Phosphorylation — reversible, fast</text>
<rect x="20" y="56" width="90" height="48" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="65" y="86" font-size="17" text-anchor="middle" fill="currentColor">Enzyme</text>
<rect x="256" y="56" width="110" height="48" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="305" y="86" font-size="17" text-anchor="middle" fill="currentColor">Enzyme–</text>
<g class="fig-accent-2"><circle cx="352" cy="80" r="11" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/><text x="352" y="85" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">P</text></g>
<g class="fig-accent">
<defs>${ARROW('arr-enz-cov-b')}</defs>
<line x1="116" y1="68" x2="248" y2="68" stroke="currentColor" stroke-width="3" marker-end="url(#arr-enz-cov-b)"/>
<text x="183" y="52" font-size="15" text-anchor="middle" fill="currentColor">kinase: ATP → ADP</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-enz-cov-r')}</defs>
<line x1="250" y1="94" x2="118" y2="94" stroke="currentColor" stroke-width="3" marker-end="url(#arr-enz-cov-r)"/>
<text x="183" y="118" font-size="15" text-anchor="middle" fill="currentColor">phosphatase: P${SUB('', 'i', ' off')}</text>
</g>
<text x="384" y="68" font-size="15" fill="currentColor">glycogen phosphorylase</text>
<text x="384" y="87" font-size="15" fill="currentColor">ON when –P;</text>
<text x="384" y="106" font-size="15" fill="currentColor">glycogen synthase OFF</text>
<g class="fig-muted"><text x="14" y="142" font-size="15" fill="currentColor">amplifiable: one kinase phosphorylates many targets (cascades)</text></g>
<text x="14" y="178" font-size="17" font-weight="700" fill="currentColor">Zymogen cleavage — irreversible, one-way</text>
<g class="fig-muted"><rect x="20" y="206" width="122" height="48" rx="10" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/></g>
<text x="81" y="236" font-size="17" text-anchor="middle" fill="currentColor">Trypsinogen</text>
<line x1="148" y1="230" x2="238" y2="230" stroke="currentColor" stroke-width="3" marker-end="url(#arr-enz-cov)"/>
<text x="193" y="214" font-size="15" text-anchor="middle" fill="currentColor">protease snips</text>
<g class="fig-accent-2">
<rect x="165" y="244" width="56" height="20" rx="6" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
<text x="193" y="259" font-size="13" text-anchor="middle" fill="currentColor">peptide</text>
<text x="193" y="290" font-size="15" text-anchor="middle" fill="currentColor">✕ no way back</text>
</g>
<g class="fig-accent">
<rect x="244" y="206" width="92" height="48" rx="10" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<text x="290" y="236" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Trypsin</text>
</g>
<text x="354" y="212" font-size="15" fill="currentColor">also chymotrypsinogen,</text>
<text x="354" y="231" font-size="15" fill="currentColor">pepsinogen, caspases,</text>
<text x="354" y="250" font-size="15" fill="currentColor">clotting factors —</text>
<text x="354" y="269" font-size="15" fill="currentColor">protects the maker cell</text>
<text x="14" y="326" font-size="17" font-weight="700" fill="currentColor">Control proteins — couple a signal to activity</text>
<g class="fig-accent-2"><circle cx="52" cy="376" r="22" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="52" y="382" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">Ca²⁺</text></g>
<line x1="80" y1="376" x2="116" y2="376" stroke="currentColor" stroke-width="3" marker-end="url(#arr-enz-cov)"/>
<rect x="122" y="352" width="118" height="48" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="181" y="382" font-size="16" text-anchor="middle" fill="currentColor">Calmodulin</text>
<line x1="246" y1="376" x2="282" y2="376" stroke="currentColor" stroke-width="3" marker-end="url(#arr-enz-cov)"/>
<rect x="288" y="352" width="116" height="48" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="346" y="382" font-size="16" text-anchor="middle" fill="currentColor">CaM kinase</text>
<line x1="410" y1="376" x2="446" y2="376" stroke="currentColor" stroke-width="3" marker-end="url(#arr-enz-cov)"/>
<rect x="452" y="352" width="96" height="48" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="500" y="382" font-size="16" text-anchor="middle" fill="currentColor">targets –P</text>
<g class="fig-muted"><text x="14" y="428" font-size="15" fill="currentColor">a rise in cytosolic Ca²⁺ becomes a burst of phosphorylation</text></g>
</svg>`

/* 9 — Feedback inhibition: the end product throttles the first committed step; PFK-1 (lead, 1000×460) */
const box = (cx: number, cy: number, w: number, label: string, size = 20) =>
  `<rect x="${cx - w / 2}" y="${cy - 27}" width="${w}" height="54" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/><text x="${cx}" y="${cy + 7}" font-size="${size}" font-weight="700" text-anchor="middle" fill="currentColor">${label}</text>`
const feedbackSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-enz-fb')}</defs>
${box(160, 107, 100, 'A')}${box(380, 107, 100, 'B')}${box(600, 107, 100, 'C')}${box(820, 107, 100, 'D')}
<line x1="212" y1="107" x2="328" y2="107" stroke="currentColor" stroke-width="3" marker-end="url(#arr-enz-fb)"/>
<line x1="432" y1="107" x2="548" y2="107" stroke="currentColor" stroke-width="3" marker-end="url(#arr-enz-fb)"/>
<line x1="652" y1="107" x2="768" y2="107" stroke="currentColor" stroke-width="3" marker-end="url(#arr-enz-fb)"/>
<text x="490" y="90" font-size="18" text-anchor="middle" fill="currentColor">enzyme 2</text>
<text x="710" y="90" font-size="18" text-anchor="middle" fill="currentColor">enzyme 3</text>
<g class="fig-accent">
<text x="270" y="90" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">enzyme 1</text>
<text x="270" y="50" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">first committed step</text>
<line x1="270" y1="56" x2="270" y2="70" stroke="currentColor" stroke-width="2"/>
</g>
<g class="fig-accent-2">
<defs>${BAR('bar-enz-fb-r')}</defs>
<path d="M820 134 L820 188 Q820 196 812 196 L278 196 Q270 196 270 188 L270 124" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#bar-enz-fb-r)"/>
<text x="545" y="224" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">end product D allosterically inhibits enzyme 1 — no wasted flux, no pile-up of B and C</text>
</g>
<g class="fig-muted"><line x1="60" y1="252" x2="940" y2="252" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/><text x="60" y="282" font-size="18" fill="currentColor">Example — glycolysis</text></g>
${box(150, 330, 120, 'Glucose')}${box(380, 330, 96, 'F6P')}${box(600, 330, 120, 'F1,6-BP')}${box(840, 330, 120, 'Pyruvate')}
<line x1="212" y1="330" x2="328" y2="330" stroke="currentColor" stroke-width="3" marker-end="url(#arr-enz-fb)"/>
<line x1="430" y1="330" x2="536" y2="330" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-enz-fb)"/>
<line x1="662" y1="330" x2="776" y2="330" stroke="currentColor" stroke-width="3" marker-end="url(#arr-enz-fb)"/>
<g class="fig-muted">
<text x="270" y="312" font-size="16" text-anchor="middle" fill="currentColor">2 steps</text>
<text x="719" y="312" font-size="16" text-anchor="middle" fill="currentColor">7 steps</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-enz-fb-b')}</defs>
<text x="483" y="308" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">PFK-1</text>
<line x1="560" y1="414" x2="508" y2="344" stroke="currentColor" stroke-width="3" marker-end="url(#arr-enz-fb-b)"/>
<text x="582" y="438" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">AMP activates</text>
</g>
<g class="fig-accent-2">
<line x1="410" y1="414" x2="460" y2="344" stroke="currentColor" stroke-width="3" marker-end="url(#bar-enz-fb-r)"/>
<text x="392" y="438" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">ATP, citrate inhibit</text>
</g>
</svg>`

export const mcatEnzymesFigures: DeckFigurePlacement[] = [
  {
    at: 'What Enzymes Do',
    mode: 'lead',
    figure: {
      svg: activationSvg,
      alt:
        'Reaction-coordinate diagram: free energy against reaction progress. Reactants sit on a plateau, products on a lower plateau. Two humps connect them: a tall one without enzyme and a lower blue one with enzyme; the peak is the transition state. Vertical arrows mark the activation energy for each path — much smaller with the enzyme. A red arrow on the right marks ΔG, the drop from reactants to products, which is the same for both paths.',
      caption: 'The enzyme lowers the hill (Eₐ), not the drop (ΔG): the reaction reaches the same equilibrium, only faster (illustrative).',
    },
    blocks: [
      '- The enzyme lowers $E_a$ by binding the transition state — forward and reverse rates rise equally',
      '- $\\Delta G$ and $K_{eq}$ do not move: equilibrium is reached faster, never in a different place',
    ],
  },
  {
    at: 'The Model',
    mode: 'lead',
    figure: {
      svg: mmSvg,
      alt:
        'Initial rate v0 against substrate concentration: a hyperbola rising steeply from the origin and flattening toward a dashed horizontal line labelled Vmax. The equation v0 = Vmax[S]/(Km + [S]) is written above. A red dot marks the point where the rate is Vmax/2; its substrate concentration is Km, marked on the axis. A blue dashed line along the initial slope is labelled first order, v0 proportional to [S]; the flat right end is labelled zero order, saturated, v0 ≈ Vmax.',
      caption: 'The Michaelis–Menten curve: half of Vmax is reached at [S] = Km; the enzyme saturates far above Km (illustrative).',
    },
    blocks: [
      '- $v_0 = V_{max}[S]/(K_m+[S])$ — at $[S]=K_m$ the rate is exactly $V_{max}/2$',
      '- Far below $K_m$ the rate is first order in $[S]$; far above it every active site is busy (zero order)',
    ],
  },
  {
    at: 'The Lineweaver-Burk',
    mode: 'after',
    figure: {
      svg: lbSvg,
      alt:
        'A double-reciprocal plot: 1/v0 on the vertical axis against 1/[S] on the horizontal axis, with the vertical axis drawn in the middle so negative 1/[S] values are visible on the left. A straight blue line rises to the right. Where it crosses the vertical axis is the y-intercept, 1/Vmax (blue dot). Extrapolated as a dashed line to the left, it crosses the horizontal axis at the x-intercept, −1/Km (red dot). The slope is Km/Vmax. A note reads: higher y-intercept means lower Vmax; x-intercept closer to zero means larger Km.',
      caption: 'Lineweaver–Burk: the hyperbola becomes a line whose intercepts hand you 1/Vmax and −1/Km (illustrative).',
    },
    blocks: [
      '- Read the intercepts, not the slope: y-intercept $1/V_{max}$ (higher = slower enzyme), x-intercept $-1/K_m$ (closer to zero = larger $K_m$)',
    ],
  },
  {
    at: 'Physiological Contrast: Hexokinase vs. Glucokinase',
    mode: 'lead',
    figure: {
      svg: hexoSvg,
      alt:
        'Two saturation curves on one graph of rate against glucose concentration, each scaled to its own Vmax. The blue hexokinase curve has a very low Km: it shoots up and is essentially flat at Vmax before fasting glucose is reached. The red glucokinase curve has a high Km equal to fasting glucose, so at fasting it runs at half of Vmax and keeps climbing as glucose rises after a meal; dotted vertical lines mark fasting glucose and after a meal.',
      caption: 'Same reaction, different Km: hexokinase is saturated at any physiological glucose; glucokinase’s rate rises and falls with blood sugar (illustrative; each curve scaled to its own Vmax).',
    },
    blocks: [
      '- **Hexokinase** (most tissues): low $K_m$ — runs flat out even at fasting glucose',
      '- **Glucokinase** (liver, β cells): high $K_m$ near fasting glucose — rate tracks blood sugar, so the liver responds in proportion after a meal',
    ],
  },
  {
    at: 'Reversible Inhibition',
    mode: 'replace-table',
    figure: {
      svg: inhibitionSvg,
      alt:
        'Four panels, each a schematic enzyme E with a round active site on its right edge and a square allosteric site on its bottom edge; substrate S is a blue circle, inhibitor I a red diamond. Competitive: I occupies the active site of free E while S is blocked outside; Km up, Vmax unchanged; more substrate wins. Noncompetitive: I sits in the allosteric site whether or not S is bound; Km unchanged, Vmax down; more substrate does not help. Uncompetitive: I binds the allosteric site only once S is in place (ES only); Km down and Vmax down by the same factor; more substrate makes it worse. Mixed: I binds E and ES unequally; Km up or down, Vmax down; more substrate does not help.',
      caption: 'Where the inhibitor binds decides the kinetics: only a competitive inhibitor can be out-competed by substrate.',
    },
    blocks: [
      '- **Competitive:** active site of free E — $K_m$ ↑, $V_{max}$ same; excess substrate wins',
      '- **Noncompetitive:** E and ES equally, at another site — $V_{max}$ ↓, $K_m$ same',
      '- **Uncompetitive:** ES only — $K_m$ ↓ and $V_{max}$ ↓ by the same factor; more substrate makes it worse',
      '- **Mixed:** E and ES unequally — $V_{max}$ ↓, $K_m$ either way',
    ],
  },
  {
    at: 'Lineweaver-Burk Signatures',
    mode: 'lead',
    figure: {
      svg: lbSignaturesSvg,
      alt:
        'Three small Lineweaver–Burk plots, each with an uninhibited line and a red inhibited line. Competitive: the red line is steeper and the two meet on the y-axis (same 1/Vmax, so Vmax unchanged; the x-intercept moves toward zero, so Km rises). Noncompetitive: the two lines meet on the x-axis (same −1/Km, so Km unchanged; the red y-intercept is higher, so Vmax falls). Uncompetitive: the red line is parallel to the original, shifted up (same slope Km/Vmax; Km and Vmax both fall by one factor).',
      caption: 'Lineweaver–Burk signatures: the intercept the inhibitor leaves alone names the parameter it did not change (illustrative).',
    },
    blocks: [
      '- Competitive lines meet on the y-axis, noncompetitive on the x-axis, uncompetitive run parallel — the intercept that stays put is the parameter that did not change',
    ],
  },
  {
    at: 'Allosteric Enzymes Break Michaelis-Menten',
    mode: 'lead',
    figure: {
      svg: allostericSvg,
      alt:
        'Left: rate against substrate concentration with two curves to the same Vmax. The Michaelis–Menten hyperbola rises steeply from the origin and flattens; the blue allosteric curve is S-shaped (sigmoidal): flat at first, then steep through K0.5 (marked where the rate is half of Vmax), then flat again. A shaded band around K0.5 is labelled: a switch, not a dimmer — small change in [S], big change in rate. Right: the same sigmoidal curve with a dashed blue curve shifted left by an activator (toward the R state) and a dashed red curve shifted right by an inhibitor (toward the T state); arrows at half-maximal rate show the left and right shifts.',
      caption: 'Cooperativity makes the curve sigmoidal; heterotropic activators shift it left (R), inhibitors right (T) — the same logic as hemoglobin (illustrative).',
    },
    blocks: [
      '- Cooperative binding (T → R) makes the curve sigmoidal: near $K_{0.5}$ a small change in $[S]$ swings the rate — a switch, not a dimmer',
      '- Heterotropic activators shift the curve left (toward R); inhibitors shift it right (toward T) — hemoglobin’s 2,3-BPG, H⁺ and CO₂ are T-state stabilizers',
    ],
  },
  {
    at: 'Covalent Modification',
    mode: 'replace-table',
    figure: {
      svg: covalentSvg,
      alt:
        'Three rows. Phosphorylation, reversible and fast: an Enzyme box and an Enzyme–P box joined by a blue arrow (kinase, ATP to ADP) going right and a red arrow (phosphatase, Pi off) going back; glycogen phosphorylase is ON when phosphorylated, glycogen synthase OFF; cascades amplify. Zymogen cleavage, irreversible: a dashed inactive Trypsinogen box, a protease snips off a red peptide fragment, giving a solid active Trypsin box; no way back; also chymotrypsinogen, pepsinogen, caspases, clotting factors; protects the producing cell. Control proteins: Ca²⁺ activates calmodulin, which activates CaM kinase, which phosphorylates targets.',
      caption: 'Three ways to change an enzyme after it is made: a reversible phosphate switch, a one-way zymogen cut, and a control protein that reads a signal.',
    },
    blocks: [
      '- **Phosphorylation:** kinase on, phosphatase off — fast, reversible, amplified through cascades (glycogen phosphorylase ON when –P; glycogen synthase OFF)',
      '- **Zymogens:** one-way cleavage activates trypsinogen, chymotrypsinogen, pepsinogen, caspases and clotting factors — and protects the cell that made them',
      '- **Control proteins:** calmodulin senses $Ca^{2+}$ and switches on CaM kinases',
    ],
  },
  {
    at: 'Feedback Inhibition',
    mode: 'lead',
    figure: {
      svg: feedbackSvg,
      alt:
        'Top: a pathway A → B → C → D catalysed by enzymes 1, 2 and 3; enzyme 1 is labelled the first committed step. A red line runs from D back to enzyme 1 and ends in a bar: the end product allosterically inhibits the first committed step, so there is no wasted flux and no pile-up of B and C. Bottom, the glycolysis example: Glucose → (2 steps) → F6P → F1,6-BP → (7 steps) → Pyruvate, with PFK-1 on the F6P to F1,6-BP arrow; ATP and citrate inhibit PFK-1 (red bar), AMP activates it (blue arrow).',
      caption: 'Feedback inhibition: the end product shuts the first committed step; PFK-1 is glycolysis’s throttle — ATP and citrate close it, AMP opens it.',
    },
    blocks: [
      '- The end product allosterically inhibits the **first committed step**, so flux stops before intermediates pile up',
      '- PFK-1: ATP and citrate (energy-rich) inhibit, AMP (energy-poor) activates — glycolysis throttles to demand',
    ],
  },
]
