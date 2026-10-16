/**
 * Remove AP topics and units the May 2027 exams do not test (owner rule:
 * "If the exam doesn't cover it, we shouldn't have it in the program"; the
 * test is each course's 2026-27 CED). The CED citation for every slug is in
 * the Phase 1 trim notes; the short reason is kept beside each entry here.
 *
 * Order matters:
 *   1. Re-parent the on-exam topics that sit inside a retiring unit.
 *   2. Delete the retired topics (cascades their flashcards, flashcard
 *      progress, topic progress and example problems; exit-quiz attempts are
 *      keyed by slug and are kept).
 *   3. Delete the retired units, but only when no topic outside
 *      RETIRED_AP_TOPICS is left in them (a Category delete cascades topics).
 *
 * Old URLs 308 to an on-exam topic or unit: topics through
 * src/lib/legacy-topic-redirects.ts, units through next.config.ts.
 * Runs last in prisma/seed-all.ts because older seeds recreate these rows.
 *
 *   npx tsx prisma/retire-ap-topics.ts                        # local DB (.env.local), applies
 *   DRY_RUN=1 npx tsx prisma/retire-ap-topics.ts               # report only
 *   NODE_ENV=production DRY_RUN=1 npx tsx prisma/retire-ap-topics.ts   # prod report
 *   NODE_ENV=production npx tsx prisma/retire-ap-topics.ts     # prod, applies
 */
import '../src/lib/load-env'
import { PrismaClient } from '@prisma/client'
import { REPARENTED_AP_TOPICS, RETIRED_AP_TOPICS, RETIRED_AP_UNITS } from '../src/data/retired-ap-topics'

async function main() {
  const prisma = new PrismaClient()
  const dryRun = process.env.DRY_RUN === '1'
  console.log(dryRun ? 'DRY RUN (no writes)' : 'APPLYING')

  console.log('\nRe-parent on-exam topics out of retiring units:')
  for (const [slug, { category, order }] of Object.entries(REPARENTED_AP_TOPICS)) {
    const topic = await prisma.topic.findUnique({ where: { slug }, select: { id: true, category: { select: { slug: true } } } })
    const target = await prisma.category.findUnique({ where: { slug: category }, select: { id: true } })
    if (!topic) {
      console.log(`  ${slug}: not present`)
      continue
    }
    if (!target) throw new Error(`target unit ${category} for ${slug} does not exist; aborting before any delete`)
    if (topic.category.slug === category) {
      console.log(`  ${slug}: already in ${category}`)
      continue
    }
    console.log(`  ${slug}: ${topic.category.slug} -> ${category}`)
    if (!dryRun) await prisma.topic.update({ where: { id: topic.id }, data: { categoryId: target.id, order } })
  }

  console.log('\nDelete retired topics:')
  for (const slug of Object.keys(RETIRED_AP_TOPICS)) {
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
      `  ${slug} ("${topic.title}"): ${cards} cards, ${cardProgress} card-progress, ${progress} topic-progress, ${examples} examples, ${exitAttempts} exit attempts (kept)`,
    )
    if (!dryRun) await prisma.topic.delete({ where: { id: topic.id } })
  }

  console.log('\nDelete retired units:')
  for (const [slug, { course }] of Object.entries(RETIRED_AP_UNITS)) {
    const unit = await prisma.category.findUnique({
      where: { slug },
      select: { id: true, name: true, course: { select: { slug: true } }, topics: { select: { slug: true } } },
    })
    if (!unit) {
      console.log(`  ${slug}: not present`)
      continue
    }
    if (unit.course?.slug !== course) throw new Error(`unit ${slug} belongs to ${unit.course?.slug}, expected ${course}`)
    // In a dry run the topics above were not deleted, so count only the ones that would survive.
    const left = unit.topics.map((t) => t.slug).filter((t) => !(t in RETIRED_AP_TOPICS) && !(t in REPARENTED_AP_TOPICS))
    if (left.length) {
      console.log(`  ${slug}: KEPT, still holds ${left.join(', ')}`)
      continue
    }
    console.log(`  ${slug} ("${unit.name}")`)
    if (!dryRun) await prisma.category.delete({ where: { id: unit.id } })
  }
  await prisma.$disconnect()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
