/**
 * The website video lesson for Fluids Part 3: Continuity & Bernoulli (MCAT),
 * built from the SECTIONS of the YouTube videos: which section carries which
 * checkpoint question, and the worked examples' numeric answer keys. This is
 * the question → section map; `sync-fluids3.ts` writes it to the database.
 *
 * All eight videos are voiced (exports "p3 c01 Flow Rate and Continuity v1" …
 * "p3 c08 Venturi and Pitot Tubes Examples v1", cut into
 * public/video-lessons/mcat-fl3/ with _manim/tools/web_clips.py). Question
 * rules (owner, 2026-11-16): at most one question on a regular section,
 * exactly three on a "Remember" section, at least three spread through each
 * concept video, and each one on the section that teaches it; numeric answer
 * keys on every problem section.
 *
 * From this part on, a worked example's solution is one section per lettered
 * part (`03-ex1-solution-a`, `-b`, …; owner, 2026-11-21). Every part section
 * is listed in order with the role `solution`. The player's "Skip the
 * solution" covers only the section straight after the problem (part a) today;
 * a per-part skip is a known follow-up (src/lib/video-lesson-core.ts
 * `solutionSkippable`), not built here.
 *
 * Sections 07-clinical-units (video 1) and 07-blood-vessels (video 3) are
 * MCAT-only: an AP Physics 1 lesson built from these clips leaves them, and
 * the one question on each, out.
 */
import { shotList } from '../../src/data/video-shot-lists/mcat-prep/fluids-part3-continuity-bernoulli'
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'
import type { LessonSpec } from './lesson-spec'
import { RECAP } from './fluids3-recap-questions'
import { FIG } from './fluids3-figures'

const plan = (video: number, index: number): CheckpointQuestion => {
  const q = shotList.clips[video - 1]?.checkpoint[index]
  if (!q) throw new Error(`shot list has no question ${index} for clip ${video}`)
  return q
}

