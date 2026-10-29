import type { DeckFigurePlacement } from './index'

/**
 * Biochemistry Foundations (7-part survey, MCAT B/B) — figures for the in-class
 * deck. Authored 2026-10-28.
 *
 * The dedicated decks already draw Michaelis–Menten / Lineweaver–Burk and the
 * inhibitor panels, the amino-acid grid and titration curve, glycolysis, the
 * TCA cycle, the electron transport chain and the lipoprotein map, so the
 * survey draws DIFFERENT views: an electrophoresis gel for the pI rule, two
 * saturation curves for Vmax = kcat[E]T, a cytosol-vs-mitochondrion compartment
 * map, proton counting at the chain (why NADH ≈ 2.5 and FADH₂ ≈ 1.5 ATP),
 * schematic lipid classes, β-oxidation as carbon arithmetic, nucleotide anatomy,
 * the base-pairing ladder with the Tm trend, and a pathway-integration map.
 *
 * Every drawing is ours, from the concept; no textbook, prep-company, AAMC or
 * web figure was copied. No molecule is drawn structurally (rings are plain
 * schematic polygons); curves are textbook shapes marked "illustrative".
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-bf-<figure>[-colour], bar-bf-<figure>[-colour]).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** Inhibition "bar" head (⊣). */
const BAR = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M5,0 L5,10" stroke="currentColor" stroke-width="2.5"/></marker>`

/** Rich SVG text with subscripts (see mcat-bb-enzymes.ts): `rich('V', ['max'], ' = k', ['cat'])`. */
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

/** Polyline path of y = f(x) for x in [0, xmax] px from origin (ox, oy), y up. */
const curvePath = (ox: number, oy: number, xmax: number, step: number, f: (x: number) => number) => {
  const pts: string[] = []
  for (let x = 0; x <= xmax + 1e-6; x += step) pts.push(`${Math.round((ox + x) * 10) / 10} ${Math.round((oy - f(x)) * 10) / 10}`)
  return 'M' + pts.join(' L')
}
const michaelis = (H: number, K: number) => (x: number) => (H * x) / (K + x)

/** Rounded box with a centred label. */
const box = (cx: number, cy: number, w: number, h: number, label: string, size = 18, weight = 700) =>
  `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="11" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/><text x="${cx}" y="${cy + size * 0.36}" font-size="${size}" font-weight="${weight}" text-anchor="middle" fill="currentColor">${label}</text>`

/** Regular polygon points (n sides, circumradius r, first vertex at startDeg). */
const poly = (cx: number, cy: number, r: number, n: number, startDeg: number) => {
  const pts: string[] = []
  for (let i = 0; i < n; i++) {
    const a = ((startDeg + (360 / n) * i) * Math.PI) / 180
    pts.push(`${Math.round((cx + r * Math.cos(a)) * 10) / 10},${Math.round((cy + r * Math.sin(a)) * 10) / 10}`)
  }
  return pts.join(' ')
}

/** Wavy hydrocarbon tail: n half-waves of 18 px starting at (x, y). */
const tail = (x: number, y: number, n = 6) => {
  let d = `M${x} ${y} q 9 -7 18 0`
  for (let i = 1; i < n; i++) d += ' t 18 0'
  return d
}

