import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP English Literature Score Predictor | Study Mondo',
  description:
    'Predict your AP English Literature score from your practice performance. Convert MCQ accuracy and poetry and prose essay scores into a projected 1-5 exam score.',
  alternates: { canonical: 'https://www.studymondo.com/ap-english-lit-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
