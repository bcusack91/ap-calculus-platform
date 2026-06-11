import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'
import { hasEntranceQuiz } from '../src/data/entrance-quizzes'
import { hasInteractiveLesson } from '../src/data/interactive-lessons/registry'

const prisma = new PrismaClient()

async function main() {
  const course = await prisma.course.findUnique({
    where: { slug: 'sat-prep' },
    include: {
      categories: {
        orderBy: { order: 'asc' },
        include: {
          topics: {
            orderBy: { order: 'asc' },
            select: {
              title: true,
              slug: true,
              _count: { select: { exampleProblems: true, flashcards: true } },
            },
          },
        },
      },
    },
  })

  if (!course) {
    console.log('No sat-prep course found in DB')
    return
  }

  console.log('=== SAT PREP STRUCTURE AUDIT ===\n')

  const missingEntrance: string[] = []
  const missingLesson: string[] = []
  let total = 0

  for (const cat of course.categories) {
    console.log(`\n### CATEGORY: ${cat.name}  (slug: ${cat.slug})`)
    for (const t of cat.topics) {
      total++
      const eq = hasEntranceQuiz(t.slug)
      const il = hasInteractiveLesson(t.slug)
      if (!eq) missingEntrance.push(`${cat.name} > ${t.title} (${t.slug})`)
      if (!il) missingLesson.push(`${cat.name} > ${t.title} (${t.slug})`)
      const flags = `${eq ? 'EQ✅' : 'EQ❌'} ${il ? 'IL✅' : 'IL❌'}`
      console.log(`  ${flags}  ${t.title}  [${t.slug}]  prob:${t._count.exampleProblems} fc:${t._count.flashcards}`)
    }
  }

  console.log(`\n\n=== SUMMARY (${total} topics) ===`)
  console.log(`\nTopics MISSING entrance quiz (${missingEntrance.length}):`)
  missingEntrance.forEach(s => console.log('  - ' + s))
  console.log(`\nTopics MISSING interactive lesson (${missingLesson.length}):`)
  missingLesson.forEach(s => console.log('  - ' + s))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
