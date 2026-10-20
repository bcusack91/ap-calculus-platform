/**
 * /api/cron/ap-diagnostic-followup: window query, lesson-signal exclusion,
 * dedupe marker, and fail-soft sends (the route ships before RESEND_API_KEY
 * exists, so sendEmail throwing must be a counted failure, not a 500).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockDiagFindMany = vi.fn()
const mockSubscriberFindMany = vi.fn()
const mockEventFindMany = vi.fn()
const mockEventCreate = vi.fn()
const mockTopicProgressFindMany = vi.fn()
const mockActiveTimeFindMany = vi.fn()
const mockQuestionActivityFindMany = vi.fn()
const mockExitFindMany = vi.fn()
const mockTopicFindMany = vi.fn()
const mockSend = vi.fn()

vi.mock('@/lib/prisma', () => ({
  prisma: {
    diagnosticTest: { findMany: (...a: unknown[]) => mockDiagFindMany(...a) },
    emailSubscriber: { findMany: (...a: unknown[]) => mockSubscriberFindMany(...a) },
    analyticsEvent: { findMany: (...a: unknown[]) => mockEventFindMany(...a), create: (...a: unknown[]) => mockEventCreate(...a) },
    topicProgress: { findMany: (...a: unknown[]) => mockTopicProgressFindMany(...a) },
    activeTimeDaily: { findMany: (...a: unknown[]) => mockActiveTimeFindMany(...a) },
    questionActivity: { findMany: (...a: unknown[]) => mockQuestionActivityFindMany(...a) },
    exitQuizAttempt: { findMany: (...a: unknown[]) => mockExitFindMany(...a) },
    topic: { findMany: (...a: unknown[]) => mockTopicFindMany(...a) },
  },
}))
vi.mock('@/lib/email', () => ({ sendApDiagnosticFollowupEmail: (...a: unknown[]) => mockSend(...a) }))
vi.mock('@/lib/cron-auth', () => ({ requireCronSecret: () => null }))

import { NextRequest } from 'next/server'
import { GET } from '@/app/api/cron/ap-diagnostic-followup/route'

const H = 3_600_000
const req = () => new NextRequest('http://x/api/cron/ap-diagnostic-followup')

function row(over: Record<string, unknown> = {}, user: Record<string, unknown> = {}) {
  return {
    id: 'd1',
    userId: 'u1',
    category: 'ap-chem-diagnostic-v2',
    createdAt: new Date(Date.now() - 30 * H),
    results: { estimatedAPScore: 3, totalCorrect: 20, totalQuestions: 33, recommendedTopics: [{ slug: 'thermodynamics', name: 'Thermodynamics' }] },
    weakAreas: null,
    ...over,
    user: { id: 'u1', email: 'sam@example.com', name: 'Sam', role: 'FREE', emailVerified: new Date(), accounts: [], ...user },
  }
}

describe('ap-diagnostic-followup cron', () => {
  beforeEach(() => {
    for (const m of [mockDiagFindMany, mockSubscriberFindMany, mockEventFindMany, mockEventCreate, mockTopicProgressFindMany, mockActiveTimeFindMany, mockQuestionActivityFindMany, mockExitFindMany, mockTopicFindMany, mockSend]) {
      m.mockReset().mockResolvedValue([])
    }
    mockEventCreate.mockResolvedValue({})
    mockSend.mockResolvedValue(undefined)
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  it('asks for AP diagnostics created in [now-48h, now-24h) only', async () => {
    const before = Date.now()
    const res = await GET(req())
    expect(res.status).toBe(200)
    expect(await res.json()).toMatchObject({ ok: true, eligible: 0, sent: 0, skipped: 0, failed: 0 })
    const where = mockDiagFindMany.mock.calls[0][0].where as { createdAt: { gte: Date; lt: Date }; OR: { category: { startsWith: string } }[] }
    expect(where.createdAt.gte.getTime()).toBeGreaterThanOrEqual(before - 48 * H)
    expect(where.createdAt.gte.getTime()).toBeLessThanOrEqual(Date.now() - 48 * H)
    expect(where.createdAt.lt.getTime() - where.createdAt.gte.getTime()).toBe(24 * H)
    const prefixes = where.OR.map((o) => o.category.startsWith)
    expect(prefixes).toContain('ap-chem-diagnostic')
    expect(prefixes).toContain('calcab-diagnostic')
    expect(prefixes).not.toContain('sat-full-diagnostic')
  })

  it('sends, uses the production topic title, and writes the dedupe marker', async () => {
    mockDiagFindMany.mockResolvedValueOnce([row()]).mockResolvedValueOnce([])
    mockTopicFindMany.mockResolvedValue([{ slug: 'thermodynamics', title: 'Thermodynamics and Enthalpy' }])
    const res = await GET(req())
    const body = await res.json()
    expect(body).toMatchObject({ ok: true, eligible: 1, sent: 1, failed: 0 })
    expect(mockSend).toHaveBeenCalledTimes(1)
    const ctx = mockSend.mock.calls[0][0] as { email: string; topic: { slug: string; title: string }; paths: { lesson: string }; variant: string }
    expect(ctx.email).toBe('sam@example.com')
    expect(ctx.topic).toEqual({ slug: 'thermodynamics', title: 'Thermodynamics and Enthalpy' })
    expect(ctx.paths.lesson).toBe('/topics/thermodynamics/interactive')
    expect(mockEventCreate).toHaveBeenCalledTimes(1)
    expect(mockEventCreate.mock.calls[0][0]).toMatchObject({
      data: { eventName: 'ap_followup_email_sent', courseSlug: 'ap-chemistry', metadata: { diagnosticId: 'd1', variant: ctx.variant } },
    })
  })

  it('fails soft when sendEmail throws (no RESEND_API_KEY): counted, logged, no marker, still 200', async () => {
    mockDiagFindMany.mockResolvedValueOnce([row(), row({ id: 'd2', userId: 'u2' }, { id: 'u2', email: 'kim@example.com' })]).mockResolvedValueOnce([])
    mockSend.mockRejectedValueOnce(new Error('RESEND_API_KEY is not configured — email sending is disabled')).mockResolvedValueOnce(undefined)
    const res = await GET(req())
    expect(res.status).toBe(200)
    expect(await res.json()).toMatchObject({ ok: true, eligible: 2, sent: 1, failed: 1 })
    expect(mockEventCreate).toHaveBeenCalledTimes(1)
    expect(console.error).toHaveBeenCalled()
  })

  it('skips a diagnostic with an existing marker, a student with a newer diagnostic, and lesson openers', async () => {
    const opened = row({ id: 'd3', userId: 'u3' }, { id: 'u3', email: 'lee@example.com' })
    const marked = row({ id: 'd4', userId: 'u4' }, { id: 'u4', email: 'ana@example.com' })
    const reroll = row({ id: 'd5', userId: 'u5' }, { id: 'u5', email: 'joe@example.com' })
    mockDiagFindMany.mockResolvedValueOnce([row(), opened, marked, reroll]).mockResolvedValueOnce([{ userId: 'u5' }])
    mockEventFindMany.mockResolvedValue([{ metadata: { diagnosticId: 'd4' } }])
    mockExitFindMany.mockResolvedValue([{ userId: 'u3', topicSlug: 'thermodynamics', startedAt: new Date() }])
    mockTopicFindMany.mockResolvedValue([{ slug: 'thermodynamics', title: 'Thermodynamics', category: { course: { slug: 'ap-chemistry' } } }])
    const res = await GET(req())
    const body = await res.json()
    expect(body).toMatchObject({ eligible: 1, sent: 1, skipped: 3, skippedBy: { 'already-sent': 1, 'newer-diagnostic': 1, 'lesson-opened': 1 } })
    expect(mockSend.mock.calls[0][0]).toMatchObject({ email: 'sam@example.com' })
  })

  it('excludes teachers, unverified addresses and unsubscribed emails', async () => {
    mockDiagFindMany
      .mockResolvedValueOnce([
        row({ id: 't', userId: 'ut' }, { id: 'ut', email: 't@example.com', role: 'TEACHER' }),
        row({ id: 'v', userId: 'uv' }, { id: 'uv', email: 'v@example.com', emailVerified: null }),
        row({ id: 'o', userId: 'uo' }, { id: 'uo', email: 'o@example.com', emailVerified: null, accounts: [{ id: 'acc' }] }),
        row({ id: 'x', userId: 'ux' }, { id: 'ux', email: 'X@example.com' }),
      ])
      .mockResolvedValueOnce([])
    mockSubscriberFindMany.mockResolvedValue([{ email: 'x@example.com' }])
    const body = await (await GET(req())).json()
    expect(body).toMatchObject({ eligible: 1, sent: 1, skippedBy: { teacher: 1, unverified: 1, 'opted-out': 1 } })
    expect(mockSend.mock.calls[0][0]).toMatchObject({ email: 'o@example.com' })
  })
})
