/**
 * One-shot: delete the empty legacy `organic-chemistry` course row.
 *
 * It was superseded by organic-chemistry-1 and -2 and carries no curriculum
 * (0 categories, 0 topics), but still appeared as a redundant third Organic
 * Chemistry entry in the catalog and nav. The /organic-chemistry page survives
 * as a chooser routing to the two real courses.
 *
 * Run:  npx tsx scripts/delete-legacy-ochem-course.ts
 *
 * Guard: re-checks that the row is genuinely empty and that no user data
 * references it. Aborts without deleting anything if that is not true.
 */
import dotenv from 'dotenv'
dotenv.config({ path: '.env', override: true })
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const SLUG = 'organic-chemistry'

async function main() {
  console.log('DB host:', (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0], '\n')

  const course = await prisma.course.findUnique({ where: { slug: SLUG }, select: { id: true, name: true } })
  if (!course) { console.log('Already gone — nothing to do.'); return }

  const [categories, topics, plans] = await Promise.all([
    prisma.category.count({ where: { courseId: course.id } }),
    prisma.topic.count({ where: { category: { courseId: course.id } } }),
    prisma.studyPlan.count({ where: { courseSlug: SLUG } }),
  ])
  console.log(`"${course.name}"`)
  console.log(`  categories  ${categories}`)
  console.log(`  topics      ${topics}`)
  console.log(`  studyPlans  ${plans}`)

  if (categories || topics || plans) {
    console.error('\nABORT: this course is not empty. Nothing deleted.')
    process.exit(1)
  }

  await prisma.course.delete({ where: { id: course.id } })
  console.log('\nDeleted.')

  const remaining = await prisma.course.findMany({
    where: { slug: { startsWith: 'organic-chemistry' } },
    select: { slug: true, name: true },
  })
  console.log('Remaining organic chemistry courses:')
  remaining.forEach(c => console.log(`  ${c.slug} — "${c.name}"`))
  console.log(`Total courses now: ${await prisma.course.count()}`)
}

main().catch(e => { console.error(e); process.exit(1) }).finally(() => prisma.$disconnect())
