import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Leaderboard | Study Mondo",
  description: "See the top-scoring students across all competitive quizzes on Study Mondo.",
  path: "/leaderboard",
})

export default function LeaderboardLayout({ children }: { children: React.ReactNode }) {
  return children
}
