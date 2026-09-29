// @vitest-environment jsdom
/**
 * A student who has given their birth year is never asked again.
 *
 * Last week's class test: students entered a birth year at signup, then were
 * asked again on entering Competitive mode (a full page load) and once more
 * later. The gate decided from the session token's copy of birthYear, and
 * that copy can lag the database: the cookie is only rewritten by
 * /api/auth/session, which the gate fired and forgot — a throttled (60/min
 * general API budget) or overtaken call left the stale null in place, and a
 * null token within the 5-minute refresh window was never re-read. Three
 * guards: the gate asks the row before it asks the student, a token with no
 * birth year is re-read sooner, and a saved year dismisses the gate even if
 * the token refresh fails.
 */
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { render, screen, cleanup, waitFor, fireEvent } from '@testing-library/react'
import { shouldRefreshFromDb, REFRESH_AFTER_MS, NULL_RECHECK_MS } from '@/lib/auth-token-refresh'

const mockUseSession = vi.fn()
vi.mock('next-auth/react', () => ({ useSession: () => mockUseSession() }))

const mockAuth = vi.fn()
const mockFindUnique = vi.fn()
const mockUpdate = vi.fn()
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findUnique: (...a: unknown[]) => mockFindUnique(...a),
      update: (...a: unknown[]) => mockUpdate(...a),
    },
  },
}))

import BirthYearGate, { shouldShowBirthYearGate } from '@/components/BirthYearGate'
import { GET } from '@/app/api/user/birth-year/route'

const DIALOG = /confirm your birth year/i

describe('shouldRefreshFromDb', () => {
  const now = 10_000_000
  it('always refreshes on an explicit update()', () => {
    expect(shouldRefreshFromDb({ lastRefreshed: now, birthYear: 2010 }, 'update', now)).toBe(true)
  })
  it('refreshes a stale token and leaves a fresh complete one alone', () => {
    expect(shouldRefreshFromDb({ lastRefreshed: now - REFRESH_AFTER_MS - 1, birthYear: 2010 }, undefined, now)).toBe(true)
    expect(shouldRefreshFromDb({ lastRefreshed: now - 1000, birthYear: 2010 }, undefined, now)).toBe(false)
  })
  it('re-reads a token with no birth year after the short window, not on every call', () => {
    expect(shouldRefreshFromDb({ lastRefreshed: now - NULL_RECHECK_MS - 1, birthYear: null }, undefined, now)).toBe(true)
    expect(shouldRefreshFromDb({ lastRefreshed: now - NULL_RECHECK_MS - 1 }, undefined, now)).toBe(true)
    expect(shouldRefreshFromDb({ lastRefreshed: now - 1000, birthYear: null }, undefined, now)).toBe(false)
  })
  it('treats a token that was never stamped as stale', () => {
    expect(shouldRefreshFromDb({ birthYear: 2010 }, undefined, now)).toBe(true)
  })
})

describe('shouldShowBirthYearGate', () => {
  it('shows only for a signed-in user whose row has no birth year', () => {
    const base = { status: 'authenticated' as const, tokenBirthYear: null, saved: false }
    expect(shouldShowBirthYearGate({ ...base, dbCheck: 'missing' })).toBe(true)
    expect(shouldShowBirthYearGate({ ...base, dbCheck: 'known' })).toBe(false)
    expect(shouldShowBirthYearGate({ ...base, dbCheck: 'pending' })).toBe(false)
    expect(shouldShowBirthYearGate({ ...base, dbCheck: 'missing', tokenBirthYear: 2010 })).toBe(false)
    expect(shouldShowBirthYearGate({ ...base, dbCheck: 'missing', saved: true })).toBe(false)
    expect(shouldShowBirthYearGate({ ...base, dbCheck: 'missing', status: 'loading' })).toBe(false)
    expect(shouldShowBirthYearGate({ ...base, dbCheck: 'missing', status: 'unauthenticated' })).toBe(false)
  })
})

