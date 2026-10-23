/**
 * Keyword auto-grader shared by the AP FRQ practice pages (src/app/ap-*-frq/page.tsx).
 *
 * A rubric line is earned when at least `minMatches` (default 1) distinct keywords appear
 * in the response and every `requiresAll` group is also met (AND across groups, any-of
 * within a group). Lines without `minMatches` or `requiresAll` keep plain any-of matching.
 *
 * Each keyword is tried twice: against the lowercased response exactly as before, and in
 * normalized form against the normalized response (markdown emphasis and LaTeX `$`
 * stripped; minus signs, times signs, spaces, quotes, and primes unified). The first test
 * keeps every match the grader made before normalization existed; the second only adds
 * matches, e.g. "**−1**" now earns a "-1" keyword.
 */

export interface FrqKeywordGroup {
  keywords: string[]
  /** Distinct keywords that must appear (default 1). */
  minMatches?: number
}

export interface FrqKeywordLine extends FrqKeywordGroup {
  points: number
  /** Further keyword groups that must ALL be met as well ("both components needed"). */
  requiresAll?: FrqKeywordGroup[]
}

export interface PreparedResponse {
  /** Lowercased, whitespace collapsed: the grader's original view of the text. */
  raw: string
  /** `raw` after normalizeFrqText. */
  norm: string
}

const DASHES = /[\u2010\u2011\u2012\u2013\u2014\u2015\u2212\uFE58\uFE63\uFF0D]/g
const TIMES = /[\u00D7\u22C5\u2219\u2715]|\\cdot(?![a-z])|\\times(?![a-z])/g
// A `*` between two operands, written tight ("2*x") or spaced on both sides ("2 * x").
const STAR_TIMES = /([a-z0-9)\].}π])(\s?)\*\2(?=[a-z0-9(\[{\\π.-])/g

/**
 * Normalizes response or keyword text for matching. Input is expected lowercased with
 * whitespace collapsed; the result keeps leading and trailing spaces, because keywords that
 * start with a space or punctuation are matched as plain substrings.
 */
export function normalizeFrqText(text: string): string {
  return (
    text
      .replace(/[\u200B\u200C\u200D\u2060\uFEFF]/g, '')
      .replace(/\s/g, ' ')
      .replace(DASHES, '-')
      .replace(/[\u2018\u2019\u201B\u2032\u02B9]/g, "'")
      .replace(/[\u201C\u201D\u201F\u2033]/g, '"')
      // Escaped currency stays a dollar sign; a `$` before a digit is currency unless it
      // closes math right after an operand ("$3$" keeps "$3").
      .replace(/\\\$/g, '\u0000')
      .replace(/(^|[^a-z0-9)}\]])\$(?=[0-9.])/g, '$1\u0000')
      .replace(/\$/g, ' ')
      .replace(/\u0000/g, '$')
      // Markdown bold, then times-asterisks, then any remaining emphasis asterisk.
      .replace(/\*\*/g, '')
      .replace(STAR_TIMES, '$1·')
      .replace(/\*/g, '')
      .replace(TIMES, '·')
      .replace(/ ?· ?/g, '·')
      .replace(/ +/g, ' ')
  )
}

export function prepareResponse(response: string, opts: { trailingSpace?: boolean } = {}): PreparedResponse {
  const raw = response.toLowerCase().replace(/\s+/g, ' ') + (opts.trailingSpace ? ' ' : '')
  return { raw, norm: normalizeFrqText(raw) }
}

/**
 * Word-start keyword match, so 'tea' does not match "instead" and 'war' does not match
 * "toward"; prefix stems ('legitim', 'industrializ') still match. A keyword that starts
 * with punctuation or a space (e.g. '%') is matched as a plain substring.
 */
export function keywordMatches(text: string, keyword: string): boolean {
  const kw = keyword.toLowerCase()
  if (!/^[a-z0-9]/.test(kw)) return text.includes(kw)
  const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  // A letter-initial keyword may follow a digit ("8mg/l" matches "mg/l"), but
  // never another letter, so "tea" does not score inside "instead".
  const before = /^[a-z]/.test(kw) ? '[^a-z]' : '[^a-z0-9]'
  return new RegExp('(^|' + before + ')' + escaped).test(text)
}

/** True when the keyword appears in the response as typed or after normalization. */
export function responseHasKeyword(response: PreparedResponse, keyword: string): boolean {
  if (keywordMatches(response.raw, keyword)) return true
  // A keyword may be a fragment that opens with a times sign ("* 0.35").
  const lower = keyword.toLowerCase().replace(/\s+/g, ' ').replace(/^\* ?(?=[a-z0-9(\[{\\π.-])/, '·')
  const kw = normalizeFrqText(lower)
  return kw.trim() !== '' && keywordMatches(response.norm, kw)
}

export function groupMet(response: PreparedResponse, group: FrqKeywordGroup): boolean {
  const hits = [...new Set(group.keywords)].filter((kw) => responseHasKeyword(response, kw)).length
  return hits >= (group.minMatches ?? 1)
}

export function lineEarned(response: PreparedResponse, line: FrqKeywordLine): boolean {
  return groupMet(response, line) && (line.requiresAll ?? []).every((g) => groupMet(response, g))
}

export function gradeKeywordRubric<T extends FrqKeywordLine>(
  response: string,
  rubric: T[]
): { pointsEarned: number; breakdown: { earned: boolean; item: T }[] } {
  const prepared = prepareResponse(response)
  const breakdown = rubric.map((item) => ({ earned: lineEarned(prepared, item), item }))
  return {
    pointsEarned: breakdown.filter((b) => b.earned).reduce((s, b) => s + b.item.points, 0),
    breakdown,
  }
}
