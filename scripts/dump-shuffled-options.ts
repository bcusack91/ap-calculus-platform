/**
 * Dump a question bank for a BLIND re-solve, with options shuffled per item.
 *
 * Writes two files: `<out>.blind.json` (id, question, shuffled options — no
 * key, no explanation) for a fresh reviewer to answer, and `<out>.key.json`
 * (id → correct letter after shuffling) that only the coordinator opens.
 * Shuffling matters: stored keys cluster on one index, and an unshuffled dump
 * let two rebalance batches pass on position alone.
 *
 * Usage: npx tsx scripts/dump-shuffled-options.ts <bank.ts> <outPrefix> [--seed N]
 */
import fs from 'fs'
import ts from 'typescript'

const [file, outPrefix, ...rest] = process.argv.slice(2)
if (!file || !outPrefix) {
  console.error('usage: dump-shuffled-options.ts <bank.ts> <outPrefix> [--seed N]')
  process.exit(2)
}
let seed = Number(rest[rest.indexOf('--seed') + 1]) || Date.now()
const rand = () => {
  // Mulberry32: deterministic when a seed is passed, so a dump can be regenerated.
  seed = (seed + 0x6d2b79f5) | 0
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

const src = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true)
const blind: { id: number; question: string; options: string[] }[] = []
const key: Record<number, string> = {}
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
        const vals = init.elements.map((e) => (ts.isStringLiteral(e) || ts.isNoSubstitutionTemplateLiteral(e) ? e.text : null))
        if (vals.every((v) => v !== null)) options = vals as string[]
      }
      if (name === 'correctAnswer' && ts.isNumericLiteral(init)) correct = Number(init.text)
      if (name === 'question' && (ts.isStringLiteral(init) || ts.isNoSubstitutionTemplateLiteral(init))) question = init.text
    }
    if (options && correct !== null) {
      const order = options.map((_, i) => i)
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1))
        ;[order[i], order[j]] = [order[j], order[i]]
      }
      const id = blind.length + 1
      blind.push({ id, question, options: order.map((i) => options![i]) })
      key[id] = 'ABCD'[order.indexOf(correct)]
    }
  }
  ts.forEachChild(node, visit)
}
visit(src)
fs.writeFileSync(`${outPrefix}.blind.json`, JSON.stringify(blind, null, 1))
fs.writeFileSync(`${outPrefix}.key.json`, JSON.stringify(key))
console.log(`${blind.length} items → ${outPrefix}.blind.json (+ .key.json, coordinator only)`)
