'use client'

import { useEffect } from 'react'
import type { ActivityState } from '@/lib/activity-surface'

/**
 * Page-level override of the active-time tracker's surface. The newest
 * mounted override wins; unmounting restores the one below it (or the path
 * default). Module state rather than React context so the tracker, mounted
 * once in Providers, sees overrides from anywhere in the tree.
 */
let stack: { id: number; state: ActivityState }[] = []
let nextId = 1
const listeners = new Set<() => void>()
const emit = () => listeners.forEach((l) => l())

export function subscribeActivityOverride(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function getActivityOverride(): ActivityState | null {
  return stack.length ? stack[stack.length - 1].state : null
}

/**
 * Declare what this screen is while it is mounted, e.g.
 * `useActivitySurface(showExitQuiz ? { surface: 'EXIT_QUIZ', topicSlug } : null)`
 * or `useActivitySurface({ surface: 'FULL_LENGTH', courseSlug: 'mcat-prep', timed: running })`.
 * Pass null to defer to the path default.
 */
export function useActivitySurface(state: ActivityState | null): void {
  const key = state ? JSON.stringify(state) : null
  useEffect(() => {
    if (!key) return
    const entry = { id: nextId++, state: JSON.parse(key) as ActivityState }
    stack = [...stack, entry]
    emit()
    return () => {
      stack = stack.filter((e) => e.id !== entry.id)
      emit()
    }
  }, [key])
}
