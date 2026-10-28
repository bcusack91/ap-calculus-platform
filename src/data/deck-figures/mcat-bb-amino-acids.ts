import type { DeckFigurePlacement } from './index'

/**
 * Amino Acids & Proteins (MCAT B/B) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept (a labelled-box amino
 * acid, a classification grid, a pKa ladder, charge strips, a titration
 * curve from the Henderson–Hasselbalch relation, a condensation scheme, the
 * four structural levels, helix vs sheet, four separation schematics) — no
 * textbook or prep-company figure was copied. Molecules are labelled boxes
 * and circles, never skeletal formulas. The titration curve is computed from
 * the two standard pKa values the lesson quotes and captioned illustrative.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-aa-<figure>[-<colour>]).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

const f1 = (n: number) => (Math.round(n * 10) / 10).toString()

/** Side-on view of a coil: a sine in x with a shallow cos tilt in y so the turns read as loops. */
const helixPath = (cx: number, y0: number, r: number, pitch: number, turns: number) => {
  const pts: string[] = []
  const end = turns * 2 * Math.PI
  for (let t = 0; t <= end + 1e-9; t += 0.18) {
    pts.push(`${f1(cx + r * Math.sin(t))},${f1(y0 + (pitch * t) / (2 * Math.PI) + 0.35 * r * Math.cos(t))}`)
  }
  return `M${pts.join(' L')}`
}

/* 1 — Anatomy of an amino acid as labelled boxes (lead, 1000×460) */
const anatomySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<line x1="500" y1="94" x2="500" y2="166" stroke="currentColor" stroke-width="3"/>
<line x1="350" y1="210" x2="456" y2="210" stroke="currentColor" stroke-width="3"/>
<line x1="544" y1="210" x2="650" y2="210" stroke="currentColor" stroke-width="3"/>
<line x1="500" y1="254" x2="500" y2="300" stroke="currentColor" stroke-width="3"/>
<circle cx="500" cy="210" r="44" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="500" y="220" font-size="30" font-weight="700" text-anchor="middle" fill="currentColor">Cα</text>
<rect x="455" y="40" width="90" height="54" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="500" y="75" font-size="26" font-weight="700" text-anchor="middle" fill="currentColor">H</text>
<g class="fig-accent">
<rect x="120" y="178" width="230" height="64" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="235" y="203" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Amino group</text>
<text x="235" y="231" font-size="22" text-anchor="middle" fill="currentColor">–NH₃⁺  (+1 at pH 7)</text>
</g>
<g class="fig-accent-2">
<rect x="650" y="178" width="230" height="64" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="765" y="203" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Carboxyl group</text>
<text x="765" y="231" font-size="22" text-anchor="middle" fill="currentColor">–COO⁻  (−1 at pH 7)</text>
</g>
<rect x="380" y="300" width="240" height="64" rx="10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6"/>
<text x="500" y="326" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">R group (side chain)</text>
<text x="500" y="352" font-size="19" text-anchor="middle" fill="currentColor">the only part that differs</text>
<text x="500" y="404" font-size="22" text-anchor="middle" fill="currentColor">At pH 7 the backbone is a <tspan font-weight="700">zwitterion</tspan>: (+1) + (−1) = net 0</text>
<g class="fig-muted">
<text x="500" y="444" font-size="20" text-anchor="middle" fill="currentColor">All 20 are L / (S) — except Gly (achiral: two H) and Cys ((R): sulfur outranks)</text>
</g>
</svg>`

/* 2 — Classification grid of the 20 amino acids (replace-table, 560×440) */
type Tile = [string, string]
const tileRow = (y: number, label: string, tiles: Tile[], cls: string, badge?: string) => {
  const body = tiles
    .map(([one, three], i) => {
      const x = 10 + i * 78
      const dash = three === 'His' ? ' stroke-dasharray="6 4"' : ''
      return `<rect x="${x}" y="${y + 20}" width="72" height="52" rx="8" fill="currentColor" fill-opacity="${cls ? '0.12' : '0.05'}" stroke="currentColor" stroke-width="2"${dash}/>
<text x="${x + 36}" y="${y + 45}" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">${one}</text>
<text x="${x + 36}" y="${y + 65}" font-size="13" text-anchor="middle" fill="currentColor">${three}${badge && three !== 'His' ? ` ${badge}` : ''}</text>`
    })
    .join('\n')
  const open = cls ? `<g class="${cls}">` : '<g>'
  return `<text x="10" y="${y + 13}" font-size="15" font-weight="700" fill="currentColor">${label}</text>
${open}
${body}
</g>`
}

const classificationSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${tileRow(2, 'Nonpolar, aliphatic — hydrophobic, buried inside', [['G', 'Gly'], ['A', 'Ala'], ['V', 'Val'], ['L', 'Leu'], ['I', 'Ile'], ['P', 'Pro'], ['M', 'Met']], '')}
${tileRow(88, 'Aromatic — absorb UV at 280 nm (Trp, Tyr)', [['F', 'Phe'], ['W', 'Trp'], ['Y', 'Tyr']], '')}
${tileRow(174, 'Polar, uncharged — H-bond donors / acceptors', [['S', 'Ser'], ['T', 'Thr'], ['C', 'Cys'], ['N', 'Asn'], ['Q', 'Gln']], '')}
${tileRow(260, 'Acidic — carboxylate, pKa ~4: negative at pH 7', [['D', 'Asp'], ['E', 'Glu']], 'fig-accent-2', '(−)')}
${tileRow(346, 'Basic — Lys, Arg positive at pH 7; His (pKa ≈ 6) mostly neutral', [['K', 'Lys'], ['R', 'Arg'], ['H', 'His']], 'fig-accent', '(+)')}
</svg>`

