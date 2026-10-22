/**
 * Typed-answer matching for interactive-lesson input boxes.
 *
 * Lessons key numeric answers in whatever form the author found natural:
 * `'5/3'`, `'0.125'`, `'pi/2'`, `'9/4 pi'`, `'sqrt(3)'`, `'ln2'`, `'1/(2e)'`.
 * Students type whatever form they found natural. A plain string compare (or
 * `Number('5/3')`, which is NaN) marked `1.667` wrong against a `5/3` key even
 * where the prompt said "(decimal or fraction)", so this module evaluates both
 * sides as CONSTANT expressions and compares the values:
 *
 *  - Two exact forms (fractions, integers, π/e/√/ln forms, or a terminating
 *    decimal that is exactly the key) match when they are the same number:
 *    `5/2` = `2.5` = `10/4`, `π/2` = `pi/2` = `\frac{\pi}{2}`, `√3/6` = `1/(2sqrt3)`.
 *  - Key written as a decimal (`'0.333'`, `'3.05'`, `'1.5708'`): the long-
 *    standing 0.5% relative tolerance (|key| < tiny: absolute 0.001) applies to
 *    whatever the student typed, fraction or decimal — `1/3` matches `0.333`.
 *  - Key written as an exact non-terminating form (`'1/3'`, `'5/3'`, `'pi/2'`)
 *    and the student typed a DECIMAL: accepted when the decimal is the value
 *    rounded or truncated at its last digit (|d − v| < one unit in that place)
 *    AND carries at least 3 significant figures (the AP "three decimal places"
 *    spirit without punishing 41.7 vs 41.667). So for 1/3: `0.333`, `0.3333`
 *    match; `0.3`, `0.33`, `0.34` do not. For 2/3: `0.667` and `0.666` match.
 *  - Keys that are not constant numeric expressions (`'increasing'`, `'x-2'`,
 *    `'[2, 8)'`, `'0, 3'`, `'e^x'`) keep exact (normalized) string matching.
 *
 * This is a numeric evaluator, not a CAS: no variables, no simplification.
 * Supported syntax: integers/decimals (with sci-notation `3.0e-5`), `+ - * / ^`
 * (also `× · ÷ −`), parentheses/braces, implicit multiplication (`2pi`,
 * `3pi/2`, `2sqrt3`, `(9/4)pi`; never after a division — `1/2e` and `9/4 pi`
 * are ambiguous, so they only match as exact strings), constants `pi π e`, functions `sqrt √ ln`,
 * LaTeX `\frac{a}{b}`, `\dfrac`, `\sqrt{…}`, `\pi`, `\cdot`, `\times`, `$…$`
 * wrappers, a mixed number `1 1/2`, and thousands commas `1,800`.
 */

// ---------------------------------------------------------------------------
// Legacy string normalization (kept identical so non-numeric keys behave as
// before): lowercase, no whitespace, −/–/— → '-', thousands commas dropped,
// letter-hyphen-letter joined ("upper-middle" = "upper middle"), Unicode
// superscript digits flattened.
// ---------------------------------------------------------------------------

const SUPERSCRIPT_DIGITS: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
}

export function normalizeSuperscripts(text: string): string {
  return text.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (ch) => SUPERSCRIPT_DIGITS[ch] || ch)
}

function normalizeForString(s: string): string {
  return normalizeSuperscripts(s)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[−–—]/g, '-')
    .replace(/(\d),(?=\d{3}(?!\d))/g, '$1')
    .replace(/([a-z])-(?=[a-z])/g, '$1')
    .replace(/∞/g, 'infinity')
}

// ---------------------------------------------------------------------------
// Constant-expression evaluator
// ---------------------------------------------------------------------------

/** A parsed numeric answer: its value, plus the precision facts when it was one plain number literal. */
export interface NumericAnswer {
  value: number
  /** The input was one plain number literal (`2.5`, `-0.333`, `3.0e-5`, `12`). */
  isLiteral: boolean
  /** The literal contained a decimal point or exponent (so `12` is not a decimal, `12.0` is). */
  isDecimal: boolean
  /** Significant figures of the literal (0 when not a literal). */
  sigFigs: number
  /** One unit in the literal's last place (`0.333` → 0.001); 0 when not a literal. */
  ulp: number
}

