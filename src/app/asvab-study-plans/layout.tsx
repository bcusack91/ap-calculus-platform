import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: 'ASVAB Study Schedules | Study Mondo',
  description: 'Choose a structured ASVAB study plan that paces lessons, quizzes and practice tests up to your test date.',
  path: '/asvab-study-plans',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
