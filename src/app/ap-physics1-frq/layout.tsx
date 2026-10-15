import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Physics 1 Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP Physics 1 FRQs in the four real exam types (MR, TBR, LAB, QQT) on forces, energy, momentum, rotation, oscillations, and fluids, scored with detailed answer explanations.",
  path: "/ap-physics1-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
