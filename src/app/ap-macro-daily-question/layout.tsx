import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Macroeconomics Daily Question | Study Mondo",
  description: "A new AP Macroeconomics practice question every day on GDP, inflation, and fiscal and monetary policy, each with a clear explanation to keep your prep consistent.",
  path: "/ap-macro-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
