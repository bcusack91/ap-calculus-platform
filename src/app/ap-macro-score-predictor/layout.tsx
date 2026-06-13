import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Macroeconomics Score Predictor | Study Mondo',
  description:
    'Predict your AP Macroeconomics score from practice performance. Turn your multiple-choice and free-response graphing accuracy into a projected 1-5 exam score fast.',
  alternates: { canonical: 'https://www.studymondo.com/ap-macro-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
