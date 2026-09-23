import { prisma } from '@/lib/prisma'

/**
 * Whether a student has opted into low-yield cards. Read once per request by
 * the queue surfaces, so every "due today" number and the served batch agree.
 */
export async function includeLowYieldFor(userId: string): Promise<boolean> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { flashcardIncludeLowYield: true },
  })
  return user?.flashcardIncludeLowYield ?? false
}
