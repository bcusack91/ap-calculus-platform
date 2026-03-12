import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { parseBody, createBookmarkSchema, deleteBookmarkSchema } from '@/lib/validations'

// GET: fetch user's bookmarks
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const bookmarks = await prisma.bookmark.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ bookmarks })
  } catch (error) {
    console.error('Bookmarks GET error:', error)
    return NextResponse.json({ error: 'Failed to load bookmarks' }, { status: 500 })
  }
}

// POST: add a bookmark
export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const parsed = parseBody(createBookmarkSchema, body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error }, { status: 400 })
    }

    const { topicSlug, title, part } = parsed.data

    const bookmark = await prisma.bookmark.upsert({
      where: {
        userId_topicSlug_part: {
          userId: session.user.id,
          topicSlug,
          part: part ?? 1,
        },
      },
      update: { title },
      create: {
        userId: session.user.id,
        topicSlug,
        title,
        part: part ?? 1,
      },
    })

    return NextResponse.json({ bookmark })
  } catch (error) {
    console.error('Bookmarks POST error:', error)
    return NextResponse.json({ error: 'Failed to save bookmark' }, { status: 500 })
  }
}

// DELETE: remove a bookmark
export async function DELETE(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const parsed = parseBody(deleteBookmarkSchema, body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error }, { status: 400 })
    }

    const { topicSlug, part } = parsed.data

    await prisma.bookmark.deleteMany({
      where: {
        userId: session.user.id,
        topicSlug,
        part: part ?? 1,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Bookmarks DELETE error:', error)
    return NextResponse.json({ error: 'Failed to delete bookmark' }, { status: 500 })
  }
}
