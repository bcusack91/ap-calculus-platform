import { NextRequest, NextResponse } from 'next/server'
import { requireTeacher } from '@/lib/teacher-auth'
import { rateLimit } from '@/lib/rate-limit'
import { gradeFreeResponse, AIGradeError } from '@/lib/ai-grade'

/**
 * POST /api/teacher/ai-grade — AI-suggest a score + feedback for a student
 * free-response answer. Advisory only: nothing is persisted; the teacher applies
 * the score themselves.
 */
export const maxDuration = 30

const aiGradeLimiter = rateLimit({ maxRequests: 15, windowMs: 60_000, prefix: 'ai_grade' })

export async function POST(req: NextRequest) {
  const gate = await requireTeacher()
  if ('error' in gate && gate.error) return gate.error

  const rl = await aiGradeLimiter.check(gate.user!.id)
  if (!rl.success) {
    return NextResponse.json(
      { error: 'Too many grading requests. Please try again shortly.' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetTime - Date.now()) / 1000)) } },
    )
  }

  const body = await req.json().catch(() => ({}))
  const { question, rubric, answer, maxPoints } = body || {}
  if (!question || typeof question !== 'string' || !question.trim()) {
    return NextResponse.json({ error: 'A question is required' }, { status: 400 })
  }
  if (!answer || typeof answer !== 'string' || !answer.trim()) {
    return NextResponse.json({ error: 'A student answer is required' }, { status: 400 })
  }

  try {
    const result = await gradeFreeResponse({
      question,
      answer,
      rubric: typeof rubric === 'string' ? rubric : undefined,
      maxPoints: typeof maxPoints === 'number' ? maxPoints : undefined,
    })
    return NextResponse.json(result)
  } catch (err) {
    if (err instanceof AIGradeError && err.message === 'NO_API_KEY') {
      return NextResponse.json(
        { error: 'AI grading isn’t configured yet — ANTHROPIC_API_KEY is missing.' },
        { status: 503 },
      )
    }
    return NextResponse.json({ error: 'AI grading failed. Please try again.' }, { status: 502 })
  }
}
