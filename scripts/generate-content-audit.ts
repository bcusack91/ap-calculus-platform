import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function generateContentAuditCSV() {
  // Get all courses
  const courses = await prisma.course.findMany({
    include: {
      categories: {
        include: {
          topics: {
            include: {
              _count: {
                select: {
                  exampleProblems: true,
                  flashcards: true,
                }
              }
            },
            orderBy: { order: 'asc' }
          }
        },
        orderBy: { order: 'asc' }
      }
    },
    orderBy: { order: 'asc' }
  })

  // CSV Header
  let csv = 'Page Type,Course,Category,Page Name,URL,Problem Count,Flashcard Count,Reviewed,Quality Score (1-10),Notes,Priority (High/Medium/Low),Date Reviewed\n'

  // Add homepage
  csv += `Static,N/A,N/A,Homepage,https://studymondo.com,N/A,N/A,FALSE,,,,\n`

  // Add static pages
  const staticPages = [
    { name: 'About', url: 'https://studymondo.com/about' },
    { name: 'Contact', url: 'https://studymondo.com/contact' },
    { name: 'Privacy Policy', url: 'https://studymondo.com/privacy' },
    { name: 'Terms of Service', url: 'https://studymondo.com/terms' },
    { name: 'All Topics', url: 'https://studymondo.com/topics' },
  ]

  staticPages.forEach(page => {
    csv += `Static,N/A,N/A,${page.name},${page.url},N/A,N/A,FALSE,,,,\n`
  })

  // Add all courses, categories, and topics
  for (const course of courses) {
    // Add course page
    csv += `Course,${escapeCsvField(course.name)},N/A,${escapeCsvField(course.name)},https://studymondo.com/courses/${course.slug},N/A,N/A,FALSE,,,,\n`

    // Add categories and topics
    for (const category of course.categories) {
      // Add category page
      csv += `Category,${escapeCsvField(course.name)},${escapeCsvField(category.name)},${escapeCsvField(category.name)},https://studymondo.com/categories/${category.slug},N/A,N/A,FALSE,,,,\n`

      // Add topic pages
      for (const topic of category.topics) {
        csv += `Topic,${escapeCsvField(course.name)},${escapeCsvField(category.name)},${escapeCsvField(topic.title)},https://studymondo.com/topics/${topic.slug},${topic._count.exampleProblems},${topic._count.flashcards},FALSE,,,,\n`
      }
    }
  }

  console.log(csv)
}

function escapeCsvField(field: string): string {
  if (!field) return ''
  // Escape quotes and wrap in quotes if contains comma, quote, or newline
  if (field.includes(',') || field.includes('"') || field.includes('\n')) {
    return `"${field.replace(/"/g, '""')}"`
  }
  return field
}

generateContentAuditCSV()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
