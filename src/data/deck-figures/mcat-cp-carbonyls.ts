import type { DeckFigurePlacement } from './index'

/**
 * Carbonyl Chemistry (MCAT C/P) — figures for the in-class deck.
 * Authored 2026-10-29 by Opus 5.5 — PENDING FABLE REVIEW (see memory deck-figures-opus-review).
 *
 * Every drawing below is ours, drawn from the concept (the two master
 * mechanisms with curved arrows, an aldehyde beside a ketone, the acyl
 * reactivity ladder, the amide resonance pair, the enolate resonance pair with
 * a pKa scale, the two enolates of one ketone, an aldol run on acetaldehyde,
 * the 1,2 vs 1,4 sites of an enone, the alcohol oxidation ladder) — no
 * textbook, prep-company or AAMC figure was copied. The only numbers drawn are
 * the ones the lesson states (pKa ≈ 50 / ≈ 20 / 9–13, ~40 % C–N double-bond
 * character, −78 °C for LDA, formaldehyde > 99 % hydrated).
 *
 * Molecules drawn as skeletal structures: acetone (α-hydrogen acidity),
 * 2-butanone (kinetic vs thermodynamic enolates), acetaldehyde, its enolate,
 * 3-hydroxybutanal and 2-butenal (the aldol), plus generic R / Nu / L
 * carbonyls, a generic amide R–CO–NH–R′ and a generic enone R–CO–CH=CH₂.
 * Every other species is written as a condensed formula in a box.
 *
 * Colours: curved electron-flow arrows RED (fig-accent-2); the key atom /
 * new bond / "fast, kinetic, hard-nucleophile" side BLUE (fig-accent); the
 * other side of a comparison RED; asides grey (fig-muted).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-cny-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

type P = [number, number]

const r1 = (n: number) => Number(n.toFixed(1))

/** The point `len` away from p at `deg` degrees (screen coordinates: 0 = right, −90 = up). */
const at = (p: P, deg: number, len: number): P => [
  r1(p[0] + len * Math.cos((deg * Math.PI) / 180)),
  r1(p[1] + len * Math.sin((deg * Math.PI) / 180)),
]

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') =>
  `<text x="${r1(x)}" y="${r1(y)}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2)}" y2="${r1(y2)}" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A straight arrow in the current colour ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3, dashed = false) =>
  `<line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2)}" y2="${r1(y2)}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''} marker-end="url(#${marker})"/>`

/** A curved arrow (electron flow or a pointer) along path data `d`, ending in the marker. */
const CURL = (d: string, marker: string, sw = 2.5) =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" marker-end="url(#${marker})"/>`

/**
 * A bond from a to b, trimmed by ta / tb where the end carries an atom label;
 * order 2 draws two parallel lines 8 units apart.
 */
const BOND = (a: P, b: P, order = 1, ta = 0, tb = 0, sw = 3) => {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const len = Math.hypot(dx, dy)
  const ux = dx / len
  const uy = dy / len
  const p1: P = [a[0] + ux * ta, a[1] + uy * ta]
  const p2: P = [b[0] - ux * tb, b[1] - uy * tb]
  if (order === 1) return LINE(p1[0], p1[1], p2[0], p2[1], sw)
  const ox = -uy * 4
  const oy = ux * 4
  return LINE(p1[0] + ox, p1[1] + oy, p2[0] + ox, p2[1] + oy, sw) + LINE(p1[0] - ox, p1[1] - oy, p2[0] - ox, p2[1] - oy, sw)
}

/** An atom label centred on p. */
const ATOM = (p: P, label: string, size = 24, weight = '400') => T(p[0], p[1] + size * 0.36, size, label, 'middle', weight)

/** A formal charge ('+' or '−') beside the atom at p. */
const CHG = (p: P, sign: string, deg = -45, r = 18) => {
  const c = at(p, deg, r)
  return T(c[0], c[1] + 7, 20, sign, 'middle', '700')
}

/** A lone pair (two dots) beside the atom at p. */
const LP = (p: P, deg: number, r = 18) => {
  const c = at(p, deg, r)
  const o = at([0, 0], deg + 90, 5)
  return `<circle cx="${r1(c[0] + o[0])}" cy="${r1(c[1] + o[1])}" r="2.7" fill="currentColor"/><circle cx="${r1(c[0] - o[0])}" cy="${r1(c[1] - o[1])}" r="2.7" fill="currentColor"/>`
}

/** A rounded box outline in the current colour. */
const BOX = (x: number, y: number, w: number, h: number, dashed = false, sw = 2) =>
  `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" rx="10" fill="none" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A translucent filled rounded box (a highlight band). */
const BAND = (x: number, y: number, w: number, h: number, opacity = '0.12') =>
  `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" rx="10" fill="currentColor" fill-opacity="${opacity}"/>`

/* ---------------------------------------------------------------------------
   1 — The two master mechanisms, stacked (replace-table, 560×440).
   Top: R₂C=O + Nu⁻ → tetrahedral alkoxide → (H⁺) alcohol.
   Bottom: R–CO–L + Nu⁻ → tetrahedral intermediate → R–CO–Nu + L⁻.
   --------------------------------------------------------------------------- */
