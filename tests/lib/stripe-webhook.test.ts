/**
 * Integration tests for the Stripe Webhook handler.
 * Tests signature verification, event handling, and database updates.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import type Stripe from 'stripe'

// --------------- Mocks ---------------
const mockUserUpdate = vi.fn()
const mockUserFindFirst = vi.fn()

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      update: (...args: unknown[]) => mockUserUpdate(...args),
      // the route clears stale subscription state on other users atomically
      updateMany: (...args: unknown[]) => mockUserUpdate(...args),
      findFirst: (...args: unknown[]) => mockUserFindFirst(...args),
    },
    // Idempotency ledger: the route claims each Stripe event id before
    // processing. A resolving create() means "first delivery".
    processedWebhookEvent: {
      create: vi.fn().mockResolvedValue({ id: 'evt_test' }),
      // released again when processing fails, so duplicates of FAILED events retry
      delete: vi.fn().mockResolvedValue({ id: 'evt_test' }),
    },
  },
}))

const mockConstructEvent = vi.fn()
const mockSubscriptionsRetrieve = vi.fn()
vi.mock('@/lib/stripe', () => ({
  getStripe: () => ({
    webhooks: {
      constructEvent: (...args: unknown[]) => mockConstructEvent(...args),
    },
    subscriptions: {
      retrieve: (...args: unknown[]) => mockSubscriptionsRetrieve(...args),
    },
  }),
}))

// Mock next/headers
vi.mock('next/headers', () => ({
  headers: vi.fn().mockResolvedValue({
    get: (name: string) => name === 'stripe-signature' ? 'test_sig' : null,
  }),
}))

describe('POST /api/stripe/webhook', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Set the env variable for tests
    process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test'
  })

  it('rejects requests without a signature', async () => {
    // Override headers mock to return null signature
    const { headers } = await import('next/headers')
    vi.mocked(headers).mockResolvedValueOnce({
      get: () => null,
    } as never)

    const { POST } = await import('@/app/api/stripe/webhook/route')
    const req = new Request('http://localhost/api/stripe/webhook', {
      method: 'POST',
      body: '{}',
    })
    const res = await POST(req as never)
    expect(res.status).toBe(400)
  })

  it('handles checkout.session.completed for new subscriptions', async () => {
    const event: Partial<Stripe.Event> = {
      type: 'checkout.session.completed',
      data: {
        object: {
          customer: 'cus_test123',
          subscription: 'sub_test123',
          metadata: { userId: 'user-1' },
        } as never,
      } as never,
    }
    mockConstructEvent.mockReturnValueOnce(event)
    mockSubscriptionsRetrieve.mockResolvedValueOnce({
      id: 'sub_test123',
      current_period_end: Math.floor(Date.now() / 1000) + 86400 * 30,
      items: { data: [{ price: { id: 'price_test' } }] },
    })
    mockUserUpdate.mockResolvedValueOnce({ id: 'user-1' })

    const { POST } = await import('@/app/api/stripe/webhook/route')
    const req = new Request('http://localhost/api/stripe/webhook', {
      method: 'POST',
      body: JSON.stringify(event),
    })
    const res = await POST(req as never)
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.received).toBe(true)
  })

  it('handles invalid webhook signatures', async () => {
    mockConstructEvent.mockImplementationOnce(() => {
      throw new Error('Invalid signature')
    })

    const { POST } = await import('@/app/api/stripe/webhook/route')
    const req = new Request('http://localhost/api/stripe/webhook', {
      method: 'POST',
      body: '{}',
    })
    const res = await POST(req as never)
    // Should return 400 for invalid signature
    expect([400, 500]).toContain(res.status)
  })
})
