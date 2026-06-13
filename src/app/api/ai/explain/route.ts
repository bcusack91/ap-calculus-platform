import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { rateLimit } from '@/lib/rate-limit'
import { FREE_LIMITS } from '@/lib/premium'
import { effectiveIsPremium } from '@/lib/effective-role'

// Per-user rate limit: this route calls an LLM, so unmetered access is a
// direct cost-abuse vector. Key by the authenticated user id (not IP — a
// single logged-in account behind a shared NAT shouldn't burn everyone's
// budget, and per-user keying is the thing actually being metered/billed).
const aiExplainLimiter = rateLimit({ maxRequests: 20, windowMs: 60_000, prefix: 'ai_explain' })

// Premium gate: the AI tutor is a paid feature. Free users get a small DAILY
// quota; Premium is unlimited (still subject to the per-minute abuse limiter
// above). This is the value that justifies the subscription — keep it in sync
// with PREMIUM_BENEFITS in src/lib/premium.ts.
const aiExplainFreeDailyLimiter = rateLimit({
  maxRequests: FREE_LIMITS.aiExplanationsPerDay,
  windowMs: 24 * 60 * 60 * 1000,
  prefix: 'ai_explain_daily_free',
})

export async function POST(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Throttle per user before doing any expensive work (LLM call).
    const rateLimitResult = await aiExplainLimiter.check(session.user.id)
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)),
          },
        }
      )
    }

    // Premium gate: free users get a limited number of AI explanations per day.
    if (!(await effectiveIsPremium(session.user.role))) {
      const dailyResult = await aiExplainFreeDailyLimiter.check(session.user.id)
      if (!dailyResult.success) {
        return NextResponse.json(
          {
            error: `You've used your ${FREE_LIMITS.aiExplanationsPerDay} free AI tutor explanations for today. Upgrade to Premium for unlimited explanations.`,
            upgrade: true,
          },
          {
            status: 429,
            headers: {
              'Retry-After': String(Math.ceil((dailyResult.resetTime - Date.now()) / 1000)),
            },
          }
        )
      }
    }

    const { concept, style } = await request.json()

    if (!concept || typeof concept !== 'string') {
      return NextResponse.json({ error: 'Concept is required' }, { status: 400 })
    }

    const stylePrompts: Record<string, string> = {
      simple: 'Explain this concept using simple words that a 10-year-old could understand.',
      analogy: 'Explain this concept using a real-world analogy.',
      visual: 'Describe this concept visually, as if painting a picture with words.',
      example: 'Explain this concept by walking through a concrete example step by step.',
    }

    const prompt = `${stylePrompts[style] || stylePrompts.simple}\n\nConcept: ${concept.slice(0, 500)}`

    // If OpenAI API key is available, use it; otherwise return a templated response
    const apiKey = process.env.OPENAI_API_KEY
    if (apiKey) {
      const aiRes = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful tutor. Keep explanations concise (2-4 sentences). Be encouraging.' },
            { role: 'user', content: prompt },
          ],
          max_tokens: 200,
          temperature: 0.7,
        }),
      })

      if (aiRes.ok) {
        const data = await aiRes.json()
        const explanation = data.choices?.[0]?.message?.content ?? ''
        return NextResponse.json({ explanation })
      }
    }

    // Fallback: generated template explanations
    const fallbacks: Record<string, string> = {
      simple: `Think of "${concept}" as a building block in math/science. It's a tool that helps us solve problems by breaking them into smaller, manageable steps.`,
      analogy: `Understanding "${concept}" is like learning to ride a bicycle — at first it seems complex, but once the pieces click together, it becomes second nature.`,
      visual: `Imagine "${concept}" as a bridge connecting two ideas. On one side, you have what you already know, and on the other side, the new understanding you're building.`,
      example: `Let's walk through "${concept}" step by step: First, identify the key parts. Then, apply the rules you've learned. Finally, check your answer to make sure it makes sense.`,
    }

    return NextResponse.json({
      explanation: fallbacks[style] || fallbacks.simple,
    })
  } catch (error) {
    console.error('[ai/explain] Error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