const mechPanel = (y0: number, kind: 'add' | 'sub', mk: string) => {
  const L = 40
  // reactant
  const c1: P = [100, y0 + 95]
  const o1 = at(c1, -90, L)
  const ra = at(c1, 150, L)
  const rb = at(c1, 30, L)
  const nu: P = [34, y0 + 76]
  // tetrahedral
  const c2: P = [272, y0 + 92]
  const o2 = at(c2, -90, L)
  const r2a = at(c2, 160, L)
  const r2b = at(c2, 20, L)
  const nu2 = at(c2, 90, L)
  // product
  const c3: P = [452, y0 + 92]
  const o3 = at(c3, -90, L)
  const r3a = at(c3, 150, L)
  const r3b = at(c3, 30, L)
  const r3c = at(c3, 90, L)
  const isAdd = kind === 'add'
  return `
${BOND(c1, o1, 2, 0, 13)}${ATOM(o1, 'O')}
${BOND(c1, ra, 1, 0, 11)}${ATOM(ra, 'R', 20)}
${BOND(c1, rb, 1, 0, isAdd ? 12 : 10)}${isAdd ? ATOM(rb, 'R′', 20) : `<g class="fig-accent">${ATOM(rb, 'L', 21, '700')}</g>`}
${ATOM(nu, 'Nu', 20)}${CHG(nu, '−', -40, 20)}
${ARR(156, y0 + 95, 202, y0 + 95, mk, 3)}
${BOND(c2, o2, 1, 0, 13)}${ATOM(o2, 'O')}${CHG(o2, '−', -20, 19)}${isAdd ? '' : LP(o2, 200, 17)}
${BOND(c2, r2a, 1, 0, 11)}${ATOM(r2a, 'R', 20)}
${BOND(c2, r2b, 1, 0, isAdd ? 12 : 10)}${isAdd ? ATOM(r2b, 'R′', 20) : `<g class="fig-accent">${ATOM(r2b, 'L', 21, '700')}</g>`}
${BOND(c2, nu2, 1, 0, 12)}${ATOM(nu2, 'Nu', 20)}
<g class="fig-muted">${T(c2[0], y0 + 172, 15, isAdd ? 'tetrahedral alkoxide (sp³)' : 'tetrahedral intermediate', 'middle')}</g>
${ARR(336, y0 + 95, 382, y0 + 95, mk, 3)}
${isAdd ? T(359, y0 + 84, 16, 'H⁺', 'middle', '700') : ''}
${isAdd ? `${BOND(c3, o3, 1, 0, 15)}${ATOM(o3, 'OH')}` : `${BOND(c3, o3, 2, 0, 13)}${ATOM(o3, 'O')}`}
${isAdd ? `${BOND(c3, at(c3, 160, L), 1, 0, 11)}${ATOM(at(c3, 160, L), 'R', 20)}${BOND(c3, at(c3, 20, L), 1, 0, 12)}${ATOM(at(c3, 20, L), 'R′', 20)}${BOND(c3, r3c, 1, 0, 12)}${ATOM(r3c, 'Nu', 20)}` : `${BOND(c3, r3a, 1, 0, 11)}${ATOM(r3a, 'R', 20)}${BOND(c3, r3b, 1, 0, 13)}${ATOM(r3b, 'Nu', 20)}`}
<g class="fig-muted">${T(c3[0], y0 + 172, 15, isAdd ? 'alcohol' : 'C=O reformed', 'middle')}</g>
${isAdd ? '' : `<g class="fig-accent">${T(516, y0 + 150, 19, '+ L⁻', 'start', '700')}</g>`}
<g class="fig-accent-2"><defs>${ARROW(`${mk}-red`)}</defs>
${CURL(`M${nu[0] + 14} ${nu[1] + 12} C${nu[0] + 30} ${nu[1] + 24}, ${c1[0] - 34} ${c1[1] - 2}, ${c1[0] - 9} ${c1[1] - 5}`, `${mk}-red`)}
${CURL(`M${c1[0] + 6} ${c1[1] - 16} C${c1[0] + 30} ${c1[1] - 20}, ${o1[0] + 30} ${o1[1] - 2}, ${o1[0] + 14} ${o1[1] - 8}`, `${mk}-red`)}
${isAdd ? '' : CURL(`M${o2[0] - 22} ${o2[1] + 4} C${o2[0] - 46} ${o2[1] + 14}, ${c2[0] - 34} ${c2[1] - 12}, ${c2[0] - 6} ${c2[1] - 20}`, `${mk}-red`)}
${isAdd ? '' : CURL(`M${r1((c2[0] + r2b[0]) / 2)} ${r1((c2[1] + r2b[1]) / 2 + 6)} C${r2b[0] - 14} ${r2b[1] + 44}, ${r2b[0] + 44} ${r2b[1] + 48}, ${r2b[0] + 15} ${r2b[1] + 14}`, `${mk}-red`)}
</g>`
}
const masterSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-cny-master')}${ARROW('arr-cny-master2')}</defs>
${T(16, 26, 18, 'Aldehyde / ketone → nucleophilic ADDITION', 'start', '700')}
<g class="fig-muted">${T(16, 48, 15, 'no leaving group: Nu stays, C goes sp² → sp³')}</g>
${mechPanel(20, 'add', 'arr-cny-master')}
<g class="fig-muted">${LINE(16, 216, 544, 216, 1.5)}</g>
${T(16, 246, 18, 'Acid derivative → nucleophilic ACYL SUBSTITUTION', 'start', '700')}
<g class="fig-muted">${T(16, 268, 15, 'L is attached: the intermediate expels it, C=O reforms')}</g>
${mechPanel(240, 'sub', 'arr-cny-master2')}
</svg>`

/* ---------------------------------------------------------------------------
   2 — Why the carbon is attacked, and why aldehydes beat ketones (lead, 1000×460)
   --------------------------------------------------------------------------- */
const donor = (r: P, c: P) => {
  // a short grey arrow beside the R–C bond, pointing into C (electron donation)
  const dx = c[0] - r[0]
  const dy = c[1] - r[1]
  const len = Math.hypot(dx, dy)
  const ux = dx / len
  const uy = dy / len
  const side = ux > 0 ? 1 : -1
  const nx = -uy * 14 * side
  const ny = ux * 14 * side
  const mx = (r[0] + c[0]) / 2 + nx
  const my = (r[1] + c[1]) / 2 + ny
  return ARR(mx - ux * 14, my - uy * 14, mx + ux * 12, my + uy * 12, 'arr-cny-ak-muted', 2.5)
}
const akCarbonyl = (c: P, left: string, right: string) => {
  const o = at(c, -90, 52)
  const a = at(c, 150, 52)
  const b = at(c, 30, 52)
  return `${BOND(c, o, 2, 0, 14)}${ATOM(o, 'O', 26)}${BOND(c, a, 1, 0, left === 'H' ? 11 : 12)}${ATOM(a, left, 24)}${BOND(c, b, 1, 0, 12)}${ATOM(b, right, 24)}`
}
const akC1: P = [100, 215]
const akC2: P = [262, 215]
const akAld: P = [540, 225]
const akKet: P = [840, 225]
const aldKetSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cny-ak')}</defs>
${T(180, 44, 22, 'Why the carbon is attacked', 'middle', '700')}
${akCarbonyl(akC1, 'R', 'R′')}
${T(181, 212, 30, '↔', 'middle')}
${BOND(akC2, at(akC2, -90, 52), 1, 0, 14)}${ATOM(at(akC2, -90, 52), 'O', 26)}${CHG(at(akC2, -90, 52), '−', -30, 20)}
${BOND(akC2, at(akC2, 150, 52), 1, 0, 12)}${ATOM(at(akC2, 150, 52), 'R', 24)}${BOND(akC2, at(akC2, 30, 52), 1, 0, 12)}${ATOM(at(akC2, 30, 52), 'R′', 24)}
<g class="fig-accent">${CHG(akC2, '+', 90, 18)}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-cny-ak-red')}</defs>
${CURL(`M${akC1[0] + 7} ${akC1[1] - 20} C${akC1[0] + 34} ${akC1[1] - 24}, ${akC1[0] + 34} ${akC1[1] - 54}, ${akC1[0] + 16} ${akC1[1] - 58}`, 'arr-cny-ak-red')}
${CURL('M396 214 C430 206, 470 206, 528 220', 'arr-cny-ak-red')}
${CURL('M696 214 C730 206, 770 206, 826 220', 'arr-cny-ak-red', 2)}
</g>
<g class="fig-accent">${T(180, 300, 20, 'δ+ carbon: the electrophile', 'middle', '700')}</g>
${T(180, 330, 18, 'δ− oxygen: weakly basic', 'middle')}
<g class="fig-muted">${LINE(360, 30, 360, 350, 1.5)}${LINE(680, 70, 680, 350, 1.5)}</g>
${T(520, 44, 22, 'Aldehyde', 'middle', '700')}
${T(840, 44, 22, 'Ketone', 'middle', '700')}
${ATOM([382, 214], 'Nu', 22)}${CHG([382, 214], '−', -40, 22)}
${ATOM([682 + 0, 214], 'Nu', 22)}${CHG([682, 214], '−', -40, 22)}
${akCarbonyl(akAld, 'H', 'R')}
${akCarbonyl(akKet, 'R', 'R′')}
<g class="fig-muted"><defs>${ARROW('arr-cny-ak-muted')}</defs>
${donor(at(akAld, 30, 52), akAld)}
${donor(at(akKet, 150, 52), akKet)}${donor(at(akKet, 30, 52), akKet)}
</g>
<g class="fig-accent">${T(akAld[0] + 16, akAld[1] - 14, 26, 'δ+', 'start', '700')}</g>
${T(akKet[0] + 16, akKet[1] - 14, 18, 'δ+', 'start')}
<g class="fig-accent">
${T(520, 300, 19, 'small H: open approach', 'middle', '700')}
${T(520, 328, 19, 'one alkyl donor: stronger δ+', 'middle', '700')}
</g>
<g class="fig-accent-2">
${T(840, 300, 19, 'two R groups: crowded', 'middle', '700')}
${T(840, 328, 19, 'two alkyl donors: weaker δ+', 'middle', '700')}
</g>
${BAND(40, 372, 920, 72)}
${T(500, 404, 22, 'Aldehydes beat ketones at addition: less hindered AND more electrophilic', 'middle', '700')}
<g class="fig-muted">${T(500, 432, 17, 'grey arrows = alkyl electron donation into the carbonyl carbon; formaldehyde (H, H) is > 99 % hydrated in water', 'middle')}</g>
</svg>`

