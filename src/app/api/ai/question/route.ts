import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { rateLimit } from '@/lib/rate-limit'
import { FREE_LIMITS } from '@/lib/premium'
import { effectiveIsPremium } from '@/lib/effective-role'
import { isQuestionKey } from '@/lib/question-key'
import { isReviewKind, resolveAttempt, type ResolvedItem } from '@/lib/question-resolver'
import {
  AI_FOLLOW_UP_MAX,
  AI_QUESTION_MAX_TOKENS,
  AI_QUESTION_MODEL,
  AI_QUESTION_SYSTEM,
  buildAiQuestionPrompt,
} from '@/lib/ai-question-prompt'

export const dynamic = 'force-dynamic'

// Same shape as /api/ai/explain: a per-minute abuse limiter keyed by user id…
const aiQuestionLimiter = rateLimit({ maxRequests: 10, windowMs: 60_000, prefix: 'ai_question' })
// …and the free plan's DAILY AI-tutor allowance. Same prefix and window as
// /api/ai/explain, so "5 free AI tutor explanations a day" (PREMIUM_BENEFITS)
// is one shared allowance across both features. Premium is unlimited.
const aiFreeDailyLimiter = rateLimit({
  maxRequests: FREE_LIMITS.aiExplanationsPerDay,
  windowMs: 24 * 60 * 60 * 1000,
  prefix: 'ai_explain_daily_free',
})

const followUp = z.string().trim().max(AI_FOLLOW_UP_MAX).optional()
const attemptBody = z.object({
  kind: z.string().max(40),
  attemptId: z.string().min(1).max(100),
  itemIndex: z.number().int().min(0).max(1000),
  followUp,
})
const requizBody = z.object({
  questionKey: z.string().max(40),
  origin: z.object({ attemptKind: z.string().max(40), attemptId: z.string().min(1).max(100), itemIndex: z.number().int().min(0).max(1000) }),
  followUp,
})

type Resolved = { course: string; item: ResolvedItem; chosenIndex: number | null; chosenText: string | null }

/**
 * Find the question on the SERVER, scoped to the signed-in student, and only
 * once they have answered it. The client never supplies question text.
 *  - {kind, attemptId, itemIndex}: an item of one of their own attempts. The
 *    resolver only rebuilds submitted attempts (and, for an in-progress
 *    tutor set, only the questions already graded), so a resolvable item is
 *    an answered one.
 *  - {questionKey, origin}: a mistake re-quiz item. The origin must be the
 *    student's own attempt holding that question, and the student must have
 *    answered it in a re-quiz; the latest re-quiz answer is the one explained.
 */
async function resolveFor(userId: string, body: unknown): Promise<Resolved | { status: number; error: string }> {
  const a = attemptBody.safeParse(body)
  if (a.success) {
    if (!isReviewKind(a.data.kind)) return { status: 400, error: 'Invalid request' }
    const attempt = await resolveAttempt(a.data.kind, a.data.attemptId, userId)
    const item = attempt?.items.find((i) => i?.index === a.data.itemIndex) ?? null
    if (!attempt || !item) return { status: 404, error: 'That question was not found.' }
    return { course: attempt.course, item, chosenIndex: item.chosenIndex, chosenText: item.chosenText ?? null }
  }
  const r = requizBody.safeParse(body)
  if (!r.success || !isQuestionKey(r.data.questionKey) || !isReviewKind(r.data.origin.attemptKind)) {
    return { status: 400, error: 'Invalid request' }
  }
  const { questionKey, origin } = r.data
  const attempt = await resolveAttempt(origin.attemptKind as Parameters<typeof resolveAttempt>[0], origin.attemptId, userId)
  const item = attempt?.items.find((i) => i?.index === origin.itemIndex) ?? null
  if (!attempt || !item) return { status: 404, error: 'That question was not found.' }
  if (item.questionKey !== questionKey) {
    // An item edited since: the re-quiz carries the key it was logged under.
    const stored = await prisma.questionActivity.findFirst({
      where: { userId, attemptId: origin.attemptId, itemIndex: origin.itemIndex },
      select: { questionKey: true },
    })
    if (stored?.questionKey !== questionKey) return { status: 404, error: 'That question was not found.' }
  }
  const answer = await prisma.questionActivity.findFirst({
    where: { userId, questionKey, attemptKind: 'mistake-review' },
    orderBy: { answeredAt: 'desc' },
    select: { chosenIndex: true, chosenText: true },
  })
  if (!answer) return { status: 403, error: 'Answer the question first.' }
  return { course: attempt.course, item, chosenIndex: answer.chosenIndex ?? null, chosenText: answer.chosenText ?? null }
}

