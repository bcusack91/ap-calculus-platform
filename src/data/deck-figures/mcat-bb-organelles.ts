import type { DeckFigurePlacement } from './index'

/**
 * Cell Structure & Organelles (MCAT B/B) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept: a cell as a map of
 * labelled shapes, centrifuge tubes as rounded rectangles with pellets, three
 * filament cartoons, a decision tree of boxes and arrows, numbered steps across
 * a membrane line, a Golgi as stacked lozenges, a mitochondrion as nested
 * outlines, a nucleus as two concentric rings. No textbook, prep-company or AAMC
 * figure was copied. Molecules are circles or boxes, never structural formulas;
 * the only numbers drawn are the ones the lesson states (g-forces, filament
 * diameters, the ~40 kDa pore limit, pH values).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-org-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 13) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 6}" font-size="${r + 4}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`

const f = (v: number) => +v.toFixed(1)

/** A rounded, lightly filled box with a bold label centred in it. */
const BOX = (x: number, y: number, w: number, h: number, label: string, fs = 19, rx = 12) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>` +
  `<text x="${x + w / 2}" y="${y + h / 2 + fs * 0.35}" font-size="${fs}" font-weight="700" text-anchor="middle" fill="currentColor">${label}</text>`

/** Small dots (ribosomes) along a line from (x0,y0) to (x1,y1). */
const DOTS = (x0: number, y0: number, x1: number, y1: number, n: number, r = 3.5) => {
  let s = ''
  for (let i = 0; i <= n; i++) {
    const t = i / n
    s += `<circle cx="${f(x0 + (x1 - x0) * t)}" cy="${f(y0 + (y1 - y0) * t)}" r="${r}" fill="currentColor"/>`
  }
  return s
}

/* 1 — The eukaryotic cell as a schematic map, membranes counted (lead, 1000×460) */
const cellMapSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<rect x="210" y="26" width="660" height="408" rx="150" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="3"/>
<g class="fig-muted"><text x="24" y="52" font-size="18" fill="currentColor">plasma membrane</text><line x1="160" y1="48" x2="252" y2="52" stroke="currentColor" stroke-width="1.5"/></g>
<g class="fig-accent">
<ellipse cx="470" cy="222" rx="118" ry="96" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<ellipse cx="470" cy="222" rx="106" ry="84" fill="none" stroke="currentColor" stroke-width="2.5"/>
<rect x="464" y="122" width="12" height="16" rx="2" class="fig-bg"/><rect x="464" y="306" width="12" height="16" rx="2" class="fig-bg"/>
<rect x="346" y="216" width="16" height="12" rx="2" class="fig-bg"/>
<circle cx="498" cy="240" r="26" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
<text x="470" y="190" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Nucleus</text>
<text x="470" y="213" font-size="17" text-anchor="middle" fill="currentColor">2 membranes · pores</text>
<text x="498" y="246" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">nucleolus</text>
<text x="498" y="285" font-size="15" text-anchor="middle" fill="currentColor">no membrane</text>
</g>
<path d="M588 182 C 650 172, 660 212, 598 224 C 660 238, 666 276, 596 282" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M588 198 C 636 192, 642 216, 598 226 C 642 240, 646 264, 596 270" fill="none" stroke="currentColor" stroke-width="2.5"/>
${DOTS(610, 172, 654, 178, 4)}${DOTS(616, 234, 656, 242, 4)}${DOTS(610, 283, 650, 290, 4)}
<text x="690" y="184" font-size="20" font-weight="700" fill="currentColor">Rough ER</text>
<text x="690" y="206" font-size="15" fill="currentColor">bound ribosomes</text>
<text x="690" y="226" font-size="15" fill="currentColor">1 membrane · secreted,</text>
<text x="690" y="246" font-size="15" fill="currentColor">membrane, lysosomal</text>
<text x="690" y="266" font-size="15" fill="currentColor">proteins · N-glycans</text>
<path d="M330 180 C 280 160, 290 120, 250 132 C 220 142, 220 180, 262 188 C 292 196, 276 224, 326 210" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="196" y="150" font-size="20" font-weight="700" text-anchor="end" fill="currentColor">Smooth ER</text>
<text x="196" y="172" font-size="15" text-anchor="end" fill="currentColor">lipids, steroids, P450,</text>
<text x="196" y="192" font-size="15" text-anchor="end" fill="currentColor">Ca²⁺ store · 1 membrane</text>
<line x1="202" y1="156" x2="232" y2="162" stroke="currentColor" stroke-width="1.5"/>
<g class="fig-accent-2">
<path d="M622 338 q 60 -14 120 0" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
<path d="M618 356 q 62 -14 124 0" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
<path d="M614 374 q 64 -14 128 0" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
<path d="M610 392 q 66 -14 132 0" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
<text x="760" y="336" font-size="15" fill="currentColor">cis — receives</text>
<text x="760" y="364" font-size="20" font-weight="700" fill="currentColor">Golgi</text>
<text x="760" y="392" font-size="15" fill="currentColor">trans — ships</text>
<text x="680" y="416" font-size="15" text-anchor="middle" fill="currentColor">M6P tag · O-glycans</text>
<circle cx="530" cy="352" r="20" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>
<text x="530" y="392" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Lysosome</text>
<text x="530" y="410" font-size="15" text-anchor="middle" fill="currentColor">pH 4.5–5</text>
</g>
<ellipse cx="312" cy="340" rx="72" ry="36" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="3"/>
<path d="M252 340 C 262 318, 288 318, 294 340 C 302 362, 324 362, 330 340 C 338 318, 362 318, 372 340" fill="none" stroke="currentColor" stroke-width="2.5"/>
<line x1="252" y1="340" x2="372" y2="340" stroke="currentColor" stroke-width="2"/>
<text x="312" y="397" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Mitochondrion</text>
<text x="312" y="418" font-size="15" text-anchor="middle" fill="currentColor">2 membranes · own DNA</text>
<circle cx="300" cy="80" r="22" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="3"/>
<text x="300" y="86" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">catalase</text>
<text x="334" y="64" font-size="18" font-weight="700" fill="currentColor">Peroxisome</text>
<text x="334" y="84" font-size="15" fill="currentColor">1 membrane · VLCFA · H₂O₂</text>
<g class="fig-muted">
<line x1="640" y1="64" x2="840" y2="124" stroke="currentColor" stroke-width="2"/><line x1="600" y1="52" x2="760" y2="156" stroke="currentColor" stroke-width="2"/>
<line x1="790" y1="58" x2="730" y2="148" stroke="currentColor" stroke-width="2"/>
<text x="720" y="46" font-size="16" text-anchor="middle" fill="currentColor">cytoskeleton (no membrane)</text>
</g>
${DOTS(234, 252, 262, 276, 2, 4)}${DOTS(680, 108, 708, 114, 2, 4)}
<text x="200" y="270" font-size="15" text-anchor="end" fill="currentColor">free ribosomes → cytosol</text>
<text x="500" y="453" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">double: nucleus, mitochondria · single: ER, Golgi, lysosome, peroxisome · none: ribosome, nucleolus, centriole</text>
</svg>`

