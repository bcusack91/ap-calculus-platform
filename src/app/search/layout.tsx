import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search | Study Mondo',
  description: 'Search across 24 courses and 700+ topics on Study Mondo.',
  alternates: {
    canonical: 'https://www.studymondo.com/search',
  },
}

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children
}
