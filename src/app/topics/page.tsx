import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { AdBanner } from '@/components/ad-banner'
import type { Metadata } from 'next'

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

  // Course metadata for display
  const courseInfo: Record<string, { icon: string; gradient: string; description: string }> = {
    'ap-calculus-ab': {
      icon: '∫',
      gradient: 'from-purple-600 to-violet-600',
      description: 'Limits, derivatives, integrals, and applications'
    },
    'ap-calculus-bc': {
      icon: '∬',
      gradient: 'from-violet-600 to-purple-600',
      description: 'Series, parametric, polar, and advanced integration'
    },
    'ap-precalculus': {
      icon: '📐',
      gradient: 'from-blue-600 to-cyan-600',
      description: 'Functions, trigonometry, vectors, and complex numbers'
    },
    'ap-physics-1': {
      icon: '⚛️',
      gradient: 'from-green-600 to-emerald-600',
      description: 'Mechanics, waves, and basic circuits'
    },
    'ap-physics-2': {
      icon: '🔬',
      gradient: 'from-teal-600 to-cyan-600',
      description: 'Fluids, thermodynamics, E&M, and modern physics'
    },
    'ap-physics-c-mechanics': {
      icon: '🎯',
      gradient: 'from-indigo-600 to-purple-600',
      description: 'Calculus-based mechanics and kinematics'
    },
    'ap-physics-c-em': {
      icon: '⚡',
      gradient: 'from-violet-600 to-fuchsia-600',
      description: 'Electricity, magnetism, and electromagnetic induction'
    },
    'ap-chemistry': {
      icon: '🧪',
      gradient: 'from-orange-600 to-red-600',
      description: 'Atomic structure, bonding, reactions, and equilibrium'
    },
    'ap-biology': {
      icon: '🧬',
      gradient: 'from-rose-600 to-pink-600',
      description: 'Cells, genetics, evolution, and ecology'
    },
    'ap-psychology': {
      icon: '🧠',
      gradient: 'from-amber-600 to-orange-600',
      description: 'Behavior, cognition, development, and disorders'
    },
    'organic-chemistry': {
      icon: '⚗️',
      gradient: 'from-lime-600 to-green-600',
      description: 'Structure, reactions, synthesis, and spectroscopy'
    },
    'sat-prep': {
      icon: '📝',
      gradient: 'from-blue-600 to-indigo-600',
      description: 'Math, reading, writing, and test strategies for the SAT'
    },
    'act-prep': {
      icon: '📋',
      gradient: 'from-red-600 to-rose-600',
      description: 'English, math, reading, science, and test strategies for the ACT'
    },
    'mcat-prep': {
      icon: '🏥',
      gradient: 'from-emerald-600 to-teal-600',
      description: 'Chem/Phys, CARS, Bio/Biochem, and Psych/Soc for the MCAT'
    }
  }

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">All Courses</h1>
          <p className="text-lg text-muted-foreground">
            Choose a course to explore topics, flashcards, and practice problems
          </p>
        </div>

        <AdBanner slot="topics-top" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {courses.map((course) => {
            const info = courseInfo[course.slug] || { 
              icon: '📚', 
              gradient: 'from-gray-600 to-gray-800',
              description: course.description 
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
                  <p className="text-xs text-gray-500 dark:text-gray-500">
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

        <div className="mt-12">
          <AdBanner slot="topics-bottom" />
        </div>
      </div>
    </div>
  )
}
