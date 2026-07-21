import { randomUUID } from 'crypto'
import { prisma } from '@/lib/prisma'
import type { AssignmentType } from '@prisma/client'
import { SAT_BANK_SLUGS, satBankSlugsForCourseTopic, canonicalSatBankSlug } from '@/lib/sat-topic-map'

/**
 * Server-side assignment auto-completion.
 *
 * Teachers assign work of 4 types, but students complete the underlying
 * activity on the normal study surfaces (lesson pages, exit quizzes,
 * competitive matches) — not through a "submit assignment" button. These
 * helpers are called from the SERVER routes that record those completions,
 * so the gradebook fills in from real study activity:
 *   - exit-quiz submit  → QUIZ + INTERACTIVE_LESSON (score recomputed from the
 *     attempt's answer records — client-asserted booleans, the same trust level
 *     the platform already uses for MASTERED status and competitive unlocks)
 *   - competitive final → COMPETITIVE_PRACTICE (accuracy over the match's full
 *     question set from server-written answer history; practice-vs-AI matches
 *     are EXCLUDED — their payloads ship answer keys to drive the bot)
 *   - progress save     → marks matching assignments IN_PROGRESS (no score)
 * FLASHCARD_REVIEW keeps its explicit student submit (completion-semantics).
 *
 * Semantics: best-score-wins, idempotent, never *rejects* a real completion —
 * maxAttempts only caps the attempts counter, it does not block recording
 * (a student who legitimately did the work should never 409 out of a grade).
 * All failures are swallowed after logging: grading bookkeeping must never
 * break the student-facing flow that triggered it.
 */

function slugMatches(assignment: { topicSlug: string | null; topicSlugs: unknown }, topicSlug: string): boolean {
  if (assignment.topicSlug === topicSlug) return true
  const many = assignment.topicSlugs
  if (Array.isArray(many) && many.includes(topicSlug)) return true
  // SAT competitive matches are played on bank pseudo-slugs ('sat-math',
  // 'sat-reading', the 2 punctuation banks) OR the finer area/domain slugs
  // ('sat-math-algebra', 'sat-rw-conventions', …), while sat-prep
  // COMPETITIVE_PRACTICE assignments name curriculum topic slugs (e.g.
  // 'sat-quadratic-equations'). Collapse the granular slug to its canonical bank,
  // then complete any assignment whose topics belong to that bank's section.
  const satBank = canonicalSatBankSlug(topicSlug)
  if ((SAT_BANK_SLUGS as readonly string[]).includes(satBank)) {
    const assigned = [assignment.topicSlug, ...(Array.isArray(many) ? many : [])]
      .filter((t): t is string => typeof t === 'string')
    return assigned.some(t => ((satBankSlugsForCourseTopic(t) ?? []) as string[]).includes(satBank))
  }
  return false
}

/** Find active assignments of the given types matching this topic in the student's active classrooms. */
async function matchingAssignments(userId: string, topicSlug: string, types: AssignmentType[]) {
  const memberships = await prisma.classroomMember.findMany({
    where: { userId, isActive: true },
    select: { classroomId: true },
  })
  if (memberships.length === 0) return []
  const assignments = await prisma.assignment.findMany({
    where: {
      classroomId: { in: memberships.map((m) => m.classroomId) },
      isActive: true,
      type: { in: types },
    },
    select: { id: true, topicSlug: true, topicSlugs: true, maxAttempts: true, requiredScore: true },
  })
  return assignments.filter((a) => slugMatches(a, topicSlug))
}

/**
 * Record a COMPLETED submission (score 0–1, server-computed by the caller)
 * for every matching assignment. Best score wins; attempts increment up to
 * maxAttempts; a COMPLETED status is never downgraded.
 */
