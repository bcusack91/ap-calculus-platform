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
  // Once the video has been popped out, rejoining here skips the pre-join screen.
  const [hasPoppedOut, setHasPoppedOut] = useState(false)
  const channelRef = useRef<BroadcastChannel | null>(null)
  // The class page's own call must finish hanging up before its video is
  // removed (see leaveCall); a pop-out that announces itself meanwhile waits.
  const leavingRef = useRef<Promise<void>>(Promise.resolve())
  const windowRef = useRef<Window | null>(null)
  const lastAliveRef = useRef(0)

  useEffect(() => {
    const ch = openChannel(sessionId)
    channelRef.current = ch
    const onMessage = (e: MessageEvent<Msg>) => {
      const t = e.data?.type
      if (t === 'hello' || t === 'alive') {
        lastAliveRef.current = Date.now()
        void leavingRef.current.then(() => {
          setPoppedOut(true)
          setHasPoppedOut(true)
          setReady(true)
        })
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

  /** Open the pop-out. `beforeHide` runs before this page's video is removed (hang up the call first). */
  const open = useCallback((beforeHide?: () => Promise<void>) => {
    // Synchronously, inside the click, or the browser blocks the window.
    const w = window.open(popoutPath(sessionId), windowName(sessionId), 'popup,width=1100,height=760')
    if (!w) {
      setBlocked(true)
      return
    }
    setBlocked(false)
    windowRef.current = w
    lastAliveRef.current = Date.now()
    w.focus()
    const leaving = (beforeHide?.() ?? Promise.resolve()).catch(() => {})
    leavingRef.current = leaving
    void leaving.then(() => {
      setPoppedOut(true)
      setHasPoppedOut(true)
    })
  }, [sessionId])

  const bringBack = useCallback(() => {
    channelRef.current?.postMessage({ type: 'close' } satisfies Msg)
    windowRef.current?.close()
    windowRef.current = null
    lastAliveRef.current = 0
    setPoppedOut(false)
  }, [])

  return { poppedOut, ready, blocked, hasPoppedOut, open, bringBack }
}

/**
 * The pop-out window's side: announce itself, keep pinging, close on request.
 * `beforeClose` runs first (hang up the call so no ghost stays in the room).
 */
export function useLivePopoutGuest(sessionId: string, beforeClose?: () => Promise<void>) {
  const beforeCloseRef = useRef(beforeClose)
  useEffect(() => {
    beforeCloseRef.current = beforeClose
  }, [beforeClose])
  useEffect(() => {
    const ch = openChannel(sessionId)
    const send = (type: Msg['type']) => ch?.postMessage({ type } satisfies Msg)
    const onMessage = (e: MessageEvent<Msg>) => {
      if (e.data?.type === 'probe') send('alive')
      else if (e.data?.type === 'close') {
        void (beforeCloseRef.current?.() ?? Promise.resolve()).catch(() => {}).then(() => window.close())
      }
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
