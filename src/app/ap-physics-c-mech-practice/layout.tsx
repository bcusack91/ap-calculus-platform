import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Physics C: Mechanics Practice Test | Study Mondo",
  description: "Take a free AP Physics C: Mechanics practice test on kinematics, Newton’s laws, work and energy, momentum, and rotation, with instant scoring and answer explanations.",
  path: "/ap-physics-c-mech-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
