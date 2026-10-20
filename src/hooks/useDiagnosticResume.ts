'use client'

/**
 * Mid-sitting resume for the AP diagnostics (v1 pages and the shared v2
 * page). The sitting lives in React state while the student works; this hook
 * mirrors it to localStorage on every answer, navigation and clock tick, so
 * a closed tab, a refresh or "Save and exit" can pick up where it left off.
 *
 * What is saved: the served question set exactly as shown (options already
 * shuffled, so the stored `correctAnswer` matches), the answers, eliminated
 * options, the current index and the clock's remaining seconds. The clock is
 * restored from that saved value, not from wall-clock time, so time away
 * does not count. Nothing is stored server-side until the sitting is
 * submitted.
 *
 * Stale guard: a page passes `validate`, which regenerates (v1: the same
 * form) or looks up (v2: the bank) the served items and compares them to the
 * saved copy. A saved sitting whose items no longer match the current bank
 * is offered as "Start over" only.
 *
 * Every storage access is wrapped: private windows and blocked storage just
 * mean no resume.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { trackApDiagnosticDiscard, trackApDiagnosticResume } from '@/lib/analytics'

export type DiagnosticPhase = 'menu' | 'testing' | 'results'

/** The least a diagnostic's test data must carry for the hook to work. */
export interface ResumableTestData {
  questions: { question: string; options: string[] }[]
}

export interface SavedDiagnosticSitting<T extends ResumableTestData> {
  v: 1
  testData: T
  answers: (number | null)[]
  /** Eliminated option indices per question (Sets serialise to arrays). */
  eliminated: number[][]
  currentIndex: number
  /** Seconds left on the clock when last saved. */
  timeRemaining: number
  savedAt: number
}

/** What the page restores into state when the student resumes. */
export interface RestoredDiagnosticSitting<T extends ResumableTestData> {
  testData: T
  answers: (number | null)[]
  eliminated: Set<number>[]
  currentIndex: number
  timeRemaining: number
}

/** What the menu shows for an unfinished sitting. */
export interface ResumableSummary {
  answered: number
  total: number
  /** Whole minutes left, rounded up (never 0 while resumable). */
  minutesLeft: number
  /** The saved items no longer match the current bank: Start over only. */
  stale: boolean
}

export function diagnosticResumeKey(userId: string, course: string, version: number): string {
  return `ap-diagnostic-inprogress-v1:${userId}:${course}:v${version}`
}

/**
 * True when the saved question set is the one the current bank would serve:
 * same length, same stems in the same order, same option texts (order-free,
 * since options are shuffled per sitting).
 */
export function sameQuestionSet(
  saved: { question: string; options: string[] }[],
  fresh: { question: string; options: string[] }[],
): boolean {
  if (saved.length !== fresh.length || saved.length === 0) return false
  return saved.every((s, i) => {
    const f = fresh[i]
    if (!f || s.question !== f.question || s.options.length !== f.options.length) return false
    const a = [...s.options].sort()
    const b = [...f.options].sort()
    return a.every((o, j) => o === b[j])
  })
}

const isRec = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v)

/** Parse a stored value; null unless it is a well-formed, still-timed v1 sitting. */
export function parseSavedSitting<T extends ResumableTestData>(raw: string | null): SavedDiagnosticSitting<T> | null {
  if (!raw) return null
  try {
    const p = JSON.parse(raw) as unknown
    if (!isRec(p) || p.v !== 1 || !isRec(p.testData)) return null
    const questions = p.testData.questions
    if (!Array.isArray(questions) || questions.length === 0) return null
    if (!questions.every((q) => isRec(q) && typeof q.question === 'string' && Array.isArray(q.options))) return null
    if (!Array.isArray(p.answers) || p.answers.length !== questions.length) return null
    if (!p.answers.every((a) => a === null || typeof a === 'number')) return null
    if (typeof p.currentIndex !== 'number' || typeof p.timeRemaining !== 'number') return null
    if (!Number.isFinite(p.timeRemaining) || p.timeRemaining <= 0) return null
    const eliminated = Array.isArray(p.eliminated) ? p.eliminated : []
    return {
      v: 1,
      testData: p.testData as unknown as T,
      answers: p.answers as (number | null)[],
      eliminated: questions.map((_, i) => {
        const e = eliminated[i]
        return Array.isArray(e) ? e.filter((n): n is number => typeof n === 'number') : []
      }),
      currentIndex: Math.min(Math.max(0, Math.floor(p.currentIndex)), questions.length - 1),
      timeRemaining: Math.floor(p.timeRemaining),
      savedAt: typeof p.savedAt === 'number' ? p.savedAt : 0,
    }
  } catch {
    return null
  }
}

export function readSavedSitting<T extends ResumableTestData>(key: string): SavedDiagnosticSitting<T> | null {
  if (typeof window === 'undefined') return null
  try {
    return parseSavedSitting<T>(window.localStorage.getItem(key))
  } catch {
    return null
  }
}

export function writeSavedSitting<T extends ResumableTestData>(key: string, sitting: SavedDiagnosticSitting<T>): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(key, JSON.stringify(sitting))
  } catch {
    // Private mode or quota: resume is a convenience, never a requirement.
  }
}

