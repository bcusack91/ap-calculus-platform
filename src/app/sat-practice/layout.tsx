import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "SAT Practice Tests | Study Mondo",
  description: "Take full-length SAT practice tests with realistic questions, timed sections, and detailed score reports.",
  path: "/sat-practice",
})

export default function SATPracticeLayout({ children }: { children: React.ReactNode }) {
  return children
}
