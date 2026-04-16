import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1. Aryana Cibeira's AP Chem diagnostic
  const aryana = await prisma.user.findFirst({
    where: { email: 'aryana9978@gmail.com' },
    select: { id: true, name: true },
  });

  if (aryana) {
    console.log(`\n${'='.repeat(80)}`);
    console.log(`\n👤 ARYANA CIBEIRA — AP Chem Diagnostic\n`);

    const aryanaDiagnostics = await prisma.diagnosticTest.findMany({
      where: { userId: aryana.id },
      orderBy: { createdAt: 'asc' },
    });

    for (const dt of aryanaDiagnostics) {
      console.log(`  📋 Category: ${dt.category}`);
      console.log(`  📅 Date: ${dt.createdAt.toLocaleString()}`);
      console.log(`  📊 Results:`);
      console.log(JSON.stringify(dt.results, null, 4));
      if (dt.weakAreas) {
        console.log(`  ⚠️  Weak Areas:`);
        console.log(JSON.stringify(dt.weakAreas, null, 4));
      }
      if (dt.strengths) {
        console.log(`  ✅ Strengths: ${dt.strengths}`);
      }
      console.log();
    }

    // Check flashcard activity details
    const aryanaFlashcards = await prisma.flashcardProgress.findMany({
      where: { userId: aryana.id },
      include: { flashcard: { select: { front: true, topicId: true } } },
      orderBy: { lastReviewed: 'desc' },
      take: 10,
    });

    if (aryanaFlashcards.length > 0) {
      console.log(`  🃏 Recent Flashcard Activity (showing up to 10):`);
      const topics = new Set(aryanaFlashcards.map(f => f.flashcard.topicId).filter(Boolean));
      console.log(`     Topics studied: ${[...topics].join(', ')}`);
      console.log(`     Total cards reviewed: ${aryanaFlashcards.length}`);
    }
  }

  // 2. Santiago Diaz Espinoza's AP Precalculus diagnostics
  const santiago = await prisma.user.findFirst({
    where: { email: 'sede2707@gmail.com' },
    select: { id: true, name: true },
  });

  if (santiago) {
    console.log(`\n${'='.repeat(80)}`);
    console.log(`\n👤 SANTIAGO DIAZ ESPINOZA — AP Precalculus Diagnostics\n`);

    const santiagoDiagnostics = await prisma.diagnosticTest.findMany({
      where: { userId: santiago.id },
      orderBy: { createdAt: 'asc' },
    });

    for (let i = 0; i < santiagoDiagnostics.length; i++) {
      const dt = santiagoDiagnostics[i];
      console.log(`  ─── Diagnostic ${i + 1} of ${santiagoDiagnostics.length} ───`);
      console.log(`  📋 Category: ${dt.category}`);
      console.log(`  📅 Date: ${dt.createdAt.toLocaleString()}`);
      console.log(`  📊 Results:`);
      console.log(JSON.stringify(dt.results, null, 4));
      if (dt.weakAreas) {
        console.log(`  ⚠️  Weak Areas:`);
        console.log(JSON.stringify(dt.weakAreas, null, 4));
      }
      if (dt.strengths) {
        console.log(`  ✅ Strengths: ${dt.strengths}`);
      }
      console.log();
    }

    // Check for topic progress (interactive lessons) between the two diagnostics
    const topicProgress = await prisma.topicProgress.findMany({
      where: { userId: santiago.id },
      select: {
        id: true,
        topicId: true,
        status: true,
        masteryLevel: true,
        timeSpent: true,
        lastAccessed: true,
        completedAt: true,
        topic: { select: { title: true, slug: true, categoryId: true } },
      },
      orderBy: { lastAccessed: 'desc' },
    });

    console.log(`  📚 Topic Progress (Interactive Lessons):`);
    if (topicProgress.length > 0) {
      for (const tp of topicProgress) {
        console.log(`     - ${tp.topic?.title || tp.topicId}: ${tp.status} (mastery: ${(tp.masteryLevel * 100).toFixed(0)}%, time: ${Math.round(tp.timeSpent / 60)}min, last: ${tp.lastAccessed.toLocaleString()})`);
      }
    } else {
      console.log(`     No interactive lessons completed`);
    }

    // Check flashcard activity
    const santiagoFlashcards = await prisma.flashcardProgress.count({
      where: { userId: santiago.id },
    });
    console.log(`\n  🃏 Flashcards studied: ${santiagoFlashcards}`);

    // Check quiz attempts
    const santiagoQuizzes = await prisma.quizAttempt.findMany({
      where: { userId: santiago.id },
      include: { quiz: { select: { title: true } } },
      orderBy: { startedAt: 'desc' },
    });
    if (santiagoQuizzes.length > 0) {
      console.log(`  📝 Quiz Attempts:`);
      for (const qa of santiagoQuizzes) {
        console.log(`     - ${qa.quiz?.title || qa.quizId}: ${qa.score}/${qa.maxScore}`);
      }
    } else {
      console.log(`  📝 No quiz attempts`);
    }

    // Check exit quiz attempts
    const santiagoExitQuizzes = await prisma.exitQuizAttempt.findMany({
      where: { userId: santiago.id },
      select: {
        id: true,
        topicSlug: true,
        score: true,
        totalQuestions: true,
        passed: true,
        completedAt: true,
        timeSpent: true,
      },
      orderBy: { completedAt: 'desc' },
    });
    if (santiagoExitQuizzes.length > 0) {
      console.log(`  🎯 Exit Quiz Attempts:`);
      for (const eq of santiagoExitQuizzes) {
        console.log(`     - ${eq.topicSlug}: ${eq.score}/${eq.totalQuestions} (${eq.passed ? 'PASSED' : 'FAILED'}) on ${eq.completedAt.toLocaleString()}`);
      }
    }
  }

  console.log(`\n${'='.repeat(80)}\n`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
