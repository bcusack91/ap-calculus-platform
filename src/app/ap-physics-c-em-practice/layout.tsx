import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Physics C: E&M Practice Test | Study Mondo",
  description: "Take a free AP Physics C: Electricity & Magnetism practice test on electrostatics, Gauss’s law, circuits, and induction, with instant scoring and answer explanations.",
  path: "/ap-physics-c-em-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
