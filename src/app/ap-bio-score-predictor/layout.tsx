import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Biology Score Predictor | Study Mondo',
  description: 'Get a projected AP Biology exam score based on your quiz performance and topic mastery.',
  alternates: { canonical: 'https://www.studymondo.com/ap-bio-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
