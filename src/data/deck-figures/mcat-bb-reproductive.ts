import type { DeckFigurePlacement } from './index'

/**
 * Reproductive System (MCAT B/B) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (a tubule wall as a
 * strip, two gametogenesis ladders, SEVEN UP as a route, the HPG axis as boxes
 * and arrows, the SRY branch, four aligned cycle traces, the estrogen
 * feedback switch, a circle oocyte, a pregnancy hormone hand-off) — no
 * textbook, prep-company or AAMC figure was copied. Anatomy is schematic
 * only: no realistic organs. Curves are the textbook SHAPE and say
 * "illustrative" in the caption; the only numbers drawn are the ones the
 * lesson states (ovulation ~day 14, luteal ~14 days, implantation days 6–10,
 * hCG peak ~week 10, placenta by the end of the first trimester, 2–4 °C,
 * 12–50 years of prophase-I arrest).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-rep-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 13) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 6}" font-size="${r + 4}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`

/** A rounded box with one or two centred text lines. `bold` is an attribute string ('700' or '400'). */
const BOX = (x: number, y: number, w: number, h: number, lines: string[], size: number, bold: string, extra = '') => {
  const n = lines.length
  const lh = size + 5
  const first = y + h / 2 - ((n - 1) * lh) / 2 + size * 0.35
  const text = lines
    .map((t, i) => `<text x="${x + w / 2}" y="${(first + i * lh).toFixed(1)}" font-size="${i === 0 ? size : size - 1}" font-weight="${i === 0 ? bold : '400'}" text-anchor="middle" fill="currentColor">${t}</text>`)
    .join('')
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="none" stroke="currentColor" stroke-width="2.5" ${extra}/>${text}`
}

/** A sperm glyph: head ellipse at (x, y) pointing along +x, rotated by `deg`; the tail trails behind. */
const SPERM = (x: number, y: number, deg: number, scale = 1) =>
  `<g transform="translate(${x} ${y}) rotate(${deg}) scale(${scale})"><ellipse cx="0" cy="0" rx="9" ry="5.5" fill="currentColor"/><path d="M-8 0 q-10 -7 -20 0 t-20 0 t-20 0" fill="none" stroke="currentColor" stroke-width="2"/></g>`

/* 1 — The seminiferous tubule wall as a strip: basement membrane → lumen, Sertoli vs Leydig (lead, 1000×460) */
const tubuleSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rep-tub')}</defs>
<g class="fig-muted">
<text x="110" y="112" font-size="16" text-anchor="middle" fill="currentColor">interstitium</text>
<rect x="720" y="92" width="240" height="326" rx="10" fill="currentColor" fill-opacity="0.08"/>
<text x="840" y="120" font-size="18" text-anchor="middle" fill="currentColor">lumen</text>
<line x1="214" y1="92" x2="214" y2="418" stroke="currentColor" stroke-width="4" stroke-dasharray="10 6"/>
<text x="200" y="256" font-size="15" text-anchor="middle" fill="currentColor" transform="rotate(-90 200 256)">basement membrane</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-rep-tub-b')}</defs>
<rect x="228" y="108" width="480" height="300" rx="40" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="3"/>
<text x="470" y="64" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">FSH</text>
<line x1="470" y1="72" x2="470" y2="104" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rep-tub-b)"/>
<text x="470" y="136" font-size="16" text-anchor="middle" fill="currentColor">FSH + testosterone act on the Sertoli cell</text>
<text x="468" y="392" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Sertoli cell — nurse, blood–testis barrier, inhibin</text>
<path d="M690 108 C 690 66, 620 64, 505 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#arr-rep-tub-b)"/>
<text x="705" y="92" font-size="15" fill="currentColor">inhibin ⊣ FSH (selective)</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-rep-tub-r')}</defs>
<text x="110" y="64" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">LH</text>
<line x1="110" y1="72" x2="110" y2="292" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rep-tub-r)"/>
<circle cx="110" cy="330" r="34" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<text x="110" y="327" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Leydig</text>
<text x="110" y="345" font-size="13" text-anchor="middle" fill="currentColor">cells</text>
<line x1="146" y1="330" x2="226" y2="330" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rep-tub-r)"/>
<text x="180" y="356" font-size="14" text-anchor="middle" fill="currentColor">testosterone</text>
<line x1="110" y1="364" x2="110" y2="400" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rep-tub-r)"/>
<text x="110" y="422" font-size="14" text-anchor="middle" fill="currentColor">to blood (systemic)</text>
</g>
<circle cx="280" cy="240" r="34" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="280" y="246" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">2n</text>
<text x="280" y="300" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">spermatogonium</text>
<text x="280" y="320" font-size="14" text-anchor="middle" fill="currentColor">2n · 2c</text>
<line x1="316" y1="240" x2="364" y2="240" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-tub)"/>
<text x="340" y="229" font-size="13" text-anchor="middle" fill="currentColor">mitosis</text>
<circle cx="400" cy="240" r="34" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="400" y="246" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">2n</text>
<text x="400" y="300" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">primary</text>
<text x="400" y="318" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">spermatocyte</text>
<text x="400" y="338" font-size="14" text-anchor="middle" fill="currentColor">2n · 4c</text>
<line x1="436" y1="240" x2="498" y2="240" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-tub)"/>
<text x="467" y="229" font-size="13" text-anchor="middle" fill="currentColor">meiosis I</text>
<circle cx="520" cy="222" r="17" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="520" cy="258" r="17" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="520" y="227" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">n</text>
<text x="520" y="263" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">n</text>
<text x="520" y="300" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">secondary</text>
<text x="520" y="318" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">spermatocytes</text>
<text x="520" y="338" font-size="14" text-anchor="middle" fill="currentColor">n · 2c</text>
<line x1="540" y1="240" x2="612" y2="240" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-tub)"/>
<text x="576" y="229" font-size="13" text-anchor="middle" fill="currentColor">meiosis II</text>
<circle cx="628" cy="222" r="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="654" cy="222" r="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="628" cy="258" r="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="654" cy="258" r="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="641" y="300" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">4 spermatids</text>
<text x="641" y="320" font-size="14" text-anchor="middle" fill="currentColor">n · 1c</text>
<line x1="672" y1="240" x2="742" y2="240" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-tub)"/>
${SPERM(800, 232, 0)}
${SPERM(826, 282, 0)}
<text x="840" y="340" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">spermatozoa</text>
<text x="840" y="360" font-size="14" text-anchor="middle" fill="currentColor">n · 1c</text>
<text x="840" y="382" font-size="13" text-anchor="middle" fill="currentColor">spermiogenesis: remodel, no division</text>
<text x="500" y="446" font-size="16" text-anchor="middle" fill="currentColor">the scrotum keeps the tubules 2–4 °C below core: sperm production is temperature-sensitive, Leydig testosterone much less so</text>
</svg>`

/* 2 — Spermatogenesis and oogenesis side by side, with ploidy and the two arrests (replace-table, 560×440) */
const ladderSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-rep-lad')}</defs>
<text x="150" y="30" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Spermatogenesis</text>
<text x="410" y="30" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Oogenesis</text>
<g class="fig-muted">
<text x="150" y="48" font-size="13" text-anchor="middle" fill="currentColor">continuous from puberty · ~2 months</text>
<text x="410" y="48" font-size="13" text-anchor="middle" fill="currentColor">starts before birth · one per month</text>
<line x1="280" y1="60" x2="280" y2="396" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
<text x="72" y="140" font-size="12" fill="currentColor">mitosis + S phase</text>
<text x="72" y="230" font-size="12" fill="currentColor">meiosis I (halves ploidy)</text>
<text x="72" y="320" font-size="12" fill="currentColor">meiosis II (chromatids part)</text>
<text x="342" y="140" font-size="12" fill="currentColor">mitosis ends before birth</text>
<text x="342" y="230" font-size="12" fill="currentColor">meiosis I at the LH surge</text>
<text x="342" y="320" font-size="12" fill="currentColor">meiosis II only if fertilized</text>
</g>
<circle cx="60" cy="90" r="18" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="60" y="95" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">2n</text>
<text x="88" y="86" font-size="13" font-weight="700" fill="currentColor">spermatogonium</text>
<text x="88" y="104" font-size="12" fill="currentColor">2n · 2c · self-renews for life</text>
<line x1="60" y1="110" x2="60" y2="158" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rep-lad)"/>
<circle cx="60" cy="180" r="18" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="60" y="185" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">2n</text>
<text x="88" y="176" font-size="13" font-weight="700" fill="currentColor">primary spermatocyte</text>
<text x="88" y="194" font-size="12" fill="currentColor">2n · 4c · no arrest</text>
<line x1="60" y1="200" x2="60" y2="248" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rep-lad)"/>
<circle cx="46" cy="270" r="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="74" cy="270" r="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="92" y="266" font-size="13" font-weight="700" fill="currentColor">2 secondary spermatocytes</text>
<text x="92" y="284" font-size="12" fill="currentColor">n · 2c</text>
<line x1="60" y1="286" x2="60" y2="338" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rep-lad)"/>
<circle cx="36" cy="360" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="56" cy="360" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="76" cy="360" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="96" cy="360" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="112" y="356" font-size="13" font-weight="700" fill="currentColor">4 spermatids → 4 sperm</text>
<text x="112" y="374" font-size="12" fill="currentColor">n · 1c</text>
<circle cx="320" cy="90" r="18" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="320" y="95" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">2n</text>
<text x="348" y="86" font-size="13" font-weight="700" fill="currentColor">oogonium</text>
<text x="348" y="104" font-size="12" fill="currentColor">2n · 2c · fetal life only</text>
<line x1="320" y1="110" x2="320" y2="158" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rep-lad)"/>
<circle cx="320" cy="180" r="18" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="320" y="185" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">2n</text>
<text x="348" y="176" font-size="13" font-weight="700" fill="currentColor">primary oocyte</text>
<text x="348" y="194" font-size="12" fill="currentColor">2n · 4c</text>
<g class="fig-accent-2">
<text x="348" y="211" font-size="12" font-weight="700" fill="currentColor">ARREST prophase I · 12–50 years</text>
<text x="348" y="301" font-size="12" font-weight="700" fill="currentColor">ARREST metaphase II (ovulated so)</text>
</g>
<line x1="320" y1="200" x2="320" y2="248" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rep-lad)"/>
<circle cx="320" cy="270" r="18" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="320" y="275" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">n</text>
<g class="fig-muted"><circle cx="343" cy="255" r="6" fill="currentColor"/></g>
<text x="356" y="266" font-size="13" font-weight="700" fill="currentColor">secondary oocyte + polar body</text>
<text x="356" y="284" font-size="12" fill="currentColor">n · 2c (haploid already)</text>
<line x1="320" y1="290" x2="320" y2="338" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rep-lad)"/>
<circle cx="320" cy="360" r="18" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="320" y="365" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">n</text>
<g class="fig-muted"><circle cx="343" cy="345" r="6" fill="currentColor"/><circle cx="345" cy="372" r="6" fill="currentColor"/></g>
<text x="356" y="356" font-size="13" font-weight="700" fill="currentColor">1 ovum + 2nd polar body</text>
<text x="356" y="374" font-size="12" fill="currentColor">n · 1c · polar bodies degenerate</text>
<text x="280" y="414" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">unequal cytokinesis: 1 primary oocyte → 1 ovum · 1 primary spermatocyte → 4 sperm</text>
<text x="280" y="432" font-size="12" text-anchor="middle" fill="currentColor">ploidy halves at meiosis I: a secondary oocyte is already haploid (n · 2c)</text>
</svg>`

/* 3 — SEVEN UP as a route, with the three glands joining downstream (lead, 1000×460) */
const sevenUpSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rep-7up')}</defs>
<g class="fig-muted"><text x="500" y="44" font-size="17" text-anchor="middle" fill="currentColor">sperm travel left → right; they gain motility in the epididymis and their fuel (fructose) from the seminal vesicles</text></g>
<g class="fig-accent">
<text x="89" y="104" font-size="30" font-weight="700" text-anchor="middle" fill="currentColor">S</text>
<text x="226" y="104" font-size="30" font-weight="700" text-anchor="middle" fill="currentColor">E</text>
<text x="363" y="104" font-size="30" font-weight="700" text-anchor="middle" fill="currentColor">V</text>
<text x="500" y="104" font-size="30" font-weight="700" text-anchor="middle" fill="currentColor">E</text>
<text x="637" y="104" font-size="30" font-weight="700" text-anchor="middle" fill="currentColor">N</text>
<text x="774" y="104" font-size="30" font-weight="700" text-anchor="middle" fill="currentColor">U</text>
<text x="911" y="104" font-size="30" font-weight="700" text-anchor="middle" fill="currentColor">P</text>
</g>
${BOX(33, 124, 112, 64, ['Seminiferous', 'tubules'], 16, '700')}
${BOX(170, 124, 112, 64, ['Epididymis'], 16, '700')}
${BOX(307, 124, 112, 64, ['Vas', 'deferens'], 16, '700')}
${BOX(444, 124, 112, 64, ['Ejaculatory', 'duct'], 16, '700')}
${BOX(581, 124, 112, 64, ['(Nothing)'], 16, '400', 'stroke-dasharray="6 5"')}
${BOX(718, 124, 112, 64, ['Urethra'], 16, '700')}
${BOX(855, 124, 112, 64, ['Penis'], 16, '700')}
<line x1="146" y1="156" x2="168" y2="156" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-7up)"/>
<line x1="283" y1="156" x2="305" y2="156" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-7up)"/>
<line x1="420" y1="156" x2="442" y2="156" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-7up)"/>
<line x1="557" y1="156" x2="579" y2="156" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-7up)"/>
<line x1="694" y1="156" x2="716" y2="156" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-7up)"/>
<line x1="831" y1="156" x2="853" y2="156" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-7up)"/>
<g class="fig-muted">
<text x="89" y="212" font-size="14" text-anchor="middle" fill="currentColor">sperm made here</text>
<text x="226" y="212" font-size="14" text-anchor="middle" fill="currentColor">maturation, storage,</text>
<text x="226" y="230" font-size="14" text-anchor="middle" fill="currentColor">sperm gain motility</text>
<text x="363" y="212" font-size="14" text-anchor="middle" fill="currentColor">transport</text>
<text x="637" y="212" font-size="14" text-anchor="middle" fill="currentColor">mnemonic filler</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-rep-7up-r')}</defs>
<rect x="300" y="300" width="260" height="92" rx="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<text x="430" y="328" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Seminal vesicles</text>
<text x="430" y="352" font-size="15" text-anchor="middle" fill="currentColor">most of the volume · fructose (fuel)</text>
<text x="430" y="374" font-size="15" text-anchor="middle" fill="currentColor">alkaline buffer · prostaglandins</text>
<line x1="470" y1="300" x2="498" y2="196" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rep-7up-r)"/>
<rect x="580" y="300" width="210" height="92" rx="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<text x="685" y="328" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Prostate</text>
<text x="685" y="352" font-size="15" text-anchor="middle" fill="currentColor">thin milky, slightly acidic</text>
<text x="685" y="374" font-size="15" text-anchor="middle" fill="currentColor">citrate · PSA liquefies semen</text>
<line x1="720" y1="300" x2="752" y2="196" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rep-7up-r)"/>
<rect x="810" y="300" width="180" height="92" rx="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<text x="900" y="328" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Bulbourethral</text>
<text x="900" y="352" font-size="15" text-anchor="middle" fill="currentColor">pre-ejaculatory mucus</text>
<text x="900" y="374" font-size="15" text-anchor="middle" fill="currentColor">lubricates the urethra</text>
<line x1="860" y1="300" x2="800" y2="196" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rep-7up-r)"/>
</g>
<text x="150" y="330" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">semen is mostly glandular fluid,</text>
<text x="150" y="354" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">not sperm</text>
<text x="150" y="378" font-size="15" text-anchor="middle" fill="currentColor">the glands join downstream of the vas</text>
<text x="500" y="438" font-size="17" text-anchor="middle" fill="currentColor">SEVEN UP: Seminiferous tubules · Epididymis · Vas deferens · Ejaculatory duct · (Nothing) · Urethra · Penis</text>
</svg>`