describe('GET /api/user/birth-year', () => {
  beforeEach(() => {
    mockAuth.mockReset()
    mockFindUnique.mockReset()
  })
  it('returns the stored year for the signed-in user, uncached', async () => {
    mockAuth.mockResolvedValue({ user: { id: 'u1' } })
    mockFindUnique.mockResolvedValue({ birthYear: 2010 })
    const res = await GET()
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ birthYear: 2010 })
    expect(res.headers.get('cache-control')).toContain('no-store')
    expect(mockFindUnique).toHaveBeenCalledWith({ where: { id: 'u1' }, select: { birthYear: true } })
  })
  it('returns null when the row has none, and 401 signed out', async () => {
    mockAuth.mockResolvedValue({ user: { id: 'u1' } })
    mockFindUnique.mockResolvedValue({ birthYear: null })
    expect(await (await GET()).json()).toEqual({ birthYear: null })
    mockAuth.mockResolvedValue(null)
    expect((await GET()).status).toBe(401)
  })
})

describe('BirthYearGate', () => {
  const update = vi.fn()
  const session = (birthYear: number | null) => ({
    status: 'authenticated',
    update,
    data: { user: { id: 'u1', birthYear } },
  })
  const fetchWith = (handlers: { get?: () => Promise<Response>; post?: () => Promise<Response> }) => {
    const spy = vi.fn(async (_url: string, init?: RequestInit) =>
      init?.method === 'POST' ? handlers.post!() : handlers.get!(),
    )
    vi.stubGlobal('fetch', spy)
    return spy
  }
  const json = (status: number, body: unknown) => async () =>
    ({ ok: status < 400, status, json: async () => body }) as unknown as Response

  beforeEach(() => {
    update.mockReset()
    update.mockResolvedValue(null)
  })
  afterEach(() => {
    cleanup()
    vi.unstubAllGlobals()
  })

  it('stays hidden and refreshes the token when the row already has the year', async () => {
    mockUseSession.mockReturnValue(session(null))
    const spy = fetchWith({ get: json(200, { birthYear: 2010 }) })
    render(<BirthYearGate />)
    await waitFor(() => expect(update).toHaveBeenCalled())
    expect(screen.queryByRole('dialog', { name: DIALOG })).toBeNull()
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('asks when the row has no birth year', async () => {
    mockUseSession.mockReturnValue(session(null))
    fetchWith({ get: json(200, { birthYear: null }) })
    render(<BirthYearGate />)
    await screen.findByRole('dialog', { name: DIALOG })
    expect(update).not.toHaveBeenCalled()
  })

  it('does not ask on a failed check, so a throttled request never re-prompts', async () => {
    mockUseSession.mockReturnValue(session(null))
    const spy = fetchWith({ get: json(429, { error: 'Too many requests' }) })
    render(<BirthYearGate />)
    await waitFor(() => expect(spy).toHaveBeenCalled())
    expect(screen.queryByRole('dialog', { name: DIALOG })).toBeNull()
  })

  it('never fetches when the token already carries a year, or signed out', () => {
    mockUseSession.mockReturnValue(session(2010))
    const spy = fetchWith({ get: json(200, { birthYear: 2010 }) })
    render(<BirthYearGate />)
    expect(spy).not.toHaveBeenCalled()
    cleanup()
    mockUseSession.mockReturnValue({ status: 'unauthenticated', update, data: null })
    render(<BirthYearGate />)
    expect(spy).not.toHaveBeenCalled()
    expect(screen.queryByRole('dialog', { name: DIALOG })).toBeNull()
  })

  it('dismisses after a save even when the token refresh fails', async () => {
    mockUseSession.mockReturnValue(session(null))
    update.mockRejectedValue(new Error('429'))
    fetchWith({ get: json(200, { birthYear: null }), post: json(200, { success: true, birthYear: 2010 }) })
    render(<BirthYearGate />)
    await screen.findByRole('dialog', { name: DIALOG })
    fireEvent.change(screen.getByLabelText('Birth Year'), { target: { value: '2010' } })
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }))
    await waitFor(() => expect(screen.queryByRole('dialog', { name: DIALOG })).toBeNull())
    expect(update).toHaveBeenCalled()
  })
})
