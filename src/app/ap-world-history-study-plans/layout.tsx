import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP World History Study Plans | Study Mondo",
  description: "Pre-built AP World History study plans that schedule every period from 1200 to today plus SAQ, DBQ, and LEQ practice into a day-by-day calendar before the exam.",
  path: "/ap-world-history-study-plans",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
