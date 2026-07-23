import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { prisma } from '@/lib/prisma'
import {
  CRAM_PLANS,
  CRAM_PLAN_BY_SLUG,
  CRAM_PLAN_COURSE_SLUGS,
  isCramPlanCourse,
  isCramPlanSlug,
  type CramPlanSlug,
} from '@/data/cram-plans'
import { getCourseMetadata } from '@/data/course-metadata'
import { breadcrumbJsonLd } from '@/lib/jsonld'
import 'katex/dist/katex.min.css'

const planDir = path.join(process.cwd(), 'content/cram-plans')

export const revalidate = 3600

type Frontmatter = {
  title?: string
  description?: string
  date?: string
  examDate?: string
  topics?: string[]
}

function getPlanFile(courseSlug: string, planSlug: string) {
  const filePath = path.join(planDir, courseSlug, `${planSlug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const parsed = matter(fileContent)
  return { data: parsed.data as Frontmatter, content: parsed.content, filePath }
}

export async function generateStaticParams() {
  const params: { slug: string; plan: string }[] = []
  for (const course of CRAM_PLAN_COURSE_SLUGS) {
    for (const plan of CRAM_PLANS) {
      const file = getPlanFile(course, plan.slug)
      if (file) params.push({ slug: course, plan: plan.slug })
    }
  }
  return params
}

interface PageProps {
  params: Promise<{ slug: string; plan: string }>
}

async function getCourseName(slug: string): Promise<string | null> {
  try {
    const course = await prisma.course.findUnique({
      where: { slug },
      select: { name: true },
    })
    return course?.name ?? null
  } catch {
    return null
  }
}

function fallbackCourseName(slug: string): string {
  // "ap-calculus-ab" -> "AP Calculus AB"
  return slug
    .split('-')
    .map((part) => {
      if (part === 'ap') return 'AP'
      if (part === 'em') return 'E&M'
      if (/^[a-z]$/.test(part)) return part.toUpperCase()
      if (part.length <= 2) return part.toUpperCase()
      return part.charAt(0).toUpperCase() + part.slice(1)
    })
    .join(' ')
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug, plan } = await props.params
  if (!isCramPlanCourse(slug) || !isCramPlanSlug(plan)) return {}

  const planConfig = CRAM_PLAN_BY_SLUG[plan]
  const file = getPlanFile(slug, plan)
  if (!file) return {}

  const courseName = (await getCourseName(slug)) ?? fallbackCourseName(slug)
  const title = file.data.title ?? `${courseName} ${planConfig.titleSuffix}`
  const description = file.data.description ?? planConfig.descriptionFragment.replace('the AP exam', courseName)
  const url = `https://www.studymondo.com/courses/${slug}/cram/${plan}`

  return {
    title: `${title} | Study Mondo`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      siteName: 'Study Mondo',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function CramPlanPage(props: PageProps) {
  const { slug, plan } = await props.params

  if (!isCramPlanCourse(slug) || !isCramPlanSlug(plan)) {
    notFound()
  }

  const planConfig = CRAM_PLAN_BY_SLUG[plan as CramPlanSlug]
  const file = getPlanFile(slug, plan)
  if (!file) notFound()

  const courseName = (await getCourseName(slug)) ?? fallbackCourseName(slug)
  const meta = getCourseMetadata(slug)
  const title = file.data.title ?? `${courseName} ${planConfig.titleSuffix}`
  const description =
    file.data.description ?? planConfig.descriptionFragment.replace('the AP exam', courseName)
  const slugUrl = `https://www.studymondo.com/courses/${slug}/cram/${plan}`

  let MdxContent: React.ComponentType
  try {
    const mod = await import(`@/../content/cram-plans/${slug}/${plan}.mdx`)
    MdxContent = mod.default
  } catch {
    notFound()
  }

  const otherPlans = CRAM_PLANS.filter((p) => p.slug !== plan)

  return (
    <div className="container py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Home', url: 'https://www.studymondo.com' },
              { name: 'Courses', url: 'https://www.studymondo.com/courses' },
              { name: courseName, url: `https://www.studymondo.com/courses/${slug}` },
              { name: planConfig.titleSuffix, url: slugUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description,
            url: slugUrl,
            datePublished: file.data.date ?? '2025-01-01',
            dateModified: file.data.date ?? '2025-01-01',
            author: { '@type': 'Organization', name: 'Study Mondo Team' },
            publisher: {
              '@type': 'EducationalOrganization',
              name: 'Study Mondo',
              url: 'https://www.studymondo.com',
            },
            about: courseName,
            keywords: [courseName, 'AP Exam', planConfig.titleSuffix].join(', '),
          }),
        }}
      />

      <div className="mx-auto max-w-3xl">
        <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          <Link href={`/courses/${slug}`} className="hover:text-accent transition-colors">
            ← Back to {courseName}
          </Link>
        </nav>

        <header
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${meta.gradient} text-white p-8 md:p-10 mb-8 shadow-lg`}
        >
          <div className="text-5xl mb-3">{planConfig.icon}</div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{title}</h1>
          <p className="text-base md:text-lg text-white/90 mb-4">{planConfig.tagline}</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 backdrop-blur-sm">
              ⏱️ {planConfig.estimate}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 backdrop-blur-sm">
              {meta.icon} {courseName}
            </span>
          </div>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-a:text-accent dark:prose-a:text-accent-muted prose-a:no-underline hover:prose-a:underline">
          <MdxContent />
        </article>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Link
            href={`/courses/${slug}`}
            className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 hover:shadow-md transition-shadow"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-accent dark:text-accent-muted mb-1">
              Start studying
            </div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {courseName} topics &amp; practice →
            </div>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Free interactive lessons, flashcards, and worked examples.
            </p>
          </Link>
          <Link
            href={`/courses/${slug}#diagnostic`}
            className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 hover:shadow-md transition-shadow"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-accent dark:text-accent-muted mb-1">
              Find weak spots
            </div>
            <div className="font-semibold text-gray-900 dark:text-white">
              Take the {courseName} diagnostic →
            </div>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              ~10 minutes. Get a personalized study plan.
            </p>
          </Link>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Other {courseName} study plans
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {otherPlans.map((p) => {
              const exists = !!getPlanFile(slug, p.slug)
              if (!exists) return null
              return (
                <Link
                  key={p.slug}
                  href={`/courses/${slug}/cram/${p.slug}`}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hover:border-accent-muted dark:hover:border-accent transition-colors"
                >
                  <span className="text-2xl">{p.icon}</span>
                  <span>
                    <span className="block font-semibold text-gray-900 dark:text-white">
                      {p.titleSuffix}
                    </span>
                    <span className="block text-sm text-gray-600 dark:text-gray-400">
                      {p.tagline}
                    </span>
                  </span>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
