import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Assignments | Study Mondo',
  description: 'View and complete your class assignments, track progress, and submit work.',
  robots: { index: false, follow: false },
}

export default function AssignmentsLayout({ children }: { children: React.ReactNode }) {
  return children
}
