import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Physics C: Mechanics Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP Physics C: Mechanics FRQs on kinematics, Newton’s laws, energy, and rotation. Calculus-based, scored on the exam rubric with worked answer explanations.",
  path: "/ap-physics-c-mech-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
