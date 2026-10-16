/**
 * Which diagnostic questions a student has already been served, across
 * devices.
 *
 * The self-serve MCAT and SAT diagnostics avoid repeats by excluding "seen"
 * question keys when generating a test. That memory lived only in the
 * browser's localStorage, so a student who sat one attempt in a school lab
 * and the next at home could be served the same items. This module is the
 * single place both pages read and record seen keys; it merges the browser's
 * copy with the server's (keys recovered from the student's stored attempts —
 * every submitted attempt keeps its served questions under
 * `results.review.questions`, so no schema change is needed).
 *
 * Keys are opaque strings: question ids, and for the SAT the passage-aware
 * stem fingerprints from `seenKeysForQuestion` (some pools reuse text under
 * new ids).
 *
 * Coverage: a SUBMITTED attempt is remembered server-side and therefore on
 * every device. A sitting the student generates and then abandons is
 * remembered only by the browser it was generated in (the POST is accepted
 * but not persisted — there is no per-user slot for it without a schema
 * change).
 */

/**
 * Courses with seen tracking. AP diagnostic v2 courses use their existing API
 * base (`/api/ap-chem-diagnostic/seen`, `/api/calcab-diagnostic/seen`, …) and
 * the same id + text fingerprints as the SAT (`apSeenKeysForQuestion`).
 */
export type DiagnosticCourse = 'mcat' | 'sat' | 'ap-chem' | 'ap-bio' | 'ap-physics1' | 'calcab'

const STORAGE_KEY: Record<DiagnosticCourse, string> = {
  mcat: 'mcat-diagnostic-seen-v1',
  sat: 'sat-diagnostic-seen-v1',
  'ap-chem': 'ap-chem-diagnostic-v2-seen-v1',
  'ap-bio': 'ap-bio-diagnostic-v2-seen-v1',
  'ap-physics1': 'ap-physics1-diagnostic-v2-seen-v1',
  calcab: 'calcab-diagnostic-v2-seen-v1',
}

/**
 * Short, stable fingerprint of a question's text: FNV-1a over the
 * whitespace-collapsed, lower-cased text, base 36 — the same function as the
 * SAT's `stemKey`, so the two never drift apart in meaning.
 */
export function textFingerprint(text: string): string {
  const s = text.replace(/\s+/g, ' ').trim().toLowerCase()
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return `stem:${(h >>> 0).toString(36)}`
}

/**
 * Seen keys for an AP diagnostic v2 question: its id plus a fingerprint of
 * its text. A stimulus-set question's fingerprint includes the stimulus text,
 * because set questions can share a generic stem ("Which claim do the data
 * support?") across different stimuli.
 */
export function apSeenKeysForQuestion(q: { id?: string; question: string; passageBody?: string }): string[] {
  return [...(q.id ? [q.id] : []), textFingerprint(q.passageBody ? `${q.passageBody}|${q.question}` : q.question)]
}

/** localStorage holds at most this many keys per course (newest kept). */
export const LOCAL_CAP = 6000

/** A single POST /api/<course>-diagnostic/seen carries at most this many keys. */
export const SEEN_KEYS_MAX_PER_REQUEST = 2000

/** Longest key accepted by the endpoint (ids and `stem:` fingerprints are far shorter). */
export const SEEN_KEY_MAX_LENGTH = 300

/** Minimal shape of a served question as stored inside a submitted attempt. */
export interface StoredReviewQuestion {
  id?: string
  question?: string
  passage?: string
  /** Body of an object-shaped passage (MCAT, AP v2 stimulus); `passage` stays string-only for the SAT route. */
  passageBody?: string
}

/**
 * The questions an attempt served, read back from `DiagnosticTest.results`.
 * Tolerates the value being a JSON string (older/defensive submits), a row
 * without a review block (SAT modules submitted before testData loaded), and
 * malformed entries. Pure and dependency-free so both the API routes and the
 * client bundle can use it.
 */
