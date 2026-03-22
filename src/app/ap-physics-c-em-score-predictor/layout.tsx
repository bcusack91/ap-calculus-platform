import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Physics C: E&M Score Predictor | Study Mondo',
  description: 'Get a projected AP Physics C: Electricity and Magnetism exam score based on your quiz performance and topic mastery.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics-c-em-score-predictor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
