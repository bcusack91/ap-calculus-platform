import { courseLandingIntros } from '@/data/course-landing-intros'

interface CourseUniqueIntroProps {
  /** Course slug — must match a key in `courseLandingIntros`. */
  slug: keyof typeof courseLandingIntros | string
}

/**
 * Renders a course-specific 2-paragraph narrative on each landing page so
 * Google's quality classifier (and AdSense reviewers sampling pages
 * side-by-side) sees genuinely unique content rather than a 23-page
 * template clone. Returns null silently if no entry exists for the slug,
 * so it's safe to drop into every landing page.
 */
export default function CourseUniqueIntro({ slug }: CourseUniqueIntroProps) {
  const intro = courseLandingIntros[slug]
  if (!intro) return null

  return (
    <section className="container pb-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/60 sm:p-8">
        <p className="mb-4 text-base font-semibold text-gray-900 sm:text-lg dark:text-white">
          {intro.headline}
        </p>
        {intro.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="mb-3 text-sm leading-relaxed text-gray-700 sm:text-base last:mb-0 dark:text-gray-300"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
