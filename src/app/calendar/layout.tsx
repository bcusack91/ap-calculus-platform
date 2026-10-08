import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Study calendar | Study Mondo',
  description: 'Your lessons, unit tests and diagnostics on a calendar, spaced out to your next due date.',
  robots: { index: false, follow: false },
}

export default function CalendarLayout({ children }: { children: React.ReactNode }) {
  return children
}
