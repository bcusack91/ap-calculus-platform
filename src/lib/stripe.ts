import Stripe from 'stripe'

let _stripe: Stripe | null = null

export function getStripe(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY is not set')
    }
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      // @ts-expect-error Stripe SDK version may not match installed types
      apiVersion: '2025-09-30.clover',
      typescript: true,
    })
  }
  return _stripe
}

export const PLANS = {
  FREE: {
    name: 'Free',
    price: 0,
    features: [
      'Access to text explanations',
      'Example problems',
      'Basic flashcards (no progress tracking)',
      'Ad-supported experience'
    ]
  },
  PREMIUM: {
    name: 'Premium',
    price: 9.99,
    priceId: process.env.STRIPE_PREMIUM_PRICE_ID,
    features: [
      'Everything in Free',
      'Video explanations for all topics',
      'Anki-style spaced repetition flashcards',
      'Progress tracking & analytics',
      'Additional practice quizzes',
      'Adaptive learning modules',
      'Diagnostic tests',
      'Ad-free experience',
      'Daily streak tracking',
      'Achievement system'
    ]
  }
}
