import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP World History Score Predictor | Study Mondo',
  description:
    'Predict your AP World History score from your practice results. Convert MCQ, SAQ, DBQ, and LEQ performance across all periods into a projected 1-5 exam score fast.',
  alternates: { canonical: 'https://www.studymondo.com/ap-world-history-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
