import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "MCAT Practice Tests | Study Mondo",
  description: "Take timed MCAT section practice tests with realistic passage-based questions, detailed scoring, and performance analytics.",
  path: "/mcat-practice",
})

export default function MCATracticeLayout({ children }: { children: React.ReactNode }) {
  return children
}
