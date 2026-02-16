import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Get a few topics from AP Statistics, Grade 4 Math, and Geometry
  const targetCourses = ['ap-statistics', 'grade-4-math', 'geometry']

  for (const courseSlug of targetCourses) {
    const course = await prisma.course.findUnique({
      where: { slug: courseSlug },
      include: {
        categories: {
          include: {
            topics: {
              take: 1, // just grab 1 topic per course
            },
          },
          take: 1,
        },
      },
    })

    if (!course) {
      console.log(`\n❌ Course "${courseSlug}" not found\n`)
      continue
    }

    const topic = course.categories[0]?.topics[0]
    if (!topic) {
      console.log(`\n❌ No topics found for course "${courseSlug}"\n`)
      continue
    }

    console.log(`\n${'='.repeat(80)}`)
    console.log(`COURSE: ${course.name}`)
    console.log(`TOPIC TITLE: ${topic.title}`)
    console.log(`TOPIC SLUG: ${topic.slug}`)
    console.log(`TEXT CONTENT LENGTH: ${topic.textContent.length} chars`)
    console.log(`${'='.repeat(80)}`)

    const preview = topic.textContent.length > 2000
      ? topic.textContent.substring(0, 2000) + '\n... [TRUNCATED]'
      : topic.textContent

    console.log(preview)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
