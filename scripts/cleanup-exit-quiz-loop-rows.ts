/**
 * One-shot: delete the ExitQuizAttempt rows written by the runaway client
 * submission loop (fixed in dbf64d31).
 *
 * The loop re-POSTed an identical completed result every ~400ms, so its rows
 * form chains where each row's identical predecessor (same user, topic, score,
 * totalQuestions) is seconds earlier. A genuine retake — even a rushed one —
 * is minutes later, and usually with a different score.
 *
 * Rule: delete every row whose identical predecessor is < 30 seconds before
 * it. The first row of each burst survives, as does every genuine attempt.
 *
 * Run:       npx tsx scripts/cleanup-exit-quiz-loop-rows.ts          (dry run)
 * Execute:   npx tsx scripts/cleanup-exit-quiz-loop-rows.ts --execute
 *
 * Writes a full backup of the doomed rows to scripts/_exit-quiz-loop-backup.json
 * before deleting anything.
 */
import dotenv from 'dotenv'
dotenv.config({ path: '.env', override: true })
import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prisma = new PrismaClient()
const EXECUTE = process.argv.includes('--execute')

async function main() {
  console.log('DB host:', (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0])
  console.log(EXECUTE ? 'MODE: EXECUTE' : 'MODE: dry run', '\n')

  const doomed = await prisma.$queryRaw<{ id: string }[]>`
    WITH ordered AS (
      SELECT id,
             "startedAt" - LAG("startedAt") OVER (
               PARTITION BY "userId", "topicSlug", score, "totalQuestions"
               ORDER BY "startedAt"
             ) AS gap
      FROM "ExitQuizAttempt"
    )
    SELECT id FROM ordered WHERE gap IS NOT NULL AND gap < interval '30 seconds'`

  const total = await prisma.exitQuizAttempt.count()
  console.log(`total rows:      ${total}`)
  console.log(`loop rows:       ${doomed.length}`)
  console.log(`would remain:    ${total - doomed.length}`)

  if (!EXECUTE) { console.log('\nDry run only — re-run with --execute to delete.'); return }

  // Backup first
  const ids = doomed.map(d => d.id)
  const rows: unknown[] = []
  for (let i = 0; i < ids.length; i += 2000) {
    rows.push(...await prisma.exitQuizAttempt.findMany({ where: { id: { in: ids.slice(i, i + 2000) } } }))
  }
  fs.writeFileSync('scripts/_exit-quiz-loop-backup.json', JSON.stringify(rows))
  console.log(`\nbacked up ${rows.length} rows to scripts/_exit-quiz-loop-backup.json`)

  let deleted = 0
  for (let i = 0; i < ids.length; i += 2000) {
    const r = await prisma.exitQuizAttempt.deleteMany({ where: { id: { in: ids.slice(i, i + 2000) } } })
    deleted += r.count
  }
  console.log(`deleted ${deleted} rows`)
  console.log(`remaining: ${await prisma.exitQuizAttempt.count()}`)
}

main().catch(e => { console.error(e); process.exit(1) }).finally(() => prisma.$disconnect())
