import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP English Literature Practice Test | Study Mondo",
  description: "Take a free AP English Literature practice test with multiple-choice questions on poetry and prose passages, scored instantly with answer explanations for every item.",
  path: "/ap-english-lit-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
