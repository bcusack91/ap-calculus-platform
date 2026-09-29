/**
 * Active study time — the one rule every time figure a teacher sees follows.
 *
 * Time counts only while the page is visible AND the student has touched it
 * (pointer, key, scroll, wheel, touch) within the last IDLE_AFTER_MS, or while
 * a timed test is running (reading a passage without scrolling is still
 * work). A hidden tab never counts; neither does a paused clock (e.g. the
 * lesson clock while its entrance or exit quiz is on screen, which has its
 * own surface). Owner decision 2026-09-29: 2 minutes.
 *
 * Pure and timer-free: callers feed events and read whole seconds, so the
 * logic is testable with plain numbers. useActiveClock wires it to the DOM.
 */
export const IDLE_AFTER_MS = 2 * 60 * 1000

export interface ActiveClock {
  /** Any student input. */
  input(now: number): void
  /** Tab visibility changed. Becoming visible counts as input. */
  setVisible(visible: boolean, now: number): void
  /** Stop or restart counting regardless of input (e.g. a quiz overlay). */
  setPaused(paused: boolean, now: number): void
  /** While true, idle time counts (a running timed test). */
  setTimed(timed: boolean, now: number): void
  /** Take the whole seconds accrued since the last take; the remainder stays. */
  take(now: number): number
  /** Return seconds a failed save could not deliver, so they go with the next one. */
  giveBack(seconds: number): void
  /** Seconds accrued and not yet taken (for display and tests). */
  peek(now: number): number
}

export function createActiveClock(start: number, idleAfterMs = IDLE_AFTER_MS): ActiveClock {
  let accruedMs = 0
  let lastInputAt = start
  let visible = true
  let paused = false
  let timed = false
  // Start of the open counting interval, or null while not counting.
  let countingSince: number | null = start

  const eligible = () => visible && !paused
  const counting = (now: number) => eligible() && (timed || now - lastInputAt <= idleAfterMs)

  /** Bank the open interval up to `now` (or up to where idleness began). */
  const settle = (now: number) => {
    if (countingSince != null) {
      const end = timed ? now : Math.min(now, lastInputAt + idleAfterMs)
      if (end > countingSince) accruedMs += end - countingSince
    }
    countingSince = counting(now) ? now : null
  }

  return {
    input(now) {
      settle(now)
      lastInputAt = now
      if (eligible()) countingSince = now
    },
    setVisible(v, now) {
      settle(now)
      visible = v
      if (v) lastInputAt = now
      countingSince = counting(now) ? now : null
    },
    setPaused(p, now) {
      if (p === paused) return
      settle(now)
      paused = p
      if (!p) lastInputAt = now
      countingSince = counting(now) ? now : null
    },
    setTimed(t, now) {
      if (t === timed) return
      settle(now)
      timed = t
      if (!t) lastInputAt = now
      countingSince = counting(now) ? now : null
    },
    take(now) {
      settle(now)
      const seconds = Math.floor(accruedMs / 1000)
      accruedMs -= seconds * 1000
      return seconds
    },
    giveBack(seconds) {
      if (seconds > 0) accruedMs += seconds * 1000
    },
    peek(now) {
      let ms = accruedMs
      if (countingSince != null) {
        const end = timed ? now : Math.min(now, lastInputAt + idleAfterMs)
        if (end > countingSince) ms += end - countingSince
      }
      return Math.floor(ms / 1000)
    },
  }
}
