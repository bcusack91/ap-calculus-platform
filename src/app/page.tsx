import Link from "next/link";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { courseMeta, defaultCourseMeta, sectionOrder } from "@/data/course-metadata";
import DynamicStats from "@/components/DynamicStats";
import { InArticleAd } from "@/components/ad-banner";
import TrackedLink from '@/components/TrackedLink'

export const revalidate = 3600; // ISR: revalidate every hour

export const metadata: Metadata = {
  title: "Study Mondo — Free Math & Science Study Platform",
  description:
    "Master 24 courses from Grade 4 through AP with free notes, flashcards, interactive lessons, and practice problems. 700+ topics, completely free.",
};

const defaultMeta = defaultCourseMeta;

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

  const totalCourses = dbCourses.length;
  return (
    <div className="flex flex-col">
      {/* JSON-LD structured data is already injected globally via layout.tsx — no duplicates needed here */}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-950 dark:via-gray-900 dark:to-blue-950 py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="flex justify-center mb-6">
              {/* Mascot: Smiling Book SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="56" height="56">
                <rect width="64" height="64" rx="14" fill="url(#g)"/>
                <defs>
                  <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#7C3AED"/>
                    <stop offset="100%" stopColor="#2563EB"/>
                  </linearGradient>
                </defs>
                <rect x="14" y="20" width="36" height="24" rx="5" fill="#fff" stroke="#7C3AED" strokeWidth="2"/>
                <rect x="18" y="24" width="28" height="16" rx="3" fill="#e0e7ff"/>
                <path d="M18 24 Q32 32 46 24" fill="none" stroke="#7C3AED" strokeWidth="1.5"/>
                <ellipse cx="26" cy="36" rx="2.5" ry="3" fill="#7C3AED"/>
                <ellipse cx="38" cy="36" rx="2.5" ry="3" fill="#7C3AED"/>
                <path d="M29 44 Q32 48 35 44" stroke="#7C3AED" strokeWidth="1.5" fill="none"/>
              </svg>
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl gradient-text-accessible bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
              Master Math & Science
            </h1>
            <p className="mt-4 text-base font-semibold tracking-wide uppercase text-purple-700 dark:text-purple-400">
              From Grade 4 to AP. SAT to ACT.
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-600 dark:text-gray-400">
              {totalCourses} courses · 700+ topics · Completely free
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <TrackedLink
                href="/topics"
                eventName="homepage_cta_click"
                eventParams={{ destination: '/topics', cta_name: 'get_started_free', cta_type: 'primary', page_template: 'homepage', location: 'hero' }}
                className="rounded-lg px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all"
              >
                Get Started Free
              </TrackedLink>
              <TrackedLink
                href="/about"
                eventName="homepage_cta_click"
                eventParams={{ destination: '/about', cta_name: 'learn_more', cta_type: 'secondary', page_template: 'homepage', location: 'hero' }}
                className="rounded-lg px-6 py-3 text-base font-semibold text-purple-700 dark:text-purple-300 bg-white/70 dark:bg-gray-800/70 border border-purple-200 dark:border-purple-800 hover:bg-white dark:hover:bg-gray-800 transition-all"
              >
                Learn More
              </TrackedLink>
            </div>
            {/* Social Proof Stats */}
            <DynamicStats />
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Choose Your Course
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Select a course to explore comprehensive study materials
            </p>
          </div>
          
          <div className="mx-auto max-w-7xl">
            {orderedSections.map(([sectionName, courses], sectionIdx) => (
              <div key={sectionName} className={sectionIdx > 0 ? 'mt-20' : ''}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b-2 border-purple-200 dark:border-purple-800">
                  {sectionName}
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {courses.map((course) => (
                    <TrackedLink
                      key={course.slug}
                      href={`/courses/${course.slug}`}
                      eventName="homepage_course_card_click"
                      eventParams={{
                        course_slug: course.slug,
                        course_name: course.name,
                        cta_type: 'course_card',
                        page_template: 'homepage',
                        section_name: sectionName,
                        destination: `/courses/${course.slug}`,
                      }}
                      className="group relative flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-8 shadow-sm transition-all hover:shadow-xl hover:scale-105 hover:border-transparent"
                    >
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${course.gradient} opacity-0 transition-opacity group-hover:opacity-5`}></div>
                      <div className="relative">
                        <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${course.gradient} text-white text-3xl font-bold`}>
                          {course.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {course.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {course.description}
                        </p>
                        <div className="mt-4 flex items-center text-sm font-semibold">
                          <span className={`bg-gradient-to-r ${course.gradient} gradient-text-accessible`}>
                            Explore Course →
                          </span>
                        </div>
                      </div>
                    </TrackedLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad placement between courses and features */}
      <div className="container py-8">
        <InArticleAd />
      </div>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to succeed
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Whether you&apos;re just starting or preparing for the AP exam, we&apos;ve got you covered.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                    <span className="text-white text-xl">📝</span>
                  </div>
                  Comprehensive Notes
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">Clear, detailed text explanations for every topic. Concise and easy to understand.</p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  Practice Problems
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">Hundreds of example problems with detailed step-by-step solutions to build your skills.</p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                    <span className="text-white text-xl">🎴</span>
                  </div>
                  Flashcards
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">Quick review flashcards for every topic. Perfect for exam prep.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
