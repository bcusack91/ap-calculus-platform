'use client'

import { useCallback, useEffect, useRef, useSyncExternalStore } from 'react'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useActiveClock } from '@/hooks/useActiveClock'
import { getActivityOverride, subscribeActivityOverride } from '@/hooks/useActivitySurface'
import { parseSegmentKey, segmentKey, surfaceForPath } from '@/lib/activity-surface'

const FLUSH_EVERY_MS = 60 * 1000
const ENDPOINT = '/api/activity/time'

/**
 * Site-wide active study time for signed-in students (teacher reports).
 *
 * One active clock for the whole app (hidden tab = 0, 2 minutes without
 * input = stop, timed tests count idle — src/lib/active-time.ts). Seconds are
 * banked against what the student is doing (the path default or a page's
 * useActivitySurface override) and sent about once a minute, plus a beacon
 * when the page is hidden or closed. Failed sends stay buffered for the next
 * one; the server clamps to wall time, so retries and extra tabs can't inflate.
 */
export default function ActiveTimeTracker() {
  const { status } = useSession()
  if (status !== 'authenticated') return null
  return <Tracker />
}

function Tracker() {
  const pathname = usePathname()
  const override = useSyncExternalStore(subscribeActivityOverride, getActivityOverride, () => null)
  const state = override ?? surfaceForPath(pathname)
  const key = segmentKey(state)
  const { take } = useActiveClock({ timed: !!state.timed })

  const keyRef = useRef(key)
  const bufferRef = useRef(new Map<string, number>())
  const inFlightRef = useRef(false)

  /** Move the clock's seconds into the buffer under the current segment. */
  const bank = useCallback(() => {
    const seconds = take()
    if (seconds <= 0) return
    const buf = bufferRef.current
    buf.set(keyRef.current, (buf.get(keyRef.current) ?? 0) + seconds)
  }, [take])

  const flush = useCallback(
    (useBeacon: boolean) => {
      bank()
      const buf = bufferRef.current
      const sent = [...buf.entries()].filter(([, s]) => s > 0)
      if (!sent.length) return
      const body = JSON.stringify({
        segments: sent.map(([k, seconds]) => ({ ...parseSegmentKey(k), seconds })),
        tzOffset: new Date().getTimezoneOffset(),
      })
      const settle = () => {
        for (const [k, s] of sent) {
          const left = (buf.get(k) ?? 0) - s
          if (left > 0) buf.set(k, left)
          else buf.delete(k)
        }
      }
      if (useBeacon) {
        const ok =
          typeof navigator.sendBeacon === 'function' &&
          navigator.sendBeacon(ENDPOINT, new Blob([body], { type: 'application/json' }))
        if (ok) settle()
        return
      }
      if (inFlightRef.current) return
      inFlightRef.current = true
      fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true })
        .then((res) => {
          if (res.ok) settle()
        })
        .catch(() => undefined)
        .finally(() => {
          inFlightRef.current = false
        })
    },
    [bank],
  )

  // Switching activity: bank the time so far against the old one.
  useEffect(() => {
    if (keyRef.current === key) return
    bank()
    keyRef.current = key
  }, [key, bank])

  useEffect(() => {
    const interval = setInterval(() => flush(false), FLUSH_EVERY_MS)
    const onHide = () => flush(true)
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') flush(true)
    }
    window.addEventListener('pagehide', onHide)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      clearInterval(interval)
      window.removeEventListener('pagehide', onHide)
      document.removeEventListener('visibilitychange', onVisibility)
      // Signing out unmounts the tracker: send what is left.
      flush(true)
    }
  }, [flush])

  return null
}
