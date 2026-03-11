import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACT Score Predictor | Study Mondo',
  description: 'Get a projected ACT composite score based on your quiz performance, topic mastery, and practice test results.',
  alternates: { canonical: 'https://www.studymondo.com/act-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
