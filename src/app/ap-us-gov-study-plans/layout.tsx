import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP US Government Study Plans | Study Mondo",
  description: "Pre-built AP US Government study plans that schedule every unit, foundational document, and FRQ practice into a clear day-by-day calendar before the exam.",
  path: "/ap-us-gov-study-plans",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
