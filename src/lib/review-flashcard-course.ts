/**
 * Which course deck a "Make a flashcard" card from an attempt review files
 * into. Own cards are grouped by DB Course.slug (/flashcards/mine labels them
 * through /api/courses), so the slug has to be a real course slug.
 *
 * The review's `course` field is a short key for links and colours ('mcat',
 * 'sat', 'act', or for AP whatever the resolver derived), which only covered
 * the three test-prep decks: every AP review passed courseSlug undefined and
 * the card landed in "No course".
 */
import { CLASS_PLAN_COURSES } from '@/lib/class-plan-config'

const TEST_PREP_DECKS: Record<string, string> = { mcat: 'mcat-prep', sat: 'sat-prep', act: 'act-prep', asvab: 'asvab' }

/** DB slugs of every AP course with a diagnostic (all of them). */
const AP_COURSE_SLUGS = new Set(
  CLASS_PLAN_COURSES.map((c) => c.courseSlug).filter((s): s is string => !!s && s.startsWith('ap-')),
)

export interface ReviewDeckInput {
  kind: string
  course: string
  items: ({ topicSlug?: string } | null)[]
}

/** The topic slugs a review's deck can be resolved from (exit quizzes carry the quiz topic on every item). */
export function reviewTopicSlugs(attempt: ReviewDeckInput): string[] {
  return [...new Set(attempt.items.map((i) => i?.topicSlug).filter((s): s is string => !!s))]
}

/**
 * The deck's DB course slug, or undefined when none can be told.
 * `courseOfTopic` maps topic slug -> DB course slug (courseSlugsForTopics).
 */
export function reviewFlashcardCourse(
  attempt: ReviewDeckInput,
  courseOfTopic: Map<string, string> = new Map(),
): string | undefined {
  const testPrep = TEST_PREP_DECKS[attempt.course]
  if (testPrep) return testPrep
  // AP practice exams: the resolver sets `course` to the exam's DB course slug.
  if (AP_COURSE_SLUGS.has(attempt.course)) return attempt.course
  // Exit quizzes (and anything else keyed by topic): the course that owns the
  // topic. A course-level quiz slug (e.g. 'ap-chemistry') is its own course.
  for (const slug of reviewTopicSlugs(attempt)) {
    const course = courseOfTopic.get(slug)
    if (course) return course
    if (AP_COURSE_SLUGS.has(slug)) return slug
  }
  return undefined
}
