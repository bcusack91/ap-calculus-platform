import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'
import {
  isMissingSchemaError,
  MAX_GROUP_NAME_LENGTH,
  parseGroupName,
} from '@/lib/classroom-groups'

export const dynamic = 'force-dynamic'

/**
 * PATCH /api/teacher/classrooms/[id]/groups/[groupId] — rename a group.
 * Body: { name } (trimmed, ≤40 chars, unique per classroom).
 */
export async function PATCH(
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

    const name = parseGroupName(body.name)
    if (!name) {
      return NextResponse.json(
        { error: `Group name must be 1–${MAX_GROUP_NAME_LENGTH} characters` },
        { status: 400 }
      )
    }

    // Scope the mutation to THIS classroom — keying on groupId alone would let
    // any teacher rename groups in other teachers' classrooms.
    const { count } = await prisma.classroomGroup.updateMany({
      where: { id: groupId, classroomId: id },
      data: { name },
    })
    if (count === 0) {
      return NextResponse.json({ error: 'Group not found in this classroom' }, { status: 404 })
    }

    return NextResponse.json({ group: { id: groupId, name } })
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
    console.error('[PATCH /api/teacher/classrooms/[id]/groups/[groupId]]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * DELETE /api/teacher/classrooms/[id]/groups/[groupId] — delete a group.
 * Memberships cascade away with it; students themselves are untouched.
 * Assignments targeted at the group are NOT deleted: Assignment.groupId is
 * SetNull, so they widen to the whole class (grades and submissions survive).
 * A teacher who wants them gone or retargeted edits/unassigns them in the
 * Assignments tab.
 */
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string; groupId: string }> }
) {
  try {
    const { id, groupId } = await params
    const result = await requireClassroomAccess(id)
    if ('error' in result && result.error) return result.error

    // Scoped to this classroom for the same reason as PATCH.
    const { count } = await prisma.classroomGroup.deleteMany({
      where: { id: groupId, classroomId: id },
    })
    if (count === 0) {
      return NextResponse.json({ error: 'Group not found in this classroom' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (isMissingSchemaError(error)) {
      return NextResponse.json(
        { error: 'Groups are not available yet', available: false },
        { status: 503 }
      )
    }
    console.error('[DELETE /api/teacher/classrooms/[id]/groups/[groupId]]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
