import { prisma } from '@/lib/prisma'

/** Only this recent counts as "new" — an old class's backlog never floods a student. */
export const ANNOUNCEMENT_NEW_DAYS = 14
const SNIPPET_CHARS = 180

export interface StudentAnnouncement {
  id: string
  classroomId: string
  classroomName: string
  authorName: string | null
  title: string
  snippet: string
  isPinned: boolean
  createdAt: Date
  /** Posted after the student last saw this class's announcements. */
  unread: boolean
}

/** True when a post is newer than the class's seen marker (null = never seen). */
export function isUnread(createdAt: Date, seenAt: Date | null): boolean {
  return !seenAt || createdAt > seenAt
}

export function snippetOf(content: string): string {
  const flat = content.replace(/\s+/g, ' ').trim()
  return flat.length > SNIPPET_CHARS ? `${flat.slice(0, SNIPPET_CHARS - 1).trimEnd()}…` : flat
}

/**
 * Announcements from the student's active classes posted in the last
 * ANNOUNCEMENT_NEW_DAYS, newest first, each flagged unread or not. Empty for
 * anyone with no class memberships (teachers, solo students).
 */
export async function recentAnnouncementsFor(userId: string, now = new Date()): Promise<StudentAnnouncement[]> {
  const members = await prisma.classroomMember.findMany({
    where: { userId, isActive: true },
    select: { classroomId: true, announcementsSeenAt: true, classroom: { select: { name: true } } },
  })
  if (members.length === 0) return []
  const since = new Date(now.getTime() - ANNOUNCEMENT_NEW_DAYS * 24 * 60 * 60 * 1000)
  const byClass = new Map(members.map((m) => [m.classroomId, m]))
  const rows = await prisma.announcement.findMany({
    where: { classroomId: { in: [...byClass.keys()] }, createdAt: { gt: since }, authorId: { not: userId } },
    select: { id: true, classroomId: true, title: true, content: true, isPinned: true, createdAt: true, author: { select: { name: true } } },
    orderBy: { createdAt: 'desc' },
    take: 20,
  })
  return rows.map((a) => {
    const m = byClass.get(a.classroomId)!
    return {
      id: a.id,
      classroomId: a.classroomId,
      classroomName: m.classroom.name,
      authorName: a.author.name,
      title: a.title,
      snippet: snippetOf(a.content),
      isPinned: a.isPinned,
      createdAt: a.createdAt,
      unread: isUnread(a.createdAt, m.announcementsSeenAt),
    }
  })
}

/**
 * Mark one class's (or every class's) announcements seen. `upTo` is the newest
 * post the student was actually shown: stamping that (never later than now)
 * keeps a post that arrived while the page sat open still unread. Without it,
 * everything up to now counts as seen. The marker never moves backwards.
 */
export async function markAnnouncementsSeen(
  userId: string,
  classroomId?: string | null,
  upTo?: Date | null,
  now = new Date(),
): Promise<number> {
  const stamp = upTo && upTo < now ? upTo : now
  const res = await prisma.classroomMember.updateMany({
    where: {
      userId,
      isActive: true,
      ...(classroomId ? { classroomId } : {}),
      OR: [{ announcementsSeenAt: null }, { announcementsSeenAt: { lt: stamp } }],
    },
    data: { announcementsSeenAt: stamp },
  })
  return res.count
}
