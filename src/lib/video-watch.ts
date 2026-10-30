/**
 * Watched-time bookkeeping for video lessons. Client-safe and pure.
 *
 * A clip's watch record is a list of [start, end] second ranges that actually
 * played. The player adds a range only for contiguous playback, so seeking
 * ahead never counts as watching; ranges are merged so rewatching a stretch
 * doesn't count twice. A clip is watched once at least WATCHED_FRACTION of
 * its length has played.
 */

export type WatchRange = [number, number]

export const WATCHED_FRACTION = 0.9
/** Gaps up to this many seconds between ranges are closed when merging (sampling jitter). */
const MERGE_GAP_S = 1
/** A sample step longer than this is a seek, not playback. */
export const MAX_CONTIGUOUS_STEP_S = 2.5

function isRange(r: unknown): r is WatchRange {
  return Array.isArray(r) && r.length === 2 && r.every((n) => typeof n === 'number' && Number.isFinite(n))
}

/** Sort, drop invalid ranges, clamp to [0, durationSec] when given, and merge overlaps. */
export function mergeRanges(ranges: readonly unknown[], durationSec?: number): WatchRange[] {
  const cap = durationSec && durationSec > 0 ? durationSec : Infinity
  const clean = ranges
    .filter(isRange)
    .map(([a, b]) => [Math.max(0, Math.min(a, b)), Math.min(cap, Math.max(a, b))] as WatchRange)
    .filter(([a, b]) => b > a)
    .sort((x, y) => x[0] - y[0])
  const out: WatchRange[] = []
  for (const r of clean) {
    const last = out[out.length - 1]
    if (last && r[0] <= last[1] + MERGE_GAP_S) last[1] = Math.max(last[1], r[1])
    else out.push([r[0], r[1]])
  }
  return out
}

export function watchedSeconds(ranges: readonly unknown[], durationSec?: number): number {
  return mergeRanges(ranges, durationSec).reduce((s, [a, b]) => s + (b - a), 0)
}

export function watchedFraction(ranges: readonly unknown[], durationSec: number): number {
  if (!(durationSec > 0)) return 0
  return Math.min(1, watchedSeconds(ranges, durationSec) / durationSec)
}

export function isClipWatched(ranges: readonly unknown[], durationSec: number): boolean {
  return durationSec > 0 && watchedFraction(ranges, durationSec) >= WATCHED_FRACTION - 1e-9
}

/**
 * Add one playback sample step (the player position moved from `from` to
 * `to` while playing). A backwards move or a jump longer than
 * MAX_CONTIGUOUS_STEP_S is a seek and adds nothing.
 */
export function addPlayback(ranges: readonly WatchRange[], from: number, to: number, durationSec?: number): WatchRange[] {
  const step = to - from
  if (!(step > 0) || step > MAX_CONTIGUOUS_STEP_S) return mergeRanges(ranges, durationSec)
  return mergeRanges([...ranges, [from, to]], durationSec)
}

/** Seconds in `next` that `prev` did not already cover (what a save newly claims). */
export function newlyWatchedSeconds(prev: readonly unknown[], next: readonly unknown[], durationSec?: number): number {
  return Math.max(0, watchedSeconds([...prev, ...next], durationSec) - watchedSeconds(prev, durationSec))
}
