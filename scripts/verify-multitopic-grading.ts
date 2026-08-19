/**
 * End-to-end check of multi-topic assignment grading against PROD data,
 * read-only: simulates clearing topics one at a time and reports the score
 * and status the grader would record.
 *   NODE_ENV=production PROD=1 npx tsx scripts/verify-multitopic-grading.ts
 */
import { config } from 'dotenv'
config({ path: '.env', override: true })
import { PrismaClient } from '@prisma/client'
import { assignmentTopics, clearedTopics } from '../src/lib/assignment-autocomplete'

async function main() {
  const prisma = new PrismaClient()
  const assignments = await prisma.assignment.findMany({
    where: { isActive: true },
    select: { id: true, title: true, topicSlug: true, topicSlugs: true, requiredScore: true },
  })
  const multi = assignments.filter((a) => assignmentTopics(a).length > 1)
  console.log(`multi-topic assignments: ${multi.length}\n`)

  for (const a of multi) {
    const topics = assignmentTopics(a)
    const bar = a.requiredScore ?? 0.8
    console.log(`${a.title}  (requiredScore=${a.requiredScore ?? 'none'} -> bar ${bar})`)
    // simulate clearing 0..N topics
    for (let n = 0; n <= topics.length; n++) {
      const cleared = new Set(topics.slice(0, n))
      const clearedCount = topics.filter((t) => cleared.has(t)).length
      const recordedScore = clearedCount / topics.length
      const completesNow = clearedCount === topics.length
      console.log(
        `  ${String(n).padStart(2)}/${topics.length} cleared -> gradebook ${String(Math.round(recordedScore * 100)).padStart(3)}%  status ${completesNow ? 'COMPLETED' : 'IN_PROGRESS'}`,
      )
    }
    console.log()
  }
  await prisma.$disconnect()
}
main()
