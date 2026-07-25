/**
 * One-shot: drop the dead Quiz subsystem from the production database.
 *
 * Quiz / QuizQuestion / QuizAttempt / QuizAnswer were part of an early quiz
 * feature that was never shipped — 0 rows in production, no application code
 * reads or writes them. ExitQuizAttempt is the live model that records real
 * quiz activity and is NOT touched by this script.
 *
 * The models are already gone from schema.prisma; this only removes the
 * now-orphaned tables from the database. Safe to run at any time, and safe to
 * run twice (every statement is IF EXISTS).
 *
 * Run:  npx tsx scripts/drop-dead-quiz-tables.ts
 *
 * Guard: re-counts every table immediately before dropping and ABORTS without
 * dropping anything if even one row has appeared. It will never destroy data.
 */
import dotenv from 'dotenv'
dotenv.config({ path: '.env', override: true })
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Leaf-first: QuizAnswer FKs to QuizAttempt and QuizQuestion; QuizAttempt FKs to Quiz.
const TABLES = ['QuizAnswer', 'QuizAttempt', 'QuizQuestion', 'Quiz'] as const

async function main() {
  const host = (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0]
  console.log(`DB host: ${host}\n`)

  for (const t of TABLES) {
    const rows = await prisma.$queryRawUnsafe<{ c: bigint }[]>(
      `SELECT COUNT(*)::bigint AS c FROM "${t}"`
    )
    const n = Number(rows[0].c)
    console.log(`  ${t.padEnd(13)} ${n} rows`)
    if (n !== 0) {
      console.error(`\nABORT: "${t}" is not empty (${n} rows). Nothing was dropped.`)
      process.exit(1)
    }
  }

  console.log('\nAll four are empty — dropping.')
  for (const t of TABLES) {
    await prisma.$executeRawUnsafe(`DROP TABLE IF EXISTS "${t}"`)
    console.log(`  dropped table ${t}`)
  }
  // QuestionType was referenced only by QuizQuestion.
  await prisma.$executeRawUnsafe(`DROP TYPE IF EXISTS "QuestionType"`)
  console.log('  dropped type  QuestionType')

  const left = await prisma.$queryRaw<{ tablename: string }[]>`
    SELECT tablename FROM pg_tables
    WHERE schemaname = 'public'
      AND tablename IN ('Quiz', 'QuizQuestion', 'QuizAttempt', 'QuizAnswer')`
  const typeLeft = await prisma.$queryRaw<{ typname: string }[]>`
    SELECT typname FROM pg_type WHERE typname = 'QuestionType'`
  const exitQuizzes = await prisma.exitQuizAttempt.count()

  console.log(`\nVerify:`)
  console.log(`  quiz tables remaining:   ${left.length}`)
  console.log(`  QuestionType remaining:  ${typeLeft.length}`)
  console.log(`  ExitQuizAttempt (live):  ${exitQuizzes} rows — untouched`)
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
