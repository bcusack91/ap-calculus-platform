import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Search | Study Mondo",
  description: "Search across 24 courses and 700+ topics on Study Mondo.",
  path: "/search",
})

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children
}
