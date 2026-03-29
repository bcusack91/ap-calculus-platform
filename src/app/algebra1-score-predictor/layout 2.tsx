import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algebra 1 Score Predictor | Study Mondo',
  description: 'Get a projected Algebra 1 readiness score based on your quiz performance and topic mastery.',
  alternates: { canonical: 'https://www.studymondo.com/algebra1-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
