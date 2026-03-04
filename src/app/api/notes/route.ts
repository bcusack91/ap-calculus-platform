import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { parseBody, upsertNoteSchema } from '@/lib/validations'

/**
 * GET /api/notes?topicSlug=xxx — Get note for a specific topic
 * GET /api/notes — Get all notes for dashboard
 * PUT /api/notes — Create or update a note
 * DELETE /api/notes?topicSlug=xxx — Delete a note
 */

export async function GET(req: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const topicSlug = req.nextUrl.searchParams.get('topicSlug')

    if (topicSlug) {
      const note = await prisma.studentNote.findUnique({
        where: { userId_topicSlug: { userId: session.user.id, topicSlug } },
      })
      return NextResponse.json({ note })
    }

    // Return all notes for the user
    const notes = await prisma.studentNote.findMany({
      where: { userId: session.user.id },
      orderBy: { updatedAt: 'desc' },
      take: 50,
    })
    return NextResponse.json({ notes })
  } catch (error) {
    console.error('[GET /api/notes]', error)
    return NextResponse.json({ error: 'Failed to fetch notes' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const parsed = parseBody(upsertNoteSchema, body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error }, { status: 400 })
    }

    const { topicSlug, content } = parsed.data

    const note = await prisma.studentNote.upsert({
      where: { userId_topicSlug: { userId: session.user.id, topicSlug } },
      create: { userId: session.user.id, topicSlug, content },
      update: { content },
    })

    return NextResponse.json({ note })
  } catch (error) {
    console.error('[PUT /api/notes]', error)
    return NextResponse.json({ error: 'Failed to save note' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const topicSlug = req.nextUrl.searchParams.get('topicSlug')
    if (!topicSlug) {
      return NextResponse.json({ error: 'topicSlug required' }, { status: 400 })
    }

    await prisma.studentNote.deleteMany({
      where: { userId: session.user.id, topicSlug },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[DELETE /api/notes]', error)
    return NextResponse.json({ error: 'Failed to delete note' }, { status: 500 })
  }
}
