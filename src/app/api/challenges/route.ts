import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { parseBody, joinChallengeSchema, updateChallengeProgressSchema } from '@/lib/validations'

// GET /api/challenges — list active challenges + user participation
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const now = new Date()

  // Get active challenges
  const challenges = await prisma.challenge.findMany({
    where: {
      startsAt: { lte: now },
      endsAt: { gte: now },
    },
    include: {
      participants: {
        where: { userId: session.user.id },
        select: { progress: true, completed: true, xpEarned: true },
      },
      _count: { select: { participants: true } },
    },
    orderBy: { endsAt: 'asc' },
  })

  const formatted = challenges.map((c) => ({
    id: c.id,
    title: c.title,
    description: c.description,
    type: c.type,
    category: c.category,
    requirement: c.requirement,
    xpReward: c.xpReward,
    icon: c.icon,
    startsAt: c.startsAt.toISOString(),
    endsAt: c.endsAt.toISOString(),
    participantCount: c._count.participants,
    userProgress: c.participants[0]?.progress ?? null,
    userCompleted: c.participants[0]?.completed ?? false,
    userJoined: c.participants.length > 0,
    xpEarned: c.participants[0]?.xpEarned ?? 0,
  }))

  return NextResponse.json({ challenges: formatted })
}

// POST /api/challenges — join a challenge
export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const parsed = parseBody(joinChallengeSchema, body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }

  const { challengeId } = parsed.data

  const challenge = await prisma.challenge.findUnique({ where: { id: challengeId } })
  if (!challenge) {
    return NextResponse.json({ error: 'Challenge not found' }, { status: 404 })
  }

  const now = new Date()
  if (now < challenge.startsAt || now > challenge.endsAt) {
    return NextResponse.json({ error: 'Challenge is not active' }, { status: 400 })
  }

  const participant = await prisma.challengeParticipant.upsert({
    where: {
      challengeId_userId: { challengeId, userId: session.user.id },
    },
    update: {},
    create: {
      challengeId,
      userId: session.user.id,
    },
  })

  return NextResponse.json({ participant })
}

// PUT /api/challenges — update progress on a challenge
export async function PUT(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const parsed = parseBody(updateChallengeProgressSchema, body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }

  const { challengeId, increment } = parsed.data

  const challenge = await prisma.challenge.findUnique({ where: { id: challengeId } })
  if (!challenge) {
    return NextResponse.json({ error: 'Challenge not found' }, { status: 404 })
  }

  const existing = await prisma.challengeParticipant.findUnique({
    where: { challengeId_userId: { challengeId, userId: session.user.id } },
  })
  if (!existing) {
    return NextResponse.json({ error: 'Not joined' }, { status: 400 })
  }
  if (existing.completed) {
    return NextResponse.json({ error: 'Already completed' }, { status: 400 })
  }

  const newProgress = Math.min(existing.progress + (increment || 1), challenge.requirement)
  const isCompleted = newProgress >= challenge.requirement

  const updated = await prisma.challengeParticipant.update({
    where: { challengeId_userId: { challengeId, userId: session.user.id } },
    data: {
      progress: newProgress,
      completed: isCompleted,
      completedAt: isCompleted ? new Date() : null,
      xpEarned: isCompleted ? challenge.xpReward : 0,
    },
  })

  return NextResponse.json({ participant: updated, isCompleted })
}
