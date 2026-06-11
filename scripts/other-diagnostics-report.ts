import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Get all diagnostics from users we haven't already covered (exclude Aryana and Santiago)
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  // Get ALL diagnostics from the past week across all users
  const recentDiagnostics = await prisma.diagnosticTest.findMany({
    where: {
      createdAt: { gte: oneWeekAgo },
      user: {
        email: { notIn: ['aryana9978@gmail.com', 'sede2707@gmail.com'] },
      },
    },
    include: { user: { select: { name: true, email: true } } },
    orderBy: { createdAt: 'desc' },
  });

  console.log(`\n${'='.repeat(80)}`);
  console.log(`\nDIAGNOSTIC RESULTS — Past 7 Days (excluding Aryana & Santiago)\n`);
  console.log(`Found ${recentDiagnostics.length} diagnostic(s)\n`);

  for (const dt of recentDiagnostics) {
    console.log(`${'─'.repeat(70)}`);
    console.log(`👤 ${dt.user.name || '(no name)'} (${dt.user.email})`);
    console.log(`📋 ${dt.category} — ${dt.createdAt.toLocaleString()}`);

    const results = dt.results as any;
    console.log(`📊 Overall: ${results.totalCorrect}/${results.totalQuestions} (${results.percentage}%) — Est. AP Score: ${results.estimatedAPScore}`);

    if (results.domains) {
      console.log(`\n   Domain Breakdown:`);
      for (const d of results.domains) {
        const bar = d.level === 'strong' ? '🟢' : d.level === 'moderate' ? '🟡' : '🔴';
        console.log(`   ${bar} ${d.domainName}: ${d.correct}/${d.total} (${d.percentage}%) — ${d.level}`);
      }
    }

    if (dt.weakAreas && (dt.weakAreas as any[]).length > 0) {
      console.log(`\n   ⚠️  Weak Areas: ${(dt.weakAreas as string[]).join(', ')}`);
    }
    if (dt.strengths) {
      console.log(`   ✅ Strengths: ${dt.strengths}`);
    }
    console.log();
  }

  console.log(`${'='.repeat(80)}\n`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
