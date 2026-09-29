import { NextRequest, NextResponse } from 'next/server'
import { requireClassroomAccess } from '@/lib/teacher-auth'
import { prisma } from '@/lib/prisma'
import { csvCell } from '@/lib/csv-cell'
import { loadClassMetrics, METRICS_RANGES, WEEKLY_TARGETS, type MetricsRange } from '@/lib/student-metrics'

export const dynamic = 'force-dynamic'

const pct = (x: number | null) => (x == null ? '' : `${Math.round(x * 100)}%`)
const hours = (seconds: number) => (seconds / 3600).toFixed(1)

/**
 * GET /api/teacher/classrooms/[id]/activity?range=7d|30d|90d|all&scope=all|class[&format=csv]
 *
 * Per-student study activity for the whole roster (Insights › Engagement and
 * the "Export activity CSV" button): active hours and days, flashcard reviews,
 * minutes and Again rate, questions answered and accuracy, exit-quiz passes,
 * overdue cards, and flags (rushing, backlog, below target, inactive).
 */
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id: classroomId } = await params
  const access = await requireClassroomAccess(classroomId)
  if ('error' in access) return access.error

  const sp = req.nextUrl.searchParams
  const rangeParam = sp.get('range') ?? '7d'
  const range: MetricsRange = (METRICS_RANGES as readonly string[]).includes(rangeParam) ? (rangeParam as MetricsRange) : '7d'
  const scope = sp.get('scope') === 'class' ? 'class' : 'all'

  try {
    const [members, classCourses] = await Promise.all([
      prisma.classroomMember.findMany({
        where: { classroomId, isActive: true },
        select: { user: { select: { id: true, name: true, email: true } } },
        orderBy: { user: { name: 'asc' } },
      }),
      prisma.classroomCourse.findMany({ where: { classroomId }, select: { courseSlug: true } }),
    ])
    // A class course with a weekly target (MCAT today) sets the "below target" flag.
    const targetCourseSlug = classCourses.map((c) => c.courseSlug).find((slug) => WEEKLY_TARGETS[slug]) ?? null

    const rows = await loadClassMetrics(
      members.map((m) => m.user.id),
      { range, classroomId: scope === 'class' ? classroomId : null, targetCourseSlug },
    )
    const students = members.map((m, i) => ({ ...m.user, ...rows[i] }))

    if (sp.get('format') === 'csv') {
      const header = [
        'Student', 'Email', 'Active hours', 'Active days', 'Flashcard reviews', 'Flashcard minutes', 'Again %',
        'Questions answered', 'Accuracy', 'Exit quizzes passed', 'Overdue cards', 'Flags',
      ]
      const lines = [
        [`Study activity: ${access.classroom.name}`].map(csvCell).join(','),
        [`Range: ${range}${scope === 'class' ? ' (this class only)' : ' (all study)'}`, `Generated: ${new Date().toISOString()}`].map(csvCell).join(','),
        '',
        header.map(csvCell).join(','),
        ...students.map((s) =>
          [
            s.name ?? '', s.email ?? '', hours(s.activeSeconds), s.activeDays, s.reviews, Math.round(s.flashcardSeconds / 60),
            pct(s.againRate), s.answered, pct(s.accuracy), s.exitPasses, s.overdue, s.flags.join(' '),
          ].map(csvCell).join(','),
        ),
      ]
      const safeName = access.classroom.name.replace(/[^a-z0-9-_ ]/gi, '').trim().replace(/\s+/g, '-') || 'class'
      return new NextResponse(lines.join('\n'), {
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="${safeName}-activity-${range}.csv"`,
          'Cache-Control': 'private, no-store',
        },
      })
    }

    return NextResponse.json(
      { range, scope, target: targetCourseSlug ? { courseSlug: targetCourseSlug, ...WEEKLY_TARGETS[targetCourseSlug] } : null, students },
      { headers: { 'Cache-Control': 'private, no-store' } },
    )
  } catch (err) {
    console.error('[class activity] failed:', err)
    return NextResponse.json({ error: 'Could not load class activity' }, { status: 500 })
  }
}
