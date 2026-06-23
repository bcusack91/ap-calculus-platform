import { NextRequest, NextResponse } from 'next/server'
import { requireTeacher } from '@/lib/teacher-auth'
import { rateLimit } from '@/lib/rate-limit'
import { generateFlashcards, FlashcardAIError } from '@/lib/flashcard-ai'

/**
 * POST /api/teacher/flashcard-sets/generate — AI-generate candidate cards for a
 * topic. Returns the cards for the teacher to review; it does NOT save anything
 * (the teacher saves via POST /api/teacher/flashcard-sets after reviewing).
 */

// Allow up to 30s for the model call (well above the typical few-second haiku
// response, with headroom). Per-teacher abuse limiter since this calls an LLM.
export const maxDuration = 30

const generateLimiter = rateLimit({ maxRequests: 10, windowMs: 60_000, prefix: 'flashcard_gen' })

export async function POST(req: NextRequest) {
  const gate = await requireTeacher()
  if ('error' in gate && gate.error) return gate.error

  const rl = await generateLimiter.check(gate.user!.id)
  if (!rl.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again shortly.' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetTime - Date.now()) / 1000)) } },
    )
  }

  const body = await req.json().catch(() => ({}))
  const { topic, subject, count } = body || {}
  if (!topic || typeof topic !== 'string' || !topic.trim()) {
    return NextResponse.json({ error: 'A topic is required' }, { status: 400 })
  }

  try {
    const cards = await generateFlashcards({
      topic,
      subject: typeof subject === 'string' ? subject : undefined,
      count: typeof count === 'number' ? count : undefined,
    })
    return NextResponse.json({ cards })
  } catch (err) {
    if (err instanceof FlashcardAIError && err.message === 'NO_API_KEY') {
      return NextResponse.json(
        { error: 'AI generation isn’t configured yet — ANTHROPIC_API_KEY is missing.' },
        { status: 503 },
      )
    }
    return NextResponse.json({ error: 'AI generation failed. Please try again.' }, { status: 502 })
  }
}
