import type { DeckFigurePlacement } from './index'

/**
 * Social Structure & Stratification (MCAT P/S) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept (an altitude diagram,
 * three "society is…" sketches, a fan-out, a feedback loop, a tension axis,
 * mini ladders, two income distributions, the four-stage transition curves,
 * three pyramid silhouettes) — no textbook or prep-company figure was copied.
 * Curves and pyramid shapes that are not data say "illustrative" in the caption.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-ss-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/* 1 — Macro vs micro: pick the altitude first (lead, 1000×460) */
const paradigmBox = (x: number, y: number, name: string, sub: string) =>
  `<rect x="${x}" y="${y}" width="340" height="58" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="${x + 170}" y="${y + 25}" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">${name}</text>
<text x="${x + 170}" y="${y + 47}" font-size="15" text-anchor="middle" fill="currentColor">${sub}</text>`

const altitudeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ss-alt')}</defs>
<line x1="56" y1="430" x2="56" y2="40" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ss-alt)"/>
<g class="fig-muted"><text x="34" y="235" font-size="16" text-anchor="middle" fill="currentColor" transform="rotate(-90 34 235)">scale of analysis</text></g>
<g class="fig-accent">
<rect x="90" y="36" width="730" height="186" rx="14" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
<text x="110" y="70" font-size="24" font-weight="700" fill="currentColor">MACRO</text>
</g>
<text x="205" y="70" font-size="17" fill="currentColor">society-wide structures and institutions</text>
<g class="fig-muted">
<rect x="110" y="88" width="130" height="32" rx="6" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="250" y="88" width="130" height="32" rx="6" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="390" y="88" width="130" height="32" rx="6" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="530" y="88" width="130" height="32" rx="6" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="670" y="88" width="130" height="32" rx="6" fill="none" stroke="currentColor" stroke-width="2"/>
</g>
<text x="175" y="110" font-size="15" text-anchor="middle" fill="currentColor">family</text>
<text x="315" y="110" font-size="15" text-anchor="middle" fill="currentColor">education</text>
<text x="455" y="110" font-size="15" text-anchor="middle" fill="currentColor">religion</text>
<text x="595" y="110" font-size="15" text-anchor="middle" fill="currentColor">government</text>
<text x="735" y="110" font-size="15" text-anchor="middle" fill="currentColor">medicine</text>
${paradigmBox(110, 146, 'Functionalism', 'what keeps the whole stable')}
${paradigmBox(470, 146, 'Conflict theory', 'whom the structure benefits')}
<g class="fig-accent-2">
<rect x="90" y="246" width="730" height="186" rx="14" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
<text x="110" y="280" font-size="24" font-weight="700" fill="currentColor">MICRO</text>
</g>
<text x="200" y="280" font-size="17" fill="currentColor">face-to-face interaction and meaning-making</text>
<circle cx="130" cy="316" r="11" fill="none" stroke="currentColor" stroke-width="2"/>
<circle cx="250" cy="316" r="11" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="150" y1="316" x2="230" y2="316" stroke="currentColor" stroke-width="2" marker-start="url(#arr-ss-alt)" marker-end="url(#arr-ss-alt)"/>
<g class="fig-muted"><text x="190" y="306" font-size="13" text-anchor="middle" fill="currentColor">meanings</text></g>
${paradigmBox(110, 356, 'Symbolic interactionism', 'meanings negotiated in interaction')}
${paradigmBox(470, 356, 'Social exchange / rational choice', 'a running ledger of rewards and costs')}
<g class="fig-muted">
<rect x="850" y="36" width="120" height="396" rx="16" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
</g>
<text x="896" y="234" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor" transform="rotate(-90 896 234)">Feminist theory</text>
<text x="922" y="234" font-size="15" text-anchor="middle" fill="currentColor" transform="rotate(-90 922 234)">gender as an axis of stratification</text>
<g class="fig-muted"><text x="945" y="234" font-size="14" text-anchor="middle" fill="currentColor" transform="rotate(-90 945 234)">macro AND micro variants</text></g>
<text x="455" y="454" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">match the CLAIM to its altitude first, then its vocabulary: stability · who benefits · meanings</text>
</svg>`

/* 2 — The three paradigms: what each says society IS (replace-table, 560×440) */
const paradigmsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-ss-para')}</defs>
<g class="fig-muted">
<line x1="187" y1="14" x2="187" y2="396" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="373" y1="14" x2="373" y2="396" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
</g>
<text x="93" y="30" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Functionalism</text>
<text x="280" y="30" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Conflict theory</text>
<text x="466" y="30" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">Symbolic interactionism</text>
<g class="fig-muted">
<text x="93" y="50" font-size="12" text-anchor="middle" fill="currentColor">Durkheim · Parsons · Merton</text>
<text x="280" y="50" font-size="12" text-anchor="middle" fill="currentColor">Marx · Weber's extensions</text>
<text x="466" y="50" font-size="12" text-anchor="middle" fill="currentColor">Mead · Blumer · Goffman</text>
<rect x="63" y="60" width="60" height="22" rx="11" fill="none" stroke="currentColor" stroke-width="1.5"/>
<rect x="250" y="60" width="60" height="22" rx="11" fill="none" stroke="currentColor" stroke-width="1.5"/>
<rect x="436" y="60" width="60" height="22" rx="11" fill="none" stroke="currentColor" stroke-width="1.5"/>
</g>
<text x="93" y="76" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">MACRO</text>
<text x="280" y="76" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">MACRO</text>
<text x="466" y="76" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">MICRO</text>
<g class="fig-accent">
<circle cx="93" cy="170" r="66" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
<circle cx="93" cy="122" r="14" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
<circle cx="139" cy="155" r="14" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
<circle cx="121" cy="209" r="14" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
<circle cx="65" cy="209" r="14" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
<circle cx="47" cy="155" r="14" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
<line x1="93" y1="136" x2="139" y2="155" stroke="currentColor" stroke-width="2"/>
<line x1="139" y1="155" x2="121" y2="209" stroke="currentColor" stroke-width="2"/>
<line x1="121" y1="209" x2="65" y2="209" stroke="currentColor" stroke-width="2"/>
<line x1="65" y1="209" x2="47" y2="155" stroke="currentColor" stroke-width="2"/>
<line x1="47" y1="155" x2="93" y2="136" stroke="currentColor" stroke-width="2"/>
<line x1="93" y1="136" x2="93" y2="170" stroke="currentColor" stroke-width="1.5"/>
<line x1="139" y1="155" x2="93" y2="170" stroke="currentColor" stroke-width="1.5"/>
<line x1="121" y1="209" x2="93" y2="170" stroke="currentColor" stroke-width="1.5"/>
<line x1="65" y1="209" x2="93" y2="170" stroke="currentColor" stroke-width="1.5"/>
<line x1="47" y1="155" x2="93" y2="170" stroke="currentColor" stroke-width="1.5"/>
</g>
<text x="93" y="262" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">an ORGANISM</text>
<text x="93" y="281" font-size="12" text-anchor="middle" fill="currentColor">interdependent parts, each</text>
<text x="93" y="297" font-size="12" text-anchor="middle" fill="currentColor">with a function; equilibrium</text>
<g class="fig-accent-2">
<defs>${ARROW('arr-ss-para-r')}</defs>
<circle cx="250" cy="118" r="12" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<circle cx="280" cy="112" r="12" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<circle cx="310" cy="118" r="12" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<line x1="280" y1="132" x2="280" y2="158" stroke="currentColor" stroke-width="3" marker-end="url(#arr-ss-para-r)"/>
</g>
<rect x="238" y="162" width="84" height="30" rx="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<text x="280" y="182" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">resources</text>
<circle cx="262" cy="222" r="9" fill="none" stroke="currentColor" stroke-width="2"/>
<circle cx="298" cy="222" r="9" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="280" y1="214" x2="280" y2="198" stroke="currentColor" stroke-width="2" marker-end="url(#arr-ss-para)"/>
<text x="280" y="262" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">an ARENA</text>
<text x="280" y="281" font-size="12" text-anchor="middle" fill="currentColor">groups compete; institutions</text>
<text x="280" y="297" font-size="12" text-anchor="middle" fill="currentColor">keep the powerful ahead</text>
<circle cx="416" cy="190" r="14" fill="none" stroke="currentColor" stroke-width="2"/>
<circle cx="516" cy="190" r="14" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="436" y1="190" x2="496" y2="190" stroke="currentColor" stroke-width="2" marker-start="url(#arr-ss-para)" marker-end="url(#arr-ss-para)"/>
<g class="fig-accent">
<rect x="430" y="106" width="72" height="56" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<text x="466" y="128" font-size="12" text-anchor="middle" fill="currentColor">the SAME</text>
<text x="466" y="146" font-size="12" text-anchor="middle" fill="currentColor">symbol</text>
<path d="M466,162 L458,174 L474,174 z" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
</g>
<text x="466" y="262" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">a PRODUCT of interaction</text>
<text x="466" y="281" font-size="12" text-anchor="middle" fill="currentColor">people act on MEANINGS,</text>
<text x="466" y="297" font-size="12" text-anchor="middle" fill="currentColor">negotiated together</text>
<g class="fig-muted">
<text x="93" y="334" font-size="12" text-anchor="middle" fill="currentColor">manifest / latent function,</text>
<text x="93" y="350" font-size="12" text-anchor="middle" fill="currentColor">dysfunction, social facts</text>
<text x="280" y="334" font-size="12" text-anchor="middle" fill="currentColor">class conflict, power,</text>
<text x="280" y="350" font-size="12" text-anchor="middle" fill="currentColor">inequality, dominant ideology</text>
<text x="466" y="334" font-size="12" text-anchor="middle" fill="currentColor">symbols, definition of the</text>
<text x="466" y="350" font-size="12" text-anchor="middle" fill="currentColor">situation, labeling</text>
</g>
<text x="280" y="422" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">scale + vocabulary = paradigm</text>
</svg>`

