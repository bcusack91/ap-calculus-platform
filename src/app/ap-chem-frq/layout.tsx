import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Chemistry Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP Chemistry FRQs on stoichiometry, equilibrium, thermodynamics, and kinetics. Get rubric-based scoring and detailed answer explanations for the exam.",
  path: "/ap-chem-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
