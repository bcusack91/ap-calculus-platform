import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Statistics Score Predictor | Study Mondo',
  description: 'Get a projected AP Statistics exam score based on your quiz performance and topic mastery.',
  alternates: { canonical: 'https://www.studymondo.com/ap-stats-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
