import { NextRequest, NextResponse } from 'next/server'
import { requireTeacher } from '@/lib/teacher-auth'
import { prisma } from '@/lib/prisma'

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

    const { feedback } = await req.json()

    // Verify the teacher owns the classroom this assignment belongs to
    const submission = await prisma.assignmentSubmission.findUnique({
      where: { id: submissionId },
      include: {
        assignment: {
          include: {
            classroom: { select: { teacherId: true } },
          },
        },
      },
    })

    if (!submission) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
    }

    if (submission.assignment.classroom.teacherId !== teacher.user!.id) {
      return NextResponse.json({ error: 'Not your classroom' }, { status: 403 })
    }

    const updated = await prisma.assignmentSubmission.update({
      where: { id: submissionId },
      data: { feedback: feedback?.trim() || null },
    })

    return NextResponse.json({ submission: updated })
  } catch (error) {
    console.error('Feedback update error:', error)
    return NextResponse.json({ error: 'Failed to update feedback' }, { status: 500 })
  }
}