/* 1 — pI rule + electrophoresis at pH 7 (lead, 1000×460) */
const piSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bf-pi')}</defs>
<text x="60" y="40" font-size="22" font-weight="700" fill="currentColor">Net charge follows pH relative to pI</text>
<g class="fig-accent">
<rect x="120" y="92" width="380" height="36" fill="currentColor" fill-opacity="0.12"/>
<text x="310" y="78" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">pH &lt; pI  →  net positive (+)</text>
<text x="310" y="156" font-size="16" text-anchor="middle" fill="currentColor">extra protons held: –NH₃⁺</text>
</g>
<g class="fig-accent-2">
<rect x="500" y="92" width="380" height="36" fill="currentColor" fill-opacity="0.12"/>
<text x="690" y="78" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">pH &gt; pI  →  net negative (−)</text>
<text x="690" y="156" font-size="16" text-anchor="middle" fill="currentColor">protons lost: –COO⁻</text>
<circle cx="500" cy="110" r="9" fill="currentColor"/>
<text x="500" y="156" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">pI: net 0</text>
</g>
<line x1="120" y1="110" x2="900" y2="110" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-pi)"/>
<text x="916" y="117" font-size="20" fill="currentColor">pH</text>
<text x="60" y="212" font-size="20" font-weight="700" fill="currentColor">Electrophoresis at pH 7 — which way does each protein run?</text>
<rect x="160" y="236" width="680" height="184" rx="14" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">
<rect x="126" y="252" width="14" height="152" rx="3" fill="currentColor"/>
<rect x="860" y="252" width="14" height="152" rx="3" fill="currentColor"/>
<text x="830" y="258" font-size="15" text-anchor="end" fill="currentColor">buffer pH 7</text>
<rect x="494" y="258" width="12" height="28" rx="2" fill="currentColor" fill-opacity="0.6"/>
<rect x="494" y="314" width="12" height="28" rx="2" fill="currentColor" fill-opacity="0.6"/>
<rect x="494" y="370" width="12" height="28" rx="2" fill="currentColor" fill-opacity="0.6"/>
<text x="500" y="440" font-size="15" text-anchor="middle" fill="currentColor">wells</text>
</g>
<text x="92" y="340" font-size="30" font-weight="700" text-anchor="middle" fill="currentColor">−</text>
<text x="92" y="366" font-size="15" text-anchor="middle" fill="currentColor">cathode</text>
<text x="908" y="340" font-size="30" font-weight="700" text-anchor="middle" fill="currentColor">+</text>
<text x="908" y="366" font-size="15" text-anchor="middle" fill="currentColor">anode</text>
<g class="fig-accent">
<defs>${ARROW('arr-bf-pi-b')}</defs>
<line x1="488" y1="272" x2="322" y2="272" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-pi-b)"/>
<rect x="286" y="260" width="28" height="24" rx="5" fill="currentColor" fill-opacity="0.7"/>
<text x="520" y="278" font-size="16" font-weight="700" fill="currentColor">pI 8.5: pH &lt; pI, net + → cathode (−)</text>
</g>
<rect x="486" y="316" width="28" height="24" rx="5" fill="currentColor" fill-opacity="0.7"/>
<text x="530" y="334" font-size="16" font-weight="700" fill="currentColor">pI 7.0 = pH: net 0, stays in the well</text>
<g class="fig-accent-2">
<defs>${ARROW('arr-bf-pi-r')}</defs>
<line x1="512" y1="384" x2="678" y2="384" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-pi-r)"/>
<rect x="686" y="372" width="28" height="24" rx="5" fill="currentColor" fill-opacity="0.7"/>
<text x="480" y="390" font-size="16" font-weight="700" text-anchor="end" fill="currentColor">pI 5.5: pH &gt; pI, net − → anode (+)</text>
</g>
</svg>`

/* 2 — Vmax = kcat[E]T: doubling the enzyme doubles Vmax, Km unchanged (after, 1000×460) */
const vmaxSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bf-vmax')}</defs>
<line x1="110" y1="390" x2="958" y2="390" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bf-vmax)"/>
<line x1="110" y1="390" x2="110" y2="40" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bf-vmax)"/>
<text x="124" y="52" font-size="21" fill="currentColor">v</text>
<text x="950" y="422" font-size="21" text-anchor="end" fill="currentColor">[S]</text>
<text x="560" y="60" font-size="25" font-weight="700" text-anchor="middle" fill="currentColor">${rich('V', ['max'], ' = k', ['cat'], ' · [E]', ['T'])}</text>
<g class="fig-muted">
<text x="560" y="90" font-size="19" text-anchor="middle" fill="currentColor">${rich('twice the enzyme → twice V', ['max'], '; K', ['m'], ' does not move')}</text>
<line x1="260" y1="390" x2="260" y2="130" stroke="currentColor" stroke-width="2" stroke-dasharray="4 6"/>
</g>
<g class="fig-accent">
<line x1="110" y1="260" x2="940" y2="260" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/>
<path d="${curvePath(110, 390, 830, 10, michaelis(130, 150))}" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
<circle cx="260" cy="325" r="7" fill="currentColor"/>
<text x="950" y="252" font-size="20" font-weight="700" text-anchor="end" fill="currentColor">${rich('V', ['max'], ' with [E]')}</text>
<line x1="640" y1="330" x2="684" y2="330" stroke="currentColor" stroke-width="4"/>
<text x="694" y="336" font-size="19" fill="currentColor">[E]</text>
</g>
<g class="fig-accent-2">
<line x1="110" y1="130" x2="940" y2="130" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/>
<path d="${curvePath(110, 390, 830, 10, michaelis(260, 150))}" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
<circle cx="260" cy="260" r="7" fill="currentColor"/>
<text x="950" y="122" font-size="20" font-weight="700" text-anchor="end" fill="currentColor">${rich('V', ['max'], ' with 2 × [E]')}</text>
<line x1="640" y1="360" x2="684" y2="360" stroke="currentColor" stroke-width="4"/>
<text x="694" y="366" font-size="19" fill="currentColor">2 × [E]</text>
</g>
<text x="260" y="420" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">${rich('K', ['m'], ' (same for both)')}</text>
<text x="110" y="448" font-size="18" fill="currentColor">${rich('both dots sit at half of their own V', ['max'], ' — low K', ['m'], ' = high affinity, whatever the amount of enzyme')}</text>
</svg>`

