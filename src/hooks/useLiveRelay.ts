'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { isRelayMessage, type RelayMessage } from '@/lib/live-relay-messages'

/**
 * A WebSocket to the live relay (live-relay/) for one live session, while
 * `enabled`. Fetches a token from /api/live-sessions/[id]/relay, reconnects
 * with backoff (a fresh token each time) and keeps the socket alive with a
 * ping every 25 s. When the relay isn't configured the hook does nothing and
 * the page keeps working through its polls.
 *
 * `send` returns false when there's no open socket; callers never wait on it.
 */
export function useLiveRelay(sessionId: string, enabled: boolean, onMessage: (m: RelayMessage) => void) {
  const [connected, setConnected] = useState(false)
  const wsRef = useRef<WebSocket | null>(null)
  const onMessageRef = useRef(onMessage)
  useEffect(() => {
    onMessageRef.current = onMessage
  }, [onMessage])

  useEffect(() => {
    if (!enabled || typeof WebSocket === 'undefined') return
    let stopped = false
    let attempt = 0
    let timer: ReturnType<typeof setTimeout> | undefined
    let ping: ReturnType<typeof setInterval> | undefined

    const connect = async () => {
      if (stopped) return
      let info: { url: string | null; token?: string } | null = null
      try {
        const r = await fetch(`/api/live-sessions/${sessionId}/relay`, { cache: 'no-store' })
        if (r.ok) info = (await r.json()) as { url: string | null; token?: string }
      } catch {
        /* transient: retried below */
      }
      if (stopped) return
      if (!info?.url || !info.token) {
        // Not configured (a long, quiet retry in case it gets configured
        // mid-session) or a transient error (a short one).
        timer = setTimeout(() => void connect(), info && !info.url ? 60_000 : 5_000)
        return
      }
      const ws = new WebSocket(`${info.url.replace(/\/$/, '')}/session/${encodeURIComponent(sessionId)}?token=${encodeURIComponent(info.token)}`)
      wsRef.current = ws
      ws.onopen = () => {
        attempt = 0
        setConnected(true)
        ping = setInterval(() => {
          if (ws.readyState === WebSocket.OPEN) ws.send('ping')
        }, 25_000)
      }
      ws.onmessage = (ev) => {
        if (typeof ev.data !== 'string' || ev.data === 'pong') return
        let m: unknown
        try {
          m = JSON.parse(ev.data)
        } catch {
          return
        }
        if (isRelayMessage(m)) onMessageRef.current(m)
      }
      ws.onclose = () => {
        if (wsRef.current === ws) wsRef.current = null
        setConnected(false)
        if (ping) clearInterval(ping)
        ping = undefined
        if (stopped) return
        attempt += 1
        timer = setTimeout(() => void connect(), Math.min(15_000, 1000 * 2 ** Math.min(attempt, 4)))
      }
      ws.onerror = () => {
        /* onclose follows */
      }
    }
    void connect()
    return () => {
      stopped = true
      if (timer) clearTimeout(timer)
      if (ping) clearInterval(ping)
      const ws = wsRef.current
      wsRef.current = null
      setConnected(false)
      if (ws) {
        try {
          ws.close()
        } catch {
          /* already closed */
        }
      }
    }
  }, [sessionId, enabled])

  const send = useCallback((m: RelayMessage): boolean => {
    const ws = wsRef.current
    if (!ws || ws.readyState !== WebSocket.OPEN) return false
    ws.send(JSON.stringify(m))
    return true
  }, [])

  return { connected, send }
}
