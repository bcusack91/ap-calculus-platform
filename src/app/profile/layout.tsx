import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Profile | Study Mondo',
  description: 'Manage your Study Mondo profile, customize your avatar, and view your learning stats.',
  robots: { index: false, follow: false },
}

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return children
}
