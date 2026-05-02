import { NextResponse, NextRequest } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * GET  — Get async challenge details (questions visible only when it's your turn)
 * POST — Submit all answers for your turn (challenger or recipient)
 */

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const challenge = await prisma.asyncChallenge.findUnique({
      where: { id },
      include: {
        challenger: { select: { id: true, name: true, image: true, avatarData: true } },
        recipient: { select: { id: true, name: true, image: true, avatarData: true } },
      },
    })

    if (!challenge) {
      return NextResponse.json({ error: 'Challenge not found' }, { status: 404 })
    }

    const userId = session.user.id
    const isChallenger = challenge.challengerId === userId
    const isRecipient = challenge.recipientId === userId
    // If a recipient was pre-targeted (e.g. by a Rematch), only that user may accept.
    const isOpenInvite = challenge.recipientId === null
    const recipientAllowed = isRecipient || isOpenInvite

    // Check if expired
    if (challenge.status !== 'COMPLETED' && challenge.status !== 'EXPIRED' && new Date() > challenge.expiresAt) {
      await prisma.asyncChallenge.update({
        where: { id },
        data: { status: 'EXPIRED' },
      })
      return NextResponse.json({
        ...challenge,
        status: 'EXPIRED',
        questions: undefined,
        challengerAnswers: undefined,
        recipientAnswers: undefined,
      })
    }

    // Anyone can view; only the (designated) recipient can play. Open links allow anyone to join.
    const canPlay =
      (isChallenger && challenge.status === 'CHALLENGER_PLAYING') ||
      (!isChallenger && recipientAllowed && (challenge.status === 'WAITING_FOR_OPPONENT' || (isRecipient && challenge.status === 'RECIPIENT_PLAYING')))

    // Derive course slug from topic for client-side rematch picker
    let courseSlug: string | null = null
    const topic = await prisma.topic.findUnique({
      where: { slug: challenge.topicSlug },
      select: { category: { select: { course: { select: { slug: true } } } } },
    })
    if (topic?.category?.course?.slug) {
      courseSlug = topic.category.course.slug
    } else {
      // topicSlug may itself be a course slug (e.g. when no specific topic was picked)
      const course = await prisma.course.findUnique({ where: { slug: challenge.topicSlug }, select: { slug: true } })
      if (course) courseSlug = course.slug
    }

    // Build response — only show questions when it's their turn
    const response: Record<string, unknown> = {
      id: challenge.id,
      topicSlug: challenge.topicSlug,
      courseSlug,
      questionCount: challenge.questionCount,
      timeLimit: challenge.timeLimit,
      status: challenge.status,
      expiresAt: challenge.expiresAt,
      createdAt: challenge.createdAt,
      challenger: challenge.challenger,
      recipient: challenge.recipient,
      challengerScore: challenge.challengerScore,
      challengerTime: challenge.challengerTime,
      recipientScore: challenge.recipientScore,
      recipientTime: challenge.recipientTime,
      winnerId: challenge.winnerId,
      completedAt: challenge.completedAt,
      isChallenger,
      isRecipient,
      canPlay,
      isOpenInvite,
    }

    // Show questions only when it's the user's turn to play
    if (canPlay) {
      response.questions = challenge.questions
    }

    // Show both answers only when completed
    if (challenge.status === 'COMPLETED') {
      response.questions = challenge.questions
      response.challengerAnswers = challenge.challengerAnswers
      response.recipientAnswers = challenge.recipientAnswers
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching async challenge:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const body = await request.json()
    const { answers, totalTime } = body

    if (!Array.isArray(answers)) {
      return NextResponse.json({ error: 'answers array is required' }, { status: 400 })
    }

    const challenge = await prisma.asyncChallenge.findUnique({
      where: { id },
    })

    if (!challenge) {
      return NextResponse.json({ error: 'Challenge not found' }, { status: 404 })
    }

    if (new Date() > challenge.expiresAt && challenge.status !== 'COMPLETED') {
      await prisma.asyncChallenge.update({
        where: { id },
        data: { status: 'EXPIRED' },
      })
      return NextResponse.json({ error: 'Challenge has expired' }, { status: 410 })
    }

    const userId = session.user.id
    const isChallenger = challenge.challengerId === userId
    const questions = challenge.questions as Array<{ answerIndex?: number; correctAnswer?: number }>

    // Score the answers
    let score = 0
    const scoredAnswers = answers.map((a: { questionIndex: number; answerIndex: number; timeMs?: number }) => {
      const q = questions[a.questionIndex]
      const correctIdx = q?.answerIndex ?? q?.correctAnswer ?? -1
      const correct = a.answerIndex === correctIdx
      if (correct) score++
      return { ...a, correct }
    })

    const safeTime = Math.max(0, Math.min(Number(totalTime) || 0, challenge.timeLimit * 1000))

    if (isChallenger && challenge.status === 'CHALLENGER_PLAYING') {
      // Challenger submitting their answers
      const updated = await prisma.asyncChallenge.update({
        where: { id },
        data: {
          challengerScore: score,
          challengerTime: safeTime,
          challengerAnswers: JSON.parse(JSON.stringify(scoredAnswers)),
          challengerPlayedAt: new Date(),
          status: 'WAITING_FOR_OPPONENT',
        },
      })

      return NextResponse.json({
        score,
        total: questions.length,
        time: safeTime,
        status: updated.status,
        shareUrl: `/competitive/async/${id}`,
      })
    }

    if (!isChallenger && (challenge.status === 'WAITING_FOR_OPPONENT' || challenge.status === 'RECIPIENT_PLAYING')) {
      // If a recipient was pre-designated (rematch), only that user may submit
      if (challenge.recipientId && challenge.recipientId !== userId) {
        return NextResponse.json({ error: 'This challenge is reserved for another player' }, { status: 403 })
      }
      // Recipient submitting their answers — determine winner
      const challengerScore = challenge.challengerScore
      let winnerId: string | null = null
      if (score > challengerScore) winnerId = userId
      else if (challengerScore > score) winnerId = challenge.challengerId
      else {
        // Tie — faster player wins
        const challengerTime = challenge.challengerTime || Infinity
        if (safeTime < challengerTime) winnerId = userId
        else if (challengerTime < safeTime) winnerId = challenge.challengerId
        // else true tie — winnerId stays null
      }

      const updated = await prisma.asyncChallenge.update({
        where: { id },
        data: {
          recipientId: userId,
          recipientScore: score,
          recipientTime: safeTime,
          recipientAnswers: JSON.parse(JSON.stringify(scoredAnswers)),
          recipientPlayedAt: new Date(),
          status: 'COMPLETED',
          winnerId,
          completedAt: new Date(),
        },
      })

      return NextResponse.json({
        score,
        total: questions.length,
        time: safeTime,
        challengerScore,
        winnerId: updated.winnerId,
        status: 'COMPLETED',
      })
    }

    return NextResponse.json({ error: 'Cannot submit answers in current state' }, { status: 409 })
  } catch (error) {
    console.error('Error submitting async challenge answers:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
