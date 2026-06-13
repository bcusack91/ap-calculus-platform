import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP US History Score Predictor | Study Mondo',
  description:
    'Predict your AP US History score from your practice performance. Convert MCQ, SAQ, DBQ, and LEQ results across all APUSH periods into a projected 1-5 exam score.',
  alternates: { canonical: 'https://www.studymondo.com/ap-us-history-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
