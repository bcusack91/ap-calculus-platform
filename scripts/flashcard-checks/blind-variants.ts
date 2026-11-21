/**
 * Blind-solve support for a part's further card-check questions (variants).
 *
 *   npx tsx scripts/flashcard-checks/blind-variants.ts export  <set>.p<N> <outDir>   # <outDir>/<part>-keyless.json (no keys, no explanations)
 *   npx tsx scripts/flashcard-checks/blind-variants.ts compare <set>.p<N> <outDir>   # reads <outDir>/<part>-solved.json: [{ n, answer: 0-3, note? }]
 */
import { readFileSync, writeFileSync } from 'fs'
import { loadVariantPart } from './sets'

async function main() {
  const [mode, part, out] = process.argv.slice(2)
  const list = Object.entries(await loadVariantPart(part)).flatMap(([front, v]) => v.more.map((c, i) => ({ front, i, c })))
  if (mode === 'export') {
    writeFileSync(`${out}/${part}-keyless.json`, JSON.stringify(list.map(({ c }, n) => ({ n, question: c.question, options: c.options })), null, 1))
    console.log(`${part}: ${list.length} questions exported without keys`)
    return
  }
  const solved = JSON.parse(readFileSync(`${out}/${part}-solved.json`, 'utf8')) as { n: number; answer: number; note?: string }[]
  let agree = 0
  for (const [n, { front, i, c }] of list.entries()) {
    const s = solved.find((x) => x.n === n)
    const tag = `${n} [${front.slice(0, 60)} #${i + 1}]`
    if (!s) { console.log(`UNSOLVED ${tag}`); continue }
    if (s.answer === c.correctAnswer) agree++
    else console.log(`\nDISAGREE ${tag}\n  Q: ${c.question}\n  key:    ${c.options[c.correctAnswer]}\n  solver: ${c.options[s.answer] ?? s.answer}\n  note:   ${s.note ?? ''}`)
    if (s.note && s.answer === c.correctAnswer) console.log(`\nNOTE ${tag}: ${s.note}`)
  }
  console.log(`\n${part}: solver agrees with the key on ${agree} of ${list.length}`)
}
main()
