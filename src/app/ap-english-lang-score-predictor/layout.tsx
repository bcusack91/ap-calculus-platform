import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP English Language Score Predictor | Study Mondo',
  description:
    'Predict your AP English Language score from your practice work. Translate multiple-choice and rhetorical essay performance into a projected 1-5 exam score fast.',
  alternates: { canonical: 'https://www.studymondo.com/ap-english-lang-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
