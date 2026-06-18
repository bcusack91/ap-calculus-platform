/**
 * Convert a LaTeX-ish string into a readable plain-text / unicode approximation.
 *
 * This exists for ONE narrow purpose: native HTML `<option>` elements (used by
 * dropdown-select exercises) can only display plain text — KaTeX cannot render
 * inside a `<select>`. So an option authored as `$\sin(u)$` would otherwise show
 * the literal characters `$\sin(u)$`. We convert it to "sin(u)" for DISPLAY only;
 * the raw option string is still used as the value for answer matching, so this
 * never affects grading.
 *
 * It is intentionally conservative: it handles the common cases that appear in
 * dropdown options (functions, Greek letters, fractions, powers, operators) and
 * degrades gracefully to readable text for anything else.
 */

const SUPERSCRIPT_DIGITS: Record<string, string> = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
}
const SUBSCRIPT_DIGITS: Record<string, string> = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
}

const SYMBOLS: ReadonlyArray<readonly [RegExp, string]> = [
  // multi-letter functions/operators first
  [/\\(arcsin|arccos|arctan|sinh|cosh|tanh|sin|cos|tan|sec|csc|cot|log|ln|exp|lim|min|max|deg)\b/g, '$1'],
  // greek + symbols
  [/\\pi\b/g, 'π'], [/\\theta\b/g, 'θ'], [/\\alpha\b/g, 'α'], [/\\beta\b/g, 'β'],
  [/\\gamma\b/g, 'γ'], [/\\lambda\b/g, 'λ'], [/\\mu\b/g, 'μ'], [/\\Delta\b/g, 'Δ'],
  [/\\delta\b/g, 'δ'], [/\\phi\b/g, 'φ'], [/\\omega\b/g, 'ω'], [/\\sigma\b/g, 'σ'],
  [/\\infty\b/g, '∞'],
  [/\\cdot\b/g, '·'], [/\\times\b/g, '×'], [/\\div\b/g, '÷'],
  [/\\pm\b/g, '±'], [/\\mp\b/g, '∓'],
  [/\\leq\b/g, '≤'], [/\\geq\b/g, '≥'], [/\\neq\b/g, '≠'], [/\\approx\b/g, '≈'],
  [/\\Rightarrow\b/g, '⇒'], [/\\Leftarrow\b/g, '⇐'], [/\\rightarrow\b/g, '→'], [/\\leftarrow\b/g, '←'], [/\\to\b/g, '→'],
  // spacing + no-ops
  [/\\left\b/g, ''], [/\\right\b/g, ''], [/\\!|\\,|\\;|\\:|\\quad|\\qquad/g, ' '], [/\\ /g, ' '],
]

function toSuperscript(t: string): string {
  return [...t].every((c) => SUPERSCRIPT_DIGITS[c]) ? [...t].map((c) => SUPERSCRIPT_DIGITS[c]).join('') : `^(${t})`
}
function toSubscript(t: string): string {
  return [...t].every((c) => SUBSCRIPT_DIGITS[c]) ? [...t].map((c) => SUBSCRIPT_DIGITS[c]).join('') : `_${t}`
}

export function latexToPlain(input: string): string {
  if (!input || (typeof input !== 'string')) return input
  // If there's no LaTeX-ish content at all, return as-is (fast path; many
  // dropdown options are already plain like "increases" or "2 times").
  if (!input.includes('$') && !input.includes('\\') && !input.includes('^') && !input.includes('_')) return input

  let s = input
  // Strip math delimiters: $$...$$, $...$, \(...\), \[...\]
  s = s.replace(/\${1,2}/g, '').replace(/\\\(|\\\)|\\\[|\\\]/g, '')
  // \frac{a}{b} / \dfrac{a}{b} / \tfrac -> a/b (parenthesize non-trivial parts)
  s = s.replace(/\\[dt]?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, (_m, a: string, b: string) => {
    const wrap = (t: string) => (/^-?[\w.]+$/.test(t) && !/[+\-*/]./.test(t.slice(1)) ? t : `(${t})`)
    return `${wrap(a)}/${wrap(b)}`
  })
  // \sqrt{x} -> √(x) ; \sqrt x -> √x
  s = s.replace(/\\sqrt\s*\{([^{}]*)\}/g, '√($1)').replace(/\\sqrt\s+/g, '√')
  // \text{...}, \mathrm{...}, \boxed{...}, \operatorname{...} -> inner text
  s = s.replace(/\\(?:text|textbf|textit|mathrm|mathbf|operatorname|boxed|hbox|mbox)\s*\{([^{}]*)\}/g, '$1')
  // named symbols/functions
  for (const [re, rep] of SYMBOLS) s = s.replace(re, rep)
  // superscripts: ^{...} then ^<single>
  s = s.replace(/\^\{([^{}]*)\}/g, (_m, t: string) => toSuperscript(t))
       .replace(/\^(\d)/g, (_m, d: string) => SUPERSCRIPT_DIGITS[d])
       .replace(/\^(\w)/g, (_m, c: string) => `^${c}`)
  // subscripts: _{...} then _<single>
  s = s.replace(/_\{([^{}]*)\}/g, (_m, t: string) => toSubscript(t))
       .replace(/_(\d)/g, (_m, d: string) => SUBSCRIPT_DIGITS[d])
       .replace(/_(\w)/g, (_m, c: string) => `_${c}`)
  // drop any remaining \command tokens and stray braces
  s = s.replace(/\\[a-zA-Z]+\b/g, '').replace(/[{}]/g, '')
  // tidy whitespace
  return s.replace(/\s+/g, ' ').trim()
}