/* 3 — Functionalism's precision tools: one institution, three kinds of consequence (lead, 1000×460) */
const toolBox = (y: number, name: string, def: string, example: string, cls?: string) => {
  const inner = `<rect x="340" y="${y}" width="330" height="100" rx="12" fill="${cls ? 'currentColor' : 'none'}" fill-opacity="0.08" stroke="currentColor" stroke-width="${cls ? 3 : 2.5}"/>
<text x="505" y="${y + 32}" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">${name}</text>
<text x="505" y="${y + 56}" font-size="16" text-anchor="middle" fill="currentColor">${def}</text>`
  return `${cls ? `<g class="${cls}">${inner}</g>` : inner}
<g class="fig-muted"><text x="505" y="${y + 82}" font-size="16" text-anchor="middle" fill="currentColor">${example}</text></g>`
}

const toolsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ss-tools')}</defs>
<rect x="40" y="180" width="220" height="100" rx="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<text x="150" y="220" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">the SCHOOL</text>
<text x="150" y="248" font-size="15" text-anchor="middle" fill="currentColor">(any structure that endures)</text>
<line x1="260" y1="215" x2="336" y2="105" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ss-tools)"/>
<line x1="260" y1="230" x2="336" y2="230" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ss-tools)"/>
<line x1="260" y1="245" x2="336" y2="355" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ss-tools)"/>
<g class="fig-muted">
<text x="296" y="150" font-size="14" text-anchor="middle" fill="currentColor">intended</text>
<text x="296" y="220" font-size="14" text-anchor="middle" fill="currentColor">unintended</text>
<text x="296" y="316" font-size="14" text-anchor="middle" fill="currentColor">unintended</text>
</g>
${toolBox(50, 'MANIFEST function', 'intended, recognized consequence', 'transmits knowledge', 'fig-accent')}
${toolBox(180, 'LATENT function', 'unintended, unrecognized — still stabilizes', 'childcare, matchmaking')}
${toolBox(310, 'LATENT DYSFUNCTION', 'unintended — and DISRUPTS stability', 'tracking reproduces inequality', 'fig-accent-2')}
<g class="fig-muted">
<text x="150" y="312" font-size="15" text-anchor="middle" fill="currentColor">persists ⇒ ask what it DOES</text>
<text x="150" y="334" font-size="15" text-anchor="middle" fill="currentColor">for the system</text>
<rect x="710" y="50" width="260" height="360" rx="14" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
</g>
<text x="840" y="86" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">the functionalist move</text>
<text x="840" y="120" font-size="16" text-anchor="middle" fill="currentColor">if a structure ENDURES,</text>
<text x="840" y="142" font-size="16" text-anchor="middle" fill="currentColor">it must be doing something</text>
<text x="840" y="164" font-size="16" text-anchor="middle" fill="currentColor">for the SYSTEM</text>
<g class="fig-muted"><line x1="740" y1="186" x2="940" y2="186" stroke="currentColor" stroke-width="1.5"/></g>
<text x="840" y="216" font-size="16" text-anchor="middle" fill="currentColor">Durkheim: even DEVIANCE</text>
<text x="840" y="238" font-size="16" text-anchor="middle" fill="currentColor">has a function —</text>
<text x="840" y="260" font-size="16" text-anchor="middle" fill="currentColor">it clarifies moral boundaries</text>
<text x="840" y="282" font-size="16" text-anchor="middle" fill="currentColor">and builds solidarity</text>
<g class="fig-muted"><line x1="740" y1="306" x2="940" y2="306" stroke="currentColor" stroke-width="1.5"/></g>
<g class="fig-accent-2">
<text x="840" y="340" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">conflict theory's retort:</text>
<text x="840" y="366" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">"stabilizing FOR WHOM?"</text>
</g>
<text x="355" y="446" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">two questions sort any consequence: was it intended? does it stabilize or disrupt?</text>
</svg>`

/* 4 — The interactionist wager: the Thomas theorem as a loop, plus social constructionism (lead, 1000×460) */
const thomasSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ss-thomas')}</defs>
<rect x="30" y="50" width="270" height="90" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="165" y="82" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">1 · DEFINE the situation</text>
<text x="165" y="106" font-size="15" text-anchor="middle" fill="currentColor">the rumor: "the bank is failing"</text>
<text x="165" y="126" font-size="15" text-anchor="middle" fill="currentColor">(it is solvent)</text>
<line x1="300" y1="95" x2="356" y2="95" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ss-thomas)"/>
<rect x="360" y="50" width="270" height="90" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="495" y="82" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">2 · ACT on the definition</text>
<text x="495" y="106" font-size="15" text-anchor="middle" fill="currentColor">depositors rush to withdraw</text>
<text x="495" y="126" font-size="15" text-anchor="middle" fill="currentColor">their money</text>
<path d="M495,140 L495,345 L469,345" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ss-thomas)"/>
<g class="fig-accent-2">
<rect x="195" y="300" width="270" height="90" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<text x="330" y="332" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">3 · REAL consequences</text>
<text x="330" y="356" font-size="15" text-anchor="middle" fill="currentColor">the solvent bank runs out of cash</text>
<text x="330" y="376" font-size="15" text-anchor="middle" fill="currentColor">and fails</text>
</g>
<path d="M195,345 L60,345 L60,144" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ss-thomas)"/>
<g class="fig-muted">
<text x="125" y="236" font-size="14" text-anchor="middle" fill="currentColor">the failure now</text>
<text x="125" y="256" font-size="14" text-anchor="middle" fill="currentColor">"proves" the rumor</text>
</g>
<ellipse cx="330" cy="222" rx="140" ry="52" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<text x="330" y="214" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Thomas theorem</text>
<text x="330" y="238" font-size="14" text-anchor="middle" fill="currentColor">defined as real → real in its consequences</text>
<g class="fig-accent-2"><text x="330" y="436" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">the definition need not be TRUE — only acted on</text></g>
<g class="fig-muted"><rect x="680" y="36" width="290" height="408" rx="14" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/></g>
<text x="825" y="70" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Social constructionism</text>
<rect x="705" y="92" width="240" height="96" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="825" y="120" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">feels NATURAL</text>
<text x="825" y="146" font-size="15" text-anchor="middle" fill="currentColor">race · illness · gender</text>
<text x="825" y="168" font-size="15" text-anchor="middle" fill="currentColor">the value of money</text>
<line x1="825" y1="188" x2="825" y2="226" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ss-thomas)"/>
<rect x="705" y="230" width="240" height="76" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="825" y="260" font-size="16" text-anchor="middle" fill="currentColor">actually BUILT and kept up</text>
<text x="825" y="284" font-size="16" text-anchor="middle" fill="currentColor">by collective agreement</text>
<line x1="825" y1="306" x2="825" y2="344" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ss-thomas)"/>
<g class="fig-accent">
<rect x="705" y="348" width="240" height="72" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="825" y="378" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">so it can be built</text>
<text x="825" y="402" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">DIFFERENTLY elsewhere</text>
</g>
</svg>`