/* 3 — pKa ladder with the pH 7 line (replace-table, 560×440) */
const yP = (p: number) => 405 - 26.07 * p
type Rung = [number, string, 'right' | 'left', 'pos' | 'neg' | 'neutral']
const rungs: Rung[] = [
  [2, 'α-COOH (~2): –COO⁻', 'right', 'neg'],
  [4, 'Asp / Glu (~4): –COO⁻ (−)', 'right', 'neg'],
  [6, 'His (~6): mostly neutral', 'left', 'neutral'],
  [8, 'Cys thiol (~8): –SH, neutral', 'right', 'neutral'],
  [9.5, 'α-NH₃⁺ (~9–10): (+)', 'left', 'pos'],
  [10, 'Tyr phenol (~10): –OH, neutral', 'right', 'neutral'],
  [10.5, 'Lys (~10.5): –NH₃⁺ (+)', 'left', 'pos'],
  [12.5, 'Arg guanidinium (~12.5): (+)', 'right', 'pos'],
]
const rungSvg = ([p, label, side, charge]: Rung) => {
  const y = yP(p)
  const tx = side === 'right' ? 268 : 232
  const anchor = side === 'right' ? 'start' : 'end'
  const tick = side === 'right' ? `<line x1="257" y1="${f1(y)}" x2="264" y2="${f1(y)}" stroke="currentColor" stroke-width="2"/>` : `<line x1="236" y1="${f1(y)}" x2="243" y2="${f1(y)}" stroke="currentColor" stroke-width="2"/>`
  const dot =
    charge === 'neutral'
      ? `<circle class="fig-bg" cx="250" cy="${f1(y)}" r="6" stroke="currentColor" stroke-width="2.5"/>`
      : `<circle cx="250" cy="${f1(y)}" r="6" fill="currentColor"/>`
  const text = `<text x="${tx}" y="${f1(y + 6)}" font-size="16" text-anchor="${anchor}" fill="currentColor">${label}</text>`
  const cls = charge === 'pos' ? 'fig-accent' : charge === 'neg' ? 'fig-accent-2' : ''
  return cls ? `<g class="${cls}">${dot}${tick}${text}</g>` : `<g>${dot}${tick}${text}</g>`
}

const pkaLadderSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-aa-pka')}</defs>
<line x1="250" y1="405" x2="250" y2="40" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-aa-pka)"/>
<text x="250" y="26" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">pKa</text>
<g class="fig-muted">
<text x="250" y="428" font-size="13" text-anchor="middle" fill="currentColor">0</text>
<line x1="30" y1="${f1(yP(7))}" x2="545" y2="${f1(yP(7))}" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6"/>
<text x="32" y="${f1(yP(7) - 7)}" font-size="15" font-weight="700" fill="currentColor">pH 7</text>
<text x="545" y="${f1(yP(7) - 8)}" font-size="13" text-anchor="end" fill="currentColor">pKa above 7 → still protonated at pH 7</text>
<text x="545" y="${f1(yP(7) + 18)}" font-size="13" text-anchor="end" fill="currentColor">pKa below 7 → deprotonated at pH 7</text>
</g>
${rungs.map(rungSvg).join('\n')}
</svg>`

/* 4 — Net charge vs pH for a neutral, an acidic and a basic amino acid (lead, 1000×460) */
const xPH = (p: number) => 150 + p * 57
type Strip = { name: string; sub: string; top: number; pkas: number[]; charges: number[]; pI: number }
const strips: Strip[] = [
  { name: 'Ala', sub: 'neutral R', top: 70, pkas: [2.3, 9.6], charges: [1, 0, -1], pI: 6 },
  { name: 'Asp', sub: 'acidic R', top: 200, pkas: [2.1, 3.9, 9.8], charges: [1, 0, -1, -2], pI: 3 },
  { name: 'Lys', sub: 'basic R', top: 330, pkas: [2.2, 9.0, 10.5], charges: [2, 1, 0, -1], pI: 9.7 },
]
const chargeLabel = (c: number) => (c > 0 ? `+${c}` : c < 0 ? `−${-c}` : '0')
const stripSvg = (s: Strip) => {
  const bounds = [0, ...s.pkas, 14]
  const segs = s.charges
    .map((c, i) => {
      const x0 = xPH(bounds[i])
      const x1 = xPH(bounds[i + 1])
      const cls = c > 0 ? 'fig-accent' : c < 0 ? 'fig-accent-2' : ''
      const fill = c === 0 ? 'none' : 'currentColor'
      const op = Math.abs(c) === 2 ? '0.34' : '0.16'
      const inner = `<rect x="${f1(x0)}" y="${s.top}" width="${f1(x1 - x0)}" height="48" fill="${fill}" fill-opacity="${op}" stroke="currentColor" stroke-width="2"/>
<text x="${f1((x0 + x1) / 2)}" y="${s.top + 32}" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">${chargeLabel(c)}</text>`
      return cls ? `<g class="${cls}">${inner}</g>` : inner
    })
    .join('\n')
  const pkaLabels = s.pkas
    .map((p) => `<text x="${f1(xPH(p))}" y="${s.top - 8}" font-size="17" text-anchor="middle" fill="currentColor">pKa ${p}</text>`)
    .join('\n')
  const px = xPH(s.pI)
  return `<text x="20" y="${s.top + 24}" font-size="24" font-weight="700" fill="currentColor">${s.name}</text>
<text x="20" y="${s.top + 46}" font-size="18" fill="currentColor">(${s.sub})</text>
${segs}
${pkaLabels}
<g class="fig-accent">
<path d="M${f1(px - 8)},${s.top + 58} L${f1(px + 8)},${s.top + 58} L${f1(px)},${s.top + 49} z" fill="currentColor"/>
<text x="${f1(px)}" y="${s.top + 77}" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">pI ≈ ${s.pI}</text>
</g>`
}

const piStripsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-aa-pi')}</defs>
${strips.map(stripSvg).join('\n')}
<line x1="150" y1="420" x2="975" y2="420" stroke="currentColor" stroke-width="2" marker-end="url(#arr-aa-pi)"/>
${[0, 2, 4, 6, 8, 10, 12, 14]
  .map((p) => `<line x1="${f1(xPH(p))}" y1="416" x2="${f1(xPH(p))}" y2="424" stroke="currentColor" stroke-width="2"/><text x="${f1(xPH(p))}" y="446" font-size="18" text-anchor="middle" fill="currentColor">${p}</text>`)
  .join('\n')}
