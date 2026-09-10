import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'
import { scoreLabelFromResults } from '@/lib/class-plan-config'

interface Ctx { params: Promise<{ id: string }> }

/**
 * Assigned class diagnostics — "everyone takes Diagnostic 1 before Thursday".
 *
 * POST {courseKey, dueDate?} generates the course's SHORT diagnostic ONCE and
 * freezes it (owner decision: identical questions for the whole roster, so
 * results are directly comparable). Students take it through the course's
 * normal diagnostic page (?assigned=<id>), which submits with
 * classDiagnosticId — scoring, personal recommendations, flashcard feeds, the
 * retake gate, and the class plan all work unchanged.
 *
 * GET lists each assigned diagnostic with per-student status and aggregate
 * results (avg score + domain averages across the identical test).
 */

const GENERATABLE: Record<string, { label: string; page: string }> = {
  mcat: { label: 'MCAT', page: '/mcat-diagnostic' },
  sat: { label: 'SAT', page: '/sat-diagnostic' },
}

/** MCAT results JSON carries the four 118-132 section scores as flat fields. */
const MCAT_SECTIONS: { short: string; field: string }[] = [
  { short: 'C/P', field: 'chemPhysScore' },
  { short: 'CARS', field: 'carsScore' },
  { short: 'B/B', field: 'bioBiochemScore' },
  { short: 'P/S', field: 'psychSocScore' },
]

function mcatSections(results: unknown): { short: string; scaled: number }[] | null {
  if (!results || typeof results !== 'object') return null
  const r = results as Record<string, unknown>
  const sections = MCAT_SECTIONS.flatMap(({ short, field }) =>
    typeof r[field] === 'number' ? [{ short, scaled: r[field] as number }] : []
  )
  return sections.length === MCAT_SECTIONS.length ? sections : null
}