/* 2 — Differential centrifugation: four spins, four pellets (replace-table, 560×440) */
const TUBE = (x: number, pelletH: number, pelletLabel: string[], speed: string, g: string) => {
  const top = 70
  const bot = 250
  const w = 64
  return (
    `<path d="M${x} ${top} L${x} ${bot - 32} A 32 32 0 0 0 ${x + w} ${bot - 32} L${x + w} ${top}" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>` +
    `<line x1="${x - 6}" y1="${top}" x2="${x + w + 6}" y2="${top}" stroke="currentColor" stroke-width="3"/>` +
    `<g class="fig-accent"><path d="M${x + 1} ${bot - 32 - pelletH} L${x + 1} ${bot - 32} A 31 31 0 0 0 ${x + w - 1} ${bot - 32} L${x + w - 1} ${bot - 32 - pelletH} Z" fill="currentColor" fill-opacity="0.55"/></g>` +
    `<text x="${x + w / 2}" y="${36}" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">${speed}</text>` +
    `<text x="${x + w / 2}" y="${56}" font-size="15" text-anchor="middle" fill="currentColor">${g}</text>` +
    pelletLabel.map((l, i) => `<text x="${x + w / 2}" y="${282 + i * 19}" font-size="15" text-anchor="middle" fill="currentColor">${l}</text>`).join('')
  )
}
const fractionationSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-org-frac')}</defs>
${TUBE(30, 34, ['nuclei,', 'whole cells'], 'low', '~1,000 g')}
${TUBE(170, 26, ['mitochondria,', 'lysosomes,', 'peroxisomes'], 'medium', '10–20,000 g')}
${TUBE(310, 18, ['microsomes', '(ER bits),', 'vesicles'], 'high', '~100,000 g')}
${TUBE(450, 10, ['ribosomes,', 'complexes'], 'very high', 'long spin')}
<g class="fig-muted">
<line x1="104" y1="140" x2="160" y2="140" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-org-frac)"/>
<line x1="244" y1="140" x2="300" y2="140" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-org-frac)"/>
<line x1="384" y1="140" x2="440" y2="140" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-org-frac)"/>
<text x="132" y="130" font-size="13" text-anchor="middle" fill="currentColor">supernatant</text>
<text x="272" y="130" font-size="13" text-anchor="middle" fill="currentColor">supernatant</text>
<text x="412" y="130" font-size="13" text-anchor="middle" fill="currentColor">supernatant</text>
</g>
<g class="fig-accent"><text x="280" y="350" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">pellet = biggest / densest things left — spin faster each round</text></g>
<g class="fig-accent-2">
<text x="280" y="384" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">medium pellet is a MIX → density gradient + marker enzymes</text>
<text x="280" y="408" font-size="15" text-anchor="middle" fill="currentColor">catalase = peroxisome · acid phosphatase = lysosome · SDH = mitochondria</text>
</g>
</svg>`

/* 3 — The cytoskeleton: three filaments, three jobs (replace-table, 560×440) */
const cytoskeletonSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<line x1="190" y1="30" x2="190" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
<line x1="375" y1="30" x2="375" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
</g>
<text x="95" y="30" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Microfilaments</text>
<text x="280" y="30" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Intermediate</text>
<text x="465" y="30" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Microtubules</text>
<g class="fig-accent">
<path d="M30 92 C 50 72, 70 112, 90 92 S 130 72, 150 92" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
<path d="M30 92 C 50 112, 70 72, 90 92 S 130 112, 150 92" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
<text x="160" y="97" font-size="15" font-weight="700" fill="currentColor">+</text>
<text x="18" y="97" font-size="15" font-weight="700" fill="currentColor">−</text>
</g>
<text x="95" y="130" font-size="15" text-anchor="middle" fill="currentColor">~7 nm · actin (polar, ATP)</text>
<g class="fig-accent">
<path d="M212 80 l 136 0 M212 92 l 136 0 M212 104 l 136 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<path d="M212 80 C 240 92, 260 92, 280 104 M280 80 C 300 92, 320 92, 348 104 M212 104 C 240 92, 260 92, 280 80 M280 104 C 300 92, 320 92, 348 80" fill="none" stroke="currentColor" stroke-width="2" stroke-opacity="0.7"/>
</g>
<text x="280" y="130" font-size="15" text-anchor="middle" fill="currentColor">~10 nm · keratin, vimentin,</text>
<text x="280" y="148" font-size="15" text-anchor="middle" fill="currentColor">lamins, desmin (nonpolar)</text>
<g class="fig-accent">
<rect x="398" y="72" width="134" height="40" rx="6" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="3"/>
<line x1="398" y1="92" x2="532" y2="92" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 4"/>
<text x="540" y="97" font-size="15" font-weight="700" fill="currentColor">+</text>
<text x="386" y="97" font-size="15" font-weight="700" fill="currentColor">−</text>
</g>
<text x="465" y="130" font-size="15" text-anchor="middle" fill="currentColor">~25 nm · α/β-tubulin</text>
<text x="465" y="148" font-size="15" text-anchor="middle" fill="currentColor">dimers (polar, GTP)</text>
<text x="95" y="150" font-size="15" text-anchor="middle" fill="currentColor">two twisted strands</text>
<text x="95" y="186" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">contractile ring, microvilli</text>
<text x="95" y="205" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">cell crawling, muscle</text>
<text x="280" y="186" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">tensile strength,</text>
<text x="280" y="205" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">lamina, desmosomes</text>
<text x="465" y="186" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">vesicle highways, spindle</text>
<text x="465" y="205" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">cilia / flagella, centrioles</text>
<g class="fig-accent-2">
<text x="95" y="244" font-size="15" text-anchor="middle" fill="currentColor">motor: myosin</text>
<text x="280" y="244" font-size="15" text-anchor="middle" fill="currentColor">no motors — a rope</text>
<text x="465" y="244" font-size="15" text-anchor="middle" fill="currentColor">kinesin → (+) out</text>
<text x="465" y="263" font-size="15" text-anchor="middle" fill="currentColor">dynein → (−) in, cilia</text>
</g>
<g class="fig-muted">
<text x="95" y="282" font-size="14" text-anchor="middle" fill="currentColor">cytochalasin, phalloidin</text>
<text x="280" y="282" font-size="14" text-anchor="middle" fill="currentColor">keratin = epithelial tumor</text>
<text x="465" y="300" font-size="14" text-anchor="middle" fill="currentColor">colchicine, taxol</text>
<text x="465" y="282" font-size="14" text-anchor="middle" fill="currentColor">dynamic instability</text>
</g>
<text x="280" y="340" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Cilium: 9+2 axoneme, dynein arms · basal body 9×3</text>
<g class="fig-accent">
<circle cx="90" cy="392" r="30" fill="none" stroke="currentColor" stroke-width="1.5"/>
<circle cx="90" cy="392" r="5" fill="currentColor"/><circle cx="90" cy="392" r="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="90" cy="362" r="5" fill="currentColor"/><circle cx="109" cy="369" r="5" fill="currentColor"/><circle cx="120" cy="387" r="5" fill="currentColor"/><circle cx="116" cy="408" r="5" fill="currentColor"/><circle cx="100" cy="420" r="5" fill="currentColor"/><circle cx="80" cy="420" r="5" fill="currentColor"/><circle cx="64" cy="408" r="5" fill="currentColor"/><circle cx="60" cy="387" r="5" fill="currentColor"/><circle cx="71" cy="369" r="5" fill="currentColor"/>
</g>
<text x="140" y="378" font-size="15" fill="currentColor">9 doublets + 2 central</text>
<g class="fig-accent-2"><text x="140" y="400" font-size="15" font-weight="700" fill="currentColor">Kartagener: dynein arm defect</text></g>
<text x="140" y="420" font-size="14" fill="currentColor">sinusitis · infertility · situs inversus</text>
</svg>`

