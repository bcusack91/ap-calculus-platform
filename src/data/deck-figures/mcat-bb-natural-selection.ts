import type { DeckFigurePlacement } from './index'

/**
 * Natural Selection & Speciation (MCAT B/B) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing is ours, from the concept: the three-ingredient loop that
 * makes selection a deduction, fitness counted in offspring (2 vs 8), the two
 * channels of sexual selection with the survival/mating ledger, the
 * relatedness ladder beside the lesson's own Hamilton's-rule alarm call
 * (C = 1, B = 3), the isolating barriers as a timeline split at "zygote
 * forms", three map panels for allopatric / sympatric / adaptive radiation,
 * the worked example's four-taxon cladogram with its clade, sister taxa,
 * trait ticks and rotated twin beside divergent-vs-convergent tree shapes,
 * gradualism vs punctuated equilibrium as two illustrative curves, and the
 * Lederberg replica-plating logic. The Population Genetics deck already draws
 * the three selection modes, drift, gene flow and balancing selection, so
 * none of those is repeated here. No textbook, prep-company or AAMC figure was
 * copied; curves that are not data say "illustrative".
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow's marker is defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-ns-<figure>[-colour]).
 */

type Cls = '' | 'fig-accent' | 'fig-accent-2' | 'fig-muted'

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

const f = (v: number) => +v.toFixed(1)

/** One line of text; `cls` wraps it in a theme group. */
const T = (x: number, y: number, fs: number, s: string, o: { b?: boolean; a?: 'start' | 'middle' | 'end'; cls?: Cls } = {}) => {
  const t = `<text x="${f(x)}" y="${f(y)}" font-size="${fs}"${o.b ? ' font-weight="700"' : ''} text-anchor="${o.a ?? 'middle'}" fill="currentColor">${s}</text>`
  return o.cls ? `<g class="${o.cls}">${t}</g>` : t
}

