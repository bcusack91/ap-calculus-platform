import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { mapToACTScore } from '@/lib/score-predictor-utils'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const userId = session.user.id

    const [exitQuizAttempts, topicProgress, diagnosticTests] = await Promise.all([
      prisma.exitQuizAttempt.findMany({
        where: { userId },
        orderBy: { completedAt: 'asc' },
        select: { topicSlug: true, score: true, totalQuestions: true, passed: true, completedAt: true },
      }),
      prisma.topicProgress.findMany({
        where: { userId, topic: { category: { course: { slug: 'act-prep' } } } },
        select: { status: true },
      }),
      prisma.diagnosticTest.findMany({
        where: { userId, category: 'act-diagnostic' },
        orderBy: { createdAt: 'asc' },
        select: { results: true, createdAt: true },
      }),
    ])

    // Filter ACT quizzes
    const actQuizzes = exitQuizAttempts.filter(a => a.topicSlug.includes('act'))
    const quizzesAttempted = actQuizzes.length
    const quizPassRate = quizzesAttempted > 0
      ? Math.round((actQuizzes.filter(a => a.passed).length / quizzesAttempted) * 100) : 0

    // Section breakdowns by slug keywords
    const sectionDefs = [
      { name: 'English', keys: ['english', 'grammar', 'rhetoric'] },
      { name: 'Math', keys: ['math', 'algebra', 'geometry', 'trig'] },
      { name: 'Reading', keys: ['reading', 'prose', 'passage'] },
      { name: 'Science', keys: ['science', 'data', 'research', 'viewpoint'] },
    ]

    const sectionStyles = [
      { color: 'blue', bgLight: 'bg-blue-50 dark:bg-blue-900/20', textColor: 'text-blue-700 dark:text-blue-300' },
      { color: 'purple', bgLight: 'bg-purple-50 dark:bg-purple-900/20', textColor: 'text-purple-700 dark:text-purple-300' },
      { color: 'amber', bgLight: 'bg-amber-50 dark:bg-amber-900/20', textColor: 'text-amber-700 dark:text-amber-300' },
      { color: 'green', bgLight: 'bg-green-50 dark:bg-green-900/20', textColor: 'text-green-700 dark:text-green-300' },
    ]

    const sections = sectionDefs.map((def, i) => {
      const qs = actQuizzes.filter(a => def.keys.some(k => a.topicSlug.includes(k)))
      const avgPct = qs.length > 0
        ? Math.round((qs.reduce((s, a) => s + a.score / a.totalQuestions, 0) / qs.length) * 100)
        : 50
      return {
        name: def.name,
        score: mapToACTScore(avgPct / 100),
        maxScore: 36,
        avgPct,
        quizCount: qs.length,
        ...sectionStyles[i],
      }
    })

    const composite = Math.round(sections.reduce((s, sec) => s + sec.score, 0) / 4)

    const totalTopics = topicProgress.length
    const masteredTopics = topicProgress.filter(tp => tp.status === 'MASTERED').length
    const masteryRate = totalTopics > 0 ? Math.round((masteredTopics / totalTopics) * 100) : 0

    const recentQuizzes = actQuizzes.slice(-10)
    const recentAvg = recentQuizzes.length > 0
      ? Math.round((recentQuizzes.reduce((s, a) => s + a.score / a.totalQuestions, 0) / recentQuizzes.length) * 100)
      : 0

    // Trend from diagnostics
    const trend: { date: string; score: number; source: string }[] = []
    for (const d of diagnosticTests) {
      try {
        const parsed = d.results as Record<string, unknown>
        if (parsed.estimatedScore) {
          trend.push({ date: (d.createdAt as Date).toISOString(), score: parsed.estimatedScore as number, source: 'diagnostic' })
        }
      } catch {}
    }

    const confidence: 'high' | 'medium' | 'low' =
      quizzesAttempted >= 10 ? 'high' : quizzesAttempted >= 3 ? 'medium' : 'low'

    return NextResponse.json({
      prediction: { primaryScore: composite, maxScore: 36, confidence, sections },
      stats: { totalTopics, masteredTopics, masteryRate, quizzesAttempted, quizPassRate, recentAvg },
      trend,
    })
  } catch (error) {
    console.error('ACT score predictor error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
