import { Metadata } from 'next'
import PricingPage from './PricingPageClient'

export const metadata: Metadata = {
  title: 'Pricing — Study Mondo',
  description: 'Compare free and premium plans on Study Mondo. Get ad-free studying, spaced repetition flashcards, progress tracking, and more.',
  openGraph: {
    title: 'Pricing — Study Mondo',
    description: 'Compare free and premium plans on Study Mondo.',
  },
}

export default function Page() {
  // Only offer the annual plan when an annual price actually exists in Stripe,
  // so the UI can never promise a cadence we don't sell (checkout would otherwise
  // fall back to the monthly price). Set STRIPE_PREMIUM_ANNUAL_PRICE_ID to enable.
  return <PricingPage annualEnabled={!!process.env.STRIPE_PREMIUM_ANNUAL_PRICE_ID} />
}
