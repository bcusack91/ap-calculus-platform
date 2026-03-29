import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grade 8 Math Score Predictor | Study Mondo',
  description: 'Get a projected Grade 8 Math readiness score based on your quiz performance and topic mastery.',
  alternates: { canonical: 'https://www.studymondo.com/grade8-math-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
