import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Computer Science A Study Plans | Study Mondo",
  description: "Ready-made AP Computer Science A study plans that map every Java topic, lab, and free-response practice into a structured day-by-day schedule leading up to the exam.",
  path: "/ap-csa-study-plans",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
