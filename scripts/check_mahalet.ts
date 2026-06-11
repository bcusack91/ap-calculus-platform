import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
(async () => {
  const user = await prisma.user.findFirst({
    where: { name: { contains: 'Mahalet', mode: 'insensitive' } },
    include: {
      diagnosticTests: {
        orderBy: { createdAt: 'desc' }
      }
    }
  });
  if (!user) { console.log('User not found'); return; }
  console.log('User:', user.name, user.email);
  console.log('Diagnostic Tests:', JSON.stringify(user.diagnosticTests, null, 2));
  await prisma.$disconnect();
})();
