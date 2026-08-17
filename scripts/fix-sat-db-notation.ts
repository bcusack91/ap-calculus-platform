/**
 * Congruence audit DB pass: strip P(A|B)/\mid notation from sat-prep topic
 * content, flashcards, and example solutions — replace with the words-based
 * framing the digital SAT uses. Idempotent string replacements.
 *   PROD=1 npx tsx scripts/fix-sat-db-notation.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const topic = await prisma.topic.findUnique({
    where: { slug: 'sat-probability-two-way-tables' },
    select: { id: true, textContent: true, flashcards: { select: { id: true, back: true } }, exampleProblems: { select: { id: true, question: true, solution: true } } },
  })
  if (!topic) throw new Error('topic missing')

  const SUBS: [string | RegExp, string][] = [
    ['$P(\\text{Likes Pizza} \\mid \\text{Student}) = \\frac{45}{60} = \\frac{3}{4}$',
     'Selected from the students: probability of liking pizza $= \\frac{45}{60} = \\frac{3}{4}$'],
    ['$P(\\text{Student} \\mid \\text{Likes Pizza}) = \\frac{45}{65} = \\frac{9}{13}$',
     'Selected from those who like pizza: probability of being a student $= \\frac{45}{65} = \\frac{9}{13}$'],
    ['$$P(A \\mid B) = \\frac{P(A \\text{ and } B)}{P(B)}$$',
     '**The "from" rule:** the group named after "from" (or "given") becomes your denominator — its row or column total, not the grand total. The SAT always words it this way; you will not see formal notation on the test.'],
    ['2. **Confusing "and" with "given"** — $P(A \\text{ and } B) \\neq P(A \\mid B)$',
     '2. **Confusing "and" with "given/from"** — "junior AND walks" uses the grand total; "selected from the juniors" uses the junior total'],
    [/\$\$?P\(\\text\{([a-z ]+)\}\)\s*=\s*/gi, '$$\\text{Probability of $1} = '],
  ]

  const apply = (text: string): string => {
    let out = text
    for (const [from, to] of SUBS) {
      out = typeof from === 'string' ? out.split(from).join(to) : out.replace(from, to)
    }
    return out
  }

  const newContent = apply(topic.textContent ?? '')
  if (newContent !== topic.textContent) {
    await prisma.topic.update({ where: { id: topic.id }, data: { textContent: newContent } })
    console.log('textContent updated')
  }
  for (const fc of topic.flashcards) {
    const nb = fc.back.replace('For $P(A \\mid B)$, the denominator is the total count of $B$.', 'For "selected from group B" questions, the denominator is the total count of group B.')
    if (nb !== fc.back) { await prisma.flashcard.update({ where: { id: fc.id }, data: { back: nb } }); console.log('flashcard updated') }
  }
  for (const ex of topic.exampleProblems) {
    const nq = apply(ex.question); const ns = apply(ex.solution)
    if (nq !== ex.question || ns !== ex.solution) {
      await prisma.exampleProblem.update({ where: { id: ex.id }, data: { question: nq, solution: ns } })
      console.log('example updated', ex.id.slice(0, 8))
    }
  }
  await prisma.$disconnect()
}
main()
