import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Competitive Mode | Study Mondo",
  description: "Challenge yourself in competitive quizzes across math and science topics.",
  path: "/competitive",
})

export default function CompetitiveLayout({ children }: { children: React.ReactNode }) {
  return children
}
