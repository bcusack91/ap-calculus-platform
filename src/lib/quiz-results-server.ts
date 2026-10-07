import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { getInteractiveTopicConfig } from '@/data/interactive-lessons/registry'
import {
  summarizeEntranceQuizzes,
  summarizeExitQuizzes,
  type EntranceQuizSummary,
  type ExitQuizSummary,
} from '@/lib/quiz-results'

export interface StudentQuizResults {
  exitQuizzes: ExitQuizSummary[]
  entranceQuizzes: EntranceQuizSummary[]
}

/**
 * Entrance- and exit-quiz results per student, all time — shared by the class
 * Performance tab and a single student's study report so both show the same
 * numbers. Every requested id gets an entry (empty lists when none).
 */
export async function loadQuizResults(studentIds: string[]): Promise<Map<string, StudentQuizResults>> {
  const out = new Map<string, StudentQuizResults>(studentIds.map((id) => [id, { exitQuizzes: [], entranceQuizzes: [] }]))
  if (studentIds.length === 0) return out

  const [exitAttempts, entranceAnswers, testOuts] = await Promise.all([
    prisma.exitQuizAttempt.findMany({
      where: { userId: { in: studentIds } },
      select: { userId: true, topicSlug: true, score: true, totalQuestions: true, passed: true, mustRedoUnit: true, completedAt: true },
    }),
    // Entrance answers are recorded per question (QuestionActivity, since
    // 2026-09-29); the lesson parts tested out of come from saved progress.
    prisma.questionActivity.findMany({
      where: { userId: { in: studentIds }, source: 'ENTRANCE' },
      select: { userId: true, topicSlug: true, answered: true, correct: true, answeredAt: true },
    }),
    prisma.topicProgress.findMany({
      where: { userId: { in: studentIds }, masteredParts: { not: Prisma.DbNull } },
      select: { userId: true, masteredParts: true, topic: { select: { slug: true, title: true } } },
    }),
  ])

  // Real Topic titles for the quiz slugs, so the client never has to humanize
  // raw slugs like "mcat-physics-mechanics-kinematics-mcat".
  const slugs = Array.from(new Set([...exitAttempts.map((a) => a.topicSlug), ...entranceAnswers.map((a) => a.topicSlug)]))
  const topics = slugs.length > 0 ? await prisma.topic.findMany({ where: { slug: { in: slugs } }, select: { slug: true, title: true } }) : []
  const titleBySlug = new Map([
    ...testOuts.map((t) => [t.topic.slug, t.topic.title] as const),
    ...topics.map((t) => [t.slug, t.title] as const),
  ])
  const totalPartsFor = (slug: string) => getInteractiveTopicConfig(slug)?.parts.length || null

  for (const [userId, entry] of out) {
    entry.exitQuizzes = summarizeExitQuizzes(exitAttempts.filter((a) => a.userId === userId), titleBySlug)
    entry.entranceQuizzes = summarizeEntranceQuizzes(
      entranceAnswers.filter((a) => a.userId === userId),
      testOuts.filter((t) => t.userId === userId).map((t) => ({ topicSlug: t.topic.slug, masteredParts: t.masteredParts })),
      titleBySlug,
      totalPartsFor,
    )
  }
  return out
}
