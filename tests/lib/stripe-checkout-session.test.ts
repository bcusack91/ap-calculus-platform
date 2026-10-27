/**
 * GET /api/stripe/checkout/session — the check behind the /premium/success
 * analytics `purchase` event: only a completed Checkout session that belongs
 * to the signed-in user is reported, with the amount Stripe charged.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockAuth = vi.fn()
const mockRetrieve = vi.fn()
const mockFindUnique = vi.fn()

vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/stripe', () => ({ getStripe: () => ({ checkout: { sessions: { retrieve: (...a: unknown[]) => mockRetrieve(...a) } } }) }))
vi.mock('@/lib/prisma', () => ({ prisma: { user: { findUnique: (...a: unknown[]) => mockFindUnique(...a) } } }))

import { GET } from '@/app/api/stripe/checkout/session/route'

const SID = 'cs_test_a1B2c3D4e5F6'
const req = (sid = SID) => new Request(`http://localhost/api/stripe/checkout/session?session_id=${sid}`)
const checkout = (over: Record<string, unknown> = {}) => ({
  id: SID,
  status: 'complete',
  payment_status: 'paid',
  amount_total: 999,
  currency: 'usd',
  customer: 'cus_1',
  metadata: { userId: 'u1' },
  line_items: { data: [{ price: { recurring: { interval: 'month' } } }] },
  ...over,
})

beforeEach(() => {
  process.env.STRIPE_SECRET_KEY = 'sk_test_x'
  mockAuth.mockReset().mockResolvedValue({ user: { id: 'u1' } })
  mockRetrieve.mockReset().mockResolvedValue(checkout())
  mockFindUnique.mockReset().mockResolvedValue({ stripeCustomerId: 'cus_1' })
})

describe('GET /api/stripe/checkout/session', () => {
  it("returns the transaction for the user's completed session", async () => {
    const res = await GET(req())
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ transactionId: SID, value: 9.99, currency: 'USD', plan: 'monthly' })
  })

  it('maps an annual price to plan "annual"', async () => {
    mockRetrieve.mockResolvedValue(checkout({ amount_total: 7999, line_items: { data: [{ price: { recurring: { interval: 'year' } } }] } }))
    expect(await (await GET(req())).json()).toMatchObject({ value: 79.99, plan: 'annual' })
  })

  it('404s an unfinished or unpaid session', async () => {
    mockRetrieve.mockResolvedValue(checkout({ status: 'open' }))
    expect((await GET(req())).status).toBe(404)
    mockRetrieve.mockResolvedValue(checkout({ payment_status: 'unpaid' }))
    expect((await GET(req())).status).toBe(404)
  })

  it("404s another user's session", async () => {
    mockRetrieve.mockResolvedValue(checkout({ metadata: { userId: 'someone-else' }, customer: 'cus_other' }))
    expect((await GET(req())).status).toBe(404)
  })

  it('rejects signed-out callers and malformed ids before calling Stripe', async () => {
    mockAuth.mockResolvedValue(null)
    expect((await GET(req())).status).toBe(401)
    mockAuth.mockResolvedValue({ user: { id: 'u1' } })
    expect((await GET(req('not-a-session'))).status).toBe(400)
    expect(mockRetrieve).not.toHaveBeenCalled()
  })

  it('404s when Stripe cannot find the session', async () => {
    mockRetrieve.mockRejectedValue(new Error('No such checkout.session'))
    expect((await GET(req())).status).toBe(404)
  })
})
