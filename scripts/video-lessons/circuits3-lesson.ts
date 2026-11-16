/**
 * The website video lesson for Circuits Part 3: EMF & Capacitance (MCAT),
 * built from the SECTIONS of the YouTube videos: which section carries which
 * checkpoint question, and the worked examples' numeric answer keys. This is
 * the question → section map; `sync-circuits3.ts` writes it to the database.
 *
 * All eight videos are live (voiced exports "p3 c01 EMF v1" … "p3 c08
 * Dielectrics and Energy Examples v1", cut into public/video-lessons/mcat-circ3/
 * with _manim/tools/web_clips.py). Standard question count (owner, Nov 2026):
 * the shot list's three checkpoints spread over each concept video's
 * sections, numeric answer keys on every problem section, three questions on
 * every recap.
 */
import { shotList } from '../../src/data/video-shot-lists/mcat-prep/mcat-physics-electricity-emf-capacitors-mcat'
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'
import type { LessonSpec } from './lesson-spec'
import { RECAP } from './circuits3-recap-questions'
import { FIG } from './circuits3-figures'

const plan = (video: number, index: number): CheckpointQuestion => {
  const q = shotList.clips[video - 1]?.checkpoint[index]
  if (!q) throw new Error(`shot list has no question ${index} for clip ${video}`)
  return q
}

