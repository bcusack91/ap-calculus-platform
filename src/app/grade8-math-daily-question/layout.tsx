import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Grade 8 Math Daily Question | Study Mondo",
  description: "Practice a new Grade 8 Math question every day. Free daily practice for equations, geometry, and data.",
  path: "/grade8-math-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