export function clearSavedSitting(key: string): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem(key)
  } catch {
    // storage unavailable
  }
}

export interface UseDiagnosticResumeOptions<T extends ResumableTestData> {
  /** Signed-in user; no key (and no resume) until it is known. */
  userId: string | null | undefined
  /** Course key, e.g. `ap-chem`, `calcab`. */
  course: string
  /** Diagnostic version: 1 for the form pages, 2 for the blueprint page. */
  version: 1 | 2
  phase: DiagnosticPhase
  testData: T | null
  answers: (number | null)[]
  eliminated: Set<number>[]
  currentIndex: number
  timeRemaining: number
  /**
   * Whether the saved items still match the current bank. Called once when a
   * saved sitting is read (and again whenever `ready` flips to true).
   */
  validate?: (testData: T) => boolean
  /** False while the page cannot validate yet (e.g. the bank is still loading). */
  ready?: boolean
}

export interface DiagnosticResume<T extends ResumableTestData> {
  /** The unfinished sitting offered on the menu; null when there is none. */
  resumable: ResumableSummary | null
  /** Take the saved sitting to restore into state (fires `ap_diagnostic_resume`). Null when nothing resumable. */
  restore: () => RestoredDiagnosticSitting<T> | null
  /** Drop the saved sitting on purpose (fires `ap_diagnostic_discard`). */
  discard: () => void
  /** Drop the saved sitting silently (after a submit). */
  clear: () => void
}

export function useDiagnosticResume<T extends ResumableTestData>(opts: UseDiagnosticResumeOptions<T>): DiagnosticResume<T> {
  const { userId, course, version, phase, testData, answers, eliminated, currentIndex, timeRemaining, validate, ready = true } = opts
  const key = userId ? diagnosticResumeKey(userId, course, version) : null

  const [pending, setPending] = useState<{ saved: SavedDiagnosticSitting<T>; stale: boolean } | null>(null)
  const validateRef = useRef(validate)
  useEffect(() => { validateRef.current = validate })

  // Read the saved sitting whenever the menu is shown. localStorage is an
  // external store, so read it from a callback rather than synchronously in
  // the effect body; `storage` keeps two tabs in step.
  const offering = !!key && phase === 'menu' && ready
  useEffect(() => {
    if (!offering || !key) return
    let cancelled = false
    const read = () => {
      if (cancelled) return
      const saved = readSavedSitting<T>(key)
      if (!saved) {
        setPending(null)
        return
      }
      let stale = false
      try {
        stale = validateRef.current ? !validateRef.current(saved.testData) : false
      } catch {
        stale = true
      }
      setPending({ saved, stale })
    }
    queueMicrotask(read)
    window.addEventListener('storage', read)
    return () => {
      cancelled = true
      window.removeEventListener('storage', read)
    }
  }, [key, offering])

  // Mirror the open sitting on every answer, move and tick; drop it once
  // the sitting is submitted (including a clock-expiry auto-submit).
  useEffect(() => {
    if (!key) return
    if (phase === 'results') {
      clearSavedSitting(key)
      return
    }
    if (phase !== 'testing' || !testData || timeRemaining <= 0) return
    writeSavedSitting<T>(key, {
      v: 1,
      testData,
      answers,
      eliminated: eliminated.map((s) => [...s]),
      currentIndex,
      timeRemaining,
      savedAt: Date.now(),
    })
  }, [key, phase, testData, answers, eliminated, currentIndex, timeRemaining])

  const resumable = useMemo<ResumableSummary | null>(() => {
    if (!offering || !pending) return null
    const { saved, stale } = pending
    return {
      answered: saved.answers.filter((a) => a !== null).length,
      total: saved.testData.questions.length,
      minutesLeft: Math.max(1, Math.ceil(saved.timeRemaining / 60)),
      stale,
    }
  }, [offering, pending])

  const restore = useCallback((): RestoredDiagnosticSitting<T> | null => {
    if (!offering || !pending || pending.stale) return null
    const { saved } = pending
    trackApDiagnosticResume(course, version, saved.answers.filter((a) => a !== null).length, saved.testData.questions.length)
    return {
      testData: saved.testData,
      answers: [...saved.answers],
      eliminated: saved.eliminated.map((e) => new Set(e)),
      currentIndex: saved.currentIndex,
      timeRemaining: saved.timeRemaining,
    }
  }, [offering, pending, course, version])

  const clear = useCallback(() => {
    if (key) clearSavedSitting(key)
    setPending(null)
  }, [key])

  const discard = useCallback(() => {
    const saved = pending?.saved ?? (key ? readSavedSitting<T>(key) : null)
    trackApDiagnosticDiscard(
      course,
      version,
      saved ? saved.answers.filter((a) => a !== null).length : answers.filter((a) => a !== null).length,
      saved ? saved.testData.questions.length : testData?.questions.length ?? 0,
    )
    clear()
  }, [pending, key, course, version, answers, testData, clear])

  return useMemo(() => ({ resumable, restore, discard, clear }), [resumable, restore, discard, clear])
}
