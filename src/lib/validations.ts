import { z } from 'zod'

// ─── Competitive Match Answer ──────────────────────────────────────────
export const answerSubmissionSchema = z.object({
  questionIndex: z.number().int().min(0),
  answerIndex: z.number().int().min(0),
  isSecondAttempt: z.boolean().optional().default(false),
  playerId: z.string().optional(),
})

export type AnswerSubmission = z.infer<typeof answerSubmissionSchema>

// ─── Competitive Queue ─────────────────────────────────────────────────
export const queueJoinSchema = z.object({
  topicSlug: z.string().min(1).max(200),
  gameMode: z.enum(['SPEED_RACE', 'ACCURACY_CHALLENGE', 'SURVIVAL', 'MIXED']).optional(),
})

export type QueueJoin = z.infer<typeof queueJoinSchema>

// ─── Progress Save ─────────────────────────────────────────────────────
export const progressSaveSchema = z.object({
  topicSlug: z.string().min(1).max(200).optional(),
  topicId: z.string().optional(),
  lessonPart: z.number().int().min(0).optional(),
  completedSections: z.array(z.string()).optional(),
  masteryLevel: z.number().min(0).max(1).optional().default(0),
  timeSpent: z.number().min(0).optional().default(0),
  isPartCompletion: z.boolean().optional(),
})

export type ProgressSave = z.infer<typeof progressSaveSchema>

// ─── Flashcard Review ──────────────────────────────────────────────────
export const flashcardReviewSchema = z.object({
  flashcardId: z.string().min(1),
  rating: z.enum(['again', 'hard', 'good', 'easy']),
})

export type FlashcardReview = z.infer<typeof flashcardReviewSchema>

// ─── Admin User Role Update ────────────────────────────────────────────
export const adminUserUpdateSchema = z.object({
  userId: z.string().min(1),
  role: z.enum(['FREE', 'PREMIUM', 'TEACHER', 'ADMIN']),
})

export type AdminUserUpdate = z.infer<typeof adminUserUpdateSchema>

// ─── Helper: parse body with zod and return typed result or error response ─
export function parseBody<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
): { success: true; data: T } | { success: false; error: string } {
  const result = schema.safeParse(data)
  if (!result.success) {
    const message = result.error.issues
      .map((i) => `${i.path.join('.')}: ${i.message}`)
      .join('; ')
    return { success: false, error: message }
  }
  return { success: true, data: result.data }
}
