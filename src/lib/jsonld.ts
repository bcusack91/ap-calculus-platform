/**
 * JSON-LD structured data generators for SEO.
 * Used in layout.tsx and topic pages.
 */

const SITE_NAME = 'Study Mondo'
// Hardcoded production origin so structured data matches the site's canonical URLs.
const SITE_URL = 'https://www.studymondo.com'

/** Organization schema for the site */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/android-chrome-512x512.png`,
    // sameAs should list the org's real social profiles (e.g. an official
    // X/Twitter, Instagram, TikTok, or YouTube channel URL). No official
    // profiles exist in the codebase today — OWNER: add full profile URLs here
    // as strings once accounts are created; do NOT add share-intent links.
    sameAs: [],
    description:
      'Study Mondo is an ad-free freemium learning platform covering math from grade 4 through AP courses, plus SAT, ACT, and MCAT prep. Students get interactive lessons, flashcards, practice exams, diagnostics, score predictors, and study plans; teachers get class management and progress-tracking tools.',
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

/**
 * The three shared tool-page families that render ToolPageSeoBody. Used for
 * both the per-family SEO intro and the LearningResource JSON-LD below.
 */
export type ToolFamily = 'score-predictor' | 'practice' | 'study-plan'

const TOOL_FAMILY_LABELS: Record<ToolFamily, string> = {
  'score-predictor': 'Score Predictor',
  practice: 'Practice Exam',
  'study-plan': 'Study Plans',
}

const TOOL_FAMILY_RESOURCE_TYPES: Record<ToolFamily, string> = {
  'score-predictor': 'Assessment',
  practice: 'Practice Exam',
  'study-plan': 'Study Guide',
}

const TOOL_FAMILY_DESCRIPTIONS: Record<ToolFamily, (subject: string) => string> = {
  'score-predictor': (subject) =>
    `Estimate your ${subject} exam score from your quiz results, topic mastery, and practice-exam performance.`,
  practice: (subject) =>
    `Full-length ${subject} practice exam with realistic timing, instant scoring, and explanations for every question.`,
  'study-plan': (subject) =>
    `Day-by-day ${subject} study plans sized for different prep timelines, tracked from your dashboard.`,
}

/** Best-effort educationalLevel from the subject display name. */
function educationalLevelForSubject(subjectName: string): string {
  if (/mcat|organic chemistry/i.test(subjectName)) return 'College'
  const grade = subjectName.match(/grade\s*(\d+)/i)
  if (grade) return `Grade ${grade[1]}`
  if (/pre-?algebra/i.test(subjectName)) return 'Middle School'
  return 'High School'
}

/**
 * LearningResource schema for the templated tool pages (score predictor,
 * full-length practice exam, study plans). Rendered by the shared wrapper
 * components in src/components/{ScorePredictor,FullLengthPracticeExam,StudyPlanSelector}.tsx.
 */
export function toolLearningResourceJsonLd({
  subjectName,
  tool,
}: {
  subjectName: string
  tool: ToolFamily
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: `${subjectName} ${TOOL_FAMILY_LABELS[tool]}`,
    description: TOOL_FAMILY_DESCRIPTIONS[tool](subjectName),
    learningResourceType: TOOL_FAMILY_RESOURCE_TYPES[tool],
    educationalLevel: educationalLevelForSubject(subjectName),
    isAccessibleForFree: true,
    inLanguage: 'en',
    provider: {
      '@type': 'EducationalOrganization',
      name: SITE_NAME,
      url: SITE_URL,
    },
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

/** Article schema for blog posts */
export function articleJsonLd(article: {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  author?: string
  tags?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}/blog/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author || 'Study Mondo Team',
    },
    publisher: {
      '@type': 'EducationalOrganization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/android-chrome-512x512.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${article.slug}`,
    },
    ...(article.tags?.length && { keywords: article.tags.join(', ') }),
    isAccessibleForFree: true,
    inLanguage: 'en',
  }
}
