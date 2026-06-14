import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "PSAT Practice Test | Study Mondo",
  description: "Take a timed PSAT practice test with Reading & Writing and Math sections with instant scoring and detailed review.",
  path: "/psat-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