<text x="80" y="446" font-size="18" font-weight="700" fill="currentColor">pH</text>
</svg>`

/* 5 — Titration curve of a neutral amino acid, computed from pKa 2.3 / 9.6 (after, 1000×460) */
const xEq = (eq: number) => 100 + eq * 420
const yPH = (ph: number) => 400 - 25.7 * ph
const titrationPoints = (() => {
  const pts: string[] = []
  for (let ph = 0.8; ph <= 13.0001; ph += 0.05) {
    const eq = 1 / (1 + 10 ** (2.3 - ph)) + 1 / (1 + 10 ** (9.6 - ph))
    pts.push(`${f1(xEq(eq))},${f1(yPH(ph))}`)
  }
  return `M${pts.join(' L')}`
})()

const titrationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-aa-titr')}</defs>
<line x1="100" y1="400" x2="975" y2="400" stroke="currentColor" stroke-width="2" marker-end="url(#arr-aa-titr)"/>
<line x1="100" y1="400" x2="100" y2="40" stroke="currentColor" stroke-width="2" marker-end="url(#arr-aa-titr)"/>
<text x="100" y="24" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">pH</text>
<text x="540" y="452" font-size="20" text-anchor="middle" fill="currentColor">equivalents of OH⁻ added</text>
${[0, 0.5, 1, 1.5, 2]
  .map((e) => `<line x1="${f1(xEq(e))}" y1="396" x2="${f1(xEq(e))}" y2="404" stroke="currentColor" stroke-width="2"/><text x="${f1(xEq(e))}" y="426" font-size="18" text-anchor="middle" fill="currentColor">${e.toFixed(1)}</text>`)
  .join('\n')}
${[2, 4, 6, 8, 10, 12, 14]
  .map((p) => `<line x1="96" y1="${f1(yPH(p))}" x2="104" y2="${f1(yPH(p))}" stroke="currentColor" stroke-width="2"/><text x="86" y="${f1(yPH(p) + 6)}" font-size="16" text-anchor="end" fill="currentColor">${p}</text>`)
  .join('\n')}
<g class="fig-muted">
<line x1="100" y1="${f1(yPH(2.3))}" x2="${f1(xEq(0.85))}" y2="${f1(yPH(2.3))}" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6"/>
<line x1="${f1(xEq(1.15))}" y1="${f1(yPH(9.6))}" x2="945" y2="${f1(yPH(9.6))}" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6"/>
<line x1="${f1(xEq(1))}" y1="400" x2="${f1(xEq(1))}" y2="${f1(yPH(6) + 10)}" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6"/>
</g>
<text x="115" y="${f1(yPH(2.3) - 12)}" font-size="18" fill="currentColor">pKa₁ ≈ 2.3 — buffering plateau</text>
<text x="${f1(xEq(1.45))}" y="${f1(yPH(9.6) - 14)}" font-size="18" text-anchor="end" fill="currentColor">buffering plateau — pKa₂ ≈ 9.6</text>
<g class="fig-accent">
<path d="${titrationPoints}" fill="none" stroke="currentColor" stroke-width="3.5"/>
</g>
<g class="fig-accent-2">
<circle cx="${f1(xEq(1))}" cy="${f1(yPH(6))}" r="7" fill="currentColor"/>
<text x="${f1(xEq(1) + 22)}" y="${f1(yPH(6) + 8)}" font-size="20" font-weight="700" fill="currentColor">pI ≈ 6 — steep, NOT a plateau</text>
</g>
<text x="${f1(xEq(0.33))}" y="386" font-size="18" text-anchor="middle" fill="currentColor">net +1</text>
<text x="${f1(xEq(1) + 22)}" y="300" font-size="18" fill="currentColor">net 0 (zwitterion)</text>
<text x="${f1(xEq(1.78))}" y="104" font-size="18" text-anchor="middle" fill="currentColor">net −1</text>
</svg>`

/* 6 — Peptide-bond formation by condensation (lead, 1000×460) */
const aaBox = (x: number, y: number, w: number, label: string) =>
  `<rect x="${x}" y="${y - 25}" width="${w}" height="50" rx="9" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="${x + w / 2}" y="${y + 8}" font-size="22" text-anchor="middle" fill="currentColor">${label}</text>`
const alpha = (cx: number, cy: number, r: string) =>
  `<circle cx="${cx}" cy="${cy}" r="30" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="${cx}" y="${cy + 8}" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Cα</text>
<line x1="${cx}" y1="${cy + 30}" x2="${cx}" y2="${cy + 52}" stroke="currentColor" stroke-width="2.5"/>
<rect x="${cx - 32}" y="${cy + 52}" width="64" height="38" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><text x="${cx}" y="${cy + 78}" font-size="20" text-anchor="middle" fill="currentColor">${r}</text>`
const bond = (x1: number, x2: number, y: number) => `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="currentColor" stroke-width="2.5"/>`

const peptideSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-aa-pep')}</defs>
${aaBox(80, 95, 100, 'H₃N⁺')}${bond(180, 210, 95)}${alpha(240, 95, 'R₁')}${bond(270, 300, 95)}
<rect x="300" y="70" width="120" height="50" rx="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="360" y="103" font-size="22" text-anchor="middle" fill="currentColor">C(=O)–<tspan class="fig-accent-2" font-weight="700">OH</tspan></text>
<text x="455" y="104" font-size="30" text-anchor="middle" fill="currentColor">+</text>
<rect x="490" y="70" width="110" height="50" rx="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="545" y="103" font-size="22" text-anchor="middle" fill="currentColor"><tspan class="fig-accent-2" font-weight="700">H</tspan>–NH</text>
${bond(600, 630, 95)}${alpha(660, 95, 'R₂')}${bond(690, 720, 95)}${aaBox(720, 95, 100, 'COO⁻')}
<line x1="450" y1="190" x2="450" y2="270" stroke="currentColor" stroke-width="3" marker-end="url(#arr-aa-pep)"/>
<text x="432" y="222" font-size="20" font-weight="700" text-anchor="end" fill="currentColor">condensation</text>
<text x="432" y="246" font-size="18" text-anchor="end" fill="currentColor">(dehydration)</text>
<g class="fig-accent-2">
<defs>${ARROW('arr-aa-pep-r')}</defs>
<line x1="468" y1="228" x2="520" y2="228" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-aa-pep-r)"/>
<circle cx="556" cy="228" r="28" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="556" y="235" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">H₂O</text>
</g>
<g class="fig-muted">
<text x="110" y="292" font-size="17" text-anchor="middle" fill="currentColor">N-terminus</text>
<text x="610" y="292" font-size="17" text-anchor="middle" fill="currentColor">C-terminus</text>
<text x="250" y="320" font-size="18" font-style="italic" text-anchor="middle" fill="currentColor">ψ</text>
<text x="472" y="320" font-size="18" font-style="italic" text-anchor="middle" fill="currentColor">φ</text>
</g>
${aaBox(60, 335, 100, 'H₃N⁺')}${bond(160, 190, 335)}${alpha(220, 335, 'R₁')}${bond(250, 280, 335)}
<g class="fig-accent">
<rect x="270" y="300" width="190" height="72" rx="12" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6"/>
<rect x="280" y="310" width="80" height="50" rx="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="320" y="343" font-size="22" text-anchor="middle" fill="currentColor">C=O</text>
<rect x="370" y="310" width="80" height="50" rx="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="410" y="343" font-size="22" text-anchor="middle" fill="currentColor">N–H</text>
<text x="700" y="318" font-size="21" font-weight="700" fill="currentColor">peptide bond (C–N)</text>
<text x="700" y="346" font-size="20" fill="currentColor">planar, rigid — partial double bond</text>
<text x="700" y="374" font-size="20" fill="currentColor">trans (cis only before Pro)</text>
<text x="700" y="402" font-size="20" fill="currentColor">rotation only at φ and ψ</text>
</g>
${bond(460, 490, 335)}${alpha(520, 335, 'R₂')}${bond(550, 580, 335)}${aaBox(580, 335, 100, 'COO⁻')}
</svg>`

/* 7 — Four levels of protein structure (replace-table, 560×440) */
const levelCol = (i: number, head: string, drawing: string, lines: string[]) => {
  const x0 = 10 + i * 137
  const cx = x0 + 67
  return `<g class="fig-muted"><rect x="${x0}" y="6" width="135" height="428" rx="12" fill="none" stroke="currentColor" stroke-width="1.5"/></g>
<text x="${cx}" y="34" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${head}</text>
${drawing}
${lines.map((l, k) => `<text x="${cx}" y="${322 + k * 22}" font-size="${k === 0 ? 14 : 13}"${k === 0 ? ' font-weight="700"' : ''} text-anchor="middle" fill="currentColor">${l}</text>`).join('\n')}`
}
const beads = (() => {
  const cx = 77
  const letters = ['M', 'K', 'V', 'L', 'D', 'S', 'F', 'G']
  const pts = letters.map((_, k) => [cx + (k % 2 === 0 ? -14 : 14), 84 + k * 26] as const)
  const line = `<path d="M${pts.map(([x, y]) => `${x},${y}`).join(' L')}" fill="none" stroke="currentColor" stroke-width="2.5"/>`
  const circles = pts
    .map(([x, y], k) => `<circle class="fig-bg" cx="${x}" cy="${y}" r="11" stroke="currentColor" stroke-width="2"/><text x="${x}" y="${y + 4}" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">${letters[k]}</text>`)
    .join('')
  return `${line}${circles}<text x="${cx - 14}" y="66" font-size="13" text-anchor="middle" fill="currentColor">N</text><text x="${cx + 14}" y="294" font-size="13" text-anchor="middle" fill="currentColor">C</text>`
})()
const secondaryMini = (() => {
  const cx = 214
  return `<g class="fig-accent"><path d="${helixPath(cx, 72, 24, 15, 6)}" fill="none" stroke="currentColor" stroke-width="2.5"/></g>
<text x="${cx}" y="192" font-size="14" text-anchor="middle" fill="currentColor">α-helix</text>
<g class="fig-accent"><defs>${ARROW('arr-aa-lvl-b')}</defs>
<line x1="${cx - 45}" y1="218" x2="${cx + 40}" y2="218" stroke="currentColor" stroke-width="5" marker-end="url(#arr-aa-lvl-b)"/>
<line x1="${cx + 45}" y1="250" x2="${cx - 40}" y2="250" stroke="currentColor" stroke-width="5" marker-end="url(#arr-aa-lvl-b)"/></g>
<g class="fig-muted">${[-30, -10, 10, 30].map((d) => `<line x1="${cx + d}" y1="222" x2="${cx + d}" y2="246" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/>`).join('')}</g>
<text x="${cx}" y="282" font-size="14" text-anchor="middle" fill="currentColor">β-sheet</text>`
})()
const tertiaryMini = (() => {
  const cx = 351
  const c = (dx: number, dy: number) => `${cx + dx},${170 + dy}`
  return `<g class="fig-accent"><path d="M${c(-58, 0)} C${c(-58, -50)} ${c(-20, -72)} ${c(12, -60)} C${c(48, -48)} ${c(64, -14)} ${c(54, 26)} C${c(44, 64)} ${c(-6, 80)} ${c(-38, 58)} C${c(-66, 40)} ${c(-60, 20)} ${c(-58, 0)} Z" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/></g>
<path d="M${c(-40, 10)} C${c(-30, -40)} ${c(0, -50)} ${c(10, -20)} C${c(20, 10)} ${c(-20, 20)} ${c(-10, 45)} C${c(0, 62)} ${c(40, 50)} ${c(38, 10)} C${c(36, -20)} ${c(20, -30)} ${c(30, -40)}" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted"><text x="${cx + 22}" y="212" font-size="11" text-anchor="middle" fill="currentColor">S–S</text></g>`
})()
const quaternaryMini = (() => {
  const cx = 488
  const sub = (dx: number, dy: number, label: string, cls: string) =>
    `<g class="${cls}"><ellipse cx="${cx + dx}" cy="${170 + dy}" rx="27" ry="25" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/><text x="${cx + dx}" y="${175 + dy}" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">${label}</text></g>`
  return `${sub(-26, -24, 'α', 'fig-accent')}${sub(26, -24, 'β', 'fig-accent-2')}${sub(-26, 26, 'β', 'fig-accent-2')}${sub(26, 26, 'α', 'fig-accent')}`
})()

const levelsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${levelCol(0, '1° Primary', beads, ['Peptide bonds', '(covalent)', 'linear sequence,', 'written N → C'])}
${levelCol(1, '2° Secondary', secondaryMini, ['Backbone H-bonds', 'only', 'α-helix i → i+4,', 'β-sheets, turns'])}
${levelCol(2, '3° Tertiary', tertiaryMini, ['Side-chain forces', 'hydrophobic, ionic,', 'H-bonds, S–S, vdW', '3D fold of ONE chain'])}
${levelCol(3, '4° Quaternary', quaternaryMini, ['Several chains', 'same noncovalent', 'forces + S–S', 'e.g. Hb α₂β₂'])}
</svg>`

/* 8 — α-helix vs β-sheet (lead, 1000×460) */
const helixSvg = (() => {
  const cx = 170
  const y0 = 70
  const r = 55
  const pitch = 45
  const front = (k: number) => y0 + pitch * (k + 0.25) // sin t = 1 at t = 2πk + π/2
  const back = (k: number) => y0 + pitch * (k + 0.75) + 0.35 * r * Math.cos(2 * Math.PI * (k + 0.75)) // sin t = −1
  const sideR = [0, 1, 4, 5, 6].map((k) => `<line x1="${cx + r}" y1="${f1(front(k))}" x2="${cx + r + 26}" y2="${f1(front(k))}" stroke="currentColor" stroke-width="2"/><circle cx="${cx + r + 33}" cy="${f1(front(k))}" r="7" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>`).join('')
  const sideL = [0, 2, 4, 6].map((k) => `<line x1="${cx - r}" y1="${f1(back(k))}" x2="${cx - r - 26}" y2="${f1(back(k))}" stroke="currentColor" stroke-width="2"/><circle cx="${cx - r - 33}" cy="${f1(back(k))}" r="7" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>`).join('')
  return `<g class="fig-accent"><path d="${helixPath(cx, y0, r, pitch, 7)}" fill="none" stroke="currentColor" stroke-width="3"/></g>
<g class="fig-muted">${sideR}${sideL}</g>
<g class="fig-accent-2">
<circle cx="${cx + r}" cy="${f1(front(2))}" r="6" fill="currentColor"/>
<circle cx="${cx + r}" cy="${f1(front(3))}" r="6" fill="currentColor"/>
<line x1="${cx + r}" y1="${f1(front(2) + 8)}" x2="${cx + r}" y2="${f1(front(3) - 8)}" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4"/>
<text x="${cx + r + 14}" y="${f1(front(2) + 4)}" font-size="17" fill="currentColor">C=O (i)</text>
<text x="${cx + r + 14}" y="${f1(front(3) + 6)}" font-size="17" fill="currentColor">H–N (i+4)</text>
</g>`
})()

const secondarySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<text x="170" y="38" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">α-helix</text>
${helixSvg}
<text x="330" y="120" font-size="20" fill="currentColor">right-handed coil</text>
<text x="330" y="150" font-size="20" fill="currentColor">3.6 residues per turn</text>
<text x="330" y="180" font-size="20" fill="currentColor">C=O (i) ··· H–N (i+4)</text>
<text x="330" y="210" font-size="20" fill="currentColor">side chains point outward</text>
<g class="fig-accent-2"><text x="330" y="250" font-size="20" font-weight="700" fill="currentColor">breakers: Pro, Gly</text></g>
<g class="fig-muted"><line x1="500" y1="30" x2="500" y2="430" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6"/></g>
<text x="760" y="38" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">β-sheet</text>
<text x="540" y="78" font-size="21" font-weight="700" fill="currentColor">Antiparallel</text>
<g class="fig-accent">
<defs>${ARROW('arr-aa-sec-b')}</defs>
<line x1="560" y1="110" x2="950" y2="110" stroke="currentColor" stroke-width="7" marker-end="url(#arr-aa-sec-b)"/>
<line x1="960" y1="170" x2="570" y2="170" stroke="currentColor" stroke-width="7" marker-end="url(#arr-aa-sec-b)"/>
<line x1="560" y1="290" x2="950" y2="290" stroke="currentColor" stroke-width="7" marker-end="url(#arr-aa-sec-b)"/>
<line x1="560" y1="350" x2="950" y2="350" stroke="currentColor" stroke-width="7" marker-end="url(#arr-aa-sec-b)"/>
</g>
<g class="fig-muted">
${[620, 690, 760, 830, 900].map((x) => `<line x1="${x}" y1="116" x2="${x}" y2="164" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4"/>`).join('')}
${[600, 660, 720, 780, 840].map((x) => `<line x1="${x}" y1="296" x2="${x + 34}" y2="344" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4"/>`).join('')}
${[600, 740, 880].map((x) => `<line x1="${x}" y1="104" x2="${x}" y2="90" stroke="currentColor" stroke-width="2"/><circle cx="${x}" cy="86" r="5" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>`).join('')}
${[670, 810].map((x) => `<line x1="${x}" y1="116" x2="${x}" y2="130" stroke="currentColor" stroke-width="2"/><circle cx="${x}" cy="134" r="5" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>`).join('')}
</g>
<text x="760" y="212" font-size="19" text-anchor="middle" fill="currentColor">H-bonds straight → stronger</text>
<text x="540" y="262" font-size="21" font-weight="700" fill="currentColor">Parallel</text>
<text x="760" y="392" font-size="19" text-anchor="middle" fill="currentColor">H-bonds slanted → weaker</text>
<g class="fig-muted"><text x="760" y="432" font-size="18" text-anchor="middle" fill="currentColor">side chains alternate above / below the sheet plane</text></g>
</svg>`

/* 9 — Four separation methods as schematics (replace-table, 560×440) */
const panel = (x0: number, y0: number, title: string) =>
  `<g class="fig-muted"><rect x="${x0}" y="${y0}" width="264" height="206" rx="12" fill="none" stroke="currentColor" stroke-width="1.5"/></g>