type Token =
  | { t: 'num'; v: number; raw: string }
  | { t: 'const'; v: number }
  | { t: 'fn'; f: (x: number) => number }
  | { t: 'op'; v: '+' | '-' | '*' | '/' | '^' }
  | { t: 'lp' }
  | { t: 'rp' }
  | { t: 'sp' }

/** LaTeX / Unicode spellings → the plain grammar below. */
function preprocessLatex(input: string): string {
  let s = input.trim()
  // Whole-answer math wrapper: $…$, $$…$$, \(…\)
  s = s.replace(/^\$\$([\s\S]*)\$\$$/, '$1').replace(/^\$([\s\S]*)\$$/, '$1').replace(/^\\\(([\s\S]*)\\\)$/, '$1')
  s = s.replace(/\\left|\\right/g, '')
  s = s.replace(/\\[dt]?frac/g, '\\frac')
  // \frac{a}{b} → ((a)/(b)), innermost first.
  for (let guard = 0; guard < 20 && /\\frac\s*\{/.test(s); guard++) {
    const next = s.replace(/\\frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, '(($1)/($2))')
    if (next === s) break
    s = next
  }
  s = s
    .replace(/\\sqrt/g, 'sqrt')
    .replace(/\\ln/g, 'ln')
    .replace(/\\pi/g, 'pi')
    .replace(/\\cdot|\\times/g, '*')
    .replace(/\\div/g, '/')
    .replace(/\\[,;:! ]/g, ' ')
    .replace(/[{]/g, '(')
    .replace(/[}]/g, ')')
  return s
}

const CONSTS: Record<string, number> = { pi: Math.PI, π: Math.PI, e: Math.E }
const FNS: Record<string, (x: number) => number> = { sqrt: Math.sqrt, '√': Math.sqrt, ln: Math.log }

function tokenize(src: string): Token[] | null {
  const tokens: Token[] = []
  let i = 0
  while (i < src.length) {
    const ch = src[i]
    if (/\s/.test(ch)) {
      // Whitespace matters only between two numbers ("1 000" is not a number).
      if (tokens.length && tokens[tokens.length - 1].t !== 'sp') tokens.push({ t: 'sp' })
      i++
      continue
    }
    const numMatch = /^(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+(?![\d.]))?/.exec(src.slice(i))
    if (numMatch) {
      const raw = numMatch[0]
      tokens.push({ t: 'num', v: Number(raw), raw })
      i += raw.length
      continue
    }
    const word = /^(?:sqrt|ln|pi|π|√|e)/.exec(src.slice(i))
    if (word) {
      const w = word[0]
      if (w in FNS) tokens.push({ t: 'fn', f: FNS[w] })
      else tokens.push({ t: 'const', v: CONSTS[w] })
      i += w.length
      continue
    }
    if ('+-*/^'.includes(ch)) {
      tokens.push({ t: 'op', v: ch as '+' | '-' | '*' | '/' | '^' })
      i++
      continue
    }
    if (ch === '×' || ch === '·') { tokens.push({ t: 'op', v: '*' }); i++; continue }
    if (ch === '÷') { tokens.push({ t: 'op', v: '/' }); i++; continue }
    if (ch === '(' || ch === '[') { tokens.push({ t: 'lp' }); i++; continue }
    if (ch === ')' || ch === ']') { tokens.push({ t: 'rp' }); i++; continue }
    return null // any other character (a variable, a comma, a word) → not a constant expression
  }
  return tokens
}

/** Recursive-descent evaluation. Returns null on any syntax problem. */
function evaluate(tokens: Token[]): number | null {
  let pos = 0
  const peek = (): Token | undefined => {
    while (tokens[pos]?.t === 'sp') pos++
    return tokens[pos]
  }
  const startsAtom = (tok: Token | undefined): boolean =>
    !!tok && (tok.t === 'num' || tok.t === 'const' || tok.t === 'fn' || tok.t === 'lp')

  function parseExpr(): number | null {
    let left = parseTerm()
    if (left === null) return null
    for (;;) {
      const tok = peek()
      if (tok?.t === 'op' && (tok.v === '+' || tok.v === '-')) {
        pos++
        const right = parseTerm()
        if (right === null) return null
        left = tok.v === '+' ? left + right : left - right
      } else return left
    }
  }

  function parseTerm(): number | null {
    let left = parseUnary()
    if (left === null) return null
    let divided = false
    for (;;) {
      const tok = peek()
      if (tok?.t === 'op' && (tok.v === '*' || tok.v === '/')) {
        pos++
        const right = parseUnary()
        if (right === null) return null
        left = tok.v === '*' ? left * right : left / right
        if (tok.v === '/') divided = true
      } else if (startsAtom(tok)) {
        // Implicit multiplication (2pi, 3pi/2, 2sqrt3, 3(4)). After a division
        // it is ambiguous — "1/2e" is written for 1/(2e), "9/4 pi" for (9/4)π —
        // so such an answer is not evaluated (it can still match as a string).
        if (divided) return null
        // Never two bare numbers in a row ("1 000", "2 3"): not an expression.
        const prev = tokens[pos - 1]
        if (tok!.t === 'num' && (prev?.t === 'num' || (prev?.t === 'sp' && tokens[pos - 2]?.t === 'num'))) return null
        const right = parseUnary()
        if (right === null) return null
        left = left * right
      } else return left
    }
  }

  function parseUnary(): number | null {
    const tok = peek()
    if (tok?.t === 'op' && (tok.v === '-' || tok.v === '+')) {
      pos++
      const v = parseUnary()
      return v === null ? null : tok.v === '-' ? -v : v
    }
    return parsePower()
  }

  function parsePower(): number | null {
    const base = parseAtom()
    if (base === null) return null
    const tok = peek()
    if (tok?.t === 'op' && tok.v === '^') {
      pos++
      const exp = parseUnary() // right-associative; allows e^-1
      if (exp === null) return null
      return Math.pow(base, exp)
    }
    return base
  }

  function parseAtom(): number | null {
    const tok = peek()
    if (!tok) return null
    if (tok.t === 'num' || tok.t === 'const') { pos++; return tok.v }
    if (tok.t === 'lp') {
      pos++
      const v = parseExpr()
      if (v === null || peek()?.t !== 'rp') return null
      pos++
      return v
    }
    if (tok.t === 'fn') {
      pos++
      // Function argument: a power-level atom, so √3/2 = (√3)/2 and sqrt3/6 = (√3)/6.
      const bare = peek()?.t !== 'lp'
      const arg = parsePower()
      if (arg === null) return null
      // "ln8/5" is written for ln(8/5) as often as for ln(8)/5: ambiguous, so
      // not evaluated (it can still match as an exact string).
      if (bare && tok.f === Math.log) {
        const next = peek()
        if (next?.t === 'op' && next.v === '/') return null
      }
      return tok.f(arg)
    }
    return null
  }

  const value = parseExpr()
  if (value === null || peek() !== undefined) return null
  return value
}

const PLAIN_LITERAL = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/

function literalPrecision(literal: string): { sigFigs: number; ulp: number; isDecimal: boolean } {
  const [mantissaRaw, expRaw] = literal.replace(/^[+-]/, '').split('e')
  const exp = expRaw ? Number(expRaw) : 0
  const [intPart, fracPart = ''] = mantissaRaw.split('.')
  const digits = (intPart + fracPart).replace(/^0+/, '')
  return {
    sigFigs: digits.length,
    ulp: Math.pow(10, exp - fracPart.length),
    isDecimal: mantissaRaw.includes('.') || !!expRaw,
  }
}

/**
 * Parse a typed or authored answer as a constant numeric expression.
 * Returns null when it is not one (words, variables, lists, intervals).
 */
export function parseNumericAnswer(raw: string): NumericAnswer | null {
  if (typeof raw !== 'string') return null
  let s = preprocessLatex(raw)
  s = s
    .replace(/[−–—]/g, '-')
    .replace(/(\d),(?=\d{3}(?!\d))/g, '$1')
    // Superscript digits are exponents here: e² = e^2, 10⁻³ is not supported.
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, (m) => '^' + normalizeSuperscripts(m))
    .trim()
    // Case-insensitive names, but only lowercase `e` is Euler's number — a
    // capital "E" key is a letter answer (or an exponent: 3E5, handled as a number).
    .replace(/sqrt|ln|pi/gi, (m) => m.toLowerCase())
  if (!s) return null
  const compact = s.replace(/\s+/g, '')
  if (PLAIN_LITERAL.test(compact.toLowerCase())) {
    const p = literalPrecision(compact.toLowerCase())
    return { value: Number(compact), isLiteral: true, ...p }
  }
  // Mixed number "1 1/2" / "-2 3/4" (whitespace-separated, nothing else).
  const mixed = /^([+-]?)(\d+)\s+(\d+)\s*\/\s*(\d+)$/.exec(s)
  if (mixed) {
    const den = Number(mixed[4])
    if (den === 0) return null
    const v = Number(mixed[2]) + Number(mixed[3]) / den
    return { value: mixed[1] === '-' ? -v : v, isLiteral: false, isDecimal: false, sigFigs: 0, ulp: 0 }
  }
  const tokens = tokenize(s)
  if (!tokens) return null
  const value = evaluate(tokens)
  if (value === null || !Number.isFinite(value)) return null
  return { value, isLiteral: false, isDecimal: false, sigFigs: 0, ulp: 0 }
}

