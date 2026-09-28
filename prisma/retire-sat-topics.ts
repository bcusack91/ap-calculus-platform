/**
 * Remove SAT topics the digital SAT does not test (owner decision 2026-09-28:
 * "If the exam doesn't cover it, we shouldn't have it in the program").
 *
 * Runs LAST in prisma/seed-all.ts, because older SAT seed scripts still create
 * these topics and later card seeds attach flashcards to them. Deleting a Topic
 * cascades its flashcards (and their FlashcardProgress), TopicProgress and
 * example problems. Old URLs 308 to a tested topic via
 * src/lib/legacy-topic-redirects.ts, and stored diagnostic results resolve
 * through canonicalizeSlug in the diagnostic generator.
 *
 *   npx tsx prisma/retire-sat-topics.ts                 # local DB (.env.local), applies
 *   DRY_RUN=1 npx tsx prisma/retire-sat-topics.ts        # report only
 *   NODE_ENV=production npx tsx prisma/retire-sat-topics.ts   # prod (.env), applies
 */
import '../src/lib/load-env'
import { PrismaClient } from '@prisma/client'

export const RETIRED_SAT_TOPICS = ['sat-conciseness-redundancy', 'sat-complex-numbers'] as const

async function main() {
  const prisma = new PrismaClient()
  const dryRun = process.env.DRY_RUN === '1'
  for (const slug of RETIRED_SAT_TOPICS) {
    const topic = await prisma.topic.findUnique({ where: { slug }, select: { id: true, title: true } })
    if (!topic) {
      console.log(`  ${slug}: not present`)
      continue
    }
    const [cards, cardProgress, progress, examples, exitAttempts] = await Promise.all([
      prisma.flashcard.count({ where: { topicId: topic.id } }),
      prisma.flashcardProgress.count({ where: { flashcard: { topicId: topic.id } } }),
      prisma.topicProgress.count({ where: { topicId: topic.id } }),
      prisma.exampleProblem.count({ where: { topicId: topic.id } }),
      prisma.exitQuizAttempt.count({ where: { topicSlug: slug } }),
    ])
    console.log(
      `  ${slug} ("${topic.title}"): ${cards} cards, ${cardProgress} card-progress rows, ${progress} topic-progress rows, ${examples} examples, ${exitAttempts} exit attempts (kept)`,
    )
    if (!dryRun) {
      await prisma.topic.delete({ where: { id: topic.id } })
      console.log(`    deleted`)
    }
  }
  await prisma.$disconnect()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
