import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  console.log(`\n📊 USER ACTIVITY REPORT — Past 7 Days (since ${oneWeekAgo.toLocaleDateString()})\n`);
  console.log('='.repeat(80));

  // 1. Recent signups
  const recentUsers = await prisma.user.findMany({
    where: { createdAt: { gte: oneWeekAgo } },
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      image: true,
    },
  });

  console.log(`\n🆕 NEW SIGNUPS: ${recentUsers.length} users\n`);
  if (recentUsers.length > 0) {
    for (const user of recentUsers) {
      const provider = user.image?.includes('google') ? 'Google' : user.image?.includes('github') ? 'GitHub' : 'Email';
      console.log(`  • ${user.name || '(no name)'} — ${user.email || '(no email)'}`);
      console.log(`    Role: ${user.role} | Signed up: ${user.createdAt.toLocaleString()} | Auth: ${provider}`);
    }
  }

  // 2. For each recent user, get their activity summary
  console.log(`\n${'='.repeat(80)}`);
  console.log(`\n📈 ACTIVITY BREAKDOWN PER NEW USER:\n`);

  for (const user of recentUsers) {
    console.log(`\n  👤 ${user.name || user.email || user.id}`);
    console.log(`  ${'─'.repeat(60)}`);

    // Topic progress - select specific columns to avoid unmigrated columns
    const topicProgress = await prisma.topicProgress.findMany({
      where: { userId: user.id },
      select: {
        id: true,
        userId: true,
        topicId: true,
        status: true,
        masteryLevel: true,
        timeSpent: true,
        lastAccessed: true,
        completedAt: true,
        topic: { select: { title: true, slug: true } },
      },
      orderBy: { lastAccessed: 'desc' },
    });

    if (topicProgress.length > 0) {
      console.log(`    📚 Topics accessed: ${topicProgress.length}`);
      const completed = topicProgress.filter(tp => tp.status === 'COMPLETED');
      const inProgress = topicProgress.filter(tp => tp.status === 'IN_PROGRESS');
      console.log(`       Completed: ${completed.length} | In-progress: ${inProgress.length} | Not started: ${topicProgress.length - completed.length - inProgress.length}`);
      const totalTime = topicProgress.reduce((sum, tp) => sum + tp.timeSpent, 0);
      console.log(`       Total time spent: ${Math.round(totalTime / 60)} minutes`);
      for (const tp of topicProgress.slice(0, 5)) {
        console.log(`       - ${tp.topic?.title || tp.topicId}: ${tp.status} (mastery: ${(tp.masteryLevel * 100).toFixed(0)}%, ${Math.round(tp.timeSpent / 60)}min)`);
      }
      if (topicProgress.length > 5) console.log(`       ... and ${topicProgress.length - 5} more`);
    } else {
      console.log(`    📚 No topics accessed`);
    }

    // Quiz attempts
    const quizAttempts = await prisma.quizAttempt.findMany({
      where: { userId: user.id },
      include: { quiz: { select: { title: true } } },
      orderBy: { startedAt: 'desc' },
    });

    if (quizAttempts.length > 0) {
      const avgScore = quizAttempts.reduce((sum, qa) => sum + (qa.score / qa.maxScore), 0) / quizAttempts.length;
      console.log(`    📝 Quiz attempts: ${quizAttempts.length} (avg score: ${(avgScore * 100).toFixed(1)}%)`);
      for (const qa of quizAttempts.slice(0, 3)) {
        console.log(`       - ${qa.quiz?.title || qa.quizId}: ${qa.score}/${qa.maxScore} (${qa.completed ? 'completed' : 'incomplete'})`);
      }
    } else {
      console.log(`    📝 No quizzes attempted`);
    }

    // Exit quiz attempts
    const exitQuizzes = await prisma.exitQuizAttempt.findMany({
      where: { userId: user.id },
      select: {
        id: true,
        userId: true,
        topicSlug: true,
        score: true,
        totalQuestions: true,
        passed: true,
        startedAt: true,
        completedAt: true,
        timeSpent: true,
      },
      orderBy: { completedAt: 'desc' },
    });

    if (exitQuizzes.length > 0) {
      const passed = exitQuizzes.filter(eq => eq.passed);
      console.log(`    🎯 Exit quizzes: ${exitQuizzes.length} (${passed.length} passed)`);
    }

    // Flashcard progress
    const flashcardCount = await prisma.flashcardProgress.count({
      where: { userId: user.id },
    });

    if (flashcardCount > 0) {
      console.log(`    🃏 Flashcards studied: ${flashcardCount}`);
    }

    // Diagnostic tests
    const diagnostics = await prisma.diagnosticTest.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
    });

    if (diagnostics.length > 0) {
      console.log(`    🔬 Diagnostic tests: ${diagnostics.length}`);
      for (const dt of diagnostics) {
        console.log(`       - ${dt.category} (${dt.createdAt.toLocaleDateString()})`);
      }
    }

    // Competitive matches
    const matches = await prisma.competitiveMatch.count({
      where: {
        OR: [{ player1Id: user.id }, { player2Id: user.id }],
      },
    });

    if (matches > 0) {
      console.log(`    ⚔️  Competitive matches: ${matches}`);
    }

    // Daily streak
    const streak = await prisma.dailyStreak.findUnique({
      where: { userId: user.id },
    });

    if (streak) {
      console.log(`    🔥 Streak: ${streak.currentStreak} days (longest: ${streak.longestStreak})`);
    }

    // SAT test attempts
    const satAttempts = await prisma.satTestAttempt.count({
      where: { userId: user.id },
    });
    if (satAttempts > 0) {
      console.log(`    📋 SAT test attempts: ${satAttempts}`);
    }

    // MCAT test attempts
    const mcatAttempts = await prisma.mcatTestAttempt.count({
      where: { userId: user.id },
    });
    if (mcatAttempts > 0) {
      console.log(`    🏥 MCAT test attempts: ${mcatAttempts}`);
    }

    // Bookmarks
    const bookmarks = await prisma.bookmark.count({
      where: { userId: user.id },
    });
    if (bookmarks > 0) {
      console.log(`    🔖 Bookmarks: ${bookmarks}`);
    }

    // Check if user has done basically nothing
    const totalActivity = topicProgress.length + quizAttempts.length + exitQuizzes.length + 
                          flashcardCount + diagnostics.length + matches + satAttempts + mcatAttempts;
    if (totalActivity === 0) {
      console.log(`    ⚠️  No activity recorded — user signed up but hasn't engaged`);
    }
  }

  // 3. Overall platform activity in the past week (all users, not just new ones)
  console.log(`\n${'='.repeat(80)}`);
  console.log(`\n🌐 OVERALL PLATFORM ACTIVITY (past 7 days, all users):\n`);

  const activeTopicProgress = await prisma.topicProgress.count({
    where: { lastAccessed: { gte: oneWeekAgo } },
  });

  const activeQuizAttempts = await prisma.quizAttempt.count({
    where: { startedAt: { gte: oneWeekAgo } },
  });

  const activeExitQuizzes = await prisma.exitQuizAttempt.count({
    where: { completedAt: { gte: oneWeekAgo } },
  });

  const activeFlashcards = await prisma.flashcardProgress.count({
    where: { lastReviewed: { gte: oneWeekAgo } },
  });

  const activeMatches = await prisma.competitiveMatch.count({
    where: { startedAt: { gte: oneWeekAgo } },
  });

  // Unique active users (users with topic progress in the past week)
  const activeUsers = await prisma.topicProgress.findMany({
    where: { lastAccessed: { gte: oneWeekAgo } },
    select: { userId: true },
    distinct: ['userId'],
  });

  console.log(`  Active users (by topic access): ${activeUsers.length}`);
  console.log(`  Topic progress updates: ${activeTopicProgress}`);
  console.log(`  Quiz attempts: ${activeQuizAttempts}`);
  console.log(`  Exit quiz attempts: ${activeExitQuizzes}`);
  console.log(`  Flashcard reviews: ${activeFlashcards}`);
  console.log(`  Competitive matches: ${activeMatches}`);

  // Total registered users
  const totalUsers = await prisma.user.count();
  console.log(`\n  Total registered users: ${totalUsers}`);

  console.log(`\n${'='.repeat(80)}\n`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
