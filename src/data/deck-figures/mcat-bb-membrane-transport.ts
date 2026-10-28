import type { DeckFigurePlacement } from './index'

/**
 * Membrane Transport (MCAT B/B) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept (a schematic bilayer of
 * circles and lines, boxes-and-arrows transporters, a flux-vs-[S] graph, three
 * cells in three baths, a numbered endocytic cycle …) — no textbook or
 * prep-company figure was copied. Curves that are not data say "illustrative"
 * in the caption; the only numbers drawn are the ones the lesson states.
 * Molecules are circles/boxes, never structural formulas.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-mt-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 13) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 6}" font-size="${r + 4}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`

const f = (v: number) => +v.toFixed(1)

/** One phospholipid: a head circle at (x, y) and two straight tails of length `len` along the unit vector (dx, dy). */
const LIPID = (x: number, y: number, dx: number, dy: number, r: number, len: number) => {
  const px = -dy * 3
  const py = dx * 3
  const sx = x + dx * r
  const sy = y + dy * r
  const ex = x + dx * (r + len)
  const ey = y + dy * (r + len)
  return (
    `<circle cx="${f(x)}" cy="${f(y)}" r="${r}" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/>` +
    `<path d="M${f(sx + px)} ${f(sy + py)} L${f(ex + px)} ${f(ey + py)} M${f(sx - px)} ${f(sy - py)} L${f(ex - px)} ${f(ey - py)}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`
  )
}

/** A horizontal bilayer strip from x0 to x1: heads on yTop and yBot, tails meeting in the middle; `gaps` are x-ranges left empty for proteins. */
const BILAYER_H = (x0: number, x1: number, yTop: number, yBot: number, gaps: [number, number][] = [], step = 24, r = 9) => {
  const len = (yBot - yTop) / 2 - r - 3
  let s = ''
  for (let x = x0; x <= x1 + 0.01; x += step) {
    if (gaps.some(([a, b]) => x > a && x < b)) continue
    s += LIPID(x, yTop, 0, 1, r, len) + LIPID(x, yBot, 0, -1, r, len)
  }
  return s
}

/** A vertical bilayer strip from y0 to y1: heads on xLeft and xRight. */
const BILAYER_V = (y0: number, y1: number, xLeft: number, xRight: number, step = 16, r = 6) => {
  const len = (xRight - xLeft) / 2 - r - 2
  let s = ''
  for (let y = y0; y <= y1 + 0.01; y += step) s += LIPID(xLeft, y, 1, 0, r, len) + LIPID(xRight, y, -1, 0, r, len)
  return s
}

/** Polyline points for y = fn(x) sampled n times on [x0, x1] (plot units → px via sx, sy). */
const CURVE = (fn: (s: number) => number, s0: number, s1: number, n: number, sx: (s: number) => number, sy: (v: number) => number) => {
  const pts: string[] = []
  for (let i = 0; i <= n; i++) {
    const s = s0 + ((s1 - s0) * i) / n
    pts.push(`${f(sx(s))},${f(sy(fn(s)))}`)
  }
  return pts.join(' ')
}

/** Deterministic scatter (so renders are reproducible): small dots in a box, kept inside / outside a circle. */
const SCATTER = (seed: number, count: number, box: [number, number, number, number], keep: (x: number, y: number) => boolean, r = 3) => {
  let state = seed
  const rand = () => {
    state = (state * 1103515245 + 12345) % 2147483648
    return state / 2147483648
  }
  const out: string[] = []
  let guard = 0
  while (out.length < count && guard++ < 2000) {
    const x = box[0] + rand() * (box[2] - box[0])
    const y = box[1] + rand() * (box[3] - box[1])
    if (keep(x, y)) out.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${r}" fill="currentColor"/>`)
  }
  return out.join('')
}