/* 3 — Where it happens: cytosol vs mitochondrion compartment map (lead, 1000×460) */
const compartmentSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bf-comp')}</defs>
<rect x="14" y="14" width="972" height="432" rx="26" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-width="2.5"/>
<text x="34" y="46" font-size="17" font-weight="700" letter-spacing="2" fill="currentColor">CYTOSOL</text>
<rect x="420" y="66" width="556" height="364" rx="40" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="2.5"/>
<rect x="440" y="86" width="516" height="324" rx="30" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="966" y="58" font-size="16" font-weight="700" letter-spacing="1" text-anchor="end" fill="currentColor">MITOCHONDRION (outer + inner membrane)</text>
<text x="940" y="398" font-size="16" font-weight="700" letter-spacing="2" text-anchor="end" fill="currentColor">MATRIX</text>
${box(120, 100, 130, 48, 'Glucose')}
${box(120, 240, 150, 48, '2 Pyruvate')}
<line x1="120" y1="124" x2="120" y2="214" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-comp)"/>
<text x="136" y="160" font-size="17" fill="currentColor">glycolysis (10 steps)</text>
<text x="136" y="182" font-size="17" font-weight="700" fill="currentColor">+2 ATP · +2 NADH</text>
<g class="fig-muted"><text x="136" y="204" font-size="15" fill="currentColor">no O₂ needed</text></g>
<line x1="120" y1="264" x2="120" y2="324" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-comp)"/>
<g class="fig-muted">
<text x="136" y="290" font-size="15" fill="currentColor">no O₂ → LDH (muscle) / yeast enzyme</text>
<text x="136" y="310" font-size="15" fill="currentColor">regenerates NAD⁺ for glycolysis</text>
</g>
${box(120, 350, 190, 46, 'Lactate · Ethanol + CO₂', 15)}
${box(305, 350, 120, 46, 'Fatty acids', 16)}
<g class="fig-muted"><text x="305" y="392" font-size="14" text-anchor="middle" fill="currentColor">carnitine shuttle (CPT-I) →</text></g>
<line x1="367" y1="350" x2="492" y2="350" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-comp)"/>
${box(560, 350, 130, 46, 'β-oxidation', 16)}
<line x1="560" y1="326" x2="560" y2="266" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-comp)"/>
<line x1="197" y1="240" x2="488" y2="240" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-comp)"/>
<text x="342" y="226" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">PDH</text>
<g class="fig-muted"><text x="342" y="260" font-size="15" text-anchor="middle" fill="currentColor">−CO₂, +NADH</text></g>
${box(560, 240, 140, 48, 'Acetyl-CoA')}
<line x1="632" y1="240" x2="714" y2="240" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-comp)"/>
<circle cx="770" cy="240" r="52" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="3"/>
<path d="M 770 206 A 34 34 0 1 1 740 258" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bf-comp)"/>
<text x="770" y="247" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">TCA</text>
<g class="fig-muted"><text x="770" y="318" font-size="15" text-anchor="middle" fill="currentColor">per acetyl-CoA:</text></g>
<text x="770" y="340" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">3 NADH · 1 FADH₂ · 1 GTP</text>
<g class="fig-accent">
<defs>${ARROW('arr-bf-comp-b')}</defs>
<rect x="470" y="80" width="470" height="14" rx="4" fill="currentColor" fill-opacity="0.35"/>
<path d="M822 240 Q 905 240 905 102" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-comp-b)"/>
<text x="896" y="196" font-size="14" font-weight="700" text-anchor="end" fill="currentColor">NADH, FADH₂</text>
<text x="700" y="120" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Inner membrane: ETC (I–IV) + ATP synthase</text>
<text x="700" y="143" font-size="16" text-anchor="middle" fill="currentColor">e⁻ from NADH, FADH₂ fall to O₂ → H₂O</text>
<text x="700" y="166" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">H⁺ gradient → ~30–32 ATP per glucose</text>
</g>
</svg>`

/* 4 — Proton counting at the chain: why NADH ≈ 2.5 and FADH₂ ≈ 1.5 ATP (lead, 1000×460) */
const etcSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bf-etc')}</defs>
<g class="fig-accent"><text x="60" y="44" font-size="20" font-weight="700" fill="currentColor">NADH enters at Complex I: 4 + 4 + 2 = 10 H⁺ pumped  →  ≈ 2.5 ATP</text></g>
<g class="fig-accent-2"><text x="60" y="74" font-size="20" font-weight="700" fill="currentColor">FADH₂ enters at Complex II: 0 + 4 + 2 = 6 H⁺ pumped  →  ≈ 1.5 ATP</text></g>
<g class="fig-muted">
<text x="940" y="112" font-size="16" text-anchor="end" fill="currentColor">intermembrane space (high H⁺)</text>
<text x="500" y="300" font-size="16" text-anchor="middle" fill="currentColor">matrix (low H⁺)</text>
</g>
<rect x="60" y="160" width="880" height="120" rx="8" fill="currentColor" fill-opacity="0.08"/>
<line x1="60" y1="160" x2="940" y2="160" stroke="currentColor" stroke-width="2"/>
<line x1="60" y1="280" x2="940" y2="280" stroke="currentColor" stroke-width="2"/>
${box(150, 220, 80, 100, 'I', 26)}
${box(300, 240, 76, 80, 'II', 24)}
<circle cx="385" cy="226" r="16" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<text x="385" y="232" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Q</text>
${box(470, 220, 80, 100, 'III', 26)}
<circle cx="555" cy="180" r="15" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<text x="555" y="186" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">c</text>
${box(640, 220, 80, 100, 'IV', 26)}
<rect x="790" y="170" width="80" height="100" rx="11" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="830" y="342" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">ATP synthase</text>
<circle cx="830" cy="298" r="24" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
${box(150, 372, 110, 44, 'NADH', 18)}
${box(300, 372, 160, 44, 'FADH₂ (succinate)', 15)}
<line x1="150" y1="350" x2="150" y2="276" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bf-etc)"/>
<line x1="300" y1="350" x2="300" y2="286" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bf-etc)"/>
<g class="fig-muted">
<text x="160" y="330" font-size="14" fill="currentColor">2 e⁻</text>
<text x="310" y="330" font-size="14" fill="currentColor">2 e⁻</text>
<text x="300" y="190" font-size="14" text-anchor="middle" fill="currentColor">0 H⁺ — II does not pump</text>
</g>
<line x1="190" y1="214" x2="367" y2="220" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bf-etc)"/>
<line x1="338" y1="246" x2="372" y2="236" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bf-etc)"/>
<line x1="401" y1="226" x2="428" y2="222" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bf-etc)"/>
<line x1="510" y1="196" x2="540" y2="185" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bf-etc)"/>
<line x1="570" y1="185" x2="600" y2="196" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bf-etc)"/>
<line x1="640" y1="272" x2="640" y2="314" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bf-etc)"/>
<text x="640" y="338" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">½ O₂ + 2 H⁺ → H₂O</text>
<g class="fig-muted"><text x="640" y="358" font-size="14" text-anchor="middle" fill="currentColor">final electron acceptor</text></g>
<g class="fig-accent-2">
<defs>${ARROW('arr-bf-etc-r')}</defs>
<line x1="150" y1="168" x2="150" y2="126" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-etc-r)"/>
<line x1="470" y1="168" x2="470" y2="126" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-etc-r)"/>
<line x1="640" y1="168" x2="640" y2="126" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-etc-r)"/>
<text x="150" y="114" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">4 H⁺</text>
<text x="470" y="114" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">4 H⁺</text>
<text x="640" y="114" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">2 H⁺</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-bf-etc-b')}</defs>
<line x1="830" y1="128" x2="830" y2="288" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-bf-etc-b)"/>
<text x="846" y="150" font-size="15" fill="currentColor">H⁺ flows back</text>
<text x="830" y="370" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">ADP + Pᵢ → ATP</text>
</g>
</svg>`

