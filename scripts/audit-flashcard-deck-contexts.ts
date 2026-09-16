import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'

/**
 * READ-ONLY audit: does every course study mode hold only that course's cards?
 *
 * A `course:<slug>` deck must contain cards from that course alone. Until the
 * unlock-routing fix, cards landed in whatever mode was ACTIVE at unlock time,
 * so studying SAT while in MCAT mode filed SAT cards into the MCAT deck.
 *
 *   npx tsx scripts/audit-flashcard-deck-contexts.ts            # all users (local)
 *   NODE_ENV=production PROD=1 npx tsx scripts/audit-flashcard-deck-contexts.ts [email]
 */
const prisma = new PrismaClient()

async function main() {
  const email = process.argv[2]
  const users = await prisma.user.findMany({
    where: email ? { email } : { flashcardProgress: { some: { context: { startsWith: 'course:' } } } },
    select: { id: true, email: true, studyContext: true },
  })
  if (users.length === 0) return console.log('no matching users')

  let offenders = 0
  for (const user of users) {
    const rows = await prisma.flashcardProgress.findMany({
      where: { userId: user.id },
      select: {
        context: true,
        reviewCount: true,
        flashcard: { select: { topic: { select: { category: { select: { course: { select: { slug: true } } } } } } } },
      },
    })
    if (rows.length === 0) continue

    const byContext = new Map<string, Map<string, { total: number; reviewed: number }>>()
    for (const row of rows) {
      const course = row.flashcard.topic?.category?.course?.slug ?? '(no course)'
      const courses = byContext.get(row.context) ?? new Map()
      const tally = courses.get(course) ?? { total: 0, reviewed: 0 }
      tally.total++
      if (row.reviewCount > 0) tally.reviewed++
      courses.set(course, tally)
      byContext.set(row.context, courses)
    }

    const lines: string[] = []
    for (const [context, courses] of [...byContext].sort()) {
      const total = [...courses.values()].reduce((sum, t) => sum + t.total, 0)
      const parts = [...courses]
        .sort((a, b) => b[1].total - a[1].total)
        .map(([course, t]) => {
          const foreign = context.startsWith('course:') && course !== context.slice('course:'.length)
          return `${foreign ? 'FOREIGN ' : ''}${course}=${t.total} (${t.reviewed} reviewed)`
        })
      const bad = context.startsWith('course:') && [...courses.keys()].some((c) => c !== context.slice('course:'.length))
      if (bad) offenders++
      lines.push(`    ${bad ? '✗' : '✓'} ${context}: ${total} cards :: ${parts.join('  ')}`)
    }
    console.log(`\n  ${user.email} (active: ${user.studyContext ?? 'personal'})`)
    console.log(lines.join('\n'))
  }
  console.log(`\n${offenders} course deck(s) hold foreign-course cards.`)
}

main().finally(() => prisma.$disconnect())