/* ---------------------------------------------------------------------------
   3 — The acyl reactivity ladder (lead, 1000×460)
   --------------------------------------------------------------------------- */
const RUNG_Y = [78, 134, 190, 246, 302, 358]
const rung = (i: number, name: string, formula: string, lg: string, cls = '') => {
  const y = RUNG_Y[i]
  const inner = `${BOX(150, y - 22, 330, 44)}${T(166, y + 7, 20, name, 'start', '700')}${T(466, y + 7, 18, formula, 'end')}${T(552, y + 7, 19, lg, 'middle')}`
  return cls ? `<g class="${cls}">${inner}</g>` : inner
}
const ladderSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cny-lad')}</defs>
${T(315, 36, 18, 'most reactive', 'middle', '700')}
${T(552, 36, 18, 'leaving group', 'middle', '700')}
${rung(0, 'acyl chloride', 'RCOCl', 'Cl⁻')}
${rung(1, 'anhydride', '(RCO)₂O', 'RCOO⁻')}
${rung(2, 'thioester (acetyl-CoA)', 'RCOSR′', '', 'fig-muted')}
${rung(3, 'ester ≈ acid', 'RCOOR′ / RCOOH', 'RO⁻, HO⁻')}
${rung(4, 'amide', 'RCONH₂', 'NH₂⁻')}
${rung(5, 'carboxylate', 'RCOO⁻', 'dead end')}
${T(315, 408, 18, 'least reactive', 'middle', '700')}
<g class="fig-muted">${T(552, 408, 16, 'weaker base = better LG', 'middle')}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-cny-lad-red')}</defs>
${CURL(`M146 ${RUNG_Y[3]} C96 ${RUNG_Y[3] - 10}, 96 ${RUNG_Y[0] + 10}, 140 ${RUNG_Y[0]}`, 'arr-cny-lad-red', 3)}
${T(86, RUNG_Y[1] + 34, 18, 'SOCl₂', 'end', '700')}
${T(630, 248, 21, '↑ uphill needs activation', 'start', '700')}
${T(650, 276, 18, 'acid + SOCl₂ → acyl chloride')}
</g>
<g class="fig-accent"><defs>${ARROW('arr-cny-lad-blue')}</defs>
${CURL(`M484 ${RUNG_Y[0] + 8} C512 ${RUNG_Y[0] + 60}, 512 ${RUNG_Y[4] - 60}, 486 ${RUNG_Y[4] - 6}`, 'arr-cny-lad-blue', 3)}
${T(630, 172, 21, '↓ downhill goes directly', 'start', '700')}
${T(650, 200, 18, 'acyl chloride + amine → amide')}
</g>
${T(630, 70, 21, 'Two reasons, one order:', 'start', '700')}
${T(650, 98, 18, '• better leaving group (weaker base)')}
${T(650, 122, 18, '• less resonance donation into C=O')}
<g class="fig-muted">
${T(655, 322, 17, 'Cl donates poorly: acyl chlorides stay hot')}
${T(655, 346, 17, 'N donates strongly: amides are calm')}
${T(655, 374, 17, 'thioester: poor S overlap → high transfer')}
${T(655, 398, 17, 'potential (between anhydride and ester)')}
</g>
</svg>`

/* ---------------------------------------------------------------------------
   4 — Amide resonance: R–CO–NH–R′ ↔ R–C(O⁻)=N⁺H–R′ (lead, 1000×460)
   --------------------------------------------------------------------------- */
const amide = (c: P, ionic: boolean) => {
  const o = at(c, -90, 56)
  const r = at(c, 150, 56)
  const n = at(c, 30, 56)
  const h = at(n, 90, 48)
  const r2 = at(n, -30, 56)
  return {
    o,
    n,
    svg: `${BOND(c, o, ionic ? 1 : 2, 0, 14)}${ATOM(o, 'O', 26)}${ionic ? CHG(o, '−', -30, 21) : ''}
