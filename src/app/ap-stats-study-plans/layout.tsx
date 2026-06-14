import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Statistics Study Plans | Study Mondo",
  description: "Choose from structured AP Statistics study plans — 4-week sprint, 8-week standard, or 12-week comprehensive schedules to maximize your AP exam score.",
  path: "/ap-stats-study-plans",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
