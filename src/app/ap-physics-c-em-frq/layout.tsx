import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Physics C: E&M Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP Physics C: Electricity & Magnetism FRQs on Gauss’s law, circuits, and induction. Calculus-based, scored on the rubric with full answer explanations.",
  path: "/ap-physics-c-em-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
