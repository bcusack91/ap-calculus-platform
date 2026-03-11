import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Physics 1 Practice Exam | Study Mondo',
  description: 'Take a timed AP Physics 1 practice exam covering kinematics, forces, energy, momentum, waves, and circuits with instant scoring.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics1-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
