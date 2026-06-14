import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Psychology Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP Psychology FRQs, including the article-analysis and evidence-based questions on the new exam, scored on the rubric with detailed answer explanations.",
  path: "/ap-psych-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
