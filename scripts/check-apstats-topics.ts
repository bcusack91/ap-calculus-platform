import { PrismaClient } from '@prisma/client';
const p = new PrismaClient();
async function main() {
  const cats = await p.category.findMany({
    where: { course: { slug: 'ap-statistics' } },
    include: {
      topics: {
        orderBy: { order: 'asc' },
        select: { id: true, slug: true, title: true, parentTopicId: true, order: true }
      }
    },
    orderBy: { order: 'asc' }
  });
  for (const cat of cats) {
    console.log('\n=== ' + cat.name + ' ===');
    const topLevel = cat.topics.filter(t => !t.parentTopicId);
    const sub = cat.topics.filter(t => t.parentTopicId);
    console.log('Top-level: ' + topLevel.length);
    topLevel.forEach(t => console.log('  [T] ' + t.slug + ' — ' + t.title));
    if (sub.length) {
      console.log('Subtopics: ' + sub.length);
      sub.forEach(t => console.log('  [S] ' + t.slug + ' (parent: ' + t.parentTopicId + ')'));
    }
  }
  await p.$disconnect();
}
main();
