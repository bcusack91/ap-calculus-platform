import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pre-Algebra Score Predictor | Study Mondo',
  description: 'Get a projected Pre-Algebra readiness score based on your quiz performance and topic mastery.',
  alternates: { canonical: 'https://www.studymondo.com/prealgebra-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
