import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Macroeconomics Free-Response Questions (FRQ) Practice | Study Mondo",
  description: "Practice free AP Macroeconomics FRQs with AD-AS, money market, and loanable funds graphs. Get rubric-based scoring and step-by-step answer explanations for the exam.",
  path: "/ap-macro-frq",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