/* 5 — Four lipid classes as schematic icons (replace-table, 560×440) */
const lipidPanel = (x: number, y: number, title: string, icon: string, line1: string, line2: string) => `
<g class="fig-muted"><rect x="${x + 8}" y="${y + 6}" width="264" height="208" rx="12" fill="none" stroke="currentColor" stroke-width="2"/></g>
<text x="${x + 140}" y="${y + 30}" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">${title}</text>
${icon}
<text x="${x + 140}" y="${y + 176}" font-size="14" text-anchor="middle" fill="currentColor">${line1}</text>
<text x="${x + 140}" y="${y + 198}" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">${line2}</text>`
const tgIcon = (x: number, y: number) => `
<g class="fig-accent"><rect x="${x + 40}" y="${y + 50}" width="16" height="84" rx="5" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/></g>
<path d="${tail(x + 60, y + 64)}" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="${tail(x + 60, y + 92)}" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="${tail(x + 60, y + 120)}" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted"><text x="${x + 48}" y="${y + 152}" font-size="13" text-anchor="middle" fill="currentColor">glycerol</text><text x="${x + 152}" y="${y + 152}" font-size="13" text-anchor="middle" fill="currentColor">3 fatty-acid tails</text></g>`
const plIcon = (x: number, y: number) => `
<g class="fig-accent-2"><circle cx="${x + 54}" cy="${y + 84}" r="20" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/><text x="${x + 54}" y="${y + 90}" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">P</text></g>
<g class="fig-accent"><rect x="${x + 80}" y="${y + 66}" width="16" height="36" rx="5" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/></g>
<path d="${tail(x + 100, y + 76)}" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="${tail(x + 100, y + 96)}" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted"><text x="${x + 54}" y="${y + 130}" font-size="13" text-anchor="middle" fill="currentColor">polar head</text><text x="${x + 160}" y="${y + 130}" font-size="13" text-anchor="middle" fill="currentColor">2 nonpolar tails</text></g>`
const steroidIcon = (x: number, y: number) => {
  const R = 22
  const ax = x + 72
  const ay = y + 100
  const bx = ax + 1.5 * R
  const by = ay - 0.866 * R
  const cx = ax + 3 * R
  const cy = ay
  // D ring: regular pentagon fused to C's upper-right edge (side = R).
  const e1 = { x: cx + R / 2, y: cy - 0.866 * R }
  const e2 = { x: cx + R, y: cy }
  const mx = (e1.x + e2.x) / 2
  const my = (e1.y + e2.y) / 2
  const apo = R / (2 * Math.tan(Math.PI / 5))
  const nx = (e2.y - e1.y) / R
  const ny = -(e2.x - e1.x) / R
  const dx = mx + apo * nx
  const dy = my + apo * ny
  const dr = R / (2 * Math.sin(Math.PI / 5))
  const start = (Math.atan2(e1.y - dy, e1.x - dx) * 180) / Math.PI
  const ring = (pts: string) => `<polygon points="${pts}" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>`
  return `
${ring(poly(ax, ay, R, 6, 0))}${ring(poly(bx, by, R, 6, 0))}${ring(poly(cx, cy, R, 6, 0))}${ring(poly(dx, dy, dr, 5, start))}
<text x="${ax}" y="${ay + 6}" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">A</text>
<text x="${bx}" y="${by + 6}" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">B</text>
<text x="${cx}" y="${cy + 6}" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">C</text>
<text x="${dx}" y="${dy + 5}" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">D</text>
<g class="fig-muted"><text x="${x + 140}" y="${y + 152}" font-size="13" text-anchor="middle" fill="currentColor">four fused rings, mostly nonpolar</text></g>`
}
const sphIcon = (x: number, y: number) => `
<g class="fig-accent-2"><circle cx="${x + 46}" cy="${y + 84}" r="16" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/></g>
<g class="fig-accent"><rect x="${x + 66}" y="${y + 64}" width="40" height="40" rx="7" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/><text x="${x + 86}" y="${y + 89}" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">Sph</text></g>
<path d="${tail(x + 108, y + 74)}" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="${tail(x + 108, y + 96)}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 4"/>
<g class="fig-muted"><text x="${x + 46}" y="${y + 60}" font-size="13" text-anchor="middle" fill="currentColor">head</text><text x="${x + 80}" y="${y + 130}" font-size="13" text-anchor="middle" fill="currentColor">sphingosine</text><text x="${x + 268}" y="${y + 130}" font-size="13" text-anchor="end" fill="currentColor">+ fatty acid (dashed)</text></g>`
const lipidsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${lipidPanel(0, 0, 'Triglyceride', tgIcon(0, 0), '3 fatty acids + glycerol', 'energy storage')}
${lipidPanel(280, 0, 'Phospholipid', plIcon(280, 0), '2 tails + glycerol + phosphate head', 'membranes (bilayer)')}
${lipidPanel(0, 220, 'Steroid', steroidIcon(0, 220), 'cholesterol, testosterone, estrogen', 'membranes · hormones')}
${lipidPanel(280, 220, 'Sphingolipid', sphIcon(280, 220), 'sphingosine backbone, not glycerol', 'myelin · cell signaling')}
</svg>`

/* 6 — β-oxidation as carbon arithmetic: palmitate → 7 cycles, 8 acetyl-CoA, 106 ATP (lead, 1000×460) */
const unitBoxes = () => {
  let s = ''
  for (let i = 0; i < 8; i++) {
    const x = 70 + i * 116
    s += `<rect x="${x}" y="60" width="92" height="46" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/><text x="${x + 46}" y="89" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">2 C</text>`
    s += `<g class="fig-accent"><line x1="${x + 46}" y1="110" x2="${x + 46}" y2="190" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bf-box-b)"/><rect x="${x}" y="196" width="92" height="38" rx="9" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><text x="${x + 46}" y="221" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">Ac-CoA</text></g>`
  }
  for (let i = 0; i < 7; i++) {
    const x = 174 + i * 116
    s += `<g class="fig-accent-2"><line x1="${x}" y1="54" x2="${x}" y2="112" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4"/><circle cx="${x}" cy="134" r="13" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/><text x="${x}" y="139" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">${i + 1}</text></g>`
  }
  return s
}
const betaOxSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bf-box')}</defs>
<text x="70" y="40" font-size="20" font-weight="700" fill="currentColor">Palmitate (C16) = 8 two-carbon units, so 7 cuts</text>
<g class="fig-accent"><defs>${ARROW('arr-bf-box-b')}</defs></g>
${unitBoxes()}
<g class="fig-accent">
<text x="70" y="278" font-size="19" font-weight="700" fill="currentColor">8 acetyl-CoA × 10 ATP (via TCA) = 80</text>
</g>
<g class="fig-accent-2">
<text x="70" y="308" font-size="19" font-weight="700" fill="currentColor">7 NADH × 2.5 = 17.5</text>
<text x="70" y="338" font-size="19" font-weight="700" fill="currentColor">7 FADH₂ × 1.5 = 10.5</text>
<text x="560" y="278" font-size="17" font-weight="700" fill="currentColor">each cut = one cycle: −2 C, +1 NADH, +1 FADH₂</text>
</g>
<g class="fig-muted">
<text x="70" y="368" font-size="18" fill="currentColor">− 2 ATP to activate the fatty acid (acyl-CoA synthetase)</text>
<text x="560" y="308" font-size="16" fill="currentColor">cycles = acetyl-CoA − 1 (even chain: n/2 acetyl-CoA)</text>
<text x="560" y="334" font-size="16" fill="currentColor">CPT-I (carnitine shuttle) lets long chains into the matrix;</text>
<text x="560" y="356" font-size="16" fill="currentColor">malonyl-CoA blocks CPT-I in the fed state</text>
</g>
<line x1="70" y1="384" x2="520" y2="384" stroke="currentColor" stroke-width="2"/>
<text x="70" y="420" font-size="25" font-weight="700" fill="currentColor">≈ 106 ATP per palmitate</text>
<g class="fig-muted"><text x="560" y="420" font-size="16" fill="currentColor">vs ~30–32 ATP per glucose: fats are more reduced</text></g>
</svg>`

/* 7 — Nucleotide anatomy: DNA vs RNA, 2′ group and 3′-OH growth point (replace-table, 560×440) */
const nucleotide = (ox: number, title: string, bases: string, twoPrime: string, twoPrimeRed: boolean, foot1: string, foot2: string, foot2Red: boolean) => {
  const cx = ox + 128
  const cy = 150
  const r = 32
  const v = (deg: number) => ({ x: Math.round((cx + r * Math.cos((deg * Math.PI) / 180)) * 10) / 10, y: Math.round((cy + r * Math.sin((deg * Math.PI) / 180)) * 10) / 10 })
  const c1 = v(-18)
  const c2 = v(54)
  const c3 = v(126)
  const c4 = v(198)
  return `
