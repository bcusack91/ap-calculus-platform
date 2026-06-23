import Anthropic from '@anthropic-ai/sdk'

/**
 * AI grading of a student free-response / FRQ answer via Claude.
 *
 * Model: claude-haiku-4-5 — fast (keeps the serverless request under function
 * timeouts), inexpensive on the owner's key, consistent with the other AI
 * features. Grading is ADVISORY: the teacher reviews and applies the score, so a
 * fast model + human confirmation is the right tradeoff. Bump GRADE_MODEL to
 * 'claude-opus-4-8' for harder/higher-stakes grading.
 */
const GRADE_MODEL = 'claude-haiku-4-5'

export interface GradeCriterion {
  description: string
  points: number
  earned: boolean
}
export interface GradeResult {
  suggestedScore: number
  maxPoints: number
  criteria: GradeCriterion[]
  feedback: string
}

export class AIGradeError extends Error {}

function extractJson(text: string): unknown {
  let t = text.trim()
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i)
  if (fence) t = fence[1].trim()
  const start = t.indexOf('{')
  const end = t.lastIndexOf('}')
  if (start >= 0 && end > start) t = t.slice(start, end + 1)
  return JSON.parse(t)
}

/**
 * Grade `answer` against `question` (+ optional `rubric`/ideal answer), out of
 * `maxPoints`. Throws AIGradeError('NO_API_KEY' | 'MODEL' | 'EMPTY'). Only the
 * teacher-supplied question/rubric/answer text is sent to the model.
 */
export async function gradeFreeResponse(opts: {
  question: string
  rubric?: string
  answer: string
  maxPoints?: number
}): Promise<GradeResult> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) throw new AIGradeError('NO_API_KEY')

  const maxPoints = Math.max(1, Math.min(100, Math.round(opts.maxPoints || 1)))
  const question = opts.question.trim().slice(0, 4000)
  const answer = opts.answer.trim().slice(0, 6000)
  const rubric = opts.rubric?.trim().slice(0, 4000) || ''

  let text = ''
  try {
    const client = new Anthropic({ apiKey })
    const message = await client.messages.create({
      model: GRADE_MODEL,
      max_tokens: 1200,
      system:
        'You are an experienced, fair grader of student free-response answers at the AP / SAT / MCAT level. ' +
        'Grade the student answer against the rubric if one is given; otherwise grade against a correct expert answer ' +
        'you reason out yourself. Award partial credit. Be specific and constructive. ' +
        'Return ONLY a JSON object of the exact form ' +
        '{"suggestedScore": <number 0..maxPoints, may be fractional>, ' +
        '"criteria": [{"description": "<what this point/criterion is>", "points": <number>, "earned": <boolean>}], ' +
        '"feedback": "<2-4 sentences of feedback addressed to the teacher>"} ' +
        'with no other text and no code fences.',
      messages: [
        {
          role: 'user',
          content:
            `Max points: ${maxPoints}\n\n` +
            `Question:\n${question}\n\n` +
            (rubric ? `Rubric / ideal answer:\n${rubric}\n\n` : '') +
            `Student answer:\n${answer}`,
        },
      ],
    })
    text = message.content
      .map((b) => (b.type === 'text' ? b.text : ''))
      .join('')
      .trim()
  } catch (err) {
    console.error('[ai-grade] model call failed:', err)
    throw new AIGradeError('MODEL')
  }

  if (!text) throw new AIGradeError('EMPTY')

  let parsed: { suggestedScore?: unknown; criteria?: unknown; feedback?: unknown }
  try {
    parsed = extractJson(text) as typeof parsed
  } catch {
    throw new AIGradeError('EMPTY')
  }

  const rawScore = typeof parsed.suggestedScore === 'number' ? parsed.suggestedScore : 0
  const suggestedScore = Math.max(0, Math.min(maxPoints, Math.round(rawScore * 100) / 100))

  const criteria: GradeCriterion[] = (Array.isArray(parsed.criteria) ? parsed.criteria : [])
    .map((c) => c as { description?: unknown; points?: unknown; earned?: unknown })
    .filter((c) => typeof c.description === 'string')
    .slice(0, 25)
    .map((c) => ({
      description: (c.description as string).slice(0, 400),
      points: typeof c.points === 'number' ? c.points : 0,
      earned: c.earned === true,
    }))

  const feedback = typeof parsed.feedback === 'string' ? parsed.feedback.slice(0, 2000) : ''

  return { suggestedScore, maxPoints, criteria, feedback }
}
