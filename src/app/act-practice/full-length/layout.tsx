import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: 'Full-Length ACT Practice Tests (Enhanced ACT) | Study Mondo',
  description:
    'Free full-length Enhanced ACT practice tests: English, Math, Reading and optional Science in real order and timing, scored 1–36 with section scores, a STEM score and a breakdown by ACT reporting category.',
  path: '/act-practice/full-length',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
