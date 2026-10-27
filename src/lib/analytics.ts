/**
 * Custom GA4 event tracking utility
 * Sends events to Google Analytics when gtag is available and consent is given.
 */

export type GAEventParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const raw = window.localStorage.getItem('cookie-consent')
    if (!raw) return false
    const parsed = JSON.parse(raw) as { analytics?: boolean }
    return !!parsed.analytics
  } catch {
    return false
  }
}

function persistEvent(eventName: string, params?: GAEventParams) {
  if (typeof window === 'undefined') return
  if (!hasAnalyticsConsent()) return

  const payload = JSON.stringify({ eventName, params })
  if (navigator.sendBeacon) {
    const blob = new Blob([payload], { type: 'application/json' })
    navigator.sendBeacon('/api/analytics/events', blob)
    return
  }

  fetch('/api/analytics/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
    keepalive: true,
  }).catch(() => {
    // Fire-and-forget analytics should not affect user flows.
  })
}

/**
 * `gtagExtras` reach GA4 only: values our own AnalyticsEvent table refuses
 * (it stores flat strings/numbers/booleans), such as the `items` array GA4's
 * recommended `purchase` event carries.
 */
function sendEvent(eventName: string, params?: GAEventParams, gtagExtras?: Record<string, unknown>) {
  persistEvent(eventName, params)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, gtagExtras ? { ...params, ...gtagExtras } : params)
  }
}

// ─── Key events (GA4 conversions) ─────────────────────────────────────
/**
 * Every completion event this module sends. Each name is GA4 snake_case and
 * each is fired through a typed helper below, never as a free string.
 */
export const ANALYTICS_EVENTS = {
  signUp: 'sign_up',
  lessonComplete: 'lesson_complete',
  exitQuizComplete: 'exit_quiz_complete',
  exitQuizPass: 'exit_quiz_pass',
  diagnosticComplete: 'diagnostic_complete',
  practiceTestComplete: 'practice_test_complete',
  unitTestComplete: 'unit_test_complete',
  competitiveMatchComplete: 'competitive_match_complete',
  purchase: 'purchase',
} as const

export type AnalyticsEventName = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS]

/**
 * The actions that matter: mark each of these as a key event in GA4
 * (Admin → Events → star). exit_quiz_complete and unit_test_complete are
 * sent too, for funnels, but are not conversions: a topic counts as cleared
 * only when its exit quiz is passed (exit_quiz_pass).
 */
export const KEY_EVENTS = [
  ANALYTICS_EVENTS.signUp,
  ANALYTICS_EVENTS.diagnosticComplete,
  ANALYTICS_EVENTS.lessonComplete,
  ANALYTICS_EVENTS.exitQuizPass,
  ANALYTICS_EVENTS.practiceTestComplete,
  ANALYTICS_EVENTS.competitiveMatchComplete,
  ANALYTICS_EVENTS.purchase,
] as const satisfies readonly AnalyticsEventName[]

const ONCE_STORAGE_PREFIX = 'sm-key-event:'
const firedKeys = new Set<string>()

function onceStorage(persist: 'session' | 'local'): Storage | null {
  try {
    return persist === 'local' ? window.localStorage : window.sessionStorage
  } catch {
    return null
  }
}

/**
 * Run `fire` at most once for `key`. The in-memory set absorbs re-renders and
 * React StrictMode's double effects; the browser-storage mark absorbs a
 * refreshed results page and a resumed or restored sitting (`persist: 'local'`
 * also survives a new tab, for purchases). Storage that is blocked or throws
 * degrades to the in-memory guard. Returns whether it fired.
 */
export function fireOnce(key: string, fire: () => void, persist: 'session' | 'local' = 'session'): boolean {
  if (typeof window === 'undefined' || !key) return false
  if (firedKeys.has(key)) return false
  firedKeys.add(key)
  const storage = onceStorage(persist)
  try {
    if (storage?.getItem(ONCE_STORAGE_PREFIX + key)) return false
    storage?.setItem(ONCE_STORAGE_PREFIX + key, '1')
  } catch {
    /* storage blocked or full: the in-memory guard still holds for this page */
  }
  fire()
  return true
}

/** Test seam: forget the in-memory once-guard (storage marks are the caller's to clear). */
export function resetFireOnceForTests() {
  firedKeys.clear()
}

const pct = (n: number | undefined) => (typeof n === 'number' && Number.isFinite(n) ? Math.max(0, Math.min(100, Math.round(n))) : undefined)

function compact(params: GAEventParams): GAEventParams {
  const out: GAEventParams = {}
  for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== '') out[k] = v
  return out
}

/**
 * The student finished the LAST part of an interactive lesson (the whole
 * lesson, not a part: lesson_part_complete covers parts). Once per topic per
 * browser session, so re-clicking the final section never double counts.
 */