${BOND(c, r, 1, 0, 12)}${ATOM(r, 'R', 24)}
${ionic ? `<g class="fig-accent">${BOND(c, n, 2, 0, 14, 3.5)}</g>` : BOND(c, n, 1, 0, 14)}<g class="fig-accent">${ATOM(n, 'N', 26, '700')}</g>${ionic ? CHG(n, '+', -90, 22) : LP(n, -90, 20)}
${BOND(n, h, 1, 14, 11)}${ATOM(h, 'H', 22)}
${BOND(n, r2, 1, 14, 13)}${ATOM(r2, 'R′', 24)}`,
  }
}
const amA = amide([180, 210], false)
const amB = amide([520, 210], true)
const consequence = (y: number, head: string, sub: string) =>
  `${BOX(700, y, 280, 88)}${T(716, y + 34, 20, head, 'start', '700')}<g class="fig-muted">${T(716, y + 64, 17, sub)}</g>`
const amideSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cny-am')}</defs>
${amA.svg}
${T(380, 222, 34, '↔', 'middle')}
${amB.svg}
<g class="fig-accent-2"><defs>${ARROW('arr-cny-am-red')}</defs>
${CURL(`M${amA.n[0] - 6} ${amA.n[1] - 26} C${amA.n[0] - 16} ${amA.n[1] - 44}, ${amA.n[0] - 36} ${amA.n[1] - 34}, ${amA.n[0] - 26} ${amA.n[1] - 16}`, 'arr-cny-am-red')}
${CURL(`M${amA.o[0] - 7} ${amA.o[1] + 30} C${amA.o[0] - 34} ${amA.o[1] + 28}, ${amA.o[0] - 36} ${amA.o[1] - 4}, ${amA.o[0] - 18} ${amA.o[1] - 10}`, 'arr-cny-am-red')}
</g>
${T(200, 322, 18, 'N lone pair next to C=O', 'middle')}
${T(540, 322, 18, 'charge-separated form', 'middle')}
${BAND(60, 352, 600, 76)}
<g class="fig-accent">${T(360, 384, 21, 'real amide = hybrid: C–N ≈ 40 % double bond', 'middle', '700')}</g>
${T(360, 412, 18, 'the lone pair is shared with the carbonyl', 'middle')}
${consequence(40, 'planar, rigid C–N', 'the peptide-backbone geometry')}
${consequence(150, 'N is non-basic', 'lone pair busy; protonates on O')}
${consequence(260, 'least reactive derivative', 'needs a protease or acid + heat')}
</svg>`

/* ---------------------------------------------------------------------------
   5 — Why α-hydrogens are acidic: acetone + base → resonance-stabilised
       enolate, beside a pKa scale (lead, 1000×460)
   --------------------------------------------------------------------------- */
const acetone = (c: P, form: 'keto' | 'carbanion' | 'oxyanion') => {
  const o = at(c, -90, 50)
  const me = at(c, 150, 50)
  const ca = at(c, 30, 50)
  const parts = [
    BOND(c, o, form === 'oxyanion' ? 1 : 2, 0, 14),
    ATOM(o, 'O', 26),
    form === 'oxyanion' ? CHG(o, '−', -30, 21) : '',
    BOND(c, me, 1),
    `<g class="fig-accent">${BOND(c, ca, form === 'oxyanion' ? 2 : 1, 0, 0, form === 'oxyanion' ? 3.5 : 3)}</g>`,
    `<g class="fig-accent">${T(ca[0] + 12, ca[1] - 10, 18, 'α', 'start', '700')}</g>`,
    form === 'carbanion' ? `${LP(ca, 70, 16)}${CHG(ca, '−', 15, 28)}` : '',
  ]
  return { o, ca, svg: parts.join('') }
}
const acK = acetone([108, 200], 'keto')
const acH = at(acK.ca, 90, 46)
const acC = acetone([372, 200], 'carbanion')
const acO = acetone([600, 200], 'oxyanion')
const pk = (v: number) => 80 + (v - 5) * 6.4
const alphaSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cny-alpha')}</defs>
${acK.svg}
${BOND(acK.ca, acH, 1, 0, 11)}<g class="fig-accent">${ATOM(acH, 'H', 22, '700')}</g>
${ATOM([226, 312], 'B', 22)}${CHG([226, 312], '−', -40, 18)}${LP([226, 312], 180, 15)}
${ARR(214, 206, 268, 206, 'arr-cny-alpha', 3)}
<g class="fig-accent-2"><defs>${ARROW('arr-cny-alpha-red')}</defs>
${CURL('M208 311 C192 312, 178 300, 166 290', 'arr-cny-alpha-red')}
${CURL(`M${acK.ca[0] - 5} ${acK.ca[1] + 24} C${acK.ca[0] - 20} ${acK.ca[1] + 22}, ${acK.ca[0] - 28} ${acK.ca[1] + 8}, ${acK.ca[0] - 24} ${acK.ca[1] - 5}`, 'arr-cny-alpha-red')}
${CURL(`M${acK.o[0] + 7} ${acK.o[1] + 30} C${acK.o[0] + 34} ${acK.o[1] + 26}, ${acK.o[0] + 34} ${acK.o[1] - 4}, ${acK.o[0] + 16} ${acK.o[1] - 8}`, 'arr-cny-alpha-red')}
${CURL(`M${acC.ca[0] - 1} ${acC.ca[1] + 22} C${acC.ca[0] - 22} ${acC.ca[1] + 24}, ${acC.ca[0] - 30} ${acC.ca[1] + 6}, ${acC.ca[0] - 23} ${acC.ca[1] - 6}`, 'arr-cny-alpha-red')}
${CURL(`M${acC.o[0] + 7} ${acC.o[1] + 30} C${acC.o[0] + 34} ${acC.o[1] + 26}, ${acC.o[0] + 34} ${acC.o[1] - 4}, ${acC.o[0] + 16} ${acC.o[1] - 8}`, 'arr-cny-alpha-red')}
</g>
${acC.svg}
${acO.svg}
${T(486, 214, 32, '↔', 'middle')}
<g class="fig-muted">
<path d="M304 132 L294 132 L294 286 L304 286" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M674 132 L684 132 L684 286 L674 286" fill="none" stroke="currentColor" stroke-width="2.5"/>
</g>
${T(120, 112, 19, 'acetone', 'middle', '700')}
<g class="fig-accent">${T(490, 336, 21, 'enolate: charge shared by Cα and O', 'middle', '700')}</g>
${T(490, 366, 18, 'O carries more of it, but C usually attacks', 'middle')}
<g class="fig-muted">${T(360, 412, 17, 'B⁻ takes the α-H; its C–H electrons end up on Cα or O', 'middle')}</g>
<g class="fig-muted">${LINE(712, 30, 712, 440, 1.5)}</g>
${T(736, 44, 21, 'pKa of the C–H', 'start', '700')}
${LINE(752, pk(5), 752, pk(55), 3)}
<g class="fig-muted">${T(766, pk(5) + 4, 14, '↑ more acidic')}</g>
${LINE(744, pk(50), 760, pk(50), 3)}
${T(772, pk(50) + 7, 19, '~50  alkane C–H', 'start', '700')}
<g class="fig-accent">
${LINE(742, pk(20), 762, pk(20), 4)}
${T(772, pk(20) + 7, 19, '~20  α-H, one C=O', 'start', '700')}
</g>
<g class="fig-accent-2">
<rect x="743" y="${r1(pk(9))}" width="18" height="${r1(pk(13) - pk(9))}" rx="3" fill="currentColor" fill-opacity="0.8"/>
${T(772, pk(11) + 7, 19, '9–13  between two C=O', 'start', '700')}
</g>
<g class="fig-muted">${T(736, 436, 16, '9–13: OH⁻ / RO⁻ remove it fully')}</g>
</svg>`

/* ---------------------------------------------------------------------------
   6 — Kinetic vs thermodynamic enolates of 2-butanone (lead, 1000×460)
   --------------------------------------------------------------------------- */
const butanone = (c1: P, form: 'keto' | 'kinetic' | 'thermo', L = 50) => {
  const c2 = at(c1, -30, L)
  const o = at(c2, -90, L)
  const c3 = at(c2, 30, L)
  const c4 = at(c3, -30, L)
  const enol = form !== 'keto'
  const kin = form === 'kinetic'
  const thermo = form === 'thermo'
  return {
    c1,
    c2,
    c3,
    c4,
    svg: `${BOND(c2, o, enol ? 1 : 2, 0, 14)}${ATOM(o, 'O', 26)}${enol ? CHG(o, '−', -30, 21) : ''}