export const LESSON: LessonSpec = {
  key: 'mcat-fl3',
  topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat',
  courseSlug: 'mcat-prep',
  title: 'Fluids Part 3: Continuity & Bernoulli',
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
        { id: '02-flow-rate', title: 'Flow rate: Q = Av', role: 'teach' },
        { id: '03-rate-vs-speed', title: 'Flow rate is not speed', role: 'teach', questions: [plan(1, 1)] },
        { id: '04-continuity', title: 'Continuity: A₁v₁ = A₂v₂', role: 'teach', questions: [plan(1, 0)] },
        { id: '05-radius-squared', title: 'Round pipes: speed goes as 1/r²', role: 'teach' },
        { id: '06-branching', title: 'Branching: use the total area', role: 'teach', questions: [plan(1, 2)] },
        { id: '07-clinical-units', title: 'Clinical flow rates: convert first', role: 'teach', questions: [RECAP[1][0]] },
        { id: '08-recap', title: 'Remember', role: 'teach', questions: [RECAP[1][1], RECAP[1][2], RECAP[1][3]] },
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
              question: 'Example 1. A garden hose with a cross-sectional area of 4.0 cm² fills a 12 L bucket in 60 s. The water leaves through a nozzle whose diameter is one-third of the hose’s.',
              parts: [
                { label: 'a', prompt: 'The flow rate, in cubic centimeters per second', answer: 200, unit: 'cm³/s', expected: '200 cm³/s' },
                { label: 'b', prompt: 'The speed of the water inside the hose, in centimeters per second', answer: 50, unit: 'cm/s', expected: '50 cm/s' },
                { label: 'c', prompt: 'The speed of the water leaving the nozzle, in centimeters per second', answer: 450, unit: 'cm/s', expected: '450 cm/s (4.5 m/s)' },
              ],
              explanation:
                '(a) Flow rate is volume over time, in matching units: 12 L is 12,000 cm³, and 12,000/60 = 200 cm³/s. Dividing 12 by 60 gives 0.2, which is in liters per second. (b) Q = Av, so v = Q/A = 200/4.0 = 50 cm/s. (c) One-third of the diameter is one-ninth of the area, so by A₁v₁ = A₂v₂ the water moves 9 times as fast: 9 × 50 = 450 cm/s, or 4.5 m/s. A common trap is 3 × 50 = 150, which uses the diameter ratio without squaring it.',
            },
          ],
        },
        { id: '03-ex1-solution-a', title: 'Example 1: the solution, part (a)', role: 'solution' },
        { id: '03-ex1-solution-b', title: 'Example 1: the solution, part (b)', role: 'solution' },
        { id: '03-ex1-solution-c', title: 'Example 1: the solution, part (c)', role: 'solution' },
        {
          id: '04-ex2-problem',
          title: 'Example 2: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              question: 'Example 2. The aorta has a cross-sectional area of about 3 cm² and carries blood at about 30 cm/s. The capillaries it feeds have a total cross-sectional area of about 3000 cm².',
              parts: [
                { label: 'a', prompt: 'The flow rate in the aorta, in cubic centimeters per second', answer: 90, unit: 'cm³/s', expected: '90 cm³/s' },
                { label: 'a', prompt: 'The same flow rate, in liters per minute', answer: 5.4, unit: 'L/min', expected: '5.4 L/min' },
                { label: 'b', prompt: 'The speed of the blood in the capillaries, in centimeters per second', answer: 0.03, unit: 'cm/s', expected: '0.03 cm/s' },
              ],
              explanation:
                '(a) Q = Av = (3 cm²)(30 cm/s) = 90 cm³/s. For liters per minute, 90 × 60 = 5400 cm³/min, and 1000 cm³ make a liter: 5.4 L/min. (b) All of that flow passes through the capillaries, so divide it by their total area: v = 90/3000 = 0.03 cm/s, 1000 times slower than in the aorta.',
            },
            {
              question: 'Example 2, part (c). Each capillary is far narrower than the aorta. Why is the blood slower in the capillaries, not faster?',
              options: [
                'Their flow rate is 1000 times smaller than the aorta’s',
                'Their total area is 1000 times the area of the aorta',
                'Their walls rub on the blood far more than the aorta’s',
                'Their blood is far denser than the blood in the aorta',
              ],
              correctAnswer: 1,
              explanation:
                'Continuity uses the summed area of all the parallel paths, not the area of one capillary. That total is 1000 times the aorta’s area, so the same flow moves at 1/1000 of the speed. The flow rate is the same in both, since all the blood that leaves the aorta passes through the capillaries, and blood’s density does not change. “Narrow vessel, so fast blood” is single-tube thinking.',
            },
          ],
        },
        { id: '05-ex2-solution-a', title: 'Example 2: the solution, part (a)', role: 'solution' },
        { id: '05-ex2-solution-b', title: 'Example 2: the solution, part (b)', role: 'solution' },
        { id: '05-ex2-solution-c', title: 'Example 2: the solution, part (c)', role: 'solution' },
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(2, 0), plan(2, 1), plan(2, 2)] },
      ],
    },
    {
      video: 3,
      sections: [
        { id: '02-ideal-fluid', title: 'The ideal fluid, and a streamline', role: 'teach' },
        { id: '03-energy', title: 'Bernoulli’s equation: energy per unit volume', role: 'teach', questions: [RECAP[3][0]] },
        { id: '04-at-rest', title: 'A fluid at rest: P = P₀ + ρgh', role: 'teach' },
        { id: '05-level-flow', title: 'Level flow: faster means lower pressure', role: 'teach', questions: [plan(3, 0)] },
        { id: '06-chain', title: 'The chain: area, speed, pressure', role: 'teach', questions: [plan(3, 1)] },
        { id: '07-blood-vessels', title: 'In blood vessels, the chain runs both ways', role: 'teach', questions: [RECAP[3][1]] },
        { id: '08-recap', title: 'Remember', role: 'teach', questions: [plan(3, 2), RECAP[3][2], RECAP[3][3]] },
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
              question: 'Example 1. Water (ρ = 1000 kg/m³) flows at 2 m/s through a horizontal pipe with a cross-sectional area of 12 cm², where the pressure is 150 kPa. The pipe narrows to 4 cm².',
              parts: [
                { label: 'a', prompt: 'The speed of the water in the narrow section', answer: 6, unit: 'm/s', expected: '6 m/s' },
                { label: 'b', prompt: 'How much the pressure drops between the two sections, in kilopascals', answer: 16, unit: 'kPa', expected: '16 kPa (16,000 Pa)' },
                { label: 'b', prompt: 'The pressure in the narrow section, in kilopascals', answer: 134, tolerance: 0.02, unit: 'kPa', expected: '134 kPa' },
              ],
              explanation:
                '(a) Continuity first. The pipe drops to one-third of the area, so the speed is 3 times larger: v₂ = (2)(12/4) = 6 m/s. (b) The pipe is level, so the ρgy terms cancel: P₁ − P₂ = ½ρ(v₂² − v₁²) = ½(1000)(36 − 4) = 16,000 Pa = 16 kPa. Faster water has lower pressure, so subtract: 150 − 16 = 134 kPa. Common traps: squaring the difference in speeds, (6 − 2)² = 16, which gives only 8 kPa; adding the change; and mixing 16,000 Pa with 150 kPa.',
            },
          ],
        },
        { id: '03-ex1-solution-a', title: 'Example 1: the solution, part (a)', role: 'solution' },
        { id: '03-ex1-solution-b', title: 'Example 1: the solution, part (b)', role: 'solution' },
        {
          id: '04-ex2-problem',
          title: 'Example 2: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v4_ex2,
              question: 'Example 2. Water (ρ = 1000 kg/m³) enters a building at ground level, moving at 3 m/s at a pressure of 250 kPa. The pipe rises 5 m to a section with half the cross-sectional area. Use g = 10 m/s².',
              parts: [
                { label: 'a', prompt: 'The speed of the water in the upper section', answer: 6, unit: 'm/s', expected: '6 m/s' },
                { label: 'b', prompt: 'The pressure in the upper section, in kilopascals', answer: 186.5, tolerance: 0.01, unit: 'kPa', expected: '186.5 kPa' },
                { label: 'c', prompt: 'The pressure in the upper section when the taps are closed and the water is at rest, with 250 kPa still at ground level', answer: 200, tolerance: 0.01, unit: 'kPa', expected: '200 kPa' },
              ],
              explanation:
                '(a) Continuity first: half the area means twice the speed, so v₂ = 6 m/s. (b) Speeding up and climbing both lower the pressure, so there are two terms: P₁ − P₂ = ½ρ(v₂² − v₁²) + ρg(y₂ − y₁) = ½(1000)(36 − 9) + (1000)(10)(5) = 13,500 + 50,000 = 63,500 Pa = 63.5 kPa, and P₂ = 250 − 63.5 = 186.5 kPa. A common trap is leaving out the upstream speed, or the height term. (c) At rest the speed term is zero, so only the height term is left: P₂ = 250 − 50 = 200 kPa, the hydrostatic result P = P₀ + ρgh read from the top down.',
            },
          ],
        },
        { id: '05-ex2-solution-a', title: 'Example 2: the solution, part (a)', role: 'solution' },
        { id: '05-ex2-solution-b', title: 'Example 2: the solution, part (b)', role: 'solution' },
        { id: '05-ex2-solution-c', title: 'Example 2: the solution, part (c)', role: 'solution' },
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(4, 0), plan(4, 1), plan(4, 2)] },
      ],
    },
    {
      video: 5,
      sections: [
        { id: '02-setup', title: 'The setup: a wide, open tank with a small hole', role: 'teach' },
        { id: '03-speed', title: 'Torricelli’s theorem: v = √(2gh)', role: 'teach', questions: [plan(5, 0)] },
        { id: '04-density', title: 'The density cancels', role: 'teach' },
        { id: '05-square-root', title: 'Speed goes as the square root of the depth', role: 'teach', questions: [RECAP[5][0]] },
        { id: '06-draining', title: 'A draining tank slows down', role: 'teach', questions: [plan(5, 1)] },
        { id: '07-range', title: 'The jet is a projectile: R = vt', role: 'teach', questions: [plan(5, 2)] },
        { id: '08-recap', title: 'Remember', role: 'teach', questions: [RECAP[5][1], RECAP[5][2], RECAP[5][3]] },
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
              question: 'Example 1. A wide, open tank of water has a small hole with an area of 2.0 cm², 3.2 m below the water surface. Use g = 10 m/s².',
              parts: [
                { label: 'a', prompt: 'The speed of the water leaving the hole', answer: 8, unit: 'm/s', expected: '8 m/s' },
                { label: 'b', prompt: 'The flow rate out of the hole, in liters per second', answer: 1.6, unit: 'L/s', expected: '1.6 L/s (1.6 × 10⁻³ m³/s)' },
                { label: 'c', prompt: 'The exit speed once the depth of water above the hole has fallen to 0.80 m', answer: 4, unit: 'm/s', expected: '4 m/s' },
                { label: 'c', prompt: 'The flow rate then, in liters per second', answer: 0.8, unit: 'L/s', expected: '0.80 L/s' },
              ],
              explanation:
                '(a) Torricelli’s theorem, with h the depth of the hole below the surface: v = √(2gh) = √(2 × 10 × 3.2) = √64 = 8 m/s. (b) Q = Av with the area in square meters: 2.0 cm² = 2.0 × 10⁻⁴ m², so Q = (2.0 × 10⁻⁴)(8) = 1.6 × 10⁻³ m³/s = 1.6 L/s. Leaving the area in cm² is a common trap. (c) Redo the speed with the new depth: √(2 × 10 × 0.80) = √16 = 4 m/s. A quarter of the depth gives half the speed, and half the speed through the same hole gives half the flow rate, 0.80 L/s.',
            },
          ],
        },
        { id: '03-ex1-solution-a', title: 'Example 1: the solution, part (a)', role: 'solution' },
        { id: '03-ex1-solution-b', title: 'Example 1: the solution, part (b)', role: 'solution' },
        { id: '03-ex1-solution-c', title: 'Example 1: the solution, part (c)', role: 'solution' },
        {
          id: '04-ex2-problem',
          title: 'Example 2: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v6_ex2,
              question: 'Example 2. An open tank of water stands on a platform. A small hole in its side is 0.45 m below the water surface and 0.80 m above the floor, and the water leaves horizontally. Use g = 10 m/s².',
              parts: [
                { label: 'a', prompt: 'The speed of the water leaving the hole', answer: 3, unit: 'm/s', expected: '3 m/s' },
                { label: 'b', prompt: 'The time the water takes to reach the floor', answer: 0.4, unit: 's', expected: '0.4 s' },
                { label: 'c', prompt: 'How far from the tank the jet lands', answer: 1.2, unit: 'm', expected: '1.2 m' },
                { label: 'd', prompt: 'The exit speed when the water is replaced by oil of density 800 kg/m³, filled to the same level', answer: 3, unit: 'm/s', expected: '3 m/s (no change)' },
              ],
              explanation:
                '(a) The exit speed comes from the depth of the hole: v = √(2 × 10 × 0.45) = √9 = 3 m/s. (b) The water leaves horizontally, so it starts with no vertical speed and falls 0.80 m: 0.80 = ½(10)t², so t² = 0.16 and t = 0.4 s. A common trap is using the depth, 0.45 m, for the fall. (c) Sideways it keeps its 3 m/s for the whole 0.4 s: R = vt = 1.2 m. (d) Nothing changes: √(2gh) has no density in it, and the fall does not depend on density either. Still 3 m/s, 0.4 s and 1.2 m.',
            },
          ],
        },
        { id: '05-ex2-solution-a', title: 'Example 2: the solution, part (a)', role: 'solution' },
        { id: '05-ex2-solution-b', title: 'Example 2: the solution, part (b)', role: 'solution' },
        { id: '05-ex2-solution-c', title: 'Example 2: the solution, part (c)', role: 'solution' },
        { id: '05-ex2-solution-d', title: 'Example 2: the solution, part (d)', role: 'solution' },
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(6, 0), plan(6, 1), plan(6, 2)] },
      ],
    },
    {
      video: 7,
      sections: [
        { id: '02-venturi-effect', title: 'The Venturi effect', role: 'teach' },
        { id: '03-venturi-meter', title: 'The Venturi meter: ΔP = ρgΔh', role: 'teach', questions: [plan(7, 0)] },
        { id: '04-pressure-to-speed', title: 'From a pressure difference to a speed', role: 'teach', questions: [plan(7, 2)] },
        { id: '05-pitot-tube', title: 'The pitot tube: ΔP = ½ρv²', role: 'teach', questions: [plan(7, 1)] },
        { id: '06-atomizer', title: 'The atomizer: pushed up, not sucked up', role: 'teach' },
        { id: '07-lift', title: 'Lift: F = ΔP·A', role: 'teach', questions: [RECAP[7][0]] },
        { id: '08-recap', title: 'Remember', role: 'teach', questions: [RECAP[7][1], RECAP[7][2], RECAP[7][3]] },
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
              question: 'Example 1. Water (ρ = 1000 kg/m³) flows through a horizontal Venturi meter whose wide section has an area of 6.0 cm² and whose throat has an area of 2.0 cm². The water levels in the two open tubes differ by 0.40 m. Use g = 10 m/s².',
              parts: [
                { label: 'a', prompt: 'The pressure difference between the wide section and the throat', answer: 4000, unit: 'Pa', expected: '4000 Pa' },
                { label: 'b', prompt: 'The speed of the water in the wide section', answer: 1, unit: 'm/s', expected: '1 m/s' },
                { label: 'b', prompt: 'The speed of the water in the throat', answer: 3, unit: 'm/s', expected: '3 m/s' },
                { label: 'c', prompt: 'The volume flow rate, in liters per second', answer: 0.6, unit: 'L/s', expected: '0.60 L/s (6.0 × 10⁻⁴ m³/s)' },
              ],
              explanation:
                '(a) The height difference reads the pressure difference: ΔP = ρgΔh = (1000)(10)(0.40) = 4000 Pa, lower in the throat. Leaving out g is a common trap. (b) Continuity first: the throat has one-third of the area, so v₂ = 3v₁. Then Bernoulli for a horizontal pipe: ΔP = ½ρ(v₂² − v₁²) = ½ρ(9v₁² − v₁²) = 4ρv₁². So 4000 = 4000v₁², which gives v₁ = 1 m/s and v₂ = 3 m/s. Setting 4000 equal to ½ρv² with a single speed is a trap: both sections are moving. (c) Q = A₁v₁ = (6.0 × 10⁻⁴ m²)(1 m/s) = 6.0 × 10⁻⁴ m³/s = 0.60 L/s.',
            },
          ],
        },
        { id: '03-ex1-solution-a', title: 'Example 1: the solution, part (a)', role: 'solution' },
        { id: '03-ex1-solution-b', title: 'Example 1: the solution, part (b)', role: 'solution' },
        { id: '03-ex1-solution-c', title: 'Example 1: the solution, part (c)', role: 'solution' },
        {
          id: '04-ex2-problem',
          title: 'Example 2: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              question: 'Example 2. A pitot tube on a light aircraft reads a stagnation pressure 1500 Pa above the static pressure. Take the density of air as 1.2 kg/m³. Air passes over the top of the wing at 60 m/s and beneath it at 50 m/s, and the wing’s area is 15 m².',
              parts: [
                { label: 'a', prompt: 'The airspeed', answer: 50, unit: 'm/s', expected: '50 m/s' },
                { label: 'b', prompt: 'How much lower the pressure is on top of the wing', answer: 660, unit: 'Pa', expected: '660 Pa' },
                { label: 'c', prompt: 'The lift force', answer: 9900, unit: 'N', expected: '9900 N, upward' },
              ],
              explanation:
                '(a) A pitot tube reads stagnation minus static pressure, which is ½ρv². So ½(1.2)v² = 1500, v² = 2(1500)/1.2 = 2500, and v = 50 m/s. Use the density of the fluid that is moving, air, not water. (b) ΔP = ½ρ(v_top² − v_bottom²) = ½(1.2)(3600 − 2500) = (0.6)(1100) = 660 Pa. Square each speed first: squaring the difference, 10² = 100, gives only 60 Pa. (c) F = ΔP·A = (660)(15) = 9900 N. The larger pressure is underneath, so the force points up.',
            },
          ],
        },
        { id: '05-ex2-solution-a', title: 'Example 2: the solution, part (a)', role: 'solution' },
        { id: '05-ex2-solution-b', title: 'Example 2: the solution, part (b)', role: 'solution' },
        { id: '05-ex2-solution-c', title: 'Example 2: the solution, part (c)', role: 'solution' },
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(8, 0), plan(8, 1), plan(8, 2)] },
      ],
    },
  ],
}
