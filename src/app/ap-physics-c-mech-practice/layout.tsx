import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Physics C: Mechanics Practice Test | Study Mondo',
  description: 'Take a free AP Physics C: Mechanics practice test on kinematics, Newton’s laws, work and energy, momentum, and rotation, with instant scoring and answer explanations.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics-c-mech-practice' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
