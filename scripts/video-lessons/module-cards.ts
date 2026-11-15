/**
 * Video lesson review cards in students' decks, module by module (see
 * src/lib/video-lesson-cards.ts). Two jobs:
 *
 * BACKFILL (default): every student's finished modules get their cards — the
 * live rule only fires when a module is finished, so modules finished before
 * it shipped need this once.
 *
 *   npx tsx scripts/video-lessons/module-cards.ts                       # dry run, local
 *   SEED_DB=prod npx tsx scripts/video-lessons/module-cards.ts          # dry run, prod
 *   SEED_DB=prod APPLY=1 npx tsx scripts/video-lessons/module-cards.ts
 *
 * GRANT: give one student a lesson's modules regardless of progress. With
 * RESET=1 their other never-reviewed cards (USER_NAME or USER_EMAIL picks them) are removed first (cards they have
 * reviewed are never touched); the removed rows are saved to a JSON backup.
 *
 *   SEED_DB=prod APPLY=1 USER_NAME="Joel Ukpelegbu" LESSON=mcat-circ1 MODULES=1,2 RESET=1 \
 *     npx tsx scripts/video-lessons/module-cards.ts
 */
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import { writeFileSync } from 'fs'

async function main() {
  const IS_PROD = process.env.SEED_DB === 'prod'
  const APPLY = process.env.APPLY === '1'
  const host = new URL(process.env.DATABASE_URL!).hostname
  if (IS_PROD !== host.endsWith('neon.tech')) throw new Error(`SEED_DB=${process.env.SEED_DB ?? ''} but DATABASE_URL host is ${host}`)
  console.log('DB:', IS_PROD ? 'PROD' : 'local', host, '| mode:', APPLY ? 'APPLY' : 'dry run')

  // Imported after the env file is loaded so the client connects to the right database.
  const { prisma } = await import('../../src/lib/prisma')
  const { finishedModules, unlockVideoModuleCards } = await import('../../src/lib/video-lesson-cards')
  const { visibleSteps, videoDeckKey, lessonParts } = await import('../../src/lib/video-lesson-core')

  const lessons = await prisma.videoLesson.findMany({
    where: { published: true },
    select: { id: true, topicSlug: true, courseSlug: true, steps: { orderBy: { order: 'asc' }, select: { order: true, clipId: true, yield: true, questions: true, clip: { select: { title: true, provider: true, providerId: true, durationSec: true, tags: true } } } } },
  })
  const topicOf = async (slug: string) => prisma.topic.findUnique({ where: { slug }, select: { id: true, title: true } })
  const countCards = async (topicId: string, keys: string[]) => prisma.flashcard.count({ where: { topicId, videoDeck: { in: keys } } })

  const who = process.env.USER_NAME ?? process.env.USER_EMAIL
  if (who && process.env.LESSON) {
    // ── GRANT ──
    const users = await prisma.user.findMany({ where: process.env.USER_EMAIL ? { email: who } : { name: who }, select: { id: true, name: true } })
    if (users.length !== 1) throw new Error(`expected one user named "${who}", found ${users.length}`)
    const user = users[0]
    const lesson = lessons.find((l) => l.steps.some((s) => s.clip.tags.includes(`lesson-${process.env.LESSON}`)))
    if (!lesson) throw new Error(`no published lesson with key ${process.env.LESSON}`)
    const topic = await topicOf(lesson.topicSlug)
    if (!topic) throw new Error(`topic ${lesson.topicSlug} missing`)
    const steps = visibleSteps(lesson.steps, true)
    const parts = lessonParts(steps.map((s) => s.meta.video))
    const wanted = (process.env.MODULES ?? '').split(',').map(Number).filter((n) => n >= 1 && n <= parts.length)
    if (wanted.length === 0) throw new Error(`MODULES must list module numbers 1–${parts.length}`)
    const modules = wanted.map((m) => ({ module: m, lessonKey: process.env.LESSON!, videos: parts[m - 1].videos }))
    const keys = modules.flatMap((m) => m.videos.map((v) => videoDeckKey(m.lessonKey, v)))
    const cardIds = (await prisma.flashcard.findMany({ where: { topicId: topic.id, videoDeck: { in: keys } }, select: { id: true } })).map((c) => c.id)
    console.log(`${user.name}: modules ${wanted.join(', ')} of ${topic.title} = videos ${modules.flatMap((m) => m.videos).join(', ')} → ${cardIds.length} cards`)
    if (cardIds.length === 0) throw new Error('no stored review cards for those videos: run sync-review-cards.ts first')

    if (process.env.RESET === '1') {
      const remove = await prisma.flashcardProgress.findMany({ where: { userId: user.id, reviewCount: 0, flashcardId: { notIn: cardIds } } })
      const reviewed = await prisma.flashcardProgress.count({ where: { userId: user.id, reviewCount: { gt: 0 }, flashcardId: { notIn: cardIds } } })
      console.log(`Reset: ${remove.length} never-reviewed cards to remove; ${reviewed} reviewed cards kept as they are`)
      if (APPLY && remove.length > 0) {
        const file = `scripts/_module-cards-reset-backup-${new Date().toISOString().replace(/[:.]/g, '-')}.json`
        writeFileSync(file, JSON.stringify(remove, null, 1))
        console.log(`Backup of removed rows: ${file}`)
        await prisma.flashcardProgress.deleteMany({ where: { id: { in: remove.map((r) => r.id) } } })
      }
    }
    if (APPLY) console.log('Added:', await unlockVideoModuleCards(user.id, topic, lesson.courseSlug, modules))
    const decks = await prisma.flashcardProgress.groupBy({ by: ['context'], where: { userId: user.id }, _count: true })
    console.log('Decks now:', decks.map((d) => `${d.context} ${d._count}`).join(', '))
  } else {
    // ── BACKFILL ──
    const rows = await prisma.videoLessonProgress.findMany({ select: { userId: true, lessonId: true, steps: true, user: { select: { name: true, lessonIncludeLowYield: true } } } })
    for (const row of rows) {
      const lesson = lessons.find((l) => l.id === row.lessonId)
      if (!lesson) continue
      const topic = await topicOf(lesson.topicSlug)
      if (!topic) continue
      const done = finishedModules(visibleSteps(lesson.steps, !!row.user.lessonIncludeLowYield), (row.steps ?? {}) as never)
      if (done.length === 0) continue
      const keys = done.flatMap((m) => m.videos.map((v) => videoDeckKey(m.lessonKey, v)))
      const have = await prisma.flashcardProgress.count({ where: { userId: row.userId, flashcard: { topicId: topic.id, videoDeck: { in: keys } } } })
      console.log(`${row.user.name}: ${topic.title} modules ${done.map((m) => m.module).join(', ')} → ${await countCards(topic.id, keys)} cards (${have} deck rows already)`)
      if (APPLY) console.log('   added', (await unlockVideoModuleCards(row.userId, topic, lesson.courseSlug, done))?.newCards ?? 0)
    }
  }
  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