<text x="${x0 + 12}" y="${y0 + 24}" font-size="16" font-weight="700" fill="currentColor">${title}</text>`
const column = (x: number, y: number) =>
  `<rect x="${x}" y="${y}" width="60" height="118" rx="6" fill="none" stroke="currentColor" stroke-width="2"/>`

const secPanel = (() => {
  const x0 = 12
  const y0 = 10
  const cx = x0 + 32
  const cy = y0 + 38
  const beadsG = [0, 1, 2, 3, 4]
    .flatMap((row) => [0, 1, 2].map((col) => `<circle cx="${cx + 12 + col * 18}" cy="${cy + 14 + row * 22}" r="8" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>`))
    .join('')
  return `${panel(x0, y0, 'Size-exclusion: LARGE first')}
${column(cx, cy)}
<g class="fig-muted">${beadsG}</g>
<g class="fig-accent"><circle cx="${cx + 30}" cy="${cy + 104}" r="7" fill="currentColor"/><defs>${ARROW('arr-aa-sep-b')}</defs>
<line x1="${cx + 30}" y1="${cy + 122}" x2="${cx + 30}" y2="${cy + 150}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-aa-sep-b)"/>
<text x="${x0 + 110}" y="${y0 + 66}" font-size="14" fill="currentColor">● large: excluded</text>
<text x="${x0 + 110}" y="${y0 + 84}" font-size="14" fill="currentColor">from pores → FIRST</text></g>
<g class="fig-accent-2"><circle cx="${cx + 21}" cy="${cy + 36}" r="3" fill="currentColor"/><circle cx="${cx + 39}" cy="${cy + 80}" r="3" fill="currentColor"/>
<text x="${x0 + 110}" y="${y0 + 126}" font-size="14" fill="currentColor">· small: enters the</text>
<text x="${x0 + 110}" y="${y0 + 144}" font-size="14" fill="currentColor">pores → LAST</text></g>`
})()

const iexPanel = (() => {
  const x0 = 288
  const y0 = 10
  const cx = x0 + 32
  const cy = y0 + 38
  const beadsG = [0, 1, 2, 3]
    .flatMap((row) => [0, 1].map((col) => {
      const bx = cx + 18 + col * 24
      const by = cy + 18 + row * 26
      return `<circle cx="${bx}" cy="${by}" r="9" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><text x="${bx}" y="${by + 4}" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">+</text>`
    }))
    .join('')
  const bound = [[cx + 8, cy + 40], [cx + 52, cy + 66], [cx + 30, cy + 96]]
    .map(([bx, by]) => `<circle cx="${bx}" cy="${by}" r="6" fill="currentColor"/><text x="${bx}" y="${by + 4}" font-size="11" font-weight="700" text-anchor="middle" fill="currentColor" class="fig-bg">−</text>`)
    .join('')
  return `${panel(x0, y0, 'Ion-exchange: by charge')}
${column(cx, cy)}
<g class="fig-accent">${beadsG}
<circle cx="${cx + 30}" cy="${cy + 140}" r="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="${cx + 30}" y="${cy + 144}" font-size="11" font-weight="700" text-anchor="middle" fill="currentColor">+</text>
<text x="${x0 + 110}" y="${y0 + 60}" font-size="14" fill="currentColor">+ beads (anion</text>
<text x="${x0 + 110}" y="${y0 + 78}" font-size="14" fill="currentColor">exchanger) bind</text></g>
<g class="fig-accent-2">${bound}
<text x="${x0 + 110}" y="${y0 + 96}" font-size="14" fill="currentColor">− proteins</text></g>
<text x="${x0 + 110}" y="${y0 + 122}" font-size="14" fill="currentColor">+ proteins flow</text>
<text x="${x0 + 110}" y="${y0 + 140}" font-size="14" fill="currentColor">through; bound ones</text>
<text x="${x0 + 110}" y="${y0 + 158}" font-size="14" fill="currentColor">elute as salt rises</text>`
})()

const sdsPanel = (() => {
  const x0 = 12
  const y0 = 225
  const gx = x0 + 16
  const gy = y0 + 40
  const ladder = [18, 32, 50, 74, 104, 134].map((d) => `<rect x="${gx + 14}" y="${gy + d}" width="24" height="4" rx="1" fill="currentColor"/>`).join('')
  return `${panel(x0, y0, 'SDS-PAGE: size only')}
<rect x="${gx}" y="${gy}" width="94" height="150" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/>
<rect x="${gx + 12}" y="${gy}" width="28" height="7" fill="currentColor" fill-opacity="0.3"/><rect x="${gx + 56}" y="${gy}" width="28" height="7" fill="currentColor" fill-opacity="0.3"/>
<g class="fig-muted">${ladder}<text x="${gx + 26}" y="${gy + 164}" font-size="11" text-anchor="middle" fill="currentColor">ladder</text></g>
<g class="fig-accent"><rect x="${gx + 56}" y="${gy + 30}" width="28" height="5" rx="1" fill="currentColor"/><text x="${gx + 70}" y="${gy + 26}" font-size="11" text-anchor="middle" fill="currentColor">big</text></g>
<g class="fig-accent-2"><rect x="${gx + 56}" y="${gy + 132}" width="28" height="5" rx="1" fill="currentColor"/><text x="${gx + 70}" y="${gy + 128}" font-size="11" text-anchor="middle" fill="currentColor">small</text></g>
<g class="fig-muted"><defs>${ARROW('arr-aa-sep-m')}</defs>
<text x="${gx + 108}" y="${gy + 10}" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">−</text>
<line x1="${gx + 108}" y1="${gy + 18}" x2="${gx + 108}" y2="${gy + 128}" stroke="currentColor" stroke-width="2" marker-end="url(#arr-aa-sep-m)"/>
<text x="${gx + 108}" y="${gy + 148}" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">+</text></g>
<text x="${x0 + 136}" y="${y0 + 66}" font-size="14" fill="currentColor">SDS coats every</text>
<text x="${x0 + 136}" y="${y0 + 84}" font-size="14" fill="currentColor">protein with −</text>
<text x="${x0 + 136}" y="${y0 + 102}" font-size="14" fill="currentColor">→ separates by</text>
<text x="${x0 + 136}" y="${y0 + 120}" font-size="14" fill="currentColor">size only;</text>
<g class="fig-accent-2"><text x="${x0 + 136}" y="${y0 + 146}" font-size="14" font-weight="700" fill="currentColor">SMALL migrates</text>
<text x="${x0 + 136}" y="${y0 + 164}" font-size="14" font-weight="700" fill="currentColor">FARTHEST</text></g>`
})()

