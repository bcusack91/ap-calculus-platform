/**
 * The website video lesson for Circuits Part 1 (MCAT), built from the
 * SECTIONS of the YouTube videos: which section carries which checkpoint
 * question, and the worked examples' numeric answer keys. This is the
 * question → section map; `sync-circuits1.ts` writes it to the database.
 *
 * All eight videos are live. A new video's section files go to
 * public/video-lessons/mcat-circ1/c0N/ and its block is added here.
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
    {
      video: 5,
      sections: [
        { id: '02-ohms-law', title: 'V = IR defines resistance', role: 'teach' },
        { id: '03-hold-fixed', title: 'Hold one quantity fixed', role: 'teach', questions: [plan(5, 1)] },
        { id: '04-iv-graph', title: 'Reading an I–V graph', role: 'teach', questions: [plan(5, 0)] },
        { id: '05-wire-shape', title: 'R = ρL/A: the wire’s shape', role: 'teach' },
        { id: '06-stretching', title: 'Stretching a wire', role: 'teach' },
        { id: '07-temperature', title: 'Temperature', role: 'teach' },
        { id: '08-axon', title: 'Axons: 1/r², not 1/r⁴', role: 'teach', questions: [plan(5, 2)] },
        { id: '09-recap', title: 'Remember', role: 'teach' },
      ],
    },
    {
      video: 6,
      sections: [
        {
          id: '02-ex1-problem',
          title: 'Example 1: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              question: 'Example 1. A copper wire has a resistance of 2.0 Ω.',
              parts: [
                { label: 'a', prompt: 'Resistance of a wire of the same copper that is twice as long with twice the diameter', answer: 1.0, unit: 'Ω', expected: '1.0 Ω' },
                { label: 'b', prompt: 'Resistance of the original wire stretched to three times its length at constant volume', answer: 18, unit: 'Ω', expected: '18 Ω' },
                { label: 'c', prompt: 'Current through the wire from (a) across 6.0 V', answer: 6.0, unit: 'A', expected: '6.0 A' },
                { label: 'c', prompt: 'Current through the stretched wire from (b) across 6.0 V', answer: 0.333, unit: 'A', expected: 'about 0.33 A' },
              ],
              explanation:
                'Write R = ρL/A as factors: new R = old R × (length factor) ÷ (area factor), and the area factor is the diameter factor squared. (a) Length × 2, diameter × 2 so area × 4: R = 2.0 × 2 / 4 = 1.0 Ω. Dividing by 2 for the diameter is the trap. (b) Stretching at constant volume: length × 3 and area ÷ 3, so R = 2.0 × 3 × 3 = 18 Ω; a stretched wire also gets thinner. (c) V is fixed, so I = V/R: 6.0 / 1.0 = 6.0 A and 6.0 / 18 ≈ 0.33 A.',
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
                'Example 2. A resistor’s I–V line passes through (6.0 V, 0.20 A). A filament bulb’s curve passes through (6.0 V, 0.50 A) and (12 V, 0.75 A).',
              parts: [
                { label: 'a', prompt: 'The resistor’s resistance', answer: 30, unit: 'Ω', expected: '30 Ω' },
                { label: 'a', prompt: 'The current the resistor carries at 15 V', answer: 0.5, unit: 'A', expected: '0.50 A' },
                { label: 'b', prompt: 'The bulb’s resistance at (6.0 V, 0.50 A)', answer: 12, unit: 'Ω', expected: '12 Ω' },
                { label: 'b', prompt: 'The bulb’s resistance at (12 V, 0.75 A)', answer: 16, unit: 'Ω', expected: '16 Ω' },
              ],
              explanation:
                'Resistance at a point is V/I at that point. (a) 6.0 / 0.20 = 30 Ω, and the line is straight through the origin, so at 15 V the current is 15 / 30 = 0.50 A. (b) 6.0 / 0.50 = 12 Ω and 12 / 0.75 = 16 Ω: the resistance rises as the filament heats. The slope between the two points, 6 V / 0.25 A = 24 Ω, is not the resistance at either point.',
            },
            {
              question: 'Is the filament bulb ohmic?',
              options: [
                'No: its resistance rises from 12 Ω to 16 Ω as it heats',
                'Yes: V = IR holds at both of the given points',
                'Yes: its resistance is 24 Ω, the slope between the points',
                'No: its resistance falls from 16 Ω to 12 Ω as it heats',
              ],
              correctAnswer: 0,
              explanation:
                'An ohmic element has one resistance at every point, a straight I–V line through the origin. The bulb’s V/I grows from 12 Ω to 16 Ω as the filament heats, so it is non-ohmic. V = IR defines R at each point without making R constant, the slope between two points is ΔV/ΔI rather than a resistance, and a falling resistance would make the curve steepen rather than flatten.',
            },
          ],
        },
        { id: '05-ex2-solution', title: 'Example 2: the solution', role: 'solution' },
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(6, 0), plan(6, 1), plan(6, 2)] },
      ],
    },
    {
      video: 7,
      sections: [
        { id: '02-series', title: 'Series: one path', role: 'teach', questions: [plan(7, 2)] },
        { id: '03-parallel', title: 'Parallel: the same two nodes', role: 'teach' },
        { id: '04-compare', title: 'Series vs. parallel, side by side', role: 'teach', questions: [plan(7, 1)] },
        { id: '05-shortcuts', title: 'Shortcuts', role: 'teach' },
        { id: '06-nodes', title: 'Judge by the nodes, not the drawing', role: 'teach' },
        { id: '07-short', title: 'A short and an open', role: 'teach', questions: [plan(7, 0)] },
        { id: '08-recap', title: 'Remember', role: 'teach' },
      ],
    },
    {
      video: 8,
      sections: [
        {
          id: '02-ex1-problem',
          title: 'Example 1: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              question: 'Example 1. A 24 V battery drives 2 Ω, 4 Ω and 6 Ω resistors in series.',
              parts: [
                { label: 'a', prompt: 'The equivalent resistance', answer: 12, unit: 'Ω', expected: '12 Ω' },
                { label: 'b', prompt: 'The current', answer: 2.0, unit: 'A', expected: '2.0 A' },
              ],
              explanation:
                '(a) One path, so the resistances add: 2 + 4 + 6 = 12 Ω. (b) The battery sees 12 Ω, so I = V/R_eq = 24 / 12 = 2.0 A, and that same 2.0 A flows through all three resistors.',
            },
            {
              kind: 'numeric',
              question: 'Example 1, continued. The same 24 V battery and the 2 Ω, 4 Ω and 6 Ω series string.',
              parts: [
                { label: 'c', prompt: 'Voltage across the 2 Ω resistor', answer: 4, unit: 'V', expected: '4 V' },
                { label: 'c', prompt: 'Voltage across the 4 Ω resistor', answer: 8, unit: 'V', expected: '8 V' },
                { label: 'c', prompt: 'Voltage across the 6 Ω resistor', answer: 12, unit: 'V', expected: '12 V' },
              ],
              explanation:
                'Each drop is IR with the same 2.0 A: 4 V, 8 V and 12 V. The biggest resistor takes the biggest drop, the drops run 1:2:3 like the resistances, and they add back to the 24 V of the battery. Splitting the 24 V equally (8 V each) only works when the resistors are equal.',
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
              question: 'Example 2. A 12 V battery sits across a 4 Ω and a 12 Ω resistor in parallel.',
              parts: [
                { label: 'a', prompt: 'The equivalent resistance', answer: 3, unit: 'Ω', expected: '3 Ω' },
                { label: 'b', prompt: 'Current in the 4 Ω branch', answer: 3, unit: 'A', expected: '3 A' },
                { label: 'b', prompt: 'Current in the 12 Ω branch', answer: 1, unit: 'A', expected: '1 A' },
                { label: 'c', prompt: 'The total current', answer: 4, unit: 'A', expected: '4 A' },
              ],
              explanation:
                'Both resistors join the same two nodes, so each has the full 12 V across it. (a) 1/R_eq = 1/4 + 1/12 = 1/3, so R_eq = 3 Ω (invert at the end; product over sum gives 48/16 = 3 Ω too), below the smallest branch as a parallel answer must be. (b) Each branch current is V/R: 12/4 = 3 A and 12/12 = 1 A. (c) The branch currents merge: 3 + 1 = 4 A, the same as 12 V / 3 Ω.',
            },
          ],
        },
        { id: '05-ex2-solution', title: 'Example 2: the solution', role: 'solution' },
        { id: '06-recap', title: 'Remember: the two recipes', role: 'teach', questions: [plan(8, 0), plan(8, 1), plan(8, 2)] },
      ],
    },
  ] as VideoSpec[],
}
