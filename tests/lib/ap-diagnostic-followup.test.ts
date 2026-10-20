/**
 * AP diagnostic follow-up email: targeting rules, the exam-week switch and
 * the template (src/lib/ap-diagnostic-followup.ts, src/lib/email.ts).
 */
import { describe, it, expect } from 'vitest'
import {
  AP_FOLLOWUP_COURSES,
  AP_FOLLOWUP_EXAM_WEEK_DAYS,
  apFollowupVariant,
  buildFollowupContext,
  firstRecommendedTopic,
  followupWindow,
  selectFollowupRecipients,
  weakestUnit,
  type FollowupDiagnostic,
  type FollowupUser,
} from '@/lib/ap-diagnostic-followup'
import { AP_EXAM_DATES, daysUntilApExam } from '@/lib/ap-exam-dates'
import { buildApDiagnosticFollowupEmail } from '@/lib/email'

const NOW = new Date('2026-10-20T22:00:00Z')
const H = 3_600_000

const student: FollowupUser = {
  id: 'u1',
  email: 'Sam@Example.com',
  name: 'Sam Lee',
  role: 'FREE',
  emailVerified: new Date('2026-01-01T00:00:00Z'),
  hasOAuthAccount: false,
}

const results = {
  totalCorrect: 20,
  totalQuestions: 33,
  percentage: 61,
  estimatedAPScore: 3,
  domains: [
    { domainName: 'Unit 1: Atomic Structure', correct: 5, total: 6 },
    { domainName: 'Unit 4: Chemical Reactions', correct: 1, total: 5 },
  ],
  recommendedTopics: [
    { slug: 'thermodynamics', name: 'Thermodynamics', priority: 'high' },
    { slug: 'kinetics', name: 'Kinetics', priority: 'medium' },
  ],
}

function diag(over: Omit<Partial<FollowupDiagnostic>, 'user'> & { user?: Partial<FollowupUser> } = {}): FollowupDiagnostic {
  const { user, ...rest } = over
  return {
    id: 'd1',
    userId: 'u1',
    category: 'ap-chem-diagnostic-1',
    createdAt: new Date(NOW.getTime() - 30 * H),
    results,
    ...rest,
    user: { ...student, ...user },
  }
}

function select(diags: FollowupDiagnostic[], over: Partial<Parameters<typeof selectFollowupRecipients>[0]> = {}) {
  return selectFollowupRecipients({
    diagnostics: diags,
    newerDiagnosticUserIds: new Set(),
    lessonSignals: [],
    optedOutEmails: new Set(),
    sentDiagnosticIds: new Set(),
    now: NOW,
    ...over,
  })
}

describe('follow-up window', () => {
  it('is [now-48h, now-24h)', () => {
    const { from, to } = followupWindow(NOW)
    expect(from.toISOString()).toBe('2026-10-18T22:00:00.000Z')
    expect(to.toISOString()).toBe('2026-10-19T22:00:00.000Z')
  })

  it('consecutive daily runs tile the timeline: each diagnostic falls in exactly one window', () => {
    const today = followupWindow(NOW)
    const tomorrow = followupWindow(new Date(NOW.getTime() + 24 * H))
    expect(tomorrow.from.getTime()).toBe(today.to.getTime())
    // A sitting exactly at today's upper edge belongs to tomorrow (lt), one at the lower edge to today (gte).
    const atEdge = today.to.getTime()
    const inToday = (t: number) => t >= today.from.getTime() && t < today.to.getTime()
    const inTomorrow = (t: number) => t >= tomorrow.from.getTime() && t < tomorrow.to.getTime()
    expect(inToday(atEdge)).toBe(false)
    expect(inTomorrow(atEdge)).toBe(true)
    expect(inToday(today.from.getTime())).toBe(true)
    expect(inToday(atEdge - 1)).toBe(true)
    expect(inTomorrow(atEdge - 1)).toBe(false)
  })
})

