import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "PSAT Practice Test | Study Mondo",
  description: "Take a full-length adaptive Digital PSAT/NMSQT practice test: timed Reading & Writing and Math modules, a 320-1520 score with your estimated Selection Index, and a review of every question.",
  path: "/psat-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
