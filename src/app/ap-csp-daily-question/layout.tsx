import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Computer Science Principles Daily Question | Study Mondo",
  description: "A fresh AP Computer Science Principles practice question every day spanning algorithms, data, and the internet, each with a clear explanation to build a daily habit.",
  path: "/ap-csp-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