${kin ? `<g class="fig-accent">${BOND(c1, c2, 2, 0, 0, 3.5)}</g>` : BOND(c1, c2)}
${thermo ? `<g class="fig-accent-2">${BOND(c2, c3, 2, 0, 0, 3.5)}</g>` : BOND(c2, c3)}
${BOND(c3, c4)}`,
  }
}
const bK = butanone([440, 132], 'keto')
const bKin = butanone([110, 330], 'kinetic')
const bTh = butanone([760, 330], 'thermo')
const enolateSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cny-enol')}</defs>
${bK.svg}
${T(500, 36, 20, '2-butanone: two different α carbons', 'middle', '700')}
<g class="fig-accent"><circle cx="${bK.c1[0]}" cy="${bK.c1[1]}" r="7" fill="currentColor"/>${T(bK.c1[0] - 16, bK.c1[1] + 6, 18, 'CH₃ side: 3 H, open', 'end', '700')}</g>
<g class="fig-accent-2"><circle cx="${bK.c3[0]}" cy="${bK.c3[1]}" r="7" fill="currentColor"/>${T(bK.c3[0] + 4, bK.c3[1] + 34, 18, 'CH₂ side: more substituted', 'start', '700')}</g>
<g class="fig-accent"><defs>${ARROW('arr-cny-enol-blue')}</defs>
${ARR(412, 160, 312, 240, 'arr-cny-enol-blue', 3.5)}
${T(330, 176, 19, 'LDA, −78 °C', 'end', '700')}
</g>
<g class="fig-accent-2"><defs>${ARROW('arr-cny-enol-red')}</defs>
${ARR(560, 200, 680, 262, 'arr-cny-enol-red', 3.5)}
${T(650, 214, 19, 'NaOEt, 25 °C', 'start', '700')}
</g>
${bKin.svg}
${bTh.svg}
<g class="fig-accent">${T(185, 392, 22, 'KINETIC enolate', 'middle', '700')}</g>
${T(185, 420, 18, 'less substituted C=C · forms fastest', 'middle')}
<g class="fig-muted">${T(185, 444, 16, 'bulky strong base, cold: irreversible', 'middle')}</g>
<g class="fig-accent-2">${T(835, 392, 22, 'THERMODYNAMIC enolate', 'middle', '700')}</g>
${T(835, 420, 18, 'more substituted C=C · more stable', 'middle')}
<g class="fig-muted">${T(835, 444, 16, 'small base, warmer: equilibrates', 'middle')}</g>
<g class="fig-muted">${T(500, 330, 17, 'alkylation then lands on', 'middle')}${T(500, 352, 17, 'whichever α carbon lost its H', 'middle')}</g>
</svg>`

/* ---------------------------------------------------------------------------
   7 — The aldol on acetaldehyde: enolate attacks a second CH₃CHO →
       alkoxide → 3-hydroxybutanal → (heat, −H₂O) 2-butenal (lead, 1000×460)
   --------------------------------------------------------------------------- */
