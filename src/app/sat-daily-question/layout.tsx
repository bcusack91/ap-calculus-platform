import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "SAT Daily Question | Study Mondo",
  description: "Practice a new SAT math and reading question every day. Free daily SAT prep to build consistency and confidence.",
  path: "/sat-daily-question",
})

export default function SATDailyQuestionLayout({ children }: { children: React.ReactNode }) {
  return children
}
