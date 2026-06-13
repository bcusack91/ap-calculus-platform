import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Statistics Free-Response Questions (FRQ) Practice | Study Mondo',
  description: 'Practice free AP Statistics FRQs on probability, sampling, inference, and regression, plus the investigative task, scored on the rubric with full answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-stats-frq' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
