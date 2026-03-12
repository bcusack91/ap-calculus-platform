import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import type { Metadata } from 'next'
import { courseMeta, defaultCourseMeta } from '@/data/course-metadata'

export const revalidate = 3600 // ISR: revalidate every hour

export const metadata: Metadata = {
  title: 'All Topics | Study Mondo',
  description: 'Browse all study topics across 22 AP courses and subjects',
  alternates: {
    canonical: 'https://www.studymondo.com/topics',
  },
}

export default async function TopicsPage() {
  const courses = await prisma.course.findMany({
    include: {
      _count: {
        select: { 
          categories: true 
        }
      }
    },
    orderBy: { order: 'asc' }
  })

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">All Courses</h1>
          <p className="text-lg text-muted-foreground">
            Choose a course to explore topics, flashcards, and practice problems
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {courses.map((course) => {
            const meta = courseMeta[course.slug] ?? defaultCourseMeta
            const info = {
              icon: meta.icon,
              gradient: meta.gradient,
              description: meta.description || course.description,
            }
            
            return (
              <Link
                key={course.id}
                href={`/courses/${course.slug}`}
                className="group relative flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-8 shadow-sm transition-all hover:shadow-xl hover:scale-105 hover:border-transparent"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${info.gradient} opacity-0 transition-opacity group-hover:opacity-5`}></div>
                <div className="relative">
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${info.gradient} text-white text-3xl font-bold`}>
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {course.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {info.description}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {course._count.categories} {course._count.categories === 1 ? 'category' : 'categories'}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-semibold">
                    <span className={`bg-gradient-to-r ${info.gradient} bg-clip-text text-transparent`}>
                      Explore Course →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </div>
  )
}
