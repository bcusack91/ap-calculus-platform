/**
 * Blind-solve support for a deck's card-check questions.
 *
 *   npx tsx scripts/flashcard-checks/blind.ts export  mcat-circ1 <outDir>   # <outDir>/<key>-keyless.json (no keys, no explanations)
 *   npx tsx scripts/flashcard-checks/blind.ts compare mcat-circ1 <outDir>   # reads <outDir>/<key>-solved.json: [{ n, answer: 0-3, note? }]
 *
 * A solver who has not seen the keys answers every question; any disagreement
 * with the key, or a solver note that a question is ambiguous, is reviewed by hand.
 */
import { readFileSync, writeFileSync } from 'fs'
import { loadChecks } from './sets'

async function main() {
  const [mode, key, out] = process.argv.slice(2)
  const checks = await loadChecks(key)
  const list = Object.entries(checks)
  if (mode === 'export') {
    writeFileSync(`${out}/${key}-keyless.json`, JSON.stringify(list.map(([, c], n) => ({ n, question: c.question, options: c.options })), null, 1))
    console.log(`${key}: ${list.length} questions exported without keys`)
    return
  }
  const solved = JSON.parse(readFileSync(`${out}/${key}-solved.json`, 'utf8')) as { n: number; answer: number; note?: string }[]
  let agree = 0
  for (const [n, [front, c]] of list.entries()) {
    const s = solved.find((x) => x.n === n)
    if (!s) { console.log(`UNSOLVED ${n}: ${front.slice(0, 70)}`); continue }
    if (s.answer === c.correctAnswer) agree++
    else console.log(`\nDISAGREE ${n} [${front.slice(0, 70)}]\n  Q: ${c.question}\n  key:    ${c.options[c.correctAnswer]}\n  solver: ${c.options[s.answer] ?? s.answer}\n  note:   ${s.note ?? ''}`)
    if (s.note && s.answer === c.correctAnswer) console.log(`\nNOTE ${n} [${front.slice(0, 70)}]: ${s.note}`)
  }
  console.log(`\n${key}: solver agrees with the key on ${agree} of ${list.length}`)
}
main()
