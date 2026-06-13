import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Environmental Science Score Predictor | Study Mondo',
  description:
    'Predict your AP Environmental Science score from practice performance. Turn your MCQ and free-response accuracy across all APES units into a projected 1-5 score.',
  alternates: { canonical: 'https://www.studymondo.com/ap-enviro-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
