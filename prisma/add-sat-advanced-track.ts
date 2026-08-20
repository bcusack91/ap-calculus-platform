/**
 * Seed the SAT 700-800 advanced track: one category under sat-prep plus the
 * 26 `<base>-advanced` topics, with real study summaries as textContent
 * (assembled from the authored lessons by scripts/build-sat-advanced.ts into
 * prisma/sat-advanced-track-data.json). Idempotent upserts; textContent is
 * only set on create, never clobbered on update.
 *   npx tsx prisma/add-sat-advanced-track.ts   (NODE_ENV=production for prod)
 */
import '../src/lib/load-env'
import { PrismaClient } from '@prisma/client'
import trackData from './sat-advanced-track-data.json'

const prisma = new PrismaClient()

async function main() {
  const course = await prisma.course.findUnique({ where: { slug: 'sat-prep' }, select: { id: true } })
  if (!course) throw new Error('sat-prep course not found — seed courses first')

  const maxOrder = await prisma.category.aggregate({
    where: { courseId: course.id },
    _max: { order: true },
  })

  const category = await prisma.category.upsert({
    where: { slug: 'sat-700-800-track' },
    update: {},
    create: {
      slug: 'sat-700-800-track',
      name: 'SAT 700–800 Track',
      description: 'Advanced modules for hard-track students: the question patterns, traps, and speed techniques that separate 700 from 800.',
      order: (maxOrder._max.order ?? 0) + 1,
      icon: '🏔️',
      courseId: course.id,
    },
  })

  let created = 0, updated = 0
  for (const [index, topic] of (trackData as { slug: string; title: string; summary: string }[]).entries()) {
    const existing = await prisma.topic.findUnique({ where: { slug: topic.slug }, select: { id: true } })
    await prisma.topic.upsert({
      where: { slug: topic.slug },
      update: {
        title: topic.title,
        order: index + 1,
        categoryId: category.id,
      },
      create: {
        slug: topic.slug,
        title: topic.title,
        description: `700-800 level patterns, traps, and speed techniques.`,
        order: index + 1,
        categoryId: category.id,
        isPremium: false,
        textContent: topic.summary,
      },
    })
    if (existing) updated++
    else created++
  }
  console.log(`SAT 700-800 track: category ready, topics created ${created}, updated ${updated}`)
  await prisma.$disconnect()
}

main().catch((e) => { console.error(e); process.exit(1) })
