/**
 * Generic per-course content audit.
 *
 * Usage:
 *   npx tsx scripts/audit-course.ts <course-slug> [<course-slug> ...]
 *
 * For each course it scores every topic on:
 *   - text length
 *   - example problems
 *   - flashcards
 *   - quizzes
 *   - presence of an interactive lesson in the registry
 *
 * Sets exit code 0 always; this is a reporting tool.
 */

import { PrismaClient } from '@prisma/client'
import { hasInteractiveLesson } from '../src/data/interactive-lessons/registry'

const prisma = new PrismaClient()

type Row = {
  category: string
  slug: string
  title: string
  textLen: number
  problems: number
  flashcards: number
  quizzes: number
  hasLesson: boolean
  score: number
  issues: string[]
}

async function auditCourse(courseSlug: string) {
  const course = await prisma.course.findUnique({
    where: { slug: courseSlug },
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
    console.log(`\n[!] Course not found: ${courseSlug}`)
    return
  }

  const rows: Row[] = []

  for (const cat of course.categories) {
    for (const t of cat.topics) {
      const textLen = (t.textContent ?? '').length
      const problems = t._count.exampleProblems
      const flashcards = t._count.flashcards
      const quizzes = t._count.quizzes
      const hasLesson = hasInteractiveLesson(t.slug)
      const issues: string[] = []
      if (!hasLesson) issues.push('NO-LESSON')
      if (textLen < 1500) issues.push(`thin-text(${textLen})`)
      if (problems < 3) issues.push(`few-problems(${problems})`)
      if (flashcards < 5) issues.push(`few-flashcards(${flashcards})`)
      if (quizzes === 0) issues.push('no-quiz')
      const score =
        (hasLesson ? 2 : 0) +
        (textLen >= 3000 ? 2 : textLen >= 1500 ? 1 : 0) +
        (problems >= 5 ? 2 : problems >= 3 ? 1 : 0) +
        (flashcards >= 10 ? 2 : flashcards >= 5 ? 1 : 0) +
        (quizzes >= 1 ? 2 : 0)
      rows.push({
        category: cat.name,
        slug: t.slug,
        title: t.title,
        textLen,
        problems,
        flashcards,
        quizzes,
        hasLesson,
        score,
        issues,
      })
    }
  }

  rows.sort((a, b) => a.score - b.score || a.textLen - b.textLen)

  console.log(`\n\n========== ${course.name.toUpperCase()} (${courseSlug}) ==========`)
  console.log(`Total topics: ${rows.length} (max score 10)\n`)
  console.log(['Score', 'Lesson', 'Text', 'Probs', 'Flash', 'Quiz', 'Slug', 'Issues'].join('\t'))
  for (const r of rows) {
    console.log(
      [
        r.score,
        r.hasLesson ? 'Y' : 'N',
        r.textLen,
        r.problems,
        r.flashcards,
        r.quizzes,
        r.slug,
        r.issues.join(','),
      ].join('\t')
    )
  }

  const noLesson = rows.filter(r => !r.hasLesson)
  const failing = rows.filter(r => r.score <= 4)

  console.log(`\n--- TOPICS WITHOUT INTERACTIVE LESSON: ${noLesson.length} ---`)
  for (const r of noLesson) {
    console.log(`- [${r.category}] ${r.slug} :: text=${r.textLen}, probs=${r.problems}, flash=${r.flashcards}`)
  }

  console.log(`\n--- FAILING (score <=4): ${failing.length} ---`)
  for (const r of failing) {
    console.log(`- [${r.category}] ${r.slug} :: ${r.issues.join(', ')}`)
  }
}

async function main() {
  const args = process.argv.slice(2)
  const slugs =
    args.length > 0
      ? args
      : ['ap-biology', 'ap-european-history', 'ap-microeconomics', 'ap-human-geography', 'ap-us-government']

  for (const slug of slugs) {
    await auditCourse(slug)
  }

  await prisma.$disconnect()
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
