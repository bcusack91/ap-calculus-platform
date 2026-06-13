import { NextRequest, NextResponse } from 'next/server'
import { requireClassroomOwner } from '@/lib/teacher-auth'
import { prisma } from '@/lib/prisma'

/**
 * Serialize a single CSV cell:
 *  1. Neutralize formula injection — a cell that a spreadsheet would evaluate as
 *     a formula (leading = + - @, or the Tab/CR control chars some apps treat the
 *     same) is prefixed with a single quote so it is rendered as literal text.
 *  2. Quote the value and escape embedded double-quotes per RFC 4180.
 */
function csvCell(value: unknown): string {
  let str = String(value ?? '')
  if (/^[=+\-@\t\r]/.test(str)) {
    str = `'${str}`
  }
  return `"${str.replace(/"/g, '""')}"`
}

// GET /api/teacher/classrooms/[id]/export?format=csv
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: classroomId } = await params
    const teacher = await requireClassroomOwner(classroomId)
    if ('error' in teacher && teacher.error) {
      return teacher.error
    }

    const format = req.nextUrl.searchParams.get('format') || 'csv'

    // Fetch classroom with all relevant data
    const classroom = await prisma.classroom.findUnique({
      where: { id: classroomId },
      include: {
        members: {
          where: { isActive: true },
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
        assignments: {
          where: { isActive: true },
          include: {
            submissions: {
              include: {
                student: {
                  select: { id: true, name: true, email: true },
                },
              },
            },
          },
          orderBy: { createdAt: 'asc' },
        },
      },
    })

    if (!classroom) {
      return NextResponse.json({ error: 'Classroom not found' }, { status: 404 })
    }

    // Build grade data
    const students = classroom.members.map((m) => m.user)
    const assignments = classroom.assignments

    if (format === 'csv') {
      // Build CSV
      const headers = [
        'Student Name',
        'Email',
        ...assignments.map((a) => a.title),
        'Average Score',
      ]

      const rows = students.map((student) => {
        const scores: (number | null)[] = assignments.map((assignment) => {
          const submission = assignment.submissions.find(
            (s) => s.studentId === student.id
          )
          if (!submission || submission.status === 'NOT_STARTED') return null
          return submission.score !== null
            ? Math.round(submission.score * 100)
            : null
        })

        const validScores = scores.filter((s): s is number => s !== null)
        const avg =
          validScores.length > 0
            ? Math.round(
                validScores.reduce((a, b) => a + b, 0) / validScores.length
              )
            : null

        return [
          student.name || 'Unknown',
          student.email || '',
          ...scores.map((s) => (s !== null ? `${s}%` : 'N/A')),
          avg !== null ? `${avg}%` : 'N/A',
        ]
      })

      const csvContent = [
        `Grade Report: ${classroom.name}`,
        `Generated: ${new Date().toLocaleDateString()}`,
        '',
        headers.map((cell) => csvCell(cell)).join(','),
        ...rows.map((row) =>
          row.map((cell) => csvCell(cell)).join(',')
        ),
        '',
        'Summary',
        `Total Students,${students.length}`,
        `Total Assignments,${assignments.length}`,
      ].join('\n')

      // Build the download filename from the (attacker-controllable) classroom
      // name. Two forms are emitted per RFC 6266:
      //  - filename="..."  : ASCII fallback. We collapse every non-alphanumeric
      //    char to '_', which strips quotes/CR/LF that could otherwise break out
      //    of the header or smuggle a second header.
      //  - filename*=UTF-8'': percent-encoded UTF-8 so the real (possibly
      //    non-ASCII) name survives in modern clients. encodeURIComponent()
      //    guarantees the value contains only header-safe characters.
      const datePart = new Date().toISOString().split('T')[0]
      const asciiName = `${classroom.name.replace(/[^a-z0-9]/gi, '_')}_grades_${datePart}.csv`
      const utf8Name = encodeURIComponent(`${classroom.name}_grades_${datePart}.csv`)

      return new Response(csvContent, {
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="${asciiName}"; filename*=UTF-8''${utf8Name}`,
        },
      })
    }

    // JSON format (for rendering in browser before export)
    const gradeData = {
      classroom: {
        name: classroom.name,
        subject: classroom.subject,
        grade: classroom.grade,
      },
      generatedAt: new Date().toISOString(),
      students: students.map((student) => {
        const assignmentScores = assignments.map((assignment) => {
          const submission = assignment.submissions.find(
            (s) => s.studentId === student.id
          )
          return {
            assignmentId: assignment.id,
            assignmentTitle: assignment.title,
            type: assignment.type,
            score: submission?.score ?? null,
            status: submission?.status ?? 'NOT_STARTED',
            attempts: submission?.attempts ?? 0,
            completedAt: submission?.completedAt ?? null,
          }
        })

        const validScores = assignmentScores
          .filter((a) => a.score !== null)
          .map((a) => a.score!) as number[]
        const avgScore =
          validScores.length > 0
            ? validScores.reduce((a, b) => a + b, 0) / validScores.length
            : null

        return {
          id: student.id,
          name: student.name || 'Unknown',
          email: student.email || '',
          assignments: assignmentScores,
          averageScore: avgScore,
          completedCount: assignmentScores.filter(
            (a) => a.status === 'COMPLETED'
          ).length,
        }
      }),
      assignments: assignments.map((a) => ({
        id: a.id,
        title: a.title,
        type: a.type,
        dueDate: a.dueDate,
      })),
    }

    return NextResponse.json(gradeData)
  } catch (error) {
    console.error('Grade export error:', error)
    return NextResponse.json(
      { error: 'Failed to export grades' },
      { status: 500 }
    )
  }
}
