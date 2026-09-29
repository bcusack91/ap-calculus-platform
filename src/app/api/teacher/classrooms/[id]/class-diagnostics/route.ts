import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'
import { CLASS_PLAN_COURSES, classPlanCourse, scoreLabelFromResults } from '@/lib/class-plan-config'
import { isOpenClassDiagnostic, OPEN_DIAGNOSTIC_TEST_DATA, defaultDiagnosticCourseKey } from '@/lib/class-diagnostic-open'
import { SAT_DIAGNOSTIC_SCORE_SD } from '@/lib/sat-scoring'

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
 * results (avg score + domain averages across the identical test), plus the
 * D1→D2→D3 change for each student and for the class.
 *
 * DELETE ?diagnosticId=… removes an assignment (see the handler for the
 * attempt-safety rules).
 */

const GENERATABLE: Record<string, { label: string; page: string }> = {
  mcat: { label: 'MCAT', page: '/mcat-diagnostic' },
  sat: { label: 'SAT', page: '/sat-diagnostic' },
}

/**
 * Every other course with a diagnostic can be assigned too, as an OPEN class
 * diagnostic (src/lib/class-diagnostic-open.ts): no frozen test — each student
 * takes the course's standard diagnostic, and any sitting after the
 * assignment was made counts. Same banner, due date and results panel.
 */
const labelFor = (courseKey: string) => GENERATABLE[courseKey]?.label ?? classPlanCourse(courseKey)?.label ?? courseKey

/* ------------------------------------------------------------------ */
/*  Growth across successive diagnostics                               */
/* ------------------------------------------------------------------ */

/**
 * Test–retest sd of ONE sitting's total score, in the course's own scale.
 *
 * MCAT 5.5 is measured on this 45-item diagnostic: a student of unchanged
 * ability lands anywhere in a ~25-point window across repeat sittings. SAT is
 * measured the same way: sd ≈ 80 on the 36-item screen, so one student's move
 * is noise inside about ±225, and a class average of 20 inside about ±50.
 *
 * The sd of a CHANGE between two sittings is sd·√2, so a single student's
 * move only clears noise past ~2·sd·√2 (MCAT ≈ 16 points). Class averages of
 * n students clear it √n sooner. Anything inside the band must be presented as
 * noise, never as progress.
 */
// Per-sitting sd of OUR diagnostic, measured by re-simulating a fixed-ability
// student (MCAT 2026-09-16; SAT 2026-09-25, see SAT_DIAGNOSTIC_SCORE_SD). The
// SAT value used to be 30 — College Board's SEM for a full test — which made a
// 36-question screen's noise look like real growth.
const SCORE_SD_BY_COURSE: Record<string, number> = { mcat: 5.5, sat: SAT_DIAGNOSTIC_SCORE_SD }

function noiseBandFor(courseKey: string, n = 1): number {
  const sd = SCORE_SD_BY_COURSE[courseKey]
  if (!sd) return 0
  return Math.max(1, Math.round((2 * sd * Math.SQRT2) / Math.sqrt(Math.max(1, n))))
}

/* ------------------------------------------------------------------ */
/*  Frozen-test helpers (question reuse + auto-numbering)              */
/* ------------------------------------------------------------------ */

type FrozenQuestion = { id?: unknown; question?: unknown; passage?: unknown }

/** The questions of a frozen testData payload, defensively (legacy shapes). */
function frozenQuestions(testData: unknown): FrozenQuestion[] {
  const qs = (testData as { questions?: unknown } | null | undefined)?.questions
  if (!Array.isArray(qs)) return []
  return qs.filter((q): q is FrozenQuestion => !!q && typeof q === 'object')
}

/**
 * Titles are auto-numbered "Diagnostic N". Counting rows breaks as soon as one
 * is deleted (delete Diagnostic 1 of 2 → the next assignment is also called
 * "Diagnostic 2"), so number from the highest number already used instead. A
 * gap is fine; a duplicate title is not — students and the growth view both
 * identify sittings by title.
 */
function nextDiagnosticTitle(existingTitles: string[]): string {
  let max = 0
  for (const t of existingTitles) {
    const m = /(\d+)\s*$/.exec(t ?? '')
    if (m) max = Math.max(max, parseInt(m[1], 10))
  }
  return `Diagnostic ${max + 1}`
}