export function reviewQuestionsFromResults(results: unknown): StoredReviewQuestion[] {
  let value: unknown = results
  if (typeof value === 'string') {
    try {
      value = JSON.parse(value)
    } catch {
      return []
    }
  }
  if (!value || typeof value !== 'object') return []
  const review = (value as { review?: unknown }).review
  if (!review || typeof review !== 'object') return []
  const questions = (review as { questions?: unknown }).questions
  if (!Array.isArray(questions)) return []
  const out: StoredReviewQuestion[] = []
  for (const q of questions) {
    if (!q || typeof q !== 'object') continue
    const { id, question, passage } = q as Record<string, unknown>
    const body = passage && typeof passage === 'object' ? (passage as { body?: unknown }).body : undefined
    out.push({
      id: typeof id === 'string' && id.length > 0 ? id : undefined,
      question: typeof question === 'string' ? question : undefined,
      passage: typeof passage === 'string' ? passage : undefined,
      ...(typeof body === 'string' && body ? { passageBody: body } : {}),
    })
  }
  return out
}

/** Validate a POST body's `keys`: returns the clean list or an error message. */
export function validateSeenKeysBody(body: unknown): { keys: string[] } | { error: string } {
  if (!body || typeof body !== 'object') return { error: 'Expected a JSON object' }
  const keys = (body as { keys?: unknown }).keys
  if (!Array.isArray(keys)) return { error: 'keys must be an array of strings' }
  if (keys.length > SEEN_KEYS_MAX_PER_REQUEST) {
    return { error: `keys must contain at most ${SEEN_KEYS_MAX_PER_REQUEST} entries` }
  }
  const clean: string[] = []
  for (const k of keys) {
    if (typeof k !== 'string' || k.length === 0 || k.length > SEEN_KEY_MAX_LENGTH) {
      return { error: 'keys must be non-empty strings' }
    }
    clean.push(k)
  }
  return { keys: [...new Set(clean)] }
}

function readLocal(course: DiagnosticCourse): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY[course])
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed.filter((v): v is string => typeof v === 'string') : []
  } catch {
    return []
  }
}

function writeLocal(course: DiagnosticCourse, keys: Iterable<string>) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY[course], JSON.stringify([...new Set(keys)].slice(-LOCAL_CAP)))
  } catch {
    // Private mode or quota — the server copy still covers the next device.
  }
}

/**
 * Every key this student has been served: the browser's record merged with
 * the server's. Server unavailable (offline, signed out, SSR) degrades to the
 * browser's copy alone, never to an empty set. Never throws.
 */
export async function loadSeenKeys(course: DiagnosticCourse): Promise<Set<string>> {
  const merged = new Set(readLocal(course))
  if (typeof window === 'undefined' || typeof fetch !== 'function') return merged
  try {
    const res = await fetch(`/api/${course}-diagnostic/seen`, { cache: 'no-store' })
    if (res.ok) {
      const body = (await res.json()) as { keys?: unknown }
      if (Array.isArray(body.keys)) for (const k of body.keys) if (typeof k === 'string') merged.add(k)
    }
  } catch {
    // best-effort
  }
  writeLocal(course, merged)
  return merged
}

/**
 * Remember keys just served. Written to the browser immediately; the server
 * learns them for certain from the submitted attempt, and is told now
 * (best-effort, capped, fire-and-forget safe) so an abandoned sitting can be
 * covered too once a server slot exists. Never throws.
 */
export async function recordSeenKeys(course: DiagnosticCourse, keys: string[]): Promise<void> {
  const clean = [...new Set(keys.filter((k): k is string => typeof k === 'string' && k.length > 0))]
  writeLocal(course, [...readLocal(course), ...clean])
  if (typeof window === 'undefined' || typeof fetch !== 'function' || clean.length === 0) return
  try {
    await fetch(`/api/${course}-diagnostic/seen`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ keys: clean.slice(-SEEN_KEYS_MAX_PER_REQUEST) }),
    })
  } catch {
    // best-effort
  }
}
