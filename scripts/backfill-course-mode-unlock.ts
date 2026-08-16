// One-off: re-run the unlock for a user+topic so cards flow into their course
// study mode (idempotent — helper skips duplicates and re-checks conditions).
//   NODE_ENV=production PROD=1 npx tsx scripts/backfill-course-mode-unlock.ts <email> <topicSlug>
import { prisma } from '../src/lib/prisma'
import { maybeUnlockFlashcards } from '../src/lib/flashcard-unlock'
async function m() {
  const [email, topicSlug] = process.argv.slice(2)
  const user = await prisma.user.findFirst({ where: { email }, select: { id: true, studyContext: true } })
  if (!user) { console.log('no user'); process.exit(1) }
  console.log('user context:', user.studyContext)
  const result = await maybeUnlockFlashcards(user.id, topicSlug)
  console.log('unlock result:', result)
  const rows = await prisma.flashcardProgress.groupBy({
    by: ['context'], where: { userId: user.id, flashcard: { topic: { slug: topicSlug } } }, _count: { _all: true },
  })
  console.log('progress rows by context for topic:', rows.map(r => `${r.context}=${r._count._all}`).join(', '))
  await prisma.$disconnect()
}
m()
