import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP US History Practice Test | Study Mondo',
  description: 'Take a free AP US History (APUSH) practice test spanning the colonial era through modern America, with instant scoring and answer explanations for every question.',
  alternates: { canonical: 'https://www.studymondo.com/ap-us-history-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
