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
  return <PricingPage />
}