const AL = 46
/** CH₃–CH(X)–CH₂–CHO or CH₃–CH=CH–CHO on a zigzag starting at the methyl carbon. */
const c4Chain = (c4: P, kind: 'alkoxide' | 'aldol' | 'enal') => {
  const c3 = at(c4, -30, AL)
  const c2 = at(c3, 30, AL)
  const c1 = at(c2, -30, AL)
  const o1 = at(c1, 30, AL)
  const h1 = at(c1, -90, 38)
  const x = at(c3, -90, AL)
  const parts = [
    BOND(c4, c3),
    kind === 'enal' ? `<g class="fig-accent-2">${BOND(c3, c2, 2, 0, 0, 3.5)}</g>` : `<g class="fig-accent">${BOND(c3, c2, 1, 0, 0, 5)}</g>`,
    BOND(c2, c1),
    BOND(c1, o1, 2, 0, 14),
    ATOM(o1, 'O', 24),
    BOND(c1, h1, 1, 0, 11),
    ATOM(h1, 'H', 20),
  ]
  if (kind === 'alkoxide') parts.push(BOND(c3, x, 1, 0, 14), ATOM(x, 'O', 24), CHG(x, '−', -30, 19))
  if (kind === 'aldol') parts.push(BOND(c3, x, 1, 0, 16), ATOM(x, 'OH', 24))
  if (kind !== 'alkoxide') {
    parts.push(`<g class="fig-muted">${T(c3[0], c3[1] + 30, 17, 'β', 'middle', '700')}${T(c2[0], c2[1] + 30, 17, 'α', 'middle', '700')}</g>`)
  }
  return { c3, c2, o1, svg: parts.join('') }
}
// enolate (carbanion form) of acetaldehyde: O=C(H)–CH₂⁻, the α carbon on the right
const enO: P = [54, 152]
const enC1 = at(enO, -30, AL)
const enH = at(enC1, -90, 38)
const enCa = at(enC1, 30, AL)
// second acetaldehyde: carbonyl carbon facing the enolate
const a2C: P = [238, 150]
const a2Ox = at(a2C, -90, AL)
const a2Me = at(a2C, 30, AL)
const a2Hy = at(a2C, 150, 36)
const alk = c4Chain([392, 168], 'alkoxide')
const ald = c4Chain([700, 168], 'aldol')
const enal = c4Chain([700, 388], 'enal')
const aldolSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cny-aldol')}</defs>
<g transform="translate(0 -20)">
${BOND(enO, enC1, 2, 14, 0)}${ATOM(enO, 'O', 24)}${BOND(enC1, enH, 1, 0, 11)}${ATOM(enH, 'H', 20)}
${BOND(enC1, enCa)}<g class="fig-accent">${LP(enCa, 20, 15)}</g>${CHG(enCa, '−', -60, 20)}
${BOND(a2C, a2Ox, 2, 0, 14)}${ATOM(a2Ox, 'O', 24)}${BOND(a2C, a2Me)}${BOND(a2C, a2Hy, 1, 0, 11)}${ATOM(a2Hy, 'H', 20)}
<g class="fig-accent-2"><defs>${ARROW('arr-cny-aldol-red')}</defs>
${CURL(`M${enCa[0] + 18} ${enCa[1] - 2} C${enCa[0] + 40} ${enCa[1] - 36}, ${a2C[0] - 40} ${a2C[1] - 34}, ${a2C[0] - 8} ${a2C[1] - 6}`, 'arr-cny-aldol-red')}
${CURL(`M${a2C[0] + 6} ${a2C[1] - 18} C${a2C[0] + 30} ${a2C[1] - 20}, ${a2Ox[0] + 30} ${a2Ox[1] + 2}, ${a2Ox[0] + 15} ${a2Ox[1] - 8}`, 'arr-cny-aldol-red')}
</g>
<g class="fig-muted">
${T(96, 232, 16, 'enolate (from OH⁻', 'middle')}${T(96, 252, 16, '+ CH₃CHO): nucleophile', 'middle')}
${T(250, 232, 16, 'second CH₃CHO:', 'middle')}${T(250, 252, 16, 'electrophile', 'middle')}
</g>
${ARR(306, 150, 362, 150, 'arr-cny-aldol', 3)}
${alk.svg}
<g class="fig-muted">${T(482, 232, 16, 'alkoxide', 'middle')}</g>
${ARR(590, 150, 654, 150, 'arr-cny-aldol', 3)}
${T(622, 138, 17, 'H₂O', 'middle', '700')}
${ald.svg}
${T(770, 254, 18, '3-hydroxybutanal (the aldol)', 'middle', '700')}
<g class="fig-muted">${T(770, 276, 16, 'OH on the β carbon', 'middle')}</g>
</g>
${ARR(975, 190, 975, 340, 'arr-cny-aldol', 3)}
${T(964, 262, 17, 'heat', 'end', '700')}${T(964, 284, 17, '−H₂O', 'end', '700')}
${enal.svg}
<g class="fig-accent-2">${T(780, 448, 18, '2-butenal: conjugated C=C–C=O', 'middle', '700')}</g>
${T(30, 318, 19, '① base removes an α-H → enolate')}
<g class="fig-accent">${T(30, 348, 19, '② the enolate α-C attacks another C=O: new C–C bond', 'start', '700')}</g>
${T(30, 378, 19, '③ protonate → β-hydroxy carbonyl (the aldol)')}
${T(30, 408, 19, '④ heat: lose α-H + β-OH (E1cb) → conjugated product')}
<g class="fig-muted">${T(30, 440, 16, 'retro-aldol runs it backward (aldolase in glycolysis)')}</g>
</svg>`

/* ---------------------------------------------------------------------------
   8 — Conjugate (Michael) addition: the two electrophilic sites of an enone
       R–CO–CH=CH₂ (lead, 1000×460)
   --------------------------------------------------------------------------- */
const mR: P = [394, 236]
const mC2 = at(mR, -30, 56)
const mO = at(mC2, -90, 56)
const mC3 = at(mC2, 30, 56)
const mC4 = at(mC3, -30, 56)
const michaelSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cny-mich')}</defs>
${BOND(mR, mC2, 1, 13, 0)}${ATOM(mR, 'R', 24)}
${BOND(mC2, mO, 2, 0, 14)}${ATOM(mO, 'O', 26)}
${BOND(mC2, mC3)}${BOND(mC3, mC4, 2)}
<g class="fig-muted">
${T(mO[0] + 22, mO[1] + 8, 17, '1')}
${T(mC2[0], mC2[1] + 34, 17, '2', 'middle')}
${T(mC3[0], mC3[1] + 30, 17, '3 (α)', 'middle')}
${T(mC4[0] + 16, mC4[1] + 26, 17, '4 (β)')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-cny-mich-blue')}</defs>
${BOX(40, 40, 300, 100, false, 2.5)}
${T(190, 76, 20, 'hard / strong Nu', 'middle', '700')}
${T(190, 106, 18, 'RMgX, RLi, LiAlH₄', 'middle')}
${CURL(`M300 144 C330 196, 380 214, ${mC2[0] - 10} ${mC2[1] - 4}`, 'arr-cny-mich-blue', 3.5)}
${T(mC2[0] + 12, mC2[1] - 12, 22, 'δ+', 'start', '700')}
${BOX(40, 320, 400, 100, false, 2.5)}
${T(240, 356, 20, '1,2-addition at the C=O carbon', 'middle', '700')}
${T(240, 388, 18, 'C=O becomes an alcohol; C=C kept', 'middle')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-cny-mich-red')}</defs>
${BOX(660, 40, 300, 100, false, 2.5)}
${T(810, 76, 20, 'soft / stabilised Nu', 'middle', '700')}
${T(810, 106, 18, 'enolates, amines, thiols, CN⁻', 'middle')}
${CURL(`M700 144 C680 180, ${mC4[0] + 60} ${mC4[1] - 30}, ${mC4[0] + 10} ${mC4[1] - 8}`, 'arr-cny-mich-red', 3.5)}
${T(mC4[0] + 2, mC4[1] - 22, 22, 'δ+', 'middle', '700')}
${BOX(560, 320, 400, 100, false, 2.5)}
${T(760, 356, 20, '1,4 (conjugate) addition at β', 'middle', '700')}
${T(760, 388, 18, 'enol tautomerises: C=O kept, C=C gone', 'middle')}
</g>
<g class="fig-muted">${T(500, 446, 17, 'glutathione (a thiol) traps Michael acceptors in cells', 'middle')}</g>
</svg>`

/* ---------------------------------------------------------------------------
   9 — The oxidation ladder for 1°, 2°, 3° alcohols, with the reductants
       running back down (lead, 1000×460)
   --------------------------------------------------------------------------- */