/** Values equal up to floating-point noise (the "same exact number" test). */
function sameNumber(a: number, b: number): boolean {
  return Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b))
}

/** Minimum significant figures a decimal must carry to stand in for an exact non-terminating key. */
export const MIN_DECIMAL_SIG_FIGS = 3

/**
 * Does a student's typed answer match one authored key?
 * See the module comment for the rules; non-numeric keys compare as normalized strings.
 */
export function isAnswerMatch(studentAnswer: string, correctAnswer: string): boolean {
  if (!studentAnswer || !correctAnswer) return false
  const sa = normalizeForString(studentAnswer)
  const ca = normalizeForString(correctAnswer)

  // Exact string match
  if (sa === ca) return true
  if (sa === '' || ca === '') return false

  // "1914-1918", "26-28", "68-95-99.7": a range or sequence key, not a
  // subtraction (it would otherwise evaluate to a number and accept that).
  if (/^\d+(?:\.\d+)?(?:\s*[-−–—]\s*\d+(?:\.\d+)?)+$/.test(correctAnswer.trim())) return false
  const key = parseNumericAnswer(correctAnswer)
  if (!key) return false
  const student = parseNumericAnswer(studentAnswer)
  if (!student) return false

  // Same exact number, whatever the spelling: 5/2 = 2.5 = 10/4, π/2 = pi/2.
  if (sameNumber(student.value, key.value)) return true

  if (key.isLiteral) {
    // Decimal or integer key: the long-standing sig-fig tolerance, now for any
    // student form (a fraction or π-form evaluates to its value first).
    if (key.value === 0) return Math.abs(student.value) < 0.001
    return Math.abs(student.value - key.value) / Math.abs(key.value) < 0.005
  }

  // Exact non-terminating key (1/3, 5/3, pi/2, sqrt(3)): a decimal stands in
  // when it is the value rounded or truncated at its last digit and carries
  // enough significant figures. Another exact form must be the same number
  // (already checked above).
  if (student.isLiteral && student.isDecimal) {
    if (student.sigFigs < MIN_DECIMAL_SIG_FIGS) return false
    return Math.abs(student.value - key.value) < student.ulp * (1 + 1e-9)
  }
  return false
}
