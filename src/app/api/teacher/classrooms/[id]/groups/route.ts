import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'
import {
  isMissingSchemaError,
  MAX_GROUP_NAME_LENGTH,
  parseGroupName,
} from '@/lib/classroom-groups'

/**
 * /api/teacher/classrooms/[id]/groups — classroom groups (table groups, lab
 * partners). A group is a name plus a set of ClassroomMember ids.
 *
 * GRACEFUL DEGRADATION: prod migrations are applied manually and may lag a
 * deploy. If the ClassroomGroup tables don't exist yet (Prisma P2021/P2022),
 * GET returns 200 { groups: [], available: false } and writes return 503
 * { available: false } — the UI hides the feature instead of crashing.
 */

export const dynamic = 'force-dynamic'

/**
 * GET — all groups in this classroom, each with its members' ids and names.
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const result = await requireClassroomAccess(id)
    if ('error' in result && result.error) return result.error

    const groups = await prisma.classroomGroup.findMany({
      where: { classroomId: id },
      orderBy: { name: 'asc' },
      include: {
        members: {
          select: {
            memberId: true,
            member: {
              select: {
                isActive: true,
                user: { select: { id: true, name: true, email: true } },
              },
            },
          },
        },
      },
    })

    return NextResponse.json({
      available: true,
      groups: groups.map((g) => ({
        id: g.id,
        name: g.name,
        createdAt: g.createdAt,
        members: g.members
          // Removed students stay linked until hard-deleted (roster removal is
          // a soft deactivate) — hide them from the group display.
          .filter((m) => m.member.isActive)
          .map((m) => ({
            memberId: m.memberId,
            userId: m.member.user.id,
            name: m.member.user.name || m.member.user.email || 'Student',
          })),
      })),
    })
  } catch (error) {
    if (isMissingSchemaError(error)) {
      return NextResponse.json({ groups: [], available: false })
    }
    console.error('[GET /api/teacher/classrooms/[id]/groups]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * POST — create a group. Body: { name }. Names are trimmed, ≤40 chars, and
 * unique per classroom (case-sensitive, enforced by the DB unique index).
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const result = await requireClassroomAccess(id)
    if ('error' in result && result.error) return result.error

    let body: Record<string, unknown>
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const name = parseGroupName(body.name)
    if (!name) {
      return NextResponse.json(
        { error: `Group name must be 1–${MAX_GROUP_NAME_LENGTH} characters` },
        { status: 400 }
      )
    }

    const group = await prisma.classroomGroup.create({
      data: { classroomId: id, name },
    })

    return NextResponse.json(
      { group: { id: group.id, name: group.name, createdAt: group.createdAt, members: [] } },
      { status: 201 }
    )
  } catch (error) {
    if (isMissingSchemaError(error)) {
      return NextResponse.json(
        { error: 'Groups are not available yet', available: false },
        { status: 503 }
      )
    }
    if ((error as { code?: string } | null)?.code === 'P2002') {
      return NextResponse.json(
        { error: 'A group with that name already exists in this class' },
        { status: 409 }
      )
    }
    console.error('[POST /api/teacher/classrooms/[id]/groups]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
