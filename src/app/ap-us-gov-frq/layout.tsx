import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP US Government Free-Response Questions (FRQ) Practice | Study Mondo',
  description: 'Practice free AP US Government FRQs: concept application, quantitative analysis, SCOTUS comparison, and argument essays, scored on the rubric with answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-us-gov-frq' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