/** A rounded box with one or two centred lines of text. */
const BOX = (x: number, y: number, w: number, h: number, l1: string, l2?: string, fs = 19, opacity = 0.12) => {
  const mid = y + h / 2
  const t1 = l2
    ? `<text x="${x + w / 2}" y="${mid - 4}" font-size="${fs}" font-weight="700" text-anchor="middle" fill="currentColor">${l1}</text><text x="${x + w / 2}" y="${mid + fs - 1}" font-size="${fs - 2}" text-anchor="middle" fill="currentColor">${l2}</text>`
    : `<text x="${x + w / 2}" y="${mid + fs / 3}" font-size="${fs}" font-weight="700" text-anchor="middle" fill="currentColor">${l1}</text>`
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/>${t1}`
}

/** A straight arrow using marker `m`. */
const ARR = (x1: number, y1: number, x2: number, y2: number, m: string, w = 3) =>
  `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="currentColor" stroke-width="${w}" marker-end="url(#${m})"/>`

/** Polyline points for y = fn(x) sampled n times on [s0, s1]. */
const CURVE = (fn: (s: number) => number, s0: number, s1: number, n: number, sx: (s: number) => number, sy: (v: number) => number) => {
  const pts: string[] = []
  for (let i = 0; i <= n; i++) {
    const s = s0 + ((s1 - s0) * i) / n
    pts.push(`${f(sx(s))},${f(sy(fn(s)))}`)
  }
  return pts.join(' ')
}

/** A filled dot in a theme class ('' = plain currentColor). */
const DOT = (x: number, y: number, r: number, cls: Cls, opacity = 1) =>
  cls
    ? `<g class="${cls}"><circle cx="${f(x)}" cy="${f(y)}" r="${r}" fill="currentColor" fill-opacity="${opacity}"/></g>`
    : `<circle cx="${f(x)}" cy="${f(y)}" r="${r}" fill="currentColor" fill-opacity="${opacity}"/>`

/** Deterministic LCG so scatters draw the same every build. */
const rng = (seed: number) => {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

/** Scatter dots inside a rectangle (inset by the dot radius), colours drawn in order from `cols`. */
const RSCATTER = (x: number, y: number, w: number, h: number, cols: Cls[], seed: number, dotR = 6) => {
  const r = rng(seed)
  const out: string[] = []
  const placed: [number, number][] = []
  for (let i = 0; i < cols.length; i++) {
    let px = x + w / 2
    let py = y + h / 2
    for (let tries = 0; tries < 80; tries++) {
      px = x + dotR + 3 + r() * (w - 2 * dotR - 6)
      py = y + dotR + 3 + r() * (h - 2 * dotR - 6)
      if (placed.every(([qx, qy]) => (qx - px) ** 2 + (qy - py) ** 2 > (dotR * 2.4) ** 2)) break
    }
    placed.push([px, py])
    out.push(DOT(px, py, dotR, cols[i]))
  }
  return out.join('')
}

const X_MARK = (x: number, y: number, s: number, w = 3) =>
  `<path d="M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}" stroke="currentColor" stroke-width="${w}" stroke-linecap="round"/>`

const gauss = (x: number, m: number, s: number) => Math.exp(-((x - m) * (x - m)) / (2 * s * s))
const sig = (x: number) => 1 / (1 + Math.exp(-x))

/* 1 — The logic of natural selection: three ingredients, one necessary outcome, repeated (lead, 1000×460) */
const LOGIC_X = [35, 275, 515, 755]
const LOGIC_C = LOGIC_X.map((x) => x + 107.5)
const kidArrows = (px: number, py: number, kids: [number, number][], m: string) =>
  kids.map(([kx, ky]) => `<line x1="${px}" y1="${py + 12}" x2="${kx}" y2="${ky - 8}" stroke="currentColor" stroke-width="2" marker-end="url(#${m})"/>`).join('')
const logicSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ns-logic')}</defs>
${[
  [86, 7],
  [114, 11],
  [142, 14],
  [170, 9],
  [198, 12],
]
  .map(([x, r]) => `<circle cx="${x}" cy="100" r="${r}" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>`)
  .join('')}
<g class="fig-accent"><defs>${ARROW('arr-ns-logic-b')}</defs>
<circle cx="348" cy="68" r="11" fill="currentColor"/>${kidArrows(348, 68, [[328, 118], [368, 118]], 'arr-ns-logic-b')}
<circle cx="328" cy="118" r="7" fill="currentColor"/><circle cx="368" cy="118" r="7" fill="currentColor"/>
<circle cx="575" cy="68" r="11" fill="currentColor"/>${kidArrows(575, 68, [[545, 120], [565, 120], [585, 120], [605, 120]], 'arr-ns-logic-b')}
${[545, 565, 585, 605].map((x) => `<circle cx="${x}" cy="120" r="6" fill="currentColor"/>`).join('')}
</g>
<g class="fig-accent-2"><defs>${ARROW('arr-ns-logic-r')}</defs>
<circle cx="418" cy="68" r="11" fill="currentColor"/>${kidArrows(418, 68, [[400, 118], [438, 118]], 'arr-ns-logic-r')}
<circle cx="400" cy="118" r="7" fill="currentColor"/><circle cx="438" cy="118" r="7" fill="currentColor"/>
<circle cx="672" cy="68" r="11" fill="currentColor"/>${kidArrows(672, 68, [[672, 120]], 'arr-ns-logic-r')}
<circle cx="672" cy="120" r="6" fill="currentColor"/>
</g>
<line x1="782" y1="128" x2="942" y2="128" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted"><polyline points="${CURVE((x) => gauss(x, 840, 20), 782, 942, 60, (x) => x, (v) => 128 - 56 * v)}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 4"/></g>
<g class="fig-accent"><polygon points="782,128 ${CURVE((x) => gauss(x, 884, 20), 782, 942, 60, (x) => x, (v) => 128 - 56 * v)} 942,128" fill="currentColor" fill-opacity="0.2"/>
<polyline points="${CURVE((x) => gauss(x, 884, 20), 782, 942, 60, (x) => x, (v) => 128 - 56 * v)}" fill="none" stroke="currentColor" stroke-width="3"/></g>
${BOX(LOGIC_X[0], 160, 215, 68, 'Variation', 'individuals differ in a trait', 16)}
${BOX(LOGIC_X[1], 160, 215, 68, 'Heritability', 'offspring resemble parents', 16)}
${BOX(LOGIC_X[2], 160, 215, 68, 'Unequal reproduction', 'variants differ in offspring', 16)}
${BOX(LOGIC_X[3], 160, 215, 68, 'Distribution shifts', 'the next generation differs', 16)}
${ARR(252, 194, 273, 194, 'arr-ns-logic')}${ARR(492, 194, 513, 194, 'arr-ns-logic')}${ARR(732, 194, 753, 194, 'arr-ns-logic')}
<path d="M${LOGIC_C[3]} 228 L${LOGIC_C[3]} 266 L${LOGIC_C[0]} 266 L${LOGIC_C[0]} 234" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-ns-logic)"/>
${T(502, 292, 15, 'every generation — so the trait distribution MUST shift; selection is a deduction, not a hypothesis')}
${T(500, 334, 17, 'remove any one ingredient and nothing evolves', { b: true })}
${T(280, 364, 15, 'varies but is not heritable (scars, tans, muscle)')}
${T(280, 386, 15, '→ no evolutionary change at all', { b: true, cls: 'fig-accent-2' })}
${T(720, 364, 15, 'heritable but no fitness difference')}
${T(720, 386, 15, '→ changes only by drift', { b: true, cls: 'fig-accent-2' })}
${T(500, 432, 14, 'selection screens individual phenotypes; the response is a change in the population’s allele frequencies', { cls: 'fig-muted' })}
</svg>`

/* 2 — Fitness is counted in offspring: 2 vs 8 (lead, 1000×460) */
const fitnessSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ns-fit')}</defs>
${T(500, 40, 19, 'fitness is counted in offspring — not in strength, size or lifespan', { b: true })}
<circle cx="120" cy="130" r="42" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>
${T(120, 196, 15, 'large, strong, long-lived')}
${T(120, 216, 14, 'dominates every rival', { cls: 'fig-muted' })}
${ARR(168, 130, 208, 130, 'arr-ns-fit')}
<circle cx="238" cy="116" r="9" fill="currentColor"/><circle cx="238" cy="144" r="9" fill="currentColor"/>
${T(262, 136, 18, '2 fertile offspring', { b: true, a: 'start' })}
${T(250, 254, 20, 'fitness: 2', { b: true })}
<g class="fig-muted"><line x1="500" y1="60" x2="500" y2="270" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/></g>
<circle cx="600" cy="130" r="20" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>
${T(600, 196, 15, 'small, short-lived')}
${T(600, 216, 14, 'loses every fight', { cls: 'fig-muted' })}
${ARR(626, 130, 666, 130, 'arr-ns-fit')}
<g class="fig-accent">
${[690, 712, 734, 756].map((x) => `<circle cx="${x}" cy="116" r="9" fill="currentColor"/><circle cx="${x}" cy="144" r="9" fill="currentColor"/>`).join('')}
${T(778, 136, 18, '8 fertile offspring', { b: true, a: 'start' })}
${T(750, 254, 20, 'fitness: 8 — the fitter one', { b: true })}
</g>
${T(500, 292, 15, 'what fitness is built from', { cls: 'fig-muted' })}
${BOX(40, 306, 200, 50, 'survive to breed', undefined, 15)}
${ARR(243, 331, 277, 331, 'arr-ns-fit')}
${BOX(280, 306, 200, 50, 'find mates', undefined, 15)}
${ARR(483, 331, 517, 331, 'arr-ns-fit')}
${BOX(520, 306, 200, 50, 'produce fertile young', undefined, 15)}
${ARR(723, 331, 757, 331, 'arr-ns-fit')}
${BOX(760, 306, 200, 50, 'young survive to breed', undefined, 15)}
${T(500, 392, 16, 'all four are MEANS — only the number of fertile offspring is counted', { b: true })}
${T(500, 418, 15, '“survival of the fittest” = reproduction of the best reproducers')}
${T(500, 442, 14, 'fitness is relative to the rest of the population; a century alive with zero offspring = fitness 0', { cls: 'fig-muted' })}
</svg>`

/* 3 — Sexual selection: mate choice vs same-sex competition, and the survival/mating ledger (lead, 1000×460) */
const FAN = (cx: number, cy: number, r: number, k: number, L: number) => {
  const out: string[] = []
  for (let i = 0; i < k; i++) {
    const th = (-150 + (120 * i) / (k - 1)) * (Math.PI / 180)
    out.push(
      `<line x1="${f(cx + r * Math.cos(th))}" y1="${f(cy + r * Math.sin(th))}" x2="${f(cx + (r + L) * Math.cos(th))}" y2="${f(cy + (r + L) * Math.sin(th))}" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`,
    )
  }
  return out.join('')
}
const ANTLERS = (x: number, y: number) =>
  `<path d="M${x - 6} ${y - 14} L${x - 10} ${y - 42} M${x - 10} ${y - 34} L${x - 24} ${y - 44} M${x - 10} ${y - 26} L${x - 22} ${y - 30} M${x + 6} ${y - 14} L${x + 10} ${y - 42} M${x + 10} ${y - 34} L${x + 24} ${y - 44} M${x + 10} ${y - 26} L${x + 22} ${y - 30}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`
const MALE = (x: number, y: number, r: number) => `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>`
const sexualSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ns-sex')}</defs>
${T(260, 44, 19, 'Intersexual selection — mate choice', { b: true })}
${T(260, 66, 14, 'the higher-investing sex (usually female) chooses among the other', { cls: 'fig-muted' })}
<circle cx="80" cy="165" r="15" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2.5"/>
${T(80, 200, 14, 'chooser')}
${MALE(220, 165, 13)}${FAN(220, 165, 13, 3, 18)}
${MALE(320, 165, 13)}${FAN(320, 165, 13, 5, 30)}
<g class="fig-accent"><defs>${ARROW('arr-ns-sex-b')}</defs>
${MALE(430, 165, 13)}${FAN(430, 165, 13, 7, 44)}
<path d="M100 152 Q260 70 406 128" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-ns-sex-b)"/>
${T(250, 88, 14, 'chooses the most ornamented', { b: true })}
</g>
${T(270, 234, 14, 'ornaments: peacock train, bright plumage, courtship displays')}
<g class="fig-muted"><line x1="500" y1="30" x2="500" y2="240" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/></g>
${T(745, 44, 19, 'Intrasexual selection — same-sex competition', { b: true })}
${T(745, 66, 14, 'males fight or display each other off for access to mates', { cls: 'fig-muted' })}
${MALE(610, 165, 15)}${ANTLERS(610, 165)}
${MALE(770, 165, 15)}${ANTLERS(770, 165)}
<g class="fig-accent-2">${X_MARK(690, 150, 9)}${T(690, 200, 14, 'clash', { b: true })}</g>
${ARR(792, 165, 846, 165, 'arr-ns-sex')}
<g class="fig-muted"><circle cx="885" cy="146" r="8" fill="currentColor"/><circle cx="905" cy="166" r="8" fill="currentColor"/><circle cx="880" cy="180" r="8" fill="currentColor"/></g>
${T(892, 206, 14, 'mates')}
${T(745, 234, 14, 'weapons and size: antlers, horns, heavier bodies')}
${T(500, 282, 17, 'why a costly ornament survives: fitness is reproduction, not survival', { b: true })}
<g class="fig-accent-2">${BOX(70, 300, 240, 48, 'survival ↓ (predation risk)', undefined, 15)}</g>
${T(335, 332, 24, '+', { b: true })}
<g class="fig-accent">${BOX(360, 300, 240, 48, 'matings ↑↑ (female choice)', undefined, 15)}</g>
${T(625, 332, 24, '=', { b: true })}
${BOX(650, 300, 280, 48, 'net fitness ↑ → ornament spreads', undefined, 15)}
${T(500, 386, 15, 'ornaments are honest indicators (handicaps): only a healthy male can afford the cost')}
${T(500, 410, 15, 'the visible signature of both channels: sexual dimorphism')}
${T(500, 440, 14, 'the guppy trade-off, reversed: remove the predators and male brightness rises within ~15 generations', { cls: 'fig-muted' })}
</svg>`

/* 4 — Relatedness ladder and Hamilton's rule with the lesson's alarm-call numbers (lead, 1000×460) */
const RBAR = (y: number, r: number, names: string, opacity: number) => {
  const w = 620 * r
  return `<g class="fig-accent"><rect x="60" y="${y}" width="${f(w)}" height="40" rx="8" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2"/></g>${T(60, y - 10, 15, names, { a: 'start' })}${T(60 + w + 10, y + 26, 17, `r = ${r}`, { b: true, a: 'start' })}`
}
const HBAR = (x: number, h: number, label: string, cls: Cls) => {
  const bar = `<rect x="${x}" y="${f(300 - h)}" width="90" height="${f(h)}" rx="6" fill="currentColor" fill-opacity="${cls ? 0.35 : 0.14}" stroke="currentColor" stroke-width="2.5"/>`
  return `${cls ? `<g class="${cls}">${bar}</g>` : bar}${T(x + 45, 300 - h - 10, 17, label, { b: true, cls })}`
}
const hamiltonSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(230, 44, 17, 'r = the share of your alleles a relative carries', { b: true })}
${RBAR(84, 0.5, 'offspring · full sibling', 0.45)}
${RBAR(164, 0.25, 'half-sibling · grandchild · niece / nephew', 0.3)}
${RBAR(244, 0.125, 'first cousin', 0.18)}
${T(230, 322, 15, 'each step of kinship halves r')}
${T(230, 346, 13, 'a parent passes half its alleles; siblings share half on average', { cls: 'fig-muted' })}
<g class="fig-muted"><line x1="460" y1="30" x2="460" y2="370" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/></g>
${T(730, 44, 19, 'Hamilton’s rule: help when rB &gt; C', { b: true })}
${T(730, 68, 14, 'the lesson’s alarm call: cost C = 1, benefit B = 3 (offspring-equivalents)', { cls: 'fig-muted' })}
<g class="fig-muted"><line x1="500" y1="190" x2="960" y2="190" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/></g>
<line x1="500" y1="300" x2="960" y2="300" stroke="currentColor" stroke-width="2"/>
${HBAR(520, 110, 'C = 1', '')}
${HBAR(690, 165, 'rB = 1.5', 'fig-accent')}
${HBAR(860, 41, 'rB = 0.375', 'fig-accent-2')}
${T(565, 322, 15, 'cost to the caller')}
${T(735, 322, 15, 'full sibling: 0.5 × 3')}
${T(905, 322, 15, 'first cousin: 0.125 × 3')}
${T(735, 350, 16, '1.5 &gt; 1 → call', { b: true, cls: 'fig-accent' })}
${T(905, 350, 16, '0.375 &lt; 1 → stay silent', { b: true, cls: 'fig-accent-2' })}
${T(905, 372, 13, 'would need B &gt; C / r = 8', { cls: 'fig-muted' })}
${T(500, 410, 16, 'inclusive fitness = direct (own offspring) + indirect (r × effect on relatives’ offspring)', { b: true })}
${T(500, 438, 14, '“two brothers or eight cousins”: 2 × 0.5 = 8 × 0.125 = 1 — exactly the cost of one self', { cls: 'fig-muted' })}
</svg>`

/* 5 — Reproductive isolating barriers as a timeline split at "zygote forms" (replace-table, 560×440) */
const ROW = (y: number, name: string, rest: string) =>
  `<text x="170" y="${y}" font-size="13" fill="currentColor"><tspan font-weight="700">${name}</tspan> · ${rest}</text>`
const barriersSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-ns-bar')}</defs>
${ARR(46, 34, 46, 396, 'arr-ns-bar', 2.5)}
${[62, 126, 184, 240, 296, 352].map((y) => `<circle cx="46" cy="${y}" r="6" fill="currentColor"/>`).join('')}
${T(60, 66, 12, 'meet', { a: 'start' })}
${T(60, 130, 12, 'court, mate', { a: 'start' })}
${T(60, 188, 12, 'fertilize', { a: 'start' })}
${T(60, 244, 12, 'develop', { a: 'start' })}
${T(60, 300, 12, 'adult hybrid', { a: 'start' })}
${T(60, 356, 12, 'hybrid breeds', { a: 'start' })}
${T(170, 44, 13, 'PREZYGOTIC — no zygote ever forms', { b: true, a: 'start', cls: 'fig-accent' })}
<g class="fig-accent">${[66, 96, 126, 156, 186].map((y) => X_MARK(157, y - 4, 5, 2.5)).join('')}</g>
${ROW(66, 'Habitat', 'rarely meet (garter snakes: water vs land)')}
${ROW(96, 'Temporal', 'different breeding seasons (crickets)')}
${ROW(126, 'Behavioral', 'courtship not recognized (firefly flashes)')}
${ROW(156, 'Mechanical', 'parts don’t fit (opposite snail spirals)')}
${ROW(186, 'Gametic', 'sperm can’t fertilize the egg (sea urchins)')}
<line x1="20" y1="208" x2="540" y2="208" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/>
${T(540, 203, 12, 'zygote forms', { b: true, a: 'end' })}
${T(170, 228, 13, 'POSTZYGOTIC — after fertilization', { b: true, a: 'start', cls: 'fig-accent-2' })}
<g class="fig-accent-2">${[244, 300, 356].map((y) => X_MARK(157, y - 4, 5, 2.5)).join('')}</g>
${ROW(244, 'Hybrid inviability', 'zygote fails to develop or dies young')}
${ROW(300, 'Hybrid sterility', 'hybrid lives but cannot reproduce')}
${T(170, 318, 12, 'mule (horse × donkey): robust, sterile — chromosomes can’t pair', { a: 'start', cls: 'fig-muted' })}
${ROW(356, 'Hybrid breakdown', 'F₁ fertile, F₂ feeble or sterile')}
${T(280, 410, 13, 'prezygotic barriers are cheaper: no gametes wasted on doomed hybrids', { b: true })}
${T(280, 428, 12, 'where hybrids fare poorly, selection strengthens them (reinforcement)', { cls: 'fig-muted' })}
</svg>`