/* 4 — The HPG axis: one pituitary, male and female wiring, the feedback loops (lead, 1000×460) */
const hpgSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rep-hpg')}</defs>
<rect x="340" y="28" width="320" height="56" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="500" y="52" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Hypothalamus</text>
<text x="500" y="74" font-size="14" text-anchor="middle" fill="currentColor">GnRH in PULSES (continuous GnRH → shutdown)</text>
<line x1="500" y1="84" x2="500" y2="116" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-hpg)"/>
<text x="512" y="106" font-size="15" fill="currentColor">GnRH</text>
<rect x="380" y="120" width="240" height="58" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="500" y="155" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Anterior pituitary</text>
<g class="fig-muted">
<rect x="50" y="232" width="350" height="170" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="600" y="232" width="350" height="170" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="62" y="254" font-size="16" fill="currentColor">Testis</text>
<text x="612" y="254" font-size="16" fill="currentColor">Ovary</text>
</g>
<text x="60" y="112" font-size="14" fill="currentColor">low gonadal hormone + HIGH LH/FSH</text>
<text x="60" y="132" font-size="14" fill="currentColor">= the gonad itself has failed</text>
<g class="fig-accent-2">
<defs>${ARROW('arr-rep-hpg-r')}</defs>
<line x1="420" y1="178" x2="150" y2="272" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rep-hpg-r)"/>
<line x1="580" y1="178" x2="850" y2="272" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rep-hpg-r)"/>
<text x="262" y="210" font-size="17" font-weight="700" fill="currentColor">LH</text>
<text x="718" y="210" font-size="17" font-weight="700" fill="currentColor">LH</text>
<circle cx="150" cy="310" r="34" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<text x="150" y="315" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">Leydig</text>
<circle cx="850" cy="310" r="34" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<text x="850" y="315" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">theca</text>
<line x1="186" y1="310" x2="264" y2="310" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-hpg-r)"/>
<text x="225" y="334" font-size="13" text-anchor="middle" fill="currentColor">testosterone</text>
<line x1="814" y1="310" x2="736" y2="310" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-hpg-r)"/>
<text x="775" y="334" font-size="13" text-anchor="middle" fill="currentColor">androgens</text>
<text x="150" y="366" font-size="14" text-anchor="middle" fill="currentColor">makes testosterone</text>
<text x="850" y="366" font-size="14" text-anchor="middle" fill="currentColor">makes androgens</text>
<path d="M116 310 L40 310 L40 56 L336 56" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6" marker-end="url(#arr-rep-hpg-r)"/>
<text x="26" y="180" font-size="15" text-anchor="middle" fill="currentColor" transform="rotate(-90 26 180)">testosterone ⊣ GnRH, LH</text>
<path d="M884 310 L960 310 L960 56 L664 56" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6" marker-end="url(#arr-rep-hpg-r)"/>
<text x="976" y="180" font-size="15" text-anchor="middle" fill="currentColor" transform="rotate(-90 976 180)">moderate estrogen, progesterone ⊣</text>
<text x="940" y="112" font-size="14" text-anchor="end" fill="currentColor">exception: sustained HIGH estrogen</text>
<text x="940" y="132" font-size="14" text-anchor="end" fill="currentColor">flips to positive → LH surge</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-rep-hpg-b')}</defs>
<line x1="470" y1="178" x2="300" y2="272" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rep-hpg-b)"/>
<line x1="530" y1="178" x2="700" y2="272" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rep-hpg-b)"/>
<text x="412" y="286" font-size="17" font-weight="700" fill="currentColor">FSH</text>
<text x="588" y="286" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">FSH</text>
<circle cx="300" cy="310" r="34" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<text x="300" y="315" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">Sertoli</text>
<circle cx="700" cy="310" r="34" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<text x="700" y="315" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">granulosa</text>
<text x="300" y="366" font-size="14" text-anchor="middle" fill="currentColor">nurses sperm</text>
<text x="300" y="386" font-size="13" text-anchor="middle" fill="currentColor">secretes inhibin</text>
<text x="700" y="366" font-size="14" text-anchor="middle" fill="currentColor">aromatase → estrogen</text>
<text x="700" y="386" font-size="13" text-anchor="middle" fill="currentColor">(cannot make androgens)</text>
<path d="M334 300 L500 300 L500 184" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#arr-rep-hpg-b)"/>
<text x="492" y="232" font-size="15" font-weight="700" text-anchor="end" fill="currentColor">inhibin</text>
<text x="492" y="250" font-size="14" text-anchor="end" fill="currentColor">⊣ FSH only</text>
</g>
<g class="fig-muted">
<text x="150" y="386" font-size="13" text-anchor="middle" fill="currentColor">systemic + local</text>
<text x="850" y="386" font-size="13" text-anchor="middle" fill="currentColor">(no aromatase)</text>
</g>
<text x="500" y="440" font-size="15" text-anchor="middle" fill="currentColor">LH → the steroid cell (Leydig / theca); FSH → the support cell (Sertoli / granulosa); neither ovarian cell makes estrogen alone</text>
</svg>`

/* 5 — Sex determination: SRY → testis → two hormones decide the ducts; then puberty (lead, 1000×460) */
const sryLines = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rep-sry')}</defs>
<g class="fig-muted"><text x="500" y="30" font-size="17" text-anchor="middle" fill="currentColor">SRY is the switch: it builds a testis, and the testis's two hormones then decide which ducts survive</text></g>
${BOX(30, 140, 190, 72, ['bipotential gonad', 'both duct systems present'], 16, '700')}
<line x1="220" y1="164" x2="256" y2="124" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-sry)"/>
<line x1="220" y1="190" x2="256" y2="236" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-sry)"/>
<g class="fig-accent">
<defs>${ARROW('arr-rep-sry-b')}</defs>
${BOX(260, 80, 120, 56, ['SRY gene', 'on the Y'], 16, '700', 'fill="currentColor" fill-opacity="0.08"')}
<line x1="380" y1="108" x2="406" y2="108" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-sry-b)"/>
${BOX(410, 80, 110, 56, ['testis'], 17, '700')}
<line x1="520" y1="98" x2="556" y2="74" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-sry-b)"/>
<line x1="520" y1="120" x2="556" y2="144" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-sry-b)"/>
${BOX(560, 44, 190, 52, ['Leydig → testosterone'], 15, '700')}
<line x1="750" y1="70" x2="786" y2="70" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-sry-b)"/>
${BOX(790, 44, 185, 52, ['Wolffian ducts kept', 'epididymis, vas deferens'], 15, '700')}
${BOX(560, 120, 190, 52, ['Sertoli → MIF'], 15, '700')}
<line x1="750" y1="146" x2="786" y2="146" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-sry-b)"/>
${BOX(790, 120, 185, 52, ['Müllerian ducts regress', 'no uterus or tubes'], 15, '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-rep-sry-r')}</defs>
${BOX(250, 218, 140, 64, ['no SRY', 'XX or SRY deleted'], 16, '700', 'fill="currentColor" fill-opacity="0.08"')}
<line x1="390" y1="250" x2="406" y2="250" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-sry-r)"/>
${BOX(410, 218, 110, 64, ['ovary', 'the default'], 17, '700')}
<line x1="520" y1="250" x2="556" y2="250" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-sry-r)"/>
${BOX(560, 218, 190, 64, ['no testosterone,', 'no MIF'], 15, '700')}
<line x1="750" y1="250" x2="786" y2="250" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-sry-r)"/>
${BOX(790, 212, 185, 76, ['Müllerian ducts kept', 'uterus, tubes, upper vagina', 'Wolffian ducts regress'], 15, '700')}
</g>
<g class="fig-muted"><line x1="30" y1="318" x2="970" y2="318" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
<text x="30" y="346" font-size="16" font-weight="700" fill="currentColor">Puberty — the axis wakes up</text>
${BOX(30, 360, 170, 70, ['childhood', 'axis idles'], 15, '700')}
<line x1="200" y1="395" x2="236" y2="395" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-sry)"/>
${BOX(240, 360, 190, 70, ['GnRH pulses ramp up'], 15, '700')}
<line x1="430" y1="395" x2="466" y2="395" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-sry)"/>
${BOX(470, 360, 160, 70, ['LH, FSH ↑', 'gonadal steroids ↑'], 15, '700')}
<line x1="630" y1="395" x2="666" y2="395" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-sry)"/>
${BOX(670, 356, 305, 78, ['testosterone: hair, voice, muscle, libido', 'estrogen: breasts, fat, growth spurt →', 'epiphyseal plates close'], 14, '700')}
</svg>`

