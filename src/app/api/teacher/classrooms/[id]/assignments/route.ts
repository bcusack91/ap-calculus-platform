import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'
import { coveredUserIds } from '@/lib/classroom-groups'

/**
 * GET  /api/teacher/classrooms/[id]/assignments — list assignments with real
 *      per-status counts. Submission rows are pre-created NOT_STARTED for every
 *      covered member at assignment creation (the whole class, or only the
 *      target group's members when Assignment.groupId is set), so the stats
 *      block reports what students have actually done — with the GROUP's active
 *      member count as the denominator for targeted assignments.
 * POST /api/teacher/classrooms/[id]/assignments — create an assignment
 */

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const result = await requireClassroomAccess(id)
    if ('error' in result && result.error) return result.error

    const assignments = await prisma.assignment.findMany({
      where: { classroomId: id, isActive: true },
      include: {
        submissions: {
          select: {
            id: true,
            status: true,
            score: true,
            attempts: true,
            feedback: true,
            completedAt: true,
            student: { select: { id: true, name: true, email: true, image: true } },
          },
        },
        group: { select: { id: true, name: true } },
        _count: { select: { submissions: true } },
      },
      orderBy: { createdAt: 'desc' },
    })

    // Also get total student count for completion stats
    const memberCount = await prisma.classroomMember.count({
      where: { classroomId: id, isActive: true },
    })

    // For group-targeted assignments the denominator is the GROUP's active
    // membership, not the roster: fetch each referenced group's current
    // active-member userIds in one query.
    const groupIds = [...new Set(assignments.map((a) => a.groupId).filter((g): g is string => !!g))]
    const groupUserIds = new Map<string, Set<string>>()
    if (groupIds.length > 0) {
      const rows = await prisma.classroomGroupMember.findMany({
        where: { groupId: { in: groupIds }, member: { classroomId: id, isActive: true } },
        select: { groupId: true, member: { select: { userId: true } } },
      })
      for (const r of rows) {
        const set = groupUserIds.get(r.groupId) ?? new Set<string>()
        set.add(r.member.userId)
        groupUserIds.set(r.groupId, set)
      }
    }

    // Aggregate real progress per assignment. OVERDUE rows are still "not
    // done" — they fold into notStarted for the summary bar, while the
    // per-student list keeps the raw status.
    const withStats = assignments.map((a) => {
      // GROUP TARGETING: the denominator follows the group's CURRENT active
      // membership. Members added to the group after creation may have no row
      // yet — they count as notStarted. NOT_STARTED rows of students no longer
      // in the group are dropped from both the stats and the drill-in, but
      // IN_PROGRESS/COMPLETED rows always stay — work done remains visible
      // and gradeable even after retargeting or group-membership changes.
      const covered = a.groupId ? groupUserIds.get(a.groupId) ?? new Set<string>() : null
      const submissions = covered
        ? a.submissions.filter((s) => s.status !== 'NOT_STARTED' || covered.has(s.student.id))
        : a.submissions
      let notStarted = 0
      let inProgress = 0
      let completed = 0
      let scoreSum = 0
      let scoreCount = 0
      for (const s of submissions) {
        if (s.status === 'COMPLETED') {
          completed++
          if (typeof s.score === 'number') {
            scoreSum += s.score
            scoreCount++
          }
        } else if (s.status === 'IN_PROGRESS') {
          inProgress++
        } else {
          notStarted++
        }
      }
      if (covered) {
        // Covered group members with no submission row at all (added to the
        // group after the assignment was created) are still "not started".
        const withRow = new Set(submissions.map((s) => s.student.id))
        for (const uid of covered) if (!withRow.has(uid)) notStarted++
      }
      return {
        ...a,
        submissions,
        stats: {
          notStarted,
          inProgress,
          completed,
          // 0-1 fraction (matches AssignmentSubmission.score), null when no
          // completed submission carries a score.
          avgScore: scoreCount > 0 ? scoreSum / scoreCount : null,
        },
      }
    })

    return NextResponse.json({ assignments: withStats, memberCount })
  } catch (error) {
    console.error('[GET /api/teacher/classrooms/[id]/assignments]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

const VALID_TYPES = ['INTERACTIVE_LESSON', 'FLASHCARD_REVIEW', 'QUIZ', 'COMPETITIVE_PRACTICE', 'UNIT_TEST', 'FRQ_PRACTICE']
const COURSE_SCOPED_TYPES = ['UNIT_TEST', 'FRQ_PRACTICE']
const TOPIC_SCOPED_TYPES = ['INTERACTIVE_LESSON', 'QUIZ', 'COMPETITIVE_PRACTICE']

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const result = await requireClassroomAccess(id)
    if ('error' in result && result.error) return result.error

  const { title, description, type, topicSlug, topicSlugs, flashcardSetId, courseSlug, unitId, dueDate, maxAttempts, requiredScore, groupId } =
    await req.json()

  if (!title || typeof title !== 'string') {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 })
  }

  if (!type || !VALID_TYPES.includes(type)) {
    return NextResponse.json({ error: 'Valid assignment type is required' }, { status: 400 })
  }

  // Type-aware target validation, mirroring the modal: an assignment with no
  // target is unstartable for students, so refuse to create one.
  if (COURSE_SCOPED_TYPES.includes(type) && (!courseSlug || typeof courseSlug !== 'string')) {
    return NextResponse.json({ error: 'This assignment type requires a course' }, { status: 400 })
  }
  const hasTopics =
    (Array.isArray(topicSlugs) && topicSlugs.length > 0) ||
    (typeof topicSlug === 'string' && topicSlug.trim())
  if (TOPIC_SCOPED_TYPES.includes(type) && !hasTopics) {
    return NextResponse.json({ error: 'This assignment type requires at least one topic' }, { status: 400 })
  }
  // INTERACTIVE_LESSON and QUIZ deep-link students to /topics/<slug>, which
  // 404s for anything that isn't a real DB Topic (e.g. MCAT competitive-bank
  // slugs from the "MCAT Prep (Competitive)" pseudo-course). Verify every slug
  // up front and name the offenders instead of shipping a dead assignment.
  if (type === 'INTERACTIVE_LESSON' || type === 'QUIZ') {
    const requested = [
      ...new Set([
        ...(Array.isArray(topicSlugs) ? topicSlugs : []),
        ...(typeof topicSlug === 'string' && topicSlug.trim() ? [topicSlug.trim()] : []),
      ]),
    ].filter((s): s is string => typeof s === 'string' && s.length > 0)
    if (requested.length > 0) {
      const found = await prisma.topic.findMany({ where: { slug: { in: requested } }, select: { slug: true } })
      const foundSet = new Set(found.map((t) => t.slug))
      const missing = requested.filter((s) => !foundSet.has(s))
      if (missing.length > 0) {
        return NextResponse.json(
          {
            error: `These topics have no ${type === 'QUIZ' ? 'quiz' : 'lesson'} page and can't be assigned as ${
              type === 'QUIZ' ? 'a quiz' : 'an interactive lesson'
            }: ${missing.join(', ')}. Competitive-only topics can only be assigned as Competitive Practice.`,
          },
          { status: 400 }
        )
      }
    }
  }
  if (type === 'FLASHCARD_REVIEW' && (!flashcardSetId || typeof flashcardSetId !== 'string' || !flashcardSetId.trim())) {
    return NextResponse.json({ error: 'A flashcard review assignment requires a flashcard set' }, { status: 400 })
  }

  // Coerce/validate the optional fields BEFORE Prisma so a malformed value
  // returns a clean 400 instead of an unhandled Prisma 500.
  let due: Date | null = null
  if (dueDate) {
    const d = new Date(dueDate)
    if (isNaN(d.getTime())) return NextResponse.json({ error: 'Invalid due date' }, { status: 400 })
    due = d
  }
  // Blank/invalid maxAttempts means UNLIMITED (the form's placeholder says
  // "Unlimited") — previously this collapsed to 1, silently locking students
  // out after a single attempt.
  const attemptsNum = Number(maxAttempts)
  const attempts = Number.isFinite(attemptsNum) && attemptsNum > 0 ? Math.min(Math.floor(attemptsNum), 9999) : 9999
  const reqScore = typeof requiredScore === 'number' && requiredScore >= 0 && requiredScore <= 1 ? requiredScore : null

  // If a flashcard set is attached, the teacher must own it.
  const fsid = typeof flashcardSetId === 'string' && flashcardSetId.trim() ? flashcardSetId.trim() : null
  if (fsid) {
    const ownedSet = await prisma.flashcardSet.findFirst({ where: { id: fsid, teacherId: result.user!.id } })
    if (!ownedSet) return NextResponse.json({ error: 'Not your flashcard set' }, { status: 403 })
  }

  // Optional group targeting: the group must belong to THIS classroom — a
  // group id from another class is indistinguishable from a bogus one.
  const gid = typeof groupId === 'string' && groupId.trim() ? groupId.trim() : null
  if (gid) {
    const group = await prisma.classroomGroup.findFirst({ where: { id: gid, classroomId: id }, select: { id: true } })
    if (!group) return NextResponse.json({ error: 'Group not found in this classroom' }, { status: 400 })
  }

  const assignment = await prisma.assignment.create({
    data: {
      classroomId: id,
      createdById: result.user!.id,
      title: title.trim(),
      description: description?.trim() || null,
      type,
      topicSlug: topicSlug || null,
      topicSlugs: topicSlugs || null,
      // UNIT_TEST / FRQ_PRACTICE are scoped to a course rather than a topic.
      courseSlug: courseSlug || null,
      unitId: unitId || null,
      flashcardSetId: fsid,
      dueDate: due,
      maxAttempts: attempts,
      requiredScore: reqScore,
      groupId: gid,
    },
  })

  // Auto-create submission records for the covered members: the whole active
  // roster, or only the target group's active members when group-targeted.
  const userIds = await coveredUserIds(id, gid)

  if (userIds.length > 0) {
    await prisma.assignmentSubmission.createMany({
      data: userIds.map((userId) => ({
        assignmentId: assignment.id,
        studentId: userId,
        status: 'NOT_STARTED' as const,
      })),
    })
  }

  return NextResponse.json({ assignment }, { status: 201 })
  } catch (error) {
    console.error('[POST /api/teacher/classrooms/[id]/assignments]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
