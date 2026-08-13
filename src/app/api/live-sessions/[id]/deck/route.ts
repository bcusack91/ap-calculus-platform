import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateSlideDeck, revealedList, type Slide } from '@/lib/slide-deck'
import { touchAttendance } from '@/lib/live-session'

interface Ctx { params: Promise<{ id: string }> }

/**
 * In-class slide presentations for a live session.
 *
 * GET  ?full=1 — the active deck with all slides (fetched once on join).
 * GET          — light state poll (~2.5s): current slide index, revealed
 *                list, and poll tallies for the current slide. Students'
 *                views follow currentSlide; the teacher's chart fills live.
 * POST (teacher) { action: 'start', topicSlug } — generate + present a deck
 *                (ends any active one); { action: 'goto', index };
 *                { action: 'reveal', index }; { action: 'end' }.
 * POST (student) { action: 'answer', slideIndex, answerIndex } — one answer
 *                per poll per student (latest wins until revealed).
 */

async function sessionAccess(sessionId: string, userId: string) {
  const live = await prisma.liveSession.findUnique({
    where: { id: sessionId },
    select: { id: true, status: true, classroomId: true, classroom: { select: { teacherId: true } } },
  })
  if (!live) return null
  const user = await prisma.user.findUnique({ where: { id: userId }, select: { name: true, role: true } })
  const isTeacher =
    live.classroom.teacherId === userId ||
    user?.role === 'ADMIN' ||
    !!(await prisma.classroomCoTeacher.findUnique({
      where: { classroomId_userId: { classroomId: live.classroomId, userId } },
      select: { id: true },
    }))
  if (!isTeacher) {
    const member = await prisma.classroomMember.findUnique({
      where: { classroomId_userId: { classroomId: live.classroomId, userId } },
      select: { isActive: true },
    })
    if (!member?.isActive) return null
  }
  return { live, isTeacher, userName: user?.name || 'Student' }
}

export async function GET(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const access = await sessionAccess(id, session.user.id)
  if (!access) return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })
  if (access.live.status === 'LIVE') void touchAttendance(id, session.user.id)

  const deck = await prisma.slideDeck.findFirst({
    where: { sessionId: id, status: 'ACTIVE' },
    orderBy: { createdAt: 'desc' },
  })
  if (!deck) return NextResponse.json({ deck: null }, { headers: { 'Cache-Control': 'private, no-store' } })

  const revealed = revealedList(deck.revealed)
  const slides = deck.slides as unknown as Slide[]
  const current = slides[deck.currentSlide]

  // Poll tallies for the CURRENT slide only (the state poll is hot).
  let poll: { counts: number[]; total: number; myAnswer: number | null; responders?: string[] } | null = null
  if (current?.kind === 'poll') {
    const responses = await prisma.slideResponse.findMany({
      where: { deckId: deck.id, slideIndex: deck.currentSlide },
      select: { userId: true, userName: true, answerIndex: true },
    })
    const counts = current.options.map((_, i) => responses.filter(r => r.answerIndex === i).length)
    poll = {
      counts,
      total: responses.length,
      myAnswer: responses.find(r => r.userId === session.user!.id)?.answerIndex ?? null,
      ...(access.isTeacher ? { responders: responses.map(r => r.userName) } : {}),
    }
  }

  const base = {
    id: deck.id,
    title: deck.title,
    topicSlug: deck.topicSlug,
    currentSlide: deck.currentSlide,
    slideCount: slides.length,
    revealed,
    status: deck.status,
    poll,
    youAreTeacher: access.isTeacher,
  }
  if (req.nextUrl.searchParams.get('full') === '1') {
    // Students never receive poll answer keys — correctness arrives via the
    // state poll only after the teacher reveals (a devtools-savvy student
    // shouldn't be able to read the answers out of the payload).
    const safeSlides = access.isTeacher ? slides : slides.map(s =>
      s.kind === 'poll' ? { ...s, correctIndex: -1, explanation: '' } : s)
    return NextResponse.json({ deck: { ...base, slides: safeSlides } }, { headers: { 'Cache-Control': 'private, no-store' } })
  }
  // Post-reveal, ship the current poll's answer + explanation to students.
  const currentReveal = current?.kind === 'poll' && revealed.includes(deck.currentSlide)
    ? { correctIndex: current.correctIndex, explanation: current.explanation }
    : null
  return NextResponse.json({ deck: { ...base, currentReveal } }, { headers: { 'Cache-Control': 'private, no-store' } })
}

