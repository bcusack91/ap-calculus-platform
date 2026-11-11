'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, type ReactNode } from 'react'
import { useLiveRelay } from '@/hooks/useLiveRelay'
import type { RelayMessage } from '@/lib/live-relay-messages'

/**
 * One live-relay socket per live-session page, shared by the slide
 * presentation and the whiteboards (live-relay/). Components publish with
 * `send` and receive with `useRelayMessages`. Without a provider (other
 * pages, tests) the hooks are inert: `send` returns false and nothing arrives,
 * which is exactly the "no relay configured" behaviour.
 */
type Handler = (m: RelayMessage) => void

interface RelayContext {
  connected: boolean
  send: (m: RelayMessage) => boolean
  subscribe: (h: Handler) => () => void
}

const NOOP: RelayContext = { connected: false, send: () => false, subscribe: () => () => {} }
const Ctx = createContext<RelayContext>(NOOP)

export function LiveRelayProvider({ sessionId, enabled, children }: { sessionId: string; enabled: boolean; children: ReactNode }) {
  const handlers = useRef(new Set<Handler>())
  const onMessage = useCallback((m: RelayMessage) => {
    for (const h of handlers.current) h(m)
  }, [])
  const { connected, send } = useLiveRelay(sessionId, enabled, onMessage)
  const subscribe = useCallback((h: Handler) => {
    handlers.current.add(h)
    return () => {
      handlers.current.delete(h)
    }
  }, [])
  const value = useMemo(() => ({ connected, send, subscribe }), [connected, send, subscribe])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useRelay(): RelayContext {
  return useContext(Ctx)
}

/** Run `handler` for every relay message while mounted (always the latest handler). */
export function useRelayMessages(handler: Handler): void {
  const { subscribe } = useRelay()
  const ref = useRef(handler)
  useEffect(() => {
    ref.current = handler
  }, [handler])
  useEffect(() => subscribe((m) => ref.current(m)), [subscribe])
}
