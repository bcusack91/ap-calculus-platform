import type { Metadata } from "next";
import { COURSE_COUNT, TOPIC_COUNT_LABEL } from "@/lib/site-stats";
import { prisma } from "@/lib/prisma";
import { courseMeta, defaultCourseMeta, sectionOrder, sectionAnchor, getCourseHref } from "@/data/course-metadata";
import DynamicStats from "@/components/DynamicStats";
import TrackedLink from '@/components/TrackedLink'
import { GraduationCap, PencilRuler, Stethoscope, Calculator, Target, Route, Trophy, FileText, Layers, BookOpen, ClipboardCheck } from 'lucide-react'

export const revalidate = 3600; // ISR: revalidate every hour

export const metadata: Metadata = {
  title: "Study Mondo — Math & Science Study Platform",
  description:
    `Master ${COURSE_COUNT} courses from Grade 4 through AP, SAT/ACT, and MCAT — notes, flashcards, interactive lessons, and practice problems across ${TOPIC_COUNT_LABEL} topics. Free to start.`,
  // The homepage's own canonical (the root layout no longer sets one — see the
  // note there). Relative URL resolves against the root metadataBase.
  alternates: { canonical: "/" },
};

const defaultMeta = defaultCourseMeta;

// Goal-first entry tiles: students arrive with an exam in mind, not a course
// catalog. Each tile deep-links into the canonical browse surface (/topics) at
// the matching section anchor, or straight to a dedicated hub.
const GOAL_TILES = [
  {
    href: `/topics#${sectionAnchor('AP Sciences')}`,
    Icon: GraduationCap,
    title: 'AP Exam Prep',
    desc: 'Every AP subject — notes, FRQs, unit tests, score predictors',
  },
  {
    href: `/topics#${sectionAnchor('Test Prep')}`,
    Icon: PencilRuler,
    title: 'SAT · ACT · PSAT',
    desc: 'Diagnostics, drills, and full practice sections',
  },
  {
    href: '/mcat',
    Icon: Stethoscope,
    title: 'MCAT',
    desc: 'All four sections with passage practice and full lengths',
  },
  {
    href: `/topics#${sectionAnchor('Middle School Math (Grades 4-8)')}`,
    Icon: Calculator,
    title: 'Math Foundations',
    desc: 'Grades 4–12 math, from arithmetic to precalculus',
  },
] as const;

// Curated shortlist for the "Most popular" card grid; the full catalog lives at
// /topics (and as the compact link list below). Order matters; first 8 that
// exist in the DB render.
const POPULAR_SLUGS = [
  'ap-calculus-ab', 'ap-biology', 'sat', 'ap-us-history',
  'ap-chemistry', 'mcat', 'ap-psychology', 'ap-physics-1',
  'ap-calculus-bc', 'ap-statistics',
];

const HOW_IT_WORKS = [
  {
    Icon: Target,
    step: '1',
    title: 'Find your gaps',
    desc: 'A short diagnostic pinpoints exactly what you know and what needs work.',
  },
  {
    Icon: Route,
    step: '2',
    title: 'Follow your path',
    desc: 'Adaptive lessons and spaced-repetition flashcards target your weak spots first.',
  },
  {
    Icon: Trophy,
    step: '3',
    title: 'Master it',
    desc: 'Prove it with practice problems, unit tests, and head-to-head competitive matches.',
  },
] as const;

