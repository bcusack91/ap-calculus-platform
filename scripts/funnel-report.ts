/**
 * New-user activation funnel, by signup week. Read-only.
 *
 *   NODE_ENV=production npx tsx scripts/funnel-report.ts [weeks=8]
 *
 * Why from the database and not only GA4: GA only receives events from
 * visitors who accept analytics cookies, and at current traffic a few missing
 * visitors swing every percentage. These rows exist for everyone.
 *
 * Student funnel (signups who are not teachers): signed up → finished or
 * skipped onboarding → took any diagnostic → opened a lesson → took an exit
 * quiz → passed one (the 80% pass mark) → rated a flashcard → came back on a
 * second day (any activity after their first 24 hours).
 *
 * Teacher funnel: activated → created a class → a student joined → made an
 * assignment or class diagnostic.
 *
 * Run it before a UX change ships (baseline) and 2-4 weeks after.
 */
import '../src/lib/load-env'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const WEEKS = Number(process.argv[2]) || 8
const pct = (n: number, d: number) => (d ? `${Math.round((n / d) * 100)}%`.padStart(4) : '   -')

function weekStart(d: Date): string {
  const x = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()))
  x.setUTCDate(x.getUTCDate() - ((x.getUTCDay() + 6) % 7)) // Monday
  return x.toISOString().slice(0, 10)
}

async function main() {
  const since = new Date(Date.now() - WEEKS * 7 * 86_400_000)
  const users = await prisma.user.findMany({
    where: { createdAt: { gte: since } },
    select: { id: true, createdAt: true, role: true },
  })
  const ids = users.map((u) => u.id)
  const has = async (rows: Promise<{ userId: string }[]>) => new Set((await rows).map((r) => r.userId))

  const [onboarded, diag, lesson, exitAny, exitPass, cards, later, classOwners, memberships, assignments, classDiags] =
    await Promise.all([
      // A LearningPath row exists from signup; topicOrder is only written when
      // the onboarding wizard is finished or skipped (see api/onboarding).
      has(prisma.learningPath.findMany({ where: { userId: { in: ids }, topicOrder: { not: null } }, select: { userId: true } })),
      has(prisma.diagnosticTest.findMany({ where: { userId: { in: ids } }, select: { userId: true }, distinct: ['userId'] })),
      has(prisma.topicProgress.findMany({ where: { userId: { in: ids } }, select: { userId: true }, distinct: ['userId'] })),
      has(prisma.exitQuizAttempt.findMany({ where: { userId: { in: ids } }, select: { userId: true }, distinct: ['userId'] })),
      has(prisma.exitQuizAttempt.findMany({ where: { userId: { in: ids }, passed: true }, select: { userId: true }, distinct: ['userId'] })),
      has(prisma.flashcardProgress.findMany({ where: { userId: { in: ids }, reviewCount: { gt: 0 } }, select: { userId: true }, distinct: ['userId'] })),
      // "Came back": any topic progress, exit attempt or diagnostic more than a day after signup.
      prisma.$queryRawUnsafe<{ userId: string }[]>(
        `select distinct u.id as "userId" from "User" u
          where u.id = any($1) and (
            exists (select 1 from "TopicProgress" t where t."userId" = u.id and t."lastAccessed" > u."createdAt" + interval '1 day')
            or exists (select 1 from "ExitQuizAttempt" e where e."userId" = u.id and e."completedAt" > u."createdAt" + interval '1 day')
            or exists (select 1 from "DiagnosticTest" d where d."userId" = u.id and d."createdAt" > u."createdAt" + interval '1 day'))`,
        ids,
      ).then((r) => new Set(r.map((x) => x.userId))),
      prisma.classroom.findMany({ where: { teacherId: { in: ids } }, select: { id: true, teacherId: true } }),
      prisma.classroomMember.findMany({ where: { classroom: { teacherId: { in: ids } } }, select: { classroomId: true } }),
      prisma.assignment.findMany({ where: { classroom: { teacherId: { in: ids } } }, select: { classroomId: true } }),
      prisma.classDiagnostic.findMany({ where: { classroom: { teacherId: { in: ids } } }, select: { classroomId: true } }).catch(() => []),
    ])

  const classTeacher = new Map(classOwners.map((c) => [c.id, c.teacherId]))
  const teacherWith = (rows: { classroomId: string }[]) =>
    new Set(rows.map((r) => classTeacher.get(r.classroomId)).filter((x): x is string => !!x))
  const createdClass = new Set(classOwners.map((c) => c.teacherId))
  const hadStudent = teacherWith(memberships)
  const assigned = new Set([...teacherWith(assignments), ...teacherWith(classDiags)])

  const byWeek = new Map<string, typeof users>()
  for (const u of users) {
    const k = weekStart(u.createdAt)
    byWeek.set(k, [...(byWeek.get(k) ?? []), u])
  }

  console.log(`\nSTUDENTS (signups in the last ${WEEKS} weeks, teachers excluded)`)
  console.log('week        signed onboard  diag  lesson  exitQ  pass80  cards  back')
  let tot = [0, 0, 0, 0, 0, 0, 0, 0]
  for (const [week, list] of [...byWeek.entries()].sort()) {
    const s = list.filter((u) => u.role !== 'TEACHER' && u.role !== 'ADMIN').map((u) => u.id)
    const c = [s.length, ...[onboarded, diag, lesson, exitAny, exitPass, cards, later].map((set) => s.filter((id) => set.has(id)).length)]
    tot = tot.map((t, i) => t + c[i])
    console.log(`${week}  ${String(c[0]).padStart(5)}  ${c.slice(1).map((n) => pct(n, c[0])).join('    ')}`)
  }
  console.log(`total       ${String(tot[0]).padStart(5)}  ${tot.slice(1).map((n) => pct(n, tot[0])).join('    ')}`)
  console.log(`            counts: ${tot.join(' / ')}`)

  const teachers = users.filter((u) => u.role === 'TEACHER').map((u) => u.id)
  console.log(`\nTEACHERS (activated accounts created in the window: ${teachers.length})`)
  console.log(
    `created a class ${pct(teachers.filter((id) => createdClass.has(id)).length, teachers.length)}  ` +
      `a student joined ${pct(teachers.filter((id) => hadStudent.has(id)).length, teachers.length)}  ` +
      `assigned work ${pct(teachers.filter((id) => assigned.has(id)).length, teachers.length)}`,
  )
  await prisma.$disconnect()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
