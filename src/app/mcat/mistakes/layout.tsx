import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your MCAT mistake log | Study Mondo',
  description: 'Every MCAT question you missed or flagged, until you answer it correctly twice. Re-quiz them in one click.',
  robots: { index: false, follow: false },
}

export default function MCATMistakesLayout({ children }: { children: React.ReactNode }) {
  return children
}
