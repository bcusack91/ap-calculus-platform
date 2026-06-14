import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Calculus BC Practice Exam | Study Mondo",
  description: "Take a timed AP Calculus BC practice exam covering series, parametric/polar, and advanced integration with instant scoring.",
  path: "/ap-calcbc-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
