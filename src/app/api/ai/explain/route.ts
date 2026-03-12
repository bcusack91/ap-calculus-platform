import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { concept, style, topicSlug } = await request.json()

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
