import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Chemistry Practice Exam | Study Mondo",
  description: "Take a timed AP Chemistry practice exam with instant scoring and detailed topic breakdown across all nine units.",
  path: "/ap-chem-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
