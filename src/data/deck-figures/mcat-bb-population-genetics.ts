import type { DeckFigurePlacement } from './index'

/**
 * Population Genetics (MCAT B/B) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing is ours, from the concept: the Hardy–Weinberg unit square
 * beside the p²/2pq/q² curves, five pictograms for the five conditions and the
 * force that breaks each, the lesson's own 10,000-person worked example as a
 * stacked bar and a chain of steps, a seeded random-walk drift simulation
 * (20 vs 500 flies, 19 generations, like the lesson's experiment), bottleneck
 * and founder effect as before/after dot populations, gene flow as two
 * populations whose frequencies converge, three before/after trait
 * distributions, the sickle-cell fitness bars from the lesson's balanced-
 * polymorphism check with stable vs unstable equilibria, and a 100-copy grid
 * showing why a rare recessive hides from selection. No textbook, prep-company
 * or AAMC figure was copied. Curves that are not data say "illustrative"; the
 * only numbers drawn are ones the lesson states.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow's marker is defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-pg-<figure>[-colour]).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

const f = (v: number) => +v.toFixed(1)

/** A rounded box with one or two centred lines of text. */
const BOX = (x: number, y: number, w: number, h: number, l1: string, l2?: string, fs = 19, opacity = 0.12) => {
  const mid = y + h / 2
  const t1 = l2
    ? `<text x="${x + w / 2}" y="${mid - 4}" font-size="${fs}" font-weight="700" text-anchor="middle" fill="currentColor">${l1}</text><text x="${x + w / 2}" y="${mid + fs - 1}" font-size="${fs - 2}" text-anchor="middle" fill="currentColor">${l2}</text>`
    : `<text x="${x + w / 2}" y="${mid + fs / 3}" font-size="${fs}" font-weight="700" text-anchor="middle" fill="currentColor">${l1}</text>`
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/>${t1}`
}

/** Polyline points for y = fn(x) sampled n times on [s0, s1]. */
const CURVE = (fn: (s: number) => number, s0: number, s1: number, n: number, sx: (s: number) => number, sy: (v: number) => number) => {
  const pts: string[] = []
  for (let i = 0; i <= n; i++) {
    const s = s0 + ((s1 - s0) * i) / n
    pts.push(`${f(sx(s))},${f(sy(fn(s)))}`)
  }
  return pts.join(' ')
}

/** Deterministic LCG so the drift simulation and dot scatter draw the same every build. */
const rng = (seed: number) => {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}
const normal = (r: () => number) => Math.sqrt(-2 * Math.log(Math.max(r(), 1e-9))) * Math.cos(2 * Math.PI * r())

/** A filled dot in a theme class ('' = plain currentColor). */
const DOT = (x: number, y: number, r: number, cls: '' | 'fig-accent' | 'fig-accent-2' | 'fig-muted') =>
  cls ? `<g class="${cls}"><circle cx="${f(x)}" cy="${f(y)}" r="${r}" fill="currentColor"/></g>` : `<circle cx="${f(x)}" cy="${f(y)}" r="${r}" fill="currentColor"/>`

/** Scatter `n` dots inside a circle, colours drawn in order from `cols`. */
const SCATTER = (cx: number, cy: number, R: number, cols: ('' | 'fig-accent' | 'fig-accent-2' | 'fig-muted')[], seed: number, dotR = 5) => {
  const r = rng(seed)
  const out: string[] = []
  const placed: [number, number][] = []
  for (let i = 0; i < cols.length; i++) {
    let x = cx
    let y = cy
    for (let tries = 0; tries < 60; tries++) {
      const a = r() * 2 * Math.PI
      const d = Math.sqrt(r()) * (R - dotR - 3)
      x = cx + d * Math.cos(a)
      y = cy + d * Math.sin(a)
      if (placed.every(([px, py]) => (px - x) ** 2 + (py - y) ** 2 > (dotR * 2.4) ** 2)) break
    }
    placed.push([x, y])
    out.push(DOT(x, y, dotR, cols[i]))
  }
  return out.join('')
}

const gauss = (x: number, m: number, s: number) => Math.exp(-((x - m) * (x - m)) / (2 * s * s))

/* 1 — Hardy–Weinberg as a picture: the unit square and the genotype curves (replace-table, 560×440) */
const HW_P = 0.6
const SQ = 210
const SQX = 36
const SQY = 44
const split = SQX + SQ * HW_P
const splitY = SQY + SQ * HW_P
const hwSx = (q: number) => 318 + 200 * q
const hwSy = (v: number) => 254 - 200 * v
const hwSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-pg-hw')}</defs>
<rect x="${SQX}" y="${SQY}" width="${f(SQ * HW_P)}" height="${f(SQ * HW_P)}" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent">
<rect x="${f(split)}" y="${SQY}" width="${f(SQ * (1 - HW_P))}" height="${f(SQ * HW_P)}" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2"/>
<rect x="${SQX}" y="${f(splitY)}" width="${f(SQ * HW_P)}" height="${f(SQ * (1 - HW_P))}" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2"/>
</g>
<g class="fig-accent-2"><rect x="${f(split)}" y="${f(splitY)}" width="${f(SQ * (1 - HW_P))}" height="${f(SQ * (1 - HW_P))}" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/></g>
<text x="${f(SQX + (SQ * HW_P) / 2)}" y="${f(SQY + (SQ * HW_P) / 2 - 2)}" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">AA</text>
<text x="${f(SQX + (SQ * HW_P) / 2)}" y="${f(SQY + (SQ * HW_P) / 2 + 20)}" font-size="17" text-anchor="middle" fill="currentColor">p²</text>
<text x="${f(split + (SQ * (1 - HW_P)) / 2)}" y="${f(SQY + (SQ * HW_P) / 2 - 2)}" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Aa</text>
<text x="${f(split + (SQ * (1 - HW_P)) / 2)}" y="${f(SQY + (SQ * HW_P) / 2 + 18)}" font-size="16" text-anchor="middle" fill="currentColor">pq</text>
<text x="${f(SQX + (SQ * HW_P) / 2)}" y="${f(splitY + (SQ * (1 - HW_P)) / 2 - 2)}" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Aa</text>
<text x="${f(SQX + (SQ * HW_P) / 2)}" y="${f(splitY + (SQ * (1 - HW_P)) / 2 + 18)}" font-size="16" text-anchor="middle" fill="currentColor">pq</text>
<text x="${f(split + (SQ * (1 - HW_P)) / 2)}" y="${f(splitY + (SQ * (1 - HW_P)) / 2 - 2)}" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">aa</text>
<text x="${f(split + (SQ * (1 - HW_P)) / 2)}" y="${f(splitY + (SQ * (1 - HW_P)) / 2 + 18)}" font-size="16" text-anchor="middle" fill="currentColor">q²</text>
<text x="${f(SQX + (SQ * HW_P) / 2)}" y="${SQY - 10}" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">p</text>
<text x="${f(split + (SQ * (1 - HW_P)) / 2)}" y="${SQY - 10}" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">q</text>
<text x="${SQX - 12}" y="${f(SQY + (SQ * HW_P) / 2 + 6)}" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">p</text>
<text x="${SQX - 12}" y="${f(splitY + (SQ * (1 - HW_P)) / 2 + 6)}" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">q</text>
<g class="fig-muted"><text x="${f(SQX + SQ / 2)}" y="${SQY + SQ + 24}" font-size="14" text-anchor="middle" fill="currentColor">egg allele × sperm allele, random mating</text></g>
<text x="${f(SQX + SQ / 2)}" y="${SQY + SQ + 46}" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">whole square = (p + q)² = 1</text>
<line x1="318" y1="254" x2="528" y2="254" stroke="currentColor" stroke-width="2" marker-end="url(#arr-pg-hw)"/>
<line x1="318" y1="254" x2="318" y2="40" stroke="currentColor" stroke-width="2" marker-end="url(#arr-pg-hw)"/>
<g class="fig-muted">
<line x1="318" y1="${f(hwSy(0.5))}" x2="518" y2="${f(hwSy(0.5))}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="${f(hwSx(0.5))}" y1="254" x2="${f(hwSx(0.5))}" y2="${f(hwSy(0.5))}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
</g>
<text x="308" y="${f(hwSy(0.5) + 5)}" font-size="14" text-anchor="end" fill="currentColor">0.5</text>
<text x="308" y="${f(hwSy(1) + 5)}" font-size="14" text-anchor="end" fill="currentColor">1</text>
<text x="${f(hwSx(0))}" y="272" font-size="14" text-anchor="middle" fill="currentColor">0</text>
<text x="${f(hwSx(0.5))}" y="272" font-size="14" text-anchor="middle" fill="currentColor">0.5</text>
<text x="${f(hwSx(1))}" y="272" font-size="14" text-anchor="middle" fill="currentColor">1</text>
<text x="${f(hwSx(0.5))}" y="292" font-size="15" text-anchor="middle" fill="currentColor">q (frequency of a)</text>
<polyline points="${CURVE((q) => (1 - q) * (1 - q), 0, 1, 50, hwSx, hwSy)}" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent"><polyline points="${CURVE((q) => 2 * q * (1 - q), 0, 1, 50, hwSx, hwSy)}" fill="none" stroke="currentColor" stroke-width="3.5"/>
<circle cx="${f(hwSx(0.5))}" cy="${f(hwSy(0.5))}" r="5" fill="currentColor"/>
<text x="${f(hwSx(0.5))}" y="${f(hwSy(0.5) - 12)}" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">2pq (Aa) peaks at 0.5</text></g>
<g class="fig-accent-2"><polyline points="${CURVE((q) => q * q, 0, 1, 50, hwSx, hwSy)}" fill="none" stroke="currentColor" stroke-width="3"/></g>
<text x="346" y="72" font-size="15" font-weight="700" fill="currentColor">p² (AA)</text>
<g class="fig-accent-2"><text x="490" y="72" font-size="15" font-weight="700" text-anchor="end" fill="currentColor">q² (aa)</text></g>
<text x="280" y="340" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">read the recessive class first: aa = q² is the only pure genotype</text>
<g class="fig-muted"><text x="280" y="364" font-size="14" text-anchor="middle" fill="currentColor">the dominant phenotype lumps p² + 2pq — never square-root it</text></g>
<text x="280" y="400" font-size="15" text-anchor="middle" fill="currentColor">rare allele (small q): 2pq ≈ 2q carriers dwarf q² affected</text>
<g class="fig-muted"><text x="280" y="424" font-size="14" text-anchor="middle" fill="currentColor">one generation of random mating sets these genotype proportions</text></g>
</svg>`

/* 2 — The five conditions and the force that breaks each (lead, 1000×460) */
const PANEL_X = [100, 300, 500, 700, 900]
const panelHead = (i: number, l1: string) =>
  `<text x="${PANEL_X[i]}" y="40" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">${l1}</text>`
const panelFoot = (i: number, force: string, s1: string, s2: string) =>
  `<g class="fig-accent-2"><text x="${PANEL_X[i]}" y="290" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">${force}</text></g><text x="${PANEL_X[i]}" y="316" font-size="15" text-anchor="middle" fill="currentColor">${s1}</text><text x="${PANEL_X[i]}" y="338" font-size="15" text-anchor="middle" fill="currentColor">${s2}</text>`
const X_MARK = (x: number, y: number, s: number) =>
  `<path d="M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>`
const PAIR = (x: number, y: number, a: '' | 'fig-accent' | 'fig-accent-2', b: '' | 'fig-accent' | 'fig-accent-2') =>
  `<line x1="${x - 14}" y1="${y}" x2="${x + 14}" y2="${y}" stroke="currentColor" stroke-width="2"/>${DOT(x - 16, y, 8, a)}${DOT(x + 16, y, 8, b)}`
const conditionsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-pg-cond')}</defs>
<g class="fig-muted">${[200, 400, 600, 800].map((x) => `<line x1="${x}" y1="24" x2="${x}" y2="350" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/>`).join('')}</g>
${panelHead(0, '1 · No mutation')}
${[0, 1, 2, 3].map((k) => DOT(46 + k * 28, 130, 9, 'fig-accent')).join('')}
<g class="fig-accent-2"><circle cx="158" cy="130" r="9" fill="currentColor"/>
<path d="M158 108 L158 100 M174 114 L180 108 M142 114 L136 108" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></g>
<g class="fig-accent"><text x="86" y="176" font-size="15" text-anchor="middle" fill="currentColor">A A A A</text></g>
<g class="fig-accent-2"><text x="158" y="176" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">a′</text></g>
<text x="100" y="214" font-size="15" text-anchor="middle" fill="currentColor">a copying error makes</text>
<text x="100" y="234" font-size="15" text-anchor="middle" fill="currentColor">a brand-new allele</text>
${panelFoot(0, 'Mutation', 'source of all new alleles', 'too slow to move p alone')}
${panelHead(1, '2 · No selection')}
${[0, 1, 2, 3].map((k) => DOT(258 + k * 26, 112, 9, 'fig-accent')).join('')}
${[0, 1, 2, 3].map((k) => DOT(258 + k * 26, 150, 9, 'fig-accent-2')).join('')}
${X_MARK(284, 150, 9)}${X_MARK(336, 150, 9)}
<g class="fig-accent"><text x="238" y="117" font-size="15" font-weight="700" text-anchor="end" fill="currentColor">AA</text><text x="356" y="117" font-size="15" fill="currentColor">breed</text></g>
<g class="fig-accent-2"><text x="238" y="155" font-size="15" font-weight="700" text-anchor="end" fill="currentColor">aa</text><text x="356" y="155" font-size="15" fill="currentColor">½ die</text></g>
<text x="300" y="214" font-size="15" text-anchor="middle" fill="currentColor">genotypes differ in</text>
<text x="300" y="234" font-size="15" text-anchor="middle" fill="currentColor">survival or offspring (w)</text>
${panelFoot(1, 'Natural selection', 'p moves the SAME way', 'in every replicate')}
${panelHead(2, '3 · Random mating')}
${PAIR(450, 112, 'fig-accent', 'fig-accent')}${PAIR(500, 112, 'fig-accent-2', 'fig-accent-2')}${PAIR(550, 112, 'fig-accent', 'fig-accent')}
<text x="500" y="152" font-size="15" text-anchor="middle" fill="currentColor">like × like, or relatives</text>
<text x="500" y="214" font-size="15" text-anchor="middle" fill="currentColor">Aa ↓ · AA, aa ↑</text>
<text x="500" y="234" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">p and q do NOT change</text>
${panelFoot(2, 'Nonrandom mating', 'heterozygote deficit', 'exposes rare recessives')}
${panelHead(3, '4 · No gene flow')}
<circle cx="652" cy="140" r="40" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<circle cx="748" cy="140" r="40" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
${SCATTER(652, 140, 40, ['fig-accent', 'fig-accent', 'fig-accent', 'fig-accent', 'fig-accent-2', 'fig-accent'], 11, 5)}
${SCATTER(748, 140, 40, ['fig-accent-2', 'fig-accent-2', 'fig-accent-2', 'fig-accent', 'fig-accent-2', 'fig-accent-2'], 12, 5)}
<line x1="690" y1="126" x2="710" y2="126" stroke="currentColor" stroke-width="3" marker-end="url(#arr-pg-cond)"/>
<line x1="710" y1="154" x2="690" y2="154" stroke="currentColor" stroke-width="3" marker-end="url(#arr-pg-cond)"/>
<text x="700" y="214" font-size="15" text-anchor="middle" fill="currentColor">migrants breed in:</text>
<text x="700" y="234" font-size="15" text-anchor="middle" fill="currentColor">p′ = (1 − m)p + m·p<tspan font-size="11">migrant</tspan></text>
${panelFoot(3, 'Gene flow', 'homogenizes populations', 'can import new alleles')}
${panelHead(4, '5 · Very large N')}
<circle cx="860" cy="138" r="46" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
${SCATTER(860, 138, 46, ['fig-accent', 'fig-accent-2', 'fig-accent', 'fig-accent-2', 'fig-accent', 'fig-accent-2', 'fig-accent', 'fig-accent-2', 'fig-accent', 'fig-accent-2', 'fig-accent', 'fig-accent-2'], 13, 5)}
<line x1="910" y1="138" x2="934" y2="138" stroke="currentColor" stroke-width="3" marker-end="url(#arr-pg-cond)"/>
<circle cx="958" cy="138" r="22" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 4"/>
${DOT(950, 132, 5, 'fig-accent')}${DOT(964, 130, 5, 'fig-accent')}${DOT(957, 146, 5, 'fig-accent')}
<text x="900" y="214" font-size="15" text-anchor="middle" fill="currentColor">few gametes are sampled:</text>
<text x="900" y="234" font-size="15" text-anchor="middle" fill="currentColor">p leaps by luck: 0.5 → 1</text>
${panelFoot(4, 'Genetic drift', 'scatter, both directions', 'ends in fixation or loss')}
<text x="500" y="392" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">all five hold → p and q are frozen and genotypes sit at p² : 2pq : q²</text>
<g class="fig-accent-2"><text x="500" y="420" font-size="16" text-anchor="middle" fill="currentColor">break 1, 2, 4 or 5 → allele frequencies change across generations = evolution at the population level</text></g>
<g class="fig-muted"><text x="500" y="446" font-size="15" text-anchor="middle" fill="currentColor">break 3 alone → only the genotype proportions move; selection must follow before p or q changes</text></g>
</svg>`

/* 3 — The lesson's worked example drawn: 36 affected in 10,000 → 1,128 carriers (after, 1000×460) */
const BAR_X = 60
const BAR_W = 880
const BAR_Y = 232
const BAR_H = 60
const wAA = BAR_W * 0.8836
const wAa = BAR_W * 0.1128
const waa = BAR_W * 0.0036
const workedSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-pg-wk')}</defs>
<text x="500" y="38" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">10,000 people in H-W equilibrium · 36 have the recessive condition · how many carriers?</text>
${BOX(40, 66, 210, 64, '36 / 10,000 = q²', 'q² = 0.0036', 18)}
<line x1="250" y1="98" x2="282" y2="98" stroke="currentColor" stroke-width="3" marker-end="url(#arr-pg-wk)"/>
${BOX(284, 66, 190, 64, 'q = √0.0036', 'q = 0.06', 18)}
<line x1="474" y1="98" x2="506" y2="98" stroke="currentColor" stroke-width="3" marker-end="url(#arr-pg-wk)"/>
${BOX(508, 66, 170, 64, 'p = 1 − q', 'p = 0.94', 18)}
<g class="fig-accent">
<defs>${ARROW('arr-pg-wk-b')}</defs>
<line x1="678" y1="98" x2="710" y2="98" stroke="currentColor" stroke-width="3" marker-end="url(#arr-pg-wk-b)"/>
${BOX(712, 66, 270, 64, '2pq = 2(0.94)(0.06) = 0.1128', '× 10,000 = 1,128 carriers', 16, 0.16)}
</g>
<g class="fig-muted"><text x="145" y="156" font-size="15" text-anchor="middle" fill="currentColor">start here — the ONE pure class</text></g>
<text x="500" y="200" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">the same 10,000 people, drawn to scale</text>
<rect x="${BAR_X}" y="${BAR_Y}" width="${f(wAA)}" height="${BAR_H}" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent"><rect x="${f(BAR_X + wAA)}" y="${BAR_Y}" width="${f(wAa)}" height="${BAR_H}" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/></g>
<g class="fig-accent-2"><rect x="${f(BAR_X + wAA + wAa)}" y="${BAR_Y}" width="${f(waa)}" height="${BAR_H}" fill="currentColor" stroke="currentColor" stroke-width="2"/>
<line x1="${f(BAR_X + wAA + wAa + waa / 2)}" y1="${BAR_Y + BAR_H + 2}" x2="${f(BAR_X + wAA + wAa + waa / 2)}" y2="${BAR_Y + BAR_H + 30}" stroke="currentColor" stroke-width="2"/>
<text x="${f(BAR_X + wAA + wAa + waa / 2)}" y="${BAR_Y + BAR_H + 50}" font-size="16" font-weight="700" text-anchor="end" fill="currentColor">aa: 36 people (q² = 0.36%)</text>
<text x="${f(BAR_X + wAA + wAa + waa / 2)}" y="${BAR_Y + BAR_H + 70}" font-size="15" text-anchor="end" fill="currentColor">the only class you can read directly</text></g>
<text x="${f(BAR_X + wAA / 2)}" y="${BAR_Y + 37}" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">AA: p² = 0.8836 → 8,836 unaffected non-carriers</text>
<g class="fig-accent"><text x="${f(BAR_X + wAA + wAa / 2)}" y="${BAR_Y - 12}" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Aa: 1,128 carriers</text>
<text x="${f(BAR_X + wAA + wAa / 2)}" y="${BAR_Y + 37}" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">11.3%</text></g>
<text x="60" y="${BAR_Y + BAR_H + 50}" font-size="16" font-weight="700" fill="currentColor">31 carriers for every affected person</text>
<g class="fig-muted"><text x="60" y="${BAR_Y + BAR_H + 70}" font-size="15" fill="currentColor">shortcut 2pq ≈ 2q = 0.12 → ~1,200 — lands on the right answer choice</text></g>
<g class="fig-accent-2"><text x="500" y="440" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">trap: “84% show the dominant phenotype” → recessive = 16% = q², q = 0.4, p = 0.6 — never take √0.84</text></g>
</svg>`

/* 4 — Genetic drift: a seeded random walk, 20 vs 500 flies over 19 generations (lead, 1000×460, illustrative) */
const DRIFT_Y0 = 78
const DRIFT_H = 262
const DRIFT_W = 330
const GENS = 19
const driftPanel = (x0: number, title: string, N: number, seed: number, note: string) => {
  const r = rng(seed)
  const sx = (g: number) => x0 + (DRIFT_W * g) / GENS
  const sy = (p: number) => DRIFT_Y0 + DRIFT_H * (1 - p)
  const ends: number[] = []
  const lines: string[] = []
  const dots: string[] = []
  for (let k = 0; k < 30; k++) {
    let p = 0.5
    const pts = [`${f(sx(0))},${f(sy(p))}`]
    for (let g = 1; g <= GENS; g++) {
      if (p > 0 && p < 1) {
        p += Math.sqrt((p * (1 - p)) / (2 * N)) * normal(r)
        if (p < 1 / (2 * N)) p = 0
        if (p > 1 - 1 / (2 * N)) p = 1
      }
      pts.push(`${f(sx(g))},${f(sy(p))}`)
    }
    ends.push(p)
    lines.push(`<polyline points="${pts.join(' ')}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-opacity="0.55" stroke-linejoin="round"/>`)
    if (p === 0 || p === 1) dots.push(`<circle cx="${f(sx(GENS))}" cy="${f(sy(p))}" r="4" fill="currentColor"/>`)
  }
  const bins = [0, 0, 0, 0, 0]
  for (const e of ends) bins[Math.min(4, Math.floor(e * 5))]++
  const hx = x0 + DRIFT_W + 14
  const bh = DRIFT_H / 5
  const hist = bins
    .map((c, i) => `<rect x="${hx}" y="${f(sy((i + 1) / 5) + 3)}" width="${f((c / 30) * 70)}" height="${f(bh - 6)}" fill="currentColor" fill-opacity="0.35"/>`)
    .join('')
  const fixed = ends.filter((e) => e === 0 || e === 1).length
  return `
<text x="${x0 + DRIFT_W / 2}" y="46" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">${title}</text>
<g class="fig-muted"><line x1="${x0}" y1="${f(sy(0.5))}" x2="${x0 + DRIFT_W}" y2="${f(sy(0.5))}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="${x0}" y1="${f(sy(1))}" x2="${x0 + DRIFT_W}" y2="${f(sy(1))}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/></g>
<line x1="${x0}" y1="${f(sy(0))}" x2="${x0 + DRIFT_W + 6}" y2="${f(sy(0))}" stroke="currentColor" stroke-width="2"/>
<line x1="${x0}" y1="${f(sy(0))}" x2="${x0}" y2="${DRIFT_Y0 - 10}" stroke="currentColor" stroke-width="2"/>
<text x="${x0 - 8}" y="${f(sy(1) + 5)}" font-size="14" text-anchor="end" fill="currentColor">1</text>
<text x="${x0 - 8}" y="${f(sy(0.5) + 5)}" font-size="14" text-anchor="end" fill="currentColor">0.5</text>
<text x="${x0 - 8}" y="${f(sy(0) + 5)}" font-size="14" text-anchor="end" fill="currentColor">0</text>
<text x="${x0}" y="${f(sy(0) + 22)}" font-size="14" fill="currentColor">gen 0</text>
<text x="${x0 + DRIFT_W}" y="${f(sy(0) + 22)}" font-size="14" text-anchor="end" fill="currentColor">gen 19</text>
<g class="fig-accent">${lines.join('')}</g>
<g class="fig-accent-2">${dots.join('')}</g>
<g class="fig-muted">${hist}<text x="${hx + 35}" y="${f(sy(0) + 22)}" font-size="13" text-anchor="middle" fill="currentColor">at gen 19</text></g>
<text x="${x0 + DRIFT_W / 2}" y="${f(sy(0) + 46)}" font-size="15" text-anchor="middle" fill="currentColor">${note.replace('{fixed}', String(fixed))}</text>`
}
const driftSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${driftPanel(70, '20 flies per generation (2N = 40 alleles)', 20, 20261028, '{fixed} of 30 replicates already fixed (1) or lost (0): a U-shape')}
${driftPanel(560, '500 flies per generation (2N = 1,000)', 500, 7, 'every replicate still near 0.5: tiny random steps')}
<text x="500" y="420" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">30 neutral-allele replicates each, all starting at 0.5 — direction is random, step size shrinks with N, 0 and 1 are absorbing</text>
<g class="fig-muted"><text x="500" y="446" font-size="15" text-anchor="middle" fill="currentColor">illustrative random-walk simulation · P(eventual fixation) = starting frequency, so about half of the small replicates fix and half lose</text></g>
</svg>`

/* 5 — Bottleneck and founder effect as before/after dot populations (lead, 1000×460) */
const MIX: ('' | 'fig-accent' | 'fig-accent-2' | 'fig-muted')[] = []
for (let i = 0; i < 24; i++) MIX.push(i % 3 === 0 ? 'fig-accent-2' : i % 3 === 1 ? 'fig-accent' : '')
const BLUE_HEAVY: ('' | 'fig-accent' | 'fig-accent-2' | 'fig-muted')[] = []
for (let i = 0; i < 24; i++) BLUE_HEAVY.push(i % 6 === 0 ? '' : 'fig-accent')
const RED_HEAVY: ('' | 'fig-accent' | 'fig-accent-2' | 'fig-muted')[] = []
for (let i = 0; i < 20; i++) RED_HEAVY.push(i % 4 === 0 ? 'fig-accent' : i % 4 === 1 ? '' : 'fig-accent-2')
const POPC = (cx: number, cy: number, R: number, dashed = false) =>
  `<circle cx="${cx}" cy="${cy}" r="${R}" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`
const bottleneckSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-pg-bn')}</defs>
<text x="40" y="38" font-size="20" font-weight="700" fill="currentColor">Bottleneck — survivors of a crash</text>
<text x="40" y="258" font-size="20" font-weight="700" fill="currentColor">Founder effect — a small group leaves</text>
<g class="fig-muted"><line x1="40" y1="228" x2="960" y2="228" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/></g>
${POPC(150, 130, 72)}${SCATTER(150, 130, 72, MIX, 101, 6)}
<text x="150" y="222" font-size="15" text-anchor="middle" fill="currentColor">large, three alleles</text>
<line x1="230" y1="130" x2="300" y2="130" stroke="currentColor" stroke-width="3" marker-end="url(#arr-pg-bn)"/>
<g class="fig-accent-2"><text x="265" y="116" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">crash</text></g>
<path d="M312 72 L348 118 L348 142 L312 188 L452 188 L416 142 L416 118 L452 72 Z" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
${DOT(372, 130, 6, 'fig-accent')}${DOT(392, 124, 6, 'fig-accent')}${DOT(382, 146, 6, '')}${DOT(400, 142, 6, 'fig-accent')}
<text x="382" y="222" font-size="15" text-anchor="middle" fill="currentColor">~20 survivors, by luck</text>
<line x1="462" y1="130" x2="532" y2="130" stroke="currentColor" stroke-width="3" marker-end="url(#arr-pg-bn)"/>
<text x="497" y="116" font-size="15" text-anchor="middle" fill="currentColor">rebound</text>
${POPC(615, 130, 72)}${SCATTER(615, 130, 72, BLUE_HEAVY, 102, 6)}
<text x="615" y="222" font-size="15" text-anchor="middle" fill="currentColor">huge again — red allele gone for good</text>
<text x="740" y="100" font-size="16" font-weight="700" fill="currentColor">northern elephant seals</text>
<text x="740" y="124" font-size="15" fill="currentColor">hunted to ~20 → &gt;100,000 today,</text>
<text x="740" y="146" font-size="15" fill="currentColor">still almost no allelic variation</text>
<g class="fig-muted"><text x="740" y="178" font-size="15" fill="currentColor">numbers rebound; alleles do not</text></g>
${POPC(150, 350, 72)}${SCATTER(150, 350, 72, MIX, 103, 6)}
<text x="150" y="442" font-size="15" text-anchor="middle" fill="currentColor">source population, unchanged</text>
<g class="fig-accent-2"><circle cx="196" cy="320" r="26" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4"/></g>
<path d="M226 318 C 270 290, 300 300, 330 326" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-pg-bn)"/>
<text x="280" y="294" font-size="15" text-anchor="middle" fill="currentColor">a few emigrate</text>
${POPC(382, 350, 40, true)}${SCATTER(382, 350, 40, ['fig-accent-2', 'fig-accent-2', 'fig-accent', 'fig-accent-2', ''], 104, 6)}
<text x="382" y="416" font-size="15" text-anchor="middle" fill="currentColor">founders: red over-represented</text>
<g class="fig-muted"><text x="382" y="436" font-size="14" text-anchor="middle" fill="currentColor">a subset of the source's variation</text></g>
<line x1="432" y1="350" x2="532" y2="350" stroke="currentColor" stroke-width="3" marker-end="url(#arr-pg-bn)"/>
<text x="482" y="336" font-size="15" text-anchor="middle" fill="currentColor">generations</text>
${POPC(615, 350, 72)}${SCATTER(615, 350, 72, RED_HEAVY, 105, 6)}
<text x="615" y="442" font-size="15" text-anchor="middle" fill="currentColor">now the rare allele is common</text>
<text x="740" y="320" font-size="16" font-weight="700" fill="currentColor">Old Order Amish</text>
<text x="740" y="344" font-size="15" fill="currentColor">~200 founders → Ellis-van Creveld</text>
<text x="740" y="366" font-size="15" fill="currentColor">far above the general population</text>
<g class="fig-accent-2"><text x="740" y="404" font-size="16" font-weight="700" fill="currentColor">both are drift, not fitness:</text></g>
<text x="740" y="428" font-size="15" fill="currentColor">a small random sample sets the new</text>
<text x="740" y="448" font-size="15" fill="currentColor">gene pool — survivors vs emigrants</text>
</svg>`

/* 6 — Gene flow: migrants pull a recipient's frequency toward the donor's (lead, 1000×460, illustrative) */
const gfSx = (g: number) => 560 + (380 * g) / 20
const gfSy = (p: number) => 330 - 250 * p
/** Two-way flow at rate m each way: the gap between the populations shrinks by (1 − 2m) per generation. */
const converge = (start: number, m: number) => (g: number) => 0.5 + (start - 0.5) * Math.pow(1 - 2 * m, g)
const geneFlowSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-pg-gf')}</defs>
<g class="fig-accent">${POPC(150, 150, 82)}</g>
${SCATTER(150, 150, 82, ['fig-accent', 'fig-accent', 'fig-accent', 'fig-accent', 'fig-accent', 'fig-accent', 'fig-accent', 'fig-accent', 'fig-accent-2', 'fig-accent', 'fig-accent', 'fig-accent', 'fig-accent', 'fig-accent', 'fig-accent-2', 'fig-accent', 'fig-accent', 'fig-accent', 'fig-accent', 'fig-accent'], 201, 6)}
<g class="fig-accent-2">${POPC(400, 150, 82)}</g>
${SCATTER(400, 150, 82, ['fig-accent-2', 'fig-accent-2', 'fig-accent-2', 'fig-accent-2', 'fig-accent', 'fig-accent-2', 'fig-accent-2', 'fig-accent-2', 'fig-accent-2', 'fig-accent-2', 'fig-accent-2', 'fig-accent-2', 'fig-accent', 'fig-accent-2', 'fig-accent-2', 'fig-accent-2', 'fig-accent-2', 'fig-accent-2', 'fig-accent-2', 'fig-accent-2'], 202, 6)}
<text x="150" y="254" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Resident population</text>
<g class="fig-accent"><text x="150" y="278" font-size="16" text-anchor="middle" fill="currentColor">p<tspan font-size="12">resident</tspan> low (here 0.1)</text></g>
<text x="400" y="254" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Neighbouring population</text>
<g class="fig-accent-2"><text x="400" y="278" font-size="16" text-anchor="middle" fill="currentColor">p<tspan font-size="12">migrant</tspan> high (here 0.9)</text></g>
<line x1="312" y1="132" x2="238" y2="132" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-pg-gf)"/>
<line x1="238" y1="168" x2="312" y2="168" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-pg-gf)"/>
<text x="275" y="120" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">m each way</text>
<rect x="40" y="306" width="470" height="52" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="275" y="339" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">p′ = (1 − m)·p<tspan font-size="13">resident</tspan> + m·p<tspan font-size="13">migrant</tspan></text>
<text x="275" y="386" font-size="16" text-anchor="middle" fill="currentColor">one generation at rate m moves p toward the donor's value</text>
<g class="fig-muted"><text x="275" y="410" font-size="15" text-anchor="middle" fill="currentColor">from the receiver's side a migrant allele looks like a mutation</text></g>
<text x="750" y="46" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">two-way flow over generations</text>
<line x1="560" y1="330" x2="950" y2="330" stroke="currentColor" stroke-width="2" marker-end="url(#arr-pg-gf)"/>
<line x1="560" y1="330" x2="560" y2="64" stroke="currentColor" stroke-width="2" marker-end="url(#arr-pg-gf)"/>
<g class="fig-muted"><line x1="560" y1="${f(gfSy(0.5))}" x2="940" y2="${f(gfSy(0.5))}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/></g>
<text x="550" y="${f(gfSy(1) + 5)}" font-size="14" text-anchor="end" fill="currentColor">1</text>
<text x="550" y="${f(gfSy(0.5) + 5)}" font-size="14" text-anchor="end" fill="currentColor">0.5</text>
<text x="550" y="${f(gfSy(0) + 5)}" font-size="14" text-anchor="end" fill="currentColor">0</text>
<text x="750" y="354" font-size="15" text-anchor="middle" fill="currentColor">generations →</text>
<text x="572" y="78" font-size="14" fill="currentColor">allele frequency</text>
<g class="fig-accent"><polyline points="${CURVE(converge(0.1, 0.1), 0, 20, 40, gfSx, gfSy)}" fill="none" stroke="currentColor" stroke-width="3.5"/>
<text x="${f(gfSx(5))}" y="${f(gfSy(converge(0.1, 0.1)(5)) + 22)}" font-size="15" font-weight="700" fill="currentColor">resident</text></g>
<g class="fig-accent-2"><polyline points="${CURVE(converge(0.9, 0.1), 0, 20, 40, gfSx, gfSy)}" fill="none" stroke="currentColor" stroke-width="3.5"/>
<text x="${f(gfSx(5))}" y="${f(gfSy(converge(0.9, 0.1)(5)) - 12)}" font-size="15" font-weight="700" fill="currentColor">neighbour</text></g>
<text x="${f(gfSx(14))}" y="${f(gfSy(0.5) - 14)}" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">frequencies converge</text>
<text x="750" y="396" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">gene flow homogenizes —</text>
<text x="750" y="418" font-size="15" text-anchor="middle" fill="currentColor">it opposes the divergence that drift and local selection create</text>
<g class="fig-muted"><text x="750" y="442" font-size="14" text-anchor="middle" fill="currentColor">illustrative curves, m = 0.1 each way</text></g>
</svg>`

/* 7 — Three modes of selection on a quantitative trait: before vs after (replace-table, 560×440, illustrative) */
const MODE_X = [96, 280, 464]
const modePanel = (i: number, title: string, afterFn: (x: number) => number, pressure: string, mean: string, variance: string, note: string) => {
  const cx = MODE_X[i]
  const x0 = cx - 78
  const x1 = cx + 78
  const base = 200
  const sx = (t: number) => x0 + (x1 - x0) * t
  const sy = (v: number) => base - 118 * v
  return `
