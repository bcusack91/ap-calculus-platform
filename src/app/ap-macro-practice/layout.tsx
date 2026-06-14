import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Macroeconomics Practice Test | Study Mondo",
  description: "Take a free AP Macroeconomics practice test on GDP, inflation, fiscal and monetary policy, and international trade, with instant scoring and answer explanations.",
  path: "/ap-macro-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