/* 1 — The fluid mosaic model as a schematic bilayer strip (lead, 1000×460) */
const fluidMosaicSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mt-fm')}</defs>
<text x="110" y="56" font-size="21" font-weight="700" fill="currentColor">Extracellular fluid</text>
<text x="110" y="444" font-size="21" font-weight="700" fill="currentColor">Cytosol</text>
<g class="fig-muted">
<text x="96" y="201" font-size="17" text-anchor="end" fill="currentColor">head</text>
<text x="96" y="248" font-size="17" text-anchor="end" fill="currentColor">tails</text>
<text x="96" y="293" font-size="17" text-anchor="end" fill="currentColor">head</text>
<defs>${ARROW('arr-mt-fm-m')}</defs>
<line x1="126" y1="154" x2="284" y2="154" stroke="currentColor" stroke-width="3" marker-start="url(#arr-mt-fm-m)" marker-end="url(#arr-mt-fm-m)"/>
<text x="205" y="136" font-size="19" text-anchor="middle" fill="currentColor">lateral diffusion — fast, common</text>
<line x1="925" y1="208" x2="925" y2="276" stroke="currentColor" stroke-width="3" marker-start="url(#arr-mt-fm-m)" marker-end="url(#arr-mt-fm-m)"/>
<text x="925" y="168" font-size="18" text-anchor="middle" fill="currentColor">flip-flop</text>
<text x="925" y="342" font-size="18" text-anchor="middle" fill="currentColor">rare; flippase</text>
</g>
${BILAYER_H(110, 902, 196, 288, [[286, 374], [548, 652], [902, 960]])}
<g class="fig-accent">
<rect x="296" y="158" width="68" height="168" rx="18" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<rect x="556" y="158" width="32" height="168" rx="12" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<rect x="612" y="158" width="32" height="168" rx="12" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<text x="330" y="354" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">integral protein</text>
<text x="330" y="376" font-size="18" text-anchor="middle" fill="currentColor">spans the bilayer (α-helices)</text>
<text x="600" y="140" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">channel protein</text>
<ellipse cx="690" cy="314" rx="38" ry="15" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<text x="690" y="364" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">peripheral protein</text>
<text x="690" y="386" font-size="18" text-anchor="middle" fill="currentColor">surface-attached, removable</text>
</g>
<g class="fig-muted"><line x1="600" y1="150" x2="600" y2="334" stroke="currentColor" stroke-width="2" stroke-dasharray="4 5"/></g>
<circle cx="600" cy="178" r="5" fill="currentColor"/><circle cx="600" cy="240" r="5" fill="currentColor"/><circle cx="600" cy="302" r="5" fill="currentColor"/>
<g class="fig-accent-2">
<rect x="189" y="206" width="10" height="38" rx="3" fill="currentColor" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
<rect x="477" y="206" width="10" height="38" rx="3" fill="currentColor" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
<rect x="789" y="240" width="10" height="38" rx="3" fill="currentColor" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
<line x1="794" y1="300" x2="794" y2="322" stroke="currentColor" stroke-width="1.5"/>
<text x="794" y="340" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">cholesterol</text>
</g>
<circle cx="737" cy="178" r="6" fill="currentColor" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
<circle cx="743" cy="163" r="6" fill="currentColor" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
<circle cx="751" cy="149" r="6" fill="currentColor" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
<text x="770" y="112" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">glycolipid / glycoprotein</text>
<text x="770" y="134" font-size="18" text-anchor="middle" fill="currentColor">sugars face OUT only</text>
</svg>`

/* 2 — What crosses a pure bilayer: four classes against a vertical membrane (replace-table, 560×440) */
const permeabilitySvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<text x="140" y="22" font-size="16" text-anchor="middle" fill="currentColor">outside</text>
<text x="430" y="22" font-size="16" text-anchor="middle" fill="currentColor">inside</text>
</g>
${BILAYER_V(36, 400, 262, 298)}
<text x="236" y="60" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">Small nonpolar</text>
<text x="236" y="81" font-size="16" text-anchor="end" fill="currentColor">O₂, CO₂, N₂, steroids</text>
<g class="fig-accent">
<defs>${ARROW('arr-mt-perm-b')}</defs>
<line x1="130" y1="102" x2="420" y2="102" stroke="currentColor" stroke-width="5" marker-end="url(#arr-mt-perm-b)"/>
<text x="324" y="72" font-size="17" font-weight="700" fill="currentColor">crosses readily</text>
</g>
<text x="236" y="148" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">Small uncharged polar</text>
<text x="236" y="169" font-size="16" text-anchor="end" fill="currentColor">H₂O, urea, ethanol</text>
<defs>${ARROW('arr-mt-perm')}</defs>
<line x1="130" y1="190" x2="420" y2="190" stroke="currentColor" stroke-width="2.5" stroke-dasharray="9 7" marker-end="url(#arr-mt-perm)"/>
<text x="324" y="152" font-size="17" font-weight="700" fill="currentColor">slowly</text>
<text x="324" y="172" font-size="16" fill="currentColor">(water: aquaporins)</text>
<text x="236" y="236" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">Large polar</text>
<text x="236" y="257" font-size="16" text-anchor="end" fill="currentColor">glucose, amino acids</text>
<line x1="130" y1="278" x2="240" y2="278" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mt-perm)"/>
<g class="fig-accent-2">
<line x1="252" y1="262" x2="252" y2="294" stroke="currentColor" stroke-width="4"/>
<text x="324" y="248" font-size="17" font-weight="700" fill="currentColor">needs a transporter</text>
</g>
<text x="236" y="324" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">Ions</text>
<text x="236" y="345" font-size="16" text-anchor="end" fill="currentColor">Na⁺, K⁺, Ca²⁺, Cl⁻, H⁺</text>
<line x1="130" y1="366" x2="240" y2="366" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mt-perm)"/>
<g class="fig-accent-2">
<line x1="252" y1="348" x2="252" y2="384" stroke="currentColor" stroke-width="6"/>
<text x="324" y="336" font-size="17" font-weight="700" fill="currentColor">needs a channel or pump</text>
<text x="280" y="430" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">charge is the strictest barrier — even H⁺ cannot cross unaided</text>
</g>
</svg>`

