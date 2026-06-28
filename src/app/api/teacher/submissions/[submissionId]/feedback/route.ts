import { NextRequest, NextResponse } from 'next/server'
import { requireTeacher, requireClassroomAccess } from '@/lib/teacher-auth'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

// PUT /api/teacher/submissions/[submissionId]/feedback
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ submissionId: string }> }
) {
  try {
    const { submissionId } = await params
    const teacher = await requireTeacher()
    if ('error' in teacher) {
      return teacher.error
    }

    const body = await req.json()
    const { feedback } = body
    const hasScore = Object.prototype.hasOwnProperty.call(body, 'score')
    const score: unknown = body.score

    // Optional manual grade override, stored as a 0-1 fraction (the same scale
    // the gradebook reads). `null` clears the grade.
    if (hasScore && score !== null && (typeof score !== 'number' || score < 0 || score > 1)) {
      return NextResponse.json({ error: 'Score must be a number between 0 and 1' }, { status: 400 })
    }

    // Verify the teacher owns OR co-teaches the classroom this assignment belongs to.
    const submission = await prisma.assignmentSubmission.findUnique({
      where: { id: submissionId },
      include: {
        assignment: { select: { classroomId: true } },
      },
    })

    if (!submission) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
    }

    const access = await requireClassroomAccess(submission.assignment.classroomId)
    if ('error' in access) return access.error

    const data: Prisma.AssignmentSubmissionUpdateInput = {}
    if (Object.prototype.hasOwnProperty.call(body, 'feedback')) {
      data.feedback = feedback?.trim() || null
    }
    if (hasScore) {
      data.score = score as number | null
      // A manually-graded submission counts as completed.
      if (typeof score === 'number') {
        data.status = 'COMPLETED'
        if (!submission.completedAt) data.completedAt = new Date()
      }
    }

    const updated = await prisma.assignmentSubmission.update({
      where: { id: submissionId },
      data,
    })

    return NextResponse.json({ submission: updated })
  } catch (error) {
    console.error('Feedback update error:', error)
    return NextResponse.json({ error: 'Failed to update feedback' }, { status: 500 })
  }
}