const OX_X = [200, 500, 800]
const species = (x: number, y: number, text: string, cls = '') => {
  const inner = `${BOX(x - 85, y - 24, 170, 48, false, 2.5)}${T(x, y + 8, 22, text, 'middle', '700')}`
  return cls ? `<g class="${cls}">${inner}</g>` : inner
}
const oxidationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cny-ox')}</defs>
<g class="fig-muted"><defs>${ARROW('arr-cny-ox-muted')}</defs>
${ARR(120, 30, 900, 30, 'arr-cny-ox-muted', 2.5)}
${T(510, 22, 16, 'oxidation level of the carbon rises →', 'middle')}
</g>
${T(OX_X[0], 66, 19, 'alcohol', 'middle', '700')}
${T(OX_X[1], 66, 19, 'aldehyde / ketone', 'middle', '700')}
${T(OX_X[2], 66, 19, 'carboxylic acid', 'middle', '700')}
${T(40, 128, 19, '1°', 'start', '700')}${T(40, 278, 19, '2°', 'start', '700')}${T(40, 364, 19, '3°', 'start', '700')}
${species(OX_X[0], 120, 'RCH₂OH')}
${species(OX_X[1], 120, 'RCHO')}
${species(OX_X[2], 120, 'RCOOH')}
<g class="fig-accent"><defs>${ARROW('arr-cny-ox-blue')}</defs>
${ARR(290, 120, 410, 120, 'arr-cny-ox-blue', 3.5)}
${T(350, 106, 18, 'PCC: stops', 'middle', '700')}
</g>
${ARR(590, 120, 710, 120, 'arr-cny-ox', 3)}
${T(650, 106, 16, 'Tollens', 'middle')}${T(650, 146, 14, '(Ag mirror)', 'middle')}
<g class="fig-accent-2"><defs>${ARROW('arr-cny-ox-red')}</defs>
${CURL('M200 148 C240 214, 760 214, 796 152', 'arr-cny-ox-red', 3.5)}
${T(500, 222, 18, 'Jones / KMnO₄ / K₂Cr₂O₇: all the way to the acid', 'middle', '700')}
</g>
${species(OX_X[0], 270, 'R₂CHOH')}
${species(OX_X[1], 270, 'R₂C=O')}
${ARR(290, 270, 410, 270, 'arr-cny-ox', 3)}
${T(350, 256, 16, 'any oxidant', 'middle')}
<g class="fig-muted">${T(600, 266, 18, '✕ stops: a ketone has no')}${T(600, 290, 18, 'H on the carbonyl carbon')}</g>
${species(OX_X[0], 356, 'R₃COH')}
<g class="fig-muted">${T(300, 352, 18, '✕ no oxidation: no H on the carbinol carbon')}</g>
<g class="fig-accent"><defs>${ARROW('arr-cny-ox-blue2')}</defs>
${ARR(880, 408, 130, 408, 'arr-cny-ox-blue2', 2.5)}
</g>
${T(505, 440, 17, 'reduction runs back down: NaBH₄ (aldehydes, ketones only) · LiAlH₄ (esters, acids → 1° alcohols too)', 'middle')}
</svg>`

export const mcatCarbonylsFigures: DeckFigurePlacement[] = [
  {
    at: 'Two Master Mechanisms',
    mode: 'replace-table',
    figure: {
      svg: masterSvg,
      alt:
        'Two mechanisms drawn with curved arrows. Top, nucleophilic addition to an aldehyde or ketone: a nucleophile Nu⁻ attacks the carbonyl carbon of R–CO–R′ while the C=O pi electrons move onto oxygen, giving a tetrahedral sp³ alkoxide with O⁻, R, R′ and Nu on the carbon; adding H⁺ gives the alcohol. Nothing leaves. Bottom, nucleophilic acyl substitution on an acid derivative R–CO–L: Nu⁻ attacks the same way to give a tetrahedral intermediate bearing O⁻, R, L and Nu; then the oxygen lone pair swings back down to reform C=O and the C–L bond breaks, expelling L⁻ and leaving R–CO–Nu.',
      caption: 'Same first step, different ending: with no leaving group the nucleophile stays (addition); with one attached, the tetrahedral intermediate expels it and C=O reforms (substitution).',
    },
    blocks: [
      '- **Aldehydes & ketones**: no leaving group, so Nu **adds**; C goes sp² → sp³',
      '- **Acid derivatives**: Nu adds, then the leaving group is **expelled** and C=O reforms',
      '- Both start at the electrophilic carbonyl carbon',
    ],
  },
  {
    at: 'Aldehyde vs Ketone Reactivity',
    mode: 'lead',
    figure: {
      svg: aldKetSvg,
      alt:
        'Left: the carbonyl group R–CO–R′ drawn beside its resonance form, in which the oxygen carries a negative charge and the carbon a positive charge; a curved arrow moves the C=O pi electrons onto oxygen. So the carbon is δ+ (the electrophile) and the oxygen δ− (weakly basic). Middle: an aldehyde, with H and R on the carbonyl carbon, attacked by Nu⁻ from the H side; it has an open approach and only one alkyl group donating electrons, so its δ+ is drawn larger. Right: a ketone, with R and R′, attacked by Nu⁻ with a thinner arrow; it is crowded by two R groups and has two alkyl donors, so its δ+ is smaller. Bottom: aldehydes beat ketones at addition because they are less hindered and more electrophilic; formaldehyde (H, H) is more than 99 % hydrated in water.',
      caption: 'One H instead of a second alkyl group: less steric crowding at the carbonyl carbon AND less electron donation into it, so aldehydes add faster.',
    },
    blocks: [
      '- **Sterics**: an H leaves the carbonyl carbon open; a second R group crowds it',
      '- **Electronics**: each alkyl group donates electrons and weakens the δ+',
    ],
  },
  {
    at: 'The Reactivity Ladder',
    mode: 'lead',
    figure: {
      svg: ladderSvg,
      alt:
        'A ladder of acid derivatives from most to least reactive: acyl chloride RCOCl (leaving group Cl⁻), anhydride (RCO)₂O (leaving group RCOO⁻), thioester RCOSR′ such as acetyl-CoA (in grey, between anhydride and ester), ester RCOOR′ roughly equal to carboxylic acid RCOOH (leaving groups RO⁻ and HO⁻), amide RCONH₂ (leaving group NH₂⁻), and carboxylate RCOO⁻ at the bottom as a dead end. The weaker the leaving group as a base, the better it leaves. A blue arrow runs downhill from acyl chloride to amide: downhill conversions go directly, for example acyl chloride + amine → amide. A red arrow runs uphill from the acid rung to acyl chloride, labelled SOCl₂: going uphill needs activation. Two reasons give one order: better leaving group and less resonance donation into C=O; chlorine donates poorly so acyl chlorides stay hot, nitrogen donates strongly so amides are calm; thioesters have poor sulfur overlap and high transfer potential.',
      caption: 'Leaving-group quality and resonance donation give the same order; any rung converts directly to a lower one, but climbing needs activation (SOCl₂).',
    },
    blocks: [
      '- **acyl chloride > anhydride > ester ≈ acid > amide > carboxylate**',
      '- **Downhill is direct; uphill needs activation** (acid → acyl chloride with $SOCl_2$)',
    ],
  },
  {
    at: 'Amides: the Special Case',
    mode: 'lead',
    figure: {
      svg: amideSvg,
      alt:
        'An amide R–CO–NH–R′ drawn with a lone pair on nitrogen. Curved arrows move the nitrogen lone pair into the C–N bond and the C=O pi electrons onto oxygen, giving the second resonance form with O⁻ on a C–O single bond and a C=N⁺ double bond. The real amide is a hybrid: the C–N bond has about 40 % double-bond character because the lone pair is shared with the carbonyl. Three consequences at the right: the C–N bond is planar and rigid (the peptide-backbone geometry); the nitrogen is non-basic because its lone pair is busy, and amides protonate on oxygen; amides are the least reactive acid derivative, so hydrolysis needs a protease or strong acid plus heat.',
      caption: 'Nitrogen’s lone pair delocalizes into C=O: the C–N bond becomes partly double, which makes it planar, the nitrogen non-basic and the amide the least reactive derivative.',
    },
    blocks: [
      '- The N lone pair is shared with C=O: C–N has **~40 % double-bond character**',
      '- Hence planar peptide bonds, a non-basic N, and the slowest hydrolysis on the ladder',
    ],
  },
  {
    at: 'Why Alpha Hydrogens Are Acidic',
    mode: 'lead',
    figure: {
      svg: alphaSvg,
      alt:
        'Acetone with one hydrogen on an alpha carbon drawn explicitly. A base B⁻ removes that hydrogen with curved arrows, giving the enolate, shown in brackets as two resonance forms: one with a lone pair and negative charge on the alpha carbon next to an intact C=O, and one with a C=C double bond and the negative charge on oxygen. The charge is shared by the alpha carbon and oxygen; oxygen carries more, but carbon usually attacks. At right, a pKa scale: about 50 for a plain alkane C–H, about 20 for an alpha hydrogen next to one carbonyl, and 9 to 13 for a hydrogen between two carbonyls (a 1,3-dicarbonyl), which hydroxide or alkoxide deprotonates essentially fully.',
      caption: 'Removing an α-H gives an enolate whose negative charge is delocalized onto oxygen, so the C–H pKa falls from ~50 to ~20 (and to 9–13 between two C=O).',
    },
    blocks: [
      '- α-C–H: $pK_a \\approx 20$ (vs ~50 for an alkane); between two C=O: ~9–13',
      '- The enolate is **ambident**: O holds more charge, but C is the usual site of attack',
    ],
  },
  {
    at: 'Kinetic vs Thermodynamic Enolates',
    mode: 'lead',
    figure: {
      svg: enolateSvg,
      alt:
        '2-Butanone in the centre with its two different alpha carbons marked: the CH₃ side (three hydrogens, open) in blue and the CH₂ side (more substituted) in red. A blue arrow labelled LDA, −78 °C leads down-left to the kinetic enolate, which has its C=C toward the CH₃ end: the less substituted double bond, formed fastest by a bulky strong base in the cold, irreversibly. A red arrow labelled NaOEt, 25 °C leads down-right to the thermodynamic enolate, which has its C=C toward the CH₂ side: the more substituted, more stable double bond, favoured when a small base at a warmer temperature lets the enolates equilibrate. Alkylation then lands on whichever alpha carbon lost its hydrogen.',
      caption: 'Shown on 2-butanone (the lesson’s 2-methylcyclohexanone behaves the same way): LDA in the cold takes the more accessible H; equilibrating conditions give the more substituted enolate.',
    },
    blocks: [
      '- **Kinetic**: LDA, cold, irreversible → less substituted enolate',
      '- **Thermodynamic**: smaller base, warmer, reversible → more substituted enolate',
    ],
  },
  {
    at: 'The Aldol Reaction',
    mode: 'lead',
    figure: {
      svg: aldolSvg,
      alt:
        'The aldol reaction of acetaldehyde, with curved arrows. The enolate of acetaldehyde (made when hydroxide removes an alpha hydrogen), drawn with its negative charge and lone pair on the alpha carbon, attacks the carbonyl carbon of a second acetaldehyde while that C=O pi bond moves onto oxygen. The new carbon–carbon bond (blue) gives an alkoxide; protonation by water gives 3-hydroxybutanal, the aldol, with the OH on the beta carbon and the alpha carbon next to the aldehyde. Heating removes the alpha H and the beta OH as water (E1cb), giving 2-butenal with a C=C conjugated to C=O (red). Numbered steps: base removes an alpha H to make the enolate; the enolate alpha carbon attacks another C=O, forming the new C–C bond; protonation gives the beta-hydroxy carbonyl; heat dehydrates it to the conjugated product. The retro-aldol runs backward, as aldolase does in glycolysis.',
      caption: 'Two acetaldehydes: the enolate’s α-carbon bonds to the other carbonyl carbon (blue), giving the β-hydroxy aldehyde, which dehydrates on heating to the conjugated 2-butenal (red).',
    },
    blocks: [
      '- The new C–C bond joins the **α carbon** of one partner to the **carbonyl carbon** of the other',
      '- Aldol = **β-hydroxy** carbonyl; heat → E1cb loss of water → conjugated enone',
    ],
  },
  {
    at: 'Conjugate (Michael) Addition',
    mode: 'lead',
    figure: {
      svg: michaelSvg,
      alt:
        'An α,β-unsaturated ketone R–CO–CH=CH₂ with its atoms numbered 1 (oxygen), 2 (carbonyl carbon), 3 (alpha carbon) and 4 (beta carbon). Both the carbonyl carbon and the beta carbon are marked δ+. A blue arrow from a box of hard, strong nucleophiles (RMgX, RLi, LiAlH₄) points to the carbonyl carbon: 1,2-addition, where the C=O becomes an alcohol and the C=C is kept. A red arrow from a box of soft, stabilised nucleophiles (enolates, amines, thiols, cyanide) points to the beta carbon: 1,4 or conjugate addition, after which the enol tautomerises so the C=O is kept and the C=C is gone. Glutathione, a thiol, traps Michael acceptors in cells this way.',
      caption: 'An enone has two electrophilic carbons: hard nucleophiles hit the carbonyl carbon (1,2), soft stabilised ones hit the β carbon (1,4, Michael).',
    },
    blocks: [
      '- Hard/strong Nu (Grignards, hydride) → **1,2** at C=O; soft/stabilised Nu → **1,4** at the β carbon',
      '- After 1,4 addition the enol tautomerises, so the product keeps its C=O',
    ],
  },
  {
    at: 'The Oxidation Ladder',
    mode: 'lead',
    figure: {
      svg: oxidationSvg,
      alt:
        'Three rows on an oxidation-level axis running from alcohol to aldehyde or ketone to carboxylic acid. Primary alcohol RCH₂OH: PCC takes it to the aldehyde RCHO and stops (blue arrow); Jones reagent, KMnO₄ or K₂Cr₂O₇ take it all the way to the acid RCOOH (red arc); Tollens reagent oxidizes the aldehyde to the acid with a silver mirror. Secondary alcohol R₂CHOH: any of these oxidants gives the ketone R₂C=O, which stops because there is no H on the carbonyl carbon. Tertiary alcohol R₃COH: no oxidation, because there is no H on the carbinol carbon. A blue arrow pointing back along the bottom: reduction runs back down; NaBH₄ reduces only aldehydes and ketones, while LiAlH₄ also reduces esters and acids to 1° alcohols.',
      caption: 'PCC stops a 1° alcohol at the aldehyde; strong chromium or permanganate oxidants go on to the acid; ketones stop and 3° alcohols do not react.',
    },
    blocks: [
      '- PCC: 1° alcohol → **aldehyde** (stops); Jones / $KMnO_4$: 1° alcohol → **acid**; 2° → ketone; 3°: none',
      '- Back down: $NaBH_4$ (aldehydes, ketones only) vs $LiAlH_4$ (also esters, acids; amides → amines)',
    ],
  },
]
