'use client'

import { useCallback, useEffect, useRef } from 'react'
import { createActiveClock, type ActiveClock } from '@/lib/active-time'

const INPUT_EVENTS = ['pointerdown', 'pointermove', 'keydown', 'wheel', 'touchstart', 'scroll'] as const

/**
 * An ActiveClock wired to this page's input and visibility events.
 * `paused` stops counting (e.g. while a quiz overlay owns the screen);
 * `timed` counts idle time too (a running timed test). Returns stable
 * `take()` / `giveBack()` for savers: take before sending, give back on
 * failure so a rejected save never loses time.
 */
export function useActiveClock({ paused = false, timed = false }: { paused?: boolean; timed?: boolean } = {}) {
  const clockRef = useRef<ActiveClock | null>(null)

  useEffect(() => {
    const clock = createActiveClock(Date.now())
    clock.setVisible(document.visibilityState !== 'hidden', Date.now())
    clockRef.current = clock
    // pointermove fires constantly; one input mark per second is plenty.
    let lastMove = 0
    const onInput = (e: Event) => {
      const now = Date.now()
      if (e.type === 'pointermove') {
        if (now - lastMove < 1000) return
        lastMove = now
      }
      clock.input(now)
    }
    const onVisibility = () => clock.setVisible(document.visibilityState !== 'hidden', Date.now())
    for (const type of INPUT_EVENTS) window.addEventListener(type, onInput, { passive: true, capture: true })
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      for (const type of INPUT_EVENTS) window.removeEventListener(type, onInput, { capture: true })
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  useEffect(() => {
    clockRef.current?.setPaused(paused, Date.now())
  }, [paused])

  useEffect(() => {
    clockRef.current?.setTimed(timed, Date.now())
  }, [timed])

  const take = useCallback(() => clockRef.current?.take(Date.now()) ?? 0, [])
  const giveBack = useCallback((seconds: number) => clockRef.current?.giveBack(seconds), [])
  return { take, giveBack }
}