export async function POST(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = session.user.id
  const access = await sessionAccess(id, userId)
  if (!access) return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })
  if (access.live.status !== 'LIVE') return NextResponse.json({ error: 'This session has ended.' }, { status: 410 })

  const body = await req.json().catch(() => ({}))
  const action = body?.action

  // ---- Student answers ----
  if (action === 'answer') {
    const deck = await prisma.slideDeck.findFirst({ where: { sessionId: id, status: 'ACTIVE' }, orderBy: { createdAt: 'desc' } })
    if (!deck) return NextResponse.json({ error: 'No active presentation' }, { status: 404 })
    const slideIndex = Number(body?.slideIndex)
    const answerIndex = Number(body?.answerIndex)
    const slides = deck.slides as unknown as Slide[]
    const slide = slides[slideIndex]
    if (!slide || slide.kind !== 'poll') return NextResponse.json({ error: 'Not a poll slide' }, { status: 400 })
    if (!Number.isInteger(answerIndex) || answerIndex < 0 || answerIndex >= slide.options.length) {
      return NextResponse.json({ error: 'Invalid answer' }, { status: 400 })
    }
    if (revealedList(deck.revealed).includes(slideIndex)) {
      return NextResponse.json({ error: 'Answer already revealed for this question.' }, { status: 409 })
    }
    await prisma.slideResponse.upsert({
      where: { deckId_slideIndex_userId: { deckId: deck.id, slideIndex, userId } },
      create: { deckId: deck.id, slideIndex, userId, userName: access.userName, answerIndex },
      update: { answerIndex },
    })
    return NextResponse.json({ ok: true })
  }

  // ---- Teacher controls ----
  if (!access.isTeacher) return NextResponse.json({ error: 'Teachers only' }, { status: 403 })

  if (action === 'start') {
    const topicSlug = typeof body?.topicSlug === 'string' ? body.topicSlug : ''
    if (!topicSlug) return NextResponse.json({ error: 'topicSlug required' }, { status: 400 })
    let generated
    try {
      generated = await generateSlideDeck(topicSlug)
    } catch (e) {
      return NextResponse.json({ error: (e as Error).message }, { status: 400 })
    }
    await prisma.slideDeck.updateMany({ where: { sessionId: id, status: 'ACTIVE' }, data: { status: 'ENDED' } })
    const deck = await prisma.slideDeck.create({
      data: { sessionId: id, topicSlug, title: generated.title, slides: generated.slides as object[] },
      select: { id: true, title: true },
    })
    return NextResponse.json({ deck })
  }

  const deck = await prisma.slideDeck.findFirst({ where: { sessionId: id, status: 'ACTIVE' }, orderBy: { createdAt: 'desc' } })
  if (!deck) return NextResponse.json({ error: 'No active presentation' }, { status: 404 })
  const slides = deck.slides as unknown as Slide[]

  if (action === 'goto') {
    const index = Number(body?.index)
    if (!Number.isInteger(index) || index < 0 || index >= slides.length) {
      return NextResponse.json({ error: 'Invalid slide index' }, { status: 400 })
    }
    await prisma.slideDeck.update({ where: { id: deck.id }, data: { currentSlide: index } })
    return NextResponse.json({ ok: true, currentSlide: index })
  }

  if (action === 'reveal') {
    const index = Number(body?.index)
    if (slides[index]?.kind !== 'poll') return NextResponse.json({ error: 'Not a poll slide' }, { status: 400 })
    const revealed = new Set(revealedList(deck.revealed))
    revealed.add(index)
    await prisma.slideDeck.update({ where: { id: deck.id }, data: { revealed: [...revealed] } })
    return NextResponse.json({ ok: true })
  }

  if (action === 'end') {
    await prisma.slideDeck.update({ where: { id: deck.id }, data: { status: 'ENDED' } })
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}
