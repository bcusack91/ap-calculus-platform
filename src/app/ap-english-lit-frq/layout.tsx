import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP English Literature Free-Response Questions (FRQ) Practice | Study Mondo',
  description: 'Practice free AP English Literature FRQs: poetry analysis, prose fiction, and literary argument essays. Scored on the exam rubric with model answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-english-lit-frq' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
