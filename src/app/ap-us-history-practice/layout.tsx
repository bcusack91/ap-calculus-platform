import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP US History Practice Test | Study Mondo",
  description: "Take a free AP US History (APUSH) practice test spanning the colonial era through modern America, with instant scoring and answer explanations for every question.",
  path: "/ap-us-history-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
