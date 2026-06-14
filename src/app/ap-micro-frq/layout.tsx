import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Microeconomics Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP Microeconomics FRQs on supply and demand, cost curves, market structures, and factor markets. Scored on the rubric with detailed answer explanations.",
  path: "/ap-micro-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
