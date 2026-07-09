/**
 * Abandoned-match sweeper.
 *
 * A competitive match is left `IN_PROGRESS` whenever a player simply closes the
 * tab / loses connection mid-game: there is no client left to drive it to
 * COMPLETED, so it lingers forever. Lingering IN_PROGRESS matches are not just
 * cosmetic — the queue route (`existingMatch` check) and the GET-poll redirect
 * both treat a live match as a reason to refuse new queueing, so a single
 * abandoned match can wedge a user out of competitive play indefinitely.
 *
 * This module finalizes such matches opportunistically: when any request
 * observes a match (or a user's match set) whose wall-clock age exceeds a
 * generous threshold, it marks the match COMPLETED with NO winner and writes
 * NO ranked stats / MMR history. That mirrors the existing "practice match" and
 * "tie" handling in match/[id]/answer and match/[id]/complete — an abandoned
 * game must award nothing, otherwise rage-quitting or stalling becomes a way to
 * deny an opponent their loss (or farm a forfeit).
 *
 * Concurrency: identical shape to the finalize routes — one `$transaction`,
 * `SELECT ... FOR UPDATE` on the row, then an in-transaction re-check of the
 * live status + age before writing. If a real /complete or /answer finalized
 * the match in the meantime (or another sweeper already claimed it), the
 * re-check makes this a no-op. The whole thing is best-effort and never throws
 * to the caller: sweeping is a side benefit of a request, not its purpose.
 *
 * NOTE: `CompetitiveMatch` has no `updatedAt`/`lastActivityAt` column (and we
 * can't add one here), so "age" is derived from `startedAt`. The threshold is
 * deliberately well beyond any legitimate match length (the longest mode,
 * ACCURACY_CHALLENGE, has a hard 5-minute server timer) so we never reap a
 * match that is genuinely still in progress.
 */
import { prisma } from '@/lib/prisma'
import { recordCompetitiveAssignment } from '@/lib/assignment-autocomplete'

/**
 * How long after `startedAt` an IN_PROGRESS match is considered abandoned.
 * Longest real match (ACCURACY_CHALLENGE) is capped at 5 min server-side; we
 * add a wide safety margin so only truly dead games get reaped.
 */
export const STALE_MATCH_MS = 15 * 60 * 1000

interface SweepableGameData {
  isPracticeMatch?: boolean
  [key: string]: unknown
}

/**
 * Finalize a single match by id IF it is stale.
 *
 * Safe to call on any match id, in any state — it self-guards. Returns true
 * only if THIS call transitioned the match to COMPLETED (useful so a caller can
 * re-read fresh state), false otherwise (not stale, already finished, missing,
 * or lost the race). Never throws.
 */
export async function sweepStaleMatchById(matchId: string): Promise<boolean> {
  const cutoff = new Date(Date.now() - STALE_MATCH_MS)
  try {
    const swept = await prisma.$transaction(async (tx) => {
      // Lock the row first so a concurrent /complete, /answer, or sibling
      // sweeper can't interleave (mirrors match/[id]/complete).
      await tx.$queryRaw`SELECT id FROM "CompetitiveMatch" WHERE id = ${matchId} FOR UPDATE`

      const current = await tx.competitiveMatch.findUnique({
        where: { id: matchId },
        select: { status: true, startedAt: true },
      })

      // Re-check under the lock: only sweep a match that is STILL in progress
      // AND still older than the cutoff. Anything else is left untouched.
      if (!current || current.status !== 'IN_PROGRESS') return false
      if (!current.startedAt || current.startedAt > cutoff) return false

      // Mark abandoned: COMPLETED with no winner. We intentionally write NO
      // CompetitiveProfile / MMRHistory rows — same as the practice-match and
      // tie paths — so an abandoned game has zero ranked impact for either side.
      // (Status stays COMPLETED rather than CANCELLED because the match client
      //  only knows IN_PROGRESS/COMPLETED/PENDING and renders the end screen on
      //  COMPLETED+winnerId=null as a tie; CANCELLED would poll forever.)
      await tx.competitiveMatch.update({
        where: { id: matchId },
        data: {
          status: 'COMPLETED',
          winnerId: null,
          completedAt: new Date(),
        },
      })
      return true
    }, { timeout: 15000 })
    // Abandoned matches still carry real answer history — credit any matching
    // COMPETITIVE_PRACTICE assignments (best-effort, no-ops without one). Only
    // when THIS call did the transition, so credit records exactly once.
    if (swept) {
      await recordCompetitiveAssignment(matchId)
    }
    return swept
  } catch {
    // Best-effort: a lost race or transient DB hiccup must not break the
    // request that happened to trigger the sweep.
    return false
  }
}

/**
 * Sweep every stale IN_PROGRESS match a user is currently a participant in.
 *
 * Used by entry points that gate on "does this user have a live match?" (the
 * queue routes) so an abandoned game doesn't permanently block re-queueing.
 * Each match is finalized in its own locked transaction. Returns the number of
 * matches this call finalized. Never throws.
 */
export async function sweepStaleMatchesForUser(userId: string): Promise<number> {
  const cutoff = new Date(Date.now() - STALE_MATCH_MS)
  let swept = 0
  try {
    const stale = await prisma.competitiveMatch.findMany({
      where: {
        status: 'IN_PROGRESS',
        startedAt: { lt: cutoff },
        OR: [{ player1Id: userId }, { player2Id: userId }],
      },
      select: { id: true },
    })
    for (const m of stale) {
      if (await sweepStaleMatchById(m.id)) swept++
    }
  } catch {
    // Best-effort — never block the caller on cleanup.
  }
  return swept
}

// (Type kept for callers that want to detect practice matches when extending
//  this module; not used internally because abandonment writes no stats either
//  way, so the practice/ranked distinction is irrelevant to the sweep itself.)
export type { SweepableGameData }
