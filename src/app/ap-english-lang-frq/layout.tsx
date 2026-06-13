import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP English Language Free-Response Questions (FRQ) Practice | Study Mondo',
  description: 'Practice free AP English Language FRQs: synthesis, rhetorical analysis, and argument essays. Get rubric-based scoring and sample answer explanations for the exam.',
  alternates: { canonical: 'https://www.studymondo.com/ap-english-lang-frq' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
