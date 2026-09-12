/**
 * Measures the "longest option is correct" tell in multiple-choice banks.
 *
 * A student who always picks the longest, most-detailed option should score at
 * chance (25% on 4 options). Where that number runs high, the bank is beatable
 * without knowing the material — and unlike answer POSITION, which the quiz
 * renderers shuffle at display time, answer LENGTH survives shuffling, so this
 * is the tell that actually reaches students.
 *
 * Usage: npx tsx scripts/audit-answer-length-tell.ts <file|dir>...
 * Reports per file: item count, % where the correct option is strictly the
 * longest, and the mean length ratio of correct option : mean distractor.
 *
 * Static (AST) rather than runtime import, so it also sees question pools that
 * are module-local and never exported.
 */
import fs from 'fs'
import path from 'path'
import ts from 'typescript'

type Item = { options: string[]; correct: number }

function itemsInFile(file: string): Item[] {
  const src = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true)
  const items: Item[] = []

  const visit = (node: ts.Node) => {
    if (ts.isObjectLiteralExpression(node)) {
      let options: string[] | null = null
      let correct: number | null = null
      for (const p of node.properties) {
        if (!ts.isPropertyAssignment(p)) continue
        const name = p.name.getText().replace(/['"]/g, '')
        if (name === 'options' && ts.isArrayLiteralExpression(p.initializer)) {
          const vals = p.initializer.elements.map((e) =>
            ts.isStringLiteral(e) || ts.isNoSubstitutionTemplateLiteral(e) ? e.text : null,
          )
          if (vals.length > 1 && vals.every((v) => v !== null)) options = vals as string[]
        }
        if (name === 'correctAnswer' || name === 'correctIndex') {
          if (ts.isNumericLiteral(p.initializer)) correct = Number(p.initializer.text)
        }
      }
      if (options && correct !== null && correct < options.length) items.push({ options, correct })
    }
    ts.forEachChild(node, visit)
  }
  visit(src)
  return items
}

function stats(items: Item[]) {
  let strictLongest = 0
  let ratioSum = 0
  for (const it of items) {
    const lens = it.options.map((s) => s.length)
    const c = lens[it.correct]
    const others = lens.filter((_, i) => i !== it.correct)
    if (others.every((l) => l < c)) strictLongest++
    const meanOther = others.reduce((a, b) => a + b, 0) / (others.length || 1)
    ratioSum += meanOther ? c / meanOther : 1
  }
  const n = items.length
  return { n, strictLongest, pct: n ? Math.round((strictLongest / n) * 100) : 0, ratio: n ? (ratioSum / n).toFixed(2) : '0' }
}

const roots = process.argv.slice(2)
const files: string[] = []
for (const r of roots) {
  const st = fs.statSync(r)
  if (st.isDirectory()) {
    for (const f of fs.readdirSync(r)) if (f.endsWith('.ts')) files.push(path.join(r, f))
  } else files.push(r)
}

const rows: Array<[string, ReturnType<typeof stats>]> = []
const all: Item[] = []
for (const f of files) {
  const items = itemsInFile(f)
  if (!items.length) continue
  all.push(...items)
  rows.push([f, stats(items)])
}
rows.sort((a, b) => b[1].pct - a[1].pct)

console.log('file'.padEnd(56), 'items'.padStart(6), 'longest%'.padStart(9), 'ratio'.padStart(7))
for (const [f, s] of rows) {
  console.log(path.basename(f).padEnd(56), String(s.n).padStart(6), String(s.pct).padStart(9), String(s.ratio).padStart(7))
}
const t = stats(all)
console.log('\nTOTAL items:', t.n, '| strictly-longest-is-correct:', t.strictLongest, `(${t.pct}%)`, '| mean ratio', t.ratio)
console.log('(chance for 4 options = 25%)')
