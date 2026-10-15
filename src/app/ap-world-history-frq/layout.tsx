import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP World History Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP World History: Modern FRQs in the May 2027 format: sourced short-answer questions, DBQs, and long essay questions, scored on the College Board rubric with model answers.",
  path: "/ap-world-history-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