/* 4 — Every protein carries a zip code: the targeting decision tree (lead, 1000×460) */
const zipCodeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-org-zip')}</defs>
${BOX(30, 190, 190, 80, '', 19)}
<text x="125" y="222" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Translation starts</text>
<text x="125" y="246" font-size="17" text-anchor="middle" fill="currentColor">on a FREE ribosome</text>
<line x1="220" y1="230" x2="286" y2="230" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-zip)"/>
<g class="fig-accent">
<defs>${ARROW('arr-org-zip-b')}</defs>
<rect x="290" y="60" width="190" height="70" rx="12" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="385" y="88" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">N-terminal signal</text>
<text x="385" y="112" font-size="17" text-anchor="middle" fill="currentColor">sequence (hydrophobic)</text>
<line x1="262" y1="222" x2="372" y2="134" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-zip-b)"/>
<line x1="480" y1="95" x2="528" y2="95" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-zip-b)"/>
<rect x="530" y="60" width="140" height="70" rx="12" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="600" y="88" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">ER lumen</text>
<text x="600" y="112" font-size="17" text-anchor="middle" fill="currentColor">CO-translational</text>
<line x1="670" y1="95" x2="718" y2="95" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-zip-b)"/>
<rect x="720" y="60" width="80" height="70" rx="12" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="760" y="101" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Golgi</text>
<line x1="800" y1="80" x2="838" y2="52" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-org-zip-b)"/>
<line x1="800" y1="95" x2="838" y2="95" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-org-zip-b)"/>
<line x1="800" y1="110" x2="838" y2="138" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-org-zip-b)"/>
<text x="846" y="50" font-size="16" fill="currentColor">secreted</text>
<text x="846" y="100" font-size="16" fill="currentColor">membrane</text>
<text x="846" y="146" font-size="16" fill="currentColor">lysosome</text>
</g>
<g class="fig-accent-2">
<text x="800" y="178" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">M6P sugar tag → lysosome</text>
<text x="800" y="198" font-size="15" text-anchor="middle" fill="currentColor">(added in the Golgi, not a sequence)</text>
</g>
${BOX(290, 196, 230, 68, '', 19)}
<text x="405" y="224" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">No signal</text>
<text x="405" y="248" font-size="16" text-anchor="middle" fill="currentColor">stays in the CYTOSOL (default)</text>
<line x1="262" y1="238" x2="372" y2="326" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-zip)"/>
<rect x="302" y="330" width="200" height="106" rx="12" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="402" y="356" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">finished protein</text>
<text x="402" y="378" font-size="16" text-anchor="middle" fill="currentColor">POST-translational: its</text>
<text x="402" y="400" font-size="16" text-anchor="middle" fill="currentColor">own sequence says NLS ·</text>
<text x="402" y="422" font-size="16" text-anchor="middle" fill="currentColor">presequence · tripeptide</text>
<line x1="502" y1="360" x2="580" y2="320" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-zip)"/>
<line x1="502" y1="384" x2="580" y2="384" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-zip)"/>
<line x1="502" y1="408" x2="580" y2="440" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-zip)"/>
<text x="590" y="296" font-size="19" font-weight="700" fill="currentColor">NLS (basic) → Nucleus</text>
<text x="590" y="318" font-size="15" fill="currentColor">FOLDED · pores + importins · Ran-GTP sets direction</text>
<text x="590" y="372" font-size="19" font-weight="700" fill="currentColor">Presequence → Mitochondrial matrix</text>
<text x="590" y="394" font-size="15" fill="currentColor">amphipathic · UNFOLDED · TOM/TIM · chaperones</text>
<text x="590" y="432" font-size="19" font-weight="700" fill="currentColor">C-terminal tripeptide → Peroxisome</text>
<text x="590" y="454" font-size="15" fill="currentColor">post-translational, folded proteins allowed</text>
</svg>`

/* 5 — The SRP cycle: five numbered steps across the ER membrane (lead, 1000×460) */
const RIBO = (x: number, y: number) =>
  `<ellipse cx="${x}" cy="${y}" rx="34" ry="22" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/><ellipse cx="${x}" cy="${y - 28}" rx="24" ry="14" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>`
const srpSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-org-srp')}</defs>
<g class="fig-muted">
<text x="30" y="60" font-size="20" font-weight="700" fill="currentColor">CYTOSOL</text>
<text x="30" y="400" font-size="20" font-weight="700" fill="currentColor">ER LUMEN</text>
<text x="200" y="400" font-size="17" fill="currentColor">oxidizing · chaperones · N-glycosylation</text>
</g>
<rect x="30" y="286" width="940" height="26" rx="6" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>
<rect x="500" y="286" width="90" height="26" class="fig-bg"/>
${RIBO(130, 160)}${RIBO(330, 160)}
<path d="M138 182 q 0 40 -20 60" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<g class="fig-accent-2">
<path d="M118 242 q -10 20 -24 30" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
<text x="92" y="262" font-size="16" font-weight="700" text-anchor="end" fill="currentColor">signal</text>
<text x="92" y="280" font-size="16" text-anchor="end" fill="currentColor">sequence</text>
<path d="M322 182 q 0 40 -14 60" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<path d="M308 242 q -8 20 -20 30" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-org-srp-b')}</defs>
<ellipse cx="276" cy="262" rx="22" ry="14" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2.5"/>
<text x="276" y="268" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">SRP</text>
<rect x="476" y="272" width="22" height="54" rx="6" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2.5"/>
<rect x="592" y="272" width="22" height="54" rx="6" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2.5"/>
<text x="545" y="262" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">translocon</text>
<rect x="440" y="300" width="30" height="40" rx="6" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2.5"/>
<text x="455" y="362" font-size="15" text-anchor="middle" fill="currentColor">SRP</text>
<text x="455" y="380" font-size="15" text-anchor="middle" fill="currentColor">receptor</text>
<line x1="298" y1="268" x2="436" y2="300" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5" marker-end="url(#arr-org-srp-b)"/>
</g>
${RIBO(545, 200)}
<path d="M545 222 L545 290 Q 545 330, 580 360 L 640 380" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<g class="fig-accent-2"><path d="M520 318 q 0 22 16 38" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></g>
<g class="fig-accent-2">
<defs>${ARROW('arr-org-srp-r')}</defs>
<line x1="700" y1="334" x2="572" y2="340" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-org-srp-r)"/>
<text x="706" y="334" font-size="16" font-weight="700" fill="currentColor">signal peptidase</text>
</g>
<path d="M700 380 C 740 350, 790 420, 820 376 C 836 352, 870 350, 900 374" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
${DOTS(738, 384, 758, 384, 1, 4)}
<text x="800" y="420" font-size="16" text-anchor="middle" fill="currentColor">folds · disulfides · N-glycan on Asn</text>
<g class="fig-muted"><text x="800" y="442" font-size="15" text-anchor="middle" fill="currentColor">misfolded → ERAD (proteasome) · overload → UPR</text></g>
<g class="fig-accent">
<rect x="846" y="266" width="22" height="66" rx="6" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2.5"/>
<text x="857" y="250" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">stop-transfer</text>
<text x="857" y="232" font-size="15" text-anchor="middle" fill="currentColor">membrane protein:</text>
</g>
${NUM(130, 100, '1')}
<text x="152" y="106" font-size="18" font-weight="700" fill="currentColor">signal emerges</text>
${NUM(330, 100, '2')}
<text x="352" y="106" font-size="18" font-weight="700" fill="currentColor">SRP binds — translation PAUSES</text>
${NUM(545, 140, '3')}
<text x="567" y="146" font-size="18" font-weight="700" fill="currentColor">docks on SRP receptor; resumes</text>
<text x="567" y="168" font-size="16" fill="currentColor">through the translocon into the lumen</text>
${NUM(690, 304, '4', 12)}
${NUM(838, 196, '5', 12)}
<text x="858" y="202" font-size="16" fill="currentColor">exits sideways</text>
</svg>`

