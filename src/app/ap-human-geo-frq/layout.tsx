import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Human Geography Free-Response Questions (FRQ) Practice | Study Mondo',
  description: 'Practice free AP Human Geography FRQs on population, migration, culture, and urban models. Scored on the exam rubric with full answer explanations and feedback.',
  alternates: { canonical: 'https://www.studymondo.com/ap-human-geo-frq' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
