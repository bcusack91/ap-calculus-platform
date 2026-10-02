/**
 * MCAT topics in the competitive lobby picker (bug report 2026-10-01).
 *
 * Hosting a lobby and choosing "MCAT Prep" showed "No topics available for
 * this course yet": the course-topics API looked MCAT up as a DB Course, and
 * there is none — MCAT play runs on the MCAT bank. These tests pin that the
 * API now returns the bank's hierarchy (whole exam, the 4 sections, every
 * area and subtopic), that every slug it offers is one the match engine
 * resolves, and that MCAT slugs get readable labels in lobby listings.
 */
import { describe, it, expect, vi } from 'vitest'
import { NextRequest } from 'next/server'
import { MCAT_SECTIONS, isMcatSlug } from '@/data/competitive-questions/mcat-bank'
import { topicSlugLabel } from '@/components/CompetitiveTopicPicker'

vi.mock('@/lib/auth', () => ({ auth: async () => ({ user: { id: 'u1' } }) }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    // MCAT must never reach the DB lookup; returning null would reproduce the bug.
    course: { findUnique: vi.fn(async () => null) },
    topicProgress: { findMany: vi.fn(async () => []) },
  },
}))

type Unit = { name: string; slug: string; topics: { slug: string; title: string; completed: boolean }[] }

async function fetchMcat(): Promise<{ status: number; units: Unit[] }> {
  const { GET } = await import('@/app/api/competitive/course-topics/route')
  const res = await GET(new NextRequest('http://localhost/api/competitive/course-topics?course=mcat'))
  const body = await res.json()
  return { status: res.status, units: body.units ?? [] }
}

describe('course-topics API for MCAT', () => {
  it('returns the MCAT hierarchy instead of an empty list', async () => {
    const { status, units } = await fetchMcat()
    expect(status).toBe(200)
    const areaCount = MCAT_SECTIONS.reduce((n, s) => n + s.areas.length, 0)
    expect(units).toHaveLength(1 + areaCount)
  })

  it('offers the full exam and all four sections first', async () => {
    const { units } = await fetchMcat()
    expect(units[0].topics.map((t) => t.slug)).toEqual(['mcat', ...MCAT_SECTIONS.map((s) => s.slug)])
  })

  it('offers every area and every subtopic, each resolvable by the match engine', async () => {
    const { units } = await fetchMcat()
    const offered = units.flatMap((u) => u.topics.map((t) => t.slug))
    for (const s of MCAT_SECTIONS) {
      for (const a of s.areas) {
        expect(offered).toContain(a.slug)
        for (const t of a.subtopics) expect(offered).toContain(t.slug)
      }
    }
    for (const slug of offered) expect(isMcatSlug(slug), slug).toBe(true)
    expect(new Set(offered).size).toBe(offered.length)
  })

  it('marks every topic selectable (the rematch picker hides incomplete ones)', async () => {
    const { units } = await fetchMcat()
    expect(units.every((u) => u.topics.every((t) => t.completed))).toBe(true)
  })
})

describe('MCAT topic labels', () => {
  it('reads cleanly for the exam, sections, areas and subtopics', () => {
    expect(topicSlugLabel('mcat')).toBe('MCAT (Full Exam)')
    expect(topicSlugLabel('mcat-section-chem-phys')).toBe('MCAT Chem Phys')
    expect(topicSlugLabel('mcat-area-biochemistry')).toBe('MCAT Biochemistry')
    expect(topicSlugLabel('mcat-general-chemistry-kinetics-mcat')).toBe('MCAT General Chemistry Kinetics')
  })
})
