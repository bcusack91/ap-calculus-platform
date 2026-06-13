import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Psychology Free-Response Questions (FRQ) Practice | Study Mondo',
  description: 'Practice free AP Psychology FRQs, including the article-analysis and evidence-based questions on the new exam, scored on the rubric with detailed answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-psych-frq' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
