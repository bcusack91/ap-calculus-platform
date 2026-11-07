/**
 * The website video lesson for Circuits Part 1 (MCAT), built from the
 * SECTIONS of the YouTube videos: which section carries which checkpoint
 * question, and the worked examples' numeric answer keys. This is the
 * question → section map; `sync-circuits1.ts` writes it to the database.
 *
 * Videos 1–2 (Current) are live first; add videos 3–8 here as their section
 * files reach public/video-lessons/mcat-circ1/c0N/.
 */
import { shotList } from '../../src/data/video-shot-lists/mcat-prep/mcat-physics-electricity-dc-circuits-mcat'
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'

export type SectionSpec = {
  id: string
  title: string
  role: 'teach' | 'problem' | 'solution'
  questions?: CheckpointQuestion[]
}
export type VideoSpec = { video: number; sections: SectionSpec[] }

const plan = (video: number, index: number): CheckpointQuestion => {
  const q = shotList.clips[video - 1]?.checkpoint[index]
  if (!q) throw new Error(`shot list has no question ${index} for clip ${video}`)
  return q
}

export const LESSON = {
  key: 'mcat-circ1',
  topicSlug: 'mcat-physics-electricity-dc-circuits-mcat',
  courseSlug: 'mcat-prep',
  title: 'Circuits Part 1: Current & Resistance',
  instructor: {
    slug: 'brendan-cusack',
    name: 'Brendan Cusack',
    headline: 'Physics & MCAT tutor',
    bio: 'Teaches MCAT physics and AP Physics in live StudyMondo classes and on the StudyMondo YouTube channel.',
    email: 'brendan@cusackprep.com',
    courses: ['mcat-prep'],
  },
  videos: [
    {
      video: 1,
      sections: [
        { id: '02-charge', title: 'Charge comes in packets', role: 'teach' },
        { id: '03-rate', title: 'Current is a rate', role: 'teach' },
        { id: '04-rearrange', title: 'Rearranging I = ΔQ/Δt', role: 'teach' },
        { id: '05-direction', title: 'Which way current points', role: 'teach' },
        { id: '06-same-current', title: 'Same current, opposite carriers', role: 'teach' },
        { id: '07-instant', title: 'Why a lamp lights instantly', role: 'teach', questions: [plan(1, 2)] },
        { id: '08-electrolytes', title: 'Ions carry current too', role: 'teach', questions: [plan(1, 0)] },
        { id: '09-heating', title: 'Heating: metals vs solutions', role: 'teach', questions: [plan(1, 1)] },
        { id: '10-compare', title: 'Metal vs electrolyte', role: 'teach' },
        { id: '11-recap', title: 'Remember', role: 'teach' },
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
              question: 'Example 1. A wire carries a steady 3.2 mA. (e = 1.6 × 10⁻¹⁹ C)',
              parts: [
                { label: 'a', prompt: 'How much charge passes a point in 5.0 s?', answer: 1.6e-2, unit: 'C', expected: '1.6 × 10⁻² C' },
                { label: 'b', prompt: 'How many electrons is that?', answer: 1.0e17, unit: 'electrons', expected: '1.0 × 10¹⁷ electrons' },
              ],
              explanation:
                'Convert first: 3.2 mA = 3.2 × 10⁻³ A. (a) ΔQ = IΔt = (3.2 × 10⁻³ A)(5.0 s) = 1.6 × 10⁻² C. (b) N = ΔQ/e = 1.6 × 10⁻² / 1.6 × 10⁻¹⁹ = 1.0 × 10¹⁷ electrons. The last line is a count, not coulombs.',
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
              question: 'Example 2. One open K⁺ channel passes 2 pA for 1 ms. (e = 1.6 × 10⁻¹⁹ C)',
              parts: [
                { label: 'a', prompt: 'How many K⁺ ions cross?', answer: 12500, unit: 'ions', expected: 'about 12,500 K⁺ ions' },
                { label: 'b', prompt: 'If the same current were carried by Ca²⁺, how many ions would cross?', answer: 6250, unit: 'ions', expected: 'about 6,250 Ca²⁺ ions' },
              ],
              explanation:
                'ΔQ = IΔt = (2 × 10⁻¹² A)(1 × 10⁻³ s) = 2 × 10⁻¹⁵ C. (a) Each K⁺ carries e, so N = 2 × 10⁻¹⁵ / 1.6 × 10⁻¹⁹ ≈ 12,500 ions. (b) Each Ca²⁺ carries 2e, so divide by 3.2 × 10⁻¹⁹: about 6,250 ions, half as many. Divide by the charge on ONE carrier, not automatically by e.',
            },
          ],
        },
        { id: '05-ex2-solution', title: 'Example 2: the solution', role: 'solution' },
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(2, 0), plan(2, 1), plan(2, 2)] },
      ],
    },
  ] as VideoSpec[],
}