<text x="${ox + 140}" y="30" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">${title}</text>
<g class="fig-muted"><line x1="${ox + 52}" y1="50" x2="${ox + 52}" y2="68" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"/><text x="${ox + 64}" y="58" font-size="12" fill="currentColor">from previous 3′</text></g>
<circle cx="${ox + 52}" cy="86" r="16" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<text x="${ox + 52}" y="92" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">P</text>
<line x1="${ox + 63}" y1="98" x2="${c4.x}" y2="${c4.y}" stroke="currentColor" stroke-width="2.5"/>
<text x="${ox + 68}" y="128" font-size="13" text-anchor="end" fill="currentColor">5′</text>
<polygon points="${poly(cx, cy, r, 5, -90)}" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
<text x="${cx}" y="${cy + 10}" font-size="13" text-anchor="middle" fill="currentColor">sugar</text>
<line x1="${c1.x}" y1="${c1.y}" x2="${ox + 178}" y2="${c1.y}" stroke="currentColor" stroke-width="2.5"/>
<rect x="${ox + 178}" y="122" width="90" height="36" rx="8" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="${ox + 223}" y="146" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">${bases}</text>
<g class="fig-muted"><text x="${ox + 223}" y="114" font-size="12" text-anchor="middle" fill="currentColor">base</text></g>
<line x1="${c2.x}" y1="${c2.y}" x2="${ox + 166}" y2="204" stroke="currentColor" stroke-width="2.5"/>
<g class="${twoPrimeRed ? 'fig-accent-2' : 'fig-muted'}"><text x="${ox + 168}" y="220" font-size="16" font-weight="700" fill="currentColor">${twoPrime}</text></g>
<line x1="${c3.x}" y1="${c3.y}" x2="${ox + 90}" y2="204" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">
<text x="${ox + 86}" y="220" font-size="16" font-weight="700" text-anchor="end" fill="currentColor">3′-OH</text>
<line x1="${ox + 84}" y1="230" x2="${ox + 84}" y2="284" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 4" marker-end="url(#arr-bf-nuc-b)"/>
<text x="${ox + 40}" y="306" font-size="13" fill="currentColor">next nucleotide adds here: 5′ → 3′</text>
</g>
<text x="${ox + 140}" y="352" font-size="14" text-anchor="middle" fill="currentColor">${foot1}</text>
<g class="${foot2Red ? 'fig-accent-2' : ''}"><text x="${ox + 140}" y="376" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">${foot2}</text></g>`
}
const nucleotideSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-accent"><defs>${ARROW('arr-bf-nuc-b')}</defs></g>
<g class="fig-muted"><line x1="280" y1="16" x2="280" y2="424" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/></g>
${nucleotide(0, 'DNA — deoxyribose', 'T · A · G · C', '2′-H', false, 'double-stranded; A=T, G≡C', 'no 2′-OH → a stable backbone', false)}
${nucleotide(280, 'RNA — ribose', 'U · A · G · C', '2′-OH', true, 'usually single-stranded; U replaces T', '2′-OH makes it prone to hydrolysis', true)}
<g class="fig-muted"><text x="280" y="420" font-size="13" text-anchor="middle" fill="currentColor">nucleotide = phosphate + sugar + base; polymerases add to the free 3′-OH</text></g>
</svg>`

/* 8 — Base-pairing ladder (2 vs 3 H-bonds) and the Tm trend (lead, 1000×460) */
const rung = (y: number, left: string, right: string, gc: boolean) => {
  const cls = gc ? 'fig-accent-2' : 'fig-accent'
  const offsets = gc ? [-10, 0, 10] : [-5, 5]
  const bonds = offsets.map((o) => `<line x1="202" y1="${y + o}" x2="298" y2="${y + o}" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5"/>`).join('')
  return `<g class="${cls}">
<rect x="146" y="${y - 15}" width="52" height="30" rx="6" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
<rect x="302" y="${y - 15}" width="52" height="30" rx="6" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
<text x="172" y="${y + 6}" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${left}</text>
<text x="328" y="${y + 6}" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${right}</text>
${bonds}</g>`
}
const pairingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bf-pair')}</defs>
<line x1="140" y1="58" x2="140" y2="404" stroke="currentColor" stroke-width="5"/>
<line x1="360" y1="58" x2="360" y2="404" stroke="currentColor" stroke-width="5"/>
<text x="140" y="44" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">5′</text>
<text x="140" y="430" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">3′</text>
<text x="360" y="44" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">3′</text>
<text x="360" y="430" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">5′</text>
${rung(92, 'A', 'T', false)}
${rung(148, 'G', 'C', true)}
${rung(204, 'T', 'A', false)}
${rung(260, 'C', 'G', true)}
${rung(316, 'G', 'C', true)}
${rung(372, 'A', 'T', false)}
<g class="fig-accent"><text x="60" y="456" font-size="15" font-weight="700" fill="currentColor">A=T: 2 H-bonds</text></g>
<g class="fig-accent-2"><text x="440" y="456" font-size="15" font-weight="700" text-anchor="end" fill="currentColor">G≡C: 3 H-bonds</text></g>
<g class="fig-muted"><text x="250" y="456" font-size="14" text-anchor="middle" fill="currentColor">antiparallel strands</text></g>
<line x1="560" y1="380" x2="968" y2="380" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bf-pair)"/>
<line x1="560" y1="380" x2="560" y2="70" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bf-pair)"/>
<text x="574" y="84" font-size="20" fill="currentColor">${rich('T', ['m'], ' (melting temperature)')}</text>
<text x="960" y="410" font-size="20" text-anchor="end" fill="currentColor">% GC</text>
<text x="770" y="56" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">More GC → more H-bonds → higher ${rich('T', ['m'])}</text>
<line x1="590" y1="336" x2="930" y2="124" stroke="currentColor" stroke-width="4"/>
<g class="fig-accent">
<circle cx="660" cy="292" r="9" fill="currentColor"/>
<text x="680" y="332" font-size="16" font-weight="700" fill="currentColor">AT-rich: melts low</text>
</g>
<g class="fig-accent-2">
<circle cx="870" cy="161" r="9" fill="currentColor"/>
<text x="850" y="150" font-size="16" font-weight="700" text-anchor="end" fill="currentColor">GC-rich: melts high</text>
</g>
<g class="fig-muted"><text x="760" y="410" font-size="14" text-anchor="middle" fill="currentColor">illustrative trend</text></g>
<text x="760" y="446" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Chargaff: A = T and G = C  —  18% G → 18% C, so A = T = 32%</text>
</svg>`

/* 9 — Metabolic integration: one acetyl-CoA pool, three switches (lead, 1000×460) */
const integrationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bf-int')}</defs>
${box(200, 80, 120, 50, 'Glucose')}
${box(200, 240, 120, 50, 'Pyruvate')}
${box(430, 240, 140, 50, 'Acetyl-CoA')}
${box(430, 400, 140, 50, 'Fatty acids')}
${box(640, 400, 150, 50, 'Malonyl-CoA')}
${box(900, 240, 130, 50, 'ATP · NADH')}
<circle cx="680" cy="240" r="50" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="3"/>
<path d="M 680 208 A 32 32 0 1 1 652 257" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bf-int)"/>
<text x="680" y="247" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">TCA</text>
<line x1="220" y1="106" x2="220" y2="212" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-int)"/>
<text x="234" y="162" font-size="17" fill="currentColor">glycolysis</text>
<line x1="180" y1="214" x2="180" y2="108" stroke="currentColor" stroke-width="3" stroke-dasharray="8 6" marker-end="url(#arr-bf-int)"/>
<text x="166" y="162" font-size="17" text-anchor="end" fill="currentColor">gluconeogenesis</text>
<line x1="262" y1="240" x2="357" y2="240" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-int)"/>
<text x="310" y="266" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">PDH</text>
<line x1="502" y1="240" x2="626" y2="240" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-int)"/>
<line x1="732" y1="240" x2="832" y2="240" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-int)"/>
<g class="fig-muted"><text x="782" y="228" font-size="14" text-anchor="middle" fill="currentColor">e⁻ → ETC</text></g>
<line x1="480" y1="266" x2="602" y2="374" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-int)"/>
<text x="562" y="312" font-size="14" fill="currentColor">ACC (insulin ↑)</text>
<line x1="563" y1="412" x2="504" y2="412" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-int)"/>
<g class="fig-muted"><text x="533" y="442" font-size="13" text-anchor="middle" fill="currentColor">fatty-acid synthesis</text></g>
<g class="fig-accent">
<defs>${ARROW('arr-bf-int-b')}</defs>
<line x1="445" y1="373" x2="445" y2="268" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-int-b)"/>
<text x="458" y="325" font-size="16" font-weight="700" fill="currentColor">β-oxidation</text>
<path d="M375 266 L375 300 L180 300 L180 270" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bf-int-b)"/>
<text x="292" y="320" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">activates pyruvate carboxylase</text>
</g>
<g class="fig-accent-2">
<defs>${BAR('bar-bf-int-r')}</defs>
<path d="M400 214 L400 186 L300 186 L300 227" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#bar-bf-int-r)"/>
<text x="410" y="200" font-size="14" font-weight="700" fill="currentColor">acetyl-CoA ⊣ PDH</text>
<path d="M564 388 L530 388 L530 345 L457 345" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#bar-bf-int-r)"/>
<text x="500" y="366" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">⊣ CPT-I</text>
<path d="M900 214 L900 120 L236 120" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#bar-bf-int-r)"/>
<line x1="680" y1="120" x2="680" y2="184" stroke="currentColor" stroke-width="3" marker-end="url(#bar-bf-int-r)"/>
<text x="246" y="112" font-size="14" font-weight="700" fill="currentColor">⊣ PFK-1</text>
<text x="600" y="110" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">energy-rich (high ATP, NADH) → brake</text>
</g>
</svg>`

