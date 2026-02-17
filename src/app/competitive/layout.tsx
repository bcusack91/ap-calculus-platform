import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Competitive Mode | Study Mondo',
  description: 'Challenge yourself in competitive quizzes across math and science topics.',
  alternates: {
    canonical: 'https://www.studymondo.com/competitive',
  },
}

export default function CompetitiveLayout({ children }: { children: React.ReactNode }) {
  return children
}
