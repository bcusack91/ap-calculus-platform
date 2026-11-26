/**
 * The website video lesson for Fluids Part 1: Density & Pressure (MCAT),
 * built from the SECTIONS of the YouTube videos: which section carries which
 * checkpoint question, and the worked examples' numeric answer keys. This is
 * the question → section map; `sync-fluids1.ts` writes it to the database.
 *
 * All eight videos are voiced (exports "p1 c01 Density and Specific Gravity
 * v1" … "p1 c08 Pascal's Principle Examples v1", cut into
 * public/video-lessons/mcat-fl1/ with _manim/tools/web_clips.py). Question
 * rules (owner, 2026-11-16): at most one question on a regular section,
 * exactly three on a "Remember" section, at least three spread through each
 * concept video, and each one on the section that teaches it; numeric answer
 * keys on every problem section. Each worked-example solution is ONE section
 * (the per-part split starts at Fluids Part 3).
 *
 * Reuse for AP Physics 1 (see the shot list): the MCAT-only sections are
 * video 1 `07-specific-gravity`, video 2 `04-ex2-problem` + `05-ex2-solution`,
 * and video 5 `06-blood-pressure` + `07-blood-height`. Every question on a
 * shared section is on a shared idea, and without the MCAT-only sections each
 * concept video still has three questions on its regular sections.
 */
import { shotList } from '../../src/data/video-shot-lists/mcat-prep/fluids-part1-density-pressure'
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'
import type { LessonSpec } from './lesson-spec'
import { RECAP } from './fluids1-recap-questions'
import { FIG } from './fluids1-figures'

const plan = (video: number, index: number): CheckpointQuestion => {
  const q = shotList.clips[video - 1]?.checkpoint[index]
  if (!q) throw new Error(`shot list has no question ${index} for clip ${video}`)
  return q
}

