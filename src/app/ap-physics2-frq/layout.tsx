import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Physics 2 Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP Physics 2 FRQs in the four real exam types (MR, TBR, LAB, QQT) on thermodynamics, electric fields, circuits, induction, optics, sound, and modern physics, with step-by-step answer explanations.",
  path: "/ap-physics2-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
