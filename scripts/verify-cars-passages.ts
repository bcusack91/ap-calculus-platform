/**
 * Gate for CARS passage banks. Checks structure, answer-key hygiene, and the
 * traps specific to this content type:
 *  - the passage runner does NOT shuffle options, so a bank whose keys cluster
 *    at one index teaches position-guessing
 *  - explanations that name option LETTERS break if options are ever reordered
 *   npx tsx scripts/verify-cars-passages.ts
 */
import { CARS_PASSAGES } from '../src/data/mcat/passages'

const MIN_WORDS = 420
const MAX_WORDS = 700

function main() {
  let errors = 0
  const ids = new Set<string>()
  const keyCounts = [0, 0, 0, 0]
  let letterRefs = 0
  let questions = 0

  for (const p of CARS_PASSAGES) {
    const where = p.id
    if (ids.has(p.id)) { console.log(`DUP ID: ${p.id}`); errors++ }
    ids.add(p.id)
    if (p.section !== 'cars') { console.log(`${where}: wrong section ${p.section}`); errors++ }
    if (!p.title || !p.discipline) { console.log(`${where}: missing title/discipline`); errors++ }
    const words = p.passageText.split(/\s+/).filter(Boolean).length
    if (words < MIN_WORDS || words > MAX_WORDS) { console.log(`${where}: ${words} words (want ${MIN_WORDS}-${MAX_WORDS})`); errors++ }
    if (p.questions.length < 5 || p.questions.length > 7) { console.log(`${where}: ${p.questions.length} questions`); errors++ }
    const stems = new Set<string>()
    for (const [i, q] of p.questions.entries()) {
      questions++
      if (!Array.isArray(q.options) || q.options.length !== 4) { console.log(`${where} q${i + 1}: ${q.options?.length} options`); errors++; continue }
      if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) { console.log(`${where} q${i + 1}: bad key ${q.correctAnswer}`); errors++; continue }
      keyCounts[q.correctAnswer]++
      if (new Set(q.options.map(o => o.trim().toLowerCase())).size !== 4) { console.log(`${where} q${i + 1}: duplicate options`); errors++ }
      if (!q.explanation || q.explanation.length < 40) { console.log(`${where} q${i + 1}: thin explanation`); errors++ }
      if (/\b(choice|option)s?\s*\(?[A-D]\)?\b|\([A-D]\)/.test(q.explanation)) letterRefs++
      const stem = q.question.trim().toLowerCase()
      if (stems.has(stem)) { console.log(`${where} q${i + 1}: duplicate stem within passage`); errors++ }
      stems.add(stem)
    }
  }

  const total = keyCounts.reduce((a, b) => a + b, 0)
  const pct = keyCounts.map(n => Math.round((n / total) * 100))
  console.log(`\npassages: ${CARS_PASSAGES.length} | questions: ${questions}`)
  console.log(`key distribution A/B/C/D: ${keyCounts.join('/')} = ${pct.join('%/')}%`)
  const worst = Math.max(...pct)
  if (worst > 40) console.log(`WARNING: keys cluster at one position (${worst}%) — the runner does not shuffle options`)
  if (letterRefs > 0) console.log(`note: ${letterRefs} explanations reference option letters (fragile if options are reordered)`)
  console.log(errors === 0 ? '\nAll structural checks passed.' : `\n${errors} STRUCTURAL ERRORS`)
  process.exit(errors === 0 ? 0 : 1)
}
main()
