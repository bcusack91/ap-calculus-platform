import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP World History Daily Question | Study Mondo",
  description: "A new AP World History practice question every day spanning empires, trade, and revolutions from 1200 to today, each with a clear explanation to sharpen your prep.",
  path: "/ap-world-history-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