<text x="${cx}" y="26" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${title}</text>
<line x1="${x0 - 4}" y1="${base}" x2="${x1 + 4}" y2="${base}" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted"><polyline points="${CURVE((t) => gauss(t, 0.5, 0.15), 0, 1, 60, sx, sy)}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 4"/></g>
<g class="fig-accent"><polygon points="${f(sx(0))},${base} ${CURVE(afterFn, 0, 1, 60, sx, sy)} ${f(sx(1))},${base}" fill="currentColor" fill-opacity="0.18"/>
<polyline points="${CURVE(afterFn, 0, 1, 60, sx, sy)}" fill="none" stroke="currentColor" stroke-width="3"/></g>
${pressure}
<text x="${cx}" y="222" font-size="13" text-anchor="middle" fill="currentColor">trait value →</text>
<text x="${cx}" y="252" font-size="15" text-anchor="middle" fill="currentColor">mean: <tspan font-weight="700">${mean}</tspan></text>
<text x="${cx}" y="274" font-size="15" text-anchor="middle" fill="currentColor">variance: <tspan font-weight="700">${variance}</tspan></text>
<g class="fig-muted"><text x="${cx}" y="298" font-size="13" text-anchor="middle" fill="currentColor">${note}</text></g>`
}
const PRESS = (x1: number, y: number, x2: number) =>
  `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="currentColor" stroke-width="3" marker-end="url(#arr-pg-mode-r)"/>`
const modesSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-accent-2"><defs>${ARROW('arr-pg-mode-r')}</defs>
${PRESS(MODE_X[0] - 74, 176, MODE_X[0] - 30)}
<text x="${MODE_X[0] - 52}" y="166" font-size="12" text-anchor="middle" fill="currentColor">against</text>
${PRESS(MODE_X[1] - 74, 176, MODE_X[1] - 34)}${PRESS(MODE_X[1] + 74, 176, MODE_X[1] + 34)}
<text x="${MODE_X[1] - 54}" y="166" font-size="12" text-anchor="middle" fill="currentColor">against</text>
<text x="${MODE_X[1] + 54}" y="166" font-size="12" text-anchor="middle" fill="currentColor">against</text>
${PRESS(MODE_X[2] - 10, 176, MODE_X[2] - 50)}${PRESS(MODE_X[2] + 10, 176, MODE_X[2] + 50)}
<text x="${MODE_X[2]}" y="48" font-size="12" text-anchor="middle" fill="currentColor">against the middle</text>
</g>
${modePanel(0, 'Directional', (t) => 0.96 * gauss(t, 0.68, 0.13), '', 'shifts', 'usually ↓', 'one extreme favoured')}
${modePanel(1, 'Stabilizing', (t) => gauss(t, 0.5, 0.09), '', 'same', '↓', 'intermediate favoured')}
${modePanel(2, 'Disruptive', (t) => 0.85 * (gauss(t, 0.22, 0.1) + gauss(t, 0.78, 0.1)), '', 'same', '↑ (bimodal)', 'both extremes favoured')}
<g class="fig-muted"><line x1="188" y1="12" x2="188" y2="306" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/><line x1="372" y1="12" x2="372" y2="306" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="60" y1="334" x2="100" y2="334" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 4"/><text x="108" y="339" font-size="14" fill="currentColor">before selection</text></g>
<g class="fig-accent"><rect x="260" y="326" width="40" height="14" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="308" y="339" font-size="14" fill="currentColor">after selection</text></g>
<text x="280" y="378" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">directional moves the mean;</text>
<text x="280" y="400" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">stabilizing and disruptive move the variance (↓ and ↑)</text>
<g class="fig-muted"><text x="280" y="426" font-size="13" text-anchor="middle" fill="currentColor">illustrative trait distributions</text></g>
</svg>`

