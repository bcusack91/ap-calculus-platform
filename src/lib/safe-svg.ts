/**
 * Allowlist check for authored inline SVG diagrams (AP diagnostic v2 `figure`
 * stimuli). Diagrams come from the bank files, but a copy also travels in a
 * stored attempt's review, and the legacy review page renders stored copies —
 * so nothing is injected unless it passes this check: drawing elements only,
 * no scripts, no event handlers, no external references, no foreignObject.
 * Pure, so the renderer, the review layer and the bank check script agree.
 */

const ALLOWED_TAGS = new Set([
  'svg', 'g', 'path', 'line', 'polyline', 'polygon', 'rect', 'circle', 'ellipse',
  'text', 'tspan', 'defs', 'marker', 'title', 'desc', 'pattern', 'clippath',
  'lineargradient', 'radialgradient', 'stop',
])

/** Attributes that may carry script or pull external content. */
const FORBIDDEN_ATTR = /\s(on[a-z]+|href|xlink:href|src|style)\s*=/i

export function svgProblems(svg: string): string[] {
  const problems: string[] = []
  const s = svg.trim()
  if (!/^<svg[\s>]/i.test(s) || !/<\/svg>\s*$/i.test(s)) problems.push('must be one <svg>…</svg> element')
  if (!/\sviewBox\s*=/.test(s)) problems.push('needs a viewBox so it scales to the column')
  if (/<!|<\?/.test(s)) problems.push('no comments, CDATA, doctype or processing instructions')
  if (FORBIDDEN_ATTR.test(s)) problems.push('no event handlers, href/src or style attributes')
  if (/javascript:|data:/i.test(s)) problems.push('no javascript: or data: URLs')
  for (const m of s.matchAll(/<\/?\s*([a-zA-Z][\w:-]*)/g)) {
    const tag = m[1].toLowerCase()
    if (!ALLOWED_TAGS.has(tag)) problems.push(`tag <${tag}> is not allowed`)
  }
  return [...new Set(problems)]
}

export function isSafeSvg(svg: unknown): svg is string {
  return typeof svg === 'string' && svg.length > 0 && svg.length <= 60_000 && svgProblems(svg).length === 0
}
