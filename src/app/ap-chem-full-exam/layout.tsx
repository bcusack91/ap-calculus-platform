import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Chemistry Full Practice Exam | Study Mondo',
  description: 'Take a free full-length AP Chemistry practice exam with multiple-choice and free-response questions. Get rubric-based scoring and step-by-step answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-chem-full-exam' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
