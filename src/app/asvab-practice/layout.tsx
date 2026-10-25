import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: 'ASVAB Practice Test | Free Timed Practice | Study Mondo',
  description: 'Take a free timed ASVAB practice test across the subtests, scored instantly with an explanation for every question.',
  path: '/asvab-practice',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
