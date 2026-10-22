/**
 * The exam-aware AP next step (Phase 3 W4): one mode for the results screen,
 * the course hub and the dashboard.
 *
 *   exam-week  1..21 days before the course's exam
 *   confirm-5  estimated 5 (or range low ≥ 4.5), exam more than 21 days out
 *   plan       otherwise, including no date and after the exam
 */
import { describe, it, expect } from 'vitest'
import {
  AP_CONFIRM_5_LOW,
  AP_EXAM_WEEK_DAYS,
  AP_NEXT_STEP_CTA_TYPE,
  apExamCountdownLabel,
  apExamWeekLinks,
  apNextStepMode,
  apNextStepModeForDays,
} from '@/lib/ap-next-step'
import { AP_EXAM_DATES, apExamDate, daysUntilApExam } from '@/lib/ap-exam-dates'
import { AP_FOLLOWUP_EXAM_WEEK_DAYS } from '@/lib/ap-diagnostic-followup'
import { AP_DIAGNOSTIC_COURSES } from '@/lib/ap-diagnostic-courses'
import { apPracticeForms } from '@/lib/ap-practice-exams'

// AP Chemistry sits Thu 2027-05-06 (noon UTC is the countdown anchor).
const CHEM_EXAM = apExamDate('ap-chemistry')!
const daysBefore = (d: number) => new Date(CHEM_EXAM.getTime() - d * 86_400_000)

const three = { estimatedScore: 3, scoreRange: { low: 2, high: 4 } }
const five = { estimatedScore: 5, scoreRange: { low: 4, high: 5 } }

describe('apNextStepModeForDays: the boundaries', () => {
  it('is exam-week from 1 to AP_EXAM_WEEK_DAYS days out, plan at 0 and below, and plan again past the window for a 3', () => {
    expect(AP_EXAM_WEEK_DAYS).toBe(21)
    expect(apNextStepModeForDays(1, three).mode).toBe('exam-week')
    expect(apNextStepModeForDays(21, three).mode).toBe('exam-week')
    expect(apNextStepModeForDays(22, three).mode).toBe('plan')
    expect(apNextStepModeForDays(0, three).mode).toBe('plan')
    expect(apNextStepModeForDays(-30, three).mode).toBe('plan')
    expect(apNextStepModeForDays(0, three).reason).toMatch(/passed/)
    // A 5 inside the window still crams: the exam is the deadline.
    expect(apNextStepModeForDays(5, five).mode).toBe('exam-week')
    expect(apNextStepModeForDays(21, five).mode).toBe('exam-week')
  })

  it('is confirm-5 for an estimated 5, or a range whose low end is ≥ 4.5, only when the exam is more than 21 days out', () => {
    expect(AP_CONFIRM_5_LOW).toBe(4.5)
    expect(apNextStepModeForDays(22, five).mode).toBe('confirm-5')
    expect(apNextStepModeForDays(200, five).mode).toBe('confirm-5')
    expect(apNextStepModeForDays(200, { estimatedScore: 5 }).mode).toBe('confirm-5')
    expect(apNextStepModeForDays(200, { estimatedScore: 4, scoreRange: { low: 4.5, high: 5 } }).mode).toBe('confirm-5')
    expect(apNextStepModeForDays(200, { estimatedScore: 4, scoreRange: { low: 4.4, high: 5 } }).mode).toBe('plan')
    expect(apNextStepModeForDays(200, { estimatedScore: 4, scoreRange: { low: 4, high: 5 } }).mode).toBe('plan')
    expect(apNextStepModeForDays(200, three).mode).toBe('plan')
    expect(apNextStepModeForDays(200, { estimatedScore: null }).mode).toBe('plan')
    // After the exam a 5 does not get "confirm it": the date is stale until the next cycle.
    expect(apNextStepModeForDays(-1, five).mode).toBe('plan')
  })

  it('is plan with a reason when the course has no date', () => {
    const d = apNextStepModeForDays(null, five)
    expect(d).toEqual({ mode: 'plan', reason: 'No exam date for this course.', daysToExam: null })
    expect(apNextStepModeForDays(undefined, five).mode).toBe('plan')
    expect(apNextStepModeForDays(Number.NaN, five).mode).toBe('plan')
  })
})

