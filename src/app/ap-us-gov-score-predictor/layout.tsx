import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP US Government Score Predictor | Study Mondo',
  description:
    'Predict your AP US Government and Politics score from practice performance. Turn your MCQ and free-response accuracy into a projected 1-5 exam score in seconds.',
  alternates: { canonical: 'https://www.studymondo.com/ap-us-gov-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
