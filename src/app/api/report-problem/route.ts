import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const session = await auth()
    const body = await request.json()

    const { questionId, topicSlug, context, category, description } = body

    if (!category || !description || typeof description !== 'string') {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Store the report — using a general-purpose approach via Prisma raw or a notes-style table
    // For now, store as a StudentNote with a special prefix that admins can filter
    if (session?.user?.id) {
      await prisma.studentNote.create({
        data: {
          userId: session.user.id,
          topicSlug: topicSlug ?? 'general',
          part: 0,
          content: JSON.stringify({
            type: 'problem-report',
            category,
            description: description.slice(0, 500),
            questionId: questionId ?? null,
            context: context ?? null,
            reportedAt: new Date().toISOString(),
          }),
        },
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[report-problem] Error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
