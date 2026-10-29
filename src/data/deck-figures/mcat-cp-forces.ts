import type { DeckFigurePlacement } from './index'

/**
 * Forces & Newton's Laws (MCAT C/P) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (three mini pictures
 * for the three laws, free-body diagrams as a box with labelled force arrows
 * and axes, a friction-vs-push graph, an incline with the weight decomposed
 * on tilted axes, a rope over a pulley with both free-body diagrams, four
 * elevator panels, a circle with tangent velocity and inward force, three
 * torque cases on a bar, and the forearm lever with the lesson's numbers) —
 * no textbook, prep-company or AAMC figure was copied. The friction graph is
 * the textbook SHAPE and says "illustrative"; the only numbers drawn are the
 * ones the lesson states (the forearm worked example: 5 cm, 40 cm, 20 N,
 * 160 N, 140 N).
 *
 * Force colours are consistent across the deck: weight mg in the text colour,
 * contact forces that push or pull (normal N, tension T, applied F) BLUE
 * (fig-accent), friction / the "answer" force (f, F_c, R) RED (fig-accent-2),
 * surfaces, axes and dimension lines grey (fig-muted). Components are dashed.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-fn-<figure>-<colour>).
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

/** A horizontal dimension line with end ticks (for lever arms). */
const DIM = (x1: number, x2: number, y: number) =>
  `<path d="M${x1} ${y - 6} L${x1} ${y + 6} M${x1} ${y} L${x2} ${y} M${x2} ${y - 6} L${x2} ${y + 6}" fill="none" stroke="currentColor" stroke-width="2"/>`

/** Subscript helper: base + small subscript, back to baseline. */
const SUB = (base: string, sub: string, size: number) =>
  `${base}<tspan dy="${Math.round(size * 0.25)}" font-size="${Math.round(size * 0.7)}">${sub}</tspan><tspan dy="${-Math.round(size * 0.25)}" font-size="${size}"> </tspan>`

