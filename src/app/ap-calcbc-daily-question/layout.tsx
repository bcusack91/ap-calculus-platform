import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Calculus BC Daily Question | Study Mondo',
  description:
    'Practice a new AP Calculus BC question every day. Free daily AP Calc BC prep covering series, parametrics, polar, and advanced integration.',
  alternates: { canonical: 'https://www.studymondo.com/ap-calcbc-daily-question' },
}

export default function APCalcBCDailyQuestionLayout({ children }: { children: React.ReactNode }) {
  return children
}
