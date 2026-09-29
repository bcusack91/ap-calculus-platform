'use client'

import { useCallback, useEffect, useRef } from 'react'
import { useActiveClock } from '@/hooks/useActiveClock'

type Body = Record<string, unknown>

/**
 * Lesson progress saving with active study time attached.
 *
 * `sendProgress(body)` posts to /api/progress/save with the seconds the
 * active clock has accrued since the last save, and hands those seconds back
 * to the clock when the save fails — the old renderers cleared their counter
 * before sending, so every rejected save silently lost time.
 *
 * `unloadPayload()` describes the lesson's current state for the last save:
 * it is sent (with any unsaved time) when the page is hidden or unloaded and
 * when the lesson unmounts on in-app navigation. Return null to skip (e.g.
 * signed out, or the topic is not resolved yet).
 *
 * `paused` stops the clock — the lesson's entrance and exit quizzes are
 * timed as their own activity, not as lesson time.
 */
export function useLessonProgressSaver({
  paused,
  unloadPayload,
}: {
  paused: boolean
  unloadPayload: () => Body | null
}) {
  const { take, giveBack } = useActiveClock({ paused })
  const payloadRef = useRef(unloadPayload)
  useEffect(() => {
    payloadRef.current = unloadPayload
  })

  const sendProgress = useCallback(
    async (body: Body): Promise<Response> => {
      const timeSpent = take()
      try {
        const res = await fetch('/api/progress/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...body, timeSpent }),
        })
        if (!res.ok) giveBack(timeSpent)
        return res
      } catch (err) {
        giveBack(timeSpent)
        throw err
      }
    },
    [take, giveBack],
  )

  useEffect(() => {
    const flush = () => {
      const payload = payloadRef.current()
      if (!payload) return
      const timeSpent = take()
      if (timeSpent <= 0) return
      const sent =
        typeof navigator !== 'undefined' &&
        typeof navigator.sendBeacon === 'function' &&
        navigator.sendBeacon(
          '/api/progress/save',
          new Blob([JSON.stringify({ ...payload, timeSpent })], { type: 'application/json' }),
        )
      if (!sent) giveBack(timeSpent)
    }
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') flush()
    }
    window.addEventListener('pagehide', flush)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      window.removeEventListener('pagehide', flush)
      document.removeEventListener('visibilitychange', onVisibility)
      flush()
    }
  }, [take, giveBack])

  return { sendProgress }
}
