/**
 * DB-side SAT congruence fixes (audit 2026-08-17, owner-approved):
 * - Math category names -> current digital-SAT domain names
 * - Complex Numbers topic labeled "(Beyond the SAT)"
 * - One off-test flashcard (P(A|B) notation) replaced with SAT-style content
 * Idempotent. PROD=1 npx tsx scripts/apply-sat-congruence-db.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const course = await prisma.course.findUnique({ where: { slug: 'sat-prep' }, select: { id: true } })
  if (!course) throw new Error('no sat-prep course')

  const renames: [string, string][] = [
    ['Heart of Algebra', 'Algebra'],
    ['Passport to Advanced Math', 'Advanced Math'],
    ['Problem Solving and Data Analysis', 'Problem-Solving and Data Analysis'],
    ['Additional Topics in Math', 'Geometry and Trigonometry'],
  ]
  for (const [from, to] of renames) {
    const r = await prisma.category.updateMany({ where: { courseId: course.id, name: from }, data: { name: to } })
    console.log(`category "${from}" -> "${to}": ${r.count}`)
  }

  const t = await prisma.topic.updateMany({
    where: { slug: 'sat-complex-numbers', title: 'Complex Numbers' },
    data: { title: 'Complex Numbers (Beyond the SAT)' },
  })
  console.log('complex-numbers title labeled:', t.count)

  const badCard = await prisma.flashcard.findFirst({ where: { topic: { slug: 'sat-probability-two-way-tables' }, front: { contains: 'P(A|B)' } }, select: { id: true } })
  if (badCard) {
    await prisma.flashcard.update({ where: { id: badCard.id }, data: {
      front: 'On the SAT, how is conditional probability asked, and what is the key move?',
      back: 'In WORDS from a two-way table: "If a person is selected at random from those who…". The group named after "from" becomes your denominator — use that row or column total, not the grand total.',
    } })
    console.log('off-test flashcard replaced')
  } else console.log('off-test flashcard already clean')
  await prisma.$disconnect()
}
main()
