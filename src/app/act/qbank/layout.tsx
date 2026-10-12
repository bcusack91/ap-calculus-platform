import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Build an ACT practice set | Study Mondo',
  description: 'Pick ACT sections, topics and difficulty, choose unused, incorrect or flagged questions, and practice timed or in tutor mode.',
  robots: { index: false, follow: false },
}

export default function ACTQbankLayout({ children }: { children: React.ReactNode }) {
  return children
}
