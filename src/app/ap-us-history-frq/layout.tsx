import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP US History Free-Response Questions (FRQ) Practice | Study Mondo',
  description: 'Practice free AP US History (APUSH) FRQs, including short-answer, document-based (DBQ), and long essay questions, scored on the rubric with detailed answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-us-history-frq' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
