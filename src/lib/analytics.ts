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

function sendEvent(eventName: string, params?: GAEventParams) {
  persistEvent(eventName, params)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

export function trackCustomEvent(eventName: string, params?: GAEventParams) {
  sendEvent(eventName, params)
}

// ─── Auth Events ───────────────────────────────────────────────────────
export function trackSignUp(method: string) {
  sendEvent('sign_up', { method })
}

export function trackLogin(method: string) {
  sendEvent('login', { method })
}

// ─── Content Events ────────────────────────────────────────────────────
export function trackLessonStart(topicSlug: string, courseName: string) {
  sendEvent('lesson_start', { topic_slug: topicSlug, course_name: courseName })
}

export function trackLessonComplete(topicSlug: string, courseName: string, timeSpentSeconds: number) {
  sendEvent('lesson_complete', {
    topic_slug: topicSlug,
    course_name: courseName,
    time_spent_seconds: timeSpentSeconds,
  })
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

export function trackPremiumPurchase(plan: string, amount: number) {
  sendEvent('purchase', {
    currency: 'USD',
    value: amount,
    items: plan,
  })
}

export function trackCompetitiveMatch(mode: string, result: 'win' | 'loss' | 'draw') {
  sendEvent('competitive_match', { game_mode: mode, result })
}
