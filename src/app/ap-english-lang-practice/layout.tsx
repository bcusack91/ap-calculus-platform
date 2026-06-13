import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP English Language Practice Test | Study Mondo',
  description: 'Take a free AP English Language practice test with multiple-choice reading and writing questions on rhetoric and analysis, scored instantly with answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-english-lang-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
