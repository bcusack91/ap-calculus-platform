'use client'

import { useCallback, useEffect, useRef } from 'react'

/** Longest time on one card worth reporting; the server clamps to the same. */
export const MAX_CARD_MS = 60_000

/**
 * Visible time on one flashcard: from when it was shown to now, minus any
 * time the tab was hidden, capped at MAX_CARD_MS. Unlike the active clock
 * there is no idle rule — a student thinking about a card is working.
 * Pure and timer-free so it is testable with plain numbers.
 */
export function createCardTimer(now: number, visible = true) {
  let accruedMs = 0
  let visibleSince: number | null = visible ? now : null
  return {
    /** A new card is on screen: start over. */
    restart(at: number, isVisible: boolean) {
      accruedMs = 0
      visibleSince = isVisible ? at : null
    },
    setVisible(isVisible: boolean, at: number) {
      if (!isVisible && visibleSince != null) {
        accruedMs += Math.max(0, at - visibleSince)
        visibleSince = null
      } else if (isVisible && visibleSince == null) {
        visibleSince = at
      }
    },
    elapsedMs(at: number) {
      const open = visibleSince != null ? Math.max(0, at - visibleSince) : 0
      return Math.min(MAX_CARD_MS, Math.round(accruedMs + open))
    },
  }
}

/**
 * Time on the current card for the flashcard review log. `shownCard` is the
 * card object on screen; the timer restarts whenever it changes (every
 * rating replaces the queue, so even a returning card is a new object).
 * Returns a stable reader to call at rating time.
 */
export function useCardShownTimer(shownCard: unknown) {
  const timerRef = useRef<ReturnType<typeof createCardTimer> | null>(null)

  useEffect(() => {
    const isVisible = () => document.visibilityState !== 'hidden'
    timerRef.current = createCardTimer(Date.now(), isVisible())
    const onVisibility = () => timerRef.current?.setVisible(isVisible(), Date.now())
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  useEffect(() => {
    timerRef.current?.restart(Date.now(), document.visibilityState !== 'hidden')
  }, [shownCard])

  return useCallback(() => timerRef.current?.elapsedMs(Date.now()), [])
}
