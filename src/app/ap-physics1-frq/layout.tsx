import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Physics 1 Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP Physics 1 FRQs on kinematics, forces, energy, momentum, and rotation, including paragraph-argument questions, scored with detailed answer explanations.",
  path: "/ap-physics1-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
