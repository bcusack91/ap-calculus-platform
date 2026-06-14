import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Environmental Science Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP Environmental Science FRQs on ecosystems, pollution, energy, and data analysis. Get rubric scoring and detailed answer explanations for the APES exam.",
  path: "/ap-enviro-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
