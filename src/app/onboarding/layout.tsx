import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Welcome to Study Mondo | Onboarding',
  description: 'Set up your Study Mondo profile and choose your courses to get started.',
  robots: { index: false, follow: false },
}

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return children
}
