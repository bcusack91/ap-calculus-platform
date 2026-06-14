import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP World History Practice Test | Study Mondo",
  description: "Take a free AP World History: Modern practice test covering c. 1200 to the present across all nine units, with instant scoring and answer explanations.",
  path: "/ap-world-history-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
