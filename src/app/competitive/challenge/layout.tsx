import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "You've been challenged! — Study Mondo",
  description: 'A friend wants to face you head-to-head on Study Mondo. Accept the challenge and beat their score.',
  openGraph: {
    title: "You've been challenged on Study Mondo!",
    description: 'A friend wants to face you head-to-head. Accept the challenge and prove you can beat them.',
    type: 'website',
    siteName: 'Study Mondo',
  },
  twitter: {
    card: 'summary_large_image',
    title: "You've been challenged on Study Mondo!",
    description: 'A friend wants to face you head-to-head. Accept the challenge and prove you can beat them.',
  },
}

export default function CompetitiveChallengeLayout({ children }: { children: React.ReactNode }) {
  return children
}