export function trackLessonComplete(courseSlug: string, topicSlug: string) {
  return fireOnce(`lesson:${courseSlug}:${topicSlug}`, () =>
    sendEvent(ANALYTICS_EVENTS.lessonComplete, compact({ course_slug: courseSlug, topic_slug: topicSlug })),
  )
}

/**
 * An exit quiz was submitted and recorded. Always sends exit_quiz_complete
 * (`passed`, `score_percent`); a pass that clears the topic (the site's one
 * 80% mark, EXIT_QUIZ_PASS_FRACTION) also sends exit_quiz_pass. A pass on a
 * topic already cleared (a practice retake) is not a new clear.
 * The caller passes the verdict it got from /api/exit-quiz/submit, which
 * grades against that same constant.
 */
export function trackExitQuizComplete(input: {
  courseSlug: string
  topicSlug: string
  scorePercent: number
  passed: boolean
  /** The saved attempt id (or another per-sitting key). */
  attemptKey: string
  /** The topic was already cleared before this attempt. */
  alreadyCleared?: boolean
}) {
  const base = compact({ course_slug: input.courseSlug, topic_slug: input.topicSlug, score_percent: pct(input.scorePercent) })
  return fireOnce(`exit_quiz:${input.attemptKey}`, () => {
    sendEvent(ANALYTICS_EVENTS.exitQuizComplete, { ...base, passed: input.passed })
    // One clear per topic per session, even if a retake opened before the
    // lesson knew the topic was cleared passes again.
    if (input.passed && !input.alreadyCleared) {
      fireOnce(`exit_quiz_pass:${input.courseSlug}:${input.topicSlug}`, () => sendEvent(ANALYTICS_EVENTS.exitQuizPass, base))
    }
  })
}

/**
 * A course diagnostic was submitted and saved (every course; additive to the
 * older ap_diagnostic_complete / mcat_diagnostic_complete events).
 */
export function trackDiagnosticComplete(input: {
  courseSlug: string
  /** The saved DiagnosticTest id. */
  attemptId: string
  version?: number
  /** e.g. "3–4" (AP), "1150–1250" (SAT), "AFQT 62" (ASVAB). */
  scoreLabel?: string
  scorePercent?: number
}) {
  return fireOnce(`diagnostic:${input.attemptId}`, () =>
    sendEvent(
      ANALYTICS_EVENTS.diagnosticComplete,
      compact({
        course_slug: input.courseSlug,
        version: input.version,
        score_label: input.scoreLabel?.slice(0, 40),
        score_percent: pct(input.scorePercent),
      }),
    ),
  )
}

/** The saved id in a diagnostic submit route's JSON ({ id } or { test: { id } }). */
export function diagnosticIdFromResponse(body: unknown): string | null {
  if (!body || typeof body !== 'object') return null
  const b = body as { id?: unknown; test?: { id?: unknown } | null }
  if (typeof b.id === 'string' && b.id) return b.id
  if (b.test && typeof b.test.id === 'string' && b.test.id) return b.test.id
  return null
}

/**
 * Call from a diagnostic page's submit path with the submit Response: sends
 * diagnostic_complete only when the save succeeded, keyed on the saved id.
 * Reads a clone, so the caller can still read the body.
 */
export async function reportDiagnosticSubmit(
  res: Response | null | undefined,
  input: Omit<Parameters<typeof trackDiagnosticComplete>[0], 'attemptId'>,
): Promise<boolean> {
  if (!res?.ok) return false
  try {
    const id = diagnosticIdFromResponse(await res.clone().json())
    return id ? trackDiagnosticComplete({ ...input, attemptId: id }) : false
  } catch {
    return false
  }
}

/** A full-length or section practice test was finished (and saved, where the runner saves). */
export function trackPracticeTestComplete(input: {
  courseSlug: string
  /** The form / test / section id (low-cardinality: "form-2", "test-3", "chem-phys"). */
  testId: string
  /** The saved attempt id, or the sitting's client id. */
  attemptKey: string
  /** 'full_length' (default) or 'section'. */
  testType?: 'full_length' | 'section'
  scorePercent?: number
  /** The scaled score where the exam has one (SAT 1600, MCAT 528, ACT 36). */
  score?: number
}) {
  return fireOnce(`practice:${input.attemptKey}`, () =>
    sendEvent(
      ANALYTICS_EVENTS.practiceTestComplete,
      compact({
        course_slug: input.courseSlug,
        test_id: input.testId.slice(0, 60),
        test_type: input.testType ?? 'full_length',
        score_percent: pct(input.scorePercent),
        score: typeof input.score === 'number' && Number.isFinite(input.score) ? input.score : undefined,
      }),
    ),
  )
}

