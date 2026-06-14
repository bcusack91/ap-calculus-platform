import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP US History Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP US History (APUSH) FRQs, including short-answer, document-based (DBQ), and long essay questions, scored on the rubric with detailed answer explanations.",
  path: "/ap-us-history-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
