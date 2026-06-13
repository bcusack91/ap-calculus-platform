import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Biology Free-Response Questions (FRQ) Practice | Study Mondo',
  description: 'Practice free AP Biology FRQs on experimental design, data analysis, genetics, and evolution. Get scored on the exam rubric with full answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-bio-frq' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
