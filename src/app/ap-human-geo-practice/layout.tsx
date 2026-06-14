import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Human Geography Practice Test | Study Mondo",
  description: "Take a free AP Human Geography practice test covering population, migration, culture, agriculture, and urban geography, with instant scoring and answer explanations.",
  path: "/ap-human-geo-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