/* 6 — ER → Golgi → sorting at the trans-Golgi network (lead, 1000×460) */
const VES = (x: number, y: number, r = 12, dashed = false) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"${dashed ? ' stroke-dasharray="4 3"' : ''}/>`
const golgiSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-org-gol')}</defs>
<path d="M40 110 C 90 90, 110 150, 60 170 C 110 190, 110 250, 50 260" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M60 126 C 94 116, 100 148, 70 160 C 100 176, 100 226, 66 240" fill="none" stroke="currentColor" stroke-width="3"/>
${DOTS(44, 96, 86, 92, 3)}${DOTS(60, 186, 102, 196, 3)}
<text x="80" y="60" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Rough ER</text>
<g class="fig-accent">
<defs>${ARROW('arr-org-gol-b')}</defs>
${VES(190, 150, 16)}
<text x="190" y="118" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">anterograde</text>
<line x1="130" y1="150" x2="168" y2="150" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-gol-b)"/>
<line x1="212" y1="150" x2="258" y2="150" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-gol-b)"/>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-org-gol-r')}</defs>
${VES(190, 240, 14)}
<line x1="258" y1="240" x2="212" y2="240" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-gol-r)"/>
<line x1="168" y1="240" x2="124" y2="240" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-gol-r)"/>
<text x="190" y="278" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">retrograde</text>
<text x="190" y="298" font-size="15" text-anchor="middle" fill="currentColor">escaped ER residents</text>
<text x="190" y="316" font-size="15" text-anchor="middle" fill="currentColor">(C-terminal retrieval tag)</text>
</g>
<path d="M290 110 q 70 -16 140 0" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
<path d="M284 142 q 76 -16 152 0" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
<path d="M278 174 q 82 -16 164 0" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
<path d="M272 206 q 88 -16 176 0" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
<path d="M266 238 q 94 -16 188 0" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
<text x="360" y="72" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Golgi</text>
<g class="fig-muted">
<text x="472" y="104" font-size="17" fill="currentColor">cis — receives</text>
<text x="472" y="130" font-size="16" fill="currentColor">M6P put on lysosomal</text>
<text x="472" y="148" font-size="16" fill="currentColor">hydrolases here</text>
<text x="472" y="184" font-size="16" fill="currentColor">N-glycans trimmed,</text>
<text x="472" y="202" font-size="16" fill="currentColor">O-glycans added</text>
<text x="360" y="268" font-size="16" text-anchor="middle" fill="currentColor">trans — ships</text>
</g>
<text x="360" y="296" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">trans-Golgi network</text>
<text x="360" y="318" font-size="17" text-anchor="middle" fill="currentColor">= the sorting station</text>
<line x1="470" y1="316" x2="580" y2="366" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-gol)"/>
<line x1="470" y1="308" x2="580" y2="292" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-gol)"/>
<line x1="470" y1="300" x2="580" y2="212" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-gol)"/>
<g class="fig-accent-2">
${VES(620, 206, 18)}
<circle cx="620" cy="206" r="6" fill="currentColor"/>
<text x="652" y="194" font-size="19" font-weight="700" fill="currentColor">M6P cargo → endosome → lysosome</text>
<text x="652" y="216" font-size="16" fill="currentColor">acid releases it; M6P receptor recycles</text>
<text x="652" y="238" font-size="16" fill="currentColor">no M6P tag (I-cell) → secreted instead</text>
</g>
<g class="fig-accent">
${VES(620, 292, 18)}
<text x="652" y="289" font-size="19" font-weight="700" fill="currentColor">Regulated secretion</text>
<text x="652" y="311" font-size="16" fill="currentColor">granules wait for a Ca²⁺ signal</text>
${VES(620, 370, 14)}
<text x="652" y="367" font-size="19" font-weight="700" fill="currentColor">Constitutive secretion = DEFAULT</text>
<text x="652" y="389" font-size="16" fill="currentColor">everything untagged goes straight out</text>
</g>
<g class="fig-muted">
<line x1="30" y1="408" x2="970" y2="408" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
</g>
<text x="500" y="432" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">a lesion strands cargo ONE station upstream: block ER→Golgi → cargo piles up in the ER with ER-type glycans</text>
<text x="500" y="454" font-size="16" text-anchor="middle" fill="currentColor">lumen is topologically “outside” — a luminal domain ends up extracellular, glycans and disulfides mark it</text>
</svg>`

/* 7 — The mitochondrion as four compartments (replace-table, 560×440) */
const mitoSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-org-mito')}</defs>
<rect x="40" y="60" width="480" height="240" rx="120" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent">
<path d="M66 180 C 70 128, 110 102, 150 102 L 150 200 C 150 236, 190 236, 190 200 L 190 102 L 240 102 L 240 210 C 240 246, 280 246, 280 210 L 280 102 L 330 102 L 330 200 C 330 236, 370 236, 370 200 L 370 102 L 410 102 C 460 102, 496 134, 496 180 C 496 232, 440 266, 380 266 L 180 266 C 120 266, 66 232, 66 180 Z" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
</g>
<g class="fig-muted">
<circle cx="110" cy="60" r="5" class="fig-bg" stroke="currentColor" stroke-width="2"/><circle cx="300" cy="60" r="5" class="fig-bg" stroke="currentColor" stroke-width="2"/><circle cx="420" cy="300" r="5" class="fig-bg" stroke="currentColor" stroke-width="2"/>
</g>
<text x="120" y="40" font-size="16" font-weight="700" fill="currentColor">Outer membrane</text>
<text x="256" y="40" font-size="15" fill="currentColor">porins: anything &lt; ~5 kDa passes</text>
<g class="fig-accent">
<text x="30" y="332" font-size="16" font-weight="700" fill="currentColor">Inner membrane</text>
<text x="170" y="332" font-size="15" fill="currentColor">ETC + ATP synthase on cristae · proton-TIGHT</text>
</g>
<g class="fig-accent-2">
<text x="215" y="90" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">intermembrane space</text>
<text x="215" y="74" font-size="14" text-anchor="middle" fill="currentColor">H⁺ high · cytochrome c</text>
<circle cx="120" cy="84" r="5" fill="currentColor"/><circle cx="310" cy="84" r="5" fill="currentColor"/>
<text x="146" y="128" font-size="13" font-weight="700" text-anchor="end" fill="currentColor">H⁺</text>
<text x="226" y="128" font-size="13" font-weight="700" text-anchor="end" fill="currentColor">H⁺</text>
<text x="316" y="128" font-size="13" font-weight="700" text-anchor="end" fill="currentColor">H⁺</text>
<defs>${ARROW('arr-org-mito-r')}</defs>
<line x1="170" y1="190" x2="170" y2="130" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-org-mito-r)"/>
<line x1="350" y1="190" x2="350" y2="130" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-org-mito-r)"/>
<text x="170" y="212" font-size="12" text-anchor="middle" fill="currentColor">ETC pumps</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-org-mito-b')}</defs>
<line x1="260" y1="130" x2="260" y2="200" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-mito-b)"/>
<circle cx="260" cy="212" r="10" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<text x="260" y="246" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">ATP synthase</text>
<text x="260" y="260" font-size="12" text-anchor="middle" fill="currentColor">only easy way back</text>
</g>
<text x="440" y="190" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Matrix</text>
<text x="440" y="210" font-size="13" text-anchor="middle" fill="currentColor">TCA · β-oxidation</text>
<text x="436" y="226" font-size="13" text-anchor="middle" fill="currentColor">mtDNA · ribosomes</text>
<path d="M420 244 c 8 -10 22 -10 30 0 c 8 10 22 10 30 0" fill="none" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">
<text x="280" y="364" font-size="14" text-anchor="middle" fill="currentColor">crosses only by carrier: ADP/ATP translocase · pyruvate · carnitine · NADH shuttles</text>
</g>
<g class="fig-accent-2">
<text x="280" y="396" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">uncoupler (DNP, UCP1 in brown fat): H⁺ leaks back → heat, no ATP</text>
<text x="280" y="418" font-size="15" text-anchor="middle" fill="currentColor">O₂ use continues (vs cyanide: ETC stops, O₂ use stops)</text>
</g>
</svg>`

