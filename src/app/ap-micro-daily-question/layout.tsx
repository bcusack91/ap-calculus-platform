import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Microeconomics Daily Question | Study Mondo",
  description: "A fresh AP Microeconomics practice question every day on supply, demand, and market structures, each with a full explanation to build a consistent daily study habit.",
  path: "/ap-micro-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