/**
 * A due date the teacher picked in a `<input type="date">` is a DAY, and the
 * work is due at the END of it. `new Date('2026-09-18')` is UTC midnight — the
 * FIRST instant of the day — which made the student banner flip to "Overdue"
 * at 8pm ET the evening BEFORE the due date. The panel sends the teacher's
 * `getTimezoneOffset()` so the deadline lands at 23:59:59.999 in their own
 * timezone; without an offset we fall back to end of day UTC. A full ISO
 * datetime is trusted as-is.
 */
function resolveDueDate(input: unknown, tzOffsetMinutes: unknown): Date | null {
  if (typeof input !== 'string' || input.trim() === '') return null
  const raw = input.trim()
  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(raw)
  if (dateOnly) {
    const [, y, m, d] = dateOnly
    const endOfDayUTC = Date.UTC(Number(y), Number(m) - 1, Number(d), 23, 59, 59, 999)
    const offset = typeof tzOffsetMinutes === 'number' && Number.isFinite(tzOffsetMinutes)
      // getTimezoneOffset() runs +720 (UTC−12) … −840 (UTC+14); clamp so a
      // junk value can't shift the deadline by days.
      ? Math.max(-840, Math.min(720, Math.round(tzOffsetMinutes)))
      : 0
    return new Date(endOfDayUTC + offset * 60_000)
  }
  const parsed = new Date(raw)
  return isNaN(parsed.getTime()) ? null : parsed
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

  const [rawDiagnostics, members, pinned] = await Promise.all([
    prisma.classDiagnostic.findMany({
      where: { classroomId: id },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true, courseKey: true, title: true, dueDate: true, createdAt: true, testData: true,
        attempts: { select: { userId: true, createdAt: true, results: true } },
      },
    }),
    prisma.classroomMember.findMany({
      where: { classroomId: id, isActive: true },
      select: { userId: true, nickname: true, user: { select: { name: true } } },
    }),
    prisma.classroomCourse.findMany({
      where: { classroomId: id },
      select: { courseSlug: true },
      orderBy: { createdAt: 'asc' },
    }),
  ])
  const nameOf = new Map(members.map(m => [m.userId, m.nickname || m.user.name || 'Student']))
  const memberIds = members.map(m => m.userId)

  // OPEN diagnostics have no linked attempts: any sitting of that course's
  // diagnostic by a member, on or after the assignment date, counts.
  const openCourses = [...new Set(rawDiagnostics.filter(d => isOpenClassDiagnostic(d.testData)).map(d => d.courseKey))]
  const openAttempts = new Map<string, { userId: string; createdAt: Date; results: unknown }[]>()
  if (openCourses.length > 0 && memberIds.length > 0) {
    await Promise.all(openCourses.map(async courseKey => {
      const course = classPlanCourse(courseKey)
      if (!course) return
      const oldest = rawDiagnostics
        .filter(d => d.courseKey === courseKey)
        .reduce((min, d) => (d.createdAt < min ? d.createdAt : min), new Date())
      const rows = await prisma.diagnosticTest.findMany({
        where: { userId: { in: memberIds }, category: { startsWith: course.categoryPrefix }, createdAt: { gte: oldest } },
        select: { userId: true, createdAt: true, results: true },
      })
      openAttempts.set(courseKey, rows)
    }))
  }
  const diagnostics = rawDiagnostics.map(d => {
    const open = isOpenClassDiagnostic(d.testData)
    return {
      ...d,
      open,
      attempts: open
        ? (openAttempts.get(d.courseKey) ?? []).filter(a => a.createdAt >= d.createdAt)
        : d.attempts,
    }
  })

  // Retake-gate waiver state (MCAT only): a waiver is "active" (unused) while
  // User.diagnosticGateWaivedAt is NEWER than the student's latest
  // mcat-full-diagnostic attempt — the same comparison plan-status makes.
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

  const estimatedScoreOf = (results: unknown): number | null => {
    const v = (results as { estimatedScore?: unknown } | null | undefined)?.estimatedScore
    return typeof v === 'number' ? v : null
  }

  // Growth needs each student's FIRST-sitting score on every earlier
  // diagnostic of the same course, so it is built once up front (oldest
  // first) rather than per-row.
  const firstScoreByDiag = new Map<string, Map<string, number>>()
  for (const d of diagnostics) {
    const firstAt = new Map<string, number>()
    const scores = new Map<string, number>()
    for (const a of d.attempts) {
      const at = a.createdAt.getTime()
      if (firstAt.has(a.userId) && firstAt.get(a.userId)! <= at) continue
      firstAt.set(a.userId, at)
      const score = estimatedScoreOf(a.results)
      if (score === null) scores.delete(a.userId)
      else scores.set(a.userId, score)
    }
    firstScoreByDiag.set(d.id, scores)
  }
  // Same course, created earlier — nearest first. A student who skipped
  // Diagnostic 2 is still compared with their own last sitting.
  const earlierSameCourse = new Map<string, typeof diagnostics>()
  for (const d of diagnostics) {
    earlierSameCourse.set(
      d.id,
      diagnostics.filter(o => o.courseKey === d.courseKey && o.createdAt.getTime() < d.createdAt.getTime())
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()),
    )
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
      const priorDiagnostics = earlierSameCourse.get(d.id) ?? []
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
        // Growth: this sitting vs the student's own most recent EARLIER
        // diagnostic in the same course. Both sides use the first sitting, so
        // a retake can't masquerade as growth.
        const thisScore = firstScoreByDiag.get(d.id)?.get(m.userId) ?? null
        let growthFromTitle: string | null = null
        let growthFromScore: number | null = null
        if (thisScore !== null) {
          for (const prev of priorDiagnostics) {
            const prevScore = firstScoreByDiag.get(prev.id)?.get(m.userId)
            if (typeof prevScore === 'number') {
              growthFromTitle = prev.title
              growthFromScore = prevScore
              break
            }
          }
        }
        const growthDelta = thisScore !== null && growthFromScore !== null ? thisScore - growthFromScore : null
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
          // The MCAT retake gate only applies once a student HAS a diagnostic
          // on file; before that there is nothing to waive. Drives whether the
          // "Allow retake now" control is offered on this row.
          hasPriorDiagnostic: d.courseKey === 'mcat' && !!latestMcatAt,
          growthFromTitle,
          growthFromScore,
          growthDelta,
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

      // Class growth: the mean of the per-student changes (each measured
      // against that student's own previous sitting). `noiseBand` /
      // `avgNoiseBand` are the thresholds the UI must respect before calling
      // any of this progress.
      const deltas = students.map(s => s.growthDelta).filter((v): v is number => typeof v === 'number')
      // Growth is only shown where the test's noise band has been measured
      // (MCAT, SAT); elsewhere a change could not be told apart from noise.
      const growth = !d.open && noiseBandFor(d.courseKey) > 0 && priorDiagnostics.length > 0 && deltas.length > 0
        ? {
            fromTitle: priorDiagnostics[0].title,
            pairedCount: deltas.length,
            avgDelta: Math.round(deltas.reduce((a, b) => a + b, 0) / deltas.length),
            noiseBand: noiseBandFor(d.courseKey),
            avgNoiseBand: noiseBandFor(d.courseKey, deltas.length),
          }
        : null

      return {
        id: d.id,
        courseKey: d.courseKey,
        courseLabel: labelFor(d.courseKey),
        /** Open = each student takes the course's standard diagnostic (no frozen test). */
        open: d.open,
        title: d.title,
        dueDate: d.dueDate,
        createdAt: d.createdAt,
        attemptCount: d.attempts.length,
        growth,
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
    // Every course with a diagnostic. `frozen` = one generated test shared by
    // the class (MCAT, SAT); otherwise each student takes the standard one.
    assignableCourses: CLASS_PLAN_COURSES.map(c => ({ key: c.key, label: c.label, frozen: !!GENERATABLE[c.key] })),
    // The class's first pinned course (Settings › Class courses), so the
    // assign form starts on the course this class actually teaches.
    defaultCourseKey: defaultDiagnosticCourseKey(pinned.map(p => p.courseSlug)),
  }, { headers: { 'Cache-Control': 'private, no-store' } })
}

