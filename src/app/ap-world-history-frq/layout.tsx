import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP World History Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP World History: Modern FRQs, including short-answer, DBQ, and long essay questions, scored on the College Board rubric with full answer explanations.",
  path: "/ap-world-history-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
