import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP US Government Daily Question | Study Mondo",
  description: "A new AP US Government practice question every day on the Constitution, branches, and civil liberties, each with a clear explanation to sharpen your exam prep.",
  path: "/ap-us-gov-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