export async function POST(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const access = await requireClassroomAccess(id)
  if ('error' in access) return access.error

  const body = await req.json().catch(() => ({}))
  const courseKey = typeof body?.courseKey === 'string' ? body.courseKey : ''
  if (!classPlanCourse(courseKey)) {
    return NextResponse.json({ error: 'Pick a course that has a diagnostic.' }, { status: 400 })
  }
  const dueDate = resolveDueDate(body?.dueDate, body?.tzOffsetMinutes)

  if (!GENERATABLE[courseKey]) {
    // Open class diagnostic: nothing to generate or freeze.
    const priorTitles = await prisma.classDiagnostic.findMany({
      where: { classroomId: id, courseKey },
      select: { title: true },
    })
    const diagnostic = await prisma.classDiagnostic.create({
      data: {
        classroomId: id,
        courseKey,
        title: nextDiagnosticTitle(priorTitles.map(p => p.title)),
        testData: OPEN_DIAGNOSTIC_TEST_DATA,
        dueDate,
      },
      select: { id: true, title: true, courseKey: true, dueDate: true },
    })
    return NextResponse.json({ diagnostic: { ...diagnostic, open: true } })
  }

  // Everything this class has already been served in this course. Both
  // generators take `excludeQuestionIds` and prefer unseen items, so passing
  // the earlier frozen tests is what stops Diagnostic 2 and 3 from repeating
  // Diagnostic 1's questions. (MCAT passage sets are excluded for free: a
  // passage counts as "seen" when ANY of its question ids is in the set, and
  // its ids encode passage + index.)
  const priors = await prisma.classDiagnostic.findMany({
    where: { classroomId: id, courseKey },
    select: { title: true, testData: true },
  })
  const priorQuestions = priors.flatMap(p => frozenQuestions(p.testData))

  // Generate the course's short diagnostic ONCE — this frozen payload is what
  // every student in the class will see.
  let testData: unknown
  if (courseKey === 'mcat') {
    const { generateMCATDiagnosticTest } = await import('@/data/mcat-practice/diagnostic-generator')
    const excludeQuestionIds = new Set(
      priorQuestions.flatMap(q => (typeof q.id === 'string' && q.id ? [q.id] : [])),
    )
    testData = await generateMCATDiagnosticTest({ excludeQuestionIds })
  } else {
    const { generateDiagnosticTest, seenKeysForQuestion } = await import('@/data/sat-practice/diagnostic-generator')
    // SAT tracks ids AND a stem fingerprint — some pools serve the same text
    // under a new id, which id-only exclusion missed.
    const excludeQuestionIds = new Set(
      priorQuestions.flatMap(q =>
        typeof q.question === 'string'
          ? seenKeysForQuestion({
              id: typeof q.id === 'string' ? q.id : undefined,
              question: q.question,
              passage: typeof q.passage === 'string' ? q.passage : undefined,
            })
          : [],
      ),
    )
    testData = await generateDiagnosticTest({ excludeQuestionIds })
  }

  const diagnostic = await prisma.classDiagnostic.create({
    data: {
      classroomId: id,
      courseKey,
      title: nextDiagnosticTitle(priors.map(p => p.title)),
      testData: testData as object,
      dueDate,
    },
    select: { id: true, title: true, courseKey: true, dueDate: true },
  })
  return NextResponse.json({ diagnostic })
}

