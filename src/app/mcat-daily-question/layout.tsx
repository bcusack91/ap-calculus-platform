import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "MCAT Daily Question | Study Mondo",
  description: "Practice a new MCAT question every day across all four sections. Free daily MCAT prep to build consistency.",
  path: "/mcat-daily-question",
})

export default function MCATDailyQuestionLayout({ children }: { children: React.ReactNode }) {
  return children
}