describe('apNextStepMode: from a course and a clock', () => {
  it('reads the course date (slug or config object) and reports the day count it used', () => {
    const d = apNextStepMode('ap-chemistry', three, daysBefore(5))
    expect(d.mode).toBe('exam-week')
    expect(d.daysToExam).toBe(5)
    expect(apNextStepMode(AP_DIAGNOSTIC_COURSES['ap-chemistry'], three, daysBefore(5)).mode).toBe('exam-week')
    // The evening before reads as 1 (daysUntilApExam rounds up).
    expect(apNextStepMode('ap-chemistry', three, new Date('2027-05-05T22:00:00Z'))).toMatchObject({ mode: 'exam-week', daysToExam: 1 })
    // The afternoon of exam day: 0 → plan.
    expect(apNextStepMode('ap-chemistry', five, new Date('2027-05-06T15:00:00Z'))).toMatchObject({ mode: 'plan', daysToExam: 0 })
    // 21 days out at the same hour is still exam-week; 22 is not.
    expect(apNextStepMode('ap-chemistry', three, daysBefore(21)).mode).toBe('exam-week')
    expect(apNextStepMode('ap-chemistry', three, daysBefore(22)).mode).toBe('plan')
    expect(apNextStepMode('ap-chemistry', five, daysBefore(22)).mode).toBe('confirm-5')
    // Autumn (today): a 5 confirms, a 3 plans.
    const fall = new Date('2026-10-21T12:00:00Z')
    expect(apNextStepMode('ap-chemistry', five, fall).mode).toBe('confirm-5')
    expect(apNextStepMode('ap-chemistry', three, fall).mode).toBe('plan')
    // After May 2027, until the table is bumped: plan.
    expect(apNextStepMode('ap-chemistry', five, new Date('2027-06-01T12:00:00Z')).mode).toBe('plan')
    // A non-AP course has no date.
    expect(apNextStepMode('sat-prep', five, fall)).toMatchObject({ mode: 'plan', daysToExam: null })
  })

  it('uses the same window as the follow-up email and every AP diagnostic course has a date', () => {
    expect(AP_EXAM_WEEK_DAYS).toBe(AP_FOLLOWUP_EXAM_WEEK_DAYS)
    for (const slug of Object.keys(AP_DIAGNOSTIC_COURSES)) {
      expect(AP_EXAM_DATES[slug], slug).toMatch(/^2027-05-/)
      expect(daysUntilApExam(slug, new Date('2027-04-20T12:00:00Z')), slug).toBeGreaterThan(0)
    }
  })
})

describe('surfaces: chip label, cta types, cram links', () => {
  it('labels the countdown only while the exam is ahead', () => {
    expect(apExamCountdownLabel(5)).toBe('Exam in 5 days')
    expect(apExamCountdownLabel(1)).toBe('Exam in 1 day')
    expect(apExamCountdownLabel(0)).toBeNull()
    expect(apExamCountdownLabel(-3)).toBeNull()
    expect(apExamCountdownLabel(null)).toBeNull()
    expect(apExamCountdownLabel(undefined)).toBeNull()
  })

  it('names one cta_type per mode', () => {
    expect(AP_NEXT_STEP_CTA_TYPE).toEqual({ plan: 'next_step', 'exam-week': 'exam_week_flashcards', 'confirm-5': 'confirm_5_practice_exam' })
  })

  it('builds the three cram links for every AP diagnostic course, from the existing practice-exam and mistake-log routes', () => {
    for (const c of Object.values(AP_DIAGNOSTIC_COURSES)) {
      const links = apExamWeekLinks(c.courseSlug, c.key)
      expect(links, c.courseSlug).not.toBeNull()
      expect(links!.flashcards).toBe(`/flashcards?course=${c.courseSlug}`)
      expect(links!.mistakes).toBe(`/${c.courseSlug}/mistakes`)
      // The practice path is a registered exam page (with its forms).
      const key = links!.practice.replace(/^\//, '').replace(/-practice$/, '')
      expect(apPracticeForms(key).length, `${c.courseSlug} → ${links!.practice}`).toBeGreaterThanOrEqual(1)
    }
    expect(apExamWeekLinks('ap-chemistry', 'ap-chem')).toEqual({ flashcards: '/flashcards?course=ap-chemistry', practice: '/ap-chem-practice', mistakes: '/ap-chemistry/mistakes' })
    expect(apExamWeekLinks('ap-calculus-ab', 'calcab')!.practice).toBe('/ap-calcab-practice')
    expect(apExamWeekLinks('sat-prep', 'sat')).toBeNull()
    expect(apExamWeekLinks(null, 'ap-chem')).toBeNull()
  })
})
