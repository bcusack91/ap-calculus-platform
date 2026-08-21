/**
 * Seed the SAT Core Skills track: one category under sat-prep plus the 26
 * `<base>-core-skills` topics, with plain-language summaries as textContent
 * (assembled by scripts/build-sat-core-skills.ts into
 * prisma/sat-core-skills-track-data.json). Idempotent upserts; textContent is
 * only set on create, never clobbered on update.
 *   npx tsx prisma/add-sat-core-skills-track.ts   (NODE_ENV=production for prod)
 */
import '../src/lib/load-env'
import { PrismaClient } from '@prisma/client'
import trackData from './sat-core-skills-track-data.json'

const prisma = new PrismaClient()

async function main() {
  const course = await prisma.course.findUnique({ where: { slug: 'sat-prep' }, select: { id: true } })
  if (!course) throw new Error('sat-prep course not found — seed courses first')

  const maxOrder = await prisma.category.aggregate({
    where: { courseId: course.id },
    _max: { order: true },
  })

  const category = await prisma.category.upsert({
    where: { slug: 'sat-core-skills-track' },
    update: {},
    create: {
      slug: 'sat-core-skills-track',
      name: 'SAT Core Skills Track',
      description: 'Short, step-by-step modules covering the fundamentals — the skills every SAT question is built on.',
      order: (maxOrder._max.order ?? 0) + 1,
      icon: '🧱',
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
        description: 'The core idea, one worked example, and short practice.',
        order: index + 1,
        categoryId: category.id,
        isPremium: false,
        textContent: topic.summary,
      },
    })
    if (existing) updated++
    else created++
  }
  console.log(`SAT Core Skills track: category ready, topics created ${created}, updated ${updated}`)
  await prisma.$disconnect()
}

main().catch((e) => { console.error(e); process.exit(1) })