export const mcatBiochemFoundationsFigures: DeckFigurePlacement[] = [
  {
    at: 'Isoelectric Point (pI) Logic',
    mode: 'lead',
    figure: {
      svg: piSvg,
      alt:
        'Top: a pH axis with the isoelectric point marked in the middle. Left of pI (pH below pI) is shaded blue and labelled net positive — extra protons held as NH3+; right of pI (pH above pI) is shaded red and labelled net negative — protons lost as COO−; at pI the net charge is zero. Bottom: an electrophoresis gel at pH 7 with a cathode (−) on the left and an anode (+) on the right and three wells in the middle. A protein with pI 8.5 (pH below its pI, net positive) has run left toward the cathode; a protein with pI 7.0 (equal to the pH, net zero) stays in the well; a protein with pI 5.5 (pH above its pI, net negative) has run right toward the anode.',
      caption: 'The pI rule and its one-line exam use: below its pI a protein is positive and runs to the cathode; above its pI it is negative and runs to the anode.',
    },
    blocks: [
      '- pH < pI → net **+** (amines hold their protons); pH > pI → net **−** (acids have lost theirs)',
      '- Electrophoresis: a protein with pI 5.5 at pH 7 is negative and migrates to the (+) anode',
    ],
  },
  {
    at: 'Michaelis-Menten Equation',
    mode: 'after',
    figure: {
      svg: vmaxSvg,
      alt:
        'Rate v against substrate concentration with two saturating curves. The blue curve for enzyme amount [E] flattens toward a dashed line labelled Vmax with [E]; the red curve for twice the enzyme flattens toward a dashed line twice as high, labelled Vmax with 2 × [E]. A single dotted vertical line at Km passes through both half-maximal points, marked by dots, so Km is the same for both. Title: Vmax = kcat · [E]T; twice the enzyme gives twice Vmax and Km does not move. Note: both dots sit at half of their own Vmax — low Km means high affinity whatever the amount of enzyme.',
      caption: 'Vmax = kcat[E]T scales with how much enzyme is present; Km, the affinity, is a property of the enzyme and stays put (illustrative).',
    },
    blocks: [
      '- $V_{max} = k_{cat}[E]_T$: more enzyme raises the ceiling; $K_m$ (half-ceiling [S]) is unchanged',
    ],
  },
  {
    at: 'Glycolysis (Cytoplasm',
    mode: 'lead',
    figure: {
      svg: compartmentSvg,
      alt:
        'A cell drawn as a large rounded rectangle labelled cytosol, containing a mitochondrion drawn as two nested rounded rectangles (outer and inner membrane) with the matrix inside. In the cytosol: Glucose goes down by glycolysis (10 steps, +2 ATP, +2 NADH, no O2 needed) to 2 Pyruvate; without O2, pyruvate goes on to lactate (muscle) or ethanol + CO2 (yeast), which regenerates NAD+. Pyruvate crosses into the matrix through PDH (−CO2, +NADH) to Acetyl-CoA. Fatty acids in the cytosol enter the matrix via the carnitine shuttle (CPT-I) and β-oxidation also yields Acetyl-CoA. Acetyl-CoA feeds the TCA cycle, drawn as a circle: 3 NADH, 1 FADH2, 1 GTP per acetyl-CoA. A blue arrow carries NADH and FADH2 to the inner membrane, highlighted as a blue band: the ETC (Complexes I–IV) and ATP synthase; electrons fall to O2 making H2O, and the H+ gradient yields about 30–32 ATP per glucose.',
      caption: 'Where each stage lives: glycolysis and fermentation in the cytosol; PDH, β-oxidation and the TCA cycle in the matrix; the ETC and ATP synthase in the inner membrane.',
    },
    blocks: [
      '- Cytosol: glycolysis (glucose → 2 pyruvate, +2 ATP, +2 NADH); without O₂, lactate/ethanol regenerate NAD⁺',
      '- Matrix: PDH, β-oxidation, TCA make acetyl-CoA + NADH/FADH₂; the inner membrane cashes them for ~30–32 ATP',
    ],
  },
  {
    at: 'Electron Transport Chain',
    mode: 'lead',
    figure: {
      svg: etcSvg,
      alt:
        'The inner mitochondrial membrane drawn as a horizontal band with the intermembrane space (high H+) above and the matrix (low H+) below. Complexes I, III and IV span the membrane; Complex II sits on the matrix side; a Q carrier sits between I/II and III and cytochrome c between III and IV; ATP synthase sits at the right. NADH feeds 2 electrons into Complex I, FADH2 (from succinate) into Complex II; electrons pass I → Q → III → c → IV and finally to ½ O2 + 2 H+ → H2O, the final electron acceptor. Red upward arrows show the protons pumped: 4 H+ at I, none at II, 4 H+ at III, 2 H+ at IV. A blue downward arrow shows H+ flowing back through ATP synthase to make ATP from ADP + Pi. Headline: NADH entering at Complex I has 4 + 4 + 2 = 10 H+ pumped, about 2.5 ATP; FADH2 entering at Complex II has 0 + 4 + 2 = 6 H+ pumped, about 1.5 ATP.',
      caption: 'Count the pumps: electrons from NADH pass all three pumping complexes (10 H⁺), electrons from FADH₂ skip Complex I (6 H⁺) — the 2.5 : 1.5 ATP ratio.',
    },
    blocks: [
      '- I, III and IV pump H⁺ (4 + 4 + 2); II does not — so NADH ≈ 2.5 ATP and FADH₂ ≈ 1.5 ATP',
      '- O₂ is the final electron acceptor at IV; the H⁺ gradient (proton-motive force) drives ATP synthase',
    ],
  },
  {
    at: 'Lipid Classification',
    mode: 'replace-table',
    figure: {
      svg: lipidsSvg,
      alt:
        'Four schematic panels. Triglyceride: a glycerol bar with three wavy fatty-acid tails — energy storage. Phospholipid: a round phosphate head on a short glycerol with two wavy nonpolar tails — membranes (bilayer). Steroid: four fused rings labelled A, B, C and D, mostly nonpolar — cholesterol, testosterone, estrogen; membranes and hormones. Sphingolipid: a head group on a sphingosine backbone (not glycerol) with its own tail plus one fatty acid — myelin and cell signaling.',
      caption: 'The four lipid classes by what the tails hang on: glycerol (three tails or two plus a phosphate head), a fused-ring core, or a sphingosine backbone.',
    },
    blocks: [
      '- **Triglycerides:** glycerol + 3 fatty acids — energy storage',
      '- **Phospholipids:** glycerol + 2 fatty acids + phosphate head — membranes',
      '- **Steroids:** 4 fused rings — cholesterol, testosterone, estrogen',
      '- **Sphingolipids:** sphingosine backbone — myelin, signaling',
    ],
  },
  {
    at: '$\\beta$-Oxidation',
    mode: 'lead',
    figure: {
      svg: betaOxSvg,
      alt:
        'Palmitate (C16) drawn as a row of eight two-carbon blocks with seven numbered red cuts between them; a blue arrow drops from each block to an acetyl-CoA box, eight in all. Ledger: 8 acetyl-CoA × 10 ATP via TCA = 80 (blue); 7 NADH × 2.5 = 17.5 and 7 FADH2 × 1.5 = 10.5 (red); minus 2 ATP to activate the fatty acid; total about 106 ATP per palmitate. Notes: each cut is one cycle (−2 C, +1 NADH, +1 FADH2, +1 acetyl-CoA); cycles = acetyl-CoA − 1; long chains need the carnitine shuttle (CPT-I), which malonyl-CoA blocks in the fed state; compared with ~30–32 ATP per glucose, fats are more reduced and give more ATP per carbon.',
      caption: 'β-oxidation as arithmetic: 8 two-carbon units need 7 cuts, each cut pays a NADH and a FADH₂, and the acetyl-CoA goes to the TCA cycle — ≈ 106 ATP.',
    },
    blocks: [
      '- C16 → 8 acetyl-CoA in 7 cycles; each cycle gives 1 NADH + 1 FADH₂: 8(10) + 7(2.5) + 7(1.5) − 2 = 106 ATP',
      '- Entry needs the carnitine shuttle (CPT-I); malonyl-CoA blocks it when the cell is building fat',
    ],
  },
  {
    at: 'DNA vs RNA',
    mode: 'replace-table',
    figure: {
      svg: nucleotideSvg,
      alt:
        'Two schematic nucleotides side by side. Each has a phosphate circle (P) at the top left, linked from the previous 3′ end, a 5′ bond to a pentagon sugar, a base box to the right, a 2′ group at the lower right and a 3′-OH at the lower left with a blue dashed arrow pointing down labelled next nucleotide adds here, 5′ to 3′. DNA (deoxyribose): bases T, A, G, C; 2′-H; double-stranded with A=T and G≡C; stable because there is no 2′-OH to attack the backbone. RNA (ribose): bases U, A, G, C; a red 2′-OH; usually single-stranded with U replacing T; the 2′-OH makes it prone to hydrolysis. Footer: nucleotide = phosphate + sugar + base; polymerases add to the free 3′-OH.',
      caption: 'Same nucleotide plan, one atom apart: RNA’s 2′-OH makes it reactive and short-lived; both chains grow only at the free 3′-OH.',
    },
    blocks: [
      '- **Sugar:** deoxyribose (2′-H) vs ribose (2′-OH — hydrolysis-prone, so RNA is less stable)',
      '- **Bases:** A T G C vs A U G C; DNA double-stranded, RNA usually single',
      '- Polymerases add nucleotides to the free 3′-OH: synthesis runs 5′ → 3′',
    ],
  },
  {
    at: 'Base Pairing',
    mode: 'lead',
    figure: {
      svg: pairingSvg,
      alt:
        'Left: a ladder of two antiparallel backbones (5′ to 3′ on the left, 3′ to 5′ on the right) with six base pairs. A–T pairs are blue and joined by two dashed hydrogen bonds; G–C pairs are red and joined by three. Right: a graph of melting temperature Tm against percent GC with a rising line (illustrative trend); a blue dot low on the line is labelled AT-rich melts low, a red dot high on the line GC-rich melts high. Below: Chargaff — A = T and G = C; with 18% G, C is 18%, so A and T are 32% each.',
      caption: 'Two bonds for A=T, three for G≡C: the more GC a duplex has, the more heat it takes to melt (illustrative); Chargaff’s equalities let you fill in all four bases from one.',
    },
    blocks: [
      '- A=T: 2 hydrogen bonds; G≡C: 3 — higher GC content → higher $T_m$',
      '- Chargaff: A = T and G = C in dsDNA, so 18% G means 18% C and 32% each of A and T',
    ],
  },
  {
    at: 'Metabolic Integration',
    mode: 'lead',
    figure: {
      svg: integrationSvg,
      alt:
        'A pathway map. Glucose goes down to Pyruvate by glycolysis (solid arrow) and back up by gluconeogenesis (dashed). Pyruvate → Acetyl-CoA via PDH; Acetyl-CoA → TCA cycle (circle) → ATP and NADH. Below, Fatty acids rise to Acetyl-CoA by β-oxidation (blue arrow), and Acetyl-CoA goes down through ACC (insulin up) to Malonyl-CoA and on to fatty-acid synthesis. Three switches: a red bar from Acetyl-CoA inhibits PDH while a blue arrow from Acetyl-CoA activates pyruvate carboxylase (gluconeogenesis); a red bar from Malonyl-CoA blocks CPT-I on the β-oxidation arrow; a red bar from ATP/NADH (energy-rich) brakes both PFK-1 in glycolysis and the TCA cycle.',
      caption: 'One acetyl-CoA pool, three switches: acetyl-CoA turns PDH off and pyruvate carboxylase on, malonyl-CoA locks CPT-I, and high ATP/NADH brakes glycolysis and the TCA cycle.',
    },
    blocks: [
      '- Acetyl-CoA ⊣ PDH and → pyruvate carboxylase: when fat is burning, pyruvate is saved for glucose',
      '- Malonyl-CoA ⊣ CPT-I: never build and burn fat at once; high ATP/NADH ⊣ PFK-1 and TCA',
    ],
  },
]
