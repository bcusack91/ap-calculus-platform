import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const course = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' },
    include: {
      categories: {
        orderBy: { order: 'asc' },
        include: {
          topics: {
            orderBy: { order: 'asc' },
            include: {
              _count: { select: { exampleProblems: true, flashcards: true, quizzes: true } },
            },
          },
        },
      },
    },
  })

  if (!course) {
    console.log('AP Chemistry course not found')
    return
  }

  type Row = {
    category: string
    slug: string
    title: string
    textLen: number
    problems: number
    flashcards: number
    quizzes: number
    score: number
    issues: string[]
  }

  const rows: Row[] = []

  for (const cat of course.categories) {
    for (const t of cat.topics) {
      const textLen = (t.textContent ?? '').length
      const problems = t._count.exampleProblems
      const flashcards = t._count.flashcards
      const quizzes = t._count.quizzes
      const issues: string[] = []
      if (textLen < 1500) issues.push(`thin-text(${textLen})`)
      if (problems < 3) issues.push(`few-problems(${problems})`)
      if (flashcards < 5) issues.push(`few-flashcards(${flashcards})`)
      if (quizzes === 0) issues.push('no-quiz')
      // Score: lower = worse
      const score =
        (textLen >= 3000 ? 2 : textLen >= 1500 ? 1 : 0) +
        (problems >= 5 ? 2 : problems >= 3 ? 1 : 0) +
        (flashcards >= 10 ? 2 : flashcards >= 5 ? 1 : 0) +
        (quizzes >= 1 ? 2 : 0)
      rows.push({
        category: cat.title,
        slug: t.slug,
        title: t.title,
        textLen,
        problems,
        flashcards,
        quizzes,
        score,
        issues,
      })
    }
  }

  // Sort worst first
  rows.sort((a, b) => a.score - b.score || a.textLen - b.textLen)

  console.log('\n=== AP CHEMISTRY TOPIC AUDIT ===')
  console.log(`Total topics: ${rows.length}\n`)
  console.log('Score legend: max 8 (text + problems + flashcards + quizzes, 0-2 each)')
  console.log('---')
  console.log(
    ['Score', 'Text', 'Probs', 'Flash', 'Quiz', 'Slug', 'Issues'].join('\t')
  )
  for (const r of rows) {
    console.log(
      [
        r.score,
        r.textLen,
        r.problems,
        r.flashcards,
        r.quizzes,
        r.slug,
        r.issues.join(','),
      ].join('\t')
    )
  }

  const failing = rows.filter((r) => r.score <= 4)
  console.log(`\n=== FAILING (score <=4): ${failing.length} topics ===`)
  for (const r of failing) {
    console.log(`- [${r.category}] ${r.slug} :: ${r.issues.join(', ')}`)
  }

  await prisma.$disconnect()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
