import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP English Language Daily Question | Study Mondo",
  description: "A new AP English Language practice question every day on rhetoric, argument, and grammar, each with a full explanation to sharpen your reading and writing skills.",
  path: "/ap-english-lang-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
