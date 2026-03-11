import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Chemistry Daily Question | Study Mondo',
  description:
    'Practice a new AP Chemistry question every day. Free daily AP Chem prep covering reactions, equilibrium, thermodynamics, and more.',
  alternates: { canonical: 'https://www.studymondo.com/ap-chem-daily-question' },
}

export default function APChemDailyQuestionLayout({ children }: { children: React.ReactNode }) {
  return children
}
