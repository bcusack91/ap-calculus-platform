import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "SAT Study Plans | Study Mondo",
  description: "Choose from structured SAT study plans — 4-week sprint, 8-week standard, or 12-week comprehensive plans to boost your score.",
  path: "/sat-study-plans",
})

export default function SATStudyPlansLayout({ children }: { children: React.ReactNode }) {
  return children
}
