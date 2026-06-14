import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Precalculus Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP Precalculus FRQs on polynomial, exponential, trigonometric, and rational functions. Scored on the exam rubric with detailed worked answer explanations.",
  path: "/ap-precalc-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
