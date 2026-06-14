import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP English Language Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP English Language FRQs: synthesis, rhetorical analysis, and argument essays. Get rubric-based scoring and sample answer explanations for the exam.",
  path: "/ap-english-lang-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
