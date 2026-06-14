import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Physics 2 Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP Physics 2 FRQs on fluids, thermodynamics, electricity, optics, and modern physics. Scored on the exam rubric with full step-by-step answer explanations.",
  path: "/ap-physics2-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
