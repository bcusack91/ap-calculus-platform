import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join a Classroom | Study Mondo',
  description: 'Enter your class join code to connect with your teacher and access assignments.',
  robots: { index: false, follow: false },
}

export default function JoinClassLayout({ children }: { children: React.ReactNode }) {
  return children
}
