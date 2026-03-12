import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leaderboard | Study Mondo',
  description: 'See the top-scoring students across all competitive quizzes on Study Mondo.',
  alternates: {
    canonical: 'https://www.studymondo.com/leaderboard',
  },
}

export default function LeaderboardLayout({ children }: { children: React.ReactNode }) {
  return children
}
