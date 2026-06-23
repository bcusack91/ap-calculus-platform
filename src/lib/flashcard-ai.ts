import Anthropic from '@anthropic-ai/sdk'

/**
 * AI generation of teacher flashcard sets via Claude.
 *
 * Model choice: claude-haiku-4-5 — fast (keeps the serverless request well under
 * function timeouts), inexpensive on the owner's API key, and consistent with the
 * existing student AI tutor (src/app/api/ai/explain). Generated cards are always
 * reviewed by the teacher before saving/assigning, so a fast model + human review
 * is the right tradeoff here. To trade cost/latency for higher first-pass quality,
 * change GEN_MODEL to 'claude-opus-4-8' (and consider adding adaptive thinking +
 * raising the route's maxDuration).
 */
const GEN_MODEL = 'claude-haiku-4-5'

export interface GeneratedCard {
  front: string
  back: string
}

const MAX_FRONT = 500
const MAX_BACK = 1000

/** Tolerantly extract JSON from model output (strips code fences / prose); the
 *  value may be an object `{cards:[...]}` or a bare array `[...]`. */
function extractJson(text: string): unknown {
  let t = text.trim()
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i)
  if (fence) t = fence[1].trim()
  const objStart = t.indexOf('{')
  const objEnd = t.lastIndexOf('}')
  const arrStart = t.indexOf('[')
  const arrEnd = t.lastIndexOf(']')
  // Slice to whichever JSON value starts first (handles a bare top-level array).
  if (arrStart >= 0 && (objStart < 0 || arrStart < objStart) && arrEnd > arrStart) {
    t = t.slice(arrStart, arrEnd + 1)
  } else if (objStart >= 0 && objEnd > objStart) {
    t = t.slice(objStart, objEnd + 1)
  }
  return JSON.parse(t)
}

export class FlashcardAIError extends Error {}

/**
 * Generate `count` study flashcards for a topic. Throws FlashcardAIError with a
 * machine code ('NO_API_KEY' | 'MODEL' | 'EMPTY') so the route can respond
 * appropriately. Only the topic/subject text is sent to the model — no student PII.
 */
export async function generateFlashcards(opts: {
  topic: string
  subject?: string
  count?: number
}): Promise<GeneratedCard[]> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) throw new FlashcardAIError('NO_API_KEY')

  const count = Math.max(3, Math.min(40, Math.round(opts.count || 12)))
  const subjectClean = opts.subject?.trim().slice(0, 120) || ''
  const subjectLine = subjectClean ? ` for the course "${subjectClean}"` : ''

  let text = ''
  try {
    const client = new Anthropic({ apiKey })
    const message = await client.messages.create({
      model: GEN_MODEL,
      max_tokens: 4000,
      system:
        'You are an expert curriculum designer creating study flashcards for students ' +
        '(some as young as 9, up through AP / SAT / MCAT level). Every card MUST be ' +
        'factually accurate and exam-appropriate. The "front" is a concise term, concept, ' +
        'or question; the "back" is a clear, correct, self-contained answer or definition ' +
        '(1-3 sentences). Use plain text only — no markdown, no LaTeX delimiters. Cover the ' +
        'most important, testable ideas for the topic. ' +
        'Return ONLY a JSON object of the exact form {"cards":[{"front":"...","back":"..."}]} ' +
        'with no other text and no code fences.',
      messages: [
        {
          role: 'user',
          content: `Create exactly ${count} study flashcards on the topic "${opts.topic.slice(0, 200)}"${subjectLine}.`,
        },
      ],
    })
    text = message.content
      .map((block) => (block.type === 'text' ? block.text : ''))
      .join('')
      .trim()
  } catch (err) {
    console.error('[flashcard-ai] model call failed:', err)
    throw new FlashcardAIError('MODEL')
  }

  if (!text) throw new FlashcardAIError('EMPTY')

  let parsed: unknown
  try {
    parsed = extractJson(text)
  } catch {
    throw new FlashcardAIError('EMPTY')
  }

  // Accept either {cards:[...]} or a bare top-level array of cards.
  const raw: unknown[] = Array.isArray(parsed)
    ? parsed
    : Array.isArray((parsed as { cards?: unknown })?.cards)
      ? ((parsed as { cards: unknown[] }).cards)
      : []
  const cards: GeneratedCard[] = raw
    .map((c) => c as { front?: unknown; back?: unknown })
    .filter((c) => typeof c.front === 'string' && typeof c.back === 'string' && c.front.trim() && c.back.trim())
    .map((c) => ({
      front: (c.front as string).trim().slice(0, MAX_FRONT),
      back: (c.back as string).trim().slice(0, MAX_BACK),
    }))

  if (cards.length === 0) throw new FlashcardAIError('EMPTY')
  return cards
}
