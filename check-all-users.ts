import 'dotenv/config'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Get all users
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true
    }
  });

  console.log('\n👥 All Users:\n');
  for (const user of users) {
    console.log(`📧 ${user.email} (${user.name || 'No name'})`);
    console.log(`   ID: ${user.id}`);
    
    // Check flashcard progress count
    const progressCount = await prisma.flashcardProgress.count({
      where: { userId: user.id }
    });
    
    console.log(`   Flashcards: ${progressCount}`);
    console.log('');
  }

  await prisma.$disconnect();
}

main().catch(console.error);
