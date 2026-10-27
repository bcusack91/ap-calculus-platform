import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { getStripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/stripe/checkout/session?session_id=cs_...
 *
 * Confirms, for the /premium/success page's analytics `purchase` event, that a
 * Checkout session really completed and belongs to the signed-in user, and
 * returns only what GA4 needs: the session id (transaction_id), the amount and
 * currency, and the billing cadence. A success URL typed or bookmarked without
 * a completed checkout of this user's gets a 404, so nothing is reported.
 */
export async function GET(request: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: 'Stripe is not configured' }, { status: 503 })
    }
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const sessionId = new URL(request.url).searchParams.get('session_id') ?? ''
    if (!/^cs_[A-Za-z0-9_]{8,250}$/.test(sessionId)) {
      return NextResponse.json({ error: 'Invalid session id' }, { status: 400 })
    }

    const checkout = await getStripe().checkout.sessions.retrieve(sessionId, { expand: ['line_items.data.price'] })
    const user = await prisma.user.findUnique({ where: { id: session.user.id }, select: { stripeCustomerId: true } })
    const customerId = typeof checkout.customer === 'string' ? checkout.customer : checkout.customer?.id
    const ownsSession =
      checkout.metadata?.userId === session.user.id || (!!customerId && customerId === user?.stripeCustomerId)
    const completed = checkout.status === 'complete' && (checkout.payment_status === 'paid' || checkout.payment_status === 'no_payment_required')
    if (!ownsSession || !completed) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    const interval = checkout.line_items?.data?.[0]?.price?.recurring?.interval
    return NextResponse.json({
      transactionId: checkout.id,
      value: (checkout.amount_total ?? 0) / 100,
      currency: (checkout.currency ?? 'usd').toUpperCase(),
      plan: interval === 'year' ? 'annual' : interval === 'month' ? 'monthly' : 'premium',
    })
  } catch (error) {
    console.error('Checkout session lookup error:', error)
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
}
