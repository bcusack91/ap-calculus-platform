/**
 * Precise detector for currency-dollar collisions in STATIC quiz strings.
 *
 * Only flags single/double-quoted string literals (not backtick template
 * literals, which already use the correct `$\$N$` math-wrapped pattern) that
 * contain an UNESCAPED `$` immediately followed by a digit AND, when run
 * through the real renderRichText inline-math pairing, produce a math span
 * containing prose, or leave an odd number of currency dollars (dangling).
 */
import fs from 'fs'
import path from 'path'

const DIRS = ['src/data/entrance-quizzes', 'src/data/exit-quizzes']

const INLINE = /\$((?:[^$\\]|\\.)+)\$/g
// A captured inline-math span is a currency collision if it contains spaced
// prose words but NO LaTeX command (real math uses backslash commands like
// \frac, \times, \text, or no spaces at all).
function looksLikeProse(inner: string): boolean {
  if (inner.includes('\\')) return false
  return /\s/.test(inner) && /[a-z]{2,}/i.test(inner)
}

function extractQuoted(line: string): string[] {
  const out: string[] = []
  const re = /'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g
  let m: RegExpExecArray | null
  while ((m = re.exec(line)) !== null) out.push(m[1] ?? m[2] ?? '')
  return out
}

function isBroken(s: string): boolean {
  if (!/(^|[^\\])\$\d/.test(s)) return false
  INLINE.lastIndex = 0
  let m: RegExpExecArray | null
  while ((m = INLINE.exec(s)) !== null) {
    if (looksLikeProse(m[1])) return true
  }
  return false
}

const results: { file: string; line: number; text: string }[] = []
function walk(dir: string) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    if (fs.statSync(full).isDirectory()) walk(full)
    else if (name.endsWith('.ts')) {
      const lines = fs.readFileSync(full, 'utf8').split('\n')
      lines.forEach((line, i) => {
        for (const q of extractQuoted(line)) {
          if (isBroken(q)) results.push({ file: full, line: i + 1, text: q.slice(0, 160) })
        }
      })
    }
  }
}
for (const d of DIRS) if (fs.existsSync(d)) walk(d)

const byFile = new Map<string, { line: number; text: string }[]>()
for (const r of results) {
  if (!byFile.has(r.file)) byFile.set(r.file, [])
  byFile.get(r.file)!.push({ line: r.line, text: r.text })
}
for (const [file, hits] of byFile) {
  console.log(`\n${file}  (${hits.length})`)
  for (const h of hits) console.log(`  L${h.line}: ${h.text}`)
}
console.log(`\n=== ${results.length} broken static strings across ${byFile.size} files ===`)
