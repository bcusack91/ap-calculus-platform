import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | Study Mondo',
  description: 'Track your study progress, streaks, and mastery across all courses.',
  robots: { index: false, follow: false },
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children
}
