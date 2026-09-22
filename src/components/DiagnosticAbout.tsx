import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { faqJsonLd } from '@/lib/jsonld'
import { DIAGNOSTIC_ABOUT } from '@/lib/diagnostic-about'

/**
 * Server-rendered "about this diagnostic" section for the diagnostic routes.
 *
 * Those pages are entirely 'use client', so the only crawlable copy was the
 * ~150-word shell — thin enough that Google leaves most of them out of the
 * index while they still rank 8-10 for "<course> diagnostic test". This adds
 * the real substance a student (and a crawler) wants before starting: which
 * units are on it, what the result gives you, and where to go next.
 *
 * The unit list comes from the course's own categories, so every page differs.
 * A database hiccup degrades to the static copy rather than failing the route.
 */
export default async function DiagnosticAbout({ slug }: { slug: string }) {
  const config = DIAGNOSTIC_ABOUT[slug]
  if (!config) return null

  const courses = await prisma.course
    .findMany({
      where: { slug: { in: config.courseSlugs } },
      select: {
        name: true,
        slug: true,
        description: true,
        categories: {
          orderBy: { order: 'asc' },
          select: { name: true, slug: true, _count: { select: { topics: true } } },
        },
      },
    })
    .catch(() => [])

  if (courses.length === 0) return null

  // Keep the configured order, so a multi-course diagnostic lists OChem 1 before 2.
  const ordered = config.courseSlugs
    .map((slug) => courses.find((c) => c.slug === slug))
    .filter((c): c is (typeof courses)[number] => Boolean(c))
  const name = config.displayName ?? ordered[0].name
  // A description only describes one course, so skip it when several are covered.
  const description = ordered.length === 1 ? ordered[0].description : null
  const units = ordered.flatMap((c) => c.categories.filter((cat) => cat._count.topics > 0))
  const topicCount = units.reduce((sum, u) => sum + u._count.topics, 0)

  const faqs = [
    {
      question: `What does the ${name} diagnostic cover?`,
      answer: units.length
        ? `It draws on all ${units.length} units of ${name}: ${units.map((u) => u.name).join(', ')}.`
        : `It covers the full ${name} course.`,
    },
    {
      question: `Is the ${name} diagnostic free?`,
      answer: 'Yes. The diagnostic and your results are free to use.',
    },
    {
      question: 'What happens after I finish?',
      answer:
        'Your results break the score down by unit, so you can see which ones cost you the most points, and you can start a study plan built from that result.',
    },
  ]

  if (config.rotatesForms) {
    faqs.push({
      question: 'Can I take it more than once?',
      answer:
        'Yes. Each attempt draws from a different form, so a retake is new questions rather than the ones you just saw.',
    })
  }

  return (
    <section className="container pb-16" aria-labelledby="diagnostic-about-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <div className="mx-auto max-w-3xl">
        <h2 id="diagnostic-about-heading" className="text-2xl font-bold text-foreground mb-3">
          About the {name} diagnostic
        </h2>
        {description && (
          <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
        )}
        <p className="text-muted-foreground leading-relaxed mb-8">
          This diagnostic is a starting point rather than a practice exam: it samples the whole
          syllabus so you can see which units you already know and which ones need the work, before
          you spend study time guessing.
        </p>

        {units.length > 0 && (
          <>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Units on this diagnostic
            </h3>
            <p className="text-muted-foreground mb-4">
              Questions are drawn from all {units.length} units of {name}, covering{' '}
              {topicCount} topics in total.
            </p>
            <ul className="mb-8 grid gap-2 sm:grid-cols-2">
              {units.map((unit) => (
                <li key={unit.slug}>
                  <Link
                    href={`/categories/${unit.slug}`}
                    className="text-accent hover:underline font-medium"
                  >
                    {unit.name}
                  </Link>
                  <span className="text-muted-foreground text-sm"> · {unit._count.topics} topics</span>
                </li>
              ))}
            </ul>
          </>
        )}

        <h3 className="text-xl font-bold text-foreground mb-3">How to use your results</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          The score report is broken down by unit. Start with the unit you scored lowest on rather
          than the one you enjoy most, work through its lessons and exit quiz, then come back and
          take the diagnostic again to confirm the gain is real.
        </p>

        <h3 className="text-xl font-bold text-foreground mb-3">Common questions</h3>
        <dl className="mb-8 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="font-semibold text-foreground">{faq.question}</dt>
              <dd className="text-muted-foreground leading-relaxed">{faq.answer}</dd>
            </div>
          ))}
        </dl>

        <h3 className="text-xl font-bold text-foreground mb-3">More {name} practice</h3>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {ordered.map((course) => (
            <li key={course.slug}>
              <Link href={`/courses/${course.slug}`} className="text-accent hover:underline font-medium">
                {course.name} course
              </Link>
            </li>
          ))}
          {config.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-accent hover:underline font-medium">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
