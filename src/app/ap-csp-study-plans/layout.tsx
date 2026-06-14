import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Computer Science Principles Study Plans | Study Mondo",
  description: "Pre-built AP Computer Science Principles study plans that organize every big idea, Create task milestone, and review into a clear day-by-day schedule before the exam.",
  path: "/ap-csp-study-plans",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
