import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Computer Science A Practice Test | Study Mondo",
  description: "Take a free AP Computer Science A practice test with multiple-choice Java questions on classes, arrays, inheritance, and recursion, scored with answer explanations.",
  path: "/ap-csa-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
