/**
 * Shared helpers for the classroom-groups API routes (server-only — imports
 * prisma).
 *
 * Groups deploy before their tables exist in prod (migrations are applied
 * manually), so every route catches "table does not exist" and degrades:
 * GET → { groups: [], available: false }, writes → 503 { available: false }.
 */

import { prisma } from '@/lib/prisma'

/** Prisma error codes for "table/column does not exist" (migration not applied). */
export function isMissingSchemaError(e: unknown): boolean {
  const code = (e as { code?: string } | null)?.code
  return code === 'P2021' || code === 'P2022'
}

export const MAX_GROUP_NAME_LENGTH = 40

/** Validate + normalize a group name from a request body. Returns null if invalid. */
export function parseGroupName(raw: unknown): string | null {
  if (typeof raw !== 'string') return null
  const name = raw.trim()
  if (name.length === 0 || name.length > MAX_GROUP_NAME_LENGTH) return null
  return name
}

/**
 * The userIds an assignment target covers RIGHT NOW: the group's active roster
 * members when groupId is set, otherwise every active member of the classroom.
 * Membership reads always filter member.isActive because roster removal is a
 * soft deactivate — removed students stay linked to groups until hard-deleted.
 */
export async function coveredUserIds(
  classroomId: string,
  groupId: string | null
): Promise<string[]> {
  if (groupId) {
    const rows = await prisma.classroomGroupMember.findMany({
      where: { groupId, member: { classroomId, isActive: true } },
      select: { member: { select: { userId: true } } },
    })
    return rows.map((r) => r.member.userId)
  }
  const members = await prisma.classroomMember.findMany({
    where: { classroomId, isActive: true },
    select: { userId: true },
  })
  return members.map((m) => m.userId)
}
