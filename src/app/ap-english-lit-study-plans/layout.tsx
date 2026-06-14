import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP English Literature Study Plans | Study Mondo",
  description: "Pre-built AP English Literature study plans that schedule poetry, prose, and drama analysis plus timed essay practice into a day-by-day calendar through exam day.",
  path: "/ap-english-lit-study-plans",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
