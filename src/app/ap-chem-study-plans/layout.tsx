import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Chemistry Study Plans | Study Mondo",
  description: "Choose from structured AP Chemistry study plans — 4-week sprint, 10-week standard, or 18-week comprehensive schedules to maximize your AP exam score.",
  path: "/ap-chem-study-plans",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
