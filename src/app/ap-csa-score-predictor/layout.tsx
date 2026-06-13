import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Computer Science A Score Predictor | Study Mondo',
  description:
    'Estimate your AP Computer Science A score from your practice results. Turn multiple-choice and free-response Java performance into a projected 1-5 exam score.',
  alternates: { canonical: 'https://www.studymondo.com/ap-csa-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