describe('targeting', () => {
  it('covers every AP course and both v1 and v2 categories', () => {
    expect(AP_FOLLOWUP_COURSES).toHaveLength(23)
    expect(AP_FOLLOWUP_COURSES.every((c) => c.courseSlug in AP_EXAM_DATES)).toBe(true)
    const v1 = select([diag({ id: 'a', category: 'ap-chem-diagnostic-2' })])
    const v2 = select([diag({ id: 'b', category: 'ap-chem-diagnostic-v2' })])
    const calc = select([diag({ id: 'c', category: 'calcab-diagnostic-v2', results: { ...results, recommendedTopics: [{ slug: 'limits', name: 'Limits' }] } })])
    expect(v1.recipients.map((d) => d.id)).toEqual(['a'])
    expect(v2.recipients.map((d) => d.id)).toEqual(['b'])
    expect(calc.recipients.map((d) => d.id)).toEqual(['c'])
  })

  it('ignores non-AP diagnostics', () => {
    const r = select([diag({ category: 'sat-full-diagnostic-1' })])
    expect(r.recipients).toHaveLength(0)
    expect(r.skipped['not-ap']).toBe(1)
  })

  it('excludes teachers and admins', () => {
    expect(select([diag({ user: { role: 'TEACHER' } })]).skipped.teacher).toBe(1)
    expect(select([diag({ user: { role: 'ADMIN' } })]).skipped.teacher).toBe(1)
    expect(select([diag({ user: { role: 'PREMIUM' } })]).recipients).toHaveLength(1)
  })

  it('requires a verified or OAuth email', () => {
    expect(select([diag({ user: { emailVerified: null } })]).skipped.unverified).toBe(1)
    expect(select([diag({ user: { emailVerified: null, hasOAuthAccount: true } })]).recipients).toHaveLength(1)
    expect(select([diag({ user: { email: null } })]).skipped['no-email']).toBe(1)
  })

  it('honours the unsubscribe list case-insensitively', () => {
    const r = select([diag()], { optedOutEmails: new Set(['sam@example.com']) })
    expect(r.recipients).toHaveLength(0)
    expect(r.skipped['opted-out']).toBe(1)
  })

  it('skips a diagnostic that already has a sent marker', () => {
    const r = select([diag()], { sentDiagnosticIds: new Set(['d1']) })
    expect(r.recipients).toHaveLength(0)
    expect(r.skipped['already-sent']).toBe(1)
  })

  it('skips the student when a newer AP diagnostic exists (most recent must be in the window)', () => {
    const r = select([diag()], { newerDiagnosticUserIds: new Set(['u1']) })
    expect(r.skipped['newer-diagnostic']).toBe(1)
  })

  it('emails one diagnostic per student: the latest in the window', () => {
    const older = diag({ id: 'old', category: 'ap-bio-diagnostic-1', createdAt: new Date(NOW.getTime() - 47 * H) })
    const newer = diag({ id: 'new', createdAt: new Date(NOW.getTime() - 25 * H) })
    const r = select([older, newer])
    expect(r.recipients.map((d) => d.id)).toEqual(['new'])
    expect(r.skipped['older-in-window']).toBe(1)
  })

  it('excludes a student who opened a lesson in that course since the diagnostic', () => {
    const d = diag()
    const after = new Date(d.createdAt.getTime() + H)
    const before = new Date(d.createdAt.getTime() - H)
    expect(select([d], { lessonSignals: [{ userId: 'u1', courseSlug: 'ap-chemistry', at: after }] }).skipped['lesson-opened']).toBe(1)
    // Same instant counts as since.
    expect(select([d], { lessonSignals: [{ userId: 'u1', courseSlug: 'ap-chemistry', at: d.createdAt }] }).skipped['lesson-opened']).toBe(1)
    // Before the sitting, another course, or another student: still eligible.
    expect(select([d], { lessonSignals: [{ userId: 'u1', courseSlug: 'ap-chemistry', at: before }] }).recipients).toHaveLength(1)
    expect(select([d], { lessonSignals: [{ userId: 'u1', courseSlug: 'ap-biology', at: after }] }).recipients).toHaveLength(1)
    expect(select([d], { lessonSignals: [{ userId: 'u2', courseSlug: 'ap-chemistry', at: after }] }).recipients).toHaveLength(1)
  })

  it('needs a recommended topic unless the exam-week variant applies', () => {
    const none = diag({ results: { ...results, recommendedTopics: [] } })
    expect(select([none]).skipped['no-topic']).toBe(1)
    const examWeek = new Date('2027-04-28T22:00:00Z') // AP Chemistry exam 2027-05-06
    expect(select([none], { now: examWeek }).recipients).toHaveLength(1)
  })
})

describe('results helpers', () => {
  it('maps the first recommended topic through the legacy-slug table', () => {
    const t = firstRecommendedTopic('ap-biology', {
      recommendedTopics: [{ slug: 'ap-bio-cell-communication', name: 'Cell Communication' }],
    })
    expect(t?.slug).toBe('cell-signaling')
  })

  it('reads stringified results and picks the lowest-scoring unit', () => {
    expect(firstRecommendedTopic('ap-chemistry', JSON.stringify(results))?.slug).toBe('thermodynamics')
    expect(weakestUnit(results)).toBe('Unit 4: Chemical Reactions')
    expect(weakestUnit({ weakAreas: ['Unit 2'] })).toBe('Unit 2')
    expect(weakestUnit({}, ['Stored weak'])).toBe('Stored weak')
    expect(weakestUnit({})).toBeNull()
  })
})

