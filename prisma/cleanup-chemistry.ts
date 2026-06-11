import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('🧹 Cleaning up duplicate Equilibrium category...\n');

  // Find the empty "Equilibrium" category
  const emptyEq = await prisma.category.findFirst({
    where: {
      slug: 'equilibrium',
      topics: {
        none: {}
      }
    },
    include: {
      topics: true
    }
  });

  if (emptyEq) {
    console.log(`Found empty category: ${emptyEq.name} (${emptyEq.slug})`);
    console.log(`Topics: ${emptyEq.topics.length}`);
    console.log('Deleting...');
    
    await prisma.category.delete({
      where: { id: emptyEq.id }
    });
    
    console.log('✅ Deleted empty Equilibrium category');
  } else {
    console.log('No empty Equilibrium category found');
  }

  // Check for "Applications of Thermodynamics" empty category
  const emptyThermo = await prisma.category.findFirst({
    where: {
      slug: 'applications-of-thermodynamics',
      topics: {
        none: {}
      }
    },
    include: {
      topics: true
    }
  });

  if (emptyThermo) {
    console.log(`\nFound empty category: ${emptyThermo.name} (${emptyThermo.slug})`);
    console.log(`Topics: ${emptyThermo.topics.length}`);
    console.log('Deleting...');
    
    await prisma.category.delete({
      where: { id: emptyThermo.id }
    });
    
    console.log('✅ Deleted empty Applications of Thermodynamics category');
  } else {
    console.log('\nNo empty Applications of Thermodynamics category found');
  }

  // Also remove Physics topics that got into Chemistry Thermodynamics
  console.log('\n🔍 Checking for misplaced Physics topics in Chemistry Thermodynamics...');
  
  const chemThermo = await prisma.category.findFirst({
    where: {
      slug: 'thermodynamics',
      course: {
        slug: 'ap-chemistry'
      }
    },
    include: {
      topics: {
        orderBy: { title: 'asc' }
      }
    }
  });

  if (chemThermo) {
    const physicsTopics = chemThermo.topics.filter(t => 
      t.title.includes('Temperature and Thermal Expansion') ||
      t.title.includes('Heat and Specific Heat') ||
      t.title.includes('Phase Changes and Latent Heat') ||
      t.title.includes('Laws of Thermodynamics')
    );

    if (physicsTopics.length > 0) {
      console.log(`Found ${physicsTopics.length} Physics topics in Chemistry Thermodynamics:`);
      for (const topic of physicsTopics) {
        console.log(`  - ${topic.title}`);
      }
      
      console.log('\nDeleting Physics topics from Chemistry...');
      for (const topic of physicsTopics) {
        // Delete associated examples and flashcards first
        await prisma.exampleProblem.deleteMany({
          where: { topicId: topic.id }
        });
        await prisma.flashcard.deleteMany({
          where: { topicId: topic.id }
        });
        await prisma.topic.delete({
          where: { id: topic.id }
        });
        console.log(`  ✓ Deleted: ${topic.title}`);
      }
    } else {
      console.log('No misplaced Physics topics found');
    }
  }

  console.log('\n✅ Cleanup complete!');
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