/* 6 — The 28-day cycle as four aligned traces (lead, 1000×460) */
const cycleSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<line x1="554" y1="36" x2="554" y2="432" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<line x1="190" y1="122" x2="918" y2="122" stroke="currentColor" stroke-width="1"/>
<line x1="190" y1="234" x2="918" y2="234" stroke="currentColor" stroke-width="1"/>
<text x="176" y="90" font-size="15" text-anchor="end" fill="currentColor">LH, FSH</text>
<text x="176" y="186" font-size="15" text-anchor="end" fill="currentColor">estrogen,</text>
<text x="176" y="204" font-size="15" text-anchor="end" fill="currentColor">progesterone</text>
<text x="176" y="304" font-size="15" text-anchor="end" fill="currentColor">ovary</text>
<text x="176" y="398" font-size="15" text-anchor="end" fill="currentColor">endometrium</text>
<text x="372" y="28" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">follicular (days 1–13)</text>
<text x="790" y="28" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">luteal (15–28) — constant ~14 days</text>
<text x="246" y="400" font-size="13" text-anchor="middle" fill="currentColor">menses 1–5</text>
</g>
<text x="554" y="28" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">ovulation ~day 14</text>
<g class="fig-accent-2">
<path d="M190 120 L502 118 C 528 116, 538 48, 554 48 C 570 48, 580 116, 606 120 L 918 120" fill="none" stroke="currentColor" stroke-width="3.5"/>
<text x="568" y="62" font-size="16" font-weight="700" fill="currentColor">LH surge</text>
<path d="M190 234 L554 232 C 600 230, 660 170, 736 166 C 790 164, 830 180, 860 204 C 880 220, 900 232, 918 234" fill="none" stroke="currentColor" stroke-width="3.5"/>
<text x="736" y="156" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">progesterone</text>
<circle cx="736" cy="300" r="20" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2.5"/>
<text x="736" y="338" font-size="12" text-anchor="middle" fill="currentColor">corpus luteum → progesterone</text>
</g>
<g class="fig-accent">
<path d="M190 104 C 240 100, 300 108, 372 112 L 502 110 C 528 108, 538 82, 554 82 C 570 82, 580 110, 606 114 L 880 114 L 918 108" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="930" y="113" font-size="15" fill="currentColor">FSH</text>
<text x="230" y="90" font-size="13" fill="currentColor">small FSH rise recruits the cohort</text>
<path d="M190 228 L 320 226 C 400 222, 460 190, 502 160 C 520 150, 540 170, 580 206 C 620 222, 680 190, 736 186 C 790 184, 850 206, 918 228" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="494" y="150" font-size="15" font-weight="700" text-anchor="end" fill="currentColor">estrogen peaks first</text>
<text x="420" y="374" font-size="13" text-anchor="middle" fill="currentColor">proliferative (estrogen)</text>
</g>
<text x="930" y="126" font-size="15" fill="currentColor">LH</text>
<circle cx="268" cy="300" r="8" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="398" cy="300" r="14" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="398" cy="300" r="3" fill="currentColor"/>
<circle cx="476" cy="300" r="20" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="476" cy="300" r="4" fill="currentColor"/>
<circle cx="554" cy="300" r="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5"/>
<circle cx="554" cy="270" r="5" fill="currentColor"/>
<text x="372" y="338" font-size="12" text-anchor="middle" fill="currentColor">FSH-recruited follicles → one dominant</text>
<text x="554" y="338" font-size="12" text-anchor="middle" fill="currentColor">oocyte released</text>
<g class="fig-muted">
<circle cx="892" cy="300" r="10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="4 3"/>
<text x="892" y="338" font-size="12" text-anchor="middle" fill="currentColor">albicans</text>
</g>
<path d="M190 424 L190 392 L216 402 L242 414 L320 416 C 400 410, 480 392, 554 382 C 600 374, 650 366, 736 364 L 866 364 L 918 392 L 918 424 Z" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent-2"><text x="770" y="392" font-size="13" text-anchor="middle" fill="currentColor">secretory (progesterone) — ready to implant</text></g>
<line x1="190" y1="432" x2="918" y2="432" stroke="currentColor" stroke-width="2"/>
<text x="216" y="450" font-size="13" text-anchor="middle" fill="currentColor">day 1</text>
<text x="372" y="450" font-size="13" text-anchor="middle" fill="currentColor">7</text>
<text x="554" y="450" font-size="13" text-anchor="middle" fill="currentColor">14</text>
<text x="736" y="450" font-size="13" text-anchor="middle" fill="currentColor">21</text>
<text x="918" y="450" font-size="13" text-anchor="middle" fill="currentColor">28</text>
</svg>`

/* 7 — The feedback switch: estrogen crosses a threshold and the sign flips (lead, 1000×460) */
const switchSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rep-sw')}</defs>
<line x1="90" y1="300" x2="950" y2="300" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rep-sw)"/>
<line x1="90" y1="300" x2="90" y2="40" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rep-sw)"/>
<text x="56" y="170" font-size="16" text-anchor="middle" fill="currentColor" transform="rotate(-90 56 170)">hormone level</text>
<text x="300" y="322" font-size="14" text-anchor="middle" fill="currentColor">follicular phase →</text>
<text x="620" y="322" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">ovulation</text>
<text x="820" y="322" font-size="14" text-anchor="middle" fill="currentColor">→ luteal phase</text>
<g class="fig-muted">
<text x="300" y="80" font-size="44" font-weight="700" text-anchor="middle" fill="currentColor">−</text>
<text x="800" y="80" font-size="44" font-weight="700" text-anchor="middle" fill="currentColor">−</text>
<line x1="620" y1="40" x2="620" y2="300" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
</g>
<g class="fig-accent-2">
<rect x="520" y="40" width="130" height="260" fill="currentColor" fill-opacity="0.08"/>
<text x="560" y="80" font-size="44" font-weight="700" text-anchor="middle" fill="currentColor">+</text>
<line x1="90" y1="150" x2="940" y2="150" stroke="currentColor" stroke-width="2" stroke-dasharray="9 6"/>
<text x="936" y="142" font-size="14" text-anchor="end" fill="currentColor">estrogen threshold (must be SUSTAINED)</text>
<path d="M100 282 L560 280 C 590 278, 600 60, 620 60 C 640 60, 650 276, 680 282 L 940 282" fill="none" stroke="currentColor" stroke-width="3.5"/>
<text x="662" y="66" font-size="16" font-weight="700" fill="currentColor">LH surge</text>
</g>
<g class="fig-accent">
<path d="M100 280 C 300 270, 440 220, 520 150 C 560 110, 570 90, 585 90 C 610 90, 640 200, 670 226 C 720 250, 790 196, 830 200 C 870 206, 910 230, 940 242" fill="none" stroke="currentColor" stroke-width="3.5"/>
<text x="430" y="196" font-size="16" font-weight="700" text-anchor="end" fill="currentColor">estrogen</text>
<text x="430" y="216" font-size="14" text-anchor="end" fill="currentColor">from the growing follicle</text>
</g>
<path d="M100 290 L660 288 C 720 286, 780 180, 830 176 C 870 174, 910 180, 940 186" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="830" y="164" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">progesterone</text>
<rect x="60" y="338" width="320" height="100" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="220" y="366" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">moderate estrogen</text>
<text x="220" y="390" font-size="15" text-anchor="middle" fill="currentColor">NEGATIVE feedback</text>
<text x="220" y="414" font-size="14" text-anchor="middle" fill="currentColor">GnRH, LH, FSH held low — the axis idles</text>
<g class="fig-accent-2">
<rect x="400" y="338" width="240" height="100" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<text x="520" y="366" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">sustained HIGH estrogen</text>
<text x="520" y="390" font-size="15" text-anchor="middle" fill="currentColor">flips to POSITIVE feedback</text>
<text x="520" y="414" font-size="14" text-anchor="middle" fill="currentColor">→ LH surge → ovulation ~day 14</text>
</g>
<rect x="660" y="338" width="300" height="100" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="810" y="366" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">progesterone (corpus luteum)</text>
<text x="810" y="390" font-size="15" text-anchor="middle" fill="currentColor">NEGATIVE again</text>
<text x="810" y="414" font-size="14" text-anchor="middle" fill="currentColor">no second surge; secretory endometrium</text>
</svg>`

