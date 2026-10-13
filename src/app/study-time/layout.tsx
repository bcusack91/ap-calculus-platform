import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Study Time | Study Mondo',
  description: 'How much time you have spent studying on Study Mondo: lessons, quizzes, flashcards and tests.',
  robots: { index: false, follow: false },
}

export default function StudyTimeLayout({ children }: { children: React.ReactNode }) {
  return children
}
