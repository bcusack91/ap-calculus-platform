import { prisma } from '@/lib/prisma'
import { DEFAULT_YIELD_PREFS, type YieldPrefs } from '@/lib/flashcard-yield'

/**
 * A student's exam-yield opt-ins. Read once per request by the queue
 * surfaces, so every "due today" number and the served batch agree.
 */
export async function yieldPrefsFor(userId: string): Promise<YieldPrefs> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { flashcardIncludeMediumYield: true, flashcardIncludeLowYield: true },
  })
  if (!user) return DEFAULT_YIELD_PREFS
  return { includeMedium: user.flashcardIncludeMediumYield, includeLow: user.flashcardIncludeLowYield }
}
