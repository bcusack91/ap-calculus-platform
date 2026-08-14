import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// READ-ONLY: replay maybeUnlockFlashcards' condition queries on recent real
// exit-quiz attempts and report what the new rule would do.
async function main() {
  const attempts = await prisma.exitQuizAttempt.findMany({
    orderBy: { startedAt: 'desc' },
    take: 8,
    select: { userId: true, topicSlug: true, passed: true },
    distinct: ['userId', 'topicSlug'],
  })
  for (const a of attempts) {
    const topic = await prisma.topic.findUnique({ where: { slug: a.topicSlug }, select: { id: true, title: true, flashcards: { select: { id: true } } } })
    if (!topic) { console.log(`  ${a.topicSlug}: NO TOPIC ROW`); continue }
    const progress = await prisma.topicProgress.findUnique({
      where: { userId_topicId: { userId: a.userId, topicId: topic.id } },
      select: { status: true },
    })
    const selfPaced = progress?.status === 'COMPLETED' || progress?.status === 'MASTERED'
    const presented = await prisma.slideDeck.findFirst({
      where: { topicSlug: a.topicSlug, session: { attendance: { some: { userId: a.userId } } } },
      select: { id: true },
    })
    const existing = await prisma.flashcardProgress.count({ where: { userId: a.userId, flashcard: { topicId: topic.id } } })
    const wouldUnlock = selfPaced || presented !== null
    console.log(`${a.topicSlug} (passed=${a.passed}) | lesson: status=${progress?.status ?? 'none'} inClass=${presented !== null} -> ${wouldUnlock ? 'UNLOCK' : 'stay locked'} | cards=${topic.flashcards.length} existingProgress=${existing}`)
  }
  await prisma.$disconnect()
}
main()
