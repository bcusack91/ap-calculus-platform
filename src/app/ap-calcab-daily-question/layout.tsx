import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Calculus AB Daily Question | Study Mondo',
  description:
    'Practice a new AP Calculus AB question every day. Free daily AP Calc AB prep covering limits, derivatives, integrals, and applications.',
  alternates: { canonical: 'https://www.studymondo.com/ap-calcab-daily-question' },
}

export default function APCalcABDailyQuestionLayout({ children }: { children: React.ReactNode }) {
  return children
}
