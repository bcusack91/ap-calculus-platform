import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP African American Studies Daily Question | Study Mondo",
  description: "A fresh AP African American Studies practice question every day, drawn from real exam topics with full explanations to build a consistent daily study streak.",
  path: "/ap-african-american-studies-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