/** A unit test (per-unit) or a cycle unit test (MCAT/SAT/ACT/ASVAB, with a pass mark) was submitted. */
export function trackUnitTestComplete(input: {
  courseSlug: string
  attemptKey: string
  testType: 'unit' | 'cycle'
  scorePercent: number
  passed?: boolean
}) {
  return fireOnce(`unit_test:${input.attemptKey}`, () =>
    sendEvent(
      ANALYTICS_EVENTS.unitTestComplete,
      compact({
        course_slug: input.courseSlug,
        test_type: input.testType,
        score_percent: pct(input.scorePercent),
        passed: input.passed,
      }),
    ),
  )
}


export function trackCustomEvent(eventName: string, params?: GAEventParams) {
  sendEvent(eventName, params)
}

// ─── Auth Events ───────────────────────────────────────────────────────
export function trackSignUp(method: string) {
  sendEvent(ANALYTICS_EVENTS.signUp, { method })
}

export function trackLogin(method: string) {
  sendEvent('login', { method })
}

// ─── Content Events ────────────────────────────────────────────────────
export function trackLessonStart(topicSlug: string, courseName: string) {
  sendEvent('lesson_start', { topic_slug: topicSlug, course_name: courseName })
}

export function trackQuizComplete(topicSlug: string, score: number, maxScore: number) {
  sendEvent('quiz_complete', {
    topic_slug: topicSlug,
    score,
    max_score: maxScore,
    percentage: Math.round((score / maxScore) * 100),
  })
}

export function trackFlashcardSession(cardCount: number, retentionRate: number) {
  sendEvent('flashcard_session', {
    card_count: cardCount,
    retention_rate: Math.round(retentionRate * 100),
  })
}

// ─── Engagement Events ─────────────────────────────────────────────────
export function trackChallengeJoin(challengeId: string, challengeType: string) {
  sendEvent('challenge_join', { challenge_id: challengeId, challenge_type: challengeType })
}

export function trackChallengeComplete(challengeId: string, xpEarned: number) {
  sendEvent('challenge_complete', { challenge_id: challengeId, xp_earned: xpEarned })
}

export function trackStreakMilestone(streakDays: number) {
  sendEvent('streak_milestone', { streak_days: streakDays })
}

export function trackSearch(query: string, resultCount: number) {
  sendEvent('search', { search_term: query, result_count: resultCount })
}

export function trackDailyQuestionLoaded(courseSlug: string, topicSlug: string) {
  sendEvent('daily_question_loaded', {
    page_template: 'daily_question_page',
    course_slug: courseSlug,
    topic_slug: topicSlug,
  })
}

export function trackDailyQuestionAnswered(courseSlug: string, topicSlug: string, isCorrect: boolean) {
  sendEvent('daily_question_answered', {
    page_template: 'daily_question_page',
    course_slug: courseSlug,
    topic_slug: topicSlug,
    is_correct: isCorrect,
  })
}

export function trackDailyQuestionCtaClick(courseSlug: string, topicSlug: string, destination: string, ctaType: string = 'next_step') {
  sendEvent('daily_question_cta_click', {
    page_template: 'daily_question_page',
    cta_type: ctaType,
    course_slug: courseSlug,
    topic_slug: topicSlug,
    destination,
  })
}

// ─── Conversion Events ─────────────────────────────────────────────────
export function trackPremiumUpgradeClick(source: string) {
  sendEvent('premium_upgrade_click', { source })
}

/**
 * A Stripe Checkout session completed (verified server-side before this is
 * called). GA4's recommended purchase event: transaction_id dedupes it in GA4,
 * and the local once-guard keeps a revisited success page from re-sending.
 */
export function trackPremiumPurchase(input: { transactionId: string; value: number; currency: string; plan: string }) {
  const currency = input.currency.toUpperCase()
  return fireOnce(
    `purchase:${input.transactionId}`,
    () =>
      sendEvent(
        ANALYTICS_EVENTS.purchase,
        { transaction_id: input.transactionId, value: input.value, currency, plan: input.plan },
        { items: [{ item_id: `premium_${input.plan}`, item_name: `Premium (${input.plan})`, price: input.value, quantity: 1 }] },
      ),
    'local',
  )
}

/**
 * A competitive match reached its results screen for the viewing player
 * (1v1, team, async or class pool; bot or human). Once per match.
 */
export function trackCompetitiveMatchComplete(input: {
  matchId: string
  /** CLASSIC / CHAOS / team / async … (the match's own mode name, lower-cased). */
  mode: string
  result: 'win' | 'loss' | 'draw'
  isBot: boolean
  isClassPool: boolean
  topicSlug?: string
}) {
  return fireOnce(`match:${input.matchId}`, () =>
    sendEvent(
      ANALYTICS_EVENTS.competitiveMatchComplete,
      compact({
        game_mode: input.mode.toLowerCase(),
        result: input.result,
        is_bot: input.isBot,
        is_class_pool: input.isClassPool,
        topic_slug: input.topicSlug,
      }),
    ),
  )
}

