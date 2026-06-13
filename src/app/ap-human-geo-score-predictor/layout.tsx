import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Human Geography Score Predictor | Study Mondo',
  description:
    'Predict your AP Human Geography score from your practice results. Convert multiple-choice and free-response performance into a projected 1-5 exam score instantly.',
  alternates: { canonical: 'https://www.studymondo.com/ap-human-geo-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
