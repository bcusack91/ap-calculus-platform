'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Search } from 'lucide-react'

/** Seconds in queue before we surface the "no opponent yet" fallback. */
export const QUEUE_FALLBACK_AFTER_SEC = 45

/**
 * Seconds after which callers should stop polling and leave the queue —
 * a shared ceiling so no page polls the matchmaking endpoint forever.
 */
export const QUEUE_POLL_TIMEOUT_SEC = 180

/**
 * Ticks a whole-second elapsed counter while `active` is true; resets to 0
 * when it flips back on. All setState happens inside the interval callback.
 */
export function useQueueElapsed(active: boolean): number {
  const [now, setNow] = useState(0)
  const startRef = useRef<number | null>(null)
  useEffect(() => {
    if (!active) {
      startRef.current = null
      return
    }
    startRef.current = Date.now()
    const i = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(i)
  }, [active])
  if (!active || startRef.current === null) return 0
  return Math.max(0, Math.floor((now - startRef.current) / 1000))
}

export function formatElapsed(totalSec: number): string {
  const m = Math.floor(totalSec / 60)
  const s = totalSec % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

interface QueueSearchPanelProps {
  position?: number
  estimatedWait?: number
  onCancel: () => void
  /**
   * Extra actions rendered once the fallback threshold passes (e.g. a
   * "practice vs AI instead" button). The hint text always appears.
   */
  fallback?: ReactNode
}

/**
 * Shared "searching for opponent" state for every competitive queue page:
 * animated pulse, live elapsed time, and — after ~45s — an honest fallback
 * pointing at ways to play that don't need a concurrent opponent.
 */
export default function QueueSearchPanel({ position, estimatedWait, onCancel, fallback }: QueueSearchPanelProps) {
  const elapsed = useQueueElapsed(true)
  const showFallback = elapsed >= QUEUE_FALLBACK_AFTER_SEC

  return (
    <div className="text-center">
      <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-light opacity-60" aria-hidden />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent-subtle">
          <Search className="h-6 w-6 animate-pulse text-accent" aria-hidden />
        </span>
      </div>
      <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Searching for opponent…</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        <span className="font-mono tabular-nums">{formatElapsed(elapsed)}</span> elapsed
        {position !== undefined && <> · Queue position {position}</>}
        {estimatedWait !== undefined && <> · Est. wait ~{estimatedWait}s</>}
      </p>

      {showFallback && (
        <div className="mx-auto mt-4 max-w-md rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-700/50 dark:bg-amber-900/20 dark:text-amber-300">
          No opponent yet — matchmaking depends on who&apos;s online right now. You can keep
          waiting, practice vs AI, or send an async challenge link a friend can play later.
        </div>
      )}
      {showFallback && fallback}

      <div className="mt-4">
        <button
          onClick={onCancel}
          className="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