/* 8 — Fertilization as an ordered checklist around a circle oocyte (lead, 1000×460) */
const granules = Array.from({ length: 14 }, (_, i) => {
  const a = (i / 14) * Math.PI * 2
  return `<circle cx="${(760 + 88 * Math.cos(a)).toFixed(1)}" cy="${(230 + 88 * Math.sin(a)).toFixed(1)}" r="3.5" fill="currentColor"/>`
}).join('')
const fertSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<circle cx="760" cy="230" r="122" fill="none" stroke="currentColor" stroke-width="9"/>
<text x="760" y="378" font-size="14" text-anchor="middle" fill="currentColor">zona pellucida — hardened after the cortical reaction</text>
<circle cx="760" cy="118" r="8" fill="currentColor"/>
<text x="300" y="446" font-size="14" text-anchor="middle" fill="currentColor">normally in the ampulla of the fallopian tube</text>
</g>
<circle cx="760" cy="230" r="100" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<text x="760" y="192" font-size="15" text-anchor="middle" fill="currentColor">secondary oocyte</text>
<circle cx="740" cy="240" r="15" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="782" cy="240" r="15" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="740" y="246" font-size="15" text-anchor="middle" fill="currentColor">♀</text>
<text x="782" y="246" font-size="15" text-anchor="middle" fill="currentColor">♂</text>
<text x="761" y="282" font-size="13" text-anchor="middle" fill="currentColor">pronuclei → zygote (2n)</text>
<g class="fig-accent">
${granules}
</g>
<g class="fig-accent-2">
${SPERM(590, 100, 32)}
${SPERM(636, 185, 20)}
<line x1="648" y1="172" x2="656" y2="166" stroke="currentColor" stroke-width="2"/>
<line x1="651" y1="190" x2="660" y2="190" stroke="currentColor" stroke-width="2"/>
<line x1="647" y1="200" x2="654" y2="206" stroke="currentColor" stroke-width="2"/>
${SPERM(668, 262, -20)}
</g>
${NUM(548, 80, '1')}
${NUM(606, 150, '2')}
${NUM(626, 296, '3')}
${NUM(896, 310, '4')}
${NUM(796, 92, '5')}
${NUM(60, 66, '1')}
<text x="84" y="72" font-size="17" font-weight="700" fill="currentColor">Capacitation</text>
<text x="84" y="94" font-size="15" fill="currentColor">hours in the female tract destabilize the sperm membrane</text>
${NUM(60, 132, '2')}
<text x="84" y="138" font-size="17" font-weight="700" fill="currentColor">Acrosome reaction</text>
<text x="84" y="160" font-size="15" fill="currentColor">contact with the zona pellucida releases enzymes that digest a path</text>
${NUM(60, 198, '3')}
<text x="84" y="204" font-size="17" font-weight="700" fill="currentColor">Membrane fusion</text>
<text x="84" y="226" font-size="15" fill="currentColor">the nucleus enters · Na⁺ influx depolarizes the egg</text>
<g class="fig-muted"><text x="84" y="246" font-size="14" fill="currentColor">= the fast block (minor in mammals)</text></g>
${NUM(60, 284, '4')}
<text x="84" y="290" font-size="17" font-weight="700" fill="currentColor">Cortical reaction</text>
<text x="84" y="312" font-size="15" fill="currentColor">Ca²⁺ wave → cortical granules exocytose → zona hardens</text>
<g class="fig-accent-2"><text x="84" y="332" font-size="14" font-weight="700" fill="currentColor">= the SLOW block to polyspermy — the one that matters</text></g>
${NUM(60, 370, '5')}
<text x="84" y="376" font-size="17" font-weight="700" fill="currentColor">Meiosis II completes</text>
<text x="84" y="398" font-size="15" fill="currentColor">2nd polar body extruded; pronuclei unite → diploid zygote</text>
</svg>`

/* 9 — hCG rescues the corpus luteum, then the placenta takes over (lead, 1000×460) */
const hcgSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rep-hcg')}</defs>
${BOX(30, 34, 212, 62, ['blastocyst implants', 'days 6–10 after fertilization'], 15, '700')}
<line x1="242" y1="65" x2="272" y2="65" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-hcg)"/>
<g class="fig-accent-2">
${BOX(276, 34, 212, 62, ['trophoblast secretes hCG', 'an LH analog (unique β subunit)'], 15, '700', 'fill="currentColor" fill-opacity="0.08"')}
</g>
<line x1="488" y1="65" x2="518" y2="65" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-hcg)"/>
<g class="fig-accent">
${BOX(522, 34, 212, 62, ['corpus luteum rescued', 'progesterone keeps flowing'], 15, '700', 'fill="currentColor" fill-opacity="0.08"')}
</g>
<line x1="734" y1="65" x2="764" y2="65" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rep-hcg)"/>
${BOX(768, 34, 212, 62, ['endometrium kept', 'no menses · test detects β-hCG'], 15, '700')}
<line x1="100" y1="380" x2="960" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rep-hcg)"/>
<line x1="100" y1="380" x2="100" y2="124" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rep-hcg)"/>
<text x="60" y="252" font-size="15" text-anchor="middle" fill="currentColor" transform="rotate(-90 60 252)">relative level</text>
<text x="100" y="400" font-size="13" text-anchor="middle" fill="currentColor">0</text>
<text x="310" y="400" font-size="13" text-anchor="middle" fill="currentColor">10</text>
<text x="520" y="400" font-size="13" text-anchor="middle" fill="currentColor">20</text>
<text x="730" y="400" font-size="13" text-anchor="middle" fill="currentColor">30</text>
<text x="940" y="400" font-size="13" text-anchor="middle" fill="currentColor">40</text>
<text x="520" y="424" font-size="14" text-anchor="middle" fill="currentColor">weeks of pregnancy</text>
<g class="fig-accent">
<rect x="100" y="130" width="252" height="248" fill="currentColor" fill-opacity="0.06"/>
<text x="226" y="150" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">corpus luteum → progesterone</text>
<text x="226" y="168" font-size="13" text-anchor="middle" fill="currentColor">(kept alive by hCG)</text>
<path d="M100 330 L268 322 C 300 318, 340 312, 400 300 C 600 260, 800 200, 940 170" fill="none" stroke="currentColor" stroke-width="3.5"/>
<text x="940" y="158" font-size="15" font-weight="700" text-anchor="end" fill="currentColor">progesterone</text>
<path d="M142 326 C 160 326, 175 370, 190 378" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5"/>
</g>
<g class="fig-muted">
<rect x="352" y="130" width="588" height="248" fill="currentColor" fill-opacity="0.05"/>
<line x1="352" y1="130" x2="352" y2="378" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<text x="646" y="150" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">placenta makes progesterone + estrogen</text>
<text x="646" y="168" font-size="13" text-anchor="middle" fill="currentColor">takes over by the end of the 1st trimester</text>
<text x="216" y="352" font-size="13" fill="currentColor">without hCG: luteolysis → menses</text>
</g>
<g class="fig-accent-2">
<path d="M142 378 C 205 376, 268 200, 310 160 C 352 160, 436 280, 520 300 L 940 304" fill="none" stroke="currentColor" stroke-width="3.5"/>
<text x="400" y="192" font-size="15" font-weight="700" fill="currentColor">hCG peaks ~week 10</text>
<text x="940" y="296" font-size="15" font-weight="700" text-anchor="end" fill="currentColor">hCG</text>
</g>
<path d="M100 372 L300 368 C 500 350, 750 290, 940 230" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="940" y="220" font-size="15" font-weight="700" text-anchor="end" fill="currentColor">estrogen</text>
</svg>`

