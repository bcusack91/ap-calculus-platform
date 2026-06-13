import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP US Government Practice Test | Study Mondo',
  description: 'Take a free AP US Government and Politics practice test on the Constitution, branches, civil liberties, and political behavior, with scoring and answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-us-gov-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
