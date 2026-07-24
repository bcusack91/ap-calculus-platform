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
  // Accepts a plain topic slug OR a `multi:a,b,c` composite (multi-topic /
  // multi-course matches). 200 chars bounds the composite; buildMultiSlug caps
  // the topic count so it always fits.
  topicSlug: z.string().min(1).max(200),
  gameMode: z.enum(['SPEED_RACE', 'ACCURACY_CHALLENGE', 'SURVIVAL', 'MIXED', 'CHAOS']).optional(),
  tier: z.enum(['easy', 'medium', 'hard']).optional(),
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
  variant: z.number().int().min(1).max(3).optional(),
  failedExitParts: z.array(z.number().int().min(1)).optional(),
  masteredParts: z.array(z.number().int().min(1)).optional(),
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

// ─── Study Plan Schemas ────────────────────────────────────────────────
export const createStudyPlanSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200),
  examDate: z.string().nullable().optional(),
  goalType: z.string().optional().default('CUSTOM'),
  courseSlug: z.string().nullable().optional(),
  targetScore: z.union([z.string(), z.number()]).nullable().optional(),
  tasks: z.array(z.object({
    title: z.string().min(1),
    topicSlug: z.string().optional(),
    type: z.string().optional().default('LESSON'),
    dueDate: z.string().optional(),
  })).optional(),
})

export const updateStudyPlanSchema = z.object({
  id: z.string().min(1, 'Plan ID is required'),
  title: z.string().min(1).max(200).optional(),
  examDate: z.string().nullable().optional(),
  goalType: z.string().optional(),
  targetScore: z.union([z.string(), z.number()]).nullable().optional(),
  isActive: z.boolean().optional(),
})

// ─── Study Task Schemas ────────────────────────────────────────────────
export const updateStudyTaskSchema = z.object({
  id: z.string().min(1, 'Task ID is required'),
  completed: z.boolean().optional(),
  title: z.string().optional(),
  dueDate: z.string().nullable().optional(),
  sortOrder: z.number().optional(),
})

export const createStudyTaskSchema = z.object({
  planId: z.string().min(1, 'Plan ID is required'),
  title: z.string().min(1, 'Title is required'),
  topicSlug: z.string().optional(),
  type: z.string().optional().default('CUSTOM'),
  dueDate: z.string().optional(),
})

// ─── Challenge Schemas ─────────────────────────────────────────────────
export const joinChallengeSchema = z.object({
  challengeId: z.string().min(1, 'Challenge ID is required'),
})

export const updateChallengeProgressSchema = z.object({
  challengeId: z.string().min(1, 'Challenge ID is required'),
  increment: z.number().int().positive().optional().default(1),
})

// ─── Notes Schema ──────────────────────────────────────────────────────
export const upsertNoteSchema = z.object({
  topicSlug: z.string().min(1, 'Topic slug is required'),
  content: z.string().max(50_000, 'Note too long (max 50,000 chars)'),
  // Optional freeform sketch, serialized JSON strokes (see src/lib/drawing.ts).
  // `null` explicitly clears any saved drawing.
  drawing: z.string().max(300_000, 'Drawing too large').nullable().optional(),
})

// ─── Bookmark Schemas ──────────────────────────────────────────────────
export const createBookmarkSchema = z.object({
  topicSlug: z.string().min(1, 'Topic slug is required'),
  title: z.string().min(1, 'Title is required'),
  part: z.number().int().min(1).optional().default(1),
})

export const deleteBookmarkSchema = z.object({
  topicSlug: z.string().min(1, 'Topic slug is required'),
  part: z.number().int().min(1).optional().default(1),
})

// ─── Curriculum Schemas ────────────────────────────────────────────────
export const createCurriculumSchema = z.object({
  classroomId: z.string().min(1, 'Classroom ID is required'),
  title: z.string().min(1, 'Title is required').max(200),
  description: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  weeks: z.array(z.object({
    weekNum: z.number().int().min(1),
    title: z.string().optional(),
    notes: z.string().optional(),
    items: z.array(z.object({
      title: z.string().min(1),
      topicSlug: z.string().optional(),
      type: z.string().optional().default('LESSON'),
    })).optional(),
  })).optional(),
})
