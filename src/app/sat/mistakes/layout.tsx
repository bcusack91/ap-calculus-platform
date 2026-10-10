import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your SAT mistake log | Study Mondo',
  description: 'Every SAT question you missed or flagged, until you answer it correctly twice. Re-quiz them in one click.',
  robots: { index: false, follow: false },
}

export default function SATMistakesLayout({ children }: { children: React.ReactNode }) {
  return children
}