export async function GET(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const access = await requireClassroomAccess(id)
  if ('error' in access) return access.error

  const [diagnostics, members] = await Promise.all([
    prisma.classDiagnostic.findMany({
      where: { classroomId: id },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true, courseKey: true, title: true, dueDate: true, createdAt: true,
        attempts: { select: { userId: true, createdAt: true, results: true } },
      },
    }),
    prisma.classroomMember.findMany({
      where: { classroomId: id, isActive: true },
      select: { userId: true, nickname: true, user: { select: { name: true } } },
    }),
  ])
  const nameOf = new Map(members.map(m => [m.userId, m.nickname || m.user.name || 'Student']))

  // Retake-gate waiver state (MCAT only): a waiver is "active" (unused) while
  // User.diagnosticGateWaivedAt is NEWER than the student's latest
  // mcat-full-diagnostic attempt — the same comparison plan-status makes.
  const memberIds = members.map(m => m.userId)
  const hasMcat = diagnostics.some(d => d.courseKey === 'mcat')
  const waivedAtByUser = new Map<string, Date>()
  const latestMcatByUser = new Map<string, Date>()
  if (hasMcat && memberIds.length > 0) {
    const [waivers, latestMcat] = await Promise.all([
      prisma.user.findMany({
        where: { id: { in: memberIds }, diagnosticGateWaivedAt: { not: null } },
        select: { id: true, diagnosticGateWaivedAt: true },
      }),
      prisma.diagnosticTest.groupBy({
        by: ['userId'],
        where: { userId: { in: memberIds }, category: 'mcat-full-diagnostic' },
        _max: { createdAt: true },
      }),
    ])
    for (const w of waivers) if (w.diagnosticGateWaivedAt) waivedAtByUser.set(w.id, w.diagnosticGateWaivedAt)
    for (const l of latestMcat) if (l._max.createdAt) latestMcatByUser.set(l.userId, l._max.createdAt)
  }

  return NextResponse.json({
    diagnostics: diagnostics.map(d => {
      // First attempt per student counts (retaking an assigned test is rare
      // but possible — the assigned score is the first sitting). All attempts
      // are kept per student, oldest-first, so retake deltas can be computed.
      const firstByUser = new Map<string, { createdAt: Date; results: unknown }>()
      const attemptsByUser = new Map<string, { createdAt: Date; results: unknown }[]>()
      for (const a of [...d.attempts].sort((x, y) => x.createdAt.getTime() - y.createdAt.getTime())) {
        if (!firstByUser.has(a.userId)) firstByUser.set(a.userId, a)
        const list = attemptsByUser.get(a.userId) ?? []
        list.push(a)
        attemptsByUser.set(a.userId, list)
      }
      const estimatedScoreOf = (results: unknown): number | null => {
        const v = (results as { estimatedScore?: unknown } | null | undefined)?.estimatedScore
        return typeof v === 'number' ? v : null
      }
      const students = members.map(m => {
        const attempt = firstByUser.get(m.userId)
        const results = attempt?.results as { percentage?: unknown; estimatedScore?: unknown; mathScore?: unknown; rwScore?: unknown } | undefined
        // Retake delta: latest attempt vs the one before it (both need a
        // real-scale estimatedScore for the difference to mean anything).
        const all = attemptsByUser.get(m.userId) ?? []
        const latestScore = all.length > 0 ? estimatedScoreOf(all[all.length - 1].results) : null
        const previousScore = all.length >= 2 ? estimatedScoreOf(all[all.length - 2].results) : null
        const scoreDelta = latestScore !== null && previousScore !== null ? latestScore - previousScore : null
        // MCAT waiver: set, and not yet consumed by a newer attempt.
        const waivedAt = d.courseKey === 'mcat' ? waivedAtByUser.get(m.userId) : undefined
        const latestMcatAt = latestMcatByUser.get(m.userId)
        return {
          userId: m.userId,
          name: nameOf.get(m.userId) ?? 'Student',
          takenAt: attempt?.createdAt ?? null,
          scoreLabel: attempt ? scoreLabelFromResults(attempt.results) : null,
          percentage: typeof results?.percentage === 'number' ? results.percentage : null,
          estimatedScore: typeof results?.estimatedScore === 'number' ? results.estimatedScore : null,
          mathScore: typeof results?.mathScore === 'number' ? results.mathScore : null,
          rwScore: typeof results?.rwScore === 'number' ? results.rwScore : null,
          // MCAT: the four 118-132 section scaled scores of the first sitting.
          sections: d.courseKey === 'mcat' ? mcatSections(attempt?.results) : null,
          attemptCount: all.length,
          latestEstimatedScore: latestScore,
          scoreDelta,
          retakeWaiverActive: !!waivedAt && (!latestMcatAt || waivedAt.getTime() > latestMcatAt.getTime()),
        }
      }).sort((a, b) => a.name.localeCompare(b.name))

      // Domain aggregate across everyone who took it (same questions → fair).
      const domainTotals = new Map<string, { sum: number; n: number }>()
      for (const a of firstByUser.values()) {
        const domains = (a.results as { domains?: { domainName?: string; percentage?: number }[] })?.domains
        if (!Array.isArray(domains)) continue
        for (const dom of domains) {
          if (typeof dom?.domainName !== 'string' || typeof dom?.percentage !== 'number') continue
          const t = domainTotals.get(dom.domainName) ?? { sum: 0, n: 0 }
          t.sum += dom.percentage
          t.n++
          domainTotals.set(dom.domainName, t)
        }
      }
      const taken = students.filter(s => s.takenAt !== null)
      const avgPercentage = taken.length > 0
        ? Math.round(taken.reduce((s, x) => s + (x.percentage ?? 0), 0) / taken.length)
        : null
      // Real test-scale averages (owner request): SAT reports 400–1600 with
      // Math and R&W section scores; MCAT reports 472–528. Averages only over
      // attempts that actually carry the field.
      const avgOf = (vals: (number | null)[]) => {
        const nums = vals.filter((v): v is number => typeof v === 'number')
        return nums.length > 0 ? Math.round(nums.reduce((a, b) => a + b, 0) / nums.length) : null
      }
      // MCAT: per-section (118-132) class averages, in C/P·CARS·B/B·P/S order,
      // over attempts that carry all four section scores.
      const sectionAverages = d.courseKey === 'mcat'
        ? MCAT_SECTIONS.map(({ short }, i) => ({
            short,
            avg: avgOf(taken.map(x => x.sections?.[i]?.scaled ?? null)),
          })).filter((s): s is { short: string; avg: number } => s.avg !== null)
        : []
      const scoreAverages = {
        overall: avgOf(taken.map(x => x.estimatedScore)),
        math: avgOf(taken.map(x => x.mathScore)),
        rw: avgOf(taken.map(x => x.rwScore)),
        sections: sectionAverages.length === MCAT_SECTIONS.length ? sectionAverages : null,
      }

      return {
        id: d.id,
        courseKey: d.courseKey,
        courseLabel: GENERATABLE[d.courseKey]?.label ?? d.courseKey,
        title: d.title,
        dueDate: d.dueDate,
        createdAt: d.createdAt,
        takenCount: taken.length,
        totalStudents: members.length,
        avgPercentage,
        scoreAverages,
        domainAverages: [...domainTotals.entries()]
          .map(([name, t]) => ({ name, avg: Math.round(t.sum / t.n) }))
          .sort((a, b) => a.avg - b.avg),
        students,
      }
    }),
    assignableCourses: Object.entries(GENERATABLE).map(([key, v]) => ({ key, label: v.label })),
  }, { headers: { 'Cache-Control': 'private, no-store' } })
}

export async function POST(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const access = await requireClassroomAccess(id)
  if ('error' in access) return access.error

  const body = await req.json().catch(() => ({}))
  const courseKey = typeof body?.courseKey === 'string' ? body.courseKey : ''
  if (!GENERATABLE[courseKey]) {
    return NextResponse.json(
      { error: `Assignable diagnostics are available for: ${Object.keys(GENERATABLE).join(', ')}` },
      { status: 400 },
    )
  }
  let dueDate: Date | null = null
  if (body?.dueDate) {
    const d = new Date(body.dueDate)
    if (!isNaN(d.getTime())) dueDate = d
  }

  // Generate the course's short diagnostic ONCE — this frozen payload is what
  // every student in the class will see.
  let testData: unknown
  if (courseKey === 'mcat') {
    const { generateMCATDiagnosticTest } = await import('@/data/mcat-practice/diagnostic-generator')
    testData = await generateMCATDiagnosticTest({ excludeQuestionIds: new Set<string>() })
  } else {
    const { generateDiagnosticTest } = await import('@/data/sat-practice/diagnostic-generator')
    testData = await generateDiagnosticTest()
  }

  const count = await prisma.classDiagnostic.count({ where: { classroomId: id, courseKey } })
  const diagnostic = await prisma.classDiagnostic.create({
    data: {
      classroomId: id,
      courseKey,
      title: `Diagnostic ${count + 1}`,
      testData: testData as object,
      dueDate,
    },
    select: { id: true, title: true, courseKey: true, dueDate: true },
  })
  return NextResponse.json({ diagnostic })
}
