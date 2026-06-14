import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP African American Studies Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP African American Studies FRQs covering source analysis, the project, and short answers, with scored feedback and model answer explanations.",
  path: "/ap-african-american-studies-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
