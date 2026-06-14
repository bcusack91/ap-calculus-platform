import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Computer Science A Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP Computer Science A FRQs on Java methods, classes, arrays, ArrayLists, and 2D arrays. Scored on the exam rubric with full code answer explanations.",
  path: "/ap-csa-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