/* 3 — Passive transport: simple diffusion, channel, carrier (replace-table, 560×440) */
const passiveSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-mt-pas')}</defs>
<g class="fig-muted">
<text x="548" y="100" font-size="16" text-anchor="end" fill="currentColor">[S] high</text>
<text x="548" y="268" font-size="16" text-anchor="end" fill="currentColor">[S] low</text>
<line x1="185" y1="50" x2="185" y2="360" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
<line x1="372" y1="50" x2="372" y2="360" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
</g>
<text x="95" y="34" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Simple diffusion</text>
<text x="280" y="34" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Channel</text>
<text x="465" y="34" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Carrier</text>
${BILAYER_H(22, 176, 160, 216, [], 14, 5)}
${BILAYER_H(204, 358, 160, 216, [[254, 306]], 14, 5)}
${BILAYER_H(386, 540, 160, 216, [[434, 496]], 14, 5)}
${SCATTER(11, 16, [30, 70, 160, 140], () => true, 4)}
${SCATTER(12, 3, [30, 236, 160, 290], () => true, 4)}
<line x1="95" y1="118" x2="95" y2="258" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mt-pas)"/>
<g class="fig-accent">
<defs>${ARROW('arr-mt-pas-b')}</defs>
<rect x="258" y="144" width="14" height="88" rx="6" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
<rect x="288" y="144" width="14" height="88" rx="6" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
<line x1="280" y1="112" x2="280" y2="258" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mt-pas-b)"/>
<rect x="440" y="142" width="50" height="92" rx="14" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
<path d="M506 166 A 26 26 0 0 1 506 214" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mt-pas-b)"/>
<path d="M424 214 A 26 26 0 0 1 424 166" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mt-pas-b)"/>
</g>
<circle cx="465" cy="152" r="10" class="fig-bg" stroke="currentColor" stroke-width="2"/>
<circle cx="465" cy="152" r="5" fill="currentColor"/>
${SCATTER(21, 7, [214, 70, 250, 140], () => true, 3.5)}
${SCATTER(22, 7, [310, 70, 346, 140], () => true, 3.5)}
${SCATTER(23, 2, [214, 236, 346, 290], (x) => x < 268 || x > 292, 3.5)}
${SCATTER(31, 8, [396, 70, 480, 134], () => true, 5)}
${SCATTER(32, 1, [396, 240, 480, 290], () => true, 5)}
<text x="95" y="300" font-size="16" text-anchor="middle" fill="currentColor">no protein</text>
<text x="95" y="322" font-size="16" text-anchor="middle" fill="currentColor">linear, no plateau</text>
<text x="280" y="300" font-size="16" text-anchor="middle" fill="currentColor">aqueous pore; gated</text>
<text x="280" y="322" font-size="16" text-anchor="middle" fill="currentColor">very fast, no plateau</text>
<text x="465" y="300" font-size="16" text-anchor="middle" fill="currentColor">binds, then flips</text>
<text x="465" y="322" font-size="16" text-anchor="middle" fill="currentColor">saturates at Vmax</text>
<g class="fig-muted">
<text x="95" y="348" font-size="16" text-anchor="middle" fill="currentColor">O₂, CO₂, steroids</text>
<text x="280" y="348" font-size="16" text-anchor="middle" fill="currentColor">Na⁺/K⁺ channels, AQPs</text>
<text x="465" y="348" font-size="16" text-anchor="middle" fill="currentColor">GLUT (glucose)</text>
</g>
<text x="280" y="418" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">all three run DOWN the gradient — no ATP</text>
</svg>`

/* 4 — Flux against concentration: the signatures the MCAT asks you to read (replace-table, 560×440) */
const fluxSx = (s: number) => 60 + 46 * s
const fluxSy = (v: number) => 380 - 220 * v
const fluxSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-mt-flux')}</defs>
<line x1="60" y1="380" x2="548" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-mt-flux)"/>
<line x1="60" y1="380" x2="60" y2="26" stroke="currentColor" stroke-width="2" marker-end="url(#arr-mt-flux)"/>
<text x="548" y="406" font-size="16" text-anchor="end" fill="currentColor">[S] (concentration)</text>
<text x="24" y="40" font-size="16" fill="currentColor">flux</text>
<g class="fig-muted">
<line x1="60" y1="${fluxSy(1)}" x2="540" y2="${fluxSy(1)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 6"/>
<line x1="60" y1="${fluxSy(1.4)}" x2="540" y2="${fluxSy(1.4)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 6"/>
<text x="536" y="${fluxSy(1) - 6}" font-size="15" text-anchor="end" fill="currentColor">Vmax</text>
<text x="536" y="${fluxSy(1.4) - 6}" font-size="15" text-anchor="end" fill="currentColor">Vmax′</text>
</g>
<polyline points="${CURVE((s) => 0.1915 * s, 0, 7.83, 2, fluxSx, fluxSy)}" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent">
<polyline points="${CURVE((s) => s / (1.5 + s), 0, 10.4, 40, fluxSx, fluxSy)}" fill="none" stroke="currentColor" stroke-width="3.5"/>
<polyline points="${CURVE((s) => (1.4 * s) / (1.5 + s), 0, 10.4, 40, fluxSx, fluxSy)}" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="10 7"/>
<line x1="${fluxSx(1.5)}" y1="380" x2="${fluxSx(1.5)}" y2="388" stroke="currentColor" stroke-width="2.5"/>
<text x="${fluxSx(1.5)}" y="404" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">Km</text>
</g>
<g class="fig-accent-2">
<polyline points="${CURVE((s) => s / (4 + s), 0, 10.4, 40, fluxSx, fluxSy)}" fill="none" stroke="currentColor" stroke-width="3.5"/>
<line x1="${fluxSx(4)}" y1="380" x2="${fluxSx(4)}" y2="388" stroke="currentColor" stroke-width="2.5"/>
<text x="${fluxSx(4)}" y="404" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">Km′</text>
</g>
<g class="fig-muted"><rect x="246" y="290" width="298" height="84" rx="10" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.5"/></g>
<line x1="258" y1="304" x2="290" y2="304" stroke="currentColor" stroke-width="3"/>
<text x="300" y="309" font-size="16" fill="currentColor">simple diffusion — linear</text>
<g class="fig-accent">
<line x1="258" y1="324" x2="290" y2="324" stroke="currentColor" stroke-width="3.5"/>
<text x="300" y="329" font-size="16" fill="currentColor">carrier — saturates at Vmax</text>
<line x1="258" y1="344" x2="290" y2="344" stroke="currentColor" stroke-width="3" stroke-dasharray="7 5"/>
<text x="300" y="349" font-size="16" fill="currentColor">more transporters → Vmax ↑</text>
</g>
<g class="fig-accent-2">
<line x1="258" y1="364" x2="290" y2="364" stroke="currentColor" stroke-width="3.5"/>
<text x="300" y="369" font-size="16" fill="currentColor">competitive inhibitor → Km ↑</text>
</g>
</svg>`

