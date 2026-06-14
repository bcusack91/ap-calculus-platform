import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Psychology Practice Exam | Study Mondo",
  description: "Take a timed AP Psychology practice exam with questions on biological bases, cognition, development, and abnormal psychology.",
  path: "/ap-psych-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
