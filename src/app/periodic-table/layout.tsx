import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "Interactive Periodic Table | Study Mondo",
  description: "Explore a free interactive periodic table with atomic numbers, masses, electron configurations, and element categories. Click any element for detailed properties.",
  path: "/periodic-table",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
