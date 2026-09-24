import { prisma } from '@/lib/prisma'
import type { TeacherLobbyStatus } from '@prisma/client'
import { lobbyTimeIsUp } from '@/lib/lobby-standings'

/**
 * Nothing used to close a class lobby when its timer ran out — only the host's
 * manual "End match" did — so a finished match stayed IN_PROGRESS forever and
 * the room page kept bouncing players back into /play, where the timer read
 * 00:00. Read paths call this so the stored status catches up with the clock.
 *
 * `updateMany` with the status in the WHERE keeps two simultaneous polls from
 * both "closing" it, and never overwrites a host's earlier manual close.
 */
export async function closeIfTimeIsUp<T extends { id: string; status: TeacherLobbyStatus; endsAt: Date | null; closedAt?: Date | null }>(
  lobby: T,
  now: number = Date.now(),
): Promise<T> {
  if (!lobbyTimeIsUp(lobby, now)) return lobby
  const closedAt = lobby.endsAt ?? new Date(now)
  await prisma.teacherLobby.updateMany({
    where: { id: lobby.id, status: 'IN_PROGRESS' },
    data: { status: 'CLOSED', closedAt },
  })
  return { ...lobby, status: 'CLOSED', closedAt }
}