/* 8 — Lysosomes: three routes in, one acidic destination (lead, 1000×460) */
const lysosomeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-org-lys')}</defs>
<text x="150" y="48" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Endocytosis</text>
<text x="150" y="72" font-size="17" text-anchor="middle" fill="currentColor">extracellular material</text>
<path d="M60 110 L120 110 C 136 110, 134 150, 150 150 C 166 150, 164 110, 180 110 L 240 110" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="150" cy="200" r="22" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<circle cx="144" cy="196" r="3" fill="currentColor"/><circle cx="156" cy="204" r="3" fill="currentColor"/>
<text x="120" y="206" font-size="16" text-anchor="end" fill="currentColor">endosome</text>
<text x="500" y="48" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Phagocytosis</text>
<text x="500" y="72" font-size="17" text-anchor="middle" fill="currentColor">particles, bacteria</text>
<path d="M400 128 L436 128 C 456 128, 452 94, 470 90 C 490 84, 510 84, 530 90 C 548 94, 544 128, 564 128 L 600 128" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent-2"><ellipse cx="500" cy="106" rx="22" ry="9" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<ellipse cx="500" cy="200" rx="18" ry="8" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/></g>
<circle cx="500" cy="200" r="28" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="538" y="206" font-size="16" fill="currentColor">phagosome</text>
<text x="850" y="48" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Autophagy</text>
<text x="850" y="72" font-size="17" text-anchor="middle" fill="currentColor">worn organelles — self-eating</text>
<ellipse cx="850" cy="150" rx="46" ry="26" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<path d="M814 150 C 822 134, 838 134, 844 150 C 850 166, 866 166, 872 150 C 878 134, 886 134, 886 150" fill="none" stroke="currentColor" stroke-width="2"/>
<path d="M786 128 C 760 150, 770 196, 820 206" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<path d="M786 128 C 764 150, 772 190, 818 200" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-opacity="0.5"/>
<path d="M914 128 C 940 150, 930 196, 880 206" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<path d="M914 128 C 936 150, 928 190, 882 200" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-opacity="0.5"/>
<text x="850" y="244" font-size="16" text-anchor="middle" fill="currentColor">double-membrane autophagosome</text>
<g class="fig-muted"><text x="850" y="266" font-size="15" text-anchor="middle" fill="currentColor">starvation → mTOR off → autophagy ON</text></g>
<line x1="166" y1="222" x2="298" y2="342" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-lys)"/>
<line x1="480" y1="228" x2="362" y2="334" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-lys)"/>
<line x1="740" y1="278" x2="378" y2="354" stroke="currentColor" stroke-width="3" marker-end="url(#arr-org-lys)"/>
<g class="fig-accent-2">
<circle cx="330" cy="366" r="44" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="3"/>
<text x="330" y="362" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">LYSOSOME</text>
<text x="330" y="384" font-size="16" text-anchor="middle" fill="currentColor">pH 4.5–5</text>
<text x="330" y="432" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">V-type H⁺ ATPase keeps it acidic</text>
<text x="330" y="452" font-size="15" text-anchor="middle" fill="currentColor">hydrolases inactive if they leak to pH 7.2</text>
</g>
<g class="fig-accent">
<text x="600" y="346" font-size="18" font-weight="700" fill="currentColor">Storage disease logic</text>
<text x="600" y="368" font-size="16" fill="currentColor">missing hydrolase → ITS substrate piles up</text>
<text x="600" y="390" font-size="16" fill="currentColor">Tay-Sachs: hexosaminidase A → GM2 (neurons)</text>
<text x="600" y="412" font-size="16" fill="currentColor">Gaucher: glucocerebrosidase → macrophages</text>
<text x="600" y="434" font-size="16" fill="currentColor">Pompe: acid α-glucosidase → glycogen IN lysosomes</text>
<text x="600" y="454" font-size="16" fill="currentColor">I-cell: no M6P → ALL hydrolases missing (trafficking)</text>
</g>
</svg>`

/* 9 — The nucleus: envelope, pores, lamina, nucleolus, traffic rules (lead, 1000×460) */
const nucleusSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-org-nuc')}</defs>
<ellipse cx="330" cy="236" rx="200" ry="170" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="3"/>
<ellipse cx="330" cy="236" rx="184" ry="154" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent"><ellipse cx="330" cy="236" rx="172" ry="142" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 5"/></g>
<rect x="498" y="156" width="30" height="24" rx="3" class="fig-bg"/>
<rect x="498" y="276" width="30" height="24" rx="3" class="fig-bg"/>
<rect x="318" y="60" width="24" height="26" rx="3" class="fig-bg"/>
<rect x="318" y="384" width="24" height="26" rx="3" class="fig-bg"/>
<rect x="128" y="200" width="30" height="24" rx="3" class="fig-bg"/>
<g class="fig-accent">
<rect x="500" y="158" width="26" height="20" rx="5" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
<rect x="500" y="278" width="26" height="20" rx="5" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
<rect x="320" y="62" width="20" height="22" rx="5" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
<rect x="320" y="386" width="20" height="22" rx="5" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
<rect x="130" y="202" width="26" height="20" rx="5" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
<text x="372" y="52" font-size="15" font-weight="700" fill="currentColor">nuclear lamina (lamin IFs)</text>
<line x1="374" y1="58" x2="356" y2="92" stroke="currentColor" stroke-width="1.5"/>
</g>
<path d="M136 150 C 100 130, 90 170, 60 150 C 30 130, 40 100, 70 90 M 60 150 C 40 180, 80 200, 90 230" fill="none" stroke="currentColor" stroke-width="2.5"/>
${DOTS(66, 86, 110, 94, 3)}${DOTS(140, 118, 160, 106, 1)}${DOTS(400, 420, 450, 410, 3)}
<text x="30" y="52" font-size="18" font-weight="700" fill="currentColor">outer membrane continues</text>
<text x="30" y="72" font-size="16" fill="currentColor">as the rough ER</text>
<path d="M230 150 C 260 130, 290 170, 330 140 C 370 110, 400 160, 430 150" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
<text x="330" y="182" font-size="15" text-anchor="middle" fill="currentColor">chromatin</text>
<text x="330" y="214" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Ran-GTP HIGH</text>
<circle cx="270" cy="286" r="40" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<text x="270" y="283" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">nucleolus</text>
<text x="270" y="300" font-size="12" text-anchor="middle" fill="currentColor">rRNA · Pol I</text>
<text x="340" y="262" font-size="15" fill="currentColor">splicing before</text>
<text x="340" y="282" font-size="15" fill="currentColor">export — introns</text>
<text x="340" y="302" font-size="15" fill="currentColor">never meet a</text>
<text x="340" y="322" font-size="15" fill="currentColor">ribosome</text>
<g class="fig-accent"><text x="300" y="432" font-size="14" text-anchor="middle" fill="currentColor">CDK phosphorylates lamins → envelope dissolves (prometaphase)</text></g>
<g class="fig-muted">
<text x="700" y="60" font-size="18" font-weight="700" fill="currentColor">Nuclear pore traffic rules</text>
<text x="820" y="236" font-size="17" text-anchor="middle" fill="currentColor">CYTOSOL · Ran-GDP</text>
</g>
<line x1="640" y1="168" x2="536" y2="168" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 6" marker-end="url(#arr-org-nuc)"/>
<line x1="536" y1="150" x2="640" y2="150" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 6" marker-end="url(#arr-org-nuc)"/>
<text x="652" y="152" font-size="18" font-weight="700" fill="currentColor">&lt; ~40 kDa: diffuses both ways</text>
<text x="652" y="174" font-size="16" fill="currentColor">equilibrates — can never concentrate</text>
<g class="fig-accent">
<defs>${ARROW('arr-org-nuc-b')}</defs>
<line x1="660" y1="288" x2="536" y2="288" stroke="currentColor" stroke-width="4" marker-end="url(#arr-org-nuc-b)"/>
<circle cx="690" cy="288" r="14" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
<text x="690" y="293" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">NLS</text>
<text x="716" y="282" font-size="18" font-weight="700" fill="currentColor">big + NLS → importin → IN</text>
<text x="716" y="304" font-size="16" fill="currentColor">accumulates against its gradient</text>
<text x="716" y="324" font-size="16" fill="currentColor">energy = the Ran-GTP gradient</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-org-nuc-r')}</defs>
<line x1="536" y1="372" x2="660" y2="372" stroke="currentColor" stroke-width="4" marker-end="url(#arr-org-nuc-r)"/>
<text x="680" y="378" font-size="18" font-weight="700" fill="currentColor">NES → exportin → OUT</text>
<text x="680" y="400" font-size="16" fill="currentColor">mature mRNA, assembled subunits</text>
</g>
<text x="780" y="440" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">lock Ran-GDP → import stalls; small proteins still diffuse</text>
</svg>`

