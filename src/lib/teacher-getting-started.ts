/**
 * The teacher dashboard's "Getting started" checklist.
 *
 * A new teacher used to land on four zero stat cards and no next step. The
 * checklist names the first week in order, and every step is detected from
 * real data (the dashboard API counts the rows), so a step ticks itself off
 * when the thing actually happened rather than when a button was clicked.
 *
 * Pure and client-safe (no Prisma): the dashboard route computes the signals,
 * the page renders the steps, and the rules are unit-tested here.
 */

export type GettingStartedStepKey =
  | 'createClass'
  | 'shareCode'
  | 'studentJoined'
  | 'assignDiagnostic'
  | 'assignLesson'
  | 'runGameOrLive'

/** Raw counts the dashboard route gathers across the teacher's classes. */
export interface GettingStartedSignals {
  classroomCount: number
  /** Active members across the classes (imported or joined). */
  memberCount: number
  /** Members who have signed in at least once (see student-activity.ts). */
  signedInMemberCount: number
  /** Class diagnostics assigned (frozen MCAT/SAT tests or course diagnostics). */
  diagnosticCount: number
  /** Lesson-type assignments (INTERACTIVE_LESSON or QUIZ, both close on the exit quiz). */
  lessonAssignmentCount: number
  /** Class games (teacher lobbies) started by this teacher. */
  classGameCount: number
  /** Live lessons (video sessions) started by this teacher. */
  liveLessonCount: number
}

export type GettingStartedStatus = Record<GettingStartedStepKey, boolean>

export function gettingStartedStatus(s: GettingStartedSignals): GettingStartedStatus {
  return {
    createClass: s.classroomCount > 0,
    // Sharing happens outside the site, so the proof is that someone is on the
    // roster. The page also ticks it when the teacher copies the code or link.
    shareCode: s.memberCount > 0,
    studentJoined: s.signedInMemberCount > 0,
    assignDiagnostic: s.diagnosticCount > 0,
    assignLesson: s.lessonAssignmentCount > 0,
    runGameOrLive: s.classGameCount > 0 || s.liveLessonCount > 0,
  }
}

export interface GettingStartedStep {
  key: GettingStartedStepKey
  title: string
  detail: string
  /** Label for the step's action link. */
  action: string
  /** Where the step happens. `classroomId` is the class to deep-link into. */
  href: (classroomId: string | null) => string
}

const inClass = (classroomId: string | null, query = '') =>
  classroomId ? `/teacher/classroom/${classroomId}${query}` : '/teacher?create=1'

export const GETTING_STARTED_STEPS: GettingStartedStep[] = [
  {
    key: 'createClass',
    title: 'Create a class',
    detail: 'Name it after the period or section. You get a join code right away.',
    action: 'Create a class',
    href: () => '/teacher?create=1',
  },
  {
    key: 'shareCode',
    title: 'Share the join code',
    detail: 'Post the code, link or QR code, or import your roster from a CSV.',
    action: 'Show the join code',
    href: (id) => inClass(id, '?share=1'),
  },
  {
    key: 'studentJoined',
    title: 'Get your first student in',
    detail: 'This ticks off when a student signs in and joins your class.',
    action: 'Open the roster',
    href: (id) => inClass(id),
  },
  {
    key: 'assignDiagnostic',
    title: 'Assign a diagnostic',
    detail: 'Each student takes the course diagnostic. Their results build their study plan and your class plan.',
    action: 'Assign a diagnostic',
    href: (id) => inClass(id, '?tab=work&assign=diagnostic'),
  },
  {
    key: 'assignLesson',
    title: 'Assign a first lesson',
    detail: 'Pick a topic. Students clear it by passing its exit quiz.',
    action: 'Create an assignment',
    href: (id) => inClass(id, '?tab=work&assign=lesson'),
  },
  {
    key: 'runGameOrLive',
    title: 'Run a class game or live lesson',
    detail: 'Play a review game in class, or teach a live lesson over video.',
    action: 'Start a class game',
    href: (id) => inClass(id, '?tab=work&view=competitions'),
  },
]

/** The first step still open, or null when the checklist is complete. */
export function nextGettingStartedStep(status: GettingStartedStatus): GettingStartedStep | null {
  return GETTING_STARTED_STEPS.find((s) => !status[s.key]) ?? null
}

export function gettingStartedDone(status: GettingStartedStatus): number {
  return GETTING_STARTED_STEPS.filter((s) => status[s.key]).length
}

/*
 * Per-teacher browser flags. Conveniences only: the checklist's source of truth
 * is the dashboard API, so losing these (private window, cleared storage) just
 * shows the card again or un-ticks "share" until someone joins.
 */
const dismissKey = (userId: string) => `sm:teacher-getting-started-dismissed:${userId}`
const sharedKey = (userId: string) => `sm:teacher-join-code-shared:${userId}`

function readFlag(key: string): boolean {
  try {
    return typeof window !== 'undefined' && window.localStorage.getItem(key) === '1'
  } catch {
    return false
  }
}

function writeFlag(key: string, on: boolean): void {
  try {
    if (typeof window === 'undefined') return
    if (on) window.localStorage.setItem(key, '1')
    else window.localStorage.removeItem(key)
  } catch {
    // storage blocked — the card simply shows again next time
  }
}

export const gettingStartedDismissed = (userId: string) => readFlag(dismissKey(userId))
export const setGettingStartedDismissed = (userId: string, on: boolean) => writeFlag(dismissKey(userId), on)
export const joinCodeSharedLocally = (userId: string) => readFlag(sharedKey(userId))
export const markJoinCodeShared = (userId: string) => writeFlag(sharedKey(userId), true)
