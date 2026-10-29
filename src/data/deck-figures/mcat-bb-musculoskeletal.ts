import type { DeckFigurePlacement } from './index'

/**
 * Musculoskeletal System (MCAT B/B) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (an osteon as rings,
 * a remodeling bone surface, the PTH loop, a sarcomere relaxed vs contracted,
 * the cross-bridge cycle as a loop, a box NMJ, the E-C coupling chain, a
 * force–time trace, a three-column cell grid) — no textbook, prep-company or
 * AAMC figure was copied. Curves are the textbook SHAPE and say "illustrative"
 * in the caption; no numbers are plotted that the lesson does not state.
 * Anatomy is schematic only: cells are rounded boxes, spindles and ellipses.
 *
 * Colour roles: fig-accent (blue) = thin filaments / Ca²⁺ / formation;
 * fig-accent-2 (red) = thick filaments / action potentials / resorption.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-msk-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 13) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 6}" font-size="${r + 4}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`

/** Text helper. `anchor` and `weight` are the SVG attribute VALUES (strings). */
const TXT = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'middle', weight: '400' | '700' = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" fill="currentColor">${text}</text>`

/** Rounded box outline with optional light fill. */
const BOX = (x: number, y: number, w: number, h: number, sw = 2.5, op = 0, dash = '') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="currentColor" fill-opacity="${op}" stroke="currentColor" stroke-width="${sw}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`

/* 1 — Compact bone (an osteon) beside spongy bone (trabeculae) (lead, 1000×460) */
const osteonRing = (r: number) => `<circle cx="215" cy="248" r="${r}" fill="none" stroke="currentColor" stroke-width="2"/>`
const lacuna = (deg: number, r: number) => {
  const a = (deg * Math.PI) / 180
  const x = 215 + r * Math.cos(a)
  const y = 248 + r * Math.sin(a)
  const ix = 215 + (r - 24) * Math.cos(a)
  const iy = 248 + (r - 24) * Math.sin(a)
  const ox = 215 + (r + 24) * Math.cos(a)
  const oy = 248 + (r + 24) * Math.sin(a)
  return `<line x1="${ix.toFixed(1)}" y1="${iy.toFixed(1)}" x2="${ox.toFixed(1)}" y2="${oy.toFixed(1)}" stroke="currentColor" stroke-width="1.5"/><ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="8" ry="5" transform="rotate(${deg + 90} ${x.toFixed(1)} ${y.toFixed(1)})" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>`
}
const trab = (x1: number, y1: number, x2: number, y2: number) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-opacity="0.55"/>`
const boneSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${TXT(215, 56, 22, 'Compact (cortical) bone — the osteon', 'middle', '700')}
${TXT(800, 56, 22, 'Spongy (cancellous) bone', 'middle', '700')}
<g class="fig-muted">
${osteonRing(140)}${osteonRing(105)}${osteonRing(70)}
<line x1="305" y1="141" x2="372" y2="112" stroke="currentColor" stroke-width="1.5"/>
<line x1="243" y1="238" x2="372" y2="216" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="332" y1="309" x2="372" y2="304" stroke="currentColor" stroke-width="1.5"/>
<line x1="292" y1="376" x2="372" y2="370" stroke="currentColor" stroke-width="1.5"/>
</g>
<g class="fig-accent-2">
<circle cx="215" cy="248" r="30" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
<circle cx="208" cy="243" r="7" fill="currentColor" fill-opacity="0.6"/>
<circle cx="224" cy="254" r="5" fill="currentColor" fill-opacity="0.6"/>
</g>
<g class="fig-accent">
${lacuna(-75, 88)}${lacuna(15, 88)}${lacuna(100, 88)}${lacuna(185, 88)}${lacuna(270, 88)}
${lacuna(-40, 123)}${lacuna(30, 123)}${lacuna(60, 123)}${lacuna(130, 123)}${lacuna(200, 123)}${lacuna(285, 123)}
</g>
${TXT(378, 116, 18, 'lamellae — concentric rings of matrix', 'start')}
${TXT(378, 216, 18, 'Haversian canal: vessels + nerves', 'start')}
${TXT(378, 308, 18, 'osteocyte in a lacuna', 'start')}
${TXT(378, 374, 18, 'canaliculi — nutrient + signal channels', 'start')}
<g class="fig-muted">
<rect x="650" y="90" width="300" height="310" rx="14" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
</g>
${trab(680, 130, 760, 190)}${trab(760, 190, 850, 130)}${trab(850, 130, 930, 200)}
${trab(680, 130, 720, 280)}${trab(720, 280, 760, 190)}${trab(760, 190, 810, 260)}
${trab(810, 260, 850, 130)}${trab(810, 260, 900, 300)}${trab(930, 200, 900, 300)}
${trab(720, 280, 690, 370)}${trab(720, 280, 780, 370)}${trab(810, 260, 780, 370)}
${trab(900, 300, 880, 380)}${trab(780, 370, 880, 380)}${trab(900, 300, 930, 310)}${trab(690, 370, 780, 370)}
<g class="fig-accent-2">
${TXT(765, 246, 15, 'red marrow', 'middle')}
${TXT(828, 338, 15, 'red marrow', 'middle')}
</g>
${TXT(800, 426, 17, 'trabeculae along stress lines · no osteons', 'middle')}
${TXT(215, 426, 17, 'dense shell: strength against bending', 'middle')}
<g class="fig-muted">${TXT(500, 454, 16, 'matrix = collagen (tension, flexibility) + hydroxyapatite (compression) — no mineral: rubbery · no collagen: brittle', 'middle')}</g>
</svg>`

