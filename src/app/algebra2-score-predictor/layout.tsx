import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algebra 2 Score Predictor | Study Mondo',
  description: 'Get a projected Algebra 2 readiness score based on your quiz performance and topic mastery.',
  alternates: { canonical: 'https://www.studymondo.com/algebra2-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
