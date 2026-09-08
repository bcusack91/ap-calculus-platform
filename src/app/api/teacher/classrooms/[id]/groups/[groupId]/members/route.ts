import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'
import { isMissingSchemaError } from '@/lib/classroom-groups'

export const dynamic = 'force-dynamic'

/**
 * PUT /api/teacher/classrooms/[id]/groups/[groupId]/members — replace the
 * group's member set. Body: { memberIds: string[] } (ClassroomMember ids).
 * Every id must be an ACTIVE member of THIS classroom; unknown or foreign ids
 * reject the whole request so a stale roster can't silently half-apply.
 */
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; groupId: string }> }
) {
  try {
    const { id, groupId } = await params
    const result = await requireClassroomAccess(id)
    if ('error' in result && result.error) return result.error

    let body: Record<string, unknown>
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const raw = body.memberIds
    if (!Array.isArray(raw) || raw.some((m) => typeof m !== 'string')) {
      return NextResponse.json({ error: 'memberIds must be an array of ids' }, { status: 400 })
    }
    const memberIds = [...new Set(raw as string[])]
    if (memberIds.length > 500) {
      return NextResponse.json({ error: 'Too many members' }, { status: 400 })
    }

    // The group must belong to this classroom (groupId alone is not proof).
    const group = await prisma.classroomGroup.findFirst({
      where: { id: groupId, classroomId: id },
      select: { id: true },
    })
    if (!group) {
      return NextResponse.json({ error: 'Group not found in this classroom' }, { status: 404 })
    }

    // Every submitted id must be an active member of this classroom.
    if (memberIds.length > 0) {
      const valid = await prisma.classroomMember.findMany({
        where: { id: { in: memberIds }, classroomId: id, isActive: true },
        select: { id: true },
      })
      if (valid.length !== memberIds.length) {
        const validSet = new Set(valid.map((m) => m.id))
        const invalid = memberIds.filter((m) => !validSet.has(m))
        return NextResponse.json(
          { error: 'Some students are not active members of this classroom', invalid },
          { status: 400 }
        )
      }
    }

    // Replace the set atomically.
    await prisma.$transaction([
      prisma.classroomGroupMember.deleteMany({
        where: { groupId, memberId: { notIn: memberIds } },
      }),
      ...(memberIds.length > 0
        ? [
            prisma.classroomGroupMember.createMany({
              data: memberIds.map((memberId) => ({ groupId, memberId })),
              skipDuplicates: true,
            }),
          ]
        : []),
    ])

    return NextResponse.json({ success: true, memberIds })
  } catch (error) {
    if (isMissingSchemaError(error)) {
      return NextResponse.json(
        { error: 'Groups are not available yet', available: false },
        { status: 503 }
      )
    }
    console.error('[PUT /api/teacher/classrooms/[id]/groups/[groupId]/members]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
