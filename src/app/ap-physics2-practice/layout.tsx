import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Physics 2 Practice Exam | Study Mondo",
  description: "Take a timed AP Physics 2 practice exam covering electricity, magnetism, optics, thermodynamics, and modern physics.",
  path: "/ap-physics2-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
