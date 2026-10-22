/**
 * table-math-pipes
 *
 * GFM splits a pipe-table row into cells on every unescaped `|` BEFORE inline
 * parsing, so remark-math never sees a `$…$` span that contains one: the row
 * `| $|x|$ | 2 |` becomes the cells `$`, `x`, `$` (and the extra cells beyond
 * the header's column count are dropped). Absolute values, `\sum |a_n|`,
 * `\ln|x| + C` and `P(A|B)` in lesson tables all broke this way — 220+ rows
 * across every course.
 *
 * This pre-pass rewrites a bare `|` inside a math span on a table row to
 * `\vert`, which KaTeX typesets identically, so the row splits on its real
 * cell boundaries only. It is deliberately conservative:
 *
 *  - only rows of a real table (a row followed by / following a delimiter row
 *    such as `| --- | --- |`), never prose, never fenced code;
 *  - only rows that are actually broken — more cells than the delimiter row
 *    declares — and only when the rewrite brings the row back to (at most)
 *    that count, so currency rows like `| $5 | $10 |` are never re-paired;
 *  - `\|` (an escaped pipe in GFM; KaTeX's double bar ‖) and `\lvert…\rvert`
 *    are left exactly as written.
 *
 * Pure string → string; safe on any markdown. Used by the lesson markdown
 * surfaces (FadeInText, the SEO lesson view) and by renderRichText.
 */

const DELIMITER_ROW = /^\s*\|?\s*:?-+:?\s*(?:\|\s*:?-+:?\s*)*\|?\s*$/

/** True when the character at `i` is preceded by an odd number of backslashes. */
function isEscaped(s: string, i: number): boolean {
  let n = 0
  for (let j = i - 1; j >= 0 && s[j] === '\\'; j--) n++
  return n % 2 === 1
}

/** GFM cell count of a table row: split on unescaped pipes, ignoring one leading and one trailing pipe. */
export function countTableCells(row: string): number {
  let t = row.trim()
  if (t.startsWith('|')) t = t.slice(1)
  if (t.endsWith('|') && !isEscaped(t, t.length - 1)) t = t.slice(0, -1)
  let cells = 1
  for (let i = 0; i < t.length; i++) if (t[i] === '|' && !isEscaped(t, i)) cells++
  return cells
}

/**
 * Rewrites bare `|` inside `$…$` / `$$…$$` spans of one line to `\vert`.
 * Spans pair the way remark-math pairs them: an unescaped run of dollars
 * closes at the next unescaped run of the same length on the line.
 */
function rewriteMathPipes(line: string): string {
  let out = ''
  let i = 0
  while (i < line.length) {
    if (line[i] !== '$' || isEscaped(line, i)) {
      out += line[i++]
      continue
    }
    let j = i
    while (j < line.length && line[j] === '$') j++
    const fence = line.slice(i, j)
    // Find the closing run of exactly the same length.
    let close = -1
    for (let k = j; k < line.length; k++) {
      if (line[k] !== '$' || isEscaped(line, k)) continue
      let e = k
      while (e < line.length && line[e] === '$') e++
      if (e - k === fence.length) { close = k; break }
      k = e - 1
    }
    if (close < 0) {
      out += fence
      i = j
      continue
    }
    const inner = line.slice(j, close)
    let rewritten = ''
    for (let k = 0; k < inner.length; k++) {
      if (inner[k] === '|' && !isEscaped(inner, k)) {
        rewritten += /[A-Za-z]/.test(inner[k + 1] ?? '') ? '\\vert ' : '\\vert'
      } else {
        rewritten += inner[k]
      }
    }
    out += fence + rewritten + fence
    i = close + fence.length
  }
  return out
}

function protectRow(row: string, columns: number, exact: boolean): string {
  if (!row.includes('$') || countTableCells(row) <= columns) return row
  const fixed = rewriteMathPipes(row)
  if (fixed === row) return row
  const n = countTableCells(fixed)
  return (exact ? n === columns : n <= columns) ? fixed : row
}

function protectBlock(text: string): string {
  const lines = text.split('\n')
  for (let i = 0; i + 1 < lines.length; i++) {
    const delimiter = lines[i + 1]
    if (!lines[i].includes('|') || !delimiter.includes('|') || !DELIMITER_ROW.test(delimiter)) continue
    const columns = countTableCells(delimiter)
    // The header must match the delimiter exactly, or GFM does not see a table.
    lines[i] = protectRow(lines[i], columns, true)
    let r = i + 2
    while (r < lines.length && lines[r].trim() !== '' && lines[r].includes('|')) {
      lines[r] = protectRow(lines[r], columns, false)
      r++
    }
    i = r - 1
  }
  return lines.join('\n')
}

/** Protects `|` inside math spans on markdown table rows (see module comment). */
export function protectTableMathPipes(md: string): string {
  if (!md || !md.includes('|') || !md.includes('$')) return md
  return md
    .split(/(```[\s\S]*?```)/)
    .map((seg) => (seg.startsWith('```') ? seg : protectBlock(seg)))
    .join('')
}