/* 1 — Newton's three laws as three mini pictures (lead, 1000×460) */
const lawsPanel = (ox: number) => `<g class="fig-muted"><rect x="${ox}" y="20" width="310" height="420" rx="14" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/></g>`
const lawsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-fn-laws')}</defs>
${lawsPanel(20)}${lawsPanel(345)}${lawsPanel(670)}
${T(175, 52, 22, '1st law — inertia', 'middle', '700')}
<g class="fig-muted">
${LINE(40, 250, 310, 250, 4)}
<circle cx="80" cy="236" r="14" fill="currentColor" fill-opacity="0.3"/>
<circle cx="140" cy="236" r="14" fill="currentColor" fill-opacity="0.3"/>
</g>
<circle cx="200" cy="236" r="14" fill="currentColor"/>
${ARR(200, 236, 200, 302, 'arr-fn-laws')}
${T(212, 302, 18, 'mg')}
<g class="fig-accent">
<defs>${ARROW('arr-fn-laws-b')}</defs>
${ARR(200, 236, 200, 170, 'arr-fn-laws-b')}
${T(212, 178, 18, 'N')}
${ARR(218, 236, 282, 236, 'arr-fn-laws-b')}
${T(250, 218, 18, 'v constant', 'middle', '700')}
</g>
${T(175, 345, 20, 'ΣF = 0 → a = 0', 'middle', '700')}
${T(175, 375, 18, 'v stays constant (rest or motion)', 'middle')}
<g class="fig-muted">${T(175, 405, 16, 'no force is needed to keep moving', 'middle')}</g>
${T(500, 52, 22, '2nd law — F = ma', 'middle', '700')}
${BOX(495, 125, 60, 50, 8)}${T(525, 158, 20, 'm', 'middle')}
${BOX(495, 225, 60, 50, 8)}${T(525, 258, 20, 'm', 'middle')}
<g class="fig-accent-2">
<defs>${ARROW('arr-fn-laws-r')}</defs>
${ARR(433, 150, 493, 150, 'arr-fn-laws-r', 4)}
${T(463, 136, 18, 'F', 'middle', '700')}
${ARR(373, 250, 493, 250, 'arr-fn-laws-r', 4)}
${T(433, 236, 18, '2F', 'middle', '700')}
</g>
${ARR(563, 150, 601, 150, 'arr-fn-laws', 3, true)}
${T(582, 136, 18, 'a', 'middle')}
${ARR(563, 250, 639, 250, 'arr-fn-laws', 3, true)}
${T(601, 236, 18, '2a', 'middle')}
${T(500, 345, 20, `a = ${SUB('F', 'net', 20)}/ m`, 'middle', '700')}
${T(500, 375, 18, 'along the NET force, not the motion', 'middle')}
<g class="fig-muted">${T(500, 405, 16, 'double the mass → half the acceleration', 'middle')}</g>
${T(825, 52, 22, '3rd law — action–reaction', 'middle', '700')}
${BOX(710, 150, 100, 90, 10)}${T(760, 230, 20, 'A', 'middle', '700')}
${BOX(840, 150, 100, 90, 10)}${T(890, 230, 20, 'B', 'middle', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-fn-laws-b2')}</defs>
${ARR(845, 195, 935, 195, 'arr-fn-laws-b2', 4)}
${T(890, 140, 16, 'on B, by A', 'middle', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-fn-laws-r2')}</defs>
${ARR(805, 195, 715, 195, 'arr-fn-laws-r2', 4)}
${T(760, 140, 16, 'on A, by B', 'middle', '700')}
</g>
${T(825, 290, 18, 'equal magnitude, opposite direction', 'middle')}
${T(825, 320, 20, 'on DIFFERENT objects', 'middle', '700')}
${T(825, 350, 18, '→ never cancel in one FBD', 'middle')}
<g class="fig-muted">
${T(825, 395, 16, 'Earth pulls book ⇄ book pulls Earth', 'middle')}
${T(825, 420, 16, '(the table’s N is NOT the pair)', 'middle')}
</g>
</svg>`

/* 2 — Free-body diagrams: the pushed crate and the hanging picture (lead, 1000×460) */
const fbdSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-fn-fbd')}</defs>
${T(250, 40, 22, 'pushed crate: four forces ON it', 'middle', '700')}
<g class="fig-muted">
${LINE(40, 330, 470, 330, 4)}
<path d="M60 345 L75 330 M100 345 L115 330 M140 345 L155 330 M180 345 L195 330 M220 345 L235 330 M260 345 L275 330 M300 345 L315 330 M340 345 L355 330 M380 345 L395 330 M420 345 L435 330" stroke="currentColor" stroke-width="1.5"/>
${LINE(500, 20, 500, 440, 1.5)}
<defs>${ARROW('arr-fn-fbd-m')}</defs>
${ARR(400, 120, 460, 120, 'arr-fn-fbd-m', 2)}
${ARR(400, 120, 400, 60, 'arr-fn-fbd-m', 2)}
${T(468, 126, 18, 'x')}
${T(396, 52, 18, 'y', 'end')}
</g>
${BOX(170, 210, 160, 120, 8, 2.5, 0.06)}
<circle cx="250" cy="270" r="5" fill="currentColor"/>
${ARR(250, 270, 250, 420, 'arr-fn-fbd', 3.5)}
${T(262, 416, 20, 'mg')}
<g class="fig-accent">
<defs>${ARROW('arr-fn-fbd-b')}</defs>
${ARR(250, 270, 250, 110, 'arr-fn-fbd-b', 3.5)}
${T(262, 122, 20, 'N')}
${ARR(250, 270, 430, 270, 'arr-fn-fbd-b', 3.5)}
${T(380, 255, 18, 'F (push)', 'middle')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-fn-fbd-r')}</defs>
${ARR(250, 270, 130, 270, 'arr-fn-fbd-r', 3.5)}
${T(118, 264, 20, 'f', 'end')}
${T(118, 286, 15, 'friction', 'end')}
</g>
${T(320, 372, 18, `Σ${SUB('F', 'y', 18)}: N − mg = 0`)}
${T(320, 402, 18, `Σ${SUB('F', 'x', 18)}: F − f = ma`)}
${T(750, 40, 22, 'hanging picture: two forces', 'middle', '700')}
<g class="fig-muted">
${LINE(650, 95, 830, 95, 4)}
<path d="M660 95 L672 80 M690 95 L702 80 M720 95 L732 80 M750 95 L762 80 M780 95 L792 80 M810 95 L822 80" stroke="currentColor" stroke-width="1.5"/>
${T(740, 300, 15, 'scene', 'middle')}
${T(900, 350, 15, 'free-body diagram', 'middle')}
<defs>${ARROW('arr-fn-fbd-m2')}</defs>
${ARR(805, 215, 865, 215, 'arr-fn-fbd-m2', 2, true)}
</g>
${LINE(740, 95, 740, 175, 2)}
${BOX(690, 175, 100, 80, 6, 2.5, 0.06)}
<circle cx="900" cy="215" r="6" fill="currentColor"/>
${ARR(900, 215, 900, 320, 'arr-fn-fbd', 3.5)}
${T(912, 318, 20, 'mg')}
<g class="fig-accent">
<defs>${ARROW('arr-fn-fbd-b2')}</defs>
${ARR(900, 215, 900, 110, 'arr-fn-fbd-b2', 3.5)}
${T(912, 122, 20, 'T')}
</g>
${T(640, 385, 18, 'at rest: T − mg = 0 → T = mg')}
${T(640, 415, 18, 'cut the wire: only mg left → a = g')}
</svg>`

/* 3 — Friction force vs. applied push: the static ramp, the drop, the kinetic plateau (replace-table, 560×440) */
const frictionSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-fn-fric')}</defs>
${T(300, 30, 17, 'friction vs. applied push (illustrative)', 'middle', '700')}
<g class="fig-muted">
${LINE(80, 200, 250, 200, 1.5, true)}
${LINE(80, 250, 250, 250, 1.5, true)}
${LINE(250, 250, 250, 370, 1.5, true)}
${T(250, 392, 15, 'starts to slide', 'middle')}
</g>
${ARR(80, 370, 535, 370, 'arr-fn-fric', 2.5)}
${ARR(80, 370, 80, 50, 'arr-fn-fric', 2.5)}
${T(532, 398, 16, 'applied push F →', 'end')}
<text x="34" y="210" font-size="17" text-anchor="middle" fill="currentColor" transform="rotate(-90 34 210)">friction force f</text>
${T(72, 206, 16, `μ${SUB('', 's', 16)}N`, 'end', '700')}
${T(72, 256, 16, `μ${SUB('', 'k', 16)}N`, 'end', '700')}
<g class="fig-accent-2">
${LINE(80, 370, 250, 200, 4)}
<circle cx="250" cy="200" r="6" fill="currentColor"/>
${T(262, 192, 15, 'verge of slipping', 'start', '700')}
<text x="150" y="276" font-size="15" text-anchor="middle" fill="currentColor" transform="rotate(-45 150 276)">static: f = F (matches the push)</text>
</g>
${LINE(250, 200, 250, 250, 3)}
<g class="fig-accent">
${LINE(250, 250, 525, 250, 4)}
${T(392, 238, 15, `kinetic: ${SUB('f', 'k', 15)}= μ${SUB('', 'k', 15)}N, constant`, 'middle', '700')}
</g>
<g class="fig-muted">
${T(392, 300, 15, 'independent of speed and', 'middle')}
${T(392, 320, 15, 'contact area', 'middle')}
</g>
${T(300, 428, 15, `μ${SUB('', 's', 15)}&gt; μ${SUB('', 'k', 15)}: harder to start than to keep sliding`, 'middle')}
</svg>`

/* 4 — The inclined plane: weight decomposed on tilted axes (lead, 1000×460). θ = 30°. */
const inclineSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-fn-inc')}</defs>
<g class="fig-muted">
<polygon points="90,400 590,400 590,110" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
${LINE(670, 40, 670, 430, 1.5)}
<defs>${ARROW('arr-fn-inc-m')}</defs>
${ARR(480, 110, 549, 70, 'arr-fn-inc-m', 2)}
${ARR(480, 110, 440, 41, 'arr-fn-inc-m', 2)}
${T(556, 76, 17, 'x′ along')}
${T(436, 36, 17, 'y′ ⊥', 'end')}
</g>
<path d="M160 400 A70 70 0 0 0 150.6 364.9" fill="none" stroke="currentColor" stroke-width="2"/>
${T(177, 384, 20, 'θ', 'middle')}
<rect x="279" y="197" width="90" height="60" rx="6" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5" transform="rotate(-30.1 324 227)"/>
<circle cx="324" cy="227" r="5" fill="currentColor"/>
${ARR(324, 227, 324, 367, 'arr-fn-inc', 3.5)}
${T(336, 372, 20, 'mg')}
${ARR(324, 227, 263, 262, 'arr-fn-inc', 2.5, true)}
${T(252, 274, 18, 'mg sinθ', 'end')}
${ARR(324, 227, 385, 332, 'arr-fn-inc', 2.5, true)}
${T(395, 342, 18, 'mg cosθ')}
<g class="fig-accent">
<defs>${ARROW('arr-fn-inc-b')}</defs>
${ARR(324, 227, 264, 123, 'arr-fn-inc-b', 3.5)}
${T(252, 120, 20, 'N', 'end')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-fn-inc-r')}</defs>
${ARR(324, 227, 384, 192, 'arr-fn-inc-r', 3.5)}
${T(372, 178, 20, 'f', 'middle')}
</g>
${T(700, 70, 21, 'tilt the axes along the incline', 'start', '700')}
${T(700, 108, 19, 'y′: N = mg cosθ  (&lt; mg)')}
${T(700, 140, 19, 'x′: mg sinθ − f = ma')}
${T(700, 190, 21, 'limit checks', 'start', '700')}
${T(700, 226, 19, 'θ = 0: pull 0, N = mg')}
${T(700, 258, 19, 'θ = 90°: pull mg, N = 0')}
${T(700, 308, 21, 'slip tricks', 'start', '700')}
${T(700, 344, 19, `verge of sliding: μ${SUB('', 's', 19)}= tanθ`)}
${T(700, 376, 19, `constant-v slide: μ${SUB('', 'k', 19)}= tanθ`)}
<g class="fig-muted">${T(700, 418, 16, 'f = friction, up the slope here')}</g>
</svg>`

/* 5 — Tension: one rope over a pulley, the same T on both segments, both FBDs (beside, 560×440) */
const tensionSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-fn-ten')}</defs>
${T(280, 30, 16, 'one rope, one tension — the pulley only redirects it', 'middle', '700')}
<g class="fig-muted">
<rect x="30" y="170" width="270" height="14" fill="currentColor" fill-opacity="0.35"/>
${LINE(60, 184, 60, 250, 3)}
${T(45, 300, 15, 'FBD of block A')}
${T(405, 280, 15, 'FBD of block B')}
${T(430, 150, 14, 'ropes pull, never push', 'middle')}
</g>
${BOX(110, 110, 110, 60, 8, 2.5, 0.06)}${T(165, 148, 18, 'A', 'middle', '700')}
<circle cx="300" cy="148" r="22" fill="none" stroke="currentColor" stroke-width="3"/>
<circle cx="300" cy="148" r="4" fill="currentColor"/>
<path d="M220 126 L300 126 A22 22 0 0 1 322 148 L322 260" fill="none" stroke="currentColor" stroke-width="2.5"/>
${BOX(292, 260, 60, 60, 8, 2.5, 0.06)}${T(322, 298, 18, 'B', 'middle', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-fn-ten-b')}</defs>
${T(260, 116, 18, 'T', 'middle', '700')}
${T(334, 212, 18, 'T', 'start', '700')}
${T(430, 122, 15, 'same T on both segments', 'middle', '700')}
${ARR(110, 370, 190, 370, 'arr-fn-ten-b', 3.5)}
${T(196, 376, 17, 'T')}
${ARR(110, 370, 110, 318, 'arr-fn-ten-b', 3.5)}
${T(120, 324, 17, 'N')}
${ARR(470, 360, 470, 296, 'arr-fn-ten-b', 3.5)}
${T(480, 304, 17, 'T')}
</g>
<circle cx="110" cy="370" r="6" fill="currentColor"/>
${ARR(110, 370, 110, 422, 'arr-fn-ten', 3.5)}
${T(120, 428, 17, `${SUB('m', 'A', 17)}g`)}
<circle cx="470" cy="360" r="6" fill="currentColor"/>
${ARR(470, 360, 470, 424, 'arr-fn-ten', 3.5)}
${T(480, 430, 17, `${SUB('m', 'B', 17)}g`)}
</svg>`

/* 6 — Apparent weight: four elevator panels (replace-table, 560×440) */
const elevatorCell = (ox: number, oy: number, nLen: number, accel: 'none' | 'up' | 'down' | 'fall', lines: string[], id: string) => {
  const cx = ox + 56, cy = oy + 93
  const nArrow = nLen > 0
    ? `${ARR(cx, cy, cx, cy - nLen, id + '-b', 3)}${T(cx + 8, cy - nLen + 14, 15, 'N', 'start', '700')}`
    : `${T(cx, cy - 40, 15, 'N = 0', 'middle', '700')}`
  const ax = ox + 118
  const aArrow =
    accel === 'none' ? `${T(ax, cy + 5, 15, 'a = 0', 'middle', '700')}`
    : accel === 'up' ? `${ARR(ax, cy + 24, ax, cy - 24, id + '-r', 3)}${T(ax + 8, cy + 5, 15, 'a', 'start', '700')}`
    : accel === 'down' ? `${ARR(ax, cy - 24, ax, cy + 24, id + '-r', 3)}${T(ax + 8, cy + 5, 15, 'a', 'start', '700')}`
    : `${ARR(ax, cy - 30, ax, cy + 30, id + '-r', 3)}${T(ax + 8, cy + 5, 15, 'a', 'start', '700')}`
  const cable = accel === 'fall'
    ? `<g class="fig-muted"><path d="M${cx} ${oy + 8} L${cx - 6} ${oy - 2} M${cx + 4} ${oy - 6} L${cx + 10} ${oy - 12}" stroke="currentColor" stroke-width="2.5"/></g>`
    : `<g class="fig-muted">${LINE(cx, oy - 12, cx, oy + 8, 2.5)}</g>`
  return `<g class="fig-muted">${BOX(ox + 14, oy + 8, 84, 168, 6, 2)}</g>${cable}
<rect x="${ox + 42}" y="${oy + 70}" width="28" height="46" rx="4" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
<rect x="${ox + 34}" y="${oy + 118}" width="44" height="8" rx="2" fill="currentColor" fill-opacity="0.5"/>
${ARR(cx, cy, cx, cy + 50, id, 3)}${T(cx + 8, cy + 56, 14, 'mg')}
<g class="fig-accent">${nArrow}</g>
<g class="fig-accent-2">${aArrow}</g>
${lines.map((l, i) => T(ox + 140, oy + 62 + i * 25, 15, l, 'start', l.startsWith('N') ? '700' : '400')).join('\n')}`
}
const elevatorSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-fn-elev')}</defs>
<g class="fig-accent"><defs>${ARROW('arr-fn-elev-b')}</defs></g>
<g class="fig-accent-2"><defs>${ARROW('arr-fn-elev-r')}</defs></g>
${T(280, 24, 16, 'the scale reads N, not mg — only acceleration matters', 'middle', '700')}
${elevatorCell(10, 48, 50, 'none', ['at rest or', 'constant v', 'N = mg', 'true weight'], 'arr-fn-elev')}
${elevatorCell(290, 48, 76, 'up', ['a upward', 'N = m(g + a)', 'heavier'], 'arr-fn-elev')}
${elevatorCell(10, 250, 26, 'down', ['a downward', 'N = m(g − a)', 'lighter'], 'arr-fn-elev')}
${elevatorCell(290, 250, 0, 'fall', ['cable cut:', 'free fall, a = g', 'N = 0', '“weightless”'], 'arr-fn-elev')}
</svg>`

/* 7 — Uniform circular motion: inward net force; a flat curve; the bottom of a loop (lead, 1000×460) */
const circularSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-fn-circ')}</defs>
<g class="fig-muted">
${LINE(390, 30, 390, 440, 1.5)}
${LINE(700, 30, 700, 440, 1.5)}
<circle cx="200" cy="255" r="140" fill="none" stroke="currentColor" stroke-width="2.5"/>
${LINE(300, 115, 378, 115, 2, true)}
${T(375, 84, 15, 'lose the inward force → straight line', 'end')}
${LINE(420, 330, 680, 330, 4)}
<circle cx="845" cy="180" r="110" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6"/>
</g>
${T(200, 40, 21, 'uniform circular motion', 'middle', '700')}
<circle cx="200" cy="255" r="4" fill="currentColor"/>
<circle cx="200" cy="115" r="10" fill="currentColor"/>
<g class="fig-accent">
<defs>${ARROW('arr-fn-circ-b')}</defs>
${ARR(212, 115, 300, 115, 'arr-fn-circ-b', 3.5)}
${T(258, 102, 20, 'v', 'middle', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-fn-circ-r')}</defs>
${ARR(200, 127, 200, 232, 'arr-fn-circ-r', 3.5)}
${T(212, 172, 19, `${SUB('F', 'c', 19)}= mv²/r`, 'start', '700')}
${T(212, 200, 17, `${SUB('a', 'c', 17)}= v²/r`)}
</g>
${T(200, 418, 16, 'speed constant, direction changes → a inward', 'middle')}
<g class="fig-muted">${T(200, 442, 15, 'no outward “centrifugal” force on the object', 'middle')}</g>
${T(545, 40, 21, 'flat curve: static friction', 'middle', '700')}
${BOX(495, 250, 110, 70, 10, 2.5, 0.06)}
<rect x="500" y="318" width="22" height="14" rx="3" fill="currentColor"/>
<rect x="578" y="318" width="22" height="14" rx="3" fill="currentColor"/>
<circle cx="550" cy="285" r="5" fill="currentColor"/>
${ARR(550, 285, 550, 400, 'arr-fn-circ', 3.5)}
${T(560, 402, 19, 'mg')}
<g class="fig-accent">
<defs>${ARROW('arr-fn-circ-b2')}</defs>
${ARR(550, 285, 550, 170, 'arr-fn-circ-b2', 3.5)}
${T(560, 182, 19, 'N')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-fn-circ-r2')}</defs>
${ARR(550, 285, 440, 285, 'arr-fn-circ-r2', 3.5)}
${T(462, 272, 19, `${SUB('f', 's', 19)}`, 'middle', '700')}
</g>
<g class="fig-muted">${T(420, 360, 15, '← toward the curve’s center')}</g>
${T(545, 418, 16, `${SUB('f', 's', 16)}= mv²/r  (tires grip, no sliding)`, 'middle')}
<g class="fig-muted">${T(545, 442, 15, 'ice: too little friction → car goes straight', 'middle')}</g>
${T(845, 40, 21, 'bottom of a vertical loop', 'middle', '700')}
<circle cx="845" cy="180" r="4" fill="currentColor"/>
<circle cx="845" cy="290" r="10" fill="currentColor"/>
${ARR(845, 300, 845, 362, 'arr-fn-circ', 3.5)}
${T(857, 364, 19, 'mg')}
<g class="fig-accent">
<defs>${ARROW('arr-fn-circ-b3')}</defs>
${ARR(845, 280, 845, 195, 'arr-fn-circ-b3', 3.5)}
${T(857, 210, 19, 'N')}
</g>
${T(845, 400, 17, 'N − mg = mv²/r → N &gt; mg', 'middle', '700')}
${T(845, 424, 16, 'you feel heavy', 'middle')}
<g class="fig-muted">${T(845, 446, 15, 'centripetal = the NET inward force', 'middle')}</g>
</svg>`

/* 8 — Torque: perpendicular force, angled force, force through the pivot (lead, 1000×460) */
const torqueBar = (ox: number) => `${LINE(ox + 40, 250, ox + 220, 250, 14)}
<circle cx="${ox + 40}" cy="250" r="9" class="fig-bg" stroke="currentColor" stroke-width="3"/>
<g class="fig-muted">${DIM(ox + 40, ox + 220, 290)}${T(ox + 130, 312, 18, 'r', 'middle')}</g>`
const torqueSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-fn-tq')}</defs>
<g class="fig-muted">
${LINE(340, 30, 340, 440, 1.5)}
${LINE(670, 30, 670, 440, 1.5)}
<defs>${ARROW('arr-fn-tq-m')}</defs>
<path d="M117 232 A60 60 0 0 0 80 194" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-fn-tq-m)"/>
<path d="M447 232 A60 60 0 0 0 410 194" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-fn-tq-m)"/>
${LINE(570, 250, 610, 250, 2, true)}
</g>
${T(170, 60, 20, 'F ⊥ r: τ = rF (maximum)', 'middle', '700')}
${torqueBar(20)}
<g class="fig-accent-2">
<defs>${ARROW('arr-fn-tq-r')}</defs>
${ARR(240, 242, 240, 130, 'arr-fn-tq-r', 4)}
${T(252, 180, 20, 'F', 'start', '700')}
${ARR(570, 250, 634, 173, 'arr-fn-tq-r', 4)}
${T(643, 170, 20, 'F', 'start', '700')}
${ARR(720, 130, 720, 236, 'arr-fn-tq-r', 4)}
${T(732, 150, 17, 'F at the pivot (r = 0)', 'start', '700')}
${ARR(976, 250, 906, 250, 'arr-fn-tq-r', 4)}
${T(938, 236, 15, 'F along the bar', 'middle', '700')}
${T(938, 274, 15, '(θ = 0)', 'middle')}
</g>
${T(170, 380, 18, 'sin 90° = 1', 'middle')}
<g class="fig-muted">${T(170, 410, 16, 'push perpendicular to the lever arm', 'middle')}</g>
${T(500, 60, 20, 'F at angle θ: τ = rF sinθ', 'middle', '700')}
${torqueBar(350)}
${ARR(570, 250, 570, 173, 'arr-fn-tq', 2.5, true)}
${T(562, 205, 17, 'F sinθ', 'end')}
<path d="M606 250 A36 36 0 0 0 593 222" fill="none" stroke="currentColor" stroke-width="2"/>
${T(618, 236, 18, 'θ', 'middle')}
${T(500, 380, 18, 'only F sinθ (the ⊥ part) rotates', 'middle')}
<g class="fig-muted">${T(500, 410, 16, 'the parallel part just pulls on the pivot', 'middle')}</g>
${T(830, 60, 20, 'F through the pivot: τ = 0', 'middle', '700')}
${torqueBar(680)}
${T(830, 380, 18, 'r = 0 or θ = 0 → no torque', 'middle')}
<g class="fig-muted">${T(830, 410, 16, 'however large the force', 'middle')}</g>
</svg>`

/* 9 — The forearm as a lever, with the worked example's numbers (after, 1000×460). 14 px per cm. */
const forearmSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-fn-arm')}</defs>
<g class="fig-muted">
<rect x="186" y="70" width="28" height="192" rx="10" fill="currentColor" fill-opacity="0.3"/>
${T(200, 60, 15, 'humerus', 'middle')}
${DIM(200, 270, 398)}${T(235, 390, 17, '5 cm', 'middle')}
${DIM(200, 760, 436)}${T(480, 428, 17, '40 cm', 'middle')}
${T(178, 296, 16, 'elbow (pivot)', 'end')}
${T(778, 268, 16, 'hand')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-fn-arm-b')}</defs>
<line x1="214" y1="110" x2="270" y2="262" stroke="currentColor" stroke-width="7" stroke-opacity="0.45" stroke-linecap="round"/>
${T(176, 140, 15, 'biceps', 'end')}
${ARR(270, 262, 270, 80, 'arr-fn-arm-b', 4)}
${T(284, 108, 20, `${SUB('F', 'biceps', 20)}= 160 N`, 'start', '700')}
</g>
<rect x="200" y="262" width="560" height="16" rx="8" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<circle cx="200" cy="270" r="10" class="fig-bg" stroke="currentColor" stroke-width="3"/>
<circle cx="760" cy="246" r="16" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
${ARR(760, 278, 760, 380, 'arr-fn-arm', 4)}
${T(774, 345, 20, '20 N (ball)', 'start', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-fn-arm-r')}</defs>
${ARR(200, 280, 200, 352, 'arr-fn-arm-r', 4)}
${T(214, 330, 20, 'R = 140 N', 'start', '700')}
${T(214, 354, 15, 'humerus pushes down on the forearm')}
</g>
${T(500, 70, 21, 'pivot at the elbow: R drops out', 'start', '700')}
${T(500, 108, 20, `Στ = 0:  ${SUB('F', 'b', 20)}(5 cm) = (20 N)(40 cm)`)}
${T(500, 140, 20, `→ ${SUB('F', 'b', 20)}= 160 N — 8× the load (40/5)`)}
${T(500, 190, 20, 'ΣF = 0:  160 = 20 + R  →  R = 140 N')}
</svg>`

export const mcatForcesFigures: DeckFigurePlacement[] = [
  {
    at: 'The Three Laws',
    mode: 'lead',
    figure: {
      svg: lawsSvg,
      alt:
        'Three panels. First law: a puck slides along an ice line with earlier positions ghosted at equal spacing; its normal force up and weight down are equal, and a blue arrow labelled v constant points along the motion — ΣF = 0 so a = 0, velocity stays constant, no force is needed to keep moving. Second law: two identical blocks m; a red force F gives a short dashed acceleration arrow a, a force 2F twice as long gives an acceleration 2a twice as long — a = F_net/m, along the net force, not the motion. Third law: two touching boxes A and B; a blue arrow on B labelled on B, by A points right and an equal red arrow on A labelled on A, by B points left — equal magnitude, opposite direction, on different objects, so they never cancel in one free-body diagram. Note: Earth pulls book ⇄ book pulls Earth; the table’s normal force is not the pair.',
      caption: 'Newton’s three laws as pictures: no net force → constant velocity; a = F_net/m along the net force; action–reaction pairs act on two different bodies.',
    },
    blocks: [
      '- **1st:** $\\Sigma F = 0 \\Rightarrow$ constant velocity (rest counts) · **2nd:** $F_{net} = ma$, along the NET force',
      '- **3rd:** equal and opposite forces on DIFFERENT objects — they never cancel in one free-body diagram',
    ],
  },
  {
    at: 'Free-Body Diagrams',
    mode: 'lead',
    figure: {
      svg: fbdSvg,
      alt:
        'Left: a crate on a hatched floor drawn as a box with a dot at its center and four arrows from the dot: weight mg straight down, normal force N (blue) straight up, the applied push F (blue) to the right, and friction f (red) to the left; small x–y axes sit above. Below: ΣF_y: N − mg = 0 and ΣF_x: F − f = ma. Right: a picture hanging from a ceiling by a wire (the scene), and next to it the free-body diagram as a dot with tension T (blue) up and weight mg down. Text: at rest, T − mg = 0 so T = mg; cut the wire and only mg is left, so a = g.',
      caption: 'The free-body recipe: one object, only the forces acting ON it, then sum x and y separately — a pushed crate (four forces) and a hanging picture (two).',
    },
    blocks: [
      '- One object, only the forces **on** it: $mg$ down, $N$ ⊥ the surface, $T$ along the rope, $f$ along the surface',
      '- Solve $x$ and $y$ separately; equilibrium ($a = 0$, at rest **or** constant $v$) means each sum is zero',
    ],
  },
  {
    at: 'Two Kinds of Friction',
    mode: 'replace-table',
    figure: {
      svg: frictionSvg,
      alt:
        'Graph of friction force f (vertical) against the applied push F (horizontal), illustrative. From the origin a red 45° line rises — static friction equals the push — up to a red dot marked verge of slipping at the height μ_s N. The line then drops vertically to a lower blue horizontal plateau at μ_k N (kinetic friction, constant while sliding, independent of speed and contact area). A dashed vertical line at the drop is labelled starts to slide. Bottom: μ_s > μ_k, harder to start than to keep sliding.',
      caption: 'Friction against the applied push (illustrative shape): static friction matches the push up to μ_s N, then drops to the fixed kinetic value μ_k N.',
    },
    blocks: [
      '- **Static** $f_s \\le \\mu_s N$ matches the push up to a ceiling; **kinetic** $f_k = \\mu_k N$ is fixed while sliding',
      '- $\\mu_s > \\mu_k$: harder to *start* than to *keep* sliding — the drop on the graph',
      '- Both scale with the **normal force** $N$, not the weight; kinetic ignores speed and contact area',
      '- Only at the verge of slipping does $f_s = \\mu_s N$ — writing the maximum too early is the classic error',
    ],
  },
  {
    at: 'Inclined Planes',
    mode: 'lead',
    figure: {
      svg: inclineSvg,
      alt:
        'A grey wedge rising to the right at angle θ (marked at the bottom-left corner) with a block resting on its slope. From the block’s center: weight mg straight down; two dashed components of it, mg sinθ pointing down the slope and mg cosθ pointing into the surface; the normal force N (blue) perpendicular to the slope, and friction f (red) pointing up the slope. Tilted axes x′ along the incline and y′ perpendicular to it sit above the wedge. Right column: tilt the axes along the incline; y′: N = mg cosθ (less than mg); x′: mg sinθ − f = ma; limit checks θ = 0: pull 0, N = mg; θ = 90°: pull mg, N = 0; slip tricks: verge of sliding μ_s = tanθ, constant-velocity slide μ_k = tanθ.',
      caption: 'The inclined plane with axes tilted along the slope: weight splits into mg sinθ (downhill) and mg cosθ (into the surface), so N = mg cosθ; friction acts along the surface.',
    },
    blocks: [
      '- Tilt the axes: downhill pull $mg\\sin\\theta$, into the surface $mg\\cos\\theta$ → $N = mg\\cos\\theta < mg$',
      '- Check the limits ($0°$: $N = mg$; $90°$: $N = 0$); on the verge of slipping or sliding at constant $v$, $\\mu = \\tan\\theta$',
    ],
  },
  {
    at: 'Tension',
    mode: 'beside',
    figure: {
      svg: tensionSvg,
      alt:
        'Block A rests on a table; a rope runs from A horizontally over a pulley at the table’s edge and down to hanging block B. Both rope segments are labelled T in blue: same T on both segments; ropes pull, never push. Below are the two free-body diagrams: for A, tension T (blue) to the right along the rope, normal N (blue) up and weight m_A g down; for B, tension T (blue) up and weight m_B g down.',
      caption: 'An ideal rope carries one tension along its whole length and the pulley only redirects it; in each free-body diagram T pulls away from the block along the rope.',
    },
  },
  {
    at: 'Apparent Weight (Elevators)',
    mode: 'replace-table',
    figure: {
      svg: elevatorSvg,
      alt:
        'Four elevator cars, each with a person standing on a scale, the normal force N (blue, up) and weight mg (down) drawn from the person, and a red arrow for the car’s acceleration. At rest or constant velocity: a = 0, N equals mg, true weight. Accelerating upward: N is longer than mg, N = m(g + a), heavier. Accelerating downward: N is shorter than mg, N = m(g − a), lighter. Cable cut: free fall with a = g, N = 0, weightless. Title: the scale reads N, not mg — only acceleration matters.',
      caption: 'Apparent weight: the scale reads the normal force, N = m(g + a) with upward a positive — the same mg in all four cars, only N changes.',
    },
    blocks: [
      '- A scale reads the **normal force**: $N - mg = ma \\Rightarrow N = m(g + a)$, with $a$ positive **upward**',
      '- Up: $m(g + a)$, heavier · down: $m(g - a)$, lighter · free fall: $0$, "weightless" (gravity still acts)',
      '- Only **acceleration** counts — moving down while slowing is an upward $a$, so the scale reads heavy',
    ],
  },
  {
    at: 'Uniform Circular Motion',
    mode: 'lead',
    figure: {
      svg: circularSvg,
      alt:
        'Three panels. Left: an object at the top of a circle with a blue velocity arrow v along the tangent and a red arrow F_c = mv²/r (a_c = v²/r) pointing to the center; a dashed line continues the tangent, labelled lose the inward force → straight line; speed constant, direction changes, acceleration inward; no outward centrifugal force on the object. Middle: a car seen from behind on a flat road with N (blue) up, mg down and static friction f_s (red) pointing sideways toward the curve’s center; f_s = mv²/r, tires grip without sliding; on ice too little friction and the car goes straight. Right: an object at the bottom of a dashed vertical loop with a long N (blue) up toward the center and a shorter mg down; N − mg = mv²/r so N > mg, you feel heavy; centripetal force is the net inward force.',
      caption: 'Uniform circular motion: the net force points to the center and a real force supplies it — static friction on a flat curve, N − mg at the bottom of a loop.',
    },
    blocks: [
      '- $a_c = v^2/r$ inward; $F_c = mv^2/r$ is the NET inward force, supplied by friction, tension, gravity or $N$',
      '- No outward "centrifugal" force acts on the object — remove the inward force and it continues in a straight line',
    ],
  },
  {
    at: 'Torque: Force with Leverage',
    mode: 'lead',
    figure: {
      svg: torqueSvg,
      alt:
        'Three bars pivoting at a left-hand pin, with the lever arm r dimensioned beneath each. Left: a red force F pushes straight up at the far end, a grey curved arrow shows rotation about the pivot — F perpendicular to r gives τ = rF, the maximum, sin 90° = 1. Middle: F pushes up at an angle θ to the bar; a dashed vertical component F sinθ is drawn and the angle θ marked — τ = rF sinθ, only the perpendicular part rotates, the parallel part just pulls on the pivot. Right: one red force pushes straight down at the pivot (r = 0) and another pushes along the bar toward the pivot (θ = 0) — τ = 0, no torque however large the force.',
      caption: 'Torque τ = rF sinθ on a bar: perpendicular force gives the maximum rF, an angled force counts only its perpendicular part, and a force through the pivot gives none.',
    },
    blocks: [
      '- $\\tau = rF\\sin\\theta$: only the component perpendicular to the lever arm rotates the object',
      '- A force through the pivot ($r = 0$ or $\\theta = 0$) gives zero torque, however large it is',
    ],
  },
  {
    at: 'Worked Example — The Forearm as a Lever',
    mode: 'after',
    figure: {
      svg: forearmSvg,
      alt:
        'The forearm drawn as a horizontal bar pivoting at the elbow on the left, with the humerus as a grey vertical bar above the elbow. The biceps (blue) runs from the humerus to a point 5 cm from the elbow, where a blue arrow F_biceps = 160 N points up. A ball rests in the hand 40 cm from the elbow with a 20 N arrow pointing down. At the elbow a red arrow R = 140 N points down: the humerus pushes down on the forearm. Dimension lines show 5 cm and 40 cm. Equations: pivot at the elbow so R drops out of the torque sum; Στ = 0: F_b (5 cm) = (20 N)(40 cm) → F_b = 160 N, eight times the load (the 40/5 lever ratio); ΣF = 0: 160 = 20 + R → R = 140 N.',
      caption: 'The forearm lever with the worked example’s numbers: torque balance about the elbow gives the biceps force 160 N, then force balance gives a 140 N joint reaction.',
    },
    blocks: [
      '- Pivot at the elbow: $F_b(0.05) = 20(0.40) \\Rightarrow F_b = 160$ N — eight times the load (lever-arm ratio $40/5$)',
      '- Then force balance: $160 = 20 + R \\Rightarrow R = 140$ N, the humerus pressing down on the forearm at the joint',
    ],
  },
]
