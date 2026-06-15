import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

/**
 * Persist a completed MCAT full-length practice exam so a weak result feeds the
 * adaptive study plan — the full-length analogue of /api/mcat-diagnostic/submit.
 *
 * It writes a DiagnosticTest row with a DISTINCT category, 'mcat-full-length',
 * so it never collides with the live diagnostic (category 'mcat-full-diagnostic'):
 *   - plan-status / history / score-predictor / analytics all query the exact
 *     string 'mcat-full-diagnostic', so they ignore these rows entirely;
 *   - the MCAT adopt route's adaptive layer uses startsWith('mcat-full-diagnostic'),
 *     and 'mcat-full-length' does NOT start with that prefix, so the diagnostic's
 *     plan personalization is untouched. (See adaptive-study-plan edit, which adds
 *     a SEPARATE startsWith('mcat-full-length') pass that merges these recs in.)
 *
 * The stored results.recommendedTopics is the {slug,name,priority}[] shape the
 * adaptive layer (parseRecommendedTopics) already validates, produced client-side
 * by recommendFromFullLength — so no extra mapping is needed server-side.
 */

type IncomingTopic = { slug: string; name?: string; priority?: string }
type StoredTopic = { slug: string; name: string; priority: 'high' | 'medium' }
type IncomingSection = { section?: string; short?: string; correct?: number; total?: number; scaled?: number }
type StoredSection = { section: string; short: string; correct: number; total: number; scaled: number }

function num(v: unknown): number {
  return typeof v === 'number' && Number.isFinite(v) ? v : 0
}

function sanitizeTopics(raw: unknown): StoredTopic[] {
  if (!Array.isArray(raw)) return []
  const out: StoredTopic[] = []
  const seen = new Set<string>()
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue
    const t = item as IncomingTopic
    const slug = typeof t.slug === 'string' ? t.slug.trim() : ''
    if (!slug || seen.has(slug)) continue
    seen.add(slug)
    const name = typeof t.name === 'string' && t.name.trim() ? t.name : slug
    const priority: 'high' | 'medium' = t.priority === 'high' ? 'high' : 'medium'
    out.push({ slug, name, priority })
  }
  return out
}

function sanitizeSections(raw: unknown): StoredSection[] {
  if (!Array.isArray(raw)) return []
  const out: StoredSection[] = []
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue
    const s = item as IncomingSection
    const section = typeof s.section === 'string' ? s.section : ''
    if (!section) continue
    out.push({
      section,
      short: typeof s.short === 'string' ? s.short : section,
      correct: num(s.correct),
      total: num(s.total),
      scaled: num(s.scaled),
    })
  }
  return out
}

function sanitizeWeakAreas(raw: unknown): string[] {
  if (!Array.isArray(raw)) return []
  return raw.filter((w): w is string => typeof w === 'string' && w.trim().length > 0)
}

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    let body: unknown
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
    }
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Missing body' }, { status: 400 })
    }

    const {
      form,
      total,
      percentileLabel,
      sections,
      recommendedTopics,
      weakAreas,
    } = body as {
      form?: unknown
      total?: unknown
      percentileLabel?: unknown
      sections?: unknown
      recommendedTopics?: unknown
      weakAreas?: unknown
    }

    const cleanTopics = sanitizeTopics(recommendedTopics)
    const cleanSections = sanitizeSections(sections)
    const cleanWeakAreas = sanitizeWeakAreas(weakAreas)

    // Require at least something scorable so we don't write empty rows that
    // would dilute the adaptive plan.
    if (cleanSections.length === 0 && cleanTopics.length === 0) {
      return NextResponse.json({ error: 'No scorable results' }, { status: 400 })
    }

    const results: Prisma.InputJsonValue = {
      form: typeof form === 'number' ? form : null,
      total: num(total),
      percentileLabel: typeof percentileLabel === 'string' ? percentileLabel : null,
      sections: cleanSections,
      // {slug,name,priority}[] — the exact shape adaptive-study-plan consumes.
      recommendedTopics: cleanTopics,
    }

    const record = await prisma.diagnosticTest.create({
      data: {
        userId: session.user.id,
        // DISTINCT from the diagnostic's 'mcat-full-diagnostic' on purpose.
        category: 'mcat-full-length',
        results,
        weakAreas: cleanWeakAreas.length > 0 ? cleanWeakAreas : Prisma.JsonNull,
        strengths: null,
      },
    })

    return NextResponse.json({ success: true, id: record.id })
  } catch (error) {
    console.error('MCAT full-length submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