export const LESSON: LessonSpec = {
  key: 'mcat-circ3',
  topicSlug: 'mcat-physics-electricity-emf-capacitors-mcat',
  courseSlug: 'mcat-prep',
  title: 'Circuits Part 3: EMF & Capacitance',
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
        { id: '02-opening', title: 'Making the battery real', role: 'teach' },
        { id: '03-emf', title: 'EMF: the work done per coulomb', role: 'teach' },
        { id: '04-internal-r', title: 'A real battery: EMF plus internal resistance', role: 'teach' },
        // The section walks open → loaded (headlights) → shorted → charging; the questions follow that order.
        { id: '05-four-cases', title: 'Four cases: open, loaded, shorted, charging', role: 'teach', questions: [plan(1, 0), plan(1, 2), plan(1, 1)] },
        { id: '06-energy', title: 'Where the energy goes', role: 'teach' },
        { id: '07-aging', title: 'Why an old battery fools a voltmeter', role: 'teach' },
        { id: '08-recap', title: 'Remember', role: 'teach', questions: RECAP[1] },
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
              figure: FIG.v2_ex1,
              question: 'Example 1. A voltmeter across a battery reads 9.0 V with nothing else attached. With a 4.0 Ω resistor connected across the terminals, it reads 8.0 V.',
              parts: [
                { label: 'a', prompt: 'The battery’s EMF', answer: 9.0, unit: 'V', expected: '9.0 V' },
                { label: 'b', prompt: 'The current through the resistor', answer: 2.0, unit: 'A', expected: '2.0 A' },
                { label: 'c', prompt: 'The battery’s internal resistance', answer: 0.5, unit: 'Ω', expected: '0.50 Ω' },
              ],
              explanation:
                '(a) With nothing attached the ideal voltmeter draws no current, so nothing is dropped inside the battery: ε = 9.0 V. (b) The 8.0 V reading is across the 4.0 Ω resistor, so I = V/R = 8.0/4.0 = 2.0 A. (c) The missing 1.0 V is dropped inside: r = (9.0 − 8.0)/2.0 = 0.50 Ω. Check: ε/(R + r) = 9.0/4.5 = 2.0 A. A common trap is reporting the 1.0 V drop as the resistance without dividing by I.',
            },
            {
              kind: 'numeric',
              figure: FIG.v2_ex1,
              question: 'Example 1, part (d). How much power does the battery’s chemistry supply, and where does it go?',
              parts: [
                { label: 'd', prompt: 'Power the chemistry supplies', answer: 18, unit: 'W', expected: '18 W' },
                { label: 'd', prompt: 'Power delivered to the 4.0 Ω resistor', answer: 16, unit: 'W', expected: '16 W' },
                { label: 'd', prompt: 'Power wasted inside the battery', answer: 2.0, unit: 'W', expected: '2.0 W' },
              ],
              explanation:
                'The chemistry supplies εI = (9.0)(2.0) = 18 W. The resistor receives I²R = (2.0)²(4.0) = 16 W, the same as V_term·I = (8.0)(2.0), and the internal resistance wastes I²r = (2.0)²(0.50) = 2.0 W. 16 + 2.0 = 18 W: every watt is accounted for.',
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
              figure: FIG.v2_ex2,
              question: 'Example 2. A battery has an EMF of 12 V and an internal resistance of 0.50 Ω.',
              parts: [
                { label: 'a', prompt: 'The current it drives through a 5.5 Ω load', answer: 2.0, unit: 'A', expected: '2.0 A' },
                { label: 'a', prompt: 'Its terminal voltage with that load', answer: 11, unit: 'V', expected: '11 V' },
                { label: 'b', prompt: 'The current when a wire shorts its terminals', answer: 24, unit: 'A', expected: '24 A' },
                { label: 'b', prompt: 'The power heating the battery during the short', answer: 288, unit: 'W', expected: '288 W' },
              ],
              explanation:
                '(a) The internal resistance is in series with the load: I = ε/(R + r) = 12/(5.5 + 0.50) = 2.0 A, and V_term = ε − Ir = 12 − (2.0)(0.50) = 11 V, the same as IR = (2.0)(5.5). (b) With R = 0 only r limits the current: I = ε/r = 12/0.50 = 24 A. The terminal voltage is zero and all of the power is dissipated inside: I²r = (24)²(0.50) = 288 W, the same as εI = (12)(24).',
            },
            {
              kind: 'numeric',
              figure: FIG.v2_ex2,
              question: 'Example 2, part (c). What voltage must a charger supply to recharge the battery at 3.0 A?',
              parts: [{ label: 'c', prompt: 'The charger’s voltage', answer: 13.5, unit: 'V', expected: '13.5 V' }],
              explanation:
                'Charging current is forced backward through the battery, so the charger must beat the EMF and also push the current through r: V = ε + Ir = 12 + (3.0)(0.50) = 13.5 V. The trap is 10.5 V, which uses the discharging rule ε − Ir.',
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
        { id: '02-series', title: 'Cells in series: the EMFs add', role: 'teach', questions: [plan(3, 0)] },
        { id: '03-parallel', title: 'Identical cells in parallel', role: 'teach' },
        { id: '04-capacity', title: 'A mAh rating is charge, not energy', role: 'teach' },
        { id: '05-meters', title: 'Ammeter in series, voltmeter in parallel', role: 'teach', questions: [plan(3, 1)] },
        { id: '06-swapped', title: 'Swapped meters: a short and a choke', role: 'teach' },
        { id: '07-emf-source', title: 'Where the EMF comes from: ΔG = −nFE', role: 'teach', questions: [plan(3, 2)] },
        { id: '08-recap', title: 'Remember', role: 'teach', questions: RECAP[3] },
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
              figure: FIG.v4_ex1,
              question: 'Example 1. Three 1.5 V cells, each with internal resistance 0.20 Ω, are connected in series to a 2.4 Ω bulb.',
              parts: [
                { label: 'a', prompt: 'The stack’s total EMF', answer: 4.5, unit: 'V', expected: '4.5 V' },
                { label: 'a', prompt: 'The stack’s total internal resistance', answer: 0.6, unit: 'Ω', expected: '0.60 Ω' },
                { label: 'b', prompt: 'The current', answer: 1.5, unit: 'A', expected: '1.5 A' },
                { label: 'b', prompt: 'The stack’s terminal voltage', answer: 3.6, unit: 'V', expected: '3.6 V' },
              ],
              explanation:
                '(a) In series the EMFs add, 3 × 1.5 = 4.5 V, and so do the internal resistances, 3 × 0.20 = 0.60 Ω. (b) I = 4.5/(2.4 + 0.60) = 1.5 A, and V_term = 4.5 − (1.5)(0.60) = 3.6 V, which matches IR = (1.5)(2.4) = 3.6 V across the bulb.',
            },
            {
              kind: 'numeric',
              figure: FIG.v4_ex1_flip,
              question: 'Example 1, parts (c) and (d). (c) One cell is inserted backward. (d) Each cell is rated 2000 mAh.',
              parts: [
                { label: 'c', prompt: 'The stack’s new EMF', answer: 1.5, unit: 'V', expected: '1.5 V' },
                { label: 'c', prompt: 'The new current', answer: 0.5, unit: 'A', expected: '0.50 A' },
                { label: 'd', prompt: 'One cell’s rating as a charge', answer: 7200, unit: 'C', expected: '7200 C' },
                { label: 'd', prompt: 'Roughly how much energy one cell holds', answer: 10800, unit: 'J', expected: '≈ 1.1 × 10⁴ J' },
              ],
              explanation:
                '(c) The reversed cell subtracts its EMF: 1.5 + 1.5 − 1.5 = 1.5 V. It is still in the loop, so the internal resistance stays 0.60 Ω and I = 1.5/(2.4 + 0.60) = 0.50 A. (d) 2000 mAh is 2.0 A for an hour: Q = (2.0 A)(3600 s) = 7200 C (the shortcut: 2000 × 3.6). Each coulomb carries about 1.5 J, so the energy is about QV = (7200)(1.5) ≈ 1.1 × 10⁴ J.',
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
              figure: FIG.v4_ex2,
              question: 'Example 2. A 12 V battery of negligible internal resistance drives a 4.0 Ω resistor and a 2.0 Ω lamp in series.',
              parts: [
                { label: 'a', prompt: 'An ideal ammeter in series reads', answer: 2.0, unit: 'A', expected: '2.0 A' },
                { label: 'a', prompt: 'An ideal voltmeter across the lamp reads', answer: 4.0, unit: 'V', expected: '4.0 V' },
                { label: 'b', prompt: 'An ammeter (about 0 Ω) placed directly across the lamp reads', answer: 3.0, unit: 'A', expected: '3.0 A' },
              ],
              explanation:
                '(a) I = 12/(4.0 + 2.0) = 2.0 A, and the lamp drops IR = (2.0)(2.0) = 4.0 V. (b) An ammeter across the lamp acts as a wire across it: the lamp is shorted out and only the 4.0 Ω resistor limits the current, so I = 12/4.0 = 3.0 A, all of it through the meter.',
            },
            {
              figure: FIG.v4_ex2,
              question: 'Example 2, part (b). With the ammeter connected directly across the lamp, what happens to the lamp?',
              options: [
                'It glows brighter, since 3.0 A now flows',
                'It glows the same, since the meter only reads it',
                'It goes dark, with about 0 V across it',
                'It glows dimmer, since the meter adds resistance',
              ],
              correctAnswer: 2,
              explanation:
                'The meter’s near-zero resistance gives the current a path around the lamp, so the lamp has essentially no voltage across it and no current through it: it goes dark. The 3.0 A flows through the meter, not the lamp; a meter across an element is not a passive reading; and it adds no series resistance.',
            },
            {
              kind: 'numeric',
              figure: FIG.v4_ex2,
              question: 'Example 2, part (c). A 1.0 MΩ voltmeter is connected in series in the loop instead. Give the current in microamps.',
              parts: [
                { label: 'c', prompt: 'The current in the loop', answer: 12, unit: 'μA', expected: '12 μA (1.2 × 10⁻⁵ A)' },
                { label: 'c', prompt: 'What the voltmeter reads', answer: 12, unit: 'V', expected: '≈ 12 V' },
              ],
              explanation:
                'The meter’s 1.0 MΩ swamps the 6.0 Ω of the resistor and lamp: I ≈ 12 V / (1.0 × 10⁶ Ω) = 1.2 × 10⁻⁵ A = 12 μA. The resistor and lamp then drop almost nothing (about 72 μV together), so nearly the whole 12 V appears across the meter.',
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
        { id: '02-charging', title: 'Charging: two plates, one gap', role: 'teach' },
        { id: '03-each-plate', title: 'Q is the charge on each plate', role: 'teach', questions: [plan(5, 0)] },
        { id: '04-capacitance', title: 'Capacitance: C = Q/V', role: 'teach' },
        { id: '05-fixed', title: 'C is set by construction, not by V', role: 'teach' },
        { id: '06-plate-geometry', title: 'What sets C: plate area and gap', role: 'teach', questions: [plan(5, 1)] },
        { id: '07-change-table', title: 'Rescaling C as factors', role: 'teach' },
        { id: '08-uniform-field', title: 'The uniform field between the plates', role: 'teach', questions: [plan(5, 2)] },
        { id: '09-recap', title: 'Remember', role: 'teach', questions: RECAP[5] },
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
              figure: FIG.v6_ex1,
              question: 'Example 1. A 3.0 μF capacitor is connected to a 9.0 V battery until fully charged. Then the same capacitor is charged with an 18 V battery instead.',
              parts: [
                { label: 'a', prompt: 'The charge on each plate, on 9.0 V', answer: 27, unit: 'μC', expected: '27 μC (+27 μC and −27 μC)' },
                { label: 'b', prompt: 'The net charge of the whole capacitor', answer: 0, unit: 'μC', expected: '0' },
                { label: 'c', prompt: 'Its capacitance on 18 V', answer: 3.0, unit: 'μF', expected: '3.0 μF' },
                { label: 'c', prompt: 'The charge on each plate, on 18 V', answer: 54, unit: 'μC', expected: '54 μC' },
              ],
              explanation:
                '(a) Q = CV = (3.0 μF)(9.0 V) = 27 μC: +27 μC on one plate and −27 μC on the other. (b) Zero: the battery only moved charge from one plate to the other. (c) Capacitance is set by how the capacitor is built, so it is still 3.0 μF, and Q = (3.0 μF)(18 V) = 54 μC: double the voltage, double the charge.',
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
              figure: FIG.v6_ex2,
              question: 'Example 2. An air-filled parallel-plate capacitor has C = 6.0 pF and a plate gap of 1.5 mm, and it is connected to a 12 V battery. Then its plates are replaced with plates of three times the area, and the gap is doubled, with the battery still connected.',
              parts: [
                { label: 'a', prompt: 'The field between the original plates', answer: 8000, unit: 'V/m', expected: '8.0 × 10³ V/m' },
                { label: 'b', prompt: 'The new capacitance', answer: 9.0, unit: 'pF', expected: '9.0 pF' },
                { label: 'c', prompt: 'The new charge on each plate', answer: 108, unit: 'pC', expected: '108 pC' },
                { label: 'c', prompt: 'The new field between the plates', answer: 4000, unit: 'V/m', expected: '4.0 × 10³ V/m' },
              ],
              explanation:
                '(a) Convert the gap first: 1.5 mm = 1.5 × 10⁻³ m, so E = V/d = 12/(1.5 × 10⁻³) = 8.0 × 10³ V/m. (b) C ∝ A/d: 6.0 pF × 3 ÷ 2 = 9.0 pF. (c) Still on 12 V: Q = (9.0 pF)(12 V) = 108 pC, up from 72 pC. The gap is now 3.0 × 10⁻³ m, so E = 12/(3.0 × 10⁻³) = 4.0 × 10³ V/m.',
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
        { id: '02-polarize', title: 'A dielectric polarizes', role: 'teach', questions: [plan(7, 0)] },
        { id: '03-kappa', title: 'Same charge, lower voltage: C = κC₀', role: 'teach' },
        { id: '04-breakdown', title: 'Dielectric breakdown', role: 'teach' },
        { id: '05-energy', title: 'Stored energy: U = ½QV = ½CV² = Q²/2C', role: 'teach' },
        { id: '06-what-is-fixed', title: 'What is held fixed: V or Q?', role: 'teach', questions: [plan(7, 2)] },
        { id: '07-table', title: 'Inserting a dielectric: what changes', role: 'teach' },
        { id: '08-pull-apart', title: 'Pulling the plates apart', role: 'teach', questions: [plan(7, 1)] },
        { id: '09-half-heat', title: 'Charging through a resistor: half is heat', role: 'teach' },
        { id: '10-recap', title: 'Remember', role: 'teach', questions: RECAP[7] },
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
              figure: FIG.v8_ex1,
              question: 'Example 1. A 2.0 μF air-filled capacitor is charged to 100 V and then disconnected from the battery. A slab with κ = 4 is slid in to fill the gap.',
              parts: [
                { label: 'a', prompt: 'The charge on each plate (before and after the slab)', answer: 200, unit: 'μC', expected: '200 μC, unchanged' },
                { label: 'b', prompt: 'The new capacitance', answer: 8.0, unit: 'μF', expected: '8.0 μF' },
                { label: 'c', prompt: 'The new voltage', answer: 25, unit: 'V', expected: '25 V' },
              ],
              explanation:
                '(a) Q = CV = (2.0 μF)(100 V) = 200 μC, and it cannot change: disconnected, the charge has nowhere to go. (b) The slab multiplies C by κ: 4 × 2.0 = 8.0 μF. (c) V = Q/C = 200 μC / 8.0 μF = 25 V, down by κ, and the field falls by κ too.',
            },
            {
              kind: 'numeric',
              figure: FIG.v8_ex1,
              question: 'Example 1, parts (d) and (e). How much energy is stored before the slab goes in, and after?',
              parts: [
                { label: 'd', prompt: 'Energy stored before the slab', answer: 0.01, unit: 'J', expected: '1.0 × 10⁻² J' },
                { label: 'e', prompt: 'Energy stored after the slab', answer: 0.0025, unit: 'J', expected: '2.5 × 10⁻³ J' },
              ],
              explanation:
                '(d) U = ½CV² = ½(2.0 × 10⁻⁶)(100)² = 1.0 × 10⁻² J. (e) U = ½(8.0 × 10⁻⁶)(25)² = 2.5 × 10⁻³ J, down by κ = 4. The shortcut: Q is fixed, so U = Q²/2C falls by κ. A common trap is using the new voltage with the OLD capacitance.',
            },
            {
              figure: FIG.v8_ex1,
              question: 'Example 1, part (e). The stored energy fell by 7.5 × 10⁻³ J as the slab went in. Where did that energy go?',
              options: [
                'Back into the battery that first charged it',
                'Into charge that leaked across the slab',
                'Nowhere: the stored energy stayed the same',
                'Into work the field did pulling the slab in',
              ],
              correctAnswer: 3,
              explanation:
                'The plates’ field pulls the polarized slab into the gap, so the field does work on the slab: that is where the 7.5 × 10⁻³ J went. The battery is disconnected, so nothing can flow back into it; an intact dielectric conducts no charge; and with Q fixed and C four times larger, U = Q²/2C must fall.',
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
              figure: FIG.v8_ex2,
              question: 'Example 2. The same 2.0 μF capacitor gets the same κ = 4 slab, but this time the 100 V battery stays connected.',
              parts: [
                { label: 'a', prompt: 'The charge on each plate now', answer: 800, unit: 'μC', expected: '800 μC' },
                { label: 'a', prompt: 'The charge the battery adds as the slab goes in', answer: 600, unit: 'μC', expected: '600 μC' },
                { label: 'b', prompt: 'The energy stored now', answer: 0.04, unit: 'J', expected: '4.0 × 10⁻² J, four times the original' },
              ],
              explanation:
                '(a) Connected means V stays 100 V. With C = 8.0 μF, Q = (8.0 μF)(100 V) = 800 μC, so the battery pushes in 800 − 200 = 600 μC more. (b) U = ½CV² = ½(8.0 × 10⁻⁶)(100)² = 4.0 × 10⁻² J, four times the original 1.0 × 10⁻² J: with V fixed, U rises by κ. Same slab as Example 1, opposite change in energy.',
            },
          ],
        },
        { id: '05-ex2-solution', title: 'Example 2: the solution', role: 'solution' },
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(8, 0), plan(8, 1), plan(8, 2)] },
      ],
    },
  ],
}
