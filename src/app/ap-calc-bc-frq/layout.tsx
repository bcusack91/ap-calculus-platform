import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Calculus BC Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP Calculus BC FRQs covering series, parametric and polar curves, and advanced integration. Scored on the exam rubric with step-by-step explanations.",
  path: "/ap-calc-bc-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
