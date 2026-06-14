import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Interactive Periodic Table | Study Mondo',
  description: 'Explore a free interactive periodic table with atomic numbers, masses, electron configurations, and element categories. Click any element for detailed properties.',
  alternates: { canonical: 'https://www.studymondo.com/periodic-table' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