/**
 * DELETE /api/teacher/classrooms/[id]/class-diagnostics?diagnosticId=…[&force=1]
 *
 * Removes an assignment. Teacher/co-teacher auth, same as GET/POST, and the
 * diagnostic must belong to THIS classroom.
 *
 * Attempts: an assignment nobody has started deletes silently. One with
 * attempts needs `force=1` (the panel shows a second, explicit warning) —
 * DiagnosticTest.classDiagnosticId is `onDelete: SetNull`, so those sittings
 * survive as ordinary diagnostic attempts on each student's record; only the
 * class-level grouping is lost.
 *
 * Student banners: /api/class-diagnostics/pending reads these rows live, so a
 * deleted assignment stops appearing as soon as the row is gone, and a student
 * who opens a stale ?assigned=<id> link falls back to a normally generated
 * diagnostic instead of dead-ending.
 */
export async function DELETE(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const access = await requireClassroomAccess(id)
  if ('error' in access) return access.error

  const url = new URL(req.url)
  const diagnosticId = url.searchParams.get('diagnosticId') ?? ''
  if (!diagnosticId) {
    return NextResponse.json({ error: 'diagnosticId is required' }, { status: 400 })
  }

  const diagnostic = await prisma.classDiagnostic.findFirst({
    where: { id: diagnosticId, classroomId: id },
    select: { id: true, title: true, _count: { select: { attempts: true } } },
  })
  if (!diagnostic) {
    return NextResponse.json({ error: 'That diagnostic is not in this class.' }, { status: 404 })
  }

  const attemptCount = diagnostic._count.attempts
  if (attemptCount > 0 && url.searchParams.get('force') !== '1') {
    return NextResponse.json({
      error: `${diagnostic.title} already has ${attemptCount} student ${attemptCount === 1 ? 'attempt' : 'attempts'}. Deleting it keeps those sittings on each student's record but removes the class results and comparisons.`,
      attemptCount,
      requiresForce: true,
    }, { status: 409 })
  }

  await prisma.classDiagnostic.delete({ where: { id: diagnostic.id } })
  return NextResponse.json({ deleted: { id: diagnostic.id, title: diagnostic.title }, attemptsDetached: attemptCount })
}