export default async function Home() {
  const dbCourses = await prisma.course.findMany({
    select: { slug: true, name: true, icon: true, description: true },
    orderBy: { order: 'asc' },
  }).catch((error) => {
    console.warn('Homepage courses unavailable at build time; rendering without DB courses.', error)
    return []
  });

  // Merge DB data with presentational metadata and group by section
  const coursesBySection: Record<string, { slug: string; name: string; icon: string; description: string; gradient: string }[]> = {};

  for (const course of dbCourses) {
    const meta = courseMeta[course.slug] ?? defaultMeta;
    const section = meta.section;
    if (!coursesBySection[section]) coursesBySection[section] = [];
    coursesBySection[section].push({
      slug: course.slug,
      name: course.name,
      icon: course.icon ?? meta.icon,
      description: course.description || meta.description,
      gradient: meta.gradient,
    });
  }

  // Sort sections in the defined order
  const orderedSections = Object.entries(coursesBySection).sort(
    ([a], [b]) => (sectionOrder.indexOf(a) === -1 ? 999 : sectionOrder.indexOf(a)) - (sectionOrder.indexOf(b) === -1 ? 999 : sectionOrder.indexOf(b))
  );

  const bySlug = new Map(dbCourses.map((c) => [c.slug, c]));
  const popularCourses = POPULAR_SLUGS
    .map((slug) => bySlug.get(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .slice(0, 8)
    .map((course) => {
      const meta = courseMeta[course.slug] ?? defaultMeta;
      return {
        slug: course.slug,
        name: course.name,
        icon: course.icon ?? meta.icon,
        description: course.description || meta.description,
        gradient: meta.gradient,
      };
    });

  const totalCourses = dbCourses.length;
  return (
    <div className="flex flex-col">
      {/* JSON-LD structured data is already injected globally via layout.tsx — no duplicates needed here */}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent-subtle via-white to-accent-subtle dark:from-accent-subtle dark:via-gray-950 dark:to-accent-subtle py-20 sm:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="flex justify-center mb-6">
              {/* Mascot: Smiling Book SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="56" height="56">
                <rect width="64" height="64" rx="14" fill="url(#brandGradHero)"/>
                <defs>
                  <linearGradient id="brandGradHero" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent)"/>
                    <stop offset="100%" stopColor="var(--accent-secondary)"/>
                  </linearGradient>
                </defs>
                <rect x="14" y="20" width="36" height="24" rx="5" fill="#fff" stroke="var(--accent)" strokeWidth="2"/>
                <rect x="18" y="24" width="28" height="16" rx="3" fill="#e0e7ff"/>
                <path d="M18 24 Q32 29 46 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"/>
                <ellipse cx="26" cy="33" rx="2.5" ry="3" fill="var(--accent)"/>
                <ellipse cx="38" cy="33" rx="2.5" ry="3" fill="var(--accent)"/>
                <path d="M27 39 Q32 42.5 37 39" stroke="var(--accent)" strokeWidth="1.5" fill="none"/>
              </svg>
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl gradient-text-accessible bg-gradient-to-r from-accent to-accent-secondary">
              Master Math & Science
            </h1>
            <p className="mt-4 text-base font-semibold tracking-wide uppercase text-accent-hover dark:text-accent-muted">
              Grade 4 → AP · SAT · ACT · MCAT
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Diagnostics find your gaps, then adaptive lessons and spaced-repetition practice take
              you to mastery — free, with no ads.
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {totalCourses} courses · {TOPIC_COUNT_LABEL} topics
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <TrackedLink
                href="/auth/signup"
                eventName="homepage_cta_click"
                eventParams={{ destination: '/auth/signup', cta_name: 'get_started_free', cta_type: 'primary', page_template: 'homepage', location: 'hero' }}
                className="rounded-lg px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-accent to-accent-secondary hover:from-accent-hover hover:to-accent-secondary-hover shadow-lg hover:shadow-xl transition-all"
              >
                Get Started Free
              </TrackedLink>
              <TrackedLink
                href="/topics"
                eventName="homepage_cta_click"
                eventParams={{ destination: '/topics', cta_name: 'browse_courses', cta_type: 'secondary', page_template: 'homepage', location: 'hero' }}
                className="rounded-lg px-6 py-3 text-base font-semibold text-accent-hover dark:text-accent-muted bg-white/70 dark:bg-gray-800/70 border border-accent-light dark:border-accent-light hover:bg-white dark:hover:bg-gray-800 transition-all"
              >
                Browse Courses
              </TrackedLink>
            </div>
            {/* Social Proof Stats */}
            <DynamicStats />
          </div>
        </div>
      </section>

      {/* Goal tiles — pick your target exam, skip the catalog */}
      <section className="py-14 sm:py-16 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              What are you studying for?
            </h2>
          </div>
          <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {GOAL_TILES.map(({ href, Icon, title, desc }) => (
              <TrackedLink
                key={title}
                href={href}
                eventName="homepage_cta_click"
                eventParams={{ destination: href, cta_name: `goal_${title.toLowerCase().replace(/[^a-z]+/g, '_')}`, cta_type: 'goal_tile', page_template: 'homepage', location: 'goal_tiles' }}
                className="group flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-0.5 hover:border-transparent"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient-br text-white">
                  <Icon className="w-6 h-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </TrackedLink>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — the actual differentiator, told in three steps */}
      <section className="py-14 sm:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              How it works
            </h2>
          </div>
          <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map(({ Icon, step, title, desc }) => (
              <div key={step} className="relative rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-white">
                    <Icon className="w-5 h-5" aria-hidden />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wide text-accent dark:text-accent-muted">Step {step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
          {/* Formats strip — folds the old "Features" section into one line */}
          <div className="mx-auto max-w-4xl mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-accent dark:text-accent-muted" aria-hidden /> Comprehensive notes
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-accent dark:text-accent-muted" aria-hidden /> Interactive lessons
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-accent dark:text-accent-muted" aria-hidden /> Spaced-repetition flashcards
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ClipboardCheck className="w-4 h-4 text-accent dark:text-accent-muted" aria-hidden /> Practice problems &amp; unit tests
            </span>
          </div>
        </div>
      </section>

      {/* Most popular courses — curated card grid; full catalog lives at /topics */}
      {popularCourses.length > 0 && (
        <section className="py-16 sm:py-20 bg-white dark:bg-gray-950">
          <div className="container">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-wrap items-end justify-between gap-3 mb-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Most popular
                  </h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Where most students start</p>
                </div>
                <TrackedLink
                  href="/topics"
                  eventName="homepage_cta_click"
                  eventParams={{ destination: '/topics', cta_name: 'browse_all_courses', cta_type: 'secondary', page_template: 'homepage', location: 'popular_courses' }}
                  className="text-sm font-semibold text-accent dark:text-accent-muted hover:underline"
                >
                  Browse all {totalCourses} courses →
                </TrackedLink>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {popularCourses.map((course) => (
                  <TrackedLink
                    key={course.slug}
                    href={getCourseHref(course.slug)}
                    eventName="homepage_course_card_click"
                    eventParams={{
                      course_slug: course.slug,
                      course_name: course.name,
                      cta_type: 'course_card',
                      page_template: 'homepage',
                      section_name: 'Most popular',
                      destination: getCourseHref(course.slug),
                    }}
                    className="group relative flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-0.5 hover:border-transparent"
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${course.gradient} opacity-0 transition-opacity group-hover:opacity-5`}></div>
                    <div className="relative">
                      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${course.gradient} text-white text-2xl font-bold`}>
                        {course.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {course.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {course.description}
                      </p>
                      <div className="mt-3 flex items-center text-sm font-semibold">
                        <span className={`bg-gradient-to-r ${course.gradient} gradient-text-accessible`}>
                          Explore Course →
                        </span>
                      </div>
                    </div>
                  </TrackedLink>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Full catalog — one compact section-level link row each; the card
          browsing experience (and every course link) lives at /topics */}
      {orderedSections.length > 0 && (
        <section className="py-14 sm:py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <div className="flex flex-wrap items-end justify-between gap-3 mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  All courses
                </h2>
                <TrackedLink
                  href="/topics"
                  eventName="homepage_cta_click"
                  eventParams={{ destination: '/topics', cta_name: 'full_catalog', cta_type: 'secondary', page_template: 'homepage', location: 'all_courses' }}
                  className="text-sm font-semibold text-accent dark:text-accent-muted hover:underline"
                >
                  Browse the full catalog →
                </TrackedLink>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {orderedSections.map(([sectionName, courses]) => (
                  <TrackedLink
                    key={sectionName}
                    href={`/topics#${sectionAnchor(sectionName)}`}
                    eventName="homepage_cta_click"
                    eventParams={{
                      destination: `/topics#${sectionAnchor(sectionName)}`,
                      cta_name: `section_${sectionAnchor(sectionName)}`,
                      cta_type: 'section_link',
                      page_template: 'homepage',
                      location: 'all_courses',
                    }}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-4 transition-colors hover:border-accent-muted"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white group-hover:text-accent-hover dark:group-hover:text-accent-muted transition-colors">
                      {sectionName}
                    </span>
                    <span className="shrink-0 text-sm font-medium text-accent dark:text-accent-muted">
                      {courses.length} {courses.length === 1 ? 'course' : 'courses'} →
                    </span>
                  </TrackedLink>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
