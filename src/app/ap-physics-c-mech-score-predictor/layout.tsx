import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Physics C: Mechanics Score Predictor | Study Mondo',
  description: 'Get a projected AP Physics C: Mechanics exam score based on your quiz performance and topic mastery.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics-c-mech-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