/* 5 — Osmosis and tonicity: one cell in three baths (replace-table, 560×440) */
const crenated = (cx: number, cy: number) => {
  const n = 14
  let d = ''
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2
    const x = cx + 31 * Math.cos(a)
    const y = cy + 31 * Math.sin(a)
    if (i === 0) d += `M${f(x)} ${f(y)}`
    else {
      const am = a - Math.PI / n
      d += ` Q${f(cx + 20 * Math.cos(am))} ${f(cy + 20 * Math.sin(am))} ${f(x)} ${f(y)}`
    }
  }
  return d + ' Z'
}
const waterArrows = (cx: number, cy: number, r0: number, r1: number, id: string) => {
  let s = ''
  for (const a of [Math.PI / 4, (3 * Math.PI) / 4, (5 * Math.PI) / 4, (7 * Math.PI) / 4]) {
    s += `<line x1="${f(cx + r0 * Math.cos(a))}" y1="${f(cy + r0 * Math.sin(a))}" x2="${f(cx + r1 * Math.cos(a))}" y2="${f(cy + r1 * Math.sin(a))}" stroke="currentColor" stroke-width="3" marker-end="url(#${id})"/>`
  }
  return s
}
const dist = (x: number, y: number, cx: number, cy: number) => Math.hypot(x - cx, y - cy)
const osmosisSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<text x="95" y="42" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Hypertonic</text>
<text x="280" y="42" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Isotonic</text>
<text x="465" y="42" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Hypotonic</text>
<g class="fig-muted">
<rect x="13" y="60" width="164" height="240" rx="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>
<rect x="198" y="60" width="164" height="240" rx="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>
<rect x="383" y="60" width="164" height="240" rx="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>
${SCATTER(41, 22, [22, 70, 168, 290], (x, y) => dist(x, y, 95, 180) > 44)}
${SCATTER(42, 2, [70, 160, 120, 200], (x, y) => dist(x, y, 95, 180) < 14)}
${SCATTER(43, 11, [207, 70, 353, 290], (x, y) => dist(x, y, 280, 180) > 56)}
${SCATTER(44, 6, [240, 140, 320, 220], (x, y) => dist(x, y, 280, 180) < 34)}
${SCATTER(45, 4, [392, 70, 538, 290], (x, y) => dist(x, y, 465, 180) > 74)}
${SCATTER(46, 7, [410, 125, 520, 235], (x, y) => dist(x, y, 465, 180) < 50)}
</g>
<path d="${crenated(95, 180)}" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
<circle cx="280" cy="180" r="44" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<circle cx="465" cy="180" r="62" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5" stroke-dasharray="46 9"/>
<g class="fig-accent">
<defs>${ARROW('arr-mt-osm-b')}</defs>
${waterArrows(95, 180, 36, 62, 'arr-mt-osm-b')}
<line x1="200" y1="171" x2="234" y2="171" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mt-osm-b)"/><line x1="234" y1="189" x2="200" y2="189" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mt-osm-b)"/>
<line x1="360" y1="171" x2="326" y2="171" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mt-osm-b)"/><line x1="326" y1="189" x2="360" y2="189" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mt-osm-b)"/>
${waterArrows(465, 180, 82, 58, 'arr-mt-osm-b')}
<text x="95" y="326" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">water OUT</text>
<text x="280" y="326" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">no net flow</text>
<text x="465" y="326" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">water IN</text>
</g>
<text x="95" y="348" font-size="16" text-anchor="middle" fill="currentColor">crenation (shrivels)</text>
<text x="280" y="348" font-size="16" text-anchor="middle" fill="currentColor">normal</text>
<text x="465" y="348" font-size="16" text-anchor="middle" fill="currentColor">swelling → lysis</text>
<g class="fig-accent-2"><text x="280" y="392" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">tonicity counts IMPERMEANT solutes only (urea doesn’t count)</text></g>
<g class="fig-muted"><text x="280" y="418" font-size="16" text-anchor="middle" fill="currentColor">Π = iMRT — count particles: NaCl ≈ 2, glucose = 1</text></g>
</svg>`

/* 6 — The Na⁺/K⁺ ATPase on a membrane (lead, 1000×460) */
const ION = (x: number, y: number, label: string, r = 16) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/><text x="${x}" y="${y + 6}" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${label}</text>`
const pumpSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<text x="40" y="60" font-size="21" font-weight="700" fill="currentColor">Extracellular</text>
<text x="190" y="60" font-size="20" fill="currentColor">Na⁺ 145 mM · K⁺ 4 mM</text>
<text x="40" y="440" font-size="21" font-weight="700" fill="currentColor">Cytosol</text>
<text x="140" y="440" font-size="20" fill="currentColor">Na⁺ 12 mM · K⁺ 140 mM</text>
${BILAYER_H(40, 952, 200, 280, [[388, 612]])}
<g class="fig-accent">
<rect x="400" y="140" width="200" height="200" rx="26" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="3"/>
<text x="500" y="234" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Na⁺/K⁺</text>
<text x="500" y="258" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">ATPase</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-mt-pump-r')}</defs>
${ION(400, 400, 'Na⁺')}${ION(440, 400, 'Na⁺')}${ION(480, 400, 'Na⁺')}
<line x1="440" y1="378" x2="440" y2="112" stroke="currentColor" stroke-width="4" marker-end="url(#arr-mt-pump-r)"/>
<text x="425" y="88" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">3 Na⁺ OUT</text>
<text x="318" y="124" font-size="20" font-weight="700" text-anchor="end" fill="currentColor">ouabain / digoxin</text>
<line x1="322" y1="134" x2="392" y2="166" stroke="currentColor" stroke-width="3"/>
<line x1="386" y1="178" x2="400" y2="152" stroke="currentColor" stroke-width="4"/>
</g>
<g class="fig-muted"><text x="318" y="146" font-size="18" text-anchor="end" fill="currentColor">block from outside</text></g>
<g class="fig-accent">
<defs>${ARROW('arr-mt-pump-b')}</defs>
${ION(540, 96, 'K⁺')}${ION(580, 96, 'K⁺')}
<line x1="560" y1="118" x2="560" y2="372" stroke="currentColor" stroke-width="4" marker-end="url(#arr-mt-pump-b)"/>
<text x="580" y="406" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">2 K⁺ IN</text>
</g>
<defs>${ARROW('arr-mt-pump')}</defs>
<circle cx="600" cy="300" r="14" fill="currentColor"/><text x="600" y="306" font-size="16" font-weight="700" text-anchor="middle" class="fig-bg">P</text>
<text x="640" y="371" font-size="21" font-weight="700" fill="currentColor">ATP</text>
<line x1="690" y1="365" x2="740" y2="365" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mt-pump)"/>
<text x="750" y="371" font-size="21" font-weight="700" fill="currentColor">ADP + Pᵢ</text>
<g class="fig-muted"><text x="640" y="400" font-size="18" fill="currentColor">P-type: phosphorylated intermediate</text></g>
<text x="975" y="52" font-size="20" font-weight="700" text-anchor="end" fill="currentColor">net +1 charge OUT per ATP → electrogenic</text>
<g class="fig-muted"><text x="975" y="80" font-size="18" text-anchor="end" fill="currentColor">(K⁺ leak channels still set most of the resting potential)</text></g>
<text x="975" y="440" font-size="19" text-anchor="end" fill="currentColor">Na⁺ gradient → secondary transport, osmotic balance, Vₘ</text>
</svg>`

/* 7 — The intestinal glucose circuit across one enterocyte (lead, 1000×460) */
const enterocyteSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mt-ent')}</defs>
<g class="fig-muted">
<text x="170" y="50" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">GUT LUMEN</text>
<text x="830" y="50" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">BLOOD</text>
<text x="170" y="76" font-size="18" text-anchor="middle" fill="currentColor">apical side</text>
<text x="830" y="76" font-size="18" text-anchor="middle" fill="currentColor">basolateral side</text>
<text x="300" y="422" font-size="17" text-anchor="middle" fill="currentColor">tight junctions</text>
</g>
<rect x="300" y="60" width="400" height="340" rx="22" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="3"/>
<rect x="294" y="52" width="12" height="20" rx="3" fill="currentColor"/>
<rect x="294" y="388" width="12" height="20" rx="3" fill="currentColor"/>
<text x="500" y="92" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">enterocyte</text>
<g class="fig-accent-2">
<defs>${ARROW('arr-mt-ent-r')}</defs>
<rect x="670" y="130" width="60" height="64" rx="12" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>
<text x="726" y="124" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Na⁺/K⁺ ATPase</text>
<line x1="734" y1="150" x2="800" y2="150" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-mt-ent-r)"/>
<text x="812" y="156" font-size="19" fill="currentColor">3 Na⁺ out</text>
<text x="700" y="218" font-size="18" text-anchor="middle" fill="currentColor">ATP</text>
<line x1="190" y1="222" x2="266" y2="222" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-mt-ent-r)"/>
<text x="180" y="228" font-size="19" font-weight="700" text-anchor="end" fill="currentColor">2 Na⁺ (downhill)</text>
<path d="M336 222 C 440 170, 560 150, 664 162" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6"/>
<text x="500" y="150" font-size="19" text-anchor="middle" fill="currentColor">[Na⁺]ᵢ stays LOW</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-mt-ent-b')}</defs>
<line x1="800" y1="176" x2="734" y2="176" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-mt-ent-b)"/>
<text x="812" y="182" font-size="19" fill="currentColor">2 K⁺ in</text>
<rect x="270" y="200" width="60" height="64" rx="12" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>
<text x="300" y="188" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">SGLT1</text>
<line x1="190" y1="246" x2="266" y2="246" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-mt-ent-b)"/>
<text x="180" y="252" font-size="19" font-weight="700" text-anchor="end" fill="currentColor">glucose (UPHILL)</text>
<path d="M336 246 C 440 290, 560 300, 664 300" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mt-ent-b)"/>
<text x="500" y="262" font-size="19" text-anchor="middle" fill="currentColor">glucose builds up inside</text>
<rect x="670" y="268" width="60" height="64" rx="12" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>
<text x="700" y="354" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">GLUT2</text>
<line x1="734" y1="300" x2="800" y2="300" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-mt-ent-b)"/>
<text x="812" y="306" font-size="19" fill="currentColor">glucose (passive)</text>
</g>
<g class="fig-muted">
<defs>${ARROW('arr-mt-ent-m')}</defs>
<line x1="180" y1="380" x2="820" y2="380" stroke="currentColor" stroke-width="3" stroke-dasharray="10 8" marker-end="url(#arr-mt-ent-m)"/>
<text x="460" y="368" font-size="19" text-anchor="middle" fill="currentColor">H₂O follows the solute osmotically</text>
</g>
${NUM(636, 118, '1')}
${NUM(252, 182, '2')}
${NUM(652, 354, '3')}
${NUM(160, 380, '4')}
<text x="500" y="448" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">oral rehydration = glucose + salt: SGLT1 pulls both in, water follows (cholera)</text>
</svg>`