/* 5 — Religious organizations on a tension-with-society axis (lead, 1000×460) */
const orgBox = (x: number, y: number, w: number, h: number, name: string, lines: string[], opacity: string) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/>
<text x="${x + w / 2}" y="${y + 30}" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">${name}</text>
${lines.map((l, i) => `<text x="${x + w / 2}" y="${y + 56 + i * 22}" font-size="15" text-anchor="middle" fill="currentColor">${l}</text>`).join('\n')}`

const religionSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ss-rel')}</defs>
<g class="fig-muted">
<line x1="960" y1="64" x2="46" y2="64" stroke="currentColor" stroke-width="2" marker-end="url(#arr-ss-rel)"/>
<text x="500" y="50" font-size="16" text-anchor="middle" fill="currentColor">larger · more integrated with society · born into it</text>
</g>
${orgBox(40, 120, 220, 170, 'CHURCH / ecclesia', ['large', 'integrated with society', 'born into it'], '0.04')}
${orgBox(290, 160, 200, 130, 'DENOMINATION', ['established,', 'one among several'], '0.08')}
${orgBox(520, 190, 190, 100, 'SECT', ['smaller, higher tension', 'often formed by schism'], '0.12')}
${orgBox(740, 204, 220, 86, 'CULT / NRM', ['novel beliefs', 'highest tension'], '0.18')}
<g class="fig-accent-2">
<defs>${ARROW('arr-ss-rel-r')}</defs>
<path d="M440,156 Q520,96 606,184" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#arr-ss-rel-r)"/>
<text x="524" y="108" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">schism</text>
<text x="524" y="128" font-size="14" text-anchor="middle" fill="currentColor">a group breaks away</text>
</g>
<line x1="40" y1="326" x2="960" y2="326" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ss-rel)"/>
<text x="500" y="356" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">tension with the surrounding society →</text>
<g class="fig-muted"><line x1="40" y1="378" x2="960" y2="378" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/></g>
<text x="40" y="408" font-size="16" font-weight="700" fill="currentColor">Durkheim (functionalist)</text>
<text x="40" y="432" font-size="15" fill="currentColor">sacred vs profane → collective solidarity</text>
<text x="365" y="408" font-size="16" font-weight="700" fill="currentColor">Marx (conflict)</text>
<text x="365" y="432" font-size="15" fill="currentColor">soothes inequality — and so preserves it</text>
<text x="690" y="408" font-size="16" font-weight="700" fill="currentColor">Weber</text>
<text x="690" y="432" font-size="15" fill="currentColor">the Protestant ethic drove capitalism</text>
</svg>`

