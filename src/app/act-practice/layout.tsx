import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "ACT Practice Test | Study Mondo",
  description: "Take a timed ACT practice test with English, Math, Reading, and Science sections with instant scoring and detailed review.",
  path: "/act-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
