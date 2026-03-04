/**
 * JSON-LD structured data generators for SEO.
 * Used in layout.tsx and topic pages.
 */

const SITE_NAME = 'Study Mondo'
const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://www.studymondo.com'

/** Organization schema for the site */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    sameAs: [],
    description:
      'Free interactive study platform for AP courses, math, science, and more. Features flashcards, quizzes, competitive mode, and progress tracking.',
  }
}

/** WebSite schema with search action */
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/topics?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/** Course schema for a course page */
export function courseJsonLd(course: {
  title: string
  description: string
  slug: string
  topicCount?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    url: `${SITE_URL}/courses/${course.slug}`,
    provider: {
      '@type': 'EducationalOrganization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Online',
      courseWorkload: course.topicCount ? `${course.topicCount} topics` : undefined,
    },
    isAccessibleForFree: true,
    inLanguage: 'en',
  }
}

/** LearningResource schema for a topic/lesson */
export function learningResourceJsonLd(topic: {
  title: string
  description?: string
  slug: string
  courseTitle?: string
  educationalLevel?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: topic.title,
    description: topic.description || `Learn ${topic.title} with interactive lessons, flashcards, and quizzes.`,
    url: `${SITE_URL}/topics/${topic.slug}`,
    learningResourceType: ['Lesson', 'Quiz', 'Flashcard'],
    educationalLevel: topic.educationalLevel || 'High School',
    isAccessibleForFree: true,
    inLanguage: 'en',
    provider: {
      '@type': 'EducationalOrganization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(topic.courseTitle && {
      isPartOf: {
        '@type': 'Course',
        name: topic.courseTitle,
      },
    }),
  }
}

/** FAQ schema for topic pages with common questions */
export function faqJsonLd(questions: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }
}

/** BreadcrumbList for SEO navigation */
export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  }
}
