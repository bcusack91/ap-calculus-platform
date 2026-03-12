import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SAT Score Predictor | Study Mondo',
  description:
    'Predict your SAT score based on your study progress, quiz performance, and practice test history.',
  alternates: { canonical: 'https://www.studymondo.com/sat-score-predictor' },
}

export default function SATScorePredictorLayout({ children }: { children: React.ReactNode }) {
  return children
}
