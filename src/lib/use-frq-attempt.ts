'use client'

import { useEffect, useRef } from 'react'

/**
 * Record a free-response practice session once the student reaches the results
 * screen.
 *
 * FRQ work used to leave no trace: /api/frq/[course] is read-only and no page
 * ever posted a result, so a student could write a dozen responses, score them
 * against the rubric, and their teacher would see nothing.
 *
 * The 22 FRQ pages are independent copies of the same component, so this lives
 * here rather than in each of them. It watches the page's own `mode` state and
 * needs no other wiring:
 *
 *   useRecordFrqAttempt('ap-bio', mode, totalEarned, totalPossible, frqs.length)
 *
 * Both practice and timed sessions land on the same 'results' screen, so the
 * hook remembers the last working mode itself instead of every page having to
 * thread it through.
 *
 * Fire-and-forget: a logged-out student or a network blip must never cost the
 * student their results screen.
 */
export function useRecordFrqAttempt(
  courseKey: string,
  mode: string,
  pointsEarned: number,
  pointsPossible: number,
  frqCount: number,
) {
  const workingMode = useRef<'practice' | 'timed'>('practice')
  const submitted = useRef(false)

  useEffect(() => {
    if (mode === 'practice' || mode === 'timed') {
      workingMode.current = mode
      // A new session has started — allow the next results screen to record.
      submitted.current = false
    }
  }, [mode])

  useEffect(() => {
    if (mode !== 'results' || submitted.current) return
    // A set with no rubric points is a student who opened and left; nothing to record.
    if (!(pointsPossible > 0)) return
    submitted.current = true

    void fetch('/api/frq/attempt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        courseSlug: courseKey,
        mode: workingMode.current,
        pointsEarned,
        pointsPossible,
        frqCount,
      }),
    }).catch(() => {})
  }, [mode, courseKey, pointsEarned, pointsPossible, frqCount])
}
