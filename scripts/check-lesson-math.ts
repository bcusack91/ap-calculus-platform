/**
 * Detect KaTeX delimiter bugs in interactive-lesson bundles.
 *
 * remark-math pairs every UNESCAPED `$` as inline-math delimiters, so prose
 * money ("tacos for $3.50 each and burritos for $6.00") silently becomes a
 * math span that swallows the sentence between the amounts. The convention in
 * this codebase (see src/data/exit-quizzes/sat-hard-tier.ts) is to write
 * currency as math-mode escaped dollars: `$\$3.50$`.
 *
 * GARBLE = a paired math span containing 3+ consecutive prose words.
 * DANGLE = an odd number of unescaped `$` (renders literally, but nearly
 *          always means a bare currency amount was intended).
 *   npx tsx scripts/check-lesson-math.ts <file-glob-prefix>
 */
import fs from 'fs'
import path from 'path'

const PROSE = /[a-zA-Z]{3,}\s+[a-zA-Z]{3,}\s+[a-zA-Z]{3,}/

/** Split a string the way remark-math does: on unescaped `$`, skipping `$$`. */
function splitOnDelimiters(s: string): { spans: string[]; dangling: boolean } {
  const positions: number[] = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '\\') { i++; continue }        // `\$` and other escapes
    if (s[i] === '$') {
      if (s[i + 1] === '$') { i++; continue }   // display math `$$...$$`
      positions.push(i)
    }
  }
  const spans: string[] = []
  for (let k = 0; k + 1 < positions.length; k += 2) {
    spans.push(s.slice(positions[k] + 1, positions[k + 1]))
  }
  return { spans, dangling: positions.length % 2 === 1 }
}

function stripLatex(s: string): string {
  return s.replace(/\\text\s*\{[^}]*\}/g, ' ').replace(/\\[a-zA-Z]+/g, ' ')
}

export function inspect(value: string): { garbled: string[]; dangling: boolean } {
  const { spans, dangling } = splitOnDelimiters(value)
  return { garbled: spans.filter((sp) => PROSE.test(stripLatex(sp))), dangling }
}

function main() {
  const prefix = process.argv[2] ?? 'sat-adv-'
  const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons')
  const files = fs.readdirSync(dir).filter((f) => f.startsWith(prefix) && f.endsWith('.ts')).sort()
  let garble = 0, dangle = 0

  for (const f of files) {
    let mod: { lessonData?: { sections?: Record<string, unknown>[] } }
    try { mod = require(path.join(dir, f)) } catch (e) { console.log(`IMPORT FAIL ${f}: ${(e as Error).message.slice(0, 70)}`); continue }
    const data = mod.lessonData
    if (!data?.sections) continue
    for (const s of data.sections) {
      const fields: [string, unknown][] = [['content', s.content], ['question', s.question], ['explanation', s.explanation]]
      ;(s.options as string[] | undefined)?.forEach((o, i) => fields.push([`option[${i}]`, o]))
      for (const [name, raw] of fields) {
        if (typeof raw !== 'string') continue
        const { garbled, dangling } = inspect(raw)
        for (const g of garbled) {
          garble++
          console.log(`GARBLE ${f} :: ${s.id} :: ${name}\n        math span reads: "${g.slice(0, 90)}"`)
        }
        if (dangling) {
          dangle++
          console.log(`DANGLE ${f} :: ${s.id} :: ${name}\n        "${raw.slice(0, 100).replace(/\n/g, ' ')}"`)
        }
      }
    }
  }
  console.log(`\n${files.length} files — GARBLE ${garble}, DANGLE ${dangle}`)
  if (garble || dangle) process.exit(1)
}

if (require.main === module) main()
