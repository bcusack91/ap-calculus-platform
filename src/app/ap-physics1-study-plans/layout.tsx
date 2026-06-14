import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Physics 1 Study Plans | Study Mondo",
  description: "Choose from structured AP Physics 1 study plans — 4-week sprint, 10-week standard, or 16-week comprehensive schedules to maximize your AP exam score.",
  path: "/ap-physics1-study-plans",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
