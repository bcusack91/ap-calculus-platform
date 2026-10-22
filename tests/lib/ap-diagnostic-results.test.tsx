// @vitest-environment jsdom
/**
 * The shared AP diagnostic results screen (Phase 3, UX frictions #1, #2, #4,
 * #5, #12, #13, #15, #16, #17): one component for the 23 v1 pages and the v2
 * page, with the first plan topic as the one filled button, the retake
 * demoted to a text link, copy numbers from the enforcing code, the Premium
 * lock in front of every topic link, and GA4 + AnalyticsEvent rows for the
 * funnel.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup, waitFor, within } from '@testing-library/react'
import type { ReactNode } from 'react'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { NextRequest } from 'next/server'

vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode } & Record<string, unknown>) => (
    <a href={href} {...rest}>{children}</a>
  ),
}))
vi.mock('next/navigation', () => ({ useRouter: () => ({ push: vi.fn() }), useSearchParams: () => new URLSearchParams() }))
vi.mock('katex/dist/katex.min.css', () => ({}))
vi.mock('@/lib/katex-lazy', () => ({ preloadKatex: () => Promise.resolve(), renderKatexSync: (t: string) => t }))
vi.mock('@/lib/render-rich-text', () => ({ renderRichText: (t: string) => t }))
vi.mock('@/components/ad-banner', () => ({ InArticleAd: () => null }))
vi.mock('@/components/StartStudyPlanButton', () => ({ default: () => <div data-testid="study-schedule" /> }))

import ApDiagnosticResults, { apResultsTopicHref, nextStepLabel } from '@/components/ap-diagnostic/ApDiagnosticResults'
import { AP_DIAGNOSTIC_COURSES, apDiagnosticCourse, apDiagnosticLength, apDiagnosticStats } from '@/lib/ap-diagnostic-courses'
import { AP_DIAGNOSTICS } from './ap-diagnostic-registry'
import { AP_DIAG_V2_BLUEPRINTS, AP_DIAG_V2_COURSES } from '@/lib/ap-diagnostic-v2/blueprints'
import { classPlanCourse, diagnosticRouteForKey } from '@/lib/class-plan-config'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'
import { MCAT_UNIT_TEST_PASS_PERCENT, MCAT_UNIT_TEST_QUESTIONS } from '@/lib/mcat-unit-test'
import { AP_TRACK_LABEL } from '@/lib/ap-track'
import { estimateLessonMinutes } from '@/lib/lesson-minutes'
import { GET as lessonLengthGET } from '@/app/api/lessons/length/route'
import { AP_NEXT_STEP_CTA_TYPE, apExamWeekLinks } from '@/lib/ap-next-step'
import { apExamDate } from '@/lib/ap-exam-dates'

const ROOT = path.resolve(__dirname, '../..')
const read = (p: string) => readFileSync(path.join(ROOT, p), 'utf8')

const RESULTS = {
  totalCorrect: 10,
  totalQuestions: 33,
  percentage: 30,
  estimatedAPScore: 2,
  domains: [
    { domainId: 'atomic', domainName: 'Atomic Structure', correct: 1, total: 4, percentage: 25, level: 'weak' as const },
    { domainId: 'kinetics', domainName: 'Kinetics', correct: 3, total: 3, percentage: 100, level: 'strong' as const },
  ],
  strengths: ['Kinetics'],
  weakAreas: ['Atomic Structure'],
  recommendedTopics: [
    { slug: 'moles-molar-mass', name: 'Moles & Molar Mass', priority: 'high' as const },
    { slug: 'electron-configuration', name: 'Electron Configuration', priority: 'high' as const },
    { slug: 'periodic-trends', name: 'Periodic Trends', priority: 'medium' as const },
  ],
}
const REVIEW = {
  questions: [{ question: 'Q1', options: ['a', 'b'], correctAnswer: 0, explanation: 'because', domain: 'atomic' }],
  answers: [1],
  domainNames: { atomic: 'Atomic Structure' },
}

let beacon: ReturnType<typeof vi.fn>
let gtag: ReturnType<typeof vi.fn>
let fetchMock: ReturnType<typeof vi.fn>
let lessonParts: Record<string, number>

function sentEvents(): { eventName: string; params: Record<string, unknown> }[] {
  return beacon.mock.calls.map(([, blob]) => JSON.parse((blob as { __text: string }).__text))
}

beforeEach(() => {
  lessonParts = {}
  window.localStorage.setItem('cookie-consent', JSON.stringify({ analytics: true }))
  beacon = vi.fn(() => true)
  // jsdom Blob has no text(); keep the payload readable.
  vi.stubGlobal('Blob', class { __text: string; constructor(parts: string[]) { this.__text = parts.join('') } })
  Object.defineProperty(navigator, 'sendBeacon', { value: beacon, configurable: true })
  gtag = vi.fn()
  ;(window as unknown as { gtag: unknown }).gtag = gtag
  fetchMock = vi.fn(async (url: string) => {
    if (url.startsWith('/api/lessons/length')) return { ok: true, status: 200, json: async () => ({ parts: lessonParts }) }
    return { ok: false, status: 404, json: async () => ({}) }
  })
  vi.stubGlobal('fetch', fetchMock)
})
afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  vi.useRealTimers()
  window.localStorage.clear()
})

// Autumn: every AP exam is months away, so these render in plan mode whatever the wall clock says (W4 pins `now`).
const AUTUMN = new Date('2026-10-21T12:00:00Z')
// AP Chemistry sits 2027-05-06; five days before is exam-week mode.
const CHEM_EXAM_WEEK = new Date(apExamDate('ap-chemistry')!.getTime() - 5 * 86_400_000)
const FIVE = { ...RESULTS, totalCorrect: 31, totalQuestions: 33, percentage: 94, estimatedAPScore: 5 }

const renderResults = (over: Partial<Parameters<typeof ApDiagnosticResults>[0]> = {}) => {
  const onRetake = vi.fn()
  const utils = render(
    <ApDiagnosticResults
      course={apDiagnosticCourse('ap-chemistry')}
      results={RESULTS}
      planAccess={{ loading: false, canAccess: true }}
      history={[{ id: 'old-1' }]}
      review={REVIEW}
      onRetake={onRetake}
      now={AUTUMN}
      {...over}
    />,
  )
  return { ...utils, onRetake }
}

const topicLinks = () => Array.from(document.querySelectorAll('a[href^="/topics/"]')) as HTMLAnchorElement[]
const order = (a: Element, b: Element) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1)

describe('ApDiagnosticResults: next step first', () => {
  it('leads with topic 1 as the one filled button, linking to the interactive lesson', () => {
    renderResults()
    const cta = screen.getByTestId('ap-results-next-step-cta') as HTMLAnchorElement
    expect(cta.getAttribute('href')).toBe('/topics/moles-molar-mass/interactive?from=diagnostic')
    expect(cta.textContent).toContain('Start Moles & Molar Mass')
    // The first topic link on the page is the primary, and it comes before the unit bars and the review.
    expect(topicLinks()[0]).toBe(cta)
    expect(order(cta, screen.getByText('Unit breakdown'))).toBe(-1)
    expect(order(cta, screen.getByTestId('ap-results-explainer'))).toBe(-1)
    // Topics 2..N follow as a list, numbered from 2.
    const rest = topicLinks().slice(1).map((a) => a.getAttribute('href'))
    expect(rest).toEqual(['/topics/electron-configuration/interactive?from=diagnostic', '/topics/periodic-trends/interactive?from=diagnostic'])
    expect(screen.getByText('Then, in order')).toBeTruthy()
    // The hub is a text link, not the filled button.
    const hub = screen.getByText('Browse all AP Chemistry topics') as HTMLAnchorElement
    expect(hub.getAttribute('href')).toBe('/courses/ap-chemistry')
    expect(hub.className).not.toMatch(/bg-orange-600/)
    expect(cta.className).toMatch(/bg-orange-600/)
    // Score + range: 10/33 is a 1–2 band, and the explainer repeats the real count.
    expect(screen.getByTestId('ap-score-band').textContent).toBe('1–2')
    expect(screen.getByText(/score from 33 questions/)).toBeTruthy()
  })

  it('demotes the retake to a text link at the bottom with the "after your plan" copy', () => {
    const { onRetake } = renderResults()
    const retake = screen.getByTestId('ap-results-retake')
    expect(retake.tagName).toBe('BUTTON')
    expect(retake.textContent).toBe("Retake after you've cleared your plan")
    expect(screen.queryByText(/Take Next Diagnostic/i)).toBeNull()
    expect(screen.queryByText(/Take another diagnostic/i)).toBeNull()
    expect(order(screen.getByTestId('ap-results-next-step-cta'), retake)).toBe(-1)
    expect(order(screen.getByTestId('ap-results-explainer'), retake)).toBe(-1)
    fireEvent.click(retake)
    expect(onRetake).toHaveBeenCalledTimes(1)
  })

  it('adds "~N min" to the button once the lesson length is known', async () => {
    lessonParts = { 'moles-molar-mass': 7 }
    renderResults()
    await waitFor(() => expect(screen.getByTestId('ap-results-next-step-cta').textContent).toContain(`~${estimateLessonMinutes(7)} min`))
    expect(estimateLessonMinutes(7)).toBe(45)
    expect(estimateLessonMinutes(0)).toBeNull()
    expect(nextStepLabel('X', null)).toBe('Start X')
    expect(fetchMock.mock.calls[0][0]).toContain('/api/lessons/length?slugs=moles-molar-mass')
  })

  it('uses the dashboard/hub href helper so the link always lands on /interactive, flagged as a diagnostic arrival (W5)', () => {
    expect(apResultsTopicHref({ slug: 'limits-continuity-calcab', name: 'Limits', priority: 'high' }, apDiagnosticCourse('ap-calculus-ab'))).toBe('/topics/limits-continuity-calcab/interactive?from=diagnostic')
  })
})

describe('ApDiagnosticResults: exam-aware modes (Phase 3 W4)', () => {
  const cram = apExamWeekLinks('ap-chemistry', 'ap-chem')!

  it('exam week: "Exam in N days — do these three things", flashcards as the one filled button, practice exam and mistakes as links, the plan demoted to "If you have more time"', () => {
    renderResults({ now: CHEM_EXAM_WEEK })
    expect(screen.getByTestId('ap-results-mode-exam-week')).toBeTruthy()
    expect(screen.queryByTestId('ap-results-mode-plan')).toBeNull()
    expect(screen.getByRole('heading', { level: 2, name: /Exam in 5 days — do these three things/ })).toBeTruthy()
    expect(screen.getByTestId('ap-exam-chip').textContent).toBe('Exam in 5 days')
    const cta = screen.getByTestId('ap-results-next-step-cta') as HTMLAnchorElement
    expect(cta.getAttribute('href')).toBe('/flashcards?course=ap-chemistry')
    expect(cta.className).toMatch(/bg-orange-600/)
    // The weakest unit (lowest weak domain) names the flashcard step.
    expect(cta.textContent).toContain('Atomic Structure')
    expect(screen.getByTestId('ap-results-exam-week-practice').getAttribute('href')).toBe('/ap-chem-practice')
    expect(screen.getByTestId('ap-results-exam-week-mistakes').getAttribute('href')).toBe('/ap-chemistry/mistakes')
    expect(cram).toEqual({ flashcards: '/flashcards?course=ap-chemistry', practice: '/ap-chem-practice', mistakes: '/ap-chemistry/mistakes' })
    // Only one filled button; the other two are text links.
    expect(screen.getByTestId('ap-results-exam-week-practice').className).not.toMatch(/bg-orange-600/)
    // The whole plan (topic 1 included) follows as "If you have more time", numbered from 1, below the cram card.
    const plan = screen.getByTestId('ap-results-plan-list')
    expect(within(plan).getByText('If you have more time')).toBeTruthy()
    expect(screen.queryByText('Then, in order')).toBeNull()
    expect(topicLinks().map((a) => a.getAttribute('href'))).toEqual(RESULTS.recommendedTopics.map((t) => apResultsTopicHref(t, apDiagnosticCourse('ap-chemistry'))))
    expect(within(plan).getByText('1')).toBeTruthy()
    expect(order(cta, plan)).toBe(-1)
    expect(order(plan, screen.getByText('Unit breakdown'))).toBe(-1)
    // The explainer no longer says "above" for topic 1.
    expect(screen.getByTestId('ap-results-explainer').textContent).toContain('Start topic 1 of your plan.')
  })

  it('exam week applies to a 5 too, and to the v2 band', () => {
    renderResults({ now: CHEM_EXAM_WEEK, results: { ...FIVE, scoreRange: { low: 4, high: 5 }, percentRange: { low: 85, high: 99 } } })
    expect(screen.getByTestId('ap-results-mode-exam-week')).toBeTruthy()
  })

  it('confirm-5: "on track for a 5", the practice exam as the filled button, topic 1 secondary, topics 2..N listed', () => {
    renderResults({ results: FIVE })
    expect(screen.getByTestId('ap-results-mode-confirm-5')).toBeTruthy()
    expect(screen.getByRole('heading', { level: 2, name: /on track for a 5 — confirm it with a full practice exam/ })).toBeTruthy()
    const cta = screen.getByTestId('ap-results-next-step-cta') as HTMLAnchorElement
    expect(cta.getAttribute('href')).toBe('/ap-chem-practice')
    expect(cta.className).toMatch(/bg-orange-600/)
    const topic = screen.getByTestId('ap-results-secondary-topic') as HTMLAnchorElement
    expect(topic.getAttribute('href')).toBe(apResultsTopicHref(RESULTS.recommendedTopics[0], apDiagnosticCourse('ap-chemistry')))
    expect(topic.textContent).toContain('Start Moles & Molar Mass')
    expect(topic.className).not.toMatch(/bg-orange-600/)
    expect(screen.getByText('Then, in order')).toBeTruthy()
    expect(topicLinks()).toHaveLength(3)
    // Months out, the chip still counts down.
    expect(screen.getByTestId('ap-exam-chip').textContent).toMatch(/^Exam in \d+ days$/)
  })

  it('plan mode for a 2–4 outside exam week (the chip still shows the countdown), and for a 5 once the exam has passed', () => {
    renderResults()
    expect(screen.getByTestId('ap-results-mode-plan')).toBeTruthy()
    expect(screen.getByTestId('ap-exam-chip').textContent).toMatch(/^Exam in \d+ days$/)
    cleanup()
    renderResults({ results: FIVE, now: new Date('2027-06-01T12:00:00Z') })
    expect(screen.getByTestId('ap-results-mode-plan')).toBeTruthy()
    expect(screen.queryByTestId('ap-exam-chip')).toBeNull()
    cleanup()
    // A 4 whose band is 4–5 (22/33) is not a confirm-5.
    renderResults({ results: { ...RESULTS, totalCorrect: 22, totalQuestions: 33, percentage: 67, estimatedAPScore: 4 } })
    expect(screen.getByTestId('ap-results-mode-plan')).toBeTruthy()
  })

  it('the Premium lock still replaces every mode', () => {
    renderResults({ now: CHEM_EXAM_WEEK, planAccess: { loading: false, canAccess: false } })
    expect(screen.queryByTestId('ap-results-mode-exam-week')).toBeNull()
    expect(screen.queryByTestId('ap-results-next-step-cta')).toBeNull()
    expect(screen.getByText(/Premium feature/)).toBeTruthy()
    expect(document.querySelector('a[href^="/flashcards"]')).toBeNull()
  })

  it('ap_results_next_step_click carries the mode\'s primary action as cta_type', () => {
    renderResults({ now: CHEM_EXAM_WEEK })
    fireEvent.click(screen.getByTestId('ap-results-next-step-cta'))
    fireEvent.click(screen.getByTestId('ap-results-exam-week-practice'))
    fireEvent.click(screen.getByTestId('ap-results-exam-week-mistakes'))
    let events = sentEvents().filter((e) => e.eventName === 'ap_results_next_step_click')
    expect(events.map((e) => e.params.cta_type)).toEqual([AP_NEXT_STEP_CTA_TYPE['exam-week'], 'exam_week_practice_exam', 'exam_week_mistakes'])
    expect(events[0].params).toMatchObject({ course_slug: 'ap-chemistry', topic_slug: 'moles-molar-mass', destination: '/flashcards?course=ap-chemistry' })
    expect(events[1].params).toMatchObject({ destination: '/ap-chem-practice' })
    expect(events[1].params).not.toHaveProperty('topic_slug')
    cleanup()
    beacon.mockClear()
    renderResults({ results: FIVE })
    fireEvent.click(screen.getByTestId('ap-results-next-step-cta'))
    fireEvent.click(screen.getByTestId('ap-results-secondary-topic'))
    events = sentEvents().filter((e) => e.eventName === 'ap_results_next_step_click')
    expect(events.map((e) => e.params.cta_type)).toEqual([AP_NEXT_STEP_CTA_TYPE['confirm-5'], 'confirm_5_topic'])
    expect(events[0].params.destination).toBe('/ap-chem-practice')
    cleanup()
    beacon.mockClear()
    renderResults()
    fireEvent.click(screen.getByTestId('ap-results-next-step-cta'))
    events = sentEvents().filter((e) => e.eventName === 'ap_results_next_step_click')
    expect(events[0].params.cta_type).toBe(AP_NEXT_STEP_CTA_TYPE.plan)
    expect(AP_NEXT_STEP_CTA_TYPE.plan).toBe('next_step')
    const allowed = new Set(['course_slug', 'topic_slug', 'destination', 'cta_type', 'page_template', 'attempt_id', 'score', 'version'])
    for (const e of sentEvents()) for (const k of Object.keys(e.params)) expect(allowed.has(k), `${e.eventName}.${k}`).toBe(true)
  })
})

describe('ApDiagnosticResults: plan lock and track', () => {
  it('shows the Premium lock where the next step would be, with no topic link on the page', () => {
    renderResults({ planAccess: { loading: false, canAccess: false } })
    expect(screen.getByText(/personalized study plan is a Premium feature/)).toBeTruthy()
    expect(topicLinks()).toHaveLength(0)
    expect(screen.queryByTestId('ap-results-next-step-cta')).toBeNull()
    // Still the student's results: score, bars, review, and the demoted retake.
    expect(screen.getByTestId('ap-score-band')).toBeTruthy()
    expect(screen.getByTestId('ap-results-retake')).toBeTruthy()
  })

  it('shows neither the plan nor the lock while the access check is loading', () => {
    renderResults({ planAccess: { loading: true, canAccess: false } })
    expect(topicLinks()).toHaveLength(0)
    expect(screen.queryByText(/Premium feature/)).toBeNull()
    expect(screen.getByLabelText('Loading your study plan')).toBeTruthy()
  })

  it('states the Phase 2 track on the four flagships only', () => {
    renderResults()
    const line = screen.getByTestId('ap-track-line')
    expect(line.textContent).toContain(AP_TRACK_LABEL.foundation)
    expect(line.textContent).toMatch(/lean toward easy and medium/)
    cleanup()
    renderResults({ course: apDiagnosticCourse('ap-psychology') })
    expect(screen.queryByTestId('ap-track-line')).toBeNull()
  })
})

describe('ApDiagnosticResults: copy from the enforcing code', () => {
  it('explains the real loop: lesson + exit quiz at the pass mark → cycle test → retake', () => {
    renderResults()
    const text = screen.getByTestId('ap-results-explainer').textContent ?? ''
    expect(text).toContain(`score ${TOPIC_CLEAR_PERCENT}% on the quiz to clear it`)
    expect(text).toContain('Clear all 3 topics')
    expect(text).toContain(`${MCAT_UNIT_TEST_QUESTIONS} questions drawn from your plan topics, ${MCAT_UNIT_TEST_PASS_PERCENT}% to pass`)
    expect(text).toContain('Retake this diagnostic')
    expect(text).not.toMatch(/4\+/)
    const cycle = within(screen.getByTestId('ap-results-explainer')).getByRole('link') as HTMLAnchorElement
    expect(cycle.getAttribute('href')).toBe('/cycle-test/ap-chem')
  })

  it('config lengths equal every v1 data file, the class-plan routes, and the v2 blueprints', () => {
    expect(AP_DIAGNOSTICS).toHaveLength(23)
    for (const d of AP_DIAGNOSTICS) {
      const c = AP_DIAGNOSTIC_COURSES[d.course]
      expect(c, d.course).toBeDefined()
      const form = d.generate(1) as { questions: unknown[]; timeLimitMinutes: number }
      expect(c.questionCount, `${d.course} questions`).toBe(form.questions.length)
      expect(c.timeLimitMinutes, `${d.course} minutes`).toBe(form.timeLimitMinutes)
      expect(c.diagnosticPath, `${d.course} path`).toBe(diagnosticRouteForKey(c.key))
      expect(c.label).toBe(classPlanCourse(c.key)?.label)
      expect(c.courseSlug).toBe(classPlanCourse(c.key)?.courseSlug)
    }
    expect(Object.keys(AP_DIAGNOSTIC_COURSES).sort()).toEqual(AP_DIAGNOSTICS.map((d) => d.course).sort())
    for (const course of AP_DIAG_V2_COURSES) {
      const bp = AP_DIAG_V2_BLUEPRINTS[course]
      expect(apDiagnosticLength(course)).toEqual({ questionCount: bp.length, timeLimitMinutes: bp.timeLimitMinutes })
    }
    expect(apDiagnosticStats('ap-chemistry')).toBe('33 questions · 40 min')
    expect(() => apDiagnosticCourse('sat-prep')).toThrow()
  })

  it('every AP landing page reads its diagnostic card stats from the config', () => {
    const dirs = [
      'ap-chemistry', 'ap-biology', 'ap-physics-1', 'ap-calculus-ab', 'ap-calculus-bc', 'ap-precalculus', 'ap-statistics', 'ap-physics-2',
      'ap-physics-c-mechanics', 'ap-physics-c-em', 'ap-environmental-science', 'ap-computer-science-a', 'ap-cs-principles', 'ap-english-language',
      'ap-english-literature', 'ap-us-history', 'ap-world-history', 'ap-us-government', 'ap-human-geography', 'ap-macroeconomics', 'ap-microeconomics',
      'ap-psychology', 'ap-african-american-studies',
    ]
    for (const d of dirs) {
      const src = read(`src/app/${d}/page.tsx`)
      expect(src, d).toMatch(/stats: apDiagnosticStats\('ap-[a-z0-9-]+'\)/)
      expect(src, d).not.toMatch(/stats: '~\d+ questions · \d+ min'/)
    }
  })
})

describe('ApDiagnosticResults: every AP diagnostic page renders it', () => {
  it('the 23 v1 menus take their question count and time limit from the config (no "~30 questions" / "3-5 modules" literals)', () => {
    for (const p of v1) {
      const src = read(`src/app/${p}-diagnostic/page.tsx`)
      const slug = /apDiagnosticCourse\('([a-z0-9-]+)'\)/.exec(src)?.[1]
      expect(slug, p).toBeTruthy()
      expect(src, p).toContain(`apDiagnosticCourse('${slug}').questionCount} questions`)
      expect(src, p).toContain(`apDiagnosticCourse('${slug}').timeLimitMinutes} minute time limit`)
      expect(src, p).not.toMatch(/~\d+ questions/)
      expect(src, p).not.toMatch(/\d+ minute time limit/)
      expect(src, p).not.toMatch(/3-5 (personalized|focused) module/)
    }
  })
  const v1 = [
    'ap-chem', 'ap-bio', 'ap-physics1', 'calcab', 'calcbc', 'ap-precalculus', 'ap-stats', 'ap-physics2', 'ap-physics-c-mech', 'ap-physics-c-em',
    'ap-enviro', 'ap-csa', 'ap-csp', 'ap-english-lang', 'ap-english-lit', 'ap-us-history', 'ap-world-history', 'ap-us-gov', 'ap-human-geo',
    'ap-macro', 'ap-micro', 'ap-psych', 'ap-african-american-studies',
  ]
  it('the 23 v1 pages and the v2 page hand their results to the shared component', () => {
    for (const p of v1) {
      const src = read(`src/app/${p}-diagnostic/page.tsx`)
      expect(src, p).toContain('<ApDiagnosticResults')
      expect(src, p).toMatch(/useApDiagnosticStartEvent\('ap-[a-z0-9-]+', phase\)/)
      expect(src, p).not.toContain('Take Next Diagnostic</button>')
      expect(src, p).not.toContain('How This Cycle Works')
    }
    const v2 = read('src/components/ap-diagnostic-v2/ApDiagnosticV2Page.tsx')
    expect(v2).toContain('<ApDiagnosticResults')
    expect(v2).toContain('version={2}')
    expect(v2).toContain('useApDiagnosticStartEvent(course, phase, 2)')
    expect(read('src/app/ap-calcab-diagnostic/page.tsx')).toContain('calcab-diagnostic')
  })
})

describe('ApDiagnosticResults: analytics', () => {
  it('records submit, complete (with the saved attempt id), next-step and retake clicks as GA4 + AnalyticsEvent rows', () => {
    const { rerender, onRetake } = renderResults()
    let events = sentEvents()
    expect(events.map((e) => e.eventName)).toEqual(['ap_diagnostic_submit'])
    expect(events[0].params).toMatchObject({ course_slug: 'ap-chemistry', score: 30, version: 1 })
    expect(gtag).toHaveBeenCalledWith('event', 'ap_diagnostic_submit', expect.objectContaining({ course_slug: 'ap-chemistry' }))

    // The page's history refresh after the save brings the new DiagnosticTest id.
    rerender(
      <ApDiagnosticResults
        course={apDiagnosticCourse('ap-chemistry')}
        results={RESULTS}
        planAccess={{ loading: false, canAccess: true }}
        history={[{ id: 'att-new' }, { id: 'old-1' }]}
        review={REVIEW}
        onRetake={onRetake}
      />,
    )
    events = sentEvents()
    expect(events.map((e) => e.eventName)).toEqual(['ap_diagnostic_submit', 'ap_diagnostic_complete'])
    expect(events[1].params).toMatchObject({ course_slug: 'ap-chemistry', attempt_id: 'att-new', version: 1 })

    fireEvent.click(screen.getByTestId('ap-results-next-step-cta'))
    fireEvent.click(screen.getByTestId('ap-results-retake'))
    events = sentEvents()
    expect(events.map((e) => e.eventName)).toEqual(['ap_diagnostic_submit', 'ap_diagnostic_complete', 'ap_results_next_step_click', 'ap_results_retake_click'])
    expect(events[2].params).toMatchObject({ course_slug: 'ap-chemistry', topic_slug: 'moles-molar-mass', destination: '/topics/moles-molar-mass/interactive?from=diagnostic', attempt_id: 'att-new' })
    expect(events[3].params).toMatchObject({ course_slug: 'ap-chemistry', attempt_id: 'att-new' })
    // Rows go through the existing endpoint that stores mcat_diagnostic_complete, and carry no PII.
    for (const [url] of beacon.mock.calls) expect(url).toBe('/api/analytics/events')
    const allowed = new Set(['course_slug', 'topic_slug', 'destination', 'cta_type', 'page_template', 'attempt_id', 'score', 'version'])
    for (const e of events) for (const k of Object.keys(e.params)) expect(allowed.has(k), `${e.eventName}.${k}`).toBe(true)
  })

  it('sends ap_diagnostic_complete without an id after the fallback deadline when the save never shows up, once', () => {
    vi.useFakeTimers()
    renderResults()
    vi.advanceTimersByTime(9000)
    const events = sentEvents()
    expect(events.map((e) => e.eventName)).toEqual(['ap_diagnostic_submit', 'ap_diagnostic_complete'])
    expect(events[1].params).not.toHaveProperty('attempt_id')
    vi.advanceTimersByTime(9000)
    expect(sentEvents()).toHaveLength(2)
  })

  it('does not persist rows without analytics consent (same rule as every other event)', () => {
    window.localStorage.removeItem('cookie-consent')
    renderResults()
    expect(beacon).not.toHaveBeenCalled()
    expect(gtag).toHaveBeenCalledWith('event', 'ap_diagnostic_submit', expect.anything())
  })
})

describe('/api/lessons/length', () => {
  it('returns part counts for interactive lessons and skips unknown or malformed slugs', async () => {
    const res = await lessonLengthGET(new NextRequest('http://localhost/api/lessons/length?slugs=moles-molar-mass,no-such-topic,Bad Slug!'))
    const body = (await res.json()) as { parts: Record<string, number> }
    expect(body.parts['moles-molar-mass']).toBeGreaterThan(0)
    expect(body.parts).not.toHaveProperty('no-such-topic')
    expect(Object.keys(body.parts)).toEqual(['moles-molar-mass'])
  })
})
