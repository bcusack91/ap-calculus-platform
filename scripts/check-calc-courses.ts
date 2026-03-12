import { prisma } from '../src/lib/prisma';

async function main() {
  for (const slug of ['ap-calculus-ab', 'ap-calculus-bc']) {
    const course = await prisma.course.findUnique({
      where: { slug },
      include: {
        categories: {
          include: {
            topics: {
              where: { parentTopicId: null },
              orderBy: { order: 'asc' },
              select: { slug: true, title: true },
            },
          },
          orderBy: { order: 'asc' },
        },
      },
    });
    if (!course) {
      console.log(slug, 'NOT FOUND');
      continue;
    }
    console.log('===', course.name, '===');
    for (const cat of course.categories) {
      console.log('  Category:', cat.name);
      for (const t of cat.topics) {
        console.log('    -', t.slug, '|', t.title);
      }
    }
  }
  await prisma.$disconnect();
}

main();
