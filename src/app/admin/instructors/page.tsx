import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { InstructorsAdmin } from '@/components/video-authoring/InstructorsAdmin'

export const dynamic = 'force-dynamic'
export const metadata: Metadata = { title: 'Video Instructors | Admin' }

/**
 * /admin/instructors — video-lesson instructor profiles and the review queue.
 * Middleware already gates /admin to ADMIN; re-checked here against the DB
 * (the JWT role can be stale), like requireAdmin.
 */
export default async function AdminInstructorsPage() {
  const session = await auth()
  if (!session?.user?.id) redirect('/auth/signin?callbackUrl=/admin/instructors')
  const user = await prisma.user.findUnique({ where: { id: session.user.id }, select: { role: true } })
  if (user?.role !== 'ADMIN') redirect('/dashboard')
  return <InstructorsAdmin />
}
