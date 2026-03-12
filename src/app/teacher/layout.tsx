import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teacher Dashboard | Study Mondo',
  description: 'Manage your classrooms, create assignments, and track student progress.',
  robots: { index: false, follow: false },
}

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return children
}