/* 8 — Bulk transport: four panels (replace-table, 560×440) */
const panel = (x: number, y: number, body: string) =>
  `<g transform="translate(${x} ${y})"><g class="fig-muted"><rect x="0" y="0" width="270" height="190" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/></g>${body}</g>`
const bulkSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-mt-bulk')}</defs>
${panel(
  5,
  28,
  `<text x="135" y="24" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Phagocytosis</text>
<g class="fig-muted"><text x="135" y="46" font-size="16" text-anchor="middle" fill="currentColor">large particles (bacteria)</text>
<text x="135" y="66" font-size="16" text-anchor="middle" fill="currentColor">macrophages, neutrophils</text></g>
<path d="M12 128 L60 128 C 90 128, 84 92, 106 84 C 134 74, 176 74, 204 84 C 226 92, 220 128, 250 128 L 258 128" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent-2"><ellipse cx="155" cy="102" rx="26" ry="11" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/></g>
<line x1="155" y1="122" x2="155" y2="170" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mt-bulk)"/>
<text x="172" y="166" font-size="15" font-weight="700" fill="currentColor">IN</text>`,
)}
${panel(
  285,
  28,
  `<text x="135" y="24" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Pinocytosis</text>
<g class="fig-muted"><text x="135" y="46" font-size="16" text-anchor="middle" fill="currentColor">extracellular fluid</text>
<text x="135" y="66" font-size="16" text-anchor="middle" fill="currentColor">nonspecific “cell drinking”</text></g>
<path d="M12 110 L108 110 C 122 110, 120 146, 136 146 C 152 146, 150 110, 164 110 L 258 110" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="130" cy="126" r="2.5" fill="currentColor"/><circle cx="141" cy="133" r="2.5" fill="currentColor"/><circle cx="133" cy="139" r="2.5" fill="currentColor"/>
<circle cx="136" cy="176" r="13" fill="none" stroke="currentColor" stroke-width="2"/>
<circle cx="132" cy="173" r="2.5" fill="currentColor"/><circle cx="141" cy="178" r="2.5" fill="currentColor"/><circle cx="134" cy="181" r="2.5" fill="currentColor"/>
<line x1="136" y1="150" x2="136" y2="160" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mt-bulk)"/>
<text x="158" y="182" font-size="15" font-weight="700" fill="currentColor">IN</text>`,
)}
${panel(
  5,
  226,
  `<text x="135" y="24" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Receptor-mediated endocytosis</text>
<g class="fig-muted"><text x="135" y="46" font-size="16" text-anchor="middle" fill="currentColor">ligand binds receptor (LDL)</text>
<text x="135" y="66" font-size="16" text-anchor="middle" fill="currentColor">clathrin-coated pit → vesicle</text></g>
<path d="M12 108 L90 108 C 112 108, 106 158, 136 158 C 166 158, 160 108, 182 108 L 258 108" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent"><path d="M98 126 C 104 176, 168 176, 174 126" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="5 4"/>
<text x="206" y="150" font-size="15" fill="currentColor">clathrin</text></g>
<path d="M118 144 L118 132 M111 125 L118 132 L125 125 M136 152 L136 140 M129 133 L136 140 L143 133 M154 144 L154 132 M147 125 L154 132 L161 125" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<g class="fig-accent-2"><circle cx="118" cy="117" r="5" fill="currentColor"/><circle cx="136" cy="125" r="5" fill="currentColor"/><circle cx="154" cy="117" r="5" fill="currentColor"/></g>
<line x1="136" y1="166" x2="136" y2="184" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mt-bulk)"/>
<text x="150" y="184" font-size="15" font-weight="700" fill="currentColor">IN</text>`,
)}
${panel(
  285,
  226,
  `<text x="135" y="24" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Exocytosis</text>
<g class="fig-muted"><text x="135" y="46" font-size="16" text-anchor="middle" fill="currentColor">vesicle fuses; cargo exits</text>
<text x="135" y="66" font-size="16" text-anchor="middle" fill="currentColor">constitutive or Ca²⁺-regulated</text></g>
<path d="M12 112 L116 112 C 106 128, 98 154, 136 156 C 174 154, 166 128, 156 112 L 258 112" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="128" cy="136" r="2.5" fill="currentColor"/><circle cx="142" cy="142" r="2.5" fill="currentColor"/><circle cx="134" cy="147" r="2.5" fill="currentColor"/>
<circle cx="126" cy="96" r="2.5" fill="currentColor"/><circle cx="146" cy="90" r="2.5" fill="currentColor"/><circle cx="138" cy="100" r="2.5" fill="currentColor"/>
<line x1="136" y1="106" x2="136" y2="82" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mt-bulk)"/>
<text x="152" y="104" font-size="15" font-weight="700" fill="currentColor">OUT</text>
<g class="fig-muted"><text x="135" y="182" font-size="15" text-anchor="middle" fill="currentColor">e.g. neurotransmitter release</text></g>`,
)}
<g class="fig-muted"><text x="280" y="436" font-size="16" text-anchor="middle" fill="currentColor">always ACTIVE (ATP/GTP) — cargo never crosses the bilayer</text></g>
</svg>`

/* 9 — Receptor-mediated endocytosis: the LDL cycle, numbered (lead, 1000×460) */
const RECEPTOR = (x: number, y: number) =>
  `<path d="M${x} ${y} L${x} ${y - 12} M${x - 8} ${y - 19} L${x} ${y - 12} L${x + 8} ${y - 19}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`
const ldlSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mt-ldl')}</defs>
<g class="fig-muted">
<text x="40" y="60" font-size="20" fill="currentColor">outside</text>
<text x="40" y="150" font-size="20" fill="currentColor">cytosol</text>
</g>
<path d="M40 112 L190 112 C 215 112, 205 182, 240 182 C 275 182, 265 112, 290 112 L 960 112" fill="none" stroke="currentColor" stroke-width="18" stroke-opacity="0.15"/>
<path d="M40 112 L190 112 C 215 112, 205 182, 240 182 C 275 182, 265 112, 290 112 L 960 112" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">
<defs>${ARROW('arr-mt-ldl-b')}</defs>
<path d="M198 128 C 204 206, 276 206, 282 128" fill="none" stroke="currentColor" stroke-width="3.5" stroke-dasharray="6 5"/>
<text x="240" y="236" font-size="18" text-anchor="middle" fill="currentColor">clathrin coat</text>
${RECEPTOR(222, 160)}${RECEPTOR(240, 170)}${RECEPTOR(258, 160)}
<circle cx="400" cy="218" r="40" fill="none" stroke="currentColor" stroke-width="3.5" stroke-dasharray="6 5"/>
${RECEPTOR(392, 236)}${RECEPTOR(412, 232)}
<path d="M706 236 C 790 226, 850 190, 856 130" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-mt-ldl-b)"/>
${RECEPTOR(850, 110)}${RECEPTOR(880, 110)}
<text x="845" y="270" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">receptors recycle</text>
</g>
<g class="fig-accent-2">
<circle cx="222" cy="134" r="8" fill="currentColor"/><circle cx="240" cy="144" r="8" fill="currentColor"/><circle cx="258" cy="134" r="8" fill="currentColor"/>
<circle cx="120" cy="60" r="9" fill="currentColor"/><circle cx="330" cy="54" r="9" fill="currentColor"/>
<text x="150" y="66" font-size="19" font-weight="700" fill="currentColor">LDL</text>
<circle cx="392" cy="210" r="7" fill="currentColor"/><circle cx="412" cy="206" r="7" fill="currentColor"/>
<circle cx="630" cy="252" r="7" fill="currentColor"/><circle cx="660" cy="262" r="7" fill="currentColor"/><circle cx="645" cy="282" r="7" fill="currentColor"/>
<circle cx="640" cy="330" r="6" fill="currentColor"/><circle cx="640" cy="350" r="6" fill="currentColor"/>
<circle cx="626" cy="400" r="6" fill="currentColor"/><circle cx="648" cy="392" r="6" fill="currentColor"/><circle cx="640" cy="414" r="6" fill="currentColor"/>
<path d="M214 124 a 10 10 0 0 0 -2 14 M266 124 a 10 10 0 0 1 2 14" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="50" y="340" font-size="20" font-weight="700" fill="currentColor">Familial hypercholesterolemia</text>
<text x="50" y="366" font-size="19" fill="currentColor">no receptor → no binding, no uptake</text>
<text x="50" y="390" font-size="19" fill="currentColor">bad cytoplasmic tail → binds, cannot cluster</text>
<text x="50" y="414" font-size="19" fill="currentColor">either way plasma LDL ↑ → atherosclerosis</text>
</g>
<circle cx="400" cy="218" r="28" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<ellipse cx="650" cy="262" rx="66" ry="42" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<circle cx="640" cy="404" r="36" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="640" y="452" font-size="18" text-anchor="middle" fill="currentColor">lysosome</text>
${RECEPTOR(600, 258)}${RECEPTOR(690, 250)}
<line x1="300" y1="152" x2="362" y2="196" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mt-ldl)"/>
<line x1="444" y1="232" x2="580" y2="256" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mt-ldl)"/>
<line x1="640" y1="308" x2="640" y2="364" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mt-ldl)"/>
${NUM(60, 262, '1')}
<text x="82" y="269" font-size="20" font-weight="700" fill="currentColor">LDL binds receptors</text>
<text x="82" y="293" font-size="19" fill="currentColor">clustered in a coated pit</text>
${NUM(330, 290, '2')}
<text x="352" y="297" font-size="20" font-weight="700" fill="currentColor">dynamin pinches off</text>
<text x="352" y="321" font-size="19" fill="currentColor">a coated vesicle</text>
${NUM(528, 200, '3')}
<text x="550" y="207" font-size="20" font-weight="700" fill="currentColor">coat shed → early endosome</text>
${NUM(700, 318, '4')}
<text x="722" y="325" font-size="20" font-weight="700" fill="currentColor">V-ATPase: pH ≈ 6</text>
<text x="722" y="349" font-size="19" fill="currentColor">LDL lets go of its receptor</text>
${NUM(880, 134, '5', 12)}
${NUM(708, 404, '5', 12)}
<text x="730" y="411" font-size="20" font-weight="700" fill="currentColor">LDL → lysosome:</text>
<text x="730" y="435" font-size="19" fill="currentColor">esters → free cholesterol</text>
</svg>`

export const mcatMembraneTransportFigures: DeckFigurePlacement[] = [
  {
    at: 'The Fluid Mosaic Model',
    mode: 'lead',
    figure: {
      svg: fluidMosaicSvg,
      alt:
        'A schematic phospholipid bilayer drawn as a horizontal strip: two rows of circular polar heads facing the extracellular fluid (top) and the cytosol (bottom), with fatty-acid tails meeting in the middle. Embedded in it: a blue integral protein spanning the bilayer, a channel protein with an aqueous pore and ions passing through, a peripheral protein sitting on the cytosolic surface, three short red cholesterol molecules wedged between tails, and a glycolipid whose sugar chain points out of the cell (sugars face OUT only). A double arrow along the top leaflet marks lateral diffusion (fast, common); a vertical double arrow across the leaflets marks flip-flop (rare; needs a flippase).',
      caption: 'The fluid mosaic model: a two-dimensional fluid of amphipathic lipids with proteins embedded in it or attached to its surface.',
    },
    blocks: [
      '- Amphipathic phospholipids form the bilayer; lipids and proteins diffuse **laterally** (fast) — **flip-flop** is rare and needs a flippase',
      '- Cholesterol buffers fluidity in both directions; carbohydrates face the **extracellular** side only',
    ],
  },
  {
    at: 'What Crosses a Pure Lipid Bilayer?',
    mode: 'replace-table',
    figure: {
      svg: permeabilitySvg,
      alt:
        'A vertical bilayer separates outside (left) from inside (right). Four rows of molecules try to cross: small nonpolar molecules (O₂, CO₂, N₂, steroids) pass with a thick blue arrow — cross readily; small uncharged polar molecules (water, urea, ethanol) pass with a thin dashed arrow — slowly, water mostly through aquaporins; large polar molecules (glucose, amino acids) stop at a red bar — they need a transporter; ions (Na⁺, K⁺, Ca²⁺, Cl⁻, H⁺) stop at a thicker red bar — they need a channel or pump. Footer: charge is the strictest barrier; even H⁺ cannot cross unaided.',
      caption: 'Permeability of a protein-free bilayer falls with size and, above all, with charge.',
    },
    blocks: [
      '- **Small nonpolar** (O$_2$, CO$_2$, steroids) cross readily',
      '- **Small uncharged polar** (H$_2$O, urea, ethanol) cross slowly — water mostly via aquaporins',
      '- **Large polar** (glucose, amino acids) need a transporter',
      '- **Ions** (Na$^+$, K$^+$, Ca$^{2+}$, Cl$^-$, H$^+$) need a channel or pump — **charge is the strictest barrier**',
    ],
  },
  {
    at: 'Passive Transport: Down the Gradient',
    mode: 'replace-table',
    figure: {
      svg: passiveSvg,
      alt:
        'Three membrane panels, each with many solute dots above (high concentration) and few below (low concentration). Simple diffusion: molecules cross the lipid itself with no protein — linear, never saturates (O₂, CO₂, steroids). Channel: two blue walls form an aqueous pore that ions stream through — gated, very fast, no plateau (Na⁺/K⁺ channels, aquaporins). Carrier: a blue protein with a binding pocket holding one molecule and curved arrows showing it flips conformation — binds, then flips; saturates at Vmax (GLUT). Footer: all three run down the gradient with no ATP.',
      caption: 'Three ways down the gradient: through the lipid, through a pore, or on a carrier that must bind and flip.',
    },
    blocks: [
      '- All passive transport runs **down** the electrochemical gradient ($\\Delta G < 0$) — no ATP',
      '- **Simple diffusion:** no protein; rate rises linearly with the gradient (O$_2$, CO$_2$, steroids)',
      '- **Channels:** aqueous pore, very fast, effectively non-saturable (Na$^+$/K$^+$ channels, aquaporins)',
      '- **Carriers:** bind and flip → **saturate** at $V_{max}$ (GLUT transporters)',
    ],
  },
  {
    at: 'Interpreting Flux Curves',
    mode: 'replace-table',
    figure: {
      svg: fluxSvg,
      alt:
        'Flux plotted against solute concentration. A straight line rising without limit is simple diffusion. A blue hyperbola rises and flattens at a dashed Vmax line — a carrier; its Km is marked on the concentration axis. A dashed blue hyperbola reaches a higher plateau, Vmax prime — more transporters inserted after a hormone. A red hyperbola reaches the same Vmax as the blue one but rises more slowly, with a larger Km prime — a competitive inhibitor. A legend names the four curves.',
      caption: 'Flux against [S]: linear means diffusion, a plateau means a carrier, a higher plateau means more carriers, a right-shift with the same plateau means a competitive inhibitor (illustrative curves).',
    },
    blocks: [
      '- **Linear, no plateau** → simple diffusion; **hyperbola with a $V_{max}$** → carrier-mediated',
      '- $V_{max}$ ↑ after a hormone → more transporters inserted (insulin → GLUT4; ADH → aquaporin-2)',
      '- $K_m$ ↑ with $V_{max}$ unchanged → competitive inhibitor at the binding site',
      '- Flux abolished when ATP synthesis is poisoned → active transport (or transporter recycling) is involved',
    ],
  },
  {
    at: 'Osmosis and Tonicity',
    mode: 'replace-table',
    figure: {
      svg: osmosisSvg,
      alt:
        'Three panels, each a bath with solute dots around one animal cell. Hypertonic: many solute dots outside, blue arrows point out of the cell, which is shrivelled with a scalloped outline — water out, crenation. Isotonic: similar dot density inside and out, arrows point both ways — no net flow, normal cell. Hypotonic: few dots outside, arrows point into a large cell drawn with a broken outline — water in, swelling and lysis. Footer: tonicity counts impermeant solutes only (urea does not count); osmotic pressure Π = iMRT counts particles, NaCl about 2, glucose 1.',
      caption: 'One cell in three baths: water follows the impermeant solute.',
    },
    blocks: [
      '- Water moves toward the side with more **impermeant** solute; slowly through the bilayer, fast through aquaporins',
      '- **Hypertonic:** water out → crenation · **Isotonic:** no net flow · **Hypotonic:** water in → swelling, lysis',
      '- Tonicity ≠ osmolarity: an iso-osmotic **urea** solution is functionally hypotonic — cells still swell',
      '- $\\Pi = iMRT$ — count particles (NaCl ≈ 2, glucose = 1)',
    ],
  },
  {
    at: 'Primary Active Transport',
    mode: 'lead',
    figure: {
      svg: pumpSvg,
      alt:
        'A horizontal bilayer with the extracellular fluid above (Na⁺ 145 mM, K⁺ 4 mM) and the cytosol below (Na⁺ 12 mM, K⁺ 140 mM). A large blue Na⁺/K⁺ ATPase spans the membrane. A red arrow carries three Na⁺ from the cytosol up and out of the cell; a blue arrow carries two K⁺ from outside down into the cell. On the cytosolic face ATP becomes ADP + Pi and a P badge marks the phosphorylated intermediate (P-type pump). Ouabain and digoxin block the pump from the outside. Notes: net +1 charge out per ATP, so the pump is electrogenic (K⁺ leak channels still set most of the resting potential); the Na⁺ gradient it builds powers secondary transport, osmotic balance and the membrane potential.',
      caption: 'The Na⁺/K⁺ ATPase: three sodium out, two potassium in, one ATP — the pump that builds the gradient everything else spends.',
    },
    blocks: [
      '- **3 Na$^+$ out, 2 K$^+$ in per ATP** — net +1 charge out → **electrogenic** (the K$^+$ leak still sets most of $V_m$)',
      '- Blocked from outside by **ouabain / digoxin**; its Na$^+$ gradient powers secondary transport, osmotic balance and the resting potential',
    ],
  },
  {
    at: 'The Intestinal Glucose Circuit',
    mode: 'lead',
    figure: {
      svg: enterocyteSvg,
      alt:
        'One enterocyte drawn as a box between the gut lumen (left, apical side) and the blood (right, basolateral side), with tight junctions at its corners. Step 1: a red Na⁺/K⁺ ATPase on the basolateral membrane pumps 3 Na⁺ out and 2 K⁺ in using ATP, so intracellular Na⁺ stays low. Step 2: blue SGLT1 on the apical membrane brings 2 Na⁺ in downhill together with glucose uphill, so glucose builds up inside. Step 3: blue GLUT2 on the basolateral membrane lets glucose leave passively into the blood. Step 4: a dashed arrow across the cell shows water following the solute osmotically. Footer: oral rehydration solution contains glucose and salt because SGLT1 pulls both in and water follows (cholera).',
      caption: 'The intestinal glucose circuit: the basolateral pump pays, the apical symporter spends, GLUT2 lets glucose out, water follows.',
    },
    blocks: [
      '- The basolateral pump keeps [Na$^+$]$_{in}$ low → apical **SGLT1** rides 2 Na$^+$ downhill to drag glucose **uphill**; **GLUT2** lets it out to the blood',
      '- Water follows the absorbed solute — why **oral rehydration** needs glucose AND salt',
    ],
  },
  {
    at: 'Bulk Transport',
    mode: 'replace-table',
    figure: {
      svg: bulkSvg,
      alt:
        'Four panels. Phagocytosis: the membrane throws two arms up around a large red particle and an arrow points in — large particles such as bacteria, by macrophages and neutrophils. Pinocytosis: a small pocket of membrane with fluid dots pinches off as a tiny vesicle, arrow in — extracellular fluid, nonspecific. Receptor-mediated endocytosis: a pit lined with Y-shaped receptors holding red ligand dots, backed by a dashed blue clathrin coat, arrow in — ligand binds receptor (LDL), clathrin-coated pit to vesicle. Exocytosis: a vesicle fused with the membrane opens outward and releases dots, arrow out — constitutive or Ca²⁺-regulated, e.g. neurotransmitter release. Footer: all four are active (ATP/GTP) and the cargo never crosses the bilayer itself.',
      caption: 'Bulk transport: three ways in, one way out, all of them active.',
    },
    blocks: [
      '- Vesicular transport is always **active** (ATP/GTP); cargo never crosses the bilayer directly',
      '- **Phagocytosis** — large particles (macrophages, neutrophils) · **Pinocytosis** — fluid, nonspecific',
      '- **Receptor-mediated endocytosis** — ligand → receptor → clathrin-coated pit → vesicle (specific)',
      '- **Exocytosis** — vesicle fuses with the membrane; constitutive or Ca$^{2+}$-regulated (NT release)',
    ],
  },
  {
    at: 'Receptor-Mediated Endocytosis',
    mode: 'lead',
    figure: {
      svg: ldlSvg,
      alt:
        'The LDL cycle in five numbered steps on a membrane with the outside above and cytosol below. 1: red LDL particles bind Y-shaped receptors clustered in a pit backed by a dashed blue clathrin coat. 2: dynamin pinches the pit off as a coated vesicle. 3: the coat is shed and the vesicle fuses with an early endosome. 4: a V-type ATPase acidifies the endosome to about pH 6, so LDL lets go of its receptor. 5: the receptors recycle to the surface (arrow back up to the membrane) while LDL goes to the lysosome, where cholesteryl esters become free cholesterol. A red note on familial hypercholesterolemia: no receptor means no binding and no uptake; a defective cytoplasmic tail means the receptor binds LDL but cannot cluster in pits; either way plasma LDL rises and atherosclerosis comes early.',
      caption: 'Receptor-mediated endocytosis of LDL: bind, pinch, fuse, acidify, recycle — and the two ways familial hypercholesterolemia breaks it.',
    },
    blocks: [
      '- Coated pit → **dynamin** scission → coat shed → early endosome → **acidification** releases LDL → receptors recycle, LDL to the lysosome',
      '- **Familial hypercholesterolemia:** no receptor (no binding) OR a defective tail (binds but cannot cluster) → plasma LDL rises',
    ],
  },
]
