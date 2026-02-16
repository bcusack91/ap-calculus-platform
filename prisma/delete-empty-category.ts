import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('🧹 Removing Applications of Thermodynamics empty category...\n');

  const appThermo = await prisma.category.findFirst({
    where: {
      slug: 'applications-of-thermodynamics'
    },
    include: {
      topics: true
    }
  });

  if (appThermo) {
    if (appThermo.topics.length === 0) {
      console.log(`Deleting empty category: ${appThermo.name}`);
      await prisma.category.delete({
        where: { id: appThermo.id }
      });
      console.log('✅ Deleted!');
    } else {
      console.log(`Category has ${appThermo.topics.length} topics, not deleting`);
    }
  } else {
    console.log('Category not found');
  }
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