/* 6 — Geography of speciation: allopatric, sympatric, adaptive radiation (lead, 1000×460) */
const MIX: Cls[] = []
for (let i = 0; i < 14; i++) MIX.push(i % 2 === 0 ? 'fig-accent' : 'fig-accent-2')
const ALL_BLUE: Cls[] = Array.from({ length: 8 }, () => 'fig-accent' as Cls)
const ALL_RED: Cls[] = Array.from({ length: 8 }, () => 'fig-accent-2' as Cls)
const LAND = (x: number, y: number, w: number, h: number) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>`
const geographySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ns-geo')}</defs>
${T(170, 40, 19, 'Allopatric', { b: true })}
${LAND(40, 58, 260, 84)}${RSCATTER(40, 58, 260, 84, MIX, 31, 6)}
${ARR(170, 146, 170, 184, 'arr-ns-geo')}
${T(182, 170, 13, 'river / mountain uplift', { a: 'start' })}
${LAND(40, 190, 118, 84)}${RSCATTER(40, 190, 118, 84, ALL_BLUE, 32, 6)}
${LAND(182, 190, 118, 84)}${RSCATTER(182, 190, 118, 84, ALL_RED, 33, 6)}
<g class="fig-accent"><path d="M170 184 c 8 10 -8 20 0 30 c 8 10 -8 20 0 30 c 8 10 -8 20 0 30" fill="none" stroke="currentColor" stroke-width="3"/></g>
${T(170, 304, 15, 'drift + different selection → divergence')}
${T(170, 326, 15, 'on recontact they no longer interbreed')}
${T(170, 350, 14, 'the most common, best-documented route', { cls: 'fig-muted' })}
${T(500, 40, 19, 'Sympatric', { b: true })}
${LAND(370, 58, 260, 216)}
<g class="fig-muted"><line x1="500" y1="70" x2="500" y2="262" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/></g>
${T(435, 82, 13, 'polyploidy', { b: true })}
${BOX(385, 96, 44, 32, '2n', undefined, 15)}
${ARR(431, 112, 449, 112, 'arr-ns-geo', 2.5)}
<g class="fig-accent">${BOX(451, 96, 44, 32, '4n', undefined, 15, 0.25)}</g>
${T(435, 146, 12, 'doubling error')}
${T(435, 170, 13, '4n × 2n → 3n sterile')}
${T(435, 188, 12, 'isolated instantly')}
${T(435, 206, 12, 'one generation; plants', { cls: 'fig-muted' })}
${T(565, 80, 12, 'disruptive selection', { b: true })}
${T(565, 96, 12, '+ assortative mating', { b: true })}
${DOT(525, 134, 8, 'fig-accent')}${DOT(545, 128, 8, 'fig-accent')}${DOT(532, 154, 8, 'fig-accent')}${DOT(551, 150, 8, 'fig-accent')}
${DOT(592, 132, 4, 'fig-accent-2')}${DOT(606, 128, 4, 'fig-accent-2')}${DOT(598, 148, 4, 'fig-accent-2')}${DOT(612, 150, 4, 'fig-accent-2')}
<circle cx="569" cy="140" r="6" fill="currentColor" fill-opacity="0.3"/>${X_MARK(569, 140, 8, 2)}
${T(565, 176, 12, 'like mates with like')}
${T(565, 192, 12, 'intermediates lose')}
${T(565, 210, 12, 'seedcrackers, cichlids', { cls: 'fig-muted' })}
${T(500, 304, 15, 'divergence with NO geographic barrier')}
${T(500, 326, 14, 'polyploidy, or niche split + assortative mating')}
${T(500, 350, 14, 'the seedcracker on-ramp from Part 2', { cls: 'fig-muted' })}
${T(830, 40, 19, 'Adaptive radiation', { b: true })}
<ellipse cx="830" cy="180" rx="150" ry="100" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
${ARR(700, 262, 818, 262, 'arr-ns-geo')}
${T(704, 250, 12, 'colonist arrives', { a: 'start' })}
<line x1="830" y1="262" x2="830" y2="232" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent">${[
  [740, 140],
  [785, 126],
  [830, 120],
  [875, 126],
  [920, 140],
]
  .map(([x, y]) => `<line x1="830" y1="232" x2="${x}" y2="${y}" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>`)
  .join('')}</g>
<circle cx="830" cy="232" r="5" fill="currentColor"/>
${T(740, 128, 13, 'seeds')}${T(785, 112, 13, 'insects')}${T(830, 106, 13, 'cactus')}${T(875, 112, 13, 'buds')}${T(920, 128, 13, 'grubs')}
${T(830, 304, 15, 'one lineage → many niche specialists')}
${T(830, 326, 14, 'Darwin’s finches, honeycreepers, silverswords')}
${T(830, 350, 14, 'empty island niches or vanished competitors', { cls: 'fig-muted' })}
${T(500, 400, 16, 'every route ends the same way: gene flow stops and reproductive isolation accumulates', { b: true })}
${T(500, 428, 14, 'allopatric uses geography; sympatric needs another way to stop interbreeding; a radiation is many speciations at once', { cls: 'fig-muted' })}
</svg>`

