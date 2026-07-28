import { prisma } from './prisma'

interface AchievementCriteria {
  type: string
  count: number
}

/**
 * Check and award any newly-earned achievements for a user.
 * Call this after any significant user action (topic completion, flashcard review, etc.)
 * Returns array of newly unlocked achievement names.
 */
export async function checkAndAwardAchievements(userId: string): Promise<string[]> {
  const [
    achievements,
    existing,
    topicProgress,
    flashcardCount,
    streak,
    competitiveProfile,
    classroomCount,
    assignmentCount,
  ] = await Promise.all([
    prisma.achievement.findMany(),
    prisma.userAchievement.findMany({
      where: { userId },
      select: { achievementId: true },
    }),
    prisma.topicProgress.findMany({
      where: { userId },
      include: {
        topic: {
          select: {
            category: {
              select: { course: { select: { slug: true } } },
            },
          },
        },
      },
    }),
    // repetitions > 0 = actually reviewed. Rows are pre-seeded when a deck is
    // generated, so a plain count credits the student for cards never studied.
    prisma.flashcardProgress.count({ where: { userId, repetitions: { gt: 0 } } }),
    prisma.dailyStreak.findUnique({ where: { userId } }),
    prisma.competitiveProfile.findUnique({ where: { userId } }),
    prisma.classroomMember.count({ where: { userId, isActive: true } }),
    prisma.assignmentSubmission.count({
      where: { studentId: userId, status: 'COMPLETED' },
    }),
  ])

  const existingIds = new Set(existing.map((e) => e.achievementId))
  const newlyUnlocked: string[] = []

  // Pre-compute stats
  const topicsCompleted = topicProgress.filter(
    (tp) => tp.status === 'COMPLETED' || tp.status === 'MASTERED'
  ).length
  const topicsMastered = topicProgress.filter(
    (tp) => tp.status === 'MASTERED'
  ).length
  const courseSlugs = new Set(
    topicProgress.map((tp) => tp.topic.category.course.slug)
  )

  for (const achievement of achievements) {
    if (existingIds.has(achievement.id)) continue

    let criteria: AchievementCriteria
    try {
      criteria = JSON.parse(achievement.criteria)
    } catch {
      continue
    }

    let earned = false
    switch (criteria.type) {
      case 'topics_completed':
        earned = topicsCompleted >= criteria.count
        break
      case 'topics_mastered':
        earned = topicsMastered >= criteria.count
        break
      case 'flashcards_studied':
        earned = flashcardCount >= criteria.count
        break
      case 'streak_days':
        earned = (streak?.currentStreak ?? 0) >= criteria.count
        break
      case 'matches_completed':
        earned = (competitiveProfile?.totalMatches ?? 0) >= criteria.count
        break
      case 'matches_won':
        earned = (competitiveProfile?.wins ?? 0) >= criteria.count
        break
      case 'win_streak':
        earned = (competitiveProfile?.bestWinStreak ?? 0) >= criteria.count
        break
      case 'courses_started':
        earned = courseSlugs.size >= criteria.count
        break
      case 'classrooms_joined':
        earned = classroomCount >= criteria.count
        break
      case 'assignments_completed':
        earned = assignmentCount >= criteria.count
        break
    }

    if (earned) {
      try {
        await prisma.userAchievement.create({
          data: { userId, achievementId: achievement.id },
        })
        newlyUnlocked.push(achievement.name)
      } catch {
        // unique constraint — already awarded (race condition safe)
      }
    }
  }

  return newlyUnlocked
}
