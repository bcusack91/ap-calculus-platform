import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Computer Science Principles Score Predictor | Study Mondo',
  description:
    'Predict your AP Computer Science Principles score from practice performance. Combine your MCQ accuracy and Create task progress into a projected 1-5 exam score.',
  alternates: { canonical: 'https://www.studymondo.com/ap-csp-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
