import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP English Literature Daily Question | Study Mondo",
  description: "A fresh AP English Literature practice question every day on poetry, prose, and literary analysis, each with a detailed explanation to build a daily reading habit.",
  path: "/ap-english-lit-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
