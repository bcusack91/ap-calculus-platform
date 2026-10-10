import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { recordQuestions } from '@/lib/study-tracking'
import { mcatFullLengthQuestionRows, mcatFullLengthRows } from '@/lib/question-activity-rows'
import { scoreMCAT } from '@/lib/mcat-scoring'
import { recommendFromFullLength } from '@/lib/mcat-fulllength-recs'
import {
  buildFullLengthItems,
  fullLengthForm,
  fullLengthPositionalAnswers,
  fullLengthRawBySection,
  sanitizeFullLengthAnswers,
  type FullLengthItem,
} from '@/lib/question-sources/mcat'

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
 * adaptive layer (parseRecommendedTopics) already validates (recommendFromFullLength).
 *
 * Per-question answers (current runner): the client sends `answers` keyed by
 * fullLengthQuestionId, per-question `flags`, `passageFlags` and
 * `passageSeconds`. The server then rebuilds the form, grades every question
 * itself and rescores with scoreMCAT — the client's section tallies, total
 * and recommendations are ignored — stores the answers in results (for the
 * review page) and writes one FULL_LENGTH row per question. An older client
 * that sends only section tallies keeps the old behavior (tallies stored as
 * sent, one batch row per section).
 */

type IncomingTopic = { slug: string; name?: string; priority?: string }
type StoredTopic = { slug: string; name: string; priority: 'high' | 'medium' }
type IncomingSection = { section?: string; short?: string; correct?: number; total?: number; scaled?: number; elapsedSeconds?: number }
// elapsedSeconds is ADDITIVE (sectioned full-lengths only): seconds actually
// spent inside that section's own clock. Older/flat submissions omit it.
type StoredSection = { section: string; short: string; correct: number; total: number; scaled: number; elapsedSeconds?: number }

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
    const clean: StoredSection = {
      section,
      short: typeof s.short === 'string' ? s.short : section,
      correct: num(s.correct),
      total: num(s.total),
      scaled: num(s.scaled),
    }
    // Only persist per-section timing when the client actually measured it.
    if (typeof s.elapsedSeconds === 'number' && Number.isFinite(s.elapsedSeconds)) {
      clean.elapsedSeconds = Math.max(0, Math.round(s.elapsedSeconds))
    }
    out.push(clean)
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
      answers,
      flags,
      passageFlags,
      passageSeconds,
    } = body as {
      form?: unknown
      total?: unknown
      percentileLabel?: unknown
      sections?: unknown
      recommendedTopics?: unknown
      weakAreas?: unknown
      answers?: unknown
      flags?: unknown
      passageFlags?: unknown
      passageSeconds?: unknown
    }

    let cleanTopics = sanitizeTopics(recommendedTopics)
    let cleanSections = sanitizeSections(sections)
    let cleanWeakAreas = sanitizeWeakAreas(weakAreas)
    let cleanTotal = num(total)
    let cleanPercentileLabel = typeof percentileLabel === 'string' ? percentileLabel : null

    // Server grading from per-question answers, when the client sent them for a known form.
    const fl = answers && typeof answers === 'object' && !Array.isArray(answers) ? fullLengthForm(form) : null
    let graded: { items: FullLengthItem[]; stored: ReturnType<typeof sanitizeFullLengthAnswers> } | null = null
    if (fl) {
      const stored = sanitizeFullLengthAnswers(fl, { answers, flags, passageFlags, passageSeconds })
      const items = buildFullLengthItems(fl, stored)
      const report = scoreMCAT(fullLengthRawBySection(items))
      const elapsed = new Map(cleanSections.map((s) => [s.section, s.elapsedSeconds]))
      cleanSections = report.sections.map((s) => {
        const out: StoredSection = { section: s.section, short: s.short, correct: s.correct, total: s.total, scaled: s.scaled }
        const e = elapsed.get(s.section)
        if (typeof e === 'number') out.elapsedSeconds = e
        return out
      })
      cleanTotal = report.total
      cleanPercentileLabel = report.percentileLabel
      cleanTopics = sanitizeTopics(recommendFromFullLength(fl.passages, fullLengthPositionalAnswers(fl, stored.answers)))
      cleanWeakAreas = report.sections.filter((s) => s.total > 0 && s.correct / s.total < 0.5).map((s) => s.short)
      graded = { items, stored }
    }

    // Require at least something scorable so we don't write empty rows that
    // would dilute the adaptive plan.
    if (cleanSections.length === 0 && cleanTopics.length === 0) {
      return NextResponse.json({ error: 'No scorable results' }, { status: 400 })
    }

    const results: Prisma.InputJsonValue = {
      form: typeof form === 'number' ? form : null,
      total: cleanTotal,
      percentileLabel: cleanPercentileLabel,
      sections: cleanSections,
      // {slug,name,priority}[] — the exact shape adaptive-study-plan consumes.
      recommendedTopics: cleanTopics,
      // Per-question record for the review page (see question-sources/mcat).
      ...(graded
        ? {
            answers: graded.stored.answers,
            flags: graded.stored.flags,
            passageFlags: graded.stored.passageFlags,
            passageSeconds: graded.stored.passageSeconds,
          }
        : {}),
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

    // Teacher report + answer log: one FULL_LENGTH row per question when the
    // exam was graded here (per-section totals equal the old batch rows),
    // else one batch row per section from the submitted tallies.
    await recordQuestions(
      session.user.id,
      graded ? mcatFullLengthQuestionRows(graded.items, { attemptId: record.id }) : mcatFullLengthRows(results),
    )

    return NextResponse.json({
      success: true,
      id: record.id,
      attemptId: record.id,
      ...(graded ? { total: cleanTotal, sections: cleanSections } : {}),
    })
  } catch (error) {
    console.error('MCAT full-length submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
