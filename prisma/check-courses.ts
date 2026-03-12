import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const courses = ['ap-precalculus', 'ap-chemistry', 'sat-prep', 'act-prep']
  for (const slug of courses) {
    const course = await prisma.course.findUnique({
      where: { slug },
      include: { categories: { include: { topics: { select: { slug: true, textContent: true } } } } }
    })
    if (course === null) { console.log(slug + ' not found'); continue }
    console.log('\n=== ' + course.title + ' ===')
    for (const cat of course.categories) {
      console.log('  ' + cat.name + ' (' + cat.slug + '): ' + cat.topics.length + ' topics')
      for (const t of cat.topics) {
        const hasContent = t.textContent !== null && t.textContent.length > 50
        console.log('    - ' + t.slug + (hasContent ? ' [OK]' : ' [EMPTY]'))
      }
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect())
