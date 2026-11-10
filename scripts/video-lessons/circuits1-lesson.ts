/**
 * The website video lesson for Circuits Part 1 (MCAT), built from the
 * SECTIONS of the YouTube videos: which section carries which checkpoint
 * question, and the worked examples' numeric answer keys. This is the
 * question → section map; `sync-circuits1.ts` writes it to the database.
 *
 * Videos 1–4 are live; add videos 5–8 here as their section files reach
 * public/video-lessons/mcat-circ1/c0N/.
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
    /** Illustrated (cel-shaded) version of the owner's photo on the brand gradient; see memory video-pipeline/avatar/. */
    photoUrl: '/instructors/brendan-cusack.png',
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
    {
      video: 3,
      sections: [
        { id: '02-energy-per-charge', title: 'Voltage is energy per charge', role: 'teach' },
        { id: '03-signs', title: 'Both charges lose energy', role: 'teach', questions: [plan(3, 0)] },
        { id: '04-electron-volt', title: 'The electron-volt', role: 'teach' },
        { id: '05-ground', title: 'Ground: only differences matter', role: 'teach' },
        { id: '06-water-analogy', title: 'The water analogy', role: 'teach' },
        { id: '07-analogy-breaks', title: 'Where the analogy breaks', role: 'teach', questions: [plan(3, 2)] },
        { id: '08-open-switch', title: 'The open switch', role: 'teach', questions: [plan(3, 1)] },
        { id: '09-recap', title: 'Remember', role: 'teach' },
      ],
    },
    {
      video: 4,
      sections: [
        {
          id: '02-ex1-problem',
          title: 'Example 1: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              question: 'Example 1. A 9.0 V battery delivers 0.50 A to a small pump for 1.0 minute. (e = 1.6 × 10⁻¹⁹ C)',
              parts: [
                { label: 'a', prompt: 'How much charge flows?', answer: 30, unit: 'C', expected: '30 C' },
                { label: 'b', prompt: 'How many electrons is that?', answer: 1.875e20, unit: 'electrons', expected: 'about 1.9 × 10²⁰ electrons' },
                { label: 'c', prompt: 'How much energy does the battery deliver?', answer: 270, unit: 'J', expected: '270 J' },
                { label: 'd', prompt: 'How much energy does each electron carry, in electron-volts?', answer: 9, unit: 'eV', expected: '9.0 eV (about 1.4 × 10⁻¹⁸ J)' },
              ],
              explanation:
                'Time in seconds first: 1.0 min = 60 s. (a) ΔQ = IΔt = (0.50 A)(60 s) = 30 C. (b) N = ΔQ/e = 30 / 1.6 × 10⁻¹⁹ ≈ 1.9 × 10²⁰ electrons. (c) W = qV = (30 C)(9.0 V) = 270 J. IV = 4.5 is power in watts, not energy; energy needs the time. (d) Each electron crosses 9.0 V, so it carries 9.0 eV ≈ 1.4 × 10⁻¹⁸ J. Check: (1.9 × 10²⁰)(1.4 × 10⁻¹⁸ J) ≈ 270 J.',
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
              question:
                'Example 2. A Ca²⁺ ion crosses a cell membrane from outside (0 V) to inside (−70 mV). Find its change in electric potential energy, ΔU. Keep the sign: a negative ΔU means the ion loses potential energy. (e = 1.6 × 10⁻¹⁹ C)',
              parts: [
                { label: 'a', prompt: 'ΔU in electron-volts', answer: -0.14, unit: 'eV', expected: '−0.14 eV (it loses energy)' },
                { label: 'b', prompt: 'ΔU in joules', answer: -2.24e-20, unit: 'J', expected: 'about −2.2 × 10⁻²⁰ J' },
              ],
              explanation:
                'ΔV = final − initial = (−0.070 V) − 0 = −0.070 V. Ca²⁺ carries +2e, so ΔU = qΔV = (+2e)(−0.070 V) = −0.14 eV. In joules: −0.14 × 1.6 × 10⁻¹⁹ ≈ −2.2 × 10⁻²⁰ J. Negative, so the ion LOSES potential energy: the field points from high potential to low (outside to inside) and pulls the positive ion in. Using q = e for every ion gives half the right answer; count the charges.',
            },
          ],
        },
        { id: '05-ex2-solution', title: 'Example 2: the solution', role: 'solution' },
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(4, 0), plan(4, 1), plan(4, 2)] },
      ],
    },
  ] as VideoSpec[],
}
