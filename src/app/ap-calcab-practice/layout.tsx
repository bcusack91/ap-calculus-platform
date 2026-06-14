import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Calculus AB Practice Exam | Study Mondo",
  description: "Take a timed AP Calculus AB practice exam with instant scoring, topic breakdown, and detailed explanations.",
  path: "/ap-calcab-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
