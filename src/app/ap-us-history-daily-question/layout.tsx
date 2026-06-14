import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP US History Daily Question | Study Mondo",
  description: "A fresh AP US History practice question every day spanning all APUSH periods from colonial America to today, each with a full explanation to build a daily streak.",
  path: "/ap-us-history-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