// ─── Study-plan flow ───────────────────────────────────────────────────
/**
 * The post-completion panel (StudyPlanNextUp) withheld "Next up" because this
 * topic's newly unlocked flashcards are still unrated (owner rule: finish the
 * cards, then the next lesson). Measures how often that hold lands on a
 * student — it is kept, not removed.
 */
export function trackPlanNextBlockedByCards(topicSlug: string, cardsDue: number, courseKey: string) {
  sendEvent('plan_next_blocked_by_cards', { topic_slug: topicSlug, cards_due: cardsDue, course_key: courseKey })
}

// ─── AP Diagnostic Events ──────────────────────────────────────────────
/** A student picked up an unfinished AP diagnostic sitting from the menu. */
export function trackApDiagnosticResume(courseSlug: string, version: number, answered: number, total: number) {
  sendEvent('ap_diagnostic_resume', { course_slug: courseSlug, version, answered, total })
}

/** A student deliberately dropped an unfinished AP diagnostic sitting (Discard / Start over). */
export function trackApDiagnosticDiscard(courseSlug: string, version: number, answered: number, total: number) {
  sendEvent('ap_diagnostic_discard', { course_slug: courseSlug, version, answered, total })
}

/** The student started an AP diagnostic sitting (v1 form or v2). */
export function trackApDiagnosticStart(courseSlug: string, version: number) {
  sendEvent('ap_diagnostic_start', { course_slug: courseSlug, version, page_template: 'ap-diagnostic' })
}

/** The sitting was scored (fires as the results screen renders; `score` = percent correct). */
export function trackApDiagnosticSubmit(courseSlug: string, score: number, version: number) {
  sendEvent('ap_diagnostic_submit', { course_slug: courseSlug, score, version, page_template: 'ap-diagnostic-results' })
}

/**
 * The results screen is up and the attempt is saved: `attemptId` is the
 * DiagnosticTest id (null when the save failed or is still pending at the
 * fallback deadline). Persisted as an AnalyticsEvent row (consent permitting)
 * so results-page behaviour can be read per attempt, with no PII.
 */
export function trackApDiagnosticComplete(courseSlug: string, attemptId: string | null, version: number) {
  sendEvent('ap_diagnostic_complete', {
    course_slug: courseSlug,
    version,
    page_template: 'ap-diagnostic-results',
    ...(attemptId ? { attempt_id: attemptId } : {}),
  })
}

/** The results screen's next-step actions: the one filled button, and the exam-week card's other two links. */
export function trackApResultsNextStepClick(
  courseSlug: string,
  /** The plan topic the click leads to; null for a cram / practice-exam action. */
  topicSlug: string | null,
  destination: string,
  attemptId: string | null,
  /** The mode's primary action (AP_NEXT_STEP_CTA_TYPE): 'next_step' (plan), 'exam_week_flashcards', 'confirm_5_practice_exam'; secondary actions name themselves. */
  ctaType: string = 'next_step',
) {
  sendEvent('ap_results_next_step_click', {
    course_slug: courseSlug,
    ...(topicSlug ? { topic_slug: topicSlug } : {}),
    destination,
    cta_type: ctaType,
    page_template: 'ap-diagnostic-results',
    ...(attemptId ? { attempt_id: attemptId } : {}),
  })
}

/** The demoted "Retake after you've cleared your plan" link on the results screen. */
export function trackApResultsRetakeClick(courseSlug: string, attemptId: string | null) {
  sendEvent('ap_results_retake_click', {
    course_slug: courseSlug,
    cta_type: 'retake',
    page_template: 'ap-diagnostic-results',
    ...(attemptId ? { attempt_id: attemptId } : {}),
  })
}

// ─── Short first session (Phase 3 W5) ─────────────────────────────────
/**
 * The student chose how to begin a lesson framed as their first step (arrived
 * from a diagnostic's results, or opened their current plan topic): Part 1
 * only, the whole lesson, or straight to the exit quiz.
 */
export function trackLessonFirstSessionStart(topicSlug: string, courseSlug: string | undefined, choice: 'part1' | 'full' | 'quiz') {
  sendEvent('lesson_first_session_start', { topic_slug: topicSlug, course_slug: courseSlug ?? '', choice })
}

/** A lesson part was finished (every lesson, not only first sessions) — the "completed a part" funnel step. */
export function trackLessonPartComplete(topicSlug: string, part: number) {
  sendEvent('lesson_part_complete', { topic_slug: topicSlug, part })
}
