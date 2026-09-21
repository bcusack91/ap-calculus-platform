/**
 * Audience for the back-to-school email, classified by what each account
 * actually studied. Read-only against whatever DATABASE_URL is loaded.
 *
 *   npx tsx scripts/back-to-school-audience.ts        # print bucket counts
 *
 * Eligibility (COPPA-conservative):
 *   - has an email, verified or signed in with Google, not unsubscribed
 *   - never a self-reported birth year that makes them under 13
 *   - EXCLUDED when most of their activity is in elementary/middle-school math
 *     (grade 4-8 math, pre-algebra); Algebra 1 and up counts as high school
 */
import type { PrismaClient } from '@prisma/client'

export type Track = 'ap' | 'sat' | 'act' | 'mcat' | 'hs-math' | 'college' | 'none'

export type AudienceMember = {
  userId: string
  email: string
  name: string | null
  createdAt: Date
  /** Courses studied, most activity first (course slugs). */
  courses: string[]
  primaryCourse: string | null
  track: Track
}

export type AudienceReport = {
  eligible: AudienceMember[]
  excluded: { reason: string; email: string }[]
}

/** Courses whose students are presumptively under 13. */
export const YOUNG_COURSES = new Set([
  'grade-4-math',
  'grade-5-math',
  'grade-6-math',
  'grade-7-math',
  'grade-8-math',
  'pre-algebra',
])

/** Diagnostic `category` prefix (before `-diagnostic-`) -> course slug. */
const DIAGNOSTIC_PREFIX: Record<string, string> = {
  'ap-bio': 'ap-biology',
  'ap-chem': 'ap-chemistry',
  'ap-physics1': 'ap-physics-1',
  'ap-physics2': 'ap-physics-2',
  'ap-physics-c-mech': 'ap-physics-c-mechanics',
  'ap-physics-c-em': 'ap-physics-c-em',
  'ap-micro': 'ap-microeconomics',
  'ap-macro': 'ap-macroeconomics',
  calcab: 'ap-calculus-ab',
  calcbc: 'ap-calculus-bc',
  'ap-english-lit': 'ap-english-literature',
  'ap-english-lang': 'ap-english-language',
  'ap-enviro': 'ap-environmental-science',
  'ap-psych': 'ap-psychology',
  'ap-csp': 'ap-computer-science-principles',
  'ap-csa': 'ap-computer-science-a',
  'ap-us-gov': 'ap-us-government',
  'ap-us-history': 'ap-us-history',
  'ap-world-history': 'ap-world-history',
  'ap-precalculus': 'ap-precalculus',
  'ap-stats': 'ap-statistics',
  'ap-human-geo': 'ap-human-geography',
  'ap-aas': 'ap-african-american-studies',
  algebra1: 'algebra-1',
  geometry: 'geometry',
  'grade8-math': 'grade-8-math',
  prealgebra: 'pre-algebra',
  'sat-full': 'sat-prep',
  act: 'act-prep',
  'mcat-full': 'mcat-prep',
}

export function diagnosticCourse(category: string): string | null {
  if (category.startsWith('sat-')) return 'sat-prep'
  const prefix = category.split('-diagnostic-')[0]
  return DIAGNOSTIC_PREFIX[prefix] ?? null
}

export function trackFor(course: string | null): Track {
  if (!course) return 'none'
  if (course.startsWith('ap-')) return 'ap'
  if (course === 'sat-prep') return 'sat'
  if (course === 'act-prep') return 'act'
  if (course === 'mcat-prep') return 'mcat'
  if (course.startsWith('organic-chemistry')) return 'college'
  return 'hs-math'
}

// A diagnostic or a full test is a stronger signal of what someone is studying
// for than a single lesson opened, so it carries more weight.
const WEIGHT = { diagnostic: 3, test: 3, exitQuiz: 2, unitOrFrq: 2, topic: 1 }

