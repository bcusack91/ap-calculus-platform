import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { getStripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'
import Stripe from 'stripe'

/**
 * Current period end. As of the pinned API version (2025-09-30.clover) Stripe
 * moved `current_period_end` off the Subscription and onto each subscription
 * ITEM, so reading it from the subscription yields undefined → `Invalid Date`.
 * Read it from the first item; return null if absent (don't persist a bad date).
 */
function subscriptionPeriodEnd(sub: Stripe.Subscription): Date | null {
  const item = sub.items?.data?.[0] as unknown as { current_period_end?: number } | undefined
  const ts = item?.current_period_end
  return typeof ts === 'number' && Number.isFinite(ts) ? new Date(ts * 1000) : null
}

/** Map a Stripe subscription status to our app role. */
function roleForStatus(status: Stripe.Subscription.Status): 'PREMIUM' | 'FREE' {
  return status === 'active' || status === 'trialing' ? 'PREMIUM' : 'FREE'
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = (await headers()).get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 })
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not configured')
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 })
  }

  let event: Stripe.Event

  try {
    event = getStripe().webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // ── Idempotency guard ──
  // Stripe retries deliveries (network blips, non-2xx responses), so the same
  // event can arrive more than once. Claim the event id atomically: if the
  // INSERT succeeds we're the first to see it; if it hits the unique PK, this
  // is a duplicate and we acknowledge without re-processing — preventing
  // double upgrades/downgrades.
  try {
    await prisma.processedWebhookEvent.create({
      data: { id: event.id, type: event.type },
    })
  } catch (err) {
    // P2002 = unique constraint violation → already processed this event.
    if (
      typeof err === 'object' &&
      err !== null &&
      'code' in err &&
      (err as { code?: string }).code === 'P2002'
    ) {
      return NextResponse.json({ received: true, duplicate: true })
    }
    // Any other DB error: don't acknowledge, let Stripe retry later.
    console.error('Webhook idempotency check failed:', err)
    return NextResponse.json({ error: 'Idempotency check failed' }, { status: 500 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const userId = session.metadata?.userId

        if (userId && session.subscription) {
          const subscription = await getStripe().subscriptions.retrieve(
            session.subscription as string
          )

          await prisma.user.update({
            where: { id: userId },
            data: {
              role: 'PREMIUM',
              stripeSubscriptionId: subscription.id,
              stripePriceId: subscription.items.data[0].price.id,
              stripeCurrentPeriodEnd: subscriptionPeriodEnd(subscription),
            },
          })
        }
        break
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice
        const subscriptionId = (invoice as unknown as { subscription: string }).subscription as string

        if (subscriptionId) {
          const subscription = await getStripe().subscriptions.retrieve(subscriptionId)
          
          await prisma.user.updateMany({
            where: { stripeSubscriptionId: subscriptionId },
            data: {
              stripePriceId: subscription.items.data[0].price.id,
              stripeCurrentPeriodEnd: subscriptionPeriodEnd(subscription),
            },
          })
        }
        break
      }

      // Subscription state changes mid-lifecycle (renewals, plan changes, and —
      // crucially — payment failures that flip the status to past_due/unpaid/
      // canceled). Keep the app role in sync with the authoritative Stripe status.
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        await prisma.user.updateMany({
          where: { stripeSubscriptionId: subscription.id },
          data: {
            role: roleForStatus(subscription.status),
            stripePriceId: subscription.items.data[0]?.price.id ?? null,
            stripeCurrentPeriodEnd: subscriptionPeriodEnd(subscription),
          },
        })
        break
      }

      // A failed payment doesn't immediately cancel (Stripe retries through the
      // dunning window); the resulting status change arrives via
      // customer.subscription.updated above. Log for visibility.
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const subId = (invoice as unknown as { subscription?: string }).subscription
        console.warn(`Stripe invoice.payment_failed for subscription ${subId ?? 'unknown'}`)
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        
        await prisma.user.updateMany({
          where: { stripeSubscriptionId: subscription.id },
          data: {
            role: 'FREE',
            stripeSubscriptionId: null,
            stripePriceId: null,
            stripeCurrentPeriodEnd: null,
          },
        })
        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    // Release the idempotency claim so Stripe's retry can re-process this event
    // (we only want to suppress duplicates of *successfully* handled events).
    await prisma.processedWebhookEvent
      .delete({ where: { id: event.id } })
      .catch((delErr) => console.error('Failed to release webhook claim:', delErr))
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}
