import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Precalculus Score Predictor | Study Mondo',
  description: 'Get a projected AP Precalculus score based on your quiz performance and topic mastery.',
  alternates: { canonical: 'https://www.studymondo.com/ap-precalculus-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