/* 7 — Reading trees: the worked example's cladogram, plus divergent vs convergent shapes (lead, 1000×460) */
const treesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent"><rect x="172" y="46" width="236" height="206" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/>
${T(402, 246, 13, 'clade (C, A, B)', { b: true, a: 'end' })}</g>
<path d="M290 44 L290 38 L390 38 L390 44" fill="none" stroke="currentColor" stroke-width="2"/>
${T(340, 30, 13, 'sister taxa')}
${T(90, 62, 17, 'D', { b: true })}${T(190, 62, 17, 'C', { b: true })}${T(290, 62, 17, 'A', { b: true })}${T(390, 62, 17, 'B', { b: true })}
<path d="M90 72 L90 300 L265 300 L265 225 L190 225 L190 72 M265 225 L340 225 L340 150 L290 150 L290 72 M340 150 L390 150 L390 72 M177 300 L177 350" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
<circle cx="340" cy="150" r="5" fill="currentColor"/><circle cx="265" cy="225" r="5" fill="currentColor"/><circle cx="177" cy="300" r="5" fill="currentColor"/>
${T(168, 348, 13, 'root', { a: 'end', cls: 'fig-muted' })}
<g class="fig-accent-2">
<line x1="170" y1="328" x2="184" y2="328" stroke="currentColor" stroke-width="3"/>${T(192, 333, 13, '1', { b: true, a: 'start' })}
<line x1="258" y1="262" x2="272" y2="262" stroke="currentColor" stroke-width="3"/>${T(248, 267, 13, '2', { b: true, a: 'end' })}
<line x1="333" y1="188" x2="347" y2="188" stroke="currentColor" stroke-width="3"/>${T(323, 193, 13, '3', { b: true, a: 'end' })}
<line x1="383" y1="112" x2="397" y2="112" stroke="currentColor" stroke-width="3"/>${T(403, 117, 13, '4', { b: true, a: 'start' })}
</g>
${T(479, 128, 20, '=', { b: true })}
${T(479, 100, 14, 'B', { b: true, a: 'end' })}${T(521, 100, 14, 'A', { b: true, a: 'start' })}
<path d="M474 106 L474 140 L516 140 L516 106 M495 140 L495 160" fill="none" stroke="currentColor" stroke-width="2.5"/>
${T(495, 180, 12, 'rotated node', { cls: 'fig-muted' })}
${T(495, 195, 12, 'same tree', { cls: 'fig-muted' })}
${T(300, 364, 12, 'red ticks: where traits 1–4 arose (3 on the A+B stem, 4 on B alone)', { cls: 'fig-muted' })}
${T(270, 388, 14, 'nodes = common ancestors · clade = ancestor + ALL descendants')}
${T(270, 411, 14, '(D, C) is NOT a clade: their last shared ancestor is the root', { cls: 'fig-accent-2' })}
${T(270, 434, 14, 'sister taxa A, B · rotation changes nothing · no tip is “more evolved”')}
<g class="fig-muted"><line x1="540" y1="30" x2="540" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/></g>
${T(770, 46, 16, 'Divergent evolution → HOMOLOGOUS structures', { b: true })}
${T(650, 74, 14, 'human arm')}${T(770, 74, 14, 'whale flipper')}${T(890, 74, 14, 'bat wing')}
<g class="fig-accent"><path d="M650 86 L770 150 L770 200 M770 84 L770 150 M890 86 L770 150" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><circle cx="770" cy="150" r="5" fill="currentColor"/></g>
${T(770, 222, 14, 'one ancestral forelimb: same bones, different jobs')}
${T(770, 270, 16, 'Convergent evolution → ANALOGOUS (homoplasy)', { b: true })}
${T(650, 300, 14, 'bird wing')}${T(890, 300, 14, 'insect wing')}
<g class="fig-accent-2"><path d="M650 312 L650 364 M890 312 L890 364" fill="none" stroke="currentColor" stroke-width="3"/>
<defs>${ARROW('arr-ns-tree-r')}</defs>
<line x1="672" y1="346" x2="868" y2="346" stroke="currentColor" stroke-width="2.5" marker-start="url(#arr-ns-tree-r)" marker-end="url(#arr-ns-tree-r)"/></g>
${T(770, 336, 14, 'same job: flight')}
${T(650, 382, 12, 'ancestor 1', { cls: 'fig-muted' })}${T(890, 382, 12, 'ancestor 2', { cls: 'fig-muted' })}
${T(770, 408, 14, 'no shared winged ancestor — similarity is NOT inheritance')}
${T(770, 440, 13, 'homoplasy mistaken for homology wrecks tree-building', { cls: 'fig-muted' })}
</svg>`

/* 8 — Tempo: gradualism vs punctuated equilibrium (lead, 1000×460, illustrative) */
const tempoPanel = (x0: number, title: string, fn: (t: number) => number, cls: Cls, m: string) => {
  const sx = (t: number) => x0 + 380 * t
  const sy = (v: number) => 340 - 250 * v
  return `${T(x0 + 190, 40, 19, title, { b: true })}
