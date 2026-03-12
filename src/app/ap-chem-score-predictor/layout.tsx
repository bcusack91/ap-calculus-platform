import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Chemistry Score Predictor | Study Mondo',
  description: 'Get a projected AP Chemistry exam score based on your quiz performance and topic mastery.',
  alternates: { canonical: 'https://www.studymondo.com/ap-chem-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
