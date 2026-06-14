import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP English Language Practice Test | Study Mondo",
  description: "Take a free AP English Language practice test with multiple-choice reading and writing questions on rhetoric and analysis, scored instantly with answer explanations.",
  path: "/ap-english-lang-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
