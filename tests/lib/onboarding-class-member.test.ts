/**
 * A student who has joined a class counts as onboarded.
 *
 * The dashboard redirects any account without a chosen course or study
 * activity to /onboarding, and that page's "Skip for now" only links back to
 * the dashboard — so a brand-new student who joined a class could never reach
 * the dashboard or the "Diagnostic 1 assigned" banner. Found by the browser
 * walkthrough of the live MCAT course loop.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockAuth = vi.fn()
const mockLearningPath = vi.fn()
const mockProgressCount = vi.fn()
const mockMemberCount = vi.fn()

vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    learningPath: { findUnique: (...a: unknown[]) => mockLearningPath(...a) },
    topicProgress: { count: (...a: unknown[]) => mockProgressCount(...a) },
    classroomMember: { count: (...a: unknown[]) => mockMemberCount(...a) },
  },
}))

import { GET } from '@/app/api/onboarding/route'

describe('GET /api/onboarding — hasCompletedOnboarding', () => {
  beforeEach(() => {
    mockAuth.mockResolvedValue({ user: { id: 'u1' } })
    mockLearningPath.mockResolvedValue({ currentTopic: null, topicOrder: null })
    mockProgressCount.mockResolvedValue(0)
    mockMemberCount.mockResolvedValue(0)
  })

  it('is false for a brand-new account with no class', async () => {
    const body = await (await GET()).json()
    expect(body.hasCompletedOnboarding).toBe(false)
  })

  it('is true once the student is an active member of a class', async () => {
    mockMemberCount.mockResolvedValue(1)
    const body = await (await GET()).json()
    expect(body.hasCompletedOnboarding).toBe(true)
    expect(mockMemberCount.mock.calls[0][0]).toMatchObject({ where: { userId: 'u1', isActive: true } })
  })

  it('still honours a chosen course or prior study', async () => {
    mockLearningPath.mockResolvedValue({ currentTopic: 'limits-intro', topicOrder: '["a"]' })
    expect((await (await GET()).json()).hasCompletedOnboarding).toBe(true)
    mockLearningPath.mockResolvedValue({ currentTopic: null, topicOrder: null })
    mockProgressCount.mockResolvedValue(3)
    expect((await (await GET()).json()).hasCompletedOnboarding).toBe(true)
  })
})