/* 6 — Mobility: the vocabulary as mini ladders (replace-table, 560×440) */
const ladder = (x: number, y: number, w = 36) => {
  const rails = `<line x1="${x}" y1="${y}" x2="${x}" y2="${y + 86}" stroke="currentColor" stroke-width="2"/><line x1="${x + w}" y1="${y}" x2="${x + w}" y2="${y + 86}" stroke="currentColor" stroke-width="2"/>`
  const rungs = [10, 32, 54, 76].map((d) => `<line x1="${x}" y1="${y + d}" x2="${x + w}" y2="${y + d}" stroke="currentColor" stroke-width="2"/>`).join('')
  return `<g class="fig-muted">${rails}${rungs}</g>`
}
const dot = (cx: number, cy: number, cls: string, hollow = false) =>
  `<g class="${cls}"><circle cx="${cx}" cy="${cy}" r="7" fill="${hollow ? 'none' : 'currentColor'}" stroke="currentColor" stroke-width="2"${hollow ? ' stroke-dasharray="3 2"' : ''}/></g>`

const mobilitySvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-ss-mob')}</defs>
<g class="fig-accent"><defs>${ARROW('arr-ss-mob-b')}</defs>
<line x1="78" y1="128" x2="78" y2="86" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#arr-ss-mob-b)"/>
<line x1="353" y1="128" x2="353" y2="86" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ss-mob-b)"/>
<line x1="78" y1="248" x2="78" y2="184" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ss-mob-b)"/>
<line x1="341" y1="204" x2="381" y2="204" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ss-mob-b)"/>
</g>
<g class="fig-accent-2"><defs>${ARROW('arr-ss-mob-r')}</defs>
<line x1="90" y1="184" x2="90" y2="248" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ss-mob-r)"/>
<line x1="114" y1="320" x2="114" y2="348" stroke="currentColor" stroke-width="3" marker-end="url(#arr-ss-mob-r)"/>
</g>
<g class="fig-muted">
<text x="12" y="26" font-size="13" fill="currentColor">WHOSE move?</text>
<text x="12" y="150" font-size="13" fill="currentColor">WHICH WAY?</text>
<text x="12" y="270" font-size="13" fill="currentColor">DID THE LADDER ITSELF MOVE?</text>
<line x1="12" y1="130" x2="548" y2="130" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="12" y1="250" x2="548" y2="250" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
</g>
${ladder(24, 38)}
${dot(42, 114, 'fig-muted')}
${dot(42, 70, 'fig-accent')}
<text x="100" y="62" font-size="15" font-weight="700" fill="currentColor">INTERGENERATIONAL</text>
<text x="100" y="84" font-size="13" fill="currentColor">parent (grey) → child (blue)</text>
<text x="100" y="104" font-size="13" fill="currentColor">a change between generations</text>
${ladder(299, 38)}
${dot(317, 114, 'fig-accent')}
${dot(317, 70, 'fig-accent')}
<text x="375" y="62" font-size="15" font-weight="700" fill="currentColor">INTRAGENERATIONAL</text>
<text x="375" y="84" font-size="13" fill="currentColor">one person, one lifetime</text>
<text x="375" y="104" font-size="13" fill="currentColor">age 25 → age 50</text>
${ladder(24, 158)}
<text x="110" y="182" font-size="15" font-weight="700" fill="currentColor">VERTICAL</text>
<text x="110" y="204" font-size="13" fill="currentColor">up or down the hierarchy</text>
<text x="110" y="224" font-size="13" fill="currentColor">promotion · demotion</text>
${ladder(299, 158)}
${ladder(385, 158)}
${dot(317, 204, 'fig-accent')}
${dot(403, 204, 'fig-accent', true)}
<text x="440" y="182" font-size="15" font-weight="700" fill="currentColor">HORIZONTAL</text>
<text x="440" y="204" font-size="13" fill="currentColor">same level,</text>
<text x="440" y="224" font-size="13" fill="currentColor">new position</text>
<text x="440" y="244" font-size="13" fill="currentColor">nurse → teacher</text>
${ladder(24, 278, 76)}
${dot(43, 310, 'fig-muted', true)}
${dot(62, 310, 'fig-muted', true)}
${dot(81, 310, 'fig-muted', true)}
${dot(43, 354, 'fig-accent-2')}
${dot(62, 354, 'fig-accent-2')}
${dot(81, 354, 'fig-accent-2')}
<text x="134" y="302" font-size="15" font-weight="700" fill="currentColor">STRUCTURAL</text>
<text x="134" y="324" font-size="13" fill="currentColor">the economy changes shape — a whole group moves</text>
<text x="134" y="344" font-size="13" fill="currentColor">automation pushes a class down;</text>
<text x="134" y="364" font-size="13" fill="currentColor">no individual merit or failure required</text>
<text x="280" y="422" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">classify BOTH: whose generation, and did the ladder itself move?</text>
</svg>`

/* 7 — Poverty: an absolute line stays put, a relative line moves with the society (lead, 1000×460) */
const povertyPanel = (
  x0: number,
  key: string,
  title: string,
  curve: string,
  absX: number,
  relX: number,
  absLabelLeft: boolean,
) => {
  const absAnchor = absLabelLeft ? 'end' : 'start'
  const absTx = absLabelLeft ? absX - 8 : absX + 8
  return `<text x="${x0 + 210}" y="52" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">${title}</text>
