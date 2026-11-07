/**
 * Playback speed for self-hosted lesson videos. Every section starts at the
 * student's last chosen speed (kept per browser), or DEFAULT_VIDEO_SPEED when
 * they have never changed it. The owner narrates on the slow side, so the
 * default is a little above 1×.
 *
 * Speeds are clamped to MIN..MAX: the progress API credits playback up to 2×
 * (SPEED_ALLOWANCE in /api/video-lessons/[id]/progress), so a faster stored
 * speed would lose watch credit.
 */
export const DEFAULT_VIDEO_SPEED = 1.15
export const MIN_VIDEO_SPEED = 0.5
export const MAX_VIDEO_SPEED = 2
const KEY = 'sm-video-speed'

export function clampVideoSpeed(rate: number): number {
  if (!Number.isFinite(rate) || rate <= 0) return DEFAULT_VIDEO_SPEED
  return Math.min(MAX_VIDEO_SPEED, Math.max(MIN_VIDEO_SPEED, Math.round(rate * 100) / 100))
}

export function readVideoSpeed(): number {
  try {
    const raw = window.localStorage.getItem(KEY)
    return raw === null ? DEFAULT_VIDEO_SPEED : clampVideoSpeed(Number(raw))
  } catch {
    return DEFAULT_VIDEO_SPEED
  }
}

export function saveVideoSpeed(rate: number): void {
  try {
    window.localStorage.setItem(KEY, String(clampVideoSpeed(rate)))
  } catch {
    /* private mode or blocked storage: the speed just won't carry over */
  }
}
