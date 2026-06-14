import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Computer Science Principles Practice Test | Study Mondo",
  description: "Take a free AP CSP practice test covering all five big ideas, from algorithms to the internet and data, with instant scoring and answer explanations for every question.",
  path: "/ap-csp-practice",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
