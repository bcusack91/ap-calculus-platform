import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Geometry Score Predictor | Study Mondo',
  description: 'Get a projected Geometry readiness score based on your quiz performance and topic mastery.',
  alternates: { canonical: 'https://www.studymondo.com/geometry-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
