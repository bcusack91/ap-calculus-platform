import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { getUnlockedAlgebra2Subtopics, ALGEBRA2_SUBTOPIC_LABELS } from '@/data/competitive-questions/algebra2-bank'

/**
 * Check if user has unlocked competitive mode
 * Requirements:
 * User must have completed ANY topic with 80%+ mastery
 */
export async function GET() {
  try {
    const session = await auth()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        topicProgress: {
          include: {
            topic: { select: { slug: true, title: true } }
          }
        },
        competitiveProfile: true,
        competitiveGrantsReceived: {
          include: {
            grantedBy: { select: { name: true } },
            classroom: { select: { name: true } }
          }
        }
      }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Check for ANY completed topic with 80%+ mastery
    const completedTopics = user.topicProgress.filter(tp => 
      (tp.status === 'COMPLETED' || tp.status === 'MASTERED') &&
      (tp.masteryLevel || 0) >= 0.8
    )
    
    const completedTopicSlugsFromProgress = completedTopics.map(tp => tp.topic.slug)

    // Also check exit quiz attempts — a passed exit quiz should count as completion
    // even if the topic slug doesn't exist in the Topic table
    const passedExitQuizzes = await prisma.exitQuizAttempt.findMany({
      where: { userId: user.id, passed: true },
      select: { topicSlug: true },
      distinct: ['topicSlug']
    })
    const passedQuizSlugs = passedExitQuizzes.map(q => q.topicSlug)

    const completedTopicSlugs = [...new Set([...completedTopicSlugsFromProgress, ...passedQuizSlugs])]
    const hasCompletedAnyTopic = completedTopicSlugs.length > 0

    // Check for teacher-granted competitive access
    const teacherGrants = user.competitiveGrantsReceived || []
    const hasTeacherGrant = teacherGrants.length > 0
    // Collect all teacher-granted category slugs (null categories = all)
    const grantedCategories: Set<string> = new Set()
    let grantAllCategories = false
    for (const grant of teacherGrants) {
      if (!grant.categories) {
        grantAllCategories = true
        break
      }
      const cats = grant.categories as string[]
      cats.forEach(c => grantedCategories.add(c))
    }

    // Map completed topic slugs to competitive categories
    // A competitive category is available if the user completed at least one matching topic
    // OR if a teacher granted access to that category
    const competitiveCategories: Record<string, boolean> = {
      'the-unit-circle': grantAllCategories || grantedCategories.has('the-unit-circle') || completedTopicSlugs.includes('the-unit-circle'),
      'reflection-refraction': grantAllCategories || grantedCategories.has('reflection-refraction') || completedTopicSlugs.includes('reflection-refraction'),
      'derivatives': grantAllCategories || grantedCategories.has('derivatives') || completedTopicSlugs.some(s => 
        s.includes('derivative') || s.includes('differentiation') || s.includes('definition-of-derivative')
      ),
      'limits': grantAllCategories || grantedCategories.has('limits') || completedTopicSlugs.some(s => 
        s.includes('limit') || s.includes('continuity')
      ),
      'integrals': grantAllCategories || grantedCategories.has('integrals') || completedTopicSlugs.some(s => 
        s.includes('integral') || s.includes('antiderivative') || s.includes('integration')
      ),
      'algebra': grantAllCategories || grantedCategories.has('algebra') || completedTopicSlugs.some(s => 
        (s.includes('algebra1') || s.includes('-algebra1')) || s.includes('linear-equation') || s.includes('quadratic') || 
        s.includes('factoring') || s.includes('systems') ||
        s.includes('functions-basics')
      ),
      'algebra2': grantAllCategories || grantedCategories.has('algebra2') || completedTopicSlugs.some(s => 
        s.includes('algebra2') || s.includes('-alg2') || s.includes('polynomial-operations') || 
        s.includes('rational-operations') || s.includes('simplifying-rationals') ||
        s.includes('exponential-functions') || s.includes('complex-numbers') ||
        s.includes('logarithm')
      ),
      'sat-punctuation-commas-semicolons': grantAllCategories || grantedCategories.has('sat-punctuation-commas-semicolons') || completedTopicSlugs.some(s =>
        s.includes('sat-punctuation-commas-semicolons')
      ),
      'sat-punctuation': grantAllCategories || grantedCategories.has('sat-punctuation') || completedTopicSlugs.some(s =>
        s.includes('sat-punctuation')
      ),
      'parametric-equations': grantAllCategories || grantedCategories.has('parametric-equations') || completedTopicSlugs.some(s =>
        s.includes('parametric-equations') || s.includes('parametric-equations-precalc')
      ),
      'vectors': grantAllCategories || grantedCategories.has('vectors') || completedTopicSlugs.some(s =>
        s.includes('vectors-two-dimensions') || s.includes('vectors-in-plane') || s.includes('vector')
      ),
      'polar-coordinates': grantAllCategories || grantedCategories.has('polar-coordinates') || completedTopicSlugs.some(s =>
        s.includes('polar-coordinates') || s.includes('polar-coord')
      ),
    }

    // Compute which specific Algebra 2 subtopics are unlocked
    const unlockedAlgebra2Subtopics = getUnlockedAlgebra2Subtopics(completedTopicSlugs)
    const algebra2SubtopicDetails = unlockedAlgebra2Subtopics.map(st => ({
      key: st,
      label: ALGEBRA2_SUBTOPIC_LABELS[st]
    }))

    // Check if already unlocked
    if (user.competitiveProfile?.competitiveModeUnlocked) {
      return NextResponse.json({
        unlocked: true,
        profile: user.competitiveProfile,
        completedTopics: completedTopicSlugs,
        competitiveCategories,
        algebra2SubtopicDetails,
        teacherGranted: hasTeacherGrant
      })
    }

    const shouldUnlock = hasCompletedAnyTopic || hasTeacherGrant

    // Auto-unlock if user has completed any topic with 80%+ mastery OR has a teacher grant
    if (shouldUnlock && !user.competitiveProfile) {
      const profile = await prisma.competitiveProfile.create({
        data: {
          userId: user.id,
          competitiveModeUnlocked: true,
          unitCircleMMR: 1000,
          overallMMR: 1000
        }
      })

      return NextResponse.json({
        unlocked: true,
        justUnlocked: true,
        profile,
        completedTopics: completedTopicSlugs,
        competitiveCategories,
        algebra2SubtopicDetails,
        teacherGranted: hasTeacherGrant
      })
    }

    // Also auto-unlock if profile exists but wasn't marked unlocked
    if (shouldUnlock && user.competitiveProfile && !user.competitiveProfile.competitiveModeUnlocked) {
      const profile = await prisma.competitiveProfile.update({
        where: { userId: user.id },
        data: { competitiveModeUnlocked: true }
      })

      return NextResponse.json({
        unlocked: true,
        justUnlocked: true,
        profile,
        completedTopics: completedTopicSlugs,
        competitiveCategories,
        algebra2SubtopicDetails,
        teacherGranted: hasTeacherGrant
      })
    }

    // Not unlocked - show progress on user's best topic so far
    const bestProgress = user.topicProgress
      .sort((a, b) => (b.masteryLevel || 0) - (a.masteryLevel || 0))[0]
    
    const masteryLevel = bestProgress?.masteryLevel || 0
    const topicSlug = bestProgress?.topic.slug || ''
    const topicTitle = bestProgress?.topic.title || 'any topic'

    return NextResponse.json({
      unlocked: false,
      completedTopics: [],
      requirements: {
        message: 'Complete any topic with 80%+ mastery to unlock competitive mode, or ask your teacher for access',
        currentTopic: topicSlug,
        currentTopicTitle: topicTitle,
        masteryLevel: masteryLevel,
        masteryRequired: 0.8
      }
    })

  } catch (error) {
    console.error('Error checking competitive unlock:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