<defs>
<clipPath id="clip-ss-pov-${key}-abs"><rect x="${x0}" y="80" width="${absX - x0}" height="252"/></clipPath>
<clipPath id="clip-ss-pov-${key}-rel"><rect x="${x0}" y="80" width="${relX - x0}" height="252"/></clipPath>
</defs>
<g class="fig-accent-2"><path d="${curve} L${x0 + 420},330 L${x0},330 z" fill="currentColor" fill-opacity="0.18" stroke="none" clip-path="url(#clip-ss-pov-${key}-abs)"/></g>
<g class="fig-accent"><path d="${curve} L${x0 + 420},330 L${x0},330 z" fill="currentColor" fill-opacity="0.18" stroke="none" clip-path="url(#clip-ss-pov-${key}-rel)"/></g>
<path d="${curve}" fill="none" stroke="currentColor" stroke-width="3"/>
<line x1="${x0}" y1="330" x2="${x0 + 440}" y2="330" stroke="currentColor" stroke-width="2" marker-end="url(#arr-ss-pov)"/>
<g class="fig-muted"><text x="${x0 + 436}" y="352" font-size="14" text-anchor="end" fill="currentColor">income →</text></g>
<g class="fig-accent-2">
<line x1="${absX}" y1="110" x2="${absX}" y2="330" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5"/>
<text x="${absTx}" y="84" font-size="16" font-weight="700" text-anchor="${absAnchor}" fill="currentColor">ABSOLUTE</text>
<text x="${absTx}" y="103" font-size="13" text-anchor="${absAnchor}" fill="currentColor">subsistence</text>
</g>
<g class="fig-accent">
<line x1="${relX}" y1="110" x2="${relX}" y2="330" stroke="currentColor" stroke-width="2.5"/>
<text x="${relX + 8}" y="84" font-size="16" font-weight="700" fill="currentColor">RELATIVE</text>
<text x="${relX + 8}" y="103" font-size="13" fill="currentColor">a share of the typical income</text>
</g>`
}

const povertySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ss-pov')}</defs>
${povertyPanel(40, 'a', 'a poorer society', 'M40,330 C100,330 120,115 160,115 C210,115 270,300 460,328', 130, 190, true)}
<g class="fig-muted"><line x1="500" y1="30" x2="500" y2="370" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/></g>
${povertyPanel(520, 'b', 'the same society, grown richer', 'M520,330 C640,330 680,120 740,120 C810,120 850,300 940,328', 580, 730, false)}
<g class="fig-muted"><text x="700" y="352" font-size="14" text-anchor="middle" fill="currentColor">the whole curve has shifted right →</text></g>
<g class="fig-accent-2"><text x="500" y="396" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">ABSOLUTE poverty — below what subsistence requires: the line stays put, so growth shrinks it</text></g>
<g class="fig-accent"><text x="500" y="422" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">RELATIVE poverty — deprived compared with the surrounding standard: the line moves with the society</text></g>
<g class="fig-muted"><text x="500" y="448" font-size="15" text-anchor="middle" fill="currentColor">what the relatively poor lack is full PARTICIPATION — hence two definitions, different politics</text></g>
</svg>`

