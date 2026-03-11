import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP Physics 1 Daily Question | Study Mondo',
  description: 'Practice a new AP Physics 1 question every day. Free daily physics prep covering kinematics, forces, energy, waves, and circuits.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics1-daily-question' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
