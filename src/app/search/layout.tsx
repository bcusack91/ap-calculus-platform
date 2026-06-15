import type { Metadata } from 'next'
import { COURSE_COUNT, TOPIC_COUNT_LABEL } from '@/lib/site-stats'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Search | Study Mondo",
  description: `Search across ${COURSE_COUNT} courses and ${TOPIC_COUNT_LABEL} topics on Study Mondo.`,
  path: "/search",
})

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children
}