/**
 * POST /api/ai/question — "Ask about this question" (Claude Haiku 4.5).
 * Body: {kind, attemptId, itemIndex, followUp?} or {questionKey, origin, followUp?}.
 * → { answer }. 404 while no ANTHROPIC_API_KEY is configured (the button is
 * hidden then: GET /api/ai/status).
 */
export async function POST(request: Request) {
  try {
    const session = await auth()
    const userId = session?.user?.id
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const apiKey = process.env.ANTHROPIC_API_KEY?.trim()
    if (!apiKey) return NextResponse.json({ error: 'The AI tutor is not available.' }, { status: 404 })

    const limit = await aiQuestionLimiter.check(userId)
    if (!limit.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((limit.resetTime - Date.now()) / 1000)) } },
      )
    }

    // Validate and resolve BEFORE touching the daily quota, so a bad request
    // never burns a free student's allowance.
    const body = await request.json().catch(() => null)
    const resolved = await resolveFor(userId, body)
    if ('error' in resolved) return NextResponse.json({ error: resolved.error }, { status: resolved.status })
    const { course, item, chosenIndex, chosenText } = resolved

    const isPremium = await effectiveIsPremium(session.user.role)
    if (!isPremium) {
      // Peek now; a slot is consumed only when an answer is delivered.
      const peek = await aiFreeDailyLimiter.peek(userId)
      if (!peek.success) {
        return NextResponse.json(
          {
            error: `You've used your ${FREE_LIMITS.aiExplanationsPerDay} free AI tutor explanations for today. Upgrade to Premium for unlimited explanations.`,
            upgrade: true,
          },
          { status: 429, headers: { 'Retry-After': String(Math.ceil((peek.resetTime - Date.now()) / 1000)) } },
        )
      }
    }

    const followUpText = (body as { followUp?: unknown })?.followUp
    const prompt = buildAiQuestionPrompt({
      course,
      question: item.question,
      options: item.options,
      correctIndex: item.correctIndex,
      explanation: item.explanation,
      optionExplanations: item.optionExplanations,
      passage: item.passage ? { title: item.passage.title, body: item.passage.body } : null,
      chosenIndex: item.gridIn ? null : chosenIndex,
      chosenText: item.gridIn ? chosenText : null,
      acceptedAnswer: item.gridIn?.correctAnswer ?? null,
      correct: item.correct,
      followUp: typeof followUpText === 'string' ? followUpText : null,
    })

    let answer = ''
    try {
      const client = new Anthropic({ apiKey })
      const message = await client.messages.create({
        model: AI_QUESTION_MODEL,
        max_tokens: AI_QUESTION_MAX_TOKENS,
        system: AI_QUESTION_SYSTEM,
        messages: [{ role: 'user', content: prompt }],
      })
      answer = message.content
        .map((block) => (block.type === 'text' ? block.text : ''))
        .join('')
        .trim()
    } catch (err) {
      console.error('[ai/question] Claude call failed:', err)
    }
    if (!answer) {
      return NextResponse.json({ error: 'The tutor could not answer right now. Please try again.' }, { status: 502 })
    }
    if (!isPremium) await aiFreeDailyLimiter.check(userId)
    return NextResponse.json({ answer }, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (error) {
    console.error('[ai/question] Error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
