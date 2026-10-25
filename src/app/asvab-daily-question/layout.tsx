import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: 'ASVAB Daily Question | Study Mondo',
  description: 'Practice a new ASVAB question every day. Free daily ASVAB prep rotating through the subtests.',
  path: '/asvab-daily-question',
})

export default function Layout({ children }: { children: React.ReactNode }) { return children }
