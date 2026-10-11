import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My flashcards | Study Mondo',
  description: 'Flashcards you made yourself, reviewed with smart spaced repetition alongside the site’s cards.',
  robots: { index: false, follow: false },
}

export default function MyFlashcardsLayout({ children }: { children: React.ReactNode }) {
  return children
}