${ARR(x0, 340, x0 + 392, 340, m, 2)}${ARR(x0, 340, x0, 70, m, 2)}
${T(x0 + 190, 364, 14, 'time →')}
${T(x0, 60, 14, 'change ↑')}
<g class="${cls}"><polyline points="${CURVE(fn, 0, 1, 240, sx, sy)}" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/></g>`
}
const punct = (t: number) => 0.06 + 0.28 * (sig((t - 0.3) / 0.012) + sig((t - 0.62) / 0.012) + sig((t - 0.93) / 0.012))
const tempoSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ns-tempo')}</defs>
${tempoPanel(70, 'Gradualism', (t) => 0.05 + 0.85 * t + 0.02 * Math.sin(20 * t), 'fig-accent', 'arr-ns-tempo')}
${T(200, 150, 14, 'steady, small changes', { cls: 'fig-accent' })}
${T(200, 170, 13, 'accumulate continuously', { cls: 'fig-accent' })}
${tempoPanel(560, 'Punctuated equilibrium', punct, 'fig-accent', 'arr-ns-tempo')}
${T(618, 308, 13, 'stasis', { cls: 'fig-muted' })}${T(747, 238, 13, 'stasis', { cls: 'fig-muted' })}${T(872, 168, 13, 'stasis', { cls: 'fig-muted' })}
<g class="fig-accent-2"><circle cx="677" cy="290" r="6" fill="currentColor"/><circle cx="802" cy="220" r="6" fill="currentColor"/><circle cx="923" cy="150" r="6" fill="currentColor"/>
${T(740, 120, 14, 'geologically rapid bursts, usually at speciation', { b: true })}</g>
${T(500, 392, 16, 'same mechanisms, different tempo — “rapid” still means thousands of generations', { b: true })}
${T(500, 418, 15, 'fossil species often show long stasis broken by brief change; neither curve is a new kind of evolution')}
${T(500, 444, 14, 'illustrative curves', { cls: 'fig-muted' })}
</svg>`

