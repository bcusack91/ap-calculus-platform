import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP African American Studies Practice Test | Study Mondo",
  description: "Take a free AP African American Studies practice test across all four units, from origins to the present, with instant scoring and answer explanations.",
  path: "/ap-african-american-studies-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
