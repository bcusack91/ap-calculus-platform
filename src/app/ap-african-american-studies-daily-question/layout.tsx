import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP African American Studies Daily Question | Study Mondo',
  description:
    'A fresh AP African American Studies practice question every day, drawn from real exam topics with full explanations to build a consistent daily study streak.',
  alternates: { canonical: 'https://www.studymondo.com/ap-african-american-studies-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
