/**
 * Measures FORMAT tells in multiple-choice banks: ways the correct option
 * gives itself away by shape rather than by content.
 *
 * Length is covered by audit-answer-length-tell.ts. This one catches what an
 * owner review of the MCAT competitive bank (2026-09-20) actually noticed:
 * the key is the only option carrying a parenthetical gloss ("Implicit
 * (non-declarative) memory"), a colon or dash explainer, a multi-item list,
 * or a justifying clause — while the distractors are one- or two-word
 * throwaways. All of these survive option shuffling, so they reach students.
 *
 * Usage: npx tsx scripts/audit-format-tells.ts [--examples N] <file|dir>...
 * A feature counts as a tell only when the KEY has it and NO distractor does
 * (or, for "throwaway distractors", when the key runs 4+ words and every
 * distractor is 1-2 words). Static (AST) so module-local pools are seen.
 */
import fs from 'fs'
import path from 'path'
import ts from 'typescript'

type Item = { file: string; question: string; options: string[]; correct: number }

function itemsInFile(file: string): Item[] {
  const src = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true)
  const items: Item[] = []
  const visit = (node: ts.Node) => {
    if (ts.isObjectLiteralExpression(node)) {
      let options: string[] | null = null
      let correct: number | null = null
      let question = ''
      for (const p of node.properties) {
        if (!ts.isPropertyAssignment(p)) continue
        const name = p.name.getText().replace(/['"]/g, '')
        const init = p.initializer
        if (name === 'options' && ts.isArrayLiteralExpression(init)) {
          const vals = init.elements.map((e) =>
            ts.isStringLiteral(e) || ts.isNoSubstitutionTemplateLiteral(e) ? e.text : null,
          )
          if (vals.length > 1 && vals.every((v) => v !== null)) options = vals as string[]
        }
        if ((name === 'correctAnswer' || name === 'correctIndex') && ts.isNumericLiteral(init)) {
          correct = Number(init.text)
        }
        if (name === 'question' && (ts.isStringLiteral(init) || ts.isNoSubstitutionTemplateLiteral(init))) {
          question = init.text
        }
      }
      if (options && correct !== null && correct < options.length) {
        items.push({ file: path.basename(file), question, options, correct })
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(src)
  return items
}

const words = (s: string) => s.trim().split(/\s+/).length

/** Each tell: does the item's option shape give the key away in this way? */
const TELLS: Record<string, (key: string, distractors: string[]) => boolean> = {
  'parenthetical': (k, d) => /\([^)]*\)/.test(k) && !d.some((s) => /\([^)]*\)/.test(s)),
  'colon explainer': (k, d) => /:\s/.test(k) && !d.some((s) => /:\s/.test(s)),
  'dash explainer': (k, d) => /\s[—–-]\s/.test(k) && !d.some((s) => /\s[—–-]\s/.test(s)),
  'list (2+ commas or ;)': (k, d) => {
    const isList = (s: string) => /;/.test(s) || (s.match(/,/g) ?? []).length >= 2
    return isList(k) && !d.some(isList)
  },
  'justifying clause': (k, d) => {
    const re = /\b(because|since|so that|which|whereas|while|due to)\b/i
    return re.test(k) && !d.some((s) => re.test(s))
  },
  'throwaway distractors': (k, d) => words(k) >= 4 && d.every((s) => words(s) <= 2),
}

const args = process.argv.slice(2)
let examples = 0
const roots: string[] = []
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--examples') examples = Number(args[++i] ?? 5)
  else roots.push(args[i])
}
const files: string[] = []
for (const r of roots) {
  const st = fs.statSync(r)
  if (st.isDirectory()) {
    for (const f of fs.readdirSync(r)) if (f.endsWith('.ts')) files.push(path.join(r, f))
  } else files.push(r)
}

const all: Item[] = []
const perFile = new Map<string, { n: number; any: number; byTell: Record<string, number> }>()
const tellNames = Object.keys(TELLS)
const totalByTell: Record<string, number> = Object.fromEntries(tellNames.map((t) => [t, 0]))
const shown: Record<string, number> = Object.fromEntries(tellNames.map((t) => [t, 0]))
const exampleLines: string[] = []
let anyTotal = 0

for (const f of files) {
  const items = itemsInFile(f)
  if (!items.length) continue
  const row = { n: items.length, any: 0, byTell: Object.fromEntries(tellNames.map((t) => [t, 0])) as Record<string, number> }
  for (const it of items) {
    const key = it.options[it.correct]
    const distractors = it.options.filter((_, i) => i !== it.correct)
    let hit = false
    for (const t of tellNames) {
      if (!TELLS[t](key, distractors)) continue
      hit = true
      row.byTell[t]++
      totalByTell[t]++
      if (shown[t]++ < examples) {
        exampleLines.push(`  [${t}] ${it.file}: ${it.question}\n     KEY: ${key}\n     D:   ${distractors.join(' | ')}`)
      }
    }
    if (hit) { row.any++; anyTotal++ }
  }
  perFile.set(path.basename(f), row)
  all.push(...items)
}

const short = (t: string) => t.replace(/ .*/, '').slice(0, 9)
console.log('file'.padEnd(40), 'items'.padStart(6), 'any%'.padStart(5), ...tellNames.map((t) => short(t).padStart(10)))
for (const [f, r] of [...perFile].sort((a, b) => b[1].any / b[1].n - a[1].any / a[1].n)) {
  console.log(
    f.padEnd(40),
    String(r.n).padStart(6),
    String(Math.round((100 * r.any) / r.n)).padStart(5),
    ...tellNames.map((t) => String(r.byTell[t]).padStart(10)),
  )
}
console.log(`\nTOTAL items: ${all.length} | with at least one format tell: ${anyTotal} (${Math.round((100 * anyTotal) / (all.length || 1))}%)`)
for (const t of tellNames) console.log(`  ${String(totalByTell[t]).padStart(5)}  ${t}`)
console.log('\nColumns: parenthet = parenthetical, colon, dash, list, justifyin = justifying clause, throwaway = 4+ word key vs 1-2 word distractors')
if (exampleLines.length) console.log('\nEXAMPLES\n' + exampleLines.join('\n'))
