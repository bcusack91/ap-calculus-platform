import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Biology Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP Biology FRQs on experimental design, data analysis, genetics, and evolution. Get scored on the exam rubric with full answer explanations.",
  path: "/ap-bio-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
