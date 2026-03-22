import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MCAT Score Predictor | Study Mondo',
  description: 'Get a projected MCAT score based on your quiz performance and topic mastery.',
  alternates: { canonical: 'https://www.studymondo.com/mcat-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
