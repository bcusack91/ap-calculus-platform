/**
 * Proves Module 2 adaptivity: a student who earns the hard form must actually
 * receive harder items than one routed to the easy form.
 *   npx tsx scripts/verify-sat-adaptive.ts
 */
import { generateFullTest, regenerateModule2, module2Tier } from '../src/data/sat-practice/test-generator'

function mix(qs: { difficulty?: string }[]) {
  const c: Record<string, number> = { easy: 0, medium: 0, hard: 0, untagged: 0 }
  for (const q of qs) c[q.difficulty ?? 'untagged']++
  const n = qs.length || 1
  return `easy ${Math.round(100 * c.easy / n)}% / medium ${Math.round(100 * c.medium / n)}% / hard ${Math.round(100 * c.hard / n)}%`
}

async function main() {
  console.log('routing threshold check:')
  console.log('  19/27 correct (70%) ->', module2Tier(19, 27))
  console.log('  14/27 correct (52%) ->', module2Tier(14, 27))
  console.log('  21/22 correct (95%) ->', module2Tier(21, 22))

  const test = await generateFullTest(1)
  const used = new Set<string>()
  for (const s of test.sections) for (const q of s.questions) used.add(q.question)

  for (const id of ['rw-2', 'math-2']) {
    const sec = test.sections.find((s) => s.id === id)!
    const hard = await regenerateModule2(sec, 'hard', new Set(used))
    const easy = await regenerateModule2(sec, 'easy', new Set(used))
    const mcqOnly = (qs: typeof sec.questions) => qs.filter((q) => q.correctIndex >= 0)
    console.log(`\n${id}:`)
    console.log('  as originally built :', mix(mcqOnly(sec.questions)))
    console.log('  routed to HARD form :', mix(mcqOnly(hard.questions)), `(tier=${hard.tier}, n=${hard.questions.length})`)
    console.log('  routed to EASY form :', mix(mcqOnly(easy.questions)), `(tier=${easy.tier}, n=${easy.questions.length})`)
  }
}
main()