/* 8 — Balancing selection: sickle-cell fitness bars (lesson's numbers) and stable vs unstable equilibria (lead, 1000×460) */
const FB = (x: number, w: number, label: string, sub: string, cls: '' | 'fig-accent' | 'fig-accent-2') => {
  const h = 230 * w
  const bar = `<rect x="${x}" y="${f(300 - h)}" width="80" height="${f(h)}" rx="6" fill="currentColor" fill-opacity="${cls ? 0.35 : 0.14}" stroke="currentColor" stroke-width="2.5"/>`
  return `${cls ? `<g class="${cls}">${bar}</g>` : bar}<text x="${x + 40}" y="${f(300 - h - 10)}" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">w = ${w}</text><text x="${x + 40}" y="326" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${label}</text><text x="${x + 40}" y="348" font-size="14" text-anchor="middle" fill="currentColor">${sub}</text>`
}
const balancingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-pg-bal')}</defs>
<text x="230" y="38" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Sickle cell where malaria is endemic</text>
<line x1="60" y1="300" x2="400" y2="300" stroke="currentColor" stroke-width="2"/>
${FB(80, 0.85, 'HbA / HbA', 'malaria deaths', '')}
${FB(190, 1, 'HbA / HbS', 'resists malaria', 'fig-accent')}
${FB(300, 0.2, 'HbS / HbS', 'sickle cell disease', 'fig-accent-2')}
<g class="fig-muted"><line x1="60" y1="70" x2="400" y2="70" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/><text x="404" y="75" font-size="13" fill="currentColor">w = 1</text></g>
<text x="230" y="386" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">the fittest genotype cannot breed true:</text>
<text x="230" y="408" font-size="15" text-anchor="middle" fill="currentColor">every AS × AS mating regenerates both homozygotes</text>
<g class="fig-muted"><text x="230" y="432" font-size="14" text-anchor="middle" fill="currentColor">fitnesses from the lesson's balanced-polymorphism check</text></g>
<g class="fig-muted"><line x1="470" y1="24" x2="470" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/></g>
<text x="740" y="38" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">where does q (HbS) end up?</text>
<text x="740" y="82" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">overdominance → STABLE interior equilibrium</text>
<line x1="540" y1="140" x2="940" y2="140" stroke="currentColor" stroke-width="2.5"/>
<text x="540" y="166" font-size="14" text-anchor="middle" fill="currentColor">q = 0</text>
<text x="940" y="166" font-size="14" text-anchor="middle" fill="currentColor">q = 1</text>
<g class="fig-accent"><defs>${ARROW('arr-pg-bal-b')}</defs>
<line x1="548" y1="124" x2="584" y2="124" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-pg-bal-b)"/>
<line x1="924" y1="124" x2="624" y2="124" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-pg-bal-b)"/>
<circle cx="600" cy="140" r="9" fill="currentColor"/>
<text x="662" y="170" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">q* ≈ 0.1–0.2</text></g>
<text x="740" y="196" font-size="14" text-anchor="middle" fill="currentColor">rare S rises inside fit AS; common S falls via SS deaths — both persist</text>
<g class="fig-muted"><text x="740" y="218" font-size="14" text-anchor="middle" fill="currentColor">frequency maps of HbS mirror malaria maps; S decays where malaria is absent</text></g>
<text x="740" y="264" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">underdominance → UNSTABLE: the rarer allele is driven out</text>
<line x1="540" y1="322" x2="940" y2="322" stroke="currentColor" stroke-width="2.5"/>
<text x="540" y="348" font-size="14" text-anchor="middle" fill="currentColor">q = 0</text>
<text x="940" y="348" font-size="14" text-anchor="middle" fill="currentColor">q = 1</text>
<g class="fig-accent-2"><defs>${ARROW('arr-pg-bal-r')}</defs>
<line x1="710" y1="306" x2="566" y2="306" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-pg-bal-r)"/>
<line x1="770" y1="306" x2="914" y2="306" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-pg-bal-r)"/>
<circle cx="740" cy="322" r="9" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="740" y="352" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">tipping point</text></g>
<text x="740" y="382" font-size="15" text-anchor="middle" fill="currentColor">the rarer allele spends more time in unfit heterozygotes,</text>
<text x="740" y="404" font-size="15" text-anchor="middle" fill="currentColor">so whichever allele starts on the favoured side is fixed</text>
<g class="fig-accent"><text x="740" y="438" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">negative frequency dependence: rare = fitter, so both alleles stay</text></g>
</svg>`

/* 9 — Why rare recessives resist selection: 100 copies of a at q = 0.01 (lead, 1000×460) */
const GRID = (x0: number, y0: number, hiddenCls: '' | 'fig-accent' | 'fig-accent-2' | 'fig-muted', exposed: number, exposedFirst: boolean) => {
  const out: string[] = []
  for (let i = 0; i < 100; i++) {
    const r = Math.floor(i / 10)
    const c = i % 10
    const x = x0 + c * 22
    const y = y0 + r * 22
    const isExposed = exposedFirst ? i < exposed : i >= 100 - exposed
    out.push(
      isExposed
        ? `<g class="fig-accent-2"><circle cx="${x}" cy="${y}" r="8" fill="currentColor"/></g>`
        : hiddenCls
          ? `<g class="${hiddenCls}"><circle cx="${x}" cy="${y}" r="8" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.8"/></g>`
          : `<circle cx="${x}" cy="${y}" r="8" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.8"/>`,
    )
  }
  return out.join('')
}
const rareSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<text x="160" y="36" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Recessive a at q = 0.01</text>
<text x="160" y="58" font-size="15" text-anchor="middle" fill="currentColor">100 copies of a, drawn as dots</text>
${GRID(61, 92, 'fig-accent', 1, false)}
<g class="fig-accent"><text x="160" y="330" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">99 copies sit in Aa carriers</text>
<text x="160" y="350" font-size="15" text-anchor="middle" fill="currentColor">healthy phenotype — invisible to selection</text></g>
<g class="fig-accent-2"><text x="160" y="380" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">1 copy is in an aa individual</text>
<text x="160" y="400" font-size="15" text-anchor="middle" fill="currentColor">the share exposed = 2q² / 2q = q = 1%</text></g>
<g class="fig-muted"><line x1="330" y1="24" x2="330" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/><line x1="670" y1="24" x2="670" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/></g>
<text x="500" y="36" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">People, not copies</text>
<text x="500" y="58" font-size="15" text-anchor="middle" fill="currentColor">in a population of 10,000</text>
<g class="fig-accent"><rect x="380" y="90" width="240" height="60" rx="10" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
<text x="500" y="116" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">≈ 200 carriers</text>
<text x="500" y="138" font-size="15" text-anchor="middle" fill="currentColor">2pq ≈ 2q = 0.02</text></g>
<g class="fig-accent-2"><rect x="494" y="176" width="12" height="12" rx="3" fill="currentColor"/>
<text x="500" y="214" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">1 affected</text>
<text x="500" y="236" font-size="15" text-anchor="middle" fill="currentColor">q² = 0.0001</text></g>
<text x="500" y="282" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">200 : 1</text>
<text x="500" y="330" font-size="15" text-anchor="middle" fill="currentColor">even a LETHAL recessive (s = 1)</text>
<text x="500" y="352" font-size="15" text-anchor="middle" fill="currentColor">removes only ~1% of a's copies</text>
<text x="500" y="374" font-size="15" text-anchor="middle" fill="currentColor">per generation:</text>
<g class="fig-accent-2"><text x="500" y="400" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">q: 0.0100 → 0.0099</text></g>
<g class="fig-muted"><text x="500" y="426" font-size="14" text-anchor="middle" fill="currentColor">“removing the affected” is futile</text></g>
<text x="840" y="36" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Contrast: a DOMINANT</text>
<text x="840" y="58" font-size="15" text-anchor="middle" fill="currentColor">deleterious allele, 100 copies</text>
${GRID(741, 92, '', 100, true)}
<g class="fig-accent-2"><text x="840" y="330" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">every copy shows a phenotype</text></g>
<text x="840" y="352" font-size="15" text-anchor="middle" fill="currentColor">heterozygotes are affected too, so</text>
<text x="840" y="374" font-size="15" text-anchor="middle" fill="currentColor">selection sees 100% of the copies</text>
<text x="840" y="404" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">selection against it is fast</text>
<g class="fig-muted"><text x="840" y="426" font-size="14" text-anchor="middle" fill="currentColor">a lethal dominant lasts one generation</text></g>
</svg>`

export const mcatPopulationGeneticsFigures: DeckFigurePlacement[] = [
  {
    at: 'The Hardy-Weinberg Principle',
    mode: 'replace-table',
    figure: {
      svg: hwSvg,
      alt:
        'Left, a unit square whose sides are split into p (frequency of A) and q (frequency of a) for egg and sperm alleles under random mating: the p-by-p corner is AA with area p squared, the two p-by-q rectangles (blue) are Aa with area pq each, and the q-by-q corner (red) is aa with area q squared; the whole square is (p + q) squared = 1. Right, the three genotype frequencies plotted against q from 0 to 1: p squared falls from 1 to 0, q squared rises from 0 to 1, and 2pq (blue) is a hump peaking at 0.5 when q = 0.5. Notes: read the recessive class first because aa = q squared is the only pure genotype; the dominant phenotype lumps p squared and 2pq so it can never be square-rooted; for a rare allele the carriers (about 2q) dwarf the affected (q squared); one generation of random mating sets these genotype proportions.',
      caption: 'Hardy–Weinberg as a picture: the square is $(p+q)^2 = 1$, and $2pq$ peaks at $0.5$ when $p = q$.',
    },
    blocks: [
      '- $p + q = 1$ → genotypes locked at $p^2 + 2pq + q^2 = 1$: **AA** $= p^2$, **Aa** $= 2pq$, **aa** $= q^2$',
      '- Start from the **recessive phenotype** ($= q^2$, one genotype); never square-root the dominant class',
      '- Heterozygosity $2pq$ peaks at $0.5$ when $p = q = 0.5$; for a rare allele carriers $\\approx 2q$',
    ],
  },
  {
    at: 'The Five Conditions',
    mode: 'lead',
    figure: {
      svg: conditionsSvg,
      alt:
        'Five panels, one per Hardy-Weinberg condition, each with a pictogram and, in red, the force that breaks it. 1, No mutation: four blue A alleles and one red a-prime created by a copying error; broken by mutation, the source of all new alleles but too slow to move p alone. 2, No selection: a row of blue AA dots that all breed and a row of red aa dots with two crossed out; broken by natural selection, which moves p the same way in every replicate. 3, Random mating: pairs of like-with-like dots; broken by inbreeding or assortative mating, which shifts genotypes (Aa down, AA and aa up) but does not change p or q, giving a heterozygote deficit and exposing rare recessives. 4, No gene flow: two populations exchanging dots with arrows, p-prime = (1 minus m)p + m p-migrant; broken by gene flow, which homogenizes populations and can import new alleles. 5, Very large N: a big mixed population from which a tiny sample of only blue dots is drawn, p jumping from 0.5 to 1 by luck; broken by genetic drift, replicates scatter both ways and end in fixation or loss. Footer: all five hold means p and q are frozen with genotypes at p squared : 2pq : q squared; breaking 1, 2, 4 or 5 changes allele frequencies across generations, which is evolution at the population level; breaking 3 alone only moves genotype proportions.',
      caption: 'Each condition names the force that breaks it; four of the five change allele frequencies, nonrandom mating alone only reshuffles genotypes.',
    },
    blocks: [
      '- No **mutation** · no **selection** · **random mating** · no **gene flow** · **very large N** (no drift)',
      '- Break one → evolution (p, q change); inbreeding is the exception: genotypes shift, allele frequencies don’t',
    ],
  },
  {
    at: 'Worked Example — From Phenotype Counts',
    mode: 'after',
    figure: {
      svg: workedSvg,
      alt:
        'Top, a chain of four boxes solving the problem: 36 of 10,000 have the recessive condition, so q squared = 0.0036; q = the square root = 0.06; p = 1 minus q = 0.94; carriers 2pq = 2(0.94)(0.06) = 0.1128, times 10,000 = 1,128 carriers (blue). A note marks the first box as the one pure class to start from. Middle, the same 10,000 people drawn to scale as one horizontal bar: AA is 88.36 percent (8,836 unaffected non-carriers), Aa is a blue band of 11.3 percent (1,128 carriers), and aa is a red sliver of 0.36 percent (36 people), the only class you can read directly — 31 carriers for every affected person. The shortcut 2q = 0.12 gives about 1,200, which lands on the right answer choice. Footer trap: if 84 percent show the dominant phenotype, the recessive phenotype is 16 percent = q squared, so q = 0.4 and p = 0.6; never take the square root of 0.84.',
      caption: 'The lesson’s problem to scale: 36 affected people are a sliver, 1,128 carriers a band — read $q^2$ from the sliver, never from the dominant class.',
    },
    blocks: [
      '- $q^2 = 36/10{,}000 = 0.0036$ → $q = 0.06$ → $p = 0.94$ → carriers $2pq = 0.1128$ → **1,128 people**',
      '- Rare-allele shortcut: $2pq \\approx 2q = 0.12$ → ~1,200; 84% dominant → $q^2 = 0.16$, never $\\sqrt{0.84}$',
    ],
  },
  {
    at: 'Genetic Drift: Chance, Not Fitness',
    mode: 'lead',
    figure: {
      svg: driftSvg,
      alt:
        'Two panels of allele-frequency trajectories over 19 generations, each with 30 replicate populations of a neutral allele starting at frequency 0.5 (illustrative random-walk simulation). Left, 20 flies per generation (2N = 40 alleles): the blue lines fan out widely in both directions; many hit frequency 1 (fixation) or 0 (loss), marked with red dots, and the grey end-of-run histogram at generation 19 is U-shaped, with most replicates at the two extremes. Right, 500 flies per generation (2N = 1,000): every line stays close to 0.5 and the histogram is a single central bar. Footer: direction is random, step size shrinks with N, 0 and 1 are absorbing states, and the probability of eventual fixation equals the starting frequency, so about half of the small replicates fix the allele and half lose it.',
      caption: 'Drift is sampling error: 30 small populations scatter to fixation or loss while 30 large ones hug 0.5 (illustrative simulation, 19 generations).',
    },
    blocks: [
      '- Random, non-adaptive steps that shrink with $N$: small populations scatter both ways, large ones barely move',
      '- 0 and 1 are **absorbing**; P(fixation) = current frequency; heterozygosity ↓ within, divergence ↑ between',
    ],
  },
  {
    at: 'Two Named Drift Scenarios',
    mode: 'lead',
    figure: {
      svg: bottleneckSvg,
      alt:
        'Top row, bottleneck: a large population circle with blue, red and grey allele dots; an arrow labelled crash leads into a narrow waist shape holding about 20 surviving dots chosen by luck (blue and grey only); an arrow labelled rebound leads to a huge population again that is almost all blue — the red allele is gone for good. Example text: northern elephant seals were hunted to about 20, number over 100,000 today, and still show almost no allelic variation; numbers recover but lost alleles do not. Bottom row, founder effect: the same mixed source population stays unchanged; a small dashed group of a few emigrants leaves (red over-represented by chance, a subset of the source’s variation) and after generations the descendant population is mostly red — the rare allele is common. Example: the Old Order Amish, about 200 founders, with Ellis-van Creveld syndrome far above the general population. Both are drift, not fitness: a small random sample sets the new gene pool; the difference is survivors versus emigrants.',
      caption: 'Both are drift — a small random sample becomes the gene pool; a bottleneck keeps the survivors, a founder effect keeps the emigrants.',
    },
    blocks: [
      '- **Bottleneck:** random survivors of a crash (elephant seals: ~20 → >100,000, still almost no variation)',
      '- **Founder effect:** a small emigrant sample (Amish: ~200 founders → Ellis-van Creveld); luck, not fitness',
    ],
  },
  {
    at: 'Gene Flow (Migration)',
    mode: 'lead',
    figure: {
      svg: geneFlowSvg,
      alt:
        'Left, two population circles exchanging individuals through arrows labelled m: a resident population that is mostly blue dots (allele frequency low, here 0.1) and a neighbouring population that is mostly red dots (frequency high, here 0.9); a fraction m of the next generation’s breeders are migrants. Below, the formula p-prime = (1 minus m) times p-resident + m times p-migrant: one generation at rate m moves p toward the donor’s value, and from the receiver’s side a migrant allele looks like a mutation. Right, a graph of allele frequency over 20 generations with two-way flow: the blue resident curve rises from 0.1 and the red neighbour curve falls from 0.9 and they converge toward 0.5 (illustrative, m = 0.1 each way). Gene flow homogenizes populations, opposing the divergence that drift and local selection create.',
      caption: 'Migration pulls two populations’ allele frequencies together: $p^{\\prime} = (1-m)\\,p_{\\text{resident}} + m\\,p_{\\text{migrant}}$ (curves illustrative).',
    },
    blocks: [
      '- Migrants are a fraction $m$ of breeders: $p^{\\prime} = (1-m)\\,p_{\\text{res}} + m\\,p_{\\text{mig}}$',
      '- **Homogenizes** populations (opposes drift, local selection); imports new alleles like a mutation would',
    ],
  },
  {
    at: 'Three Modes of Selection',
    mode: 'replace-table',
    figure: {
      svg: modesSvg,
      alt:
        'Three panels, each showing a trait distribution before selection (grey dashed bell curve) and after (blue filled curve), with red arrows showing which phenotypes selection acts against. Directional: pressure against the low extreme; the after-curve is shifted to the right — the mean shifts and the variance usually decreases; one extreme favoured. Stabilizing: pressure against both tails; the after-curve is taller and narrower around the same centre — mean unchanged, variance decreases; the intermediate is favoured. Disruptive: pressure against the middle; the after-curve is bimodal with two humps at the extremes — mean unchanged, variance increases; both extremes favoured. Summary: directional moves the mean; stabilizing and disruptive move the variance, down and up respectively. Illustrative distributions.',
      caption: 'Before (dashed) and after (blue): directional moves the mean, stabilizing narrows the spread, disruptive splits it (illustrative).',
    },
    blocks: [
      '- **Directional:** one extreme favoured → mean shifts, variance usually ↓',
      '- **Stabilizing:** intermediate favoured → mean same, variance ↓',
      '- **Disruptive:** both extremes favoured → mean same, variance ↑ (bimodal)',
    ],
  },
  {
    at: 'Balancing Selection: Keeping Both Alleles',
    mode: 'lead',
    figure: {
      svg: balancingSvg,
      alt:
        'Left, three fitness bars for sickle cell where malaria is endemic, using the lesson’s numbers: HbA/HbA w = 0.85 (malaria deaths), HbA/HbS w = 1 (blue, resists severe malaria), HbS/HbS w = 0.2 (red, sickle cell disease). The fittest genotype cannot breed true: every AS by AS mating regenerates both homozygotes. Right, top: overdominance gives a stable interior equilibrium, drawn as a q axis from 0 to 1 with blue arrows from both ends pointing inward to a filled dot at q-star of about 0.1 to 0.2 — rare S rises because it sits mostly in fit AS heterozygotes, common S falls through SS deaths, so both alleles persist; HbS frequency maps mirror malaria maps and S decays where malaria is absent. Right, bottom: underdominance is unstable, drawn as a q axis with an open circle tipping point and red arrows pointing away from it toward 0 and 1 — the rarer allele spends more time in unfit heterozygotes and whichever allele starts on the favoured side is fixed. Footer: negative frequency-dependent selection is also protective, since rare types are fitter and q is pushed back inward.',
      caption: 'Overdominance holds both alleles at a stable interior equilibrium; underdominance tips to fixation. Sickle-cell fitnesses are the lesson’s.',
    },
    blocks: [
      '- **Heterozygote advantage** ($w_{AS} = 1 > w_{AA} = 0.85 > w_{SS} = 0.2$): stable polymorphism, S ≈ 0.1–0.2',
      '- **Underdominance** is unstable (rarer allele lost); **negative frequency dependence** favours rare types',
    ],
  },
  {
    at: 'Why Rare Recessives Resist Selection',
    mode: 'lead',
    figure: {
      svg: rareSvg,
      alt:
        'Left, a 10-by-10 grid of 100 dots representing 100 copies of a recessive allele a at q = 0.01: 99 are blue outlined dots sitting in Aa carriers with a healthy phenotype, invisible to selection, and a single red filled dot is the copy in an aa individual — the share exposed is 2q squared over 2q = q = 1 percent. Middle, people rather than copies in a population of 10,000: a large blue box of about 200 carriers (2pq is about 2q = 0.02) above a tiny red square for 1 affected person (q squared = 0.0001), a ratio of 200 to 1. Even a lethal recessive (s = 1) removes only about 1 percent of the allele’s copies per generation: q goes from 0.0100 to 0.0099, so removing the affected is futile. Right, the contrast: 100 copies of a dominant deleterious allele drawn as a grid of 100 red dots — every copy shows a phenotype because heterozygotes are affected too, selection sees 100 percent of the copies, and selection against it is fast; a lethal dominant lasts one generation.',
      caption: 'At $q = 0.01$ only 1 of every 100 copies of a is in an aa individual; the other 99 hide in healthy carriers, so even a lethal barely dents $q$.',
    },
    blocks: [
      '- Selection sees a recessive only in **aa**: at $q = 0.01$, $q^2 = 0.0001$ exposed vs $2q = 0.02$ hidden',
      '- Share of copies exposed $= q$ (1%): a lethal moves $q$ 0.0100 → 0.0099; a **dominant** allele is purged fast',
    ],
  },
]
