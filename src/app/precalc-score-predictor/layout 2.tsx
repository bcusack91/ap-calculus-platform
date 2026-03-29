import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pre-Calculus Score Predictor | Study Mondo',
  description: 'Get a projected Pre-Calculus readiness score based on your quiz performance and topic mastery.',
  alternates: { canonical: 'https://www.studymondo.com/precalc-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
