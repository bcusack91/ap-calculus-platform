import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Organic Chemistry 1 Score Predictor (AP-equivalent 1–5) | Study Mondo',
  description: 'Predict your Organic Chemistry 1 performance on an AP-equivalent 1–5 scale based on your quiz performance and topic mastery.',
  alternates: { canonical: 'https://www.studymondo.com/ochem1-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
