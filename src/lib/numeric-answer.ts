/**
 * Free-entry numeric answers for video-lesson worked examples. Client-safe
 * and pure: the page uses it to show what it read, the answer route to grade.
 *
 * Accepts what a student actually types: "0.016", "1.6e-2", "1.6 x 10^-2",
 * "1.6×10⁻²", "12,500", "12 500 ions", "1.0 * 10^17". Trailing units are
 * ignored. Anything that doesn't start with a number is null.
 */

const SUPERSCRIPTS: Record<string, string> = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-', '⁺': '+' }

export const DEFAULT_TOLERANCE = 0.05

function normalize(input: string): string {
  let s = input.trim()
  // "10¹⁶" → "10^16"; superscript signs become ordinary signs.
  s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺]+/g, (run) => '^' + [...run].map((c) => SUPERSCRIPTS[c] ?? c).join(''))
  s = s.replace(/[−–]/g, '-')
  s = s.replace(/,/g, '')
  return s.toLowerCase()
}

/** The number a student's answer starts with, or null. */
export function parseNumericAnswer(input: string): number | null {
  if (typeof input !== 'string') return null
  const s = normalize(input)
  // mantissa × 10^exp  (×, x, *, ·, or a bare e)
  const sci = s.match(/^([+-]?(?:\d+\.?\d*|\.\d+))\s*(?:[x×*·]\s*10\s*\^?\s*|e)\s*([+-]?\d+)/)
  if (sci) {
    const v = Number(sci[1]) * 10 ** Number(sci[2])
    return Number.isFinite(v) ? v : null
  }
  // 10^exp on its own
  const pow = s.match(/^([+-]?)10\s*\^\s*([+-]?\d+)/)
  if (pow) {
    const v = (pow[1] === '-' ? -1 : 1) * 10 ** Number(pow[2])
    return Number.isFinite(v) ? v : null
  }
  // plain number, with digit groups separated by spaces ("12 500")
  const plain = s.match(/^([+-]?(?:\d{1,3}(?: \d{3})+|\d+\.?\d*|\.\d+))/)
  if (plain) {
    const v = Number(plain[1].replace(/ /g, ''))
    return Number.isFinite(v) ? v : null
  }
  return null
}

/** True when `value` is within the relative tolerance of `answer` (absolute near zero). */
export function numericMatches(value: number, answer: number, tolerance = DEFAULT_TOLERANCE): boolean {
  if (!Number.isFinite(value) || !Number.isFinite(answer)) return false
  const scale = Math.abs(answer)
  const allowed = scale > 0 ? scale * tolerance : 1e-9
  return Math.abs(value - answer) <= allowed + 1e-12 * scale
}

/** Grade a typed answer against the key. */
export function gradeNumeric(input: string, answer: number, tolerance?: number): { value: number | null; correct: boolean } {
  const value = parseNumericAnswer(input)
  return { value, correct: value !== null && numericMatches(value, answer, tolerance) }
}
