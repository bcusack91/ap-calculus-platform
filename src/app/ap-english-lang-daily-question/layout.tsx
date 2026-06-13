import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP English Language Daily Question | Study Mondo',
  description:
    'A new AP English Language practice question every day on rhetoric, argument, and grammar, each with a full explanation to sharpen your reading and writing skills.',
  alternates: { canonical: 'https://www.studymondo.com/ap-english-lang-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
