import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MCAT Unit Test | Study Mondo',
  description: 'A 25-question test on the topics your last MCAT diagnostic recommended. Pass it to unlock your next diagnostic.',
  robots: { index: false, follow: false },
}

export default function McatUnitTestLayout({ children }: { children: React.ReactNode }) {
  return children
}
