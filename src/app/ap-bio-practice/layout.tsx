import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Biology Practice Exam | Study Mondo",
  description: "Take a timed AP Biology practice exam covering cell biology, genetics, evolution, ecology, and physiology with instant scoring.",
  path: "/ap-bio-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
