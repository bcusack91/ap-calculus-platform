import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "MCAT Study Plans | Study Mondo",
  description: "Choose from structured MCAT study plans — 3-month intensive, 6-month comprehensive, or 12-month mastery plans to maximize your score.",
  path: "/mcat-study-plans",
})

export default function MCATStudyPlansLayout({ children }: { children: React.ReactNode }) {
  return children
}
