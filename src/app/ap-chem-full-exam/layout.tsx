import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Chemistry Full Practice Exam | Study Mondo",
  description: "Take a free full-length AP Chemistry practice exam with multiple-choice and free-response questions. Get rubric-based scoring and step-by-step answer explanations.",
  path: "/ap-chem-full-exam",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
