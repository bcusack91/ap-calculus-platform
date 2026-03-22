import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Organic Chemistry Score Predictor | Study Mondo',
  description: 'Get a projected Organic Chemistry score based on your quiz performance and topic mastery.',
  alternates: { canonical: 'https://www.studymondo.com/ochem-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