export const LESSON: LessonSpec = {
  key: 'mcat-fl1',
  topicSlug: 'mcat-physics-mechanics-fluids-mcat',
  courseSlug: 'mcat-prep',
  title: 'Fluids Part 1: Density & Pressure',
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
        { id: '02-fluids', title: 'What a fluid is, and how it pushes', role: 'teach' },
        { id: '03-density', title: 'Density: mass per unit volume', role: 'teach', questions: [plan(1, 0)] },
        { id: '04-water', title: 'Water is the anchor: 1 g/cm³ = 1000 kg/m³', role: 'teach', questions: [RECAP[1][0]] },
        { id: '05-mass-weight', title: 'From density to mass and weight', role: 'teach' },
        { id: '06-incompressible', title: 'Liquids keep their density; gases do not', role: 'teach', questions: [plan(1, 1)] },
        // MCAT-only section
        { id: '07-specific-gravity', title: 'Specific gravity: density compared with water', role: 'teach', questions: [plan(1, 2)] },
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
              question: 'Example 1. A metal cylinder has a mass of 540 g and a volume of 200 cm³. Use g = 10 m/s².',
              parts: [
                { label: 'a', prompt: 'Its density, in grams per cubic centimeter', answer: 2.7, unit: 'g/cm³', expected: '2.7 g/cm³' },
                { label: 'a', prompt: 'Its density, in kilograms per cubic meter', answer: 2700, unit: 'kg/m³', expected: '2700 kg/m³' },
                { label: 'b', prompt: 'The mass of a 0.050 m³ block of the same metal', answer: 135, unit: 'kg', expected: '135 kg' },
                { label: 'c', prompt: 'The weight of that block', answer: 1350, unit: 'N', expected: '1350 N' },
              ],
              explanation:
                '(a) Density is mass over volume, in the units given: 540 g / 200 cm³ = 2.7 g/cm³, and multiplying by 1000 gives 2700 kg/m³. Flipping the ratio, 200/540 = 0.37, is a common trap: mass goes on top. (b) m = ρV with matching units. The block is in cubic meters, so use kg/m³: (2700)(0.050) = 135 kg. Using 2.7 here mixes g/cm³ with m³. (c) W = mg = (135)(10) = 1350 N. Stopping at 135 kg answers a different question.',
            },
          ],
        },
        { id: '03-ex1-solution', title: 'Example 1: the solution', role: 'solution' },
        // MCAT-only: Example 2 (problem and solution)
        {
          id: '04-ex2-problem',
          title: 'Example 2: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              question: 'Example 2. A bottle holds 2.0 L of an oil with a specific gravity of 0.90. Mercury has a specific gravity of 13.6.',
              parts: [
                { label: 'a', prompt: 'The oil’s density, in grams per cubic centimeter', answer: 0.9, unit: 'g/cm³', expected: '0.90 g/cm³' },
                { label: 'a', prompt: 'The oil’s density, in kilograms per cubic meter', answer: 900, unit: 'kg/m³', expected: '900 kg/m³' },
                { label: 'b', prompt: 'The mass of the oil, in kilograms', answer: 1.8, unit: 'kg', expected: '1.8 kg (1800 g)' },
                { label: 'c', prompt: 'About what volume of mercury has that same mass, in cubic centimeters', answer: 132, unit: 'cm³', tolerance: 0.08, expected: 'about 130 cm³' },
              ],
              explanation:
                '(a) Water is 1 g/cm³, so a specific gravity is the density in g/cm³: 0.90 g/cm³, and × 1000 gives 900 kg/m³. (b) Match the units first: 2.0 L = 2000 cm³. Then m = ρV = (0.90)(2000) = 1800 g = 1.8 kg. Dividing 2000 by 0.90 divides by the specific gravity, and (900)(2.0) mixes kg/m³ with liters. (c) Mercury is 13.6 g/cm³, so V = m/ρ = 1800/13.6 ≈ 130 cm³, about one-fifteenth of the oil’s volume, because mercury is about fifteen times denser.',
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
        { id: '02-pressure', title: 'Pressure: force per unit area', role: 'teach', questions: [plan(3, 0)] },
        { id: '03-all-directions', title: 'Pressure pushes equally in every direction', role: 'teach' },
        { id: '04-why-depth', title: 'Why pressure grows with depth: P = P₀ + ρgh', role: 'teach', questions: [RECAP[3][0]] },
        { id: '05-depth-not-shape', title: 'Depth, not shape', role: 'teach' },
        { id: '06-linear-graph', title: 'A straight line that starts at P₀', role: 'teach', questions: [plan(3, 2)] },
        { id: '07-rule-of-thumb', title: 'About one atmosphere for every 10 m of water', role: 'teach' },
        { id: '08-recap', title: 'Remember', role: 'teach', questions: [plan(3, 1), RECAP[3][1], RECAP[3][2]] },
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
              question: 'Example 1. An outdoor swimming pool is 3.0 m deep. Use ρ = 1000 kg/m³ for water, g = 10 m/s² and P₀ = 1.0 × 10⁵ Pa for the atmosphere.',
              parts: [
                { label: 'a', prompt: 'The pressure the water adds at the bottom', answer: 3.0e4, unit: 'Pa', expected: '3.0 × 10⁴ Pa' },
                { label: 'b', prompt: 'The total pressure at the bottom', answer: 1.3e5, unit: 'Pa', expected: '1.3 × 10⁵ Pa' },
                { label: 'c', prompt: 'The total force pushing down on the top face of a 0.020 m² drain cover on the floor', answer: 2600, unit: 'N', expected: '2600 N' },
                { label: 'd', prompt: 'The depth of a lake whose bottom is at double the surface pressure', answer: 10, unit: 'm', expected: '10 m' },
              ],
              explanation:
                '(a) The water alone adds ρgh = (1000)(10)(3.0) = 3.0 × 10⁴ Pa. Leaving out g is a common trap. (b) For the total, add the atmosphere with the same power of ten: 1.0 × 10⁵ + 0.3 × 10⁵ = 1.3 × 10⁵ Pa. (c) F = PA with the total pressure: (1.3 × 10⁵)(0.020) = 2600 N. Dividing by the area is the trap. (d) Double the surface pressure is 2P₀, so the water must add one more P₀: ρgh = P₀, and h = (1.0 × 10⁵)/((1000)(10)) = 10 m.',
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
              question: 'Example 2. A diver in a freshwater lake swims from a depth of 15 m down to 30 m. Use ρ = 1000 kg/m³, g = 10 m/s² and P₀ = 1.0 × 10⁵ Pa.',
              parts: [
                { label: 'a', prompt: 'The total pressure at 15 m', answer: 2.5e5, unit: 'Pa', expected: '2.5 × 10⁵ Pa' },
                { label: 'b', prompt: 'The total pressure at 30 m', answer: 4.0e5, unit: 'Pa', expected: '4.0 × 10⁵ Pa' },
                { label: 'c', prompt: 'The factor by which the total pressure grew', answer: 1.6, unit: '×', expected: '1.6 times' },
                { label: 'd', prompt: 'How much more force the water puts on her 0.010 m² faceplate at 30 m than at 15 m', answer: 1500, unit: 'N', expected: '1500 N' },
              ],
              explanation:
                '(a) P = P₀ + ρgh = 1.0 × 10⁵ + (1000)(10)(15) = 2.5 × 10⁵ Pa. Check: 15 m of water is 1.5 atm, plus 1 atm for the air. (b) At 30 m: 1.0 × 10⁵ + 3.0 × 10⁵ = 4.0 × 10⁵ Pa. (c) 4.0/2.5 = 1.6, not 2. The depth doubled and so did ρgh, but P₀ did not. (d) P₀ is in both totals, so it cancels: ΔP = ρgΔh = (1000)(10)(15) = 1.5 × 10⁵ Pa, and the extra force is ΔP·A = (1.5 × 10⁵)(0.010) = 1500 N.',
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
        { id: '02-gauge-absolute', title: 'Gauge pressure and absolute pressure', role: 'teach', questions: [plan(5, 0)] },
        { id: '03-units', title: 'Pascals, atmospheres and millimeters of mercury', role: 'teach' },
        { id: '04-barometer', title: 'The barometer reads absolute pressure', role: 'teach', questions: [plan(5, 1)] },
        { id: '05-manometer', title: 'The open-tube manometer reads gauge pressure', role: 'teach', questions: [RECAP[5][0]] },
        // MCAT-only sections
        { id: '06-blood-pressure', title: 'Blood pressure is a gauge pressure', role: 'teach' },
        { id: '07-blood-height', title: 'Blood pressure changes with height', role: 'teach', questions: [plan(5, 2)] },
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
              figure: FIG.v6_ex1,
              question: 'Example 1, part (a). A gas tank is connected to one arm of an open-tube manometer filled with mercury. The mercury in the open arm stands 0.20 m higher than the mercury in the arm connected to the tank. Is the gas above or below atmospheric pressure, and why?',
              options: [
                'Below atmospheric: the liquid stands higher where the pressure is higher',
                'Above atmospheric: the gas has pushed the mercury down on its own side',
                'Below atmospheric: the open arm holds more mercury than the gas arm',
                'At atmospheric: the open arm always shows the pressure of the air',
              ],
              correctAnswer: 1,
              explanation:
                'Let the gas push: the mercury goes down on the gas side and up the open arm, so the gas is above atmospheric pressure. The common trap is reading the manometer backwards. The liquid stands LOWER on the higher-pressure side, the amount of mercury in an arm does not set the pressure, and the gas would be at atmospheric pressure only if the two surfaces were level.',
            },
            {
              kind: 'numeric',
              figure: FIG.v6_ex1,
              question: 'Example 1, parts (b) to (d). Mercury has ρ = 13,600 kg/m³. Use g = 10 m/s² and P_atm = 1.0 × 10⁵ Pa.',
              parts: [
                { label: 'b', prompt: 'The gauge pressure of the gas', answer: 2.72e4, unit: 'Pa', expected: '2.72 × 10⁴ Pa' },
                { label: 'c', prompt: 'The absolute pressure of the gas', answer: 1.27e5, unit: 'Pa', expected: 'about 1.27 × 10⁵ Pa' },
                { label: 'd', prompt: 'The height difference if the manometer held water (ρ = 1000 kg/m³) instead', answer: 2.72, unit: 'm', expected: '2.72 m' },
              ],
              explanation:
                '(b) The height difference gives the gauge pressure: ρgΔh = (13,600)(10)(0.20) = 2.72 × 10⁴ Pa. (c) The gas is above atmospheric, so add: 1.0 × 10⁵ + 0.272 × 10⁵ ≈ 1.27 × 10⁵ Pa. Subtracting is for an open arm that stands lower, and stopping at the gauge pressure answers part (b) again. (d) Same gauge pressure, new liquid: Δh = (2.72 × 10⁴)/((1000)(10)) = 2.72 m. Water is 13.6 times less dense, so its column is 13.6 times taller; dividing by 13.6 is the trap.',
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
              question: 'Example 2. A bag of saline (ρ = 1000 kg/m³) hangs so that the fluid surface in the bag is 1.0 m above the needle in a patient’s arm. Use g = 10 m/s² and 1 mmHg ≈ 133 Pa. The line is clamped and the fluid is at rest.',
              parts: [
                { label: 'a', prompt: 'The gauge pressure at the needle, in pascals', answer: 1.0e4, unit: 'Pa', expected: '1.0 × 10⁴ Pa' },
                { label: 'b', prompt: 'That pressure in millimeters of mercury', answer: 75, unit: 'mmHg', expected: 'about 75 mmHg' },
              ],
              explanation:
                '(a) The fluid is at rest, so the gauge pressure at the needle is ρgh, with h the height of the fluid surface above the needle: (1000)(10)(1.0) = 1.0 × 10⁴ Pa. (b) Convert at the end: pascals divided by 133 gives millimeters of mercury, (1.0 × 10⁴)/133 ≈ 75 mmHg.',
            },
            {
              figure: FIG.v6_ex2,
              question: 'Example 2, parts (c) and (d). The gauge pressure inside the vein is about 1300 Pa. Which way does fluid flow when the clamp opens, and would a wider or fuller bag at the same height change the pressure at the needle?',
              options: [
                'Out of the vein, and a wider or fuller bag changes nothing',
                'Into the vein, and a wider or fuller bag raises the pressure',
                'Into the vein, and a wider or fuller bag changes nothing',
                'Out of the vein, and a wider or fuller bag raises the pressure',
              ],
              correctAnswer: 2,
              explanation:
                'Compare the two gauge pressures: 1.0 × 10⁴ Pa at the needle and 1300 Pa in the vein. Fluid flows from higher pressure to lower, so saline flows into the vein. The gauge pressure at the needle is ρgh, and only the height enters it, so a wider or fuller bag at the same height changes nothing. Thinking a bigger bag raises the pressure is a common trap.',
            },
            {
              kind: 'numeric',
              figure: FIG.v6_ex2,
              question: 'Example 2, part (d). The bag is lowered while the vein stays at a gauge pressure of 1300 Pa.',
              parts: [{ label: 'd', prompt: 'The lowest height of the fluid surface above the needle that still pushes saline into the vein', answer: 0.13, unit: 'm', expected: '0.13 m' }],
              explanation:
                'Set ρgh equal to the vein’s 1300 Pa: h = 1300/((1000)(10)) = 0.13 m. At that height the two pressures match and the flow stops; any lower, and blood backs up into the line.',
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
        { id: '02-principle', title: 'Pascal’s principle', role: 'teach', questions: [plan(7, 2)] },
        { id: '03-lift-force', title: 'The hydraulic lift multiplies force', role: 'teach' },
        { id: '04-distance', title: 'The price is paid in distance', role: 'teach', questions: [plan(7, 0)] },
        { id: '05-work', title: 'Work in equals work out', role: 'teach' },
        { id: '06-diameter', title: 'Given a diameter, square the ratio', role: 'teach', questions: [plan(7, 1)] },
        { id: '07-depth', title: 'Pascal’s principle and ρgh together', role: 'teach' },
        { id: '08-recap', title: 'Remember', role: 'teach', questions: RECAP[7] },
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
              question: 'Example 1. A hydraulic lift has an input piston of area 0.020 m² and an output piston of area 0.50 m². A worker pushes down on the input piston with 400 N.',
              parts: [
                { label: 'a', prompt: 'The pressure the worker creates in the fluid', answer: 2.0e4, unit: 'Pa', expected: '2.0 × 10⁴ Pa' },
                { label: 'b', prompt: 'The force the fluid exerts on the output piston', answer: 10000, unit: 'N', expected: '10,000 N' },
                { label: 'c', prompt: 'How far the input piston must move to raise the load 0.10 m', answer: 2.5, unit: 'm', expected: '2.5 m' },
                { label: 'd', prompt: 'The work that goes in (the same amount comes out)', answer: 1000, unit: 'J', expected: '1000 J in and 1000 J out' },
              ],
              explanation:
                '(a) Pressure first: P = F₁/A₁ = 400/0.020 = 2.0 × 10⁴ Pa, and it reaches every part of the fluid. (b) The same pressure acts on the output piston: F₂ = PA₂ = (2.0 × 10⁴)(0.50) = 10,000 N, 25 times the input force because the area ratio is 25. Carrying the 400 N across is the trap: pressure is shared, not force. (c) A₁d₁ = A₂d₂, so d₁ = (0.10)(25) = 2.5 m. Dividing by 25 is the trap; the small-force side travels far. (d) In: (400)(2.5) = 1000 J. Out: (10,000)(0.10) = 1000 J. A lift multiplies force, never work.',
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
              question: 'Example 2. The output piston of a hydraulic jack has 4 times the DIAMETER of its input piston. The jack holds up an 800 kg engine. Use g = 10 m/s².',
              parts: [
                { label: 'a', prompt: 'The ratio of the piston areas, output to input', answer: 16, unit: '×', expected: '16' },
                { label: 'b', prompt: 'The input force that holds the engine up', answer: 500, unit: 'N', expected: '500 N' },
                { label: 'c', prompt: 'How far the engine rises when the input piston is pumped through a total of 0.80 m', answer: 0.05, unit: 'm', expected: '0.050 m' },
                { label: 'd', prompt: 'Check: the work in (it should equal the work out)', answer: 400, unit: 'J', expected: '400 J in and 400 J out' },
              ],
              explanation:
                '(a) A circle’s area goes as its diameter squared, so 4 times the diameter is 4² = 16 times the area. Using 4 as the area ratio is the trap. (b) The engine weighs mg = (800)(10) = 8000 N, and the input piston needs one sixteenth of that: 8000/16 = 500 N. Dividing 800 by 16 treats a mass as a force. (c) The same volume moves on each side, so the wide piston moves one sixteenth as far: 0.80/16 = 0.050 m. (d) In: (500)(0.80) = 400 J. Out: (8000)(0.050) = 400 J. They match.',
            },
          ],
        },
        { id: '05-ex2-solution', title: 'Example 2: the solution', role: 'solution' },
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(8, 0), plan(8, 1), plan(8, 2)] },
      ],
    },
  ],
}
