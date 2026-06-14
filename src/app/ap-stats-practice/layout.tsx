import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Statistics Practice Exam | Study Mondo",
  description: "Take a timed AP Statistics practice exam with questions on probability, inference, regression, and sampling with instant scoring.",
  path: "/ap-stats-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