const iefPanel = (() => {
  const x0 = 288
  const y0 = 225
  const sx = x0 + 22
  const sy = y0 + 72
  return `${panel(x0, y0, 'Isoelectric focusing: by pI')}
<rect x="${sx}" y="${sy}" width="220" height="40" rx="5" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">
<text x="${sx}" y="${sy - 10}" font-size="14" fill="currentColor">pH 3 (+ anode)</text>
<text x="${sx + 220}" y="${sy - 10}" font-size="14" text-anchor="end" fill="currentColor">pH 10 (− cathode)</text>
</g>
<g class="fig-accent-2"><rect x="${sx + 60}" y="${sy + 4}" width="6" height="32" rx="1" fill="currentColor"/><text x="${sx + 63}" y="${sy + 62}" font-size="13" text-anchor="middle" fill="currentColor">pI 5</text></g>
<g class="fig-accent"><rect x="${sx + 154}" y="${sy + 4}" width="6" height="32" rx="1" fill="currentColor"/><text x="${sx + 157}" y="${sy + 62}" font-size="13" text-anchor="middle" fill="currentColor">pI 8</text></g>
<text x="${x0 + 132}" y="${y0 + 166}" font-size="14" text-anchor="middle" fill="currentColor">each protein stops where gel pH = its pI</text>
<text x="${x0 + 132}" y="${y0 + 186}" font-size="14" text-anchor="middle" fill="currentColor">(net charge 0, no more migration)</text>`
})()

const separationSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${secPanel}
${iexPanel}
${sdsPanel}
${iefPanel}
</svg>`

export const mcatAminoAcidsFigures: DeckFigurePlacement[] = [
  {
    at: 'Anatomy of an Amino Acid',
    mode: 'lead',
    figure: {
      svg: anatomySvg,
      alt:
        'A generic amino acid drawn as labelled boxes around a central α-carbon: a hydrogen above, an amino group (–NH₃⁺, +1 at pH 7) to the left, a carboxyl group (–COO⁻, −1 at pH 7) to the right, and the variable R group (side chain) below. At pH 7 the backbone is a zwitterion with net charge zero. All twenty are L / (S) except glycine (achiral) and cysteine ((R) because sulfur outranks).',
      caption: 'The shared backbone: amino group, α-carbon with its hydrogen, carboxyl group — only the R group changes.',
    },
    blocks: [
      '- Same backbone every time; only the **R group** differs — at pH 7 it is a **zwitterion** (+1 and −1, net 0)',
      '- All L / (S) except **Gly** (achiral) and **Cys** ((R) — the sulfur outranks the carboxyl)',
    ],
  },
  {
    at: 'Classification by Side Chain',
    mode: 'replace-table',
    figure: {
      svg: classificationSvg,
      alt:
        'The twenty amino acids as one-letter tiles in five rows. Nonpolar aliphatic (hydrophobic, buried inside): G Gly, A Ala, V Val, L Leu, I Ile, P Pro, M Met. Aromatic (absorb UV at 280 nm, especially Trp and Tyr): F Phe, W Trp, Y Tyr. Polar uncharged (H-bond donors and acceptors): S Ser, T Thr, C Cys, N Asn, Q Gln. Acidic (carboxylate, pKa about 4, negative at pH 7, shown in red): D Asp, E Glu. Basic (shown in blue): K Lys and R Arg positive at pH 7, H His (pKa about 6, dashed tile) mostly neutral.',
      caption: 'The 20 amino acids by side chain. Red = negative at pH 7, blue = positive; His (dashed) is the one that sits near neutral.',
    },
    blocks: [
      '- Nonpolar residues are **buried**; charged and polar ones face water',
      '- Phe, Trp, Tyr absorb **UV at 280 nm**',
      '- **Asp, Glu** negative and **Lys, Arg** positive at pH 7; **His** (pKa ≈ 6) mostly neutral',
      '- Ser, Thr, Tyr carry the **phosphorylation** sites',
    ],
  },
  {
    at: 'Benchmark pKa Values',
    mode: 'replace-table',
    figure: {
      svg: pkaLadderSvg,
      alt:
        'A vertical pKa ladder from 0 to 14 with a dashed pH 7 line across it. Below the line (deprotonated at pH 7): backbone α-COOH at about 2 and Asp/Glu side chains at about 4 (both –COO⁻, red = negative), His imidazole at about 6 (mostly neutral). Above the line (still protonated at pH 7): Cys thiol about 8 (–SH, neutral), backbone α-NH₃⁺ about 9–10 (positive, blue), Tyr phenol about 10 (–OH, neutral), Lys side chain about 10.5 (–NH₃⁺, positive), Arg guanidinium about 12.5 (positive).',
      caption: 'Benchmark pKa values on one ladder: a group with pKa below 7 has lost its proton at pH 7, one with pKa above 7 still holds it. Red = negative, blue = positive at pH 7.',
    },
    blocks: [
      '- pKa **below 7** → deprotonated at pH 7; pKa **above 7** → still protonated',
      '- Carboxyls: ~2 (backbone) and ~4 (Asp / Glu) → **negative**',
      '- Amines: ~9–10 (backbone), ~10.5 (Lys), ~12.5 (Arg) → **positive**',
      '- **His ≈ 6** is the only side chain that titrates near physiological pH',
    ],
  },
  {
    at: 'Isoelectric Point (pI)',
    mode: 'lead',
    figure: {
      svg: piStripsSvg,
      alt:
        'Three horizontal strips over a pH axis from 0 to 14, each divided at its pKa values and labelled with the net charge in each range. Alanine (neutral side chain): +1 below pKa 2.3, 0 between 2.3 and 9.6, −1 above; pI about 6, the midpoint of the zero region. Aspartate (acidic side chain): +1 below 2.1, 0 between 2.1 and 3.9, −1 between 3.9 and 9.8, −2 above; pI about 3. Lysine (basic side chain): +2 below 2.2, +1 between 2.2 and 9.0, 0 between 9.0 and 10.5, −1 above; pI about 9.7. In every case the pI is the average of the two pKa values flanking the zero-charge species.',
      caption: 'Net charge of Ala, Asp and Lys across the pH scale (standard approximate pKa values). The pI is the middle of the zero-charge window.',
    },
    blocks: ['- **pI** = mean of the two pKa values that **flank the neutral species** — the two lowest for acidic, the two highest for basic'],
  },
  {
    at: 'Titration Curves',
    mode: 'after',
    figure: {
      svg: titrationSvg,
      alt:
        'Titration curve of a neutral amino acid: pH (0 to 14) against equivalents of hydroxide added (0 to 2). The curve is flat near pH 2.3 around 0.5 equivalents (first buffering plateau, pKa 1), rises steeply through pH 6 at exactly 1.0 equivalent, which is marked as the pI on the steep part and not on a plateau, flattens again near pH 9.6 around 1.5 equivalents (second plateau, pKa 2), and rises at the end. Net charge is +1 before the first plateau, 0 (zwitterion) between the plateaus, and −1 after the second.',
      caption: 'Titration of a neutral amino acid, computed from pKa 2.3 and 9.6 (illustrative). One plateau per ionizable group; the pI sits on the steep rise between them.',
    },
    blocks: ['- A plateau = buffering at a pKa; a neutral amino acid\'s **pI sits on the steep rise**, not on a plateau — a side-chain pKa adds a third plateau'],
  },
  {
    at: 'The Peptide Bond',
    mode: 'lead',
    figure: {
      svg: peptideSvg,
      alt:
        'Two amino acids drawn as labelled boxes (H₃N⁺ – Cα with R₁ – C(=O)–OH, plus H–NH – Cα with R₂ – COO⁻) condense: the OH of the first carboxyl and the H of the second amine (highlighted) leave as water, and the product dipeptide below has an N-terminus, Cα(R₁), a C=O box joined to an N–H box inside a shaded planar peptide-bond region, Cα(R₂) and a C-terminus. Notes: the peptide C–N bond is planar and rigid from partial double-bond character, almost always trans (cis only before proline), and rotation happens only at the φ and ψ bonds either side of it.',
      caption: 'Condensation joins the carboxyl of one residue to the amine of the next, releasing water; the resulting C–N bond is planar.',
    },
    blocks: ['- Formed by **condensation** (water out), broken by hydrolysis (slow without a protease); planar and **trans** because of partial double-bond character — rotation only at φ and ψ'],
  },
  {
    at: 'The Four Levels of Structure',
    mode: 'replace-table',
    figure: {
      svg: levelsSvg,
      alt:
        'Four columns. Primary: a chain of beads labelled with residue letters from N to C, held by covalent peptide bonds. Secondary: a coil (α-helix) and two antiparallel arrows with dashed hydrogen bonds between them (β-sheet), stabilized by backbone hydrogen bonds only. Tertiary: a single chain folded inside a blob outline with an S–S label, stabilized by side-chain forces (hydrophobic effect, hydrogen bonds, ionic bonds, disulfides, van der Waals) — the 3D fold of one chain. Quaternary: four subunits α, β, β, α packed together, as in hemoglobin α₂β₂, held by the same noncovalent forces plus disulfides.',
      caption: 'Primary → quaternary: what each level is and what holds it together.',
    },
    blocks: [
      '- 1°: covalent **peptide bonds**, written N → C',
      '- 2°: **backbone** H-bonds only — α-helix (i → i+4), β-sheets, turns',
      '- 3°: **side-chain** forces fold ONE chain; 4°: several chains assemble (Hb α₂β₂)',
    ],
  },
  {
    at: 'Secondary Structure Details',
    mode: 'lead',
    figure: {
      svg: secondarySvg,
      alt:
        'Left: an α-helix drawn as a vertical coil with side chains sticking outward and a dashed hydrogen bond from the C=O of residue i to the N–H of residue i+4 one turn up; notes say right-handed, 3.6 residues per turn, side chains outward, breakers Pro and Gly. Right: β-sheets drawn as thick strand arrows. Antiparallel strands point in opposite directions with straight dashed hydrogen bonds between them (stronger); parallel strands point the same way with slanted hydrogen bonds (weaker). Small side chains alternate above and below the strands.',
      caption: 'α-helix (left) and β-sheet (right) schematics. Antiparallel strands make straighter, stronger H-bonds than parallel ones.',
    },
    blocks: ['- α-helix: C=O (i) ··· H–N (i+4), 3.6 residues per turn, Pro and Gly break it; **antiparallel** sheets H-bond straighter (stronger) than parallel'],
  },
  {
    at: 'Separation Techniques',
    mode: 'replace-table',
    figure: {
      svg: separationSvg,
      alt:
        'Four schematics. Size-exclusion: a column packed with porous beads; the large protein is excluded from the pores and flows around the beads to elute first, small proteins wander into the pores and elute last. Ion-exchange: an anion exchanger with positively charged beads binds negatively charged proteins while positive proteins flow straight through; bound proteins elute as the salt gradient rises. SDS-PAGE: a gel with a ladder lane and a sample lane, negative electrode at the top and positive at the bottom; SDS coats every protein with negative charge so separation is by size only and the small protein migrates farthest. Isoelectric focusing: a strip with a pH gradient from 3 (anode) to 10 (cathode); each protein stops where the gel pH equals its pI, shown by bands at pI 5 and pI 8.',
      caption: 'What four workhorse methods separate by: size (exclusion, big first), charge (ion exchange), size only (SDS-PAGE, small farthest) and pI (isoelectric focusing).',
    },
    blocks: [
      '- **Affinity:** specific ligand, antibody or Ni²⁺ column for a His-tag; elute with free ligand or imidazole',
      '- **Native PAGE** keeps size + charge + shape (complexes intact); **2D gel** = IEF first, then SDS-PAGE',
      '- **Salting out** (ammonium sulfate) separates by solubility; **dialysis** removes small solutes through a membrane cutoff',
    ],
  },
]
