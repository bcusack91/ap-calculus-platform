import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Human Geography Daily Question | Study Mondo',
  description:
    'A fresh AP Human Geography practice question every day on population, culture, and urbanization, each with a full explanation to build a steady daily study streak.',
  alternates: { canonical: 'https://www.studymondo.com/ap-human-geo-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
