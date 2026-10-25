import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: 'ASVAB AFQT Score Calculator | Free | Study Mondo',
  description: 'Free AFQT calculator: see how your Word Knowledge, Paragraph Comprehension, Arithmetic Reasoning and Mathematics Knowledge scores combine into an AFQT percentile.',
  path: '/asvab-afqt-calculator',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
