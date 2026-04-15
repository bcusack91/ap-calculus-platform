import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

const VALID_CATEGORIES = new Set([
  'ap-calculus-ab', 'ap-calculus-bc', 'ap-chemistry', 'ap-biology',
  'ap-psychology', 'ap-physics1', 'ap-physics2', 'ap-physics-c-mech',
  'ap-physics-c-em', 'ap-statistics', 'ap-precalculus',
  'sat-math', 'sat-reading', 'sat-punctuation', 'sat-punctuation-commas-semicolons',
  'act-math', 'act-science',
  'algebra', 'algebra2', 'geometry', 'precalc', 'ochem',
  'derivatives', 'limits', 'integrals', 'the-unit-circle',
  'reflection-refraction', 'parametric-equations', 'vectors', 'polar-coordinates',
  // Also accept subject IDs used in ChallengeAFriend component
  'algebra-1', 'ap-physics-1', 'pre-calculus',
])

// Map ChallengeAFriend subject IDs to competitive category slugs
const SUBJECT_TO_CATEGORY: Record<string, string> = {
  'algebra-1': 'algebra',
  'ap-physics-1': 'ap-physics1',
  'pre-calculus': 'precalc',
}

/**
 * POST /api/competitive/accept-challenge
 * When a student accepts a challenge from another student,
 * permanently unlock that competitive category for them.
 */
export async function POST(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { subject } = await request.json()

    if (!subject || typeof subject !== 'string') {
      return NextResponse.json({ error: 'Subject is required' }, { status: 400 })
    }

    if (!VALID_CATEGORIES.has(subject)) {
      return NextResponse.json({ error: 'Invalid subject' }, { status: 400 })
    }

    // Normalize subject to competitive category slug
    const category = SUBJECT_TO_CATEGORY[subject] || subject

    // Ensure user has a CompetitiveProfile and unlock competitive mode
    const profile = await prisma.competitiveProfile.upsert({
      where: { userId: session.user.id },
      update: { competitiveModeUnlocked: true },
      create: {
        userId: session.user.id,
        competitiveModeUnlocked: true,
        unitCircleMMR: 1000,
        overallMMR: 1000,
      }
    })

    // Create a competitive grant to permanently unlock this category
    // Use a self-grant approach (challengerGrant)
    // We reuse CompetitiveGrant with grantedById = the user themselves + a special marker
    await prisma.competitiveGrant.upsert({
      where: {
        studentId_grantedById: {
          studentId: session.user.id,
          grantedById: session.user.id,
        }
      },
      update: {
        // Merge new category into existing categories
        categories: await (async () => {
          const existing = await prisma.competitiveGrant.findUnique({
            where: {
              studentId_grantedById: {
                studentId: session.user.id,
                grantedById: session.user.id,
              }
            },
            select: { categories: true }
          })
          const existingCats = (existing?.categories as string[] | null) || []
          const merged = [...new Set([...existingCats, category])]
          return merged
        })()
      },
      create: {
        studentId: session.user.id,
        grantedById: session.user.id,
        categories: [category],
      }
    })

    return NextResponse.json({
      success: true,
      unlockedCategory: category,
      profile,
    })
  } catch (error) {
    console.error('Error accepting challenge:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