export const mcatOrganellesFigures: DeckFigurePlacement[] = [
  {
    at: 'The Inventory (Membranes Count!)',
    mode: 'lead',
    figure: {
      svg: cellMapSvg,
      alt:
        'A schematic eukaryotic cell drawn as a large rounded outline (plasma membrane). In the middle a blue nucleus with two concentric rings (2 membranes) broken by pores, holding a filled nucleolus labelled no membrane. To its right, folded rough ER sheets studded with ribosome dots: 1 membrane, secreted, membrane and lysosomal proteins, N-glycosylation begins. Upper left, a tubular smooth ER: lipids, steroids, P450, Ca²⁺ store, 1 membrane. Lower right in red, four stacked curved Golgi cisternae from cis (receives from ER) to trans (ships), M6P tag and O-glycans, with a round lysosome at pH 4.5–5. Lower left a mitochondrion: an oval with an inner folded line, 2 membranes, own DNA. Top, a small peroxisome circle labelled catalase: 1 membrane, VLCFA, H₂O₂. Grey straight lines are the cytoskeleton (no membrane); loose dots are free ribosomes making cytosolic proteins. Footer: double = nucleus and mitochondria; single = ER, Golgi, lysosome, peroxisome; none = ribosome, nucleolus, centriole.',
      caption: 'The compartment map: count the membranes — two, one or none — and the organelle census tells you what the cell does.',
    },
    blocks: [
      '- **Double:** nucleus, mitochondria · **single:** ER, Golgi, lysosome, peroxisome · **none:** ribosome',
      '- Census = job: plasma cell → rough ER; steroid gland → smooth ER (steroids leave by diffusion, no vesicles)',
    ],
  },
  {
    at: 'Cell Fractionation — Taking the Cell Apart',
    mode: 'replace-table',
    figure: {
      svg: fractionationSvg,
      alt:
        'Four centrifuge tubes in a row, each spun faster than the last, with a blue pellet at the bottom that gets smaller from left to right and an arrow carrying the supernatant to the next tube. Low speed, about 1,000 g: nuclei and whole cells pellet. Medium, 10–20,000 g: mitochondria, lysosomes and peroxisomes. High, about 100,000 g: microsomes (ER fragments) and vesicles. Very high, long spin: ribosomes and large complexes. Notes: the pellet is the biggest or densest material left, so spin faster each round; the medium pellet is a mixture, so a density gradient and marker enzymes finish the job — catalase marks peroxisomes, acid phosphatase lysosomes, succinate dehydrogenase mitochondria.',
      caption: 'Differential centrifugation: the heaviest things pellet first; marker enzymes name what each pellet holds.',
    },
    blocks: [
      '- Homogenize gently, then spin at **increasing speed** — bigger / denser things pellet first',
      '- ~1,000 g nuclei → 10–20,000 g mitochondria + lysosomes + peroxisomes → ~100,000 g microsomes → ribosomes',
      '- The medium pellet is a **mix**: density gradient separates it; **marker enzymes** name it',
      '- Catalase = peroxisome · acid phosphatase = lysosome · succinate dehydrogenase = mitochondria',
    ],
  },
  {
    at: 'The Cytoskeleton — Three Systems, Three Jobs',
    mode: 'replace-table',
    figure: {
      svg: cytoskeletonSvg,
      alt:
        'Three columns. Microfilaments: two twisted blue strands with a minus and a plus end, about 7 nm, actin (polar, ATP); jobs contractile ring, microvilli, cell crawling, muscle; motor myosin; drugs cytochalasin and phalloidin. Intermediate filaments: a rope of braided blue strands, about 10 nm, keratin, vimentin, lamins, desmin (nonpolar); jobs tensile strength, nuclear lamina, desmosomes; no motors; keratin marks an epithelial tumor. Microtubules: a hollow blue tube with minus and plus ends, about 25 nm, alpha/beta-tubulin dimers (polar, GTP); jobs vesicle highways, spindle, cilia and flagella, centrioles; motors kinesin toward plus (outward) and dynein toward minus (inward, also cilia); dynamic instability; colchicine and taxol. Bottom: a cross-section of a cilium — nine outer doublets around two central microtubules (9+2), basal body 9×3 — with the Kartagener note: dynein arm defect gives sinusitis, infertility and situs inversus.',
      caption: 'Three filament systems by diameter, subunit, job and motor — and the 9+2 axoneme the dynein-arm defect of Kartagener syndrome breaks.',
    },
    blocks: [
      '- **Actin** 7 nm (polar, ATP): contraction, crawling, microvilli — motor **myosin**',
      '- **Intermediate** 10 nm (nonpolar): tensile strength, nuclear lamina, desmosomes — cell-type markers',
      '- **Microtubules** 25 nm (polar, GTP): highways, spindle, 9+2 cilia — **kinesin** (+, out) / **dynein** (−, in)',
      '- **Kartagener:** dynein arm defect → sinusitis, infertility, situs inversus',
    ],
  },
  {
    at: 'Every Protein Carries a Zip Code',
    mode: 'lead',
    figure: {
      svg: zipCodeSvg,
      alt:
        'A decision tree. Translation starts on a free ribosome. Upper blue branch: an N-terminal hydrophobic signal sequence sends the growing chain co-translationally into the ER lumen, then to the Golgi, which ships to three exits — secreted, membrane, or lysosome; a red note says the mannose-6-phosphate sugar tag added in the Golgi (not a sequence) is the lysosome address. Middle: no signal means the protein stays in the cytosol by default. Lower branch: a finished cytosolic protein is sorted post-translationally by its own sequence — a basic NLS sends it folded through nuclear pores with importins and the Ran-GTP gradient; an amphipathic presequence sends it unfolded through TOM/TIM into the mitochondrial matrix with chaperones; a C-terminal tripeptide sends it to the peroxisome, folded proteins allowed.',
      caption: 'Where a protein ends up is written in its own sequence: one co-translational route (the ER) and several post-translational ones.',
    },
    blocks: [
      '- **Signal sequence → ER** is the only *co*-translational route; everything else is sorted after synthesis',
      '- **NLS** → nucleus (folded, Ran-GTP) · **presequence** → mitochondria (unfolded) · **M6P** → lysosome',
    ],
  },
  {
    at: 'The SRP Cycle — Getting Into the ER',
    mode: 'lead',
    figure: {
      svg: srpSvg,
      alt:
        'Five numbered steps along an ER membrane with the cytosol above and the ER lumen below. 1: a ribosome begins translating and a red hydrophobic signal sequence emerges. 2: the blue signal recognition particle binds it and translation pauses. 3: the complex docks on the SRP receptor at the ER; translation resumes through the translocon channel into the lumen. 4: signal peptidase clips off the signal sequence; the protein folds in the lumen, forms disulfides and gets an N-glycan on asparagine; misfolded proteins go back to the proteasome (ERAD) and overload triggers the unfolded protein response. 5: for a membrane protein a stop-transfer sequence exits the translocon sideways and stays in the bilayer.',
      caption: 'The SRP cycle: emerge, pause, dock, thread, clip — and a stop-transfer sequence turns a secreted protein into a membrane protein.',
    },
    blocks: [
      '- Signal emerges → **SRP binds, translation pauses** → docks on SRP receptor → through the **translocon**',
      '- Lumen: signal clipped, **disulfides**, **N-glycans**; failures → ERAD / UPR; **stop-transfer** = membrane',
    ],
  },
  {
    at: 'ER → Golgi → Sorting',
    mode: 'lead',
    figure: {
      svg: golgiSvg,
      alt:
        'Left: rough ER sheets with ribosomes. Blue anterograde vesicles carry cargo from the ER to the cis face of the Golgi; red retrograde vesicles return escaped ER residents (recognized by a C-terminal retrieval tag). The Golgi is five stacked curved cisternae from cis (receives; M6P is put on lysosomal hydrolases here) through N-glycan trimming and O-glycan addition to trans (ships). Below it the trans-Golgi network is labelled the sorting station, with three arrows: red — M6P cargo to the endosome and lysosome, where acid releases it and the receptor recycles (with no tag, as in I-cell disease, hydrolases are secreted instead); blue — regulated secretion, cargo condensing into granules that wait for Ca²⁺; blue — constitutive secretion, the default for everything untagged. Footer: a lesion strands cargo one station upstream (blocking ER-to-Golgi transport piles cargo up in the ER with ER-type glycans); the lumen is topologically outside, so a luminal domain ends up extracellular and carries the glycans and disulfides.',
      caption: 'The secretory pathway: forward in vesicles, back for escapees, and three exits from the trans-Golgi network — lysosome (M6P), regulated granule, or default secretion.',
    },
    blocks: [
      '- ER → Golgi **anterograde**; **retrograde** vesicles retrieve escaped ER residents; cis receives, trans ships',
      '- Trans-Golgi network: **M6P** → lysosome · granules await Ca$^{2+}$ · **default = constitutive secretion**',
    ],
  },
  {
    at: 'Mitochondria — Architecture Maps to Function',
    mode: 'replace-table',
    figure: {
      svg: mitoSvg,
      alt:
        'A mitochondrion drawn as an outer rounded outline with open circles for porins (anything under about 5 kDa passes) and a blue inner membrane folded into three deep cristae. The red intermembrane space holds cytochrome c dots and a high H⁺ concentration; red arrows show the ETC pumping H⁺ out of the matrix, and a blue arrow shows H⁺ returning only through ATP synthase, the only easy way back. The matrix lists TCA cycle, beta-oxidation, mtDNA (a small circle) and 70S ribosomes. Notes: the inner membrane is proton-tight and everything crosses by carriers (ADP/ATP translocase, pyruvate carrier, carnitine shuttle, NADH shuttles); an uncoupler such as DNP or UCP1 in brown fat lets H⁺ leak back, making heat and no ATP while O₂ use continues, unlike cyanide, which stops the ETC and O₂ use.',
      caption: 'Four compartments, one point: the inner membrane is proton-tight, so the only way back for H⁺ is ATP synthase — chemiosmosis.',
    },
    blocks: [
      '- **Outer membrane:** porins, under ~5 kDa passes freely · **intermembrane space:** H$^+$ high, cytochrome c',
      '- **Inner membrane:** ETC + ATP synthase on cristae; proton-tight — everything crosses by transporter',
      '- **Matrix:** TCA, β-oxidation, mtDNA, 70S-like ribosomes',
      '- **Uncouplers** (DNP, UCP1) leak H$^+$ back → heat, no ATP, O$_2$ use continues',
    ],
  },
  {
    at: 'Lysosomes — Degradation Central',
    mode: 'lead',
    figure: {
      svg: lysosomeSvg,
      alt:
        'Three routes converge on a red lysosome at pH 4.5–5. Endocytosis: a membrane pocket pinches off extracellular material into an endosome. Phagocytosis: the membrane wraps a red particle (bacterium) into a phagosome. Autophagy: a double membrane wraps a worn mitochondrion into an autophagosome; starvation switches mTOR off and autophagy on. All three fuse with the lysosome, where a V-type H⁺ ATPase keeps the lumen acidic and acid hydrolases work — they are inactive if they leak into the pH 7.2 cytosol. Blue panel, storage-disease logic: a missing hydrolase makes its substrate pile up — Tay-Sachs (hexosaminidase A, GM2 in neurons), Gaucher (glucocerebrosidase, macrophages), Pompe (acid alpha-glucosidase, glycogen inside lysosomes), I-cell (no M6P, all hydrolases missing — a trafficking defect). Under the lysosome: a V-type H⁺ ATPase keeps it acidic; hydrolases are inactive if they leak to pH 7.2 (and cytosolic enzymes cannot reach what is sealed inside, which is why Pompe glycogen persists).',
      caption: 'Three ways in — endocytosis, phagocytosis, autophagy — one acidic destination, and the storage-disease rule: lose the hydrolase, keep its substrate.',
    },
    blocks: [
      '- Three ways in: **endocytosis**, **phagocytosis**, **autophagy** (double membrane; starvation → mTOR off)',
      '- **Storage disease** = the missing hydrolase’s substrate piles up: Tay-Sachs GM2 · Gaucher · Pompe glycogen',
    ],
  },
  {
    at: 'The Nucleus — Gatekeeping the Genome',
    mode: 'lead',
    figure: {
      svg: nucleusSvg,
      alt:
        'A nucleus drawn as two concentric rings (the envelope) interrupted by blue nuclear pore complexes, with a dashed blue nuclear lamina of lamin intermediate filaments just inside; the outer membrane continues as rough ER sheets with ribosomes at the upper left. Inside: a filled nucleolus (rRNA, Pol I), wavy chromatin, Ran-GTP high, and the note that splicing happens before export so introns never meet a ribosome. CDK phosphorylation of lamins dissolves the envelope in prometaphase. To the right, the traffic rules across one pore: proteins under about 40 kDa diffuse both ways (dashed arrows) and only equilibrate; a large protein with an NLS is carried in by importin (thick blue arrow), accumulating against its gradient on the energy of the Ran-GTP gradient; NES cargo leaves with exportin (thick red arrow) — mature mRNA and assembled ribosomal subunits. Footer: locking Ran as Ran-GDP stalls import while small proteins still diffuse.',
      caption: 'The nucleus: a double envelope with gated pores — small things equilibrate, big things need a signal, a receptor and the Ran-GTP gradient.',
    },
    blocks: [
      '- Envelope = 2 membranes + **pores**; **lamina** of lamin IFs — CDK phosphorylation dissolves it in mitosis',
      '- **Under ~40 kDa diffuses**; bigger needs **NLS + importin** in, **NES + exportin** out — **Ran-GTP** directs',
    ],
  },
]
