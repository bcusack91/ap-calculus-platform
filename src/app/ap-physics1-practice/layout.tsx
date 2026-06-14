import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Physics 1 Practice Exam | Study Mondo",
  description: "Take a timed AP Physics 1 practice exam covering kinematics, forces, energy, momentum, waves, and circuits with instant scoring.",
  path: "/ap-physics1-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
