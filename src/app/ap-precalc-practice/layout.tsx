import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Precalculus Practice Test | Study Mondo",
  description: "Take a free AP Precalculus practice test on polynomial, rational, exponential, logarithmic, and trigonometric functions, with instant scoring and answer explanations.",
  path: "/ap-precalc-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
