'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Pop the live video + chat out into their own window (teachers on multiple
 * monitors). Only one window may hold the call — two would join the
 * conference twice and echo — so the class page hides its video and chat
 * while a pop-out is alive and brings them back when it closes.
 *
 * The windows talk over a BroadcastChannel; the class page also watches the
 * window handle it opened, and treats a pop-out that stops pinging (crash,
 * killed tab) as closed.
 */

const ALIVE_MS = 2000
const STALE_MS = 6000
/** How long the class page waits for an already-open pop-out to answer before mounting its own video. */
const PROBE_MS = 500

type Msg = { type: 'hello' | 'alive' | 'closed' | 'probe' | 'close' }

const channelName = (sessionId: string) => `studymondo-live-popout-${sessionId}`
export const popoutPath = (sessionId: string) => `/live/${sessionId}/popout`
const windowName = (sessionId: string) => `studymondo-live-${sessionId}`

function openChannel(sessionId: string): BroadcastChannel | null {
  return typeof BroadcastChannel === 'undefined' ? null : new BroadcastChannel(channelName(sessionId))
}

/** The class page's side. `ready` is false until it knows whether a pop-out already holds the call. */
export function useLivePopoutHost(sessionId: string) {
  const [poppedOut, setPoppedOut] = useState(false)
  const [ready, setReady] = useState(false)
  const [blocked, setBlocked] = useState(false)
  const channelRef = useRef<BroadcastChannel | null>(null)
  const windowRef = useRef<Window | null>(null)
  const lastAliveRef = useRef(0)

  useEffect(() => {
    const ch = openChannel(sessionId)
    channelRef.current = ch
    const onMessage = (e: MessageEvent<Msg>) => {
      const t = e.data?.type
      if (t === 'hello' || t === 'alive') {
        lastAliveRef.current = Date.now()
        setPoppedOut(true)
        setReady(true)
      } else if (t === 'closed') {
        lastAliveRef.current = 0
        setPoppedOut(false)
      }
    }
    ch?.addEventListener('message', onMessage)
    ch?.postMessage({ type: 'probe' } satisfies Msg)
    const probe = setTimeout(() => setReady(true), PROBE_MS)
    const watchdog = setInterval(() => {
      const w = windowRef.current
      const handleClosed = !!w && w.closed
      const stale = lastAliveRef.current > 0 && Date.now() - lastAliveRef.current > STALE_MS
      if (handleClosed || stale) {
        windowRef.current = handleClosed ? null : windowRef.current
        lastAliveRef.current = 0
        setPoppedOut(false)
      }
    }, 1000)
    return () => {
      clearTimeout(probe)
      clearInterval(watchdog)
      ch?.removeEventListener('message', onMessage)
      ch?.close()
      channelRef.current = null
    }
  }, [sessionId])

  const open = useCallback(() => {
    const w = window.open(popoutPath(sessionId), windowName(sessionId), 'popup,width=1100,height=760')
    if (!w) {
      setBlocked(true)
      return
    }
    setBlocked(false)
    windowRef.current = w
    lastAliveRef.current = Date.now()
    setPoppedOut(true)
    w.focus()
  }, [sessionId])

  const bringBack = useCallback(() => {
    channelRef.current?.postMessage({ type: 'close' } satisfies Msg)
    windowRef.current?.close()
    windowRef.current = null
    lastAliveRef.current = 0
    setPoppedOut(false)
  }, [])

  return { poppedOut, ready, blocked, open, bringBack }
}

/** The pop-out window's side: announce itself, keep pinging, close on request. */
export function useLivePopoutGuest(sessionId: string) {
  useEffect(() => {
    const ch = openChannel(sessionId)
    const send = (type: Msg['type']) => ch?.postMessage({ type } satisfies Msg)
    const onMessage = (e: MessageEvent<Msg>) => {
      if (e.data?.type === 'probe') send('alive')
      else if (e.data?.type === 'close') window.close()
    }
    ch?.addEventListener('message', onMessage)
    send('hello')
    const t = setInterval(() => send('alive'), ALIVE_MS)
    const onLeave = () => send('closed')
    window.addEventListener('pagehide', onLeave)
    return () => {
      clearInterval(t)
      window.removeEventListener('pagehide', onLeave)
      send('closed')
      ch?.removeEventListener('message', onMessage)
      ch?.close()
    }
  }, [sessionId])
}
