import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Precalculus Score Predictor | Study Mondo',
  description: 'Get a projected AP Precalculus exam score based on your quiz performance and topic mastery.',
  // Canonical points at /ap-precalculus-score-predictor: this abbreviated route
  // duplicates that page (the next.config.ts redirect collapses it there too).
  alternates: { canonical: 'https://www.studymondo.com/ap-precalculus-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
