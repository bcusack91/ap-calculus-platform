/**
 * Splits lesson text into plain-text and KaTeX parts on `$...$` / `$$...$$`
 * delimiters, honoring the `\$` escape on both sides of the split.
 *
 * Authors write currency as `\$18` because a bare `$` pair is a math span.
 * The escape has to survive two different destinations: in prose it becomes a
 * literal `$`; inside a math span ("$\$18$") it must stay `\$`, which KaTeX
 * typesets as a dollar sign. The old inline splitter only restored the prose
 * side, so every money problem written as `$\$18$` rendered its placeholder
 * ("DOLLAR18") on screen.
 */
export type InlineMathPart = { type: 'text' | 'latex'; content: string; display: boolean }

const PLACEHOLDER = '\u0000DOLLAR\u0000'
const PLACEHOLDER_RE = /\u0000DOLLAR\u0000/g

/** `\(...\)` delimiters normalized to `$...$`. */
export function normalizeMathDelimiters(text: string): string {
  return text.replace(/\\\(([^)]*?)\\\)/g, '$$$1$$')
}

export function splitInlineMath(text: string): InlineMathPart[] {
  const processed = normalizeMathDelimiters(text).replace(/\\\$/g, PLACEHOLDER)
  const parts: InlineMathPart[] = []
  let remaining = processed

  while (remaining.length > 0) {
    const displayMatch = remaining.match(/\$\$([^$]+?)\$\$/)
    const inlineMatch = remaining.match(/\$([^$]+?)\$/)
    const displayIndex = displayMatch ? remaining.indexOf(displayMatch[0]) : -1
    const inlineIndex = inlineMatch ? remaining.indexOf(inlineMatch[0]) : -1

    let firstMatch: RegExpMatchArray | null = null
    let firstIndex = -1
    let isDisplay = false
    if (displayIndex >= 0 && (inlineIndex < 0 || displayIndex <= inlineIndex)) {
      firstMatch = displayMatch
      firstIndex = displayIndex
      isDisplay = true
    } else if (inlineIndex >= 0) {
      firstMatch = inlineMatch
      firstIndex = inlineIndex
    }

    if (!firstMatch || firstIndex < 0) {
      parts.push({ type: 'text', content: remaining, display: false })
      break
    }
    if (firstIndex > 0) {
      parts.push({ type: 'text', content: remaining.slice(0, firstIndex), display: false })
    }
    parts.push({ type: 'latex', content: firstMatch[1], display: isDisplay })
    remaining = remaining.slice(firstIndex + firstMatch[0].length)
  }

  // Prose gets a literal dollar; KaTeX gets the `\$` command.
  return parts.map((p) => ({
    ...p,
    content: p.content.replace(PLACEHOLDER_RE, p.type === 'text' ? '$' : '\\$'),
  }))
}
