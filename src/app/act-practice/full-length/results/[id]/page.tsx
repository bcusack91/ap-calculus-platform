import type { Metadata } from 'next'
import ActFullLengthResults from '@/components/act/ActFullLengthResults'

export const metadata: Metadata = {
  title: 'Your ACT full-length results | Study Mondo',
  robots: { index: false, follow: false },
}

export default async function ACTFullLengthResultsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <ActFullLengthResults id={id} />
}