/* 9 — Lederberg replica plating: resistance pre-dates the antibiotic (lead, 1000×460) */
const COLONIES: [number, number][] = [
  [-0.6, -0.3],
  [-0.2, -0.65],
  [0.3, -0.6],
  [0.65, -0.25],
  [0.7, 0.3],
  [0.35, 0.6],
  [-0.1, 0.7],
  [-0.55, 0.45],
  [-0.75, 0.05],
  [0, 0],
  [0.3, 0.15],
  [-0.3, 0.2],
  [0.05, -0.3],
  [-0.35, -0.1],
  [0.55, 0],
  [0.1, 0.4],
]
const RESISTANT = new Set([2, 7, 10])
const PLATE = (cx: number, cy: number, R: number) => `<circle cx="${cx}" cy="${cy}" r="${R}" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="3"/>`
const masterColonies = (cx: number, cy: number, R: number) =>
  COLONIES.map(([u, v]) => `<circle cx="${f(cx + u * R)}" cy="${f(cy + v * R)}" r="7" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>`).join('')
const replicaColonies = (cx: number, cy: number, R: number) =>
  COLONIES.map(([u, v], i) =>
    RESISTANT.has(i)
      ? `<g class="fig-accent-2"><circle cx="${f(cx + u * R)}" cy="${f(cy + v * R)}" r="6" fill="currentColor"/></g>`
      : `<g class="fig-muted"><circle cx="${f(cx + u * R)}" cy="${f(cy + v * R)}" r="4.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/></g>`,
  ).join('')
