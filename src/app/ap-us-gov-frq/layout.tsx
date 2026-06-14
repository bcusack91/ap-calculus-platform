import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP US Government Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP US Government FRQs: concept application, quantitative analysis, SCOTUS comparison, and argument essays, scored on the rubric with answer explanations.",
  path: "/ap-us-gov-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
