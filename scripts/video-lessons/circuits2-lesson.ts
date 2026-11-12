/**
 * The website video lesson for Circuits Part 2 (MCAT), built from the
 * SECTIONS of the YouTube videos: which section carries which checkpoint
 * question, and the worked examples' numeric answer keys. This is the
 * question → section map; `sync-circuits2.ts` writes it to the database.
 *
 * Videos 1–2 are live. A new video's section files go to
 * public/video-lessons/mcat-circ2/c0N/ (cut with _manim/tools/web_clips.py)
 * and its block is added here.
 */
import { shotList } from '../../src/data/video-shot-lists/mcat-prep/mcat-physics-electricity-kirchhoff-power-mcat'
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'
import type { LessonSpec } from './lesson-spec'

const plan = (video: number, index: number): CheckpointQuestion => {
  const q = shotList.clips[video - 1]?.checkpoint[index]
  if (!q) throw new Error(`shot list has no question ${index} for clip ${video}`)
  return q
}

export const LESSON: LessonSpec = {
  key: 'mcat-circ2',
  topicSlug: 'mcat-physics-electricity-kirchhoff-power-mcat',
  courseSlug: 'mcat-prep',
  title: "Circuits Part 2: Kirchhoff's Rules & Power",
  instructor: {
    slug: 'brendan-cusack',
    name: 'Brendan Cusack',
    headline: 'Physics & MCAT tutor',
    bio: 'Teaches MCAT physics and AP Physics in live StudyMondo classes and on the StudyMondo YouTube channel.',
    email: 'brendan@cusackprep.com',
    photoUrl: '/instructors/brendan-cusack.png',
    courses: ['mcat-prep'],
  },
  videos: [
    {
      video: 1,
      sections: [
        { id: '02-junction', title: 'The junction rule: charge is conserved', role: 'teach', questions: [plan(1, 0)] },
        { id: '03-loop-rule', title: 'The loop rule: energy is conserved', role: 'teach' },
        { id: '04-signs', title: 'Sign conventions for walking a loop', role: 'teach' },
        { id: '05-guess', title: 'Guess a direction, then trust the sign', role: 'teach', questions: [plan(1, 1)] },
        { id: '06-two-sources', title: 'Two sources in one loop', role: 'teach' },
        { id: '07-staircase', title: 'The potential staircase', role: 'teach', questions: [plan(1, 2)] },
        { id: '08-recap', title: 'Remember', role: 'teach' },
      ],
    },
    {
      video: 2,
      sections: [
        {
          id: '02-ex1-problem',
          title: 'Example 1: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              question: 'Example 1. A 30 V ideal battery drives 3 Ω, 5 Ω and 7 Ω resistors in series, in that order from its + terminal. Walk the loop with the current.',
              parts: [
                { label: 'a', prompt: 'The current the loop rule predicts', answer: 2.0, unit: 'A', expected: '2.0 A' },
                { label: 'b', prompt: 'Voltage drop across the 3 Ω resistor', answer: 6, unit: 'V', expected: '6 V' },
                { label: 'b', prompt: 'Voltage drop across the 5 Ω resistor', answer: 10, unit: 'V', expected: '10 V' },
                { label: 'b', prompt: 'Voltage drop across the 7 Ω resistor', answer: 14, unit: 'V', expected: '14 V' },
              ],
              explanation:
                '(a) Walking with the current: +30 − 3I − 5I − 7I = 0, so 30 = 15I and I = 2.0 A. (b) Each drop is IR: 2.0 A × 3 Ω = 6 V, 2.0 A × 5 Ω = 10 V, 2.0 A × 7 Ω = 14 V. The drops add back to the source: 6 + 10 + 14 = 30 V.',
            },
            {
              kind: 'numeric',
              question: 'Example 1, part (c). The battery’s − terminal is grounded (0 V). Give the potential at each point, following the current from the + terminal.',
              parts: [
                { label: 'c', prompt: 'Just past the battery’s + terminal', answer: 30, unit: 'V', expected: '30 V' },
                { label: 'c', prompt: 'After the 3 Ω resistor', answer: 24, unit: 'V', expected: '24 V' },
                { label: 'c', prompt: 'After the 5 Ω resistor', answer: 14, unit: 'V', expected: '14 V' },
                { label: 'c', prompt: 'After the 7 Ω resistor', answer: 0, unit: 'V', expected: '0 V (back at ground)' },
              ],
              explanation:
                'Start at 30 V just past the + terminal and subtract each drop: 30 − 6 = 24 V after the 3 Ω, 24 − 10 = 14 V after the 5 Ω, 14 − 14 = 0 V after the 7 Ω, right back at ground. A common trap: 10 V is the drop ACROSS the 5 Ω; the potential AFTER it is 14 V.',
            },
          ],
        },
        { id: '03-ex1-solution', title: 'Example 1: the solution', role: 'solution' },
        {
          id: '04-ex2-problem',
          title: 'Example 2: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              question: 'Example 2. A 12 V and a 4 V ideal battery sit in one loop, oriented to push current in opposite directions, with a 2 Ω and a 6 Ω resistor.',
              parts: [
                { label: 'a', prompt: 'The current in the loop', answer: 1.0, unit: 'A', expected: '1.0 A, the way the 12 V battery pushes' },
                { label: 'b', prompt: 'Voltage across the 2 Ω resistor', answer: 2, unit: 'V', expected: '2 V' },
                { label: 'b', prompt: 'Voltage across the 6 Ω resistor', answer: 6, unit: 'V', expected: '6 V' },
              ],
              explanation:
                '(a) Opposing sources subtract: the net is 12 − 4 = 8 V, pushing the way the 12 V battery does. Walking that way: +12 − 4 − 2I − 6I = 0, so 8 = 8I and I = 1.0 A, out of the 12 V battery’s + terminal and into the 4 V battery’s + terminal. The trap is adding the batteries to 16 V. (b) IR: 1.0 A × 2 Ω = 2 V and 1.0 A × 6 Ω = 6 V; together 8 V, the net source voltage.',
            },
            {
              kind: 'numeric',
              question: 'Example 2, part (c). Walk the same loop AGAINST the current. Record the potential change for each element (negative for a drop) and check that the sum closes.',
              parts: [
                { label: 'c', prompt: 'The 12 V battery, crossed + to −', answer: -12, unit: 'V', expected: '−12 V' },
                { label: 'c', prompt: 'The 6 Ω resistor, crossed against the current', answer: 6, unit: 'V', expected: '+6 V' },
                { label: 'c', prompt: 'The 2 Ω resistor, crossed against the current', answer: 2, unit: 'V', expected: '+2 V' },
                { label: 'c', prompt: 'The 4 V battery, crossed − to +', answer: 4, unit: 'V', expected: '+4 V' },
              ],
              explanation:
                'Against the current every sign flips, the batteries too: the 12 V battery crossed + to − is −12 V, the 6 Ω against the current is +6 V, the 2 Ω is +2 V, and the 4 V battery crossed − to + is +4 V. −12 + 6 + 2 + 4 = 0: the loop still closes.',
            },
          ],
        },
        { id: '05-ex2-solution', title: 'Example 2: the solution', role: 'solution' },
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(2, 0), plan(2, 1), plan(2, 2)] },
      ],
    },
  ],
}
