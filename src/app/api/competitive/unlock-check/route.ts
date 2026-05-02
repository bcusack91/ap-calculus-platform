import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { getUnlockedAlgebra2Subtopics, ALGEBRA2_SUBTOPIC_LABELS, type Algebra2Subtopic } from '@/data/competitive-questions/algebra2-bank'

/**
 * Admin accounts get every competitive category and subtopic unlocked
 * automatically. Students must still earn unlocks normally.
 */
const ADMIN_FULL_UNLOCK_EMAILS = new Set<string>(['brendan@cusackprep.com'])

/**
 * Check if user has unlocked competitive mode
 * Requirements (any ONE of the following):
 * - Complete any topic with 60%+ mastery (interactive lessons)
 * - Score 70%+ on any entrance/exit quiz
 * - Score 60%+ on any diagnostic test
 * - Receive a teacher grant
 * - Accept a challenge from another student
 */
export async function GET() {
  try {
    const session = await auth()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const isAdminFullUnlock = ADMIN_FULL_UNLOCK_EMAILS.has(session.user.email.toLowerCase())

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

    // Check for ANY topic with meaningful progress (any non-zero mastery or started status)
    // This is intentionally lenient — if a student has started any lesson, they can try competitive mode
    const completedTopics = user.topicProgress.filter(tp => 
      (tp.status === 'COMPLETED' || tp.status === 'MASTERED') ||
      (tp.masteryLevel || 0) >= 0.6
    )

    // Also consider any topic the user has at least started (mastery > 0 or IN_PROGRESS)
    const startedTopics = user.topicProgress.filter(tp =>
      tp.status === 'IN_PROGRESS' || (tp.masteryLevel || 0) > 0
    )
    
    const completedTopicSlugsFromProgress = completedTopics.map(tp => tp.topic.slug)

    // Also check exit quiz attempts — a passed exit quiz (70%+) should count as completion
    // even if the topic slug doesn't exist in the Topic table
    const passedExitQuizzes = await prisma.exitQuizAttempt.findMany({
      where: { userId: user.id, passed: true },
      select: { topicSlug: true },
      distinct: ['topicSlug']
    })
    const passedQuizSlugs = passedExitQuizzes.map(q => q.topicSlug)

    // Check diagnostic tests — 60%+ score on any diagnostic test unlocks competitive mode
    const diagnosticTests = await prisma.diagnosticTest.findMany({
      where: { userId: user.id },
      select: { category: true, results: true }
    })
    const passedDiagnosticSlugs: string[] = []
    for (const dt of diagnosticTests) {
      const results = dt.results as Record<string, unknown> | null
      if (!results) continue
      const percentage = typeof results.percentage === 'number' ? results.percentage : 0
      const totalCorrect = typeof results.totalCorrect === 'number' ? results.totalCorrect : 0
      const totalQuestions = typeof results.totalQuestions === 'number' ? results.totalQuestions : 0
      const scoreFromTotals = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0
      const effectiveScore = percentage || scoreFromTotals
      if (effectiveScore >= 60) {
        // Map diagnostic category to competitive category
        const cat = dt.category.toLowerCase()
        if (cat.includes('algebra2')) passedDiagnosticSlugs.push('algebra2')
        else if (cat.includes('algebra1') || cat.includes('algebra-1')) passedDiagnosticSlugs.push('algebra')
        else if (cat.includes('geometry')) passedDiagnosticSlugs.push('geometry')
        else if (cat.includes('ap-physics-2') || cat.includes('ap-physics2')) passedDiagnosticSlugs.push('ap-physics2')
        else if (cat.includes('ap-physics-c-mech')) passedDiagnosticSlugs.push('ap-physics-c-mech')
        else if (cat.includes('ap-physics-c-em')) passedDiagnosticSlugs.push('ap-physics-c-em')
        else if (cat.includes('ap-physics') || cat.includes('physics1')) passedDiagnosticSlugs.push('ap-physics1')
        else if (cat.includes('ap-bio')) passedDiagnosticSlugs.push('ap-biology')
        else if (cat.includes('ap-chem')) passedDiagnosticSlugs.push('ap-chemistry')
        else if (cat.includes('ap-psych')) passedDiagnosticSlugs.push('ap-psychology')
        else if (cat.includes('ap-stat')) passedDiagnosticSlugs.push('ap-statistics')
        else if (cat.includes('ap-precalc')) passedDiagnosticSlugs.push('ap-precalculus')
        else if (cat.includes('ap-calculus-bc') || cat.includes('calculus-bc')) passedDiagnosticSlugs.push('ap-calculus-bc')
        else if (cat.includes('ap-calculus') || cat.includes('calculus-ab')) passedDiagnosticSlugs.push('ap-calculus-ab')
        else if (cat.includes('precalc')) passedDiagnosticSlugs.push('precalc')
        else if (cat.includes('ochem') || cat.includes('organic')) passedDiagnosticSlugs.push('ochem')
        else if (cat.includes('sat-math')) passedDiagnosticSlugs.push('sat-math')
        else if (cat.includes('sat-reading') || cat.includes('sat-writing')) passedDiagnosticSlugs.push('sat-reading')
        else if (cat.includes('sat-punctuation')) passedDiagnosticSlugs.push('sat-punctuation')
        else if (cat.includes('act-math')) passedDiagnosticSlugs.push('act-math')
        else if (cat.includes('act-science')) passedDiagnosticSlugs.push('act-science')
        else if (cat.includes('grade8') || cat.includes('grade-8')) passedDiagnosticSlugs.push('algebra')
      }
    }
    const uniqueDiagnosticSlugs = [...new Set(passedDiagnosticSlugs)]

    const completedTopicSlugs = [...new Set([...completedTopicSlugsFromProgress, ...passedQuizSlugs])]
    // Include started topics in the slug list for category matching
    const startedTopicSlugs = startedTopics.map(tp => tp.topic.slug)
    const allProgressSlugs = [...new Set([...completedTopicSlugs, ...startedTopicSlugs])]
    const _hasCompletedAnyTopic = completedTopicSlugs.length > 0 || uniqueDiagnosticSlugs.length > 0
    // Unlock if user has ANY progress at all (completed, started, quiz, or diagnostic)
    const hasAnyProgress = allProgressSlugs.length > 0 || uniqueDiagnosticSlugs.length > 0

    // Check for teacher-granted competitive access
    const teacherGrants = user.competitiveGrantsReceived || []
    const hasTeacherGrant = teacherGrants.length > 0
    // Collect all teacher-granted category slugs (null categories = all)
    const grantedCategories: Set<string> = new Set()
    let grantAllCategories = isAdminFullUnlock
    for (const grant of teacherGrants) {
      if (!grant.categories) {
        grantAllCategories = true
        break
      }
      const cats = grant.categories as string[]
      cats.forEach(c => grantedCategories.add(c))
    }

    // Map topic slugs to competitive categories
    // A competitive category is available if the user has progress in at least one matching topic
    // OR if a teacher granted access to that category
    // OR if the user scored 60%+ on a matching diagnostic test
    const competitiveCategories: Record<string, boolean> = {
      'the-unit-circle': grantAllCategories || grantedCategories.has('the-unit-circle') || allProgressSlugs.includes('the-unit-circle') || uniqueDiagnosticSlugs.includes('the-unit-circle'),
      'reflection-refraction': grantAllCategories || grantedCategories.has('reflection-refraction') || allProgressSlugs.includes('reflection-refraction') || uniqueDiagnosticSlugs.includes('reflection-refraction'),
      'derivatives': grantAllCategories || grantedCategories.has('derivatives') || uniqueDiagnosticSlugs.includes('derivatives') || allProgressSlugs.some(s => 
        s.includes('derivative') || s.includes('differentiation') || s.includes('definition-of-derivative')
      ),
      'limits': grantAllCategories || grantedCategories.has('limits') || uniqueDiagnosticSlugs.includes('limits') || allProgressSlugs.some(s => 
        s.includes('limit') || s.includes('continuity')
      ),
      'integrals': grantAllCategories || grantedCategories.has('integrals') || uniqueDiagnosticSlugs.includes('integrals') || allProgressSlugs.some(s => 
        s.includes('integral') || s.includes('antiderivative') || s.includes('integration')
      ),
      'algebra': grantAllCategories || grantedCategories.has('algebra') || uniqueDiagnosticSlugs.includes('algebra') || allProgressSlugs.some(s => 
        (s.includes('algebra1') || s.includes('-algebra1')) || s.includes('linear-equation') || s.includes('quadratic') || 
        s.includes('factoring') || s.includes('systems') ||
        s.includes('functions-basics')
      ),
      'algebra2': grantAllCategories || grantedCategories.has('algebra2') || uniqueDiagnosticSlugs.includes('algebra2') || allProgressSlugs.some(s => 
        s.includes('algebra2') || s.includes('-alg2') || s.includes('polynomial-operations') || 
        s.includes('rational-operations') || s.includes('simplifying-rationals') ||
        s.includes('exponential-functions') || s.includes('complex-numbers') ||
        s.includes('logarithm')
      ),
      'sat-punctuation-commas-semicolons': grantAllCategories || grantedCategories.has('sat-punctuation-commas-semicolons') || allProgressSlugs.some(s =>
        s.includes('sat-punctuation-commas-semicolons')
      ),
      'sat-punctuation': grantAllCategories || grantedCategories.has('sat-punctuation') || uniqueDiagnosticSlugs.includes('sat-punctuation') || allProgressSlugs.some(s =>
        s.includes('sat-punctuation')
      ),
      'parametric-equations': grantAllCategories || grantedCategories.has('parametric-equations') || allProgressSlugs.some(s =>
        s.includes('parametric-equations') || s.includes('parametric-equations-precalc')
      ),
      'vectors': grantAllCategories || grantedCategories.has('vectors') || allProgressSlugs.some(s =>
        s.includes('vectors-two-dimensions') || s.includes('vectors-in-plane') || s.includes('vector')
      ),
      'polar-coordinates': grantAllCategories || grantedCategories.has('polar-coordinates') || allProgressSlugs.some(s =>
        s.includes('polar-coordinates') || s.includes('polar-coord')
      ),
      'ap-biology': grantAllCategories || grantedCategories.has('ap-biology') || uniqueDiagnosticSlugs.includes('ap-biology') || allProgressSlugs.some(s =>
        s.includes('ap-biology') || s.includes('apbio') || s.includes('cell-biology') || s.includes('genetics')
      ),
      'ap-chemistry': grantAllCategories || grantedCategories.has('ap-chemistry') || uniqueDiagnosticSlugs.includes('ap-chemistry') || allProgressSlugs.some(s =>
        s.includes('ap-chemistry') || s.includes('apchem') || s.includes('stoichiometry') || s.includes('thermochemistry')
      ),
      'ap-psychology': grantAllCategories || grantedCategories.has('ap-psychology') || uniqueDiagnosticSlugs.includes('ap-psychology') || allProgressSlugs.some(s =>
        s.includes('ap-psychology') || s.includes('appsych') || s.includes('psychology')
      ),
      'ap-statistics': grantAllCategories || grantedCategories.has('ap-statistics') || uniqueDiagnosticSlugs.includes('ap-statistics') || allProgressSlugs.some(s =>
        s.includes('ap-statistics') || s.includes('apstats') || s.includes('statistics')
      ),
      'ap-physics1': grantAllCategories || grantedCategories.has('ap-physics1') || uniqueDiagnosticSlugs.includes('ap-physics1') || allProgressSlugs.some(s =>
        s.includes('ap-physics') || s.includes('physics1') || s.includes('kinematics') || s.includes('newtons-laws')
      ),
      'sat-math': grantAllCategories || grantedCategories.has('sat-math') || uniqueDiagnosticSlugs.includes('sat-math') || allProgressSlugs.some(s =>
        s.includes('sat-math') || s.includes('sat-algebra') || s.includes('sat-problem-solving')
      ),
      'sat-reading': grantAllCategories || grantedCategories.has('sat-reading') || uniqueDiagnosticSlugs.includes('sat-reading') || allProgressSlugs.some(s =>
        s.includes('sat-reading') || s.includes('sat-writing') || s.includes('sat-evidence')
      ),
      'act-math': grantAllCategories || grantedCategories.has('act-math') || uniqueDiagnosticSlugs.includes('act-math') || allProgressSlugs.some(s =>
        s.includes('act-math') || s.includes('act-algebra') || s.includes('act-geometry')
      ),
      'act-science': grantAllCategories || grantedCategories.has('act-science') || uniqueDiagnosticSlugs.includes('act-science') || allProgressSlugs.some(s =>
        s.includes('act-science') || s.includes('act-data') || s.includes('act-research')
      ),
      'ochem': grantAllCategories || grantedCategories.has('ochem') || uniqueDiagnosticSlugs.includes('ochem') || allProgressSlugs.some(s =>
        s.includes('organic-chemistry') || s.includes('ochem') || s.includes('nomenclature')
      ),
      'precalc': grantAllCategories || grantedCategories.has('precalc') || uniqueDiagnosticSlugs.includes('precalc') || allProgressSlugs.some(s =>
        s.includes('precalc') || s.includes('pre-calculus') || s.includes('trigonometric-functions')
      ),
      'geometry': grantAllCategories || grantedCategories.has('geometry') || uniqueDiagnosticSlugs.includes('geometry') || allProgressSlugs.some(s =>
        s.includes('geometry') || s.includes('triangles') || s.includes('circles-geometry') || s.includes('congruence')
      ),
      'ap-physics2': grantAllCategories || grantedCategories.has('ap-physics2') || uniqueDiagnosticSlugs.includes('ap-physics2') || allProgressSlugs.some(s =>
        s.includes('ap-physics-2') || s.includes('physics2') || s.includes('electrostatics') || s.includes('magnetism')
      ),
      'ap-calculus-ab': grantAllCategories || grantedCategories.has('ap-calculus-ab') || uniqueDiagnosticSlugs.includes('ap-calculus-ab') || allProgressSlugs.some(s =>
        s.includes('ap-calculus-ab') || s.includes('calculus-ab') || s.includes('derivative') || s.includes('integral')
      ),
      'ap-calculus-bc': grantAllCategories || grantedCategories.has('ap-calculus-bc') || uniqueDiagnosticSlugs.includes('ap-calculus-bc') || allProgressSlugs.some(s =>
        s.includes('ap-calculus-bc') || s.includes('calculus-bc') || s.includes('series') || s.includes('taylor')
      ),
      'ap-physics-c-mech': grantAllCategories || grantedCategories.has('ap-physics-c-mech') || uniqueDiagnosticSlugs.includes('ap-physics-c-mech') || allProgressSlugs.some(s =>
        s.includes('ap-physics-c-mech') || s.includes('physics-c-mechanics') || s.includes('rotational-dynamics')
      ),
      'ap-physics-c-em': grantAllCategories || grantedCategories.has('ap-physics-c-em') || uniqueDiagnosticSlugs.includes('ap-physics-c-em') || allProgressSlugs.some(s =>
        s.includes('ap-physics-c-em') || s.includes('physics-c-em') || s.includes('gauss-law') || s.includes('ampere')
      ),
      'ap-precalculus': grantAllCategories || grantedCategories.has('ap-precalculus') || uniqueDiagnosticSlugs.includes('ap-precalculus') || allProgressSlugs.some(s =>
        s.includes('ap-precalculus') || s.includes('ap-precalc') || s.includes('polynomial-functions') || s.includes('rational-functions')
      ),
      'ap-human-geo': grantAllCategories || grantedCategories.has('ap-human-geo') || uniqueDiagnosticSlugs.includes('ap-human-geography') || allProgressSlugs.some(s =>
        s.includes('ap-human-geo') || s.includes('human-geography') || s.includes('population-distribution')
      ),
      'ap-us-gov': grantAllCategories || grantedCategories.has('ap-us-gov') || uniqueDiagnosticSlugs.includes('ap-us-government') || allProgressSlugs.some(s =>
        s.includes('ap-us-gov') || s.includes('us-government') || s.includes('constitutional-foundations')
      ),
      'ap-world-history': grantAllCategories || grantedCategories.has('ap-world-history') || uniqueDiagnosticSlugs.includes('ap-world-history') || allProgressSlugs.some(s =>
        s.includes('ap-world-history') || s.includes('world-history') || s.includes('global-tapestry')
      ),
      'ap-us-history': grantAllCategories || grantedCategories.has('ap-us-history') || uniqueDiagnosticSlugs.includes('ap-us-history') || allProgressSlugs.some(s =>
        s.includes('ap-us-history') || s.includes('us-history') || s.includes('colonial-america')
      ),
      'ap-macro': grantAllCategories || grantedCategories.has('ap-macro') || uniqueDiagnosticSlugs.includes('ap-macroeconomics') || allProgressSlugs.some(s =>
        s.includes('ap-macro') || s.includes('macroeconomics') || s.includes('gdp-growth')
      ),
      'ap-micro': grantAllCategories || grantedCategories.has('ap-micro') || uniqueDiagnosticSlugs.includes('ap-microeconomics') || allProgressSlugs.some(s =>
        s.includes('ap-micro') || s.includes('microeconomics') || s.includes('supply-demand')
      ),
      'ap-african-american-studies': grantAllCategories || grantedCategories.has('ap-african-american-studies') || uniqueDiagnosticSlugs.includes('ap-african-american-studies') || allProgressSlugs.some(s =>
        s.includes('ap-african-american') || s.includes('african-american-studies')
      ),
      'ap-english-lit': grantAllCategories || grantedCategories.has('ap-english-lit') || uniqueDiagnosticSlugs.includes('ap-english-literature') || allProgressSlugs.some(s =>
        s.includes('ap-english-lit') || s.includes('english-literature') || s.includes('figurative-language')
      ),
      'ap-english-lang': grantAllCategories || grantedCategories.has('ap-english-lang') || uniqueDiagnosticSlugs.includes('ap-english-language') || allProgressSlugs.some(s =>
        s.includes('ap-english-lang') || s.includes('english-language') || s.includes('rhetorical-analysis')
      ),
      'ap-enviro': grantAllCategories || grantedCategories.has('ap-enviro') || uniqueDiagnosticSlugs.includes('ap-environmental-science') || allProgressSlugs.some(s =>
        s.includes('ap-enviro') || s.includes('environmental-science') || s.includes('ecosystems')
      ),
      'ap-csa': grantAllCategories || grantedCategories.has('ap-csa') || uniqueDiagnosticSlugs.includes('ap-computer-science-a') || allProgressSlugs.some(s =>
        s.includes('ap-csa') || s.includes('computer-science-a') || s.includes('classes-objects')
      ),
      'ap-csp': grantAllCategories || grantedCategories.has('ap-csp') || uniqueDiagnosticSlugs.includes('ap-computer-science-principles') || allProgressSlugs.some(s =>
        s.includes('ap-csp') || s.includes('computer-science-principles') || s.includes('digital-information')
      ),
    }

    // Compute which specific Algebra 2 subtopics are unlocked
    const unlockedAlgebra2Subtopics = isAdminFullUnlock
      ? (Object.keys(ALGEBRA2_SUBTOPIC_LABELS) as Algebra2Subtopic[])
      : getUnlockedAlgebra2Subtopics(allProgressSlugs)
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

    const shouldUnlock = hasAnyProgress || hasTeacherGrant || isAdminFullUnlock

    // Auto-unlock if user has any topic progress OR has a teacher grant
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

    // Include debug info: all topic progress so we can diagnose unlock issues
    const allProgress = user.topicProgress.map(tp => ({
      slug: tp.topic.slug,
      status: tp.status,
      mastery: tp.masteryLevel,
    }))

    return NextResponse.json({
      unlocked: false,
      completedTopics: [],
      debug: {
        totalTopicProgress: user.topicProgress.length,
        allProgress,
        completedTopicSlugs,
        startedTopicSlugs,
        hasAnyProgress,
      },
      requirements: {
        message: 'Start any interactive lesson to unlock competitive mode. You can also ask your teacher for access or accept a challenge from a friend!',
        currentTopic: topicSlug,
        currentTopicTitle: topicTitle,
        masteryLevel: masteryLevel,
        masteryRequired: 0.6
      }
    })

  } catch (error) {
    console.error('Error checking competitive unlock:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
