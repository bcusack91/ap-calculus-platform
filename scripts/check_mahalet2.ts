import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
(async () => {
  const user = await prisma.user.findFirst({
    where: { name: { contains: 'Mahalet', mode: 'insensitive' } },
    select: {
      id: true,
      name: true,
      quizAttempts: { orderBy: { startedAt: 'desc' } },
      exitQuizAttempts: true,
      topicProgress: { orderBy: { lastAccessed: 'desc' } },
    }
  });
  if (!user) { console.log('User not found'); return; }
  console.log('Quiz Attempts:', JSON.stringify(user.quizAttempts, null, 2));
  console.log('Exit Quiz Attempts:', JSON.stringify(user.exitQuizAttempts, null, 2));
  console.log('Topic Progress:', JSON.stringify(user.topicProgress, null, 2));
  await prisma.$disconnect();
})();
