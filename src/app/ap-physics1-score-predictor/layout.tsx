import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Physics 1 Score Predictor | Study Mondo',
  description: 'Get a projected AP Physics 1 exam score based on your quiz performance and topic mastery.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics1-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
