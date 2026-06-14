import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Microeconomics Practice Test | Study Mondo",
  description: "Take a free AP Microeconomics practice test on supply and demand, elasticity, costs, market structures, and factor markets, with instant scoring and answer explanations.",
  path: "/ap-micro-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
