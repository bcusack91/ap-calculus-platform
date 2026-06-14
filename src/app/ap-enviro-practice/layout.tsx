import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Environmental Science Practice Test | Study Mondo",
  description: "Take a free AP Environmental Science (APES) practice test covering ecosystems, energy, pollution, and sustainability, with instant scoring and answer explanations.",
  path: "/ap-enviro-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
