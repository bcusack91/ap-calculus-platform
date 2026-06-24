import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { getStripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    // Check if Stripe is configured
    if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_PREMIUM_PRICE_ID) {
      return NextResponse.json(
        { error: 'Stripe is not configured' },
        { status: 503 }
      )
    }

    // Honor the billing cadence the user selected. Annual is only charged when an
    // annual price actually exists in Stripe (STRIPE_PREMIUM_ANNUAL_PRICE_ID);
    // otherwise fall back to monthly so we never charge the wrong amount.
    let billing: string | undefined
    try {
      const body = await request.json()
      billing = typeof body?.billing === 'string' ? body.billing : undefined
    } catch {
      // no body / not JSON — default to monthly
    }
    const annualPriceId = process.env.STRIPE_PREMIUM_ANNUAL_PRICE_ID
    const priceId = billing === 'annual' && annualPriceId ? annualPriceId : process.env.STRIPE_PREMIUM_PRICE_ID

    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Create or retrieve Stripe customer
    let stripeCustomerId = user.stripeCustomerId

    if (!stripeCustomerId) {
      if (!user.email) {
        return NextResponse.json(
          { error: 'A verified email address is required to subscribe' },
          { status: 400 }
        )
      }

      const customer = await getStripe().customers.create({
        email: user.email,
        name: user.name || undefined,
        metadata: {
          userId: user.id,
        },
      })
      
      stripeCustomerId = customer.id
      
      await prisma.user.update({
        where: { id: user.id },
        data: { stripeCustomerId },
      })
    }

    // Base URL for the post-checkout redirects. Prefer the configured app URL,
    // but fall back to the request origin so a missing NEXT_PUBLIC_APP_URL can't
    // produce a broken "undefined/premium/success" redirect.
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || new URL(request.url).origin

    // Create checkout session
    const checkoutSession = await getStripe().checkout.sessions.create({
      customer: stripeCustomerId,
      mode: 'subscription',
      // Omit payment_method_types so Stripe Checkout presents every method
      // enabled in the dashboard (incl. Apple Pay / Google Pay wallets), keeping
      // the pricing FAQ truthful.
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/premium/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/premium`,
      metadata: {
        userId: user.id,
      },
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error('Checkout session error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
