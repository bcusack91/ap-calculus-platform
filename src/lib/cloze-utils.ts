/**
 * Utility to detect and render cloze deletion flashcards
 *
 * Cloze format: "Fill in the blank: Light travels in {{c1::straight lines}}"
 * Renders as: "Fill in the blank: Light travels in [........]" initially
 * Then reveals: "Fill in the blank: Light travels in straight lines" (in color)
 */

export interface ClozePart {
  text: string
  isCloze: boolean
  /**
   * Reveal group of a deletion: the `N` in `{{cN::…}}`. Deletions that share
   * an index reveal together (Anki semantics); a bare `{{answer}}` takes its
   * 1-based position among the card's deletions. Absent on prose parts.
   */
  clozeIndex?: number
}

export interface ClozeData {
  isCloze: boolean
  parts?: ClozePart[]
}

/**
 * One deletion. Group 1 = the optional `cN` index, group 2 = the content.
 *
 * The content allows ONE level of nested braces so LaTeX survives inside a
 * deletion: `{{c1::10^{-19}}}` and `{{c1::\frac{1}{2}CV^2}}` both parse. The
 * original `[^}]+` capture could not contain a brace at all, which either
 * dropped the card back to a plain flip card or — worse — mis-terminated and
 * leaked a stray `}` into the rendered KaTeX (two authoring passes hit this).
 */
const CLOZE_RE = /\{\{(?:c(\d+)::)?((?:[^{}]|\{[^{}]*\})+)\}\}/g

/**
 * Detect if text contains cloze deletions
 * Supports formats:
 * - {{c1::answer}}
 * - {{answer}}
 * - _______ _______ (blank spaces)
 */
export function detectCloze(text: string): ClozeData {
  // matchAll clones the regex, so the module-level /g instance never carries
  // lastIndex state between calls.
  const matches = [...text.matchAll(CLOZE_RE)]
  const hasClozeMarkers = matches.length > 0

  // Check for "Fill in the blank" with underscores
  const hasBlankFormat = text.includes('Fill in the blank') && text.includes('_______')

  if (!hasClozeMarkers && !hasBlankFormat) {
    return { isCloze: false }
  }

  // Parse cloze deletions
  const parts: ClozePart[] = []

  if (hasClozeMarkers) {
    let lastIndex = 0

    matches.forEach((match, ordinal) => {
      const start = match.index ?? 0
      // Add text before the cloze
      if (start > lastIndex) {
        parts.push({ text: text.substring(lastIndex, start), isCloze: false })
      }
      // Add the cloze deletion
      parts.push({
        text: match[2],
        isCloze: true,
        clozeIndex: match[1] !== undefined ? Number(match[1]) : ordinal + 1,
      })
      lastIndex = start + match[0].length
    })

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({ text: text.substring(lastIndex), isCloze: false })
    }
  } else if (hasBlankFormat) {
    // Handle "Fill in the blank: text _______ _______" format
    // Look in the back text for the answer
    parts.push({ text, isCloze: false })
  }

  return { isCloze: true, parts }
}

/**
 * Reveal order for a cloze card: the distinct deletion indexes, ascending.
 * `{{c2::…}} … {{c1::…}}` reveals c1 first; `{{c1::a}} … {{c1::b}}` is a
 * single step. Empty for non-cloze text and the underscore "Fill in the
 * blank" form, which has no parsed deletions.
 */
export function clozeRevealOrder(parts: ReadonlyArray<ClozePart> | undefined): number[] {
  const indexes = new Set<number>()
  for (const part of parts ?? []) {
    if (part.isCloze && part.clozeIndex !== undefined) indexes.add(part.clozeIndex)
  }
  return [...indexes].sort((a, b) => a - b)
}

/**
 * A deletion's content may be bare LaTeX with no `$` delimiters
 * (`{{c1::\rho L/A}}`, `{{c1::V_{peak}/\sqrt{2}}}`) — wrap those so the math
 * pipeline renders them. `$`-delimited and plain-prose deletions pass through.
 */
export function mathizeClozeAnswer(answer: string): string {
  if (answer.includes('$')) return answer
  if (/\\[a-zA-Z]+|[_^]\{/.test(answer)) return `$${answer}$`
  return answer
}

/**
 * Replace every deletion with a neutral blank for question-side display in
 * string/HTML pipelines (renderRichText). Constant-width so it doesn't
 * telegraph the answer's length. No-op on non-cloze text.
 */
export function maskClozeText(text: string, blank = '______'): string {
  return text.replace(CLOZE_RE, blank)
}

/**
 * Strip cloze markers, leaving the completed sentence, for answer-side display
 * in string/HTML pipelines (renderRichText). `highlightHtml` wraps each
 * revealed answer in <strong> — only for surfaces that render the result as
 * HTML. No-op on non-cloze text.
 */
export function revealClozeText(text: string, highlightHtml = false): string {
  return text.replace(CLOZE_RE, (_m, _index: string | undefined, inner: string) =>
    highlightHtml ? `<strong>${mathizeClozeAnswer(inner)}</strong>` : mathizeClozeAnswer(inner)
  )
}

/**
 * Extract answer from cloze card's back text
 * For "Fill in the blank" style cards, the answer is usually the first 1-3 words
 */
export function extractClozeAnswer(backText: string): string {
  // If back text starts with the answer, extract it
  const match = backText.match(/^([^.!?,]+)/)
  return match ? match[1].trim() : backText.split('.')[0].trim()
}