const randomColonies = (cx: number, cy: number, R: number, seed: number) => {
  const r = rng(seed)
  const out: string[] = []
  for (let i = 0; i < 3; i++) {
    const a = r() * 2 * Math.PI
    const d = Math.sqrt(r()) * (R - 8)
    out.push(`<circle cx="${f(cx + d * Math.cos(a))}" cy="${f(cy + d * Math.sin(a))}" r="5" fill="currentColor"/>`)
  }
  return `<g class="fig-accent-2">${out.join('')}</g>`
}
const replicaSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ns-rep')}</defs>
${T(150, 52, 16, 'master plate: NO antibiotic', { b: true })}
${PLATE(150, 172, 92)}${masterColonies(150, 172, 92)}
${T(150, 284, 14, 'all colonies look alike —')}
${T(150, 302, 14, '3 already carry a resistance mutation')}
${ARR(250, 172, 338, 172, 'arr-ns-rep')}
${T(294, 156, 13, 'velvet stamp')}
${T(294, 196, 12, 'copies the layout', { cls: 'fig-muted' })}
${[410, 560, 710].map((x, i) => `${T(x, 96, 13, `replica ${i + 1} + antibiotic`)}${PLATE(x, 172, 62)}${replicaColonies(x, 172, 62)}`).join('')}
${T(560, 262, 15, 'survivors at the SAME 3 positions on every replica', { b: true, cls: 'fig-accent' })}
${T(560, 282, 13, 'dashed = colonies killed by the drug', { cls: 'fig-muted' })}
<g class="fig-accent"><rect x="800" y="110" width="180" height="124" rx="12" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
${T(890, 142, 15, 'same spots', { b: true })}
${T(890, 166, 14, '= same master colonies')}
${T(890, 190, 14, '= mutation happened')}
${T(890, 212, 14, 'BEFORE any drug', { b: true })}</g>
${T(500, 336, 16, 'mutations arose randomly BEFORE exposure: the antibiotic SELECTS pre-existing variants', { b: true })}
${T(500, 360, 15, 'a stressor that “creates” the adaptive mutation on demand is the Lamarckian model — wrong')}
${T(60, 404, 14, 'if the drug INDUCED resistance instead:', { b: true, a: 'start' })}
${T(60, 426, 13, 'resistant colonies would appear at random, non-matching positions', { a: 'start' })}
${T(60, 444, 12, 'never observed', { a: 'start', cls: 'fig-muted' })}
${[700, 780, 860].map((x, i) => `${PLATE(x, 412, 30)}${randomColonies(x, 412, 30, 41 + i)}`).join('')}
${T(930, 417, 12, 'random', { cls: 'fig-muted' })}
</svg>`

export const mcatNaturalSelectionFigures: DeckFigurePlacement[] = [
  {
    at: 'The Logic of Natural Selection',
    mode: 'lead',
    figure: {
      svg: logicSvg,
      alt:
        'Four boxes in a loop. Variation: five circles of different sizes, individuals differ in a trait. Heritability: a blue parent produces blue offspring and a red parent red offspring, offspring resemble parents. Unequal reproduction: the blue parent leaves four offspring, the red parent one. Distribution shifts: a dashed grey bell curve and a blue bell curve shifted to the right, the next generation differs. A return arrow runs from the last box back to the first: every generation, so the trait distribution MUST shift, selection is a deduction, not a hypothesis. Below: remove any one ingredient and nothing evolves; a trait that varies but is not heritable (scars, tans, muscle) shows no evolutionary change at all; a heritable trait with no fitness difference changes only by drift. Footer: selection screens individual phenotypes; the response is a change in the population’s allele frequencies.',
      caption: 'Variation + heritability + unequal reproduction, repeated every generation: the distribution has to move.',
    },
    blocks: [
      '- **Variation** → **heritability** → **differential reproductive success** → the trait distribution MUST shift',
      '- Remove one: scars vary but aren’t heritable (no change); heritable but no fitness difference → drift only',
    ],
  },
  {
    at: 'Fitness = Reproductive Success',
    mode: 'lead',
    figure: {
      svg: fitnessSvg,
      alt:
        'Two organisms compared. Left, a large circle labelled large, strong, long-lived, dominates every rival, with an arrow to two offspring dots: 2 fertile offspring, fitness 2. Right, a small circle labelled small, short-lived, loses every fight, with an arrow to eight blue offspring dots: 8 fertile offspring, fitness 8, the fitter one. Below, a chain of four boxes showing what fitness is built from: survive to breed, find mates, produce fertile young, young survive to breed. All four are means; only the number of fertile offspring is counted. Survival of the fittest means reproduction of the best reproducers. Fitness is relative to the rest of the population; a century alive with zero offspring is a fitness of zero.',
      caption: 'Fitness is the offspring count: eight from a weak, short-lived parent beats two from a strong one.',
    },
    blocks: [
      '- **Fitness = relative reproductive success**: 8 fertile offspring beats 2, whatever the size or lifespan',
      '- Survival, mating success and fertility are only MEANS — “survival of the fittest” = best reproducers',
    ],
  },
  {
    at: 'Sexual Selection: Fitness Includes Mating Success',
    mode: 'lead',
    figure: {
      svg: sexualSvg,
      alt:
        'Left panel, intersexual selection, mate choice: a chooser circle (the higher-investing sex, usually female) faces three males drawn as circles with fan-shaped trains of increasing size; a blue arrow shows the chooser picking the most ornamented male. Result: ornaments such as peacock trains, bright plumage and courtship displays. Right panel, intrasexual selection, same-sex competition: two males with antlers clash (red X), the winner gains access to a group of mates. Result: weapons and size, antlers, horns, heavier bodies. Below, a ledger of why a costly ornament survives: survival down (predation risk, red) plus matings up up (female choice, blue) equals net fitness up, so the ornament spreads. Ornaments are honest indicators or handicaps that only a healthy male can afford; both channels leave sexual dimorphism as their signature. Footer: the guppy trade-off reversed, removing predators lets male brightness rise within about 15 generations.',
      caption: 'Mate choice builds ornaments, same-sex competition builds weapons; both pay because fitness is matings, not survival.',
    },
    blocks: [
      '- **Intersexual** (mate choice) → ornaments; **intrasexual** (same-sex combat / display) → weapons, size',
      '- Costly ornaments persist because fitness is reproduction; honest-indicator logic; signature = dimorphism',
    ],
  },
  {
    at: 'Altruism, Kin Selection',
    mode: 'lead',
    figure: {
      svg: hamiltonSvg,
      alt:
        'Left, a relatedness ladder of three blue bars whose lengths are proportional to r: offspring and full sibling r = 0.5, half-sibling, grandchild and niece or nephew r = 0.25, first cousin r = 0.125; each step of kinship halves r because a parent passes exactly half of its alleles and full siblings share half on average. Right, Hamilton’s rule, help when rB is greater than C, with the lesson’s alarm call (cost C = 1, benefit B = 3 offspring-equivalents) as three bars against a dashed line at C = 1: the cost bar C = 1; the full-sibling bar rB = 0.5 times 3 = 1.5 (blue), taller than the cost, so 1.5 is greater than 1 and the squirrel calls; the first-cousin bar rB = 0.125 times 3 = 0.375 (red), far below the cost, so she stays silent, and would need B greater than C over r = 8. Footer: inclusive fitness = direct (own offspring) plus indirect (r times the effect on relatives’ offspring); two brothers or eight cousins, 2 times 0.5 = 8 times 0.125 = 1, exactly the cost of one self.',
      caption: 'Relatedness halves with each step; the lesson’s alarm call pays for a sibling ($0.5 \\times 3 > 1$) but not a cousin ($0.375 < 1$).',
    },
    blocks: [
      '- $r$: offspring / full sibling 0.5 · half-sibling, grandchild, niece 0.25 · first cousin 0.125',
      '- **Hamilton’s rule** $rB > C$: sibling $0.5 \\times 3 = 1.5 > 1$ → call; cousin $0.375 < 1$ → stay silent',
    ],
  },
  {
    at: 'Reproductive Isolating Barriers',
    mode: 'replace-table',
    figure: {
      svg: barriersSvg,
      alt:
        'A vertical timeline from meeting, courting and mating, fertilizing, then a dashed line where the zygote forms, then developing, the adult hybrid and the hybrid breeding. Above the zygote line, five prezygotic barriers marked with blue X marks: habitat (rarely meet, garter snakes in water vs on land), temporal (different breeding seasons, crickets), behavioral (courtship not recognized, firefly flashes), mechanical (parts don’t fit, opposite snail spirals), gametic (sperm can’t fertilize the egg, sea urchins). Below the line, three postzygotic barriers with red X marks: hybrid inviability (zygote fails to develop or dies young), hybrid sterility (hybrid lives but cannot reproduce; the mule, horse by donkey, is robust but sterile because its chromosomes can’t pair) and hybrid breakdown (F1 fertile, F2 feeble or sterile). Footer: prezygotic barriers are cheaper, no gametes wasted on doomed hybrids, so where hybrids fare poorly selection strengthens them (reinforcement).',
      caption: 'Prezygotic barriers stop the zygote from ever forming; postzygotic ones waste it — inviable, sterile (the mule) or breaking down in F₂.',
    },
    blocks: [
      '- **Prezygotic** (no zygote): habitat, temporal, behavioral, mechanical, gametic',
      '- **Postzygotic**: hybrid inviability, hybrid sterility (the mule), hybrid breakdown (F₂ feeble)',
      '- Prezygotic is cheaper (no wasted gametes), so selection reinforces it where hybrids fail',
    ],
  },
  {
    at: 'Geography of Speciation',
    mode: 'lead',
    figure: {
      svg: geographySvg,
      alt:
        'Three map panels. Allopatric: one landscape with a mixed population of blue and red dots; a river or mountain uplift splits it into two landscapes, one all blue and one all red, separated by a wavy blue barrier; drift and different selection drive divergence, and on recontact they no longer interbreed; the most common, best-documented route. Sympatric: one landscape with no barrier and two mechanisms side by side; polyploidy, a 2n box becomes 4n through a chromosome-doubling error, 4n crossed with 2n gives sterile 3n, so the new form is isolated instantly, in one generation, mainly in plants; and disruptive selection plus assortative mating, a cluster of large dots and a cluster of small dots with a crossed-out intermediate, like mates with like and intermediates lose (seedcrackers, cichlids). Adaptive radiation: one colonist lineage arrives on an island and a fan tree spreads into five niches, seeds, insects, cactus, buds, grubs; one lineage becomes many niche specialists (Darwin’s finches, honeycreepers, silverswords) where island niches are empty or competitors have vanished. Footer: every route ends the same way, gene flow stops and reproductive isolation accumulates.',
      caption: 'Allopatric needs a barrier, sympatric needs another way to stop interbreeding (polyploidy or a niche split), radiation is many speciations at once.',
    },
    blocks: [
      '- **Allopatric**: barrier splits → drift + divergent selection → isolation holds on recontact (most common)',
      '- **Sympatric**: polyploidy (instant, plants) or disruptive selection + assortative mating; **radiation**',
    ],
  },
  {
    at: 'Reading Evolutionary Trees',
    mode: 'lead',
    figure: {
      svg: treesSvg,
      alt:
        'Left, the worked example’s cladogram of four taxa D, C, A, B: the deepest node splits D from the rest, the next splits C from the pair A and B, the shallowest splits A from B; nodes are drawn as dots (common ancestors) and A and B are bracketed as sister taxa. A blue dashed box encloses C, A and B as a clade, an ancestor plus all its descendants. Red ticks mark where traits 1 to 4 arose: trait 1 on the root stem, trait 2 on the branch to the (C, A, B) ancestor, trait 3 on the A plus B stem, trait 4 on B alone. A small rotated version with B drawn before A, labelled rotated node, same tree. Notes: (D, C) is NOT a clade because their last shared ancestor is the root; rotate any node and the history is identical; no tip is more evolved. Right, top: divergent evolution gives homologous structures, one ancestral forelimb branching into human arm, whale flipper and bat wing, same bones, different jobs. Right, bottom: convergent evolution gives analogous structures (homoplasy), two separate unrelated stems ending in a bird wing and an insect wing joined by a double arrow labelled same job, flight; no shared winged ancestor, similarity is not inheritance; homoplasy mistaken for homology wrecks tree-building.',
      caption: 'Read branch order, not left–right position: the clade (C, A, B) and sister taxa A, B survive any rotation, and (D, C) is never a clade.',
    },
    blocks: [
      '- Nodes = common ancestors; **clade** = ancestor + ALL descendants; sister taxa share the nearest node',
      '- Divergence → **homologous** (same origin); convergence → **analogous** / homoplasy; no tip is “more evolved”',
    ],
  },
  {
    at: 'Tempo',
    mode: 'lead',
    figure: {
      svg: tempoSvg,
      alt:
        'Two graphs of morphological change against time (illustrative). Gradualism: a blue line rising steadily with small wiggles, steady small changes accumulate continuously. Punctuated equilibrium: a blue staircase, long flat plateaus labelled stasis separated by three short, steep rises marked with red dots, labelled geologically rapid bursts, usually at speciation. Footer: same mechanisms, different tempo; rapid still means thousands of generations; fossil species often show long stasis broken by brief change, and neither curve is a new kind of evolution.',
      caption: 'Gradualism accumulates steadily; punctuated equilibrium is stasis plus brief bursts at speciation — same genetics, different tempo (illustrative).',
    },
    blocks: [
      '- **Gradualism**: steady accumulation; **punctuated equilibrium**: long stasis + geologically rapid change',
      '- “Rapid” = thousands of generations — ordinary population genetics compressed, not a new mechanism',
    ],
  },
  {
    at: 'Three Datasets the MCAT Recycles',
    mode: 'lead',
    figure: {
      svg: replicaSvg,
      alt:
        'Lederberg replica plating. Left, a master plate grown with no antibiotic holding sixteen colonies that all look alike, three of which already carry a resistance mutation. A velvet stamp copies the layout onto three replica plates containing antibiotic: on every replica the same three positions hold surviving red colonies while the other thirteen positions are dashed outlines of colonies killed by the drug. A blue box: same spots = same master colonies = the mutation happened BEFORE any drug. Conclusion: mutations arose randomly before exposure, the antibiotic selects pre-existing variants; a stressor that creates the adaptive mutation on demand is the Lamarckian model, which is wrong. Bottom: if the drug induced resistance instead, resistant colonies would appear at random, non-matching positions on the replicas, shown as three small plates with red dots in different places, a pattern never observed.',
      caption: 'Lederberg replica plating: resistant colonies sit at the same positions on every antibiotic plate, so the mutations pre-dated the drug.',
    },
    blocks: [
      '- Replica plating: resistant colonies at the SAME spots on every antibiotic plate → mutations pre-dated it',
      '- Antibiotics **select**, they don’t instruct; Grants’ finches (1977) and peppered moths = reversible shifts',
    ],
  },
]