/* 8 — The demographic transition: births, deaths and the gap between them (replace-table, 560×440) */
const BIRTHS = 'M50,88 C120,90 230,94 300,94 C340,94 370,240 420,250 L540,254'
const DEATHS = 'M50,110 C100,102 150,116 175,108 C220,96 250,240 300,248 L540,252'
const DEATHS_BACK = 'L540,252 L300,248 C250,240 220,96 175,108 C150,116 100,102 50,110'

const dtmSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-ss-dtm')}</defs>
<g class="fig-muted">
<line x1="172" y1="52" x2="172" y2="300" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="295" y1="52" x2="295" y2="300" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="417" y1="52" x2="417" y2="300" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<text x="111" y="44" font-size="12" text-anchor="middle" fill="currentColor">preindustrial</text>
<text x="233" y="44" font-size="12" text-anchor="middle" fill="currentColor">early industrial</text>
<text x="356" y="44" font-size="12" text-anchor="middle" fill="currentColor">late industrial</text>
<text x="478" y="44" font-size="12" text-anchor="middle" fill="currentColor">postindustrial</text>
<text x="40" y="94" font-size="12" text-anchor="end" fill="currentColor">high</text>
<text x="40" y="256" font-size="12" text-anchor="end" fill="currentColor">low</text>
</g>
<text x="111" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">stage 1</text>
<text x="233" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">stage 2</text>
<text x="356" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">stage 3</text>
<text x="478" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">stage 4</text>
<path d="${BIRTHS} ${DEATHS_BACK} z" fill="currentColor" fill-opacity="0.1" stroke="none"/>
<line x1="50" y1="300" x2="50" y2="60" stroke="currentColor" stroke-width="2" marker-end="url(#arr-ss-dtm)"/>
<line x1="50" y1="300" x2="548" y2="300" stroke="currentColor" stroke-width="2" marker-end="url(#arr-ss-dtm)"/>
<g class="fig-muted">
<text x="22" y="180" font-size="13" text-anchor="middle" fill="currentColor" transform="rotate(-90 22 180)">rate per 1,000</text>
<text x="300" y="322" font-size="13" text-anchor="middle" fill="currentColor">time, development →</text>
<path d="M50,292 C180,290 240,270 310,180 C370,100 440,70 540,62" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5"/>
<text x="536" y="86" font-size="13" text-anchor="end" fill="currentColor">population</text>
</g>
<g class="fig-accent"><path d="${BIRTHS}" fill="none" stroke="currentColor" stroke-width="3.5"/>
<text x="118" y="76" font-size="14" font-weight="700" fill="currentColor">births</text></g>
<g class="fig-accent-2"><path d="${DEATHS}" fill="none" stroke="currentColor" stroke-width="3.5"/>
<text x="56" y="136" font-size="14" font-weight="700" fill="currentColor">deaths</text></g>
<text x="233" y="166" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">the GAP</text>
<text x="233" y="184" font-size="12" text-anchor="middle" fill="currentColor">= rapid growth</text>
<text x="280" y="356" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">the explosion is stage 2: deaths fall a generation</text>
<text x="280" y="376" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">or more BEFORE births do</text>
<text x="280" y="402" font-size="13" text-anchor="middle" fill="currentColor">Malthus: population outruns food, checked by famine and war —</text>
<text x="280" y="420" font-size="13" text-anchor="middle" fill="currentColor">but fertility fell with development, not catastrophe</text>
</svg>`

/* 9 — Three population pyramids (after Demographics, 1000×460) */
const pyramid = (cx: number, widths: number[], highlight: (i: number) => string | undefined) =>
  widths
    .map((w, i) => {
      const y = 104 + i * 24
      const cls = highlight(i)
      const r = `<rect x="${cx - w / 2}" y="${y}" width="${w}" height="20" rx="3" fill="currentColor" fill-opacity="${cls ? '0.35' : '0.12'}" stroke="currentColor" stroke-width="1.5"/>`
      return cls ? `<g class="${cls}">${r}</g>` : r
    })
    .join('\n') + `<g class="fig-muted"><line x1="${cx}" y1="100" x2="${cx}" y2="300" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4"/></g>`

const pyramidsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<text x="48" y="118" font-size="13" text-anchor="end" fill="currentColor">80+</text>
<text x="48" y="156" font-size="13" text-anchor="end" fill="currentColor">65</text>
<text x="48" y="252" font-size="13" text-anchor="end" fill="currentColor">15</text>
<text x="48" y="296" font-size="13" text-anchor="end" fill="currentColor">0</text>
<text x="26" y="200" font-size="13" text-anchor="middle" fill="currentColor" transform="rotate(-90 26 200)">age</text>
<line x1="340" y1="30" x2="340" y2="380" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<line x1="660" y1="30" x2="660" y2="380" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
</g>
<text x="190" y="52" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">EXPANSIVE</text>
<text x="190" y="76" font-size="15" text-anchor="middle" fill="currentColor">wide base — young, high fertility</text>
${pyramid(190, [36, 56, 80, 108, 140, 174, 208, 244], (i) => (i >= 6 ? 'fig-accent' : undefined))}
<text x="500" y="52" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">STATIONARY</text>
<text x="500" y="76" font-size="15" text-anchor="middle" fill="currentColor">barrel — stable</text>
${pyramid(500, [70, 120, 156, 170, 174, 174, 172, 170], () => undefined)}
<text x="810" y="52" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">CONSTRICTIVE</text>
<text x="810" y="76" font-size="15" text-anchor="middle" fill="currentColor">top-heavy — aging</text>
${pyramid(810, [96, 150, 182, 194, 186, 160, 132, 112], (i) => (i <= 2 ? 'fig-accent-2' : undefined))}
<g class="fig-muted">
<text x="190" y="322" font-size="13" text-anchor="middle" fill="currentColor">◀ males  ·  females ▶</text>
<text x="500" y="322" font-size="13" text-anchor="middle" fill="currentColor">◀ males  ·  females ▶</text>
<text x="810" y="322" font-size="13" text-anchor="middle" fill="currentColor">◀ males  ·  females ▶</text>
</g>
<g class="fig-accent">
<text x="190" y="352" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">poised to GROW</text>
<text x="190" y="374" font-size="15" text-anchor="middle" fill="currentColor">population momentum</text>
</g>
<text x="500" y="352" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">replacement-level births</text>
<text x="500" y="374" font-size="15" text-anchor="middle" fill="currentColor">about 2.1 per woman</text>
<g class="fig-accent-2">
<text x="810" y="352" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">rising DEPENDENCY ratio</text>
<text x="810" y="374" font-size="15" text-anchor="middle" fill="currentColor">fewer workers per retiree</text>
</g>
<text x="500" y="420" font-size="16" text-anchor="middle" fill="currentColor">dependency ratio = (young + old who do not work) ÷ working-age adults</text>
<g class="fig-muted"><text x="500" y="446" font-size="15" text-anchor="middle" fill="currentColor">read the BASE for fertility, the TOP for aging — demography becomes politics</text></g>
</svg>`

export const mcatStructureStratificationFigures: DeckFigurePlacement[] = [
  {
    at: 'Macro vs. Micro — Choose Your Altitude First',
    mode: 'lead',
    figure: {
      svg: altitudeSvg,
      alt:
        'An altitude diagram with a vertical "scale of analysis" arrow. The upper band, macro, is society-wide structures and institutions: a row of five institutions (family, education, religion, government, medicine) and two paradigms placed at this level — functionalism (what keeps the whole stable) and conflict theory (whom the structure benefits). The lower band, micro, is face-to-face interaction and meaning-making: two people exchanging meanings, with symbolic interactionism (meanings negotiated in interaction) and social exchange / rational choice (a running ledger of rewards and costs). A dashed column on the right spanning both bands is feminist theory — gender as an axis of stratification, macro and micro variants. Footer: match the claim to its altitude first, then its vocabulary — stability, who benefits, meanings.',
    },
    blocks: ['- Macro = structures and institutions; micro = interaction and meaning. Place the CLAIM before you name the theory'],
  },
  {
    at: 'The Three Core Paradigms',
    mode: 'replace-table',
    figure: {
      svg: paradigmsSvg,
      alt:
        'Three columns, each with a small sketch of what society is. Functionalism (Durkheim, Parsons, Merton; macro): an organism — five interlinked parts inside one circle, interdependent parts each with a function, equilibrium; vocabulary manifest and latent function, dysfunction, social facts. Conflict theory (Marx, Weber\'s extensions; macro): an arena — a larger group above and a smaller group below both pushing toward a box of scarce resources; groups compete and institutions keep the powerful ahead; vocabulary class conflict, power, inequality, dominant ideology. Symbolic interactionism (Mead, Blumer, Goffman; micro): a product of interaction — two people with a double arrow between them under one shared symbol; people act on meanings negotiated together; vocabulary symbols, definition of the situation, labeling. Footer: scale plus vocabulary equals paradigm.',
    },
    blocks: [
      '- **Functionalism** (macro): society is an ORGANISM — ask what a structure does for stability',
      '- **Conflict theory** (macro): society is an ARENA — ask who benefits; ideology hides it',
      '- **Symbolic interactionism** (micro): society is built from MEANINGS negotiated in interaction',
      '- Scale + vocabulary = paradigm',
    ],
  },
  {
    at: "Functionalism's Precision Tools",
    mode: 'lead',
    figure: {
      svg: toolsSvg,
      alt:
        'One institution, the school (any structure that endures), fans out into three kinds of consequence. Top, in blue: manifest function — the intended, recognized consequence; example, transmits knowledge. Middle: latent function — unintended and unrecognized, but still stabilizing; example, childcare and matchmaking. Bottom, in red: latent dysfunction — unintended, and it disrupts stability; example, tracking reproduces inequality. Under the school: persists, therefore ask what it does for the system. A side panel, the functionalist move: if a structure endures it must be doing something for the system; Durkheim — even deviance has a function, it clarifies moral boundaries and builds solidarity; conflict theory\'s retort, "stabilizing for whom?". Footer: two questions sort any consequence — was it intended, and does it stabilize or disrupt?',
    },
    blocks: ['- Was it INTENDED? Does it STABILIZE or DISRUPT? Those two questions name the tool'],
  },
  {
    at: 'The Interactionist Wager',
    mode: 'lead',
    figure: {
      svg: thomasSvg,
      alt:
        'Left: the Thomas theorem as a three-step loop. Step 1, define the situation: the rumor "the bank is failing" (it is solvent). Step 2, act on the definition: depositors rush to withdraw their money. Step 3, highlighted in red, real consequences: the solvent bank runs out of cash and fails. An arrow returns from step 3 to step 1: the failure now "proves" the rumor. Centre ellipse: Thomas theorem — defined as real, real in its consequences. Footer in red: the definition need not be true, only acted on. Right panel, social constructionism: categories that feel natural (race, illness, gender, the value of money) are actually built and kept up by collective agreement, so they can be built differently elsewhere.',
    },
    blocks: ['- A false definition, acted on, produces a true outcome — that is the whole wager'],
  },
  {
    at: 'Religion',
    mode: 'lead',
    figure: {
      svg: religionSvg,
      alt:
        'Four religious organizations drawn as boxes of decreasing size along a horizontal axis labelled tension with the surrounding society, increasing to the right. Church or ecclesia: large, integrated with society, born into it. Denomination: established, one among several. Sect: smaller, higher tension, often formed by schism. Cult or new religious movement: novel beliefs, highest tension. A dashed red arrow labelled schism — a group breaks away — jumps from denomination to sect. Above the boxes a reverse arrow reads: larger, more integrated with society, born into it. Below the axis, three theses about one institution: Durkheim (functionalist), sacred vs profane produces collective solidarity; Marx (conflict), religion soothes inequality and so preserves it; Weber, the Protestant ethic drove capitalism.',
    },
    blocks: ['- Church → denomination → sect → cult is ONE axis: how much tension with society. Sects are born by schism'],
  },
  {
    at: 'Mobility — The Full Vocabulary',
    mode: 'replace-table',
    figure: {
      svg: mobilitySvg,
      alt:
        'Three rows of small ladders. Row one, whose move: intergenerational — a grey parent dot on a low rung and a blue child dot on a higher rung, a change between generations; intragenerational — the same blue dot at a low rung (age 25) and a higher rung (age 50), one person, one lifetime. Row two, which way: vertical — arrows up and down the ladder, promotion or demotion; horizontal — an arrow across from one ladder to another at the same rung, same level, new position, nurse to teacher. Row three, did the ladder itself move: structural — a whole group of dots drops from one rung to the next, the economy changes shape, automation pushes a class down, no individual merit or failure required. Footer: classify both — whose generation, and did the ladder itself move?',
    },
    blocks: [
      '- **Inter**generational = parent → child; **intra**generational = one lifetime',
      '- **Vertical** = up or down; **horizontal** = new position, same level',
      '- **Structural**: the economy reshapes — whole groups move, no individual merit or failure',
      '- **Meritocracy** is the IDEAL to be tested; **social reproduction** is the finding',
    ],
  },
  {
    at: 'Poverty — Two Definitions, Different Politics',
    mode: 'lead',
    figure: {
      svg: povertySvg,
      alt:
        'Two income-distribution curves side by side. Left, a poorer society: a dashed red vertical line, the absolute poverty line (subsistence, fixed), cuts through the bulk of the distribution; a blue vertical line, the relative poverty line (a share of the typical income), sits just to its right near the peak. Right, the same society grown richer: the whole curve has shifted right. The red absolute line is in the same place and now cuts only the thin left tail, while the blue relative line has moved right with the society and still cuts a sizeable share. Shaded areas mark the people below each line. Legend: absolute poverty, below what subsistence requires — the line stays put, so growth shrinks it; relative poverty, deprived compared with the surrounding standard — the line moves with the society; what the relatively poor lack is full participation, hence two definitions, different politics.',
      caption: 'Illustrative distributions — the shapes are not data.',
    },
    blocks: ['- Growth can nearly erase ABSOLUTE poverty and leave RELATIVE poverty untouched'],
  },
  {
    at: 'The Demographic Transition Model (DTM)',
    mode: 'replace-table',
    figure: {
      svg: dtmSvg,
      alt:
        'A chart of birth rate and death rate against time across four stages. Stage 1, preindustrial: births and deaths both high, population stable and low. Stage 2, early industrial: deaths fall steeply while births stay high; the shaded gap between the two curves is rapid growth. Stage 3, late industrial: births fall while deaths stay low; growth slows. Stage 4, postindustrial: both low, population stable or declining. A dashed population curve rises slowly in stage 1, steeply through stages 2 and 3, and levels off in stage 4. Caption: the explosion is stage 2 — deaths fall a generation or more before births do; Malthus predicted population would outrun food and be checked by famine and war, but fertility fell with development, not catastrophe.',
      caption: 'Illustrative curves — the classic four-stage shape, not a specific country\'s data.',
    },
    blocks: [
      '- **Stage 1** preindustrial: births high, deaths high → stable, low',
      '- **Stage 2** early industrial: deaths FALL first (sanitation, food, medicine) → rapid growth',
      '- **Stage 3** late industrial: births FALL (urbanization, education, contraception) → growth slows',
      '- **Stage 4** postindustrial: both low → stable or declining, aging',
    ],
  },
  {
    at: "Demographics — Stratification's Moving Picture",
    mode: 'after',
    figure: {
      svg: pyramidsSvg,
      alt:
        'Three population pyramids, age bands from 0 at the bottom to 80-plus at the top, males on the left and females on the right of a centre line. Expansive: a wide base narrowing steadily to the top, the youngest bands highlighted in blue — a young, high-fertility population poised to grow (population momentum). Stationary: a barrel shape of roughly equal bands tapering only at the oldest ages — stable, replacement-level births of about 2.1 per woman. Constrictive: narrower at the base than in the middle, the oldest bands highlighted in red — an aging population with a rising dependency ratio, fewer workers per retiree. Footer: dependency ratio equals young plus old who do not work divided by working-age adults; read the base for fertility and the top for aging — demography becomes politics.',
      caption: 'Illustrative pyramid shapes, not census data.',
    },
  },
]
