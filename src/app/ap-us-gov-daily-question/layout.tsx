import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP US Government Daily Question | Study Mondo',
  description:
    'A new AP US Government practice question every day on the Constitution, branches, and civil liberties, each with a clear explanation to sharpen your exam prep.',
  alternates: { canonical: 'https://www.studymondo.com/ap-us-gov-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
