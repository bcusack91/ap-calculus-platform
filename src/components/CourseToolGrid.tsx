import Link from 'next/link'
import {
  courseDiagnosticMap,
  courseScorePredictorMap,
  courseDailyQuestionMap,
  coursePracticeTestMap,
  courseFRQMap,
  courseStudyPlanMap,
  courseUnitTestsMap,
  courseFlashcardMap,
} from '@/data/course-feature-config'

/**
 * The complete, map-driven list of study tools for one course.
 *
 * Every course used to have two landing pages: a hand-built hub (/ap-biology)
 * and the generic catalog view (/courses/ap-biology). Only the catalog view
 * read the feature maps, so it was the only page listing all of a course's
 * tools — but it canonicals *away* to the hub. The result was that the page
 * students actually land on linked a hand-maintained subset (typically 6 of 8;
 * score predictor and study plans were the usual casualties) while the complete
 * list lived on the page search engines are told to ignore.
 *
 * Dropping this into a hub makes the canonical page complete by construction:
 * registering a tool in course-feature-config.ts is now the only step needed
 * for it to appear on both surfaces. A tool can no longer ship unlinked.
 *
 * Renders nothing when a course has no registered tools, so it is safe to add
 * unconditionally.
 */
export interface CourseToolGridProps {
  /** Course slug as keyed in course-feature-config.ts (e.g. 'ap-biology'). */
  courseSlug: string
  /** Heading text. Defaults to "All study tools". */
  heading?: string
  className?: string
}

/**
 * A few courses are keyed differently in course-feature-config.ts than in the
 * DB / courseHubPaths — the test-prep tracks carry a "-prep" suffix in one and
 * not the other. Resolve those here so callers can pass either spelling and
 * still get a populated grid, rather than silently rendering nothing.
 */
const SLUG_ALIASES: Record<string, string> = {
  'sat-prep': 'sat',
  'act-prep': 'act',
  'mcat-prep': 'mcat',
  'ap-computer-science-principles': 'ap-csp',
}

/** Normalize a feature-map entry into a renderable row, or null if absent. */
function row(
  key: string,
  icon: string,
  cfg: { href: string; label?: string } | undefined,
  fallbackLabel: string
) {
  if (!cfg) return null
  return { key, icon, href: cfg.href, label: cfg.label || fallbackLabel }
}

export default function CourseToolGrid({
  courseSlug: rawSlug,
  heading = 'All study tools',
  className = '',
}: CourseToolGridProps) {
  interface Tool { key: string; icon: string; href: string; label: string }

  // Prefer the slug as given; fall back to its alias only if nothing is registered.
  const aliased = SLUG_ALIASES[rawSlug]
  const courseSlug =
    aliased && !courseDiagnosticMap[rawSlug] && !courseUnitTestsMap[rawSlug] &&
    !coursePracticeTestMap[rawSlug] && !courseFlashcardMap[rawSlug]
      ? aliased
      : rawSlug

  // courseDiagnosticMap entries carry no `label`, so each row supplies a fallback.
  const candidates: (Tool | null)[] = [
    row('diagnostic', '🩺', courseDiagnosticMap[courseSlug], 'Diagnostic Test'),
    row('unit_tests', '🎯', courseUnitTestsMap[courseSlug], 'Unit Tests'),
    row('practice_test', '📝', coursePracticeTestMap[courseSlug], 'Practice Test'),
    row('frq', '✍️', courseFRQMap[courseSlug], 'FRQ Practice'),
    row('study_plans', '📅', courseStudyPlanMap[courseSlug], 'Study Plans'),
    row('flashcards', '🃏', courseFlashcardMap[courseSlug], 'Flashcards'),
    row('daily_question', '📆', courseDailyQuestionMap[courseSlug], "Today's Question"),
    row('score_predictor', '📈', courseScorePredictorMap[courseSlug], 'Score Predictor'),
  ]
  const tools = candidates.filter((t): t is Tool => t !== null)

  if (tools.length === 0) return null

  return (
    <section className={`mx-auto max-w-6xl px-4 py-10 ${className}`} aria-labelledby="course-tools-heading">
      <h2
        id="course-tools-heading"
        className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400"
      >
        {heading}
      </h2>
      <div className="flex flex-wrap gap-3">
        {tools.map(t => (
          <Link
            key={t.key}
            href={t.href}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-accent hover:bg-accent-subtle dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-accent dark:hover:bg-accent-light/20"
          >
            <span aria-hidden className="mr-2">{t.icon}</span>
            {t.label}
          </Link>
        ))}
      </div>
    </section>
  )
}
