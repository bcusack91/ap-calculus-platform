import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Human Geography Practice Test | Study Mondo',
  description: 'Take a free AP Human Geography practice test covering population, migration, culture, agriculture, and urban geography, with instant scoring and answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-human-geo-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