/* 2 — Remodeling: osteoclasts carve, osteoblasts refill (replace-table, 560×440) */
const remodelSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${TXT(280, 30, 17, 'Remodeling: osteoclasts carve, osteoblasts refill', 'middle', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-msk-rem-r')}</defs>
${TXT(28, 66, 15, 'tips toward RESORPTION', 'start', '700')}
${TXT(28, 86, 13, 'disuse · age · estrogen loss', 'start')}
<line x1="100" y1="238" x2="84" y2="180" stroke="currentColor" stroke-width="3" marker-end="url(#arr-msk-rem-r)"/>
${TXT(28, 166, 14, 'Ca²⁺ + phosphate released to blood', 'start')}
<ellipse cx="150" cy="262" rx="62" ry="32" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<circle cx="118" cy="248" r="5" fill="currentColor"/><circle cx="140" cy="244" r="5" fill="currentColor"/>
<circle cx="162" cy="246" r="5" fill="currentColor"/><circle cx="184" cy="252" r="5" fill="currentColor"/>
${TXT(150, 282, 16, 'osteoclast', 'middle', '700')}
${TXT(236, 208, 13, 'clast = cleave', 'end')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-msk-rem-b')}</defs>
${TXT(532, 66, 15, 'tips toward FORMATION', 'end', '700')}
${TXT(532, 86, 13, 'mechanical loading (exercise)', 'end')}
${TXT(425, 208, 13, 'blast = build · lays new matrix', 'middle')}
${TXT(425, 228, 16, 'osteoblasts', 'middle', '700')}
<rect x="345" y="236" width="36" height="40" rx="8" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<rect x="387" y="236" width="36" height="40" rx="8" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<rect x="429" y="236" width="36" height="40" rx="8" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<rect x="471" y="236" width="36" height="40" rx="8" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<circle cx="363" cy="256" r="5" fill="currentColor"/><circle cx="405" cy="256" r="5" fill="currentColor"/>
<circle cx="447" cy="256" r="5" fill="currentColor"/><circle cx="489" cy="256" r="5" fill="currentColor"/>
<rect x="340" y="276" width="172" height="14" fill="currentColor" fill-opacity="0.35"/>
<path d="M352 280 C 330 300, 320 310, 306 318" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#arr-msk-rem-b)"/>
</g>
<rect x="30" y="290" width="500" height="100" rx="8" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<path d="M70 290 Q150 350 230 290 Z" class="fig-bg" stroke="currentColor" stroke-width="2"/>
<defs>${ARROW('arr-msk-rem')}</defs>
<line x1="216" y1="262" x2="336" y2="262" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-msk-rem)"/>
${TXT(276, 252, 13, 'then refill', 'middle')}
<ellipse cx="270" cy="330" rx="9" ry="6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="270" cy="330" r="2.5" fill="currentColor"/>
<ellipse cx="300" cy="352" rx="9" ry="6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="300" cy="352" r="2.5" fill="currentColor"/>
<ellipse cx="262" cy="366" rx="9" ry="6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="262" cy="366" r="2.5" fill="currentColor"/>
<line x1="279" y1="332" x2="291" y2="348" stroke="currentColor" stroke-width="1.2"/>
<line x1="271" y1="360" x2="291" y2="354" stroke="currentColor" stroke-width="1.2"/>
${TXT(280, 384, 12, 'osteocytes', 'middle')}
<g class="fig-muted">${TXT(470, 378, 12, 'bone matrix', 'end')}</g>
${TXT(280, 412, 13, 'osteocyte = a buried osteoblast: maintains matrix, senses load', 'middle')}
${TXT(280, 432, 13, 'matrix = collagen (tension) + hydroxyapatite (compression)', 'middle')}
</svg>`

/* 3 — Calcium homeostasis: the PTH loop with calcitonin opposing (lead, 1000×460) */
const calciumSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-msk-ca')}</defs>
<g class="fig-accent-2">
${BOX(40, 190, 190, 64, 3, 0.1)}
${TXT(135, 216, 20, 'serum Ca²⁺', 'middle', '700')}
${TXT(135, 240, 20, 'FALLS', 'middle', '700')}
</g>
<line x1="230" y1="222" x2="256" y2="222" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-msk-ca)"/>
${BOX(260, 190, 200, 64)}
${TXT(360, 216, 19, 'parathyroid glands', 'middle', '700')}
${TXT(360, 240, 17, 'secrete PTH', 'middle')}
<path d="M460 214 C 475 214, 475 135, 486 135" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-msk-ca)"/>
<line x1="460" y1="222" x2="486" y2="222" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-msk-ca)"/>
<path d="M460 230 C 475 230, 475 315, 486 315" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-msk-ca)"/>
${BOX(490, 100, 300, 70)}
${TXT(640, 124, 19, 'BONE', 'middle', '700')}
${TXT(640, 145, 16, 'osteoclasts ↑ → resorption frees Ca²⁺', 'middle')}
${TXT(640, 163, 14, '(indirectly — via osteoblast signalling)', 'middle')}
${BOX(490, 185, 300, 80)}
${TXT(640, 209, 19, 'KIDNEY', 'middle', '700')}
${TXT(640, 231, 16, 'Ca²⁺ reabsorption ↑ · phosphate dumped', 'middle')}
${TXT(640, 253, 16, 'vitamin D → calcitriol (final hydroxylation)', 'middle')}
${BOX(490, 280, 300, 70)}
${TXT(640, 304, 19, 'GUT (via calcitriol)', 'middle', '700')}
${TXT(640, 330, 16, 'intestinal Ca²⁺ absorption ↑', 'middle')}
<line x1="790" y1="135" x2="826" y2="212" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-msk-ca)"/>
<line x1="790" y1="222" x2="826" y2="222" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-msk-ca)"/>
<line x1="790" y1="315" x2="826" y2="234" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-msk-ca)"/>
<g class="fig-accent">
<defs>${ARROW('arr-msk-ca-b')}</defs>
${BOX(830, 190, 150, 64, 3, 0.1)}
${TXT(905, 216, 19, 'serum Ca²⁺', 'middle', '700')}
${TXT(905, 240, 19, 'RESTORED', 'middle', '700')}
<path d="M905 254 L905 400 L135 400 L135 258" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6" marker-end="url(#arr-msk-ca-b)"/>
${TXT(500, 392, 16, 'negative feedback: PTH secretion falls as Ca²⁺ recovers', 'middle')}
${BOX(490, 28, 300, 54, 2.5, 0.08)}
${TXT(640, 50, 17, 'CALCITONIN (thyroid C cells) LOWERS Ca²⁺', 'middle', '700')}
${TXT(640, 72, 14, 'inhibits osteoclasts — minor in adults, direction is tested', 'middle')}
<line x1="640" y1="82" x2="640" y2="94" stroke="currentColor" stroke-width="3"/>
<line x1="624" y1="95" x2="656" y2="95" stroke="currentColor" stroke-width="3"/>
</g>
<g class="fig-muted">${TXT(500, 442, 16, 'osteoporosis = chronic net resorption (age, estrogen loss, prolonged PTH excess) → thinned trabeculae → fragility fractures', 'middle')}</g>
</svg>`

/* 4 — The sarcomere relaxed vs contracted (lead, 1000×460) */
const sarcomere = (zL: number, zR: number, thinLen: number, label: string) => {
  const mid = (zL + zR) / 2
  const tL = mid - 120
  const tR = mid + 120
  const ys = [160, 200, 240, 280]
  const thick = [180, 220, 260]
  return `
${TXT(mid, 60, 22, label, 'middle', '700')}
<g class="fig-muted">
<line x1="${zL}" y1="96" x2="${zR}" y2="96" stroke="currentColor" stroke-width="2" marker-start="url(#arr-msk-sar-m)" marker-end="url(#arr-msk-sar-m)"/>
<line x1="${mid}" y1="146" x2="${mid}" y2="294" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
</g>
<line x1="${zL}" y1="140" x2="${zL}" y2="300" stroke="currentColor" stroke-width="6"/>
<line x1="${zR}" y1="140" x2="${zR}" y2="300" stroke="currentColor" stroke-width="6"/>
${TXT(zL, 130, 17, 'Z', 'middle', '700')}
${TXT(zR, 130, 17, 'Z', 'middle', '700')}
${TXT(mid, 312, 15, 'M', 'middle', '700')}
<g class="fig-accent">
${ys.map((y) => `<line x1="${zL}" y1="${y}" x2="${zL + thinLen}" y2="${y}" stroke="currentColor" stroke-width="4"/><line x1="${zR - thinLen}" y1="${y}" x2="${zR}" y2="${y}" stroke="currentColor" stroke-width="4"/>`).join('')}
</g>
<g class="fig-accent-2">
${thick.map((y) => `<line x1="${tL}" y1="${y}" x2="${tR}" y2="${y}" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>`).join('')}
</g>
<line x1="${tL}" y1="326" x2="${tR}" y2="326" stroke="currentColor" stroke-width="2"/>
<line x1="${tL}" y1="320" x2="${tL}" y2="332" stroke="currentColor" stroke-width="2"/>
<line x1="${tR}" y1="320" x2="${tR}" y2="332" stroke="currentColor" stroke-width="2"/>
${TXT(mid, 348, 16, 'A band', 'middle', '700')}
<line x1="${zL}" y1="326" x2="${tL - 4}" y2="326" stroke="currentColor" stroke-width="2"/>
<line x1="${tR + 4}" y1="326" x2="${zR}" y2="326" stroke="currentColor" stroke-width="2"/>
${TXT((zL + tL) / 2, 348, 16, 'I', 'middle', '700')}
${TXT((zR + tR) / 2, 348, 16, 'I', 'middle', '700')}
<line x1="${zL + thinLen}" y1="118" x2="${zR - thinLen}" y2="118" stroke="currentColor" stroke-width="2"/>
<line x1="${zL + thinLen}" y1="112" x2="${zL + thinLen}" y2="124" stroke="currentColor" stroke-width="2"/>
<line x1="${zR - thinLen}" y1="112" x2="${zR - thinLen}" y2="124" stroke="currentColor" stroke-width="2"/>
${TXT(mid, 108, 15, 'H zone', 'middle', '700')}`
}
const sarcomereSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted"><defs>${ARROW('arr-msk-sar-m')}</defs></g>
${sarcomere(70, 430, 130, 'RELAXED')}
${sarcomere(620, 900, 130, 'CONTRACTED')}
<g class="fig-muted">
${TXT(250, 86, 14, 'sarcomere length (Z to Z)', 'middle')}
${TXT(760, 86, 14, 'shorter — Z lines approach', 'middle')}
</g>
${TXT(250, 372, 15, 'I band and H zone: thin-only and thick-only regions', 'middle')}
${TXT(760, 372, 15, 'I band and H zone SHRINK — the A band is unchanged', 'middle')}
<g class="fig-accent-2">${TXT(500, 404, 17, 'thick filament (myosin) — the A band is exactly its length, so the A band is CONSTANT', 'middle')}</g>
<g class="fig-accent">${TXT(500, 428, 17, 'thin filament (actin), anchored at the Z line — overlap grows as it slides toward the M line', 'middle')}</g>
${TXT(500, 452, 17, 'filaments slide; they never shorten — an answer choice with a shorter A band is wrong', 'middle', '700')}
</svg>`

/* 5 — The cross-bridge cycle as a loop, with the rigor exit (lead, 1000×460) */
const crossBridgeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-msk-xb')}</defs>
${BOX(60, 40, 260, 70)}
${NUM(84, 62, '1')}${TXT(104, 68, 18, 'RELEASED', 'start', '700')}
${TXT(190, 96, 15, 'ATP binds → myosin lets go of actin', 'middle')}
${BOX(680, 40, 260, 70)}
${NUM(704, 62, '2')}${TXT(724, 68, 18, 'COCKED', 'start', '700')}
${TXT(810, 96, 15, 'ATP → ADP + Pi energizes the head', 'middle')}
${BOX(680, 200, 260, 70)}
${NUM(704, 222, '3')}${TXT(724, 228, 18, 'CROSS-BRIDGE', 'start', '700')}
${TXT(810, 256, 15, 'cocked head binds exposed actin', 'middle')}
${BOX(370, 330, 260, 70)}
${NUM(394, 352, '4')}${TXT(414, 358, 18, 'POWER STROKE', 'start', '700')}
${TXT(500, 386, 15, 'pulls actin toward the M line', 'middle')}
${BOX(60, 200, 260, 70)}
${NUM(84, 222, '5')}${TXT(104, 228, 18, 'RIGOR STATE', 'start', '700')}
${TXT(190, 256, 15, 'ADP gone, head still bound', 'middle')}
<line x1="320" y1="75" x2="676" y2="75" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-msk-xb)"/>
${TXT(500, 66, 15, 'ATP hydrolysis (ADP + Pi stay on the head)', 'middle')}
<line x1="810" y1="110" x2="810" y2="196" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-msk-xb)"/>
${TXT(798, 158, 15, 'only if Ca²⁺ has moved tropomyosin aside', 'end')}
<line x1="680" y1="240" x2="520" y2="326" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-msk-xb)"/>
${TXT(612, 310, 15, 'Pi release triggers the stroke', 'start')}
<line x1="370" y1="352" x2="324" y2="262" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-msk-xb)"/>
${TXT(332, 318, 15, 'then ADP leaves', 'end')}
<line x1="190" y1="200" x2="190" y2="114" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-msk-xb)"/>
${TXT(204, 162, 15, 'a NEW ATP binds', 'start')}
${TXT(500, 196, 20, 'ATP does two different jobs', 'middle', '700')}
${TXT(500, 226, 18, 'BINDING → detaches the head', 'middle')}
${TXT(500, 252, 18, 'HYDROLYSIS → re-cocks it', 'middle')}
<g class="fig-accent-2">
<defs>${ARROW('arr-msk-xb-r')}</defs>
<line x1="190" y1="270" x2="190" y2="326" stroke="currentColor" stroke-width="3" stroke-dasharray="7 5" marker-end="url(#arr-msk-xb-r)"/>
${BOX(60, 330, 260, 60, 3, 0.1, '8 6')}
${TXT(190, 354, 17, 'no ATP → head cannot let go', 'middle', '700')}
${TXT(190, 378, 16, 'RIGOR MORTIS (Part 4)', 'middle')}
</g>
<g class="fig-muted">${TXT(500, 440, 16, 'muscle out of ATP can neither contract further nor relax — SERCA also needs ATP', 'middle')}</g>
</svg>`

/* 6 — The neuromuscular junction (lead, 1000×460) */
const nmjSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<line x1="60" y1="118" x2="310" y2="118" stroke="currentColor" stroke-width="2.5"/>
<line x1="60" y1="182" x2="310" y2="182" stroke="currentColor" stroke-width="2.5"/>
${TXT(150, 206, 15, 'motor neuron axon', 'middle')}
${TXT(250, 262, 14, 'synaptic cleft', 'middle')}
${TXT(420, 60, 15, 'axon terminal', 'middle')}
</g>
<rect x="300" y="70" width="240" height="170" rx="48" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent-2">
<defs>${ARROW('arr-msk-nmj-r')}</defs>
<line x1="80" y1="150" x2="286" y2="150" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-msk-nmj-r)"/>
${TXT(180, 140, 15, 'action potential', 'middle', '700')}
<line x1="610" y1="332" x2="880" y2="332" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-msk-nmj-r)"/>
${TXT(745, 320, 15, 'end-plate potential → muscle action potential', 'middle', '700')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-msk-nmj-b')}</defs>
<rect x="320" y="232" width="7" height="18" fill="currentColor"/><rect x="333" y="232" width="7" height="18" fill="currentColor"/>
<line x1="330" y1="272" x2="330" y2="214" stroke="currentColor" stroke-width="3" marker-end="url(#arr-msk-nmj-b)"/>
${TXT(342, 268, 15, 'Ca²⁺', 'start', '700')}
<rect x="391" y="290" width="7" height="22" fill="currentColor"/><rect x="402" y="290" width="7" height="22" fill="currentColor"/>
<rect x="451" y="290" width="7" height="22" fill="currentColor"/><rect x="462" y="290" width="7" height="22" fill="currentColor"/>
<rect x="511" y="290" width="7" height="22" fill="currentColor"/><rect x="522" y="290" width="7" height="22" fill="currentColor"/>
<line x1="400" y1="300" x2="400" y2="338" stroke="currentColor" stroke-width="3" marker-end="url(#arr-msk-nmj-b)"/>
<line x1="460" y1="300" x2="460" y2="338" stroke="currentColor" stroke-width="3" marker-end="url(#arr-msk-nmj-b)"/>
<line x1="520" y1="300" x2="520" y2="338" stroke="currentColor" stroke-width="3" marker-end="url(#arr-msk-nmj-b)"/>
${TXT(460, 362, 15, 'Na⁺ influx', 'middle', '700')}
${TXT(460, 382, 14, 'nicotinic receptors = ligand-gated cation channels', 'middle')}
</g>
<circle cx="360" cy="130" r="13" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<circle cx="410" cy="110" r="13" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<circle cx="460" cy="140" r="13" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<circle cx="495" cy="190" r="13" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<circle cx="360" cy="130" r="3" fill="currentColor"/><circle cx="410" cy="110" r="3" fill="currentColor"/>
<circle cx="460" cy="140" r="3" fill="currentColor"/><circle cx="495" cy="190" r="3" fill="currentColor"/>
${TXT(432, 174, 14, 'ACh vesicles', 'middle')}
<path d="M408 240 C 408 222, 436 222, 436 240" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="416" cy="256" r="3.5" fill="currentColor"/><circle cx="428" cy="266" r="3.5" fill="currentColor"/>
<circle cx="404" cy="276" r="3.5" fill="currentColor"/><circle cx="446" cy="278" r="3.5" fill="currentColor"/>
<circle cx="470" cy="262" r="3.5" fill="currentColor"/><circle cx="506" cy="274" r="3.5" fill="currentColor"/>
<circle cx="540" cy="266" r="3.5" fill="currentColor"/>
<rect x="668" y="252" width="56" height="24" rx="6" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
${TXT(696, 269, 13, 'AChE', 'middle', '700')}
${TXT(732, 269, 14, 'ACh → choline + acetate', 'start')}
<path d="M240 300 L900 300 L900 420 L240 420 Z" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
${TXT(745, 404, 15, 'muscle fiber — the motor end plate (sarcolemma)', 'middle')}
${NUM(270, 102, '1')}
${NUM(460, 238, '2')}
${NUM(560, 300, '3')}
${NUM(596, 332, '4')}
${NUM(648, 240, '5')}
${TXT(620, 48, 16, 'The sequence', 'start', '700')}
${NUM(632, 78, '1', 11)}${TXT(652, 84, 16, 'neuron AP → voltage-gated Ca²⁺ channels open', 'start')}
${NUM(632, 110, '2', 11)}${TXT(652, 116, 16, 'Ca²⁺ → ACh vesicles exocytose into the cleft', 'start')}
${NUM(632, 142, '3', 11)}${TXT(652, 148, 16, 'ACh binds nicotinic receptors → Na⁺ influx', 'start')}
${NUM(632, 174, '4', 11)}${TXT(652, 180, 16, 'end-plate potential → muscle action potential', 'start')}
${NUM(632, 206, '5', 11)}${TXT(652, 212, 16, 'acetylcholinesterase degrades ACh', 'start')}
<g class="fig-muted">${TXT(500, 450, 15, 'Part 4 lesion map: botulinum blocks step 2 · curare and myasthenia antibodies hit step 3 · AChE inhibitors rescue step 3', 'middle')}</g>
</svg>`

/* 7 — Excitation–contraction coupling: the chain from AP to Ca²⁺ and back (lead, 1000×460) */
const ecSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
${TXT(60, 88, 15, 'sarcolemma', 'start')}
${TXT(390, 292, 14, 'T-tubule', 'middle')}
${TXT(60, 330, 14, 'cytosol', 'start')}
</g>
<path d="M40 100 L360 100 L360 270 L420 270 L420 100 L600 100" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent-2">
<defs>${ARROW('arr-msk-ec-r')}</defs>
<line x1="70" y1="100" x2="348" y2="100" stroke="currentColor" stroke-width="4" marker-end="url(#arr-msk-ec-r)"/>
${TXT(200, 72, 15, 'action potential', 'middle', '700')}
<line x1="390" y1="112" x2="390" y2="250" stroke="currentColor" stroke-width="4" marker-end="url(#arr-msk-ec-r)"/>
<rect x="348" y="228" width="12" height="26" rx="2" fill="currentColor"/>
${TXT(356, 300, 14, 'DHP', 'end', '700')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-msk-ec-b')}</defs>
${BOX(180, 210, 130, 100, 2.5, 0.08)}
${TXT(236, 248, 18, 'SR', 'middle', '700')}
${TXT(236, 272, 15, 'Ca²⁺ store', 'middle')}
${BOX(460, 210, 130, 100, 2.5, 0.08)}
${TXT(515, 248, 18, 'SR', 'middle', '700')}
${TXT(515, 272, 15, 'Ca²⁺ store', 'middle')}
<rect x="302" y="228" width="12" height="26" rx="2" fill="currentColor"/>
${TXT(296, 300, 14, 'RyR', 'end', '700')}
<line x1="314" y1="241" x2="348" y2="241" stroke="currentColor" stroke-width="5"/>
<line x1="250" y1="310" x2="250" y2="350" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-msk-ec-b)"/>
<line x1="490" y1="310" x2="490" y2="350" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-msk-ec-b)"/>
${TXT(250, 368, 15, 'Ca²⁺', 'middle', '700')}
${TXT(490, 368, 15, 'Ca²⁺', 'middle', '700')}
<line x1="60" y1="392" x2="540" y2="392" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
</g>
<g class="fig-muted"><line x1="60" y1="384" x2="540" y2="384" stroke="currentColor" stroke-width="2.5"/></g>
<circle cx="150" cy="388" r="8" fill="currentColor"/><circle cx="300" cy="388" r="8" fill="currentColor"/><circle cx="440" cy="388" r="8" fill="currentColor"/>
${TXT(300, 420, 15, 'Ca²⁺ on troponin C → tropomyosin shifts → sites exposed → cycling', 'middle')}
<g class="fig-accent-2">
<line x1="565" y1="352" x2="565" y2="314" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-msk-ec-r)"/>
${TXT(565, 368, 14, 'SERCA', 'middle', '700')}
${TXT(565, 384, 13, 'ATP', 'middle')}
</g>
${NUM(150, 126, '1')}
${NUM(446, 150, '2')}
${NUM(332, 190, '3')}
${NUM(276, 190, '4')}
${NUM(278, 330, '5')}
${NUM(96, 360, '6')}
${NUM(596, 332, '7')}
${TXT(620, 42, 16, 'The chain (place any lesion on it)', 'start', '700')}
${NUM(632, 72, '1', 11)}${TXT(652, 78, 16, 'muscle AP runs along the sarcolemma', 'start')}
${NUM(632, 106, '2', 11)}${TXT(652, 112, 16, 'AP dives down the T-tubules', 'start')}
${NUM(632, 140, '3', 11)}${TXT(652, 146, 16, 'DHP receptor senses the voltage', 'start')}
${NUM(632, 174, '4', 11)}${TXT(652, 180, 16, 'mechanically opens the ryanodine receptor', 'start')}
${NUM(632, 208, '5', 11)}${TXT(652, 214, 16, 'SR dumps Ca²⁺ into the cytosol', 'start')}
${NUM(632, 242, '6', 11)}${TXT(652, 248, 16, 'Ca²⁺ binds troponin → tropomyosin shifts', 'start')}
${NUM(632, 276, '7', 11)}${TXT(652, 282, 16, 'SERCA pumps Ca²⁺ back into the SR (ATP)', 'start')}
<g class="fig-muted">${TXT(620, 316, 15, 'upstream of a lesion still works; downstream fails', 'start')}</g>
${TXT(500, 452, 17, 'ATP is needed THREE ways: detachment (binding), re-cocking (hydrolysis), relaxation (SERCA)', 'middle', '700')}
</svg>`

/* 8 — Twitch → summation → tetanus, and the length–tension curve (lead, 1000×460) */
const tick = (x: number) => `<line x1="${x}" y1="336" x2="${x}" y2="348" stroke="currentColor" stroke-width="2"/>`
const twitch = (x: number) => `M${x} 330 C ${x + 6} 272, ${x + 16} 262, ${x + 22} 290 C ${x + 26} 310, ${x + 32} 330, ${x + 40} 330`
const tensionSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-msk-ten')}</defs>
${TXT(310, 36, 18, 'Force against stimulus frequency (illustrative)', 'middle', '700')}
<line x1="80" y1="330" x2="560" y2="330" stroke="currentColor" stroke-width="2" marker-end="url(#arr-msk-ten)"/>
<line x1="80" y1="330" x2="80" y2="56" stroke="currentColor" stroke-width="2" marker-end="url(#arr-msk-ten)"/>
${TXT(72, 190, 16, 'force', 'end')}
<g class="fig-muted">
${tick(100)}${tick(150)}${tick(200)}
${tick(250)}${tick(278)}${tick(306)}${tick(334)}${tick(362)}${tick(390)}
${[430, 436, 442, 448, 454, 460, 466, 472, 478, 484, 490, 496, 502, 508, 514, 520].map(tick).join('')}
${TXT(60, 346, 14, 'stimuli', 'end')}
${TXT(555, 364, 15, 'time →', 'end')}
</g>
<path d="${twitch(100)} ${twitch(150)} ${twitch(200)}" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M250 330 C 256 280, 262 268, 270 282 C 274 290, 276 300, 278 300 C 284 250, 290 238, 298 252 C 302 262, 304 272, 306 272 C 312 222, 318 210, 326 224 C 330 234, 332 244, 334 244 C 340 196, 346 184, 354 198 C 358 208, 360 218, 362 218 C 368 172, 374 160, 382 174 C 386 184, 388 194, 390 194 C 398 240, 408 300, 418 330" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M430 330 C 440 240, 450 150, 470 120 L 520 118 C 530 118, 538 230, 546 330" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent">
${TXT(160, 240, 16, 'twitch', 'middle', '700')}
${TXT(160, 260, 14, '1 Hz', 'middle')}
${TXT(330, 150, 16, 'summation', 'middle', '700')}
${TXT(330, 170, 14, '10 Hz', 'middle')}
${TXT(488, 78, 16, 'tetanus', 'middle', '700')}
${TXT(488, 98, 14, '50 Hz — fused, maximal', 'middle')}
</g>
${TXT(310, 390, 15, 'twitch: Ca²⁺ fully pumped back between stimuli', 'middle')}
${TXT(310, 410, 15, 'summation: next stimulus before relaxation → Ca²⁺ stacks', 'middle')}
${TXT(310, 430, 15, 'tetanus: saturating Ca²⁺ — the heart cannot (long refractory)', 'middle')}
${TXT(785, 36, 18, 'Length–tension (illustrative)', 'middle', '700')}
<line x1="620" y1="330" x2="960" y2="330" stroke="currentColor" stroke-width="2" marker-end="url(#arr-msk-ten)"/>
<line x1="620" y1="330" x2="620" y2="56" stroke="currentColor" stroke-width="2" marker-end="url(#arr-msk-ten)"/>
<text x="598" y="190" font-size="15" text-anchor="middle" fill="currentColor" transform="rotate(-90 598 190)">active tension</text>
${TXT(955, 364, 15, 'sarcomere length →', 'end')}
<g class="fig-muted">
<line x1="755" y1="110" x2="755" y2="330" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="815" y1="110" x2="815" y2="330" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
</g>
<path d="M640 322 C 700 220, 730 110, 775 110 L 795 110 C 850 112, 900 230, 942 322" fill="none" stroke="currentColor" stroke-width="3.5"/>
<g class="fig-accent-2">
${TXT(785, 94, 16, 'optimum: most cross-bridges', 'middle', '700')}
</g>
${TXT(628, 388, 15, 'too short: filaments collide', 'start')}
${TXT(955, 410, 15, 'overstretched: little overlap', 'end')}
${TXT(785, 432, 15, 'pure overlap logic', 'middle')}
<g class="fig-muted">${TXT(500, 452, 16, 'force is graded two ways: RECRUIT more (and larger) motor units · raise stimulus FREQUENCY', 'middle')}</g>
</svg>`

/* 9 — Skeletal, cardiac and smooth muscle side by side (lead, 1000×460) */
const stria = (x0: number, x1: number, y0: number, y1: number, skip: number[] = []) => {
  const out: string[] = []
  for (let x = x0; x <= x1; x += 16) {
    if (skip.some((s) => Math.abs(x - s) < 12)) continue
    out.push(`<line x1="${x}" y1="${y0}" x2="${x}" y2="${y1}" stroke="currentColor" stroke-width="1.5"/>`)
  }
  return out.join('')
}
const row = (x: number, lines: string[]) => lines.map((l, i) => TXT(x, 292 + i * 26, 15, l, 'middle')).join('')
const tissuesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${TXT(180, 44, 22, 'SKELETAL', 'middle', '700')}
${TXT(500, 44, 22, 'CARDIAC', 'middle', '700')}
${TXT(820, 44, 22, 'SMOOTH', 'middle', '700')}
<rect x="40" y="100" width="280" height="80" rx="40" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted">${stria(72, 288, 104, 176)}</g>
<ellipse cx="100" cy="112" rx="13" ry="5" fill="currentColor"/>
<ellipse cx="180" cy="168" rx="13" ry="5" fill="currentColor"/>
<ellipse cx="260" cy="112" rx="13" ry="5" fill="currentColor"/>
<ellipse cx="140" cy="168" rx="13" ry="5" fill="currentColor"/>
${TXT(180, 228, 15, 'striated · many PERIPHERAL nuclei', 'middle')}
${TXT(180, 250, 15, 'one long multinucleated fiber', 'middle')}
<rect x="370" y="100" width="130" height="80" rx="14" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<rect x="500" y="100" width="130" height="80" rx="14" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted">${stria(386, 614, 104, 176, [500])}</g>
<circle cx="435" cy="140" r="9" fill="currentColor"/>
<circle cx="565" cy="140" r="9" fill="currentColor"/>
<g class="fig-accent-2">
<path d="M500 100 l8 10 l-8 10 l8 10 l-8 10 l8 10 l-8 10 l8 10 l-8 10" fill="none" stroke="currentColor" stroke-width="4"/>
${TXT(500, 200, 14, 'intercalated disc', 'middle', '700')}
</g>
${TXT(500, 228, 15, 'striated · 1–2 CENTRAL nuclei', 'middle')}
${TXT(500, 250, 15, 'intercalated discs: gap junctions, syncytium', 'middle')}
<path d="M690 130 Q 760 80 830 130 Q 760 180 690 130 Z" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<path d="M810 160 Q 880 110 950 160 Q 880 210 810 160 Z" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<ellipse cx="760" cy="130" rx="22" ry="6" fill="currentColor"/>
<ellipse cx="880" cy="160" rx="22" ry="6" fill="currentColor"/>
<g class="fig-accent-2">
<line x1="818" y1="138" x2="826" y2="152" stroke="currentColor" stroke-width="4"/>
<line x1="826" y1="134" x2="834" y2="148" stroke="currentColor" stroke-width="4"/>
${TXT(856, 198, 14, 'gap junction', 'middle', '700')}
</g>
${TXT(820, 228, 15, 'NOT striated · one central nucleus', 'middle')}
${TXT(820, 250, 15, 'spindle-shaped cells', 'middle')}
${row(180, ['voluntary — somatic motor neuron', 'isolated fibers: each needs a neuron', 'Ca²⁺ from the SR (DHP–RyR link)', 'troponin gate · tetanus possible', 'no pacemaker'])}
${row(500, ['involuntary — autonomic modulates', 'gap junctions spread the beat', 'Ca²⁺ in → triggers SR release (CICR)', 'pacemaker cells (SA node)', 'long plateau → refractory → no tetanus'])}
${row(820, ['involuntary: autonomic, hormones, stretch', 'gap junctions (single-unit type)', 'mostly extracellular Ca²⁺', 'calmodulin — no troponin', 'some spontaneous slow waves (gut)'])}
<g class="fig-muted">${TXT(500, 446, 16, 'same sliding-filament motor — the differences are control, coupling and where the Ca²⁺ comes from', 'middle')}</g>
</svg>`

export const mcatMusculoskeletalFigures: DeckFigurePlacement[] = [
  {
    at: 'Bone Architecture',
    mode: 'lead',
    figure: {
      svg: boneSvg,
      alt:
        'Left: compact (cortical) bone drawn as one osteon — three concentric grey rings (lamellae) around a red central Haversian canal carrying vessels and nerves; blue lens-shaped lacunae sit between the rings, each with a short canaliculus line running toward the canal, labelled "osteocyte in a lacuna" and "canaliculi — nutrient and signal channels". Right: spongy (cancellous) bone as a lattice of thick struts (trabeculae) with "red marrow" written in the spaces, captioned "trabeculae along stress lines; no osteons". Footer: matrix = collagen (tension, flexibility) + hydroxyapatite (compression); no mineral is rubbery, no collagen is brittle.',
      caption: 'Compact bone is built of osteons (lamellae around a Haversian canal, osteocytes in lacunae linked by canaliculi); spongy bone is a marrow-filled lattice of trabeculae.',
    },
    blocks: [
      '- **Osteon**: lamellae round a **Haversian canal**; osteocytes in **lacunae**, linked by **canaliculi**',
      '- Matrix = **collagen** (tension) + **hydroxyapatite** (compression); spongy bone = **trabeculae**, no osteons',
    ],
  },
  {
    at: 'The Cell Trio and Remodeling',
    mode: 'replace-table',
    figure: {
      svg: remodelSvg,
      alt:
        'A bone surface being remodeled. On the left a large red multinucleated osteoclast sits in a pit it has carved into the bone (clast = cleave, resorbs matrix); a red arrow from it reads "Ca²⁺ + phosphate released to blood". An arrow labelled "then refill" leads right to a row of four blue cuboidal osteoblasts laying a new blue matrix layer on the surface (blast = build); a dashed blue arrow shows one osteoblast becoming an osteocyte buried in the matrix, where three osteocytes in lacunae are drawn. Above: red "tips toward resorption — disuse, age, estrogen loss"; blue "tips toward formation — mechanical loading (exercise)". Footer: osteocyte = a buried osteoblast that maintains matrix and senses load; matrix = collagen (tension) + hydroxyapatite (compression).',
      caption: 'Remodeling: osteoclasts carve (clast = cleave), osteoblasts refill (blast = build), and a buried osteoblast becomes the osteocyte that maintains the matrix and senses load.',
    },
    blocks: [
      '- **Osteoblast** builds matrix, may become an **osteocyte** (maintains, senses stress) — "blast = build"',
      '- **Osteoclast** resorbs bone, releasing Ca²⁺ and phosphate — "clast = cleave"',
      '- Loading tips the balance toward **building**; disuse, age and estrogen loss toward **resorption**',
    ],
  },
  {
    at: 'Calcium Homeostasis',
    mode: 'lead',
    figure: {
      svg: calciumSvg,
      alt:
        'A loop of boxes. Red: serum Ca²⁺ falls → parathyroid glands secrete PTH → three targets: BONE (osteoclasts up, resorption frees Ca²⁺; PTH acts on osteoblasts, which signal osteoclasts), KIDNEY (Ca²⁺ reabsorption up, phosphate dumped, vitamin D converted to calcitriol by the final hydroxylation) and GUT (via calcitriol, intestinal Ca²⁺ absorption up) → blue: serum Ca²⁺ restored, with a dashed blue negative-feedback arrow back to the start ("PTH secretion falls as Ca²⁺ recovers"). Above the bone box a blue calcitonin box (thyroid C cells, lowers Ca²⁺, inhibits osteoclasts — minor in adults, direction is tested) ends in an inhibition bar on the bone box. Footer: osteoporosis = chronic net resorption (age, estrogen loss, prolonged PTH excess) → thinned trabeculae → fragility fractures.',
      caption: 'PTH raises serum calcium three ways (bone resorption, renal reabsorption, vitamin D activation for gut absorption); calcitonin tones it down by inhibiting osteoclasts.',
    },
    blocks: [
      '- **PTH raises Ca²⁺**: osteoclast resorption + renal reabsorption + vitamin D → calcitriol → gut absorption',
      '- **Calcitonin lowers Ca²⁺** (inhibits osteoclasts) — minor in adults, but its **direction** is tested',
    ],
  },
  {
    at: 'Sarcomere Anatomy',
    mode: 'lead',
    figure: {
      svg: sarcomereSvg,
      alt:
        'Two sarcomeres side by side, RELAXED and CONTRACTED. Each has two thick Z lines, blue thin filaments (actin) running inward from each Z line, and three red thick filaments (myosin) in the centre with a dashed M line through their middle. Brackets label the bands: the A band spans the thick filaments, the I bands lie between each Z line and the thick filaments, and the H zone is the central thick-only region. In the contracted sarcomere the Z lines are closer, the thin filaments overlap the thick ones more, and the I bands and H zone are much narrower while the A band bracket is the same width. Legend: thick filament (myosin) — the A band is exactly its length, so it is constant; thin filament (actin) anchored at the Z line slides toward the M line; filaments slide, they never shorten, so an answer choice with a shorter A band is wrong.',
      caption: 'Relaxed vs contracted sarcomere: Z lines approach, I bands and H zone shrink, and the A band (the thick filaments themselves) never changes length.',
    },
    blocks: [
      '- **A band = thick-filament length → CONSTANT**; **I band** and **H zone** (non-overlap) shrink',
      '- Filaments **slide**, they do not shorten — any answer that shortens the A band is wrong',
    ],
  },
  {
    at: 'The Cross-Bridge Cycle',
    mode: 'lead',
    figure: {
      svg: crossBridgeSvg,
      alt:
        'Five numbered state boxes in a loop. 1 RELEASED: ATP binds, myosin lets go of actin. Arrow "ATP hydrolysis (ADP + Pi stay on the head)" to 2 COCKED: the head is energized. Arrow "only if Ca²⁺ has moved tropomyosin aside" to 3 CROSS-BRIDGE: the cocked head binds exposed actin. Arrow "Pi release triggers the stroke" to 4 POWER STROKE: the head pivots and pulls actin toward the M line. Arrow "then ADP leaves" to 5 RIGOR STATE: ADP gone, head still bound, waiting for ATP. Arrow "a NEW ATP binds" back to 1. Centre: ATP does two different jobs — BINDING detaches the head, HYDROLYSIS re-cocks it. A red dashed exit from state 5 leads to a red box: no ATP → the head cannot let go = rigor mortis (Part 4). Footer: a muscle out of ATP can neither contract further nor relax; SERCA also needs ATP.',
      caption: 'The cross-bridge cycle: ATP binding releases, hydrolysis cocks, Pi release powers the stroke; without new ATP the head stays bound (rigor).',
    },
    blocks: [
      '- ATP **binding** detaches; **hydrolysis** re-cocks; **Pi release** fires the power stroke; ADP then leaves',
      '- No ATP → heads stay bound in the rigor state → **rigor mortis**',
    ],
  },
  {
    at: 'The Neuromuscular Junction',
    mode: 'lead',
    figure: {
      svg: nmjSvg,
      alt:
        'A schematic synapse. A motor-neuron axon carries a red action potential (1) into a rounded axon terminal holding ACh vesicles; blue voltage-gated Ca²⁺ channels on the terminal membrane let Ca²⁺ in, and one vesicle fuses, scattering ACh dots into the synaptic cleft (2). Below, the muscle fiber (motor end plate) carries blue nicotinic receptors — ligand-gated cation channels — each with a blue Na⁺ influx arrow into the fiber (3). A red arrow along the sarcolemma reads end-plate potential → muscle action potential (4). An AChE box in the cleft splits ACh into choline + acetate (5). Right: the same five steps as a numbered list. Footer: the Part 4 lesion map — botulinum blocks step 2, curare and myasthenia antibodies hit step 3, AChE inhibitors rescue step 3.',
      caption: 'The neuromuscular junction: neuron AP → Ca²⁺ in → ACh released → nicotinic receptors pass Na⁺ → end-plate potential → muscle AP; acetylcholinesterase ends the signal.',
    },
    blocks: [
      '- Neuron AP → Ca²⁺ in → **ACh** → **nicotinic receptor** (cation channel) → Na⁺ in → **end-plate potential**',
      '- **Acetylcholinesterase** clears ACh — the step that myasthenia treatment (AChE inhibitors) exploits',
    ],
  },
  {
    at: 'Excitation-Contraction Coupling',
    mode: 'lead',
    figure: {
      svg: ecSvg,
      alt:
        'A cut-away of one muscle fiber. The sarcolemma runs along the top and dips down as a T-tubule; a red action potential arrow runs along the membrane (1) and down the tubule (2). A red DHP receptor block sits in the T-tubule wall (3) and is joined by a thick mechanical link to a blue ryanodine receptor (RyR) block on the sarcoplasmic reticulum (4); two blue SR boxes labelled "Ca²⁺ store" flank the tubule. Blue Ca²⁺ arrows pour from the SR into the cytosol (5) onto a thin filament strip carrying troponin dots: Ca²⁺ on troponin C shifts tropomyosin, exposes sites, cycling begins (6). A red SERCA arrow pumps Ca²⁺ back into the SR using ATP (7). Right: the chain as a numbered list, with the note that upstream of a lesion still works while downstream fails. Footer: ATP is needed three ways — detachment (binding), re-cocking (hydrolysis), relaxation (SERCA).',
      caption: 'E-C coupling: AP → T-tubule → DHP voltage sensor → ryanodine receptor → SR Ca²⁺ release → troponin; relaxation is active work by the SERCA pump.',
    },
    blocks: [
      '- AP → **T-tubule** → **DHP** voltage sensor opens the **ryanodine receptor** → SR dumps Ca²⁺ → troponin',
      '- Relaxation costs ATP (**SERCA**); place a lesion on the chain: upstream works, downstream fails',
    ],
  },
  {
    at: 'Motor Units, Recruitment',
    mode: 'lead',
    figure: {
      svg: tensionSvg,
      alt:
        'Left: force against time for one fiber stimulated at rising frequency (illustrative). At 1 Hz three separate twitches each return to baseline (Ca²⁺ fully pumped back between stimuli); at 10 Hz each stimulus arrives before relaxation and the responses stack into a rising, partly fused staircase (summation); at 50 Hz the responses fuse into one smooth maximal plateau (tetanus); stimulus marks are drawn under the axis. Note: the heart cannot be tetanized because of its long refractory period. Right: the length–tension curve (illustrative), an inverted U of active tension against sarcomere length, with a plateau at optimum (most cross-bridges), low force when too short (filaments collide) and when overstretched (little overlap). Footer: force is graded two ways — recruit more (and larger) motor units, or raise stimulus frequency.',
      caption: 'Twitch → summation → tetanus as stimulus frequency rises, and the length–tension curve (illustrative): both are overlap-and-calcium logic.',
    },
    blocks: [
      '- Graded by **recruitment** (more, larger motor units) and **frequency**: twitch → **summation** → **tetanus**',
      '- **Length–tension**: maximal at intermediate overlap; the heart cannot summate (long refractory plateau)',
    ],
  },
  {
    at: 'Three Muscle Tissues Compared',
    mode: 'lead',
    figure: {
      svg: tissuesSvg,
      alt:
        'Three columns. SKELETAL: a long striated cylinder with several flattened nuclei at the periphery — one multinucleated fiber; voluntary (somatic motor neuron); fibers isolated, each needs its own neuron; Ca²⁺ from the SR via the DHP–RyR link; troponin gate, tetanus possible; no pacemaker. CARDIAC: two striated cells each with one central nucleus, joined by a red zigzag intercalated disc; involuntary (autonomic modulates); gap junctions spread the beat as a syncytium; Ca²⁺ entry triggers SR release (CICR); pacemaker cells (SA node); long plateau → refractory → no tetanus. SMOOTH: two spindle-shaped, non-striated cells each with one central elongated nucleus and a red gap junction between them; involuntary (autonomic, hormones, stretch); gap junctions (single-unit type); mostly extracellular Ca²⁺; calmodulin, no troponin; some spontaneous slow waves (gut). Footer: same sliding-filament motor — the differences are control, coupling and where the Ca²⁺ comes from.',
      caption: 'Skeletal, cardiac and smooth muscle: striations, nuclei, coupling, calcium source and pacemaker activity are the five discriminators the MCAT tests.',
    },
    blocks: [
      '- **Skeletal**: striated, voluntary, uncoupled · **Cardiac**: striated, gap junctions, pacemaker, no tetanus',
      '- **Smooth**: no striations, one nucleus, gap junctions, Ca²⁺ via **calmodulin** (no troponin)',
    ],
  },
]