export async function loadBackToSchoolAudience(prisma: PrismaClient): Promise<AudienceReport> {
  const minBirthYear = new Date().getFullYear() - 13 // born after this => possibly under 13

  const users = await prisma.user.findMany({
    where: { email: { not: null } },
    select: {
      id: true,
      email: true,
      name: true,
      birthYear: true,
      emailVerified: true,
      createdAt: true,
      accounts: { select: { provider: true } },
    },
    orderBy: { createdAt: 'desc' },
  })
  const unsubscribed = new Set(
    (await prisma.emailSubscriber.findMany({ where: { unsubscribed: true }, select: { email: true } })).map((s) =>
      s.email.toLowerCase(),
    ),
  )

  // userId -> courseSlug -> weighted activity
  const activity = new Map<string, Map<string, number>>()
  const bump = (userId: string, course: string | null, w: number) => {
    if (!course) return
    let m = activity.get(userId)
    if (!m) activity.set(userId, (m = new Map()))
    m.set(course, (m.get(course) ?? 0) + w)
  }

  for (const d of await prisma.diagnosticTest.findMany({ select: { userId: true, category: true } })) {
    bump(d.userId, diagnosticCourse(d.category), WEIGHT.diagnostic)
  }
  const topicCourse = await prisma.$queryRawUnsafe<{ userId: string; slug: string; n: number }[]>(
    `select tp."userId", c.slug, count(*)::int n from "TopicProgress" tp
       join "Topic" t on t.id = tp."topicId" join "Category" ca on ca.id = t."categoryId"
       join "Course" c on c.id = ca."courseId" group by 1, 2`,
  )
  for (const r of topicCourse) bump(r.userId, r.slug, WEIGHT.topic * r.n)
  const exitCourse = await prisma.$queryRawUnsafe<{ userId: string; slug: string; n: number }[]>(
    `select e."userId", c.slug, count(*)::int n from "ExitQuizAttempt" e
       join "Topic" t on t.slug = e."topicSlug" join "Category" ca on ca.id = t."categoryId"
       join "Course" c on c.id = ca."courseId" group by 1, 2`,
  )
  for (const r of exitCourse) bump(r.userId, r.slug, WEIGHT.exitQuiz * r.n)
  for (const r of await prisma.unitTestAttempt.findMany({ select: { userId: true, courseSlug: true } })) {
    bump(r.userId, r.courseSlug, WEIGHT.unitOrFrq)
  }
  for (const r of await prisma.frqAttempt.findMany({ select: { userId: true, courseSlug: true } })) {
    bump(r.userId, r.courseSlug, WEIGHT.unitOrFrq)
  }
  for (const r of await prisma.satTestAttempt.findMany({ select: { userId: true } })) bump(r.userId, 'sat-prep', WEIGHT.test)
  for (const r of await prisma.mcatTestAttempt.findMany({ select: { userId: true } })) bump(r.userId, 'mcat-prep', WEIGHT.test)

  const eligible: AudienceMember[] = []
  const excluded: AudienceReport['excluded'] = []
  const seen = new Set<string>()

  for (const u of users) {
    const email = u.email!.trim()
    const key = email.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)

    // System and bot accounts (same skips as the May 2026 broadcast).
    if (key.endsWith('@studyai.com') || key.startsWith('ai-opponent@') || key.startsWith('noreply@') || key.startsWith('no-reply@')) {
      excluded.push({ reason: 'system account', email })
      continue
    }

    const google = u.accounts.some((a) => a.provider === 'google')
    if (!u.emailVerified && !google) { excluded.push({ reason: 'unverified email', email }); continue }
    if (unsubscribed.has(key)) { excluded.push({ reason: 'unsubscribed', email }); continue }
    if (u.birthYear != null && u.birthYear > minBirthYear) { excluded.push({ reason: 'under 13 (birth year)', email }); continue }

    const ranked = [...(activity.get(u.id) ?? new Map()).entries()].sort((a, b) => b[1] - a[1])
    const youngWeight = ranked.filter(([c]) => YOUNG_COURSES.has(c)).reduce((s, [, w]) => s + w, 0)
    const total = ranked.reduce((s, [, w]) => s + w, 0)
    // No birth year on file and mostly middle-school math: treat as a child.
    if (u.birthYear == null && total > 0 && youngWeight * 2 >= total) {
      excluded.push({ reason: 'mostly grade 4-8 / pre-algebra', email })
      continue
    }

    const courses = ranked.map(([c]) => c).filter((c) => !YOUNG_COURSES.has(c))
    const primaryCourse = courses[0] ?? null
    eligible.push({ userId: u.id, email, name: u.name, createdAt: u.createdAt, courses, primaryCourse, track: trackFor(primaryCourse) })
  }

  return { eligible, excluded }
}

if (process.argv[1]?.endsWith('back-to-school-audience.ts')) {
  ;(async () => {
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()
    try {
      const { eligible, excluded } = await loadBackToSchoolAudience(prisma)
      const count = <T,>(xs: T[], key: (x: T) => string) =>
        Object.entries(xs.reduce<Record<string, number>>((m, x) => ((m[key(x)] = (m[key(x)] ?? 0) + 1), m), {}))
          .sort((a, b) => b[1] - a[1])
          .map(([k, n]) => `  ${k}: ${n}`)
          .join('\n')
      console.log(`ELIGIBLE: ${eligible.length}\n${count(eligible, (m) => m.track)}`)
      console.log(`\nTop primary courses:\n${count(eligible.filter((m) => m.primaryCourse), (m) => m.primaryCourse!).split('\n').slice(0, 12).join('\n')}`)
      console.log(`\nEXCLUDED: ${excluded.length}\n${count(excluded, (x) => x.reason)}`)
      const noActivity = eligible.filter((m) => m.track === 'none')
      console.log(`\nNo-activity eligible by signup month:\n${count(noActivity, (m) => m.createdAt.toISOString().slice(0, 7))}`)
    } finally {
      await prisma.$disconnect()
    }
  })()
}
