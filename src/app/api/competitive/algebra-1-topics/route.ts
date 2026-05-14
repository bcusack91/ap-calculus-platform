import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { isCompetitiveFullUnlock } from "@/lib/admin-unlock"

// Curated list of topics that currently have a 30-question competitive bank.
const SUPPORTED_TOPIC_SLUGS = new Set<string>([
  'solving-linear-equations-algebra1',
  'graphing-linear-equations-algebra1',
  'linear-inequalities-algebra1',
  'solving-systems-algebra1',
  'exponent-rules-algebra1',
  'factoring-algebra1',
  'multiplying-polynomials-algebra1',
  'solving-quadratics-algebra1',
  'functions-basics-algebra1',
  'slope-intercept-form-algebra1',
  // Batch 2
  'absolute-value-algebra1',
  'word-problems-linear-algebra1',
  'compound-absolute-value-inequalities-alg1',
  'graphing-systems-algebra1',
  'exponential-growth-decay-alg1',
  'polynomial-operations-algebra1',
  'simplifying-radicals-alg1',
  'quadratic-formula-detailed-algebra1',
  'completing-the-square',
  'graphing-quadratics-algebra1',
  // Batch 3
  'domain-range-algebra1',
  'domain-and-range',
  'arithmetic-geometric-sequences-alg1',
  'ratios-rates-algebra1',
  'proportions-algebra1',
  'percent-problems-algebra1',
  'radical-operations-algebra1',
  'simplifying-radicals-algebra1',
  'linear-regression-correlation-alg1',
  'mean-median-mode-algebra1',
  'box-plots',
  'outliers-in-data',
])

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.email) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const isAdmin = isCompetitiveFullUnlock(session.user.email)

    const user = await prisma.user.findUnique({ where: { email: session.user.email }, select: { id: true } })
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    const course = await prisma.course.findUnique({
      where: { slug: 'algebra-1' },
      include: {
        categories: {
          orderBy: { order: 'asc' },
          include: { topics: { where: { parentTopicId: null }, orderBy: { order: 'asc' }, select: { id: true, slug: true, title: true, order: true } } },
        },
      },
    })
    if (!course) return NextResponse.json({ error: 'Algebra 1 course not found' }, { status: 404 })

    const topicIds = course.categories.flatMap(c => c.topics.map(t => t.id))
    const progress = await prisma.topicProgress.findMany({ where: { userId: user.id, topicId: { in: topicIds } }, select: { topicId: true, status: true, masteryLevel: true } })
    const topicSlugs = course.categories.flatMap(c => c.topics.map(t => t.slug))
    const passedQuizzes = await prisma.exitQuizAttempt.findMany({ where: { userId: user.id, passed: true, topicSlug: { in: topicSlugs } }, select: { topicSlug: true }, distinct: ['topicSlug'] })
    const passedQuizSlugs = new Set(passedQuizzes.map(q => q.topicSlug))
    const progressMap = new Map(progress.map(p => [p.topicId, p]))

    const units = course.categories
      .map((cat, idx) => ({
        unitNumber: idx + 1,
        name: cat.name,
        slug: cat.slug,
        topics: cat.topics
          .filter(t => SUPPORTED_TOPIC_SLUGS.has(t.slug))
          .map(t => {
            const tp = progressMap.get(t.id)
            const completedViaProgress = (tp?.status === 'COMPLETED' || tp?.status === 'MASTERED') && (tp?.masteryLevel ?? 0) >= 0.8
            const completedViaQuiz = passedQuizSlugs.has(t.slug)
            return { id: t.id, slug: t.slug, title: t.title, completed: isAdmin || completedViaProgress || completedViaQuiz, masteryLevel: tp?.masteryLevel ?? 0, status: tp?.status ?? 'NOT_STARTED' }
          }),
      }))
      .filter(u => u.topics.length > 0)

    const totalTopics = units.reduce((s, u) => s + u.topics.length, 0)
    const completedCount = units.reduce((s, u) => s + u.topics.filter(t => t.completed).length, 0)

    return NextResponse.json({ units, totalTopics, completedCount, hasAnyCompleted: isAdmin || completedCount > 0 })
  } catch (error) {
    console.error('Error fetching Algebra 1 topics:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
