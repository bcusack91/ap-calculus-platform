'use client'

import { useCallback, useSyncExternalStore } from 'react'

/**
 * "Include my own cards" — whether the review sessions mix the student's
 * own flashcards in with site cards. Defaults ON; remembered per browser
 * (a per-viewer convenience, so localStorage is fine, and every access is
 * guarded — blocked storage just means the default).
 */
const KEY = 'studymondo:flashcards:includeOwn'
const EVENT = 'studymondo:include-own-cards'
/** Fallback for this page's lifetime when localStorage is blocked. */
let memory: boolean | null = null

function read(): boolean {
  if (memory !== null) return memory
  try {
    return window.localStorage.getItem(KEY) !== '0'
  } catch {
    return true
  }
}

function subscribe(onChange: () => void): () => void {
  window.addEventListener('storage', onChange)
  window.addEventListener(EVENT, onChange)
  return () => {
    window.removeEventListener('storage', onChange)
    window.removeEventListener(EVENT, onChange)
  }
}

export function useIncludeOwnCards(): [boolean, (next: boolean) => void] {
  const include = useSyncExternalStore(subscribe, read, () => true)
  const set = useCallback((next: boolean) => {
    try {
      window.localStorage.setItem(KEY, next ? '1' : '0')
      memory = null
    } catch {
      memory = next // storage blocked: remember for this page view only
    }
    window.dispatchEvent(new Event(EVENT))
  }, [])
  return [include, set]
}
