// @vitest-environment jsdom
/**
 * GA4 key events (src/lib/analytics.ts): the once-only guard, each helper's
 * payload, and the KEY_EVENTS list the owner stars in GA4. `window.gtag` is
 * spied and the persist call (sendBeacon to /api/analytics/events) is
 * captured, so both destinations are checked.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  ANALYTICS_EVENTS,
  KEY_EVENTS,
  diagnosticIdFromResponse,
  fireOnce,
  reportDiagnosticSubmit,
  resetFireOnceForTests,
  trackCompetitiveMatchComplete,
  trackDiagnosticComplete,
  trackExitQuizComplete,
  trackLessonComplete,
  trackPracticeTestComplete,
  trackPremiumPurchase,
  trackSignUp,
  trackUnitTestComplete,
} from '@/lib/analytics'

const gtag = vi.fn()
const beacons: { eventName: string; params?: Record<string, unknown> }[] = []

beforeEach(async () => {
  gtag.mockReset()
  beacons.length = 0
  window.gtag = gtag
  window.localStorage.clear()
  window.sessionStorage.clear()
  window.localStorage.setItem('cookie-consent', JSON.stringify({ analytics: true }))
  resetFireOnceForTests()
  Object.defineProperty(navigator, 'sendBeacon', {
    configurable: true,
    value: (_url: string, blob: { parts: string[] }) => {
      beacons.push(JSON.parse(blob.parts.join('')))
      return true
    },
  })
})

// jsdom's Blob cannot be read back synchronously; capture the payload instead.
vi.stubGlobal(
  'Blob',
  class {
    parts: string[]
    constructor(parts: string[]) {
      this.parts = parts
    }
  },
)

/** The [name, params] pairs sent to gtag. */
const sent = () => gtag.mock.calls.map((c) => [c[1], c[2]] as [string, Record<string, unknown>])
const allEventNames = new Set<string>(Object.values(ANALYTICS_EVENTS))

describe('KEY_EVENTS', () => {
  it('lists exactly the seven actions the owner marks as key events', () => {
    expect([...KEY_EVENTS]).toEqual([
      'sign_up',
      'diagnostic_complete',
      'lesson_complete',
      'exit_quiz_pass',
      'practice_test_complete',
      'competitive_match_complete',
      'purchase',
    ])
  })

  it('every key event is a documented constant, in GA4 snake_case', () => {
    for (const name of KEY_EVENTS) expect(allEventNames.has(name)).toBe(true)
    for (const name of allEventNames) expect(name).toMatch(/^[a-z][a-z0-9_]{0,39}$/)
  })

  it('every helper sends only documented event names', () => {
    trackSignUp('email')
    trackLessonComplete('ap-biology', 'cell-structure')
    trackExitQuizComplete({ courseSlug: 'c', topicSlug: 't', scorePercent: 90, passed: true, attemptKey: 'a1' })
    trackDiagnosticComplete({ courseSlug: 'sat', attemptId: 'd1' })
    trackPracticeTestComplete({ courseSlug: 'act', testId: 'form-1', attemptKey: 'p1' })
    trackUnitTestComplete({ courseSlug: 'mcat', attemptKey: 'u1', testType: 'cycle', scorePercent: 80, passed: true })
    trackCompetitiveMatchComplete({ matchId: 'm1', mode: 'CLASSIC', result: 'win', isBot: true, isClassPool: false })
    trackPremiumPurchase({ transactionId: 'cs_test_1', value: 9.99, currency: 'usd', plan: 'monthly' })
    const names = sent().map(([n]) => n)
    expect(names.length).toBe(9) // exit quiz pass sends two
    for (const n of names) expect(allEventNames.has(n)).toBe(true)
  })
})

