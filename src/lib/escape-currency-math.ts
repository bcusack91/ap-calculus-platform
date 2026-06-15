/**
 * escape-currency-math
 *
 * remark-math (used by the interactive-lesson renderers via ReactMarkdown)
 * treats every unescaped `$` as an inline-math delimiter. When prose contains
 * two currency amounts on the same line — e.g. "You pay $5 to play and win $10" —
 * the two dollar signs pair up and remark-math swallows the text between them
 * ("5 to play and win ") as a math span, mangling the sentence.
 *
 * This helper finds ONLY those currency-prose collisions and escapes the
 * offending `$` delimiters to `\$` (a CommonMark character escape, which
 * renders as a literal dollar sign). It is deliberately conservative: a span
 * is treated as currency-prose only when it starts with a digit, contains
 * whitespace, and — after stripping LaTeX commands/`\text{}` — contains an
 * unambiguous English money/prose word. Real math (`$x^2$`, `$d = rt$`,
 * `$2 \times 3$`, unit spans like `$3 cm$`), display math (`$$...$$`), and
 * code spans are never touched.
 */

// Unambiguous prose words that signal a dollar amount is followed by sentence
// text rather than math. Deliberately excludes math-overlapping words such as
// "times", "plus", "minus", "total", "a", "in", "of", "on".
const STOP_WORDS = new Set([
  'to', 'per', 'and', 'for', 'the', 'with', 'from', 'last', 'year', 'years',
  'week', 'weeks', 'day', 'days', 'each', 'more', 'than', 'price', 'prices',
  'worth', 'spent', 'spend', 'spends', 'paid', 'pay', 'pays', 'buy', 'buys',
  'sells', 'sold', 'bought', 'rose', 'fell', 'hour', 'hours', 'month', 'months',
  'dollars', 'about', 'over', 'costs', 'saves', 'earned', 'earns', 'earn',
  'money', 'profit', 'revenue', 'wage', 'wages', 'salary', 'rent', 'tax',
  'taxes', 'income', 'budget', 'discount', 'sale', 'charged', 'charge',
  'interest', 'deposit', 'play', 'win', 'wins', 'claims', 'ticket', 'tickets',
  // Added after an adversarial false-negative sweep found ~33 real garbling lines
  // whose between-amount word was missing. All unambiguous money/prose words that
  // cannot stand as a variable/unit inside inline math (and `\text{cost}` etc. are
  // stripped before tokenizing, so common words like 'cost'/'total' stay safe).
  'fee', 'fees', 'total', 'cost', 'setup', 'subtotal', 'membership', 'spending',
  'increase', 'increased', 'bill', 'bills', 'item', 'items', 'withdraw', 'refund',
  'rebate', 'coupon', 'subscription', 'apiece', 'cheaper', 'extra', 'remaining', 'saved',
])

function stripLatex(s: string): string {
  return s
    .replace(/\\+text\s*\{[^}]*\}/g, ' ') // \text{ ... }
    .replace(/\\+[a-zA-Z]+/g, ' ') // \command (one or more backslashes)
    // Strip sub/superscript labels so a subscripted variable like `x_{day}` or
    // `E_{each}` never leaks "day"/"each" in as a prose word (would wrongly flag
    // genuine math as currency). Adversarially verified: fixes the subscript-label
    // false-positive class with zero currency regressions.
    .replace(/[_^]\s*\{[^}]*\}/g, ' ') // _{...} / ^{...} groups
    .replace(/[_^]\s*[A-Za-z0-9]+/g, ' ') // _x / ^2 / _day single-token sub/superscripts
    .replace(/[{}]/g, ' ') // stray braces
}

function isCurrencyProse(inner: string): boolean {
  if (!/^\s*\d/.test(inner)) return false // must start with a dollar amount
  if (!/\s/.test(inner)) return false // prose has whitespace; "$2x$" does not
  const tokens = stripLatex(inner).toLowerCase().match(/[a-z]{2,}/g) || []
  return tokens.some((t) => STOP_WORDS.has(t))
}

interface Dollar {
  pos: number
  escaped: boolean
}

function escapeLine(line: string): string {
  if (line.indexOf('$') === -1) return line

  // Mask inline-code regions so `$` inside backticks is ignored.
  const masked = new Array<boolean>(line.length).fill(false)
  const codeRe = /`[^`]*`/g
  let cm: RegExpExecArray | null
  while ((cm = codeRe.exec(line)) !== null) {
    for (let i = cm.index; i < cm.index + cm[0].length; i++) masked[i] = true
  }

  // Collect single-`$` delimiters outside code. Runs of `$$` (display math)
  // are skipped entirely.
  const dollars: Dollar[] = []
  let i = 0
  while (i < line.length) {
    if (line[i] === '$' && !masked[i]) {
      let j = i
      while (j < line.length && line[j] === '$') j++
      if (j - i === 1) {
        dollars.push({ pos: i, escaped: i > 0 && line[i - 1] === '\\' })
      }
      i = j
    } else {
      i++
    }
  }

  // Pair consecutive unescaped delimiters the way remark-math would, and mark
  // the delimiters of any currency-prose span for escaping.
  const open = dollars.filter((d) => !d.escaped)
  const toEscape = new Set<number>()
  for (let k = 0; k + 1 < open.length; k += 2) {
    const a = open[k]
    const b = open[k + 1]
    if (isCurrencyProse(line.slice(a.pos + 1, b.pos))) {
      toEscape.add(a.pos)
      toEscape.add(b.pos)
    }
  }

  if (toEscape.size === 0) return line

  let out = ''
  for (let p = 0; p < line.length; p++) {
    if (toEscape.has(p)) out += '\\'
    out += line[p]
  }
  return out
}

/**
 * Escapes currency dollar signs that would otherwise collide as remark-math
 * inline-math delimiters. Returns the input unchanged when there is nothing to
 * fix. Safe to call on any markdown string.
 */
export function escapeCurrencyMath(md: string): string {
  if (!md || md.indexOf('$') === -1) return md
  return md
    .split(/(```[\s\S]*?```)/) // leave fenced code blocks untouched
    .map((seg) =>
      seg.startsWith('```')
        ? seg
        : seg.split('\n').map(escapeLine).join('\n'),
    )
    .join('')
}