describe('exam-week switch', () => {
  it('counts days to noon UTC on the exam date', () => {
    expect(daysUntilApExam('ap-chemistry', new Date('2027-05-05T22:00:00Z'))).toBe(1)
    expect(daysUntilApExam('ap-chemistry', new Date('2027-04-15T22:00:00Z'))).toBe(21)
    expect(daysUntilApExam('ap-chemistry', new Date('2027-05-06T22:00:00Z'))).toBeLessThanOrEqual(0)
    expect(daysUntilApExam('sat-prep', NOW)).toBeNull()
  })

  it(`switches to exam-week within ${AP_FOLLOWUP_EXAM_WEEK_DAYS} days and back after the exam`, () => {
    expect(apFollowupVariant('ap-chemistry', NOW)).toBe('next-step')
    expect(apFollowupVariant('ap-chemistry', new Date('2027-04-14T22:00:00Z'))).toBe('next-step') // 22 days
    expect(apFollowupVariant('ap-chemistry', new Date('2027-04-15T22:00:00Z'))).toBe('exam-week') // 21 days
    expect(apFollowupVariant('ap-chemistry', new Date('2027-05-05T22:00:00Z'))).toBe('exam-week') // tomorrow
    expect(apFollowupVariant('ap-chemistry', new Date('2027-05-06T22:00:00Z'))).toBe('next-step') // exam over
    // Calculus AB sits on May 10: still next-step when chemistry is already in exam week.
    expect(apFollowupVariant('ap-calculus-ab', new Date('2027-04-15T22:00:00Z'))).toBe('next-step')
    expect(apFollowupVariant('ap-calculus-ab', new Date('2027-04-19T22:00:00Z'))).toBe('exam-week')
  })
})

describe('template', () => {
  it('next-step: subject, score band, mapped topic link, exit-quiz line, unsubscribe', () => {
    const d = diag({ category: 'ap-bio-diagnostic-1', results: { ...results, recommendedTopics: [{ slug: 'ap-bio-cell-communication', name: 'Cell Communication' }] } })
    const ctx = buildFollowupContext(d, { now: NOW, topicTitles: new Map([['cell-signaling', 'Cell Signaling']]) })!
    expect(ctx.variant).toBe('next-step')
    expect(ctx.firstName).toBe('Sam')
    expect(ctx.scoreLabel).toBe('3–4/5')
    expect(ctx.topic).toEqual({ slug: 'cell-signaling', title: 'Cell Signaling' })
    expect(ctx.paths.lesson).toBe('/topics/cell-signaling/interactive')

    const mail = buildApDiagnosticFollowupEmail(ctx)
    expect(mail.subject).toBe('Your AP Biology next step (15 minutes)')
    expect(mail.to).toBe('Sam@Example.com')
    for (const body of [mail.text, mail.html]) {
      expect(body).toContain('Hi Sam,')
      expect(body).toContain('3–4/5')
      expect(body).toContain('/topics/cell-signaling/interactive')
      expect(body).toContain('Start Cell Signaling')
      expect(body).toContain('80%')
      expect(body).toContain('/settings')
      expect(body).not.toContain('ap-bio-cell-communication')
      expect(body).not.toContain('Sam Lee')
      expect(body).not.toContain('Sam@Example.com')
    }
  })

  it('falls back to the stored name and a bare score when the row carries less', () => {
    const d = diag({ results: { estimatedAPScore: 4, recommendedTopics: [{ slug: 'kinetics', name: 'Kinetics' }] } })
    const ctx = buildFollowupContext(d, { now: NOW })!
    expect(ctx.scoreLabel).toBe('4/5')
    expect(ctx.topic?.title).toBe('Kinetics')
    const mail = buildApDiagnosticFollowupEmail(ctx)
    expect(mail.text).toContain('Start Kinetics: ')
    expect(mail.text).toContain('/topics/kinetics/interactive')
  })

  it('exam-week: countdown subject and the three cram links', () => {
    const now = new Date('2027-04-28T22:00:00Z') // 8 days before AP Chemistry
    const ctx = buildFollowupContext(diag(), { now })!
    expect(ctx.variant).toBe('exam-week')
    expect(ctx.daysToExam).toBe(8)
    expect(ctx.weakestUnit).toBe('Unit 4: Chemical Reactions')
    expect(ctx.paths.practiceExam).toBe('/ap-chem-practice')
    expect(ctx.paths.mistakes).toBe('/ap-chemistry/mistakes')
    expect(ctx.paths.flashcards).toBe('/flashcards?course=ap-chemistry')

    const mail = buildApDiagnosticFollowupEmail(ctx)
    expect(mail.subject).toBe('AP Chemistry exam in 8 days — do these three things')
    for (const body of [mail.text, mail.html]) {
      expect(body).toContain('Unit 4: Chemical Reactions')
      expect(body).toContain('/flashcards?course=ap-chemistry')
      expect(body).toContain('/ap-chem-practice')
      expect(body).toContain('/ap-chemistry/mistakes')
      expect(body).not.toContain('/topics/thermodynamics')
    }
    const eve = buildApDiagnosticFollowupEmail(buildFollowupContext(diag(), { now: new Date('2027-05-05T22:00:00Z') })!)
    expect(eve.subject).toBe('AP Chemistry exam tomorrow — do these three things')
  })
})
