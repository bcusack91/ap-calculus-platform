import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP World History Free-Response Questions (FRQ) Practice | Study Mondo',
  description: 'Practice free AP World History: Modern FRQs, including short-answer, DBQ, and long essay questions, scored on the College Board rubric with full answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-world-history-frq' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