export async function recordAssignmentCompletion(params: {
  userId: string
  topicSlug: string
  types: AssignmentType[]
  score: number // 0–1; provenance documented at each call site
}): Promise<void> {
  const { userId, topicSlug, types } = params
  const score = Math.min(1, Math.max(0, params.score))
  try {
    const assignments = await matchingAssignments(userId, topicSlug, types)
    for (const a of assignments) {
      const required = typeof a.requiredScore === 'number' ? a.requiredScore : null
      const completesNow = required === null || score >= required
      const id = randomUUID()
      // Atomic upsert: GREATEST keeps best-score-wins under concurrent submits,
      // attempts counts TRUE retakes (not clamped — teachers should see volume),
      // COMPLETED is never downgraded, requiredScore gates completion, and rows
      // a teacher has manually graded (feedback set) are left untouched.
      await prisma.$executeRaw`
        INSERT INTO "AssignmentSubmission"
          ("id", "assignmentId", "studentId", "status", "score", "attempts", "timeSpent", "startedAt", "completedAt")
        VALUES
          (${id}, ${a.id}, ${userId},
           ${completesNow ? 'COMPLETED' : 'IN_PROGRESS'}::"AssignmentStatus",
           ${score}, 1, 0, now(), ${completesNow ? new Date() : null})
        ON CONFLICT ("assignmentId", "studentId") DO UPDATE SET
          "score" = GREATEST(COALESCE("AssignmentSubmission"."score", 0), EXCLUDED."score"),
          "attempts" = "AssignmentSubmission"."attempts" + 1,
          "startedAt" = COALESCE("AssignmentSubmission"."startedAt", now()),
          "status" = CASE
            WHEN "AssignmentSubmission"."status" = 'COMPLETED'::"AssignmentStatus" THEN 'COMPLETED'::"AssignmentStatus"
            WHEN ${required}::float8 IS NULL
              OR GREATEST(COALESCE("AssignmentSubmission"."score", 0), EXCLUDED."score") >= ${required}::float8
              THEN 'COMPLETED'::"AssignmentStatus"
            ELSE 'IN_PROGRESS'::"AssignmentStatus"
          END,
          "completedAt" = CASE
            WHEN "AssignmentSubmission"."completedAt" IS NOT NULL THEN "AssignmentSubmission"."completedAt"
            WHEN ${required}::float8 IS NULL
              OR GREATEST(COALESCE("AssignmentSubmission"."score", 0), EXCLUDED."score") >= ${required}::float8
              THEN now()
            ELSE NULL
          END
        WHERE "AssignmentSubmission"."gradedManually" = false
      `
    }
  } catch (error) {
    console.error('[assignment-autocomplete] completion recording failed:', error)
  }
}

/**
 * Mark matching assignments IN_PROGRESS (from NOT_STARTED) when a student
 * starts working the topic — gives teachers "started" visibility without
 * trusting any client-reported score. Never touches COMPLETED rows.
 */
export async function recordAssignmentStarted(params: {
  userId: string
  topicSlug: string
  types: AssignmentType[]
}): Promise<void> {
  const { userId, topicSlug, types } = params
  try {
    const assignments = await matchingAssignments(userId, topicSlug, types)
    if (assignments.length === 0) return
    const now = new Date()
    for (const a of assignments) {
      // Seeded NOT_STARTED rows exist for members at assignment creation;
      // upsert covers students who joined the class afterwards.
      const existing = await prisma.assignmentSubmission.findUnique({
        where: { assignmentId_studentId: { assignmentId: a.id, studentId: userId } },
        select: { status: true },
      })
      if (!existing) {
        await prisma.assignmentSubmission.create({
          data: { assignmentId: a.id, studentId: userId, status: 'IN_PROGRESS', startedAt: now },
        })
      } else if (existing.status === 'NOT_STARTED') {
        await prisma.assignmentSubmission.update({
          where: { assignmentId_studentId: { assignmentId: a.id, studentId: userId } },
          data: { status: 'IN_PROGRESS', startedAt: now },
        })
      }
    }
  } catch (error) {
    console.error('[assignment-autocomplete] start recording failed:', error)
  }
}

/**
 * Record COMPETITIVE_PRACTICE submissions for both players of a completed
 * match. Score = per-player accuracy over the server-written answer history
 * in gameData (never client-supplied). Players without matching classroom
 * assignments (including AI bots) are no-ops.
 */
export async function recordCompetitiveAssignment(matchId: string): Promise<void> {
  try {
    const match = await prisma.competitiveMatch.findUnique({
      where: { id: matchId },
      select: { status: true, topicSlug: true, player1Id: true, player2Id: true, gameData: true },
    })
    if (!match || match.status !== 'COMPLETED' || !match.topicSlug) return
    const gd = (match.gameData && typeof match.gameData === 'object' ? match.gameData : {}) as {
      questions?: unknown[]
      player1Answers?: Array<{ correct: boolean }>
      player2Answers?: Array<{ correct: boolean }>
      isPracticeMatch?: boolean
    }
    // Practice-vs-AI matches ship answer keys to the client (to drive the bot),
    // so they are trivially gameable — mirror the MMR guard and never grade them.
    if (gd.isPracticeMatch) return
    // Grade over the match's FULL question set, not just questions answered —
    // otherwise answering one question and idling out the clock scores 100%.
    const totalQuestions = Array.isArray(gd.questions) ? gd.questions.length : 0
    const accuracy = (answers?: Array<{ correct: boolean }>) => {
      if (!answers || answers.length === 0) return null
      const denom = Math.max(totalQuestions, answers.length, 1)
      return Math.min(1, answers.filter((a) => a.correct === true).length / denom)
    }
    const p1 = accuracy(gd.player1Answers)
    const p2 = accuracy(gd.player2Answers)
    if (p1 !== null) {
      await recordAssignmentCompletion({ userId: match.player1Id, topicSlug: match.topicSlug, types: ['COMPETITIVE_PRACTICE'], score: p1 })
    }
    if (p2 !== null) {
      await recordAssignmentCompletion({ userId: match.player2Id, topicSlug: match.topicSlug, types: ['COMPETITIVE_PRACTICE'], score: p2 })
    }
  } catch (error) {
    console.error('[assignment-autocomplete] competitive recording failed:', error)
  }
}