describe('fireOnce', () => {
  it('fires once per key, across re-renders and StrictMode double calls', () => {
    const fn = vi.fn()
    expect(fireOnce('k1', fn)).toBe(true)
    expect(fireOnce('k1', fn)).toBe(false)
    expect(fireOnce('k1', fn)).toBe(false)
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fireOnce('k2', fn)).toBe(true)
    expect(fn).toHaveBeenCalledTimes(2)
  })

  it('survives a page refresh through sessionStorage (in-memory set cleared)', () => {
    const fn = vi.fn()
    fireOnce('refresh-key', fn)
    resetFireOnceForTests() // a reload loses module state, not sessionStorage
    expect(fireOnce('refresh-key', fn)).toBe(false)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it("persist 'local' survives a new tab (sessionStorage empty)", () => {
    const fn = vi.fn()
    fireOnce('tab-key', fn, 'local')
    resetFireOnceForTests()
    window.sessionStorage.clear()
    expect(fireOnce('tab-key', fn, 'local')).toBe(false)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('still guards in memory when storage throws', () => {
    const spy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked')
    })
    const fn = vi.fn()
    expect(fireOnce('blocked-key', fn)).toBe(true)
    expect(fireOnce('blocked-key', fn)).toBe(false)
    expect(fn).toHaveBeenCalledTimes(1)
    spy.mockRestore()
  })

  it('ignores an empty key', () => {
    const fn = vi.fn()
    expect(fireOnce('', fn)).toBe(false)
    expect(fn).not.toHaveBeenCalled()
  })
})

describe('helper payloads', () => {
  it('lesson_complete: course + topic, once per topic per session', async () => {
    trackLessonComplete('ap-biology', 'cell-structure')
    trackLessonComplete('ap-biology', 'cell-structure')
    expect(sent()).toEqual([['lesson_complete', { course_slug: 'ap-biology', topic_slug: 'cell-structure' }]])
    expect(beacons).toEqual([{ eventName: 'lesson_complete', params: { course_slug: 'ap-biology', topic_slug: 'cell-structure' } }])
  })

  it('exit quiz pass: exit_quiz_complete (passed) + exit_quiz_pass', () => {
    trackExitQuizComplete({ courseSlug: 'sat', topicSlug: 'linear-equations', scorePercent: 80, passed: true, attemptKey: 'att-1' })
    expect(sent()).toEqual([
      ['exit_quiz_complete', { course_slug: 'sat', topic_slug: 'linear-equations', score_percent: 80, passed: true }],
      ['exit_quiz_pass', { course_slug: 'sat', topic_slug: 'linear-equations', score_percent: 80 }],
    ])
  })

  it('exit quiz fail: only exit_quiz_complete with passed false', () => {
    trackExitQuizComplete({ courseSlug: 'sat', topicSlug: 'linear-equations', scorePercent: 60, passed: false, attemptKey: 'att-2' })
    expect(sent()).toEqual([['exit_quiz_complete', { course_slug: 'sat', topic_slug: 'linear-equations', score_percent: 60, passed: false }]])
  })

  it('a pass on an already-cleared topic, or a second pass, is not a new clear', () => {
    trackExitQuizComplete({ courseSlug: 'c', topicSlug: 't', scorePercent: 100, passed: true, attemptKey: 'a', alreadyCleared: true })
    trackExitQuizComplete({ courseSlug: 'c', topicSlug: 'u', scorePercent: 90, passed: true, attemptKey: 'b' })
    trackExitQuizComplete({ courseSlug: 'c', topicSlug: 'u', scorePercent: 90, passed: true, attemptKey: 'c' })
    expect(sent().map(([n]) => n)).toEqual(['exit_quiz_complete', 'exit_quiz_complete', 'exit_quiz_pass', 'exit_quiz_complete'])
  })

  it('the same attempt id never re-sends (a deduplicated re-post)', () => {
    const q = { courseSlug: 'c', topicSlug: 't', scorePercent: 90, passed: true, attemptKey: 'same' }
    trackExitQuizComplete(q)
    trackExitQuizComplete(q)
    expect(sent().length).toBe(2)
  })

  it('diagnostic_complete: course, version, score label/percent; empty fields dropped', () => {
    trackDiagnosticComplete({ courseSlug: 'ap-biology', attemptId: 'd1', version: 2, scoreLabel: '3–4', scorePercent: 61.6 })
    trackDiagnosticComplete({ courseSlug: 'asvab', attemptId: 'd2' })
    trackDiagnosticComplete({ courseSlug: 'asvab', attemptId: 'd2' })
    expect(sent()).toEqual([
      ['diagnostic_complete', { course_slug: 'ap-biology', version: 2, score_label: '3–4', score_percent: 62 }],
      ['diagnostic_complete', { course_slug: 'asvab' }],
    ])
  })

  it('reportDiagnosticSubmit: fires on a saved submit only, keyed on the saved id', async () => {
    const ok = (body: unknown) => new Response(JSON.stringify(body), { status: 200, headers: { 'Content-Type': 'application/json' } })
    expect(await reportDiagnosticSubmit(new Response('{}', { status: 500 }), { courseSlug: 'sat' })).toBe(false)
    expect(await reportDiagnosticSubmit(null, { courseSlug: 'sat' })).toBe(false)
    expect(await reportDiagnosticSubmit(ok({ success: true }), { courseSlug: 'sat' })).toBe(false)
    const res = ok({ success: true, id: 'diag-9' })
    expect(await reportDiagnosticSubmit(res, { courseSlug: 'sat', scoreLabel: '1150–1250' })).toBe(true)
    expect(await res.json()).toEqual({ success: true, id: 'diag-9' }) // the caller can still read the body
    expect(await reportDiagnosticSubmit(ok({ test: { id: 'diag-9' } }), { courseSlug: 'sat' })).toBe(false) // same id
    expect(sent()).toEqual([['diagnostic_complete', { course_slug: 'sat', score_label: '1150–1250' }]])
  })

  it('diagnosticIdFromResponse reads both route shapes', () => {
    expect(diagnosticIdFromResponse({ id: 'a' })).toBe('a')
    expect(diagnosticIdFromResponse({ test: { id: 'b' } })).toBe('b')
    expect(diagnosticIdFromResponse({ test: null })).toBeNull()
    expect(diagnosticIdFromResponse(null)).toBeNull()
  })

  it('practice_test_complete: course, test id, type, score', () => {
    trackPracticeTestComplete({ courseSlug: 'sat', testId: 'test-3', attemptKey: 'p-1', score: 1310 })
    trackPracticeTestComplete({ courseSlug: 'mcat', testId: 'chem-phys', attemptKey: 'p-2', testType: 'section', scorePercent: 72, score: 126 })
    trackPracticeTestComplete({ courseSlug: 'sat', testId: 'test-3', attemptKey: 'p-1', score: 1310 })
    expect(sent()).toEqual([
      ['practice_test_complete', { course_slug: 'sat', test_id: 'test-3', test_type: 'full_length', score: 1310 }],
      ['practice_test_complete', { course_slug: 'mcat', test_id: 'chem-phys', test_type: 'section', score_percent: 72, score: 126 }],
    ])
  })

  it('unit_test_complete: type, score, passed when the test has a pass mark', () => {
    trackUnitTestComplete({ courseSlug: 'mcat', attemptKey: 'u-1', testType: 'cycle', scorePercent: 76, passed: true })
    trackUnitTestComplete({ courseSlug: 'ap-biology', attemptKey: 'u-2', testType: 'unit', scorePercent: 50 })
    expect(sent()).toEqual([
      ['unit_test_complete', { course_slug: 'mcat', test_type: 'cycle', score_percent: 76, passed: true }],
      ['unit_test_complete', { course_slug: 'ap-biology', test_type: 'unit', score_percent: 50 }],
    ])
  })

  it('competitive_match_complete: result, mode, is_bot, is_class_pool; once per match', () => {
    trackCompetitiveMatchComplete({ matchId: 'm-1', mode: 'CLASSIC', result: 'loss', isBot: true, isClassPool: false, topicSlug: 'sat-math' })
    trackCompetitiveMatchComplete({ matchId: 'm-1', mode: 'CLASSIC', result: 'loss', isBot: true, isClassPool: false, topicSlug: 'sat-math' })
    trackCompetitiveMatchComplete({ matchId: 'm-2', mode: 'team', result: 'win', isBot: false, isClassPool: true })
    expect(sent()).toEqual([
      ['competitive_match_complete', { game_mode: 'classic', result: 'loss', is_bot: true, is_class_pool: false, topic_slug: 'sat-math' }],
      ['competitive_match_complete', { game_mode: 'team', result: 'win', is_bot: false, is_class_pool: true }],
    ])
  })

  it('purchase: GA4 recommended shape to gtag (items array), flat params to our table, once per transaction', async () => {
    trackPremiumPurchase({ transactionId: 'cs_test_abc', value: 9.99, currency: 'usd', plan: 'monthly' })
    resetFireOnceForTests()
    window.sessionStorage.clear() // a new tab on the same success URL
    trackPremiumPurchase({ transactionId: 'cs_test_abc', value: 9.99, currency: 'usd', plan: 'monthly' })
    expect(sent()).toEqual([
      [
        'purchase',
        {
          transaction_id: 'cs_test_abc',
          value: 9.99,
          currency: 'USD',
          plan: 'monthly',
          items: [{ item_id: 'premium_monthly', item_name: 'Premium (monthly)', price: 9.99, quantity: 1 }],
        },
      ],
    ])
    expect(beacons).toEqual([{ eventName: 'purchase', params: { transaction_id: 'cs_test_abc', value: 9.99, currency: 'USD', plan: 'monthly' } }])
  })

  it('without analytics consent nothing is persisted, but gtag still gets the call (consent mode decides)', async () => {
    window.localStorage.removeItem('cookie-consent')
    trackLessonComplete('c', 't')
    expect(beacons).toEqual([])
    expect(sent().length).toBe(1)
  })
})