export const mcatReproductiveFigures: DeckFigurePlacement[] = [
  {
    at: 'Spermatogenesis',
    mode: 'lead',
    figure: {
      svg: tubuleSvg,
      alt:
        'The wall of a seminiferous tubule drawn as a strip: the interstitium on the left, a dashed basement membrane, a large blue Sertoli cell spanning the wall, and the lumen on the right. Germ cells progress left to right inside the Sertoli cell: spermatogonium (2n, 2c) → mitosis → primary spermatocyte (2n, 4c) → meiosis I → two secondary spermatocytes (n, 2c) → meiosis II → four spermatids (n, 1c) → spermiogenesis (remodelling, no division) → spermatozoa released into the lumen. Red: LH acts on Leydig cells in the interstitium, which make testosterone that enters both the tubule and the blood. Blue: FSH acts on the Sertoli cell (with testosterone); the Sertoli cell nurses sperm, forms the blood–testis barrier and secretes inhibin, which selectively suppresses FSH. Footnote: the scrotum keeps the tubules 2–4 °C below core; sperm production is temperature-sensitive, Leydig testosterone much less so.',
      caption: 'The seminiferous tubule as a strip: germ cells mature from the basement membrane toward the lumen inside the Sertoli cell (FSH); Leydig cells outside the tubule answer LH with testosterone.',
    },
    blocks: [
      '- **Leydig** (interstitium, LH) → testosterone; **Sertoli** (in the tubule, FSH) → nurse, barrier, inhibin',
      '- One primary spermatocyte → **four** sperm; ~2 months, at 2–4 °C below core',
    ],
  },
  {
    at: 'Ploidy and Chromatid Bookkeeping',
    mode: 'replace-table',
    figure: {
      svg: ladderSvg,
      alt:
        'Two ladders side by side. Spermatogenesis (continuous from puberty, ~2 months): spermatogonium (2n, 2c, self-renews for life) → mitosis + S phase → primary spermatocyte (2n, 4c, no arrest) → meiosis I (halves ploidy) → two secondary spermatocytes (n, 2c) → meiosis II (chromatids part) → four spermatids → four sperm (n, 1c). Oogenesis (starts before birth, one per month): oogonium (2n, 2c, fetal life only; mitosis ends before birth) → primary oocyte (2n, 4c), ARRESTED in prophase I for 12–50 years → meiosis I at the LH surge → secondary oocyte plus a tiny first polar body (n, 2c, haploid already), ARRESTED in metaphase II and ovulated in that state → meiosis II only if fertilized → one ovum plus a second polar body (n, 1c; polar bodies degenerate). Footer: unequal cytokinesis gives 1 ovum per primary oocyte but 4 sperm per primary spermatocyte; ploidy halves at meiosis I, so a secondary oocyte is already n even with two chromatids per chromosome.',
      caption: 'Same meiosis, two programs: oogenesis arrests twice (prophase I, metaphase II) and spends its cytoplasm on one ovum; spermatogenesis never stops and yields four.',
    },
    blocks: [
      '- Primary cells are **2n · 4c**, secondary cells **n · 2c**, final gametes **n · 1c** — ploidy halves at meiosis I',
      '- Oocyte arrests: **prophase I** (fetal life → ovulation), then **metaphase II** (until fertilization)',
      '- Unequal cytokinesis: **1 ovum** + polar bodies vs **4 sperm**',
      '- Trap: a secondary oocyte is haploid even though every chromosome still has two chromatids',
    ],
  },
  {
    at: 'Male Tract: SEVEN UP',
    mode: 'lead',
    figure: {
      svg: sevenUpSvg,
      alt:
        'Seven boxes in a row under the letters S E V E N U P: Seminiferous tubules (sperm made here) → Epididymis (maturation, storage, sperm gain motility) → Vas deferens (transport) → Ejaculatory duct → (Nothing, a mnemonic filler) → Urethra (shared with urine) → Penis. Three red gland boxes below feed into the route downstream of the vas: seminal vesicles (most of the volume, fructose as fuel, alkaline buffer, prostaglandins) join at the ejaculatory duct; the prostate (thin milky, slightly acidic fluid; citrate; PSA liquefies semen) and the bulbourethral glands (pre-ejaculatory mucus that lubricates the urethra) join at the urethra. Note: semen is mostly glandular fluid, not sperm.',
      caption: 'SEVEN UP as a route: sperm mature in the epididymis, and the glands add fluid, fuel and buffer downstream of the vas deferens.',
    },
    blocks: [
      '- **Epididymis** = maturation, storage, motility; **seminal vesicles** = volume, fructose, alkaline buffer',
      '- Prostate: milky, PSA, slightly acidic; bulbourethral: mucus — semen is mostly glandular fluid',
    ],
  },
  {
    at: 'The Hypothalamic-Pituitary-Gonadal',
    mode: 'lead',
    figure: {
      svg: hpgSvg,
      alt:
        'Boxes and arrows. Hypothalamus (GnRH in pulses; continuous GnRH shuts the axis down) → anterior pituitary. From the pituitary, red LH arrows go to the Leydig cell in the testis (left) and the theca cell in the ovary (right); blue FSH arrows go to the Sertoli cell and the granulosa cell. Testis: Leydig makes testosterone (systemic and local), which also acts on Sertoli; Sertoli nurses sperm and secretes inhibin. Ovary: theca makes androgens (no aromatase) that pass to granulosa, whose aromatase converts them to estrogen (granulosa cannot make androgens). Dashed red feedback arrows run from the gonads back up to the hypothalamus: testosterone inhibits GnRH and LH; moderate estrogen and progesterone inhibit the axis, with the exception that sustained HIGH estrogen flips to positive feedback and triggers the LH surge. A dashed blue arrow from Sertoli to the pituitary reads inhibin, FSH only. Notes: low gonadal hormone with HIGH LH/FSH means the gonad itself has failed; LH drives the steroid cell, FSH the gamete-support cell; neither ovarian cell makes estrogen alone.',
      caption: 'The HPG axis: LH to the steroid cell (Leydig, theca), FSH to the support cell (Sertoli, granulosa); sex steroids feed back on GnRH/LH, inhibin on FSH alone.',
    },
    blocks: [
      '- **LH → Leydig / theca** (steroids); **FSH → Sertoli / granulosa** (support, aromatase, inhibin)',
      '- GnRH must be **pulsatile**; low gonadal hormone with **high** LH/FSH = the gonad itself failed',
    ],
  },
  {
    at: 'Puberty and Sex Determination',
    mode: 'lead',
    figure: {
      svg: sryLines,
      alt:
        'Top: a bipotential gonad with both duct systems branches two ways. Blue branch: SRY gene on the Y → testis → Leydig cells make testosterone, which keeps the Wolffian ducts (epididymis, vas deferens), and Sertoli cells make MIF, which makes the Müllerian ducts regress (no uterus or tubes). Red branch: no SRY (XX, or SRY deleted) → ovary, the default → no testosterone and no MIF → Müllerian ducts kept (uterus, tubes, upper vagina) and the Wolffian ducts regress. Bottom strip, puberty: childhood (axis idles) → GnRH pulses ramp up → LH and FSH rise, gonadal steroids rise → testosterone brings hair, voice, muscle and libido; estrogen brings breasts, fat redistribution and the growth spurt, then epiphyseal plates close.',
      caption: 'SRY builds a testis; testosterone keeps the Wolffian ducts and MIF removes the Müllerian ones. Without SRY the ovarian pathway is the default. Puberty is the axis switching on.',
    },
    blocks: [
      '- **SRY** → testis → testosterone keeps Wolffian ducts, **MIF** regresses Müllerian; no SRY → ovary',
      '- Puberty: GnRH pulses ramp up → LH/FSH → sex steroids → secondary sex traits, growth spurt',
    ],
  },
  {
    at: 'The 28-Day Cycle, Phase by Phase',
    mode: 'lead',
    figure: {
      svg: cycleSvg,
      alt:
        'Four aligned traces over 28 days with a dashed vertical line at ovulation, about day 14. Top: LH (red) is flat except a sharp surge at day 14; FSH (blue) shows a small rise in the first days that recruits the follicle cohort, a smaller mid-cycle bump, and a slight upturn at day 28. Second: estrogen (blue) rises through the follicular phase and peaks just before the LH surge, dips at ovulation, has a smaller luteal peak and falls at the end; progesterone (red) is flat until ovulation, then rises to a plateau around day 21 and falls by day 28. Third, ovary: small follicles grow into one dominant follicle, the oocyte is released at day 14, a corpus luteum (red) forms and makes progesterone, then shrinks to a corpus albicans. Bottom, endometrium: thin during menses (days 1–5), thickens through the proliferative phase under estrogen, is thick and secretory under progesterone (ready for implantation), and breaks down at day 28. Labels: follicular (days 1–13), luteal (15–28, the constant ~14 days).',
      caption: 'One cycle, four traces (illustrative): estrogen peaks, then LH surges and the follicle ruptures at ~day 14; the corpus luteum\'s progesterone holds the secretory endometrium for ~14 days.',
    },
    blocks: [
      '- Follicular: FSH → follicle → rising **estrogen**; **LH surge** → ovulation ~day 14',
      '- Luteal: corpus luteum → **progesterone** → secretory endometrium; luteolysis ~14 days later → menses',
    ],
  },
  {
    at: 'The Feedback Switch',
    mode: 'lead',
    figure: {
      svg: switchSvg,
      alt:
        'Hormone level against time across one cycle. A dashed red horizontal line marks the estrogen threshold (must be sustained). Blue estrogen rises slowly from the growing follicle under a big minus sign (negative feedback: GnRH, LH and FSH held low, the axis idles), crosses the threshold and holds above it in a red shaded band under a plus sign (sustained high estrogen flips to positive feedback), after which red LH spikes (the LH surge) at the dashed ovulation line, around day 14. After ovulation estrogen falls, progesterone rises from the corpus luteum under a second minus sign (negative again: no second surge, secretory endometrium). Three boxes below spell out the same three states.',
      caption: 'The feedback switch (illustrative): moderate estrogen inhibits the axis, sustained high estrogen from a dominant follicle flips it to positive and fires the LH surge, then progesterone restores the brake.',
    },
    blocks: [
      '- **Moderate** estrogen = negative feedback; **sustained HIGH** estrogen = positive → LH surge',
      '- Progesterone from the corpus luteum restores the brake: no second surge in one cycle',
    ],
  },
  {
    at: 'Fertilization: An Ordered Checklist',
    mode: 'lead',
    figure: {
      svg: fertSvg,
      alt:
        'A circle oocyte inside a thick grey zona pellucida ring, with numbered steps. 1 Capacitation: a sperm in the female tract, hours of membrane destabilization. 2 Acrosome reaction: a sperm head touching the zona pellucida releases enzymes that digest a path. 3 Membrane fusion: the sperm nucleus enters the oocyte; Na⁺ influx depolarizes the egg, the fast block (minor in mammals). 4 Cortical reaction: blue cortical granules lining the inside of the membrane exocytose after a Ca²⁺ wave and the zona hardens, the SLOW block to polyspermy, the one that matters. 5 Meiosis II completes: a second polar body sits between the oocyte and the zona; the female and male pronuclei inside unite to form the diploid zygote. Note: fertilization normally happens in the ampulla of the fallopian tube.',
      caption: 'Fertilization in order: capacitation → acrosome reaction → fusion (fast block) → cortical reaction (slow block) → the oocyte finally finishes meiosis II.',
    },
    blocks: [
      '- **Capacitation → acrosome reaction → fusion → cortical reaction → meiosis II completes**',
      '- Fast block = Na⁺ depolarization (minor in mammals); **slow block** = cortical granules harden the zona',
    ],
  },
  {
    at: 'Implantation and the hCG Rescue',
    mode: 'lead',
    figure: {
      svg: hcgSvg,
      alt:
        'Top row of boxes: blastocyst implants (days 6–10 after fertilization) → trophoblast secretes hCG, an LH analog with a unique β subunit → corpus luteum rescued, progesterone keeps flowing → endometrium kept, no menses, and the pregnancy test detects β-hCG. Below, relative hormone levels over 40 weeks of pregnancy. Red hCG rises after implantation, peaks around week 10 and falls to a lower plateau. Blue progesterone comes from the corpus luteum in a shaded band covering weeks 0–12 (kept alive by hCG) and keeps rising as the placenta takes over by the end of the first trimester; a dashed blue drop near week 3 shows what happens without hCG: luteolysis and menses. Estrogen (plain line) stays low early and rises steadily through pregnancy from the placenta.',
      caption: 'The hCG rescue (illustrative curves, lesson timings): trophoblast hCG keeps the corpus luteum making progesterone until the placenta takes over by the end of the first trimester; hCG peaks ~week 10.',
    },
    blocks: [
      '- Implant days 6–10 → trophoblast **hCG** (LH analog) **rescues the corpus luteum** → progesterone → no menses',
      '- Placenta takes over by the **end of the 1st trimester**; hCG peaks ~week 10; tests detect the **β** subunit',
    ],
  },
]
