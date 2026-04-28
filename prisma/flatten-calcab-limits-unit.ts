/**
 * AP Calculus AB — Limits & Continuity unit FLATTENING.
 *
 * Corrects the previous reorg (reorg-calcab-limits-unit.ts) to match the
 * chemistry-style layout the user actually wants: on the course page, the
 * category header should show ALL topics in that unit directly underneath,
 * not a single hub that has to be clicked into.
 *
 * What this script does (idempotent):
 *
 *   1. Finds the hub topic `limits-continuity-calcab` and its category.
 *   2. Finds every topic in AP Calc AB whose parentTopicId == hub.id and:
 *      - clears parentTopicId (so they show on the course page as roots)
 *      - sets categoryId = hub.categoryId (in case any are stragglers)
 *   3. Renumbers the category so the hub is order=1 (overview at top) and
 *      the 18 granular topics follow at order 2…N in their previous
 *      relative order.
 *   4. If the now-empty original "Limits and Continuity" category still
 *      exists (e.g. on a re-run), deletes it.
 *
 * Run with:
 *   set -a && source .env && set +a && npx tsx prisma/flatten-calcab-limits-unit.ts
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const HUB_SLUG = 'limits-continuity-calcab'
const COURSE_SLUG = 'ap-calculus-ab'
const LEGACY_CATEGORY_NAME = 'Limits and Continuity'

async function main() {
  console.log('🔧 Flattening AP Calculus AB Limits unit…\n')

  const course = await prisma.course.findUnique({ where: { slug: COURSE_SLUG } })
  if (!course) throw new Error(`Course not found: ${COURSE_SLUG}`)

  const hub = await prisma.topic.findUnique({ where: { slug: HUB_SLUG } })
  if (!hub) throw new Error(`Hub topic not found: ${HUB_SLUG}`)
  console.log(`Hub: ${hub.slug} (id=${hub.id}, categoryId=${hub.categoryId})`)

  // Find all topics currently parented under the hub (the 18 we re-parented).
  const subtopics = await prisma.topic.findMany({
    where: { parentTopicId: hub.id },
    orderBy: { order: 'asc' },
  })
  console.log(`Found ${subtopics.length} subtopics to flatten back to root level.`)

  // 1. Move hub to order=1.
  await prisma.topic.update({
    where: { id: hub.id },
    data: { order: 1 },
  })

  // 2. Un-parent each subtopic, ensure it's in the hub's category, renumber 2..N.
  let order = 2
  for (const t of subtopics) {
    await prisma.topic.update({
      where: { id: t.id },
      data: {
        parentTopicId: null,
        categoryId: hub.categoryId,
        order,
      },
    })
    console.log(`  ↳ flattened: ${t.slug} (order=${order})`)
    order++
  }

  // 3. Defensive: if the legacy "Limits and Continuity" category still exists, delete if empty.
  const legacy = await prisma.category.findFirst({
    where: { courseId: course.id, name: LEGACY_CATEGORY_NAME },
  })
  if (legacy) {
    const remaining = await prisma.topic.count({ where: { categoryId: legacy.id } })
    if (remaining === 0) {
      await prisma.category.delete({ where: { id: legacy.id } })
      console.log(`✅ Deleted empty legacy category "${LEGACY_CATEGORY_NAME}".`)
    } else {
      console.log(`⚠️  Legacy category "${LEGACY_CATEGORY_NAME}" still has ${remaining} topics; not deleting.`)
    }
  }

  console.log('\n🎉 Done. Course page will now show all Limits topics directly under the category header.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
