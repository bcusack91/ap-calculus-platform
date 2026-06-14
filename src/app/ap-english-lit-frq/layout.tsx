import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP English Literature Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP English Literature FRQs: poetry analysis, prose fiction, and literary argument essays. Scored on the exam rubric with model answer explanations.",
  path: "/ap-english-lit-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
